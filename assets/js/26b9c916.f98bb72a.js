"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[273],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},977:(e,t,r)=>{r.d(t,{ZP:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={toc:[]},i="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(i,(0,o.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Want your own rollup? ",(0,n.kt)("a",{parentName:"p",href:"https://deploy.astria.org/"},"Deploy it now!")),(0,n.kt)("p",{parentName:"admonition"},"To deploy your own rollup on the Astria Dusknet on your ",(0,n.kt)("strong",{parentName:"p"},"local machine"),", check out the\n",(0,n.kt)("a",{parentName:"p",href:"/docs/local-rollup/introduction/"},"instructions here"),"!"),(0,n.kt)("p",{parentName:"admonition"},"To deploy your own rollup on the Astria Dusknet ",(0,n.kt)("strong",{parentName:"p"},"remotely"),", check out the\n",(0,n.kt)("a",{parentName:"p",href:"/docs/cloud-rollup/digital-ocean/"},"instructions here"),"!")))}s.isMDXComponent=!0},7249:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=r(7462),n=(r(7294),r(3905)),a=r(977);const i={sidebar_position:3},s="Rollups",l={unversionedId:"overview/architecture/rollup",id:"overview/architecture/rollup",title:"Rollups",description:"Astria is designed for permissionless rollup integration and takes advantage of lazy shared sequencing. This means that rollup developers have total sovereignty over their own execution state and can swap out sequencing layers without fear of being locked in. You do not need to ask for permission or go through a governance process to gain access. A rollup simply needs to satisfy the following interfaces:",source:"@site/docs/overview/architecture/3-rollup.mdx",sourceDirName:"overview/architecture",slug:"/overview/architecture/rollup",permalink:"/docs/overview/architecture/rollup",draft:!1,editUrl:"https://github.com/astriaorg/docs/docs/overview/architecture/3-rollup.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Transaction Flow",permalink:"/docs/overview/architecture/transaction-flow"},next:{title:"Composer",permalink:"/docs/overview/architecture/composer"}},p={},c=[],u={toc:c},d="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rollups"},"Rollups"),(0,n.kt)(a.ZP,{mdxType:"DeploymentsRedirect"}),(0,n.kt)("p",null,"Astria is designed for permissionless rollup integration and takes advantage of ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lazy_evaluation?ref=blog.astria.org"},"lazy")," shared sequencing. This means that rollup developers have total sovereignty over their own execution state and can swap out sequencing layers without fear of being locked in. You do not need to ask for permission or go through a governance process to gain access. A rollup simply needs to satisfy the following interfaces:"),(0,n.kt)("p",null,"Write Interface (Rollup to Composer):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For transaction submissions.")),(0,n.kt)("p",null,"Read Interface (Rollup to Conductor):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For receiving blocks from the shared sequencer network.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Single Rollup",src:r(6975).Z,width:"1915",height:"2076"})),(0,n.kt)("p",null,"The Composer and Conductor are explained in more detail in future sections."),(0,n.kt)("p",null,"Both composer and conductor expose ",(0,n.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC")," interfaces. See the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/astriaorg/astria/tree/main/crates/astria-proto"},"astria-protos")," repo for specific implementation details."),(0,n.kt)("p",null,"Astria currently deploys a fork of\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/astriaorg/go-ethereum"},"Geth")," as an EVM rollup."))}m.isMDXComponent=!0},6975:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/single-rollup-247d65cd6c1b0e25469bb0499d973fc0.png"}}]);