(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(5500)}])},6673:function(e,b,a){"use strict";var f=a(5893),c=a(5675),g=a.n(c),d=a(3952),h=a.n(d);b.Z=function(){return(0,f.jsx)("footer",{className:h().footer,children:(0,f.jsxs)("span",{children:["Powered by"," ",(0,f.jsx)("span",{className:h().logo,children:(0,f.jsx)(g(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})}},7351:function(g,b,a){"use strict";a.d(b,{Z:function(){return E}});var h=a(5893),i=a(7357),j=a(6886),k=a(3946),c=a(1664),l=a.n(c),m=a(9583),d=a(5606),n=a.n(d),o=a(7568),e=a(4051),p=a.n(e),q=a(3321),r=a(5861),s=a(9756),t=a(8885),u=a(7329),v=a(7294),w=a(2206),x=a(4726),y=a(7870),z=a(1014),A=function(a){var b=a.anchorEl,e=a.onClose,c=a.children,d=Boolean(b);return(0,h.jsx)(z.Z,{anchorEl:b,open:d,onClose:function(){e()},PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-0.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:c})},B=function(){var c,d=(0,x.T)(),a=(0,x.C)(w.Hz).account,b=(0,v.useState)(null),e=b[0],i=b[1];(0,v.useEffect)(function(){var a;(a=(0,o.Z)(p().mark(function a(){var b,c,e,f;return p().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(b=window.ethereum){a.next=5;break}return d((0,y.nX)(["First install Metamask","Why are you taking so long ?"])),d((0,w.hv)("")),a.abrupt("return");case 5:return a.next=7,b.request({method:"eth_accounts"});case 7:if(!((null!==(e=null==(c=a.sent)?void 0:c.length)&& void 0!==e?e:0)!==0)){a.next=17;break}return f=c[0],console.log("Found an authorized account:",f),d((0,w.hv)(f)),d((0,y.nX)(["Welcome back ".concat(f)])),a.next=16,j();case 16:return a.abrupt("return");case 17:case"end":return a.stop()}},a)})),function(){return a.apply(this,arguments)})()},[d]);var f,g=(c=(0,o.Z)(p().mark(function b(){var c,e;return p().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(b.prev=0,c=window.ethereum){b.next=5;break}return d((0,y.nX)(["First install Metamask","Why are you taking so long ?"])),b.abrupt("return");case 5:return b.next=7,c.request({method:"eth_requestAccounts"});case 7:return e=b.sent,console.log("Connected",e[0]),d((0,w.hv)(e[0])),d((0,y.nX)(["Welcome ".concat(a)])),b.next=13,j();case 13:b.next=19;break;case 15:b.prev=15,b.t0=b.catch(0),d((0,y.nX)(["Error !!!!, try again"])),console.log(b.t0);case 19:case"end":return b.stop()}},b,null,[[0,15]])})),function(){return c.apply(this,arguments)}),j=(f=(0,o.Z)(p().mark(function a(){var b,c,e;return p().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:try{(b=window.ethereum)?(e=(c=new u.Q(b)).getSigner(),console.log("Setup event listener!")):(d((0,y.nX)(["First install Metamask","Why are you taking so long ?"])),console.log("Ethereum object doesn't exist"))}catch(f){d((0,y.nX)(["Error !!!!, try again"])),console.log(f)}case 1:case"end":return a.stop()}},a)})),function(){return f.apply(this,arguments)});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(q.Z,{className:n().button,variant:"contained",size:"small",children:(0,h.jsx)(r.Z,{className:n().wallet,onClick:""!=a?function(a){i(a.currentTarget)}:g,children:""!=a?a:"Connect wallet"})}),(0,h.jsx)(A,{anchorEl:e,onClose:function(){i(null)},children:(0,h.jsxs)(s.Z,{onClick:function(){d((0,w.hv)(""))},children:[(0,h.jsx)(t.Z,{children:(0,h.jsx)(m.Wgy,{})}),"Logout"]})})]})},C=a(1163),f=a(5675),D=a.n(f),E=function(){var a=(0,C.useRouter)();return(0,h.jsx)(i.Z,{width:"100%",sx:{p:"2% 0"},children:(0,h.jsxs)(j.ZP,{container:!0,alignItems:"center",justifyItems:"center",children:[(0,h.jsxs)(j.ZP,{item:!0,xs:2,md:2,children:[(0,h.jsx)(k.Z,{sx:{background:"white",mr:2},children:(0,h.jsx)(m.fWC,{color:"#1DA1F2"})}),(0,h.jsx)(k.Z,{sx:{background:"white"},children:(0,h.jsx)(D(),{src:"./opensea-logo.png",alt:"opensea-logo",height:27,width:27})})]}),(0,h.jsx)(j.ZP,{item:!0,xs:0,md:4,sx:{display:{xs:"none",md:"block"}}}),(0,h.jsx)(j.ZP,{item:!0,xs:3,md:2,textAlign:"center",children:(0,h.jsx)(l(),{href:"/",children:(0,h.jsx)("p",{className:"".concat(n().link," ").concat(a.pathname.includes("history")?"":n().active),children:"Mint"})})}),(0,h.jsx)(j.ZP,{item:!0,xs:4,md:2,textAlign:"center",children:(0,h.jsx)(l(),{href:"/history",className:n().link,children:(0,h.jsx)("p",{className:"".concat(n().link," ").concat(a.pathname.includes("history")?n().active:""),children:"History"})})}),(0,h.jsx)(j.ZP,{item:!0,xs:3,md:2,textAlign:"center",children:(0,h.jsx)(B,{})})]})})}},5500:function(j,b,a){"use strict";a.r(b),a.d(b,{default:function(){return N}});var k=a(5893),c=a(9008),l=a.n(c),m=a(7568),d=a(4051),n=a.n(d),o=a(7294),p=a(4726),q=a(7870),e=a(8080),r=a.n(e),s=a(913),t=a(3841),u=a(2158),v=a(7058),w=a(9756),x=a(5861),y=function(){var c=(0,p.T)();(0,p.C)(q.cZ).texts;var a=(0,o.useState)(""),b=a[0],d=a[1];return(0,o.useEffect)(function(){var d,g,h,i,j,e,a=(d=(0,m.Z)(n().mark(function a(){return n().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:case"end":return a.stop()}},a)})),function(){return d.apply(this,arguments)});(0,m.Z)(n().mark(function a(){return n().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:case"end":return a.stop()}},a)})),(0,m.Z)(n().mark(function a(){return n().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:case"end":return a.stop()}},a)})),(0,m.Z)(n().mark(function a(){return n().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:case"end":return a.stop()}},a)})),(0,m.Z)(n().mark(function a(){return n().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:case"end":return a.stop()}},a)}));var f=(e=(0,m.Z)(n().mark(function a(){return n().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:c((0,q.nX)(["eita"]));case 1:case"end":return a.stop()}},a)})),function(){return e.apply(this,arguments)});""!==b&&("totalSupply"===b&&a(),"maxFreeMint"===b&&a(),"maxPerWallet"===b&&a(),"qtyMinted"===b&&a(),"freeMints"===b&&f())},[b]),(0,k.jsx)("div",{className:"".concat(r().ballon," ").concat(r().visible),children:(0,k.jsxs)(s.Z,{sx:{m:1,width:300},children:[(0,k.jsx)(t.Z,{id:"ask-to-the-kuma",children:"Question"}),(0,k.jsx)(u.Z,{labelId:"ask-to-the-kuma",id:"ask-to-the-kuma-select",value:b,onChange:function(a){d(a.target.value)},input:(0,k.jsx)(v.Z,{label:"Tag"}),children:[{label:"Total supply ?",value:"totalSupply"},{label:"Qty minted ?",value:"qtyMinted"},{label:"Price after a free ?",value:"price"},{label:"Max per wallet ?",value:"maxPerWallet"},{label:"Max free mint per wallet ?",value:"maxFreeMint"},{label:"Still have free kumas ?",value:"freeMints"},].map(function(a){return(0,k.jsx)(w.Z,{value:a.value,children:(0,k.jsx)(x.Z,{children:a.label})},a.value)})})]})})},z=a(6673),A=a(7351),f=a(7608),B=a.n(f),g=a(5459),C=a.n(g),D=function(){var a=(0,p.C)(q.cZ).texts,b=(0,o.useState)(!1),d=b[0],e=b[1],c=(0,o.useState)(0),f=c[0],g=c[1];return(0,o.useEffect)(function(){g(f)},[a]),(0,k.jsxs)("div",{className:B().container,children:[(0,k.jsx)("div",{className:"".concat(B().ballon," ").concat(d?B().visible:""),children:(0,k.jsx)(C(),{onInit:function(c){var b;e(!0),c.typeString(null!==(b=a[f])&& void 0!==b?b:"Error").pauseFor(2500).callFunction(function(){if(a.length<=f+1){g(0);return}g(f+1),e(!1)}).deleteAll().start()},options:{strings:a,autoStart:!0,loop:!0}})}),(0,k.jsxs)("div",{className:B().bear,children:[(0,k.jsxs)("div",{className:B().bear__ears,children:[(0,k.jsx)("div",{className:"".concat(B().bear__ears__left," ").concat(B().ear)}),(0,k.jsx)("div",{className:"".concat(B().bear__ears__right," ").concat(B().ear)})]}),(0,k.jsxs)("div",{className:B().bear__body,children:[(0,k.jsxs)("div",{className:B().bear__eyes,children:[(0,k.jsx)("div",{className:"".concat(B().bear__eyes__left," ").concat(B().eye)}),(0,k.jsx)("div",{className:"".concat(B().bear__eyes__right," ").concat(B().eye)})]}),(0,k.jsx)("div",{className:B().bear__nose,children:(0,k.jsx)("div",{className:B().bear__nose__inner})})]})]}),(0,k.jsx)("div",{className:B().shadow})]})},E=a(6886),F=a(3946),G=a(1903),H=a(9583),I=a(6319),h=a(2930),J=a.n(h),K=a(2206),L=function(){var d,h=(0,p.T)(),e=(0,p.C)(K.Hz).account,a=(0,o.useState)(1),f=a[0],i=a[1],b=(0,o.useState)(!1),c=b[0],j=b[1],g=(d=(0,m.Z)(n().mark(function a(){var b;return n().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:try{(b=window.ethereum)?(j(!0),h((0,q.nX)(["Adopting bears...","Waiting...","Generating kumas..."])),j(!1)):(console.log("Ethereum object doesn't exist"),h((0,q.nX)(["First install Metamask","Why are you taking so long ?"])))}catch(c){h((0,q.nX)(["Error !!!!, try again"])),console.log(c)}case 1:case"end":return a.stop()}},a)})),function(){return d.apply(this,arguments)});return(0,k.jsxs)("div",{className:J().mintSection,children:[(0,k.jsxs)(E.ZP,{className:J().qtyMint,container:!0,textAlign:"center",alignItems:"center",children:[(0,k.jsx)(E.ZP,{item:!0,xs:4,children:(0,k.jsx)(F.Z,{className:J().actionIcon,onClick:function(){var a=f-1;!(a<1)&&i(a)},children:(0,k.jsx)(H.iFH,{})})}),(0,k.jsx)(E.ZP,{item:!0,xs:4,children:(0,k.jsx)(G.Z,{className:J().input,value:f,disabled:!0})}),(0,k.jsx)(E.ZP,{item:!0,xs:4,children:(0,k.jsx)(F.Z,{className:J().actionIcon,onClick:function(){var a=f+1;!(a>10)&&i(a)},children:(0,k.jsx)(H.wEH,{})})})]}),(0,k.jsxs)(E.ZP,{container:!0,alignItems:"center",textAlign:"center",children:[(0,k.jsx)(E.ZP,{item:!0,xs:3}),(0,k.jsx)(E.ZP,{item:!0,xs:6,children:(0,k.jsx)(I.Z,{loading:c,className:J().mintButton,color:"primary",disabled:e.length<=0,variant:"contained",onClick:g,startIcon:(0,k.jsx)(H.IHQ,{}),children:c?"Adopting Kumas":"Adopt kuma"})}),(0,k.jsx)(E.ZP,{item:!0,xs:3})]})]})},i=a(214),M=a.n(i),N=function(){return(0,k.jsxs)("div",{className:M().container,children:[(0,k.jsxs)(l(),{children:[(0,k.jsx)("title",{children:"Kuma World"}),(0,k.jsx)("meta",{name:"description",content:"Mint page kuma world"}),(0,k.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,k.jsx)(A.Z,{}),(0,k.jsxs)("main",{className:M().main,children:[(0,k.jsx)(D,{}),(0,k.jsx)(L,{})]}),(0,k.jsx)(y,{}),(0,k.jsx)(z.Z,{})]})}},4726:function(d,b,a){"use strict";a.d(b,{C:function(){return f},T:function(){return e}});var c=a(9473),e=function(){return(0,c.I0)()},f=c.v9},8080:function(a){a.exports={container:"AskToTheKuma_container__cFAuw",ballon:"AskToTheKuma_ballon__qXfJ7",shrink:"AskToTheKuma_shrink__0jlNc",visible:"AskToTheKuma_visible__F946r","expand-bounce":"AskToTheKuma_expand-bounce__T7JY2"}},3952:function(a){a.exports={footer:"Footer_footer__Tl1eP"}},5606:function(a){a.exports={link:"Header_link__3RNlo",active:"Header_active__EB8lX",wallet:"Header_wallet__pYl3B",button:"Header_button__4rS9_"}},214:function(a){a.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},7608:function(a){a.exports={bear__nose:"Kuma_bear__nose__4kS6Z",moveNose:"Kuma_moveNose__SiXak",bear__nose__inner:"Kuma_bear__nose__inner__3qE_7",flip:"Kuma_flip__2sLT2","bear__nose--inner":"Kuma_bear__nose--inner__5iDFP",bear__body:"Kuma_bear__body__Yv_Xc",bear:"Kuma_bear__Jd2HQ",updown:"Kuma_updown__fzlGF",bear__ears:"Kuma_bear__ears___k4WD",ear:"Kuma_ear__wunil",bear__ears__left:"Kuma_bear__ears__left__wQ7rp",bear__ears__right:"Kuma_bear__ears__right__1LBFz",container:"Kuma_container__R9SJF",shadow:"Kuma_shadow__6Wlsa",ballon:"Kuma_ballon__Fk8Cj",shrink:"Kuma_shrink__f8SCC",visible:"Kuma_visible__sMfAv","expand-bounce":"Kuma_expand-bounce__SEORn",typedtext:"Kuma_typedtext__w6N9v",blink:"Kuma_blink__b9hac",ripple:"Kuma_ripple__OKQo_",bear__eyes:"Kuma_bear__eyes__zYrXU",eye:"Kuma_eye___Zc_y",bear__eyes__left:"Kuma_bear__eyes__left__v4swQ",bear__eyes__right:"Kuma_bear__eyes__right__4XxRk"}},2930:function(a){a.exports={mintSection:"MintSection_mintSection__xhcGZ",mintButton:"MintSection_mintButton__8sSsZ",actionIcon:"MintSection_actionIcon__Elbtt",input:"MintSection_input__qlFsL",qtyMint:"MintSection_qtyMint__bepEI"}},8677:function(){},2808:function(){}},function(a){a.O(0,[445,927,741,774,888,179],function(){var b;return a(a.s=8312)}),_N_E=a.O()}])