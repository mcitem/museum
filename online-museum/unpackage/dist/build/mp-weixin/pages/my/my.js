(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{"265f":function(n,e,t){},"57e1":function(n,e,t){"use strict";t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return o}));var o={uniIcons:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(t.bind(null,"c46e"))}},u=function(){var n=this.$createElement;this._self._c},a=[]},9455:function(n,e,t){"use strict";t.r(e);var o=t("fcae"),u=t.n(o);for(var a in o)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(a);e["default"]=u.a},b6ae:function(n,e,t){"use strict";(function(n,e){var o=t("4ea4");t("ae8f");o(t("66fd"));var u=o(t("dac8"));n.__webpack_require_UNI_MP_PLUGIN__=t,e(u.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},dac8:function(n,e,t){"use strict";t.r(e);var o=t("57e1"),u=t("9455");for(var a in u)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return u[n]}))}(a);t("fd85");var c=t("f0c5"),i=Object(c["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);e["default"]=i.exports},fcae:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{token:"",user_name:""}},onLoad:function(){this.token=n.getStorageSync("token"),this.user_name=n.getStorageSync("user_name")},onShow:function(){this.token=n.getStorageSync("token"),this.user_name=n.getStorageSync("user_name")},methods:{wxLogin:function(){console.log("微信一键登录")},goToLogin:function(){n.navigateTo({url:"/subpkg/login/login"}),console.log("跳转到注册/登录页面")},goToSettings:function(){console.log("跳转到设置页面")},logout:function(){n.setStorageSync("token",""),n.navigateTo({url:"/subpkg/login/login"})},gotoAnnounment:function(){n.navigateTo({url:"/subpkg/announment/announment"})},gotoFeedback:function(){n.navigateTo({url:"/subpkg/feedback/feedback"})}}};e.default=t}).call(this,t("543d")["default"])},fd85:function(n,e,t){"use strict";var o=t("265f"),u=t.n(o);u.a}},[["b6ae","common/runtime","common/vendor"]]]);