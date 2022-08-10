"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7937],{5318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9511:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(5773),o=n(808),r=(n(7378),n(5318)),i=["components"],s={title:"FAQ"},l=void 0,p={unversionedId:"faq",id:"faq",title:"FAQ",description:"General",source:"@site/docs/faq.mdx",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/faq.mdx",tags:[],version:"current",frontMatter:{title:"FAQ"},sidebar:"docs",previous:{title:"Terminology",permalink:"/docs/terminology"}},c={},u=[{value:"General",id:"general",level:2},{value:"Will moon support other languages besides JavaScript?",id:"will-moon-support-other-languages-besides-javascript",level:3},{value:"What should be considered the &quot;source of truth&quot;?",id:"what-should-be-considered-the-source-of-truth",level:3},{value:"Action runner",id:"action-runner",level:2},{value:"What is <code>SetupToolchain</code>, <code>InstallNodeDeps</code>, <code>RunTarget</code>, etc?",id:"what-is-setuptoolchain-installnodedeps-runtarget-etc",level:3},{value:"Projects &amp; tasks",id:"projects--tasks",level:2},{value:"How to pipe or redirect tasks?",id:"how-to-pipe-or-redirect-tasks",level:3},{value:"How to run multiple commands within a task?",id:"how-to-run-multiple-commands-within-a-task",level:3},{value:"JavaScript ecosystem",id:"javascript-ecosystem",level:2},{value:"Can we use <code>package.json</code> scripts?",id:"can-we-use-packagejson-scripts",level:3},{value:"Can moon version/publish packages?",id:"can-moon-versionpublish-packages",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"general"},"General"),(0,r.kt)("h3",{id:"will-moon-support-other-languages-besides-javascript"},"Will moon support other languages besides JavaScript?"),(0,r.kt)("p",null,"Yes! Although we're focusing right now on JavaScript (and TypeScript, Node.js), we've designed moon\nto be language agnostic and easily pluggable in the future."),(0,r.kt)("p",null,"If we're to guess which language would be next, it would most likely be Ruby to support React Native\nbased applications."),(0,r.kt)("h3",{id:"what-should-be-considered-the-source-of-truth"},'What should be considered the "source of truth"?'),(0,r.kt)("p",null,"If you're a frontend developer, you'll assume that a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," is the source of truth for a\nproject, as it defines scripts, dependencies, and repo-local relations. While true, this breaks down\nwith additional tooling, like TypeScript project references, as now you must maintain\n",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," as well as ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),". The risk of these falling out of sync is high."),(0,r.kt)("p",null,"This problem is further exacerbated by more tooling, or additional programming languages. What if\nyour frontend project is dependent on a backend project? This isn't easily modeled in\n",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),". What if the backend project needs to be built and ran before running the frontend\nproject? Again, while not impossible, it's quite cumbersome to model in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," scripts. So\non and so forth."),(0,r.kt)("p",null,"moon aims to solve this with a different approach, by standardizing all projects in the workspace on\n",(0,r.kt)("a",{parentName:"p",href:"./config/project"},(0,r.kt)("inlineCode",{parentName:"a"},"moon.yml")),". With this, the ",(0,r.kt)("inlineCode",{parentName:"p"},"moon.yml")," is the source of truth for each project,\nand provides us with the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The configuration is language agnostic. All projects are configured in a similar manner."),(0,r.kt)("li",{parentName:"ul"},"Tasks can reference other tasks easily. For example, npm scripts referencing rake tasks, and vice\nverse, is a non-ideal experience."),(0,r.kt)("li",{parentName:"ul"},"Dependencies defined with ",(0,r.kt)("a",{parentName:"li",href:"./config/project#dependson"},(0,r.kt)("inlineCode",{parentName:"a"},"dependsOn"))," use moon project names, and\nnot language specific semantics. This field also easily populates the dependency/project graphs."),(0,r.kt)("li",{parentName:"ul"},"For JavaScript projects:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," dependencies (via ",(0,r.kt)("inlineCode",{parentName:"li"},"dependsOn"),") are kept in sync when\n",(0,r.kt)("a",{parentName:"li",href:"./config/workspace#syncprojectworkspacedependencies"},(0,r.kt)("inlineCode",{parentName:"a"},"node.syncProjectWorkspaceDependencies")),"\nis enabled."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," project references (via ",(0,r.kt)("inlineCode",{parentName:"li"},"dependsOn"),") are kept in sync when\n",(0,r.kt)("a",{parentName:"li",href:"./config/workspace#syncprojectreferences"},(0,r.kt)("inlineCode",{parentName:"a"},"typescript.syncProjectReferences"))," is enabled.")))),(0,r.kt)("p",null,"By using moon as the source of truth, we can ensure a healthy repository, by accurately keeping\neverything in sync, and modifying project/language configuration to operate effectively."),(0,r.kt)("h2",{id:"action-runner"},"Action runner"),(0,r.kt)("h3",{id:"what-is-setuptoolchain-installnodedeps-runtarget-etc"},"What is ",(0,r.kt)("inlineCode",{parentName:"h3"},"SetupToolchain"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"InstallNodeDeps"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"RunTarget"),", etc?"),(0,r.kt)("p",null,"When we run a ",(0,r.kt)("a",{parentName:"p",href:"./concepts/task"},"task"),", we generate a dependency graph of nodes, known as actions.\nThese labels are the actions in the graph, and break down as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SetupToolchain")," - Sets up the ",(0,r.kt)("a",{parentName:"li",href:"./concepts/toolchain"},"toolchain"),". Required for all other actions,\nso acts as the root node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"InstallNodeDeps")," - Installs Node.js dependencies (",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules"),") in the workspace root."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"InstallSystemDeps")," - Currently a no operation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SyncNodeProject")," - When a project's ",(0,r.kt)("a",{parentName:"li",href:"./config/project#language"},(0,r.kt)("inlineCode",{parentName:"a"},"language")),' is "javascript" or\n"typescript". Will sync ',(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," dependencies and ",(0,r.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," project references."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SyncSystemProject")," - Currently a no operation. Is created when a project's\n",(0,r.kt)("a",{parentName:"li",href:"./config/project#language"},(0,r.kt)("inlineCode",{parentName:"a"},"language"))," does not require syncing."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RunTarget")," - The common action. This runs the target task within a project.")),(0,r.kt)("h2",{id:"projects--tasks"},"Projects & tasks"),(0,r.kt)("h3",{id:"how-to-pipe-or-redirect-tasks"},"How to pipe or redirect tasks?"),(0,r.kt)("p",null,"Piping (",(0,r.kt)("inlineCode",{parentName:"p"},"|"),") or redirecting (",(0,r.kt)("inlineCode",{parentName:"p"},">"),") the output of a task (maybe to another task), whether via stdin or\nthrough ",(0,r.kt)("inlineCode",{parentName:"p"},"inputs"),", is currently not possible. However, you ",(0,r.kt)("em",{parentName:"p"},"could")," execute a custom bash script that\nhandles this for you, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="scripts/pipe.sh"',title:'"scripts/pipe.sh"'},"#!/usr/bin/env bash\nmoon project foo --json | jq ...\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"tasks:\n    pipe:\n        command: 'bash'\n        args: './scripts/pipe.sh'\n        type: 'system'\n")),(0,r.kt)("h3",{id:"how-to-run-multiple-commands-within-a-task"},"How to run multiple commands within a task?"),(0,r.kt)("p",null,"A task in moon is a single command, representing its inputs and outputs, and as such, cannot run\nmultiple commands with ",(0,r.kt)("inlineCode",{parentName:"p"},"&&")," within a single task declaration. However, we do suggest the following\nalternatives:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a task for each command, and link them as dependencies with\n",(0,r.kt)("a",{parentName:"li",href:"./config/project#deps"},(0,r.kt)("inlineCode",{parentName:"a"},"deps")),". This allows for each command to be incrementally cached (when\nenabled)."),(0,r.kt)("li",{parentName:"ul"},"Wrap all commands in an external file, and execute that file instead. Refer to the\n",(0,r.kt)("a",{parentName:"li",href:"#how-to-pipe-or-redirect-tasks"},"piping question")," above for an example.")),(0,r.kt)("h2",{id:"javascript-ecosystem"},"JavaScript ecosystem"),(0,r.kt)("h3",{id:"can-we-use-packagejson-scripts"},"Can we use ",(0,r.kt)("inlineCode",{parentName:"h3"},"package.json")," scripts?"),(0,r.kt)("p",null,"We encourage everyone to define tasks in a ",(0,r.kt)("a",{parentName:"p",href:"./config/project#tasks"},(0,r.kt)("inlineCode",{parentName:"a"},"moon.yml"))," file, as it allows\nfor additional metadata like ",(0,r.kt)("inlineCode",{parentName:"p"},"inputs"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"outputs"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),", and more. However, if you'd like to\nkeep using ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," scripts, enable the\n",(0,r.kt)("a",{parentName:"p",href:"./config/workspace#infertasksfromscripts"},(0,r.kt)("inlineCode",{parentName:"a"},"node.inferTasksFromScripts"))," setting."),(0,r.kt)("p",null,"View the ",(0,r.kt)("a",{parentName:"p",href:"./migrate-to-moon"},"official documentation")," for more information on this approach,\nincluding risks, disadvantages, and caveats."),(0,r.kt)("h3",{id:"can-moon-versionpublish-packages"},"Can moon version/publish packages?"),(0,r.kt)("p",null,"At this time, no, as we're focusing on the build and test aspect of development. With that being\nsaid, this is something we'd like to support first-class in the future, but until then, we suggest\nthe following popular tools:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://yarnpkg.com/features/release-workflow"},"Yarn releases")," (requires >= v2)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/changesets/changesets"},"Changesets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lerna/lerna"},"Lerna"))))}m.isMDXComponent=!0}}]);