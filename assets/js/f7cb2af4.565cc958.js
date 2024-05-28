"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[7036],{2343:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=s(4848),o=s(8453),r=s(9489),i=s(7227);const a={title:"TypeScript Config option"},l=void 0,c={id:"getting-started/options/tsconfig",title:"TypeScript Config option",description:"The tsconfig option allows you to define which tsconfig JSON file to use. An inline compiler options object can also be specified instead of a file path.",source:"@site/docs/getting-started/options/tsconfig.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/tsconfig",permalink:"/ts-jest/docs/next/getting-started/options/tsconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/options/tsconfig.md",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1716887298e3,frontMatter:{title:"TypeScript Config option"}},u={},d=[{value:"Examples",id:"examples",level:3},{value:"Path to a <code>tsconfig</code> file",id:"path-to-a-tsconfig-file",level:4},{value:"Inline compiler options",id:"inline-compiler-options",level:4},{value:"Disable auto-lookup",id:"disable-auto-lookup",level:4}];function p(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"tsconfig"})," option allows you to define which ",(0,n.jsx)(t.code,{children:"tsconfig"})," JSON file to use. An inline ",(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options",children:"compiler options"})," object can also be specified instead of a file path."]}),"\n",(0,n.jsxs)(t.p,{children:["By default ",(0,n.jsx)(t.code,{children:"ts-jest"})," will try to find a ",(0,n.jsx)(t.code,{children:"tsconfig.json"})," in your project. If it cannot find one, it will use the default TypeScript ",(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options",children:"compiler options"}),"; except, ",(0,n.jsx)(t.code,{children:"ES2015"})," is used as ",(0,n.jsx)(t.code,{children:"target"})," instead of ",(0,n.jsx)(t.code,{children:"ES5"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["If you need to use defaults and force ",(0,n.jsx)(t.code,{children:"ts-jest"})," to use the defaults even if there is a ",(0,n.jsx)(t.code,{children:"tsconfig.json"})," in your project, you can set this option to ",(0,n.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.h4,{id:"path-to-a-tsconfig-file",children:["Path to a ",(0,n.jsx)(t.code,{children:"tsconfig"})," file"]}),"\n",(0,n.jsxs)(t.p,{children:["The path should be relative to the current working directory where you start Jest from. You can also use ",(0,n.jsx)(t.code,{children:"<rootDir>"})," in the path to start from the project root dir."]}),"\n",(0,n.jsxs)(r.A,{groupId:"code-examples",children:[(0,n.jsx)(i.A,{value:"js",label:"JavaScript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:"tab",children:"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: 'tsconfig.test.json',\n      },\n    ],\n  },\n}\n"})})}),(0,n.jsx)(i.A,{value:"ts",label:"TypeScript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: 'tsconfig.test.json',\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,n.jsx)(i.A,{value:"JSON",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "tsconfig": "tsconfig.test.json"\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,n.jsx)(t.h4,{id:"inline-compiler-options",children:"Inline compiler options"}),"\n",(0,n.jsxs)(t.p,{children:["Refer to the TypeScript ",(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options",children:"compiler options"})," for reference.\nIt's basically the same object you'd put in your ",(0,n.jsx)(t.code,{children:"tsconfig.json"}),"'s ",(0,n.jsx)(t.code,{children:"compilerOptions"}),"."]}),"\n",(0,n.jsxs)(r.A,{groupId:"code-examples",children:[(0,n.jsx)(i.A,{value:"js",label:"JavaScript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:"tab",children:"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: {\n          importHelpers: true,\n        },\n      },\n    ],\n  },\n}\n"})})}),(0,n.jsx)(i.A,{value:"ts",label:"TypeScript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: {\n          importHelpers: true,\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,n.jsx)(i.A,{value:"JSON",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "tsconfig": {\n            "importHelpers": true\n          }\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,n.jsx)(t.h4,{id:"disable-auto-lookup",children:"Disable auto-lookup"}),"\n",(0,n.jsxs)(t.p,{children:["By default ",(0,n.jsx)(t.code,{children:"ts-jest"})," will try to find a ",(0,n.jsx)(t.code,{children:"tsconfig.json"})," in your project. But you may not want to use it at all and keep TypeScript default options. You can achieve this by setting ",(0,n.jsx)(t.code,{children:"tsconfig"})," to ",(0,n.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,n.jsxs)(r.A,{groupId:"code-examples",children:[(0,n.jsx)(i.A,{value:"js",label:"JavaScript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:"tab",children:"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: false,\n      },\n    ],\n  },\n}\n"})})}),(0,n.jsx)(i.A,{value:"ts",label:"TypeScript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: false,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,n.jsx)(i.A,{value:"JSON",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "tsconfig": {\n            "tsconfig": false\n          }\n        }\n      ]\n    }\n  }\n}\n'})})})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},7227:(e,t,s)=>{s.d(t,{A:()=>i});s(6540);var n=s(4164);const o={tabItem:"tabItem_Ymn6"};var r=s(4848);function i(e){let{children:t,hidden:s,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,i),hidden:s,children:t})}},9489:(e,t,s)=>{s.d(t,{A:()=>w});var n=s(6540),o=s(4164),r=s(4245),i=s(6347),a=s(6494),l=s(2814),c=s(5167),u=s(1269);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:o}}=e;return{value:t,label:s,attributes:n,default:o}}))}(s);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function h(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:s}=e;const o=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,l.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function f(e){const{defaultValue:t,queryString:s=!1,groupId:o}=e,r=p(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[c,d]=j({queryString:s,groupId:o}),[f,m]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,u.Dv)(s);return[o,(0,n.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:o}),g=(()=>{const e=c??f;return h({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var m=s(1062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=s(4848);function b(e){let{className:t,block:s,selectedValue:n,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const t=e.currentTarget,s=l.indexOf(t),o=a[s].value;o!==n&&(c(t),i(o))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;t=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;t=l[s]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":s},t),children:a.map((e=>{let{value:t,label:s,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,o.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function v(e){let{lazy:t,children:s,selectedValue:o}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,o.A)("tabs-container",g.tabList),children:[(0,x.jsx)(b,{...t,...e}),(0,x.jsx)(v,{...t,...e})]})}function w(e){const t=(0,m.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var n=s(6540);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);