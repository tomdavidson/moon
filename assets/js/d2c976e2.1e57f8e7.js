"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8095],{5318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8460:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var r=n(5773),a=n(808),o=(n(7378),n(5318)),l=["components"],p={title:"dep-graph"},i=void 0,c={unversionedId:"commands/dep-graph",id:"commands/dep-graph",title:"dep-graph",description:"The moon dep-graph [target] (or moon dg) command will generate a dependency graph of all",source:"@site/docs/commands/dep-graph.mdx",sourceDirName:"commands",slug:"/commands/dep-graph",permalink:"/docs/commands/dep-graph",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/commands/dep-graph.mdx",tags:[],version:"current",frontMatter:{title:"dep-graph"},sidebar:"docs",previous:{title:"ci",permalink:"/docs/commands/ci"},next:{title:"init",permalink:"/docs/commands/init"}},u={},s=[{value:"Arguments",id:"arguments",level:3},{value:"Example output",id:"example-output",level:2}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"moon dep-graph [target]")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"moon dg"),") command will generate a dependency graph of all\nactions, targets, and tasks within the workspace, and will output the graph in\n",(0,o.kt)("a",{parentName:"p",href:"https://graphviz.org/doc/info/lang.html"},"Graphviz DOT format"),". This output can then be used by any\ntool or program that supports DOT, for example, this\n",(0,o.kt)("a",{parentName:"p",href:"https://dreampuf.github.io/GraphvizOnline"},"live preview visualizer"),"."),(0,o.kt)("p",null,"In the future we aim to replace this with an interactive visualizer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon dep-graph > graph.dot\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A target can be passed to focus the graph, including dependencies ",(0,o.kt)("em",{parentName:"p"},"and")," dependents. For example,\n",(0,o.kt)("inlineCode",{parentName:"p"},"moon dep-graph app:build"),".")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[target]")," - Optional target to focus.")),(0,o.kt)("h2",{id:"example-output"},"Example output"),(0,o.kt)("p",null,"The following output is an example of the graph in DOT format."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dot"},'digraph {\n    0 [ label="SetupToolchain" style=filled, shape=oval, fillcolor=black, fontcolor=white]\n    1 [ label="InstallNodeDeps" style=filled, shape=oval, fillcolor=gray, fontcolor=black]\n    2 [ label="SyncNodeProject(node)" style=filled, shape=oval, fillcolor=gray, fontcolor=black]\n    3 [ label="RunTarget(node:standard)" style=filled, shape=oval, fillcolor=gray, fontcolor=black]\n    1 -> 0 [ arrowhead=box, arrowtail=box]\n    2 -> 0 [ arrowhead=box, arrowtail=box]\n    3 -> 1 [ arrowhead=box, arrowtail=box]\n    3 -> 2 [ arrowhead=box, arrowtail=box]\n}\n')))}m.isMDXComponent=!0}}]);