"use strict";(self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[]).push([[607],{5607:function(t,e,l){l.r(e),l.d(e,{default:function(){return C}});var n=l(3396),a=l(7139),s=l(4870),o=l(65),r=l(2882),c=l(3369),i=l(6824),u=l(8521),d=l(3289),f=l(8694);const g={class:"d-flex align-center justify-center justify-md-start mb-4"},m={class:"text-h4 text-md-h3 text-lg-h2 mr-4 font-weight-regular"},p={class:"header-subtitle mb-4"},w={class:"text-h6"},y=(0,n.Uk)(" mdi-forum "),v=(0,n._)("a",{href:"mailto:oleinikowa.poly@yandex.ru"},"Email: oleinikowa.poly@yandex.ru",-1),h={class:"text-h6 mt-4"},k=(0,n.Uk)(" mdi-map-marker "),b={class:"text-h6 mt-4"},x=(0,n.Uk)(" mdi-account-circle "),_={class:"d-flex justify-center justify-md-start"},j={key:1,class:"text-white"};var S=(0,n.aZ)({setup(t){const e=(0,o.oR)(),S=(0,n.Fl)((()=>e.getters["contacts/socials"]));return(t,e)=>((0,n.wg)(),(0,n.j4)(c.K,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i.o,{class:"section-header",align:"center"},{default:(0,n.w5)((()=>[(0,n.Wm)(u.D,{cols:"12",md:"6",class:"text-center text-md-left"},{default:(0,n.w5)((()=>[(0,n._)("div",g,[(0,n._)("div",m,(0,a.zw)(t.$t("contacts.title")),1)]),(0,n._)("div",p,(0,a.zw)(t.$t("contacts.subtitle")),1),(0,n._)("div",w,[(0,n.Wm)(d.t,{size:"x-small"},{default:(0,n.w5)((()=>[y])),_:1}),(0,n.Uk)(" "+(0,a.zw)(t.$t("contacts.hi")),1)]),v,(0,n._)("div",h,[(0,n.Wm)(d.t,{size:"x-small"},{default:(0,n.w5)((()=>[k])),_:1}),(0,n.Uk)(" "+(0,a.zw)(t.$t("contacts.find")),1)]),(0,n._)("div",null,(0,a.zw)(t.$t("contacts.place")),1),(0,n._)("div",b,[(0,n.Wm)(d.t,{size:"x-small"},{default:(0,n.w5)((()=>[x])),_:1}),(0,n.Uk)(" "+(0,a.zw)(t.$t("contacts.social")),1)]),(0,n._)("div",_,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,s.SU)(S),(t=>((0,n.wg)(),(0,n.j4)(r.T,{key:t.href,href:t.href,icon:!0,target:"_blank",color:t.color,class:"mr-4 elevation-0 rounded-circle"},{default:(0,n.w5)((()=>[t.icon?((0,n.wg)(),(0,n.j4)(d.t,{key:0,color:"white"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(t.icon),1)])),_:2},1024)):((0,n.wg)(),(0,n.iD)("span",j,(0,a.zw)(t.name),1))])),_:2},1032,["href","color"])))),128))])])),_:1}),(0,n.Wm)(u.D,{cols:"12",md:"6"},{default:(0,n.w5)((()=>[(0,n.Wm)(f.f,{class:"w-100",src:l(9508)},null,8,["src"])])),_:1})])),_:1})])),_:1}))}});const $=S;var C=$},9508:function(t,e,l){t.exports=l.p+"img/undraw_contact_us_re_4qqt.eb84df4d.svg"},8521:function(t,e,l){l.d(e,{D:function(){return g}});l(6699),l(8099);var n=l(1138),a=l(7139),s=l(3396),o=l(1107);const r=["sm","md","lg","xl","xxl"],c=(()=>r.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),i=(()=>r.reduce(((t,e)=>(t["offset"+(0,a.kC)(e)]={type:[String,Number],default:null},t)),{}))(),u=(()=>r.reduce(((t,e)=>(t["order"+(0,a.kC)(e)]={type:[String,Number],default:null},t)),{}))(),d={col:Object.keys(c),offset:Object.keys(i),order:Object.keys(u)};function f(t,e,l){let n=t;if(null!=l&&!1!==l){if(e){const l=e.replace(t,"");n+=`-${l}`}return"col"===t&&(n="v-"+n),"col"!==t||""!==l&&!0!==l?(n+=`-${l}`,n.toLowerCase()):n.toLowerCase()}}const g=(0,o.a)({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...c,offset:{type:[String,Number],default:null},...i,order:{type:[String,Number],default:null},...u,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},...(0,n.Q)()},setup(t,e){let{slots:l}=e;const n=(0,s.Fl)((()=>{const e=[];let l;for(l in d)d[l].forEach((n=>{const a=t[n],s=f(l,n,a);s&&e.push(s)}));const n=e.some((t=>t.startsWith("v-col-")));return e.push({"v-col":!n||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),e}));return()=>{var e;return(0,s.h)(t.tag,{class:n.value},null==(e=l.default)?void 0:e.call(l))}}})},6824:function(t,e,l){l.d(e,{o:function(){return h}});l(6699),l(8099);var n=l(1138),a=l(7139),s=l(3396),o=l(1107);const r=["sm","md","lg","xl","xxl"],c=["start","end","center"];function i(t,e){return r.reduce(((l,n)=>(l[t+(0,a.kC)(n)]=e(),l)),{})}const u=t=>[...c,"baseline","stretch"].includes(t),d=i("align",(()=>({type:String,default:null,validator:u}))),f=t=>[...c,"space-between","space-around"].includes(t),g=i("justify",(()=>({type:String,default:null,validator:f}))),m=t=>[...c,"space-between","space-around","stretch"].includes(t),p=i("alignContent",(()=>({type:String,default:null,validator:m}))),w={align:Object.keys(d),justify:Object.keys(g),alignContent:Object.keys(p)},y={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,l){let n=y[t];if(null!=l){if(e){const l=e.replace(t,"");n+=`-${l}`}return n+=`-${l}`,n.toLowerCase()}}const h=(0,o.a)({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u},...d,justify:{type:String,default:null,validator:f},...g,alignContent:{type:String,default:null,validator:m},...p,...(0,n.Q)()},setup(t,e){let{slots:l}=e;const n=(0,s.Fl)((()=>{const e=[];let l;for(l in w)w[l].forEach((n=>{const a=t[n],s=v(l,n,a);s&&e.push(s)}));return e.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),e}));return()=>{var e;return(0,s.h)(t.tag,{class:["v-row",n.value]},null==(e=l.default)?void 0:e.call(l))}}})}}]);
//# sourceMappingURL=607.49522537.js.map