"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[940],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8396:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:5},i="The Astria Sequencer",s={unversionedId:"overview-of-astria/architecture/the-astria-sequencer",id:"overview-of-astria/architecture/the-astria-sequencer",title:"The Astria Sequencer",description:"The Astria Shared Sequencer is a decentralized network of nodes utilizing CometBFT that come to consensus on an ordered set of transactions (ie. it is a blockchain). The unique feature of the sequencer is that the transactions it includes are not executed (lazy sequencing), and are destined for another execution engine (ie. a rollup). This excludes \u201csequencer native\u201d transactions, such as transfers of tokens within the sequencer chain. Transactions from any given rollup are only ordered on the sequencer, not executed.",source:"@site/docs/overview-of-astria/architecture/5-the-astria-sequencer.md",sourceDirName:"overview-of-astria/architecture",slug:"/overview-of-astria/architecture/the-astria-sequencer",permalink:"/docs/overview-of-astria/architecture/the-astria-sequencer",draft:!1,editUrl:"https://github.com/astriaorg/docs/docs/overview-of-astria/architecture/5-the-astria-sequencer.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Composer",permalink:"/docs/overview-of-astria/architecture/composer"},next:{title:"Relayer",permalink:"/docs/overview-of-astria/architecture/relayer"}},c={},u=[],l={toc:u},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-astria-sequencer"},"The Astria Sequencer"),(0,a.kt)("p",null,"The Astria Shared Sequencer is a decentralized network of nodes utilizing CometBFT that come to consensus on an ordered set of transactions (ie. it is a blockchain). The unique feature of the sequencer is that the transactions it includes are not executed (lazy sequencing), and are destined for another execution engine (ie. a rollup). This excludes \u201csequencer native\u201d transactions, such as transfers of tokens within the sequencer chain. Transactions from any given rollup are only ordered on the sequencer, not executed."),(0,a.kt)("p",null,"The sequencer can optionally act as a \u201cvalidator\u201d, meaning it actively\nparticipates in the production and finalization of new blocks."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Astria Shared Sequencer",src:r(49).Z,width:"3840",height:"2160"})),(0,a.kt)("p",null,"Components of note that are not shown in the above diagram are the ",(0,a.kt)("a",{parentName:"p",href:"/docs/overview-of-astria/architecture/composer"},"Composer"),",\n",(0,a.kt)("a",{parentName:"p",href:"/docs/overview-of-astria/architecture/relayer"},"Relayer"),", and ",(0,a.kt)("a",{parentName:"p",href:"/docs/overview-of-astria/architecture/conductor"},"Conductor"),". "),(0,a.kt)("p",null,"These components facilitate the delivery transactions,\nbatches, and different commits shown above, back to the users."),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/astriaorg/astria/tree/main/crates/astria-sequencer"},"Sequencer code here.")))}p.isMDXComponent=!0},49:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/shared-sequencer-overview-9abb7d50085d058dd9d4740a7b85b61f.png"}}]);