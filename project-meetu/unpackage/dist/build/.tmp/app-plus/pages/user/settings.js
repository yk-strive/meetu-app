(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/settings"],{3720:function(t,e,n){"use strict";(function(t){n("e1e3"),n("921b");a(n("66fd"));var e=a(n("fae2"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"690a":function(t,e,n){"use strict";var a=n("ac90"),o=n.n(a);o.a},7303:function(t,e,n){"use strict";n.r(e);var a=n("b738"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=o.a},ac90:function(t,e,n){},b738:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62"),u=r(n("c478"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){c(t,e,n[e])})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={name:"",mixins:[u.default],data:function(){return{actionList:[{text:"编辑个人资料",navUrl:"edit"},{text:"联系客服",navUrl:"content"},{text:"吐个槽",navUrl:"opinion"},{text:"关于我们",navUrl:"about"}]}},computed:i({},(0,o.mapState)({WS:function(t){return t.socketInfo.WS}})),methods:i({},(0,o.mapMutations)(["outApp"]),{api_OutApp:function(){var e=this;this.$http1.post("user/out-login").then(function(n){0==n.code?(e.WS.closeSocket(),e.outApp(),t.reLaunch({url:"../initial/wxoauth"})):e.modalShow("toastModal",n.msg)}).catch(function(t){console.log(a("退出err",t," at pages\\user\\settings.vue:70"))})},actionTapHandle:function(e){switch(e){case"edit":t.navigateTo({url:"../initial/personaldata?type=edit",animationDuration:300,animationType:"fade-in"});break;case"content":break;case"opinion":break;case"about":break;case"outApp":this.api_OutApp();break}}})};e.default=f}).call(this,n("6e42")["default"],n("0de9")["default"])},fa83:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},fae2:function(t,e,n){"use strict";n.r(e);var a=n("fa83"),o=n("7303");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("690a");var r=n("2877"),i=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports}},[["3720","common/runtime","common/vendor"]]]);