#![allow(unused_variables)]

mod runtime;

use moon_config::{
    DependencyConfig, PlatformType, ProjectConfig, ProjectsAliasesMap, ProjectsSourcesMap,
    TasksConfigsMap, WorkspaceConfig,
};
use moon_error::MoonError;
pub use runtime::{Runtime, Version};
use rustc_hash::FxHashMap;
use std::collections::BTreeMap;
use std::fmt::Debug;
use std::path::Path;

pub trait Platform: Debug + Send + Sync {
    /// Return the type of platform.
    fn get_type(&self) -> PlatformType;

    /// Return a runtime with an appropriate version based on the provided configs.
    fn get_runtime_from_config(
        &self,
        project_config: Option<&ProjectConfig>,
        workspace_config: &WorkspaceConfig,
    ) -> Option<Runtime>;

    /// Determine if the provided project is within the platform's package manager
    /// workspace (not to be confused with moon's workspace).
    fn is_project_in_package_manager_workspace(
        &self,
        project_id: &str,
        project_root: &Path,
        workspace_root: &Path,
        workspace_config: &WorkspaceConfig,
    ) -> Result<bool, MoonError> {
        Ok(true)
    }

    /// During project graph creation, load project aliases for the resolved
    /// map of projects that are unique to the platform's ecosystem.
    fn load_project_graph_aliases(
        &mut self,
        workspace_root: &Path,
        workspace_config: &WorkspaceConfig,
        projects_map: &ProjectsSourcesMap,
        aliases_map: &mut ProjectsAliasesMap,
    ) -> Result<(), MoonError> {
        Ok(())
    }

    /// During project creation (when being lazy loaded and instantiated in the graph),
    /// scan for any implicit project dependency relations using the platforms manifest.
    fn load_project_implicit_dependencies(
        &self,
        project_id: &str,
        project_root: &Path,
        project_config: &ProjectConfig,
        aliases_map: &ProjectsAliasesMap,
    ) -> Result<Vec<DependencyConfig>, MoonError> {
        Ok(vec![])
    }

    /// During project creation (when being lazy loaded and instantiated in the graph),
    /// load and infer any *additional* tasks for the platform.
    fn load_project_tasks(
        &self,
        project_id: &str,
        project_root: &Path,
        project_config: &ProjectConfig,
        workspace_root: &Path,
        workspace_config: &WorkspaceConfig,
    ) -> Result<TasksConfigsMap, MoonError> {
        Ok(BTreeMap::new())
    }

    /// Return true if the current platform is for the provided project or runtime.
    fn matches(&self, platform: &PlatformType, runtime: Option<&Runtime>) -> bool;
}

pub type BoxedPlatform = Box<dyn Platform>;

pub trait Platformable {
    fn register_platform(&mut self, platform: BoxedPlatform) -> Result<(), MoonError>;
}

#[derive(Debug, Default)]
pub struct PlatformManager {
    cache: FxHashMap<PlatformType, BoxedPlatform>,
}

impl PlatformManager {
    pub fn get(&self, type_of: &PlatformType) -> Option<&BoxedPlatform> {
        self.cache.get(type_of)
    }

    pub fn list(&self) -> std::collections::hash_map::Values<PlatformType, BoxedPlatform> {
        self.cache.values()
    }

    pub fn register(&mut self, type_of: PlatformType, platform: BoxedPlatform) {
        self.cache.insert(type_of, platform);
    }
}
