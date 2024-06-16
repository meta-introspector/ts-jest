"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[6018],{8994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var s=n(4848),a=n(8453),r=n(9489),o=n(7227);const l={title:"Isolated Modules option"},i=void 0,c={id:"getting-started/options/isolatedModules",title:"Isolated Modules option",description:"By default ts-jest uses TypeScript compiler in the context of a project (yours), with full type-checking and features.",source:"@site/docs/getting-started/options/isolatedModules.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/isolatedModules",permalink:"/ts-jest/docs/next/getting-started/options/isolatedModules",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/options/isolatedModules.md",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1718567661e3,frontMatter:{title:"Isolated Modules option"}},u={},d=[{value:"Example",id:"example",level:3},{value:"Performance",id:"performance",level:2},{value:"Example",id:"example-1",level:3},{value:"Caveats",id:"caveats",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["By default ",(0,s.jsx)(t.code,{children:"ts-jest"})," uses TypeScript compiler in the context of a project (yours), with full type-checking and features.\nBut it can also be used to compile each file separately, what TypeScript calls an 'isolated module'.\nThat's what the ",(0,s.jsx)(t.code,{children:"isolatedModules"})," option (which defaults to ",(0,s.jsx)(t.code,{children:"false"}),") does."]}),"\n",(0,s.jsxs)(t.p,{children:["You'll lose type-checking ability and some features such as ",(0,s.jsx)(t.code,{children:"const enum"}),", but in the case you plan on using Jest with the cache disabled (",(0,s.jsx)(t.code,{children:"jest --no-cache"}),"), your tests will then run much faster."]}),"\n",(0,s.jsx)(t.p,{children:"Here is how to disable type-checking and compile each file as an isolated module:"}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(r.A,{groupId:"code-examples",children:[(0,s.jsx)(o.A,{value:"js",label:"JavaScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        isolatedModules: true,\n      },\n    ],\n  },\n}\n"})})}),(0,s.jsx)(o.A,{value:"ts",label:"TypeScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        isolatedModules: true,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,s.jsx)(o.A,{value:"JSON",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n    // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "isolatedModules": true\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,s.jsx)(t.h2,{id:"performance",children:"Performance"}),"\n",(0,s.jsxs)(t.p,{children:["Using ",(0,s.jsx)(t.code,{children:"isolatedModules: false"})," comes with a cost of performance comparing to ",(0,s.jsx)(t.code,{children:"isolatedModules: true"}),". There is a way\nto improve the performance when using this mode by changing the value of ",(0,s.jsx)(t.code,{children:"include"})," in ",(0,s.jsx)(t.code,{children:"tsconfig"})," which is used by ",(0,s.jsx)(t.code,{children:"ts-jest"}),".\nThe least amount of files which are provided in ",(0,s.jsx)(t.code,{children:"include"}),", the more performance the test run can gain."]}),"\n",(0,s.jsx)(t.h3,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'// tsconfig.json\n{\n  // ...other configs\n  "include": ["my-typings/*", "my-global-modules/*"]\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"caveats",children:"Caveats"}),"\n",(0,s.jsxs)(t.p,{children:["Limiting the amount of files loaded via ",(0,s.jsx)(t.code,{children:"include"})," can greatly boost performance when running tests. However, the trade off\nis ",(0,s.jsx)(t.code,{children:"ts-jest"})," might not recognize all files which are intended to use with ",(0,s.jsx)(t.code,{children:"jest"}),". One can run into issues with custom typings,\nglobal modules, etc..."]}),"\n",(0,s.jsxs)(t.p,{children:["The suggested solution is what is needed for the test environment should be captured by\nglob patterns in ",(0,s.jsx)(t.code,{children:"include"}),", to gain both performance boost and avoid breaking behaviors."]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var s=n(4164);const a={tabItem:"tabItem_Ymn6"};var r=n(4848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,o),hidden:n,children:t})}},9489:(e,t,n)=>{n.d(t,{A:()=>w});var s=n(6540),a=n(4164),r=n(4245),o=n(6347),l=n(6494),i=n(2814),c=n(5167),u=n(9900);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:a}}=e;return{value:t,label:n,attributes:s,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=h(e),[o,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[c,d]=m({queryString:n,groupId:a}),[f,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Dv)(n);return[a,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=c??f;return p({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),j(e)}),[d,j,r]),tabValues:r}}var j=n(1062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(4848);function x(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),a=l[n].value;a!==s&&(c(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...r,className:(0,a.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,b.jsx)(x,{...t,...e}),(0,b.jsx)(v,{...t,...e})]})}function w(e){const t=(0,j.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(6540);const a={},r=s.createContext(a);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);