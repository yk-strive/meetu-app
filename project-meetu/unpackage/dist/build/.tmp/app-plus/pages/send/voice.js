(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/send/voice"],{"10d5":function(e,t,n){"use strict";(function(e){n("e1e3"),n("921b");o(n("66fd"));var t=o(n("1b2d"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"1b2d":function(e,t,n){"use strict";n.r(t);var o=n("d594"),a=n("a1fa");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("c2a9");var c=n("2877"),r=Object(c["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=r.exports},"4f75":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n("a34a")),i=s(n("7687")),c=s(n("c478")),r=n("2f62");function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,o,a,i,c){try{var r=e[i](c),s=r.value}catch(u){return void n(u)}r.done?t(s):Promise.resolve(s).then(o,a)}function l(e){return function(){var t=this,n=arguments;return new Promise(function(o,a){var i=e.apply(t,n);function c(e){u(i,o,a,c,r,"next",e)}function r(e){u(i,o,a,c,r,"throw",e)}c(void 0)})}}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){f(e,t,n[t])})}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=e.getRecorderManager(),p=e.createInnerAudioContext();p.autoplay=!0;var h={name:"sendVoice",components:{},mixins:[c.default],data:function(){return{voiceCancel:!1,timer:null,intervalTime:0,isRecord:!1,isRecordEnd:!1,voiceTempPath:"",audioPlay:!1}},onLoad:function(){var e=this;p.onEnded(function(){console.log(o("播放结束"," at pages\\send\\voice.vue:56")),e.audioPlay=!1})},watch:{modalName:function(){var e=this;"toastModal"==this.modalName&&setTimeout(function(){e.modalName=""},1500)}},computed:d({},(0,r.mapGetters)(["token"]),{intIntervalTime:function(){return Math.round(this.intervalTime)}}),methods:{touchStartHandle:function(){var t=l(a.default.mark(function t(){var n;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this,"android"!=e.getSystemInfoSync().platform){t.next=6;break}return t.next=4,i.default.requestAndroidPermission("android.permission.RECORD_AUDIO");case 4:n=t.sent,1==n?(this.recordVoiceHandle(),this.voiceCancel=!1):(console.log(o("未给录音权限"," at pages\\send\\voice.vue:86")),this.voiceCancel=!0);case 6:"ios"==e.getSystemInfoSync().platform&&(i.default.judgeIosPermission("record")?(this.recordVoiceHandle(),this.voiceCancel=!1):this.voiceCancel=!0);case 7:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),recordVoiceHandle:function(){var e=this;if(e.voiceCancel)return!1;e.timer=setInterval(function(){e.intervalTime+=.5,e.intervalTime>=.5&&!e.isRecord&&(console.log(o("录音开始"," at pages\\send\\voice.vue:122")),e.intervalTime=0,e.isRecord=!0,v.start({format:"mp3"}))},500)},touchCancelHandle:function(){console.log(o("touchCancel"," at pages\\send\\voice.vue:132")),this.voiceCancel=!0},touchEndHandle:function(){var e=this;this.intervalTime<=.5&&(console.log(o("录音太短了"," at pages\\send\\voice.vue:138")),this.voiceCancel=!0),clearInterval(this.timer),this.isRecord&&(this.isRecordEnd=!0,setTimeout(function(){v.stop(),e.isRecord=!1,console.log(o(e.isRecord," at pages\\send\\voice.vue:148")),v.onStop(function(t){console.log(o("录音停止"+JSON.stringify(t)," at pages\\send\\voice.vue:150")),e.voiceTempPath=t.tempFilePath})},500))},resetVoiceHandle:function(){this.isRecordEnd=!1,this.audioPlay=!1,this.intervalTime=0,this.voiceTempPath=""},playVoiceHandle:function(){this.audioPlay?(p.pause(),this.audioPlay=!1):this.voiceTempPath&&(p.src=this.voiceTempPath,p.play(),this.audioPlay=!0,console.log(o(p.paused," at pages\\send\\voice.vue:174")))},sendVoiceHandle:function(){var t=this,n=this;e.uploadFile({url:"https://api.meetu.letwx.com/v2/sys/upload-voice?token="+n.token,filePath:n.voiceTempPath,name:"voicefile",formData:{name:"voicefile",formData:JSON.stringify({sort:0})},success:function(a){console.log(o("upVoiceok",JSON.parse(a.data)," at pages\\send\\voice.vue:192"));var i=JSON.parse(a.data).data.voiceUrl;n.$http1.post("signal/send",{type:2,content:i,seconds:n.intIntervalTime}).then(function(n){console.log(o("语音信号",n," at pages\\send\\voice.vue:199")),t.modalShow("toastModal","信号已发往星球"),getApp().globalData.sendSignal=!0,setTimeout(function(){e.navigateBack({detail:1})},1500)})},fail:function(e){console.log(o("err",e," at pages\\send\\voice.vue:210"))}})}},onHide:function(){console.log(o("onHide"," at pages\\send\\voice.vue:216"))}};t.default=h}).call(this,n("6e42")["default"],n("0de9")["default"])},"635a":function(e,t,n){},a1fa:function(e,t,n){"use strict";n.r(t);var o=n("4f75"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=a.a},c2a9:function(e,t,n){"use strict";var o=n("635a"),a=n.n(o);a.a},d594:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})}},[["10d5","common/runtime","common/vendor"]]]);