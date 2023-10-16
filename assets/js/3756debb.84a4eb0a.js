"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[110],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,y=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return r?n.createElement(y,i(i({ref:t},d),{},{components:r})):n.createElement(y,i({ref:t},d))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7090:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},i="Why Decentralized Sequencers?",s={unversionedId:"overview-of-astria/why-decentralized-sequencers",id:"overview-of-astria/why-decentralized-sequencers",title:"Why Decentralized Sequencers?",description:"Centralization is antithetical to crypto. And yet, today\u2019s rollups almost universally depend on a single sequencer. Centralized sequencers provide fast transaction confirmations and reduce costs by batching and compressing transactions. However, these benefits come at the cost of relying on a single trusted actor for liveness and censorship resistance.",source:"@site/docs/overview-of-astria/2-why-decentralized-sequencers.md",sourceDirName:"overview-of-astria",slug:"/overview-of-astria/why-decentralized-sequencers",permalink:"/docs/overview-of-astria/why-decentralized-sequencers",draft:!1,editUrl:"https://github.com/astriaorg/docs/docs/overview-of-astria/2-why-decentralized-sequencers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/docs/overview-of-astria/introduction"},next:{title:"Croll-Rollup Composability",permalink:"/docs/overview-of-astria/cross-rollup-composability"}},c={},l=[],d={toc:l},u="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"why-decentralized-sequencers"},"Why Decentralized Sequencers?"),(0,a.kt)("p",null,"Centralization is antithetical to crypto. And yet, today\u2019s rollups almost universally depend on a single sequencer. Centralized sequencers provide fast transaction confirmations and reduce costs by batching and compressing transactions. However, these benefits come at the cost of relying on a single trusted actor for liveness and censorship resistance."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sacrificing decentralization for an improved user experience is an unacceptable Faustian bargain.")),(0,a.kt)("p",null,"Astria tackles centralization head-on, providing rollups with a decentralized sequencer and even better UX. Astria\u2019s shared sequencer network is a middleware blockchain with its own decentralized sequencer set which accepts transactions from multiple rollups. These transactions are ordered into a single block and written to the base layer without executing them."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Shared Sequencers",src:r(154).Z,width:"3840",height:"2160"})))}p.isMDXComponent=!0},154:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/shared_sequencer-aef561d11f236d4ade5df4e6b7bcadcf.png"}}]);