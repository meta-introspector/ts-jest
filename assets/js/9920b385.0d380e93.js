"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[4990],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=p(n),b=r,m=f["".concat(s,".").concat(b)]||f[b]||u[b]||o;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1366:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),l=["components"],i={title:"Babel Config option"},s=void 0,p={unversionedId:"getting-started/options/babelConfig",id:"getting-started/options/babelConfig",title:"Babel Config option",description:"ts-jest by default does NOT use Babel. But you may want to use it, especially if your code rely on Babel plugins to make some transformations. ts-jest can call the BabelJest processor once TypeScript has transformed the source into JavaScript.",source:"@site/docs/getting-started/options/babelConfig.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/babelConfig",permalink:"/ts-jest/docs/next/getting-started/options/babelConfig",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/options/babelConfig.md",tags:[],version:"current",frontMatter:{title:"Babel Config option"}},c={},u=[{value:"Examples",id:"examples",level:3},{value:"Use default <code>babelrc</code> file",id:"use-default-babelrc-file",level:4},{value:"Path to a <code>babelrc</code> file",id:"path-to-a-babelrc-file",level:4},{value:"Inline compiler options",id:"inline-compiler-options",level:4}],f={toc:u};function b(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," by default does ",(0,o.kt)("strong",{parentName:"p"},"NOT")," use Babel. But you may want to use it, especially if your code rely on Babel plugins to make some transformations. ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," can call the BabelJest processor once TypeScript has transformed the source into JavaScript."),(0,o.kt)("p",null,"The option is ",(0,o.kt)("inlineCode",{parentName:"p"},"babelConfig")," and it works pretty much as the ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig")," option, except that it is disabled by default. Here is the possible values it can take:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"false"),": the default, disables the use of Babel"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"true"),": enables Babel processing. ",(0,o.kt)("inlineCode",{parentName:"li"},"ts-jest")," will try to find a ",(0,o.kt)("inlineCode",{parentName:"li"},".babelrc"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".babelrc.js"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"babel.config.js")," file or a ",(0,o.kt)("inlineCode",{parentName:"li"},"babel")," section in the ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," file of your project and use it as the config to pass to ",(0,o.kt)("inlineCode",{parentName:"li"},"babel-jest")," processor."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{ ... }"),": inline ",(0,o.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/next/options"},"Babel options"),". You can also set this to an empty object (",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),") so that the default Babel config file is not used.")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("h4",{id:"use-default-babelrc-file"},"Use default ",(0,o.kt)("inlineCode",{parentName:"h4"},"babelrc")," file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  transform: {\n    '<regex_match_files>': [\n      'ts-jest',\n      {\n        babelConfig: true,\n      },\n    ],\n  },\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n      "<regex_match_files>": [\n        "ts-jest",\n        {\n          "babelConfig": true\n        }\n      ]\n    }\n  }\n}\n')),(0,o.kt)("h4",{id:"path-to-a-babelrc-file"},"Path to a ",(0,o.kt)("inlineCode",{parentName:"h4"},"babelrc")," file"),(0,o.kt)("p",null,"The path should be relative to the current working directory where you start Jest from. You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"\\<rootDir>")," in the path, or use an absolute path (this last one is strongly not recommended)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  transform: {\n    '<regex_match_files>': [\n      'ts-jest',\n      {\n        babelConfig: 'babelrc.test.js',\n      },\n    ],\n  },\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// OR jest.config.js with require for babelrc\nmodule.exports = {\n  // [...]\n  transform: {\n    '<regex_match_files>': [\n      'ts-jest',\n      {\n        babelConfig: require('./babelrc.test.js'),\n      },\n    ],\n  },\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n      "<regex_match_files>": [\n        "ts-jest",\n        {\n          "babelConfig": "babelrc.test.js"\n        }\n      ]\n    }\n  }\n}\n')),(0,o.kt)("h4",{id:"inline-compiler-options"},"Inline compiler options"),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/next/options"},"Babel options")," to know what can be used there."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  transform: {\n    '<regex_match_files>': [\n      'ts-jest',\n      {\n        babelConfig: {\n          comments: false,\n          plugins: ['@babel/plugin-transform-for-of'],\n        },\n      },\n    ],\n  },\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n      "<regex_match_files>": [\n        "ts-jest",\n        {\n          "babelConfig": {\n            "comments": false,\n            "plugins": ["@babel/plugin-transform-for-of"]\n          }\n        }\n      ]\n    }\n  }\n}\n')))}b.isMDXComponent=!0}}]);