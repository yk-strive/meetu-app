(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/vip"],{"510e":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r})},"5b13":function(t,e,n){"use strict";n.r(e);var o=n("d707"),r=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=r.a},"5d77":function(t,e,n){"use strict";(function(t){n("e1e3"),n("921b");o(n("66fd"));var e=o(n("8b28"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"618e":function(t,e,n){},"8b28":function(t,e,n){"use strict";n.r(e);var o=n("510e"),r=n("5b13");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("db85");var i=n("2877"),u=Object(i["a"])(r["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},d707:function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62"),a=i(n("c478"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){c(t,e,n[e])})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={name:"vip",computed:u({},(0,r.mapGetters)(["userInfo"])),mixins:[a.default],data:function(){return{vipProperty:null,selectPropertyItem:null,payOk:!1}},onLoad:function(){this.api_GetVipProperty()},watch:{payOk:function(t,e){this.payOk&&this.api_UserInfo()}},methods:{api_GetVipProperty:function(){var t=this;this.$http1.post("points/vip-property",{},{custom:{istoken:!1}}).then(function(e){t.vipProperty=e.data})},api_UserInfo:function(){var e=this;this.$http1.post("user/info").then(function(t){e.$store.dispatch("changeVal",{stateKey:"userInfo",newValue:t.data})}).catch(function(e){console.log(t("userinfo-err",e," at pages\\user\\vip.vue:110"))})},vipPropertyChange:function(t){this.selectPropertyItem=this.vipProperty[t]},vipPay:function(){var t=this;if(!this.selectPropertyItem)return t.modalShow("toastModal","请选择充值规格"),!1;this.$http1.post("order/create",{fee:t.selectPropertyItem.price,type:2,property:t.selectPropertyItem.id,pay_type:1,status:"unpaid"}).then(function(e){t.clog("下单",e),0===e.code?t.$http1.post("wxapay/pay-params",{order_sn:e.data.order_sn}).then(function(e){t.clog("支付",e),0==e.data.error?o.requestPayment({provider:"wxpay",orderInfo:e.data.params,success:function(e){t.payOk=!0,t.modalShow("toastModal","支付成功")},fail:function(e){t.modalShow("toastModal","158----"+e.errMsg)}}):t.modalShow("toastModal","162----"+e.msg)}).catch(function(n){t.modalShow("toastModal","165----"+e.msg)}):t.modalShow("toastModal","168----"+e.msg)})}}};e.default=s}).call(this,n("0de9")["default"],n("6e42")["default"])},db85:function(t,e,n){"use strict";var o=n("618e"),r=n.n(o);r.a}},[["5d77","common/runtime","common/vendor"]]]);