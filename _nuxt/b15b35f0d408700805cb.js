(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{307:function(t,e,r){"use strict";var o=r(141);e.a=o.a},329:function(t,e){t.exports=function(component,t){var e="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(e.directives=component.exports.options.directives),e.directives=e.directives||{},t)e.directives[i]=e.directives[i]||t[i]}},330:function(t,e,r){var content=r(331);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("5db1c400",content,!0,{sourceMap:!1})},331:function(t,e,r){(e=r(11)(!1)).push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;-webkit-transition:box-shadow .28s cubic-bezier(.4,0,.2,1);transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{-webkit-box-flex:1;flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{-webkit-box-align:center;align-items:center;border-radius:inherit;display:-webkit-box;display:flex}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=e},338:function(t,e,r){"use strict";r(10),r(8),r(5),r(4),r(7);var o=r(2),n=(r(35),r(36),r(330),r(55)),l=r(307),c=r(71),d=r(37),h=r(19),v=r(1).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),m=r(6),_=r(9);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(m.a)(n.a,d.a,v).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(o.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(l.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(c.a,{props:{color:e}},"$cancel")])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},n.a.options.computed.classes.call(this),{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||h.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(_.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},396:function(t,e,r){"use strict";r.r(e);r(88);var o,n=r(25),l={data:function(){return{}},asyncData:(o=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,o,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.app,t.next=3,r.$axios.post("http://techaccess.westus.azurecontainer.io/api/singletons/get/volunteer_page?token=1aadabebd095d1512d2ededa2395b8",JSON.stringify({}),{headers:{"Content-Type":"application/json"}});case 3:return o=t.sent,data=o.data,t.abrupt("return",{coachHeading:data.coach_heading,coachImg:"http://techaccess.westus.azurecontainer.io/storage/uploads/"+data.coach_img.path,coachText:data.coach_text,codeHeading:data.code_heading,codeImg:"http://techaccess.westus.azurecontainer.io/storage/uploads/"+data.code_img.path,codeText:data.code_text,heading:data.heading,hero:"http://techaccess.westus.azurecontainer.io/storage/uploads/"+data.hero.path,showAlert:data.alert_enable,alertText:data.alert_message});case 6:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)})},c=r(43),d=r(59),h=r.n(d),v=r(338),m=r(141),_=r(135),f=r(116),x=r(320),w=r(321),y=r(113),C=r(324),O=r(329),k=r.n(O),B=r(60),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-alert",{staticClass:"white--text",attrs:{prominent:"",color:"green",border:"right",type:"success",elevation:"10",icon:"mdi-alert-circle",dark:"true"},model:{value:t.showAlert,callback:function(e){t.showAlert=e},expression:"showAlert"}},[t._v("\n    "+t._s(t.alertText)+"\n  ")]),t._v(" "),r("v-row",{attrs:{column:"","justify-center":"","align-center":""}},[r("v-col",{attrs:{md:8,"offset-md":2,sm:12,"offset-sm":0,"offset-xs":0,xs:12}},[r("v-card",{staticClass:"transparent",attrs:{flat:"",dark:"true"}},[r("v-row",{staticClass:"px-4"},[r("v-col",{staticClass:"ma-auto",attrs:{md:7,sm:12}},[r("v-card-text",{staticClass:"headline white--text",domProps:{innerHTML:t._s(t.heading)}})],1),t._v(" "),r("v-col",{attrs:{md:5,sm:12}},[r("v-img",{staticClass:"mx-auto",attrs:{src:t.hero,contain:"",width:"100%"}})],1)],1),t._v(" "),r("v-row",{staticClass:"px-4"},[r("v-col",{attrs:{md:4,sm:12,"offset-md":1}},[r("v-card",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"mx-auto",attrs:{nuxt:"true",to:"volunteer/tech-coaching",hover:"true"}},[r("v-img",{attrs:{src:t.coachImg,contain:"",alt:"Tech Coach"}}),t._v(" "),r("v-card-title",{staticClass:"text-center",domProps:{innerHTML:t._s(t.coachHeading)}}),t._v(" "),r("v-card-subtitle",{staticClass:"white--text",domProps:{innerHTML:t._s(t.coachText)}})],1)],1),t._v(" "),r("v-col",{attrs:{md:4,sm:12,"offset-md":2}},[r("v-card",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"mx-auto",attrs:{nuxt:"true",to:"volunteer/launchcode",hover:"true"}},[r("v-img",{attrs:{src:t.codeImg,contain:"",alt:"Launchcode's Discovery"}}),t._v(" "),r("v-card-title",{staticClass:"text-center",domProps:{innerHTML:t._s(t.codeHeading)}}),t._v(" "),r("v-card-subtitle",{staticClass:" white--text",domProps:{innerHTML:t._s(t.codeText)}})],1)],1)],1)],1),t._v(" "),r("v-btn",{staticClass:"mt-10 mx-auto align-content-center d-flex",attrs:{width:"50%",color:"green",href:"https://www.volgistics.com/ex/portal.dll/ap?ap=1433095633"}},[t._v("Apply Now")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VAlert:v.a,VBtn:m.a,VCard:_.a,VCardSubtitle:f.b,VCardText:f.c,VCardTitle:f.d,VCol:x.a,VContainer:w.a,VImg:y.a,VRow:C.a}),k()(component,{Ripple:B.a})}}]);