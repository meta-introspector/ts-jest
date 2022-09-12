"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[1400],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,b=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2717:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=["components"],l={id:"babel7-or-ts",title:"Babel7 or TypeScript"},p=void 0,s={unversionedId:"babel7-or-ts",id:"babel7-or-ts",title:"Babel7 or TypeScript",description:"In Sept. 2018 Babel7 got released with an interesting preset: @babel/preset-typescript.",source:"@site/docs/babel7-or-ts.md",sourceDirName:".",slug:"/babel7-or-ts",permalink:"/ts-jest/docs/next/babel7-or-ts",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/babel7-or-ts.md",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1662989764,formattedLastUpdatedAt:"Sep 12, 2022",frontMatter:{id:"babel7-or-ts",title:"Babel7 or TypeScript"},sidebar:"docs",previous:{title:"Using with monorepo",permalink:"/ts-jest/docs/next/guides/using-with-monorepo"},next:{title:"Migration from <=23.10",permalink:"/ts-jest/docs/next/migration"}},c={},u=[{value:"Limitations",id:"limitations",level:2},{value:"No type-checking",id:"no-type-checking",level:4},{value:"No <code>namespace</code>",id:"no-namespace",level:4},{value:"No <code>const enum</code>",id:"no-const-enum",level:4},{value:"No declaration merging (<code>enum</code>, <code>namespace</code>, ...)",id:"no-declaration-merging-enum-namespace-",level:4},{value:"No legacy <code>import</code>/<code>export</code>",id:"no-legacy-importexport",level:4},{value:"No caret type-casting with JSX enabled",id:"no-caret-type-casting-with-jsx-enabled",level:4}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In Sept. 2018 Babel7 got released with an interesting preset: ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/preset-typescript"),"."),(0,o.kt)("p",null,"The goal is to make it easy for users using Babel to try TypeScript without moving out from Babel, just by adding a preset in their Babel config (here is the ",(0,o.kt)("a",{parentName:"p",href:"https://blogs.msdn.microsoft.com/typescript/2018/08/27/typescript-and-babel-7/"},"MSDN blog post")," about TypeScript and Babel 7)."),(0,o.kt)("h2",{id:"limitations"},"Limitations"),(0,o.kt)("p",null,"While ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/preset-typescript")," is a great preset, you must know the limitation of it. Here is what is possible with TypeScript (and ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest"),"), which is not with Babel7 and ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/preset-typescript"),":"),(0,o.kt)("h4",{id:"no-type-checking"},"No type-checking"),(0,o.kt)("p",null,"This is the big ",(0,o.kt)("strong",{parentName:"p"},"PRO")," of using TypeScript vs Babel, you have type-checking out of the box."),(0,o.kt)("p",null,"You'll get a more fluent TDD experience (when using ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest"),") since files will be type-checked at the same time they're compiled and ran."),(0,o.kt)("p",null,"Here TypeScript will throw while Babel won't:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const str: string = 42\n")),(0,o.kt)("p",null,'With Babel, files are transpiled as isolated modules, there is no notion of "project". With TypeScript, files are part of a project and are compiled in that scope.'),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"no-namespace"},"No ",(0,o.kt)("inlineCode",{parentName:"h4"},"namespace")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"namespace app {\n  export const VERSION = '1.0.0'\n  export class App {\n    /* ... */\n  }\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"no-const-enum"},"No ",(0,o.kt)("inlineCode",{parentName:"h4"},"const enum")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const enum Directions {\n  Up,\n  Down,\n  Left,\n  Right,\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"no-declaration-merging-enum-namespace-"},"No declaration merging (",(0,o.kt)("inlineCode",{parentName:"h4"},"enum"),", ",(0,o.kt)("inlineCode",{parentName:"h4"},"namespace"),", ...)"),(0,o.kt)("p",null,"You won't be able to do ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/declaration-merging.html"},"declaration merging"),"."),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"no-legacy-importexport"},"No legacy ",(0,o.kt)("inlineCode",{parentName:"h4"},"import"),"/",(0,o.kt)("inlineCode",{parentName:"h4"},"export")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import lib = require('lib')\n// ...\nexport = myVar\n")),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"no-caret-type-casting-with-jsx-enabled"},"No caret type-casting with JSX enabled"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const val = <string>input\n")))}m.isMDXComponent=!0}}]);