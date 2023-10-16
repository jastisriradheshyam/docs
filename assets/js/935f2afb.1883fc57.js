"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docsSidebar":[{"type":"category","label":"Overview of Astria","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Why Decentralized Sequencers?","href":"/docs/overview-of-astria/why-decentralized-sequencers","docId":"overview-of-astria/why-decentralized-sequencers"},{"type":"link","label":"Croll-Rollup Composability","href":"/docs/overview-of-astria/cross-rollup-composability","docId":"overview-of-astria/cross-rollup-composability"},{"type":"link","label":"Maintain Sovereignty","href":"/docs/overview-of-astria/maintain-sovereignty","docId":"overview-of-astria/maintain-sovereignty"},{"type":"category","label":"Architecture","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Transaction Flow","href":"/docs/overview-of-astria/architecture/transaction-flow","docId":"overview-of-astria/architecture/transaction-flow"},{"type":"link","label":"Rollups","href":"/docs/overview-of-astria/architecture/rollup","docId":"overview-of-astria/architecture/rollup"},{"type":"link","label":"Composer","href":"/docs/overview-of-astria/architecture/composer","docId":"overview-of-astria/architecture/composer"},{"type":"link","label":"The Astria Sequencer","href":"/docs/overview-of-astria/architecture/the-astria-sequencer","docId":"overview-of-astria/architecture/the-astria-sequencer"},{"type":"link","label":"Relayer","href":"/docs/overview-of-astria/architecture/relayer","docId":"overview-of-astria/architecture/relayer"},{"type":"link","label":"Conductor","href":"/docs/overview-of-astria/architecture/conductor","docId":"overview-of-astria/architecture/conductor"},{"type":"link","label":"Data Availability Layer","href":"/docs/overview-of-astria/architecture/data-availability-layer","docId":"overview-of-astria/architecture/data-availability-layer"}],"href":"/docs/overview-of-astria/architecture/overview"}],"href":"/docs/overview-of-astria/introduction"},{"type":"category","label":"Local Dev Cluster","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Running the Dev Cluster Locally","href":"/docs/dev-cluster/run-dev-cluster-locally","docId":"dev-cluster/run-dev-cluster-locally"},{"type":"link","label":"Running a Local Rollup","href":"/docs/dev-cluster/deploy-a-local-rollup","docId":"dev-cluster/deploy-a-local-rollup"},{"type":"link","label":"Run Multiple Rollups Locally","href":"/docs/dev-cluster/run-multiple-rollups-locally","docId":"dev-cluster/run-multiple-rollups-locally"},{"type":"link","label":"Shutting Down the Cluster","href":"/docs/dev-cluster/shutdown","docId":"dev-cluster/shutdown"}],"href":"/docs/dev-cluster/overview"},{"type":"category","label":"Running a rollup on Astria Dusknet","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Configure the Remote Rollup","href":"/docs/running-a-rollup-on-astria-dusknet/configure-remote-rollup","docId":"running-a-rollup-on-astria-dusknet/configure-remote-rollup"},{"type":"link","label":"Local Rollup Deployment","href":"/docs/running-a-rollup-on-astria-dusknet/local-rollup-deployment","docId":"running-a-rollup-on-astria-dusknet/local-rollup-deployment"},{"type":"link","label":"Remote Rollup Deployment","href":"/docs/running-a-rollup-on-astria-dusknet/remote-rollup-deployment","docId":"running-a-rollup-on-astria-dusknet/remote-rollup-deployment"}],"href":"/docs/running-a-rollup-on-astria-dusknet/overview"}]},"docs":{"dev-cluster/deploy-a-local-rollup":{"id":"dev-cluster/deploy-a-local-rollup","title":"Running a Local Rollup","description":"Faucet, Block Explorer, and Test Data","sidebar":"docsSidebar"},"dev-cluster/overview":{"id":"dev-cluster/overview","title":"Dev-Cluster Overview","description":"Astria\'s Shared Sequencer Network allows multiple rollups to share a single decentralized network of sequencers that\u2019s permissionless to join. This shared sequencer network provides out-of-the-box censorship resistance, fast block confirmations, and atomic cross-rollup inclusion guarantees.","sidebar":"docsSidebar"},"dev-cluster/run-dev-cluster-locally":{"id":"dev-cluster/run-dev-cluster-locally","title":"Running the Dev Cluster Locally","description":"Installation","sidebar":"docsSidebar"},"dev-cluster/run-multiple-rollups-locally":{"id":"dev-cluster/run-multiple-rollups-locally","title":"Run Multiple Rollups Locally","description":"At Astria we believe strongly that deploying a rollup should be as easy as deploying a smart contract. The dev-cluster shows this is indeed possible.","sidebar":"docsSidebar"},"dev-cluster/shutdown":{"id":"dev-cluster/shutdown","title":"Shutting Down the Cluster","description":"Deleting Specific Rollups","sidebar":"docsSidebar"},"overview-of-astria/architecture/composer":{"id":"overview-of-astria/architecture/composer","title":"Composer","description":"The Composer is an in-house abstraction over the potential actors in Astria\'s","sidebar":"docsSidebar"},"overview-of-astria/architecture/conductor":{"id":"overview-of-astria/architecture/conductor","title":"Conductor","description":"Conductor\'s role is to drive the deterministic execution of sequencer blocks to","sidebar":"docsSidebar"},"overview-of-astria/architecture/data-availability-layer":{"id":"overview-of-astria/architecture/data-availability-layer","title":"Data Availability Layer","description":"The dev-cluster uses Celestia as the data","sidebar":"docsSidebar"},"overview-of-astria/architecture/overview":{"id":"overview-of-astria/architecture/overview","title":"Architecture Overview","description":"At a high level, Astria breaks out all of the components that are historically","sidebar":"docsSidebar"},"overview-of-astria/architecture/relayer":{"id":"overview-of-astria/architecture/relayer","title":"Relayer","description":"The Relayer\'s responsibility is to take validated blocks from the sequencer and","sidebar":"docsSidebar"},"overview-of-astria/architecture/rollup":{"id":"overview-of-astria/architecture/rollup","title":"Rollups","description":"Astria is designed for permissionless rollup integration and takes advantage of lazy shared sequencing. This means that rollup developers have total sovereignty over their own execution state and can swap out sequencing layers without fear of being locked in. You do not need to ask for permission or go through a governance process to gain access. A rollup simply needs to satisfy the following interfaces:","sidebar":"docsSidebar"},"overview-of-astria/architecture/the-astria-sequencer":{"id":"overview-of-astria/architecture/the-astria-sequencer","title":"The Astria Sequencer","description":"The Astria Shared Sequencer is a decentralized network of nodes utilizing CometBFT that come to consensus on an ordered set of transactions (ie. it is a blockchain). The unique feature of the sequencer is that the transactions it includes are not executed (lazy sequencing), and are destined for another execution engine (ie. a rollup). This excludes \u201csequencer native\u201d transactions, such as transfers of tokens within the sequencer chain. Transactions from any given rollup are only ordered on the sequencer, not executed.","sidebar":"docsSidebar"},"overview-of-astria/architecture/transaction-flow":{"id":"overview-of-astria/architecture/transaction-flow","title":"Transaction Flow","description":"The full transaction flow through the Astria stack is as follows:","sidebar":"docsSidebar"},"overview-of-astria/cross-rollup-composability":{"id":"overview-of-astria/cross-rollup-composability","title":"Croll-Rollup Composability","description":"Because Astria handles the transaction ordering for multiple rollups, it\u2019s able to provide guarantees that transactions are only included as part of an atomic bundle. This allows users to specify that a transaction on Rollup A can be included in a block if and only if a different transaction on Rollup B is also included in the same block. By enabling such conditional transaction inclusion, Astria unlocks exciting possibilities such as atomic cross-rollup arbitrage.","sidebar":"docsSidebar"},"overview-of-astria/introduction":{"id":"overview-of-astria/introduction","title":"Introduction","description":"Astria is a shared sequencing network that allows many rollups to share a single","sidebar":"docsSidebar"},"overview-of-astria/maintain-sovereignty":{"id":"overview-of-astria/maintain-sovereignty","title":"Maintain Sovereignty","description":"Sovereignty is important, so rollups must be able to receive the benefits of","sidebar":"docsSidebar"},"overview-of-astria/why-decentralized-sequencers":{"id":"overview-of-astria/why-decentralized-sequencers","title":"Why Decentralized Sequencers?","description":"Centralization is antithetical to crypto. And yet, today\u2019s rollups almost universally depend on a single sequencer. Centralized sequencers provide fast transaction confirmations and reduce costs by batching and compressing transactions. However, these benefits come at the cost of relying on a single trusted actor for liveness and censorship resistance.","sidebar":"docsSidebar"},"running-a-rollup-on-astria-dusknet/configure-remote-rollup":{"id":"running-a-rollup-on-astria-dusknet/configure-remote-rollup","title":"Configure the Remote Rollup","description":"Endpoints","sidebar":"docsSidebar"},"running-a-rollup-on-astria-dusknet/local-rollup-deployment":{"id":"running-a-rollup-on-astria-dusknet/local-rollup-deployment","title":"Local Rollup Deployment","description":"Deploy the Local Run Environment","sidebar":"docsSidebar"},"running-a-rollup-on-astria-dusknet/overview":{"id":"running-a-rollup-on-astria-dusknet/overview","title":"Overview","description":"After running the Astria stack locally, the next step is to run a rollup against","sidebar":"docsSidebar"},"running-a-rollup-on-astria-dusknet/remote-rollup-deployment":{"id":"running-a-rollup-on-astria-dusknet/remote-rollup-deployment","title":"Remote Rollup Deployment","description":"Creating a Rollup on Digital Ocean K8s","sidebar":"docsSidebar"}}}')}}]);