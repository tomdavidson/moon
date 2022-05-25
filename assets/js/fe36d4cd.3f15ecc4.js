"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5420],{6243:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7378),r=n(8944),o="tabItem_lLGn";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},637:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(5773),r=n(7378),o=n(6457),l=n(784),s=n(9947),i=n(3457),u=n(8944),p="tabList_lSCs",c="tabItem_WhCL";function d(e){var t,n,o,d=e.lazy,m=e.block,f=e.defaultValue,g=e.values,v=e.groupId,h=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),j=null!=g?g:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(j,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(t=null!=f?f:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=k[0])?void 0:o.props.value;if(null!==y&&!j.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+j.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),w=N.tabGroupChoices,x=N.setTabGroupChoices,E=(0,r.useState)(y),C=E[0],Z=E[1],T=[],I=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var S=w[v];null!=S&&S!==C&&j.some((function(e){return e.value===S}))&&Z(S)}var D=function(e){var t=e.currentTarget,n=T.indexOf(t),a=j[n].value;a!==C&&(I(t),Z(a),null!=v&&x(v,a))},J=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},h)},j.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return T.push(e)},onKeyDown:J,onFocus:D,onClick:D},o,{className:(0,u.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),d?(0,r.cloneElement)(k.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},6642:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7378),r=n(7518),o=n(6243),l=n(637);function s(e,t,n){var a="yarn add ";return e.dep?a+="--dev ":e.peer&&(a+="--peer "),n&&t&&(a+="-W "),a+=e.dep}function i(e,t){var n="pnpm add ";return e.dep?n+="--save-dev ":e.peer&&(n+="--save-peer "),t&&(n+="-w "),n+=e.dep}function u(e){return a.createElement(l.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},a.createElement(o.Z,{value:"yarn"},a.createElement(r.Z,{language:"shell"},s(e,!1,!1))),a.createElement(o.Z,{value:"yarn1"},a.createElement(r.Z,{language:"shell"},s(e,!1,!0),"\n\n# If using workspaces\n",s(e,!0,!0))),a.createElement(o.Z,{value:"npm"},a.createElement(r.Z,{language:"shell"},function(e){var t="npm install ";return e.dep?t+="--save-dev ":e.peer&&(t+="--save-peer "),t+e.dep}(e))),a.createElement(o.Z,{value:"pnpm"},a.createElement(r.Z,{language:"shell"},i(e,!1),"\n\n# If using workspaces\n",i(e,!0))))}},1727:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var a=n(5773),r=n(808),o=(n(7378),n(5318)),l=n(6642),s=["components"],i={title:"Jest example",sidebar_label:"Jest"},u=void 0,p={unversionedId:"guides/examples/jest",id:"guides/examples/jest",title:"Jest example",description:"In this guide, you'll learn how to integrate Jest into moon.",source:"@site/docs/guides/examples/jest.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/jest",permalink:"/docs/guides/examples/jest",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/examples/jest.mdx",tags:[],version:"current",frontMatter:{title:"Jest example",sidebar_label:"Jest"},sidebar:"docs",previous:{title:"ESLint",permalink:"/docs/guides/examples/eslint"},next:{title:"TypeScript",permalink:"/docs/guides/examples/typescript"}},c={},d=[{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Root-level",id:"root-level",level:3},{value:"Project-level",id:"project-level",level:3},{value:"Sharing",id:"sharing",level:3},{value:"FAQ",id:"faq",level:2},{value:"How to test a single file or folder?",id:"how-to-test-a-single-file-or-folder",level:3},{value:"How to use <code>projects</code>?",id:"how-to-use-projects",level:3}],m={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this guide, you'll learn how to integrate ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," into moon."),(0,o.kt)("p",null,"Begin by installing ",(0,o.kt)("inlineCode",{parentName:"p"},"jest")," in your root. We suggest using the same version across the entire\nrepository."),(0,o.kt)(l.Z,{dep:"jest",dev:!0,mdxType:"AddDepsTabs"}),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Since testing is a universal workflow, add a ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," task to\n",(0,o.kt)("a",{parentName:"p",href:"../../config/global-project"},(0,o.kt)("inlineCode",{parentName:"a"},".moon/project.yml"))," with the following parameters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/project.yml"',title:'".moon/project.yml"'},"tasks:\n    test:\n        command: 'jest'\n        args:\n            # Always run code coverage\n            - '--coverage'\n            # Dont fail if a project has no tests\n            - '--passWithNoTests'\n        inputs:\n            # Source and test files\n            - 'src/**/*'\n            - 'tests/**/*'\n            # Project configs, any format\n            - 'jest.config.*'\n")),(0,o.kt)("p",null,"Projects can extend this task and provide additional parameters if need be, for example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/project.yml"',title:'"<project>/project.yml"'},"tasks:\n    test:\n        args:\n            # Disable caching for this project\n            - '--no-cache'\n")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"root-level"},"Root-level"),(0,o.kt)("p",null,"A root-level Jest config is not required and should be avoided, instead, use a ",(0,o.kt)("a",{parentName:"p",href:"#sharing"},"preset")," to\nshare configuration."),(0,o.kt)("h3",{id:"project-level"},"Project-level"),(0,o.kt)("p",null,"A project-level Jest config can be utilized by creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.config.<js|ts|cjs|mjs>")," in the\nproject root. This is optional, but necessary when defining project specific settings."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<project>/jest.config.js"',title:'"<project>/jest.config.js"'},"module.exports = {\n    // Project specific settings\n    testEnvironment: 'node',\n};\n")),(0,o.kt)("h3",{id:"sharing"},"Sharing"),(0,o.kt)("p",null,"To share configuration across projects, you can utilize Jest's built-in\n",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration#preset-string"},(0,o.kt)("inlineCode",{parentName:"a"},"preset"))," functionality. If you're utilizing\npackage workspaces, create a local package with the following content, otherwise publish the npm\npackage for consumption."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="packages/company-jest-preset/jest-preset.js"',title:'"packages/company-jest-preset/jest-preset.js"'},"module.exports = {\n    testEnvironment: 'jsdom',\n    watchman: true,\n};\n")),(0,o.kt)("p",null,"Within your project-level Jest config, you can extend the preset to inherit the settings."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<project>/jest.config.js"',title:'"<project>/jest.config.js"'},"module.exports = {\n    preset: 'company-jest-preset',\n};\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can take this a step further by passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"--preset")," option in the ",(0,o.kt)("a",{parentName:"p",href:"#setup"},"task above"),", so\nthat all projects inherit the preset by default.")),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"how-to-test-a-single-file-or-folder"},"How to test a single file or folder?"),(0,o.kt)("p",null,"You can filter tests by passing a file name, folder name, glob, or regex pattern after ",(0,o.kt)("inlineCode",{parentName:"p"},"--"),". Any\npassed files are relative from the project's root, regardless of where the ",(0,o.kt)("inlineCode",{parentName:"p"},"moon")," command is being\nran."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon run <project>:test -- filename\n")),(0,o.kt)("h3",{id:"how-to-use-projects"},"How to use ",(0,o.kt)("inlineCode",{parentName:"h3"},"projects"),"?"),(0,o.kt)("p",null,"With moon, there's no reason to use\n",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration#projects-arraystring--projectconfig"},(0,o.kt)("inlineCode",{parentName:"a"},"projects"))," as the ",(0,o.kt)("inlineCode",{parentName:"p"},"test"),"\ntask is ran ",(0,o.kt)("em",{parentName:"p"},"per")," project. If you'd like to test multiple projects, use\n",(0,o.kt)("a",{parentName:"p",href:"../../commands/run"},(0,o.kt)("inlineCode",{parentName:"a"},"moon run :test")),"."))}f.isMDXComponent=!0}}]);