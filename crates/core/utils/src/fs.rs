use async_recursion::async_recursion;
use futures::future::try_join_all;
use moon_error::{map_io_to_fs_error, MoonError};
use std::path::{Path, PathBuf};
use std::time::{Duration, SystemTime};
use tokio::fs;

#[inline]
pub async fn copy_file<S: AsRef<Path>, D: AsRef<Path>>(from: S, to: D) -> Result<(), MoonError> {
    let from = from.as_ref();
    let to = to.as_ref();
    let to_dir = to.parent().unwrap();

    create_dir_all(to_dir).await?;

    fs::copy(from, to)
        .await
        .map_err(|e| map_io_to_fs_error(e, from.to_path_buf()))?;

    Ok(())
}

#[async_recursion]
pub async fn copy_dir_all<T: AsRef<Path> + Send>(
    from_root: T,
    from: T,
    to_root: T,
) -> Result<(), MoonError> {
    let from_root = from_root.as_ref();
    let from = from.as_ref();
    let to_root = to_root.as_ref();
    let entries = read_dir(from).await?;
    let mut files = vec![];
    let mut dirs = vec![];

    for entry in entries {
        let path = entry.path();

        if path.is_file() {
            files.push(copy_file(
                path.to_owned(),
                to_root.join(path.strip_prefix(from_root).unwrap()),
            ));
        } else {
            dirs.push(path);
        }
    }

    // Copy files before dirs incase an error occurs
    try_join_all(files).await?;

    // Copy dirs in sequence for the same reason
    for dir in dirs {
        copy_dir_all(from_root, &dir, to_root).await?;
    }

    Ok(())
}

#[inline]
pub async fn create_dir_all<T: AsRef<Path>>(path: T) -> Result<(), MoonError> {
    let path = path.as_ref();

    if !path.exists() {
        fs::create_dir_all(&path)
            .await
            .map_err(|e| map_io_to_fs_error(e, path.to_path_buf()))?;
    }

    Ok(())
}

#[inline]
pub fn find_upwards<F, P>(name: F, dir: P) -> Option<PathBuf>
where
    F: AsRef<str>,
    P: AsRef<Path>,
{
    let dir = dir.as_ref();
    let findable = dir.join(name.as_ref());

    if findable.exists() {
        return Some(findable);
    }

    match dir.parent() {
        Some(parent_dir) => find_upwards(name, parent_dir),
        None => None,
    }
}

#[inline]
pub async fn metadata<T: AsRef<Path>>(path: T) -> Result<std::fs::Metadata, MoonError> {
    let path = path.as_ref();

    fs::metadata(path)
        .await
        .map_err(|e| map_io_to_fs_error(e, path.to_path_buf()))
}

#[inline]
pub async fn read_dir<T: AsRef<Path>>(path: T) -> Result<Vec<fs::DirEntry>, MoonError> {
    let path = path.as_ref();
    let handle_error = |e| map_io_to_fs_error(e, path.to_path_buf());

    let mut entries = fs::read_dir(path).await.map_err(handle_error)?;
    let mut results = vec![];

    while let Some(entry) = entries.next_entry().await.map_err(handle_error)? {
        results.push(entry);
    }

    Ok(results)
}

#[async_recursion]
pub async fn read_dir_all<T: AsRef<Path> + Send>(path: T) -> Result<Vec<fs::DirEntry>, MoonError> {
    let path = path.as_ref();
    let handle_error = |e| map_io_to_fs_error(e, path.to_path_buf());

    let mut entries = fs::read_dir(path).await.map_err(handle_error)?;
    let mut results = vec![];

    while let Some(entry) = entries.next_entry().await.map_err(handle_error)? {
        if let Ok(file_type) = entry.file_type().await {
            if file_type.is_dir() {
                results.extend(read_dir_all(&entry.path()).await?);
            } else {
                results.push(entry);
            }
        }
    }

    Ok(results)
}

#[inline]
pub async fn read<T: AsRef<Path>>(path: T) -> Result<String, MoonError> {
    let path = path.as_ref();
    let data = fs::read_to_string(path)
        .await
        .map_err(|e| map_io_to_fs_error(e, path.to_path_buf()))?;

    Ok(data)
}

#[inline]
pub async fn remove<T: AsRef<Path>>(path: T) -> Result<(), MoonError> {
    let path = path.as_ref();

    if path.is_file() {
        remove_file(path).await?;
    } else if path.is_dir() {
        remove_dir_all(path).await?;
    }

    Ok(())
}

#[inline]
pub async fn remove_file<T: AsRef<Path>>(path: T) -> Result<(), MoonError> {
    let path = path.as_ref();

    if path.exists() {
        fs::remove_file(&path)
            .await
            .map_err(|e| map_io_to_fs_error(e, path.to_path_buf()))?;
    }

    Ok(())
}

#[inline]
pub async fn remove_dir_all<T: AsRef<Path>>(path: T) -> Result<(), MoonError> {
    let path = path.as_ref();

    if path.exists() {
        fs::remove_dir_all(&path)
            .await
            .map_err(|e| map_io_to_fs_error(e, path.to_path_buf()))?;
    }

    Ok(())
}

pub type RemoveDirContentsResult = (usize, u64);

pub async fn remove_dir_stale_contents<P: AsRef<Path>>(
    dir: P,
    duration: Duration,
) -> Result<RemoveDirContentsResult, MoonError> {
    let mut files_deleted: usize = 0;
    let mut bytes_saved: u64 = 0;
    let threshold = SystemTime::now() - duration;

    for entry in read_dir(dir.as_ref()).await? {
        let path = entry.path();

        if path.is_file() {
            let mut bytes = 0;

            if let Ok(metadata) = entry.metadata().await {
                bytes = metadata.len();

                if let Ok(filetime) = metadata.accessed().or_else(|_| metadata.created()) {
                    if filetime > threshold {
                        // Not stale yet
                        continue;
                    }
                } else {
                    // Not supported in environment
                    continue;
                }
            }

            if remove_file(path).await.is_ok() {
                files_deleted += 1;
                bytes_saved += bytes;
            }
        }
    }

    Ok((files_deleted, bytes_saved))
}

#[inline]
pub async fn rename<F: AsRef<Path>, T: AsRef<Path>>(from: F, to: T) -> Result<(), MoonError> {
    let from = from.as_ref();

    fs::rename(from, to.as_ref())
        .await
        .map_err(|e| map_io_to_fs_error(e, from.to_path_buf()))?;

    Ok(())
}

#[inline]
pub async fn write<T: AsRef<Path>>(path: T, data: impl AsRef<[u8]>) -> Result<(), MoonError> {
    let path = path.as_ref();

    fs::write(path, data)
        .await
        .map_err(|e| map_io_to_fs_error(e, path.to_path_buf()))?;

    Ok(())
}

pub mod temp {
    use super::*;
    use moon_constants::CONFIG_DIRNAME;
    use std::fs; // TEMPORARILY sync

    pub fn get_dir() -> PathBuf {
        crate::get_workspace_root()
            .join(CONFIG_DIRNAME)
            .join("cache/temp")
    }

    pub fn get_file(source: &str, ext: &str) -> PathBuf {
        get_dir().join(format!("{:x}.{}", md5::compute(source), ext))
    }

    pub fn read<P: AsRef<Path>>(path: P) -> Result<Option<String>, MoonError> {
        let file = path.as_ref();

        if !file.exists() {
            return Ok(None);
        }

        // Temp files only last for 4 hours (half a workday)
        let threshold = SystemTime::now() - Duration::from_secs(60 * 60 * 4);

        if let Ok(metadata) = file.metadata() {
            if let Ok(filetime) = metadata.created() {
                if filetime > threshold {
                    fs::remove_file(file)?;

                    return Ok(None);
                }
            }
        }

        Ok(Some(fs::read_to_string(file)?))
    }

    pub fn write<P: AsRef<Path>, D: AsRef<str>>(path: P, data: D) -> Result<(), MoonError> {
        let path = path.as_ref();

        if let Some(parent) = path.parent() {
            fs::create_dir_all(parent)?;
        }

        fs::write(path, data.as_ref())?;

        Ok(())
    }
}
