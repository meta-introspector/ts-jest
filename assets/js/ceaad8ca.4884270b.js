"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[4681],{9954:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>j});var n=t(4848),i=t(8453),r=t(9489),o=t(7227);const a={title:"Diagnostics option"},l=void 0,c={id:"getting-started/options/diagnostics",title:"Diagnostics option",description:"The diagnostics option configures error reporting.",source:"@site/docs/getting-started/options/diagnostics.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/diagnostics",permalink:"/ts-jest/docs/next/getting-started/options/diagnostics",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/options/diagnostics.md",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1722241562e3,frontMatter:{title:"Diagnostics option"}},d={},j=[{value:"Disabling/enabling",id:"disablingenabling",level:3},{value:"Advanced configuration",id:"advanced-configuration",level:3},{value:"Examples",id:"examples",level:3},{value:"Disabling diagnostics",id:"disabling-diagnostics",level:4},{value:"Advanced options",id:"advanced-options",level:4},{value:"Enabling diagnostics for test files only",id:"enabling-diagnostics-for-test-files-only",level:5},{value:"Do not fail on first error",id:"do-not-fail-on-first-error",level:5},{value:"Ignoring some error codes",id:"ignoring-some-error-codes",level:5}];function u(e){const s={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"diagnostics"})," option configures error reporting.\nIt can both be enabled/disabled entirely or limited to a specific type of errors and/or files."]}),"\n",(0,n.jsxs)(s.p,{children:["If a diagnostic is not filtered out, ",(0,n.jsx)(s.code,{children:"ts-jest"})," will fail the compilation and your test."]}),"\n",(0,n.jsx)(s.h3,{id:"disablingenabling",children:"Disabling/enabling"}),"\n",(0,n.jsxs)(s.p,{children:["By default all diagnostics are enabled. This is the same as setting the ",(0,n.jsx)(s.code,{children:"diagnostics"})," option to ",(0,n.jsx)(s.code,{children:"true"}),".\nTo disable all diagnostics, set ",(0,n.jsx)(s.code,{children:"diagnostics"})," to ",(0,n.jsx)(s.code,{children:"false"}),".\nThis might lead to slightly better performance, especially if you're not using Jest's cache."]}),"\n",(0,n.jsx)(s.h3,{id:"advanced-configuration",children:"Advanced configuration"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"diagnostics"})," option's value can also accept an object for more advanced configuration. Each config. key is optional:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"warnOnly"})}),": If specified and ",(0,n.jsx)(s.code,{children:"true"}),", diagnostics will be reported but won't stop compilation (default: ",(0,n.jsx)(s.em,{children:"disabled"}),")."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"ignoreCodes"})}),": List of TypeScript error codes to ignore. Complete list can be found ",(0,n.jsx)(s.a,{href:"https://github.com/Microsoft/TypeScript/blob/main/src/compiler/diagnosticMessages.json",children:"there"}),". By default here are the ones ignored:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"6059"}),": ",(0,n.jsx)(s.em,{children:"'rootDir' is expected to contain all source files."})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"18002"}),": ",(0,n.jsx)(s.em,{children:"The 'files' list in config file is empty."})," (it is strongly recommended including this one)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"18003"}),": ",(0,n.jsx)(s.em,{children:"No inputs were found in config file."})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"exclude"})}),": If specified, diagnostics of source files which path ",(0,n.jsx)(s.strong,{children:"matches"})," will be ignored. This works a bit\nsimilar to ",(0,n.jsx)(s.code,{children:"tsconfig"})," option ",(0,n.jsx)(s.a,{href:"https://www.typescriptlang.org/tsconfig#exclude",children:"exclude"})," with the only difference is that\nin TypeScript, ",(0,n.jsx)(s.code,{children:"exclude"})," will also exclude files from compilation process."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"pretty"})}),": Enables/disables colorful and pretty output of errors (default: ",(0,n.jsx)(s.em,{children:"enabled"}),")."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.h4,{id:"disabling-diagnostics",children:"Disabling diagnostics"}),"\n",(0,n.jsxs)(r.A,{groupId:"code-examples",children:[(0,n.jsx)(o.A,{value:"js",label:"JavaScript",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: false,\n      },\n    ],\n  },\n}\n"})})}),(0,n.jsx)(o.A,{value:"ts",label:"TypeScript",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: false,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,n.jsx)(o.A,{value:"JSON",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process ts,js,tsx,jsx with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "diagnostics": false\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,n.jsx)(s.h4,{id:"advanced-options",children:"Advanced options"}),"\n",(0,n.jsx)(s.h5,{id:"enabling-diagnostics-for-test-files-only",children:"Enabling diagnostics for test files only"}),"\n",(0,n.jsxs)(s.p,{children:["Assuming all your test files ends with ",(0,n.jsx)(s.code,{children:".spec.ts"})," or ",(0,n.jsx)(s.code,{children:".test.ts"}),", using the following config will enable error reporting only for those files:"]}),"\n",(0,n.jsxs)(r.A,{groupId:"code-examples",children:[(0,n.jsx)(o.A,{value:"js",label:"JavaScript",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: {\n          exclude: ['!**/*.(spec|test).ts'],\n        },\n      },\n    ],\n  },\n}\n"})})}),(0,n.jsx)(o.A,{value:"ts",label:"TypeScript",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: {\n          exclude: ['!**/*.(spec|test).ts'],\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,n.jsx)(o.A,{value:"JSON",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process ts,js,tsx,jsx with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "diagnostics": {\n            "exclude": ["!**/*.(spec|test).ts"]\n          }\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,n.jsx)(s.h5,{id:"do-not-fail-on-first-error",children:"Do not fail on first error"}),"\n",(0,n.jsxs)(s.p,{children:["While some diagnostics are stop-blockers for the compilation, most of them are not. If you want the compilation (and so your tests) to continue when encountering those, set the ",(0,n.jsx)(s.code,{children:"warnOnly"})," to ",(0,n.jsx)(s.code,{children:"true"}),":"]}),"\n",(0,n.jsxs)(r.A,{groupId:"code-examples",children:[(0,n.jsx)(o.A,{value:"js",label:"JavaScript",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: {\n          warnOnly: true,\n        },\n      },\n    ],\n  },\n}\n"})})}),(0,n.jsx)(o.A,{value:"ts",label:"TypeScript",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: {\n          warnOnly: true,\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,n.jsx)(o.A,{value:"JSON",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process ts,js,tsx,jsx with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "diagnostics": {\n            "warnOnly": true\n          }\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,n.jsx)(s.h5,{id:"ignoring-some-error-codes",children:"Ignoring some error codes"}),"\n",(0,n.jsxs)(s.p,{children:["All TypeScript error codes can be found ",(0,n.jsx)(s.a,{href:"https://github.com/Microsoft/TypeScript/blob/main/src/compiler/diagnosticMessages.json",children:"there"}),". The ",(0,n.jsx)(s.code,{children:"ignoreCodes"})," option accepts this values:"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["A single ",(0,n.jsx)(s.code,{children:"number"})," (example: ",(0,n.jsx)(s.code,{children:"1009"}),"): unique error code to ignore"]}),"\n",(0,n.jsxs)(s.li,{children:["A ",(0,n.jsx)(s.code,{children:"string"})," with a code (example ",(0,n.jsx)(s.code,{children:'"1009"'}),", ",(0,n.jsx)(s.code,{children:'"TS1009"'})," or ",(0,n.jsx)(s.code,{children:'"TS1009"'}),")"]}),"\n",(0,n.jsxs)(s.li,{children:["A ",(0,n.jsx)(s.code,{children:"string"})," with a list of the above (example: ",(0,n.jsx)(s.code,{children:'"1009, TS2571, 4072"'}),")"]}),"\n",(0,n.jsxs)(s.li,{children:["An ",(0,n.jsx)(s.code,{children:"array"})," of one or more from ",(0,n.jsx)(s.code,{children:"1"})," or ",(0,n.jsx)(s.code,{children:"3"})," (example: ",(0,n.jsx)(s.code,{children:'[1009, "TS2571", "6031"]'}),")"]}),"\n"]}),"\n",(0,n.jsxs)(r.A,{groupId:"code-examples",children:[(0,n.jsx)(o.A,{value:"js",label:"JavaScript",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: {\n          ignoreCodes: [2571, 6031, 18003],\n        },\n      },\n    ],\n  },\n}\n"})})}),(0,n.jsx)(o.A,{value:"ts",label:"TypeScript",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: {\n          ignoreCodes: [2571, 6031, 18003],\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,n.jsx)(o.A,{value:"JSON",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process ts,js,tsx,jsx with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "diagnostics": {\n            "ignoreCodes": [2571, 6031, 18003]\n          }\n        }\n      ]\n    }\n  }\n}\n'})})})]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},7227:(e,s,t)=>{t.d(s,{A:()=>o});t(6540);var n=t(4164);const i={tabItem:"tabItem_Ymn6"};var r=t(4848);function o(e){let{children:s,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,o),hidden:t,children:s})}},9489:(e,s,t)=>{t.d(s,{A:()=>w});var n=t(6540),i=t(4164),r=t(4245),o=t(6347),a=t(6494),l=t(2814),c=t(5167),d=t(9900);function j(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:s,children:t}=e;return(0,n.useMemo)((()=>{const e=s??function(e){return j(e).map((e=>{let{props:{value:s,label:t,attributes:n,default:i}}=e;return{value:s,label:t,attributes:n,default:i}}))}(t);return function(e){const s=(0,c.X)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,t])}function h(e){let{value:s,tabValues:t}=e;return t.some((e=>e.value===s))}function x(e){let{queryString:s=!1,groupId:t}=e;const i=(0,o.W6)(),r=function(e){let{queryString:s=!1,groupId:t}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:s,groupId:t});return[(0,l.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const s=new URLSearchParams(i.location.search);s.set(r,e),i.replace({...i.location,search:s.toString()})}),[r,i])]}function p(e){const{defaultValue:s,queryString:t=!1,groupId:i}=e,r=u(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:s,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!h({value:s,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:s,tabValues:r}))),[c,j]=x({queryString:t,groupId:i}),[p,g]=function(e){let{groupId:s}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(s),[i,r]=(0,d.Dv)(t);return[i,(0,n.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),m=(()=>{const e=c??p;return h({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{m&&l(m)}),[m]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),j(e),g(e)}),[j,g,r]),tabValues:r}}var g=t(1062);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(4848);function b(e){let{className:s,block:t,selectedValue:n,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const s=e.currentTarget,t=l.indexOf(s),i=a[t].value;i!==n&&(c(s),o(i))},j=e=>{let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;s=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;s=l[t]??l[l.length-1];break}}s?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},s),children:a.map((e=>{let{value:s,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===s?0:-1,"aria-selected":n===s,ref:e=>l.push(e),onKeyDown:j,onClick:d,...r,className:(0,i.A)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":n===s}),children:t??s},s)}))})}function v(e){let{lazy:s,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(s){const e=r.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,s)=>(0,n.cloneElement)(e,{key:s,hidden:e.props.value!==i})))})}function y(e){const s=p(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,f.jsx)(b,{...s,...e}),(0,f.jsx)(v,{...s,...e})]})}function w(e){const s=(0,g.A)();return(0,f.jsx)(y,{...e,children:j(e.children)},String(s))}},8453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>a});var n=t(6540);const i={},r=n.createContext(i);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);