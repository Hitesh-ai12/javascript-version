import{i as Pt,r as E,u as W,a as pt,t as et,c as It,w as U,s as Nt,b as Vt,d as mt,e as K,o as x,f as P,g as d,h as i,V as R,j as L,k as j,l as nt,n as F,m as M,p as lt,F as Bt,q as gt,I as Dt,v as bt,x as $t,y as Ot,z as yt,A as Kt,B as _t,C as jt,D as Ft,E as Ut,G as qt,H as zt,J as wt,K as Gt,L as Jt,M as Qt,N as rt,O as I,P as Lt,Q as Zt,R as te,_ as Tt,S as Yt,T as St,U as Rt,W as Wt,X as H}from"./main-D5DKZ7Ln.js";import{V as ee}from"./VTooltip-BhUC2EJp.js";import{a as ot}from"./ssrBoot-DUbJ7bHf.js";import{V as at}from"./VAvatar-DhYIy1TD.js";import{m as ne,M as le,V as st}from"./VImg-B1TjRv83.js";import{V as re,a as oe,b as V,c as B,d as ae}from"./VMenu-mn9bjOKf.js";import{V as it}from"./VDivider-CBnqrCbA.js";import{l as Xt}from"./logo-DbYPuVAr.js";import{V as se}from"./VSpacer-a3lALhgh.js";import"./VOverlay-wCc8lyzv.js";import"./forwardRefs-DWGaNmQL.js";import"./scopeId-2Cq9sFqq.js";import"./index-DiEAOYo7.js";/* empty css              */function Z(t){return typeof t=="function"?t():W(t)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ie=()=>{};function ce(t,e){function l(...r){return new Promise((a,s)=>{Promise.resolve(t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})).then(a).catch(s)})}return l}const xt=t=>t();function ue(t=xt){const e=E(!0);function l(){e.value=!1}function r(){e.value=!0}const a=(...s)=>{e.value&&t(...s)};return{isActive:pt(e),pause:l,resume:r,eventFilter:a}}function he(...t){if(t.length!==1)return et(...t);const e=t[0];return typeof e=="function"?pt(It(()=>({get:e,set:ie}))):E(e)}function de(t,e,l={}){const{eventFilter:r=xt,...a}=l;return U(t,ce(r,e),a)}function ct(t,e,l={}){const{eventFilter:r,...a}=l,{eventFilter:s,pause:o,resume:c,isActive:n}=ue(r);return{stop:de(t,e,{...a,eventFilter:s}),pause:o,resume:c,isActive:n}}function fe(t,e,...[l]){const{flush:r="sync",deep:a=!1,immediate:s=!0,direction:o="both",transform:c={}}=l||{},n=[],h="ltr"in c&&c.ltr||(v=>v),u="rtl"in c&&c.rtl||(v=>v);return(o==="both"||o==="ltr")&&n.push(ct(t,v=>{n.forEach(g=>g.pause()),e.value=h(v),n.forEach(g=>g.resume())},{flush:r,deep:a,immediate:s})),(o==="both"||o==="rtl")&&n.push(ct(e,v=>{n.forEach(g=>g.pause()),t.value=u(v),n.forEach(g=>g.resume())},{flush:r,deep:a,immediate:s})),()=>{n.forEach(v=>v.stop())}}function ve(t=!1,e={}){const{truthyValue:l=!0,falsyValue:r=!1}=e,a=Pt(t),s=E(t);function o(c){if(arguments.length)return s.value=c,s.value;{const n=Z(l);return s.value=s.value===n?Z(r):n,s.value}}return a?o:[s,o]}function pe(t,e){const l=Nt(h()),r=he(t),a=Vt({get(){var u;const m=r.value;let v=e!=null&&e.getIndexOf?e.getIndexOf(l.value,m):m.indexOf(l.value);return v<0&&(v=(u=e==null?void 0:e.fallbackIndex)!=null?u:0),v},set(u){s(u)}});function s(u){const m=r.value,v=m.length,g=(u%v+v)%v,f=m[g];return l.value=f,f}function o(u=1){return s(a.value+u)}function c(u=1){return o(u)}function n(u=1){return o(-u)}function h(){var u,m;return(m=Z((u=e==null?void 0:e.initialValue)!=null?u:Z(t)[0]))!=null?m:void 0}return U(r,()=>s(a.value)),{state:l,index:a,next:c,prev:n,go:s}}const me={class:"text-capitalize"},ge={__name:"ThemeSwitcher",props:{themes:{type:Array,required:!0}},setup(t){const e=t,{name:l,global:r}=mt(),{state:a,next:s,index:o}=pe(e.themes.map(n=>n.name),{initialValue:l}),c=()=>{r.name.value=s()};return U(()=>r.name.value,n=>{a.value=n}),(n,h)=>{const u=K("IconBtn");return x(),P(u,{onClick:c},{default:d(()=>[i(R,{icon:e.themes[W(o)].icon},null,8,["icon"]),i(ee,{activator:"parent","open-delay":"1000","scroll-strategy":"close"},{default:d(()=>[L("span",me,j(W(a)),1)]),_:1})]),_:1})}}},be={__name:"NavbarThemeSwitcher",setup(t){const e=[{name:"light",icon:"ri-sun-line"},{name:"dark",icon:"ri-moon-clear-line"}];return(l,r)=>{const a=ge;return x(),P(a,{themes:e})}}},ye={class:"nav-item-title"},_e={class:"nav-group-children-wrapper"},we={class:"nav-group-children"},G={__name:"VerticalNavGroup",props:{item:{type:Object,required:!0}},setup(t){const e=E(!1);return(l,r)=>(x(),nt("li",{class:F(["nav-group",W(e)&&"open"])},[L("div",{class:"nav-group-label",onClick:r[0]||(r[0]=a=>e.value=!W(e))},[i(R,{icon:t.item.icon||"ri-checkbox-blank-circle-line",class:"nav-item-icon"},null,8,["icon"]),L("span",ye,j(t.item.title),1),L("span",{class:F(["nav-item-badge",t.item.badgeClass])},j(t.item.badgeContent),3),i(R,{icon:"ri-arrow-right-s-line",class:"nav-group-arrow"})]),L("div",_e,[L("ul",we,[M(l.$slots,"default")])])],2))}},Le={class:"nav-item-title"},Y={__name:"VerticalNavLink",props:{item:{type:null,required:!0}},setup(t){return(e,l)=>(x(),nt("li",{class:F(["nav-link",{disabled:t.item.disable}])},[(x(),P(lt(t.item.to?"RouterLink":"a"),{to:t.item.to,href:t.item.href,target:t.item.target},{default:d(()=>[i(R,{icon:t.item.icon||"ri-checkbox-blank-circle-line",class:"nav-item-icon"},null,8,["icon"]),L("span",Le,j(t.item.title),1),L("span",{class:F(["nav-item-badge",t.item.badgeClass])},j(t.item.badgeContent),3)]),_:1},8,["to","href","target"]))],2))}},Te={__name:"NavItems",setup(t){return(e,l)=>(x(),nt(Bt,null,[i(G,{item:{title:"Dashboards",icon:"ri-home-smile-line"}},{default:d(()=>[i(Y,{item:{title:"Analytics",to:"/dashboard"}}),i(Y,{item:{title:"CRM",to:"/api/leads"}})]),_:1}),i(Y,{item:{title:"Action Plan",icon:"ri-git-commit-line",href:""}}),i(Y,{item:{title:"Settings",icon:"ri-user-settings-line",to:"/account-settings"}}),i(G,{item:{title:"Listings",icon:"ri-file-copy-line"}},{default:d(()=>[i(Y,{item:{title:"Property Listings",href:"https://demos.themeselection.com/materio-vuetify-vuejs-laravel-admin-template/demo-1/front-pages/landing-page",target:"_blank"}}),i(Y,{item:{title:"Pre-Construction Listings",href:"https://demos.themeselection.com/materio-vuetify-vuejs-laravel-admin-template/demo-1/front-pages/pricing",target:"_blank"}})]),_:1}),i(Y,{item:{title:"My Team",icon:"ri-checkbox-multiple-line",href:""}}),i(G,{item:{title:"Reports",icon:"ri-home-smile-line"}},{default:d(()=>[i(Y,{item:{title:"Email Reports",to:"/dashboard"}}),i(Y,{item:{title:"SMS Reports",to:"/dashboard"}})]),_:1}),i(Y,{item:{title:"Integration",icon:"ri-drag-drop-line",to:"/integration"}}),i(Y,{item:{title:"Manage Website",icon:"ri-remixicon-line",to:"/icons"}}),i(G,{item:{title:"Settings",icon:"ri-home-smile-line"}},{default:d(()=>[i(Y,{item:{title:"Tags | Stage | Source",to:"/settings/tags-stages-sources"}}),i(Y,{item:{title:"Signature",to:"/api/leads"}}),i(Y,{item:{title:"SMS Templates",to:"/api/leads"}}),i(Y,{item:{title:"Email Templates",to:"/api/leads"}}),i(Y,{item:{title:"Birthday Wishes",to:"/api/leads"}}),i(Y,{item:{title:"Listing Settings",to:"/api/leads"}})]),_:1}),i(Y,{item:{title:"Tables",icon:"ri-table-alt-line",to:"/tables"}})],64))}},Ye=gt({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:Dt,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...bt(),...$t({location:"top end"}),...Ot(),...yt(),...Kt(),...ne({transition:"scale-rotate-transition"})},"VBadge"),ut=_t()({name:"VBadge",inheritAttrs:!1,props:Ye(),setup(t,e){const{backgroundColorClasses:l,backgroundColorStyles:r}=jt(et(t,"color")),{roundedClasses:a}=Ft(t),{t:s}=Ut(),{textColorClasses:o,textColorStyles:c}=qt(et(t,"textColor")),{themeClasses:n}=mt(),{locationStyles:h}=zt(t,!0,u=>(t.floating?t.dot?2:4:t.dot?8:12)+(["top","bottom"].includes(u)?+(t.offsetY??0):["left","right"].includes(u)?+(t.offsetX??0):0));return wt(()=>{const u=Number(t.content),m=!t.max||isNaN(u)?t.content:u<=+t.max?u:`${t.max}+`,[v,g]=Gt(e.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return i(t.tag,rt({class:["v-badge",{"v-badge--bordered":t.bordered,"v-badge--dot":t.dot,"v-badge--floating":t.floating,"v-badge--inline":t.inline},t.class]},g,{style:t.style}),{default:()=>{var f,p;return[i("div",{class:"v-badge__wrapper"},[(p=(f=e.slots).default)==null?void 0:p.call(f),i(le,{transition:t.transition},{default:()=>{var T,b;return[Jt(i("span",rt({class:["v-badge__badge",n.value,l.value,a.value,o.value],style:[r.value,c.value,t.inline?{}:h.value],"aria-atomic":"true","aria-label":s(t.label,u),"aria-live":"polite",role:"status"},v),[t.dot?void 0:e.slots.badge?(b=(T=e.slots).badge)==null?void 0:b.call(T):t.icon?i(R,{icon:t.icon},null):m]),[[Qt,t.modelValue]])]}})])]}})}),{}}}),Se=gt({start:Boolean,end:Boolean,...bt(),...yt()},"VListItemAction"),Re=_t()({name:"VListItemAction",props:Se(),setup(t,e){let{slots:l}=e;return wt(()=>i(t.tag,{class:["v-list-item-action",{"v-list-item-action--start":t.start,"v-list-item-action--end":t.end},t.class],style:t.style},l)),{}}}),We={__name:"UserProfile",setup(t){return(e,l)=>(x(),P(ut,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success",bordered:""},{default:d(()=>[i(at,{class:"cursor-pointer",color:"primary",variant:"tonal"},{default:d(()=>[i(st,{src:W(ot)},null,8,["src"]),i(re,{activator:"parent",width:"230",location:"bottom end",offset:"14px"},{default:d(()=>[i(oe,null,{default:d(()=>[i(V,null,{prepend:d(()=>[i(Re,{start:""},{default:d(()=>[i(ut,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success"},{default:d(()=>[i(at,{color:"primary",variant:"tonal"},{default:d(()=>[i(st,{src:W(ot)},null,8,["src"])]),_:1})]),_:1})]),_:1})]),default:d(()=>[i(B,{class:"font-weight-semibold"},{default:d(()=>[I(" John Doe ")]),_:1}),i(ae,null,{default:d(()=>[I("Admin")]),_:1})]),_:1}),i(it,{class:"my-2"}),i(V,{link:""},{prepend:d(()=>[i(R,{class:"me-2",icon:"ri-user-line",size:"22"})]),default:d(()=>[i(B,null,{default:d(()=>[I("Profile")]),_:1})]),_:1}),i(V,{link:""},{prepend:d(()=>[i(R,{class:"me-2",icon:"ri-settings-4-line",size:"22"})]),default:d(()=>[i(B,null,{default:d(()=>[I("Settings")]),_:1})]),_:1}),i(V,{link:""},{prepend:d(()=>[i(R,{class:"me-2",icon:"ri-money-dollar-circle-line",size:"22"})]),default:d(()=>[i(B,null,{default:d(()=>[I("Pricing")]),_:1})]),_:1}),i(V,{link:""},{prepend:d(()=>[i(R,{class:"me-2",icon:"ri-question-line",size:"22"})]),default:d(()=>[i(B,null,{default:d(()=>[I("FAQ")]),_:1})]),_:1}),i(it,{class:"my-2"}),i(V,{to:"/login"},{prepend:d(()=>[i(R,{class:"me-2",icon:"ri-logout-box-r-line",size:"22"})]),default:d(()=>[i(B,null,{default:d(()=>[I("Logout")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */function k(t){return getComputedStyle(t)}function S(t,e){for(var l in e){var r=e[l];typeof r=="number"&&(r=r+"px"),t.style[l]=r}return t}function J(t){var e=document.createElement("div");return e.className=t,e}var ht=typeof Element<"u"&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function C(t,e){if(!ht)throw new Error("No element matching method supported");return ht.call(t,e)}function $(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function dt(t,e){return Array.prototype.filter.call(t.children,function(l){return C(l,e)})}var w={main:"ps",rtl:"ps__rtl",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},Ht={x:null,y:null};function kt(t,e){var l=t.element.classList,r=w.state.scrolling(e);l.contains(r)?clearTimeout(Ht[e]):l.add(r)}function Et(t,e){Ht[e]=setTimeout(function(){return t.isAlive&&t.element.classList.remove(w.state.scrolling(e))},t.settings.scrollingThreshold)}function Xe(t,e){kt(t,e),Et(t,e)}var q=function(e){this.element=e,this.handlers={}},At={isEmpty:{configurable:!0}};q.prototype.bind=function(e,l){typeof this.handlers[e]>"u"&&(this.handlers[e]=[]),this.handlers[e].push(l),this.element.addEventListener(e,l,!1)};q.prototype.unbind=function(e,l){var r=this;this.handlers[e]=this.handlers[e].filter(function(a){return l&&a!==l?!0:(r.element.removeEventListener(e,a,!1),!1)})};q.prototype.unbindAll=function(){for(var e in this.handlers)this.unbind(e)};At.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every(function(e){return t.handlers[e].length===0})};Object.defineProperties(q.prototype,At);var O=function(){this.eventElements=[]};O.prototype.eventElement=function(e){var l=this.eventElements.filter(function(r){return r.element===e})[0];return l||(l=new q(e),this.eventElements.push(l)),l};O.prototype.bind=function(e,l,r){this.eventElement(e).bind(l,r)};O.prototype.unbind=function(e,l,r){var a=this.eventElement(e);a.unbind(l,r),a.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(a),1)};O.prototype.unbindAll=function(){this.eventElements.forEach(function(e){return e.unbindAll()}),this.eventElements=[]};O.prototype.once=function(e,l,r){var a=this.eventElement(e),s=function(o){a.unbind(l,s),r(o)};a.bind(l,s)};function Q(t){if(typeof window.CustomEvent=="function")return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function tt(t,e,l,r,a){r===void 0&&(r=!0),a===void 0&&(a=!1);var s;if(e==="top")s=["contentHeight","containerHeight","scrollTop","y","up","down"];else if(e==="left")s=["contentWidth","containerWidth","scrollLeft","x","left","right"];else throw new Error("A proper axis should be provided");xe(t,l,s,r,a)}function xe(t,e,l,r,a){var s=l[0],o=l[1],c=l[2],n=l[3],h=l[4],u=l[5];r===void 0&&(r=!0),a===void 0&&(a=!1);var m=t.element;t.reach[n]=null,m[c]<1&&(t.reach[n]="start"),m[c]>t[s]-t[o]-1&&(t.reach[n]="end"),e&&(m.dispatchEvent(Q("ps-scroll-"+n)),e<0?m.dispatchEvent(Q("ps-scroll-"+h)):e>0&&m.dispatchEvent(Q("ps-scroll-"+u)),r&&Xe(t,n)),t.reach[n]&&(e||a)&&m.dispatchEvent(Q("ps-"+n+"-reach-"+t.reach[n]))}function _(t){return parseInt(t,10)||0}function He(t){return C(t,"input,[contenteditable]")||C(t,"select,[contenteditable]")||C(t,"textarea,[contenteditable]")||C(t,"button,[contenteditable]")}function ke(t){var e=k(t);return _(e.width)+_(e.paddingLeft)+_(e.paddingRight)+_(e.borderLeftWidth)+_(e.borderRightWidth)}var D={isWebKit:typeof document<"u"&&"WebkitAppearance"in document.documentElement.style,supportsTouch:typeof window<"u"&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:typeof navigator<"u"&&navigator.msMaxTouchPoints,isChrome:typeof navigator<"u"&&/Chrome/i.test(navigator&&navigator.userAgent)};function A(t){var e=t.element,l=Math.floor(e.scrollTop),r=e.getBoundingClientRect();t.containerWidth=Math.round(r.width),t.containerHeight=Math.round(r.height),t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(dt(e,w.element.rail("x")).forEach(function(a){return $(a)}),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(dt(e,w.element.rail("y")).forEach(function(a){return $(a)}),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=ft(t,_(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=_((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=ft(t,_(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=_(l*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),Ee(e,t),t.scrollbarXActive?e.classList.add(w.state.active("x")):(e.classList.remove(w.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=t.isRtl===!0?t.contentWidth:0),t.scrollbarYActive?e.classList.add(w.state.active("y")):(e.classList.remove(w.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)}function ft(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function Ee(t,e){var l={width:e.railXWidth},r=Math.floor(t.scrollTop);e.isRtl?l.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:l.left=t.scrollLeft,e.isScrollbarXUsingBottom?l.bottom=e.scrollbarXBottom-r:l.top=e.scrollbarXTop+r,S(e.scrollbarXRail,l);var a={top:r,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?a.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth-9:a.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?a.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth*2-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:a.left=e.scrollbarYLeft+t.scrollLeft,S(e.scrollbarYRail,a),S(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),S(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}function Ae(t){t.element,t.event.bind(t.scrollbarY,"mousedown",function(e){return e.stopPropagation()}),t.event.bind(t.scrollbarYRail,"mousedown",function(e){var l=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top,r=l>t.scrollbarYTop?1:-1;t.element.scrollTop+=r*t.containerHeight,A(t),e.stopPropagation()}),t.event.bind(t.scrollbarX,"mousedown",function(e){return e.stopPropagation()}),t.event.bind(t.scrollbarXRail,"mousedown",function(e){var l=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left,r=l>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=r*t.containerWidth,A(t),e.stopPropagation()})}function Me(t){vt(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),vt(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])}function vt(t,e){var l=e[0],r=e[1],a=e[2],s=e[3],o=e[4],c=e[5],n=e[6],h=e[7],u=e[8],m=t.element,v=null,g=null,f=null;function p(y){y.touches&&y.touches[0]&&(y[a]=y.touches[0].pageY),m[n]=v+f*(y[a]-g),kt(t,h),A(t),y.stopPropagation(),y.type.startsWith("touch")&&y.changedTouches.length>1&&y.preventDefault()}function T(){Et(t,h),t[u].classList.remove(w.state.clicking),t.event.unbind(t.ownerDocument,"mousemove",p)}function b(y,X){v=m[n],X&&y.touches&&(y[a]=y.touches[0].pageY),g=y[a],f=(t[r]-t[l])/(t[s]-t[c]),X?t.event.bind(t.ownerDocument,"touchmove",p):(t.event.bind(t.ownerDocument,"mousemove",p),t.event.once(t.ownerDocument,"mouseup",T),y.preventDefault()),t[u].classList.add(w.state.clicking),y.stopPropagation()}t.event.bind(t[o],"mousedown",function(y){b(y)}),t.event.bind(t[o],"touchstart",function(y){b(y,!0)})}function Ce(t){var e=t.element,l=function(){return C(e,":hover")},r=function(){return C(t.scrollbarX,":focus")||C(t.scrollbarY,":focus")};function a(s,o){var c=Math.floor(e.scrollTop);if(s===0){if(!t.scrollbarYActive)return!1;if(c===0&&o>0||c>=t.contentHeight-t.containerHeight&&o<0)return!t.settings.wheelPropagation}var n=e.scrollLeft;if(o===0){if(!t.scrollbarXActive)return!1;if(n===0&&s<0||n>=t.contentWidth-t.containerWidth&&s>0)return!t.settings.wheelPropagation}return!0}t.event.bind(t.ownerDocument,"keydown",function(s){if(!(s.isDefaultPrevented&&s.isDefaultPrevented()||s.defaultPrevented)&&!(!l()&&!r())){var o=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(o){if(o.tagName==="IFRAME")o=o.contentDocument.activeElement;else for(;o.shadowRoot;)o=o.shadowRoot.activeElement;if(He(o))return}var c=0,n=0;switch(s.which){case 37:s.metaKey?c=-t.contentWidth:s.altKey?c=-t.containerWidth:c=-30;break;case 38:s.metaKey?n=t.contentHeight:s.altKey?n=t.containerHeight:n=30;break;case 39:s.metaKey?c=t.contentWidth:s.altKey?c=t.containerWidth:c=30;break;case 40:s.metaKey?n=-t.contentHeight:s.altKey?n=-t.containerHeight:n=-30;break;case 32:s.shiftKey?n=t.containerHeight:n=-t.containerHeight;break;case 33:n=t.containerHeight;break;case 34:n=-t.containerHeight;break;case 36:n=t.contentHeight;break;case 35:n=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&c!==0||t.settings.suppressScrollY&&n!==0||(e.scrollTop-=n,e.scrollLeft+=c,A(t),a(c,n)&&s.preventDefault())}})}function Pe(t){var e=t.element;function l(o,c){var n=Math.floor(e.scrollTop),h=e.scrollTop===0,u=n+e.offsetHeight===e.scrollHeight,m=e.scrollLeft===0,v=e.scrollLeft+e.offsetWidth===e.scrollWidth,g;return Math.abs(c)>Math.abs(o)?g=h||u:g=m||v,g?!t.settings.wheelPropagation:!0}function r(o){var c=o.deltaX,n=-1*o.deltaY;return(typeof c>"u"||typeof n>"u")&&(c=-1*o.wheelDeltaX/6,n=o.wheelDeltaY/6),o.deltaMode&&o.deltaMode===1&&(c*=10,n*=10),c!==c&&n!==n&&(c=0,n=o.wheelDelta),o.shiftKey?[-n,-c]:[c,n]}function a(o,c,n){if(!D.isWebKit&&e.querySelector("select:focus"))return!0;if(!e.contains(o))return!1;for(var h=o;h&&h!==e;){if(h.classList.contains(w.element.consuming))return!0;var u=k(h);if(n&&u.overflowY.match(/(scroll|auto)/)){var m=h.scrollHeight-h.clientHeight;if(m>0&&(h.scrollTop>0&&n<0||h.scrollTop<m&&n>0))return!0}if(c&&u.overflowX.match(/(scroll|auto)/)){var v=h.scrollWidth-h.clientWidth;if(v>0&&(h.scrollLeft>0&&c<0||h.scrollLeft<v&&c>0))return!0}h=h.parentNode}return!1}function s(o){var c=r(o),n=c[0],h=c[1];if(!a(o.target,n,h)){var u=!1;t.settings.useBothWheelAxes?t.scrollbarYActive&&!t.scrollbarXActive?(h?e.scrollTop-=h*t.settings.wheelSpeed:e.scrollTop+=n*t.settings.wheelSpeed,u=!0):t.scrollbarXActive&&!t.scrollbarYActive&&(n?e.scrollLeft+=n*t.settings.wheelSpeed:e.scrollLeft-=h*t.settings.wheelSpeed,u=!0):(e.scrollTop-=h*t.settings.wheelSpeed,e.scrollLeft+=n*t.settings.wheelSpeed),A(t),u=u||l(n,h),u&&!o.ctrlKey&&(o.stopPropagation(),o.preventDefault())}}typeof window.onwheel<"u"?t.event.bind(e,"wheel",s):typeof window.onmousewheel<"u"&&t.event.bind(e,"mousewheel",s)}function Ie(t){if(!D.supportsTouch&&!D.supportsIePointer)return;var e=t.element;function l(f,p){var T=Math.floor(e.scrollTop),b=e.scrollLeft,y=Math.abs(f),X=Math.abs(p);if(X>y){if(p<0&&T===t.contentHeight-t.containerHeight||p>0&&T===0)return window.scrollY===0&&p>0&&D.isChrome}else if(y>X&&(f<0&&b===t.contentWidth-t.containerWidth||f>0&&b===0))return!0;return!0}function r(f,p){e.scrollTop-=p,e.scrollLeft-=f,A(t)}var a={},s=0,o={},c=null;function n(f){return f.targetTouches?f.targetTouches[0]:f}function h(f){return f.pointerType&&f.pointerType==="pen"&&f.buttons===0?!1:!!(f.targetTouches&&f.targetTouches.length===1||f.pointerType&&f.pointerType!=="mouse"&&f.pointerType!==f.MSPOINTER_TYPE_MOUSE)}function u(f){if(h(f)){var p=n(f);a.pageX=p.pageX,a.pageY=p.pageY,s=new Date().getTime(),c!==null&&clearInterval(c)}}function m(f,p,T){if(!e.contains(f))return!1;for(var b=f;b&&b!==e;){if(b.classList.contains(w.element.consuming))return!0;var y=k(b);if(T&&y.overflowY.match(/(scroll|auto)/)){var X=b.scrollHeight-b.clientHeight;if(X>0&&(b.scrollTop>0&&T<0||b.scrollTop<X&&T>0))return!0}if(p&&y.overflowX.match(/(scroll|auto)/)){var N=b.scrollWidth-b.clientWidth;if(N>0&&(b.scrollLeft>0&&p<0||b.scrollLeft<N&&p>0))return!0}b=b.parentNode}return!1}function v(f){if(h(f)){var p=n(f),T={pageX:p.pageX,pageY:p.pageY},b=T.pageX-a.pageX,y=T.pageY-a.pageY;if(m(f.target,b,y))return;r(b,y),a=T;var X=new Date().getTime(),N=X-s;N>0&&(o.x=b/N,o.y=y/N,s=X),l(b,y)&&f.preventDefault()}}function g(){t.settings.swipeEasing&&(clearInterval(c),c=setInterval(function(){if(t.isInitialized){clearInterval(c);return}if(!o.x&&!o.y){clearInterval(c);return}if(Math.abs(o.x)<.01&&Math.abs(o.y)<.01){clearInterval(c);return}if(!t.element){clearInterval(c);return}r(o.x*30,o.y*30),o.x*=.8,o.y*=.8},10))}D.supportsTouch?(t.event.bind(e,"touchstart",u),t.event.bind(e,"touchmove",v),t.event.bind(e,"touchend",g)):D.supportsIePointer&&(window.PointerEvent?(t.event.bind(e,"pointerdown",u),t.event.bind(e,"pointermove",v),t.event.bind(e,"pointerup",g)):window.MSPointerEvent&&(t.event.bind(e,"MSPointerDown",u),t.event.bind(e,"MSPointerMove",v),t.event.bind(e,"MSPointerUp",g)))}var Ne=function(){return{handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1}},Ve={"click-rail":Ae,"drag-thumb":Me,keyboard:Ce,wheel:Pe,touch:Ie},z=function(e,l){var r=this;if(l===void 0&&(l={}),typeof e=="string"&&(e=document.querySelector(e)),!e||!e.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");this.element=e,e.classList.add(w.main),this.settings=Ne();for(var a in l)this.settings[a]=l[a];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var s=function(){return e.classList.add(w.state.focus)},o=function(){return e.classList.remove(w.state.focus)};this.isRtl=k(e).direction==="rtl",this.isRtl===!0&&e.classList.add(w.rtl),this.isNegativeScroll=function(){var h=e.scrollLeft,u=null;return e.scrollLeft=-1,u=e.scrollLeft<0,e.scrollLeft=h,u}(),this.negativeScrollAdjustment=this.isNegativeScroll?e.scrollWidth-e.clientWidth:0,this.event=new O,this.ownerDocument=e.ownerDocument||document,this.scrollbarXRail=J(w.element.rail("x")),e.appendChild(this.scrollbarXRail),this.scrollbarX=J(w.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",s),this.event.bind(this.scrollbarX,"blur",o),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var c=k(this.scrollbarXRail);this.scrollbarXBottom=parseInt(c.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=_(c.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=_(c.borderLeftWidth)+_(c.borderRightWidth),S(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=_(c.marginLeft)+_(c.marginRight),S(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=J(w.element.rail("y")),e.appendChild(this.scrollbarYRail),this.scrollbarY=J(w.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",s),this.event.bind(this.scrollbarY,"blur",o),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var n=k(this.scrollbarYRail);this.scrollbarYRight=parseInt(n.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=_(n.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?ke(this.scrollbarY):null,this.railBorderYWidth=_(n.borderTopWidth)+_(n.borderBottomWidth),S(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=_(n.marginTop)+_(n.marginBottom),S(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:e.scrollLeft<=0?"start":e.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:e.scrollTop<=0?"start":e.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(h){return Ve[h](r)}),this.lastScrollTop=Math.floor(e.scrollTop),this.lastScrollLeft=e.scrollLeft,this.event.bind(this.element,"scroll",function(h){return r.onScroll(h)}),A(this)};z.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,S(this.scrollbarXRail,{display:"block"}),S(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=_(k(this.scrollbarXRail).marginLeft)+_(k(this.scrollbarXRail).marginRight),this.railYMarginHeight=_(k(this.scrollbarYRail).marginTop)+_(k(this.scrollbarYRail).marginBottom),S(this.scrollbarXRail,{display:"none"}),S(this.scrollbarYRail,{display:"none"}),A(this),tt(this,"top",0,!1,!0),tt(this,"left",0,!1,!0),S(this.scrollbarXRail,{display:""}),S(this.scrollbarYRail,{display:""}))};z.prototype.onScroll=function(e){this.isAlive&&(A(this),tt(this,"top",this.element.scrollTop-this.lastScrollTop),tt(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)};z.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),$(this.scrollbarX),$(this.scrollbarY),$(this.scrollbarXRail),$(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)};z.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(e){return!e.match(/^ps([-_].+|)$/)}).join(" ")};const Be=Lt({__name:"PerfectScrollbar",props:{tag:{default:"div"},options:{default:()=>({})}},emits:["scroll","ps-scroll-y","ps-scroll-x","ps-scroll-up","ps-scroll-down","ps-scroll-left","ps-scroll-right","ps-y-reach-start","ps-y-reach-end","ps-x-reach-start","ps-x-reach-end"],setup(t,{expose:e,emit:l}){const r=t,a=l,s=E(null),o=E(null);U(()=>r.options,()=>{n(),c()},{deep:!0}),Zt(()=>{s.value&&c()}),te(()=>{n()});function c(){s.value&&(o.value=new z(s.value,r.options),m())}function n(){o.value&&(m(!1),o.value.destroy(),o.value=null)}const h={scroll:u("scroll"),"ps-scroll-y":u("ps-scroll-y"),"ps-scroll-x":u("ps-scroll-x"),"ps-scroll-up":u("ps-scroll-up"),"ps-scroll-down":u("ps-scroll-down"),"ps-scroll-left":u("ps-scroll-left"),"ps-scroll-right":u("ps-scroll-right"),"ps-y-reach-start":u("ps-y-reach-start"),"ps-y-reach-end":u("ps-y-reach-end"),"ps-x-reach-start":u("ps-x-reach-start"),"ps-x-reach-end":u("ps-x-reach-end")};function u(v){return function(g){a(v,g)}}function m(v=!0){var g;(g=o.value)!=null&&g.element&&Object.entries(h).forEach(([f,p])=>{var T,b;v?(T=o.value)==null||T.element.addEventListener(f,p):(b=o.value)==null||b.element.removeEventListener(f,p)})}return e({ps:o}),(v,g)=>(x(),P(lt(v.tag),{ref_key:"scrollbar",ref:s,class:"ps"},{default:d(()=>[M(v.$slots,"default")]),_:3},512))}}),Mt=t=>(Rt("data-v-fb727f12"),t=t(),Wt(),t),De={class:"nav-header"},$e=["innerHTML"],Oe=Mt(()=>L("h1",{class:"font-weight-medium leading-normal text-xl text-uppercase"}," Materio ",-1)),Ke=Mt(()=>L("div",{class:"vertical-nav-items-shadow"},null,-1)),je={__name:"VerticalNav",props:{tag:{type:null,required:!1,default:"aside"},isOverlayNavActive:{type:Boolean,required:!0},toggleIsOverlayNavActive:{type:Function,required:!0}},setup(t){const e=t,{mdAndDown:l}=Yt(),r=E(),a=St();U(()=>a.path,()=>{e.toggleIsOverlayNavActive(!1)});const s=E(!1),o=n=>s.value=n,c=n=>{s.value=n.target.scrollTop>0};return(n,h)=>{const u=K("RouterLink");return x(),P(lt(e.tag),{ref_key:"refNav",ref:r,class:F(["layout-vertical-nav",[{visible:t.isOverlayNavActive,scrolled:W(s),"overlay-nav":W(l)}]])},{default:d(()=>[L("div",De,[M(n.$slots,"nav-header",{},()=>[i(u,{to:"/",class:"app-logo app-title-wrapper"},{default:d(()=>[L("div",{class:"d-flex",innerHTML:W(Xt)},null,8,$e),Oe]),_:1})],!0)]),M(n.$slots,"before-nav-items",{},()=>[Ke],!0),M(n.$slots,"nav-items",{updateIsVerticalNavScrolled:o},()=>[i(W(Be),{tag:"ul",class:"nav-items",options:{wheelPropagation:!1},onPsScrollY:c},{default:d(()=>[M(n.$slots,"default",{},void 0,!0)]),_:3})],!0),M(n.$slots,"after-nav-items",{},void 0,!0)]),_:3},8,["class"])}}},Fe=Tt(je,[["__scopeId","data-v-fb727f12"]]),Ue=Lt({setup(t,{slots:e}){const l=E(!1),r=E(!1),a=ve(l),s=St(),{mdAndDown:o}=Yt();return fe(l,r),()=>{var v,g,f;const c=H(Fe,{isOverlayNavActive:l.value,toggleIsOverlayNavActive:a},{"nav-header":()=>{var p;return(p=e["vertical-nav-header"])==null?void 0:p.call(e,{toggleIsOverlayNavActive:a})},"before-nav-items":()=>{var p;return(p=e["before-vertical-nav-items"])==null?void 0:p.call(e)},default:()=>{var p;return(p=e["vertical-nav-content"])==null?void 0:p.call(e)},"after-nav-items":()=>{var p;return(p=e["after-vertical-nav-items"])==null?void 0:p.call(e)}}),n=H("header",{class:["layout-navbar navbar-blur"]},[H("div",{class:"navbar-content-container"},(v=e.navbar)==null?void 0:v.call(e,{toggleVerticalOverlayNavActive:a}))]),h=H("main",{class:"layout-page-content"},H("div",{class:"page-content-container"},(g=e.default)==null?void 0:g.call(e))),u=H("footer",{class:"layout-footer"},[H("div",{class:"footer-content-container"},(f=e.footer)==null?void 0:f.call(e))]),m=H("div",{class:["layout-overlay",{visible:r.value}],onClick:()=>{r.value=!r.value}});return H("div",{class:["layout-wrapper layout-nav-type-vertical layout-navbar-static layout-footer-static layout-content-width-fluid",o.value&&"layout-overlay-nav",s.meta.layoutWrapperClasses]},[c,H("div",{class:"layout-content-wrapper"},[n,h,u]),m])}}}),Ct=t=>(Rt("data-v-65341a9f"),t=t(),Wt(),t),qe={class:"d-flex h-100 align-center"},ze={class:"d-flex align-center cursor-pointer",style:{"user-select":"none"}},Ge=Ct(()=>L("span",{class:"d-none d-md-flex align-center text-disabled"},[L("span",{class:"me-3"},"Search"),L("span",{class:"meta-key"},"⌘K")],-1)),Je=["innerHTML"],Qe=Ct(()=>L("h1",{class:"font-weight-medium leading-normal text-xl text-uppercase"}," CRM ",-1)),Ze={__name:"DefaultLayoutWithVerticalNav",setup(t){return(e,l)=>{const r=K("IconBtn"),a=K("RouterLink");return x(),P(Ue,null,{navbar:d(({toggleVerticalOverlayNavActive:s})=>[L("div",qe,[i(r,{class:"ms-n3 d-lg-none",onClick:o=>s(!0)},{default:d(()=>[i(R,{icon:"ri-menu-line"})]),_:2},1032,["onClick"]),L("div",ze,[i(r,null,{default:d(()=>[i(R,{icon:"ri-search-line"})]),_:1}),Ge]),i(se),i(r,null,{default:d(()=>[i(R,{icon:"ri-notification-line"})]),_:1}),i(be,{class:"me-2"}),i(We)])]),"vertical-nav-header":d(({toggleIsOverlayNavActive:s})=>[i(a,{to:"/",class:"app-logo app-title-wrapper"},{default:d(()=>[L("div",{class:"d-flex",innerHTML:W(Xt)},null,8,Je),Qe]),_:1}),i(r,{class:"d-block d-lg-none",onClick:o=>s(!1)},{default:d(()=>[i(R,{icon:"ri-close-line"})]),_:2},1032,["onClick"])]),"vertical-nav-content":d(()=>[i(Te)]),default:d(()=>[M(e.$slots,"default",{},void 0,!0)]),_:3})}}},tn=Tt(Ze,[["__scopeId","data-v-65341a9f"]]),mn={__name:"default",setup(t){return(e,l)=>{const r=K("RouterView");return x(),P(tn,null,{default:d(()=>[i(r)]),_:1})}}};export{mn as default};
