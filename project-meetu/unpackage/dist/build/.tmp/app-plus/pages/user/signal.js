(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/signal"],{"0f2f":function(t,n,a){"use strict";a.r(n);var i=a("5329"),e=a("a4b2");for(var s in e)"default"!==s&&function(t){a.d(n,t,function(){return e[t]})}(s);a("db69");var o=a("2877"),u=Object(o["a"])(e["default"],i["a"],i["b"],!1,null,null,null);n["default"]=u.exports},3483:function(t,n,a){"use strict";(function(t){a("e1e3"),a("921b");i(a("66fd"));var n=i(a("0f2f"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("6e42")["createPage"])},5329:function(t,n,a){"use strict";var i=function(){var t=this,n=t.$createElement,a=(t._self._c,t.__map(t.signalList,function(n,a){var i=a.split("-"),e=a.split("-"),s=a.split("-");return{$orig:t.__get_orig(n),g0:i,g1:e,g2:s}}));t.$mp.data=Object.assign({},{$root:{l0:a}})},e=[];a.d(n,"a",function(){return i}),a.d(n,"b",function(){return e})},8668:function(t,n,a){},a4b2:function(t,n,a){"use strict";a.r(n);var i=a("f6c9"),e=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(n,t,function(){return i[t]})}(s);n["default"]=e.a},db69:function(t,n,a){"use strict";var i=a("8668"),e=a.n(i);e.a},f6c9:function(t,n,a){"use strict";(function(t,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=s(a("c478"));function s(t){return t&&t.__esModule?t:{default:t}}var o=function(){return a.e("components/mix-pulldown-refresh/mix-pulldown-refresh").then(a.bind(null,"7eee"))},u=function(){return a.e("components/mix-load-more/mix-load-more").then(a.bind(null,"9cfe"))},l=!1,r=t.createInnerAudioContext();r.autoplay=!0;var f={name:"signal",components:{mixPulldownRefresh:o,mixLoadMore:u},mixins:[e.default],data:function(){return{CustomBar:this.CustomBar,enableScroll:!0,loadMoreStatus:0,showLoadMore:!1,refreshing:0,tabsInfo:{tabsList:[{id:"1",name:"文字信号",list:[],isload:!1},{id:"2",name:"语言信号",list:[],isload:!1}],tabCur:""},signalList:null,audioPlay:!1,audioPlayCur:-1}},onLoad:function(t){var n=this;r.onEnded(function(){console.log(i("播放结束"," at pages\\user\\signal.vue:87")),n.audioPlay=!1,n.audioPlayCur=-1}),this.tabsInfo.tabCur=this.tabsInfo.tabsList[0].id,t.navId&&(this.tabsInfo.tabCur="text"==t.navId?this.tabsInfo.tabsList[0].id:this.tabsInfo.tabsList[1].id),this.api_SignalList()},methods:{api_SignalList:function(){var t=this;this.$http1.post("user/signal-list",{type:t.tabsInfo.tabCur,page:t.page,pageSize:t.pageSize}).then(function(n){t.clog("signallist",n),"{}"!==JSON.stringify(n.data)&&(t.signalList?t.signalList=Object.assign(t.signalList,n.data):t.signalList=n.data)})},tabChange:function(t){var n=this;if(t.id===this.tabsInfo.tabCur)return!1;l&&(clearTimeout(l),l=!1),l=setTimeout(function(){n.signalList=null,n.tabsInfo.tabCur=t.id,n.api_SignalList()},200)},playVoice:function(t){this.audioPlay?(r.pause(),this.audioPlay=!1):t.content&&(r.src=t.content,r.play(),this.audioPlay=!0,this.audioPlayCur=t.id)}}};n.default=f}).call(this,a("6e42")["default"],a("0de9")["default"])}},[["3483","common/runtime","common/vendor"]]]);