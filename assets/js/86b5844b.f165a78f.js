"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[1621],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},3992:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),o=n(6010),s=n(2957),l=n(6775),i=n(5238),u=n(3609),c=n(2560);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,u]=m({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),g=(()=>{const e=i??p;return f({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var g=n(1048);const v="tabList__CuJ",h="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==l&&(p(t),i(r))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:d},s,{className:(0,o.Z)("tabs__item",h,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(j,(0,r.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},7161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(7462),a=(n(7294),n(4137)),o=n(3992),s=n(425);const l={id:"react-native",title:"Using with React Native"},i=void 0,u={unversionedId:"guides/react-native",id:"guides/react-native",title:"Using with React Native",description:"To use ts-jest with React Native + TypeScript and Babel 7, you'll first need to follow this tutorial.",source:"@site/docs/guides/react-native.md",sourceDirName:"guides",slug:"/guides/react-native",permalink:"/ts-jest/docs/next/guides/react-native",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/guides/react-native.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1701162580,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{id:"react-native",title:"Using with React Native"},sidebar:"docs",previous:{title:"Mock ES6 class",permalink:"/ts-jest/docs/next/guides/mock-es6-class"},next:{title:"Troubleshooting",permalink:"/ts-jest/docs/next/guides/troubleshooting"}},c={},p=[{value:"Babel config",id:"babel-config",level:3},{value:"TypeScript Configuration",id:"typescript-configuration",level:3},{value:"Jest config",id:"jest-config",level:3}],d={toc:p};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-jest")," with React Native + TypeScript and Babel 7, you'll first need to follow ",(0,a.kt)("a",{parentName:"p",href:"https://reactnative.dev/blog/2018/05/07/using-typescript-with-react-native"},"this tutorial"),"."),(0,a.kt)("p",null,"After that, some little modifications will be required as follows:"),(0,a.kt)("h3",{id:"babel-config"},"Babel config"),(0,a.kt)("p",null,"If you didn't yet, move any Babel config from ",(0,a.kt)("inlineCode",{parentName:"p"},".babelrc")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"babel.config.js"),". It should at least contain:"),(0,a.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  presets: ['module:metro-react-native-babel-preset'],\n}\n"))),(0,a.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  presets: ['module:metro-react-native-babel-preset'],\n}\n\nexport default jestConfig\n")))),(0,a.kt)("h3",{id:"typescript-configuration"},"TypeScript Configuration"),(0,a.kt)("p",null,"Create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.spec.json")," at the root of your project with the following content"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// tsconfig.spec.json\n{\n  "extends": "./tsconfig.json",\n  "compilerOptions": {\n    "jsx": "react"\n  }\n}\n')),(0,a.kt)("h3",{id:"jest-config"},"Jest config"),(0,a.kt)("p",null,"In the same way that you moved Babel config, move Jest config from ",(0,a.kt)("inlineCode",{parentName:"p"},"jest")," key of ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.config.js"),". It should look like this:"),(0,a.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"const { defaults: tsjPreset } = require('ts-jest/presets')\n\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  preset: 'react-native',\n  transform: {\n    '^.+\\\\.jsx$': 'babel-jest',\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: 'tsconfig.spec.json',\n      },\n    ],\n  },\n  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],\n}\n"))),(0,a.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import { defaults as tsjPreset } from 'ts-jest/presets'\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  preset: 'react-native',\n  transform: {\n    '^.+\\\\.jsx$': 'babel-jest',\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: 'tsconfig.spec.json',\n      },\n    ],\n  },\n  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],\n}\n\nexport default jestConfig\n")))))}f.isMDXComponent=!0}}]);