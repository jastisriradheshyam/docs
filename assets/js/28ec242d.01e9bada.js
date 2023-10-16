"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[241],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),v=o,f=p["".concat(l,".").concat(v)]||p[v]||d[v]||s;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=v;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},2452:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const s={sidebar_position:1},a="Dev-Cluster Overview",i={unversionedId:"dev-cluster/overview",id:"dev-cluster/overview",title:"Dev-Cluster Overview",description:"Astria's Shared Sequencer Network allows multiple rollups to share a single decentralized network of sequencers that\u2019s permissionless to join. This shared sequencer network provides out-of-the-box censorship resistance, fast block confirmations, and atomic cross-rollup inclusion guarantees.",source:"@site/docs/dev-cluster/1-overview.md",sourceDirName:"dev-cluster",slug:"/dev-cluster/overview",permalink:"/docs/dev-cluster/overview",draft:!1,editUrl:"https://github.com/astriaorg/docs/docs/dev-cluster/1-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Data Availability Layer",permalink:"/docs/overview-of-astria/architecture/data-availability-layer"},next:{title:"Running the Dev Cluster Locally",permalink:"/docs/dev-cluster/run-dev-cluster-locally"}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dev-cluster-overview"},"Dev-Cluster Overview"),(0,o.kt)("p",null,"Astria's Shared Sequencer Network allows multiple rollups to share a single decentralized network of sequencers that\u2019s permissionless to join. This shared sequencer network provides out-of-the-box censorship resistance, fast block confirmations, and atomic cross-rollup inclusion guarantees."),(0,o.kt)("p",null,"The Astria ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/astriaorg/dev-cluster"},"dev-cluster")," is the\ncollective stack of all of Astria's components packaged together using\nKubernetes. While we generally refer to Astria as the network of shared\nsequencers, we provide several other components to make it simpler to integrate\nwith the shared sequencer network. The dev-cluster is provided to make\ndeveloping and testing the Astria network, as well as integrations with Astria,\nas simple as possible."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The primary use of the dev-cluster is running the full stack completely locally.\nThere are elements of it that are used for running a local rollup that connects\nto the remote dev-net, but those will be ",(0,o.kt)("a",{parentName:"p",href:"/docs/running-a-rollup-on-astria-dusknet/local-rollup-deployment/"},"discussed in another\nsection"),".")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/astriaorg/dev-cluster"},"dev-cluster repo here.")))}d.isMDXComponent=!0}}]);