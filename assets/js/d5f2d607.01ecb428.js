"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[806],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(n),m=r,k=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:4},o="AWS",s={unversionedId:"dusknet/cloud-rollup-deployment/aws",id:"dusknet/cloud-rollup-deployment/aws",title:"AWS",description:"Deploy your rollup to AWS.",source:"@site/docs/dusknet/cloud-rollup-deployment/4-aws.md",sourceDirName:"dusknet/cloud-rollup-deployment",slug:"/dusknet/cloud-rollup-deployment/aws",permalink:"/docs/dusknet/cloud-rollup-deployment/aws",draft:!1,editUrl:"https://github.com/astriaorg/docs/docs/dusknet/cloud-rollup-deployment/4-aws.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"GCP",permalink:"/docs/dusknet/cloud-rollup-deployment/gcp"},next:{title:"FAQ and Debugging",permalink:"/docs/dusknet/cloud-rollup-deployment/faq-debugging"}},c={},i=[{value:"Create an AWS Account",id:"create-an-aws-account",level:2},{value:"Install <code>aws</code> CLI",id:"install-aws-cli",level:2},{value:"Create an Access Key",id:"create-an-access-key",level:2},{value:"Authenticate the <code>aws</code> cli",id:"authenticate-the-aws-cli",level:2},{value:"Deploy Ingress Controller",id:"deploy-ingress-controller",level:2},{value:"Check Ingress Service",id:"check-ingress-service",level:3},{value:"Create a <code>CNAME</code> record",id:"create-a-cname-record",level:2},{value:"Creating your own Genesis Account",id:"creating-your-own-genesis-account",level:2},{value:"Configure and Deploy Rollup",id:"configure-and-deploy-rollup",level:2},{value:"Update the <code>helm</code> Chart",id:"update-the-helm-chart",level:3},{value:"Install the <code>astria-cli</code>",id:"install-the-astria-cli",level:2},{value:"Get Current Sequencer Block Height",id:"get-current-sequencer-block-height",level:3},{value:"Create Rollup Config",id:"create-rollup-config",level:2},{value:"Create new sequencer account",id:"create-new-sequencer-account",level:2},{value:"Create Namespace",id:"create-namespace",level:3},{value:"Use locally modified chart",id:"use-locally-modified-chart",level:3},{value:"Deploy the Rollup Node",id:"deploy-the-rollup-node",level:3},{value:"Observe your Deployment",id:"observe-your-deployment",level:2},{value:"Debug Ingress",id:"debug-ingress",level:2},{value:"Use <code>cast</code> to Interact with your Rollup",id:"use-cast-to-interact-with-your-rollup",level:2},{value:"Fund you Sequencer Account",id:"fund-you-sequencer-account",level:2}],u={toc:i},p="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(p,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aws"},"AWS"),(0,r.kt)("p",null,"Deploy your rollup to AWS."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The list of local dependencies for the following instructions ",(0,r.kt)("a",{parentName:"p",href:"/docs/dusknet/overview"},"can be found here"),".")),(0,r.kt)("h2",{id:"create-an-aws-account"},"Create an AWS Account"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://portal.aws.amazon.com/gp/aws/developer/registration/index.html"},"https://portal.aws.amazon.com/gp/aws/developer/registration/index.html")),(0,r.kt)("h2",{id:"install-aws-cli"},"Install ",(0,r.kt)("inlineCode",{parentName:"h2"},"aws")," CLI"),(0,r.kt)("p",null,"Installation links for your OS can be found here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cli/"},"https://aws.amazon.com/cli/"))),(0,r.kt)("h2",{id:"create-an-access-key"},"Create an Access Key"),(0,r.kt)("p",null,"To create an access key, follow the instructions here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html"},"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html"))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"This doesn\u2019t follow best security practices, do not do this on an important AWS\naccount which has production resources on it. ")),(0,r.kt)("p",null,"Go to IAM section of console: ",(0,r.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/iam/"},"https://console.aws.amazon.com/iam/")),(0,r.kt)("p",null,"Create an access key for your ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," user."),(0,r.kt)("h2",{id:"authenticate-the-aws-cli"},"Authenticate the ",(0,r.kt)("inlineCode",{parentName:"h2"},"aws")," cli"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aws configure\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Fill out interactive fields with your access key\nAWS Access Key ID [None]: \nAWS Secret Access Key [None]: \nDefault region name [None]:\nDefault output format [None]:\n")),(0,r.kt)("h1",{id:"create-amazon-eks-cluster"},"Create Amazon EKS Cluster"),(0,r.kt)("p",null,"To create your EKS cluster, follow the instructions here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/getting-started-console.html"},"https://docs.aws.amazon.com/eks/latest/userguide/getting-started-console.html"))),(0,r.kt)("h2",{id:"deploy-ingress-controller"},"Deploy Ingress Controller"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/deploy/#aws"},"https://kubernetes.github.io/ingress-nginx/deploy/#aws")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/aws/deploy.yaml\n")),(0,r.kt)("h3",{id:"check-ingress-service"},"Check Ingress Service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get svc -n ingress-nginx\n")),(0,r.kt)("p",null,"You should see something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                 TYPE           CLUSTER-IP       EXTERNAL-IP                                                                     PORT(S)                      AGE\ningress-nginx-controller             LoadBalancer   10.100.151.220   ac1f86093ea7240c89457da3d5f71fc4-947b3172412ab75c.elb.us-east-1.amazonaws.com   80:30416/TCP,443:31448/TCP   3m55s\ningress-nginx-controller-admission   ClusterIP      10.100.208.56    <none>                                                                          443/TCP                      3m55s\n")),(0,r.kt)("h2",{id:"create-a-cname-record"},"Create a ",(0,r.kt)("inlineCode",{parentName:"h2"},"CNAME")," record"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"You must configure a DNS record because our ingress configuration uses name\nbased virtual routing.\nMore info here: ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/#name-based-virtual-hosting"},"https://kubernetes.io/docs/concepts/services-networking/ingress/#name-based-virtual-hosting"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CNAME record Example",src:n(9354).Z,width:"2000",height:"409"})),(0,r.kt)("h2",{id:"creating-your-own-genesis-account"},"Creating your own Genesis Account"),(0,r.kt)("p",null,"You can add genesis account(s) to your rollup during configuration."),(0,r.kt)("p",null,"You can create an account using"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cast w new\n")),(0,r.kt)("p",null,"to create a new account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Successfully created new keypair.\nAddress:     0xfFe9...5f8b # <GENESIS_ADDRESS>\nPrivate key: 0x332e...a8fb # <GENESIS_PRIVATE_KEY>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"export")," the genesis address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export GENESIS_ADDRESS=<GENESIS_ADDRESS>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"export")," the genesis private key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export ROLLUP_FAUCET_PRIV_KEY=<GENESIS_PRIVATE_KEY>\n")),(0,r.kt)("p",null,"Exporting the genesis account(s) is also shown in the export block in the next section."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"NEVER")," use a private key you use on a live network. ")),(0,r.kt)("h2",{id:"configure-and-deploy-rollup"},"Configure and Deploy Rollup"),(0,r.kt)("h3",{id:"update-the-helm-chart"},"Update the ",(0,r.kt)("inlineCode",{parentName:"h3"},"helm")," Chart"),(0,r.kt)("p",null,"Pull the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/astriaorg/dev-cluster"},"Astria dev-cluster repo"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:astriaorg/dev-cluster.git\ncd dev-cluster\n")),(0,r.kt)("p",null,"Within the dev-cluster repo, update the ingress template\n",(0,r.kt)("inlineCode",{parentName:"p"},"chart/rollup/templates/ingress.yaml")," so that each hostname ends in\n",(0,r.kt)("inlineCode",{parentName:"p"},"<YOUR_HOSTNAME>")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"localdev.me")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n- host: executor.{{ .Values.config.rollup.name }}.<YOUR_HOSTNAME>\n...\n- host: ws-executor.{{ .Values.config.rollup.name }}.<YOUR_HOSTNAME>\n...\n- host: faucet.{{ .Values.config.rollup.name }}.<YOUR_HOSTNAME>\n...\n- host: blockscout.{{ .Values.config.rollup.name }}.<YOUR_HOSTNAME>\n...\n")),(0,r.kt)("p",null,"Add an IngressClass so that the ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata")," section in the same file looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"metadata:\n  name: {{ .Values.config.rollup.name }}-ingress\n  namespace: {{ .Values.namespace }}\n  annotations:\n    kubernetes.io/ingress.class: nginx\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can see an example of these changes in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/astriaorg/dev-cluster/pull/119/files"},"this PR here"),".")),(0,r.kt)("h2",{id:"install-the-astria-cli"},"Install the ",(0,r.kt)("inlineCode",{parentName:"h2"},"astria-cli")),(0,r.kt)("p",null,"Pull the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/astriaorg/astria"},"Astria repo")," and install the ",(0,r.kt)("inlineCode",{parentName:"p"},"astria-cli")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:astriaorg/astria.git\ncd astria\njust install-cli\n")),(0,r.kt)("h3",{id:"get-current-sequencer-block-height"},"Get Current Sequencer Block Height"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"astria-cli sequencer blockheight get \\\n  --sequencer-url https://rpc.sequencer.dusk-1.devnet.astria.org/\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"export")," the initial sequencer block height as an environment variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export INITIAL_SEQUENCER_BLOCK_HEIGHT=<INITIAL_SEQUENCER_BLOCK_HEIGHT>\n")),(0,r.kt)("h2",{id:"create-rollup-config"},"Create Rollup Config"),(0,r.kt)("p",null,"Replace the tags in the commands and env vars below, as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Var Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Var Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<YOUR_ROLLUP_NAME>")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of your rollup")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<YOUR_NETWORK_ID>")),(0,r.kt)("td",{parentName:"tr",align:null},"u64"),(0,r.kt)("td",{parentName:"tr",align:null},"The id of your network")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<BALANCE>")),(0,r.kt)("td",{parentName:"tr",align:null},"u64"),(0,r.kt)("td",{parentName:"tr",align:null},"A balance. We recommend using ",(0,r.kt)("inlineCode",{parentName:"td"},"100000000000000000000"),".")))),(0,r.kt)("p",null,"You can use environment variables to set the configuration for the rollup\nconfig creation. Replace all the ",(0,r.kt)("inlineCode",{parentName:"p"},"<>")," tags with their corresponding values. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export ROLLUP_USE_TTY=true\nexport ROLLUP_LOG_LEVEL=DEBUG\nexport ROLLUP_NAME=<YOUR_ROLLUP_NAME>\nexport ROLLUP_NETWORK_ID=<YOUR_NETWORK_ID>\nexport ROLLUP_SKIP_EMPTY_BLOCKS=false\nexport ROLLUP_GENESIS_ACCOUNTS=$GENESIS_ADDRESS:<BALANCE>\nexport ROLLUP_SEQUENCER_INITIAL_BLOCK_HEIGHT=$INITIAL_SEQUENCER_BLOCK_HEIGHT\nexport ROLLUP_SEQUENCER_WEBSOCKET=wss://rpc.sequencer.dusk-1.devnet.astria.org/websocket\nexport ROLLUP_SEQUENCER_RPC=https://rpc.sequencer.dusk-1.devnet.astria.org\n")),(0,r.kt)("p",null,"Once the environment variables shown above are set, run the following command to\ncreate the rollup config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"astria-cli rollup config create\n")),(0,r.kt)("p",null,"You can then run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cat <YOUR_ROLLUP_NAME>-rollup-conf.yaml\n")),(0,r.kt)("p",null,"to print out the config file contents to double check everything:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"config:\n  useTTY: true\n  logLevel: DEBUG\n  rollup:\n    name: <YOUR_ROLLUP_NAME>\n    chainId: # derived from rollup name\n    networkId: <YOUR_NETWORK_ID>\n    skipEmptyBlocks: true\n    genesisAccounts: \n      - address: 0x<GENESIS_ADDRESS>\n        balance: '<BALANCE>'\n  sequencer:\n    initialBlockHeight: <INITIAL_SEQUENCER_BLOCK_HEIGHT>\n    websocket: ws://rpc.sequencer.dusk-1.devnet.astria.org/websocket\n    rpc: http://rpc.sequencer.dusk-1.devnet.astria.org\n  celestia:\n    fullNodeUrl: http://celestia-service:26658\n")),(0,r.kt)("p",null,"Export this file to the env vars as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export ROLLUP_CONF_FILE=<YOUR_ROLLUP_NAME>-rollup-conf.yaml\n")),(0,r.kt)("h2",{id:"create-new-sequencer-account"},"Create new sequencer account"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"astria-cli sequencer account create\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Create Sequencer Account\n\nPrivate Key: "5562...1622" # <SEQUENCER_ACCOUNT_PRIV_KEY>\nPublic Key:  "ec20...f613" # <SEQUENCER_ACCOUNT_PUB_KEY>\nAddress:     "8a2f...5f68"\n')),(0,r.kt)("p",null,"Keep track of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<SEQUENCER_ACCOUNT_PUB_KEY>")," as it will be used with the\nFaucet later on for funding your sequencer account."),(0,r.kt)("p",null,"Export your sequencer private key as an environment variable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export SEQUENCER_PRIV_KEY=9c78...710d\n")),(0,r.kt)("h3",{id:"create-namespace"},"Create Namespace"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f kubernetes/namespace.yml\n")),(0,r.kt)("h3",{id:"use-locally-modified-chart"},"Use locally modified chart"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"You ",(0,r.kt)("strong",{parentName:"p"},"must")," have modified your local ",(0,r.kt)("inlineCode",{parentName:"p"},"helm")," chart to use your own domain name\nas described in ",(0,r.kt)("a",{parentName:"p",href:"#update-the-helm-chart"},"this section here"),".")),(0,r.kt)("p",null,"Because you needed to modify the host names inside your ingress template you must deploy your rollup using your local chart:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export ROLLUP_CHART_PATH="/your_path_to/dev-cluster/charts/rollup"\n')),(0,r.kt)("h3",{id:"deploy-the-rollup-node"},"Deploy the Rollup Node"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"astria-cli")," to deploy the node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"astria-cli rollup deployment create \\\n  --config $ROLLUP_CONF_FILE \\\n  --faucet-private-key $ROLLUP_FAUCET_PRIV_KEY \\\n  --sequencer-private-key $SEQUENCER_PRIV_KEY\n")),(0,r.kt)("h2",{id:"observe-your-deployment"},"Observe your Deployment"),(0,r.kt)("p",null,"Your rollups utility endpoints are as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Utility"),(0,r.kt)("th",{parentName:"tr",align:null},"URL"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Block Explorer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://blockscout."},"http://blockscout."),"<YOUR_ROLLUP_NAME>.<YOUR_HOSTNAME>/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Faucet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://faucet."},"http://faucet."),"<YOUR_ROLLUP_NAME>.<YOUR_HOSTNAME>/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RPC"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://executor."},"http://executor."),"<YOUR_ROLLUP_NAME>.<YOUR_HOSTNAME>/")))),(0,r.kt)("p",null,"Open the URLs in your browser to view your running rollup."),(0,r.kt)("h2",{id:"debug-ingress"},"Debug Ingress"),(0,r.kt)("p",null,"If you would like to view the ingress logs you can use the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get po -n ingress-nginx\n# get the name of one of the pods\nexport INGRESS_POD_1=ingress-nginx-controller-6d6559598-ll8gv\n# view the logs\nkubectl logs $INGRESS_POD_1 -n ingress-nginx\n")),(0,r.kt)("h2",{id:"use-cast-to-interact-with-your-rollup"},"Use ",(0,r.kt)("inlineCode",{parentName:"h2"},"cast")," to Interact with your Rollup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export ETH_RPC_URL=http://executor.<YOUR_ROLLUP_NAME>.<YOUR_HOSTNAME>/\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cast block 0\n")),(0,r.kt)("p",null,"Use an address of your choice."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export REC_ADDR=<SOME_ADDRESS>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cast balance $REC_ADDR\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cast send $REC_ADDR --value 10000000000000000000 --private-key $ROLLUP_FAUCET_PRIV_KEY\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cast balance $REC_ADDR\n")),(0,r.kt)("h2",{id:"fund-you-sequencer-account"},"Fund you Sequencer Account"),(0,r.kt)("p",null,"Using your sequencer pub key you created in the\n",(0,r.kt)("a",{parentName:"p",href:"#create-new-sequencer-account"},"Create a New Sequencer Account")," section, copy and past the\n",(0,r.kt)("inlineCode",{parentName:"p"},"<SEQUENCER_ACCOUNT_PUB_KEY>")," into the input on the faucet page, and mint funds\nto your account:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sequencer Faucet",src:n(9596).Z,width:"1490",height:"796"})))}d.isMDXComponent=!0},9354:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cname-record-example-bf3a0e171fde369cf6eeda154f8f2237.png"},9596:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sequencer-faucet-4a7e970aff2e75c2725fd745eb1014bb.png"}}]);