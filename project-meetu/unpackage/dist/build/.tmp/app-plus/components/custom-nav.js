(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/custom-nav"],{2168:function(t,n,e){"use strict";e.r(n);var a=e("3ccd"),u=e("d993");for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);e("99fa");var c=e("2877"),r=Object(c["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=r.exports},"33d9":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar}},name:"custom-nav",computed:{style:function(){var t=this.StatusBar,n=this.CustomBar,e="height:".concat(n,"px;padding-top:").concat(t,"px;");return e}},props:{isBack:{type:[Boolean,String],default:!0},textRight:{type:String,default:""},textTitle:{type:String,default:""},tabsInfo:{type:Object,default:null}},methods:{BackPage:function(){t.navigateBack({delta:1})},rightHandle:function(){if(!this.textRight)return!1;this.$emit("right")},tabSelect:function(t){this.$emit("tabChange",t)}}};n.default=e}).call(this,e("6e42")["default"])},"3ccd":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=(t._self._c,t.textRight.indexOf("cuIcon"));t.$mp.data=Object.assign({},{$root:{g0:e}})},u=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})},"99fa":function(t,n,e){"use strict";var a=e("ef58"),u=e.n(a);u.a},d993:function(t,n,e){"use strict";e.r(n);var a=e("33d9"),u=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=u.a},ef58:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/custom-nav-create-component',
    {
        'components/custom-nav-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("2168"))
        })
    },
    [['components/custom-nav-create-component']]
]);
