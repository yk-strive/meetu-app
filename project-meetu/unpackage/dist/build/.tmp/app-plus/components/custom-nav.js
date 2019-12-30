(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/custom-nav"],{2168:function(t,n,a){"use strict";a.r(n);var e=a("dac7"),u=a("d993");for(var i in u)"default"!==i&&function(t){a.d(n,t,function(){return u[t]})}(i);a("99fa");var r=a("2877"),c=Object(r["a"])(u["default"],e["a"],e["b"],!1,null,null,null);n["default"]=c.exports},"33d9":function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar}},name:"custom-nav",computed:{style:function(){var t=this.StatusBar,n=this.CustomBar,a="height:".concat(n,"px;padding-top:").concat(t,"px;");return a}},props:{isBack:{type:[Boolean,String],default:!0},textRight:{type:String,default:""},textTitle:{type:String,default:""},tabsInfo:{type:Object,default:null}},methods:{BackPage:function(){t.navigateBack({delta:1})},rightHandle:function(){if(!this.textRight)return!1;this.$emit("right")},tabSelect:function(t){this.$emit("tabChange",t)}}};n.default=a}).call(this,a("6e42")["default"])},"99fa":function(t,n,a){"use strict";var e=a("ef58"),u=a.n(e);u.a},d993:function(t,n,a){"use strict";a.r(n);var e=a("33d9"),u=a.n(e);for(var i in e)"default"!==i&&function(t){a.d(n,t,function(){return e[t]})}(i);n["default"]=u.a},dac7:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=(t._self._c,t.textRight.indexOf("cuIcon"));t.$mp.data=Object.assign({},{$root:{g0:a}})},u=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return u})},ef58:function(t,n,a){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/custom-nav-create-component',
    {
        'components/custom-nav-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("2168"))
        })
    },
    [['components/custom-nav-create-component']]
]);
