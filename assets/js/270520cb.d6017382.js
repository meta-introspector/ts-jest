"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[3110],{1282:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>j,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=s(4848),o=s(8453),r=s(9489),i=s(7227);const a={title:"TypeScript Config option"},l=void 0,c={id:"getting-started/options/tsconfig",title:"TypeScript Config option",description:"The tsconfig option allows you to define which tsconfig JSON file to use. An inline compiler options object can also be specified instead of a file path.",source:"@site/versioned_docs/version-29.0/getting-started/options/tsconfig.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/tsconfig",permalink:"/ts-jest/docs/29.0/getting-started/options/tsconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.0/getting-started/options/tsconfig.md",tags:[],version:"29.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1723057179e3,frontMatter:{title:"TypeScript Config option"}},u={},d=[{value:"Examples",id:"examples",level:3},{value:"Path to a <code>tsconfig</code> file",id:"path-to-a-tsconfig-file",level:4},{value:"Inline compiler options",id:"inline-compiler-options",level:4},{value:"Disable auto-lookup",id:"disable-auto-lookup",level:4}];function p(t){const e={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.p,{children:["The ",(0,n.jsx)(e.code,{children:"tsconfig"})," option allows you to define which ",(0,n.jsx)(e.code,{children:"tsconfig"})," JSON file to use. An inline ",(0,n.jsx)(e.a,{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options",children:"compiler options"})," object can also be specified instead of a file path."]}),"\n",(0,n.jsxs)(e.p,{children:["By default ",(0,n.jsx)(e.code,{children:"ts-jest"})," will try to find a ",(0,n.jsx)(e.code,{children:"tsconfig.json"})," in your project. If it cannot find one, it will use the default TypeScript ",(0,n.jsx)(e.a,{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options",children:"compiler options"}),"; except, ",(0,n.jsx)(e.code,{children:"ES2015"})," is used as ",(0,n.jsx)(e.code,{children:"target"})," instead of ",(0,n.jsx)(e.code,{children:"ES5"}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["If you need to use defaults and force ",(0,n.jsx)(e.code,{children:"ts-jest"})," to use the defaults even if there is a ",(0,n.jsx)(e.code,{children:"tsconfig.json"})," in your project, you can set this option to ",(0,n.jsx)(e.code,{children:"false"}),"."]}),"\n",(0,n.jsx)(e.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(e.h4,{id:"path-to-a-tsconfig-file",children:["Path to a ",(0,n.jsx)(e.code,{children:"tsconfig"})," file"]}),"\n",(0,n.jsxs)(e.p,{children:["The path should be relative to the current working directory where you start Jest from. You can also use ",(0,n.jsx)(e.code,{children:"<rootDir>"})," in the path to start from the project root dir."]}),"\n",(0,n.jsxs)(r.A,{groupId:"code-examples",children:[(0,n.jsx)(i.A,{value:"js",label:"JavaScript",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: 'tsconfig.test.json',\n      },\n    ],\n  },\n}\n"})})}),(0,n.jsx)(i.A,{value:"ts",label:"TypeScript",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: 'tsconfig.test.json',\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,n.jsx)(i.A,{value:"JSON",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process ts,js,tsx,jsx with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "tsconfig": "tsconfig.test.json"\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,n.jsx)(e.h4,{id:"inline-compiler-options",children:"Inline compiler options"}),"\n",(0,n.jsxs)(e.p,{children:["Refer to the TypeScript ",(0,n.jsx)(e.a,{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options",children:"compiler options"})," for reference.\nIt's basically the same object you'd put in your ",(0,n.jsx)(e.code,{children:"tsconfig.json"}),"'s ",(0,n.jsx)(e.code,{children:"compilerOptions"}),"."]}),"\n",(0,n.jsxs)(r.A,{groupId:"code-examples",children:[(0,n.jsx)(i.A,{value:"js",label:"JavaScript",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: {\n          importHelpers: true,\n        },\n      },\n    ],\n  },\n}\n"})})}),(0,n.jsx)(i.A,{value:"ts",label:"TypeScript",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: {\n          importHelpers: true,\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,n.jsx)(i.A,{value:"JSON",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process ts,js,tsx,jsx with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "tsconfig": {\n            "importHelpers": true\n          }\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,n.jsx)(e.h4,{id:"disable-auto-lookup",children:"Disable auto-lookup"}),"\n",(0,n.jsxs)(e.p,{children:["By default ",(0,n.jsx)(e.code,{children:"ts-jest"})," will try to find a ",(0,n.jsx)(e.code,{children:"tsconfig.json"})," in your project. But you may not want to use it at all and keep TypeScript default options. You can achieve this by setting ",(0,n.jsx)(e.code,{children:"tsconfig"})," to ",(0,n.jsx)(e.code,{children:"false"}),"."]}),"\n",(0,n.jsxs)(r.A,{groupId:"code-examples",children:[(0,n.jsx)(i.A,{value:"js",label:"JavaScript",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: false,\n      },\n    ],\n  },\n}\n"})})}),(0,n.jsx)(i.A,{value:"ts",label:"TypeScript",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: false,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,n.jsx)(i.A,{value:"JSON",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process ts,js,tsx,jsx with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "tsconfig": {\n            "tsconfig": false\n          }\n        }\n      ]\n    }\n  }\n}\n'})})})]})]})}function j(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(p,{...t})}):p(t)}},7227:(t,e,s)=>{s.d(e,{A:()=>i});s(6540);var n=s(4164);const o={tabItem:"tabItem_Ymn6"};var r=s(4848);function i(t){let{children:e,hidden:s,className:i}=t;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,i),hidden:s,children:e})}},9489:(t,e,s)=>{s.d(e,{A:()=>w});var n=s(6540),o=s(4164),r=s(4245),i=s(6347),a=s(6494),l=s(2814),c=s(5167),u=s(9900);function d(t){return n.Children.toArray(t).filter((t=>"\n"!==t)).map((t=>{if(!t||(0,n.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(t){const{values:e,children:s}=t;return(0,n.useMemo)((()=>{const t=e??function(t){return d(t).map((t=>{let{props:{value:e,label:s,attributes:n,default:o}}=t;return{value:e,label:s,attributes:n,default:o}}))}(s);return function(t){const e=(0,c.X)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,s])}function j(t){let{value:e,tabValues:s}=t;return s.some((t=>t.value===e))}function h(t){let{queryString:e=!1,groupId:s}=t;const o=(0,i.W6)(),r=function(t){let{queryString:e=!1,groupId:s}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:e,groupId:s});return[(0,l.aZ)(r),(0,n.useCallback)((t=>{if(!r)return;const e=new URLSearchParams(o.location.search);e.set(r,t),o.replace({...o.location,search:e.toString()})}),[r,o])]}function f(t){const{defaultValue:e,queryString:s=!1,groupId:o}=t,r=p(t),[i,l]=(0,n.useState)((()=>function(t){let{defaultValue:e,tabValues:s}=t;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!j({value:e,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${s.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=s.find((t=>t.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:r}))),[c,d]=h({queryString:s,groupId:o}),[f,m]=function(t){let{groupId:e}=t;const s=function(t){return t?`docusaurus.tab.${t}`:null}(e),[o,r]=(0,u.Dv)(s);return[o,(0,n.useCallback)((t=>{s&&r.set(t)}),[s,r])]}({groupId:o}),x=(()=>{const t=c??f;return j({value:t,tabValues:r})?t:null})();(0,a.A)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,n.useCallback)((t=>{if(!j({value:t,tabValues:r}))throw new Error(`Can't select invalid tab value=${t}`);l(t),d(t),m(t)}),[d,m,r]),tabValues:r}}var m=s(1062);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(4848);function b(t){let{className:e,block:s,selectedValue:n,selectValue:i,tabValues:a}=t;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=t=>{const e=t.currentTarget,s=l.indexOf(e),o=a[s].value;o!==n&&(c(e),i(o))},d=t=>{let e=null;switch(t.key){case"Enter":u(t);break;case"ArrowRight":{const s=l.indexOf(t.currentTarget)+1;e=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(t.currentTarget)-1;e=l[s]??l[l.length-1];break}}e?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":s},e),children:a.map((t=>{let{value:e,label:s,attributes:r}=t;return(0,g.jsx)("li",{role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:t=>l.push(t),onKeyDown:d,onClick:u,...r,className:(0,o.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":n===e}),children:s??e},e)}))})}function v(t){let{lazy:e,children:s,selectedValue:o}=t;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(e){const t=r.find((t=>t.props.value===o));return t?(0,n.cloneElement)(t,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==o})))})}function y(t){const e=f(t);return(0,g.jsxs)("div",{className:(0,o.A)("tabs-container",x.tabList),children:[(0,g.jsx)(b,{...e,...t}),(0,g.jsx)(v,{...e,...t})]})}function w(t){const e=(0,m.A)();return(0,g.jsx)(y,{...t,children:d(t.children)},String(e))}},8453:(t,e,s)=>{s.d(e,{R:()=>i,x:()=>a});var n=s(6540);const o={},r=n.createContext(o);function i(t){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:i(t.components),n.createElement(r.Provider,{value:e},t.children)}}}]);