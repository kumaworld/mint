(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[276],{5679:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/history",function(){return c(4060)}])},6673:function(e,b,a){"use strict";var f=a(5893),c=a(5675),g=a.n(c),d=a(3952),h=a.n(d);b.Z=function(){return(0,f.jsx)("footer",{className:h().footer,children:(0,f.jsxs)("span",{children:["Powered by"," ",(0,f.jsx)("span",{className:h().logo,children:(0,f.jsx)(g(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})}},7351:function(f,b,a){"use strict";a.d(b,{Z:function(){return B}});var g=a(5893),h=a(7357),i=a(6886),j=a(3946),c=a(1664),k=a.n(c),l=a(9583),d=a(5606),m=a.n(d),n=a(7568),e=a(4051),o=a.n(e),p=a(3321),q=a(5861),r=a(9756),s=a(8885),t=a(7294),u=a(2206),v=a(4726),w=a(7870),x=a(1014),y=function(a){var b=a.anchorEl,e=a.onClose,c=a.children,d=Boolean(b);return(0,g.jsx)(x.Z,{anchorEl:b,open:d,onClose:function(){e()},PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-0.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:c})},z=function(){var c,d=(0,v.T)(),a=(0,v.C)(u.Hz).account,b=(0,t.useState)(null),e=b[0],i=b[1],f=function(){i(null)};(0,t.useEffect)(function(){var a;(a=(0,n.Z)(o().mark(function a(){var b,c,e,f;return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(b=window.ethereum){a.next=5;break}return d((0,w.nX)(["First install Metamask","Why are you taking so long ?"])),d((0,u.hv)("")),a.abrupt("return");case 5:return a.next=7,b.request({method:"eth_accounts"});case 7:if(!((null!==(e=null==(c=a.sent)?void 0:c.length)&& void 0!==e?e:0)!==0)){a.next=15;break}return f=c[0],console.log("Found an authorized account:",f),d((0,u.hv)(f)),d((0,w.nX)(["Welcome back kuma holder"])),a.abrupt("return");case 15:case"end":return a.stop()}},a)})),function(){return a.apply(this,arguments)})()},[d]);var j,h=(c=(0,n.Z)(o().mark(function a(){var b,c;return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,b=window.ethereum){a.next=5;break}return d((0,w.nX)(["First install Metamask","Why are you taking so long ?"])),a.abrupt("return");case 5:return a.next=7,b.request({method:"eth_requestAccounts"});case 7:c=a.sent,console.log("Connected",c[0]),d((0,u.hv)(c[0])),d((0,w.nX)(["Welcome kuma holder"])),a.next=17;break;case 13:a.prev=13,a.t0=a.catch(0),d((0,w.nX)(["Error !!!!, try again"])),console.log(a.t0);case 17:case"end":return a.stop()}},a,null,[[0,13]])})),function(){return c.apply(this,arguments)});return(0,n.Z)(o().mark(function a(){var b;return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:try{(b=window.ethereum)||(d((0,w.nX)(["First install Metamask","Why are you taking so long ?"])),console.log("Ethereum object doesn't exist"))}catch(c){d((0,w.nX)(["Error !!!!, try again"])),console.log(c)}case 1:case"end":return a.stop()}},a)})),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p.Z,{className:m().button,variant:"contained",size:"small",sx:{fontWeight:"bold",borderRadius:"100px",p:"8px",width:"100%"},children:(0,g.jsx)(q.Z,{className:m().wallet,onClick:""!=a?function(a){i(a.currentTarget)}:h,children:""!=a?a:"Connect wallet"})}),(0,g.jsx)(y,{anchorEl:e,onClose:f,children:(0,g.jsxs)(r.Z,{onClick:function(){d((0,u.hv)("")),f()},children:[(0,g.jsx)(s.Z,{children:(0,g.jsx)(l.Wgy,{})}),"Logout"]})})]})},A=a(1163),B=function(){var a=(0,A.useRouter)();return(0,g.jsx)(h.Z,{width:"100%",sx:{p:"2% 0"},children:(0,g.jsxs)(i.ZP,{container:!0,alignItems:"center",justifyItems:"center",children:[(0,g.jsxs)(i.ZP,{item:!0,xs:2,md:2,children:[(0,g.jsx)(j.Z,{sx:{background:"white",mr:2},onClick:function(){window.open("https://twitter.com/TheKumaWorld","_blank")},children:(0,g.jsx)(l.fWC,{color:"#1DA1F2"})}),(0,g.jsx)(j.Z,{sx:{background:"white"},children:(0,g.jsx)("img",{src:"https://storage.googleapis.com/opensea-static/Logomark/Logomark-White.png",alt:"opensea-logo",height:27,width:27})})]}),(0,g.jsx)(i.ZP,{item:!0,xs:0,md:4,sx:{display:{xs:"none",md:"block"}}}),(0,g.jsx)(i.ZP,{item:!0,xs:3,md:2,textAlign:"center",className:"".concat(m().tab," ").concat(a.pathname.includes("history")?"":m().active),children:(0,g.jsx)(k(),{href:"/",children:(0,g.jsx)("p",{className:m().link,children:"Mint"})})}),(0,g.jsx)(i.ZP,{item:!0,xs:4,md:2,textAlign:"center",className:"".concat(m().tab," ").concat(a.pathname.includes("history")?m().active:""),children:(0,g.jsx)(k(),{href:"/history",className:m().link,children:(0,g.jsx)("p",{className:m().link,children:"History"})})}),(0,g.jsx)(i.ZP,{item:!0,xs:3,md:2,textAlign:"center",children:(0,g.jsx)(z,{})})]})})}},4060:function(e,b,a){"use strict";a.r(b);var f=a(5893),c=a(9008),g=a.n(c),h=a(6673),i=a(7351),d=a(7782),j=a.n(d);b.default=function(){return(0,f.jsxs)("div",{className:j().container,suppressHydrationWarning:!0,children:[(0,f.jsx)("style",{children:'\n        body {\n          font-family: "Droid Sans", arial, verdana, sans-serif;\n          font-weight: 700;\n          color: #ff6;\n          background: #000;\n        }\n      '}),(0,f.jsxs)(g(),{children:[(0,f.jsx)("title",{children:"History"}),(0,f.jsx)("meta",{name:"description",content:"History kuma world"}),(0,f.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,f.jsx)(i.Z,{}),(0,f.jsxs)("main",{className:j().main,children:[(0,f.jsx)("div",{className:j().playerContainer,children:(0,f.jsx)("div",{children:(0,f.jsxs)("object",{width:"420",height:"315",children:[(0,f.jsx)("param",{name:"movie",value:"https://www.youtube.com/v/EjMNNpIksaI?version=3&hl=en_US&autoplay=1&autohide=2"}),(0,f.jsx)("param",{name:"allowFullScreen",value:"true"}),(0,f.jsx)("param",{name:"allowscriptaccess",value:"always"}),(0,f.jsx)("embed",{src:"https://www.youtube.com/v/EjMNNpIksaI?version=3&hl=en_US&autoplay=1&autohide=2",type:"application/x-shockwave-flash",width:"420",height:"315"})]})})}),(0,f.jsx)("p",{id:j().start,children:"A short time ago in a block chain very, very close\u2026"}),(0,f.jsxs)("h1",{className:j().h1,children:["KUMA WARS",(0,f.jsx)("sub",{children:"Free mint"})]}),(0,f.jsx)("div",{id:j().titles,children:(0,f.jsxs)("div",{id:j().titlecontent,children:[(0,f.jsxs)("p",{className:j().center,children:["EPISODE IV",(0,f.jsx)("br",{}),"A NEW HOPE FOR KUMAS"]}),(0,f.jsx)("p",{children:"It is a period of Kuma war."}),(0,f.jsx)("p",{children:"Kuma world its a interactive NFT collection. Kumas goal is to bring a new experience to the nft space."}),(0,f.jsx)("p",{children:"In total there are 5555 different types of kumas with 17 different interactions."}),(0,f.jsx)("p",{children:"Kunas are not just JPEGS or GIFS, kumas are pure html/css/js, practically nothing is an image."}),(0,f.jsx)("p",{children:"The idea to create the kumas started when the founder of kuma was studying more about CSS animations, and about NFTs collections, it was then that he realized that a collection could be created that was not just a static thing, it was possible to create NFTs that react the user interaction"}),(0,f.jsx)("p",{children:"How does it work ? it is quite simple to be honest, opensea provides an animation_url property, where it is possible for the developer to put a link to any web file, eg html, to be rotated on the NFT item page, and this link will be opened in a iframe, which is an html element that allows you to embed another web page (html) in the current page"}),(0,f.jsx)("p",{children:"The kumas will use the money from royalties and sales to create new creative forms of NFTs collections, we have more ideas for new interactive collections."}),(0,f.jsx)("p",{className:j().center,children:"Buy Kuma, Luke!"}),(0,f.jsx)("p",{children:"Sorry. Could not resist it."}),(0,f.jsx)("p",{children:"You are welcome to mint one free. but run because it is a limited number for free"})]})})]}),(0,f.jsx)(h.Z,{})]})}},4726:function(d,b,a){"use strict";a.d(b,{C:function(){return f},T:function(){return e}});var c=a(9473),e=function(){return(0,c.I0)()},f=c.v9},3952:function(a){a.exports={footer:"Footer_footer__Tl1eP"}},5606:function(a){a.exports={link:"Header_link__3RNlo",active:"Header_active__EB8lX",tab:"Header_tab__MR_kd",wallet:"Header_wallet__pYl3B",button:"Header_button__4rS9_"}},7782:function(a){a.exports={playerContainer:"History_playerContainer__BFcgO",container:"History_container__wtKLt",main:"History_main__Qh0mc",visibilityHidden:"History_visibilityHidden__9_EW8",start:"History_start__ocxdY",intro:"History_intro__nl0E8",h1:"History_h1__u_Xyj",logo:"History_logo__Ev17u",titles:"History_titles__WOtWE",center:"History_center__Cnit4",titlecontent:"History_titlecontent__lrCTr",scroll:"History_scroll__2W7Ak"}}},function(a){a.O(0,[445,656,774,888,179],function(){var b;return a(a.s=5679)}),_N_E=a.O()}])