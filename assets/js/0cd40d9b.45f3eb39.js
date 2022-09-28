"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1175],{9798:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7378),l=t(8944);const r="tabItem_wHwb";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:t},n)}},3337:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(5773),l=t(7378),r=t(8944),i=t(6457),o=t(784),s=t(9947),p=t(3457);const u="tabList_J5MA",c="tabItem_l0OV";function m(e){var n,t;const{lazy:i,block:m,defaultValue:d,values:g,groupId:h,className:k}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=g?g:v.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),b=(0,o.l)(f,((e,n)=>e.value===n.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const x=null===d?d:null!=(n=null!=d?d:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?n:v[0].props.value;if(null!==x&&!f.some((e=>e.value===x)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:j}=(0,s.U)(),[N,w]=(0,l.useState)(x),E=[],{blockElementScrollPositionUntilNextRender:Z}=(0,p.o5)();if(null!=h){const e=y[h];null!=e&&e!==N&&f.some((n=>n.value===e))&&w(e)}const C=e=>{const n=e.currentTarget,t=E.indexOf(n),a=f[t].value;a!==N&&(Z(n),w(a),null!=h&&j(h,String(a)))},R=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=E.indexOf(e.currentTarget)+1;t=null!=(a=E[n])?a:E[0];break}case"ArrowLeft":{var l;const n=E.indexOf(e.currentTarget)-1;t=null!=(l=E[n])?l:E[E.length-1];break}}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},k)},f.map((e=>{let{value:n,label:t,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>E.push(e),onKeyDown:R,onFocus:C,onClick:C},i,{className:(0,r.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":N===n})}),null!=t?t:n)}))),i?(0,l.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function d(e){const n=(0,i.Z)();return l.createElement(m,(0,a.Z)({key:String(n)},e))}},6642:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(7378),l=t(4267),r=t(9798),i=t(3337);function o(e,n,t){let a=e.package?"yarn workspace "+e.package+" add ":"yarn add ";return e.dev?a+="--dev ":e.peer&&(a+="--peer "),t&&n&&!e.package&&(a+="-W "),a+=e.dep,a}function s(e,n){let t="pnpm add ";return e.dev?t+="--save-dev ":e.peer&&(t+="--save-peer "),e.package?t+="--filter "+e.package+" ":n&&(t+="-w "),t+=e.dep,t}function p(e){let n=o(e,!1,!0),t=s(e,!1);return e.package||(n+="\n\n# If using workspaces\n",t+="\n\n# If using workspaces\n",n+=o(e,!0,!0),t+=s(e,!0)),a.createElement(i.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},a.createElement(r.Z,{value:"yarn"},a.createElement(l.Z,{language:"shell"},o(e,!1,!1))),a.createElement(r.Z,{value:"yarn1"},a.createElement(l.Z,{language:"shell"},n)),a.createElement(r.Z,{value:"npm"},a.createElement(l.Z,{language:"shell"},function(e){let n="npm install ";return e.dev?n+="--save-dev ":e.peer&&(n+="--save-peer "),e.package&&(n+="--workspace "+e.package+" "),n+=e.dep,n}(e))),a.createElement(r.Z,{value:"pnpm"},a.createElement(l.Z,{language:"shell"},t)))}},7457:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(7378),l=t(4267),r=t(9798),i=t(3337);function o(e,n,t){return(e+" create "+n+" "+t.join(" ")).trim()}function s(e){let{dep:n,args:t=[]}=e;return a.createElement(i.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},a.createElement(r.Z,{value:"yarn"},a.createElement(l.Z,{language:"shell"},o("yarn",n,t))),a.createElement(r.Z,{value:"yarn1"},a.createElement(l.Z,{language:"shell"},o("yarn",n,t))),a.createElement(r.Z,{value:"npm"},a.createElement(l.Z,{language:"shell"},o("npm",n,t))),a.createElement(r.Z,{value:"pnpm"},a.createElement(l.Z,{language:"shell"},o("pnpm",n,t))))}},3488:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(5773),l=(t(7378),t(5318));t(6642),t(7457);const r={title:"Remix example",sidebar_label:"Remix"},i=void 0,o={unversionedId:"guides/examples/remix",id:"guides/examples/remix",title:"Remix example",description:"Remix has been prototyped in our",source:"@site/docs/guides/examples/remix.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/remix",permalink:"/docs/guides/examples/remix",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/examples/remix.mdx",tags:[],version:"current",frontMatter:{title:"Remix example",sidebar_label:"Remix"},sidebar:"guides",previous:{title:"React",permalink:"/docs/guides/examples/react"},next:{title:"Solid",permalink:"/docs/guides/examples/solid"}},s={},p=[{value:"Setup",id:"setup",level:2},{value:"ESLint integration",id:"eslint-integration",level:3},{value:"TypeScript integration",id:"typescript-integration",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Root-level",id:"root-level",level:3},{value:"Project-level",id:"project-level",level:3}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Remix has been prototyped in our\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/examples/tree/master/apps/remix-app"},"examples repository"),", check it\nout!")),(0,l.kt)("p",null,"In this guide, you'll learn how to integrate ",(0,l.kt)("a",{parentName:"p",href:"https://remix.run"},"Remix")," into moon."),(0,l.kt)("p",null,"Begin by creating a new Remix project at a specified folder path (this should not be created in the\nworkspace root, unless a polyrepo)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd apps && npx create-remix\n")),(0,l.kt)("p",null,'During this installation, Remix will ask a handful of questions, but be sure to answer "No" for the\n"Do you want me to run ',(0,l.kt)("inlineCode",{parentName:"p"},"npm install"),'?" question. We suggest installing dependencies at the workspace\nroot via package workspaces!'),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"View the ",(0,l.kt)("a",{parentName:"p",href:"https://remix.run/docs/en/v1"},"official Remix docs")," for a more in-depth guide to getting\nstarted!")),(0,l.kt)("h2",{id:"setup"},"Setup"),(0,l.kt)("p",null,"Since Remix is per-project, the associated moon tasks should be defined in each project's\n",(0,l.kt)("a",{parentName:"p",href:"../../config/project"},(0,l.kt)("inlineCode",{parentName:"a"},"moon.yml"))," file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"fileGroups:\n    remix:\n        - 'app/**/*'\n        - 'public/**/*'\n        - 'remix.env.d.ts'\n        - 'remix.config.*'\n\ntasks:\n    # Development server\n    dev:\n        command: 'remix dev'\n        inputs:\n            - '@group(remix)'\n        local: true\n\n    # Production build\n    build:\n        command: 'remix build'\n        inputs:\n            - '@group(remix)'\n        outputs:\n            - 'build'\n\n    # Serve the build\n    start:\n        command: 'remix-serve ./build'\n        deps:\n            - '~:build'\n        inputs:\n            - '@group(remix)'\n        local: true\n")),(0,l.kt)("h3",{id:"eslint-integration"},"ESLint integration"),(0,l.kt)("p",null,"Remix does not provide a built-in linting abstraction, and instead provides a simple ESLint\nconfiguration package,\n",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@remix-run/eslint-config"},(0,l.kt)("inlineCode",{parentName:"a"},"@remix-run/eslint-config")),". For the rest\nof this section, we're going to assume that a ",(0,l.kt)("a",{parentName:"p",href:"./eslint"},"global ",(0,l.kt)("inlineCode",{parentName:"a"},"lint")," task")," has been configured."),(0,l.kt)("p",null,"Begin be installing the ",(0,l.kt)("inlineCode",{parentName:"p"},"@remix-run/eslint-config")," dependency in the application's ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),".\nWe can then enable this configuration by creating an ",(0,l.kt)("inlineCode",{parentName:"p"},".eslintrc.js")," file in the project root. Be\nsure this file is listed in your ",(0,l.kt)("inlineCode",{parentName:"p"},"lint")," task's inputs!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<project>/.eslintrc.js"',title:'"<project>/.eslintrc.js"'},"module.exports = {\n  extends: ['@remix-run/eslint-config', '@remix-run/eslint-config/node'],\n\n  // If using TypeScript\n  parser: '@typescript-eslint/parser',\n  parserOptions: {\n    project: 'tsconfig.json',\n    tsconfigRootDir: __dirname,\n  },\n};\n")),(0,l.kt)("h3",{id:"typescript-integration"},"TypeScript integration"),(0,l.kt)("p",null,"Remix ships with TypeScript support (when enabled during installation), but the ",(0,l.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," it\ngenerates is ",(0,l.kt)("em",{parentName:"p"},"not")," setup for TypeScript project references, which we suggest using with a\n",(0,l.kt)("a",{parentName:"p",href:"./typescript"},"global ",(0,l.kt)("inlineCode",{parentName:"a"},"typecheck")," task"),"."),(0,l.kt)("p",null,"When using project references, we suggest the following ",(0,l.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),", which is a mix of Remix and\nmoon. Other compiler options, like ",(0,l.kt)("inlineCode",{parentName:"p"},"isolatedModules")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"esModuleInterop"),", should be declared in a\nshared configuration found in the workspace root (",(0,l.kt)("inlineCode",{parentName:"p"},"tsconfig.projectOptions.json")," in the example)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="<project>/tsconfig.json"',title:'"<project>/tsconfig.json"'},'{\n  "extends": "../../tsconfig.projectOptions.json",\n  "compilerOptions": {\n    "baseUrl": ".",\n    "emitDeclarationOnly": false,\n    "jsx": "react-jsx",\n    "resolveJsonModule": true,\n    "moduleResolution": "node",\n    "noEmit": true,\n    "paths": {\n      "~/*": ["./app/*"]\n    }\n  },\n  "include": [".eslintrc.js", "remix.env.d.ts", "**/*"],\n  "exclude": [".cache", "build", "public"]\n}\n')),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("h3",{id:"root-level"},"Root-level"),(0,l.kt)("p",null,"We suggest ",(0,l.kt)("em",{parentName:"p"},"against")," root-level configuration, as Remix should be installed per-project, and the\n",(0,l.kt)("inlineCode",{parentName:"p"},"remix")," command expects the configuration to live relative to the project root."),(0,l.kt)("h3",{id:"project-level"},"Project-level"),(0,l.kt)("p",null,"When creating a new Remix project, a\n",(0,l.kt)("a",{parentName:"p",href:"https://remix.run/docs/en/v1/api/conventions"},(0,l.kt)("inlineCode",{parentName:"a"},"remix.config.js"))," is created, and ",(0,l.kt)("em",{parentName:"p"},"must")," exist in\nthe project root. This allows each project to configure Remix for their needs."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<project>/remix.config.js"',title:'"<project>/remix.config.js"'},"module.exports = {\n  appDirectory: 'app',\n};\n")))}c.isMDXComponent=!0}}]);