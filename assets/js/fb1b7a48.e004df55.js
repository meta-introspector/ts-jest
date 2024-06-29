"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[9566],{7698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=n(4848),o=n(8453);const i={title:"Stringify content option"},r=void 0,a={id:"getting-started/options/stringifyContentPathRegex",title:"Stringify content option",description:"The stringifyContentPathRegex option has been kept for backward compatibility of HTML_TRANSFORM",source:"@site/versioned_docs/version-28.0/getting-started/options/stringifyContentPathRegex.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/stringifyContentPathRegex",permalink:"/ts-jest/docs/28.0/getting-started/options/stringifyContentPathRegex",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-28.0/getting-started/options/stringifyContentPathRegex.md",tags:[],version:"28.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1719672066e3,frontMatter:{title:"Stringify content option"}},c={},d=[{value:"Example",id:"example",level:3}];function l(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"stringifyContentPathRegex"})," option has been kept for backward compatibility of ",(0,s.jsx)(t.code,{children:"__HTML_TRANSFORM__"}),"\nIt's a regular expression pattern used to match the path of file to be transformed.\nIf it matches, the file will be exported as a module exporting its content."]}),"\n",(0,s.jsxs)(t.p,{children:["Let's say for example that you have a file ",(0,s.jsx)(t.code,{children:"foo.ts"})," which contains ",(0,s.jsx)(t.code,{children:'export default "bar"'}),", and your ",(0,s.jsx)(t.code,{children:"stringifyContentPathRegex"})," is set to ",(0,s.jsx)(t.code,{children:"foo\\\\.ts$"}),", the resulting module won't be the result of compiling ",(0,s.jsx)(t.code,{children:"foo.ts"})," source, but instead it'll be a module which exports the string ",(0,s.jsx)(t.code,{children:'"export default \\"bar\\""'}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"CAUTION"}),": Whatever file(s) you want to match with ",(0,s.jsx)(t.code,{children:"stringifyContentPathRegex"})," pattern, you must ensure the Jest ",(0,s.jsx)(t.code,{children:"transform"})," option pointing to ",(0,s.jsx)(t.code,{children:"ts-jest"})," matches them. You may also have to add the extension(s) of this/those file(s) to ",(0,s.jsx)(t.code,{children:"moduleFileExtensions"})," Jest option."]}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.code,{children:"jest.config.js"})," version, you could do as in the ",(0,s.jsx)(t.code,{children:"package.json"})," version of the config, but extending from the preset will ensure more compatibility without any changes when updating."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// jest.config.js\n// Here `defaults` can be replaced with any other preset\nconst { defaults: tsjPreset } = require('ts-jest/presets')\n\nmodule.exports = {\n  // [...]\n  moduleFileExtensions: [...tsjPreset.moduleFileExtensions, 'html'],\n  transform: {\n    ...tsjPreset.transform,\n    '\\\\.html$': 'ts-jest',\n  },\n  globals: {\n    'ts-jest': {\n      stringifyContentPathRegex: /\\.html$/,\n    },\n  },\n}\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "moduleFileExtensions": ["js", "ts", "html"],\n    "transform": {\n      "\\\\.(html|ts|js)$": "ts-jest"\n    },\n    "globals": {\n      "ts-jest": {\n        "stringifyContentPathRegex": "\\\\.html$"\n      }\n    }\n  }\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(6540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);