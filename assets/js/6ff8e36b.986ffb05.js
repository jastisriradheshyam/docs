"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[494],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=n,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?o.createElement(h,i(i({ref:t},u),{},{components:r})):o.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2123:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:7},i="Conductor",c={unversionedId:"overview-of-astria/architecture/conductor",id:"overview-of-astria/architecture/conductor",title:"Conductor",description:"Conductor's role is to drive the deterministic execution of sequencer blocks to",source:"@site/docs/overview-of-astria/architecture/7-conductor.md",sourceDirName:"overview-of-astria/architecture",slug:"/overview-of-astria/architecture/conductor",permalink:"/docs/overview-of-astria/architecture/conductor",draft:!1,editUrl:"https://github.com/astriaorg/docs/docs/overview-of-astria/architecture/7-conductor.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"Relayer",permalink:"/docs/overview-of-astria/architecture/relayer"},next:{title:"Data Availability Layer",permalink:"/docs/overview-of-astria/architecture/data-availability-layer"}},s={},l=[],u={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"conductor"},"Conductor"),(0,n.kt)("p",null,"Conductor's role is to drive the deterministic execution of sequencer blocks to\nrollups. "),(0,n.kt)("p",null,"It abstracts away the logic required to read data from the DA and the\nSequencer, tracking firm and soft commitments, block and header shapes, as well\nas verification of the data. The rollup implements the Execution API server, and\nruns the Conductor alongside to drive deterministic execution. The Conductor is\neffectively stateless but does ephemerally store some information about the\nblocks it has seen and passed on to be executed. "),(0,n.kt)("p",null,"It filters the transactions that are relevant to the given rollup it is running\nalong side, out of the sequencer blocks for execution. The data that it does store is\nfor sending commitment updates to the rollup."),(0,n.kt)("p",null,"As mentioned in the\n",(0,n.kt)("a",{parentName:"p",href:"/docs/overview-of-astria/architecture/relayer"},"Relayer"),' section, any data\nreceived by the Conductor directly from the Relayer is considered a soft commit.\nThis data is filtered using the rollup\'s namespace and only transactions that\nare relevant to the rollup are passed on as blocks for execution. These blocks\nare also marked as "safe" withing the rollup. The Conductor regularly polls Celestia for new data\nand when it sees the same blocks in Celestia that it has already seen from the\nRelayer, it sends a firm commit message to the rollup to update that block to\n"finalized."'),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/astriaorg/astria/tree/main/crates/astria-conductor"},"Conductor code\nhere.")))}p.isMDXComponent=!0}}]);