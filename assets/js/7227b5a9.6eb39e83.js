"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[603],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,k=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return n?a.createElement(k,l(l({ref:t},i),{},{components:n})):a.createElement(k,l({ref:t},i))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[s]="string"==typeof e?e:r,l[1]=u;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},l="Local Rollup Deployment",u={unversionedId:"running-a-rollup-on-astria-dusknet/local-rollup-deployment",id:"running-a-rollup-on-astria-dusknet/local-rollup-deployment",title:"Local Rollup Deployment",description:"Deploy the Local Run Environment",source:"@site/docs/running-a-rollup-on-astria-dusknet/3-local-rollup-deployment.md",sourceDirName:"running-a-rollup-on-astria-dusknet",slug:"/running-a-rollup-on-astria-dusknet/local-rollup-deployment",permalink:"/docs/running-a-rollup-on-astria-dusknet/local-rollup-deployment",draft:!1,editUrl:"https://github.com/astriaorg/docs/docs/running-a-rollup-on-astria-dusknet/3-local-rollup-deployment.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Configure the Remote Rollup",permalink:"/docs/running-a-rollup-on-astria-dusknet/configure-remote-rollup"},next:{title:"Remote Rollup Deployment",permalink:"/docs/running-a-rollup-on-astria-dusknet/remote-rollup-deployment"}},c={},p=[{value:"Deploy the Local Run Environment",id:"deploy-the-local-run-environment",level:2},{value:"Create a New Sequencer Account",id:"create-a-new-sequencer-account",level:2},{value:"Deploy the Configuration",id:"deploy-the-configuration",level:2},{value:"Observe your Deployment",id:"observe-your-deployment",level:2},{value:"Use <code>cast</code> to Interact with your Rollup",id:"use-cast-to-interact-with-your-rollup",level:2},{value:"Fund you Sequencer Account",id:"fund-you-sequencer-account",level:2}],i={toc:p},s="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(s,(0,a.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"local-rollup-deployment"},"Local Rollup Deployment"),(0,r.kt)("h2",{id:"deploy-the-local-run-environment"},"Deploy the Local Run Environment"),(0,r.kt)("p",null,"We use part of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/astriaorg/dev-cluster"},"Astria\ndev-cluster")," to setup a local\nKubernetes (k8s) cluster where we will deploy our local rollup."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Make sure that Docker is running before deploying with ",(0,r.kt)("inlineCode",{parentName:"p"},"just"),".")),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"dev-cluster repo"),", run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:astriaorg/dev-cluster.git\ncd dev-cluster\njust create-cluster\njust deploy-ingress-controller\njust wait-for-ingress-controller\n")),(0,r.kt)("p",null,"This gives us a local environment compatible with our helm charts."),(0,r.kt)("h2",{id:"create-a-new-sequencer-account"},"Create a New Sequencer Account"),(0,r.kt)("p",null,"Back in the ",(0,r.kt)("strong",{parentName:"p"},"Astria repo"),", run the cli to create the address and key\ninformation for a new sequencer account. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"astria-cli sequencer account create\n")),(0,r.kt)("p",null,"The address, public and private keys will be different from those below. Save\nthese values for later use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Create Sequencer Account\n\nPrivate Key: "5562...1622" # <SEQUENCER_ACCOUNT_PRIV_KEY>\nPublic Key:  "ec20...f613" # <SEQUENCER_ACCOUNT_PUB_KEY>\nAddress:     "8a2f...5f68"\n')),(0,r.kt)("p",null,"Keep track of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<SEQUENCER_ACCOUNT_PUB_KEY>")," as it will be used with the\nFaucet later on for funding your sequencer account."),(0,r.kt)("p",null,"Now export the private key printed above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export SEQUENCER_PRIV_KEY=<SEQUENCER_ACCOUNT_PRIV_KEY>\n")),(0,r.kt)("h2",{id:"deploy-the-configuration"},"Deploy the Configuration"),(0,r.kt)("p",null,"Then deploy the configuration with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"astria-cli rollup deployment create \\\n  --config $ROLLUP_CONF_FILE \\\n  --faucet-private-key $ROLLUP_FAUCET_PRIV_KEY \\\n  --sequencer-private-key $SEQUENCER_PRIV_KEY\n")),(0,r.kt)("h2",{id:"observe-your-deployment"},"Observe your Deployment"),(0,r.kt)("p",null,"Your rollups utility endpoints are as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Utility"),(0,r.kt)("th",{parentName:"tr",align:null},"URL"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Block Explorer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://blockscout."},"http://blockscout."),"<YOUR_ROLLUP_NAME>.localdev.me/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Faucet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://faucet."},"http://faucet."),"<YOUR_ROLLUP_NAME>.localdev.me/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RPC"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://executor."},"http://executor."),"<YOUR_ROLLUP_NAME>.localdev.me/")))),(0,r.kt)("p",null,"Open the URLs in your browser to view your running rollup."),(0,r.kt)("p",null,"You can also open the Block Explorer in a new browser window to see the faucet\ntransaction appear, or any of the transactions you have sent using ",(0,r.kt)("inlineCode",{parentName:"p"},"cast"),"."),(0,r.kt)("h2",{id:"use-cast-to-interact-with-your-rollup"},"Use ",(0,r.kt)("inlineCode",{parentName:"h2"},"cast")," to Interact with your Rollup"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"cast")," to view the blocks on your rollup."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# replace <your_rollup_name> with the name you used in your configuration\nexport ETH_RPC_URL=http://executor.$ROLLUP_NAME.localdev.me/\ncast block 0\n")),(0,r.kt)("p",null,"Which should print something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"baseFeePerGas        1000000000\ndifficulty           10000000\nextraData            0x\ngasLimit             8000000\ngasUsed              0\nhash                 0xa2d5f000ef275b5f6ce6af5a0de50c17e5893c5ea664b77f534eb62f317caff1\nlogsBloom            0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\nminer                0x0000000000000000000000000000000000000000\nmixHash              0x0000000000000000000000000000000000000000000000000000000000000000\nnonce                0x0000000000000000\nnumber               0\nparentHash           0x0000000000000000000000000000000000000000000000000000000000000000\nreceiptsRoot         0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421\nsealFields           []\nsha3Uncles           0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347\nsize                 512\nstateRoot            0xc1a913facf57b18de72d25155293c53b2a463d93a1de735269410b8663f2efca\ntimestamp            0\nwithdrawalsRoot\ntotalDifficulty      10000000\ntransactions:        []\n")),(0,r.kt)("p",null,"If you have an address you would like to deposit funds to, export that address\nto the env vars:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export REC_ADDR=<ADDRESS>\n")),(0,r.kt)("p",null,"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"cast")," to view your balance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cast balance $REC_ADDR\n")),(0,r.kt)("p",null,"Send an ammount to your address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cast send $REC_ADDR --value 10000000000000000000 --private-key $ROLLUP_FAUCET_PRIV_KEY\n")),(0,r.kt)("p",null,"And view your new balance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cast balance $REC_ADDR\n")),(0,r.kt)("h2",{id:"fund-you-sequencer-account"},"Fund you Sequencer Account"),(0,r.kt)("p",null,"Using your sequencer pub key you created in the ",(0,r.kt)("a",{parentName:"p",href:"#create-a-new-sequencer-account"},"Create a New Sequencer\nAccount"),", copy and past the\n",(0,r.kt)("inlineCode",{parentName:"p"},"<SEQUENCER_ACCOUNT_PUB_KEY>")," into the input on the faucet page, and mint funds\nto your account:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sequencer Faucet",src:n(1721).Z,width:"1490",height:"794"})))}d.isMDXComponent=!0},1721:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sequencer-faucet-63615ccc21b8c454150825d608e5dea6.png"}}]);