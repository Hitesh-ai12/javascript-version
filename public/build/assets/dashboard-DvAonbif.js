import{e as L,o as n,f as _,g as e,h as t,V as g,Y as f,l as d,F as x,Z as b,j as s,k as l,O as v,r as y,Q as P,_ as z}from"./main-D5DKZ7Ln.js";import{V as w,a as C}from"./VMenu-mn9bjOKf.js";import{V as B,a as V}from"./VCard-DDxuBKzT.js";import{V as k,a as h}from"./VRow-Ch9VOfP7.js";import{V as T}from"./VAvatar-DhYIy1TD.js";import{a as N}from"./ssrBoot-DUbJ7bHf.js";import{a as S,b as $,c as D,d as R}from"./avatar-8-HLguwPXw.js";import{V as A,a as U}from"./VDataTable-CSOMHoNB.js";import{V as M}from"./VImg-B1TjRv83.js";import{a as I}from"./axios-DsPaXkF5.js";import"./index-DiEAOYo7.js";import"./VDivider-CBnqrCbA.js";import"./VOverlay-wCc8lyzv.js";import"./forwardRefs-DWGaNmQL.js";import"./scopeId-2Cq9sFqq.js";/* empty css              */import"./VTextField-BWOpe4li.js";import"./VCheckboxBtn-CjBl-hoH.js";import"./VSlideGroup-D2K6NFyG.js";import"./VTable-DGtRhIn1.js";const E={__name:"MoreBtn",props:{menuList:{type:Array,required:!1},itemProps:{type:Boolean,required:!1},iconSize:{type:String,required:!1}},setup(c){const i=c;return(u,o)=>{const m=L("IconBtn");return n(),_(m,null,{default:e(()=>[t(g,{size:c.iconSize,icon:"ri-more-2-line"},null,8,["size"]),i.menuList?(n(),_(w,{key:0,activator:"parent"},{default:e(()=>[t(C,{items:i.menuList,"item-props":i.itemProps},null,8,["items","item-props"])]),_:1})):f("",!0)]),_:1})}}},F=s("p",{class:"text-body-1 mb-0"},[s("span",{class:"d-inline-block font-weight-medium text-high-emphasis"},"Total 48.5% Growth"),v(),s("span",{class:"text-high-emphasis"},"😎"),v(" this month ")],-1),G={class:"d-flex align-center gap-x-3"},H={class:"d-flex flex-column"},j={class:"text-body-1"},q={class:"text-h5"},J={__name:"AnalyticsTransactions",setup(c){const i=[{title:"Sales",stats:"245k",icon:"ri-pie-chart-2-line",color:"primary"},{title:"Customers",stats:"12.5k",icon:"ri-group-line",color:"success"},{title:"Product",stats:"1.54k",icon:"ri-macbook-line",color:"warning"},{title:"Revenue",stats:"$88k",icon:"ri-money-dollar-circle-line",color:"info"}],u=[{title:"Share",value:"Share"},{title:"Refresh",value:"Refresh"},{title:"Update",value:"Update"}];return(o,m)=>{const p=E;return n(),_(V,{title:"Transactions"},{subtitle:e(()=>[F]),append:e(()=>[t(p,{"menu-list":u})]),default:e(()=>[t(B,{class:"pt-10"},{default:e(()=>[t(k,null,{default:e(()=>[(n(),d(x,null,b(i,a=>t(h,{key:a.title,cols:"12",sm:"6",md:"3"},{default:e(()=>[s("div",G,[t(T,{color:a.color,rounded:"",size:"40",class:"elevation-2"},{default:e(()=>[t(g,{size:"24",icon:a.icon},null,8,["icon"])]),_:2},1032,["color"]),s("div",H,[s("div",j,l(a.title),1),s("h5",q,l(a.stats),1)])])]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})}}},O="/build/assets/avatar-5-BB5JHItX.png",Y="/build/assets/avatar-6-m5t1eGlT.png",K="/build/assets/avatar-7-C5t2Bw3B.png",Q={class:"d-flex align-center gap-x-4"},X={class:"d-flex flex-column"},Z={class:"text-h6 font-weight-medium user-list-name"},W={class:"text-sm text-medium-emphasis"},ee={class:"d-flex gap-4"},ae={class:"text-capitalize text-high-emphasis"},te={class:"text-capitalize text-high-emphasis"},re={__name:"AnalyticsUserTable",setup(c){const i=[{title:"User",key:"username"},{title:"Email",key:"email"},{title:"Role",key:"role"},{title:"Status",key:"status"}],u=[{id:1,fullName:"Galasasen Slixby",company:"Yotz PVT LTD",role:"editor",username:"gslixby0",country:"El Salvador",contact:"(479) 232-9151",email:"gslixby0@abc.net.au",currentPlan:"enterprise",status:"inactive",avatar:N},{id:2,fullName:"Halsey Redmore",company:"Skinder PVT LTD",role:"author",username:"hredmore1",country:"Albania",contact:"(472) 607-9137",email:"hredmore1@imgur.com",currentPlan:"team",status:"pending",avatar:S},{id:3,fullName:"Marjory Sicely",company:"Oozz PVT LTD",role:"maintainer",username:"msicely2",country:"Russia",contact:"(321) 264-4599",email:"msicely2@who.int",currentPlan:"enterprise",status:"active",avatar:$},{id:4,fullName:"Cyrill Risby",company:"Oozz PVT LTD",role:"Admin",username:"crisby3",country:"China",contact:"(923) 690-6806",email:"crisby3@wordpress.com",currentPlan:"team",status:"inactive",avatar:D},{id:5,fullName:"Maggy Hurran",company:"Aimbo PVT LTD",role:"subscriber",username:"mhurran4",country:"Pakistan",contact:"(669) 914-1078",email:"mhurran4@yahoo.co.jp",currentPlan:"enterprise",status:"pending",avatar:O},{id:6,fullName:"Silvain Halstead",company:"Jaxbean PVT LTD",role:"author",username:"shalstead5",country:"China",contact:"(958) 973-3093",email:"shalstead5@shinystat.com",currentPlan:"company",status:"active",avatar:Y},{id:7,fullName:"Breena Gallemore",company:"Jazzy PVT LTD",role:"subscriber",username:"bgallemore6",country:"Canada",contact:"(825) 977-8152",email:"bgallemore6@boston.com",currentPlan:"company",status:"pending",avatar:K},{id:8,fullName:"Kathryne Liger",company:"Pixoboo PVT LTD",role:"author",username:"kliger7",country:"France",contact:"(187) 440-0934",email:"kliger7@vinaora.com",currentPlan:"enterprise",status:"pending",avatar:R}],o=p=>{const a=p.toLowerCase();return a==="subscriber"?{color:"success",icon:"ri-user-line"}:a==="author"?{color:"error",icon:"ri-computer-line"}:a==="maintainer"?{color:"info",icon:"ri-pie-chart-line"}:a==="editor"?{color:"warning",icon:"ri-edit-box-line"}:a==="admin"?{color:"primary",icon:"ri-vip-crown-line"}:{color:"success",icon:"ri-user-line"}},m=p=>{const a=p.toLowerCase();return a==="pending"?"warning":a==="active"?"success":a==="inactive"?"secondary":"primary"};return(p,a)=>(n(),_(V,null,{default:e(()=>[t(A,{headers:i,items:u,"item-value":"id",class:"text-no-wrap"},{"item.username":e(({item:r})=>[s("div",Q,[t(T,{size:"34",variant:r.avatar?void 0:"tonal",color:r.avatar?void 0:o(r.role).color},{default:e(()=>[r.avatar?(n(),_(M,{key:0,src:r.avatar},null,8,["src"])):f("",!0)]),_:2},1032,["variant","color"]),s("div",X,[s("h6",Z,l(r.fullName),1),s("span",W,"@"+l(r.username),1)])])]),"item.role":e(({item:r})=>[s("div",ee,[t(g,{icon:o(r.role).icon,color:o(r.role).color,size:"22"},null,8,["icon","color"]),s("div",ae,l(r.role),1)])]),"item.plan":e(({item:r})=>[s("span",te,l(r.currentPlan),1)]),"item.status":e(({item:r})=>[t(U,{color:m(r.status),size:"small",class:"text-capitalize"},{default:e(()=>[v(l(r.status),1)]),_:2},1032,["color"])]),bottom:e(()=>[]),_:1})]),_:1}))}},se={name:"LeadsPage",setup(){const c=y([]),i=y(!0),u=y("");return P(async()=>{try{const m=await I.get("/api/leads");c.value=m.data}catch(m){u.value="Failed to fetch leads.",console.error("Error fetching leads:",m)}finally{i.value=!1}}),{leads:c,loading:i,error:u}}},oe={class:"leads-container"},ne={key:0,class:"loading"},ie={key:1,class:"error"},le={key:2,class:"no-leads"},ce={key:3};function ue(c,i,u,o,m,p){return n(),d("div",oe,[o.loading?(n(),d("div",ne,"Loading leads...")):f("",!0),o.error?(n(),d("div",ie,l(o.error),1)):f("",!0),!o.loading&&!o.error&&o.leads.length===0?(n(),d("div",le," No leads available. ")):(n(),d("div",ce,[(n(!0),d(x,null,b(o.leads,a=>(n(),d("div",{class:"lead",key:a.id},[s("h2",null,l(a.full_name),1),s("p",null,l(a.email),1)]))),128))]))])}const me=z(se,[["render",ue]]),Se={__name:"dashboard",setup(c){return(i,u)=>(n(),_(k,{class:"match-height"},{default:e(()=>[t(h,{cols:"12",md:"8"},{default:e(()=>[t(J)]),_:1}),t(h,{cols:"12"},{default:e(()=>[t(re)]),_:1}),t(h,{cols:"12"},{default:e(()=>[t(me)]),_:1})]),_:1}))}};export{Se as default};
