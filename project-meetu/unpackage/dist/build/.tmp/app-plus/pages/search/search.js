(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{"03be":function(e,t,a){},"08a3":function(e,t,a){"use strict";a.r(t);var n=a("5726"),i=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);t["default"]=i.a},"3fbe":function(e,t,a){"use strict";(function(e){a("e1e3"),a("921b");n(a("66fd"));var t=n(a("a403"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},5726:function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(a("c478"));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){return a.e("meetu-ui/components/cu-modal").then(a.bind(null,"f079"))},c=e.createInnerAudioContext();c.autoplay=!0;var u={name:"serach",components:{cuModal:s},mixins:[i.default],data:function(){return{searchItemW:e.upx2px(74),searchItemH:e.upx2px(74),maxWNum:0,maxHNum:0,tempLeftNum:[],tempTopNum:[],modalName:"",isSearch:!0,searchValue:[],isNewSignal:!1,openItem:null,openNum:0,showActionTwo:!1,textareaValue:"",voicePlay:!1}},onLoad:function(){var e=this;c.onEnded(function(){console.log(n("播放结束"," at pages\\search\\search.vue:100")),e.voicePlay=!1})},onReady:function(){var t=this,a=e.createSelectorQuery();a.select(".search_view").boundingClientRect(function(e){t.maxWNum=e.width/t.searchItemW,t.maxHNum=e.height/t.searchItemW}).exec()},onShow:function(){this.initData()},watch:{isNewSignal:function(){this.isNewSignal&&this.api_SignalReceive()}},methods:{api_SignalReceive:function(){var e=this,t=this;this.$http1.post("signal/receive",{page:t.page}).then(function(a){if(e.isSearch=!1,a.data&&a.data.length>0){for(var n=0;n<a.data.length;n++)a.data[n].isDisplay=!0,e.randomLocationLeft(),e.randomLocationTop(),a.data[n].top=e.tempTopNum[n],a.data[n].left=e.tempLeftNum[n];t.searchValue=a.data,t.clog("搜寻结果++"+t.page,a),t.page++}else t.clog("没有搜寻结果++"+t.page),t.page=1,t.api_SignalReceive()})},api_SignalRefresh:function(){var e=this;console.log(n("刷星"," at pages\\search\\search.vue:158"));var t=this;this.$http1.post("signal/refresh").then(function(a){t.clog("刷新信号",a),a.data.number>=5?(e.page=1,e.isNewSignal=!0):(e.isNewSignal=!1,e.api_SignalReceive())}).catch(function(e){t.clog("刷新信号失败",e)})},api_SignalNeglect:function(e){var t=this;this.$http1.post("signal/neglect",{signal_id:e}).then(function(e){t.modalName=""})},api_SignalReply:function(e,t){var a=this;this.$http1.post("signal/reply",{signal_id:e,content:t}).then(function(e){a.textareaValue="",a.hideModal("hide"),a.showActionTwo=!1,setTimeout(function(){a.modalShow("toastModal","回复成功")},100)})},initData:function(){if(e.getStorageSync("searchInfo")){var t=JSON.parse(e.getStorageSync("searchInfo"));this.clog("存储的搜索信息",t),this.isSearch=!1,this.searchValue=t.searchValue,this.page=t.page}else this.api_SignalReceive()},saveData:function(){var t=this,a={searchValue:t.searchValue,page:t.page};e.setStorage({key:"searchInfo",data:JSON.stringify(a)})},randomLocationLeft:function(){var e=this.getRandomIntInclusive(1,this.maxWNum-1)*this.searchItemW;0===this.tempLeftNum.length?this.tempLeftNum.push(e):-1!=this.tempLeftNum.indexOf(e)?this.randomLocationLeft():this.tempLeftNum.push(e)},randomLocationTop:function(){var e=this.getRandomIntInclusive(1,this.maxHNum-1)*this.searchItemH;0===this.tempTopNum.length?this.tempTopNum.push(e):-1!=this.tempTopNum.indexOf(e)?this.randomLocationTop():this.tempTopNum.push(e)},getRandomIntInclusive:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},searchChange:function(){this.tempLeftNum=[],this.tempTopNum=[],this.searchValue=[],this.isSearch=!0,this.openNum=0,this.api_SignalRefresh()},openStarHandle:function(e,t){this.modalName="Modal",this.openItem=e,this.openNum+=1,this.searchValue[t].isDisplay=!1,this.openNum,this.searchValue.length},neglectHandle:function(){this.api_SignalNeglect(this.openItem.id)},hideModal:function(e){var t=this;e&&(this.modalName="",setTimeout(function(){"voice"==t.openItem.contenttype&&(c.paused||c.stop(),c.src="",t.voicePlay=!1),t.openItem=null},300))},playVoiceHandle:function(e){this.voicePlay?(c.pause(),this.voicePlay=!1):e&&(c.src=e,c.play(),this.voicePlay=!0)},actionTwoToggle:function(e){this.showActionTwo="open"==e},submitSendHandle:function(e){this.api_SignalReply(this.openItem.id,this.textareaValue)}},onHide:function(){console.log(n("----隐藏----"," at pages\\search\\search.vue:334")),this.saveData()},onBackPress:function(){console.log(n("----页面返回----"," at pages\\search\\search.vue:338"))},onUnload:function(){this.saveData(),console.log(n("----页面卸载----"," at pages\\search\\search.vue:342"))}};t.default=u}).call(this,a("6e42")["default"],a("0de9")["default"])},"63dc":function(e,t,a){"use strict";var n=a("03be"),i=a.n(n);i.a},a403:function(e,t,a){"use strict";a.r(t);var n=a("c415"),i=a("08a3");for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);a("63dc");var s=a("2877"),c=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=c.exports},c415:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},i=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})}},[["3fbe","common/runtime","common/vendor"]]]);