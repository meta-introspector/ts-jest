"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[8703],{8001:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=t(4848),s=t(8453);const o={id:"installation",title:"Installation"},l=void 0,r={id:"getting-started/installation",title:"Installation",description:"Dependencies",source:"@site/versioned_docs/version-27.1/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/ts-jest/docs/27.1/getting-started/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.1/getting-started/installation.md",tags:[],version:"27.1",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1723057179e3,frontMatter:{id:"installation",title:"Installation"},sidebar:"version-27.1-docs",previous:{title:"Contributing",permalink:"/ts-jest/docs/27.1/contributing"},next:{title:"Presets",permalink:"/ts-jest/docs/27.1/getting-started/presets"}},c={},d=[{value:"Dependencies",id:"dependencies",level:3},{value:"NPM",id:"npm",level:4},{value:"Yarn",id:"yarn",level:4},{value:"Jest config file",id:"jest-config-file",level:3},{value:"Creating",id:"creating",level:4},{value:"NPM",id:"npm-1",level:4},{value:"Yarn",id:"yarn-1",level:4},{value:"Customizing",id:"customizing",level:4}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsxs)(n.p,{children:["You can install ",(0,i.jsx)(n.code,{children:"ts-jest"})," and dependencies all at once with one of the following commands."]}),"\n",(0,i.jsx)(n.h4,{id:"npm",children:"NPM"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"npm install --save-dev jest typescript ts-jest @types/jest\n"})}),"\n",(0,i.jsx)(n.h4,{id:"yarn",children:"Yarn"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"yarn add --dev jest typescript ts-jest @types/jest\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Tip: If you get an error with the following ",(0,i.jsx)(n.code,{children:"npm"})," commands such as ",(0,i.jsx)(n.code,{children:"npx: command not found"}),", you can replace ",(0,i.jsx)(n.code,{children:"npx XXX"})," with ",(0,i.jsx)(n.code,{children:"node node_modules/.bin/XXX"})," from the root of your project."]})}),"\n",(0,i.jsx)(n.h3,{id:"jest-config-file",children:"Jest config file"}),"\n",(0,i.jsx)(n.h4,{id:"creating",children:"Creating"}),"\n",(0,i.jsxs)(n.p,{children:["By default, Jest can run without any config files, but it will not compile ",(0,i.jsx)(n.code,{children:".ts"})," files.\nTo make it transpile TypeScript with ",(0,i.jsx)(n.code,{children:"ts-jest"}),", we will need to create a configuration file that will tell Jest to use a ",(0,i.jsx)(n.code,{children:"ts-jest"})," preset."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ts-jest"})," can create the configuration file for you automatically:"]}),"\n",(0,i.jsx)(n.h4,{id:"npm-1",children:"NPM"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"npx ts-jest config:init\n"})}),"\n",(0,i.jsx)(n.h4,{id:"yarn-1",children:"Yarn"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"yarn ts-jest config:init\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This will create a basic Jest configuration file which will inform Jest about how to handle ",(0,i.jsx)(n.code,{children:".ts"})," files correctly."]}),"\n",(0,i.jsxs)(n.p,{children:["You can also use the ",(0,i.jsx)(n.code,{children:"jest --init"})," command (prefixed with either ",(0,i.jsx)(n.code,{children:"npx"})," or ",(0,i.jsx)(n.code,{children:"yarn"})," depending on what you're using) to have more options related to Jest.\nHowever, answer ",(0,i.jsx)(n.code,{children:"no"})," to the Jest question about whether or not to enable TypeScript. Instead, add the line: ",(0,i.jsx)(n.code,{children:'preset: "ts-jest"'})," to the ",(0,i.jsx)(n.code,{children:"jest.config.js"})," file afterwards."]}),"\n",(0,i.jsx)(n.h4,{id:"customizing",children:"Customizing"}),"\n",(0,i.jsxs)(n.p,{children:["For customizing jest, please follow their ",(0,i.jsx)(n.a,{href:"https://jestjs.io/docs/en/configuration.html",children:"official guide online"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ts-jest"})," specific options can be found ",(0,i.jsx)(n.a,{href:"options",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var i=t(6540);const s={},o=i.createContext(s);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);