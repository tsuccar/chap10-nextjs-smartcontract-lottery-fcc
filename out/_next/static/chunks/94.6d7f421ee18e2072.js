"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94],{86094:function(e,t,n){n.r(t),n.d(t,{OpenloginAdapter:function(){return d},getOpenloginDefaultOptions:function(){return l}});var i=n(3388),r=n(16843),o=n(4942),a=n(68531),s=n(72378),c=n.n(s);const l=(e,t)=>({adapterSettings:{network:i.dr.MAINNET,clientId:"",uxMode:i.$e.POPUP},chainConfig:e?(0,r.h2)(e,t):null,loginSettings:{}});function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}class d extends r.J5{constructor(e){var t,n,a,s;super(),(0,o.Z)(this,"name",r.rW.OPENLOGIN),(0,o.Z)(this,"adapterNamespace",r.yk.MULTICHAIN),(0,o.Z)(this,"type",r.hN.IN_APP),(0,o.Z)(this,"openloginInstance",null),(0,o.Z)(this,"clientId",void 0),(0,o.Z)(this,"status",r.MP.NOT_READY),(0,o.Z)(this,"currentChainNamespace",r.EN.EIP155),(0,o.Z)(this,"openloginOptions",void 0),(0,o.Z)(this,"loginSettings",{}),(0,o.Z)(this,"privKeyProvider",null),r.cM.debug("const openlogin adapter",e);const c=l(null===(t=e.chainConfig)||void 0===t?void 0:t.chainNamespace,null===(n=e.chainConfig)||void 0===n?void 0:n.chainId);if(this.openloginOptions=p(p({clientId:"",network:i.dr.MAINNET},c.adapterSettings),e.adapterSettings||{}),this.clientId=null===(a=e.adapterSettings)||void 0===a?void 0:a.clientId,this.loginSettings=p(p({},c.loginSettings),e.loginSettings),this.sessionTime=this.loginSettings.sessionTime||86400,null!==(s=e.chainConfig)&&void 0!==s&&s.chainNamespace){var h;this.currentChainNamespace=null===(h=e.chainConfig)||void 0===h?void 0:h.chainNamespace;const t=c.chainConfig?c.chainConfig:{};if(this.chainConfig=p(p({},t),null===e||void 0===e?void 0:e.chainConfig),r.cM.debug("const openlogin chainConfig",this.chainConfig),!this.chainConfig.rpcTarget&&e.chainConfig.chainNamespace!==r.EN.OTHER)throw r.Ty.invalidParams("rpcTarget is required in chainConfig")}}get chainConfigProxy(){return this.chainConfig?p({},this.chainConfig):null}get provider(){var e;return(null===(e=this.privKeyProvider)||void 0===e?void 0:e.provider)||null}set provider(e){throw new Error("Not implemented")}async init(e){var t;if(super.checkInitializationRequirements(),null===(t=this.openloginOptions)||void 0===t||!t.clientId)throw r.Ty.invalidParams("clientId is required before openlogin's initialization");if(!this.chainConfig)throw r.Ty.invalidParams("chainConfig is required before initialization");let n=!1;if(this.openloginOptions.uxMode===i.$e.REDIRECT){const e=(0,i.Gv)();Object.keys(e).length>0&&e._pid&&(n=!0)}this.openloginOptions=p(p({},this.openloginOptions),{},{replaceUrlOnRedirect:n}),this.openloginInstance=new i.ZP(this.openloginOptions),r.cM.debug("initializing openlogin adapter init"),await this.openloginInstance.init(),this.status=r.MP.READY,this.emit(r.n2.READY,r.rW.OPENLOGIN);try{r.cM.debug("initializing openlogin adapter"),this.openloginInstance.privKey&&(e.autoConnect||n)&&await this.connect()}catch(o){r.cM.error("Failed to connect with cached openlogin provider",o),this.emit("ERRORED",o)}}async connect(e){super.checkConnectionRequirements(),this.status=r.MP.CONNECTING,this.emit(r.n2.CONNECTING,p(p({},e),{},{adapter:r.rW.OPENLOGIN}));try{return await this.connectWithProvider(e),this.provider}catch(t){if(r.cM.error("Failed to connect with openlogin provider",t),this.status=r.MP.READY,this.emit(r.n2.ERRORED,t),null!==t&&void 0!==t&&t.message.includes("user closed popup"))throw r.RM.popupClosed();throw r.RM.connectionError("Failed to login with openlogin")}}async disconnect(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cleanup:!1};if(this.status!==r.MP.CONNECTED)throw r.RM.notConnectedError("Not connected with wallet");if(!this.openloginInstance)throw r.Ty.notReady("openloginInstance is not ready");await this.openloginInstance.logout(),e.cleanup?(this.status=r.MP.NOT_READY,this.openloginInstance=null,this.privKeyProvider=null):this.status=r.MP.READY,this.emit(r.n2.DISCONNECTED)}async authenticateUser(){if(this.status!==r.MP.CONNECTED)throw r.RM.notConnectedError("Not connected with wallet, Please login/connect first");return{idToken:(await this.getUserInfo()).idToken}}async getUserInfo(){if(this.status!==r.MP.CONNECTED)throw r.RM.notConnectedError("Not connected with wallet");if(!this.openloginInstance)throw r.Ty.notReady("openloginInstance is not ready");return await this.openloginInstance.getUserInfo()}setAdapterSettings(e){if(this.status===r.MP.READY)return;const t=l();this.openloginOptions=p(p(p({},t.adapterSettings),this.openloginOptions||{}),e),e.sessionTime&&(this.loginSettings=p(p({},this.loginSettings),{},{sessionTime:e.sessionTime})),e.clientId&&(this.clientId=e.clientId)}setChainConfig(e){super.setChainConfig(e),this.currentChainNamespace=e.chainNamespace}async connectWithProvider(e){if(!this.chainConfig)throw r.Ty.invalidParams("chainConfig is required before initialization");if(!this.openloginInstance)throw r.Ty.notReady("openloginInstance is not ready");if(this.currentChainNamespace===r.EN.SOLANA){const{SolanaPrivateKeyProvider:e}=await Promise.all([n.e(282),n.e(108),n.e(576),n.e(663)]).then(n.bind(n,54877));this.privKeyProvider=new e({config:{chainConfig:this.chainConfig}})}else if(this.currentChainNamespace===r.EN.EIP155){const{EthereumPrivateKeyProvider:e}=await Promise.all([n.e(482),n.e(763),n.e(961),n.e(26)]).then(n.bind(n,10961));this.privKeyProvider=new e({config:{chainConfig:this.chainConfig}})}else{if(this.currentChainNamespace!==r.EN.OTHER)throw new Error(`Invalid chainNamespace: ${this.currentChainNamespace} found while connecting to wallet`);this.privKeyProvider=new a.FL}var t;!this.openloginInstance.privKey&&e&&(this.loginSettings.curve||(this.loginSettings.curve=this.currentChainNamespace===r.EN.SOLANA?i.x7.ED25519:i.x7.SECP256K1),await this.openloginInstance.login(c()(this.loginSettings,{loginProvider:e.loginProvider},{extraLoginOptions:p(p({},e.extraLoginOptions||{}),{},{login_hint:e.login_hint||(null===(t=e.extraLoginOptions)||void 0===t?void 0:t.login_hint)})})));let o=this.openloginInstance.privKey;if(o){if(this.currentChainNamespace===r.EN.SOLANA){const{getED25519Key:e}=await Promise.all([n.e(108),n.e(418)]).then(n.bind(n,33946));o=e(o).sk.toString("hex")}await this.privKeyProvider.setupProvider(o),this.status=r.MP.CONNECTED,this.emit(r.n2.CONNECTED,{adapter:r.rW.OPENLOGIN,reconnected:!e})}}}},68531:function(e,t,n){n.d(t,{FL:function(){return g},Zk:function(){return d}});var i=n(4942),r=n(22782),o=n(16843),a=n(79826),s=n(95844),c=n(23420),l=n.n(c);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}class d extends r.xG{constructor(e){let{config:t,state:n}=e;if(super({config:t,state:n}),(0,i.Z)(this,"_providerEngineProxy",null),!t.chainConfig)throw o.Ty.invalidProviderConfigError("Please provide chainConfig");if(!t.chainConfig.chainId)throw o.Ty.invalidProviderConfigError("Please provide chainId inside chainConfig");if(!t.chainConfig.rpcTarget)throw o.Ty.invalidProviderConfigError("Please provide rpcTarget inside chainConfig");this.defaultState={chainId:"loading"},this.defaultConfig={chainConfig:t.chainConfig,networks:{[t.chainConfig.chainId]:t.chainConfig}},super.initialize()}get provider(){return this._providerEngineProxy}set provider(e){throw new Error("Method not implemented.")}addChain(e){if(!e.chainId)throw a.ethErrors.rpc.invalidParams("chainId is required");if(!e.rpcTarget)throw a.ethErrors.rpc.invalidParams("chainId is required");this.configure({networks:p(p({},this.config.networks),{},{[e.chainId]:e})})}getChainConfig(e){var t;const n=null===(t=this.config.networks)||void 0===t?void 0:t[e];if(!n)throw a.ethErrors.rpc.invalidRequest(`Chain ${e} is not supported, please add chainConfig for it`);return n}getProviderEngineProxy(){return this._providerEngineProxy}updateProviderEngineProxy(e){this._providerEngineProxy?this._providerEngineProxy.setTarget(e):this._providerEngineProxy=(0,r.qY)(e)}}class g{constructor(){(0,i.Z)(this,"_providerEngineProxy",null)}get provider(){return this._providerEngineProxy}set provider(e){throw new Error("Method not implemented.")}addChain(e){throw new Error("Method not implemented.")}async setupProvider(e){const t=this.getPrivKeyMiddleware(e),n=new s.eI;n.push(t);const i=(0,r.Xj)(n);this.updateProviderEngineProxy(i)}async switchChain(e){return Promise.resolve()}getProviderEngineProxy(){return this._providerEngineProxy}updateProviderEngineProxy(e){this._providerEngineProxy?this._providerEngineProxy.setTarget(e):this._providerEngineProxy=(0,r.qY)(e)}getPrivKeyMiddleware(e){const t={getPrivatekey:async()=>e};return this.createPrivKeyMiddleware(t)}createPrivKeyMiddleware(e){let{getPrivatekey:t}=e;return(0,s.v0)({private_key:(0,s.Pk)((async function(e,n){n.result=await t()}))})}}(0,i.Z)(g,"getProviderInstance",(async e=>{const t=new g;return await t.setupProvider(e.privKey),t}));l()()},16843:function(e,t,n){n.d(t,{EN:function(){return c},H2:function(){return I},J5:function(){return b},MP:function(){return P},RM:function(){return g},Ty:function(){return d},cM:function(){return T},h2:function(){return h},hN:function(){return O},n2:function(){return w},rW:function(){return E},yk:function(){return l}});var i=n(4942),r=n(95844),o=n(13631),a=(n(20917),n(96245),n(2043)),s=n.n(a);const c={EIP155:"eip155",SOLANA:"solana",OTHER:"other"},l={EIP155:"eip155",SOLANA:"solana",MULTICHAIN:"multichain"},h=(e,t)=>{if(e===c.OTHER)return null;const n=t?"number"===typeof t?t:parseInt(t,16):(e=>{if(e===c.EIP155)return 1;if(e===c.SOLANA)return 1;throw new Error(`Chain namespace ${e} is not supported`)})(e);return e===c.EIP155?(e=>{const t=c.EIP155;return 1===e?{chainNamespace:t,chainId:"0x1",rpcTarget:"https://rpc.ankr.com/eth",displayName:"Ethereum Mainnet",blockExplorer:"https://etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:3===e?{chainNamespace:t,chainId:"0x3",rpcTarget:"https://rpc.ankr.com/eth_ropsten",displayName:"Ropsten Testnet",blockExplorer:"https://ropsten.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:4===e?{chainNamespace:t,chainId:"0x4",rpcTarget:"https://rpc.ankr.com/eth_rinkeby",displayName:"Rinkeby Testnet",blockExplorer:"https://rinkeby.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:5===e?{chainNamespace:t,chainId:"0x5",rpcTarget:"https://rpc.ankr.com/eth_goerli",displayName:"Goerli Testnet",blockExplorer:"https://goerli.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:137===e?{chainNamespace:t,chainId:"0x89",rpcTarget:"https://rpc.ankr.com/polygon",displayName:"Polygon Mainnet",blockExplorer:"https://polygonscan.com",ticker:"MATIC",tickerName:"Polygon"}:80001===e?{chainNamespace:t,chainId:"0x13881",rpcTarget:"https://rpc.ankr.com/polygon_mumbai",displayName:"Polygon Mumbai Testnet",blockExplorer:"https://mumbai.polygonscan.com/",ticker:"MATIC",tickerName:"Polygon"}:56===e?{chainNamespace:t,chainId:"0x38",rpcTarget:"https://rpc.ankr.com/bsc",displayName:"Binance SmartChain Mainnet",blockExplorer:"https://bscscan.com",ticker:"BNB",tickerName:"Binance SmartChain"}:97===e?{chainNamespace:t,chainId:"0x61",rpcTarget:"https://rpc.ankr.com/bsc_testnet_chapel",displayName:"Binance SmartChain Testnet",blockExplorer:"https://testnet.bscscan.com",ticker:"BNB",tickerName:"Binance SmartChain"}:25===e?{chainNamespace:t,chainId:"0x19",rpcTarget:"https://rpc.cronos.org",displayName:"Cronos Mainnet",blockExplorer:"https://cronoscan.com/",ticker:"CRO",tickerName:"Cronos"}:338===e?{chainNamespace:t,chainId:"0x152",rpcTarget:"https://rpc-t3.cronos.org/",displayName:"Cronos Testnet",blockExplorer:"https://cronoscan.com/",ticker:"CRO",tickerName:"Cronos"}:8217===e?{chainNamespace:t,chainId:"0x2019",rpcTarget:"https://public-node-api.klaytnapi.com/v1/cypress",displayName:"Klaytn Mainnet",blockExplorer:"https://scope.klaytn.com",ticker:"KLAY",tickerName:"Klaytn"}:null})(n):e===c.SOLANA?(e=>{const t=c.SOLANA;return 1===e?{chainNamespace:t,chainId:"0x1",rpcTarget:"https://rpc.ankr.com/solana",displayName:"Solana Mainnet",blockExplorer:"https://explorer.solana.com",ticker:"SOL",tickerName:"Solana"}:2===e?{chainNamespace:t,chainId:"0x2",rpcTarget:"https://api.testnet.solana.com",displayName:"Solana Testnet",blockExplorer:"https://explorer.solana.com?cluster=testnet",ticker:"SOL",tickerName:"Solana"}:3===e?{chainNamespace:t,chainId:"0x3",rpcTarget:"https://api.devnet.solana.com",displayName:"Solana Devnet",blockExplorer:"https://explorer.solana.com?cluster=devnet",ticker:"SOL",tickerName:"Solana"}:null})(n):null};class p extends o.s{constructor(e,t){super(t),(0,i.Z)(this,"code",void 0),(0,i.Z)(this,"message",void 0),this.code=e,this.message=t||"",Object.defineProperty(this,"name",{value:"Web3AuthError"})}toJSON(){return{name:this.name,code:this.code,message:this.message}}toString(){return JSON.stringify(this.toJSON())}}class d extends p{constructor(e,t){super(e,t),Object.defineProperty(this,"name",{value:"WalletInitializationError"})}static fromCode(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new d(e,`${d.messages[e]}, ${t}`)}static notFound(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return d.fromCode(5001,e)}static notInstalled(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return d.fromCode(5002,e)}static notReady(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return d.fromCode(5003,e)}static windowBlocked(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return d.fromCode(5004,e)}static windowClosed(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return d.fromCode(5005,e)}static incompatibleChainNameSpace(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return d.fromCode(5006,e)}static duplicateAdapterError(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return d.fromCode(5007,e)}static invalidProviderConfigError(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return d.fromCode(5008,e)}static providerNotReadyError(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return d.fromCode(5009,e)}static rpcConnectionError(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return d.fromCode(5010,e)}static invalidParams(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return d.fromCode(5011,e)}static invalidNetwork(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return d.fromCode(5013,e)}}(0,i.Z)(d,"messages",{5e3:"Custom",5001:"Wallet is not found",5002:"Wallet is not installed",5003:"Wallet is not ready yet",5004:"Wallet window is blocked",5005:"Wallet window has been closed by the user",5006:"Incompatible chain namespace provided",5007:"Adapter has already been included",5008:"Invalid provider Config",5009:"Provider is not ready yet",5010:"Failed to connect with rpc url",5011:"Invalid params passed in",5013:"Invalid network provided"});class g extends p{constructor(e,t){super(e,t),Object.defineProperty(this,"name",{value:"WalletLoginError"})}static fromCode(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new g(e,`${g.messages[e]}${t}`)}static connectionError(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return g.fromCode(5111,e)}static disconnectionError(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return g.fromCode(5112,e)}static notConnectedError(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return g.fromCode(5113,e)}static popupClosed(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return g.fromCode(5114,e)}}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}(0,i.Z)(g,"messages",{5e3:"Custom",5111:"Failed to connect with wallet",5112:"Failed to disconnect from wallet",5113:"Wallet is not connected",5114:"Wallet popup has been closed by the user"});const m={OPENLOGIN:"openlogin",WALLET_CONNECT_V1:"wallet-connect-v1",WALLET_CONNECT_V2:"wallet-connect-v2"},v=f({TORUS_SOLANA:"torus-solana",PHANTOM:"phantom",SOLLET:"sollet",SOLLET_EXTENSION:"sollet-extension",SOLFLARE:"solflare",SLOPE:"slope"},m),y=f({TORUS_EVM:"torus-evm",METAMASK:"metamask",COINBASE:"coinbase"},m),E=f(f({},y),v);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const O={EXTERNAL:"external",IN_APP:"in_app"},P={NOT_READY:"not_ready",READY:"ready",CONNECTING:"connecting",CONNECTED:"connected",DISCONNECTED:"disconnected",ERRORED:"errored"},w=C(C({},P),{},{ADAPTER_DATA_UPDATED:"adapter_data_updated"});class b extends r.Ue{constructor(){super(...arguments),(0,i.Z)(this,"adapterData",{}),(0,i.Z)(this,"sessionTime",86400),(0,i.Z)(this,"chainConfig",null)}get chainConfigProxy(){return this.chainConfig?C({},this.chainConfig):null}setChainConfig(e){if(this.status===P.READY)return;if(!e.chainNamespace)throw d.notReady("ChainNamespace is required while setting chainConfig");const t=h(e.chainNamespace,e.chainId);this.chainConfig=C(C({},t),e)}setAdapterSettings(e){}checkConnectionRequirements(){if(this.name!==E.WALLET_CONNECT_V1||this.status!==P.CONNECTING){if(this.status===P.CONNECTING)throw d.notReady("Already connecting");if(this.status===P.CONNECTED)throw g.connectionError("Already connected");if(this.status!==P.READY)throw g.connectionError("Wallet adapter is not ready yet, Please wait for init function to resolve before calling connect/connectTo function");if(!this.clientId)throw g.connectionError("Please initialize Web3Auth with a valid clientId in constructor")}}checkInitializationRequirements(){if(this.status!==P.NOT_READY){if(this.status===P.CONNECTED)throw d.notReady("Already connected");if(this.status===P.READY)throw d.notReady("Adapter is already initialized")}}updateAdapterData(e){this.adapterData=e,this.emit(w.ADAPTER_DATA_UPDATED,{adapterName:this.name,data:e})}}var T=s().getLogger("web3auth-logger");const I=e=>("string"===typeof e||"number"===typeof e)&&/^(-)?0x[0-9a-f]*$/i.test(e)}}]);