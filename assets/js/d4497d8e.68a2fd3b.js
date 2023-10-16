"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[593],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=i,d=p["".concat(c,".").concat(h)]||p[h]||f[h]||a;return r?o.createElement(d,n(n({ref:t},u),{},{components:r})):o.createElement(d,n({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,n=new Array(a);n[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,n[1]=s;for(var l=2;l<a;l++)n[l]=r[l];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3771:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(7462),i=(r(7294),r(3905));const a={sidebar_position:1},n="Architecture Overview",s={unversionedId:"overview-of-astria/architecture/overview",id:"overview-of-astria/architecture/overview",title:"Architecture Overview",description:"At a high level, Astria breaks out all of the components that are historically",source:"@site/docs/overview-of-astria/architecture/1-overview.md",sourceDirName:"overview-of-astria/architecture",slug:"/overview-of-astria/architecture/overview",permalink:"/docs/overview-of-astria/architecture/overview",draft:!1,editUrl:"https://github.com/astriaorg/docs/docs/overview-of-astria/architecture/1-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Maintain Sovereignty",permalink:"/docs/overview-of-astria/maintain-sovereignty"},next:{title:"Transaction Flow",permalink:"/docs/overview-of-astria/architecture/transaction-flow"}},c={},l=[],u={toc:l},p="wrapper";function f(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"architecture-overview"},"Architecture Overview"),(0,i.kt)("p",null,"At a high level, Astria breaks out all of the components that are historically\ncombined together in monolithic blockchains into individual components. This\nresults in a modular ecosystem that allows users to swap out components to fit\ntheir specific needs."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Astria Architecture",src:r(7655).Z,width:"3840",height:"2160"})),(0,i.kt)("p",null,"Given this architecture, rollups can retrieve blocks from Astria immediately after they\u2019re created, without waiting for the base layer to include them. The economic weight of Astria\u2019s decentralized sequencer set provides confidence that this transaction order is final. This \u201csoft commitment\u201d allows rollups to provide their end users with fast block confirmations. Alternatively, rollups can wait for blocks to be included by the base layer, giving them the strongest finality. All transactions still get this \u201cfirm commitment\u201d at the speed of the base layer, fast pre-confirmations are just an additional feature that Astria provides to rollups if they choose to use it."),(0,i.kt)("p",null,"To generate a new state root, a rollup\u2019s full nodes retrieve a block from either\nAstria or the base layer, check it against Astria\u2019s fork choice rule, filter out\ntransactions from other rollups, and apply the resultant subset of transactions\nto their previous state. Headers can then be generated from this state root and\ngossiped to light clients. Rollups of this style are termed \u2018Lazy Rollups\u2019, a\nnod to the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lazy_evaluation?ref=blog.astria.org"},"Lazy\nEvaluation"),"\nprinciple found in programming language theory."),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/astriaorg/astria"},"Astria repo here.")))}f.isMDXComponent=!0},7655:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/astria-architecture-b0f845ed5b779ba19c5e3d2e9278068b.png"}}]);