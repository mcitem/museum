(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-my"],{"2b06":function(t,n,i){t.exports=i.p+"static/img/OIP.4d99c07b.jpg"},"3c1e":function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,".container[data-v-2618e4cc]{background-color:#000;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding-top:%?200?%;background-color:#f7f7f7}.logo[data-v-2618e4cc]{display:flex;align-items:center;margin-bottom:50px}.logo-icon[data-v-2618e4cc]{width:60px;height:60px;margin-right:10px;border-radius:50%;box-shadow:0 1px 5px #c9c9c9}.logo-text[data-v-2618e4cc]{font-size:24px;font-weight:700;color:#777}.btn-group[data-v-2618e4cc]{display:flex;width:100%;flex-direction:column;justify-content:center;align-items:center}.btn[data-v-2618e4cc]{display:flex;justify-content:center;align-items:center;width:100%;background-color:#fff;border-radius:30px;margin-bottom:20px;box-shadow:0 0 1px #c9c9c9}.weixin-logo[data-v-2618e4cc]{width:20px;height:20px;margin:0 %?10?%}.btn-text[data-v-2618e4cc]{font-size:16px;color:#fff}.info-group[data-v-2618e4cc]{width:100%;display:flex;flex-direction:column;align-items:center}.avatar[data-v-2618e4cc]{display:flex;flex-direction:column;align-items:center;margin-bottom:30px}.avatar-icon[data-v-2618e4cc]{width:80px;height:80px;margin-bottom:10px;border-radius:50%;box-shadow:0 1px 5px #c9c9c9}.avatar-name[data-v-2618e4cc]{font-size:20px;color:#333}.info-group .btn-group[data-v-2618e4cc]{margin-top:30px}.details[data-v-2618e4cc]{box-sizing:border-box;\n  /* background-color: #090; */width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column}.details-item[data-v-2618e4cc]{display:flex;\n  /* justify-content: center; */align-items:center;background-color:#fff;height:%?100?%;line-height:%?100?%;width:100%;padding:0 0 0 %?60?%;border-bottom:1px solid #999}.logout[data-v-2618e4cc]{margin-top:20px}.details-info[data-v-2618e4cc]{margin:0 %?20?%}",""]),t.exports=n},"5bd8":function(t,n,i){"use strict";var e=i("f4d2"),o=i.n(e);o.a},"6fbb":function(t,n,i){"use strict";i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return e}));var e={uniIcons:i("c46e").default},o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"container"},[t.token?e("v-uni-view",{staticStyle:{width:"100%"}},[e("v-uni-view",{staticClass:"info-group"},[e("v-uni-view",{staticClass:"avatar"},[e("v-uni-image",{staticClass:"avatar-icon",attrs:{src:i("2b06")}}),e("v-uni-view",{staticClass:"avatar-name"},[t._v(t._s(t.user_name))])],1)],1),e("v-uni-view",{staticClass:"details"},[e("v-uni-view",{staticClass:"details-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.gotoAnnounment.apply(void 0,arguments)}}},[e("uni-icons",{attrs:{type:"sound",size:"20"}}),e("v-uni-view",{staticClass:"details-info"},[t._v("公告信息")])],1),e("v-uni-view",{staticClass:"details-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.gotoFeedback.apply(void 0,arguments)}}},[e("uni-icons",{attrs:{type:"paperplane",size:"20"}}),e("v-uni-view",{staticClass:"details-info"},[t._v("我的反馈")])],1),e("v-uni-view",{staticClass:"logout"},[e("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.logout.apply(void 0,arguments)}}},[t._v("退出登录")])],1)],1)],1):t._e(),t.token?t._e():e("v-uni-view",[e("v-uni-view",{staticClass:"logo"},[e("v-uni-image",{staticClass:"logo-icon",attrs:{src:i("9ff4")}}),e("v-uni-view",{staticClass:"logo-text"},[t._v("线上博物馆")])],1),e("v-uni-view",{staticClass:"btn-group"},[e("v-uni-button",{staticClass:"btn",staticStyle:{"background-color":"#19ad17"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.wxLogin.apply(void 0,arguments)}}},[e("v-uni-image",{staticClass:"weixin-logo",attrs:{src:i("8f8d"),mode:""}}),e("v-uni-view",{staticClass:"btn-text"},[t._v("微信一键登录")])],1),e("v-uni-view",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goToLogin.apply(void 0,arguments)}}},[e("v-uni-view",{staticStyle:{color:"#777"}},[t._v("账号密码登录")])],1)],1)],1)],1)},a=[]},"78bd":function(t,n,i){"use strict";i("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{token:"",user_name:""}},onLoad:function(){this.token=uni.getStorageSync("token"),this.user_name=uni.getStorageSync("user_name")},onShow:function(){this.token=uni.getStorageSync("token"),this.user_name=uni.getStorageSync("user_name")},methods:{wxLogin:function(){console.log("微信一键登录")},goToLogin:function(){uni.navigateTo({url:"/subpkg/login/login"}),console.log("跳转到注册/登录页面")},goToSettings:function(){console.log("跳转到设置页面")},logout:function(){uni.setStorageSync("token",""),uni.navigateTo({url:"/subpkg/login/login"})},gotoAnnounment:function(){uni.navigateTo({url:"/subpkg/announment/announment"})},gotoFeedback:function(){uni.navigateTo({url:"/subpkg/feedback/feedback"})}}};n.default=e},"8f8d":function(t,n,i){t.exports=i.p+"static/img/weixin.ed8153ce.png"},9455:function(t,n,i){"use strict";i.r(n);var e=i("78bd"),o=i.n(e);for(var a in e)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(a);n["default"]=o.a},"9ff4":function(t,n,i){t.exports=i.p+"static/img/logo.1c4c57c0.png"},dac8:function(t,n,i){"use strict";i.r(n);var e=i("6fbb"),o=i("9455");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return o[t]}))}(a);i("5bd8");var c=i("f0c5"),s=Object(c["a"])(o["default"],e["b"],e["c"],!1,null,"2618e4cc",null,!1,e["a"],void 0);n["default"]=s.exports},f4d2:function(t,n,i){var e=i("3c1e");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("df817254",e,!0,{sourceMap:!1,shadowMode:!1})}}]);