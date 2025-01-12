use moon_cache::{is_readable, is_writable};
use moon_emitter::{Event, EventFlow, Subscriber};
use moon_error::MoonError;
use moon_logger::warn;
use moon_workspace::Workspace;
use moonbase::{upload_artifact, MoonbaseError};
use rustc_hash::FxHashSet;
use tokio::task::JoinHandle;

const LOG_TARGET: &str = "moonbase:remote-cache";

// We don't want errors to bubble up and crash the program,
// so instead, we log the error (as a warning) to the console!
fn handle_error(error: MoonbaseError) {
    warn!(target: LOG_TARGET, "{}", error.to_string());
}

pub struct MoonbaseCacheSubscriber {
    hash_exists: FxHashSet<String>,
    requests: Vec<JoinHandle<()>>,
}

impl MoonbaseCacheSubscriber {
    pub fn new() -> Self {
        MoonbaseCacheSubscriber {
            hash_exists: FxHashSet::default(),
            requests: vec![],
        }
    }
}

#[async_trait::async_trait]
impl Subscriber for MoonbaseCacheSubscriber {
    async fn on_emit<'a>(
        &mut self,
        event: &Event<'a>,
        workspace: &Workspace,
    ) -> Result<EventFlow, MoonError> {
        let Some(moonbase) = &workspace.session else {
            return Ok(EventFlow::Continue);
        };

        match event {
            // Check if archive exists in moonbase (the remote) by querying the artifacts endpoint.
            Event::TargetOutputCacheCheck { hash, .. } => {
                if is_readable() {
                    match moonbase.get_artifact(hash).await {
                        Ok(Some(artifact)) => {
                            self.hash_exists.insert(artifact.hash);

                            return Ok(EventFlow::Return("remote-cache".into()));
                        }
                        Ok(None) => {
                            // Not remote cached
                        }
                        Err(error) => {
                            handle_error(error);

                            // Fallthrough to check local cache
                        }
                    }
                }
            }

            // The local cache subscriber uses the `TargetOutputArchiving` event to create
            // the tarball. This runs *after* it's been created so that we can upload it.
            Event::TargetOutputArchived {
                archive_path,
                hash,
                target,
                ..
            } => {
                if is_writable() && archive_path.exists() {
                    let auth_token = moonbase.auth_token.to_owned();
                    let repo_id = moonbase.repository_id;
                    let hash = (*hash).to_owned();
                    let target = (*target).to_owned();
                    let archive_path = archive_path.to_owned();

                    // Run this in the background so we don't slow down the runner
                    // while waiting for very large archives to upload.
                    self.requests.push(tokio::spawn(async move {
                        if let Err(error) =
                            upload_artifact(auth_token, repo_id, hash, target, archive_path).await
                        {
                            handle_error(error);
                        }
                    }));
                }
            }

            // Attempt to download the artifact from the remote cache to `.moon/outputs/<hash>`.
            // This runs *before* the local cache. So if the download is successful, abort
            // the event flow, otherwise continue and let local cache attempt to hydrate.
            Event::TargetOutputHydrating { hash, .. } => {
                if is_readable() && self.hash_exists.contains(*hash) {
                    let archive_file = workspace.cache.get_hash_archive_path(hash);

                    if let Err(error) = moonbase.download_artifact(hash, &archive_file).await {
                        handle_error(error);
                    }

                    // Fallthrough to local cache to handle the actual hydration
                }
            }

            _ => {}
        }

        // For the last event, we want to ensure that all uploads have been completed!
        if event.is_end() {
            for future in self.requests.drain(0..) {
                let _ = future.await;
            }
        }

        Ok(EventFlow::Continue)
    }
}
