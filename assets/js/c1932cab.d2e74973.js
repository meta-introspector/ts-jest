"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[5588],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=o,f=b["".concat(i,".").concat(d)]||b[d]||u[d]||r;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},5575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(4137));const r={title:"Babel Config option"},l=void 0,s={unversionedId:"getting-started/options/babelConfig",id:"version-28.0/getting-started/options/babelConfig",title:"Babel Config option",description:"ts-jest by default does NOT use Babel. But you may want to use it, especially if your code rely on Babel plugins to make some transformations. ts-jest can call the BabelJest processor once TypeScript has transformed the source into JavaScript.",source:"@site/versioned_docs/version-28.0/getting-started/options/babelConfig.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/babelConfig",permalink:"/ts-jest/docs/28.0/getting-started/options/babelConfig",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-28.0/getting-started/options/babelConfig.md",tags:[],version:"28.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1686678696,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{title:"Babel Config option"}},i={},p=[{value:"Examples",id:"examples",level:3},{value:"Use default <code>babelrc</code> file",id:"use-default-babelrc-file",level:4},{value:"Path to a <code>babelrc</code> file",id:"path-to-a-babelrc-file",level:4},{value:"Inline compiler options",id:"inline-compiler-options",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," by default does ",(0,o.kt)("strong",{parentName:"p"},"NOT")," use Babel. But you may want to use it, especially if your code rely on Babel plugins to make some transformations. ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," can call the BabelJest processor once TypeScript has transformed the source into JavaScript."),(0,o.kt)("p",null,"The option is ",(0,o.kt)("inlineCode",{parentName:"p"},"babelConfig")," and it works pretty much as the ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig")," option, except that it is disabled by default. Here is the possible values it can take:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"false"),": the default, disables the use of Babel"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"true"),": enables Babel processing. ",(0,o.kt)("inlineCode",{parentName:"li"},"ts-jest")," will try to find a ",(0,o.kt)("inlineCode",{parentName:"li"},".babelrc"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".babelrc.js"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"babel.config.js")," file or a ",(0,o.kt)("inlineCode",{parentName:"li"},"babel")," section in the ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," file of your project and use it as the config to pass to ",(0,o.kt)("inlineCode",{parentName:"li"},"babel-jest")," processor."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{ ... }"),": inline ",(0,o.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/next/options"},"Babel options"),". You can also set this to an empty object (",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),") so that the default Babel config file is not used.")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("h4",{id:"use-default-babelrc-file"},"Use default ",(0,o.kt)("inlineCode",{parentName:"h4"},"babelrc")," file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      babelConfig: true,\n    },\n  },\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "babelConfig": true\n      }\n    }\n  }\n}\n')),(0,o.kt)("h4",{id:"path-to-a-babelrc-file"},"Path to a ",(0,o.kt)("inlineCode",{parentName:"h4"},"babelrc")," file"),(0,o.kt)("p",null,"The path should be relative to the current working directory where you start Jest from. You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"\\<rootDir>")," in the path, or use an absolute path (this last one is strongly not recommended)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      babelConfig: 'babelrc.test.js',\n    },\n  },\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// OR jest.config.js with require for babelrc\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      babelConfig: require('./babelrc.test.js'),\n    },\n  },\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "babelConfig": "babelrc.test.js"\n      }\n    }\n  }\n}\n')),(0,o.kt)("h4",{id:"inline-compiler-options"},"Inline compiler options"),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/next/options"},"Babel options")," to know what can be used there."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      babelConfig: {\n        comments: false,\n        plugins: ['@babel/plugin-transform-for-of'],\n      },\n    },\n  },\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "babelConfig": {\n          "comments": false,\n          "plugins": ["@babel/plugin-transform-for-of"]\n        }\n      }\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);