"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[9495],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(4137));const a={id:"mock-es6-class",title:"Mock ES6 class"},s=void 0,i={unversionedId:"guides/mock-es6-class",id:"version-28.0/guides/mock-es6-class",title:"Mock ES6 class",description:"TypeScript is transpiling your ts file and your module is likely being imported using ES2015s import.",source:"@site/versioned_docs/version-28.0/guides/mock-es6-class.md",sourceDirName:"guides",slug:"/guides/mock-es6-class",permalink:"/ts-jest/docs/28.0/guides/mock-es6-class",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-28.0/guides/mock-es6-class.md",tags:[],version:"28.0",lastUpdatedBy:"ahnpnl",lastUpdatedAt:1716526264,formattedLastUpdatedAt:"May 24, 2024",frontMatter:{id:"mock-es6-class",title:"Mock ES6 class"},sidebar:"version-28.0-docs",previous:{title:"ESM Support",permalink:"/ts-jest/docs/28.0/guides/esm-support"},next:{title:"Using with React Native",permalink:"/ts-jest/docs/28.0/guides/react-native"}},l={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"TypeScript is transpiling your ts file and your module is likely being imported using ES2015s import.\n",(0,o.kt)("inlineCode",{parentName:"p"},"const soundPlayer = require('./sound-player')"),". Therefore creating an instance of the class that was exported as\na default will look like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"new soundPlayer.default()"),". However if you are mocking the class as suggested by the documentation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"jest.mock('./sound-player', () => {\n  return jest.fn().mockImplementation(() => {\n    return { playSoundFile: mockPlaySoundFile }\n  })\n})\n")),(0,o.kt)("p",null,"You will get the error"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"TypeError: sound_player_1.default is not a constructor\n")),(0,o.kt)("p",null,"because ",(0,o.kt)("inlineCode",{parentName:"p"},"soundPlayer.default")," does not point to a function. Your mock has to return an object which has a property default\nthat points to a function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"jest.mock('./sound-player', () => {\n  return {\n    default: jest.fn().mockImplementation(() => {\n      return {\n        playSoundFile: mockPlaySoundFile,\n      }\n    }),\n  }\n})\n")),(0,o.kt)("p",null,"For named imports, like ",(0,o.kt)("inlineCode",{parentName:"p"},"import { OAuth2 } from './oauth'"),", replace ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," with imported module name, ",(0,o.kt)("inlineCode",{parentName:"p"},"OAuth2")," in this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"jest.mock('./oauth', () => {\n    return {\n        OAuth2: ... // mock here\n    }\n})\n")))}u.isMDXComponent=!0}}]);