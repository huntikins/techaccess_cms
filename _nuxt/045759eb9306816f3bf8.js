(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{394:function(t,e,r){"use strict";r.r(e);r(88);var n,o=r(25),c={data:function(){return{alert:!0,dialog:!1}},methods:{submit:function(){this.dialog=!1,this.$v.$touch()}},asyncData:(n=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.app,t.next=3,r.$axios.post("http://techaccess.westus.azurecontainer.io/api/singletons/get/partner_page?token=1aadabebd095d1512d2ededa2395b8",JSON.stringify({}),{headers:{"Content-Type":"application/json"}});case 3:return n=t.sent,data=n.data,t.abrupt("return",{heading:data.heading,hero:"http://techaccess.westus.azurecontainer.io/storage/uploads/"+data.hero.path,sections:[{heading:data.section_1_heading,text:data.section_1_text},{heading:data.section_2_heading,text:data.section_2_text},{heading:data.section_3_heading,text:data.section_3_text}]});case 6:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)})},d=r(43),l=r(59),m=r.n(l),v=r(141),_=r(135),h=r(116),f=r(320),x=r(321),w=r(324),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-col",{attrs:{md:8,"offset-md":2,sm:12}},[r("h1",{staticClass:"text-center",staticStyle:{"word-break":"normal"},domProps:{innerHTML:t._s(t.heading)}})]),t._v(" "),r("v-col",{attrs:{md:12,sm:12}},[r("link",{attrs:{href:"https://cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css",rel:"stylesheet",type:"text/css"}}),t._v(" "),r("div",{attrs:{id:"mc_embed_signup"}},[r("form",{staticClass:"validate",attrs:{action:"https://kclibrary.us18.list-manage.com/subscribe/post?u=02676a46f25558c3728470954&id=54e93eb8b1",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank",novalidate:""}},[r("div",{attrs:{id:"mc_embed_signup_scroll"}},[r("label",{attrs:{for:"mce-EMAIL"}},[t._v("Subscribe to our Partner Newsletter")]),t._v(" "),r("input",{staticClass:"email",attrs:{type:"email",value:"",name:"EMAIL",id:"mce-EMAIL",placeholder:"email address",required:""}}),t._v(" "),r("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[r("input",{attrs:{type:"text",name:"b_02676a46f25558c3728470954_54e93eb8b1",tabindex:"-1",value:""}})]),t._v(" "),r("div",{staticClass:"clear"},[r("v-btn",{staticClass:"button",attrs:{type:"submit",color:"secondary",value:"Subscribe",name:"subscribe",id:"mc-embedded-subscribe"}},[t._v("Subscribe")])],1)])])])])],1),t._v(" "),r("v-row",[t._l(t.sections,(function(section){return[r("v-col",{key:section.heading,staticClass:"col-12",attrs:{md:4,sm:12}},[r("v-card",{attrs:{hover:""}},[r("v-card-title",{domProps:{innerHTML:t._s(section.heading)}}),t._v(" "),r("v-card-text",{domProps:{innerHTML:t._s(section.text)}})],1)],1)]}))],2),t._v(" "),r("v-row",[r("v-col",{attrs:{md:4,sm:12,"offset-md":4}},[r("v-btn",{attrs:{to:"/partner/form",block:"",color:"secondary"}},[t._v("\n        Become A Partner\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:v.a,VCard:_.a,VCardText:h.c,VCardTitle:h.d,VCol:f.a,VContainer:x.a,VRow:w.a})}}]);