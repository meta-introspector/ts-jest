"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[6462],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9342:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var i=n(7462),r=n(3366),a=(n(7294),n(4137)),o=["components"],l={id:"installation",title:"Installation"},s=void 0,p={unversionedId:"getting-started/installation",id:"version-26.5/getting-started/installation",title:"Installation",description:"Dependencies",source:"@site/versioned_docs/version-26.5/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/ts-jest/docs/26.5/getting-started/installation",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-26.5/getting-started/installation.md",tags:[],version:"26.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1662989764,formattedLastUpdatedAt:"Sep 12, 2022",frontMatter:{id:"installation",title:"Installation"},sidebar:"version-26.5-docs",previous:{title:"Contributing",permalink:"/ts-jest/docs/26.5/contributing"},next:{title:"Presets",permalink:"/ts-jest/docs/26.5/getting-started/presets"}},c={},d=[{value:"Dependencies",id:"dependencies",level:3},{value:"NPM",id:"npm",level:4},{value:"Yarn",id:"yarn",level:4},{value:"Jest config file",id:"jest-config-file",level:3},{value:"Creating",id:"creating",level:4},{value:"NPM",id:"npm-1",level:4},{value:"Yarn",id:"yarn-1",level:4},{value:"Customizing",id:"customizing",level:4}],u={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"You can install ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-jest")," and dependencies all at once with one of the following commands."),(0,a.kt)("h4",{id:"npm"},"NPM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev jest typescript ts-jest @types/jest\n")),(0,a.kt)("h4",{id:"yarn"},"Yarn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev jest typescript ts-jest @types/jest\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Tip: If you get an error with the following ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," commands such as ",(0,a.kt)("inlineCode",{parentName:"p"},"npx: command not found"),", you can replace ",(0,a.kt)("inlineCode",{parentName:"p"},"npx XXX")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"node node_modules/.bin/XXX")," from the root of your project.")),(0,a.kt)("h3",{id:"jest-config-file"},"Jest config file"),(0,a.kt)("h4",{id:"creating"},"Creating"),(0,a.kt)("p",null,"By default Jest can run without any config files, but it will not compile ",(0,a.kt)("inlineCode",{parentName:"p"},".ts")," files.\nTo make it transpile TypeScript with ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-jest"),", we will need to create a configuration file that will tell Jest to use a ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-jest")," preset."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ts-jest")," can create the configuration file for you automatically:"),(0,a.kt)("h4",{id:"npm-1"},"NPM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx ts-jest config:init\n")),(0,a.kt)("h4",{id:"yarn-1"},"Yarn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn ts-jest config:init\n")),(0,a.kt)("p",null,"This will create a basic Jest configuration file which will inform Jest about how to handle ",(0,a.kt)("inlineCode",{parentName:"p"},".ts")," files correctly."),(0,a.kt)("p",null,"You can also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"jest --init")," command (prefixed with either ",(0,a.kt)("inlineCode",{parentName:"p"},"npx")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," depending on what you're using) to have more options related to Jest.\nHowever, answer ",(0,a.kt)("inlineCode",{parentName:"p"},"no")," to the Jest question about whether or not to enable TypeScript. Instead, add the line: ",(0,a.kt)("inlineCode",{parentName:"p"},'preset: "ts-jest"')," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.config.js")," file afterwards."),(0,a.kt)("h4",{id:"customizing"},"Customizing"),(0,a.kt)("p",null,"For customizing jest, please follow their ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/configuration.html"},"official guide online"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ts-jest")," specific options can be found ",(0,a.kt)("a",{parentName:"p",href:"options"},"here"),"."))}f.isMDXComponent=!0}}]);