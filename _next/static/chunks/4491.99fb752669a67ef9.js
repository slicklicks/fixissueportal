"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4491,4277],{55054:function(t,e,n){var r=n(52903),i=n(2784),a=n(5632),o=n(11198),s=n(59182),l=n(83264),c=n(80578),p=n(33234),u=n(93983),d=n(76542),h=n(40867),m=n(75619),g=n(84277);const f=[0,.2],x=[0,1],v=[.95,1],Z=(0,o.Z)("div",{target:"ek9wfq50"})("padding:",(t=>{let{isHero:e}=t;return e?"0 20px var(--spacingXXL)":"0 20px"}),";",m.Nn.xl,"{padding-bottom:",(t=>{let{isHero:e}=t;return e&&"var(--spacingXL)"}),";}",(t=>{let{isSticky:e,isHero:n}=t;return e&&"\n    position: relative;\n    margin: ".concat(!n&&"calc(-50vh - var(--spacingXXL) * 2) auto 0",";\n    height: ").concat(!n&&"150vh",";\n  ")}),";"),w=(0,o.Z)("div",{target:"ek9wfq51"})("position:absolute;width:100%;left:0;",(t=>{let{forStickyHeader:e}=t;return e?"\n    top: 75%;\n    height: 50px;\n    transform: translateY(-50%);\n    ":"\n    top: 0;\n    height: 100%;\n    "})),y=(0,o.Z)("div",{target:"ek9wfq52"})("width:100%;margin-bottom:",(t=>{let{marginBottomCorrection:e}=t;return"".concat(e+96,"px")}),";",m.Nn.xl,"{margin-bottom:",(t=>{let{marginBottomCorrection:e}=t;return"".concat(e+64,"px")}),";}",m.Nn.m,"{margin-bottom:",(t=>{let{marginBottomCorrection:e}=t;return"".concat(e+80,"px")}),";}",(t=>{let{isSticky:e}=t;return e&&"\n    position: sticky;\n    top: 50vh;\n    transform: translateY(-50%);\n  "}),";> div{display:flex;flex-direction:column;align-items:center;}");e.Z=t=>{let{intro:e,isHero:n}=t;const{asPath:o}=(0,a.useRouter)(),[m,b]=(0,i.useState)(!0),N=(0,i.useRef)(!1),X=(0,i.useCallback)((()=>o.split("#")[1]===(0,h.mG)(e.title[0])),[o,e.title]);(0,i.useLayoutEffect)((()=>{b(!X())}),[X]);const k=(0,i.useRef)(null),H=(0,i.useRef)(null),I=(0,i.useRef)(null),{height:C}=(0,d.Z)({ref:I}),{scrollYProgress:S}=(0,s.v)({target:H,offset:["start start","end 50vh"]}),B=(0,l.Y)(k,{margin:m?"-20% 0px -20% 0px":"0px 0px 0px 0px"});(0,i.useEffect)((()=>{X()&&(B&&!N.current?N.current=!0:!B&&N.current&&b(!0))}),[X,B]);const L=(0,c.H)(m?S:(0,p.B)(100),f,x),z=(0,c.H)(m?S:(0,p.B)(100),f,v),E=m?-C/2:0;return(0,r.BX)(Z,{ref:H,isHero:n,isSticky:m,children:[(0,r.tZ)(w,{ref:k,forStickyHeader:m}),n?(0,r.tZ)(g.default,{...e,isInView:B,isHero:n}):(0,r.tZ)(y,{isSticky:m,ref:I,marginBottomCorrection:E,children:(0,r.tZ)(u.m.div,{style:{opacity:L,scale:z},children:(0,r.tZ)(g.default,{...e,isInView:B,isHero:n})})})]})}},84277:function(t,e,n){n.r(e);var r=n(52903),i=n(11198),a=n(75619),o=n(69656),s=n(78657),l=n(65591);const c=(0,i.Z)("div",{target:"ewpvobs0"})("display:flex;justify-content:center;align-items:center;flex-direction:column;"),p=(0,i.Z)(s.Z,{target:"ewpvobs1"})("color:var(--themeTitleColor);margin:0 auto;max-width:18ch;user-select:none;"),u=(0,i.Z)(l.QE,{target:"ewpvobs2"})("margin-top:16px;color:var(--themeIntroSubtitleColor);width:800px;",a.Nn.xl,"{width:515px;}",a.Nn.m,"{width:100%;max-width:80%;}"),d=(0,i.Z)(o.Z,{target:"ewpvobs3"})("margin-top:48px;",a.Nn.xl,"{margin-top:24px;}",a.Nn.m,"{margin-top:16px;}");e.default=t=>{let{title:e,isHero:n,buttonVariant:i="arrow",description:a,button:o,isInView:s,className:l}=t;return(0,r.BX)(c,{className:l,children:[(0,r.tZ)(p,{as:n?"h1":"h2",data:e,play:s}),a?(0,r.tZ)(u,{as:"p",size:"s",align:"center",children:a}):null,o?(0,r.tZ)(d,{...o.link,variant:i,children:o.label}):null]})}},78657:function(t,e,n){var r=n(52903),i=n(11198),a=n(35300),o=n(40867),s=n(75619),l=n(65591),c=n(1508);const p={block:{normal:t=>{let{value:e,children:n}=t;const{className:i,as:a}=e,s=(0,o.mG)(e);return(0,r.tZ)(l.Dx,{id:s,className:i,as:a,size:"l",align:"center",children:n})}},types:{lottie:t=>{let{value:e}=t;const{variant:n,play:i}=e;return(0,r.tZ)(u,{variant:n,play:i})}}},u=(0,i.Z)(c.Z,{target:"e18zalny0"})("width:108px;height:93px;transform:translateY(15px);",s.Nn.xl,"{width:80px;height:70px;}",s.Nn.m,"{width:45px;height:34px;transform:translateY(7px);}");e.Z=t=>{let{className:e,as:n="h2",data:i,play:o}=t;const s=i.map((t=>{const r=t.children.map((t=>({...t,play:o})));return{...t,className:e,as:n,children:r}}));return(0,r.tZ)(a.YI,{value:s,components:p})}},26356:function(t,e,n){n.r(e);var r=n(52903),i=n(2784),a=n(11198),o=n(75619),s=n(30906),l=n(55054),c=n(60490);const p=(0,a.Z)("section",{target:"e9sybiy0"})("position:relative;z-index:",(t=>{let{zIndex:e}=t;return e}),";display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;padding:",(t=>{let{isHero:e}=t;return e?"calc(var(--spacingXXXL) * 2) 0 var(--spacingXXL)":"var(--spacingXXL) 0"}),";",o.Nn.xl,"{padding-top:",(t=>{let{isHero:e}=t;return!e&&"var(--spacingL)"}),";}",o.Nn.m,"{padding-top:",(t=>{let{isHero:e}=t;return e&&"calc(var(--spacingXXXL) + var(--spacingXS))"}),";padding-bottom:var(--spacingL);}");e.default=t=>{let{intro:e,chip:n,cards:a,zIndex:o,isHero:u}=t;const d=(0,i.useRef)(null),[h,m]=(0,i.useState)(!1),[g,f]=(0,i.useState)(0),x=(0,i.useMemo)((()=>a.map(((t,e)=>(0,r.tZ)(s.Z,{flow:!0,index:e,isInView:h,cardCount:a.length,selectedIndex:g,card:t,hasFullBg:0===e},t._key)))),[a,h,g]);return(0,r.BX)(p,{ref:d,zIndex:o,isHero:u,children:[(0,r.tZ)(l.Z,{intro:e,isHero:u}),(0,r.tZ)(c.Z,{chip:n,barPosition:"top",onIndexChange:t=>{f(t)},onInView:()=>{m(!0)},id:"carousel-".concat(o),isFullWidthModule:!0,children:x})]})}},33868:function(t,e,n){n.d(e,{A:function(){return r}});const r=(t,e)=>{let n=!1;return Object.entries(t).forEach((t=>{let[r,i]=t;Array.isArray(i)?i.forEach((t=>{e[r]===t&&(n=!0)})):e[r]===i&&(n=!0)})),n}}}]);