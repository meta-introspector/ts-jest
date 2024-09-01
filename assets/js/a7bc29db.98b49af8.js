"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[9123],{8474:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>o,toc:()=>j});var r=t(4848),n=t(8453),c=t(9489),l=t(7227);const i={id:"presets",title:"Presets"},d=void 0,o={id:"getting-started/presets",title:"Presets",description:"The presets",source:"@site/versioned_docs/version-29.2/getting-started/presets.md",sourceDirName:"getting-started",slug:"/getting-started/presets",permalink:"/ts-jest/docs/getting-started/presets",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.2/getting-started/presets.md",tags:[],version:"29.2",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172519831e4,frontMatter:{id:"presets",title:"Presets"},sidebar:"version-29.1-docs",previous:{title:"Installation",permalink:"/ts-jest/docs/getting-started/installation"},next:{title:"Options",permalink:"/ts-jest/docs/getting-started/options"}},a={},j=[{value:"The presets",id:"the-presets",level:3},{value:"Basic usage",id:"basic-usage",level:3},{value:"Advanced",id:"advanced",level:3}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h3,{id:"the-presets",children:"The presets"}),"\n",(0,r.jsx)(s.admonition,{type:"important",children:(0,r.jsxs)(s.p,{children:["Starting from ",(0,r.jsx)(s.strong,{children:"v28.0.0"}),", ",(0,r.jsx)(s.code,{children:"ts-jest"})," will gradually opt in adoption of ",(0,r.jsx)(s.code,{children:"esbuild"}),"/",(0,r.jsx)(s.code,{children:"swc"})," more to improve the performance. To make the transition smoothly, we introduce ",(0,r.jsx)(s.code,{children:"legacy"})," presets as a fallback when the new codes don't work yet."]})}),"\n",(0,r.jsx)(s.admonition,{type:"caution",children:(0,r.jsxs)(s.p,{children:["The list of ",(0,r.jsx)(s.code,{children:"preset"})," below is now deprecated in favor of util functions. If one is using ",(0,r.jsx)(s.code,{children:"preset"})," in Jest config, please run ",(0,r.jsx)(s.code,{children:"npx ts-jest config:migrate"})," or look into ",(0,r.jsx)(s.a,{href:"#advanced",children:"Advanced"})," section below for alternative solutions."]})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"ts-jest"})," comes with several presets, covering most of the project's base configuration:"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Preset name"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ts-jest/presets/default"}),(0,r.jsx)("br",{}),"or ",(0,r.jsx)(s.code,{children:"ts-jest"})]}),(0,r.jsxs)(s.td,{children:["TypeScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"CommonJS"})," syntax, leaving JavaScript files (",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:"jsx"}),") as-is."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ts-jest/presets/default-legacy"}),(0,r.jsx)("br",{}),"or ",(0,r.jsx)(s.code,{children:"ts-jest/legacy"})," (",(0,r.jsx)(s.strong,{children:"LEGACY"}),")"]}),(0,r.jsxs)(s.td,{children:["TypeScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"CommonJS"})," syntax, leaving JavaScript files (",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:"jsx"}),") as-is."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ts-jest/presets/default-esm"}),(0,r.jsx)("br",{})]}),(0,r.jsxs)(s.td,{children:["TypeScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"ESM"})," syntax, leaving JavaScript files (",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:"jsx"}),") as-is."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ts-jest/presets/default-esm-legacy"}),(0,r.jsx)("br",{})," (",(0,r.jsx)(s.strong,{children:"LEGACY"}),")"]}),(0,r.jsxs)(s.td,{children:["TypeScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"ESM"})," syntax, leaving JavaScript files (",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:"jsx"}),") as-is."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"ts-jest/presets/js-with-ts"})}),(0,r.jsxs)(s.td,{children:["TypeScript and JavaScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),", ",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:".jsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"CommonJS"})," syntax.",(0,r.jsx)("br",{}),"You'll need to set ",(0,r.jsx)(s.code,{children:"allowJs"})," to ",(0,r.jsx)(s.code,{children:"true"})," in your ",(0,r.jsx)(s.code,{children:"tsconfig.json"})," file."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ts-jest/presets/js-with-ts-legacy"})," (",(0,r.jsx)(s.strong,{children:"LEGACY"}),")"]}),(0,r.jsxs)(s.td,{children:["TypeScript and JavaScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),", ",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:".jsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"CommonJS"})," syntax.",(0,r.jsx)("br",{}),"You'll need to set ",(0,r.jsx)(s.code,{children:"allowJs"})," to ",(0,r.jsx)(s.code,{children:"true"})," in your ",(0,r.jsx)(s.code,{children:"tsconfig.json"})," file."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"ts-jest/presets/js-with-ts-esm"})}),(0,r.jsxs)(s.td,{children:["TypeScript and JavaScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),", ",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:".jsx"}),", ",(0,r.jsx)(s.code,{children:".mjs"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"ESM"})," syntax.",(0,r.jsx)("br",{}),"You'll need to set ",(0,r.jsx)(s.code,{children:"allowJs"})," to ",(0,r.jsx)(s.code,{children:"true"})," in your ",(0,r.jsx)(s.code,{children:"tsconfig.json"})," file."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ts-jest/presets/js-with-ts-esm-legacy"})," (",(0,r.jsx)(s.strong,{children:"LEGACY"}),")"]}),(0,r.jsxs)(s.td,{children:["TypeScript and JavaScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),", ",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:".jsx"}),", ",(0,r.jsx)(s.code,{children:".mjs"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"ESM"})," syntax.",(0,r.jsx)("br",{}),"You'll need to set ",(0,r.jsx)(s.code,{children:"allowJs"})," to ",(0,r.jsx)(s.code,{children:"true"})," in your ",(0,r.jsx)(s.code,{children:"tsconfig.json"})," file."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"ts-jest/presets/js-with-babel"})}),(0,r.jsxs)(s.td,{children:["TypeScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"CommonJS"})," syntax, and JavaScript files (",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:"jsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"babel-jest"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ts-jest/presets/js-with-babel-legacy"})," (",(0,r.jsx)(s.strong,{children:"LEGACY"}),")"]}),(0,r.jsxs)(s.td,{children:["TypeScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"CommonJS"})," syntax, and JavaScript files (",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:"jsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"babel-jest"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"ts-jest/presets/js-with-babel-esm"})}),(0,r.jsxs)(s.td,{children:["TypeScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"ESM"})," syntax, and JavaScript files (",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:"jsx"}),", ",(0,r.jsx)(s.code,{children:".mjs"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"babel-jest"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ts-jest/presets/js-with-babel-esm-legacy"})," (",(0,r.jsx)(s.strong,{children:"LEGACY"}),")"]}),(0,r.jsxs)(s.td,{children:["TypeScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"ESM"})," syntax, and JavaScript files (",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:"jsx"}),", ",(0,r.jsx)(s.code,{children:".mjs"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"babel-jest"}),"."]})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"basic-usage",children:"Basic usage"}),"\n",(0,r.jsxs)(s.p,{children:["In most cases, simply setting the ",(0,r.jsx)(s.code,{children:"preset"})," key to the desired preset name in your Jest config should be enough to start\nusing TypeScript with Jest (assuming you added ",(0,r.jsx)(s.code,{children:"ts-jest"})," to your ",(0,r.jsx)(s.code,{children:"devDependencies"})," of course):"]}),"\n",(0,r.jsxs)(c.A,{groupId:"code-examples",children:[(0,r.jsx)(l.A,{value:"js",label:"JavaScript",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\nconst { createDefaultPreset } = require('ts-jest')\n\nconst defaultPreset = createDefaultPreset()\n\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  // Replace `ts-jest` with the preset you want to use\n  // from the above list\n  ...defaultPreset,\n}\n"})})}),(0,r.jsx)(l.A,{value:"ts",label:"TypeScript",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport { type JestConfigWithTsJest, createDefaultPreset } from 'ts-jest'\n\nconst defaultPreset = createDefaultPreset()\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  // Replace `ts-jest` with the preset you want to use\n  // from the above list\n  ...defaultPreset,\n}\n\nexport default jestConfig\n"})})})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note:"})," presets use ",(0,r.jsx)(s.code,{children:"testMatch"}),", like Jest does in its defaults. If you want to use ",(0,r.jsx)(s.code,{children:"testRegex"})," instead in your configuration, you MUST set ",(0,r.jsx)(s.code,{children:"testMatch"})," to ",(0,r.jsx)(s.code,{children:"null"})," or Jest will bail."]}),"\n",(0,r.jsx)(s.h3,{id:"advanced",children:"Advanced"}),"\n",(0,r.jsx)(s.p,{children:"There are several util functions to create and extend the existing presets:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"createDefaultPreset"}),": for default preset"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"createDefaultLegacyPreset"}),": for default preset in legacy mode"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"createDefaultEsmPreset"}),": for default ESM preset"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"createDefaultEsmLegacyPreset"}),": for default ESM preset in legacy mode"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"createJsWithTsPreset"}),": for ",(0,r.jsx)(s.code,{children:"js-with-ts"})," preset"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"createJsWithTsLegacyPreset"}),": for ",(0,r.jsx)(s.code,{children:"js-with-ts"})," preset in legacy mode"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"createJsWithTsEsmPreset"}),": for ",(0,r.jsx)(s.code,{children:"js-with-ts"})," ESM preset"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"createJsWithTsEsmLegacyPreset"}),": for ",(0,r.jsx)(s.code,{children:"js-with-ts"})," ESM preset in legacy mode"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"createJsWithBabelPreset"}),": for ",(0,r.jsx)(s.code,{children:"js-with-babel"})," preset"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"createJsWithBabelLegacyPreset"}),": for ",(0,r.jsx)(s.code,{children:"js-with-babel"})," preset in legacy mode"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"createJsWithBabelEsmPreset"}),": for ",(0,r.jsx)(s.code,{children:"js-with-babel"})," ESM preset"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"createJsWithBabelEsmLegacyPreset"}),": for ",(0,r.jsx)(s.code,{children:"js-with-babel"})," ESM preset in legacy mode"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Example:"}),"\n",(0,r.jsxs)(c.A,{groupId:"code-examples",children:[(0,r.jsx)(l.A,{value:"js",label:"JavaScript",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\nconst { createDefaultPreset } = require('ts-jest')\n\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    ...createDefaultPreset().transform,\n    // [...]\n  },\n}\n"})})}),(0,r.jsx)(l.A,{value:"ts",label:"TypeScript",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport { createDefaultPreset, type JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    ...createDefaultPreset().transform,\n    // [...]\n  },\n}\n\nexport default jestConfig\n"})})})]})]})}function x(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},7227:(e,s,t)=>{t.d(s,{A:()=>l});t(6540);var r=t(4164);const n={tabItem:"tabItem_Ymn6"};var c=t(4848);function l(e){let{children:s,hidden:t,className:l}=e;return(0,c.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,l),hidden:t,children:s})}},9489:(e,s,t)=>{t.d(s,{A:()=>w});var r=t(6540),n=t(4164),c=t(4245),l=t(6347),i=t(6494),d=t(2814),o=t(5167),a=t(9900);function j(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:s,children:t}=e;return(0,r.useMemo)((()=>{const e=s??function(e){return j(e).map((e=>{let{props:{value:s,label:t,attributes:r,default:n}}=e;return{value:s,label:t,attributes:r,default:n}}))}(t);return function(e){const s=(0,o.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,t])}function x(e){let{value:s,tabValues:t}=e;return t.some((e=>e.value===s))}function u(e){let{queryString:s=!1,groupId:t}=e;const n=(0,l.W6)(),c=function(e){let{queryString:s=!1,groupId:t}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:s,groupId:t});return[(0,d.aZ)(c),(0,r.useCallback)((e=>{if(!c)return;const s=new URLSearchParams(n.location.search);s.set(c,e),n.replace({...n.location,search:s.toString()})}),[c,n])]}function p(e){const{defaultValue:s,queryString:t=!1,groupId:n}=e,c=h(e),[l,d]=(0,r.useState)((()=>function(e){let{defaultValue:s,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!x({value:s,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:c}))),[o,j]=u({queryString:t,groupId:n}),[p,f]=function(e){let{groupId:s}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(s),[n,c]=(0,a.Dv)(t);return[n,(0,r.useCallback)((e=>{t&&c.set(e)}),[t,c])]}({groupId:n}),b=(()=>{const e=o??p;return x({value:e,tabValues:c})?e:null})();(0,i.A)((()=>{b&&d(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);d(e),j(e),f(e)}),[j,f,c]),tabValues:c}}var f=t(1062);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(4848);function g(e){let{className:s,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,c.a_)(),a=e=>{const s=e.currentTarget,t=d.indexOf(s),n=i[t].value;n!==r&&(o(s),l(n))},j=e=>{let s=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;s=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;s=d[t]??d[d.length-1];break}}s?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},s),children:i.map((e=>{let{value:s,label:t,attributes:c}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:r===s?0:-1,"aria-selected":r===s,ref:e=>d.push(e),onKeyDown:j,onClick:a,...c,className:(0,n.A)("tabs__item",b.tabItem,c?.className,{"tabs__item--active":r===s}),children:t??s},s)}))})}function y(e){let{lazy:s,children:t,selectedValue:c}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(s){const e=l.find((e=>e.props.value===c));return e?(0,r.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:l.map(((e,s)=>(0,r.cloneElement)(e,{key:s,hidden:e.props.value!==c})))})}function v(e){const s=p(e);return(0,m.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,m.jsx)(g,{...s,...e}),(0,m.jsx)(y,{...s,...e})]})}function w(e){const s=(0,f.A)();return(0,m.jsx)(v,{...e,children:j(e.children)},String(s))}},8453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>i});var r=t(6540);const n={},c=r.createContext(n);function l(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);