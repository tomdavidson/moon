"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5420],{9798:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7378),l=a(8944);const s="tabItem_wHwb";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(s,o),hidden:a},t)}},3337:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(5773),l=a(7378),s=a(8944),o=a(6457),r=a(784),i=a(9947),p=a(3457);const u="tabList_J5MA",c="tabItem_l0OV";function m(e){var t,a;const{lazy:o,block:m,defaultValue:d,values:g,groupId:h,className:k}=e,f=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=g?g:f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),j=(0,r.l)(v,((e,t)=>e.value===t.value));if(j.length>0)throw new Error('Docusaurus error: Duplicate values "'+j.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===d?d:null!=(t=null!=d?d:null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)?t:f[0].props.value;if(null!==b&&!v.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:N}=(0,i.U)(),[w,x]=(0,l.useState)(b),E=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=h){const e=y[h];null!=e&&e!==w&&v.some((t=>t.value===e))&&x(e)}const Z=e=>{const t=e.currentTarget,a=E.indexOf(t),n=v[a].value;n!==w&&(C(t),x(n),null!=h&&N(h,String(n)))},T=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=E.indexOf(e.currentTarget)+1;a=null!=(n=E[t])?n:E[0];break}case"ArrowLeft":{var l;const t=E.indexOf(e.currentTarget)-1;a=null!=(l=E[t])?l:E[E.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,s.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},k)},v.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>E.push(e),onKeyDown:T,onFocus:Z,onClick:Z},o,{className:(0,s.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),o?(0,l.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,o.Z)();return l.createElement(m,(0,n.Z)({key:String(t)},e))}},6642:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7378),l=a(4267),s=a(9798),o=a(3337);function r(e,t,a){let n=e.package?"yarn workspace "+e.package+" add ":"yarn add ";return e.dev?n+="--dev ":e.peer&&(n+="--peer "),a&&t&&!e.package&&(n+="-W "),n+=e.dep,n}function i(e,t){let a="pnpm add ";return e.dev?a+="--save-dev ":e.peer&&(a+="--save-peer "),e.package?a+="--filter "+e.package+" ":t&&(a+="-w "),a+=e.dep,a}function p(e){let t=r(e,!1,!0),a=i(e,!1);return e.package||(t+="\n\n# If using workspaces\n",a+="\n\n# If using workspaces\n",t+=r(e,!0,!0),a+=i(e,!0)),n.createElement(o.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},n.createElement(s.Z,{value:"yarn"},n.createElement(l.Z,{language:"shell"},r(e,!1,!1))),n.createElement(s.Z,{value:"yarn1"},n.createElement(l.Z,{language:"shell"},t)),n.createElement(s.Z,{value:"npm"},n.createElement(l.Z,{language:"shell"},function(e){let t="npm install ";return e.dev?t+="--save-dev ":e.peer&&(t+="--save-peer "),e.package&&(t+="--workspace "+e.package+" "),t+=e.dep,t}(e))),n.createElement(s.Z,{value:"pnpm"},n.createElement(l.Z,{language:"shell"},a)))}},1727:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(5773),l=(a(7378),a(5318)),s=a(6642);const o={title:"Jest example",sidebar_label:"Jest"},r=void 0,i={unversionedId:"guides/examples/jest",id:"guides/examples/jest",title:"Jest example",description:"Jest has been prototyped in our",source:"@site/docs/guides/examples/jest.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/jest",permalink:"/docs/guides/examples/jest",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/examples/jest.mdx",tags:[],version:"current",frontMatter:{title:"Jest example",sidebar_label:"Jest"},sidebar:"guides",previous:{title:"ESLint",permalink:"/docs/guides/examples/eslint"},next:{title:"Next.js",permalink:"/docs/guides/examples/next"}},p={},u=[{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Root-level",id:"root-level",level:3},{value:"Project-level",id:"project-level",level:3},{value:"Sharing",id:"sharing",level:3},{value:"FAQ",id:"faq",level:2},{value:"How to test a single file or folder?",id:"how-to-test-a-single-file-or-folder",level:3},{value:"How to use <code>projects</code>?",id:"how-to-use-projects",level:3}],c={toc:u};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Jest has been prototyped in our\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/examples/blob/master/.moon/project.yml#L83"},"examples repository"),",\ncheck it out!")),(0,l.kt)("p",null,"In this guide, you'll learn how to integrate ",(0,l.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," into moon."),(0,l.kt)("p",null,"Begin by installing ",(0,l.kt)("inlineCode",{parentName:"p"},"jest")," in your root. We suggest using the same version across the entire\nrepository."),(0,l.kt)(s.Z,{dep:"jest",dev:!0,mdxType:"AddDepsTabs"}),(0,l.kt)("h2",{id:"setup"},"Setup"),(0,l.kt)("p",null,"Since testing is a universal workflow, add a ",(0,l.kt)("inlineCode",{parentName:"p"},"test")," task to\n",(0,l.kt)("a",{parentName:"p",href:"../../config/global-project"},(0,l.kt)("inlineCode",{parentName:"a"},".moon/project.yml"))," with the following parameters."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/project.yml"',title:'".moon/project.yml"'},"tasks:\n    test:\n        command:\n            - 'jest'\n            # Always run code coverage\n            - '--coverage'\n            # Dont fail if a project has no tests\n            - '--passWithNoTests'\n        inputs:\n            # Source and test files\n            - 'src/**/*'\n            - 'tests/**/*'\n            # Project configs, any format\n            - 'jest.config.*'\n")),(0,l.kt)("p",null,"Projects can extend this task and provide additional parameters if need be, for example."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"tasks:\n    test:\n        args:\n            # Disable caching for this project\n            - '--no-cache'\n")),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("h3",{id:"root-level"},"Root-level"),(0,l.kt)("p",null,"A root-level Jest config is not required and should be avoided, instead, use a ",(0,l.kt)("a",{parentName:"p",href:"#sharing"},"preset")," to\nshare configuration."),(0,l.kt)("h3",{id:"project-level"},"Project-level"),(0,l.kt)("p",null,"A project-level Jest config can be utilized by creating a ",(0,l.kt)("inlineCode",{parentName:"p"},"jest.config.<js|ts|cjs|mjs>")," in the\nproject root. This is optional, but necessary when defining project specific settings."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<project>/jest.config.js"',title:'"<project>/jest.config.js"'},"module.exports = {\n  // Project specific settings\n  testEnvironment: 'node',\n};\n")),(0,l.kt)("h3",{id:"sharing"},"Sharing"),(0,l.kt)("p",null,"To share configuration across projects, you can utilize Jest's built-in\n",(0,l.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration#preset-string"},(0,l.kt)("inlineCode",{parentName:"a"},"preset"))," functionality. If you're utilizing\npackage workspaces, create a local package with the following content, otherwise publish the npm\npackage for consumption."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="packages/company-jest-preset/jest-preset.js"',title:'"packages/company-jest-preset/jest-preset.js"'},"module.exports = {\n  testEnvironment: 'jsdom',\n  watchman: true,\n};\n")),(0,l.kt)("p",null,"Within your project-level Jest config, you can extend the preset to inherit the settings."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<project>/jest.config.js"',title:'"<project>/jest.config.js"'},"module.exports = {\n  preset: 'company-jest-preset',\n};\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You can take this a step further by passing the ",(0,l.kt)("inlineCode",{parentName:"p"},"--preset")," option in the ",(0,l.kt)("a",{parentName:"p",href:"#setup"},"task above"),", so\nthat all projects inherit the preset by default.")),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h3",{id:"how-to-test-a-single-file-or-folder"},"How to test a single file or folder?"),(0,l.kt)("p",null,"You can filter tests by passing a file name, folder name, glob, or regex pattern after ",(0,l.kt)("inlineCode",{parentName:"p"},"--"),". Any\npassed files are relative from the project's root, regardless of where the ",(0,l.kt)("inlineCode",{parentName:"p"},"moon")," command is being\nran."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon run <project>:test -- filename\n")),(0,l.kt)("h3",{id:"how-to-use-projects"},"How to use ",(0,l.kt)("inlineCode",{parentName:"h3"},"projects"),"?"),(0,l.kt)("p",null,"With moon, there's no reason to use\n",(0,l.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration#projects-arraystring--projectconfig"},(0,l.kt)("inlineCode",{parentName:"a"},"projects"))," as the ",(0,l.kt)("inlineCode",{parentName:"p"},"test"),"\ntask is ran ",(0,l.kt)("em",{parentName:"p"},"per")," project. If you'd like to test multiple projects, use\n",(0,l.kt)("a",{parentName:"p",href:"../../commands/run"},(0,l.kt)("inlineCode",{parentName:"a"},"moon run :test")),"."))}m.isMDXComponent=!0}}]);