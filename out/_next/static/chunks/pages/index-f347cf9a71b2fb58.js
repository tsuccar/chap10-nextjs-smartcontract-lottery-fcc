(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{79361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},75557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(86114)}])},37821:function(e,t,n){"use strict";var i=n(63021),a=n(37917);e.exports={contractAddresses:a,abi:i}},28045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(79361).Z,a=n(94941).Z,r=n(53929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,s=e.unoptimized,u=void 0!==s&&s,y=e.priority,g=void 0!==y&&y,w=e.loading,j=e.lazyRoot,E=void 0===j?null:j,k=e.lazyBoundary,N=e.className,R=e.quality,I=e.width,C=e.height,O=e.style,L=e.objectFit,M=e.objectPosition,P=e.onLoadingComplete,F=e.placeholder,W=void 0===F?"empty":F,q=e.blurDataURL,H=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),T=l.useContext(m.ImageConfigContext),B=l.useMemo((function(){var e=b||T||f.imageConfigDefault,t=r(e.deviceSizes).concat(r(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return o({},e,{allSizes:t,deviceSizes:n})}),[T]),D=H,U=n?"responsive":"intrinsic";"layout"in D&&(D.layout&&(U=D.layout),delete D.layout);var Z=A;if("loader"in D){if(D.loader){var J=D.loader;Z=function(e){e.config;var t=c(e,["config"]);return J(t)}}delete D.loader}var V="";if(function(e){return"object"===typeof e&&(_(e)||function(e){return void 0!==e.src}(e))}(t)){var X=_(t)?t.default:t;if(!X.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));if(q=q||X.blurDataURL,V=X.src,(!U||"fill"!==U)&&(C=C||X.height,I=I||X.width,!X.height||!X.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)))}var G=!g&&("lazy"===w||"undefined"===typeof w);((t="string"===typeof t?t:V).startsWith("data:")||t.startsWith("blob:"))&&(u=!0,G=!1);h.has(t)&&(G=!1);B.unoptimized&&(u=!0);var Q,K=a(l.useState(!1),2),Y=K[0],$=K[1],ee=a(p.useIntersection({rootRef:E,rootMargin:k||"200px",disabled:!G}),3),te=ee[0],ne=ee[1],ie=ee[2],ae=!G||ne,re={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},oe={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se=!1,ue={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:L,objectPosition:M},ce=S(I),le=S(C),de=S(R);0;var fe=Object.assign({},O,ue),pe="blur"!==W||Y?{}:{backgroundSize:L||"cover",backgroundPosition:M||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(q,'")')};if("fill"===U)re.display="block",re.position="absolute",re.top=0,re.left=0,re.bottom=0,re.right=0;else if("undefined"!==typeof ce&&"undefined"!==typeof le){var me=le/ce,ye=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===U?(re.display="block",re.position="relative",se=!0,oe.paddingTop=ye):"intrinsic"===U?(re.display="inline-block",re.position="relative",re.maxWidth="100%",se=!0,oe.maxWidth="100%",Q="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ce,"%27%20height=%27").concat(le,"%27/%3e")):"fixed"===U&&(re.display="inline-block",re.position="relative",re.width=ce,re.height=le)}else 0;var ge={src:v,srcSet:void 0,sizes:void 0};ae&&(ge=x({config:B,src:t,unoptimized:u,layout:U,width:ce,quality:de,sizes:n,loader:Z}));var be=t;0;var he,ve="imagesrcset",we="imagesizes";ve="imageSrcSet",we="imageSizes";var _e=(i(he={},ve,ge.srcSet),i(he,we,ge.sizes),he),xe=l.default.useLayoutEffect,Se=l.useRef(P),Ae=l.useRef(t);l.useEffect((function(){Se.current=P}),[P]),xe((function(){Ae.current!==t&&(ie(),Ae.current=t)}),[ie,t]);var je=o({isLazy:G,imgAttributes:ge,heightInt:le,widthInt:ce,qualityInt:de,layout:U,className:N,imgStyle:fe,blurStyle:pe,loading:w,config:B,unoptimized:u,placeholder:W,loader:Z,srcString:be,onLoadingCompleteRef:Se,setBlurComplete:$,setIntersection:te,isVisible:ae,noscriptSizes:n},D);return l.default.createElement(l.default.Fragment,null,l.default.createElement("span",{style:re},se?l.default.createElement("span",{style:oe},Q?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Q}):null):null,l.default.createElement(z,Object.assign({},je))),g?l.default.createElement(d.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ge.src+ge.srcSet+ge.sizes,rel:"preload",as:"image",href:ge.srcSet?void 0:ge.src},_e))):null)};var o=n(6495).Z,s=n(92648).Z,u=n(91598).Z,c=n(17273).Z,l=u(n(67294)),d=s(n(5443)),f=n(99309),p=n(57190),m=n(59977),y=(n(63794),n(82392));function g(e){return"/"===e[0]?e.slice(1):e}var b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1},h=new Set,v=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,a=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(y.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(a||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,a=e.quality,r=new URL("".concat(t.path).concat(g(n))),o=r.searchParams;return o.set("auto",o.getAll("auto").join(",")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||i.toString()),a&&o.set("q",a.toString()),r.href}],["cloudinary",function(e){var t=e.config,n=e.src,i=["f_auto","c_limit","w_"+e.width,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(t.path).concat(i).concat(g(n))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(g(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function _(e){return void 0!==e.default}function x(e){var t=e.config,n=e.src,i=e.unoptimized,a=e.layout,o=e.width,s=e.quality,u=e.sizes,c=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var l=function(e,t,n,i){var a=e.deviceSizes,o=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var s,u=/(^|\s)(1?\d?\d)vw/g,c=[];s=u.exec(i);s)c.push(parseInt(s[2]));if(c.length){var l,d=.01*(l=Math).min.apply(l,r(c));return{widths:o.filter((function(e){return e>=a[0]*d})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:a,kind:"w"}:{widths:r(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,a,u),d=l.widths,f=l.kind,p=d.length-1;return{sizes:u||"w"!==f?u:"100vw",srcSet:d.map((function(e,i){return"".concat(c({config:t,src:n,quality:s,width:e})," ").concat("w"===f?e:i+1).concat(f)})).join(", "),src:c({config:t,src:n,quality:s,width:d[p]})}}function S(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function A(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",i=w.get(n);if(i)return i(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function j(e,t,n,i,a,r){e&&e.src!==v&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(h.add(t),"blur"===i&&r(!0),null==a?void 0:a.current)){var n=e.naturalWidth,o=e.naturalHeight;a.current({naturalWidth:n,naturalHeight:o})}})))}var z=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),i=e.qualityInt,a=e.layout,r=e.className,s=e.imgStyle,u=e.blurStyle,d=e.isLazy,f=e.placeholder,p=e.loading,m=e.srcString,y=e.config,g=e.unoptimized,b=e.loader,h=e.onLoadingCompleteRef,v=e.setBlurComplete,w=e.setIntersection,_=e.onLoad,S=e.onError,A=(e.isVisible,e.noscriptSizes),z=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return p=d?"lazy":p,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},z,t,{decoding:"async","data-nimg":a,className:r,style:o({},s,u),ref:l.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&j(e,m,0,f,h,v)}),[w,m,a,f,h,v]),onLoad:function(e){j(e.currentTarget,m,0,f,h,v),_&&_(e)},onError:function(e){"blur"===f&&v(!0),S&&S(e)}})),(d||"blur"===f)&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},z,x({config:y,src:m,unoptimized:g,layout:a,width:n,quality:i,sizes:A,loader:b}),{decoding:"async","data-nimg":a,style:s,className:r,loading:p}))))};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},57190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(94941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!o,l=i(a.useState(!1),2),d=l[0],f=l[1],p=i(a.useState(null),2),m=p[0],y=p[1];a.useEffect((function(){if(o){if(c||d)return;if(m&&m.tagName){var e=function(e,t,n){var i=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},i=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(i&&(t=s.get(i)))return t;var a=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:r,elements:a},u.push(n),s.set(n,t),t}(n),a=i.id,r=i.observer,o=i.elements;return o.set(e,t),r.observe(e),function(){if(o.delete(e),r.unobserve(e),0===o.size){r.disconnect(),s.delete(a);var t=u.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&u.splice(t,1)}}}(m,(function(e){return e&&f(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!d){var i=r.requestIdleCallback((function(){return f(!0)}));return function(){return r.cancelIdleCallback(i)}}}),[m,c,n,t,d]);var g=a.useCallback((function(){f(!1)}),[]);return[y,d,g]};var a=n(67294),r=n(9311),o="function"===typeof IntersectionObserver,s=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},86114:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var i=n(85893),a=n(9008),r=n.n(a),o=(n(25675),n(35801)),s=n.n(o),u=n(97621);function c(){return(0,i.jsxs)("nav",{className:"p-5 border-b-2 flex flex-row",children:[(0,i.jsx)("h1",{className:"py-4 px-4 font-bold text-3xl",children:" Decentralized Lottery"}),(0,i.jsx)("div",{className:"ml-auto py-2 px-4",children:(0,i.jsx)(u.cg,{moralisAuth:!1})})]})}function l(e,t,n,i,a,r,o){try{var s=e[r](o),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(i,a)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var r=e.apply(t,n);function o(e){l(r,i,a,o,s,"next",e)}function s(e){l(r,i,a,o,s,"throw",e)}o(void 0)}))}}var f=n(70655),p=n(37821),m=n(83078),y=n(67294),g=n(68209),b=n(35553);function h(){var e=(0,m.Nr)(),t=(e.Moralis,e.isWeb3Enabled),n=e.chainId,a=e.web3,r=parseInt(n);console.log("ChainId is ".concat(r)),console.log("ChainId is contractAddresses ? ".concat(r in p.contractAddresses));var o=r in p.contractAddresses?p.contractAddresses[r][0]:null;console.log("RaffleAddress is ".concat(o));var s=(0,y.useState)("0"),c=s[0],l=s[1],h=(0,y.useState)("0"),v=h[0],w=h[1],_=(0,y.useState)("0"),x=_[0],S=_[1],A=(0,u.aa)(),j=(0,m.JX)({abi:p.abi,contractAddress:o,functionName:"enterRaffle",msgValue:c,params:{}}),z=j.runContractFunction,E=(j.data,j.isLoading),k=j.isFetching,N=(0,m.JX)({abi:p.abi,contractAddress:o,functionName:"getEntranceFee",params:{}}).runContractFunction,R=(0,m.JX)({abi:p.abi,contractAddress:o,functionName:"getNumberOfPlayers",params:{}}).runContractFunction,I=(0,m.JX)({abi:p.abi,contractAddress:o,functionName:"getRecentWinner",params:{}}).runContractFunction;function C(){return O.apply(this,arguments)}function O(){return(O=d((function(){var e,t,n;return(0,f.__generator)(this,(function(i){switch(i.label){case 0:return[4,N()];case 1:return e=i.sent().toString(),[4,R()];case 2:return t=i.sent().toString(),[4,I()];case 3:return n=i.sent(),console.log("number of player ".concat(t)),l(e),w(t),S(n),[2]}}))}))).apply(this,arguments)}(0,y.useEffect)((function(){t&&(C(),function(){M.apply(this,arguments)}())}),[t,v]);var L=function(){var e=d((function(e){return(0,f.__generator)(this,(function(t){switch(t.label){case 0:return[4,e.wait(1)];case 1:return t.sent(),C(),A({type:"info",message:"Transaction Complete!",title:"Transaction Notification",position:"topR",icon:"bell"}),[2]}}))}));return function(t){return e.apply(this,arguments)}}();function M(){return(M=d((function(){var e;return(0,f.__generator)(this,(function(t){switch(t.label){case 0:return e=new g.CH(o,p.abi,a),console.log("Waiting for a winner ..."),[4,new Promise((function(t,n){e.once("WinnerPicked",d((function(){var e;return(0,f.__generator)(this,(function(i){switch(i.label){case 0:console.log("We got a winner!"),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,C()];case 2:return i.sent(),t(),[3,4];case 3:return e=i.sent(),console.log(e),n(e),[3,4];case 4:return[2]}}))})))}))];case 1:return t.sent(),[2]}}))}))).apply(this,arguments)}return(0,i.jsxs)("div",{className:"p-5",children:[(0,i.jsx)("h1",{className:"py-4 px-4 font-bold text-3xl",children:"Lottery"}),o?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto",onClick:d((function(){var e;return(0,f.__generator)(this,(function(t){switch(t.label){case 0:return[4,z(((e={}).onSuccess=L,e.onError=function(e){return console.log(e)},e))];case 1:return[2,t.sent()]}}))})),disabled:E||k,children:E||k?(0,i.jsx)("div",{className:"animate-spin spinner-border h-8 w-8 border-b-2 rounded-full"}):"Enter Raffle"}),(0,i.jsxs)("div",{children:["Entrance Fee: ",b.bM(c,"ether")," ETH"]}),(0,i.jsxs)("div",{children:["The current number of players is: ",v]}),(0,i.jsxs)("div",{children:["The most previous winner was: ",x]})]}):(0,i.jsx)("div",{children:"Please connect to a supported chain "})]})}function v(){return(0,i.jsxs)("div",{className:s().container,children:[(0,i.jsxs)(r(),{children:[(0,i.jsx)("title",{children:"Smart Contract Lotter"}),(0,i.jsx)("meta",{name:"description",content:"Our Smart Contract Lotter"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)(c,{}),(0,i.jsx)(h,{})]})}},35801:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,n){e.exports=n(5443)},25675:function(e,t,n){n(28045)},63021:function(e){"use strict";e.exports=JSON.parse('[{"type":"constructor","payable":false,"inputs":[{"type":"address","name":"vrfCoordinatorV2"},{"type":"uint256","name":"entranceFee"},{"type":"bytes32","name":"gasLane"},{"type":"uint64","name":"subscriptionId"},{"type":"uint32","name":"callbackGasLimit"},{"type":"uint256","name":"interval"}]},{"type":"error","name":"OnlyCoordinatorCanFulfill","inputs":[{"type":"address","name":"have"},{"type":"address","name":"want"}]},{"type":"error","name":"Raffle_TransferFailed","inputs":[]},{"type":"error","name":"Raffle__NotEnoughETHEntered","inputs":[]},{"type":"error","name":"Raffle__NotOpen","inputs":[]},{"type":"error","name":"Raffle__UpkeepNotNeeded","inputs":[{"type":"uint256","name":"currentBalance"},{"type":"uint256","name":"numPlayers"},{"type":"uint256","name":"raffleState"}]},{"type":"event","anonymous":false,"name":"RaffleEnter","inputs":[{"type":"address","name":"player","indexed":true}]},{"type":"event","anonymous":false,"name":"RequestRaffleWinner","inputs":[{"type":"uint256","name":"Id","indexed":true}]},{"type":"event","anonymous":false,"name":"WinnerPicked","inputs":[{"type":"address","name":"winner","indexed":true}]},{"type":"function","name":"checkUpkeep","constant":false,"payable":false,"inputs":[{"type":"bytes"}],"outputs":[{"type":"bool","name":"upkeepNeeded"},{"type":"bytes"}]},{"type":"function","name":"enterRaffle","constant":false,"stateMutability":"payable","payable":true,"inputs":[],"outputs":[]},{"type":"function","name":"getEntranceFee","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getInterval","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getLatestTimeStamp","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getNumWords","constant":true,"stateMutability":"pure","payable":false,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getNumberOfPlayers","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getPlayer","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"uint256","name":"index"}],"outputs":[{"type":"address"}]},{"type":"function","name":"getRaffleState","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint8"}]},{"type":"function","name":"getRecentWinner","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"address"}]},{"type":"function","name":"getRequestConfirmations","constant":true,"stateMutability":"pure","payable":false,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"performUpkeep","constant":false,"payable":false,"inputs":[{"type":"bytes"}],"outputs":[]},{"type":"function","name":"rawFulfillRandomWords","constant":false,"payable":false,"inputs":[{"type":"uint256","name":"requestId"},{"type":"uint256[]","name":"randomWords"}],"outputs":[]}]')},37917:function(e){"use strict";e.exports=JSON.parse('{"4":["0x2d835BA10Ff92c618F3ffee4Ec153C1082f3ce08"],"31337":["0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"]}')}},function(e){e.O(0,[774,888,179],(function(){return t=75557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);