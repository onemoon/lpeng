function _defineProperty(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{"5+Pq":function(t,e,o){"use strict";o.r(e),o.d(e,"iosTransitionAnimation",(function(){return m})),o.d(e,"shadow",(function(){return l})),o("c1op"),o("AfW+"),o("aiEM");var a=o("+4pY"),n=(o("kBU6"),o("K6rM")),r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top";return"calc(".concat(t,"px + var(--ion-safe-area-").concat(e,"))")},c=function(t){return document.querySelector("".concat(t,".ion-cloned-element"))},l=function(t){return t.shadowRoot||t},s=function(t){return t.querySelector("ion-header:not(.header-collapse-condense-inactive) ion-title[size=large]")},i=function(t,e){var o=t.querySelectorAll("ion-buttons"),a=!0,n=!1,r=void 0;try{for(var c,l=o[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var s=c.value,i=s.closest("ion-header"),f=i&&!i.classList.contains("header-collapse-condense-inactive"),d=s.querySelector("ion-back-button"),m=s.classList.contains("buttons-collapse");if(null!==d&&(m&&f&&e||!m))return d}}catch(y){n=!0,r=y}finally{try{a||null==l.return||l.return()}finally{if(n)throw r}}return null},f=function(t,e,o,n){var l=n.getBoundingClientRect(),s=e?"calc(100% - ".concat(l.right+4,"px)"):"".concat(l.left-4,"px"),i=e?"7px":"-7px",f=e?"-4px":"4px",d=e?"-4px":"4px",m=e?"right":"left",y=e?"left":"right",u=[{offset:0,opacity:0,transform:"translate(".concat(i,", ").concat(r(8),") scale(2.1)")},{offset:1,opacity:1,transform:"translate(".concat(f,", ").concat(r(-40),") scale(1)")}],p=[{offset:0,opacity:1,transform:"translate(".concat(f,", ").concat(r(-40),") scale(1)")},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate(".concat(i,", ").concat(r(8),") scale(2.1)")}],b=o?p:u,S=[{offset:0,opacity:0,transform:"translate3d(".concat(d,", ").concat(r(-35),", 0) scale(0.6)")},{offset:1,opacity:1,transform:"translate3d(".concat(d,", ").concat(r(-40),", 0) scale(1)")}],v=[{offset:0,opacity:1,transform:"translate(".concat(d,", ").concat(r(-40),") scale(1)")},{offset:.2,opacity:0,transform:"translate(".concat(d,", ").concat(r(-35),") scale(0.6)")},{offset:1,opacity:0,transform:"translate(".concat(d,", ").concat(r(-35),") scale(0.6)")}],T=o?v:S,h=Object(a.a)(),g=Object(a.a)(),E=c("ion-back-button"),q=E.querySelector(".button-text"),A=E.querySelector("ion-icon");E.text=n.text,E.mode=n.mode,E.icon=n.icon,E.color=n.color,E.disabled=n.disabled,E.style.setProperty("display","block"),E.style.setProperty("position","fixed"),g.addElement(A),h.addElement(q),h.beforeStyles({"transform-origin":"".concat(m," center")}).beforeAddWrite((function(){n.style.setProperty("display","none"),E.style.setProperty(m,s)})).afterAddWrite((function(){n.style.setProperty("display",""),E.style.setProperty("display","none"),E.style.removeProperty(m)})).keyframes(b),g.beforeStyles({"transform-origin":"".concat(y," center")}).keyframes(T),t.addAnimation([h,g])},d=function(t,e,o,n){var l=n.getBoundingClientRect(),s=e?"calc(100% - ".concat(l.right,"px)"):"".concat(l.left,"px"),i=e?"-18px":"18px",f=e?"right":"left",d=[{offset:0,opacity:0,transform:"translate(".concat(i,", ").concat(r(0),") scale(0.49)")},{offset:.1,opacity:0},{offset:1,opacity:1,transform:"translate(0, ".concat(r(49),") scale(1)")}],m=[{offset:0,opacity:.99,transform:"translate(0, ".concat(r(49),") scale(1)")},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate(".concat(i,", ").concat(r(0),") scale(0.5)")}],y=o?d:m,u=c("ion-title"),p=Object(a.a)();u.innerText=n.innerText,u.size=n.size,u.color=n.color,p.addElement(u),p.beforeStyles(_defineProperty({"transform-origin":"".concat(f," center"),height:"46px",display:"",position:"relative"},f,s)).beforeAddWrite((function(){n.style.setProperty("display","none")})).afterAddWrite((function(){n.style.setProperty("display",""),u.style.setProperty("display","none")})).keyframes(y),t.addAnimation(p)},m=function(t,e){try{var o="opacity",r="rtl"===t.ownerDocument.dir,c=r?"-99.5%":"99.5%",m=r?"33%":"-33%",y=e.enteringEl,u=e.leavingEl,p="back"===e.direction,b=y.querySelector(":scope > ion-content"),S=y.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),v=y.querySelectorAll(":scope > ion-header > ion-toolbar"),T=Object(a.a)(),h=Object(a.a)();if(T.addElement(y).duration(e.duration||540).easing(e.easing||"cubic-bezier(0.32,0.72,0,1)").fill("both").beforeRemoveClass("ion-page-invisible"),u&&t){var g=Object(a.a)();g.addElement(t),T.addAnimation(g)}if(b||0!==v.length||0!==S.length?(h.addElement(b),h.addElement(S)):h.addElement(y.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),T.addAnimation(h),p?h.beforeClearStyles([o]).fromTo("transform","translateX(".concat(m,")"),"translateX(".concat("0%",")")).fromTo(o,.8,1):h.beforeClearStyles([o]).fromTo("transform","translateX(".concat(c,")"),"translateX(".concat("0%",")")),b){var E=l(b).querySelector(".transition-effect");if(E){var q=E.querySelector(".transition-cover"),A=E.querySelector(".transition-shadow"),X=Object(a.a)(),j=Object(a.a)(),O=Object(a.a)();X.addElement(E).beforeStyles({opacity:"1"}).afterStyles({opacity:""}),j.addElement(q).beforeClearStyles([o]).fromTo(o,0,.1),O.addElement(A).beforeClearStyles([o]).fromTo(o,.03,.7),X.addAnimation([j,O]),h.addAnimation([X])}}var x=y.querySelector("ion-header.header-collapse-condense"),w=function(t,e,o,a,n){var r=i(a,o),c=s(n),l=s(a),m=i(n,o),y=null!==r&&null!==c&&!o,u=null!==l&&null!==m&&o;return y?(d(t,e,o,c),f(t,e,o,r)):u&&(d(t,e,o,l),f(t,e,o,m)),{forward:y,backward:u}}(T,r,p,y,u),C=w.forward,k=w.backward;if(v.forEach((function(t){var e=Object(a.a)();e.addElement(t),T.addAnimation(e);var n=Object(a.a)();n.addElement(t.querySelector("ion-title"));var s,i=Object(a.a)(),f=Array.from(t.querySelectorAll("ion-buttons,[menuToggle]")),d=t.closest("ion-header"),y=d&&d.classList.contains("header-collapse-condense-inactive");s=f.filter(p?function(t){var e=t.classList.contains("buttons-collapse");return e&&!y||!e}:function(t){return!t.classList.contains("buttons-collapse")}),i.addElement(s);var u=Object(a.a)();u.addElement(t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));var b=Object(a.a)();b.addElement(l(t).querySelector(".toolbar-background"));var S=Object(a.a)(),v=t.querySelector("ion-back-button");if(v&&S.addElement(v),e.addAnimation([n,i,u,b,S]),i.fromTo(o,.01,1),u.fromTo(o,.01,1),p)y||n.fromTo("transform","translateX(".concat(m,")"),"translateX(".concat("0%",")")).fromTo(o,.01,1),u.fromTo("transform","translateX(".concat(m,")"),"translateX(".concat("0%",")")),S.fromTo(o,.01,1);else if(x||n.fromTo("transform","translateX(".concat(c,")"),"translateX(".concat("0%",")")).fromTo(o,.01,1),u.fromTo("transform","translateX(".concat(c,")"),"translateX(".concat("0%",")")),b.beforeClearStyles([o]).fromTo(o,.01,1),C||S.fromTo(o,.01,1),v&&!C){var h=Object(a.a)();h.addElement(l(v).querySelector(".button-text")).fromTo("transform",r?"translateX(-100px)":"translateX(100px)","translateX(0px)"),e.addAnimation(h)}})),u){var P=Object(a.a)(),L=u.querySelector(":scope > ion-content");if(P.addElement(L),P.addElement(u.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),T.addAnimation(P),p){P.beforeClearStyles([o]).fromTo("transform","translateX(".concat("0%",")"),r?"translateX(-100%)":"translateX(100%)");var W=Object(n.b)(u);T.afterAddWrite((function(){"normal"===T.getDirection()&&W.style.setProperty("display","none")}))}else P.fromTo("transform","translateX(".concat("0%",")"),"translateX(".concat(m,")")).fromTo(o,1,.8);if(L){var z=l(L).querySelector(".transition-effect");if(z){var R=z.querySelector(".transition-cover"),B=z.querySelector(".transition-shadow"),D=Object(a.a)(),J=Object(a.a)(),M=Object(a.a)();D.addElement(z).beforeStyles({opacity:"1"}).afterStyles({opacity:""}),J.addElement(R).beforeClearStyles([o]).fromTo(o,.1,0),M.addElement(B).beforeClearStyles([o]).fromTo(o,.7,.03),D.addAnimation([J,M]),P.addAnimation([D])}}u.querySelectorAll(":scope > ion-header > ion-toolbar").forEach((function(t){var e=Object(a.a)();e.addElement(t);var n=Object(a.a)();n.addElement(t.querySelector("ion-title"));var c=Object(a.a)(),s=t.querySelectorAll("ion-buttons,[menuToggle]"),i=t.closest("ion-header"),f=i&&i.classList.contains("header-collapse-condense-inactive"),d=Array.from(s).filter((function(t){var e=t.classList.contains("buttons-collapse");return e&&!f||!e}));c.addElement(d);var y=Object(a.a)(),u=t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");u.length>0&&y.addElement(u);var b=Object(a.a)();b.addElement(l(t).querySelector(".toolbar-background"));var S=Object(a.a)(),v=t.querySelector("ion-back-button");if(v&&S.addElement(v),e.addAnimation([n,c,y,S,b]),T.addAnimation(e),S.fromTo(o,.99,0),c.fromTo(o,.99,0),y.fromTo(o,.99,0),p){if(f||n.fromTo("transform","translateX(".concat("0%",")"),r?"translateX(-100%)":"translateX(100%)").fromTo(o,.99,0),y.fromTo("transform","translateX(".concat("0%",")"),r?"translateX(-100%)":"translateX(100%)"),b.beforeClearStyles([o]).fromTo(o,1,.01),v&&!k){var h=Object(a.a)();h.addElement(l(v).querySelector(".button-text")).fromTo("transform","translateX(".concat("0%",")"),"translateX(".concat((r?-124:124)+"px",")")),e.addAnimation(h)}}else f||n.fromTo("transform","translateX(".concat("0%",")"),"translateX(".concat(m,")")).fromTo(o,.99,0).afterClearStyles(["transform",o]),y.fromTo("transform","translateX(".concat("0%",")"),"translateX(".concat(m,")")).afterClearStyles(["transform",o]),S.afterClearStyles([o]),n.afterClearStyles([o]),c.afterClearStyles([o])}))}return T}catch(_){throw _}}}}]);