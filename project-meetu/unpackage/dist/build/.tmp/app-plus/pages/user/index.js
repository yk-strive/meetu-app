(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/index"],{"0034":function(t,n,e){"use strict";e.r(n);var a=e("096c"),r=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=r.a},"096c":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("2f62");function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},a=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.forEach(function(n){i(t,n,e[n])})}return t}function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var u={name:"userIndex",data:function(){return{actionList:[{imgUrl:"../../static/meetu-img/i3.png",text:"我的文字信号",navUrl:"./signal?navId=text"},{imgUrl:"../../static/meetu-img/i4.png",text:"我的语音信号",navUrl:"./signal?navId=voice"},{imgUrl:"../../static/meetu-img/i5.png",text:"我的星豆",navUrl:"./coin"},{imgUrl:"../../static/meetu-img/i6.png",text:"购买VIP",navUrl:"./vip"}]}},computed:r({},(0,a.mapGetters)(["userInfo"])),methods:{actionTapHandle:function(n){var e=this;"copyId"!=n?t.navigateTo({url:n,animationDuration:300,animationType:"fade-in"}):t.setClipboardData({data:e.userInfo.planetId,success:function(){}})}}};n.default=u}).call(this,e("6e42")["default"])},3673:function(t,n,e){"use strict";(function(t){e("e1e3"),e("921b");a(e("66fd"));var n=a(e("6ca5"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"603b":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return r})},"6ca5":function(t,n,e){"use strict";e.r(n);var a=e("603b"),r=e("0034");for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);e("caf4");var u=e("2877"),c=Object(u["a"])(r["default"],a["a"],a["b"],!1,null,null,null);n["default"]=c.exports},aa7f:function(t,n,e){},caf4:function(t,n,e){"use strict";var a=e("aa7f"),r=e.n(a);r.a}},[["3673","common/runtime","common/vendor"]]]);