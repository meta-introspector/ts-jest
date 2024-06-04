"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[8632],{474:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var t=n(4848),r=n(8453);const o={id:"esm-support",title:"ESM Support"},i=void 0,c={id:"guides/esm-support",title:"ESM Support",description:"To use ts-jest with ESM support:",source:"@site/versioned_docs/version-27.0/guides/esm-support.md",sourceDirName:"guides",slug:"/guides/esm-support",permalink:"/ts-jest/docs/27.0/guides/esm-support",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.0/guides/esm-support.md",tags:[],version:"27.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1717522574e3,frontMatter:{id:"esm-support",title:"ESM Support"},sidebar:"version-27.0-docs",previous:{title:"Version checking",permalink:"/ts-jest/docs/27.0/getting-started/version-checking"},next:{title:"Mock ES6 class",permalink:"/ts-jest/docs/27.0/guides/mock-es6-class"}},l={},a=[{value:"ESM presets",id:"esm-presets",level:3},{value:"Examples",id:"examples",level:3},{value:"Manual configuration",id:"manual-configuration",level:4},{value:"Use ESM presets",id:"use-esm-presets",level:4}];function d(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["To use ",(0,t.jsx)(s.code,{children:"ts-jest"})," with ESM support:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Check ",(0,t.jsx)(s.a,{href:"https://jestjs.io/docs/en/ecmascript-modules",children:"ESM Jest documentation"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Enable ",(0,t.jsx)(s.a,{href:"../getting-started/options/useESM",children:"useESM"})," ",(0,t.jsx)(s.code,{children:"true"})," for ",(0,t.jsx)(s.code,{children:"ts-jest"})," config."]}),"\n",(0,t.jsxs)(s.li,{children:["Include ",(0,t.jsx)(s.code,{children:".ts"})," in ",(0,t.jsx)(s.a,{href:"https://jestjs.io/docs/en/next/configuration#extensionstotreatasesm-arraystring",children:"extensionsToTreatAsEsm"})," Jest config option."]}),"\n",(0,t.jsxs)(s.li,{children:["Ensure that ",(0,t.jsx)(s.code,{children:"tsconfig"})," has ",(0,t.jsx)(s.code,{children:"module"})," with value for ESM, e.g. ",(0,t.jsx)(s.code,{children:"ES2015"})," or ",(0,t.jsx)(s.code,{children:"ES2020"})," etc..."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"esm-presets",children:"ESM presets"}),"\n",(0,t.jsxs)(s.p,{children:["There are also ",(0,t.jsx)(s.a,{href:"/ts-jest/docs/27.0/getting-started/presets",children:"3 presets"})," to work with ESM."]}),"\n",(0,t.jsx)(s.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.h4,{id:"manual-configuration",children:"Manual configuration"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  extensionsToTreatAsEsm: ['.ts'],\n  globals: {\n    'ts-jest': {\n      useESM: true,\n    },\n  },\n  moduleNameMapper: {\n    '^(\\\\.{1,2}/.*)\\\\.js$': '$1',\n  },\n}\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'// OR package.json\n{\n  // [...]\n  "jest": {\n    "extensionsToTreatAsEsm": [".ts"],\n    "globals": {\n      "ts-jest": {\n        "useESM": true\n      }\n    },\n    "moduleNameMapper": {\n      "^(\\\\.{1,2}/.*)\\\\.js$": "$1"\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(s.h4,{id:"use-esm-presets",children:"Use ESM presets"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  preset: 'ts-jest/presets/default-esm', // or other ESM presets\n  globals: {\n    'ts-jest': {\n      useESM: true,\n    },\n  },\n  moduleNameMapper: {\n    '^(\\\\.{1,2}/.*)\\\\.js$': '$1',\n  },\n}\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'// OR package.json\n{\n  // [...]\n  "jest": {\n    "preset": "ts-jest/presets/default-esm", // or other ESM presets,\n    "globals": {\n      "ts-jest": {\n        "useESM": true\n      }\n    },\n    "moduleNameMapper": {\n      "^(\\\\.{1,2}/.*)\\\\.js$": "$1"\n    }\n  }\n}\n'})})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>c});var t=n(6540);const r={},o=t.createContext(r);function i(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);