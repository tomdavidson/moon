"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[744],{5318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3017:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(5773),a=n(808),i=(n(7378),n(5318)),o=["components"],l={title:"File patterns"},p=void 0,s={unversionedId:"concepts/file-pattern",id:"concepts/file-pattern",title:"File patterns",description:"Globs",source:"@site/docs/concepts/file-pattern.mdx",sourceDirName:"concepts",slug:"/concepts/file-pattern",permalink:"/docs/concepts/file-pattern",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/concepts/file-pattern.mdx",tags:[],version:"current",frontMatter:{title:"File patterns"},sidebar:"docs",previous:{title:"File groups",permalink:"/docs/concepts/file-group"},next:{title:"Projects",permalink:"/docs/concepts/project"}},c={},u=[{value:"Globs",id:"globs",level:2},{value:"Supported syntax",id:"supported-syntax",level:3},{value:"Examples",id:"examples",level:3},{value:"Project relative",id:"project-relative",level:2},{value:"Workspace relative",id:"workspace-relative",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"globs"},"Globs"),(0,i.kt)("p",null,"Globs in moon are ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/olson-sean-k/wax"},"Rust-based globs"),", ",(0,i.kt)("em",{parentName:"p"},"not")," JavaScript-based.\nThis may result in different or unexpected results. The following guidelines must be met when using\nglobs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Must use forward slashes (",(0,i.kt)("inlineCode",{parentName:"li"},"/"),") for path separators, even on Windows."),(0,i.kt)("li",{parentName:"ul"},"Must ",(0,i.kt)("em",{parentName:"li"},"not")," start with or use any relative path parts, ",(0,i.kt)("inlineCode",{parentName:"li"},".")," or ",(0,i.kt)("inlineCode",{parentName:"li"},".."),".")),(0,i.kt)("h3",{id:"supported-syntax"},"Supported syntax"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"*")," - Matches zero or more characters, but does not match the ",(0,i.kt)("inlineCode",{parentName:"li"},"/")," character. Will attempt to match\nthe longest possible text (eager)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$")," - Like ",(0,i.kt)("inlineCode",{parentName:"li"},"*"),", but will attempt to match the shortest possible text (lazy)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"**")," - Matches zero or more directories."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"?")," - Matches exactly one character, but not ",(0,i.kt)("inlineCode",{parentName:"li"},"/"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[abc]")," - Matches one case-sensitive character listed in the brackets."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[!xyz]")," - Like the above, but will match any character ",(0,i.kt)("em",{parentName:"li"},"not")," listed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[a-z]")," - Matches one case-sensitive character in range in the brackets."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[!x-z]")," - Like the above, but will match any character ",(0,i.kt)("em",{parentName:"li"},"not")," in range."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{glob,glob}")," - Matches one or more comma separated list of sub-glob patterns."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<glob:#>")," - Matches a sub-glob within a defined bounds (represented by ",(0,i.kt)("inlineCode",{parentName:"li"},"#"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"!")," - At the start of a pattern, will negate previous positive patterns.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The biggest difference between JavaScript and Rust globs is ",(0,i.kt)("inlineCode",{parentName:"p"},"?"),". In JavaScript, this marks the\npreceding character as optional, while in Rust it matches exactly 1 character.")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"README.{md,mdx,txt}\nsrc/**/*\ntests/**/*.?js\n!**/__tests__/**/*\nlogs/<[0-9]:4>-<[0-9]:2>-<[0-9]:2>.log\n")),(0,i.kt)("h2",{id:"project-relative"},"Project relative"),(0,i.kt)("p",null,"When configuring ",(0,i.kt)("a",{parentName:"p",href:"../config/project#filegroups"},(0,i.kt)("inlineCode",{parentName:"a"},"fileGroups")),", ",(0,i.kt)("a",{parentName:"p",href:"../config/project#inputs"},(0,i.kt)("inlineCode",{parentName:"a"},"inputs")),",\nand ",(0,i.kt)("a",{parentName:"p",href:"../config/project#outputs"},(0,i.kt)("inlineCode",{parentName:"a"},"outputs")),", all listed file paths and globs are relative from the\nproject root they will be ran in. The ",(0,i.kt)("em",{parentName:"p"},"must not")," start with ",(0,i.kt)("inlineCode",{parentName:"p"},"./"),", or traverse upwards with ",(0,i.kt)("inlineCode",{parentName:"p"},".."),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Valid\nsrc/**/*\npackage.json\n\n# Invalid\n./src/**/*\n../utils\n")),(0,i.kt)("h2",{id:"workspace-relative"},"Workspace relative"),(0,i.kt)("p",null,"When configuring ",(0,i.kt)("a",{parentName:"p",href:"../config/project#filegroups"},(0,i.kt)("inlineCode",{parentName:"a"},"fileGroups")),", ",(0,i.kt)("a",{parentName:"p",href:"../config/project#inputs"},(0,i.kt)("inlineCode",{parentName:"a"},"inputs")),",\nand ",(0,i.kt)("a",{parentName:"p",href:"../config/project#outputs"},(0,i.kt)("inlineCode",{parentName:"a"},"outputs")),", a listed file path or glob can be prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," to\nresolve relative from the workspace root, and ",(0,i.kt)("em",{parentName:"p"},"not")," the project root."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# In project\npackage.json\n\n# In workspace\n/package.json\n")))}d.isMDXComponent=!0}}]);