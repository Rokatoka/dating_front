(window.webpackJsonp=window.webpackJsonp||[]).push([[21,8],{346:function(t,e,n){var content=n(357);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("33236b75",content,!0,{sourceMap:!1})},354:function(t,e,n){"use strict";n.r(e);n(182),n(12),n(72);var o=n(11),l={name:"InputComponent",components:{ShowVisibilityIcon:Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"20",height:"17",viewBox:"0 0 20 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M17.8825 0.881275L17.1465 0.145332C16.9385 -0.0626585 16.5545 -0.0306494 16.3145 0.257296L13.7543 2.80126C12.6023 2.30532 11.3384 2.06532 10.0103 2.06532C6.05822 2.08126 2.63444 4.38523 0.986327 7.69743C0.8903 7.90542 0.8903 8.16135 0.986327 8.33734C1.75426 9.90537 2.90633 11.2014 4.34633 12.1773L2.25034 14.3053C2.01034 14.5453 1.97833 14.9293 2.13838 15.1373L2.87432 15.8732C3.08231 16.0812 3.4663 16.0492 3.7063 15.7613L17.7542 1.71339C18.0582 1.47352 18.0902 1.08956 17.8822 0.88155L17.8825 0.881275ZM10.8583 5.71316C10.5863 5.64914 10.2984 5.56919 10.0264 5.56919C8.66631 5.56919 7.57842 6.65721 7.57842 8.01712C7.57842 8.28913 7.64244 8.57708 7.72239 8.8491L6.65028 9.90513C6.33032 9.34518 6.15433 8.72107 6.15433 8.01715C6.15433 5.88918 7.86636 4.17715 9.99434 4.17715C10.6984 4.17715 11.3224 4.35314 11.8823 4.6731L10.8583 5.71316Z",fill:"#111111","fill-opacity":"0.8"}}),t._v(" "),n("path",{attrs:{d:"M19.0345 7.69737C18.4745 6.57732 17.7384 5.56939 16.8265 4.75336L13.8505 7.69737V8.01732C13.8505 10.1453 12.1385 11.8573 10.0105 11.8573H9.69053L7.80255 13.7453C8.50661 13.8893 9.24256 13.9853 9.96256 13.9853C13.9147 13.9853 17.3385 11.6813 18.9866 8.35319C19.1306 8.12912 19.1306 7.90521 19.0345 7.6972L19.0345 7.69737Z",fill:"#111111","fill-opacity":"0.8"}})])}),[],!1,null,null,null).exports},props:{label:{type:String,required:!0},value:{type:[String,Number],default:""},type:{type:String,default:"text"},isSearch:{type:Boolean,default:!1},disclaimer:{type:String,default:""},errors:{type:Array,default:function(){return[]}}},computed:{id:function(){return"id-".concat(Math.random().toString(16))}},methods:{handleValueUpdate:function(t){this.$emit("input",t.target.value)},handleVisibilityToggle:function(){var input=document.getElementById(this.id);input.type="password"===input.type?"text":"password"}}},r=n(356);var f=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.wrapper},[n("div",{class:t.$style.header},[n("label",[t._v("\n      "+t._s(t.label)+"\n    ")]),t._v(" "),"password"===t.type?n("div",{class:t.$style.headerIcon},[n("show-visibility-icon",{class:t.$style.icon,nativeOn:{click:function(e){return t.handleVisibilityToggle.apply(null,arguments)}}}),t._v(" "),n("span",[t._v("\n        Скрыть\n      ")])],1):t._e()]),t._v(" "),n("input",t._b({class:[t.$style.input,t.isSearch&&t.$style.search,t.errors.length&&t.$style.error],attrs:{id:t.id,type:t.type},domProps:{value:t.value},on:{input:t.handleValueUpdate}},"input",t.$attrs,!1)),t._v(" "),t.disclaimer?n("span",{class:t.$style.disclaimer},[t._v("\n    "+t._s(t.disclaimer)+"\n  ")]):t._e()])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=f.exports},356:function(t,e,n){"use strict";var o=n(346),l=n.n(o);n.d(e,"default",(function(){return l.a}))},357:function(t,e,n){var o=n(33),l=n(54),r=n(55),f=n(56),c=n(57),d=n(58),m=n(59),y=n(60),h=n(61),_=n(62),w=n(63),v=n(64),x=o(!1),C=l(r),B=l(f),$=l(c),L=l(d),M=l(m),S=l(y),T=l(h),I=l(_),V=l(w),k=l(v);x.push([t.i,'@font-face{font-style:normal;font-weight:400;font-family:"Medium";src:url('+C+') format("ttf")}@font-face{font-style:normal;font-weight:900;font-family:"Black";src:url('+B+') format("ttf")}@font-face{font-style:normal;font-weight:700;font-family:"Bold";src:url('+$+') format("ttf")}@font-face{font-style:normal;font-weight:200;font-family:"ExtraLight";src:url('+L+') format("ttf")}@font-face{font-style:normal;font-weight:300;font-family:"Light";src:url('+M+') format("ttf")}@font-face{font-style:normal;font-weight:400;font-family:"Regular";src:url('+S+') format("ttf")}@font-face{font-style:normal;font-weight:600;font-family:"SemiBold";src:url('+T+') format("ttf")}@font-face{font-style:normal;font-weight:100;font-family:"Thin";src:url('+I+') format("ttf")}@font-face{font-style:normal;font-weight:700;font-family:"Bold";src:url('+V+') format("ttf")}@font-face{font-style:normal;font-weight:400;font-family:"Medium";src:url('+k+') format("ttf")}.wrapper_4h6t8 input[type=text]{font-family:"Mont-thin",sans-serif}.wrapper_4h6t8{position:relative;display:grid;grid-row-gap:10px;color:#111}.header_TqPGi{justify-content:space-between}.header_TqPGi,.headerIcon_dr4oo{display:flex;align-items:center}.headerIcon_dr4oo{grid-gap:8px;gap:8px}.icon_PD0d7{cursor:pointer}.input_\\+TGyn{padding:16px;border:1px solid #c9c9c9;border-radius:10px}.input_\\+TGyn.search_YLUVV{height:50px;padding:8px 16px;border:none;box-shadow:1px 4px 12px rgba(0,0,0,.1)}.input_\\+TGyn.error_XQtyB{border:1px solid #ee1d52}.disclaimer_hcewv{position:absolute;bottom:-20px;color:#666}',""]),x.locals={wrapper:"wrapper_4h6t8",header:"header_TqPGi",headerIcon:"headerIcon_dr4oo",icon:"icon_PD0d7",input:"input_+TGyn",search:"search_YLUVV",error:"error_XQtyB",disclaimer:"disclaimer_hcewv"},t.exports=x},391:function(t,e,n){var content=n(422);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("589d5053",content,!0,{sourceMap:!1})},421:function(t,e,n){"use strict";var o=n(391),l=n.n(o);n.d(e,"default",(function(){return l.a}))},422:function(t,e,n){var o=n(33),l=n(54),r=n(55),f=n(56),c=n(57),d=n(58),m=n(59),y=n(60),h=n(61),_=n(62),w=n(63),v=n(64),x=o(!1),C=l(r),B=l(f),$=l(c),L=l(d),M=l(m),S=l(y),T=l(h),I=l(_),V=l(w),k=l(v);x.push([t.i,'@font-face{font-style:normal;font-weight:400;font-family:"Medium";src:url('+C+') format("ttf")}@font-face{font-style:normal;font-weight:900;font-family:"Black";src:url('+B+') format("ttf")}@font-face{font-style:normal;font-weight:700;font-family:"Bold";src:url('+$+') format("ttf")}@font-face{font-style:normal;font-weight:200;font-family:"ExtraLight";src:url('+L+') format("ttf")}@font-face{font-style:normal;font-weight:300;font-family:"Light";src:url('+M+') format("ttf")}@font-face{font-style:normal;font-weight:400;font-family:"Regular";src:url('+S+') format("ttf")}@font-face{font-style:normal;font-weight:600;font-family:"SemiBold";src:url('+T+') format("ttf")}@font-face{font-style:normal;font-weight:100;font-family:"Thin";src:url('+I+') format("ttf")}@font-face{font-style:normal;font-weight:700;font-family:"Bold";src:url('+V+') format("ttf")}@font-face{font-style:normal;font-weight:400;font-family:"Medium";src:url('+k+') format("ttf")}.login_X7SHu{font-family:"Mont-thin",sans-serif;display:flex;flex-direction:column;grid-gap:26px;gap:26px;width:416px;padding:42px 36px;border-radius:20px;background-color:#fff}.title_77N25{display:grid;grid-row-gap:8px;text-align:center}.titleHead_8oyhh{font-size:24px;line-height:36px}.titleBody_d0n-Z{font-size:16px;line-height:24px;color:#666}',""]),x.locals={login:"login_X7SHu",title:"title_77N25",titleHead:"titleHead_8oyhh",titleBody:"titleBody_d0n-Z"},t.exports=x},439:function(t,e,n){"use strict";n.r(e);var o=n(354),l=n(38),r={name:"PasswordResetPage",components:{InputComponent:o.default,ButtonComponent:l.default},layout:"login",data:function(){return{login:"",password:""}}},f=n(421),c=n(11);var component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.login},[n("div",{class:t.$style.title},[n("span",{class:t.$style.titleHead},[t._v("\n      Новый пароль\n    ")]),t._v(" "),n("span",{class:t.$style.titleBody},[t._v("\n      Пожалуйста, придумайте новый пароль для в хода в систему.\n    ")])]),t._v(" "),n("input-component",{attrs:{label:"Новый пароль",placeholder:"Введите свой пароль",type:"password"},model:{value:t.login,callback:function(e){t.login=e},expression:"login"}}),t._v(" "),n("input-component",{attrs:{label:"Подтвердите новый пароль",placeholder:"Введите свой пароль",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("button-component",[t._v("\n    Вход\n  ")])],1)}),[],!1,(function(t){this.$style=f.default.locals||f.default}),null,null);e.default=component.exports;installComponents(component,{InputComponent:n(354).default,ButtonComponent:n(38).default})}}]);