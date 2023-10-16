"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[936],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=l.createContext({}),p=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=p(e.components);return l.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return n?l.createElement(f,o(o({ref:t},i),{},{components:n})):l.createElement(f,o({ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[s]="string"==typeof e?e:r,o[1]=u;for(var p=2;p<a;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var l=n(7462),r=(n(7294),n(3905));const a={sidebar_position:3},o="Running a Local Rollup",u={unversionedId:"dev-cluster/deploy-a-local-rollup",id:"dev-cluster/deploy-a-local-rollup",title:"Running a Local Rollup",description:"Faucet, Block Explorer, and Test Data",source:"@site/docs/dev-cluster/3-deploy-a-local-rollup.md",sourceDirName:"dev-cluster",slug:"/dev-cluster/deploy-a-local-rollup",permalink:"/docs/dev-cluster/deploy-a-local-rollup",draft:!1,editUrl:"https://github.com/astriaorg/docs/docs/dev-cluster/3-deploy-a-local-rollup.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Running the Dev Cluster Locally",permalink:"/docs/dev-cluster/run-dev-cluster-locally"},next:{title:"Run Multiple Rollups Locally",permalink:"/docs/dev-cluster/run-multiple-rollups-locally"}},c={},p=[{value:"Faucet, Block Explorer, and Test Data",id:"faucet-block-explorer-and-test-data",level:3}],i={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,l.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-a-local-rollup"},"Running a Local Rollup"),(0,r.kt)("h3",{id:"faucet-block-explorer-and-test-data"},"Faucet, Block Explorer, and Test Data"),(0,r.kt)("p",null,"With the dev-cluster running, you can then deploy a rollup, block explorer, and\nfaucet by running the following command in the terminal withing the dev-cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"just deploy-rollup\n")),(0,r.kt)("p",null,"This ",(0,r.kt)("inlineCode",{parentName:"p"},"just")," command launches a local rollup, block explorer, and faucet using\nthe default in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/astriaorg/dev-cluster/blob/main/helm/rollup/values.yaml"},"helm/rollup/values.yaml"),"\nin the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.rollup")," definition."),(0,r.kt)("p",null,"For reference, these are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rollup name: ",(0,r.kt)("inlineCode",{parentName:"li"},"astria")),(0,r.kt)("li",{parentName:"ul"},"Network Id: ",(0,r.kt)("inlineCode",{parentName:"li"},"912559"))),(0,r.kt)("p",null,"This will also take a moment as the rollup node, block explorer, and faucet spin\nup. You can check the progress of the deployment with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get deployments --all-namespaces\n")),(0,r.kt)("p",null,"Or you can run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"just wait-for-rollup\n")),(0,r.kt)("p",null,"Once deployed, you can view the block explorer and faucet by opening a couple new windows in your browser and going to to the\nfollowing urls.\nFor the block explorer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://blockscout.astria.localdev.me/\n")),(0,r.kt)("p",null,"For the faucet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://faucet.astria.localdev.me/\n")),(0,r.kt)("p",null,"You can copy and paste a wallet address on the faucet page and give yourself 1 RIA. "),(0,r.kt)("p",null,"To test out the block explorer, open a terminal in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/astriaorg/astria-web3/tree/main"},"astria-web3 repo")," you downloaded earlier and navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/evm-test-data/")," and run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"just generate-transactions\n")),(0,r.kt)("p",null,"This command uses the default rollup name and network id (see above), and will\nsubmit commands to the newly deployed default rollup."),(0,r.kt)("p",null,"You can now go back to your browser and pull up the block explorer and you will now see blocks with transactions getting created in real time."))}d.isMDXComponent=!0}}]);