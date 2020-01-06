var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'app-custom-nav-bar'])
Z([[7],[3,'isBack']])
Z([3,'action'])
Z([[7],[3,'textTitle']])
Z([[7],[3,'tabsInfo']])
Z([[7],[3,'textRight']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z(z[0])
Z(z[0])
Z([3,'mix-refresh-content'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'pageTouchstart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'pageTouchmove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'pageTouchend']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'transform:'],[[2,'+'],[[2,'+'],[1,'translateY('],[[7],[3,'pageDeviation']]],[1,'px)']]],[1,';']],[[2,'+'],[[2,'+'],[1,'transition:'],[[2,'+'],[[7],[3,'pageTransition']],[1,'s']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[2,'+'],[1,'calc(100vh - '],[[7],[3,'pageTop']]],[1,'px)']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'max-height:'],[[2,'+'],[[2,'+'],[1,'calc(100vh - '],[[7],[3,'pageTop']]],[1,'px)']]],[1,';']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'w-picker-cnt']],[[2,'?:'],[[7],[3,'showPicker']],[1,'show'],[1,'']]]])
Z([[2,'=='],[[7],[3,'mode']],[1,'date']])
Z([[2,'=='],[[7],[3,'mode']],[1,'selector']])
Z([[2,'=='],[[7],[3,'mode']],[1,'region']])
Z([3,'__e'])
Z(z[4])
Z(z[4])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'bindChange']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchStart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'touchEnd']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'itemHeight']])
Z([[7],[3,'pickVal']])
Z([[2,'!'],[[7],[3,'hideArea']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'custom-modal'])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'cu-modal Modal']],[[2,'?:'],[[2,'=='],[[7],[3,'modalName']],[1,'Modal']],[1,'show'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'hideModal']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'modal'])
Z(z[1])
Z([[4],[[5],[[5],[1,'cu-modal bottom-modal']],[[2,'?:'],[[2,'=='],[[7],[3,'modalName']],[1,'bottomModal']],[1,'show'],[1,'']]]])
Z(z[3])
Z([3,'bottomModal'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg_page_3'])
Z([3,'chatPage'])
Z([3,'__l'])
Z([1,true])
Z([[2,'+'],[[2,'+'],[1,'与 '],[[6],[[7],[3,'chatUserInfo']],[3,'nickname']]],[1,' 的对话']])
Z([3,'1'])
Z([3,'__e'])
Z(z[6])
Z([3,'panel-scroll-chat-box'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'InputBlur']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'scrolltoupper']],[[4],[[5],[[4],[[5],[[5],[1,'loadHistoryChatInfo']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'scrollToView']])
Z([[7],[3,'scrollTop']])
Z(z[3])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[6],[[7],[3,'style']],[3,'contentViewHeight']],[1,'px']]],[1,';']],[[2,'+'],[[2,'+'],[1,'margin-top:'],[[2,'+'],[[6],[[7],[3,'style']],[3,'scrollViewMarginTop']],[1,'px']]],[1,';']]])
Z([[2,'&&'],[[2,'&&'],[[2,'<'],[[6],[[7],[3,'chatInfoList']],[3,'length']],[1,6]],[[7],[3,'page']]],[[2,'>='],[[7],[3,'page']],[1,1]]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'chatInfoList']])
Z(z[15])
Z([[4],[[5],[[5],[1,'cu-item']],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'item']],[3,'user_id']],[[6],[[7],[3,'userInfo']],[3,'id']]],[1,'self'],[1,'']]]])
Z([[2,'+'],[1,'chat-item'],[[6],[[7],[3,'item']],[3,'id']]])
Z([[6],[[7],[3,'item']],[3,'is_show_time']])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'user_id']],[[6],[[7],[3,'userInfo']],[3,'id']]])
Z([3,'main'])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'send_err']],[[6],[[7],[3,'item']],[3,'send_err']]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,1]],[[6],[[7],[3,'item']],[3,'is_signal']]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,1]],[[2,'!'],[[6],[[7],[3,'item']],[3,'is_signal']]]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,3]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,2]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'user_id']],[[6],[[7],[3,'userInfo']],[3,'id']]])
Z(z[2])
Z(z[6])
Z(z[6])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^hideModal']],[[4],[[5],[[4],[[5],[1,'hideModal']]]]]]]],[[4],[[5],[[5],[1,'^dialogConfirm']],[[4],[[5],[[4],[[5],[1,'dialogConfirm']]]]]]]]])
Z([[7],[3,'dialogSureText']])
Z([[7],[3,'dialogText']])
Z([[7],[3,'modalName']])
Z([[7],[3,'toastText']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg_page_3'])
Z([3,'chatListPage'])
Z([3,'__l'])
Z([1,true])
Z([3,'消息列表'])
Z([3,'1'])
Z(z[2])
Z([3,'__e'])
Z(z[7])
Z([3,'panel-content vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^refresh']],[[4],[[5],[[4],[[5],[1,'onPulldownReresh']]]]]]]],[[4],[[5],[[5],[1,'^setEnableScroll']],[[4],[[5],[[4],[[5],[1,'setEnableScroll']]]]]]]]])
Z([3,'mixPulldownRefresh'])
Z([[7],[3,'CustomBar']])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
Z(z[7])
Z([3,'panel-scroll-box'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'loadMore']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'enableScroll']])
Z(z[2])
Z([[7],[3,'showLoadMore']])
Z([[7],[3,'loadMoreStatus']])
Z([[2,'+'],[[2,'+'],[1,'3'],[1,',']],[1,'2']])
Z(z[2])
Z([[7],[3,'modalName']])
Z([[7],[3,'toastText']])
Z([3,'4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg_page_1'])
Z([3,'homePage'])
Z([3,'home_bottom_act'])
Z([[7],[3,'showSendToast']])
Z([3,'__e'])
Z([3,'action_item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'linkAction']],[[4],[[5],[1,'chatList']]]]]]]]]]])
Z([[2,'>'],[[7],[3,'unread']],[1,0]])
Z([[7],[3,'userNumber']])
Z([3,'__l'])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'^hideModal']],[[4],[[5],[[4],[[5],[1,'hideModal']]]]]]]]])
Z([[7],[3,'modalName']])
Z([[7],[3,'toastText']])
Z([3,'1'])
Z([[4],[[5],[1,'bottomModal']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg_page_2'])
Z([3,'personaldata_page'])
Z([3,'__l'])
Z([[2,'?:'],[[7],[3,'isEditInfo']],[1,true],[1,false]])
Z([[2,'?:'],[[7],[3,'isEditInfo']],[1,'修改个人信息'],[1,'']])
Z([3,'1'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'submitInfo']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'form_list'])
Z([[2,'!='],[[6],[[7],[3,'selectList']],[3,'length']],[1,0]])
Z(z[2])
Z(z[6])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'onConfirm']]]]]]]]])
Z([3,'selector'])
Z([[7],[3,'sex']])
Z(z[14])
Z([[7],[3,'selectList']])
Z([3,'#f00'])
Z([3,'2'])
Z(z[2])
Z(z[6])
Z(z[12])
Z([1,false])
Z(z[13])
Z([3,'date'])
Z([[6],[[7],[3,'pickerBirthdayInfo']],[3,'checkArr']])
Z([1,true])
Z([3,'2030'])
Z(z[25])
Z([3,'1959'])
Z(z[18])
Z([3,'3'])
Z([[6],[[7],[3,'pickerRegionInfo']],[3,'checkValue']])
Z(z[2])
Z(z[6])
Z(z[12])
Z(z[13])
Z([3,'region'])
Z([[6],[[7],[3,'pickerRegionInfo']],[3,'checkArr']])
Z(z[27])
Z(z[38])
Z(z[27])
Z([3,'4'])
Z(z[2])
Z([[7],[3,'modalName']])
Z([[7],[3,'toastText']])
Z([3,'5'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg_page_1'])
Z([3,'searchPage'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[7],[3,'isSearch']])
Z(z[2])
Z([3,'__e'])
Z(z[7])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^hideModal']],[[4],[[5],[[4],[[5],[1,'hideModal']]]]]]]],[[4],[[5],[[5],[1,'^dialogConfirm']],[[4],[[5],[[4],[[5],[1,'dialogConfirm']]]]]]]]])
Z([[7],[3,'dialogSureText']])
Z([[7],[3,'dialogText']])
Z([[7],[3,'modalName']])
Z([[7],[3,'toastText']])
Z([3,'2'])
Z([[4],[[5],[1,'modal']]])
Z([3,'modal'])
Z([3,'action_one wh-100 padding-lg'])
Z([[2,'=='],[[6],[[7],[3,'openItem']],[3,'isvip']],[1,1]])
Z([3,'star_info text-sm text-letter-df text-left'])
Z([[2,'=='],[[6],[[7],[3,'openItem']],[3,'type']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'openItem']],[3,'type']],[1,3]])
Z([[2,'=='],[[6],[[7],[3,'openItem']],[3,'type']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg_page_1'])
Z([3,'sendTextPage'])
Z([3,'__l'])
Z([1,true])
Z([3,'发布文字信号'])
Z([3,'1'])
Z(z[2])
Z([[7],[3,'modalName']])
Z([[7],[3,'toastText']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg_page_1'])
Z([3,'sendVoicePage'])
Z([3,'__l'])
Z([1,true])
Z([3,'发布语音信号'])
Z([3,'1'])
Z([3,'voice_action'])
Z([[2,'!'],[[7],[3,'isRecordEnd']]])
Z([[7],[3,'isRecordEnd']])
Z(z[2])
Z([[7],[3,'modalName']])
Z([[7],[3,'toastText']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg_page_3'])
Z([3,'coinPage'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^right']],[[4],[[5],[[4],[[5],[1,'navRightHandle']]]]]]]]])
Z([1,true])
Z([3,'星豆记录'])
Z([3,'我的星豆'])
Z([3,'1'])
Z(z[2])
Z(z[3])
Z(z[3])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^hideModal']],[[4],[[5],[[4],[[5],[1,'hideModal']]]]]]]],[[4],[[5],[[5],[1,'^dialogConfirm']],[[4],[[5],[[4],[[5],[1,'dialogConfirm']]]]]]]]])
Z([[7],[3,'dialogSureText']])
Z([[7],[3,'dialogText']])
Z([[7],[3,'modalName']])
Z([[7],[3,'toastText']])
Z([3,'2'])
Z([[4],[[5],[1,'bottomModal']]])
Z([3,'bottomModal'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'pointsPropery']])
Z(z[20])
Z(z[3])
Z([3,'action_item flex-df'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'properyHandle']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'pointsPropery']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[2,'>'],[[6],[[7],[3,'item']],[3,'giving']],[1,0]])
Z(z[27])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg_page_3'])
Z([3,'coinrecordPage'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^tabChange']],[[4],[[5],[[4],[[5],[1,'tabChange']]]]]]]]])
Z([1,true])
Z([[7],[3,'tabsInfo']])
Z([3,'1'])
Z(z[3])
Z([3,'coinrecord_wrap wrap_heihgt'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'loadMore']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[5])
Z(z[2])
Z([[7],[3,'showLoadMore']])
Z([[7],[3,'loadMoreStatus']])
Z([3,'2'])
Z(z[2])
Z([[7],[3,'modalName']])
Z([[7],[3,'toastText']])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg_page_3'])
Z([3,'userIndexPage'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^right']],[[4],[[5],[[4],[[5],[[5],[1,'actionTapHandle']],[[4],[[5],[1,'./settings']]]]]]]]]]])
Z([1,true])
Z([3,'cuIcon-settings'])
Z([3,'1'])
Z([[6],[[7],[3,'userInfo']],[3,'isvip']])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg_page_3'])
Z([3,'settingsPage'])
Z([3,'__l'])
Z([1,true])
Z([3,'设置'])
Z([3,'1'])
Z(z[2])
Z([[7],[3,'modalName']])
Z([[7],[3,'toastText']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg_page_3'])
Z([3,'signalPage'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^tabChange']],[[4],[[5],[[4],[[5],[1,'tabChange']]]]]]]]])
Z([1,true])
Z([[7],[3,'tabsInfo']])
Z([3,'1'])
Z(z[3])
Z([3,'panel-scroll-box'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'loadMore']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'enableScroll']])
Z([3,'cu-timeline bg-transparent'])
Z([3,'key'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[13])
Z([3,'cindex'])
Z([3,'citem'])
Z([[6],[[7],[3,'item']],[3,'$orig']])
Z([3,'id'])
Z([3,'cu-item not-icon'])
Z([[2,'=='],[[6],[[7],[3,'citem']],[3,'type']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'citem']],[3,'type']],[1,2]])
Z(z[2])
Z([[7],[3,'showLoadMore']])
Z([[7],[3,'loadMoreStatus']])
Z([3,'2'])
Z(z[2])
Z(z[3])
Z(z[3])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^hideModal']],[[4],[[5],[[4],[[5],[1,'hideModal']]]]]]]],[[4],[[5],[[5],[1,'^dialogConfirm']],[[4],[[5],[[4],[[5],[1,'dialogConfirm']]]]]]]]])
Z([[7],[3,'dialogText']])
Z([[7],[3,'modalName']])
Z([[7],[3,'toastText']])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg_page_3'])
Z([3,'vipPage'])
Z([3,'__l'])
Z([1,true])
Z([3,'升级VIP'])
Z([3,'1'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'vipProperty']])
Z([3,'key'])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'rechargeItem margin-bottom-lg']],[[2,'?:'],[[2,'=='],[[2,'%'],[[2,'+'],[[7],[3,'index']],[1,1]],[1,3]],[1,0]],[1,''],[1,'margin-right-xxl']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'vipPropertyChange']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'border:'],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'selectPropertyItem']],[3,'id']],[[6],[[7],[3,'item']],[3,'id']]],[1,'2rpx solid #D04795'],[1,'2rpx solid #FFFFFF']]],[1,';']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'id']],[1,1]])
Z(z[2])
Z(z[10])
Z(z[10])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^hideModal']],[[4],[[5],[[4],[[5],[1,'hideModal']]]]]]]],[[4],[[5],[[5],[1,'^dialogConfirm']],[[4],[[5],[[4],[[5],[1,'dialogConfirm']]]]]]]]])
Z([[7],[3,'dialogSureText']])
Z([[7],[3,'dialogText']])
Z([[7],[3,'modalName']])
Z([[7],[3,'toastText']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/custom-nav.wxml','./components/mix-load-more/mix-load-more.wxml','./components/mix-pulldown-refresh/mix-pulldown-refresh.wxml','./components/w-picker/w-picker.wxml','./meetu-ui/components/cu-modal.wxml','./pages/chat/chat.wxml','./pages/chat/list.wxml','./pages/home/index.wxml','./pages/initial/personaldata.wxml','./pages/initial/wxoauth.wxml','./pages/search/search.wxml','./pages/send/text.wxml','./pages/send/voice.wxml','./pages/user/coin.wxml','./pages/user/coinrecord.wxml','./pages/user/index.wxml','./pages/user/settings.wxml','./pages/user/signal.wxml','./pages/user/vip.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,1,e,s,gg)){xC.wxVkey=1
}
var oD=_n('view')
_rz(z,oD,'class',2,e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,3,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(oD,cF)
if(_oz(z,4,e,s,gg)){cF.wxVkey=1
}
var hG=_v()
_(oD,hG)
if(_oz(z,5,e,s,gg)){hG.wxVkey=1
}
fE.wxXCkey=1
cF.wxXCkey=1
hG.wxXCkey=1
_(oB,oD)
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oJ=_mz(z,'view',['bindtouchend',0,'bindtouchmove',1,'bindtouchstart',1,'class',2,'data-event-opts',3,'style',4],[],e,s,gg)
var lK=_n('slot')
_(oJ,lK)
_(r,oJ)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var tM=_n('view')
_rz(z,tM,'class',0,e,s,gg)
var eN=_v()
_(tM,eN)
if(_oz(z,1,e,s,gg)){eN.wxVkey=1
}
var bO=_v()
_(tM,bO)
if(_oz(z,2,e,s,gg)){bO.wxVkey=1
}
var oP=_v()
_(tM,oP)
if(_oz(z,3,e,s,gg)){oP.wxVkey=1
var xQ=_mz(z,'picker-view',['bindchange',4,'bindtouchend',1,'bindtouchstart',2,'data-event-opts',3,'indicatorStyle',4,'value',5],[],e,s,gg)
var oR=_v()
_(xQ,oR)
if(_oz(z,10,e,s,gg)){oR.wxVkey=1
}
oR.wxXCkey=1
_(oP,xQ)
}
eN.wxXCkey=1
bO.wxXCkey=1
oP.wxXCkey=1
_(r,tM)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var cT=_n('view')
_rz(z,cT,'class',0,e,s,gg)
var hU=_mz(z,'view',['catchtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var oV=_n('slot')
_rz(z,oV,'name',4,e,s,gg)
_(hU,oV)
_(cT,hU)
var cW=_mz(z,'view',['catchtap',5,'class',1,'data-event-opts',2],[],e,s,gg)
var oX=_n('slot')
_rz(z,oX,'name',8,e,s,gg)
_(cW,oX)
_(cT,cW)
_(r,cT)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var aZ=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var t1=_mz(z,'custom-nav',['bind:__l',2,'isBack',1,'textTitle',2,'vueId',3],[],e,s,gg)
_(aZ,t1)
var e2=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltoupper',6,'bindtap',1,'class',2,'data-event-opts',3,'scrollIntoView',4,'scrollTop',5,'scrollWithAnimation',6,'style',7],[],e,s,gg)
var b3=_v()
_(e2,b3)
if(_oz(z,14,e,s,gg)){b3.wxVkey=1
}
var o4=_v()
_(e2,o4)
var x5=function(f7,o6,c8,gg){
var o0=_mz(z,'view',['class',19,'id',1],[],f7,o6,gg)
var cAB=_v()
_(o0,cAB)
if(_oz(z,21,f7,o6,gg)){cAB.wxVkey=1
}
var oBB=_v()
_(o0,oBB)
if(_oz(z,22,f7,o6,gg)){oBB.wxVkey=1
}
var aDB=_n('view')
_rz(z,aDB,'class',23,f7,o6,gg)
var tEB=_v()
_(aDB,tEB)
if(_oz(z,24,f7,o6,gg)){tEB.wxVkey=1
}
var eFB=_v()
_(aDB,eFB)
if(_oz(z,25,f7,o6,gg)){eFB.wxVkey=1
}
var bGB=_v()
_(aDB,bGB)
if(_oz(z,26,f7,o6,gg)){bGB.wxVkey=1
}
var oHB=_v()
_(aDB,oHB)
if(_oz(z,27,f7,o6,gg)){oHB.wxVkey=1
}
var xIB=_v()
_(aDB,xIB)
if(_oz(z,28,f7,o6,gg)){xIB.wxVkey=1
}
tEB.wxXCkey=1
eFB.wxXCkey=1
bGB.wxXCkey=1
oHB.wxXCkey=1
xIB.wxXCkey=1
_(o0,aDB)
var lCB=_v()
_(o0,lCB)
if(_oz(z,29,f7,o6,gg)){lCB.wxVkey=1
}
cAB.wxXCkey=1
oBB.wxXCkey=1
lCB.wxXCkey=1
_(c8,o0)
return c8
}
o4.wxXCkey=2
_2z(z,17,x5,e,s,gg,o4,'item','index','index')
b3.wxXCkey=1
_(aZ,e2)
var oJB=_mz(z,'cu-modal',['bind:__l',30,'bind:dialogConfirm',1,'bind:hideModal',2,'data-event-opts',3,'dialogSureText',4,'dialogText',5,'modalName',6,'toastText',7,'vueId',8],[],e,s,gg)
_(aZ,oJB)
_(r,aZ)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var cLB=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var hMB=_mz(z,'custom-nav',['bind:__l',2,'isBack',1,'textTitle',2,'vueId',3],[],e,s,gg)
_(cLB,hMB)
var oNB=_mz(z,'mix-pulldown-refresh',['bind:__l',6,'bind:refresh',1,'bind:setEnableScroll',2,'class',3,'data-event-opts',4,'data-ref',5,'top',6,'vueId',7,'vueSlots',8],[],e,s,gg)
var cOB=_mz(z,'scroll-view',['bindscrolltolower',15,'class',1,'data-event-opts',2,'scrollY',3],[],e,s,gg)
var oPB=_mz(z,'mix-load-more',['bind:__l',19,'show',1,'status',2,'vueId',3],[],e,s,gg)
_(cOB,oPB)
_(oNB,cOB)
_(cLB,oNB)
var lQB=_mz(z,'cu-modal',['bind:__l',23,'modalName',1,'toastText',2,'vueId',3],[],e,s,gg)
_(cLB,lQB)
_(r,cLB)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var tSB=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var eTB=_n('view')
_rz(z,eTB,'class',2,e,s,gg)
var bUB=_v()
_(eTB,bUB)
if(_oz(z,3,e,s,gg)){bUB.wxVkey=1
}
var xWB=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],e,s,gg)
var oXB=_v()
_(xWB,oXB)
if(_oz(z,7,e,s,gg)){oXB.wxVkey=1
}
oXB.wxXCkey=1
_(eTB,xWB)
var oVB=_v()
_(eTB,oVB)
if(_oz(z,8,e,s,gg)){oVB.wxVkey=1
}
bUB.wxXCkey=1
oVB.wxXCkey=1
_(tSB,eTB)
var fYB=_mz(z,'cu-modal',['bind:__l',9,'bind:hideModal',1,'data-event-opts',2,'modalName',3,'toastText',4,'vueId',5,'vueSlots',6],[],e,s,gg)
_(tSB,fYB)
_(r,tSB)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var h1B=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var o2B=_mz(z,'custom-nav',['bind:__l',2,'isBack',1,'textTitle',2,'vueId',3],[],e,s,gg)
_(h1B,o2B)
var c3B=_mz(z,'form',['action',-1,'bindsubmit',6,'data-event-opts',1],[],e,s,gg)
var o4B=_n('view')
_rz(z,o4B,'class',8,e,s,gg)
var l5B=_v()
_(o4B,l5B)
if(_oz(z,9,e,s,gg)){l5B.wxVkey=1
var a6B=_mz(z,'w-picker',['bind:__l',10,'bind:confirm',1,'class',2,'data-event-opts',3,'data-ref',4,'defaultVal',5,'mode',6,'selectList',7,'themeColor',8,'vueId',9],[],e,s,gg)
_(l5B,a6B)
}
var t7B=_mz(z,'w-picker',['bind:__l',20,'bind:confirm',1,'class',2,'current',3,'data-event-opts',4,'data-ref',5,'defaultVal',6,'disabledAfter',7,'endYear',8,'mode',9,'startYear',10,'themeColor',11,'vueId',12],[],e,s,gg)
_(o4B,t7B)
var e8B=_mz(z,'w-picker',['areaCode',33,'bind:__l',1,'bind:confirm',2,'class',3,'data-event-opts',4,'data-ref',5,'defaultVal',6,'hideArea',7,'mode',8,'timeout',9,'vueId',10],[],e,s,gg)
_(o4B,e8B)
l5B.wxXCkey=1
l5B.wxXCkey=3
_(c3B,o4B)
_(h1B,c3B)
var b9B=_mz(z,'cu-modal',['bind:__l',44,'modalName',1,'toastText',2,'vueId',3],[],e,s,gg)
_(h1B,b9B)
_(r,h1B)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var oBC=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var cDC=_mz(z,'custom-nav',['bind:__l',2,'isBack',1,'vueId',2],[],e,s,gg)
_(oBC,cDC)
var fCC=_v()
_(oBC,fCC)
if(_oz(z,5,e,s,gg)){fCC.wxVkey=1
}
var hEC=_mz(z,'cu-modal',['bind:__l',6,'bind:dialogConfirm',1,'bind:hideModal',2,'data-event-opts',3,'dialogSureText',4,'dialogText',5,'modalName',6,'toastText',7,'vueId',8,'vueSlots',9],[],e,s,gg)
var oFC=_n('view')
_rz(z,oFC,'slot',16,e,s,gg)
var cGC=_n('view')
_rz(z,cGC,'class',17,e,s,gg)
var oHC=_v()
_(cGC,oHC)
if(_oz(z,18,e,s,gg)){oHC.wxVkey=1
}
var lIC=_n('view')
_rz(z,lIC,'class',19,e,s,gg)
var aJC=_v()
_(lIC,aJC)
if(_oz(z,20,e,s,gg)){aJC.wxVkey=1
}
var tKC=_v()
_(lIC,tKC)
if(_oz(z,21,e,s,gg)){tKC.wxVkey=1
}
var eLC=_v()
_(lIC,eLC)
if(_oz(z,22,e,s,gg)){eLC.wxVkey=1
}
aJC.wxXCkey=1
tKC.wxXCkey=1
eLC.wxXCkey=1
_(cGC,lIC)
oHC.wxXCkey=1
_(oFC,cGC)
_(hEC,oFC)
_(oBC,hEC)
fCC.wxXCkey=1
_(r,oBC)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var oNC=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var xOC=_mz(z,'custom-nav',['bind:__l',2,'isBack',1,'textTitle',2,'vueId',3],[],e,s,gg)
_(oNC,xOC)
var oPC=_mz(z,'cu-modal',['bind:__l',6,'modalName',1,'toastText',2,'vueId',3],[],e,s,gg)
_(oNC,oPC)
_(r,oNC)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var cRC=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var hSC=_mz(z,'custom-nav',['bind:__l',2,'isBack',1,'textTitle',2,'vueId',3],[],e,s,gg)
_(cRC,hSC)
var oTC=_n('view')
_rz(z,oTC,'class',6,e,s,gg)
var cUC=_v()
_(oTC,cUC)
if(_oz(z,7,e,s,gg)){cUC.wxVkey=1
}
var oVC=_v()
_(oTC,oVC)
if(_oz(z,8,e,s,gg)){oVC.wxVkey=1
}
cUC.wxXCkey=1
oVC.wxXCkey=1
_(cRC,oTC)
var lWC=_mz(z,'cu-modal',['bind:__l',9,'modalName',1,'toastText',2,'vueId',3],[],e,s,gg)
_(cRC,lWC)
_(r,cRC)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var tYC=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var eZC=_mz(z,'custom-nav',['bind:__l',2,'bind:right',1,'data-event-opts',2,'isBack',3,'textRight',4,'textTitle',5,'vueId',6],[],e,s,gg)
_(tYC,eZC)
var b1C=_mz(z,'cu-modal',['bind:__l',9,'bind:dialogConfirm',1,'bind:hideModal',2,'data-event-opts',3,'dialogSureText',4,'dialogText',5,'modalName',6,'toastText',7,'vueId',8,'vueSlots',9],[],e,s,gg)
var o2C=_n('view')
_rz(z,o2C,'slot',19,e,s,gg)
var x3C=_v()
_(o2C,x3C)
var o4C=function(c6C,f5C,h7C,gg){
var c9C=_mz(z,'view',['catchtap',24,'class',1,'data-event-opts',2],[],c6C,f5C,gg)
var o0C=_v()
_(c9C,o0C)
if(_oz(z,27,c6C,f5C,gg)){o0C.wxVkey=1
}
var lAD=_v()
_(c9C,lAD)
if(_oz(z,28,c6C,f5C,gg)){lAD.wxVkey=1
}
o0C.wxXCkey=1
lAD.wxXCkey=1
_(h7C,c9C)
return h7C
}
x3C.wxXCkey=2
_2z(z,22,o4C,e,s,gg,x3C,'item','index','index')
_(b1C,o2C)
_(tYC,b1C)
_(r,tYC)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var tCD=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var eDD=_mz(z,'custom-nav',['bind:__l',2,'bind:tabChange',1,'data-event-opts',2,'isBack',3,'tabsInfo',4,'vueId',5],[],e,s,gg)
_(tCD,eDD)
var bED=_mz(z,'scroll-view',['bindscrolltolower',8,'class',1,'data-event-opts',2,'scrollY',3],[],e,s,gg)
var oFD=_mz(z,'mix-load-more',['bind:__l',12,'show',1,'status',2,'vueId',3],[],e,s,gg)
_(bED,oFD)
_(tCD,bED)
var xGD=_mz(z,'cu-modal',['bind:__l',16,'modalName',1,'toastText',2,'vueId',3],[],e,s,gg)
_(tCD,xGD)
_(r,tCD)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var fID=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var hKD=_mz(z,'custom-nav',['bind:__l',2,'bind:right',1,'data-event-opts',2,'isBack',3,'textRight',4,'vueId',5],[],e,s,gg)
_(fID,hKD)
var cJD=_v()
_(fID,cJD)
if(_oz(z,8,e,s,gg)){cJD.wxVkey=1
}
cJD.wxXCkey=1
_(r,fID)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var cMD=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var oND=_mz(z,'custom-nav',['bind:__l',2,'isBack',1,'textTitle',2,'vueId',3],[],e,s,gg)
_(cMD,oND)
var lOD=_mz(z,'cu-modal',['bind:__l',6,'modalName',1,'toastText',2,'vueId',3],[],e,s,gg)
_(cMD,lOD)
_(r,cMD)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var tQD=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var eRD=_mz(z,'custom-nav',['bind:__l',2,'bind:tabChange',1,'data-event-opts',2,'isBack',3,'tabsInfo',4,'vueId',5],[],e,s,gg)
_(tQD,eRD)
var bSD=_mz(z,'scroll-view',['bindscrolltolower',8,'class',1,'data-event-opts',2,'scrollY',3],[],e,s,gg)
var oTD=_n('view')
_rz(z,oTD,'class',12,e,s,gg)
var xUD=_v()
_(oTD,xUD)
var oVD=function(cXD,fWD,hYD,gg){
var c1D=_v()
_(hYD,c1D)
var o2D=function(a4D,l3D,t5D,gg){
var b7D=_n('view')
_rz(z,b7D,'class',21,a4D,l3D,gg)
var o8D=_v()
_(b7D,o8D)
if(_oz(z,22,a4D,l3D,gg)){o8D.wxVkey=1
}
var x9D=_v()
_(b7D,x9D)
if(_oz(z,23,a4D,l3D,gg)){x9D.wxVkey=1
}
o8D.wxXCkey=1
x9D.wxXCkey=1
_(t5D,b7D)
return t5D
}
c1D.wxXCkey=2
_2z(z,19,o2D,cXD,fWD,gg,c1D,'citem','cindex','id')
return hYD
}
xUD.wxXCkey=2
_2z(z,15,oVD,e,s,gg,xUD,'item','key','key')
var o0D=_mz(z,'mix-load-more',['bind:__l',24,'show',1,'status',2,'vueId',3],[],e,s,gg)
_(oTD,o0D)
_(bSD,oTD)
_(tQD,bSD)
var fAE=_mz(z,'cu-modal',['bind:__l',28,'bind:dialogConfirm',1,'bind:hideModal',2,'data-event-opts',3,'dialogText',4,'modalName',5,'toastText',6,'vueId',7],[],e,s,gg)
_(tQD,fAE)
_(r,tQD)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var hCE=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var oDE=_mz(z,'custom-nav',['bind:__l',2,'isBack',1,'textTitle',2,'vueId',3],[],e,s,gg)
_(hCE,oDE)
var cEE=_v()
_(hCE,cEE)
var oFE=function(aHE,lGE,tIE,gg){
var bKE=_mz(z,'view',['catchtap',10,'class',1,'data-event-opts',2,'style',3],[],aHE,lGE,gg)
var oLE=_v()
_(bKE,oLE)
if(_oz(z,14,aHE,lGE,gg)){oLE.wxVkey=1
}
oLE.wxXCkey=1
_(tIE,bKE)
return tIE
}
cEE.wxXCkey=2
_2z(z,8,oFE,e,s,gg,cEE,'item','index','key')
var xME=_mz(z,'cu-modal',['bind:__l',15,'bind:dialogConfirm',1,'bind:hideModal',2,'data-event-opts',3,'dialogSureText',4,'dialogText',5,'modalName',6,'toastText',7,'vueId',8],[],e,s,gg)
_(hCE,xME)
_(r,hCE)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/initial/wxoauth","pages/initial/personaldata","pages/home/index","pages/send/text","pages/send/voice","pages/search/search","pages/chat/list","pages/chat/chat","pages/user/index","pages/user/signal","pages/user/coin","pages/user/vip","pages/user/coinrecord","pages/user/settings"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"Meet U","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#DADADA","navigationStyle":"custom"},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"MeetU","compilerVersion":"2.4.6","usingComponents":{"custom-nav":"/components/custom-nav","cu-modal":"/meetu-ui/components/cu-modal"}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/custom-nav.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/custom-nav.wxml']=$gwx('./components/custom-nav.wxml');

__wxAppCode__['components/mix-load-more/mix-load-more.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/mix-load-more/mix-load-more.wxml']=$gwx('./components/mix-load-more/mix-load-more.wxml');

__wxAppCode__['components/mix-pulldown-refresh/mix-pulldown-refresh.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/mix-pulldown-refresh/mix-pulldown-refresh.wxml']=$gwx('./components/mix-pulldown-refresh/mix-pulldown-refresh.wxml');

__wxAppCode__['components/w-picker/w-picker.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/w-picker/w-picker.wxml']=$gwx('./components/w-picker/w-picker.wxml');

__wxAppCode__['meetu-ui/components/cu-modal.json']={"usingComponents":{},"component":true};
__wxAppCode__['meetu-ui/components/cu-modal.wxml']=$gwx('./meetu-ui/components/cu-modal.wxml');

__wxAppCode__['pages/chat/chat.json']={"bounce":"none","usingComponents":{"custom-nav":"/components/custom-nav","cu-modal":"/meetu-ui/components/cu-modal"}};
__wxAppCode__['pages/chat/chat.wxml']=$gwx('./pages/chat/chat.wxml');

__wxAppCode__['pages/chat/list.json']={"bounce":"none","usingComponents":{"custom-nav":"/components/custom-nav","cu-modal":"/meetu-ui/components/cu-modal","mix-pulldown-refresh":"/components/mix-pulldown-refresh/mix-pulldown-refresh","mix-load-more":"/components/mix-load-more/mix-load-more"}};
__wxAppCode__['pages/chat/list.wxml']=$gwx('./pages/chat/list.wxml');

__wxAppCode__['pages/home/index.json']={"usingComponents":{"cu-modal":"/meetu-ui/components/cu-modal"}};
__wxAppCode__['pages/home/index.wxml']=$gwx('./pages/home/index.wxml');

__wxAppCode__['pages/initial/personaldata.json']={"usingComponents":{"custom-nav":"/components/custom-nav","cu-modal":"/meetu-ui/components/cu-modal","w-picker":"/components/w-picker/w-picker"}};
__wxAppCode__['pages/initial/personaldata.wxml']=$gwx('./pages/initial/personaldata.wxml');

__wxAppCode__['pages/initial/wxoauth.json']={"usingComponents":{}};
__wxAppCode__['pages/initial/wxoauth.wxml']=$gwx('./pages/initial/wxoauth.wxml');

__wxAppCode__['pages/search/search.json']={"usingComponents":{"custom-nav":"/components/custom-nav","cu-modal":"/meetu-ui/components/cu-modal"}};
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');

__wxAppCode__['pages/send/text.json']={"usingComponents":{"custom-nav":"/components/custom-nav","cu-modal":"/meetu-ui/components/cu-modal"}};
__wxAppCode__['pages/send/text.wxml']=$gwx('./pages/send/text.wxml');

__wxAppCode__['pages/send/voice.json']={"usingComponents":{"custom-nav":"/components/custom-nav","cu-modal":"/meetu-ui/components/cu-modal"}};
__wxAppCode__['pages/send/voice.wxml']=$gwx('./pages/send/voice.wxml');

__wxAppCode__['pages/user/coin.json']={"usingComponents":{"custom-nav":"/components/custom-nav","cu-modal":"/meetu-ui/components/cu-modal"}};
__wxAppCode__['pages/user/coin.wxml']=$gwx('./pages/user/coin.wxml');

__wxAppCode__['pages/user/coinrecord.json']={"onReachBottomDistance":20,"usingComponents":{"custom-nav":"/components/custom-nav","cu-modal":"/meetu-ui/components/cu-modal","mix-load-more":"/components/mix-load-more/mix-load-more"}};
__wxAppCode__['pages/user/coinrecord.wxml']=$gwx('./pages/user/coinrecord.wxml');

__wxAppCode__['pages/user/index.json']={"usingComponents":{"custom-nav":"/components/custom-nav"}};
__wxAppCode__['pages/user/index.wxml']=$gwx('./pages/user/index.wxml');

__wxAppCode__['pages/user/settings.json']={"usingComponents":{"custom-nav":"/components/custom-nav","cu-modal":"/meetu-ui/components/cu-modal"}};
__wxAppCode__['pages/user/settings.wxml']=$gwx('./pages/user/settings.wxml');

__wxAppCode__['pages/user/signal.json']={"usingComponents":{"custom-nav":"/components/custom-nav","cu-modal":"/meetu-ui/components/cu-modal","mix-pulldown-refresh":"/components/mix-pulldown-refresh/mix-pulldown-refresh","mix-load-more":"/components/mix-load-more/mix-load-more"}};
__wxAppCode__['pages/user/signal.wxml']=$gwx('./pages/user/signal.wxml');

__wxAppCode__['pages/user/vip.json']={"usingComponents":{"custom-nav":"/components/custom-nav","cu-modal":"/meetu-ui/components/cu-modal"}};
__wxAppCode__['pages/user/vip.wxml']=$gwx('./pages/user/vip.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"047c":function(e,t,n){"use strict";var o=n("f711"),r=n.n(o);r.a},"1f49":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("66fd")),a=n("2f62");function u(e){return e&&e.__esModule?e:{default:e}}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={onLaunch:function(){var t=this;console.log(e("App Launch"," at App.vue:9")),o.getSystemInfo({success:function(e){r.default.prototype.StatusBar=e.statusBarHeight,"android"==e.platform?r.default.prototype.CustomBar=e.statusBarHeight+50:r.default.prototype.CustomBar=e.statusBarHeight+45,r.default.prototype.SystemInfo={platform:e.platform,windowWidth:e.windowWidth,windowHeight:e.windowHeight,screenWidth:e.screenWidth,screenHeight:e.screenHeight}}});var n=o.getStorageInfoSync();-1!=n.keys.indexOf("token")&&o.getStorageSync("token")?o.getStorage({key:"token",success:function(e){t.changeVal({stateKey:"token",newValue:e.data}),t.changeVal({stateKey:"dailyLogin",newValue:o.getStorageSync("dailyLogin")}),-1!=n.keys.indexOf("oldUser")&&o.getStorageSync("oldUser")?o.redirectTo({url:"pages/home/index"}):o.redirectTo({url:"pages/initial/personaldata"})}}):o.redirectTo({url:"pages/initial/wxoauth"})},onShow:function(){},onHide:function(){},computed:c({},(0,a.mapGetters)(["token"])),methods:c({},(0,a.mapMutations)(["changeVal"])),globalData:{sendSignal:!1}};t.default=l}).call(this,n("0de9")["default"],n("6e42")["default"])},9485:function(e,t,n){"use strict";n.r(t);var o=n("1f49"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=r.a},d858:function(e,t,n){"use strict";n.r(t);var o=n("9485");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("047c");var a,u,c=n("2877"),i=Object(c["a"])(o["default"],a,u,!1,null,null,null);t["default"]=i.exports},e4c0:function(e,t,n){"use strict";(function(e){n("e1e3"),n("921b");var t=u(n("66fd")),o=u(n("8c62")),r=u(n("d858")),a=n("aabe");function u(e){return e&&e.__esModule?e:{default:e}}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default.prototype.$store=o.default,t.default.config.productionTip=!1,t.default.prototype.$http1=a.http_v1;var l=function(){return n.e("components/custom-nav").then(n.bind(null,"2168"))};t.default.component("custom-nav",l);var f=function(){return n.e("meetu-ui/components/cu-modal").then(n.bind(null,"f079"))};t.default.component("cu-modal",f),r.default.mpType="app";var d=new t.default(c({store:o.default},r.default));e(d).$mount()}).call(this,n("6e42")["createApp"])},f711:function(e,t,n){}},[["e4c0","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var r, o, a = t[0], l = t[1], c = t[2], s = 0, m = []; s < a.length; s++) {
      o = a[s], u[o] && m.push(u[o][0]), u[o] = 0;
    }

    for (r in l) {
      Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
    }

    p && p(t);

    while (m.length) {
      m.shift()();
    }

    return i.push.apply(i, c || []), n();
  }

  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], r = !0, o = 1; o < n.length; o++) {
        var a = n[o];
        0 !== u[a] && (r = !1);
      }

      r && (i.splice(t--, 1), e = l(l.s = n[0]));
    }

    return e;
  }

  var r = {},
      o = {
    "common/runtime": 0
  },
      u = {
    "common/runtime": 0
  },
      i = [];

  function a(e) {
    return l.p + "" + e + ".js";
  }

  function l(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, l), n.l = !0, n.exports;
  }

  l.e = function (e) {
    var t = [],
        n = {
      "components/custom-nav": 1,
      "meetu-ui/components/cu-modal": 1,
      "components/w-picker/w-picker": 1,
      "components/mix-load-more/mix-load-more": 1,
      "components/mix-pulldown-refresh/mix-pulldown-refresh": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise(function (t, n) {
      for (var r = ({
        "components/custom-nav": "components/custom-nav",
        "meetu-ui/components/cu-modal": "meetu-ui/components/cu-modal",
        "components/w-picker/w-picker": "components/w-picker/w-picker",
        "components/mix-load-more/mix-load-more": "components/mix-load-more/mix-load-more",
        "components/mix-pulldown-refresh/mix-pulldown-refresh": "components/mix-pulldown-refresh/mix-pulldown-refresh"
      }[e] || e) + ".wxss", u = l.p + r, i = document.getElementsByTagName("link"), a = 0; a < i.length; a++) {
        var c = i[a],
            s = c.getAttribute("data-href") || c.getAttribute("href");
        if ("stylesheet" === c.rel && (s === r || s === u)) return t();
      }

      var m = document.getElementsByTagName("style");

      for (a = 0; a < m.length; a++) {
        c = m[a], s = c.getAttribute("data-href");
        if (s === r || s === u) return t();
      }

      var p = document.createElement("link");
      p.rel = "stylesheet", p.type = "text/css", p.onload = t, p.onerror = function (t) {
        var r = t && t.target && t.target.src || u,
            i = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        i.request = r, delete o[e], p.parentNode.removeChild(p), n(i);
      }, p.href = u;
      var f = document.getElementsByTagName("head")[0];
      f.appendChild(p);
    }).then(function () {
      o[e] = 0;
    }));
    var r = u[e];
    if (0 !== r) if (r) t.push(r[2]);else {
      var i = new Promise(function (t, n) {
        r = u[e] = [t, n];
      });
      t.push(r[2] = i);
      var c,
          s = document.createElement("script");
      s.charset = "utf-8", s.timeout = 120, l.nc && s.setAttribute("nonce", l.nc), s.src = a(e), c = function c(t) {
        s.onerror = s.onload = null, clearTimeout(m);
        var n = u[e];

        if (0 !== n) {
          if (n) {
            var r = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                i = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + o + ")");
            i.type = r, i.request = o, n[1](i);
          }

          u[e] = void 0;
        }
      };
      var m = setTimeout(function () {
        c({
          type: "timeout",
          target: s
        });
      }, 12e4);
      s.onerror = s.onload = c, document.head.appendChild(s);
    }
    return Promise.all(t);
  }, l.m = e, l.c = r, l.d = function (e, t, n) {
    l.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, l.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.t = function (e, t) {
    if (1 & t && (e = l(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (l.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      l.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return n;
  }, l.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return l.d(t, "a", t), t;
  }, l.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, l.p = "/", l.oe = function (e) {
    throw console.error(e), e;
  };
  var c = global["webpackJsonp"] = global["webpackJsonp"] || [],
      s = c.push.bind(c);
  c.push = t, c = c.slice();

  for (var m = 0; m < c.length; m++) {
    t(c[m]);
  }

  var p = s;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0251":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[[[{label:"东城区",value:"110101"},{label:"西城区",value:"110102"},{label:"朝阳区",value:"110105"},{label:"丰台区",value:"110106"},{label:"石景山区",value:"110107"},{label:"海淀区",value:"110108"},{label:"门头沟区",value:"110109"},{label:"房山区",value:"110111"},{label:"通州区",value:"110112"},{label:"顺义区",value:"110113"},{label:"昌平区",value:"110114"},{label:"大兴区",value:"110115"},{label:"怀柔区",value:"110116"},{label:"平谷区",value:"110117"},{label:"密云区",value:"110118"},{label:"延庆区",value:"110119"}]],[[{label:"和平区",value:"120101"},{label:"河东区",value:"120102"},{label:"河西区",value:"120103"},{label:"南开区",value:"120104"},{label:"河北区",value:"120105"},{label:"红桥区",value:"120106"},{label:"东丽区",value:"120110"},{label:"西青区",value:"120111"},{label:"津南区",value:"120112"},{label:"北辰区",value:"120113"},{label:"武清区",value:"120114"},{label:"宝坻区",value:"120115"},{label:"滨海新区",value:"120116"},{label:"宁河区",value:"120117"},{label:"静海区",value:"120118"},{label:"蓟州区",value:"120119"}]],[[{label:"长安区",value:"130102"},{label:"桥西区",value:"130104"},{label:"新华区",value:"130105"},{label:"井陉矿区",value:"130107"},{label:"裕华区",value:"130108"},{label:"藁城区",value:"130109"},{label:"鹿泉区",value:"130110"},{label:"栾城区",value:"130111"},{label:"井陉县",value:"130121"},{label:"正定县",value:"130123"},{label:"行唐县",value:"130125"},{label:"灵寿县",value:"130126"},{label:"高邑县",value:"130127"},{label:"深泽县",value:"130128"},{label:"赞皇县",value:"130129"},{label:"无极县",value:"130130"},{label:"平山县",value:"130131"},{label:"元氏县",value:"130132"},{label:"赵县",value:"130133"},{label:"石家庄高新技术产业开发区",value:"130171"},{label:"石家庄循环化工园区",value:"130172"},{label:"辛集市",value:"130181"},{label:"晋州市",value:"130183"},{label:"新乐市",value:"130184"}],[{label:"路南区",value:"130202"},{label:"路北区",value:"130203"},{label:"古冶区",value:"130204"},{label:"开平区",value:"130205"},{label:"丰南区",value:"130207"},{label:"丰润区",value:"130208"},{label:"曹妃甸区",value:"130209"},{label:"滦县",value:"130223"},{label:"滦南县",value:"130224"},{label:"乐亭县",value:"130225"},{label:"迁西县",value:"130227"},{label:"玉田县",value:"130229"},{label:"唐山市芦台经济技术开发区",value:"130271"},{label:"唐山市汉沽管理区",value:"130272"},{label:"唐山高新技术产业开发区",value:"130273"},{label:"河北唐山海港经济开发区",value:"130274"},{label:"遵化市",value:"130281"},{label:"迁安市",value:"130283"}],[{label:"海港区",value:"130302"},{label:"山海关区",value:"130303"},{label:"北戴河区",value:"130304"},{label:"抚宁区",value:"130306"},{label:"青龙满族自治县",value:"130321"},{label:"昌黎县",value:"130322"},{label:"卢龙县",value:"130324"},{label:"秦皇岛市经济技术开发区",value:"130371"},{label:"北戴河新区",value:"130372"}],[{label:"邯山区",value:"130402"},{label:"丛台区",value:"130403"},{label:"复兴区",value:"130404"},{label:"峰峰矿区",value:"130406"},{label:"肥乡区",value:"130407"},{label:"永年区",value:"130408"},{label:"临漳县",value:"130423"},{label:"成安县",value:"130424"},{label:"大名县",value:"130425"},{label:"涉县",value:"130426"},{label:"磁县",value:"130427"},{label:"邱县",value:"130430"},{label:"鸡泽县",value:"130431"},{label:"广平县",value:"130432"},{label:"馆陶县",value:"130433"},{label:"魏县",value:"130434"},{label:"曲周县",value:"130435"},{label:"邯郸经济技术开发区",value:"130471"},{label:"邯郸冀南新区",value:"130473"},{label:"武安市",value:"130481"}],[{label:"桥东区",value:"130502"},{label:"桥西区",value:"130503"},{label:"邢台县",value:"130521"},{label:"临城县",value:"130522"},{label:"内丘县",value:"130523"},{label:"柏乡县",value:"130524"},{label:"隆尧县",value:"130525"},{label:"任县",value:"130526"},{label:"南和县",value:"130527"},{label:"宁晋县",value:"130528"},{label:"巨鹿县",value:"130529"},{label:"新河县",value:"130530"},{label:"广宗县",value:"130531"},{label:"平乡县",value:"130532"},{label:"威县",value:"130533"},{label:"清河县",value:"130534"},{label:"临西县",value:"130535"},{label:"河北邢台经济开发区",value:"130571"},{label:"南宫市",value:"130581"},{label:"沙河市",value:"130582"}],[{label:"竞秀区",value:"130602"},{label:"莲池区",value:"130606"},{label:"满城区",value:"130607"},{label:"清苑区",value:"130608"},{label:"徐水区",value:"130609"},{label:"涞水县",value:"130623"},{label:"阜平县",value:"130624"},{label:"定兴县",value:"130626"},{label:"唐县",value:"130627"},{label:"高阳县",value:"130628"},{label:"容城县",value:"130629"},{label:"涞源县",value:"130630"},{label:"望都县",value:"130631"},{label:"安新县",value:"130632"},{label:"易县",value:"130633"},{label:"曲阳县",value:"130634"},{label:"蠡县",value:"130635"},{label:"顺平县",value:"130636"},{label:"博野县",value:"130637"},{label:"雄县",value:"130638"},{label:"保定高新技术产业开发区",value:"130671"},{label:"保定白沟新城",value:"130672"},{label:"涿州市",value:"130681"},{label:"定州市",value:"130682"},{label:"安国市",value:"130683"},{label:"高碑店市",value:"130684"}],[{label:"桥东区",value:"130702"},{label:"桥西区",value:"130703"},{label:"宣化区",value:"130705"},{label:"下花园区",value:"130706"},{label:"万全区",value:"130708"},{label:"崇礼区",value:"130709"},{label:"张北县",value:"130722"},{label:"康保县",value:"130723"},{label:"沽源县",value:"130724"},{label:"尚义县",value:"130725"},{label:"蔚县",value:"130726"},{label:"阳原县",value:"130727"},{label:"怀安县",value:"130728"},{label:"怀来县",value:"130730"},{label:"涿鹿县",value:"130731"},{label:"赤城县",value:"130732"},{label:"张家口市高新技术产业开发区",value:"130771"},{label:"张家口市察北管理区",value:"130772"},{label:"张家口市塞北管理区",value:"130773"}],[{label:"双桥区",value:"130802"},{label:"双滦区",value:"130803"},{label:"鹰手营子矿区",value:"130804"},{label:"承德县",value:"130821"},{label:"兴隆县",value:"130822"},{label:"滦平县",value:"130824"},{label:"隆化县",value:"130825"},{label:"丰宁满族自治县",value:"130826"},{label:"宽城满族自治县",value:"130827"},{label:"围场满族蒙古族自治县",value:"130828"},{label:"承德高新技术产业开发区",value:"130871"},{label:"平泉市",value:"130881"}],[{label:"新华区",value:"130902"},{label:"运河区",value:"130903"},{label:"沧县",value:"130921"},{label:"青县",value:"130922"},{label:"东光县",value:"130923"},{label:"海兴县",value:"130924"},{label:"盐山县",value:"130925"},{label:"肃宁县",value:"130926"},{label:"南皮县",value:"130927"},{label:"吴桥县",value:"130928"},{label:"献县",value:"130929"},{label:"孟村回族自治县",value:"130930"},{label:"河北沧州经济开发区",value:"130971"},{label:"沧州高新技术产业开发区",value:"130972"},{label:"沧州渤海新区",value:"130973"},{label:"泊头市",value:"130981"},{label:"任丘市",value:"130982"},{label:"黄骅市",value:"130983"},{label:"河间市",value:"130984"}],[{label:"安次区",value:"131002"},{label:"广阳区",value:"131003"},{label:"固安县",value:"131022"},{label:"永清县",value:"131023"},{label:"香河县",value:"131024"},{label:"大城县",value:"131025"},{label:"文安县",value:"131026"},{label:"大厂回族自治县",value:"131028"},{label:"廊坊经济技术开发区",value:"131071"},{label:"霸州市",value:"131081"},{label:"三河市",value:"131082"}],[{label:"桃城区",value:"131102"},{label:"冀州区",value:"131103"},{label:"枣强县",value:"131121"},{label:"武邑县",value:"131122"},{label:"武强县",value:"131123"},{label:"饶阳县",value:"131124"},{label:"安平县",value:"131125"},{label:"故城县",value:"131126"},{label:"景县",value:"131127"},{label:"阜城县",value:"131128"},{label:"河北衡水经济开发区",value:"131171"},{label:"衡水滨湖新区",value:"131172"},{label:"深州市",value:"131182"}]],[[{label:"小店区",value:"140105"},{label:"迎泽区",value:"140106"},{label:"杏花岭区",value:"140107"},{label:"尖草坪区",value:"140108"},{label:"万柏林区",value:"140109"},{label:"晋源区",value:"140110"},{label:"清徐县",value:"140121"},{label:"阳曲县",value:"140122"},{label:"娄烦县",value:"140123"},{label:"山西转型综合改革示范区",value:"140171"},{label:"古交市",value:"140181"}],[{label:"城区",value:"140202"},{label:"矿区",value:"140203"},{label:"南郊区",value:"140211"},{label:"新荣区",value:"140212"},{label:"阳高县",value:"140221"},{label:"天镇县",value:"140222"},{label:"广灵县",value:"140223"},{label:"灵丘县",value:"140224"},{label:"浑源县",value:"140225"},{label:"左云县",value:"140226"},{label:"大同县",value:"140227"},{label:"山西大同经济开发区",value:"140271"}],[{label:"城区",value:"140302"},{label:"矿区",value:"140303"},{label:"郊区",value:"140311"},{label:"平定县",value:"140321"},{label:"盂县",value:"140322"},{label:"山西阳泉经济开发区",value:"140371"}],[{label:"城区",value:"140402"},{label:"郊区",value:"140411"},{label:"长治县",value:"140421"},{label:"襄垣县",value:"140423"},{label:"屯留县",value:"140424"},{label:"平顺县",value:"140425"},{label:"黎城县",value:"140426"},{label:"壶关县",value:"140427"},{label:"长子县",value:"140428"},{label:"武乡县",value:"140429"},{label:"沁县",value:"140430"},{label:"沁源县",value:"140431"},{label:"山西长治高新技术产业园区",value:"140471"},{label:"潞城市",value:"140481"}],[{label:"城区",value:"140502"},{label:"沁水县",value:"140521"},{label:"阳城县",value:"140522"},{label:"陵川县",value:"140524"},{label:"泽州县",value:"140525"},{label:"高平市",value:"140581"}],[{label:"朔城区",value:"140602"},{label:"平鲁区",value:"140603"},{label:"山阴县",value:"140621"},{label:"应县",value:"140622"},{label:"右玉县",value:"140623"},{label:"怀仁县",value:"140624"},{label:"山西朔州经济开发区",value:"140671"}],[{label:"榆次区",value:"140702"},{label:"榆社县",value:"140721"},{label:"左权县",value:"140722"},{label:"和顺县",value:"140723"},{label:"昔阳县",value:"140724"},{label:"寿阳县",value:"140725"},{label:"太谷县",value:"140726"},{label:"祁县",value:"140727"},{label:"平遥县",value:"140728"},{label:"灵石县",value:"140729"},{label:"介休市",value:"140781"}],[{label:"盐湖区",value:"140802"},{label:"临猗县",value:"140821"},{label:"万荣县",value:"140822"},{label:"闻喜县",value:"140823"},{label:"稷山县",value:"140824"},{label:"新绛县",value:"140825"},{label:"绛县",value:"140826"},{label:"垣曲县",value:"140827"},{label:"夏县",value:"140828"},{label:"平陆县",value:"140829"},{label:"芮城县",value:"140830"},{label:"永济市",value:"140881"},{label:"河津市",value:"140882"}],[{label:"忻府区",value:"140902"},{label:"定襄县",value:"140921"},{label:"五台县",value:"140922"},{label:"代县",value:"140923"},{label:"繁峙县",value:"140924"},{label:"宁武县",value:"140925"},{label:"静乐县",value:"140926"},{label:"神池县",value:"140927"},{label:"五寨县",value:"140928"},{label:"岢岚县",value:"140929"},{label:"河曲县",value:"140930"},{label:"保德县",value:"140931"},{label:"偏关县",value:"140932"},{label:"五台山风景名胜区",value:"140971"},{label:"原平市",value:"140981"}],[{label:"尧都区",value:"141002"},{label:"曲沃县",value:"141021"},{label:"翼城县",value:"141022"},{label:"襄汾县",value:"141023"},{label:"洪洞县",value:"141024"},{label:"古县",value:"141025"},{label:"安泽县",value:"141026"},{label:"浮山县",value:"141027"},{label:"吉县",value:"141028"},{label:"乡宁县",value:"141029"},{label:"大宁县",value:"141030"},{label:"隰县",value:"141031"},{label:"永和县",value:"141032"},{label:"蒲县",value:"141033"},{label:"汾西县",value:"141034"},{label:"侯马市",value:"141081"},{label:"霍州市",value:"141082"}],[{label:"离石区",value:"141102"},{label:"文水县",value:"141121"},{label:"交城县",value:"141122"},{label:"兴县",value:"141123"},{label:"临县",value:"141124"},{label:"柳林县",value:"141125"},{label:"石楼县",value:"141126"},{label:"岚县",value:"141127"},{label:"方山县",value:"141128"},{label:"中阳县",value:"141129"},{label:"交口县",value:"141130"},{label:"孝义市",value:"141181"},{label:"汾阳市",value:"141182"}]],[[{label:"新城区",value:"150102"},{label:"回民区",value:"150103"},{label:"玉泉区",value:"150104"},{label:"赛罕区",value:"150105"},{label:"土默特左旗",value:"150121"},{label:"托克托县",value:"150122"},{label:"和林格尔县",value:"150123"},{label:"清水河县",value:"150124"},{label:"武川县",value:"150125"},{label:"呼和浩特金海工业园区",value:"150171"},{label:"呼和浩特经济技术开发区",value:"150172"}],[{label:"东河区",value:"150202"},{label:"昆都仑区",value:"150203"},{label:"青山区",value:"150204"},{label:"石拐区",value:"150205"},{label:"白云鄂博矿区",value:"150206"},{label:"九原区",value:"150207"},{label:"土默特右旗",value:"150221"},{label:"固阳县",value:"150222"},{label:"达尔罕茂明安联合旗",value:"150223"},{label:"包头稀土高新技术产业开发区",value:"150271"}],[{label:"海勃湾区",value:"150302"},{label:"海南区",value:"150303"},{label:"乌达区",value:"150304"}],[{label:"红山区",value:"150402"},{label:"元宝山区",value:"150403"},{label:"松山区",value:"150404"},{label:"阿鲁科尔沁旗",value:"150421"},{label:"巴林左旗",value:"150422"},{label:"巴林右旗",value:"150423"},{label:"林西县",value:"150424"},{label:"克什克腾旗",value:"150425"},{label:"翁牛特旗",value:"150426"},{label:"喀喇沁旗",value:"150428"},{label:"宁城县",value:"150429"},{label:"敖汉旗",value:"150430"}],[{label:"科尔沁区",value:"150502"},{label:"科尔沁左翼中旗",value:"150521"},{label:"科尔沁左翼后旗",value:"150522"},{label:"开鲁县",value:"150523"},{label:"库伦旗",value:"150524"},{label:"奈曼旗",value:"150525"},{label:"扎鲁特旗",value:"150526"},{label:"通辽经济技术开发区",value:"150571"},{label:"霍林郭勒市",value:"150581"}],[{label:"东胜区",value:"150602"},{label:"康巴什区",value:"150603"},{label:"达拉特旗",value:"150621"},{label:"准格尔旗",value:"150622"},{label:"鄂托克前旗",value:"150623"},{label:"鄂托克旗",value:"150624"},{label:"杭锦旗",value:"150625"},{label:"乌审旗",value:"150626"},{label:"伊金霍洛旗",value:"150627"}],[{label:"海拉尔区",value:"150702"},{label:"扎赉诺尔区",value:"150703"},{label:"阿荣旗",value:"150721"},{label:"莫力达瓦达斡尔族自治旗",value:"150722"},{label:"鄂伦春自治旗",value:"150723"},{label:"鄂温克族自治旗",value:"150724"},{label:"陈巴尔虎旗",value:"150725"},{label:"新巴尔虎左旗",value:"150726"},{label:"新巴尔虎右旗",value:"150727"},{label:"满洲里市",value:"150781"},{label:"牙克石市",value:"150782"},{label:"扎兰屯市",value:"150783"},{label:"额尔古纳市",value:"150784"},{label:"根河市",value:"150785"}],[{label:"临河区",value:"150802"},{label:"五原县",value:"150821"},{label:"磴口县",value:"150822"},{label:"乌拉特前旗",value:"150823"},{label:"乌拉特中旗",value:"150824"},{label:"乌拉特后旗",value:"150825"},{label:"杭锦后旗",value:"150826"}],[{label:"集宁区",value:"150902"},{label:"卓资县",value:"150921"},{label:"化德县",value:"150922"},{label:"商都县",value:"150923"},{label:"兴和县",value:"150924"},{label:"凉城县",value:"150925"},{label:"察哈尔右翼前旗",value:"150926"},{label:"察哈尔右翼中旗",value:"150927"},{label:"察哈尔右翼后旗",value:"150928"},{label:"四子王旗",value:"150929"},{label:"丰镇市",value:"150981"}],[{label:"乌兰浩特市",value:"152201"},{label:"阿尔山市",value:"152202"},{label:"科尔沁右翼前旗",value:"152221"},{label:"科尔沁右翼中旗",value:"152222"},{label:"扎赉特旗",value:"152223"},{label:"突泉县",value:"152224"}],[{label:"二连浩特市",value:"152501"},{label:"锡林浩特市",value:"152502"},{label:"阿巴嘎旗",value:"152522"},{label:"苏尼特左旗",value:"152523"},{label:"苏尼特右旗",value:"152524"},{label:"东乌珠穆沁旗",value:"152525"},{label:"西乌珠穆沁旗",value:"152526"},{label:"太仆寺旗",value:"152527"},{label:"镶黄旗",value:"152528"},{label:"正镶白旗",value:"152529"},{label:"正蓝旗",value:"152530"},{label:"多伦县",value:"152531"},{label:"乌拉盖管委会",value:"152571"}],[{label:"阿拉善左旗",value:"152921"},{label:"阿拉善右旗",value:"152922"},{label:"额济纳旗",value:"152923"},{label:"内蒙古阿拉善经济开发区",value:"152971"}]],[[{label:"和平区",value:"210102"},{label:"沈河区",value:"210103"},{label:"大东区",value:"210104"},{label:"皇姑区",value:"210105"},{label:"铁西区",value:"210106"},{label:"苏家屯区",value:"210111"},{label:"浑南区",value:"210112"},{label:"沈北新区",value:"210113"},{label:"于洪区",value:"210114"},{label:"辽中区",value:"210115"},{label:"康平县",value:"210123"},{label:"法库县",value:"210124"},{label:"新民市",value:"210181"}],[{label:"中山区",value:"210202"},{label:"西岗区",value:"210203"},{label:"沙河口区",value:"210204"},{label:"甘井子区",value:"210211"},{label:"旅顺口区",value:"210212"},{label:"金州区",value:"210213"},{label:"普兰店区",value:"210214"},{label:"长海县",value:"210224"},{label:"瓦房店市",value:"210281"},{label:"庄河市",value:"210283"}],[{label:"铁东区",value:"210302"},{label:"铁西区",value:"210303"},{label:"立山区",value:"210304"},{label:"千山区",value:"210311"},{label:"台安县",value:"210321"},{label:"岫岩满族自治县",value:"210323"},{label:"海城市",value:"210381"}],[{label:"新抚区",value:"210402"},{label:"东洲区",value:"210403"},{label:"望花区",value:"210404"},{label:"顺城区",value:"210411"},{label:"抚顺县",value:"210421"},{label:"新宾满族自治县",value:"210422"},{label:"清原满族自治县",value:"210423"}],[{label:"平山区",value:"210502"},{label:"溪湖区",value:"210503"},{label:"明山区",value:"210504"},{label:"南芬区",value:"210505"},{label:"本溪满族自治县",value:"210521"},{label:"桓仁满族自治县",value:"210522"}],[{label:"元宝区",value:"210602"},{label:"振兴区",value:"210603"},{label:"振安区",value:"210604"},{label:"宽甸满族自治县",value:"210624"},{label:"东港市",value:"210681"},{label:"凤城市",value:"210682"}],[{label:"古塔区",value:"210702"},{label:"凌河区",value:"210703"},{label:"太和区",value:"210711"},{label:"黑山县",value:"210726"},{label:"义县",value:"210727"},{label:"凌海市",value:"210781"},{label:"北镇市",value:"210782"}],[{label:"站前区",value:"210802"},{label:"西市区",value:"210803"},{label:"鲅鱼圈区",value:"210804"},{label:"老边区",value:"210811"},{label:"盖州市",value:"210881"},{label:"大石桥市",value:"210882"}],[{label:"海州区",value:"210902"},{label:"新邱区",value:"210903"},{label:"太平区",value:"210904"},{label:"清河门区",value:"210905"},{label:"细河区",value:"210911"},{label:"阜新蒙古族自治县",value:"210921"},{label:"彰武县",value:"210922"}],[{label:"白塔区",value:"211002"},{label:"文圣区",value:"211003"},{label:"宏伟区",value:"211004"},{label:"弓长岭区",value:"211005"},{label:"太子河区",value:"211011"},{label:"辽阳县",value:"211021"},{label:"灯塔市",value:"211081"}],[{label:"双台子区",value:"211102"},{label:"兴隆台区",value:"211103"},{label:"大洼区",value:"211104"},{label:"盘山县",value:"211122"}],[{label:"银州区",value:"211202"},{label:"清河区",value:"211204"},{label:"铁岭县",value:"211221"},{label:"西丰县",value:"211223"},{label:"昌图县",value:"211224"},{label:"调兵山市",value:"211281"},{label:"开原市",value:"211282"}],[{label:"双塔区",value:"211302"},{label:"龙城区",value:"211303"},{label:"朝阳县",value:"211321"},{label:"建平县",value:"211322"},{label:"喀喇沁左翼蒙古族自治县",value:"211324"},{label:"北票市",value:"211381"},{label:"凌源市",value:"211382"}],[{label:"连山区",value:"211402"},{label:"龙港区",value:"211403"},{label:"南票区",value:"211404"},{label:"绥中县",value:"211421"},{label:"建昌县",value:"211422"},{label:"兴城市",value:"211481"}]],[[{label:"南关区",value:"220102"},{label:"宽城区",value:"220103"},{label:"朝阳区",value:"220104"},{label:"二道区",value:"220105"},{label:"绿园区",value:"220106"},{label:"双阳区",value:"220112"},{label:"九台区",value:"220113"},{label:"农安县",value:"220122"},{label:"长春经济技术开发区",value:"220171"},{label:"长春净月高新技术产业开发区",value:"220172"},{label:"长春高新技术产业开发区",value:"220173"},{label:"长春汽车经济技术开发区",value:"220174"},{label:"榆树市",value:"220182"},{label:"德惠市",value:"220183"}],[{label:"昌邑区",value:"220202"},{label:"龙潭区",value:"220203"},{label:"船营区",value:"220204"},{label:"丰满区",value:"220211"},{label:"永吉县",value:"220221"},{label:"吉林经济开发区",value:"220271"},{label:"吉林高新技术产业开发区",value:"220272"},{label:"吉林中国新加坡食品区",value:"220273"},{label:"蛟河市",value:"220281"},{label:"桦甸市",value:"220282"},{label:"舒兰市",value:"220283"},{label:"磐石市",value:"220284"}],[{label:"铁西区",value:"220302"},{label:"铁东区",value:"220303"},{label:"梨树县",value:"220322"},{label:"伊通满族自治县",value:"220323"},{label:"公主岭市",value:"220381"},{label:"双辽市",value:"220382"}],[{label:"龙山区",value:"220402"},{label:"西安区",value:"220403"},{label:"东丰县",value:"220421"},{label:"东辽县",value:"220422"}],[{label:"东昌区",value:"220502"},{label:"二道江区",value:"220503"},{label:"通化县",value:"220521"},{label:"辉南县",value:"220523"},{label:"柳河县",value:"220524"},{label:"梅河口市",value:"220581"},{label:"集安市",value:"220582"}],[{label:"浑江区",value:"220602"},{label:"江源区",value:"220605"},{label:"抚松县",value:"220621"},{label:"靖宇县",value:"220622"},{label:"长白朝鲜族自治县",value:"220623"},{label:"临江市",value:"220681"}],[{label:"宁江区",value:"220702"},{label:"前郭尔罗斯蒙古族自治县",value:"220721"},{label:"长岭县",value:"220722"},{label:"乾安县",value:"220723"},{label:"吉林松原经济开发区",value:"220771"},{label:"扶余市",value:"220781"}],[{label:"洮北区",value:"220802"},{label:"镇赉县",value:"220821"},{label:"通榆县",value:"220822"},{label:"吉林白城经济开发区",value:"220871"},{label:"洮南市",value:"220881"},{label:"大安市",value:"220882"}],[{label:"延吉市",value:"222401"},{label:"图们市",value:"222402"},{label:"敦化市",value:"222403"},{label:"珲春市",value:"222404"},{label:"龙井市",value:"222405"},{label:"和龙市",value:"222406"},{label:"汪清县",value:"222424"},{label:"安图县",value:"222426"}]],[[{label:"道里区",value:"230102"},{label:"南岗区",value:"230103"},{label:"道外区",value:"230104"},{label:"平房区",value:"230108"},{label:"松北区",value:"230109"},{label:"香坊区",value:"230110"},{label:"呼兰区",value:"230111"},{label:"阿城区",value:"230112"},{label:"双城区",value:"230113"},{label:"依兰县",value:"230123"},{label:"方正县",value:"230124"},{label:"宾县",value:"230125"},{label:"巴彦县",value:"230126"},{label:"木兰县",value:"230127"},{label:"通河县",value:"230128"},{label:"延寿县",value:"230129"},{label:"尚志市",value:"230183"},{label:"五常市",value:"230184"}],[{label:"龙沙区",value:"230202"},{label:"建华区",value:"230203"},{label:"铁锋区",value:"230204"},{label:"昂昂溪区",value:"230205"},{label:"富拉尔基区",value:"230206"},{label:"碾子山区",value:"230207"},{label:"梅里斯达斡尔族区",value:"230208"},{label:"龙江县",value:"230221"},{label:"依安县",value:"230223"},{label:"泰来县",value:"230224"},{label:"甘南县",value:"230225"},{label:"富裕县",value:"230227"},{label:"克山县",value:"230229"},{label:"克东县",value:"230230"},{label:"拜泉县",value:"230231"},{label:"讷河市",value:"230281"}],[{label:"鸡冠区",value:"230302"},{label:"恒山区",value:"230303"},{label:"滴道区",value:"230304"},{label:"梨树区",value:"230305"},{label:"城子河区",value:"230306"},{label:"麻山区",value:"230307"},{label:"鸡东县",value:"230321"},{label:"虎林市",value:"230381"},{label:"密山市",value:"230382"}],[{label:"向阳区",value:"230402"},{label:"工农区",value:"230403"},{label:"南山区",value:"230404"},{label:"兴安区",value:"230405"},{label:"东山区",value:"230406"},{label:"兴山区",value:"230407"},{label:"萝北县",value:"230421"},{label:"绥滨县",value:"230422"}],[{label:"尖山区",value:"230502"},{label:"岭东区",value:"230503"},{label:"四方台区",value:"230505"},{label:"宝山区",value:"230506"},{label:"集贤县",value:"230521"},{label:"友谊县",value:"230522"},{label:"宝清县",value:"230523"},{label:"饶河县",value:"230524"}],[{label:"萨尔图区",value:"230602"},{label:"龙凤区",value:"230603"},{label:"让胡路区",value:"230604"},{label:"红岗区",value:"230605"},{label:"大同区",value:"230606"},{label:"肇州县",value:"230621"},{label:"肇源县",value:"230622"},{label:"林甸县",value:"230623"},{label:"杜尔伯特蒙古族自治县",value:"230624"},{label:"大庆高新技术产业开发区",value:"230671"}],[{label:"伊春区",value:"230702"},{label:"南岔区",value:"230703"},{label:"友好区",value:"230704"},{label:"西林区",value:"230705"},{label:"翠峦区",value:"230706"},{label:"新青区",value:"230707"},{label:"美溪区",value:"230708"},{label:"金山屯区",value:"230709"},{label:"五营区",value:"230710"},{label:"乌马河区",value:"230711"},{label:"汤旺河区",value:"230712"},{label:"带岭区",value:"230713"},{label:"乌伊岭区",value:"230714"},{label:"红星区",value:"230715"},{label:"上甘岭区",value:"230716"},{label:"嘉荫县",value:"230722"},{label:"铁力市",value:"230781"}],[{label:"向阳区",value:"230803"},{label:"前进区",value:"230804"},{label:"东风区",value:"230805"},{label:"郊区",value:"230811"},{label:"桦南县",value:"230822"},{label:"桦川县",value:"230826"},{label:"汤原县",value:"230828"},{label:"同江市",value:"230881"},{label:"富锦市",value:"230882"},{label:"抚远市",value:"230883"}],[{label:"新兴区",value:"230902"},{label:"桃山区",value:"230903"},{label:"茄子河区",value:"230904"},{label:"勃利县",value:"230921"}],[{label:"东安区",value:"231002"},{label:"阳明区",value:"231003"},{label:"爱民区",value:"231004"},{label:"西安区",value:"231005"},{label:"林口县",value:"231025"},{label:"牡丹江经济技术开发区",value:"231071"},{label:"绥芬河市",value:"231081"},{label:"海林市",value:"231083"},{label:"宁安市",value:"231084"},{label:"穆棱市",value:"231085"},{label:"东宁市",value:"231086"}],[{label:"爱辉区",value:"231102"},{label:"嫩江县",value:"231121"},{label:"逊克县",value:"231123"},{label:"孙吴县",value:"231124"},{label:"北安市",value:"231181"},{label:"五大连池市",value:"231182"}],[{label:"北林区",value:"231202"},{label:"望奎县",value:"231221"},{label:"兰西县",value:"231222"},{label:"青冈县",value:"231223"},{label:"庆安县",value:"231224"},{label:"明水县",value:"231225"},{label:"绥棱县",value:"231226"},{label:"安达市",value:"231281"},{label:"肇东市",value:"231282"},{label:"海伦市",value:"231283"}],[{label:"加格达奇区",value:"232701"},{label:"松岭区",value:"232702"},{label:"新林区",value:"232703"},{label:"呼中区",value:"232704"},{label:"呼玛县",value:"232721"},{label:"塔河县",value:"232722"},{label:"漠河县",value:"232723"}]],[[{label:"黄浦区",value:"310101"},{label:"徐汇区",value:"310104"},{label:"长宁区",value:"310105"},{label:"静安区",value:"310106"},{label:"普陀区",value:"310107"},{label:"虹口区",value:"310109"},{label:"杨浦区",value:"310110"},{label:"闵行区",value:"310112"},{label:"宝山区",value:"310113"},{label:"嘉定区",value:"310114"},{label:"浦东新区",value:"310115"},{label:"金山区",value:"310116"},{label:"松江区",value:"310117"},{label:"青浦区",value:"310118"},{label:"奉贤区",value:"310120"},{label:"崇明区",value:"310151"}]],[[{label:"玄武区",value:"320102"},{label:"秦淮区",value:"320104"},{label:"建邺区",value:"320105"},{label:"鼓楼区",value:"320106"},{label:"浦口区",value:"320111"},{label:"栖霞区",value:"320113"},{label:"雨花台区",value:"320114"},{label:"江宁区",value:"320115"},{label:"六合区",value:"320116"},{label:"溧水区",value:"320117"},{label:"高淳区",value:"320118"}],[{label:"锡山区",value:"320205"},{label:"惠山区",value:"320206"},{label:"滨湖区",value:"320211"},{label:"梁溪区",value:"320213"},{label:"新吴区",value:"320214"},{label:"江阴市",value:"320281"},{label:"宜兴市",value:"320282"}],[{label:"鼓楼区",value:"320302"},{label:"云龙区",value:"320303"},{label:"贾汪区",value:"320305"},{label:"泉山区",value:"320311"},{label:"铜山区",value:"320312"},{label:"丰县",value:"320321"},{label:"沛县",value:"320322"},{label:"睢宁县",value:"320324"},{label:"徐州经济技术开发区",value:"320371"},{label:"新沂市",value:"320381"},{label:"邳州市",value:"320382"}],[{label:"天宁区",value:"320402"},{label:"钟楼区",value:"320404"},{label:"新北区",value:"320411"},{label:"武进区",value:"320412"},{label:"金坛区",value:"320413"},{label:"溧阳市",value:"320481"}],[{label:"虎丘区",value:"320505"},{label:"吴中区",value:"320506"},{label:"相城区",value:"320507"},{label:"姑苏区",value:"320508"},{label:"吴江区",value:"320509"},{label:"苏州工业园区",value:"320571"},{label:"常熟市",value:"320581"},{label:"张家港市",value:"320582"},{label:"昆山市",value:"320583"},{label:"太仓市",value:"320585"}],[{label:"崇川区",value:"320602"},{label:"港闸区",value:"320611"},{label:"通州区",value:"320612"},{label:"海安县",value:"320621"},{label:"如东县",value:"320623"},{label:"南通经济技术开发区",value:"320671"},{label:"启东市",value:"320681"},{label:"如皋市",value:"320682"},{label:"海门市",value:"320684"}],[{label:"连云区",value:"320703"},{label:"海州区",value:"320706"},{label:"赣榆区",value:"320707"},{label:"东海县",value:"320722"},{label:"灌云县",value:"320723"},{label:"灌南县",value:"320724"},{label:"连云港经济技术开发区",value:"320771"},{label:"连云港高新技术产业开发区",value:"320772"}],[{label:"淮安区",value:"320803"},{label:"淮阴区",value:"320804"},{label:"清江浦区",value:"320812"},{label:"洪泽区",value:"320813"},{label:"涟水县",value:"320826"},{label:"盱眙县",value:"320830"},{label:"金湖县",value:"320831"},{label:"淮安经济技术开发区",value:"320871"}],[{label:"亭湖区",value:"320902"},{label:"盐都区",value:"320903"},{label:"大丰区",value:"320904"},{label:"响水县",value:"320921"},{label:"滨海县",value:"320922"},{label:"阜宁县",value:"320923"},{label:"射阳县",value:"320924"},{label:"建湖县",value:"320925"},{label:"盐城经济技术开发区",value:"320971"},{label:"东台市",value:"320981"}],[{label:"广陵区",value:"321002"},{label:"邗江区",value:"321003"},{label:"江都区",value:"321012"},{label:"宝应县",value:"321023"},{label:"扬州经济技术开发区",value:"321071"},{label:"仪征市",value:"321081"},{label:"高邮市",value:"321084"}],[{label:"京口区",value:"321102"},{label:"润州区",value:"321111"},{label:"丹徒区",value:"321112"},{label:"镇江新区",value:"321171"},{label:"丹阳市",value:"321181"},{label:"扬中市",value:"321182"},{label:"句容市",value:"321183"}],[{label:"海陵区",value:"321202"},{label:"高港区",value:"321203"},{label:"姜堰区",value:"321204"},{label:"泰州医药高新技术产业开发区",value:"321271"},{label:"兴化市",value:"321281"},{label:"靖江市",value:"321282"},{label:"泰兴市",value:"321283"}],[{label:"宿城区",value:"321302"},{label:"宿豫区",value:"321311"},{label:"沭阳县",value:"321322"},{label:"泗阳县",value:"321323"},{label:"泗洪县",value:"321324"},{label:"宿迁经济技术开发区",value:"321371"}]],[[{label:"上城区",value:"330102"},{label:"下城区",value:"330103"},{label:"江干区",value:"330104"},{label:"拱墅区",value:"330105"},{label:"西湖区",value:"330106"},{label:"滨江区",value:"330108"},{label:"萧山区",value:"330109"},{label:"余杭区",value:"330110"},{label:"富阳区",value:"330111"},{label:"临安区",value:"330112"},{label:"桐庐县",value:"330122"},{label:"淳安县",value:"330127"},{label:"建德市",value:"330182"}],[{label:"海曙区",value:"330203"},{label:"江北区",value:"330205"},{label:"北仑区",value:"330206"},{label:"镇海区",value:"330211"},{label:"鄞州区",value:"330212"},{label:"奉化区",value:"330213"},{label:"象山县",value:"330225"},{label:"宁海县",value:"330226"},{label:"余姚市",value:"330281"},{label:"慈溪市",value:"330282"}],[{label:"鹿城区",value:"330302"},{label:"龙湾区",value:"330303"},{label:"瓯海区",value:"330304"},{label:"洞头区",value:"330305"},{label:"永嘉县",value:"330324"},{label:"平阳县",value:"330326"},{label:"苍南县",value:"330327"},{label:"文成县",value:"330328"},{label:"泰顺县",value:"330329"},{label:"温州经济技术开发区",value:"330371"},{label:"瑞安市",value:"330381"},{label:"乐清市",value:"330382"}],[{label:"南湖区",value:"330402"},{label:"秀洲区",value:"330411"},{label:"嘉善县",value:"330421"},{label:"海盐县",value:"330424"},{label:"海宁市",value:"330481"},{label:"平湖市",value:"330482"},{label:"桐乡市",value:"330483"}],[{label:"吴兴区",value:"330502"},{label:"南浔区",value:"330503"},{label:"德清县",value:"330521"},{label:"长兴县",value:"330522"},{label:"安吉县",value:"330523"}],[{label:"越城区",value:"330602"},{label:"柯桥区",value:"330603"},{label:"上虞区",value:"330604"},{label:"新昌县",value:"330624"},{label:"诸暨市",value:"330681"},{label:"嵊州市",value:"330683"}],[{label:"婺城区",value:"330702"},{label:"金东区",value:"330703"},{label:"武义县",value:"330723"},{label:"浦江县",value:"330726"},{label:"磐安县",value:"330727"},{label:"兰溪市",value:"330781"},{label:"义乌市",value:"330782"},{label:"东阳市",value:"330783"},{label:"永康市",value:"330784"}],[{label:"柯城区",value:"330802"},{label:"衢江区",value:"330803"},{label:"常山县",value:"330822"},{label:"开化县",value:"330824"},{label:"龙游县",value:"330825"},{label:"江山市",value:"330881"}],[{label:"定海区",value:"330902"},{label:"普陀区",value:"330903"},{label:"岱山县",value:"330921"},{label:"嵊泗县",value:"330922"}],[{label:"椒江区",value:"331002"},{label:"黄岩区",value:"331003"},{label:"路桥区",value:"331004"},{label:"三门县",value:"331022"},{label:"天台县",value:"331023"},{label:"仙居县",value:"331024"},{label:"温岭市",value:"331081"},{label:"临海市",value:"331082"},{label:"玉环市",value:"331083"}],[{label:"莲都区",value:"331102"},{label:"青田县",value:"331121"},{label:"缙云县",value:"331122"},{label:"遂昌县",value:"331123"},{label:"松阳县",value:"331124"},{label:"云和县",value:"331125"},{label:"庆元县",value:"331126"},{label:"景宁畲族自治县",value:"331127"},{label:"龙泉市",value:"331181"}]],[[{label:"瑶海区",value:"340102"},{label:"庐阳区",value:"340103"},{label:"蜀山区",value:"340104"},{label:"包河区",value:"340111"},{label:"长丰县",value:"340121"},{label:"肥东县",value:"340122"},{label:"肥西县",value:"340123"},{label:"庐江县",value:"340124"},{label:"合肥高新技术产业开发区",value:"340171"},{label:"合肥经济技术开发区",value:"340172"},{label:"合肥新站高新技术产业开发区",value:"340173"},{label:"巢湖市",value:"340181"}],[{label:"镜湖区",value:"340202"},{label:"弋江区",value:"340203"},{label:"鸠江区",value:"340207"},{label:"三山区",value:"340208"},{label:"芜湖县",value:"340221"},{label:"繁昌县",value:"340222"},{label:"南陵县",value:"340223"},{label:"无为县",value:"340225"},{label:"芜湖经济技术开发区",value:"340271"},{label:"安徽芜湖长江大桥经济开发区",value:"340272"}],[{label:"龙子湖区",value:"340302"},{label:"蚌山区",value:"340303"},{label:"禹会区",value:"340304"},{label:"淮上区",value:"340311"},{label:"怀远县",value:"340321"},{label:"五河县",value:"340322"},{label:"固镇县",value:"340323"},{label:"蚌埠市高新技术开发区",value:"340371"},{label:"蚌埠市经济开发区",value:"340372"}],[{label:"大通区",value:"340402"},{label:"田家庵区",value:"340403"},{label:"谢家集区",value:"340404"},{label:"八公山区",value:"340405"},{label:"潘集区",value:"340406"},{label:"凤台县",value:"340421"},{label:"寿县",value:"340422"}],[{label:"花山区",value:"340503"},{label:"雨山区",value:"340504"},{label:"博望区",value:"340506"},{label:"当涂县",value:"340521"},{label:"含山县",value:"340522"},{label:"和县",value:"340523"}],[{label:"杜集区",value:"340602"},{label:"相山区",value:"340603"},{label:"烈山区",value:"340604"},{label:"濉溪县",value:"340621"}],[{label:"铜官区",value:"340705"},{label:"义安区",value:"340706"},{label:"郊区",value:"340711"},{label:"枞阳县",value:"340722"}],[{label:"迎江区",value:"340802"},{label:"大观区",value:"340803"},{label:"宜秀区",value:"340811"},{label:"怀宁县",value:"340822"},{label:"潜山县",value:"340824"},{label:"太湖县",value:"340825"},{label:"宿松县",value:"340826"},{label:"望江县",value:"340827"},{label:"岳西县",value:"340828"},{label:"安徽安庆经济开发区",value:"340871"},{label:"桐城市",value:"340881"}],[{label:"屯溪区",value:"341002"},{label:"黄山区",value:"341003"},{label:"徽州区",value:"341004"},{label:"歙县",value:"341021"},{label:"休宁县",value:"341022"},{label:"黟县",value:"341023"},{label:"祁门县",value:"341024"}],[{label:"琅琊区",value:"341102"},{label:"南谯区",value:"341103"},{label:"来安县",value:"341122"},{label:"全椒县",value:"341124"},{label:"定远县",value:"341125"},{label:"凤阳县",value:"341126"},{label:"苏滁现代产业园",value:"341171"},{label:"滁州经济技术开发区",value:"341172"},{label:"天长市",value:"341181"},{label:"明光市",value:"341182"}],[{label:"颍州区",value:"341202"},{label:"颍东区",value:"341203"},{label:"颍泉区",value:"341204"},{label:"临泉县",value:"341221"},{label:"太和县",value:"341222"},{label:"阜南县",value:"341225"},{label:"颍上县",value:"341226"},{label:"阜阳合肥现代产业园区",value:"341271"},{label:"阜阳经济技术开发区",value:"341272"},{label:"界首市",value:"341282"}],[{label:"埇桥区",value:"341302"},{label:"砀山县",value:"341321"},{label:"萧县",value:"341322"},{label:"灵璧县",value:"341323"},{label:"泗县",value:"341324"},{label:"宿州马鞍山现代产业园区",value:"341371"},{label:"宿州经济技术开发区",value:"341372"}],[{label:"金安区",value:"341502"},{label:"裕安区",value:"341503"},{label:"叶集区",value:"341504"},{label:"霍邱县",value:"341522"},{label:"舒城县",value:"341523"},{label:"金寨县",value:"341524"},{label:"霍山县",value:"341525"}],[{label:"谯城区",value:"341602"},{label:"涡阳县",value:"341621"},{label:"蒙城县",value:"341622"},{label:"利辛县",value:"341623"}],[{label:"贵池区",value:"341702"},{label:"东至县",value:"341721"},{label:"石台县",value:"341722"},{label:"青阳县",value:"341723"}],[{label:"宣州区",value:"341802"},{label:"郎溪县",value:"341821"},{label:"广德县",value:"341822"},{label:"泾县",value:"341823"},{label:"绩溪县",value:"341824"},{label:"旌德县",value:"341825"},{label:"宣城市经济开发区",value:"341871"},{label:"宁国市",value:"341881"}]],[[{label:"鼓楼区",value:"350102"},{label:"台江区",value:"350103"},{label:"仓山区",value:"350104"},{label:"马尾区",value:"350105"},{label:"晋安区",value:"350111"},{label:"闽侯县",value:"350121"},{label:"连江县",value:"350122"},{label:"罗源县",value:"350123"},{label:"闽清县",value:"350124"},{label:"永泰县",value:"350125"},{label:"平潭县",value:"350128"},{label:"福清市",value:"350181"},{label:"长乐市",value:"350182"}],[{label:"思明区",value:"350203"},{label:"海沧区",value:"350205"},{label:"湖里区",value:"350206"},{label:"集美区",value:"350211"},{label:"同安区",value:"350212"},{label:"翔安区",value:"350213"}],[{label:"城厢区",value:"350302"},{label:"涵江区",value:"350303"},{label:"荔城区",value:"350304"},{label:"秀屿区",value:"350305"},{label:"仙游县",value:"350322"}],[{label:"梅列区",value:"350402"},{label:"三元区",value:"350403"},{label:"明溪县",value:"350421"},{label:"清流县",value:"350423"},{label:"宁化县",value:"350424"},{label:"大田县",value:"350425"},{label:"尤溪县",value:"350426"},{label:"沙县",value:"350427"},{label:"将乐县",value:"350428"},{label:"泰宁县",value:"350429"},{label:"建宁县",value:"350430"},{label:"永安市",value:"350481"}],[{label:"鲤城区",value:"350502"},{label:"丰泽区",value:"350503"},{label:"洛江区",value:"350504"},{label:"泉港区",value:"350505"},{label:"惠安县",value:"350521"},{label:"安溪县",value:"350524"},{label:"永春县",value:"350525"},{label:"德化县",value:"350526"},{label:"金门县",value:"350527"},{label:"石狮市",value:"350581"},{label:"晋江市",value:"350582"},{label:"南安市",value:"350583"}],[{label:"芗城区",value:"350602"},{label:"龙文区",value:"350603"},{label:"云霄县",value:"350622"},{label:"漳浦县",value:"350623"},{label:"诏安县",value:"350624"},{label:"长泰县",value:"350625"},{label:"东山县",value:"350626"},{label:"南靖县",value:"350627"},{label:"平和县",value:"350628"},{label:"华安县",value:"350629"},{label:"龙海市",value:"350681"}],[{label:"延平区",value:"350702"},{label:"建阳区",value:"350703"},{label:"顺昌县",value:"350721"},{label:"浦城县",value:"350722"},{label:"光泽县",value:"350723"},{label:"松溪县",value:"350724"},{label:"政和县",value:"350725"},{label:"邵武市",value:"350781"},{label:"武夷山市",value:"350782"},{label:"建瓯市",value:"350783"}],[{label:"新罗区",value:"350802"},{label:"永定区",value:"350803"},{label:"长汀县",value:"350821"},{label:"上杭县",value:"350823"},{label:"武平县",value:"350824"},{label:"连城县",value:"350825"},{label:"漳平市",value:"350881"}],[{label:"蕉城区",value:"350902"},{label:"霞浦县",value:"350921"},{label:"古田县",value:"350922"},{label:"屏南县",value:"350923"},{label:"寿宁县",value:"350924"},{label:"周宁县",value:"350925"},{label:"柘荣县",value:"350926"},{label:"福安市",value:"350981"},{label:"福鼎市",value:"350982"}]],[[{label:"东湖区",value:"360102"},{label:"西湖区",value:"360103"},{label:"青云谱区",value:"360104"},{label:"湾里区",value:"360105"},{label:"青山湖区",value:"360111"},{label:"新建区",value:"360112"},{label:"南昌县",value:"360121"},{label:"安义县",value:"360123"},{label:"进贤县",value:"360124"}],[{label:"昌江区",value:"360202"},{label:"珠山区",value:"360203"},{label:"浮梁县",value:"360222"},{label:"乐平市",value:"360281"}],[{label:"安源区",value:"360302"},{label:"湘东区",value:"360313"},{label:"莲花县",value:"360321"},{label:"上栗县",value:"360322"},{label:"芦溪县",value:"360323"}],[{label:"濂溪区",value:"360402"},{label:"浔阳区",value:"360403"},{label:"柴桑区",value:"360404"},{label:"武宁县",value:"360423"},{label:"修水县",value:"360424"},{label:"永修县",value:"360425"},{label:"德安县",value:"360426"},{label:"都昌县",value:"360428"},{label:"湖口县",value:"360429"},{label:"彭泽县",value:"360430"},{label:"瑞昌市",value:"360481"},{label:"共青城市",value:"360482"},{label:"庐山市",value:"360483"}],[{label:"渝水区",value:"360502"},{label:"分宜县",value:"360521"}],[{label:"月湖区",value:"360602"},{label:"余江县",value:"360622"},{label:"贵溪市",value:"360681"}],[{label:"章贡区",value:"360702"},{label:"南康区",value:"360703"},{label:"赣县区",value:"360704"},{label:"信丰县",value:"360722"},{label:"大余县",value:"360723"},{label:"上犹县",value:"360724"},{label:"崇义县",value:"360725"},{label:"安远县",value:"360726"},{label:"龙南县",value:"360727"},{label:"定南县",value:"360728"},{label:"全南县",value:"360729"},{label:"宁都县",value:"360730"},{label:"于都县",value:"360731"},{label:"兴国县",value:"360732"},{label:"会昌县",value:"360733"},{label:"寻乌县",value:"360734"},{label:"石城县",value:"360735"},{label:"瑞金市",value:"360781"}],[{label:"吉州区",value:"360802"},{label:"青原区",value:"360803"},{label:"吉安县",value:"360821"},{label:"吉水县",value:"360822"},{label:"峡江县",value:"360823"},{label:"新干县",value:"360824"},{label:"永丰县",value:"360825"},{label:"泰和县",value:"360826"},{label:"遂川县",value:"360827"},{label:"万安县",value:"360828"},{label:"安福县",value:"360829"},{label:"永新县",value:"360830"},{label:"井冈山市",value:"360881"}],[{label:"袁州区",value:"360902"},{label:"奉新县",value:"360921"},{label:"万载县",value:"360922"},{label:"上高县",value:"360923"},{label:"宜丰县",value:"360924"},{label:"靖安县",value:"360925"},{label:"铜鼓县",value:"360926"},{label:"丰城市",value:"360981"},{label:"樟树市",value:"360982"},{label:"高安市",value:"360983"}],[{label:"临川区",value:"361002"},{label:"东乡区",value:"361003"},{label:"南城县",value:"361021"},{label:"黎川县",value:"361022"},{label:"南丰县",value:"361023"},{label:"崇仁县",value:"361024"},{label:"乐安县",value:"361025"},{label:"宜黄县",value:"361026"},{label:"金溪县",value:"361027"},{label:"资溪县",value:"361028"},{label:"广昌县",value:"361030"}],[{label:"信州区",value:"361102"},{label:"广丰区",value:"361103"},{label:"上饶县",value:"361121"},{label:"玉山县",value:"361123"},{label:"铅山县",value:"361124"},{label:"横峰县",value:"361125"},{label:"弋阳县",value:"361126"},{label:"余干县",value:"361127"},{label:"鄱阳县",value:"361128"},{label:"万年县",value:"361129"},{label:"婺源县",value:"361130"},{label:"德兴市",value:"361181"}]],[[{label:"历下区",value:"370102"},{label:"市中区",value:"370103"},{label:"槐荫区",value:"370104"},{label:"天桥区",value:"370105"},{label:"历城区",value:"370112"},{label:"长清区",value:"370113"},{label:"章丘区",value:"370114"},{label:"平阴县",value:"370124"},{label:"济阳县",value:"370125"},{label:"商河县",value:"370126"},{label:"济南高新技术产业开发区",value:"370171"}],[{label:"市南区",value:"370202"},{label:"市北区",value:"370203"},{label:"黄岛区",value:"370211"},{label:"崂山区",value:"370212"},{label:"李沧区",value:"370213"},{label:"城阳区",value:"370214"},{label:"即墨区",value:"370215"},{label:"青岛高新技术产业开发区",value:"370271"},{label:"胶州市",value:"370281"},{label:"平度市",value:"370283"},{label:"莱西市",value:"370285"}],[{label:"淄川区",value:"370302"},{label:"张店区",value:"370303"},{label:"博山区",value:"370304"},{label:"临淄区",value:"370305"},{label:"周村区",value:"370306"},{label:"桓台县",value:"370321"},{label:"高青县",value:"370322"},{label:"沂源县",value:"370323"}],[{label:"市中区",value:"370402"},{label:"薛城区",value:"370403"},{label:"峄城区",value:"370404"},{label:"台儿庄区",value:"370405"},{label:"山亭区",value:"370406"},{label:"滕州市",value:"370481"}],[{label:"东营区",value:"370502"},{label:"河口区",value:"370503"},{label:"垦利区",value:"370505"},{label:"利津县",value:"370522"},{label:"广饶县",value:"370523"},{label:"东营经济技术开发区",value:"370571"},{label:"东营港经济开发区",value:"370572"}],[{label:"芝罘区",value:"370602"},{label:"福山区",value:"370611"},{label:"牟平区",value:"370612"},{label:"莱山区",value:"370613"},{label:"长岛县",value:"370634"},{label:"烟台高新技术产业开发区",value:"370671"},{label:"烟台经济技术开发区",value:"370672"},{label:"龙口市",value:"370681"},{label:"莱阳市",value:"370682"},{label:"莱州市",value:"370683"},{label:"蓬莱市",value:"370684"},{label:"招远市",value:"370685"},{label:"栖霞市",value:"370686"},{label:"海阳市",value:"370687"}],[{label:"潍城区",value:"370702"},{label:"寒亭区",value:"370703"},{label:"坊子区",value:"370704"},{label:"奎文区",value:"370705"},{label:"临朐县",value:"370724"},{label:"昌乐县",value:"370725"},{label:"潍坊滨海经济技术开发区",value:"370772"},{label:"青州市",value:"370781"},{label:"诸城市",value:"370782"},{label:"寿光市",value:"370783"},{label:"安丘市",value:"370784"},{label:"高密市",value:"370785"},{label:"昌邑市",value:"370786"}],[{label:"任城区",value:"370811"},{label:"兖州区",value:"370812"},{label:"微山县",value:"370826"},{label:"鱼台县",value:"370827"},{label:"金乡县",value:"370828"},{label:"嘉祥县",value:"370829"},{label:"汶上县",value:"370830"},{label:"泗水县",value:"370831"},{label:"梁山县",value:"370832"},{label:"济宁高新技术产业开发区",value:"370871"},{label:"曲阜市",value:"370881"},{label:"邹城市",value:"370883"}],[{label:"泰山区",value:"370902"},{label:"岱岳区",value:"370911"},{label:"宁阳县",value:"370921"},{label:"东平县",value:"370923"},{label:"新泰市",value:"370982"},{label:"肥城市",value:"370983"}],[{label:"环翠区",value:"371002"},{label:"文登区",value:"371003"},{label:"威海火炬高技术产业开发区",value:"371071"},{label:"威海经济技术开发区",value:"371072"},{label:"威海临港经济技术开发区",value:"371073"},{label:"荣成市",value:"371082"},{label:"乳山市",value:"371083"}],[{label:"东港区",value:"371102"},{label:"岚山区",value:"371103"},{label:"五莲县",value:"371121"},{label:"莒县",value:"371122"},{label:"日照经济技术开发区",value:"371171"},{label:"日照国际海洋城",value:"371172"}],[{label:"莱城区",value:"371202"},{label:"钢城区",value:"371203"}],[{label:"兰山区",value:"371302"},{label:"罗庄区",value:"371311"},{label:"河东区",value:"371312"},{label:"沂南县",value:"371321"},{label:"郯城县",value:"371322"},{label:"沂水县",value:"371323"},{label:"兰陵县",value:"371324"},{label:"费县",value:"371325"},{label:"平邑县",value:"371326"},{label:"莒南县",value:"371327"},{label:"蒙阴县",value:"371328"},{label:"临沭县",value:"371329"},{label:"临沂高新技术产业开发区",value:"371371"},{label:"临沂经济技术开发区",value:"371372"},{label:"临沂临港经济开发区",value:"371373"}],[{label:"德城区",value:"371402"},{label:"陵城区",value:"371403"},{label:"宁津县",value:"371422"},{label:"庆云县",value:"371423"},{label:"临邑县",value:"371424"},{label:"齐河县",value:"371425"},{label:"平原县",value:"371426"},{label:"夏津县",value:"371427"},{label:"武城县",value:"371428"},{label:"德州经济技术开发区",value:"371471"},{label:"德州运河经济开发区",value:"371472"},{label:"乐陵市",value:"371481"},{label:"禹城市",value:"371482"}],[{label:"东昌府区",value:"371502"},{label:"阳谷县",value:"371521"},{label:"莘县",value:"371522"},{label:"茌平县",value:"371523"},{label:"东阿县",value:"371524"},{label:"冠县",value:"371525"},{label:"高唐县",value:"371526"},{label:"临清市",value:"371581"}],[{label:"滨城区",value:"371602"},{label:"沾化区",value:"371603"},{label:"惠民县",value:"371621"},{label:"阳信县",value:"371622"},{label:"无棣县",value:"371623"},{label:"博兴县",value:"371625"},{label:"邹平县",value:"371626"}],[{label:"牡丹区",value:"371702"},{label:"定陶区",value:"371703"},{label:"曹县",value:"371721"},{label:"单县",value:"371722"},{label:"成武县",value:"371723"},{label:"巨野县",value:"371724"},{label:"郓城县",value:"371725"},{label:"鄄城县",value:"371726"},{label:"东明县",value:"371728"},{label:"菏泽经济技术开发区",value:"371771"},{label:"菏泽高新技术开发区",value:"371772"}]],[[{label:"中原区",value:"410102"},{label:"二七区",value:"410103"},{label:"管城回族区",value:"410104"},{label:"金水区",value:"410105"},{label:"上街区",value:"410106"},{label:"惠济区",value:"410108"},{label:"中牟县",value:"410122"},{label:"郑州经济技术开发区",value:"410171"},{label:"郑州高新技术产业开发区",value:"410172"},{label:"郑州航空港经济综合实验区",value:"410173"},{label:"巩义市",value:"410181"},{label:"荥阳市",value:"410182"},{label:"新密市",value:"410183"},{label:"新郑市",value:"410184"},{label:"登封市",value:"410185"}],[{label:"龙亭区",value:"410202"},{label:"顺河回族区",value:"410203"},{label:"鼓楼区",value:"410204"},{label:"禹王台区",value:"410205"},{label:"祥符区",value:"410212"},{label:"杞县",value:"410221"},{label:"通许县",value:"410222"},{label:"尉氏县",value:"410223"},{label:"兰考县",value:"410225"}],[{label:"老城区",value:"410302"},{label:"西工区",value:"410303"},{label:"瀍河回族区",value:"410304"},{label:"涧西区",value:"410305"},{label:"吉利区",value:"410306"},{label:"洛龙区",value:"410311"},{label:"孟津县",value:"410322"},{label:"新安县",value:"410323"},{label:"栾川县",value:"410324"},{label:"嵩县",value:"410325"},{label:"汝阳县",value:"410326"},{label:"宜阳县",value:"410327"},{label:"洛宁县",value:"410328"},{label:"伊川县",value:"410329"},{label:"洛阳高新技术产业开发区",value:"410371"},{label:"偃师市",value:"410381"}],[{label:"新华区",value:"410402"},{label:"卫东区",value:"410403"},{label:"石龙区",value:"410404"},{label:"湛河区",value:"410411"},{label:"宝丰县",value:"410421"},{label:"叶县",value:"410422"},{label:"鲁山县",value:"410423"},{label:"郏县",value:"410425"},{label:"平顶山高新技术产业开发区",value:"410471"},{label:"平顶山市新城区",value:"410472"},{label:"舞钢市",value:"410481"},{label:"汝州市",value:"410482"}],[{label:"文峰区",value:"410502"},{label:"北关区",value:"410503"},{label:"殷都区",value:"410505"},{label:"龙安区",value:"410506"},{label:"安阳县",value:"410522"},{label:"汤阴县",value:"410523"},{label:"滑县",value:"410526"},{label:"内黄县",value:"410527"},{label:"安阳高新技术产业开发区",value:"410571"},{label:"林州市",value:"410581"}],[{label:"鹤山区",value:"410602"},{label:"山城区",value:"410603"},{label:"淇滨区",value:"410611"},{label:"浚县",value:"410621"},{label:"淇县",value:"410622"},{label:"鹤壁经济技术开发区",value:"410671"}],[{label:"红旗区",value:"410702"},{label:"卫滨区",value:"410703"},{label:"凤泉区",value:"410704"},{label:"牧野区",value:"410711"},{label:"新乡县",value:"410721"},{label:"获嘉县",value:"410724"},{label:"原阳县",value:"410725"},{label:"延津县",value:"410726"},{label:"封丘县",value:"410727"},{label:"长垣县",value:"410728"},{label:"新乡高新技术产业开发区",value:"410771"},{label:"新乡经济技术开发区",value:"410772"},{label:"新乡市平原城乡一体化示范区",value:"410773"},{label:"卫辉市",value:"410781"},{label:"辉县市",value:"410782"}],[{label:"解放区",value:"410802"},{label:"中站区",value:"410803"},{label:"马村区",value:"410804"},{label:"山阳区",value:"410811"},{label:"修武县",value:"410821"},{label:"博爱县",value:"410822"},{label:"武陟县",value:"410823"},{label:"温县",value:"410825"},{label:"焦作城乡一体化示范区",value:"410871"},{label:"沁阳市",value:"410882"},{label:"孟州市",value:"410883"}],[{label:"华龙区",value:"410902"},{label:"清丰县",value:"410922"},{label:"南乐县",value:"410923"},{label:"范县",value:"410926"},{label:"台前县",value:"410927"},{label:"濮阳县",value:"410928"},{label:"河南濮阳工业园区",value:"410971"},{label:"濮阳经济技术开发区",value:"410972"}],[{label:"魏都区",value:"411002"},{label:"建安区",value:"411003"},{label:"鄢陵县",value:"411024"},{label:"襄城县",value:"411025"},{label:"许昌经济技术开发区",value:"411071"},{label:"禹州市",value:"411081"},{label:"长葛市",value:"411082"}],[{label:"源汇区",value:"411102"},{label:"郾城区",value:"411103"},{label:"召陵区",value:"411104"},{label:"舞阳县",value:"411121"},{label:"临颍县",value:"411122"},{label:"漯河经济技术开发区",value:"411171"}],[{label:"湖滨区",value:"411202"},{label:"陕州区",value:"411203"},{label:"渑池县",value:"411221"},{label:"卢氏县",value:"411224"},{label:"河南三门峡经济开发区",value:"411271"},{label:"义马市",value:"411281"},{label:"灵宝市",value:"411282"}],[{label:"宛城区",value:"411302"},{label:"卧龙区",value:"411303"},{label:"南召县",value:"411321"},{label:"方城县",value:"411322"},{label:"西峡县",value:"411323"},{label:"镇平县",value:"411324"},{label:"内乡县",value:"411325"},{label:"淅川县",value:"411326"},{label:"社旗县",value:"411327"},{label:"唐河县",value:"411328"},{label:"新野县",value:"411329"},{label:"桐柏县",value:"411330"},{label:"南阳高新技术产业开发区",value:"411371"},{label:"南阳市城乡一体化示范区",value:"411372"},{label:"邓州市",value:"411381"}],[{label:"梁园区",value:"411402"},{label:"睢阳区",value:"411403"},{label:"民权县",value:"411421"},{label:"睢县",value:"411422"},{label:"宁陵县",value:"411423"},{label:"柘城县",value:"411424"},{label:"虞城县",value:"411425"},{label:"夏邑县",value:"411426"},{label:"豫东综合物流产业聚集区",value:"411471"},{label:"河南商丘经济开发区",value:"411472"},{label:"永城市",value:"411481"}],[{label:"浉河区",value:"411502"},{label:"平桥区",value:"411503"},{label:"罗山县",value:"411521"},{label:"光山县",value:"411522"},{label:"新县",value:"411523"},{label:"商城县",value:"411524"},{label:"固始县",value:"411525"},{label:"潢川县",value:"411526"},{label:"淮滨县",value:"411527"},{label:"息县",value:"411528"},{label:"信阳高新技术产业开发区",value:"411571"}],[{label:"川汇区",value:"411602"},{label:"扶沟县",value:"411621"},{label:"西华县",value:"411622"},{label:"商水县",value:"411623"},{label:"沈丘县",value:"411624"},{label:"郸城县",value:"411625"},{label:"淮阳县",value:"411626"},{label:"太康县",value:"411627"},{label:"鹿邑县",value:"411628"},{label:"河南周口经济开发区",value:"411671"},{label:"项城市",value:"411681"}],[{label:"驿城区",value:"411702"},{label:"西平县",value:"411721"},{label:"上蔡县",value:"411722"},{label:"平舆县",value:"411723"},{label:"正阳县",value:"411724"},{label:"确山县",value:"411725"},{label:"泌阳县",value:"411726"},{label:"汝南县",value:"411727"},{label:"遂平县",value:"411728"},{label:"新蔡县",value:"411729"},{label:"河南驻马店经济开发区",value:"411771"}],[{label:"济源市",value:"419001"}]],[[{label:"江岸区",value:"420102"},{label:"江汉区",value:"420103"},{label:"硚口区",value:"420104"},{label:"汉阳区",value:"420105"},{label:"武昌区",value:"420106"},{label:"青山区",value:"420107"},{label:"洪山区",value:"420111"},{label:"东西湖区",value:"420112"},{label:"汉南区",value:"420113"},{label:"蔡甸区",value:"420114"},{label:"江夏区",value:"420115"},{label:"黄陂区",value:"420116"},{label:"新洲区",value:"420117"}],[{label:"黄石港区",value:"420202"},{label:"西塞山区",value:"420203"},{label:"下陆区",value:"420204"},{label:"铁山区",value:"420205"},{label:"阳新县",value:"420222"},{label:"大冶市",value:"420281"}],[{label:"茅箭区",value:"420302"},{label:"张湾区",value:"420303"},{label:"郧阳区",value:"420304"},{label:"郧西县",value:"420322"},{label:"竹山县",value:"420323"},{label:"竹溪县",value:"420324"},{label:"房县",value:"420325"},{label:"丹江口市",value:"420381"}],[{label:"西陵区",value:"420502"},{label:"伍家岗区",value:"420503"},{label:"点军区",value:"420504"},{label:"猇亭区",value:"420505"},{label:"夷陵区",value:"420506"},{label:"远安县",value:"420525"},{label:"兴山县",value:"420526"},{label:"秭归县",value:"420527"},{label:"长阳土家族自治县",value:"420528"},{label:"五峰土家族自治县",value:"420529"},{label:"宜都市",value:"420581"},{label:"当阳市",value:"420582"},{label:"枝江市",value:"420583"}],[{label:"襄城区",value:"420602"},{label:"樊城区",value:"420606"},{label:"襄州区",value:"420607"},{label:"南漳县",value:"420624"},{label:"谷城县",value:"420625"},{label:"保康县",value:"420626"},{label:"老河口市",value:"420682"},{label:"枣阳市",value:"420683"},{label:"宜城市",value:"420684"}],[{label:"梁子湖区",value:"420702"},{label:"华容区",value:"420703"},{label:"鄂城区",value:"420704"}],[{label:"东宝区",value:"420802"},{label:"掇刀区",value:"420804"},{label:"京山县",value:"420821"},{label:"沙洋县",value:"420822"},{label:"钟祥市",value:"420881"}],[{label:"孝南区",value:"420902"},{label:"孝昌县",value:"420921"},{label:"大悟县",value:"420922"},{label:"云梦县",value:"420923"},{label:"应城市",value:"420981"},{label:"安陆市",value:"420982"},{label:"汉川市",value:"420984"}],[{label:"沙市区",value:"421002"},{label:"荆州区",value:"421003"},{label:"公安县",value:"421022"},{label:"监利县",value:"421023"},{label:"江陵县",value:"421024"},{label:"荆州经济技术开发区",value:"421071"},{label:"石首市",value:"421081"},{label:"洪湖市",value:"421083"},{label:"松滋市",value:"421087"}],[{label:"黄州区",value:"421102"},{label:"团风县",value:"421121"},{label:"红安县",value:"421122"},{label:"罗田县",value:"421123"},{label:"英山县",value:"421124"},{label:"浠水县",value:"421125"},{label:"蕲春县",value:"421126"},{label:"黄梅县",value:"421127"},{label:"龙感湖管理区",value:"421171"},{label:"麻城市",value:"421181"},{label:"武穴市",value:"421182"}],[{label:"咸安区",value:"421202"},{label:"嘉鱼县",value:"421221"},{label:"通城县",value:"421222"},{label:"崇阳县",value:"421223"},{label:"通山县",value:"421224"},{label:"赤壁市",value:"421281"}],[{label:"曾都区",value:"421303"},{label:"随县",value:"421321"},{label:"广水市",value:"421381"}],[{label:"恩施市",value:"422801"},{label:"利川市",value:"422802"},{label:"建始县",value:"422822"},{label:"巴东县",value:"422823"},{label:"宣恩县",value:"422825"},{label:"咸丰县",value:"422826"},{label:"来凤县",value:"422827"},{label:"鹤峰县",value:"422828"}],[{label:"仙桃市",value:"429004"},{label:"潜江市",value:"429005"},{label:"天门市",value:"429006"},{label:"神农架林区",value:"429021"}]],[[{label:"芙蓉区",value:"430102"},{label:"天心区",value:"430103"},{label:"岳麓区",value:"430104"},{label:"开福区",value:"430105"},{label:"雨花区",value:"430111"},{label:"望城区",value:"430112"},{label:"长沙县",value:"430121"},{label:"浏阳市",value:"430181"},{label:"宁乡市",value:"430182"}],[{label:"荷塘区",value:"430202"},{label:"芦淞区",value:"430203"},{label:"石峰区",value:"430204"},{label:"天元区",value:"430211"},{label:"株洲县",value:"430221"},{label:"攸县",value:"430223"},{label:"茶陵县",value:"430224"},{label:"炎陵县",value:"430225"},{label:"云龙示范区",value:"430271"},{label:"醴陵市",value:"430281"}],[{label:"雨湖区",value:"430302"},{label:"岳塘区",value:"430304"},{label:"湘潭县",value:"430321"},{label:"湖南湘潭高新技术产业园区",value:"430371"},{label:"湘潭昭山示范区",value:"430372"},{label:"湘潭九华示范区",value:"430373"},{label:"湘乡市",value:"430381"},{label:"韶山市",value:"430382"}],[{label:"珠晖区",value:"430405"},{label:"雁峰区",value:"430406"},{label:"石鼓区",value:"430407"},{label:"蒸湘区",value:"430408"},{label:"南岳区",value:"430412"},{label:"衡阳县",value:"430421"},{label:"衡南县",value:"430422"},{label:"衡山县",value:"430423"},{label:"衡东县",value:"430424"},{label:"祁东县",value:"430426"},{label:"衡阳综合保税区",value:"430471"},{label:"湖南衡阳高新技术产业园区",value:"430472"},{label:"湖南衡阳松木经济开发区",value:"430473"},{label:"耒阳市",value:"430481"},{label:"常宁市",value:"430482"}],[{label:"双清区",value:"430502"},{label:"大祥区",value:"430503"},{label:"北塔区",value:"430511"},{label:"邵东县",value:"430521"},{label:"新邵县",value:"430522"},{label:"邵阳县",value:"430523"},{label:"隆回县",value:"430524"},{label:"洞口县",value:"430525"},{label:"绥宁县",value:"430527"},{label:"新宁县",value:"430528"},{label:"城步苗族自治县",value:"430529"},{label:"武冈市",value:"430581"}],[{label:"岳阳楼区",value:"430602"},{label:"云溪区",value:"430603"},{label:"君山区",value:"430611"},{label:"岳阳县",value:"430621"},{label:"华容县",value:"430623"},{label:"湘阴县",value:"430624"},{label:"平江县",value:"430626"},{label:"岳阳市屈原管理区",value:"430671"},{label:"汨罗市",value:"430681"},{label:"临湘市",value:"430682"}],[{label:"武陵区",value:"430702"},{label:"鼎城区",value:"430703"},{label:"安乡县",value:"430721"},{label:"汉寿县",value:"430722"},{label:"澧县",value:"430723"},{label:"临澧县",value:"430724"},{label:"桃源县",value:"430725"},{label:"石门县",value:"430726"},{label:"常德市西洞庭管理区",value:"430771"},{label:"津市市",value:"430781"}],[{label:"永定区",value:"430802"},{label:"武陵源区",value:"430811"},{label:"慈利县",value:"430821"},{label:"桑植县",value:"430822"}],[{label:"资阳区",value:"430902"},{label:"赫山区",value:"430903"},{label:"南县",value:"430921"},{label:"桃江县",value:"430922"},{label:"安化县",value:"430923"},{label:"益阳市大通湖管理区",value:"430971"},{label:"湖南益阳高新技术产业园区",value:"430972"},{label:"沅江市",value:"430981"}],[{label:"北湖区",value:"431002"},{label:"苏仙区",value:"431003"},{label:"桂阳县",value:"431021"},{label:"宜章县",value:"431022"},{label:"永兴县",value:"431023"},{label:"嘉禾县",value:"431024"},{label:"临武县",value:"431025"},{label:"汝城县",value:"431026"},{label:"桂东县",value:"431027"},{label:"安仁县",value:"431028"},{label:"资兴市",value:"431081"}],[{label:"零陵区",value:"431102"},{label:"冷水滩区",value:"431103"},{label:"祁阳县",value:"431121"},{label:"东安县",value:"431122"},{label:"双牌县",value:"431123"},{label:"道县",value:"431124"},{label:"江永县",value:"431125"},{label:"宁远县",value:"431126"},{label:"蓝山县",value:"431127"},{label:"新田县",value:"431128"},{label:"江华瑶族自治县",value:"431129"},{label:"永州经济技术开发区",value:"431171"},{label:"永州市金洞管理区",value:"431172"},{label:"永州市回龙圩管理区",value:"431173"}],[{label:"鹤城区",value:"431202"},{label:"中方县",value:"431221"},{label:"沅陵县",value:"431222"},{label:"辰溪县",value:"431223"},{label:"溆浦县",value:"431224"},{label:"会同县",value:"431225"},{label:"麻阳苗族自治县",value:"431226"},{label:"新晃侗族自治县",value:"431227"},{label:"芷江侗族自治县",value:"431228"},{label:"靖州苗族侗族自治县",value:"431229"},{label:"通道侗族自治县",value:"431230"},{label:"怀化市洪江管理区",value:"431271"},{label:"洪江市",value:"431281"}],[{label:"娄星区",value:"431302"},{label:"双峰县",value:"431321"},{label:"新化县",value:"431322"},{label:"冷水江市",value:"431381"},{label:"涟源市",value:"431382"}],[{label:"吉首市",value:"433101"},{label:"泸溪县",value:"433122"},{label:"凤凰县",value:"433123"},{label:"花垣县",value:"433124"},{label:"保靖县",value:"433125"},{label:"古丈县",value:"433126"},{label:"永顺县",value:"433127"},{label:"龙山县",value:"433130"},{label:"湖南吉首经济开发区",value:"433172"},{label:"湖南永顺经济开发区",value:"433173"}]],[[{label:"荔湾区",value:"440103"},{label:"越秀区",value:"440104"},{label:"海珠区",value:"440105"},{label:"天河区",value:"440106"},{label:"白云区",value:"440111"},{label:"黄埔区",value:"440112"},{label:"番禺区",value:"440113"},{label:"花都区",value:"440114"},{label:"南沙区",value:"440115"},{label:"从化区",value:"440117"},{label:"增城区",value:"440118"}],[{label:"武江区",value:"440203"},{label:"浈江区",value:"440204"},{label:"曲江区",value:"440205"},{label:"始兴县",value:"440222"},{label:"仁化县",value:"440224"},{label:"翁源县",value:"440229"},{label:"乳源瑶族自治县",value:"440232"},{label:"新丰县",value:"440233"},{label:"乐昌市",value:"440281"},{label:"南雄市",value:"440282"}],[{label:"罗湖区",value:"440303"},{label:"福田区",value:"440304"},{label:"南山区",value:"440305"},{label:"宝安区",value:"440306"},{label:"龙岗区",value:"440307"},{label:"盐田区",value:"440308"},{label:"龙华区",value:"440309"},{label:"坪山区",value:"440310"}],[{label:"香洲区",value:"440402"},{label:"斗门区",value:"440403"},{label:"金湾区",value:"440404"}],[{label:"龙湖区",value:"440507"},{label:"金平区",value:"440511"},{label:"濠江区",value:"440512"},{label:"潮阳区",value:"440513"},{label:"潮南区",value:"440514"},{label:"澄海区",value:"440515"},{label:"南澳县",value:"440523"}],[{label:"禅城区",value:"440604"},{label:"南海区",value:"440605"},{label:"顺德区",value:"440606"},{label:"三水区",value:"440607"},{label:"高明区",value:"440608"}],[{label:"蓬江区",value:"440703"},{label:"江海区",value:"440704"},{label:"新会区",value:"440705"},{label:"台山市",value:"440781"},{label:"开平市",value:"440783"},{label:"鹤山市",value:"440784"},{label:"恩平市",value:"440785"}],[{label:"赤坎区",value:"440802"},{label:"霞山区",value:"440803"},{label:"坡头区",value:"440804"},{label:"麻章区",value:"440811"},{label:"遂溪县",value:"440823"},{label:"徐闻县",value:"440825"},{label:"廉江市",value:"440881"},{label:"雷州市",value:"440882"},{label:"吴川市",value:"440883"}],[{label:"茂南区",value:"440902"},{label:"电白区",value:"440904"},{label:"高州市",value:"440981"},{label:"化州市",value:"440982"},{label:"信宜市",value:"440983"}],[{label:"端州区",value:"441202"},{label:"鼎湖区",value:"441203"},{label:"高要区",value:"441204"},{label:"广宁县",value:"441223"},{label:"怀集县",value:"441224"},{label:"封开县",value:"441225"},{label:"德庆县",value:"441226"},{label:"四会市",value:"441284"}],[{label:"惠城区",value:"441302"},{label:"惠阳区",value:"441303"},{label:"博罗县",value:"441322"},{label:"惠东县",value:"441323"},{label:"龙门县",value:"441324"}],[{label:"梅江区",value:"441402"},{label:"梅县区",value:"441403"},{label:"大埔县",value:"441422"},{label:"丰顺县",value:"441423"},{label:"五华县",value:"441424"},{label:"平远县",value:"441426"},{label:"蕉岭县",value:"441427"},{label:"兴宁市",value:"441481"}],[{label:"城区",value:"441502"},{label:"海丰县",value:"441521"},{label:"陆河县",value:"441523"},{label:"陆丰市",value:"441581"}],[{label:"源城区",value:"441602"},{label:"紫金县",value:"441621"},{label:"龙川县",value:"441622"},{label:"连平县",value:"441623"},{label:"和平县",value:"441624"},{label:"东源县",value:"441625"}],[{label:"江城区",value:"441702"},{label:"阳东区",value:"441704"},{label:"阳西县",value:"441721"},{label:"阳春市",value:"441781"}],[{label:"清城区",value:"441802"},{label:"清新区",value:"441803"},{label:"佛冈县",value:"441821"},{label:"阳山县",value:"441823"},{label:"连山壮族瑶族自治县",value:"441825"},{label:"连南瑶族自治县",value:"441826"},{label:"英德市",value:"441881"},{label:"连州市",value:"441882"}],[{label:"东莞市",value:"441900"}],[{label:"中山市",value:"442000"}],[{label:"湘桥区",value:"445102"},{label:"潮安区",value:"445103"},{label:"饶平县",value:"445122"}],[{label:"榕城区",value:"445202"},{label:"揭东区",value:"445203"},{label:"揭西县",value:"445222"},{label:"惠来县",value:"445224"},{label:"普宁市",value:"445281"}],[{label:"云城区",value:"445302"},{label:"云安区",value:"445303"},{label:"新兴县",value:"445321"},{label:"郁南县",value:"445322"},{label:"罗定市",value:"445381"}]],[[{label:"兴宁区",value:"450102"},{label:"青秀区",value:"450103"},{label:"江南区",value:"450105"},{label:"西乡塘区",value:"450107"},{label:"良庆区",value:"450108"},{label:"邕宁区",value:"450109"},{label:"武鸣区",value:"450110"},{label:"隆安县",value:"450123"},{label:"马山县",value:"450124"},{label:"上林县",value:"450125"},{label:"宾阳县",value:"450126"},{label:"横县",value:"450127"}],[{label:"城中区",value:"450202"},{label:"鱼峰区",value:"450203"},{label:"柳南区",value:"450204"},{label:"柳北区",value:"450205"},{label:"柳江区",value:"450206"},{label:"柳城县",value:"450222"},{label:"鹿寨县",value:"450223"},{label:"融安县",value:"450224"},{label:"融水苗族自治县",value:"450225"},{label:"三江侗族自治县",value:"450226"}],[{label:"秀峰区",value:"450302"},{label:"叠彩区",value:"450303"},{label:"象山区",value:"450304"},{label:"七星区",value:"450305"},{label:"雁山区",value:"450311"},{label:"临桂区",value:"450312"},{label:"阳朔县",value:"450321"},{label:"灵川县",value:"450323"},{label:"全州县",value:"450324"},{label:"兴安县",value:"450325"},{label:"永福县",value:"450326"},{label:"灌阳县",value:"450327"},{label:"龙胜各族自治县",value:"450328"},{label:"资源县",value:"450329"},{label:"平乐县",value:"450330"},{label:"荔浦县",value:"450331"},{label:"恭城瑶族自治县",value:"450332"}],[{label:"万秀区",value:"450403"},{label:"长洲区",value:"450405"},{label:"龙圩区",value:"450406"},{label:"苍梧县",value:"450421"},{label:"藤县",value:"450422"},{label:"蒙山县",value:"450423"},{label:"岑溪市",value:"450481"}],[{label:"海城区",value:"450502"},{label:"银海区",value:"450503"},{label:"铁山港区",value:"450512"},{label:"合浦县",value:"450521"}],[{label:"港口区",value:"450602"},{label:"防城区",value:"450603"},{label:"上思县",value:"450621"},{label:"东兴市",value:"450681"}],[{label:"钦南区",value:"450702"},{label:"钦北区",value:"450703"},{label:"灵山县",value:"450721"},{label:"浦北县",value:"450722"}],[{label:"港北区",value:"450802"},{label:"港南区",value:"450803"},{label:"覃塘区",value:"450804"},{label:"平南县",value:"450821"},{label:"桂平市",value:"450881"}],[{label:"玉州区",value:"450902"},{label:"福绵区",value:"450903"},{label:"容县",value:"450921"},{label:"陆川县",value:"450922"},{label:"博白县",value:"450923"},{label:"兴业县",value:"450924"},{label:"北流市",value:"450981"}],[{label:"右江区",value:"451002"},{label:"田阳县",value:"451021"},{label:"田东县",value:"451022"},{label:"平果县",value:"451023"},{label:"德保县",value:"451024"},{label:"那坡县",value:"451026"},{label:"凌云县",value:"451027"},{label:"乐业县",value:"451028"},{label:"田林县",value:"451029"},{label:"西林县",value:"451030"},{label:"隆林各族自治县",value:"451031"},{label:"靖西市",value:"451081"}],[{label:"八步区",value:"451102"},{label:"平桂区",value:"451103"},{label:"昭平县",value:"451121"},{label:"钟山县",value:"451122"},{label:"富川瑶族自治县",value:"451123"}],[{label:"金城江区",value:"451202"},{label:"宜州区",value:"451203"},{label:"南丹县",value:"451221"},{label:"天峨县",value:"451222"},{label:"凤山县",value:"451223"},{label:"东兰县",value:"451224"},{label:"罗城仫佬族自治县",value:"451225"},{label:"环江毛南族自治县",value:"451226"},{label:"巴马瑶族自治县",value:"451227"},{label:"都安瑶族自治县",value:"451228"},{label:"大化瑶族自治县",value:"451229"}],[{label:"兴宾区",value:"451302"},{label:"忻城县",value:"451321"},{label:"象州县",value:"451322"},{label:"武宣县",value:"451323"},{label:"金秀瑶族自治县",value:"451324"},{label:"合山市",value:"451381"}],[{label:"江州区",value:"451402"},{label:"扶绥县",value:"451421"},{label:"宁明县",value:"451422"},{label:"龙州县",value:"451423"},{label:"大新县",value:"451424"},{label:"天等县",value:"451425"},{label:"凭祥市",value:"451481"}]],[[{label:"秀英区",value:"460105"},{label:"龙华区",value:"460106"},{label:"琼山区",value:"460107"},{label:"美兰区",value:"460108"}],[{label:"海棠区",value:"460202"},{label:"吉阳区",value:"460203"},{label:"天涯区",value:"460204"},{label:"崖州区",value:"460205"}],[{label:"西沙群岛",value:"460321"},{label:"南沙群岛",value:"460322"},{label:"中沙群岛的岛礁及其海域",value:"460323"}],[{label:"儋州市",value:"460400"}],[{label:"五指山市",value:"469001"},{label:"琼海市",value:"469002"},{label:"文昌市",value:"469005"},{label:"万宁市",value:"469006"},{label:"东方市",value:"469007"},{label:"定安县",value:"469021"},{label:"屯昌县",value:"469022"},{label:"澄迈县",value:"469023"},{label:"临高县",value:"469024"},{label:"白沙黎族自治县",value:"469025"},{label:"昌江黎族自治县",value:"469026"},{label:"乐东黎族自治县",value:"469027"},{label:"陵水黎族自治县",value:"469028"},{label:"保亭黎族苗族自治县",value:"469029"},{label:"琼中黎族苗族自治县",value:"469030"}]],[[{label:"万州区",value:"500101"},{label:"涪陵区",value:"500102"},{label:"渝中区",value:"500103"},{label:"大渡口区",value:"500104"},{label:"江北区",value:"500105"},{label:"沙坪坝区",value:"500106"},{label:"九龙坡区",value:"500107"},{label:"南岸区",value:"500108"},{label:"北碚区",value:"500109"},{label:"綦江区",value:"500110"},{label:"大足区",value:"500111"},{label:"渝北区",value:"500112"},{label:"巴南区",value:"500113"},{label:"黔江区",value:"500114"},{label:"长寿区",value:"500115"},{label:"江津区",value:"500116"},{label:"合川区",value:"500117"},{label:"永川区",value:"500118"},{label:"南川区",value:"500119"},{label:"璧山区",value:"500120"},{label:"铜梁区",value:"500151"},{label:"潼南区",value:"500152"},{label:"荣昌区",value:"500153"},{label:"开州区",value:"500154"},{label:"梁平区",value:"500155"},{label:"武隆区",value:"500156"}],[{label:"城口县",value:"500229"},{label:"丰都县",value:"500230"},{label:"垫江县",value:"500231"},{label:"忠县",value:"500233"},{label:"云阳县",value:"500235"},{label:"奉节县",value:"500236"},{label:"巫山县",value:"500237"},{label:"巫溪县",value:"500238"},{label:"石柱土家族自治县",value:"500240"},{label:"秀山土家族苗族自治县",value:"500241"},{label:"酉阳土家族苗族自治县",value:"500242"},{label:"彭水苗族土家族自治县",value:"500243"}]],[[{label:"锦江区",value:"510104"},{label:"青羊区",value:"510105"},{label:"金牛区",value:"510106"},{label:"武侯区",value:"510107"},{label:"成华区",value:"510108"},{label:"龙泉驿区",value:"510112"},{label:"青白江区",value:"510113"},{label:"新都区",value:"510114"},{label:"温江区",value:"510115"},{label:"双流区",value:"510116"},{label:"郫都区",value:"510117"},{label:"金堂县",value:"510121"},{label:"大邑县",value:"510129"},{label:"蒲江县",value:"510131"},{label:"新津县",value:"510132"},{label:"都江堰市",value:"510181"},{label:"彭州市",value:"510182"},{label:"邛崃市",value:"510183"},{label:"崇州市",value:"510184"},{label:"简阳市",value:"510185"}],[{label:"自流井区",value:"510302"},{label:"贡井区",value:"510303"},{label:"大安区",value:"510304"},{label:"沿滩区",value:"510311"},{label:"荣县",value:"510321"},{label:"富顺县",value:"510322"}],[{label:"东区",value:"510402"},{label:"西区",value:"510403"},{label:"仁和区",value:"510411"},{label:"米易县",value:"510421"},{label:"盐边县",value:"510422"}],[{label:"江阳区",value:"510502"},{label:"纳溪区",value:"510503"},{label:"龙马潭区",value:"510504"},{label:"泸县",value:"510521"},{label:"合江县",value:"510522"},{label:"叙永县",value:"510524"},{label:"古蔺县",value:"510525"}],[{label:"旌阳区",value:"510603"},{label:"罗江区",value:"510604"},{label:"中江县",value:"510623"},{label:"广汉市",value:"510681"},{label:"什邡市",value:"510682"},{label:"绵竹市",value:"510683"}],[{label:"涪城区",value:"510703"},{label:"游仙区",value:"510704"},{label:"安州区",value:"510705"},{label:"三台县",value:"510722"},{label:"盐亭县",value:"510723"},{label:"梓潼县",value:"510725"},{label:"北川羌族自治县",value:"510726"},{label:"平武县",value:"510727"},{label:"江油市",value:"510781"}],[{label:"利州区",value:"510802"},{label:"昭化区",value:"510811"},{label:"朝天区",value:"510812"},{label:"旺苍县",value:"510821"},{label:"青川县",value:"510822"},{label:"剑阁县",value:"510823"},{label:"苍溪县",value:"510824"}],[{label:"船山区",value:"510903"},{label:"安居区",value:"510904"},{label:"蓬溪县",value:"510921"},{label:"射洪县",value:"510922"},{label:"大英县",value:"510923"}],[{label:"市中区",value:"511002"},{label:"东兴区",value:"511011"},{label:"威远县",value:"511024"},{label:"资中县",value:"511025"},{label:"内江经济开发区",value:"511071"},{label:"隆昌市",value:"511083"}],[{label:"市中区",value:"511102"},{label:"沙湾区",value:"511111"},{label:"五通桥区",value:"511112"},{label:"金口河区",value:"511113"},{label:"犍为县",value:"511123"},{label:"井研县",value:"511124"},{label:"夹江县",value:"511126"},{label:"沐川县",value:"511129"},{label:"峨边彝族自治县",value:"511132"},{label:"马边彝族自治县",value:"511133"},{label:"峨眉山市",value:"511181"}],[{label:"顺庆区",value:"511302"},{label:"高坪区",value:"511303"},{label:"嘉陵区",value:"511304"},{label:"南部县",value:"511321"},{label:"营山县",value:"511322"},{label:"蓬安县",value:"511323"},{label:"仪陇县",value:"511324"},{label:"西充县",value:"511325"},{label:"阆中市",value:"511381"}],[{label:"东坡区",value:"511402"},{label:"彭山区",value:"511403"},{label:"仁寿县",value:"511421"},{label:"洪雅县",value:"511423"},{label:"丹棱县",value:"511424"},{label:"青神县",value:"511425"}],[{label:"翠屏区",value:"511502"},{label:"南溪区",value:"511503"},{label:"宜宾县",value:"511521"},{label:"江安县",value:"511523"},{label:"长宁县",value:"511524"},{label:"高县",value:"511525"},{label:"珙县",value:"511526"},{label:"筠连县",value:"511527"},{label:"兴文县",value:"511528"},{label:"屏山县",value:"511529"}],[{label:"广安区",value:"511602"},{label:"前锋区",value:"511603"},{label:"岳池县",value:"511621"},{label:"武胜县",value:"511622"},{label:"邻水县",value:"511623"},{label:"华蓥市",value:"511681"}],[{label:"通川区",value:"511702"},{label:"达川区",value:"511703"},{label:"宣汉县",value:"511722"},{label:"开江县",value:"511723"},{label:"大竹县",value:"511724"},{label:"渠县",value:"511725"},{label:"达州经济开发区",value:"511771"},{label:"万源市",value:"511781"}],[{label:"雨城区",value:"511802"},{label:"名山区",value:"511803"},{label:"荥经县",value:"511822"},{label:"汉源县",value:"511823"},{label:"石棉县",value:"511824"},{label:"天全县",value:"511825"},{label:"芦山县",value:"511826"},{label:"宝兴县",value:"511827"}],[{label:"巴州区",value:"511902"},{label:"恩阳区",value:"511903"},{label:"通江县",value:"511921"},{label:"南江县",value:"511922"},{label:"平昌县",value:"511923"},{label:"巴中经济开发区",value:"511971"}],[{label:"雁江区",value:"512002"},{label:"安岳县",value:"512021"},{label:"乐至县",value:"512022"}],[{label:"马尔康市",value:"513201"},{label:"汶川县",value:"513221"},{label:"理县",value:"513222"},{label:"茂县",value:"513223"},{label:"松潘县",value:"513224"},{label:"九寨沟县",value:"513225"},{label:"金川县",value:"513226"},{label:"小金县",value:"513227"},{label:"黑水县",value:"513228"},{label:"壤塘县",value:"513230"},{label:"阿坝县",value:"513231"},{label:"若尔盖县",value:"513232"},{label:"红原县",value:"513233"}],[{label:"康定市",value:"513301"},{label:"泸定县",value:"513322"},{label:"丹巴县",value:"513323"},{label:"九龙县",value:"513324"},{label:"雅江县",value:"513325"},{label:"道孚县",value:"513326"},{label:"炉霍县",value:"513327"},{label:"甘孜县",value:"513328"},{label:"新龙县",value:"513329"},{label:"德格县",value:"513330"},{label:"白玉县",value:"513331"},{label:"石渠县",value:"513332"},{label:"色达县",value:"513333"},{label:"理塘县",value:"513334"},{label:"巴塘县",value:"513335"},{label:"乡城县",value:"513336"},{label:"稻城县",value:"513337"},{label:"得荣县",value:"513338"}],[{label:"西昌市",value:"513401"},{label:"木里藏族自治县",value:"513422"},{label:"盐源县",value:"513423"},{label:"德昌县",value:"513424"},{label:"会理县",value:"513425"},{label:"会东县",value:"513426"},{label:"宁南县",value:"513427"},{label:"普格县",value:"513428"},{label:"布拖县",value:"513429"},{label:"金阳县",value:"513430"},{label:"昭觉县",value:"513431"},{label:"喜德县",value:"513432"},{label:"冕宁县",value:"513433"},{label:"越西县",value:"513434"},{label:"甘洛县",value:"513435"},{label:"美姑县",value:"513436"},{label:"雷波县",value:"513437"}]],[[{label:"南明区",value:"520102"},{label:"云岩区",value:"520103"},{label:"花溪区",value:"520111"},{label:"乌当区",value:"520112"},{label:"白云区",value:"520113"},{label:"观山湖区",value:"520115"},{label:"开阳县",value:"520121"},{label:"息烽县",value:"520122"},{label:"修文县",value:"520123"},{label:"清镇市",value:"520181"}],[{label:"钟山区",value:"520201"},{label:"六枝特区",value:"520203"},{label:"水城县",value:"520221"},{label:"盘州市",value:"520281"}],[{label:"红花岗区",value:"520302"},{label:"汇川区",value:"520303"},{label:"播州区",value:"520304"},{label:"桐梓县",value:"520322"},{label:"绥阳县",value:"520323"},{label:"正安县",value:"520324"},{label:"道真仡佬族苗族自治县",value:"520325"},{label:"务川仡佬族苗族自治县",value:"520326"},{label:"凤冈县",value:"520327"},{label:"湄潭县",value:"520328"},{label:"余庆县",value:"520329"},{label:"习水县",value:"520330"},{label:"赤水市",value:"520381"},{label:"仁怀市",value:"520382"}],[{label:"西秀区",value:"520402"},{label:"平坝区",value:"520403"},{label:"普定县",value:"520422"},{label:"镇宁布依族苗族自治县",value:"520423"},{label:"关岭布依族苗族自治县",value:"520424"},{label:"紫云苗族布依族自治县",value:"520425"}],[{label:"七星关区",value:"520502"},{label:"大方县",value:"520521"},{label:"黔西县",value:"520522"},{label:"金沙县",value:"520523"},{label:"织金县",value:"520524"},{label:"纳雍县",value:"520525"},{label:"威宁彝族回族苗族自治县",value:"520526"},{label:"赫章县",value:"520527"}],[{label:"碧江区",value:"520602"},{label:"万山区",value:"520603"},{label:"江口县",value:"520621"},{label:"玉屏侗族自治县",value:"520622"},{label:"石阡县",value:"520623"},{label:"思南县",value:"520624"},{label:"印江土家族苗族自治县",value:"520625"},{label:"德江县",value:"520626"},{label:"沿河土家族自治县",value:"520627"},{label:"松桃苗族自治县",value:"520628"}],[{label:"兴义市",value:"522301"},{label:"兴仁县",value:"522322"},{label:"普安县",value:"522323"},{label:"晴隆县",value:"522324"},{label:"贞丰县",value:"522325"},{label:"望谟县",value:"522326"},{label:"册亨县",value:"522327"},{label:"安龙县",value:"522328"}],[{label:"凯里市",value:"522601"},{label:"黄平县",value:"522622"},{label:"施秉县",value:"522623"},{label:"三穗县",value:"522624"},{label:"镇远县",value:"522625"},{label:"岑巩县",value:"522626"},{label:"天柱县",value:"522627"},{label:"锦屏县",value:"522628"},{label:"剑河县",value:"522629"},{label:"台江县",value:"522630"},{label:"黎平县",value:"522631"},{label:"榕江县",value:"522632"},{label:"从江县",value:"522633"},{label:"雷山县",value:"522634"},{label:"麻江县",value:"522635"},{label:"丹寨县",value:"522636"}],[{label:"都匀市",value:"522701"},{label:"福泉市",value:"522702"},{label:"荔波县",value:"522722"},{label:"贵定县",value:"522723"},{label:"瓮安县",value:"522725"},{label:"独山县",value:"522726"},{label:"平塘县",value:"522727"},{label:"罗甸县",value:"522728"},{label:"长顺县",value:"522729"},{label:"龙里县",value:"522730"},{label:"惠水县",value:"522731"},{label:"三都水族自治县",value:"522732"}]],[[{label:"五华区",value:"530102"},{label:"盘龙区",value:"530103"},{label:"官渡区",value:"530111"},{label:"西山区",value:"530112"},{label:"东川区",value:"530113"},{label:"呈贡区",value:"530114"},{label:"晋宁区",value:"530115"},{label:"富民县",value:"530124"},{label:"宜良县",value:"530125"},{label:"石林彝族自治县",value:"530126"},{label:"嵩明县",value:"530127"},{label:"禄劝彝族苗族自治县",value:"530128"},{label:"寻甸回族彝族自治县",value:"530129"},{label:"安宁市",value:"530181"}],[{label:"麒麟区",value:"530302"},{label:"沾益区",value:"530303"},{label:"马龙县",value:"530321"},{label:"陆良县",value:"530322"},{label:"师宗县",value:"530323"},{label:"罗平县",value:"530324"},{label:"富源县",value:"530325"},{label:"会泽县",value:"530326"},{label:"宣威市",value:"530381"}],[{label:"红塔区",value:"530402"},{label:"江川区",value:"530403"},{label:"澄江县",value:"530422"},{label:"通海县",value:"530423"},{label:"华宁县",value:"530424"},{label:"易门县",value:"530425"},{label:"峨山彝族自治县",value:"530426"},{label:"新平彝族傣族自治县",value:"530427"},{label:"元江哈尼族彝族傣族自治县",value:"530428"}],[{label:"隆阳区",value:"530502"},{label:"施甸县",value:"530521"},{label:"龙陵县",value:"530523"},{label:"昌宁县",value:"530524"},{label:"腾冲市",value:"530581"}],[{label:"昭阳区",value:"530602"},{label:"鲁甸县",value:"530621"},{label:"巧家县",value:"530622"},{label:"盐津县",value:"530623"},{label:"大关县",value:"530624"},{label:"永善县",value:"530625"},{label:"绥江县",value:"530626"},{label:"镇雄县",value:"530627"},{label:"彝良县",value:"530628"},{label:"威信县",value:"530629"},{label:"水富县",value:"530630"}],[{label:"古城区",value:"530702"},{label:"玉龙纳西族自治县",value:"530721"},{label:"永胜县",value:"530722"},{label:"华坪县",value:"530723"},{label:"宁蒗彝族自治县",value:"530724"}],[{label:"思茅区",value:"530802"},{label:"宁洱哈尼族彝族自治县",value:"530821"},{label:"墨江哈尼族自治县",value:"530822"},{label:"景东彝族自治县",value:"530823"},{label:"景谷傣族彝族自治县",value:"530824"},{label:"镇沅彝族哈尼族拉祜族自治县",value:"530825"},{label:"江城哈尼族彝族自治县",value:"530826"},{label:"孟连傣族拉祜族佤族自治县",value:"530827"},{label:"澜沧拉祜族自治县",value:"530828"},{label:"西盟佤族自治县",value:"530829"}],[{label:"临翔区",value:"530902"},{label:"凤庆县",value:"530921"},{label:"云县",value:"530922"},{label:"永德县",value:"530923"},{label:"镇康县",value:"530924"},{label:"双江拉祜族佤族布朗族傣族自治县",value:"530925"},{label:"耿马傣族佤族自治县",value:"530926"},{label:"沧源佤族自治县",value:"530927"}],[{label:"楚雄市",value:"532301"},{label:"双柏县",value:"532322"},{label:"牟定县",value:"532323"},{label:"南华县",value:"532324"},{label:"姚安县",value:"532325"},{label:"大姚县",value:"532326"},{label:"永仁县",value:"532327"},{label:"元谋县",value:"532328"},{label:"武定县",value:"532329"},{label:"禄丰县",value:"532331"}],[{label:"个旧市",value:"532501"},{label:"开远市",value:"532502"},{label:"蒙自市",value:"532503"},{label:"弥勒市",value:"532504"},{label:"屏边苗族自治县",value:"532523"},{label:"建水县",value:"532524"},{label:"石屏县",value:"532525"},{label:"泸西县",value:"532527"},{label:"元阳县",value:"532528"},{label:"红河县",value:"532529"},{label:"金平苗族瑶族傣族自治县",value:"532530"},{label:"绿春县",value:"532531"},{label:"河口瑶族自治县",value:"532532"}],[{label:"文山市",value:"532601"},{label:"砚山县",value:"532622"},{label:"西畴县",value:"532623"},{label:"麻栗坡县",value:"532624"},{label:"马关县",value:"532625"},{label:"丘北县",value:"532626"},{label:"广南县",value:"532627"},{label:"富宁县",value:"532628"}],[{label:"景洪市",value:"532801"},{label:"勐海县",value:"532822"},{label:"勐腊县",value:"532823"}],[{label:"大理市",value:"532901"},{label:"漾濞彝族自治县",value:"532922"},{label:"祥云县",value:"532923"},{label:"宾川县",value:"532924"},{label:"弥渡县",value:"532925"},{label:"南涧彝族自治县",value:"532926"},{label:"巍山彝族回族自治县",value:"532927"},{label:"永平县",value:"532928"},{label:"云龙县",value:"532929"},{label:"洱源县",value:"532930"},{label:"剑川县",value:"532931"},{label:"鹤庆县",value:"532932"}],[{label:"瑞丽市",value:"533102"},{label:"芒市",value:"533103"},{label:"梁河县",value:"533122"},{label:"盈江县",value:"533123"},{label:"陇川县",value:"533124"}],[{label:"泸水市",value:"533301"},{label:"福贡县",value:"533323"},{label:"贡山独龙族怒族自治县",value:"533324"},{label:"兰坪白族普米族自治县",value:"533325"}],[{label:"香格里拉市",value:"533401"},{label:"德钦县",value:"533422"},{label:"维西傈僳族自治县",value:"533423"}]],[[{label:"城关区",value:"540102"},{label:"堆龙德庆区",value:"540103"},{label:"林周县",value:"540121"},{label:"当雄县",value:"540122"},{label:"尼木县",value:"540123"},{label:"曲水县",value:"540124"},{label:"达孜县",value:"540126"},{label:"墨竹工卡县",value:"540127"},{label:"格尔木藏青工业园区",value:"540171"},{label:"拉萨经济技术开发区",value:"540172"},{label:"西藏文化旅游创意园区",value:"540173"},{label:"达孜工业园区",value:"540174"}],[{label:"桑珠孜区",value:"540202"},{label:"南木林县",value:"540221"},{label:"江孜县",value:"540222"},{label:"定日县",value:"540223"},{label:"萨迦县",value:"540224"},{label:"拉孜县",value:"540225"},{label:"昂仁县",value:"540226"},{label:"谢通门县",value:"540227"},{label:"白朗县",value:"540228"},{label:"仁布县",value:"540229"},{label:"康马县",value:"540230"},{label:"定结县",value:"540231"},{label:"仲巴县",value:"540232"},{label:"亚东县",value:"540233"},{label:"吉隆县",value:"540234"},{label:"聂拉木县",value:"540235"},{label:"萨嘎县",value:"540236"},{label:"岗巴县",value:"540237"}],[{label:"卡若区",value:"540302"},{label:"江达县",value:"540321"},{label:"贡觉县",value:"540322"},{label:"类乌齐县",value:"540323"},{label:"丁青县",value:"540324"},{label:"察雅县",value:"540325"},{label:"八宿县",value:"540326"},{label:"左贡县",value:"540327"},{label:"芒康县",value:"540328"},{label:"洛隆县",value:"540329"},{label:"边坝县",value:"540330"}],[{label:"巴宜区",value:"540402"},{label:"工布江达县",value:"540421"},{label:"米林县",value:"540422"},{label:"墨脱县",value:"540423"},{label:"波密县",value:"540424"},{label:"察隅县",value:"540425"},{label:"朗县",value:"540426"}],[{label:"乃东区",value:"540502"},{label:"扎囊县",value:"540521"},{label:"贡嘎县",value:"540522"},{label:"桑日县",value:"540523"},{label:"琼结县",value:"540524"},{label:"曲松县",value:"540525"},{label:"措美县",value:"540526"},{label:"洛扎县",value:"540527"},{label:"加查县",value:"540528"},{label:"隆子县",value:"540529"},{label:"错那县",value:"540530"},{label:"浪卡子县",value:"540531"}],[{label:"那曲县",value:"542421"},{label:"嘉黎县",value:"542422"},{label:"比如县",value:"542423"},{label:"聂荣县",value:"542424"},{label:"安多县",value:"542425"},{label:"申扎县",value:"542426"},{label:"索县",value:"542427"},{label:"班戈县",value:"542428"},{label:"巴青县",value:"542429"},{label:"尼玛县",value:"542430"},{label:"双湖县",value:"542431"}],[{label:"普兰县",value:"542521"},{label:"札达县",value:"542522"},{label:"噶尔县",value:"542523"},{label:"日土县",value:"542524"},{label:"革吉县",value:"542525"},{label:"改则县",value:"542526"},{label:"措勤县",value:"542527"}]],[[{label:"新城区",value:"610102"},{label:"碑林区",value:"610103"},{label:"莲湖区",value:"610104"},{label:"灞桥区",value:"610111"},{label:"未央区",value:"610112"},{label:"雁塔区",value:"610113"},{label:"阎良区",value:"610114"},{label:"临潼区",value:"610115"},{label:"长安区",value:"610116"},{label:"高陵区",value:"610117"},{label:"鄠邑区",value:"610118"},{label:"蓝田县",value:"610122"},{label:"周至县",value:"610124"}],[{label:"王益区",value:"610202"},{label:"印台区",value:"610203"},{label:"耀州区",value:"610204"},{label:"宜君县",value:"610222"}],[{label:"渭滨区",value:"610302"},{label:"金台区",value:"610303"},{label:"陈仓区",value:"610304"},{label:"凤翔县",value:"610322"},{label:"岐山县",value:"610323"},{label:"扶风县",value:"610324"},{label:"眉县",value:"610326"},{label:"陇县",value:"610327"},{label:"千阳县",value:"610328"},{label:"麟游县",value:"610329"},{label:"凤县",value:"610330"},{label:"太白县",value:"610331"}],[{label:"秦都区",value:"610402"},{label:"杨陵区",value:"610403"},{label:"渭城区",value:"610404"},{label:"三原县",value:"610422"},{label:"泾阳县",value:"610423"},{label:"乾县",value:"610424"},{label:"礼泉县",value:"610425"},{label:"永寿县",value:"610426"},{label:"彬县",value:"610427"},{label:"长武县",value:"610428"},{label:"旬邑县",value:"610429"},{label:"淳化县",value:"610430"},{label:"武功县",value:"610431"},{label:"兴平市",value:"610481"}],[{label:"临渭区",value:"610502"},{label:"华州区",value:"610503"},{label:"潼关县",value:"610522"},{label:"大荔县",value:"610523"},{label:"合阳县",value:"610524"},{label:"澄城县",value:"610525"},{label:"蒲城县",value:"610526"},{label:"白水县",value:"610527"},{label:"富平县",value:"610528"},{label:"韩城市",value:"610581"},{label:"华阴市",value:"610582"}],[{label:"宝塔区",value:"610602"},{label:"安塞区",value:"610603"},{label:"延长县",value:"610621"},{label:"延川县",value:"610622"},{label:"子长县",value:"610623"},{label:"志丹县",value:"610625"},{label:"吴起县",value:"610626"},{label:"甘泉县",value:"610627"},{label:"富县",value:"610628"},{label:"洛川县",value:"610629"},{label:"宜川县",value:"610630"},{label:"黄龙县",value:"610631"},{label:"黄陵县",value:"610632"}],[{label:"汉台区",value:"610702"},{label:"南郑区",value:"610703"},{label:"城固县",value:"610722"},{label:"洋县",value:"610723"},{label:"西乡县",value:"610724"},{label:"勉县",value:"610725"},{label:"宁强县",value:"610726"},{label:"略阳县",value:"610727"},{label:"镇巴县",value:"610728"},{label:"留坝县",value:"610729"},{label:"佛坪县",value:"610730"}],[{label:"榆阳区",value:"610802"},{label:"横山区",value:"610803"},{label:"府谷县",value:"610822"},{label:"靖边县",value:"610824"},{label:"定边县",value:"610825"},{label:"绥德县",value:"610826"},{label:"米脂县",value:"610827"},{label:"佳县",value:"610828"},{label:"吴堡县",value:"610829"},{label:"清涧县",value:"610830"},{label:"子洲县",value:"610831"},{label:"神木市",value:"610881"}],[{label:"汉滨区",value:"610902"},{label:"汉阴县",value:"610921"},{label:"石泉县",value:"610922"},{label:"宁陕县",value:"610923"},{label:"紫阳县",value:"610924"},{label:"岚皋县",value:"610925"},{label:"平利县",value:"610926"},{label:"镇坪县",value:"610927"},{label:"旬阳县",value:"610928"},{label:"白河县",value:"610929"}],[{label:"商州区",value:"611002"},{label:"洛南县",value:"611021"},{label:"丹凤县",value:"611022"},{label:"商南县",value:"611023"},{label:"山阳县",value:"611024"},{label:"镇安县",value:"611025"},{label:"柞水县",value:"611026"}]],[[{label:"城关区",value:"620102"},{label:"七里河区",value:"620103"},{label:"西固区",value:"620104"},{label:"安宁区",value:"620105"},{label:"红古区",value:"620111"},{label:"永登县",value:"620121"},{label:"皋兰县",value:"620122"},{label:"榆中县",value:"620123"},{label:"兰州新区",value:"620171"}],[{label:"嘉峪关市",value:"620201"}],[{label:"金川区",value:"620302"},{label:"永昌县",value:"620321"}],[{label:"白银区",value:"620402"},{label:"平川区",value:"620403"},{label:"靖远县",value:"620421"},{label:"会宁县",value:"620422"},{label:"景泰县",value:"620423"}],[{label:"秦州区",value:"620502"},{label:"麦积区",value:"620503"},{label:"清水县",value:"620521"},{label:"秦安县",value:"620522"},{label:"甘谷县",value:"620523"},{label:"武山县",value:"620524"},{label:"张家川回族自治县",value:"620525"}],[{label:"凉州区",value:"620602"},{label:"民勤县",value:"620621"},{label:"古浪县",value:"620622"},{label:"天祝藏族自治县",value:"620623"}],[{label:"甘州区",value:"620702"},{label:"肃南裕固族自治县",value:"620721"},{label:"民乐县",value:"620722"},{label:"临泽县",value:"620723"},{label:"高台县",value:"620724"},{label:"山丹县",value:"620725"}],[{label:"崆峒区",value:"620802"},{label:"泾川县",value:"620821"},{label:"灵台县",value:"620822"},{label:"崇信县",value:"620823"},{label:"华亭县",value:"620824"},{label:"庄浪县",value:"620825"},{label:"静宁县",value:"620826"},{label:"平凉工业园区",value:"620871"}],[{label:"肃州区",value:"620902"},{label:"金塔县",value:"620921"},{label:"瓜州县",value:"620922"},{label:"肃北蒙古族自治县",value:"620923"},{label:"阿克塞哈萨克族自治县",value:"620924"},{label:"玉门市",value:"620981"},{label:"敦煌市",value:"620982"}],[{label:"西峰区",value:"621002"},{label:"庆城县",value:"621021"},{label:"环县",value:"621022"},{label:"华池县",value:"621023"},{label:"合水县",value:"621024"},{label:"正宁县",value:"621025"},{label:"宁县",value:"621026"},{label:"镇原县",value:"621027"}],[{label:"安定区",value:"621102"},{label:"通渭县",value:"621121"},{label:"陇西县",value:"621122"},{label:"渭源县",value:"621123"},{label:"临洮县",value:"621124"},{label:"漳县",value:"621125"},{label:"岷县",value:"621126"}],[{label:"武都区",value:"621202"},{label:"成县",value:"621221"},{label:"文县",value:"621222"},{label:"宕昌县",value:"621223"},{label:"康县",value:"621224"},{label:"西和县",value:"621225"},{label:"礼县",value:"621226"},{label:"徽县",value:"621227"},{label:"两当县",value:"621228"}],[{label:"临夏市",value:"622901"},{label:"临夏县",value:"622921"},{label:"康乐县",value:"622922"},{label:"永靖县",value:"622923"},{label:"广河县",value:"622924"},{label:"和政县",value:"622925"},{label:"东乡族自治县",value:"622926"},{label:"积石山保安族东乡族撒拉族自治县",value:"622927"}],[{label:"合作市",value:"623001"},{label:"临潭县",value:"623021"},{label:"卓尼县",value:"623022"},{label:"舟曲县",value:"623023"},{label:"迭部县",value:"623024"},{label:"玛曲县",value:"623025"},{label:"碌曲县",value:"623026"},{label:"夏河县",value:"623027"}]],[[{label:"城东区",value:"630102"},{label:"城中区",value:"630103"},{label:"城西区",value:"630104"},{label:"城北区",value:"630105"},{label:"大通回族土族自治县",value:"630121"},{label:"湟中县",value:"630122"},{label:"湟源县",value:"630123"}],[{label:"乐都区",value:"630202"},{label:"平安区",value:"630203"},{label:"民和回族土族自治县",value:"630222"},{label:"互助土族自治县",value:"630223"},{label:"化隆回族自治县",value:"630224"},{label:"循化撒拉族自治县",value:"630225"}],[{label:"门源回族自治县",value:"632221"},{label:"祁连县",value:"632222"},{label:"海晏县",value:"632223"},{label:"刚察县",value:"632224"}],[{label:"同仁县",value:"632321"},{label:"尖扎县",value:"632322"},{label:"泽库县",value:"632323"},{label:"河南蒙古族自治县",value:"632324"}],[{label:"共和县",value:"632521"},{label:"同德县",value:"632522"},{label:"贵德县",value:"632523"},{label:"兴海县",value:"632524"},{label:"贵南县",value:"632525"}],[{label:"玛沁县",value:"632621"},{label:"班玛县",value:"632622"},{label:"甘德县",value:"632623"},{label:"达日县",value:"632624"},{label:"久治县",value:"632625"},{label:"玛多县",value:"632626"}],[{label:"玉树市",value:"632701"},{label:"杂多县",value:"632722"},{label:"称多县",value:"632723"},{label:"治多县",value:"632724"},{label:"囊谦县",value:"632725"},{label:"曲麻莱县",value:"632726"}],[{label:"格尔木市",value:"632801"},{label:"德令哈市",value:"632802"},{label:"乌兰县",value:"632821"},{label:"都兰县",value:"632822"},{label:"天峻县",value:"632823"},{label:"大柴旦行政委员会",value:"632857"},{label:"冷湖行政委员会",value:"632858"},{label:"茫崖行政委员会",value:"632859"}]],[[{label:"兴庆区",value:"640104"},{label:"西夏区",value:"640105"},{label:"金凤区",value:"640106"},{label:"永宁县",value:"640121"},{label:"贺兰县",value:"640122"},{label:"灵武市",value:"640181"}],[{label:"大武口区",value:"640202"},{label:"惠农区",value:"640205"},{label:"平罗县",value:"640221"}],[{label:"利通区",value:"640302"},{label:"红寺堡区",value:"640303"},{label:"盐池县",value:"640323"},{label:"同心县",value:"640324"},{label:"青铜峡市",value:"640381"}],[{label:"原州区",value:"640402"},{label:"西吉县",value:"640422"},{label:"隆德县",value:"640423"},{label:"泾源县",value:"640424"},{label:"彭阳县",value:"640425"}],[{label:"沙坡头区",value:"640502"},{label:"中宁县",value:"640521"},{label:"海原县",value:"640522"}]],[[{label:"天山区",value:"650102"},{label:"沙依巴克区",value:"650103"},{label:"新市区",value:"650104"},{label:"水磨沟区",value:"650105"},{label:"头屯河区",value:"650106"},{label:"达坂城区",value:"650107"},{label:"米东区",value:"650109"},{label:"乌鲁木齐县",value:"650121"},{label:"乌鲁木齐经济技术开发区",value:"650171"},{label:"乌鲁木齐高新技术产业开发区",value:"650172"}],[{label:"独山子区",value:"650202"},{label:"克拉玛依区",value:"650203"},{label:"白碱滩区",value:"650204"},{label:"乌尔禾区",value:"650205"}],[{label:"高昌区",value:"650402"},{label:"鄯善县",value:"650421"},{label:"托克逊县",value:"650422"}],[{label:"伊州区",value:"650502"},{label:"巴里坤哈萨克自治县",value:"650521"},{label:"伊吾县",value:"650522"}],[{label:"昌吉市",value:"652301"},{label:"阜康市",value:"652302"},{label:"呼图壁县",value:"652323"},{label:"玛纳斯县",value:"652324"},{label:"奇台县",value:"652325"},{label:"吉木萨尔县",value:"652327"},{label:"木垒哈萨克自治县",value:"652328"}],[{label:"博乐市",value:"652701"},{label:"阿拉山口市",value:"652702"},{label:"精河县",value:"652722"},{label:"温泉县",value:"652723"}],[{label:"库尔勒市",value:"652801"},{label:"轮台县",value:"652822"},{label:"尉犁县",value:"652823"},{label:"若羌县",value:"652824"},{label:"且末县",value:"652825"},{label:"焉耆回族自治县",value:"652826"},{label:"和静县",value:"652827"},{label:"和硕县",value:"652828"},{label:"博湖县",value:"652829"},{label:"库尔勒经济技术开发区",value:"652871"}],[{label:"阿克苏市",value:"652901"},{label:"温宿县",value:"652922"},{label:"库车县",value:"652923"},{label:"沙雅县",value:"652924"},{label:"新和县",value:"652925"},{label:"拜城县",value:"652926"},{label:"乌什县",value:"652927"},{label:"阿瓦提县",value:"652928"},{label:"柯坪县",value:"652929"}],[{label:"阿图什市",value:"653001"},{label:"阿克陶县",value:"653022"},{label:"阿合奇县",value:"653023"},{label:"乌恰县",value:"653024"}],[{label:"喀什市",value:"653101"},{label:"疏附县",value:"653121"},{label:"疏勒县",value:"653122"},{label:"英吉沙县",value:"653123"},{label:"泽普县",value:"653124"},{label:"莎车县",value:"653125"},{label:"叶城县",value:"653126"},{label:"麦盖提县",value:"653127"},{label:"岳普湖县",value:"653128"},{label:"伽师县",value:"653129"},{label:"巴楚县",value:"653130"},{label:"塔什库尔干塔吉克自治县",value:"653131"}],[{label:"和田市",value:"653201"},{label:"和田县",value:"653221"},{label:"墨玉县",value:"653222"},{label:"皮山县",value:"653223"},{label:"洛浦县",value:"653224"},{label:"策勒县",value:"653225"},{label:"于田县",value:"653226"},{label:"民丰县",value:"653227"}],[{label:"伊宁市",value:"654002"},{label:"奎屯市",value:"654003"},{label:"霍尔果斯市",value:"654004"},{label:"伊宁县",value:"654021"},{label:"察布查尔锡伯自治县",value:"654022"},{label:"霍城县",value:"654023"},{label:"巩留县",value:"654024"},{label:"新源县",value:"654025"},{label:"昭苏县",value:"654026"},{label:"特克斯县",value:"654027"},{label:"尼勒克县",value:"654028"}],[{label:"塔城市",value:"654201"},{label:"乌苏市",value:"654202"},{label:"额敏县",value:"654221"},{label:"沙湾县",value:"654223"},{label:"托里县",value:"654224"},{label:"裕民县",value:"654225"},{label:"和布克赛尔蒙古自治县",value:"654226"}],[{label:"阿勒泰市",value:"654301"},{label:"布尔津县",value:"654321"},{label:"富蕴县",value:"654322"},{label:"福海县",value:"654323"},{label:"哈巴河县",value:"654324"},{label:"青河县",value:"654325"},{label:"吉木乃县",value:"654326"}],[{label:"石河子市",value:"659001"},{label:"阿拉尔市",value:"659002"},{label:"图木舒克市",value:"659003"},{label:"五家渠市",value:"659004"},{label:"铁门关市",value:"659006"}]],[[{label:"台北",value:"660101"}],[{label:"高雄",value:"660201"}],[{label:"基隆",value:"660301"}],[{label:"台中",value:"660401"}],[{label:"台南",value:"660501"}],[{label:"新竹",value:"660601"}],[{label:"嘉义",value:"660701"}],[{label:"宜兰",value:"660801"}],[{label:"桃园",value:"660901"}],[{label:"苗栗",value:"661001"}],[{label:"彰化",value:"661101"}],[{label:"南投",value:"661201"}],[{label:"云林",value:"661301"}],[{label:"屏东",value:"661401"}],[{label:"台东",value:"661501"}],[{label:"花莲",value:"661601"}],[{label:"澎湖",value:"661701"}]],[[{label:"香港岛",value:"670101"}],[{label:"九龙",value:"670201"}],[{label:"新界",value:"670301"}]],[[{label:"澳门半岛",value:"680101"}],[{label:"氹仔岛",value:"680201"}],[{label:"路环岛",value:"680301"}],[{label:"路氹城",value:"680401"}]]],u=t;l.default=u},"0de9":function(e,l,a){"use strict";function t(e){var l=Object.prototype.toString.call(e);return l.substring(8,l.length-1)}function u(){for(var e=arguments.length,l=new Array(e),a=0;a<e;a++)l[a]=arguments[a];var u=l.map(function(e){var l=Object.prototype.toString.call(e);if("[object object]"===l.toLowerCase())try{e="---BEGIN:JSON---"+JSON.stringify(e)+"---END:JSON---"}catch(u){e="[object object]"}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var a=t(e).toUpperCase();e="NUMBER"===a||"BOOLEAN"===a?"---BEGIN:"+a+"---"+e+"---END:"+a+"---":String(e)}return e}),n="";if(u.length>1){var r=u.pop();n=u.join("---COMMA---"),0===r.indexOf(" at ")?n+=r:n+="---COMMA---"+r}else n=u[0];return n}Object.defineProperty(l,"__esModule",{value:!0}),l.default=u},"18bf":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[[{label:"市辖区",value:"1101"}],[{label:"市辖区",value:"1201"}],[{label:"石家庄市",value:"1301"},{label:"唐山市",value:"1302"},{label:"秦皇岛市",value:"1303"},{label:"邯郸市",value:"1304"},{label:"邢台市",value:"1305"},{label:"保定市",value:"1306"},{label:"张家口市",value:"1307"},{label:"承德市",value:"1308"},{label:"沧州市",value:"1309"},{label:"廊坊市",value:"1310"},{label:"衡水市",value:"1311"}],[{label:"太原市",value:"1401"},{label:"大同市",value:"1402"},{label:"阳泉市",value:"1403"},{label:"长治市",value:"1404"},{label:"晋城市",value:"1405"},{label:"朔州市",value:"1406"},{label:"晋中市",value:"1407"},{label:"运城市",value:"1408"},{label:"忻州市",value:"1409"},{label:"临汾市",value:"1410"},{label:"吕梁市",value:"1411"}],[{label:"呼和浩特市",value:"1501"},{label:"包头市",value:"1502"},{label:"乌海市",value:"1503"},{label:"赤峰市",value:"1504"},{label:"通辽市",value:"1505"},{label:"鄂尔多斯市",value:"1506"},{label:"呼伦贝尔市",value:"1507"},{label:"巴彦淖尔市",value:"1508"},{label:"乌兰察布市",value:"1509"},{label:"兴安盟",value:"1522"},{label:"锡林郭勒盟",value:"1525"},{label:"阿拉善盟",value:"1529"}],[{label:"沈阳市",value:"2101"},{label:"大连市",value:"2102"},{label:"鞍山市",value:"2103"},{label:"抚顺市",value:"2104"},{label:"本溪市",value:"2105"},{label:"丹东市",value:"2106"},{label:"锦州市",value:"2107"},{label:"营口市",value:"2108"},{label:"阜新市",value:"2109"},{label:"辽阳市",value:"2110"},{label:"盘锦市",value:"2111"},{label:"铁岭市",value:"2112"},{label:"朝阳市",value:"2113"},{label:"葫芦岛市",value:"2114"}],[{label:"长春市",value:"2201"},{label:"吉林市",value:"2202"},{label:"四平市",value:"2203"},{label:"辽源市",value:"2204"},{label:"通化市",value:"2205"},{label:"白山市",value:"2206"},{label:"松原市",value:"2207"},{label:"白城市",value:"2208"},{label:"延边朝鲜族自治州",value:"2224"}],[{label:"哈尔滨市",value:"2301"},{label:"齐齐哈尔市",value:"2302"},{label:"鸡西市",value:"2303"},{label:"鹤岗市",value:"2304"},{label:"双鸭山市",value:"2305"},{label:"大庆市",value:"2306"},{label:"伊春市",value:"2307"},{label:"佳木斯市",value:"2308"},{label:"七台河市",value:"2309"},{label:"牡丹江市",value:"2310"},{label:"黑河市",value:"2311"},{label:"绥化市",value:"2312"},{label:"大兴安岭地区",value:"2327"}],[{label:"市辖区",value:"3101"}],[{label:"南京市",value:"3201"},{label:"无锡市",value:"3202"},{label:"徐州市",value:"3203"},{label:"常州市",value:"3204"},{label:"苏州市",value:"3205"},{label:"南通市",value:"3206"},{label:"连云港市",value:"3207"},{label:"淮安市",value:"3208"},{label:"盐城市",value:"3209"},{label:"扬州市",value:"3210"},{label:"镇江市",value:"3211"},{label:"泰州市",value:"3212"},{label:"宿迁市",value:"3213"}],[{label:"杭州市",value:"3301"},{label:"宁波市",value:"3302"},{label:"温州市",value:"3303"},{label:"嘉兴市",value:"3304"},{label:"湖州市",value:"3305"},{label:"绍兴市",value:"3306"},{label:"金华市",value:"3307"},{label:"衢州市",value:"3308"},{label:"舟山市",value:"3309"},{label:"台州市",value:"3310"},{label:"丽水市",value:"3311"}],[{label:"合肥市",value:"3401"},{label:"芜湖市",value:"3402"},{label:"蚌埠市",value:"3403"},{label:"淮南市",value:"3404"},{label:"马鞍山市",value:"3405"},{label:"淮北市",value:"3406"},{label:"铜陵市",value:"3407"},{label:"安庆市",value:"3408"},{label:"黄山市",value:"3410"},{label:"滁州市",value:"3411"},{label:"阜阳市",value:"3412"},{label:"宿州市",value:"3413"},{label:"六安市",value:"3415"},{label:"亳州市",value:"3416"},{label:"池州市",value:"3417"},{label:"宣城市",value:"3418"}],[{label:"福州市",value:"3501"},{label:"厦门市",value:"3502"},{label:"莆田市",value:"3503"},{label:"三明市",value:"3504"},{label:"泉州市",value:"3505"},{label:"漳州市",value:"3506"},{label:"南平市",value:"3507"},{label:"龙岩市",value:"3508"},{label:"宁德市",value:"3509"}],[{label:"南昌市",value:"3601"},{label:"景德镇市",value:"3602"},{label:"萍乡市",value:"3603"},{label:"九江市",value:"3604"},{label:"新余市",value:"3605"},{label:"鹰潭市",value:"3606"},{label:"赣州市",value:"3607"},{label:"吉安市",value:"3608"},{label:"宜春市",value:"3609"},{label:"抚州市",value:"3610"},{label:"上饶市",value:"3611"}],[{label:"济南市",value:"3701"},{label:"青岛市",value:"3702"},{label:"淄博市",value:"3703"},{label:"枣庄市",value:"3704"},{label:"东营市",value:"3705"},{label:"烟台市",value:"3706"},{label:"潍坊市",value:"3707"},{label:"济宁市",value:"3708"},{label:"泰安市",value:"3709"},{label:"威海市",value:"3710"},{label:"日照市",value:"3711"},{label:"莱芜市",value:"3712"},{label:"临沂市",value:"3713"},{label:"德州市",value:"3714"},{label:"聊城市",value:"3715"},{label:"滨州市",value:"3716"},{label:"菏泽市",value:"3717"}],[{label:"郑州市",value:"4101"},{label:"开封市",value:"4102"},{label:"洛阳市",value:"4103"},{label:"平顶山市",value:"4104"},{label:"安阳市",value:"4105"},{label:"鹤壁市",value:"4106"},{label:"新乡市",value:"4107"},{label:"焦作市",value:"4108"},{label:"濮阳市",value:"4109"},{label:"许昌市",value:"4110"},{label:"漯河市",value:"4111"},{label:"三门峡市",value:"4112"},{label:"南阳市",value:"4113"},{label:"商丘市",value:"4114"},{label:"信阳市",value:"4115"},{label:"周口市",value:"4116"},{label:"驻马店市",value:"4117"},{label:"省直辖县级行政区划",value:"4190"}],[{label:"武汉市",value:"4201"},{label:"黄石市",value:"4202"},{label:"十堰市",value:"4203"},{label:"宜昌市",value:"4205"},{label:"襄阳市",value:"4206"},{label:"鄂州市",value:"4207"},{label:"荆门市",value:"4208"},{label:"孝感市",value:"4209"},{label:"荆州市",value:"4210"},{label:"黄冈市",value:"4211"},{label:"咸宁市",value:"4212"},{label:"随州市",value:"4213"},{label:"恩施土家族苗族自治州",value:"4228"},{label:"省直辖县级行政区划",value:"4290"}],[{label:"长沙市",value:"4301"},{label:"株洲市",value:"4302"},{label:"湘潭市",value:"4303"},{label:"衡阳市",value:"4304"},{label:"邵阳市",value:"4305"},{label:"岳阳市",value:"4306"},{label:"常德市",value:"4307"},{label:"张家界市",value:"4308"},{label:"益阳市",value:"4309"},{label:"郴州市",value:"4310"},{label:"永州市",value:"4311"},{label:"怀化市",value:"4312"},{label:"娄底市",value:"4313"},{label:"湘西土家族苗族自治州",value:"4331"}],[{label:"广州市",value:"4401"},{label:"韶关市",value:"4402"},{label:"深圳市",value:"4403"},{label:"珠海市",value:"4404"},{label:"汕头市",value:"4405"},{label:"佛山市",value:"4406"},{label:"江门市",value:"4407"},{label:"湛江市",value:"4408"},{label:"茂名市",value:"4409"},{label:"肇庆市",value:"4412"},{label:"惠州市",value:"4413"},{label:"梅州市",value:"4414"},{label:"汕尾市",value:"4415"},{label:"河源市",value:"4416"},{label:"阳江市",value:"4417"},{label:"清远市",value:"4418"},{label:"东莞市",value:"4419"},{label:"中山市",value:"4420"},{label:"潮州市",value:"4451"},{label:"揭阳市",value:"4452"},{label:"云浮市",value:"4453"}],[{label:"南宁市",value:"4501"},{label:"柳州市",value:"4502"},{label:"桂林市",value:"4503"},{label:"梧州市",value:"4504"},{label:"北海市",value:"4505"},{label:"防城港市",value:"4506"},{label:"钦州市",value:"4507"},{label:"贵港市",value:"4508"},{label:"玉林市",value:"4509"},{label:"百色市",value:"4510"},{label:"贺州市",value:"4511"},{label:"河池市",value:"4512"},{label:"来宾市",value:"4513"},{label:"崇左市",value:"4514"}],[{label:"海口市",value:"4601"},{label:"三亚市",value:"4602"},{label:"三沙市",value:"4603"},{label:"儋州市",value:"4604"},{label:"省直辖县级行政区划",value:"4690"}],[{label:"市辖区",value:"5001"},{label:"县",value:"5002"}],[{label:"成都市",value:"5101"},{label:"自贡市",value:"5103"},{label:"攀枝花市",value:"5104"},{label:"泸州市",value:"5105"},{label:"德阳市",value:"5106"},{label:"绵阳市",value:"5107"},{label:"广元市",value:"5108"},{label:"遂宁市",value:"5109"},{label:"内江市",value:"5110"},{label:"乐山市",value:"5111"},{label:"南充市",value:"5113"},{label:"眉山市",value:"5114"},{label:"宜宾市",value:"5115"},{label:"广安市",value:"5116"},{label:"达州市",value:"5117"},{label:"雅安市",value:"5118"},{label:"巴中市",value:"5119"},{label:"资阳市",value:"5120"},{label:"阿坝藏族羌族自治州",value:"5132"},{label:"甘孜藏族自治州",value:"5133"},{label:"凉山彝族自治州",value:"5134"}],[{label:"贵阳市",value:"5201"},{label:"六盘水市",value:"5202"},{label:"遵义市",value:"5203"},{label:"安顺市",value:"5204"},{label:"毕节市",value:"5205"},{label:"铜仁市",value:"5206"},{label:"黔西南布依族苗族自治州",value:"5223"},{label:"黔东南苗族侗族自治州",value:"5226"},{label:"黔南布依族苗族自治州",value:"5227"}],[{label:"昆明市",value:"5301"},{label:"曲靖市",value:"5303"},{label:"玉溪市",value:"5304"},{label:"保山市",value:"5305"},{label:"昭通市",value:"5306"},{label:"丽江市",value:"5307"},{label:"普洱市",value:"5308"},{label:"临沧市",value:"5309"},{label:"楚雄彝族自治州",value:"5323"},{label:"红河哈尼族彝族自治州",value:"5325"},{label:"文山壮族苗族自治州",value:"5326"},{label:"西双版纳傣族自治州",value:"5328"},{label:"大理白族自治州",value:"5329"},{label:"德宏傣族景颇族自治州",value:"5331"},{label:"怒江傈僳族自治州",value:"5333"},{label:"迪庆藏族自治州",value:"5334"}],[{label:"拉萨市",value:"5401"},{label:"日喀则市",value:"5402"},{label:"昌都市",value:"5403"},{label:"林芝市",value:"5404"},{label:"山南市",value:"5405"},{label:"那曲地区",value:"5424"},{label:"阿里地区",value:"5425"}],[{label:"西安市",value:"6101"},{label:"铜川市",value:"6102"},{label:"宝鸡市",value:"6103"},{label:"咸阳市",value:"6104"},{label:"渭南市",value:"6105"},{label:"延安市",value:"6106"},{label:"汉中市",value:"6107"},{label:"榆林市",value:"6108"},{label:"安康市",value:"6109"},{label:"商洛市",value:"6110"}],[{label:"兰州市",value:"6201"},{label:"嘉峪关市",value:"6202"},{label:"金昌市",value:"6203"},{label:"白银市",value:"6204"},{label:"天水市",value:"6205"},{label:"武威市",value:"6206"},{label:"张掖市",value:"6207"},{label:"平凉市",value:"6208"},{label:"酒泉市",value:"6209"},{label:"庆阳市",value:"6210"},{label:"定西市",value:"6211"},{label:"陇南市",value:"6212"},{label:"临夏回族自治州",value:"6229"},{label:"甘南藏族自治州",value:"6230"}],[{label:"西宁市",value:"6301"},{label:"海东市",value:"6302"},{label:"海北藏族自治州",value:"6322"},{label:"黄南藏族自治州",value:"6323"},{label:"海南藏族自治州",value:"6325"},{label:"果洛藏族自治州",value:"6326"},{label:"玉树藏族自治州",value:"6327"},{label:"海西蒙古族藏族自治州",value:"6328"}],[{label:"银川市",value:"6401"},{label:"石嘴山市",value:"6402"},{label:"吴忠市",value:"6403"},{label:"固原市",value:"6404"},{label:"中卫市",value:"6405"}],[{label:"乌鲁木齐市",value:"6501"},{label:"克拉玛依市",value:"6502"},{label:"吐鲁番市",value:"6504"},{label:"哈密市",value:"6505"},{label:"昌吉回族自治州",value:"6523"},{label:"博尔塔拉蒙古自治州",value:"6527"},{label:"巴音郭楞蒙古自治州",value:"6528"},{label:"阿克苏地区",value:"6529"},{label:"克孜勒苏柯尔克孜自治州",value:"6530"},{label:"喀什地区",value:"6531"},{label:"和田地区",value:"6532"},{label:"伊犁哈萨克自治州",value:"6540"},{label:"塔城地区",value:"6542"},{label:"阿勒泰地区",value:"6543"},{label:"自治区直辖县级行政区划",value:"6590"}],[{label:"台北",value:"6601"},{label:"高雄",value:"6602"},{label:"基隆",value:"6603"},{label:"台中",value:"6604"},{label:"台南",value:"6605"},{label:"新竹",value:"6606"},{label:"嘉义",value:"6607"},{label:"宜兰",value:"6608"},{label:"桃园",value:"6609"},{label:"苗栗",value:"6610"},{label:"彰化",value:"6611"},{label:"南投",value:"6612"},{label:"云林",value:"6613"},{label:"屏东",value:"6614"},{label:"台东",value:"6615"},{label:"花莲",value:"6616"},{label:"澎湖",value:"6617"}],[{label:"香港岛",value:"6701"},{label:"九龙",value:"6702"},{label:"新界",value:"6703"}],[{label:"澳门半岛",value:"6801"},{label:"氹仔岛",value:"6802"},{label:"路环岛",value:"6803"},{label:"路氹城",value:"6804"}]],u=t;l.default=u},2877:function(e,l,a){"use strict";function t(e,l,a,t,u,n,r,o){var v,i="function"===typeof e?e.options:e;if(l&&(i.render=l,i.staticRenderFns=a,i._compiled=!0),t&&(i.functional=!0),n&&(i._scopeId="data-v-"+n),r?(v=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),u&&u.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},i._ssrRegister=v):u&&(v=o?function(){u.call(this,this.$root.$options.shadowRoot)}:u),v)if(i.functional){i._injectStyles=v;var b=i.render;i.render=function(e,l){return v.call(l),b(e,l)}}else{var s=i.beforeCreate;i.beforeCreate=s?[].concat(s,v):[v]}return{exports:e,options:i}}a.d(l,"a",function(){return t})},"2f62":function(e,l,a){"use strict";a.r(l),a.d(l,"Store",function(){return p}),a.d(l,"install",function(){return A}),a.d(l,"mapState",function(){return D}),a.d(l,"mapMutations",function(){return E}),a.d(l,"mapGetters",function(){return P}),a.d(l,"mapActions",function(){return C}),a.d(l,"createNamespacedHelpers",function(){return M});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var t=function(e){var l=Number(e.version.split(".")[0]);if(l>=2)e.mixin({beforeCreate:t});else{var a=e.prototype._init;e.prototype._init=function(e){void 0===e&&(e={}),e.init=e.init?[t].concat(e.init):t,a.call(this,e)}}function t(){var e=this.$options;e.store?this.$store="function"===typeof e.store?e.store():e.store:e.parent&&e.parent.$store&&(this.$store=e.parent.$store)}},u="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function n(e){u&&(e._devtoolHook=u,u.emit("vuex:init",e),u.on("vuex:travel-to-state",function(l){e.replaceState(l)}),e.subscribe(function(e,l){u.emit("vuex:mutation",e,l)}))}function r(e,l){Object.keys(e).forEach(function(a){return l(e[a],a)})}function o(e){return null!==e&&"object"===typeof e}function v(e){return e&&"function"===typeof e.then}var i=function(e,l){this.runtime=l,this._children=Object.create(null),this._rawModule=e;var a=e.state;this.state=("function"===typeof a?a():a)||{}},b={namespaced:{configurable:!0}};b.namespaced.get=function(){return!!this._rawModule.namespaced},i.prototype.addChild=function(e,l){this._children[e]=l},i.prototype.removeChild=function(e){delete this._children[e]},i.prototype.getChild=function(e){return this._children[e]},i.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},i.prototype.forEachChild=function(e){r(this._children,e)},i.prototype.forEachGetter=function(e){this._rawModule.getters&&r(this._rawModule.getters,e)},i.prototype.forEachAction=function(e){this._rawModule.actions&&r(this._rawModule.actions,e)},i.prototype.forEachMutation=function(e){this._rawModule.mutations&&r(this._rawModule.mutations,e)},Object.defineProperties(i.prototype,b);var s=function(e){this.register([],e,!1)};function c(e,l,a){if(l.update(a),a.modules)for(var t in a.modules){if(!l.getChild(t))return void 0;c(e.concat(t),l.getChild(t),a.modules[t])}}s.prototype.get=function(e){return e.reduce(function(e,l){return e.getChild(l)},this.root)},s.prototype.getNamespace=function(e){var l=this.root;return e.reduce(function(e,a){return l=l.getChild(a),e+(l.namespaced?a+"/":"")},"")},s.prototype.update=function(e){c([],this.root,e)},s.prototype.register=function(e,l,a){var t=this;void 0===a&&(a=!0);var u=new i(l,a);if(0===e.length)this.root=u;else{var n=this.get(e.slice(0,-1));n.addChild(e[e.length-1],u)}l.modules&&r(l.modules,function(l,u){t.register(e.concat(u),l,a)})},s.prototype.unregister=function(e){var l=this.get(e.slice(0,-1)),a=e[e.length-1];l.getChild(a).runtime&&l.removeChild(a)};var f;var p=function(e){var l=this;void 0===e&&(e={}),!f&&"undefined"!==typeof window&&window.Vue&&A(window.Vue);var a=e.plugins;void 0===a&&(a=[]);var t=e.strict;void 0===t&&(t=!1);var u=e.state;void 0===u&&(u={}),"function"===typeof u&&(u=u()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new s(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new f;var r=this,o=this,v=o.dispatch,i=o.commit;this.dispatch=function(e,l){return v.call(r,e,l)},this.commit=function(e,l,a){return i.call(r,e,l,a)},this.strict=t,m(this,u,[],this._modules.root),y(this,u),a.forEach(function(e){return e(l)}),f.config.devtools&&n(this)},d={state:{configurable:!0}};function h(e,l){return l.indexOf(e)<0&&l.push(e),function(){var a=l.indexOf(e);a>-1&&l.splice(a,1)}}function g(e,l){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var a=e.state;m(e,a,[],e._modules.root,!0),y(e,a,l)}function y(e,l,a){var t=e._vm;e.getters={};var u=e._wrappedGetters,n={};r(u,function(l,a){n[a]=function(){return l(e)},Object.defineProperty(e.getters,a,{get:function(){return e._vm[a]},enumerable:!0})});var o=f.config.silent;f.config.silent=!0,e._vm=new f({data:{$$state:l},computed:n}),f.config.silent=o,e.strict&&$(e),t&&(a&&e._withCommit(function(){t._data.$$state=null}),f.nextTick(function(){return t.$destroy()}))}function m(e,l,a,t,u){var n=!a.length,r=e._modules.getNamespace(a);if(t.namespaced&&(e._modulesNamespaceMap[r]=t),!n&&!u){var o=j(l,a.slice(0,-1)),v=a[a.length-1];e._withCommit(function(){f.set(o,v,t.state)})}var i=t.context=_(e,r,a);t.forEachMutation(function(l,a){var t=r+a;O(e,t,l,i)}),t.forEachAction(function(l,a){var t=l.root?a:r+a,u=l.handler||l;k(e,t,u,i)}),t.forEachGetter(function(l,a){var t=r+a;S(e,t,l,i)}),t.forEachChild(function(t,n){m(e,l,a.concat(n),t,u)})}function _(e,l,a){var t=""===l,u={dispatch:t?e.dispatch:function(a,t,u){var n=x(a,t,u),r=n.payload,o=n.options,v=n.type;return o&&o.root||(v=l+v),e.dispatch(v,r)},commit:t?e.commit:function(a,t,u){var n=x(a,t,u),r=n.payload,o=n.options,v=n.type;o&&o.root||(v=l+v),e.commit(v,r,o)}};return Object.defineProperties(u,{getters:{get:t?function(){return e.getters}:function(){return w(e,l)}},state:{get:function(){return j(e.state,a)}}}),u}function w(e,l){var a={},t=l.length;return Object.keys(e.getters).forEach(function(u){if(u.slice(0,t)===l){var n=u.slice(t);Object.defineProperty(a,n,{get:function(){return e.getters[u]},enumerable:!0})}}),a}function O(e,l,a,t){var u=e._mutations[l]||(e._mutations[l]=[]);u.push(function(l){a.call(e,t.state,l)})}function k(e,l,a,t){var u=e._actions[l]||(e._actions[l]=[]);u.push(function(l,u){var n=a.call(e,{dispatch:t.dispatch,commit:t.commit,getters:t.getters,state:t.state,rootGetters:e.getters,rootState:e.state},l,u);return v(n)||(n=Promise.resolve(n)),e._devtoolHook?n.catch(function(l){throw e._devtoolHook.emit("vuex:error",l),l}):n})}function S(e,l,a,t){e._wrappedGetters[l]||(e._wrappedGetters[l]=function(e){return a(t.state,t.getters,e.state,e.getters)})}function $(e){e._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function j(e,l){return l.length?l.reduce(function(e,l){return e[l]},e):e}function x(e,l,a){return o(e)&&e.type&&(a=l,l=e,e=e.type),{type:e,payload:l,options:a}}function A(e){f&&e===f||(f=e,t(f))}d.state.get=function(){return this._vm._data.$$state},d.state.set=function(e){0},p.prototype.commit=function(e,l,a){var t=this,u=x(e,l,a),n=u.type,r=u.payload,o=(u.options,{type:n,payload:r}),v=this._mutations[n];v&&(this._withCommit(function(){v.forEach(function(e){e(r)})}),this._subscribers.forEach(function(e){return e(o,t.state)}))},p.prototype.dispatch=function(e,l){var a=this,t=x(e,l),u=t.type,n=t.payload,r={type:u,payload:n},o=this._actions[u];if(o)return this._actionSubscribers.forEach(function(e){return e(r,a.state)}),o.length>1?Promise.all(o.map(function(e){return e(n)})):o[0](n)},p.prototype.subscribe=function(e){return h(e,this._subscribers)},p.prototype.subscribeAction=function(e){return h(e,this._actionSubscribers)},p.prototype.watch=function(e,l,a){var t=this;return this._watcherVM.$watch(function(){return e(t.state,t.getters)},l,a)},p.prototype.replaceState=function(e){var l=this;this._withCommit(function(){l._vm._data.$$state=e})},p.prototype.registerModule=function(e,l,a){void 0===a&&(a={}),"string"===typeof e&&(e=[e]),this._modules.register(e,l),m(this,this.state,e,this._modules.get(e),a.preserveState),y(this,this.state)},p.prototype.unregisterModule=function(e){var l=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var a=j(l.state,e.slice(0,-1));f.delete(a,e[e.length-1])}),g(this)},p.prototype.hotUpdate=function(e){this._modules.update(e),g(this,!0)},p.prototype._withCommit=function(e){var l=this._committing;this._committing=!0,e(),this._committing=l},Object.defineProperties(p.prototype,d);var D=I(function(e,l){var a={};return T(l).forEach(function(l){var t=l.key,u=l.val;a[t]=function(){var l=this.$store.state,a=this.$store.getters;if(e){var t=N(this.$store,"mapState",e);if(!t)return;l=t.context.state,a=t.context.getters}return"function"===typeof u?u.call(this,l,a):l[u]},a[t].vuex=!0}),a}),E=I(function(e,l){var a={};return T(l).forEach(function(l){var t=l.key,u=l.val;a[t]=function(){var l=[],a=arguments.length;while(a--)l[a]=arguments[a];var t=this.$store.commit;if(e){var n=N(this.$store,"mapMutations",e);if(!n)return;t=n.context.commit}return"function"===typeof u?u.apply(this,[t].concat(l)):t.apply(this.$store,[u].concat(l))}}),a}),P=I(function(e,l){var a={};return T(l).forEach(function(l){var t=l.key,u=l.val;u=e+u,a[t]=function(){if(!e||N(this.$store,"mapGetters",e))return this.$store.getters[u]},a[t].vuex=!0}),a}),C=I(function(e,l){var a={};return T(l).forEach(function(l){var t=l.key,u=l.val;a[t]=function(){var l=[],a=arguments.length;while(a--)l[a]=arguments[a];var t=this.$store.dispatch;if(e){var n=N(this.$store,"mapActions",e);if(!n)return;t=n.context.dispatch}return"function"===typeof u?u.apply(this,[t].concat(l)):t.apply(this.$store,[u].concat(l))}}),a}),M=function(e){return{mapState:D.bind(null,e),mapGetters:P.bind(null,e),mapMutations:E.bind(null,e),mapActions:C.bind(null,e)}};function T(e){return Array.isArray(e)?e.map(function(e){return{key:e,val:e}}):Object.keys(e).map(function(l){return{key:l,val:e[l]}})}function I(e){return function(l,a){return"string"!==typeof l?(a=l,l=""):"/"!==l.charAt(l.length-1)&&(l+="/"),e(l,a)}}function N(e,l,a){var t=e._modulesNamespaceMap[a];return t}var R={Store:p,install:A,version:"3.0.1",mapState:D,mapMutations:E,mapGetters:P,mapActions:C,createNamespacedHelpers:M};l["default"]=R},"66fd":function(e,l,a){"use strict";a.r(l),function(e){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var a=Object.freeze({});function t(e){return void 0===e||null===e}function u(e){return void 0!==e&&null!==e}function n(e){return!0===e}function r(e){return!1===e}function o(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function v(e){return null!==e&&"object"===typeof e}var i=Object.prototype.toString;function b(e){return"[object Object]"===i.call(e)}function s(e){return"[object RegExp]"===i.call(e)}function c(e){var l=parseFloat(String(e));return l>=0&&Math.floor(l)===l&&isFinite(e)}function f(e){return u(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function p(e){return null==e?"":Array.isArray(e)||b(e)&&e.toString===i?JSON.stringify(e,null,2):String(e)}function d(e){var l=parseFloat(e);return isNaN(l)?e:l}function h(e,l){for(var a=Object.create(null),t=e.split(","),u=0;u<t.length;u++)a[t[u]]=!0;return l?function(e){return a[e.toLowerCase()]}:function(e){return a[e]}}h("slot,component",!0);var g=h("key,ref,slot,slot-scope,is");function y(e,l){if(e.length){var a=e.indexOf(l);if(a>-1)return e.splice(a,1)}}var m=Object.prototype.hasOwnProperty;function _(e,l){return m.call(e,l)}function w(e){var l=Object.create(null);return function(a){var t=l[a];return t||(l[a]=e(a))}}var O=/-(\w)/g,k=w(function(e){return e.replace(O,function(e,l){return l?l.toUpperCase():""})}),S=w(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),$=/\B([A-Z])/g,j=w(function(e){return e.replace($,"-$1").toLowerCase()});function x(e,l){function a(a){var t=arguments.length;return t?t>1?e.apply(l,arguments):e.call(l,a):e.call(l)}return a._length=e.length,a}function A(e,l){return e.bind(l)}var D=Function.prototype.bind?A:x;function E(e,l){l=l||0;var a=e.length-l,t=new Array(a);while(a--)t[a]=e[a+l];return t}function P(e,l){for(var a in l)e[a]=l[a];return e}function C(e){for(var l={},a=0;a<e.length;a++)e[a]&&P(l,e[a]);return l}function M(e,l,a){}var T=function(e,l,a){return!1},I=function(e){return e};function N(e,l){if(e===l)return!0;var a=v(e),t=v(l);if(!a||!t)return!a&&!t&&String(e)===String(l);try{var u=Array.isArray(e),n=Array.isArray(l);if(u&&n)return e.length===l.length&&e.every(function(e,a){return N(e,l[a])});if(e instanceof Date&&l instanceof Date)return e.getTime()===l.getTime();if(u||n)return!1;var r=Object.keys(e),o=Object.keys(l);return r.length===o.length&&r.every(function(a){return N(e[a],l[a])})}catch(i){return!1}}function R(e,l){for(var a=0;a<e.length;a++)if(N(e[a],l))return a;return-1}function L(e){var l=!1;return function(){l||(l=!0,e.apply(this,arguments))}}var V=["component","directive","filter"],U=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],F={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:T,isReservedAttr:T,isUnknownElement:T,getTagNamespace:M,parsePlatformTagName:I,mustUseProp:T,async:!0,_lifecycleHooks:U},q=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(e){var l=(e+"").charCodeAt(0);return 36===l||95===l}function B(e,l,a,t){Object.defineProperty(e,l,{value:a,enumerable:!!t,writable:!0,configurable:!0})}var G=new RegExp("[^"+q.source+".$_\\d]");function z(e){if(!G.test(e)){var l=e.split(".");return function(e){for(var a=0;a<l.length;a++){if(!e)return;e=e[l[a]]}return e}}}var J,W="__proto__"in{},K="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,X=Y&&WXEnvironment.platform.toLowerCase(),Q=K&&window.navigator.userAgent.toLowerCase(),Z=Q&&/msie|trident/.test(Q),ee=(Q&&Q.indexOf("msie 9.0"),Q&&Q.indexOf("edge/")>0),le=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===X),ae=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/),{}.watch);if(K)try{var te={};Object.defineProperty(te,"passive",{get:function(){}}),window.addEventListener("test-passive",null,te)}catch(eu){}var ue=function(){return void 0===J&&(J=!K&&!Y&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),J},ne=K&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function re(e){return"function"===typeof e&&/native code/.test(e.toString())}var oe,ve="undefined"!==typeof Symbol&&re(Symbol)&&"undefined"!==typeof Reflect&&re(Reflect.ownKeys);oe="undefined"!==typeof Set&&re(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var ie=M,be=0,se=function(){this.id=be++,this.subs=[]};function ce(e){se.SharedObject.targetStack.push(e),se.SharedObject.target=e}function fe(){se.SharedObject.targetStack.pop(),se.SharedObject.target=se.SharedObject.targetStack[se.SharedObject.targetStack.length-1]}se.prototype.addSub=function(e){this.subs.push(e)},se.prototype.removeSub=function(e){y(this.subs,e)},se.prototype.depend=function(){se.SharedObject.target&&se.SharedObject.target.addDep(this)},se.prototype.notify=function(){var e=this.subs.slice();for(var l=0,a=e.length;l<a;l++)e[l].update()},se.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},se.SharedObject.target=null,se.SharedObject.targetStack=[];var pe=function(e,l,a,t,u,n,r,o){this.tag=e,this.data=l,this.children=a,this.text=t,this.elm=u,this.ns=void 0,this.context=n,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=l&&l.key,this.componentOptions=r,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=o,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},de={child:{configurable:!0}};de.child.get=function(){return this.componentInstance},Object.defineProperties(pe.prototype,de);var he=function(e){void 0===e&&(e="");var l=new pe;return l.text=e,l.isComment=!0,l};function ge(e){return new pe(void 0,void 0,void 0,String(e))}function ye(e){var l=new pe(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return l.ns=e.ns,l.isStatic=e.isStatic,l.key=e.key,l.isComment=e.isComment,l.fnContext=e.fnContext,l.fnOptions=e.fnOptions,l.fnScopeId=e.fnScopeId,l.asyncMeta=e.asyncMeta,l.isCloned=!0,l}var me=Array.prototype,_e=Object.create(me),we=["push","pop","shift","unshift","splice","sort","reverse"];we.forEach(function(e){var l=me[e];B(_e,e,function(){var a=[],t=arguments.length;while(t--)a[t]=arguments[t];var u,n=l.apply(this,a),r=this.__ob__;switch(e){case"push":case"unshift":u=a;break;case"splice":u=a.slice(2);break}return u&&r.observeArray(u),r.dep.notify(),n})});var Oe=Object.getOwnPropertyNames(_e),ke=!0;function Se(e){ke=e}var $e=function(e){this.value=e,this.dep=new se,this.vmCount=0,B(e,"__ob__",this),Array.isArray(e)?(W?e.push!==e.__proto__.push?xe(e,_e,Oe):je(e,_e):xe(e,_e,Oe),this.observeArray(e)):this.walk(e)};function je(e,l){e.__proto__=l}function xe(e,l,a){for(var t=0,u=a.length;t<u;t++){var n=a[t];B(e,n,l[n])}}function Ae(e,l){var a;if(v(e)&&!(e instanceof pe))return _(e,"__ob__")&&e.__ob__ instanceof $e?a=e.__ob__:ke&&!ue()&&(Array.isArray(e)||b(e))&&Object.isExtensible(e)&&!e._isVue&&(a=new $e(e)),l&&a&&a.vmCount++,a}function De(e,l,a,t,u){var n=new se,r=Object.getOwnPropertyDescriptor(e,l);if(!r||!1!==r.configurable){var o=r&&r.get,v=r&&r.set;o&&!v||2!==arguments.length||(a=e[l]);var i=!u&&Ae(a);Object.defineProperty(e,l,{enumerable:!0,configurable:!0,get:function(){var l=o?o.call(e):a;return se.SharedObject.target&&(n.depend(),i&&(i.dep.depend(),Array.isArray(l)&&Ce(l))),l},set:function(l){var t=o?o.call(e):a;l===t||l!==l&&t!==t||o&&!v||(v?v.call(e,l):a=l,i=!u&&Ae(l),n.notify())}})}}function Ee(e,l,a){if(Array.isArray(e)&&c(l))return e.length=Math.max(e.length,l),e.splice(l,1,a),a;if(l in e&&!(l in Object.prototype))return e[l]=a,a;var t=e.__ob__;return e._isVue||t&&t.vmCount?a:t?(De(t.value,l,a),t.dep.notify(),a):(e[l]=a,a)}function Pe(e,l){if(Array.isArray(e)&&c(l))e.splice(l,1);else{var a=e.__ob__;e._isVue||a&&a.vmCount||_(e,l)&&(delete e[l],a&&a.dep.notify())}}function Ce(e){for(var l=void 0,a=0,t=e.length;a<t;a++)l=e[a],l&&l.__ob__&&l.__ob__.dep.depend(),Array.isArray(l)&&Ce(l)}$e.prototype.walk=function(e){for(var l=Object.keys(e),a=0;a<l.length;a++)De(e,l[a])},$e.prototype.observeArray=function(e){for(var l=0,a=e.length;l<a;l++)Ae(e[l])};var Me=F.optionMergeStrategies;function Te(e,l){if(!l)return e;for(var a,t,u,n=ve?Reflect.ownKeys(l):Object.keys(l),r=0;r<n.length;r++)a=n[r],"__ob__"!==a&&(t=e[a],u=l[a],_(e,a)?t!==u&&b(t)&&b(u)&&Te(t,u):Ee(e,a,u));return e}function Ie(e,l,a){return a?function(){var t="function"===typeof l?l.call(a,a):l,u="function"===typeof e?e.call(a,a):e;return t?Te(t,u):u}:l?e?function(){return Te("function"===typeof l?l.call(this,this):l,"function"===typeof e?e.call(this,this):e)}:l:e}function Ne(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?Re(a):a}function Re(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function Le(e,l,a,t){var u=Object.create(e||null);return l?P(u,l):u}Me.data=function(e,l,a){return a?Ie(e,l,a):l&&"function"!==typeof l?e:Ie(e,l)},U.forEach(function(e){Me[e]=Ne}),V.forEach(function(e){Me[e+"s"]=Le}),Me.watch=function(e,l,a,t){if(e===ae&&(e=void 0),l===ae&&(l=void 0),!l)return Object.create(e||null);if(!e)return l;var u={};for(var n in P(u,e),l){var r=u[n],o=l[n];r&&!Array.isArray(r)&&(r=[r]),u[n]=r?r.concat(o):Array.isArray(o)?o:[o]}return u},Me.props=Me.methods=Me.inject=Me.computed=function(e,l,a,t){if(!e)return l;var u=Object.create(null);return P(u,e),l&&P(u,l),u},Me.provide=Ie;var Ve=function(e,l){return void 0===l?e:l};function Ue(e,l){var a=e.props;if(a){var t,u,n,r={};if(Array.isArray(a)){t=a.length;while(t--)u=a[t],"string"===typeof u&&(n=k(u),r[n]={type:null})}else if(b(a))for(var o in a)u=a[o],n=k(o),r[n]=b(u)?u:{type:u};else 0;e.props=r}}function Fe(e,l){var a=e.inject;if(a){var t=e.inject={};if(Array.isArray(a))for(var u=0;u<a.length;u++)t[a[u]]={from:a[u]};else if(b(a))for(var n in a){var r=a[n];t[n]=b(r)?P({from:n},r):{from:r}}else 0}}function qe(e){var l=e.directives;if(l)for(var a in l){var t=l[a];"function"===typeof t&&(l[a]={bind:t,update:t})}}function He(e,l,a){if("function"===typeof l&&(l=l.options),Ue(l,a),Fe(l,a),qe(l),!l._base&&(l.extends&&(e=He(e,l.extends,a)),l.mixins))for(var t=0,u=l.mixins.length;t<u;t++)e=He(e,l.mixins[t],a);var n,r={};for(n in e)o(n);for(n in l)_(e,n)||o(n);function o(t){var u=Me[t]||Ve;r[t]=u(e[t],l[t],a,t)}return r}function Be(e,l,a,t){if("string"===typeof a){var u=e[l];if(_(u,a))return u[a];var n=k(a);if(_(u,n))return u[n];var r=S(n);if(_(u,r))return u[r];var o=u[a]||u[n]||u[r];return o}}function Ge(e,l,a,t){var u=l[e],n=!_(a,e),r=a[e],o=Ke(Boolean,u.type);if(o>-1)if(n&&!_(u,"default"))r=!1;else if(""===r||r===j(e)){var v=Ke(String,u.type);(v<0||o<v)&&(r=!0)}if(void 0===r){r=ze(t,u,e);var i=ke;Se(!0),Ae(r),Se(i)}return r}function ze(e,l,a){if(_(l,"default")){var t=l.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[a]&&void 0!==e._props[a]?e._props[a]:"function"===typeof t&&"Function"!==Je(l.type)?t.call(e):t}}function Je(e){var l=e&&e.toString().match(/^\s*function (\w+)/);return l?l[1]:""}function We(e,l){return Je(e)===Je(l)}function Ke(e,l){if(!Array.isArray(l))return We(l,e)?0:-1;for(var a=0,t=l.length;a<t;a++)if(We(l[a],e))return a;return-1}function Ye(e,l,a){ce();try{if(l){var t=l;while(t=t.$parent){var u=t.$options.errorCaptured;if(u)for(var n=0;n<u.length;n++)try{var r=!1===u[n].call(t,e,l,a);if(r)return}catch(eu){Qe(eu,t,"errorCaptured hook")}}}Qe(e,l,a)}finally{fe()}}function Xe(e,l,a,t,u){var n;try{n=a?e.apply(l,a):e.call(l),n&&!n._isVue&&f(n)&&!n._handled&&(n.catch(function(e){return Ye(e,t,u+" (Promise/async)")}),n._handled=!0)}catch(eu){Ye(eu,t,u)}return n}function Qe(e,l,a){if(F.errorHandler)try{return F.errorHandler.call(null,e,l,a)}catch(eu){eu!==e&&Ze(eu,null,"config.errorHandler")}Ze(e,l,a)}function Ze(e,l,a){if(!K&&!Y||"undefined"===typeof console)throw e;console.error(e)}var el,ll=[],al=!1;function tl(){al=!1;var e=ll.slice(0);ll.length=0;for(var l=0;l<e.length;l++)e[l]()}if("undefined"!==typeof Promise&&re(Promise)){var ul=Promise.resolve();el=function(){ul.then(tl),le&&setTimeout(M)}}else if(Z||"undefined"===typeof MutationObserver||!re(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())el="undefined"!==typeof setImmediate&&re(setImmediate)?function(){setImmediate(tl)}:function(){setTimeout(tl,0)};else{var nl=1,rl=new MutationObserver(tl),ol=document.createTextNode(String(nl));rl.observe(ol,{characterData:!0}),el=function(){nl=(nl+1)%2,ol.data=String(nl)}}function vl(e,l){var a;if(ll.push(function(){if(e)try{e.call(l)}catch(eu){Ye(eu,l,"nextTick")}else a&&a(l)}),al||(al=!0,el()),!e&&"undefined"!==typeof Promise)return new Promise(function(e){a=e})}var il=new oe;function bl(e){sl(e,il),il.clear()}function sl(e,l){var a,t,u=Array.isArray(e);if(!(!u&&!v(e)||Object.isFrozen(e)||e instanceof pe)){if(e.__ob__){var n=e.__ob__.dep.id;if(l.has(n))return;l.add(n)}if(u){a=e.length;while(a--)sl(e[a],l)}else{t=Object.keys(e),a=t.length;while(a--)sl(e[t[a]],l)}}}var cl=w(function(e){var l="&"===e.charAt(0);e=l?e.slice(1):e;var a="~"===e.charAt(0);e=a?e.slice(1):e;var t="!"===e.charAt(0);return e=t?e.slice(1):e,{name:e,once:a,capture:t,passive:l}});function fl(e,l){function a(){var e=arguments,t=a.fns;if(!Array.isArray(t))return Xe(t,null,arguments,l,"v-on handler");for(var u=t.slice(),n=0;n<u.length;n++)Xe(u[n],null,e,l,"v-on handler")}return a.fns=e,a}function pl(e,l,a,u,r,o){var v,i,b,s;for(v in e)i=e[v],b=l[v],s=cl(v),t(i)||(t(b)?(t(i.fns)&&(i=e[v]=fl(i,o)),n(s.once)&&(i=e[v]=r(s.name,i,s.capture)),a(s.name,i,s.capture,s.passive,s.params)):i!==b&&(b.fns=i,e[v]=b));for(v in l)t(e[v])&&(s=cl(v),u(s.name,l[v],s.capture))}function dl(e,l,a){var n=l.options.props;if(!t(n)){var r={},o=e.attrs,v=e.props;if(u(o)||u(v))for(var i in n){var b=j(i);hl(r,v,i,b,!0)||hl(r,o,i,b,!1)}return r}}function hl(e,l,a,t,n){if(u(l)){if(_(l,a))return e[a]=l[a],n||delete l[a],!0;if(_(l,t))return e[a]=l[t],n||delete l[t],!0}return!1}function gl(e){for(var l=0;l<e.length;l++)if(Array.isArray(e[l]))return Array.prototype.concat.apply([],e);return e}function yl(e){return o(e)?[ge(e)]:Array.isArray(e)?_l(e):void 0}function ml(e){return u(e)&&u(e.text)&&r(e.isComment)}function _l(e,l){var a,r,v,i,b=[];for(a=0;a<e.length;a++)r=e[a],t(r)||"boolean"===typeof r||(v=b.length-1,i=b[v],Array.isArray(r)?r.length>0&&(r=_l(r,(l||"")+"_"+a),ml(r[0])&&ml(i)&&(b[v]=ge(i.text+r[0].text),r.shift()),b.push.apply(b,r)):o(r)?ml(i)?b[v]=ge(i.text+r):""!==r&&b.push(ge(r)):ml(r)&&ml(i)?b[v]=ge(i.text+r.text):(n(e._isVList)&&u(r.tag)&&t(r.key)&&u(l)&&(r.key="__vlist"+l+"_"+a+"__"),b.push(r)));return b}function wl(e){var l=e.$options.provide;l&&(e._provided="function"===typeof l?l.call(e):l)}function Ol(e){var l=kl(e.$options.inject,e);l&&(Se(!1),Object.keys(l).forEach(function(a){De(e,a,l[a])}),Se(!0))}function kl(e,l){if(e){for(var a=Object.create(null),t=ve?Reflect.ownKeys(e):Object.keys(e),u=0;u<t.length;u++){var n=t[u];if("__ob__"!==n){var r=e[n].from,o=l;while(o){if(o._provided&&_(o._provided,r)){a[n]=o._provided[r];break}o=o.$parent}if(!o)if("default"in e[n]){var v=e[n].default;a[n]="function"===typeof v?v.call(l):v}else 0}}return a}}function Sl(e,l){if(!e||!e.length)return{};for(var a={},t=0,u=e.length;t<u;t++){var n=e[t],r=n.data;if(r&&r.attrs&&r.attrs.slot&&delete r.attrs.slot,n.context!==l&&n.fnContext!==l||!r||null==r.slot)n.asyncMeta&&n.asyncMeta.data&&"page"===n.asyncMeta.data.slot?(a["page"]||(a["page"]=[])).push(n):(a.default||(a.default=[])).push(n);else{var o=r.slot,v=a[o]||(a[o]=[]);"template"===n.tag?v.push.apply(v,n.children||[]):v.push(n)}}for(var i in a)a[i].every($l)&&delete a[i];return a}function $l(e){return e.isComment&&!e.asyncFactory||" "===e.text}function jl(e,l,t){var u,n=Object.keys(l).length>0,r=e?!!e.$stable:!n,o=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(r&&t&&t!==a&&o===t.$key&&!n&&!t.$hasNormal)return t;for(var v in u={},e)e[v]&&"$"!==v[0]&&(u[v]=xl(l,v,e[v]))}else u={};for(var i in l)i in u||(u[i]=Al(l,i));return e&&Object.isExtensible(e)&&(e._normalized=u),B(u,"$stable",r),B(u,"$key",o),B(u,"$hasNormal",n),u}function xl(e,l,a){var t=function(){var e=arguments.length?a.apply(null,arguments):a({});return e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:yl(e),e&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return a.proxy&&Object.defineProperty(e,l,{get:t,enumerable:!0,configurable:!0}),t}function Al(e,l){return function(){return e[l]}}function Dl(e,l){var a,t,n,r,o;if(Array.isArray(e)||"string"===typeof e)for(a=new Array(e.length),t=0,n=e.length;t<n;t++)a[t]=l(e[t],t);else if("number"===typeof e)for(a=new Array(e),t=0;t<e;t++)a[t]=l(t+1,t);else if(v(e))if(ve&&e[Symbol.iterator]){a=[];var i=e[Symbol.iterator](),b=i.next();while(!b.done)a.push(l(b.value,a.length)),b=i.next()}else for(r=Object.keys(e),a=new Array(r.length),t=0,n=r.length;t<n;t++)o=r[t],a[t]=l(e[o],o,t);return u(a)||(a=[]),a._isVList=!0,a}function El(e,l,a,t){var u,n=this.$scopedSlots[e];n?(a=a||{},t&&(a=P(P({},t),a)),u=n(a)||l):u=this.$slots[e]||l;var r=a&&a.slot;return r?this.$createElement("template",{slot:r},u):u}function Pl(e){return Be(this.$options,"filters",e,!0)||I}function Cl(e,l){return Array.isArray(e)?-1===e.indexOf(l):e!==l}function Ml(e,l,a,t,u){var n=F.keyCodes[l]||a;return u&&t&&!F.keyCodes[l]?Cl(u,t):n?Cl(n,e):t?j(t)!==l:void 0}function Tl(e,l,a,t,u){if(a)if(v(a)){var n;Array.isArray(a)&&(a=C(a));var r=function(r){if("class"===r||"style"===r||g(r))n=e;else{var o=e.attrs&&e.attrs.type;n=t||F.mustUseProp(l,o,r)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var v=k(r),i=j(r);if(!(v in n)&&!(i in n)&&(n[r]=a[r],u)){var b=e.on||(e.on={});b["update:"+r]=function(e){a[r]=e}}};for(var o in a)r(o)}else;return e}function Il(e,l){var a=this._staticTrees||(this._staticTrees=[]),t=a[e];return t&&!l?t:(t=a[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Rl(t,"__static__"+e,!1),t)}function Nl(e,l,a){return Rl(e,"__once__"+l+(a?"_"+a:""),!0),e}function Rl(e,l,a){if(Array.isArray(e))for(var t=0;t<e.length;t++)e[t]&&"string"!==typeof e[t]&&Ll(e[t],l+"_"+t,a);else Ll(e,l,a)}function Ll(e,l,a){e.isStatic=!0,e.key=l,e.isOnce=a}function Vl(e,l){if(l)if(b(l)){var a=e.on=e.on?P({},e.on):{};for(var t in l){var u=a[t],n=l[t];a[t]=u?[].concat(u,n):n}}else;return e}function Ul(e,l,a,t){l=l||{$stable:!a};for(var u=0;u<e.length;u++){var n=e[u];Array.isArray(n)?Ul(n,l,a):n&&(n.proxy&&(n.fn.proxy=!0),l[n.key]=n.fn)}return t&&(l.$key=t),l}function Fl(e,l){for(var a=0;a<l.length;a+=2){var t=l[a];"string"===typeof t&&t&&(e[l[a]]=l[a+1])}return e}function ql(e,l){return"string"===typeof e?l+e:e}function Hl(e){e._o=Nl,e._n=d,e._s=p,e._l=Dl,e._t=El,e._q=N,e._i=R,e._m=Il,e._f=Pl,e._k=Ml,e._b=Tl,e._v=ge,e._e=he,e._u=Ul,e._g=Vl,e._d=Fl,e._p=ql}function Bl(e,l,t,u,r){var o,v=this,i=r.options;_(u,"_uid")?(o=Object.create(u),o._original=u):(o=u,u=u._original);var b=n(i._compiled),s=!b;this.data=e,this.props=l,this.children=t,this.parent=u,this.listeners=e.on||a,this.injections=kl(i.inject,u),this.slots=function(){return v.$slots||jl(e.scopedSlots,v.$slots=Sl(t,u)),v.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return jl(e.scopedSlots,this.slots())}}),b&&(this.$options=i,this.$slots=this.slots(),this.$scopedSlots=jl(e.scopedSlots,this.$slots)),i._scopeId?this._c=function(e,l,a,t){var n=ta(o,e,l,a,t,s);return n&&!Array.isArray(n)&&(n.fnScopeId=i._scopeId,n.fnContext=u),n}:this._c=function(e,l,a,t){return ta(o,e,l,a,t,s)}}function Gl(e,l,t,n,r){var o=e.options,v={},i=o.props;if(u(i))for(var b in i)v[b]=Ge(b,i,l||a);else u(t.attrs)&&Jl(v,t.attrs),u(t.props)&&Jl(v,t.props);var s=new Bl(t,v,r,n,e),c=o.render.call(null,s._c,s);if(c instanceof pe)return zl(c,t,s.parent,o,s);if(Array.isArray(c)){for(var f=yl(c)||[],p=new Array(f.length),d=0;d<f.length;d++)p[d]=zl(f[d],t,s.parent,o,s);return p}}function zl(e,l,a,t,u){var n=ye(e);return n.fnContext=a,n.fnOptions=t,l.slot&&((n.data||(n.data={})).slot=l.slot),n}function Jl(e,l){for(var a in l)e[k(a)]=l[a]}Hl(Bl.prototype);var Wl={init:function(e,l){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var a=e;Wl.prepatch(a,a)}else{var t=e.componentInstance=Xl(e,Oa);t.$mount(l?e.elm:void 0,l)}},prepatch:function(e,l){var a=l.componentOptions,t=l.componentInstance=e.componentInstance;ja(t,a.propsData,a.listeners,l,a.children)},insert:function(e){var l=e.context,a=e.componentInstance;a._isMounted||(a._isMounted=!0,Ea(a,"mounted")),e.data.keepAlive&&(l._isMounted?qa(a):Aa(a,!0))},destroy:function(e){var l=e.componentInstance;l._isDestroyed||(e.data.keepAlive?Da(l,!0):l.$destroy())}},Kl=Object.keys(Wl);function Yl(e,l,a,r,o){if(!t(e)){var i=a.$options._base;if(v(e)&&(e=i.extend(e)),"function"===typeof e){var b;if(t(e.cid)&&(b=e,e=fa(b,i),void 0===e))return ca(b,l,a,r,o);l=l||{},st(e),u(l.model)&&ea(e.options,l);var s=dl(l,e,o);if(n(e.options.functional))return Gl(e,s,l,a,r);var c=l.on;if(l.on=l.nativeOn,n(e.options.abstract)){var f=l.slot;l={},f&&(l.slot=f)}Ql(l);var p=e.options.name||o,d=new pe("vue-component-"+e.cid+(p?"-"+p:""),l,void 0,void 0,void 0,a,{Ctor:e,propsData:s,listeners:c,tag:o,children:r},b);return d}}}function Xl(e,l){var a={_isComponent:!0,_parentVnode:e,parent:l},t=e.data.inlineTemplate;return u(t)&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),new e.componentOptions.Ctor(a)}function Ql(e){for(var l=e.hook||(e.hook={}),a=0;a<Kl.length;a++){var t=Kl[a],u=l[t],n=Wl[t];u===n||u&&u._merged||(l[t]=u?Zl(n,u):n)}}function Zl(e,l){var a=function(a,t){e(a,t),l(a,t)};return a._merged=!0,a}function ea(e,l){var a=e.model&&e.model.prop||"value",t=e.model&&e.model.event||"input";(l.attrs||(l.attrs={}))[a]=l.model.value;var n=l.on||(l.on={}),r=n[t],o=l.model.callback;u(r)?(Array.isArray(r)?-1===r.indexOf(o):r!==o)&&(n[t]=[o].concat(r)):n[t]=o}var la=1,aa=2;function ta(e,l,a,t,u,r){return(Array.isArray(a)||o(a))&&(u=t,t=a,a=void 0),n(r)&&(u=aa),ua(e,l,a,t,u)}function ua(e,l,a,t,n){if(u(a)&&u(a.__ob__))return he();if(u(a)&&u(a.is)&&(l=a.is),!l)return he();var r,o,v;(Array.isArray(t)&&"function"===typeof t[0]&&(a=a||{},a.scopedSlots={default:t[0]},t.length=0),n===aa?t=yl(t):n===la&&(t=gl(t)),"string"===typeof l)?(o=e.$vnode&&e.$vnode.ns||F.getTagNamespace(l),r=F.isReservedTag(l)?new pe(F.parsePlatformTagName(l),a,t,void 0,void 0,e):a&&a.pre||!u(v=Be(e.$options,"components",l))?new pe(l,a,t,void 0,void 0,e):Yl(v,a,e,t,l)):r=Yl(l,a,e,t);return Array.isArray(r)?r:u(r)?(u(o)&&na(r,o),u(a)&&ra(a),r):he()}function na(e,l,a){if(e.ns=l,"foreignObject"===e.tag&&(l=void 0,a=!0),u(e.children))for(var r=0,o=e.children.length;r<o;r++){var v=e.children[r];u(v.tag)&&(t(v.ns)||n(a)&&"svg"!==v.tag)&&na(v,l,a)}}function ra(e){v(e.style)&&bl(e.style),v(e.class)&&bl(e.class)}function oa(e){e._vnode=null,e._staticTrees=null;var l=e.$options,t=e.$vnode=l._parentVnode,u=t&&t.context;e.$slots=Sl(l._renderChildren,u),e.$scopedSlots=a,e._c=function(l,a,t,u){return ta(e,l,a,t,u,!1)},e.$createElement=function(l,a,t,u){return ta(e,l,a,t,u,!0)};var n=t&&t.data;De(e,"$attrs",n&&n.attrs||a,null,!0),De(e,"$listeners",l._parentListeners||a,null,!0)}var va,ia=null;function ba(e){Hl(e.prototype),e.prototype.$nextTick=function(e){return vl(e,this)},e.prototype._render=function(){var e,l=this,a=l.$options,t=a.render,u=a._parentVnode;u&&(l.$scopedSlots=jl(u.data.scopedSlots,l.$slots,l.$scopedSlots)),l.$vnode=u;try{ia=l,e=t.call(l._renderProxy,l.$createElement)}catch(eu){Ye(eu,l,"render"),e=l._vnode}finally{ia=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof pe||(e=he()),e.parent=u,e}}function sa(e,l){return(e.__esModule||ve&&"Module"===e[Symbol.toStringTag])&&(e=e.default),v(e)?l.extend(e):e}function ca(e,l,a,t,u){var n=he();return n.asyncFactory=e,n.asyncMeta={data:l,context:a,children:t,tag:u},n}function fa(e,l){if(n(e.error)&&u(e.errorComp))return e.errorComp;if(u(e.resolved))return e.resolved;var a=ia;if(a&&u(e.owners)&&-1===e.owners.indexOf(a)&&e.owners.push(a),n(e.loading)&&u(e.loadingComp))return e.loadingComp;if(a&&!u(e.owners)){var r=e.owners=[a],o=!0,i=null,b=null;a.$on("hook:destroyed",function(){return y(r,a)});var s=function(e){for(var l=0,a=r.length;l<a;l++)r[l].$forceUpdate();e&&(r.length=0,null!==i&&(clearTimeout(i),i=null),null!==b&&(clearTimeout(b),b=null))},c=L(function(a){e.resolved=sa(a,l),o?r.length=0:s(!0)}),p=L(function(l){u(e.errorComp)&&(e.error=!0,s(!0))}),d=e(c,p);return v(d)&&(f(d)?t(e.resolved)&&d.then(c,p):f(d.component)&&(d.component.then(c,p),u(d.error)&&(e.errorComp=sa(d.error,l)),u(d.loading)&&(e.loadingComp=sa(d.loading,l),0===d.delay?e.loading=!0:i=setTimeout(function(){i=null,t(e.resolved)&&t(e.error)&&(e.loading=!0,s(!1))},d.delay||200)),u(d.timeout)&&(b=setTimeout(function(){b=null,t(e.resolved)&&p(null)},d.timeout)))),o=!1,e.loading?e.loadingComp:e.resolved}}function pa(e){return e.isComment&&e.asyncFactory}function da(e){if(Array.isArray(e))for(var l=0;l<e.length;l++){var a=e[l];if(u(a)&&(u(a.componentOptions)||pa(a)))return a}}function ha(e){e._events=Object.create(null),e._hasHookEvent=!1;var l=e.$options._parentListeners;l&&_a(e,l)}function ga(e,l){va.$on(e,l)}function ya(e,l){va.$off(e,l)}function ma(e,l){var a=va;return function t(){var u=l.apply(null,arguments);null!==u&&a.$off(e,t)}}function _a(e,l,a){va=e,pl(l,a||{},ga,ya,ma,e),va=void 0}function wa(e){var l=/^hook:/;e.prototype.$on=function(e,a){var t=this;if(Array.isArray(e))for(var u=0,n=e.length;u<n;u++)t.$on(e[u],a);else(t._events[e]||(t._events[e]=[])).push(a),l.test(e)&&(t._hasHookEvent=!0);return t},e.prototype.$once=function(e,l){var a=this;function t(){a.$off(e,t),l.apply(a,arguments)}return t.fn=l,a.$on(e,t),a},e.prototype.$off=function(e,l){var a=this;if(!arguments.length)return a._events=Object.create(null),a;if(Array.isArray(e)){for(var t=0,u=e.length;t<u;t++)a.$off(e[t],l);return a}var n,r=a._events[e];if(!r)return a;if(!l)return a._events[e]=null,a;var o=r.length;while(o--)if(n=r[o],n===l||n.fn===l){r.splice(o,1);break}return a},e.prototype.$emit=function(e){var l=this,a=l._events[e];if(a){a=a.length>1?E(a):a;for(var t=E(arguments,1),u='event handler for "'+e+'"',n=0,r=a.length;n<r;n++)Xe(a[n],l,t,l,u)}return l}}var Oa=null;function ka(e){var l=Oa;return Oa=e,function(){Oa=l}}function Sa(e){var l=e.$options,a=l.parent;if(a&&!l.abstract){while(a.$options.abstract&&a.$parent)a=a.$parent;a.$children.push(e)}e.$parent=a,e.$root=a?a.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function $a(e){e.prototype._update=function(e,l){var a=this,t=a.$el,u=a._vnode,n=ka(a);a._vnode=e,a.$el=u?a.__patch__(u,e):a.__patch__(a.$el,e,l,!1),n(),t&&(t.__vue__=null),a.$el&&(a.$el.__vue__=a),a.$vnode&&a.$parent&&a.$vnode===a.$parent._vnode&&(a.$parent.$el=a.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Ea(e,"beforeDestroy"),e._isBeingDestroyed=!0;var l=e.$parent;!l||l._isBeingDestroyed||e.$options.abstract||y(l.$children,e),e._watcher&&e._watcher.teardown();var a=e._watchers.length;while(a--)e._watchers[a].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Ea(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function ja(e,l,t,u,n){var r=u.data.scopedSlots,o=e.$scopedSlots,v=!!(r&&!r.$stable||o!==a&&!o.$stable||r&&e.$scopedSlots.$key!==r.$key),i=!!(n||e.$options._renderChildren||v);if(e.$options._parentVnode=u,e.$vnode=u,e._vnode&&(e._vnode.parent=u),e.$options._renderChildren=n,e.$attrs=u.data.attrs||a,e.$listeners=t||a,l&&e.$options.props){Se(!1);for(var b=e._props,s=e.$options._propKeys||[],c=0;c<s.length;c++){var f=s[c],p=e.$options.props;b[f]=Ge(f,p,l,e)}Se(!0),e.$options.propsData=l}t=t||a;var d=e.$options._parentListeners;e.$options._parentListeners=t,_a(e,t,d),i&&(e.$slots=Sl(n,u.context),e.$forceUpdate())}function xa(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Aa(e,l){if(l){if(e._directInactive=!1,xa(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var a=0;a<e.$children.length;a++)Aa(e.$children[a]);Ea(e,"activated")}}function Da(e,l){if((!l||(e._directInactive=!0,!xa(e)))&&!e._inactive){e._inactive=!0;for(var a=0;a<e.$children.length;a++)Da(e.$children[a]);Ea(e,"deactivated")}}function Ea(e,l){ce();var a=e.$options[l],t=l+" hook";if(a)for(var u=0,n=a.length;u<n;u++)Xe(a[u],e,null,e,t);e._hasHookEvent&&e.$emit("hook:"+l),fe()}var Pa=[],Ca=[],Ma={},Ta=!1,Ia=!1,Na=0;function Ra(){Na=Pa.length=Ca.length=0,Ma={},Ta=Ia=!1}var La=Date.now;if(K&&!Z){var Va=window.performance;Va&&"function"===typeof Va.now&&La()>document.createEvent("Event").timeStamp&&(La=function(){return Va.now()})}function Ua(){var e,l;for(La(),Ia=!0,Pa.sort(function(e,l){return e.id-l.id}),Na=0;Na<Pa.length;Na++)e=Pa[Na],e.before&&e.before(),l=e.id,Ma[l]=null,e.run();var a=Ca.slice(),t=Pa.slice();Ra(),Ha(a),Fa(t),ne&&F.devtools&&ne.emit("flush")}function Fa(e){var l=e.length;while(l--){var a=e[l],t=a.vm;t._watcher===a&&t._isMounted&&!t._isDestroyed&&Ea(t,"updated")}}function qa(e){e._inactive=!1,Ca.push(e)}function Ha(e){for(var l=0;l<e.length;l++)e[l]._inactive=!0,Aa(e[l],!0)}function Ba(e){var l=e.id;if(null==Ma[l]){if(Ma[l]=!0,Ia){var a=Pa.length-1;while(a>Na&&Pa[a].id>e.id)a--;Pa.splice(a+1,0,e)}else Pa.push(e);Ta||(Ta=!0,vl(Ua))}}var Ga=0,za=function(e,l,a,t,u){this.vm=e,u&&(e._watcher=this),e._watchers.push(this),t?(this.deep=!!t.deep,this.user=!!t.user,this.lazy=!!t.lazy,this.sync=!!t.sync,this.before=t.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=a,this.id=++Ga,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new oe,this.newDepIds=new oe,this.expression="","function"===typeof l?this.getter=l:(this.getter=z(l),this.getter||(this.getter=M)),this.value=this.lazy?void 0:this.get()};za.prototype.get=function(){var e;ce(this);var l=this.vm;try{e=this.getter.call(l,l)}catch(eu){if(!this.user)throw eu;Ye(eu,l,'getter for watcher "'+this.expression+'"')}finally{this.deep&&bl(e),fe(),this.cleanupDeps()}return e},za.prototype.addDep=function(e){var l=e.id;this.newDepIds.has(l)||(this.newDepIds.add(l),this.newDeps.push(e),this.depIds.has(l)||e.addSub(this))},za.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var l=this.deps[e];this.newDepIds.has(l.id)||l.removeSub(this)}var a=this.depIds;this.depIds=this.newDepIds,this.newDepIds=a,this.newDepIds.clear(),a=this.deps,this.deps=this.newDeps,this.newDeps=a,this.newDeps.length=0},za.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Ba(this)},za.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||v(e)||this.deep){var l=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,l)}catch(eu){Ye(eu,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,l)}}},za.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},za.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},za.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var Ja={enumerable:!0,configurable:!0,get:M,set:M};function Wa(e,l,a){Ja.get=function(){return this[l][a]},Ja.set=function(e){this[l][a]=e},Object.defineProperty(e,a,Ja)}function Ka(e){e._watchers=[];var l=e.$options;l.props&&Ya(e,l.props),l.methods&&ut(e,l.methods),l.data?Xa(e):Ae(e._data={},!0),l.computed&&et(e,l.computed),l.watch&&l.watch!==ae&&nt(e,l.watch)}function Ya(e,l){var a=e.$options.propsData||{},t=e._props={},u=e.$options._propKeys=[],n=!e.$parent;n||Se(!1);var r=function(n){u.push(n);var r=Ge(n,l,a,e);De(t,n,r),n in e||Wa(e,"_props",n)};for(var o in l)r(o);Se(!0)}function Xa(e){var l=e.$options.data;l=e._data="function"===typeof l?Qa(l,e):l||{},b(l)||(l={});var a=Object.keys(l),t=e.$options.props,u=(e.$options.methods,a.length);while(u--){var n=a[u];0,t&&_(t,n)||H(n)||Wa(e,"_data",n)}Ae(l,!0)}function Qa(e,l){ce();try{return e.call(l,l)}catch(eu){return Ye(eu,l,"data()"),{}}finally{fe()}}var Za={lazy:!0};function et(e,l){var a=e._computedWatchers=Object.create(null),t=ue();for(var u in l){var n=l[u],r="function"===typeof n?n:n.get;0,t||(a[u]=new za(e,r||M,M,Za)),u in e||lt(e,u,n)}}function lt(e,l,a){var t=!ue();"function"===typeof a?(Ja.get=t?at(l):tt(a),Ja.set=M):(Ja.get=a.get?t&&!1!==a.cache?at(l):tt(a.get):M,Ja.set=a.set||M),Object.defineProperty(e,l,Ja)}function at(e){return function(){var l=this._computedWatchers&&this._computedWatchers[e];if(l)return l.dirty&&l.evaluate(),se.SharedObject.target&&l.depend(),l.value}}function tt(e){return function(){return e.call(this,this)}}function ut(e,l){e.$options.props;for(var a in l)e[a]="function"!==typeof l[a]?M:D(l[a],e)}function nt(e,l){for(var a in l){var t=l[a];if(Array.isArray(t))for(var u=0;u<t.length;u++)rt(e,a,t[u]);else rt(e,a,t)}}function rt(e,l,a,t){return b(a)&&(t=a,a=a.handler),"string"===typeof a&&(a=e[a]),e.$watch(l,a,t)}function ot(e){var l={get:function(){return this._data}},a={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",l),Object.defineProperty(e.prototype,"$props",a),e.prototype.$set=Ee,e.prototype.$delete=Pe,e.prototype.$watch=function(e,l,a){var t=this;if(b(l))return rt(t,e,l,a);a=a||{},a.user=!0;var u=new za(t,e,l,a);if(a.immediate)try{l.call(t,u.value)}catch(n){Ye(n,t,'callback for immediate watcher "'+u.expression+'"')}return function(){u.teardown()}}}var vt=0;function it(e){e.prototype._init=function(e){var l=this;l._uid=vt++,l._isVue=!0,e&&e._isComponent?bt(l,e):l.$options=He(st(l.constructor),e||{},l),l._renderProxy=l,l._self=l,Sa(l),ha(l),oa(l),Ea(l,"beforeCreate"),"mp-toutiao"!==l.mpHost&&Ol(l),Ka(l),"mp-toutiao"!==l.mpHost&&wl(l),"mp-toutiao"!==l.mpHost&&Ea(l,"created"),l.$options.el&&l.$mount(l.$options.el)}}function bt(e,l){var a=e.$options=Object.create(e.constructor.options),t=l._parentVnode;a.parent=l.parent,a._parentVnode=t;var u=t.componentOptions;a.propsData=u.propsData,a._parentListeners=u.listeners,a._renderChildren=u.children,a._componentTag=u.tag,l.render&&(a.render=l.render,a.staticRenderFns=l.staticRenderFns)}function st(e){var l=e.options;if(e.super){var a=st(e.super),t=e.superOptions;if(a!==t){e.superOptions=a;var u=ct(e);u&&P(e.extendOptions,u),l=e.options=He(a,e.extendOptions),l.name&&(l.components[l.name]=e)}}return l}function ct(e){var l,a=e.options,t=e.sealedOptions;for(var u in a)a[u]!==t[u]&&(l||(l={}),l[u]=a[u]);return l}function ft(e){this._init(e)}function pt(e){e.use=function(e){var l=this._installedPlugins||(this._installedPlugins=[]);if(l.indexOf(e)>-1)return this;var a=E(arguments,1);return a.unshift(this),"function"===typeof e.install?e.install.apply(e,a):"function"===typeof e&&e.apply(null,a),l.push(e),this}}function dt(e){e.mixin=function(e){return this.options=He(this.options,e),this}}function ht(e){e.cid=0;var l=1;e.extend=function(e){e=e||{};var a=this,t=a.cid,u=e._Ctor||(e._Ctor={});if(u[t])return u[t];var n=e.name||a.options.name;var r=function(e){this._init(e)};return r.prototype=Object.create(a.prototype),r.prototype.constructor=r,r.cid=l++,r.options=He(a.options,e),r["super"]=a,r.options.props&&gt(r),r.options.computed&&yt(r),r.extend=a.extend,r.mixin=a.mixin,r.use=a.use,V.forEach(function(e){r[e]=a[e]}),n&&(r.options.components[n]=r),r.superOptions=a.options,r.extendOptions=e,r.sealedOptions=P({},r.options),u[t]=r,r}}function gt(e){var l=e.options.props;for(var a in l)Wa(e.prototype,"_props",a)}function yt(e){var l=e.options.computed;for(var a in l)lt(e.prototype,a,l[a])}function mt(e){V.forEach(function(l){e[l]=function(e,a){return a?("component"===l&&b(a)&&(a.name=a.name||e,a=this.options._base.extend(a)),"directive"===l&&"function"===typeof a&&(a={bind:a,update:a}),this.options[l+"s"][e]=a,a):this.options[l+"s"][e]}})}function _t(e){return e&&(e.Ctor.options.name||e.tag)}function wt(e,l){return Array.isArray(e)?e.indexOf(l)>-1:"string"===typeof e?e.split(",").indexOf(l)>-1:!!s(e)&&e.test(l)}function Ot(e,l){var a=e.cache,t=e.keys,u=e._vnode;for(var n in a){var r=a[n];if(r){var o=_t(r.componentOptions);o&&!l(o)&&kt(a,n,t,u)}}}function kt(e,l,a,t){var u=e[l];!u||t&&u.tag===t.tag||u.componentInstance.$destroy(),e[l]=null,y(a,l)}it(ft),ot(ft),wa(ft),$a(ft),ba(ft);var St=[String,RegExp,Array],$t={name:"keep-alive",abstract:!0,props:{include:St,exclude:St,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)kt(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(l){Ot(e,function(e){return wt(l,e)})}),this.$watch("exclude",function(l){Ot(e,function(e){return!wt(l,e)})})},render:function(){var e=this.$slots.default,l=da(e),a=l&&l.componentOptions;if(a){var t=_t(a),u=this,n=u.include,r=u.exclude;if(n&&(!t||!wt(n,t))||r&&t&&wt(r,t))return l;var o=this,v=o.cache,i=o.keys,b=null==l.key?a.Ctor.cid+(a.tag?"::"+a.tag:""):l.key;v[b]?(l.componentInstance=v[b].componentInstance,y(i,b),i.push(b)):(v[b]=l,i.push(b),this.max&&i.length>parseInt(this.max)&&kt(v,i[0],i,this._vnode)),l.data.keepAlive=!0}return l||e&&e[0]}},jt={KeepAlive:$t};function xt(e){var l={get:function(){return F}};Object.defineProperty(e,"config",l),e.util={warn:ie,extend:P,mergeOptions:He,defineReactive:De},e.set=Ee,e.delete=Pe,e.nextTick=vl,e.observable=function(e){return Ae(e),e},e.options=Object.create(null),V.forEach(function(l){e.options[l+"s"]=Object.create(null)}),e.options._base=e,P(e.options.components,jt),pt(e),dt(e),ht(e),mt(e)}xt(ft),Object.defineProperty(ft.prototype,"$isServer",{get:ue}),Object.defineProperty(ft.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(ft,"FunctionalRenderContext",{value:Bl}),ft.version="2.6.10";var At="[object Array]",Dt="[object Object]";function Et(e,l){var a={};return Pt(e,l),Ct(e,l,"",a),a}function Pt(e,l){if(e!==l){var a=Tt(e),t=Tt(l);if(a==Dt&&t==Dt){if(Object.keys(e).length>=Object.keys(l).length)for(var u in l){var n=e[u];void 0===n?e[u]=null:Pt(n,l[u])}}else a==At&&t==At&&e.length>=l.length&&l.forEach(function(l,a){Pt(e[a],l)})}}function Ct(e,l,a,t){if(e!==l){var u=Tt(e),n=Tt(l);if(u==Dt)if(n!=Dt||Object.keys(e).length<Object.keys(l).length)Mt(t,a,e);else{var r=function(u){var n=e[u],r=l[u],o=Tt(n),v=Tt(r);if(o!=At&&o!=Dt)n!=l[u]&&Mt(t,(""==a?"":a+".")+u,n);else if(o==At)v!=At?Mt(t,(""==a?"":a+".")+u,n):n.length<r.length?Mt(t,(""==a?"":a+".")+u,n):n.forEach(function(e,l){Ct(e,r[l],(""==a?"":a+".")+u+"["+l+"]",t)});else if(o==Dt)if(v!=Dt||Object.keys(n).length<Object.keys(r).length)Mt(t,(""==a?"":a+".")+u,n);else for(var i in n)Ct(n[i],r[i],(""==a?"":a+".")+u+"."+i,t)};for(var o in e)r(o)}else u==At?n!=At?Mt(t,a,e):e.length<l.length?Mt(t,a,e):e.forEach(function(e,u){Ct(e,l[u],a+"["+u+"]",t)}):Mt(t,a,e)}}function Mt(e,l,a){e[l]=a}function Tt(e){return Object.prototype.toString.call(e)}function It(e){if(e.__next_tick_callbacks&&e.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var l=e.$scope;console.log("["+ +new Date+"]["+(l.is||l.route)+"]["+e._uid+"]:flushCallbacks["+e.__next_tick_callbacks.length+"]")}var a=e.__next_tick_callbacks.slice(0);e.__next_tick_callbacks.length=0;for(var t=0;t<a.length;t++)a[t]()}}function Nt(e){return Pa.find(function(l){return e._watcher===l})}function Rt(e,l){if(!e.__next_tick_pending&&!Nt(e)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var a=e.$scope;console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+e._uid+"]:nextVueTick")}return vl(l,e)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var t=e.$scope;console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+e._uid+"]:nextMPTick")}var u;if(e.__next_tick_callbacks||(e.__next_tick_callbacks=[]),e.__next_tick_callbacks.push(function(){if(l)try{l.call(e)}catch(eu){Ye(eu,e,"nextTick")}else u&&u(e)}),!l&&"undefined"!==typeof Promise)return new Promise(function(e){u=e})}function Lt(e){var l=Object.create(null),a=[].concat(Object.keys(e._data||{}),Object.keys(e._computedWatchers||{}));return a.reduce(function(l,a){return l[a]=e[a],l},l),Object.assign(l,e.$mp.data||{}),Array.isArray(e.$options.behaviors)&&-1!==e.$options.behaviors.indexOf("uni://form-field")&&(l["name"]=e.name,l["value"]=e.value),JSON.parse(JSON.stringify(l))}var Vt=function(e,l){var a=this;if(null!==l&&("page"===this.mpType||"component"===this.mpType)){var t=this.$scope,u=Object.create(null);try{u=Lt(this)}catch(o){console.error(o)}u.__webviewId__=t.data.__webviewId__;var n=Object.create(null);Object.keys(u).forEach(function(e){n[e]=t.data[e]});var r=Et(u,n);Object.keys(r).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+this._uid+"]差量更新",JSON.stringify(r)),this.__next_tick_pending=!0,t.setData(r,function(){a.__next_tick_pending=!1,It(a)})):It(this)}};function Ut(){}function Ft(e,l,a){if(!e.mpType)return e;"app"===e.mpType&&(e.$options.render=Ut),e.$options.render||(e.$options.render=Ut),"mp-toutiao"!==e.mpHost&&Ea(e,"beforeMount");var t=function(){e._update(e._render(),a)};return new za(e,t,M,{before:function(){e._isMounted&&!e._isDestroyed&&Ea(e,"beforeUpdate")}},!0),a=!1,e}function qt(e,l){return u(e)||u(l)?Ht(e,Bt(l)):""}function Ht(e,l){return e?l?e+" "+l:e:l||""}function Bt(e){return Array.isArray(e)?Gt(e):v(e)?zt(e):"string"===typeof e?e:""}function Gt(e){for(var l,a="",t=0,n=e.length;t<n;t++)u(l=Bt(e[t]))&&""!==l&&(a&&(a+=" "),a+=l);return a}function zt(e){var l="";for(var a in e)e[a]&&(l&&(l+=" "),l+=a);return l}var Jt=w(function(e){var l={},a=/;(?![^(]*\))/g,t=/:(.+)/;return e.split(a).forEach(function(e){if(e){var a=e.split(t);a.length>1&&(l[a[0].trim()]=a[1].trim())}}),l});function Wt(e){return Array.isArray(e)?C(e):"string"===typeof e?Jt(e):e}var Kt=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Yt(e,l){var a=l.split("."),t=a[0];return 0===t.indexOf("__$n")&&(t=parseInt(t.replace("__$n",""))),1===a.length?e[t]:Yt(e[t],a.slice(1).join("."))}function Xt(e){e.config.errorHandler=function(e){console.error(e)};var l=e.prototype.$emit;e.prototype.$emit=function(e){return this.$scope&&e&&this.$scope["triggerEvent"](e,{__args__:E(arguments,1)}),l.apply(this,arguments)},e.prototype.$nextTick=function(e){return Rt(this,e)},Kt.forEach(function(l){e.prototype[l]=function(e){if(this.$scope)return this.$scope[l](e)}}),e.prototype.__init_provide=wl,e.prototype.__init_injections=Ol,e.prototype.__call_hook=function(e,l){var a=this;ce();var t,u=a.$options[e],n=e+" hook";if(u)for(var r=0,o=u.length;r<o;r++)t=Xe(u[r],a,l?[l]:null,a,n);return a._hasHookEvent&&a.$emit("hook:"+e),fe(),t},e.prototype.__set_model=function(e,l,a,t){Array.isArray(t)&&(-1!==t.indexOf("trim")&&(a=a.trim()),-1!==t.indexOf("number")&&(a=this._n(a))),e||(e=this),e[l]=a},e.prototype.__set_sync=function(e,l,a){e||(e=this),e[l]=a},e.prototype.__get_orig=function(e){return b(e)&&e["$orig"]||e},e.prototype.__get_value=function(e,l){return Yt(l||this,e)},e.prototype.__get_class=function(e,l){return qt(l,e)},e.prototype.__get_style=function(e,l){if(!e&&!l)return"";var a=Wt(e),t=l?P(l,a):a;return Object.keys(t).map(function(e){return j(e)+":"+t[e]}).join(";")},e.prototype.__map=function(e,l){var a,t,u,n,r;if(Array.isArray(e)){for(a=new Array(e.length),t=0,u=e.length;t<u;t++)a[t]=l(e[t],t);return a}if(v(e)){for(n=Object.keys(e),a=Object.create(null),t=0,u=n.length;t<u;t++)r=n[t],a[r]=l(e[r],r,t);return a}return[]}}var Qt=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function Zt(e){var l=e.extend;e.extend=function(e){e=e||{};var a=e.methods;return a&&Object.keys(a).forEach(function(l){-1!==Qt.indexOf(l)&&(e[l]=a[l],delete a[l])}),l.call(this,e)};var a=e.config.optionMergeStrategies,t=a.created;Qt.forEach(function(e){a[e]=t}),e.prototype.__lifecycle_hooks__=Qt}ft.prototype.__patch__=Vt,ft.prototype.$mount=function(e,l){return Ft(this,e,l)},Zt(ft),Xt(ft),l["default"]=ft}.call(this,a("c8ba"))},"6e42":function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.createApp=pl,l.createComponent=Sl,l.createPage=kl,l.default=void 0;var t=u(a("66fd"));function u(e){return e&&e.__esModule?e:{default:e}}function n(e,l){return v(e)||o(e,l)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(e,l){var a=[],t=!0,u=!1,n=void 0;try{for(var r,o=e[Symbol.iterator]();!(t=(r=o.next()).done);t=!0)if(a.push(r.value),l&&a.length===l)break}catch(v){u=!0,n=v}finally{try{t||null==o["return"]||o["return"]()}finally{if(u)throw n}}return a}function v(e){if(Array.isArray(e))return e}function i(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function b(e){return f(e)||c(e)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function f(e){if(Array.isArray(e)){for(var l=0,a=new Array(e.length);l<e.length;l++)a[l]=e[l];return a}}var p=Object.prototype.toString,d=Object.prototype.hasOwnProperty;function h(e){return"function"===typeof e}function g(e){return"string"===typeof e}function y(e){return"[object Object]"===p.call(e)}function m(e,l){return d.call(e,l)}function _(){}function w(e){var l=Object.create(null);return function(a){var t=l[a];return t||(l[a]=e(a))}}var O=/-(\w)/g,k=w(function(e){return e.replace(O,function(e,l){return l?l.toUpperCase():""})}),S=["invoke","success","fail","complete","returnValue"],$={},j={};function x(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?A(a):a}function A(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function D(e,l){var a=e.indexOf(l);-1!==a&&e.splice(a,1)}function E(e,l){Object.keys(l).forEach(function(a){-1!==S.indexOf(a)&&h(l[a])&&(e[a]=x(e[a],l[a]))})}function P(e,l){e&&l&&Object.keys(l).forEach(function(a){-1!==S.indexOf(a)&&h(l[a])&&D(e[a],l[a])})}function C(e,l){"string"===typeof e&&y(l)?E(j[e]||(j[e]={}),l):y(e)&&E($,e)}function M(e,l){"string"===typeof e?y(l)?P(j[e],l):delete j[e]:y(e)&&P($,e)}function T(e){return function(l){return e(l)||l}}function I(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then}function N(e,l){for(var a=!1,t=0;t<e.length;t++){var u=e[t];if(a)a=Promise.then(T(u));else{var n=u(l);if(I(n)&&(a=Promise.resolve(n)),!1===n)return{then:function(){}}}}return a||{then:function(e){return e(l)}}}function R(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(a){if(Array.isArray(e[a])){var t=l[a];l[a]=function(l){N(e[a],l).then(function(e){return h(t)&&t(e)||e})}}}),l}function L(e,l){var a=[];Array.isArray($.returnValue)&&a.push.apply(a,b($.returnValue));var t=j[e];return t&&Array.isArray(t.returnValue)&&a.push.apply(a,b(t.returnValue)),a.forEach(function(e){l=e(l)||l}),l}function V(e){var l=Object.create(null);Object.keys($).forEach(function(e){"returnValue"!==e&&(l[e]=$[e].slice())});var a=j[e];return a&&Object.keys(a).forEach(function(e){"returnValue"!==e&&(l[e]=(l[e]||[]).concat(a[e]))}),l}function U(e,l,a){for(var t=arguments.length,u=new Array(t>3?t-3:0),n=3;n<t;n++)u[n-3]=arguments[n];var r=V(e);if(r&&Object.keys(r).length){if(Array.isArray(r.invoke)){var o=N(r.invoke,a);return o.then(function(e){return l.apply(void 0,[R(r,e)].concat(u))})}return l.apply(void 0,[R(r,a)].concat(u))}return l.apply(void 0,[a].concat(u))}var F={returnValue:function(e){return I(e)?e.then(function(e){return e[1]}).catch(function(e){return e[0]}):e}},q=/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,H=/^create|Manager$/,B=/^on/;function G(e){return H.test(e)}function z(e){return q.test(e)}function J(e){return B.test(e)&&"onPush"!==e}function W(e){return e.then(function(e){return[null,e]}).catch(function(e){return[e]})}function K(e){return!(G(e)||z(e)||J(e))}function Y(e,l){return K(e)?function(){for(var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length,u=new Array(t>1?t-1:0),n=1;n<t;n++)u[n-1]=arguments[n];return h(a.success)||h(a.fail)||h(a.complete)?L(e,U.apply(void 0,[e,l,a].concat(u))):L(e,W(new Promise(function(t,n){U.apply(void 0,[e,l,Object.assign({},a,{success:t,fail:n})].concat(u)),Promise.prototype.finally||(Promise.prototype.finally=function(e){var l=this.constructor;return this.then(function(a){return l.resolve(e()).then(function(){return a})},function(a){return l.resolve(e()).then(function(){throw a})})})})))}:l}var X=1e-4,Q=750,Z=!1,ee=0,le=0;function ae(){var e=wx.getSystemInfoSync(),l=e.platform,a=e.pixelRatio,t=e.windowWidth;ee=t,le=a,Z="ios"===l}function te(e,l){if(0===ee&&ae(),e=Number(e),0===e)return 0;var a=e/Q*(l||ee);return a<0&&(a=-a),a=Math.floor(a+X),0===a?1!==le&&Z?.5:1:e<0?-a:a}var ue={promiseInterceptor:F},ne=Object.freeze({upx2px:te,interceptors:ue,addInterceptor:C,removeInterceptor:M}),re={},oe=[],ve=[],ie=["success","fail","cancel","complete"];function be(e,l,a){return function(t){return l(ce(e,t,a))}}function se(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(y(l)){var n=!0===u?l:{};for(var r in h(a)&&(a=a(l,n)||{}),l)if(m(a,r)){var o=a[r];h(o)&&(o=o(l[r],l,n)),o?g(o)?n[o]=l[r]:y(o)&&(n[o.name?o.name:r]=o.value):console.warn("app-plus ".concat(e,"暂不支持").concat(r))}else-1!==ie.indexOf(r)?n[r]=be(e,l[r],t):u||(n[r]=l[r]);return n}return h(l)&&(l=be(e,l,t)),l}function ce(e,l,a){var t=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return h(re.returnValue)&&(l=re.returnValue(e,l)),se(e,l,a,{},t)}function fe(e,l){if(m(re,e)){var a=re[e];return a?function(l,t){var u=a;h(a)&&(u=a(l)),l=se(e,l,u.args,u.returnValue);var n=[l];"undefined"!==typeof t&&n.push(t);var r=wx[u.name||e].apply(wx,n);return z(e)?ce(e,r,u.returnValue,G(e)):r}:function(){console.error("app-plus 暂不支持".concat(e))}}return l}var pe=Object.create(null),de=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function he(e){return function(l){var a=l.fail,t=l.complete,u={errMsg:"".concat(e,":fail:暂不支持 ").concat(e," 方法")};h(a)&&a(u),h(t)&&t(u)}}de.forEach(function(e){pe[e]=he(e)});var ge=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return e||(e=new t.default),e};var e}();function ye(e,l,a){return e[l].apply(e,a)}function me(){return ye(ge(),"$on",Array.prototype.slice.call(arguments))}function _e(){return ye(ge(),"$off",Array.prototype.slice.call(arguments))}function we(){return ye(ge(),"$once",Array.prototype.slice.call(arguments))}function Oe(){return ye(ge(),"$emit",Array.prototype.slice.call(arguments))}var ke=Object.freeze({$on:me,$off:_e,$once:we,$emit:Oe});function Se(e){return"undefined"!==typeof weex?weex.requireModule(e):__requireNativePlugin__(e)}function $e(e){e.$processed=!0,e.postMessage=function(l){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:l},e.id)};var l=[];if(e.onMessage=function(e){l.push(e)},e.$consumeMessage=function(e){l.forEach(function(l){return l(e)})},e.__uniapp_mask_id){var a=e.__uniapp_mask,t="0"===e.__uniapp_mask_id?{setStyle:function(e){var l=e.mask;Se("uni-tabview").setMask({color:l})}}:plus.webview.getWebviewById(e.__uniapp_mask_id),u=e.show,n=e.hide,r=e.close,o=function(){t.setStyle({mask:a})},v=function(){t.setStyle({mask:"none"})};e.show=function(){o();for(var l=arguments.length,a=new Array(l),t=0;t<l;t++)a[t]=arguments[t];return u.apply(e,a)},e.hide=function(){v();for(var l=arguments.length,a=new Array(l),t=0;t<l;t++)a[t]=arguments[t];return n.apply(e,a)},e.close=function(){v(),l=[];for(var a=arguments.length,t=new Array(a),u=0;u<a;u++)t[u]=arguments[u];return r.apply(e,t)}}}function je(e){var l=plus.webview.getWebviewById(e);return l&&!l.$processed&&$e(l),l}var xe=Object.freeze({getSubNVueById:je,requireNativePlugin:Se}),Ae=Page,De=Component,Ee=/:/g,Pe=w(function(e){return k(e.replace(Ee,"-"))});function Ce(e){if(wx.canIUse("nextTick")){var l=e.triggerEvent;e.triggerEvent=function(a){for(var t=arguments.length,u=new Array(t>1?t-1:0),n=1;n<t;n++)u[n-1]=arguments[n];return l.apply(e,[Pe(a)].concat(u))}}}function Me(e,l){var a=l[e];l[e]=a?function(){Ce(this);for(var e=arguments.length,l=new Array(e),t=0;t<e;t++)l[t]=arguments[t];return a.apply(this,l)}:function(){Ce(this)}}Page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Me("onLoad",e),Ae(e)},Component=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Me("created",e),De(e)};var Te=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Ie(e,l){var a=e.$mp[e.mpType];l.forEach(function(l){m(a,l)&&(e[l]=a[l])})}function Ne(e,l){if(!l)return!0;if(t.default.options&&Array.isArray(t.default.options[e]))return!0;if(l=l.default||l,h(l))return!!h(l.extendOptions[e])||!!(l.super&&l.super.options&&Array.isArray(l.super.options[e]));if(h(l[e]))return!0;var a=l.mixins;return Array.isArray(a)?!!a.find(function(l){return Ne(e,l)}):void 0}function Re(e,l,a){l.forEach(function(l){Ne(l,a)&&(e[l]=function(e){return this.$vm&&this.$vm.__call_hook(l,e)})})}function Le(e,l){var a;return l=l.default||l,h(l)?(a=l,l=a.extendOptions):a=e.extend(l),[a,l]}function Ve(e,l){if(Array.isArray(l)&&l.length){var a=Object.create(null);l.forEach(function(e){a[e]=!0}),e.$scopedSlots=e.$slots=a}}function Ue(e,l){e=(e||"").split(",");var a=e.length;1===a?l._$vueId=e[0]:2===a&&(l._$vueId=e[0],l._$vuePid=e[1])}function Fe(e,l){var a=e.data||{},t=e.methods||{};if("function"===typeof a)try{a=a.call(l)}catch(u){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",a)}else try{a=JSON.parse(JSON.stringify(a))}catch(u){}return y(a)||(a={}),Object.keys(t).forEach(function(e){-1!==l.__lifecycle_hooks__.indexOf(e)||m(a,e)||(a[e]=t[e])}),a}var qe=[String,Number,Boolean,Object,Array,null];function He(e){return function(l,a){this.$vm&&(this.$vm[e]=l)}}function Be(e,l){var a=e["behaviors"],t=e["extends"],u=e["mixins"],n=e["props"];n||(e["props"]=n=[]);var r=[];return Array.isArray(a)&&a.forEach(function(e){r.push(e.replace("uni://","wx".concat("://"))),"uni://form-field"===e&&(Array.isArray(n)?(n.push("name"),n.push("value")):(n["name"]={type:String,default:""},n["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),y(t)&&t.props&&r.push(l({properties:ze(t.props,!0)})),Array.isArray(u)&&u.forEach(function(e){y(e)&&e.props&&r.push(l({properties:ze(e.props,!0)}))}),r}function Ge(e,l,a,t){return Array.isArray(l)&&1===l.length?l[0]:l}function ze(e){var l=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return l||(a.vueId={type:String,value:""},a.vueSlots={type:null,value:[],observer:function(e,l){var a=Object.create(null);e.forEach(function(e){a[e]=!0}),this.setData({$slots:a})}}),Array.isArray(e)?e.forEach(function(e){a[e]={type:null,observer:He(e)}}):y(e)&&Object.keys(e).forEach(function(l){var t=e[l];if(y(t)){var u=t["default"];h(u)&&(u=u()),t.type=Ge(l,t.type),a[l]={type:-1!==qe.indexOf(t.type)?t.type:null,value:u,observer:He(l)}}else{var n=Ge(l,t);a[l]={type:-1!==qe.indexOf(n)?n:null,observer:He(l)}}}),a}function Je(e){try{e.mp=JSON.parse(JSON.stringify(e))}catch(l){}return e.stopPropagation=_,e.preventDefault=_,e.target=e.target||{},m(e,"detail")||(e.detail={}),y(e.detail)&&(e.target=Object.assign({},e.target,e.detail)),e}function We(e,l){var a=e;return l.forEach(function(l){var t=l[0],u=l[2];if(t||"undefined"!==typeof u){var n=l[1],r=l[3],o=t?e.__get_value(t,a):a;Number.isInteger(o)?a=u:n?Array.isArray(o)?a=o.find(function(l){return e.__get_value(n,l)===u}):y(o)?a=Object.keys(o).find(function(l){return e.__get_value(n,o[l])===u}):console.error("v-for 暂不支持循环数据：",o):a=o[u],r&&(a=e.__get_value(r,a))}}),a}function Ke(e,l,a){var t={};return Array.isArray(l)&&l.length&&l.forEach(function(l,u){"string"===typeof l?l?"$event"===l?t["$"+u]=a:0===l.indexOf("$event.")?t["$"+u]=e.__get_value(l.replace("$event.",""),a):t["$"+u]=e.__get_value(l):t["$"+u]=e:t["$"+u]=We(e,l)}),t}function Ye(e){for(var l={},a=1;a<e.length;a++){var t=e[a];l[t[0]]=t[1]}return l}function Xe(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],u=arguments.length>4?arguments[4]:void 0,n=arguments.length>5?arguments[5]:void 0,r=!1;if(u&&(r=l.currentTarget&&l.currentTarget.dataset&&"wx"===l.currentTarget.dataset.comType,!a.length))return r?[l]:l.detail.__args__||l.detail;var o=Ke(e,t,l),v=[];return a.forEach(function(e){"$event"===e?"__set_model"!==n||u?u&&!r?v.push(l.detail.__args__[0]):v.push(l):v.push(l.target.value):Array.isArray(e)&&"o"===e[0]?v.push(Ye(e)):"string"===typeof e&&m(o,e)?v.push(o[e]):v.push(e)}),v}var Qe="~",Ze="^";function el(e,l){return e===l||"regionchange"===l&&("begin"===e||"end"===e)}function ll(e){var l=this;e=Je(e);var a=(e.currentTarget||e.target).dataset;if(!a)return console.warn("事件信息不存在");var t=a.eventOpts||a["event-opts"];if(!t)return console.warn("事件信息不存在");var u=e.type,n=[];return t.forEach(function(a){var t=a[0],r=a[1],o=t.charAt(0)===Ze;t=o?t.slice(1):t;var v=t.charAt(0)===Qe;t=v?t.slice(1):t,r&&el(u,t)&&r.forEach(function(a){var t=a[0];if(t){var u=l.$vm;if(u.$options.generic&&u.$parent&&u.$parent.$parent&&(u=u.$parent.$parent),"$emit"===t)return void u.$emit.apply(u,Xe(l.$vm,e,a[1],a[2],o,t));var r=u[t];if(!h(r))throw new Error(" _vm.".concat(t," is not a function"));if(v){if(r.once)return;r.once=!0}n.push(r.apply(u,Xe(l.$vm,e,a[1],a[2],o,t)))}})}),"input"===u&&1===n.length&&"undefined"!==typeof n[0]?n[0]:void 0}var al=["onShow","onHide","onError","onPageNotFound"];function tl(e,l){var a=l.mocks,u=l.initRefs;e.$options.store&&(t.default.prototype.$store=e.$options.store),t.default.prototype.mpHost="app-plus",t.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=i({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(u(this),Ie(this,a)))}});var n={onLaunch:function(l){this.$vm||(this.$vm=e,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",l),this.$vm.__call_hook("onLaunch",l))}};n.globalData=e.$options.globalData||{};var r=e.$options.methods;return r&&Object.keys(r).forEach(function(e){n[e]=r[e]}),Re(n,al),n}var ul=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function nl(e,l){var a=e.$children,t=a.find(function(e){return e.$scope._$vueId===l});if(t)return t;for(var u=a.length-1;u>=0;u--)if(t=nl(a[u],l),t)return t}function rl(e){return Behavior(e)}function ol(){return!!this.route}function vl(e){this.triggerEvent("__l",e)}function il(e){var l=e.$scope;Object.defineProperty(e,"$refs",{get:function(){var e={},a=l.selectAllComponents(".vue-ref");a.forEach(function(l){var a=l.dataset.ref;e[a]=l.$vm||l});var t=l.selectAllComponents(".vue-ref-in-for");return t.forEach(function(l){var a=l.dataset.ref;e[a]||(e[a]=[]),e[a].push(l.$vm||l)}),e}})}function bl(e){var l,a=e.detail||e.value,t=a.vuePid,u=a.vueOptions;t&&(l=nl(this.$vm,t)),l||(l=this.$vm),u.parent=l}function sl(e){return tl(e,{mocks:ul,initRefs:il})}var cl=["onUniNViewMessage"];function fl(e){var l=sl(e);return Re(l,cl),l}function pl(e){return App(fl(e)),e}function dl(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=l.isPage,u=l.initRelation,r=Le(t.default,e),o=n(r,2),v=o[0],i=o[1],b={multipleSlots:!0,addGlobalClass:!0},s={options:b,data:Fe(i,t.default.prototype),behaviors:Be(i,rl),properties:ze(i.props,!1,i.__file),lifetimes:{attached:function(){var e=this.properties,l={mpType:a.call(this)?"page":"component",mpInstance:this,propsData:e};Ue(e.vueId,this),u.call(this,{vuePid:this._$vuePid,vueOptions:l}),this.$vm=new v(l),Ve(this.$vm,e.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(e){this.$vm&&this.$vm.__call_hook("onPageShow",e)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(e){this.$vm&&this.$vm.__call_hook("onPageResize",e)}},methods:{__l:bl,__e:ll}};return Array.isArray(i.wxsCallMethods)&&i.wxsCallMethods.forEach(function(e){s.methods[e]=function(l){return this.$vm[e](l)}}),a?s:[s,v]}function hl(e){return dl(e,{isPage:ol,initRelation:vl})}function gl(e){var l=hl(e);return l.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},l}var yl=["onShow","onHide","onUnload"];function ml(e,l){l.isPage,l.initRelation;var a=gl(e);return Re(a.methods,yl,e),a.methods.onLoad=function(e){this.$vm.$mp.query=e,this.$vm.__call_hook("onLoad",e)},a}function _l(e){return ml(e,{isPage:ol,initRelation:vl})}yl.push.apply(yl,Te);var wl=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Ol(e){var l=_l(e);return Re(l.methods,wl),l}function kl(e){return Component(Ol(e))}function Sl(e){return Component(gl(e))}oe.forEach(function(e){re[e]=!1}),ve.forEach(function(e){var l=re[e]&&re[e].name?re[e].name:e;wx.canIUse(l)||(re[e]=!1)});var $l={};Object.keys(ne).forEach(function(e){$l[e]=ne[e]}),Object.keys(ke).forEach(function(e){$l[e]=ke[e]}),Object.keys(xe).forEach(function(e){$l[e]=Y(e,xe[e])}),Object.keys(wx).forEach(function(e){(m(wx,e)||m(re,e))&&($l[e]=Y(e,fe(e,wx[e])))}),"undefined"!==typeof e&&(e.uni=$l,e.UniEmitter=ke),wx.createApp=pl,wx.createPage=kl,wx.createComponent=Sl;var jl=$l,xl=jl;l.default=xl}).call(this,a("c8ba"))},7687:function(e,l,a){"use strict";(function(l){var a;function t(){var e=!1,a=plus.ios.import("UIApplication"),t=a.sharedApplication(),u=0;if(t.currentUserNotificationSettings){var n=t.currentUserNotificationSettings();u=n.plusGetAttribute("types"),console.log(l("enabledTypes1:"+u," at common\\wa-permission\\permission.js:19")),0==u?console.log(l("推送权限没有开启"," at common\\wa-permission\\permission.js:21")):(e=!0,console.log(l("已经开启推送功能!"," at common\\wa-permission\\permission.js:24"))),plus.ios.deleteObject(n)}else u=t.enabledRemoteNotificationTypes(),0==u?console.log(l("推送权限没有开启!"," at common\\wa-permission\\permission.js:30")):(e=!0,console.log(l("已经开启推送功能!"," at common\\wa-permission\\permission.js:33"))),console.log(l("enabledTypes2:"+u," at common\\wa-permission\\permission.js:35"));return plus.ios.deleteObject(t),plus.ios.deleteObject(a),e}function u(){var e=!1,a=plus.ios.import("CLLocationManager"),t=a.authorizationStatus();return e=2!=t,console.log(l("定位权限开启："+e," at common\\wa-permission\\permission.js:48")),plus.ios.deleteObject(a),e}function n(){var e=!1,a=plus.ios.import("AVAudioSession"),t=a.sharedInstance(),u=t.recordPermission();return console.log(l("permissionStatus:"+u," at common\\wa-permission\\permission.js:70")),1684369017==u||1970168948==u?console.log(l("麦克风权限没有开启"," at common\\wa-permission\\permission.js:72")):(e=!0,console.log(l("麦克风权限已经开启"," at common\\wa-permission\\permission.js:75"))),plus.ios.deleteObject(a),e}function r(){var e=!1,a=plus.ios.import("AVCaptureDevice"),t=a.authorizationStatusForMediaType("vide");return console.log(l("authStatus:"+t," at common\\wa-permission\\permission.js:86")),3==t?(e=!0,console.log(l("相机权限已经开启"," at common\\wa-permission\\permission.js:89"))):console.log(l("相机权限没有开启"," at common\\wa-permission\\permission.js:91")),plus.ios.deleteObject(a),e}function o(){var e=!1,a=plus.ios.import("PHPhotoLibrary"),t=a.authorizationStatus();return console.log(l("authStatus:"+t," at common\\wa-permission\\permission.js:102")),3==t?(e=!0,console.log(l("相册权限已经开启"," at common\\wa-permission\\permission.js:105"))):console.log(l("相册权限没有开启"," at common\\wa-permission\\permission.js:107")),plus.ios.deleteObject(a),e}function v(){var e=!1,a=plus.ios.import("CNContactStore"),t=a.authorizationStatusForEntityType(0);return 3==t?(e=!0,console.log(l("通讯录权限已经开启"," at common\\wa-permission\\permission.js:120"))):console.log(l("通讯录权限没有开启"," at common\\wa-permission\\permission.js:122")),plus.ios.deleteObject(a),e}function i(){var e=!1,a=plus.ios.import("EKEventStore"),t=a.authorizationStatusForEntityType(0);return 3==t?(e=!0,console.log(l("日历权限已经开启"," at common\\wa-permission\\permission.js:135"))):console.log(l("日历权限没有开启"," at common\\wa-permission\\permission.js:137")),plus.ios.deleteObject(a),e}function b(){var e=!1,a=plus.ios.import("EKEventStore"),t=a.authorizationStatusForEntityType(1);return 3==t?(e=!0,console.log(l("备忘录权限已经开启"," at common\\wa-permission\\permission.js:150"))):console.log(l("备忘录权限没有开启"," at common\\wa-permission\\permission.js:152")),plus.ios.deleteObject(a),e}function s(e){return new Promise(function(a,t){plus.android.requestPermissions([e],function(e){for(var t=0,u=0;u<e.granted.length;u++){var n=e.granted[u];console.log(l("已获取的权限："+n," at common\\wa-permission\\permission.js:167")),t=1}for(u=0;u<e.deniedPresent.length;u++){var r=e.deniedPresent[u];console.log(l("拒绝本次申请的权限："+r," at common\\wa-permission\\permission.js:172")),t=0}for(u=0;u<e.deniedAlways.length;u++){var o=e.deniedAlways[u];console.log(l("永久拒绝申请的权限："+o," at common\\wa-permission\\permission.js:177")),t=-1}a(t)},function(e){console.log(l("申请权限错误："+e.code+" = "+e.message," at common\\wa-permission\\permission.js:187")),a({code:e.code,message:e.message})})})}function c(e){return"location"==e?u():"camera"==e?r():"photoLibrary"==e?o():"record"==e?n():"push"==e?t():"contact"==e?v():"calendar"==e?i():"memo"==e&&b()}function f(){if(a){var e=plus.ios.import("UIApplication"),l=e.sharedApplication(),t=plus.ios.import("NSURL"),u=t.URLWithString("app-settings:");l.openURL(u),plus.ios.deleteObject(u),plus.ios.deleteObject(t),plus.ios.deleteObject(l)}else{var n=plus.android.importClass("android.content.Intent"),r=plus.android.importClass("android.provider.Settings"),o=plus.android.importClass("android.net.Uri"),v=plus.android.runtimeMainActivity(),i=new n;i.setAction(r.ACTION_APPLICATION_DETAILS_SETTINGS);var b=o.fromParts("package",v.getPackageName(),null);i.setData(b),v.startActivity(i)}}function p(){if(a){var e=!1,t=plus.ios.import("CLLocationManager");e=t.locationServicesEnabled();return console.log(l("系统定位开启:"+e," at common\\wa-permission\\permission.js:253")),plus.ios.deleteObject(t),e}var u=plus.android.importClass("android.content.Context"),n=plus.android.importClass("android.location.LocationManager"),r=plus.android.runtimeMainActivity(),o=r.getSystemService(u.LOCATION_SERVICE);e=o.isProviderEnabled(n.GPS_PROVIDER);return console.log(l("系统定位开启:"+e," at common\\wa-permission\\permission.js:262")),e}a="iOS"==plus.os.name,e.exports={judgeIosPermission:c,requestAndroidPermission:s,checkSystemEnableLocation:p,gotoAppPermissionSetting:f}}).call(this,a("0de9")["default"])},8189:function(e){e.exports={_from:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",_id:"@dcloudio/uni-stat@2.0.0-v3-24020191018001",_inBundle:!1,_integrity:"sha512-nYBm5pRrYzrj2dKMqucWSF2PwInUMnn3MLHM/ik3gnLUEKSW61rzcY1RPlUwaH7c+Snm6N+bAJzmj3GvlrlVXA==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"^2.0.0-alpha-24420191128001",saveSpec:null,fetchSpec:"^2.0.0-alpha-24420191128001"},_requiredBy:["/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-v3-24020191018001.tgz",_shasum:"6ef04326cc0b945726413eebe442ab8f47c7536c",_spec:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"197e8df53cc9d4c3f6eb722b918ccf51672b5cfe",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-v3-24020191018001"}},"8a5c":function(e,l,a){"use strict";(function(e,a){function t(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function u(e,l){for(var a=0;a<l.length;a++){var t=l[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function n(e,l,a){return l&&u(e.prototype,l),a&&u(e,a),e}Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var r=null,o=null,v=!1,i=[],b=function(){function l(u){var n=this;t(this,l),this.config=Object.assign({url:"ws://127.0.0.1",params:{},debug:!0,isSendHeart:!0,isReconnection:!0,reConnectTime:3e3,timeout:24e4,heartData:"ping",onSocketMessage:null,onSocketClose:null,onSocketError:null,onSocketOpen:null},u),this.initSocket=function(l,t){if(v)return n.config.debug&&console.log(e("%c [socket] %c 您已经登录了,请勿重新登录","color:#0f0;","color:#000;"," at common\\socket\\index.js:50")),"function"===typeof l&&l(n);n.config.debug&&console.log(e("%c [socket] %c 检查网络状态...","color:yellow;","color:#000;"," at common\\socket\\index.js:54")),a.getNetworkType({fail:function(l){n.config.debug&&console.log(e("%c [socket] %c 检查网络状态失败:","color:red;","color:#000;",l," at common\\socket\\index.js:57")),"function"===typeof t&&t(l,n)},success:function(u){"none"===u.networkType?(n.config.debug&&console.log(e("%c [socket] %c 网络已断开","color:red;","color:#000;"," at common\\socket\\index.js:62")),v=!1,!1,a.showModal({title:"网络错误",content:"请打开网络服务",showCancel:!1}),"function"===typeof t&&t(u,n)):(!0,n.config.debug&&console.log(e("%c [socket] %c 网络正常,开始建立连接...","color:yellow;","color:#000;"," at common\\socket\\index.js:73")),a.connectSocket({url:n.config.url,fail:function(l){n.config.debug&&console.log(e("%c [socket] %c 连接socket失败:","color:red;","color:#000;",l," at common\\socket\\index.js:77")),"function"===typeof t&&t(l,n)},success:function(t){a.showToast({title:"WS连接成功",mask:!1,duration:1500}),console.log(e("%c [socket] %c 连接成功","color:blue;","color:#000;",t," at common\\socket\\index.js:87")),"function"===typeof l&&l(n)}}))}})},this.sendSocketMessage=function(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,u=arguments.length>2?arguments[2]:void 0;"object"===typeof l?(l=Object.assign(n.config.params,l),n.config.debug&&console.log(e("%c [socket] %c 发送消息","color:blue;","color:#000;",l," at common\\socket\\index.js:100")),l=JSON.stringify(l)):n.config.debug&&console.log(e("%c [socket] %c 发送消息","color:blue;","color:#000;",l," at common\\socket\\index.js:103")),v?a.sendSocketMessage({data:l,success:t,fail:u}):i.push(l)},this.closeSocket=function(l){n.config.debug&&console.log(e("%c [socket] %c 主动关闭socket","color:red;","color:#000;"," at common\\socket\\index.js:117")),v=!1,n.config.isSendHeart&&n._clearHeart(),a.closeSocket(l)},a.onSocketOpen(function(l){n.config.debug&&console.log(e("%c [socket] %c socket打开成功","color:blue;","color:#000;",l," at common\\socket\\index.js:129")),v=!0,n.config.isSendHeart&&(n.config.debug&&console.log(e("%c [socket] %c 检查到需要发送心跳包:","color:#0f0;","color:#000;",n.config.timeout," at common\\socket\\index.js:134")),n._clearHeart()._startHeart()),console.log(e("----消息队列----",i," at common\\socket\\index.js:139"));for(var a=0;a<i.length;a++)n.config.debug&&console.log(e("%c [socket] %c 正在发送消息队列消息:","color:blue;","color:#000;",a,i[a]," at common\\socket\\index.js:141")),n.sendSocketMessage(i[a]);i=[],"function"===typeof n.config.onSocketOpen&&n.config.onSocketOpen(n)}),a.onSocketMessage(function(l){var a=n._isJson(l.data)?JSON.parse(l.data):l.data;n.config.debug&&console.log(e("%c [socket] %c 接收到消息:","color:blue;","color:#000;",a," at common\\socket\\index.js:151")),"function"===typeof n.config.onSocketMessage&&n.config.onSocketMessage(a)}),a.onNetworkStatusChange(function(l){n.config.debug&&console.log(e("%c [socket] %c 监听到网络状态改变","color:#0f0;","color:#000;",JSON.stringify(l)," at common\\socket\\index.js:156")),l.isConnected?!v&&n.config.isReconnection&&(n.config.debug&&console.log(e("%c [socket] %c 监听到有网络服务,重新连接socket","color:yellow;","color:#000;"," at common\\socket\\index.js:160")),n._reConnentSocket()):(v=!1,n.config.isSendHeart&&n._clearHeart(),a.showModal({title:"网络错误",content:"请打开网络服务",showCancel:!1}))}),a.onSocketClose(function(l){v=!1,"function"===typeof n.config.onSocketClose&&n.config.onSocketClose(l),n.config.debug&&console.log(e("%c [socket] %c 监听到socket被关闭了:","color:red;","color:#000;",JSON.stringify(l)," at common\\socket\\index.js:177")),n.config.isSendHeart&&n._clearHeart(),
/*!isClosed && */
n.config.isReconnection&&(n.config.debug&&console.log(e("%c [socket] %c 非主动断开socket,重新连接中...","color:yellow;","color:#000;"," at common\\socket\\index.js:185")),n._reConnentSocket())}),a.onSocketError(function(l){v=!1,n.config.debug&&console.log(e("%c [socket] %c 监听到socket错误","color:red;","color:#000;",l," at common\\socket\\index.js:192")),"function"===typeof n.config.onSocketError&&n.config.onSocketError(l)})}return n(l,[{key:"_reConnentSocket",value:function(){var l=this;this.isLogin?this.config.debug&&console.log(e("%c [socket] %c 在登录状态,无法重连","color:red;","color:#000;"," at common\\socket\\index.js:203")):o=setInterval(function(){l.initSocket(function(l){l.config.debug&&console.log(e("%c [socket] %c 重新连接成功","color:yellow;","color:#000;"," at common\\socket\\index.js:207")),l.config.isSendHeart&&l._clearHeart()._startHeart(),clearInterval(o),o=null},function(l,a){a.config.debug&&console.log(e("%c [socket] %c 重新连接失败","color:red;","color:#000;"," at common\\socket\\index.js:214"))})},this.config.reConnectTime)}},{key:"_clearHeart",value:function(){return this.config.debug&&console.log(e("%c [socket] %c 已清除心跳","color:#0f0;","color:#000;"," at common\\socket\\index.js:221")),clearInterval(r),this}},{key:"_startHeart",value:function(){var l=this;this.config.debug&&console.log(e("%c [socket] %c 心跳开始","color:#0f0;","color:#000;"," at common\\socket\\index.js:227")),r=setInterval(function(){console.warn(e("登录状态",v," at common\\socket\\index.js:229")),l.sendSocketMessage(l.config.heartData)},this.config.timeout)}},{key:"_isJson",value:function(e){if("string"==typeof e)try{var l=JSON.parse(e);return!("object"!=typeof l||!l)}catch(a){return!1}}}]),l}();l.default=b}).call(this,a("0de9")["default"],a("6e42")["default"])},"8c62":function(e,l,a){"use strict";(function(e,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=o(a("66fd")),n=o(a("2f62")),r=o(a("eba7"));function o(e){return e&&e.__esModule?e:{default:e}}u.default.use(n.default);var v=new n.default.Store({state:{token:"",dailyLogin:0,userInfo:null},getters:{carryParamsInHome:function(e){return e.carryParamsInHome},token:function(e){return e.token},dailyLogin:function(e){return e.dailyLogin},userInfo:function(e){return e.userInfo}},mutations:{changeVal:function(l){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{stateKey:stateKey,newValue:newValue};l[a.stateKey]=a.newValue,"carryParamsInHome"==a.stateKey&&console.log(e("------Vuex---carryParamsInHome---------",a.newValue," at store\\index.js:48")),"token"==a.stateKey&&t.setStorage({key:"token",data:a.newValue}),"dailyLogin"==a.stateKey&&t.setStorage({key:"dailyLogin",data:a.newValue}),"userInfo"==a.stateKey&&t.setStorage({key:"userInfo",data:JSON.stringify(a.newValue)})},outApp:function(e){t.removeStorage({key:"token",success:function(){e.token=null}}),t.removeStorage({key:"userInfo",success:function(){e.userInfo=null}})}},actions:{changeVal:function(e){var l=e.commit,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{stateKey:stateKey,newValue:newValue};l("changeVal",a)}},modules:{socketInfo:r.default}}),i=v;l.default=i}).call(this,a("0de9")["default"],a("6e42")["default"])},"921b":function(e,l,a){"use strict";(function(e){var l=a("8189");function t(e,l){return!l||"object"!==typeof l&&"function"!==typeof l?u(e):l}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}function r(e,l){if("function"!==typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(l&&l.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),l&&o(e,l)}function o(e,l){return o=Object.setPrototypeOf||function(e,l){return e.__proto__=l,e},o(e,l)}function v(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function i(e,l){for(var a=0;a<l.length;a++){var t=l[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function b(e,l,a){return l&&i(e.prototype,l),a&&i(e,a),e}var s=l.version,c="https://tongji.dcloud.io/uni/stat",f="https://tongji.dcloud.io/uni/stat.gif",p=1800,d=300,h=10,g="__DC_STAT_UUID",y="__DC_UUID_VALUE";function m(){var l="";if("n"===k()){try{l=plus.runtime.getDCloudId()}catch(a){l=""}return l}try{l=e.getStorageSync(g)}catch(a){l=y}if(!l){l=Date.now()+""+Math.floor(1e7*Math.random());try{e.setStorageSync(g,l)}catch(a){e.setStorageSync(g,y)}}return l}var _=function(e){var l=Object.keys(e),a=l.sort(),t={},u="";for(var n in a)t[a[n]]=e[a[n]],u+=a[n]+"="+e[a[n]]+"&";return{sign:"",options:u.substr(0,u.length-1)}},w=function(e){var l="";for(var a in e)l+=a+"="+e[a]+"&";return l.substr(0,l.length-1)},O=function(){return parseInt((new Date).getTime()/1e3)},k=function(){var e={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return e["app-plus"]},S=function(){var l="";return"wx"!==k()&&"qq"!==k()||e.canIUse("getAccountInfoSync")&&(l=e.getAccountInfoSync().miniProgram.appId||""),l},$=function(){return"n"===k()?plus.runtime.version:""},j=function(){var e=k(),l="";return"n"===e&&(l=plus.runtime.channel),l},x=function(l){var a=k(),t="";return l||("wx"===a&&(t=e.getLaunchOptionsSync().scene),t)},A="First__Visit__Time",D="Last__Visit__Time",E=function(){var l=e.getStorageSync(A),a=0;return l?a=l:(a=O(),e.setStorageSync(A,a),e.removeStorageSync(D)),a},P=function(){var l=e.getStorageSync(D),a=0;return a=l||"",e.setStorageSync(D,O()),a},C="__page__residence__time",M=0,T=0,I=function(){return M=O(),"n"===k()&&e.setStorageSync(C,O()),M},N=function(){return T=O(),"n"===k()&&(M=e.getStorageSync(C)),T-M},R="Total__Visit__Count",L=function(){var l=e.getStorageSync(R),a=1;return l&&(a=l,a++),e.setStorageSync(R,a),a},V=function(e){var l={};for(var a in e)l[a]=encodeURIComponent(e[a]);return l},U=0,F=0,q=function(){var e=(new Date).getTime();return U=e,F=0,e},H=function(){var e=(new Date).getTime();return F=e,e},B=function(e){var l=0;if(0!==U&&(l=F-U),l=parseInt(l/1e3),l=l<1?1:l,"app"===e){var a=l>d;return{residenceTime:l,overtime:a}}if("page"===e){var t=l>p;return{residenceTime:l,overtime:t}}return{residenceTime:l}},G=function(){var e=getCurrentPages(),l=e[e.length-1],a=l.$vm;return"bd"===k()?a.$mp&&a.$mp.page.is:a.$scope&&a.$scope.route||a.$mp&&a.$mp.page.route},z=function(e){var l=getCurrentPages(),a=l[l.length-1],t=a.$vm,u=e._query,n=u&&"{}"!==JSON.stringify(u)?"?"+JSON.stringify(u):"";return e._query="","bd"===k()?t.$mp&&t.$mp.page.is+n:t.$scope&&t.$scope.route+n||t.$mp&&t.$mp.page.route+n},J=function(e){return!!("page"===e.mpType||e.$mp&&"page"===e.$mp.mpType||"page"===e.$options.mpType)},W=function(e,l){return e?"string"!==typeof e?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):e.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof l&&"object"!==typeof l?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof l&&l.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===e&&"string"!==typeof l?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},K=a("d670").default,Y=a("e160").default||a("e160"),X=e.getSystemInfoSync(),Q=function(){function l(){v(this,l),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:m(),ut:k(),mpn:S(),ak:Y.appid,usv:s,v:$(),ch:j(),cn:"",pn:"",ct:"",t:O(),tt:"",p:"android"===X.platform?"a":"i",brand:X.brand||"",md:X.model,sv:X.system.replace(/(Android|iOS)\s/,""),mpsdk:X.SDKVersion||"",mpv:X.version||"",lang:X.language,pr:X.pixelRatio,ww:X.windowWidth,wh:X.windowHeight,sw:X.screenWidth,sh:X.screenHeight}}return b(l,[{key:"_applicationShow",value:function(){if(this.__licationHide){H();var e=B("app");if(e.overtime){var l={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(l)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(e,l){this.__licationHide=!0,H();var a=B();q();var t=z(this);this._sendHideRequest({urlref:t,urlref_ts:a.residenceTime},l)}},{key:"_pageShow",value:function(){var e=z(this),l=G();if(this._navigationBarTitle.config=K&&K.pages[l]&&K.pages[l].titleNView&&K.pages[l].titleNView.titleText||K&&K.pages[l]&&K.pages[l].navigationBarTitleText||"",this.__licationShow)return q(),this.__licationShow=!1,void(this._lastPageRoute=e);H(),this._lastPageRoute=e;var a=B("page");if(a.overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}q()}},{key:"_pageHide",value:function(){if(!this.__licationHide){H();var e=B("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:e.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(e){this._sendEventRequest({key:e},0)}},{key:"_sendReportRequest",value:function(e){this._navigationBarTitle.lt="1";var l=e.query&&"{}"!==JSON.stringify(e.query)?"?"+JSON.stringify(e.query):"";this.statData.lt="1",this.statData.url=e.path+l||"",this.statData.t=O(),this.statData.sc=x(e.scene),this.statData.fvts=E(),this.statData.lvts=P(),this.statData.tvc=L(),"n"===k()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(e){var l=e.url,a=e.urlref,t=e.urlref_ts;this._navigationBarTitle.lt="11";var u={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:l,tt:this.statData.tt,urlref:a,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:O(),p:this.statData.p};this.request(u)}},{key:"_sendHideRequest",value:function(e,l){var a=e.urlref,t=e.urlref_ts,u={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:a,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:O(),p:this.statData.p};this.request(u,l)}},{key:"_sendEventRequest",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=e.key,a=void 0===l?"":l,t=e.value,u=void 0===t?"":t,n=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:n,ch:this.statData.ch,e_n:a,e_v:"object"===typeof u?JSON.stringify(u):u.toString(),usv:this.statData.usv,t:O(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var l=this;e.getNetworkType({success:function(e){l.statData.net=e.networkType,l.getLocation()}})}},{key:"getProperty",value:function(){var e=this;plus.runtime.getProperty(plus.runtime.appid,function(l){e.statData.v=l.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var l=this;Y.getLocation?e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(l.statData.cn=e.address.country,l.statData.pn=e.address.province,l.statData.ct=e.address.city),l.statData.lat=e.latitude,l.statData.lng=e.longitude,l.request(l.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(l,a){var t=this,u=O(),n=this._navigationBarTitle;l.ttn=n.page,l.ttpj=n.config,l.ttc=n.report;var r=this._reportingRequestData;if("n"===k()&&(r=e.getStorageSync("__UNI__STAT__DATA")||{}),r[l.lt]||(r[l.lt]=[]),r[l.lt].push(l),"n"===k()&&e.setStorageSync("__UNI__STAT__DATA",r),!(N()<h)||a){var o=this._reportingRequestData;"n"===k()&&(o=e.getStorageSync("__UNI__STAT__DATA")),I();var v=[],i=[],b=[],c=function(e){var l=o[e];l.forEach(function(l){var a=w(l);0===e?v.push(a):3===e?b.push(a):i.push(a)})};for(var f in o)c(f);v.push.apply(v,i.concat(b));var p={usv:s,t:u,requests:JSON.stringify(v)};this._reportingRequestData={},"n"===k()&&e.removeStorageSync("__UNI__STAT__DATA"),"h5"!==l.ut?"n"!==k()||"a"!==this.statData.p?this._sendRequest(p):setTimeout(function(){t._sendRequest(p)},200):this.imageRequest(p)}}},{key:"_sendRequest",value:function(l){var a=this;e.request({url:c,method:"POST",data:l,success:function(){},fail:function(e){++a._retry<3&&setTimeout(function(){a._sendRequest(l)},1e3)}})}},{key:"imageRequest",value:function(e){var l=new Image,a=_(V(e)).options;l.src=f+"?"+a}},{key:"sendEvent",value:function(e,l){W(e,l)||("title"!==e?this._sendEventRequest({key:e,value:"object"===typeof l?JSON.stringify(l):l},1):this._navigationBarTitle.report=l)}}]),l}(),Z=function(l){function a(){var l;return v(this,a),l=t(this,n(a).call(this)),l.instance=null,"function"===typeof e.addInterceptor&&(l.addInterceptorInit(),l.interceptLogin(),l.interceptShare(!0),l.interceptRequestPayment()),l}return r(a,l),b(a,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new a),this.instance}}]),b(a,[{key:"addInterceptorInit",value:function(){var l=this;e.addInterceptor("setNavigationBarTitle",{invoke:function(e){l._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var l=this;e.addInterceptor("login",{complete:function(){l._login()}})}},{key:"interceptShare",value:function(l){var a=this;l?e.addInterceptor("share",{success:function(){a._share()},fail:function(){a._share()}}):a._share()}},{key:"interceptRequestPayment",value:function(){var l=this;e.addInterceptor("requestPayment",{success:function(){l._payment("pay_success")},fail:function(){l._payment("pay_fail")}})}},{key:"report",value:function(e,l){this.self=l,I(),this.__licationShow=!0,this._sendReportRequest(e,!0)}},{key:"load",value:function(e,l){if(!l.$scope&&!l.$mp){var a=getCurrentPages();l.$scope=a[a.length-1]}this.self=l,this._query=e}},{key:"show",value:function(e){this.self=e,J(e)?this._pageShow(e):this._applicationShow(e)}},{key:"ready",value:function(e){}},{key:"hide",value:function(e){this.self=e,J(e)?this._pageHide(e):this._applicationHide(e,!0)}},{key:"error",value:function(e){this._platform;var l="";l=e.message?e.stack:JSON.stringify(e);var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:l,usv:this.statData.usv,t:O(),p:this.statData.p};this.request(a)}}]),a}(Q),ee=Z.getInstance(),le=!1,ae={onLaunch:function(e){ee.report(e,this)},onReady:function(){ee.ready(this)},onLoad:function(e){if(ee.load(e,this),this.$scope&&this.$scope.onShareAppMessage){var l=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(e){return ee.interceptShare(!1),l.call(this,e)}}},onShow:function(){le=!1,ee.show(this)},onHide:function(){le=!0,ee.hide(this)},onUnload:function(){le?le=!1:ee.hide(this)},onError:function(e){ee.error(e)}};function te(){var l=a("66fd");(l.default||l).mixin(ae),e.report=function(e,l){ee.sendEvent(e,l)}}te()}).call(this,a("6e42")["default"])},"96cf":function(e,l){!function(l){"use strict";var a,t=Object.prototype,u=t.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",v=n.toStringTag||"@@toStringTag",i="object"===typeof e,b=l.regeneratorRuntime;if(b)i&&(e.exports=b);else{b=l.regeneratorRuntime=i?e.exports:{},b.wrap=_;var s="suspendedStart",c="suspendedYield",f="executing",p="completed",d={},h={};h[r]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(C([])));y&&y!==t&&u.call(y,r)&&(h=y);var m=S.prototype=O.prototype=Object.create(h);k.prototype=m.constructor=S,S.constructor=k,S[v]=k.displayName="GeneratorFunction",b.isGeneratorFunction=function(e){var l="function"===typeof e&&e.constructor;return!!l&&(l===k||"GeneratorFunction"===(l.displayName||l.name))},b.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,S):(e.__proto__=S,v in e||(e[v]="GeneratorFunction")),e.prototype=Object.create(m),e},b.awrap=function(e){return{__await:e}},$(j.prototype),j.prototype[o]=function(){return this},b.AsyncIterator=j,b.async=function(e,l,a,t){var u=new j(_(e,l,a,t));return b.isGeneratorFunction(l)?u:u.next().then(function(e){return e.done?e.value:u.next()})},$(m),m[v]="Generator",m[r]=function(){return this},m.toString=function(){return"[object Generator]"},b.keys=function(e){var l=[];for(var a in e)l.push(a);return l.reverse(),function a(){while(l.length){var t=l.pop();if(t in e)return a.value=t,a.done=!1,a}return a.done=!0,a}},b.values=C,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(E),!e)for(var l in this)"t"===l.charAt(0)&&u.call(this,l)&&!isNaN(+l.slice(1))&&(this[l]=a)},stop:function(){this.done=!0;var e=this.tryEntries[0],l=e.completion;if("throw"===l.type)throw l.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var l=this;function t(t,u){return o.type="throw",o.arg=e,l.next=t,u&&(l.method="next",l.arg=a),!!u}for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n],o=r.completion;if("root"===r.tryLoc)return t("end");if(r.tryLoc<=this.prev){var v=u.call(r,"catchLoc"),i=u.call(r,"finallyLoc");if(v&&i){if(this.prev<r.catchLoc)return t(r.catchLoc,!0);if(this.prev<r.finallyLoc)return t(r.finallyLoc)}else if(v){if(this.prev<r.catchLoc)return t(r.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return t(r.finallyLoc)}}}},abrupt:function(e,l){for(var a=this.tryEntries.length-1;a>=0;--a){var t=this.tryEntries[a];if(t.tryLoc<=this.prev&&u.call(t,"finallyLoc")&&this.prev<t.finallyLoc){var n=t;break}}n&&("break"===e||"continue"===e)&&n.tryLoc<=l&&l<=n.finallyLoc&&(n=null);var r=n?n.completion:{};return r.type=e,r.arg=l,n?(this.method="next",this.next=n.finallyLoc,d):this.complete(r)},complete:function(e,l){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&l&&(this.next=l),d},finish:function(e){for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),E(a),d}},catch:function(e){for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l];if(a.tryLoc===e){var t=a.completion;if("throw"===t.type){var u=t.arg;E(a)}return u}}throw new Error("illegal catch attempt")},delegateYield:function(e,l,t){return this.delegate={iterator:C(e),resultName:l,nextLoc:t},"next"===this.method&&(this.arg=a),d}}}function _(e,l,a,t){var u=l&&l.prototype instanceof O?l:O,n=Object.create(u.prototype),r=new P(t||[]);return n._invoke=x(e,a,r),n}function w(e,l,a){try{return{type:"normal",arg:e.call(l,a)}}catch(t){return{type:"throw",arg:t}}}function O(){}function k(){}function S(){}function $(e){["next","throw","return"].forEach(function(l){e[l]=function(e){return this._invoke(l,e)}})}function j(e){function l(a,t,n,r){var o=w(e[a],e,t);if("throw"!==o.type){var v=o.arg,i=v.value;return i&&"object"===typeof i&&u.call(i,"__await")?Promise.resolve(i.__await).then(function(e){l("next",e,n,r)},function(e){l("throw",e,n,r)}):Promise.resolve(i).then(function(e){v.value=e,n(v)},function(e){return l("throw",e,n,r)})}r(o.arg)}var a;function t(e,t){function u(){return new Promise(function(a,u){l(e,t,a,u)})}return a=a?a.then(u,u):u()}this._invoke=t}function x(e,l,a){var t=s;return function(u,n){if(t===f)throw new Error("Generator is already running");if(t===p){if("throw"===u)throw n;return M()}a.method=u,a.arg=n;while(1){var r=a.delegate;if(r){var o=A(r,a);if(o){if(o===d)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(t===s)throw t=p,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);t=f;var v=w(e,l,a);if("normal"===v.type){if(t=a.done?p:c,v.arg===d)continue;return{value:v.arg,done:a.done}}"throw"===v.type&&(t=p,a.method="throw",a.arg=v.arg)}}}function A(e,l){var t=e.iterator[l.method];if(t===a){if(l.delegate=null,"throw"===l.method){if(e.iterator.return&&(l.method="return",l.arg=a,A(e,l),"throw"===l.method))return d;l.method="throw",l.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var u=w(t,e.iterator,l.arg);if("throw"===u.type)return l.method="throw",l.arg=u.arg,l.delegate=null,d;var n=u.arg;return n?n.done?(l[e.resultName]=n.value,l.next=e.nextLoc,"return"!==l.method&&(l.method="next",l.arg=a),l.delegate=null,d):n:(l.method="throw",l.arg=new TypeError("iterator result is not an object"),l.delegate=null,d)}function D(e){var l={tryLoc:e[0]};1 in e&&(l.catchLoc=e[1]),2 in e&&(l.finallyLoc=e[2],l.afterLoc=e[3]),this.tryEntries.push(l)}function E(e){var l=e.completion||{};l.type="normal",delete l.arg,e.completion=l}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(D,this),this.reset(!0)}function C(e){if(e){var l=e[r];if(l)return l.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var t=-1,n=function l(){while(++t<e.length)if(u.call(e,t))return l.value=e[t],l.done=!1,l;return l.value=a,l.done=!0,l};return n.next=n}}return{next:M}}function M(){return{value:a,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a115:function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.dateDiff=l.dateFormat=l.weekFormat=l.compare=l.timeFormat=void 0;var a=function(e){if(!e)return"";var l,a=new Date;e.constructor!==Date&&(e=new Date(e.replace(/\./g,"/"))),e=new Date(e);var t=e.getFullYear(),n=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,r=e.getDate()<10?"0"+e.getDate():e.getDate(),o=e.getDay(),v=e.getHours()<10?"0"+e.getHours():e.getHours(),i=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),b=a.getFullYear(),s=(a.getMonth()+1<10?a.getMonth():a.getMonth(),a.getDate()<10?"0"+a.getDate():a.getDate()),c=Math.abs(e-a)<6048e5;return l=t<b?t+"-"+n+"-"+r:c?s-r===1?"昨天 "+v+":"+i:s==r?v+":"+i:u(o):n+"-"+r,l};l.timeFormat=a;var t=function(e){return function(l,a){var t=l[e],u=a[e];return t<u?1:t>u?-1:0}};l.compare=t;var u=function(l){var a;switch(l){case 1:a="星期一";break;case 2:a="星期二";break;case 3:a="星期三";break;case 4:a="星期四";break;case 5:a="星期五";break;case 6:a="星期六";break;default:a="星期天"}return console.log(e("-----str---",a," at common\\Utils\\Date.js:94")),a};l.weekFormat=u;var n=function(l,a){if(!l)return"";l.constructor!==Date&&(l=new Date(l));var t={"M+":l.getMonth()+1,"d+":l.getDate(),"h+":l.getHours(),"m+":l.getMinutes(),"s+":l.getSeconds(),"q+":Math.floor((l.getMonth()+3)/3),S:l.getMilliseconds()};for(var u in console.log(e("----- 0 ------",t," at common\\Utils\\Date.js:119")),/(y+)/.test(a)&&(a=a.replace(RegExp.$1,(l.getFullYear()+"").substr(4-RegExp.$1.length))),t)new RegExp("("+u+")").test(a)&&(a=a.replace(RegExp.$1,1===RegExp.$1.length?t[u]:("00"+t[u]).substr((""+t[u]).length)));return a};l.dateFormat=n;var r=function(l,a,t){var u=t||3e5;return l||a?(console.log(e("-------Time1------",l," at common\\Utils\\Date.js:137")),console.log(e("-------Time2------",a," at common\\Utils\\Date.js:138")),l=new Date(l.replace(/\./g,"/")).getTime(),a=new Date(a.replace(/\./g,"/")).getTime(),Math.abs(a-l)>u?1:0):""};l.dateDiff=r}).call(this,a("0de9")["default"])},a34a:function(e,l,a){e.exports=a("bbdd")},a353:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[{label:"北京市",value:"11"},{label:"天津市",value:"12"},{label:"河北省",value:"13"},{label:"山西省",value:"14"},{label:"内蒙古自治区",value:"15"},{label:"辽宁省",value:"21"},{label:"吉林省",value:"22"},{label:"黑龙江省",value:"23"},{label:"上海市",value:"31"},{label:"江苏省",value:"32"},{label:"浙江省",value:"33"},{label:"安徽省",value:"34"},{label:"福建省",value:"35"},{label:"江西省",value:"36"},{label:"山东省",value:"37"},{label:"河南省",value:"41"},{label:"湖北省",value:"42"},{label:"湖南省",value:"43"},{label:"广东省",value:"44"},{label:"广西壮族自治区",value:"45"},{label:"海南省",value:"46"},{label:"重庆市",value:"50"},{label:"四川省",value:"51"},{label:"贵州省",value:"52"},{label:"云南省",value:"53"},{label:"西藏自治区",value:"54"},{label:"陕西省",value:"61"},{label:"甘肃省",value:"62"},{label:"青海省",value:"63"},{label:"宁夏回族自治区",value:"64"},{label:"新疆维吾尔自治区",value:"65"},{label:"台湾",value:"66"},{label:"香港",value:"67"},{label:"澳门",value:"68"}],u=t;l.default=u},aabe:function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.http_v1=void 0;var t=n(a("f8ea")),u=n(a("8c62"));function n(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{},t=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.forEach(function(l){o(e,l,a[l])})}return e}function o(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}var v=new t.default;l.http_v1=v,v.setConfig(function(e){return e.baseUrl+="/v1/",e.header=r({},e.hearder),e.sslVerify=!1,e}),v.interceptor.request(function(l,a){return 1==l.custom.v2&&(l.baseUrl=l.baseUrl.replace("/v1","/v2")),1==l.custom.istoken&&(u.default.state.token?l.params=r({},l.params,{token:u.default.state.token}):a("身份认证失败,重新登录",l)),console.log(e("拦截",l," at common\\luch-request\\index.js:35")),l}),v.validateStatus=function(e){return 200===e},v.interceptor.response(function(e){return e.data},function(e){return e.data})}).call(this,a("0de9")["default"])},bbdd:function(e,l,a){var t=function(){return this||"object"===typeof self&&self}()||Function("return this")(),u=t.regeneratorRuntime&&Object.getOwnPropertyNames(t).indexOf("regeneratorRuntime")>=0,n=u&&t.regeneratorRuntime;if(t.regeneratorRuntime=void 0,e.exports=a("96cf"),u)t.regeneratorRuntime=n;else try{delete t.regeneratorRuntime}catch(r){t.regeneratorRuntime=void 0}},c478:function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a={data:function(){return{page:1,pageSize:10,loadMoreStatus:0,showLoadMore:!1,modalName:"",toastText:"",dialogText:"",dialogSureText:""}},watch:{modalName:function(){var e=this;"toastModal"==this.modalName&&setTimeout(function(){e.modalName=""},1500)}},methods:{clog:function(l,a){console.log(e("----"+l+"----",a," at mixins\\init.js:28"))},modalShow:function(e,l){this.modalName=e,"toastModal"==e&&(this.toastText=l||""),"dialogModal"==e&&(this.dialogText=l)}}};l.default=a}).call(this,a("0de9")["default"])},c8ba:function(e,l){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(t){"object"===typeof window&&(a=window)}e.exports=a},d670:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t={pages:{"pages/initial/wxoauth":{},"pages/initial/personaldata":{},"pages/home/index":{},"pages/send/text":{},"pages/send/voice":{},"pages/search/search":{},"pages/chat/list":{bounce:"none"},"pages/chat/chat":{bounce:"none"},"pages/user/index":{},"pages/user/signal":{},"pages/user/coin":{},"pages/user/vip":{},"pages/user/coinrecord":{onReachBottomDistance:20},"pages/user/settings":{}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"Meet U",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#DADADA",navigationStyle:"custom"}};l.default=t},dab9:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=function(e){return e<10?"0"+e:e+""},u={date:{init:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"date",u=arguments.length>3?arguments[3]:void 0,n=arguments.length>4?arguments[4]:void 0,r=arguments.length>5?arguments[5]:void 0,o=arguments.length>6?arguments[6]:void 0,v=new Date,i=[],b=new Date(e.toString()),s=new Date(l.toString());e>l&&(b=new Date(l.toString()),s=new Date(e.toString()));var c=b.getFullYear(),f=(b.getMonth(),s.getFullYear()),p=[],d=[],h=[],g=[],y=[],m=[],_=[],w=[],O=r?1*n[1]:n[1]+1,k=v.getFullYear(),S=v.getMonth()+1,$=v.getDate(),j=new Date(c,O,0).getDate();switch(a){case"half":case"date":case"yearMonth":var x=n[0],A=n[1];if(o){for(var D=c;D<=k;D++)p.push(D+"");if(x==k)for(var E=1;E<=S;E++)d.push(t(E));else for(var P=1;P<=12;P++)d.push(t(P));if(A==S)for(var C=1;C<=$;C++)h.push(t(C));else for(var M=1;M<=j;M++)h.push(t(M))}else{for(var T=c;T<=f;T++)p.push(T+"");for(var I=1;I<=12;I++)d.push(t(I));for(var N=1;N<=j;N++)h.push(t(N))}break;default:for(var R=c;R<=f;R++)p.push(R+"");for(var L=1;L<=12;L++)d.push(t(L));for(var V=1;V<=j;V++)h.push(t(V));break}for(var U=0;U<24;U++)g.push(t(U));for(var F=0;F<60;F+=1*u)y.push(t(F));for(var q=0;q<60;q++)m.push(t(q));switch(r&&(w=[p.indexOf(n[0]),d.indexOf(n[1]),h.indexOf(n[2]),g.indexOf(n[3]),-1==y.indexOf(n[4])?0:y.indexOf(n[4]),m.indexOf(n[5])]),a){case"range":return r?(i=[w[0],w[1],w[2],0,w[0],w[1],w[2]],{years:p,months:d,days:h,defaultVal:i}):{years:p,months:d,days:h};case"date":return r?(i=[w[0],w[1],w[2]],{years:p,months:d,days:h,defaultVal:i}):(i=[-1==p.indexOf(n[0])?0:p.indexOf(n[0]),-1==d.indexOf(n[1])?0:d.indexOf(n[1]),-1==h.indexOf(n[2])?0:h.indexOf(n[2])],{years:p,months:d,days:h,defaultVal:i});case"half":if(_=[{label:"上午",value:0},{label:"下午",value:1}],r)return i=[w[0],w[1],w[2],w[3]],{years:p,months:d,days:h,areas:_,defaultVal:i};var H=0;return _.map(function(e,l){e.label==n[3]&&(H=e.value)}),i=[-1==p.indexOf(n[0])?0:p.indexOf(n[0]),-1==d.indexOf(n[1])?0:d.indexOf(n[1]),-1==h.indexOf(n[2])?0:h.indexOf(n[2]),H],{years:p,months:d,days:h,areas:_,defaultVal:i};case"yearMonth":return r?(i=[w[0],w[1]],{years:p,months:d,defaultVal:i}):(i=[-1==p.indexOf(n[0])?0:p.indexOf(n[0]),-1==d.indexOf(n[1])?0:d.indexOf(n[1])],{years:p,months:d,defaultVal:i});case"dateTime":return i=r?w:[-1==p.indexOf(n[0])?0:p.indexOf(n[0]),-1==d.indexOf(n[1])?0:d.indexOf(n[1]),-1==h.indexOf(n[2])?0:h.indexOf(n[2]),-1==g.indexOf(n[3])?0:g.indexOf(n[3]),-1==y.indexOf(n[4])?0:y.indexOf(n[4]),-1==m.indexOf(n[5])?0:m.indexOf(n[5])],{years:p,months:d,days:h,hours:g,minutes:y,seconds:m,defaultVal:i};case"time":return i=r?[w[3],w[4],w[5]]:[-1==g.indexOf(n[0])?0:g.indexOf(n[0]),-1==y.indexOf(n[1])?0:y.indexOf(n[1]),-1==m.indexOf(n[2])?0:m.indexOf(n[2])],{hours:g,minutes:y,seconds:m,defaultVal:i}}},initMonths:function(e,l){var a=new Date,u=a.getFullYear(),n=a.getMonth()+1,r=(a.getDate(),u==e),o=[];if(l)if(r)for(var v=1;v<=n;v++)o.push(t(v));else for(var i=1;i<=12;i++)o.push(t(i));else for(var b=1;b<=12;b++)o.push(t(b));return o},initDays:function(e,l,a){var u=new Date,n=u.getFullYear(),r=u.getMonth()+1,o=u.getDate(),v=n==e&&r==l,i=new Date(e,l,0).getDate(),b=[];if(v&&a)for(var s=1;s<=o;s++)b.push(t(s));else for(var c=1;c<=i;c++)b.push(t(c));return b}},limitHour:{init:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,l=arguments.length>1?arguments[1]:void 0,a=new Date,u=[],n=[],r=[],o=(new Date).getHours(),v=["周日","周一","周二","周三","周四","周五","周六"],i=[],b=0,s=0,c=0,f=0;f<e;f++){var p=void 0,d=void 0,h=void 0,g=void 0;p=a.getFullYear(),d=t(a.getMonth()+1),h=t(a.getDate()),g=v[a.getDay()];var y="";switch(f){case 0:y="今天";break;case 1:y="明天";break;case 2:y="后天";break;default:y=d+"月"+h+"日 "+g;break}u.push({label:y,value:p+"-"+d+"-"+h,today:0==f}),a.setDate(a.getDate()+1)}n=o>12?[{label:"下午",value:1}]:[{label:"上午",value:0},{label:"下午",value:1}];for(var m=o>12?o-12:o;m<=12;m++)r.push({label:t(m),value:t(o>12?m+12:m)});return u.map(function(e,a){e.label==l[0]&&(b=a)}),0!=b&&(n=this.initAreas(u[b]),r=this.initHours(u[b],n[s])),n.map(function(e,a){e.label==l[1]&&(s=a)}),r.map(function(e,a){e.label==l[2]&&(c=a)}),i=[b,s,c],{date:u,areas:n,hours:r,defaultVal:i}},initAreas:function(e){var l=[],a=(new Date).getHours();return l=e.today&&a>12?[{label:"下午",value:1}]:[{label:"上午",value:0},{label:"下午",value:1}],l},initHours:function(e,l){var a=[],u=(new Date).getHours();if(e.today)if(1==l.value&&u<=12)for(var n=1;n<=12;n++)a.push({label:t(n),value:t(1==l.value?n+12:n)});else for(var r=u>12?u-12:u;r<=12;r++)a.push({label:t(r),value:t(1==l.value?r+12:r)});else for(var o=1;o<=12;o++)a.push({label:t(o),value:t(1==l.value?o+12:o)});return a}},limit:{init:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:30,r=arguments.length>5?arguments[5]:void 0,o=new Date,v=new Date((new Date).getTime()+60*n*1e3),i=[],b=[],s=[],c=v.getHours(),f=Math.floor(v.getMinutes()/u)*u,p=["周日","周一","周二","周三","周四","周五","周六"],d=0,h=0,g=0,y=[],m=0;m<e;m++){var _=void 0,w=void 0,O=void 0,k=void 0;_=o.getFullYear(),w=t(o.getMonth()+1),O=t(o.getDate()),k=p[o.getDay()];var S="";switch(m){case 0:S="今天";break;case 1:S="明天";break;case 2:S="后天";break;default:S=w+"月"+O+"日 "+k;break}i.push({label:S,value:_+"-"+w+"-"+O,flag:0==m}),o.setDate(o.getDate()+1)}c<l&&(c=l),c>a&&(c=a);for(var $=1*c;$<=1*a;$++)b.push({label:t($),value:t($),flag:$==c});for(var j=f;j<60;j+=1*u)s.push({label:t(j),value:t(j)});return i.map(function(e,l){e.label==r[0]&&(d=l)}),0!=d&&(b=this.initHours(l=8,a=20,u=1,n=30,i[d].value)),b.map(function(e,l){e.label==r[1]&&(h=l)}),s.map(function(e,l){e.label==r[2]&&(g=l)}),y=[d,h,g],{date:i,hours:b,minutes:s,defaultVal:y}},initHours:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]?arguments[3]:30),u=arguments.length>4?arguments[4]:void 0,n=[],r=u.split("-"),o=new Date,v=o.getFullYear(),i=o.getMonth()+1,b=o.getDate(),s=new Date((new Date).getTime()+60*a*1e3),c=s.getHours(),f=v==r[0]&&i==r[1]&&b==r[2];if(c>l&&(c=l),f)for(var p=1*c;p<=1*l;p++)n.push({label:t(p),value:t(p),flag:p==c});else for(var d=1*e;d<=1*l;d++)n.push({label:t(d),value:t(d),flag:!1});return n},initMinutes:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:30,a=arguments.length>4?arguments[4]:void 0,u=arguments.length>5?arguments[5]:void 0,n=[],r=new Date((new Date).getTime()+60*l*1e3),o=a.split("-"),v=new Date,i=v.getFullYear(),b=v.getMonth()+1,s=v.getDate(),c=r.getHours(),f=Math.floor(r.getMinutes()/e)*e,p=i==o[0]&&b==o[1]&&s==o[2];if(p)if(u==c)for(var d=f;d<60;d+=1*e)n.push({label:t(d),value:t(d)});else for(var h=0;h<60;h+=1*e)n.push({label:t(h),value:t(h)});else for(var g=0;g<60;g+=1*e)n.push({label:t(g),value:t(g)});return n}},range:{init:function(e,l,a,u){new Date;var n=[],r=new Date(e.toString()),o=new Date(l.toString());e>l&&(r=new Date(l.toString()),o=new Date(e.toString()));for(var v=r.getFullYear(),i=(r.getMonth(),o.getFullYear()),b=[],s=[],c=[],f=[],p=[],d=[],h=u?1*a[1]:a[1]+1,g=new Date(v,h,0).getDate(),y=v;y<=i;y++)b.push(y+"");for(var m=1;m<=12;m++)s.push(t(m));for(var _=1;_<=g;_++)c.push(t(_));for(var w=v;w<=i;w++)f.push(w+"");for(var O=1;O<=12;O++)p.push(t(O));for(var k=1;k<=g;k++)d.push(t(k));return n=[-1==b.indexOf(a[0])?0:b.indexOf(a[0]),-1==s.indexOf(a[1])?0:s.indexOf(a[1]),-1==c.indexOf(a[2])?0:c.indexOf(a[2]),0,-1==f.indexOf(a[4])?0:f.indexOf(a[4]),-1==p.indexOf(a[5])?0:p.indexOf(a[5]),-1==d.indexOf(a[6])?0:d.indexOf(a[6])],{fyears:b,fmonths:s,fdays:c,tyears:f,tmonths:p,tdays:d,defaultVal:n}},initDays:function(e,l){for(var a=new Date(e,l,0).getDate(),u=[],n=1;n<=a;n++)u.push(t(n));return u}}},n=u;l.default=n},e160:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t={appid:"__UNI__2A25171"};l.default=t},e1e3:function(e,l,a){},eba7:function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=u(a("a115"));function u(e){if(e&&e.__esModule)return e;var l={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var t=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};t.get||t.set?Object.defineProperty(l,a,t):l[a]=e[a]}return l.default=e,l}function n(e){return v(e)||o(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function v(e){if(Array.isArray(e)){for(var l=0,a=new Array(e.length);l<e.length;l++)a[l]=e[l];return a}}var i={state:{WS:null,unread:0,list:!1,chatInfo:!1,chatMsg:!1,chatMsgErr:null,errMsg:null},mutations:{WS:function(e,l){e.WS=l},setSocketState:function(e,l){switch(l.msgType){case"socketConnect":case"pong":e.unread=l.unread;break;case"getChatLogList":l.list.map(function(e){return e.created_at_format=t.timeFormat(e.created_at),e}),e.list?e.list=[].concat(n(e.list),n(l.list)):e.list=l.list;break;case"getChatLogInfo":for(var a=l.list.length-1;a>=0;a--)l.list[a].created_at_format=t.timeFormat(l.list[a].created_at),l.list[a].is_show_time=0==a?1:t.dateDiff(l.list[a-1].created_at,l.list[a].created_at);e.chatInfo?e.chatInfo=[].concat(n(l.list),n(e.chatInfo)):e.chatInfo=l.list;break;case"chatMsg":l.error&&0!=l.error?e.chatMsgErr=l:(e.chatMsg=l,e.unread=Number(e.unread)+1);break;case"read":e.unread=Number(e.unread)-l.count;break}},emptyInfo:function(e,l){e[l]=!1},setSocketStateErr:function(e,l){e.errMsg=l}},actions:{WS:function(e,l){var a=e.commit;a("WS",l)},setSocketState:function(l,a){var t=l.commit;console.log(e("---WS+socketInfo--接收---",a," at store\\modules\\socketInfo.js:76")),t("setSocketState",a)},emptyInfo:function(e,l){var a=e.commit;a("emptyInfo",l)},setSocketStateErr:function(e,l){var a=e.commit;a("setSocketStateErr",l)}}},b=i;l.default=b}).call(this,a("0de9")["default"])},f8ea:function(e,l,a){"use strict";(function(e,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=n(a("a34a"));function n(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{},t=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.forEach(function(l){c(e,l,a[l])})}return e}function o(e,l,a,t,u,n,r){try{var o=e[n](r),v=o.value}catch(i){return void a(i)}o.done?l(v):Promise.resolve(v).then(t,u)}function v(e){return function(){var l=this,a=arguments;return new Promise(function(t,u){var n=e.apply(l,a);function r(e){o(n,t,u,r,v,"next",e)}function v(e){o(n,t,u,r,v,"throw",e)}r(void 0)})}}function i(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function b(e,l){for(var a=0;a<l.length;a++){var t=l[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function s(e,l,a){return l&&b(e.prototype,l),a&&b(e,a),e}function c(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}var f=function(){function l(){var e=this;i(this,l),c(this,"config",{baseUrl:"https://api.meetu.letwx.com",header:{"content-type":"application/json;charset=UTF-8"},method:"POST",dataType:"json",custom:{istoken:!0},sslVerify:!0}),c(this,"interceptor",{request:function(l){l&&(e.requestBeforeFun=l)},response:function(l,a){l&&a&&(e.requestComFun=l,e.requestComFail=a)}})}return s(l,[{key:"requestBeforeFun",value:function(e){return e}},{key:"requestComFun",value:function(e){return e}},{key:"requestComFail",value:function(e){return e}},{key:"validateStatus",value:function(e){return 200===e}},{key:"setConfig",value:function(e){this.config=e(this.config)}},{key:"request",value:function(){var a=v(u.default.mark(function a(){var t,n=this,o=arguments;return u.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:{},t.baseUrl=this.config.baseUrl,t.dataType=t.dataType||this.config.dataType,t.url=t.url||"",t.data=t.data||{},t.params=t.params||{},t.header=t.header||this.config.header,t.method=t.method||this.config.method,t.custom=r({},this.config.custom,t.custom||{}),t.sslVerify=void 0===t.sslVerify?this.config.sslVerify:t.sslVerify,a.abrupt("return",new Promise(function(a,u){var o=!0,v={};t.complete=function(e){e.config=v,n.validateStatus(e.statusCode)?(e=n.requestComFun(e),a(e)):(e=n.requestComFail(e),u(e))};var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,a={errMsg:e,config:l};u(a),o=!1};v=r({},n.requestBeforeFun(t,i));var b=r({},v);if(o){delete b.custom;var s=l.posUrl(b.url)?b.url:b.baseUrl+b.url;if("{}"!==JSON.stringify(b.params)){var c=l.addQueryString(b.params);s+=-1===s.indexOf("?")?"?".concat(c):"&".concat(c)}b.url=s,e.request(b)}}));case 11:case"end":return a.stop()}},a,this)}));function t(){return a.apply(this,arguments)}return t}()},{key:"get",value:function(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request(r({url:e,method:"GET"},l))}},{key:"post",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(r({url:e,data:l,method:"POST"},a))}},{key:"put",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(r({url:e,data:l,method:"PUT"},a))}},{key:"delete",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(r({url:e,data:l,method:"DELETE"},a))}},{key:"connect",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(r({url:e,data:l,method:"CONNECT"},a))}},{key:"head",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(r({url:e,data:l,method:"HEAD"},a))}},{key:"options",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(r({url:e,data:l,method:"OPTIONS"},a))}},{key:"trace",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(r({url:e,data:l,method:"TRACE"},a))}},{key:"upload",value:function(a,u){var n=this,o=u.files,v=u.filePath,i=u.name,b=u.header,s=u.formData,c=u.custom;return new Promise(function(u,f){var p=!0,d={},h=r({},n.config.header);delete h["content-type"];var g={baseUrl:n.config.baseUrl,url:a,files:o,filePath:v,name:i,header:b||h,formData:s,custom:r({},n.config.custom,c||{}),complete:function(e){e.config=d,console.log(t("------response----",e," at common\\luch-request\\request.js:287")),200===e.statusCode?(e=n.requestComFun(e),u(e)):(e=n.requestComFail(e),f(e))}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g,a={errMsg:e,config:l};f(a),p=!1};d=r({},n.requestBeforeFun(g,y));var m=r({},d);p&&(delete m.custom,m.url=l.posUrl(m.url)?m.url:m.baseUrl+m.url,console.log(t("-----_config-----",m," at common\\luch-request\\request.js:311")),e.uploadFile(m))})}}],[{key:"posUrl",value:function(e){return/(http|https):\/\/([\w.]+\/?)\S*/.test(e)}},{key:"addQueryString",value:function(e){var l="";return Object.keys(e).forEach(function(a){l+=a+"="+encodeURIComponent(e[a])+"&"}),l.substring(0,l.length-1)}}]),l}();l.default=f}).call(this,a("6e42")["default"],a("0de9")["default"])}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/custom-nav';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/custom-nav.js';

define('components/custom-nav.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/custom-nav"], {
  2168: function _(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("50b2"),
        u = e("d993");

    for (var i in u) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(i);
    }

    e("99fa");
    var r = e("2877"),
        o = Object(r["a"])(u["default"], a["a"], a["b"], !1, null, null, null);
    n["default"] = o.exports;
  },
  "33d9": function d9(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = {
        data: function data() {
          return {
            StatusBar: this.StatusBar,
            CustomBar: this.CustomBar
          };
        },
        name: "custom-nav",
        computed: {
          style: function style() {
            var t = this.StatusBar,
                n = this.CustomBar,
                e = "height:".concat(n, "px;padding-top:").concat(t, "px;");
            return e;
          }
        },
        props: {
          isBack: {
            type: [Boolean, String],
            default: !0
          },
          textRight: {
            type: String,
            default: ""
          },
          textTitle: {
            type: String,
            default: ""
          },
          tabsInfo: {
            type: Object,
            default: null
          }
        },
        methods: {
          BackPage: function BackPage() {
            t.navigateBack({
              delta: 1
            });
          },
          rightHandle: function rightHandle() {
            if (!this.textRight) return !1;
            this.$emit("right");
          },
          tabSelect: function tabSelect(t) {
            this.$emit("tabChange", t);
          }
        }
      };
      n.default = e;
    }).call(this, e("6e42")["default"]);
  },
  "50b2": function b2(t, n, e) {
    "use strict";

    var a = function a() {
      var t = this,
          n = t.$createElement,
          e = (t._self._c, t.textRight.indexOf("cuIcon"));
      t.$mp.data = Object.assign({}, {
        $root: {
          g0: e
        }
      });
    },
        u = [];

    e.d(n, "a", function () {
      return a;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  "99fa": function fa(t, n, e) {
    "use strict";

    var a = e("ef58"),
        u = e.n(a);
    u.a;
  },
  d993: function d993(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("33d9"),
        u = e.n(a);

    for (var i in a) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(i);
    }

    n["default"] = u.a;
  },
  ef58: function ef58(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/custom-nav-create-component', {
  'components/custom-nav-create-component': function componentsCustomNavCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("2168"));
  }
}, [['components/custom-nav-create-component']]]);
});
require('components/custom-nav.js');
__wxRoute = 'components/mix-load-more/mix-load-more';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mix-load-more/mix-load-more.js';

define('components/mix-load-more/mix-load-more.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mix-load-more/mix-load-more"], {
  "36fe": function fe(e, t, n) {
    "use strict";

    n.r(t);
    var u = n("7fa1"),
        a = n.n(u);

    for (var r in u) {
      "default" !== r && function (e) {
        n.d(t, e, function () {
          return u[e];
        });
      }(r);
    }

    t["default"] = a.a;
  },
  "4e4f": function e4f(e, t, n) {},
  "68ef": function ef(e, t, n) {
    "use strict";

    var u = function u() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        a = [];

    n.d(t, "a", function () {
      return u;
    }), n.d(t, "b", function () {
      return a;
    });
  },
  "7fa1": function fa1(e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "mix-load-more",
      props: {
        show: {
          type: Boolean,
          default: !1
        },
        status: {
          type: Number,
          default: 0
        },
        text: {
          type: Array,
          default: function _default() {
            return ["上拉显示更多", "正在加载...", "没有更多数据了"];
          }
        }
      }
    };
    t.default = u;
  },
  "9cfe": function cfe(e, t, n) {
    "use strict";

    n.r(t);
    var u = n("68ef"),
        a = n("36fe");

    for (var r in a) {
      "default" !== r && function (e) {
        n.d(t, e, function () {
          return a[e];
        });
      }(r);
    }

    n("c904");
    var f = n("2877"),
        o = Object(f["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = o.exports;
  },
  c904: function c904(e, t, n) {
    "use strict";

    var u = n("4e4f"),
        a = n.n(u);
    a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mix-load-more/mix-load-more-create-component', {
  'components/mix-load-more/mix-load-more-create-component': function componentsMixLoadMoreMixLoadMoreCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("9cfe"));
  }
}, [['components/mix-load-more/mix-load-more-create-component']]]);
});
require('components/mix-load-more/mix-load-more.js');
__wxRoute = 'components/mix-pulldown-refresh/mix-pulldown-refresh';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mix-pulldown-refresh/mix-pulldown-refresh.js';

define('components/mix-pulldown-refresh/mix-pulldown-refresh.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mix-pulldown-refresh/mix-pulldown-refresh"], {
  3272: function _(e, t, n) {
    "use strict";

    var i = n("604e"),
        r = n.n(i);
    r.a;
  },
  4975: function _(e, t, n) {
    "use strict";

    var i = function i() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        r = [];

    n.d(t, "a", function () {
      return i;
    }), n.d(t, "b", function () {
      return r;
    });
  },
  "604e": function (_e) {
    function e(_x, _x2, _x3) {
      return _e.apply(this, arguments);
    }

    e.toString = function () {
      return _e.toString();
    };

    return e;
  }(function (e, t, n) {}),
  7175: function _(e, t, n) {
    "use strict";

    n.r(t);
    var i = n("8f3c"),
        r = n.n(i);

    for (var s in i) {
      "default" !== s && function (e) {
        n.d(t, e, function () {
          return i[e];
        });
      }(s);
    }

    t["default"] = r.a;
  },
  "7eee": function eee(e, t, n) {
    "use strict";

    n.r(t);
    var i = n("4975"),
        r = n("7175");

    for (var s in r) {
      "default" !== s && function (e) {
        n.d(t, e, function () {
          return r[e];
        });
      }(s);
    }

    n("3272");
    var a = n("2877"),
        o = Object(a["a"])(r["default"], i["a"], i["b"], !1, null, null, null);
    t["default"] = o.exports;
  },
  "8f3c": function f3c(t, n, i) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var i,
          r,
          s,
          a,
          o = 500,
          u = 0,
          f = {
        props: {
          top: {
            type: Number,
            default: 0
          }
        },
        data: function data() {
          return {
            pageDeviation: 0,
            pageTransition: 0,
            refreshReady: !1,
            refreshing: !1
          };
        },
        computed: {
          pageTop: function pageTop() {
            return this.top;
          }
        },
        created: function created() {
          s = this.SystemInfo.platform, o = this.SystemInfo.windowHeight, o = e.windowHeight;
        },
        methods: {
          pageTouchstart: function pageTouchstart(e) {
            a = !1, this.pageTransition = 0, i = e.touches[0].pageY;
          },
          pageTouchmove: function pageTouchmove(e) {
            a || (r = .4 * (e.touches[0].pageY - i), r >= 0 && (this.pageDeviation = r, this.$emit("setEnableScroll", !1)), r >= 50 && !1 === this.refreshReady ? this.refreshReady = !0 : r < 50 && !0 === this.refreshReady && (this.refreshReady = !1), "ios" === s && e.touches[0].pageY > o + 10 && this.pageTouchend());
          },
          pageTouchend: function pageTouchend() {
            a = !0, 0 !== r && (this.pageTransition = .3, r >= 50 ? this.startPulldownRefresh() : this.pageDeviation = 0, !0 === this.refreshReady && (this.refreshReady = !1), this.$emit("setEnableScroll", !0), i = r = 0);
          },
          startPulldownRefresh: function startPulldownRefresh() {
            +new Date() - u < 100 || (u = +new Date(), this.refreshing = !0, this.pageDeviation = t.upx2px(90), this.$emit("refresh"));
          },
          endPulldownRefresh: function endPulldownRefresh() {
            this.refreshing = !1, this.pageDeviation = t.upx2px(0);
          }
        }
      };
      n.default = f;
    }).call(this, i("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mix-pulldown-refresh/mix-pulldown-refresh-create-component', {
  'components/mix-pulldown-refresh/mix-pulldown-refresh-create-component': function componentsMixPulldownRefreshMixPulldownRefreshCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("7eee"));
  }
}, [['components/mix-pulldown-refresh/mix-pulldown-refresh-create-component']]]);
});
require('components/mix-pulldown-refresh/mix-pulldown-refresh.js');
__wxRoute = 'components/w-picker/w-picker';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/w-picker/w-picker.js';

define('components/w-picker/w-picker.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/w-picker/w-picker"], {
  "2e32": function e32(a, e, t) {},
  5222: function _(a, e, t) {
    "use strict";

    t.r(e);
    var r = t("c6b6"),
        i = t("874f");

    for (var l in i) {
      "default" !== l && function (a) {
        t.d(e, a, function () {
          return i[a];
        });
      }(l);
    }

    t("827f");
    var n = t("2877"),
        c = Object(n["a"])(i["default"], r["a"], r["b"], !1, null, null, null);
    e["default"] = c.exports;
  },
  "5f1b": function f1b(a, e, t) {
    "use strict";

    (function (a) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var r = c(t("a353")),
          i = c(t("18bf")),
          l = c(t("0251")),
          n = c(t("dab9"));

      function c(a) {
        return a && a.__esModule ? a : {
          default: a
        };
      }

      function s(a, e) {
        for (var t = 0; t < e.length; t++) {
          if (a === e[t]) return !0;
        }

        throw new Error("mode无效，请选择有效的mode!");
      }

      var u = {
        props: {
          mode: {
            type: String,
            validator: function validator(a) {
              var e = ["half", "date", "dateTime", "yearMonth", "time", "region", "selector", "limit", "limitHour", "range", "linkage"];
              return s(a, e);
            },
            default: function _default() {
              return "date";
            }
          },
          themeColor: {
            type: String,
            default: function _default() {
              return "#f5a200";
            }
          },
          startYear: {
            type: [String, Number],
            default: function _default() {
              return "1970";
            }
          },
          endYear: {
            type: [String, Number],
            default: function _default() {
              return new Date().getFullYear() + "";
            }
          },
          defaultVal: {
            type: Array,
            default: function _default() {
              return [0, 0, 0, 0, 0, 0, 0];
            }
          },
          areaCode: {
            type: Array,
            default: function _default() {
              return null;
            }
          },
          hideArea: {
            type: Boolean,
            default: !1
          },
          current: {
            type: Boolean,
            default: !1
          },
          selectList: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          disabledAfter: {
            type: Boolean,
            default: !1
          },
          timeout: {
            type: Boolean,
            default: !1
          }
        },
        watch: {
          mode: function mode() {
            this.initData();
          },
          selectList: function selectList() {
            this.initData();
          },
          linkList: function linkList() {
            this.initData();
          }
        },
        data: function data() {
          return {
            showPicker: !1,
            itemHeight: "height: ".concat(a.upx2px(88), "px;"),
            pickVal: [],
            data: {},
            checkArr: [],
            checkValue: [],
            resultStr: "",
            result: [],
            confirmFlag: !0
          };
        },
        methods: {
          touchStart: function touchStart() {
            this.timeout && (this.confirmFlag = !1);
          },
          touchEnd: function touchEnd() {
            var a = this;
            this.timeout && setTimeout(function () {
              a.confirmFlag = !0;
            }, 500);
          },
          getRegionVal: function getRegionVal(a, e) {
            var t = a[0],
                n = a[1],
                c = 0,
                s = 0,
                u = 0,
                d = [],
                o = this;
            if (r.default.map(function (a, r) {
              (e ? a.value == t : a.label == t) && (c = r);
            }), i.default[c].map(function (a, t) {
              (e ? a.value == n : a.label == n) && (s = t);
            }), o.hideArea) d = [c, s];else {
              var h = a[2];
              l.default[c][s].map(function (a, t) {
                (e ? a.value == h : a.label == h) && (u = t);
              }), d = [c, s, u];
            }
            return d;
          },
          useCurrent: function useCurrent() {
            var a = new Date(),
                e = a.getFullYear().toString(),
                t = this.formatNum(a.getMonth() + 1).toString(),
                r = this.formatNum(a.getDate()).toString(),
                i = this.formatNum(a.getHours()).toString(),
                l = this.formatNum(a.getMinutes()).toString(),
                n = this.formatNum(a.getSeconds()).toString();
            return this.current ? [e, t, r, i, (Math.floor(l / this.step) * this.step).toString(), n] : this.defaultVal;
          },
          formatNum: function formatNum(a) {
            return a < 10 ? "0" + a : a + "";
          },
          maskTap: function maskTap() {
            this.$emit("cancel", {
              checkArr: this.checkArr,
              defaultVal: this.pickVal
            }), this.showPicker = !1;
          },
          show: function show() {
            this.showPicker = !0;
          },
          hide: function hide() {
            this.showPicker = !1;
          },
          pickerCancel: function pickerCancel() {
            this.$emit("cancel", {
              checkArr: this.checkArr,
              defaultVal: this.pickVal
            }), this.showPicker = !1;
          },
          pickerConfirm: function pickerConfirm(a) {
            if (this.confirmFlag) {
              switch (this.mode) {
                case "range":
                  break;

                case "limit":
                  break;

                case "region":
                case "linkage":
                  this.$emit("confirm", {
                    checkArr: this.checkArr,
                    checkValue: this.checkValue,
                    defaultVal: this.pickVal,
                    result: this.resultStr
                  });
                  break;

                default:
                  this.$emit("confirm", {
                    checkArr: this.checkArr,
                    defaultVal: this.pickVal,
                    result: this.resultStr
                  });
                  break;
              }

              this.showPicker = !1;
            }
          },
          bindChange: function bindChange(a) {
            var e,
                t,
                r,
                c = this,
                s = a.detail.value,
                u = "",
                d = "",
                o = "",
                h = c.checkArr,
                f = [],
                b = [],
                k = c.mode;
            new Date().getTime();

            switch (k) {
              case "limitHour":
                break;

              case "limit":
                break;

              case "range":
                break;

              case "half":
                break;

              case "date":
                u = c.data.years[s[0]] || c.data.years[c.data.years.length - 1], d = c.data.months[s[1]] || c.data.months[c.data.months.length - 1], o = c.data.days[s[2]] || c.data.days[c.data.days.length - 1], u != h[0] && (b = n.default.date.initMonths(u, c.disabledAfter), f = n.default.date.initDays(u, d, c.disabledAfter), c.disabledAfter && (s[1] = s[1] > b.length - 1 ? b.length - 1 : s[1], s[2] = s[2] > f.length - 1 ? f.length - 1 : s[2], d = c.data.months[s[1]] || c.data.months[c.data.months.length - 1], o = c.data.days[s[2]] || c.data.days[c.data.days.length - 1]), c.data.days = f, c.data.months = b), d != h[1] && (f = n.default.date.initDays(u, d, c.disabledAfter), s[2] = s[2] > f.length - 1 ? f.length - 1 : s[2], o = c.data.days[s[2]] || c.data.days[c.data.days.length - 1], c.data.days = f), c.checkArr = [u, d, o], c.resultStr = "".concat(u + "-" + d + "-" + o);
                break;

              case "yearMonth":
                break;

              case "dateTime":
                break;

              case "time":
                break;

              case "linkage":
                break;

              case "region":
                e = c.data.provinces[s[0]] || c.data.provinces[0], t = c.data.citys[s[1]] || c.data.citys[0], c.hideArea || (r = c.data.areas[s[2]] || c.data.areas[0]), e.label != h[0] && (c.data.citys = i.default[s[0]] || i.default[0], c.hideArea || (c.data.areas = l.default[s[0]][0] || l.default[0][0]), s[1] = 0, s[2] = 0, t = c.data.citys[s[1]] || c.data.citys[0], c.hideArea || (r = c.data.areas[s[2]] || c.data.areas[0])), t.label == h[1] || c.hideArea || (c.data.areas = l.default[s[0]][s[1]] || l.default[0][0], s[2] = 0, r = c.data.areas[s[2]] || c.data.areas[0]), c.hideArea ? (c.checkArr = [e.label, t.label], c.checkValue = [c.data.provinces[s[0]] ? c.data.provinces[s[0]].value : c.data.provinces[0].value, c.data.citys[s[1]] ? c.data.citys[s[1]].value : c.data.citys[0].value], c.resultStr = e.label + t.label) : (c.checkArr = [e.label, t.label, r.label], c.checkValue = [c.data.provinces[s[0]] ? c.data.provinces[s[0]].value : c.data.provinces[0].value, c.data.citys[s[1]] ? c.data.citys[s[1]].value : c.data.citys[0].value, c.data.areas[s[2]] ? c.data.areas[s[2]].value : c.data.areas[0].value], c.resultStr = e.label + t.label + r.label);
                break;

              case "selector":
                c.checkArr = c.data[s[0]] || c.data[c.data.length - 1], c.resultStr = c.data[s[0]] ? c.data[s[0]].label : c.data[c.data.length - 1].label;
                break;
            }

            c.$nextTick(function () {
              c.pickVal = s;
            });
          },
          initData: function initData() {
            var a,
                e,
                t,
                c,
                s,
                u,
                d = this,
                o = this,
                h = {},
                f = o.mode,
                b = [];

            switch (f) {
              case "linkage":
                break;

              case "region":
                b = o.areaCode ? o.getRegionVal(o.areaCode, !0) : o.getRegionVal(o.defaultVal), h = o.hideArea ? {
                  provinces: r.default,
                  citys: i.default[b[0]]
                } : {
                  provinces: r.default,
                  citys: i.default[b[0]],
                  areas: l.default[b[0]][b[1]]
                };
                break;

              case "selector":
                var k = 0;
                h = o.selectList, o.selectList.map(function (a, e) {
                  a.label == d.defaultVal[0] && (k = e);
                }), b = [k];
                break;

              case "limit":
                break;

              case "limitHour":
                break;

              case "range":
                break;

              default:
                h = n.default.date.init(o.startYear, o.endYear, o.mode, o.step, o.useCurrent(), o.current, o.disabledAfter), b = h.defaultVal || o.defaultVal;
                break;
            }

            switch (o.data = h, f) {
              case "date":
                a = h.years[b[0]] || h.years[h.years.length - 1], e = h.months[b[1]] || h.months[h.months.length - 1], t = h.days[b[2]] || h.days[h.days.length - 1], o.checkArr = [a, e, t], o.resultStr = "".concat(a + "-" + e + "-" + t);
                break;

              case "region":
                c = h.provinces[b[0]], s = h.citys[b[1]], o.hideArea ? (o.checkArr = [c.label, s.label], o.checkValue = [c.value, s.value], o.resultStr = c.label + s.label) : (u = h.areas[b[2]], o.checkArr = [c.label, s.label, u.label], o.checkValue = [c.value, s.value, u.value], o.resultStr = c.label + s.label + u.label);
                break;

              case "selector":
                o.checkArr = h[b[0]] || h[h.length - 1], o.resultStr = h[b[0]].label || h[h.length - 1].label;
                break;
            }

            o.$nextTick(function () {
              o.pickVal = b;
            });
          }
        },
        mounted: function mounted() {
          this.initData();
        }
      };
      e.default = u;
    }).call(this, t("6e42")["default"]);
  },
  "827f": function f(a, e, t) {
    "use strict";

    var r = t("2e32"),
        i = t.n(r);
    i.a;
  },
  "874f": function f(a, e, t) {
    "use strict";

    t.r(e);
    var r = t("5f1b"),
        i = t.n(r);

    for (var l in r) {
      "default" !== l && function (a) {
        t.d(e, a, function () {
          return r[a];
        });
      }(l);
    }

    e["default"] = i.a;
  },
  c6b6: function c6b6(a, e, t) {
    "use strict";

    var r = function r() {
      var a = this,
          e = a.$createElement;
      a._self._c;
    },
        i = [];

    t.d(e, "a", function () {
      return r;
    }), t.d(e, "b", function () {
      return i;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/w-picker/w-picker-create-component', {
  'components/w-picker/w-picker-create-component': function componentsWPickerWPickerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5222"));
  }
}, [['components/w-picker/w-picker-create-component']]]);
});
require('components/w-picker/w-picker.js');
__wxRoute = 'meetu-ui/components/cu-modal';__wxRouteBegin = true;__wxAppCurrentFile__ = 'meetu-ui/components/cu-modal.js';

define('meetu-ui/components/cu-modal.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["meetu-ui/components/cu-modal"], {
  "26fe": function fe(t, e, n) {
    "use strict";

    var a = n("3786"),
        u = n.n(a);
    u.a;
  },
  "30fd": function fd(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("acad"),
        u = n.n(a);

    for (var i in a) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(i);
    }

    e["default"] = u.a;
  },
  3786: function _(t, e, n) {},
  acad: function acad(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = {
      props: {
        modalName: {
          type: String,
          default: ""
        },
        toastText: {
          type: String,
          default: ""
        },
        dialogText: {
          type: String,
          default: ""
        },
        dialogSureText: {
          type: String,
          default: "确定"
        }
      },
      methods: {
        hideModal: function hideModal() {
          this.$emit("hideModal");
        },
        dialogConfirm: function dialogConfirm() {
          this.$emit("dialogConfirm");
        }
      }
    };
    e.default = a;
  },
  f079: function f079(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("f209"),
        u = n("30fd");

    for (var i in u) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(i);
    }

    n("26fe");
    var o = n("2877"),
        f = Object(o["a"])(u["default"], a["a"], a["b"], !1, null, null, null);
    e["default"] = f.exports;
  },
  f209: function f209(t, e, n) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    n.d(e, "a", function () {
      return a;
    }), n.d(e, "b", function () {
      return u;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['meetu-ui/components/cu-modal-create-component', {
  'meetu-ui/components/cu-modal-create-component': function meetuUiComponentsCuModalCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("f079"));
  }
}, [['meetu-ui/components/cu-modal-create-component']]]);
});
require('meetu-ui/components/cu-modal.js');

__wxRoute = 'pages/initial/wxoauth';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/initial/wxoauth.js';

define('pages/initial/wxoauth.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/initial/wxoauth"],{3014:function(t,e,n){"use strict";(function(t){n("e1e3"),n("921b");a(n("66fd"));var e=a(n("8dc7"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},5770:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"wxoauth",data:function(){return{}},methods:{getUserInfo:function(e){console.log(t(e," at pages\\initial\\wxoauth.vue:39"))},appLogin:function(){var e=this,a=this;n.login({provider:"weixin",success:function(o){"login:ok"==o.errMsg&&e.$http1.post("wxa/login",{access_token:o.authResult.access_token,openid:o.authResult.openid,expires_in:o.authResult.expires_in},{custom:{istoken:!1,v2:!0}}).then(function(e){console.log(t("----登录----",e," at pages\\initial\\wxoauth.vue:61")),a.$store.dispatch("changeVal",{stateKey:"token",newValue:e.data.token}),a.$store.dispatch("changeVal",{stateKey:"dailyLogin",newValue:e.data.daily_login}),1==e.data.old_user?(n.setStorage({key:"oldUser",data:e.data.old_user}),n.redirectTo({url:"../home/index",animationDuration:300,animationType:"fade-in"})):n.redirectTo({url:"./personaldata",animationDuration:300,animationType:"fade-in"})}).catch(function(e){console.log(t("app-err",e," at pages\\initial\\wxoauth.vue:82"))})}})}}};e.default=a}).call(this,n("0de9")["default"],n("6e42")["default"])},"5a7a":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"8dc7":function(t,e,n){"use strict";n.r(e);var a=n("5a7a"),o=n("9347");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("b9e4");var u=n("2877"),r=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},9347:function(t,e,n){"use strict";n.r(e);var a=n("5770"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},b9e4:function(t,e,n){"use strict";var a=n("dfed"),o=n.n(a);o.a},dfed:function(t,e,n){}},[["3014","common/runtime","common/vendor"]]]);
});
require('pages/initial/wxoauth.js');
__wxRoute = 'pages/initial/personaldata';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/initial/personaldata.js';

define('pages/initial/personaldata.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/initial/personaldata"],{"023e":function(e,t,i){"use strict";i.r(t);var n=i("c8ca"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},"19ac":function(e,t,i){},5934:function(e,t,i){"use strict";var n=i("19ac"),a=i.n(n);a.a},"678a":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},c8ca:function(e,t,i){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(i("c478")),o=i("2f62");function r(e){return e&&e.__esModule?e:{default:e}}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),n.forEach(function(t){c(e,t,i[t])})}return e}function c(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var u=function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"5222"))},l={name:"personaldata",components:{wPicker:u},mixins:[a.default],data:function(){return{isEditInfo:!1,userInfo:null,ischangeHeadimg:!1,selectList:[{label:"男",value:0},{label:"女",value:1}],mode:"date",defaultVal:[0,0,0,0,0,0,0],sex:"",pickerBirthdayInfo:{checkArr:["1990","01","01"],defaultVal:[],result:"选择生日"},pickerRegionInfo:{checkArr:["北京市","市辖区"],checkValue:["11","1101"],defaultVal:[],result:"选择地区"}}},computed:s({},(0,o.mapGetters)(["token"])),onLoad:function(e){this.isEditInfo=!(!e.type||"edit"!=e.type),this.api_UserInfo()},onReady:function(){},methods:s({},(0,o.mapMutations)(["changeVal"]),{api_UserInfo:function(){var t=this;this.$http1.post("user/info").then(function(e){e.data.province="",e.data.city="",t.userInfo=e.data,t.sex=1==e.data.sex?"男":"女",t.pickerBirthdayInfo.result=e.data.birthday?e.data.birthday:t.pickerBirthdayInfo.result,t.pickerRegionInfo.result=e.data.province&&e.data.city?e.data.province+""+e.data.city:t.pickerRegionInfo.result}).catch(function(t){console.log(e("userinfo-err",t," at pages\\initial\\personaldata.vue:123"))})},getUid:function(e){return e.substring(e.indexOf("/")+1,e.lastIndexOf("."))},chooseImage:function(){var t=this;n.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(i){var a=i.tempFilePaths[0];plus.zip.compressImage({src:a,dst:"_doc/"+t.getUid(a)+".jpg",overwrite:!0,quality:20},function(i){n.uploadFile({url:"https://api.meetu.letwx.com/v2/sys/upload-img?token="+t.token,filePath:i.target,name:"imgfile",formData:{name:"imgfile",formData:JSON.stringify({sort:0})},success:function(e){t.userInfo.headimgurl=JSON.parse(e.data).data.imgUrl,t.ischangeHeadimg=!0},fail:function(t){console.log(e("err",t," at pages\\initial\\personaldata.vue:160"))}})},function(t){console.log(e("plus-error",t," at pages\\initial\\personaldata.vue:165"))})}})},togglePicker:function(e){if("selector"==e&&1==this.userInfo.isedit)return this.modalShow("toastModal","性别只能修改一次, 你已修改过"),!1;this.mode=e,this.$refs[e].show()},onConfirm:function(t){switch(console.log(e(t," at pages\\initial\\personaldata.vue:180")),this.mode){case"date":this.pickerBirthdayInfo=t;break;case"selector":this.sex=t.result;break;case"region":this.pickerRegionInfo=t;break}},submitInfo:function(t){var i=this,a=this,o={};return""==t.detail.value.nickname?(this.modalShow("toastModal","昵称不能为空"),!1):"选择生日"===this.pickerBirthdayInfo.result?(this.modalShow("toastModal","请选择你的出生日期"),!1):"选择地区"==this.pickerRegionInfo.result?(this.modalShow("toastModal","请选择地区"),!1):null!=this.pickerRegionInfo.result.match(/\w/)?(this.modalShow("toastModal","请选择地区(中文)"),!1):(t.detail.value.nickname!=this.userInfo.nickname&&""!=t.detail.value.nickname&&(o.nickname=t.detail.value.nickname),t.detail.value.invitecode&&(o.code=t.detail.value.invitecode),this.sex!=(1==this.userInfo.sex?"男":"女")&&(o.sex="男"==this.sex?1:2),this.pickerBirthdayInfo.result!=this.userInfo.birthday&&null==this.userInfo.birthday&&(o.birthday=this.pickerBirthdayInfo.result),this.pickerRegionInfo.checkArr[0]!=this.userInfo.province&&(o.province=this.pickerRegionInfo.checkArr[0]),this.pickerRegionInfo.checkArr[1]!=this.userInfo.city&&(o.city=this.pickerRegionInfo.checkArr[1]),this.ischangeHeadimg&&(o.headimgurl=this.userInfo.headimgurl),console.log(e(o," at pages\\initial\\personaldata.vue:234")),"{}"!=JSON.stringify(o)&&void this.$http1.post("user/edit",o).then(function(e){if(n.setStorageSync("oldUser",1),i.isEditInfo){for(var t in o)i.userInfo[t]=o[t];i.modalShow("toastModal","信息修改成功"),i.$store.dispatch("changeVal",{stateKey:"userInfo",newValue:a.userInfo})}else n.redirectTo({url:"../home/index"})}).catch(function(t){console.log(e("edit-err",t," at pages\\initial\\personaldata.vue:253"))}))}})};t.default=l}).call(this,i("0de9")["default"],i("6e42")["default"])},cda5:function(e,t,i){"use strict";i.r(t);var n=i("678a"),a=i("023e");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);i("5934");var r=i("2877"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},d2c2:function(e,t,i){"use strict";(function(e){i("e1e3"),i("921b");n(i("66fd"));var t=n(i("cda5"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("6e42")["createPage"])}},[["d2c2","common/runtime","common/vendor"]]]);
});
require('pages/initial/personaldata.js');
__wxRoute = 'pages/home/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/home/index.js';

define('pages/home/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/index"],{"1d09":function(e,t,n){"use strict";n.r(t);var a=n("417f"),o=n("98e3");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n("392e");var r=n("2877"),s=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=s.exports},"38c3":function(e,t,n){"use strict";(function(e){n("e1e3"),n("921b");a(n("66fd"));var t=a(n("1d09"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"392e":function(e,t,n){"use strict";var a=n("65f2"),o=n.n(a);o.a},"417f":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},"65f2":function(e,t,n){},"98e3":function(e,t,n){"use strict";n.r(t);var a=n("d9c2"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=o.a},d9c2:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n("a34a")),i=n("2f62"),r=c(n("c478")),s=c(n("8a5c"));function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,a,o,i,r){try{var s=e[i](r),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(a,o)}function l(e){return function(){var t=this,n=arguments;return new Promise(function(a,o){var i=e.apply(t,n);function r(e){u(i,a,o,r,s,"next",e)}function s(e){u(i,a,o,r,s,"throw",e)}r(void 0)})}}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){f(e,t,n[t])})}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h={name:"homeIndex",components:{},mixins:[r.default],data:function(){return{isSendSignal:!1,showDailyLogin:!1,appName:"Meet U",showSendToast:!1,userNumber:null}},computed:d({},(0,i.mapGetters)(["userInfo","dailyLogin","token"]),(0,i.mapState)({unread:function(e){return e.socketInfo.unread}})),onLoad:function(t){this.api_UserNumber(),e.removeStorageSync("searchInfo")},onReady:function(){this.ws_init(),e.getStorageSync("homeSendToast")?this.showSendToast=!1:this.showSendToast=!0},onShow:function(){var t=this;if(this.api_UserInfo(),getApp().globalData.sendSignal&&(this.isSendSignal=!0,this.api_UserNumber(),setTimeout(function(){getApp().globalData.sendSignal=!1,t.isSendSignal=!1},4e3)),1==this.dailyLogin)return!1;if(e.getStorageSync("dailyLoginExpires")){var n=(new Date).getTime();n>e.getStorageSync("dailyLoginExpires")?(this.clog("mow","超过"),this.showDailyLogin=!0):(this.clog("mow","未超过"),this.showDailyLogin=!1)}else this.showDailyLogin=!0},methods:{ws_init:function(){var e=this,t=new s.default({url:"wss://api.meetu.letwx.com/im?token="+e.token,timeout:3e4,isSendHeart:!0,heartData:{msgType:"ping",data:{}},isReconnection:!0,reConnectTime:3e3,debug:!1,params:{},onSocketOpen:function(e){},onSocketMessage:function(t){e.$store.dispatch("setSocketState",t)},onSocketError:function(t){e.$store.dispatch("setSocketStateErr",t)},onSocketClose:function(e){}});console.log(a("--socket--",t," at pages\\home\\index.vue:174")),e.$store.dispatch("WS",t),t.initSocket()},api_UserInfo:function(){var e=l(o.default.mark(function e(){var t;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http1.post("user/info");case 2:t=e.sent,0==t.code?this.$store.dispatch("changeVal",{stateKey:"userInfo",newValue:t.data}):this.modelShow("toastModal",t.msg);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),api_UserNumber:function(){var e=this;this.$http1.post("user/number").then(function(t){e.userNumber=t.data}).catch(function(e){})},api_DailyLogin:function(){var t=this,n=this;this.$http1.post("points/daily-login").then(function(a){0==a.code&&(t.modalShow("toastModal","领取成功"),t.showDailyLogin=!1,e.setStorageSync("dailyLoginExpires",n.expiresTime()))}).catch(function(e){t.showDailyLogin=!1,t.modalShow("toastModal",e.data.msg)})},getDailyLogin:function(){this.api_DailyLogin()},linkUser:function(){e.navigateTo({url:"../user/index",animationDuration:300,animationType:"fade-in"})},linkAction:function(t){switch(t){case"search":e.navigateTo({url:"../search/search",animationDuration:500,animationType:"fade-in"});break;case"send":e.getStorageSync("homeSendToast")||(e.setStorageSync("homeSendToast",!0),this.showSendToast=!1),this.modalName="bottomModal";break;case"chatList":e.navigateTo({url:"../chat/list",animationDuration:500,animationType:"fade-in"});break;case"sendText":this.modalName="",e.navigateTo({url:"../send/text",animationDuration:500,animationType:"fade-in"});break;case"sendVoice":this.modalName="",e.navigateTo({url:"../send/voice",animationDuration:500,animationType:"fade-in"});break}},expiresTime:function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1>9?e.getMonth()+1:"0"+e.getMonth()+1,a=e.getDate()>9?e.getDate():"0"+e.getDate(),o=t+"/"+n+"/"+a+" 23:59:59";return new Date(o).getTime()},hideModal:function(){this.modalName=""},copyHandle:function(){var t=this;e.setClipboardData({data:t.token,success:function(){}})}}};t.default=h}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["38c3","common/runtime","common/vendor"]]]);
});
require('pages/home/index.js');
__wxRoute = 'pages/send/text';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/send/text.js';

define('pages/send/text.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/send/text"],{"145c":function(t,n,e){},"3a32":function(t,n,e){"use strict";var a=e("145c"),u=e.n(a);u.a},"4f54":function(t,n,e){"use strict";e.r(n);var a=e("d452"),u=e("c1d6");for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);e("3a32");var i=e("2877"),c=Object(i["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=c.exports},5978:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=u(e("c478"));function u(t){return t&&t.__esModule?t:{default:t}}var o={name:"sendText",mixins:[a.default],components:{},data:function(){return{}},methods:{submitSendText:function(n){var e=this,a=n.detail.value.sendtext;if(!a)return this.modalShow("toastModal","不能发送空内容"),!1;this.$http1.post("signal/send",{type:1,content:a}).then(function(n){e.modalShow("toastModal","信号已发往星球"),getApp().globalData.sendSignal=!0,setTimeout(function(){t.navigateBack({detail:1})},1500)})}}};n.default=o}).call(this,e("6e42")["default"])},b7f6:function(t,n,e){"use strict";(function(t){e("e1e3"),e("921b");a(e("66fd"));var n=a(e("4f54"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},c1d6:function(t,n,e){"use strict";e.r(n);var a=e("5978"),u=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=u.a},d452:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})}},[["b7f6","common/runtime","common/vendor"]]]);
});
require('pages/send/text.js');
__wxRoute = 'pages/send/voice';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/send/voice.js';

define('pages/send/voice.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/send/voice"],{"10d5":function(e,t,n){"use strict";(function(e){n("e1e3"),n("921b");o(n("66fd"));var t=o(n("1b2d"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"1b2d":function(e,t,n){"use strict";n.r(t);var o=n("d594"),a=n("a1fa");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("c2a9");var c=n("2877"),r=Object(c["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=r.exports},"4f75":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n("a34a")),i=s(n("7687")),c=s(n("c478")),r=n("2f62");function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,o,a,i,c){try{var r=e[i](c),s=r.value}catch(u){return void n(u)}r.done?t(s):Promise.resolve(s).then(o,a)}function l(e){return function(){var t=this,n=arguments;return new Promise(function(o,a){var i=e.apply(t,n);function c(e){u(i,o,a,c,r,"next",e)}function r(e){u(i,o,a,c,r,"throw",e)}c(void 0)})}}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){f(e,t,n[t])})}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=e.getRecorderManager(),p=e.createInnerAudioContext();p.autoplay=!0;var h={name:"sendVoice",components:{},mixins:[c.default],data:function(){return{voiceCancel:!1,timer:null,intervalTime:0,isRecord:!1,isRecordEnd:!1,voiceTempPath:"",audioPlay:!1}},onLoad:function(){var e=this;p.onEnded(function(){console.log(o("播放结束"," at pages\\send\\voice.vue:56")),e.audioPlay=!1})},watch:{modalName:function(){var e=this;"toastModal"==this.modalName&&setTimeout(function(){e.modalName=""},1500)}},computed:d({},(0,r.mapGetters)(["token"]),{intIntervalTime:function(){return Math.round(this.intervalTime)}}),methods:{touchStartHandle:function(){var t=l(a.default.mark(function t(){var n;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this,"android"!=e.getSystemInfoSync().platform){t.next=6;break}return t.next=4,i.default.requestAndroidPermission("android.permission.RECORD_AUDIO");case 4:n=t.sent,1==n?(this.recordVoiceHandle(),this.voiceCancel=!1):(console.log(o("未给录音权限"," at pages\\send\\voice.vue:86")),this.voiceCancel=!0);case 6:"ios"==e.getSystemInfoSync().platform&&(i.default.judgeIosPermission("record")?(this.recordVoiceHandle(),this.voiceCancel=!1):this.voiceCancel=!0);case 7:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),recordVoiceHandle:function(){var e=this;if(e.voiceCancel)return!1;e.timer=setInterval(function(){e.intervalTime+=.5,e.intervalTime>=.5&&!e.isRecord&&(console.log(o("录音开始"," at pages\\send\\voice.vue:122")),e.intervalTime=0,e.isRecord=!0,v.start({format:"mp3"}))},500)},touchCancelHandle:function(){console.log(o("touchCancel"," at pages\\send\\voice.vue:132")),this.voiceCancel=!0},touchEndHandle:function(){var e=this;this.intervalTime<=.5&&(console.log(o("录音太短了"," at pages\\send\\voice.vue:138")),this.voiceCancel=!0),clearInterval(this.timer),this.isRecord&&(this.isRecordEnd=!0,setTimeout(function(){v.stop(),e.isRecord=!1,console.log(o(e.isRecord," at pages\\send\\voice.vue:148")),v.onStop(function(t){console.log(o("录音停止"+JSON.stringify(t)," at pages\\send\\voice.vue:150")),e.voiceTempPath=t.tempFilePath})},500))},resetVoiceHandle:function(){this.isRecordEnd=!1,this.audioPlay=!1,this.intervalTime=0,this.voiceTempPath=""},playVoiceHandle:function(){this.audioPlay?(p.pause(),this.audioPlay=!1):this.voiceTempPath&&(p.src=this.voiceTempPath,p.play(),this.audioPlay=!0,console.log(o(p.paused," at pages\\send\\voice.vue:174")))},sendVoiceHandle:function(){var t=this,n=this;e.uploadFile({url:"https://api.meetu.letwx.com/v2/sys/upload-voice?token="+n.token,filePath:n.voiceTempPath,name:"voicefile",formData:{name:"voicefile",formData:JSON.stringify({sort:0})},success:function(a){console.log(o("upVoiceok",JSON.parse(a.data)," at pages\\send\\voice.vue:192"));var i=JSON.parse(a.data).data.voiceUrl;n.$http1.post("signal/send",{type:2,content:i,seconds:n.intIntervalTime}).then(function(n){console.log(o("语音信号",n," at pages\\send\\voice.vue:199")),t.modalShow("toastModal","信号已发往星球"),getApp().globalData.sendSignal=!0,setTimeout(function(){e.navigateBack({detail:1})},1500)})},fail:function(e){console.log(o("err",e," at pages\\send\\voice.vue:210"))}})}},onHide:function(){console.log(o("onHide"," at pages\\send\\voice.vue:216"))}};t.default=h}).call(this,n("6e42")["default"],n("0de9")["default"])},"635a":function(e,t,n){},a1fa:function(e,t,n){"use strict";n.r(t);var o=n("4f75"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=a.a},c2a9:function(e,t,n){"use strict";var o=n("635a"),a=n.n(o);a.a},d594:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})}},[["10d5","common/runtime","common/vendor"]]]);
});
require('pages/send/voice.js');
__wxRoute = 'pages/search/search';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/search/search.js';

define('pages/search/search.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{"03be":function(e,a,t){},"08a3":function(e,a,t){"use strict";t.r(a);var n=t("5726"),i=t.n(n);for(var o in n)"default"!==o&&function(e){t.d(a,e,function(){return n[e]})}(o);a["default"]=i.a},"3fbe":function(e,a,t){"use strict";(function(e){t("e1e3"),t("921b");n(t("66fd"));var a=n(t("a403"));function n(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,t("6e42")["createPage"])},5726:function(e,a,t){"use strict";(function(e,n){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=o(t("c478"));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){return t.e("meetu-ui/components/cu-modal").then(t.bind(null,"f079"))},c=e.createInnerAudioContext();c.autoplay=!0;var l={name:"serach",components:{cuModal:s},mixins:[i.default],data:function(){return{searchItemW:e.upx2px(74),searchItemH:e.upx2px(74),maxWNum:0,maxHNum:0,tempLeftNum:[],tempTopNum:[],modalName:"",isSearch:!0,searchValue:[],isNewSignal:!1,openItem:null,openNum:0,showActionTwo:!1,textareaValue:"",voicePlay:!1}},onLoad:function(){var a=this;c.onEnded(function(){console.log(n("播放结束"," at pages\\search\\search.vue:102")),a.voicePlay=!1});var t=e.createSelectorQuery();t.select(".search_view").boundingClientRect(function(e){a.maxWNum=e.width/a.searchItemW,a.maxHNum=e.height/a.searchItemW}).exec()},onShow:function(){console.log(n("onShow"," at pages\\search\\search.vue:116")),this.initData()},watch:{isNewSignal:function(){this.isNewSignal&&this.api_SignalReceive()}},methods:{api_SignalReceive:function(){var e=this,a=this;this.$http1.post("signal/receive",{page:a.page}).then(function(t){if(e.isSearch=!1,a.clog("搜寻结果"+a.page,t),e.randomLocationLeft(),e.randomLocationTop(),t.data&&t.data.length>0){for(var n=0;n<t.data.length;n++)t.data[n].isDisplay=!0,t.data[n].top=e.tempTopNum[n],t.data[n].left=e.tempLeftNum[n];a.searchValue=t.data,e.page+=1}else a.page=1,a.api_SignalReceive()}).catch(function(a){console.log(n(a," at pages\\search\\search.vue:158")),e.modalShow("toastModal",a.msg)})},api_SignalRefresh:function(){var e=this;console.log(n("刷星"," at pages\\search\\search.vue:164"));var a=this;this.$http1.post("signal/refresh").then(function(t){a.clog("刷新信号",t),t.data.number>=5?(e.page=1,e.isNewSignal=!0):(e.isNewSignal=!1,e.api_SignalReceive())}).catch(function(a){"300010"==a.code&&(e.modalName="dialogModal",e.dialogText=a.msg,e.dialogSureText="充值星豆")})},api_SignalNeglect:function(e){var a=this;this.$http1.post("signal/neglect",{signal_id:e}).then(function(e){a.modalName="",a.stopVoiceHandle(),a.openItem=null})},api_SignalReply:function(e,a){var t=this;this.$http1.post("signal/reply",{signal_id:e,content:a}).then(function(e){t.textareaValue="",t.modalName="",t.showActionTwo=!1,t.stopVoiceHandle(),t.openItem=null,setTimeout(function(){t.modalShow("toastModal","回复成功")},100)})},initData:function(){if(e.getStorageSync("searchInfo")){var a=JSON.parse(e.getStorageSync("searchInfo"));this.clog("存储的搜索信息",a),this.isSearch=!1,this.searchValue=a.searchValue,this.page=a.page}else this.api_SignalReceive()},saveData:function(){var a=this,t={searchValue:a.searchValue,page:a.page};e.setStorage({key:"searchInfo",data:JSON.stringify(t)})},randomLocationLeft:function(){var e=this;this.tempLeftNum=this.selectRandom(5,1,this.maxWNum-1).map(function(a){return a*e.searchItemW}),console.log(n(this.tempLeftNum," at pages\\search\\search.vue:252"))},randomLocationTop:function(){var e=this;this.tempTopNum=this.selectRandom(5,1,this.maxWNum-1).map(function(a){return a*e.searchItemH})},selectRandom:function(e,a,t){var i,o=[],s={};if(a-t>=0)return console.log(n(111," at pages\\search\\search.vue:267")),"起始值要小于末尾值";if(i=t-a==t?parseInt(t)+1:t-a,!(e>i)){while(o.length<e){var c=Math.ceil(Math.random()*i);s[c]||(s[c]=1,o.push(c))}return o}},searchChange:function(){this.tempLeftNum=[],this.tempTopNum=[],this.searchValue=[],this.isSearch=!0,this.openNum=0,this.api_SignalRefresh()},openStarHandle:function(e,a){this.modalName="Modal",this.openItem=e,this.openNum+=1,this.searchValue[a].isDisplay=!1,this.openNum,this.searchValue.length},neglectHandle:function(){this.api_SignalNeglect(this.openItem.id)},hideModal:function(){"dialogModal"==this.modalName&&(this.modalName="")},dialogConfirm:function(){this.modalName="",e.navigateTo({url:"../user/coin",animationDuration:300,animationType:"fade-in"})},playVoiceHandle:function(e){this.voicePlay?(c.pause(),this.voicePlay=!1):e&&(c.src=e,c.play(),this.voicePlay=!0)},stopVoiceHandle:function(){this.openItem&&"voice"==this.openItem.contenttype&&(c.paused||c.stop(),c.src="",this.voicePlay=!1)},actionTwoToggle:function(e){this.showActionTwo="open"==e},submitSendHandle:function(e){this.api_SignalReply(this.openItem.id,this.textareaValue)}},onHide:function(){console.log(n("----隐藏----"," at pages\\search\\search.vue:367")),this.stopVoiceHandle(),this.saveData()},onUnload:function(){this.stopVoiceHandle(),this.saveData(),console.log(n("----页面卸载----"," at pages\\search\\search.vue:377"))}};a.default=l}).call(this,t("6e42")["default"],t("0de9")["default"])},"63dc":function(e,a,t){"use strict";var n=t("03be"),i=t.n(n);i.a},a403:function(e,a,t){"use strict";t.r(a);var n=t("dad8"),i=t("08a3");for(var o in i)"default"!==o&&function(e){t.d(a,e,function(){return i[e]})}(o);t("63dc");var s=t("2877"),c=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);a["default"]=c.exports},dad8:function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement;e._self._c},i=[];t.d(a,"a",function(){return n}),t.d(a,"b",function(){return i})}},[["3fbe","common/runtime","common/vendor"]]]);
});
require('pages/search/search.js');
__wxRoute = 'pages/chat/list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/list.js';

define('pages/chat/list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/list"],{"38f7":function(t,e,n){},"747d":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"7a3c":function(t,e,n){"use strict";n.r(e);var o=n("9708"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=i.a},"8d53":function(t,e,n){"use strict";var o=n("38f7"),i=n.n(o);i.a},9708:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(n("c478")),i=a(n("a115")),r=n("2f62");function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};o.get||o.set?Object.defineProperty(e,n,o):e[n]=t[n]}return e.default=t,e}function s(t){return t&&t.__esModule?t:{default:t}}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){c(t,e,n[e])})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(){return n.e("components/mix-pulldown-refresh/mix-pulldown-refresh").then(n.bind(null,"7eee"))},f=function(){return n.e("components/mix-load-more/mix-load-more").then(n.bind(null,"9cfe"))},d={name:"chatlist",components:{mixPulldownRefresh:l,mixLoadMore:f},mixins:[o.default],data:function(){return{CustomBar:this.CustomBar,enableScroll:!0,loadType:"",refreshing:0,pageUnload:!1}},computed:u({},(0,r.mapState)({WS:function(t){return t.socketInfo.WS},list:function(t){return t.socketInfo.list},chatMsg:function(t){return t.socketInfo.chatMsg}})),watch:{list:function(t,e){this.list||""!=this.loadType||this.pageUnload||this.modalShow("toastModal","还没有和ta人交流过"),this.list.length%this.pageSize!=0&&this.page>1&&t.length==e.length&&(this.loadMoreStatus=2)},chatMsg:function(t,e){this.list.map(function(e){e.user_id==t.user_id&&(e.id=t.id,e.type=t.type,e.content=t.content,e.unread=Number(e.unread)+1,e.created_at=t.created_at,e.created_at_format=i.timeFormat(t.created_at))})}},onShow:function(){this.pageUnload=!1,this.ws_GetChatList()},methods:{ws_GetChatList:function(t){var e=this,n=this;if(t&&(this.loadType=t,"refresh"===t&&(this.showLoadMore=!1,this.loadMoreStatus=0,this.page=1,this.$store.commit("emptyInfo","list")),"add"===t)){if(2==this.loadMoreStatus)return!1;this.page++,this.showLoadMore=!0,setTimeout(function(){e.loadMoreStatus=1},100)}n.WS.sendSocketMessage({msgType:"getChatLogList",data:{page:n.page,pageSzie:n.pageSize}},function(t){n.clog("----消息发送OK----",t),setTimeout(function(){n.$refs.mixPulldownRefresh&&n.$refs.mixPulldownRefresh.endPulldownRefresh()},200)})},ws_read:function(t){var e=this;this.WS.sendSocketMessage({msgType:"read",data:{user_id:t}},function(t){e.clog("----读取未读消息OK----",t)})},onPulldownReresh:function(){this.ws_GetChatList("refresh")},loadMore:function(){this.ws_GetChatList("add")},linkChat:function(e){this.ws_read(e.user_id),t.navigateTo({url:"./chat?chatItem="+JSON.stringify(e),animationDuration:300,animationType:"fade-in"})},setEnableScroll:function(t){this.enableScroll!==t&&(this.enableScroll=t)},ListTouchStart:function(t){this.listTouchStart=t.touches[0].pageX},ListTouchMove:function(t){this.listTouchDirection=t.touches[0].pageX-this.listTouchStart>0?"right":"left"},ListTouchEnd:function(t){"left"==this.listTouchDirection?this.modalName=t.currentTarget.dataset.target:this.modalName=null,this.listTouchDirection=null}},onHide:function(){this.pageUnload=!0,this.$store.commit("emptyInfo","list")},onUnload:function(){this.pageUnload=!0,this.$store.commit("emptyInfo","list")}};e.default=d}).call(this,n("6e42")["default"])},b796:function(t,e,n){"use strict";n.r(e);var o=n("747d"),i=n("7a3c");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("8d53");var a=n("2877"),s=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports},d699:function(t,e,n){"use strict";(function(t){n("e1e3"),n("921b");o(n("66fd"));var e=o(n("b796"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["d699","common/runtime","common/vendor"]]]);
});
require('pages/chat/list.js');
__wxRoute = 'pages/chat/chat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/chat.js';

define('pages/chat/chat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/chat"],{"0e3d":function(t,e,o){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o("2f62"),i=c(o("a115")),s=r(o("c478"));function r(t){return t&&t.__esModule?t:{default:t}}function c(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,o):{};a.get||a.set?Object.defineProperty(e,o,a):e[o]=t[o]}return e.default=t,e}function u(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},a=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),a.forEach(function(e){l(t,e,o[e])})}return t}function l(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var f=t.createInnerAudioContext();f.autoplay=!0;var h={name:"chat",mixins:[s.default],data:function(){return{chatUserInfo:null,style:{contentViewHeight:0,mitemHeight:0,scrollViewMarginTop:t.upx2px(30)},scrollTop:0,scrollToView:"",SoftKeyboardHeight:0,textareaValue:"",isFocus:!1,submitInputDisable:!0,isHistoryLoad:!1,prevImgArr:[],page:null,lastInfoTime:null,againCurrIndex:0,audioPlay:!1,audioPlayCur:-1}},computed:u({},(0,n.mapGetters)(["userInfo","token"]),(0,n.mapState)({WS:function(t){return t.socketInfo.WS},chatInfoList:function(t){return t.socketInfo.chatInfo},chatMsg:function(t){return t.socketInfo.chatMsg},chatMsgErr:function(t){return t.socketInfo.chatMsgErr}})),watch:{chatMsg:function(t,e){var o=this,a=this;a.lastInfoTime=a.lastInfoTime?a.lastInfoTime:a.chatInfoList[a.chatInfoList.length-1].created_at,(t.from_id==a.chatUserInfo.user_id&&t.user_id==a.userInfo.id||t.from_id==a.userInfo.id&&t.user_id==a.chatUserInfo.user_id)&&(this.chatInfoList.push({id:t.id,user_id:t.user_id,nickname:t.nickname,headimgurl:t.headimgurl,type:t.type,content:t.content,created_at:t.created_at,created_at_format:i.timeFormat(t.created_at),is_show_time:i.dateDiff(a.lastInfoTime,t.created_at)}),this.ws_read(this.chatUserInfo.user_id),setTimeout(function(){o.scrollToBottom(),o.lastInfoTime=t.created_at},10))},chatInfoList:function(t,e){this.page=this.page&&this.page<1?0:t[0].page-1;for(var o=0;o<t.length;o++)3==t[o].type&&this.prevImgArr.push(t[o].content)},chatMsgErr:function(t,e){if("chatMsg"==t.msgType)switch(t.error){case 1:this.modalShow("toastModal",t.error+t.error_msg),this.chatInfoList[this.chatInfoList.length-1].send_err=!0;break;case 2:this.modalShow("dialogModal",t.error+t.error_msg),this.dialogSureText="星豆充值",this.chatInfoList[this.chatInfoList.length-1].send_err=!0;break;default:this.modalShow("toastModal",t.error+t.error_msg);break}}},onLoad:function(t){var e=this;f.onEnded(function(){e.audioPlay=!1,e.audioPlayCur=-1}),this.chatUserInfo=JSON.parse(t.chatItem),this.ws_GetChatLogInfo()},onShow:function(){var e=this,o=t.getSystemInfoSync();this.style.contentViewHeight=o.windowHeight-o.screenWidth/750*100-this.CustomBar-this.style.scrollViewMarginTop,setTimeout(function(){e.scrollToBottom()},1e3)},methods:{ws_GetChatLogInfo:function(t){var e=this,o=this;if(t&&"add"==t){if(console.log(a("add被点击",o.page," at pages\\chat\\chat.vue:194")),0==this.page)return!1;if(this.isHistoryLoad)return!1;this.isHistoryLoad=!0}this.WS.sendSocketMessage({msgType:"getChatLogInfo",data:{page:o.page,user_id:o.chatUserInfo.user_id}},function(o){t&&"add"==t&&setTimeout(function(){e.isHistoryLoad=!1},200)})},ws_sendMsg:function(t,e,o){var n=this,s=this,r=i.dateFormat(new Date,"yyyy.MM.dd hh:mm:ss");s.lastInfoTime=s.lastInfoTime?s.lastInfoTime:s.chatInfoList[s.chatInfoList.length-1].created_at,console.log(a("------最后一条消息时间-----",s.lastInfoTime," at pages\\chat\\chat.vue:230")),console.log(a("------发送消息时间-----",r," at pages\\chat\\chat.vue:231"));var c={id:s.chatInfoList[s.chatInfoList.length-1].id+1,user_id:s.userInfo.id,nickname:s.userInfo.nickname,headimgurl:s.userInfo.headimgurl,type:t,content:e,created_at:r,created_at_format:i.timeFormat(r),is_show_time:i.dateDiff(s.lastInfoTime,r)};this.WS.sendSocketMessage({msgType:"chatMsg",data:{to_id:s.chatUserInfo.user_id,content_type:t,content:e}},function(t){s.clog("---聊天消息发送OK----",t),n.textareaValue&&(console.log(a(n.textareaValue," at pages\\chat\\chat.vue:254")),n.textareaValue=""),o?(s.chatInfoList[s.againCurrIndex].send_err=!1,s.chatInfoList[s.againCurrIndex].created_at=r,s.chatInfoList[s.againCurrIndex].created_at_format=i.timeFormat(r),s.chatInfoList[s.againCurrIndex].is_show_time=i.dateDiff(s.lastInfoTime,r)):s.chatInfoList.push(c),setTimeout(function(){s.scrollToBottom(),s.lastInfoTime=r},10)},function(t){s.clog("---聊天消息发送ERR----",t)})},ws_read:function(t){var e=this;this.WS.sendSocketMessage({msgType:"read",data:{user_id:t}},function(t){e.clog("----读取未读消息OK----",t)})},loadHistoryChatInfo:function(){this.ws_GetChatLogInfo("add")},scrollToBottom:function(){var e=this,o=t.createSelectorQuery();o.selectAll(".cu-item").boundingClientRect(),o.select(".panel-scroll-chat-view").boundingClientRect(),o.exec(function(t){e.style.mitemHeight=0,t[0].forEach(function(t){return e.style.mitemHeight=e.style.mitemHeight+t.height}),setTimeout(function(){e.style.mitemHeight>e.style.contentViewHeight&&(e.scrollTop=e.style.mitemHeight-e.style.contentViewHeight,console.log(a("scrollTop",e.scrollTop," at pages\\chat\\chat.vue:307")))},10)})},TextareaFocus:function(t){this.submitInputDisable=!1,this.softKeyboardHeightHandle("up",t.detail.height);var e=this;setTimeout(function(){e.scrollToView="chat-item"+e.chatInfoList[e.chatInfoList.length-1].id},10)},TextareaInput:function(t){this.textareaValue=t.detail.value},TextareaBulr:function(){var t=this;t.softKeyboardHeightHandle("down",t.SoftKeyboardHeight),setTimeout(function(){t.scrollToBottom()},10)},InputBlur:function(t){var e=this;e.isFocus=!1,this.submitInputDisable=!0,e.softKeyboardHeightHandle("down",e.SoftKeyboardHeight),setTimeout(function(){e.scrollToBottom()},10)},softKeyboardHeightHandle:function(t,e){"up"==t?this.SoftKeyboardHeight=e:"down"==t&&(this.SoftKeyboardHeight=0)},previmg:function(e){var o=this;t.previewImage({current:e,urls:o.prevImgArr})},chooseImg:function(){var e=this;t.chooseImage({count:1,sizeType:["compressed "],sourceType:["album ","camera "],success:function(o){console.log(a(o," at pages\\chat\\chat.vue:374"));var n=o.tempFilePaths[0];t.uploadFile({url:"https://api.meetu.letwx.com/v2/sys/upload-img?token="+e.token,filePath:n,name:"imgfile",formData:{name:"imgfile",formData:JSON.stringify({sort:0})},success:function(t){var o=JSON.parse(t.data).data.imgUrl;e.ws_sendMsg(3,o)},fail:function(t){console.log(a("err",t," at pages\\chat\\chat.vue:392"))}})}})},playVoiceHandle:function(t){this.audioPlay?(f.pause(),this.audioPlay=!1):t.content&&(f.src=t.content,f.play(),this.audioPlay=!0,this.audioPlayCur=t.id)},stopVoiceHandle:function(){f.paused||f.stop(),f.src="",this.audioPlay=!1,this.audioPlayCur=-1},hideModal:function(){"dialogModal"==this.modalName&&(this.modalName="")},dialogConfirm:function(){this.modalName="",t.navigateTo({url:"../user/coin",animationDuration:300,animationType:"fade-in"})},submit:function(){if(this.isFocus=!0,!this.textareaValue)return!1;this.ws_sendMsg(1,this.textareaValue)},againSend:function(t,e){this.againCurrIndex=e,this.ws_sendMsg(t.type,t.content,1)}},onHide:function(){this.InputBlur(),this.stopVoiceHandle(),console.log(a("-----onHide--------"," at pages\\chat\\chat.vue:465"))},onUnload:function(){this.$store.commit("emptyInfo","chatInfo"),this.stopVoiceHandle(),console.log(a("-----onUnload--------"," at pages\\chat\\chat.vue:470"))}};e.default=h}).call(this,o("6e42")["default"],o("0de9")["default"])},"14b6":function(t,e,o){},"383c":function(t,e,o){"use strict";(function(t){o("e1e3"),o("921b");a(o("66fd"));var e=a(o("4436"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},4436:function(t,e,o){"use strict";o.r(e);var a=o("f651"),n=o("9a16");for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);o("dfd1");var s=o("2877"),r=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},"9a16":function(t,e,o){"use strict";o.r(e);var a=o("0e3d"),n=o.n(a);for(var i in a)"default"!==i&&function(t){o.d(e,t,function(){return a[t]})}(i);e["default"]=n.a},dfd1:function(t,e,o){"use strict";var a=o("14b6"),n=o.n(a);n.a},f651:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},n=[];o.d(e,"a",function(){return a}),o.d(e,"b",function(){return n})}},[["383c","common/runtime","common/vendor"]]]);
});
require('pages/chat/chat.js');
__wxRoute = 'pages/user/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/index.js';

define('pages/user/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/index"],{"0034":function(t,n,e){"use strict";e.r(n);var a=e("096c"),r=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=r.a},"096c":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("2f62");function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},a=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.forEach(function(n){i(t,n,e[n])})}return t}function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var u={name:"userIndex",data:function(){return{actionList:[{imgUrl:"../../static/meetu-img/i3.png",text:"我的文字信号",navUrl:"./signal?navId=text"},{imgUrl:"../../static/meetu-img/i4.png",text:"我的语音信号",navUrl:"./signal?navId=voice"},{imgUrl:"../../static/meetu-img/i5.png",text:"我的星豆",navUrl:"./coin"},{imgUrl:"../../static/meetu-img/i6.png",text:"购买VIP",navUrl:"./vip"}]}},computed:r({},(0,a.mapGetters)(["userInfo"])),methods:{actionTapHandle:function(n){var e=this;"copyId"!=n?t.navigateTo({url:n,animationDuration:300,animationType:"fade-in"}):t.setClipboardData({data:e.userInfo.planetId,success:function(){}})}}};n.default=u}).call(this,e("6e42")["default"])},3673:function(t,n,e){"use strict";(function(t){e("e1e3"),e("921b");a(e("66fd"));var n=a(e("6ca5"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"603b":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return r})},"6ca5":function(t,n,e){"use strict";e.r(n);var a=e("603b"),r=e("0034");for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);e("caf4");var u=e("2877"),c=Object(u["a"])(r["default"],a["a"],a["b"],!1,null,null,null);n["default"]=c.exports},aa7f:function(t,n,e){},caf4:function(t,n,e){"use strict";var a=e("aa7f"),r=e.n(a);r.a}},[["3673","common/runtime","common/vendor"]]]);
});
require('pages/user/index.js');
__wxRoute = 'pages/user/signal';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/signal.js';

define('pages/user/signal.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/signal"],{"0f2f":function(t,a,i){"use strict";i.r(a);var n=i("6753"),e=i("a4b2");for(var o in e)"default"!==o&&function(t){i.d(a,t,function(){return e[t]})}(o);i("db69");var s=i("2877"),l=Object(s["a"])(e["default"],n["a"],n["b"],!1,null,null,null);a["default"]=l.exports},3483:function(t,a,i){"use strict";(function(t){i("e1e3"),i("921b");n(i("66fd"));var a=n(i("0f2f"));function n(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,i("6e42")["createPage"])},6753:function(t,a,i){"use strict";var n=function(){var t=this,a=t.$createElement,i=(t._self._c,t.__map(t.signalList,function(a,i){var n=i.split("-"),e=i.split("-"),o=i.split("-");return{$orig:t.__get_orig(a),g0:n,g1:e,g2:o}}));t.$mp.data=Object.assign({},{$root:{l0:i}})},e=[];i.d(a,"a",function(){return n}),i.d(a,"b",function(){return e})},8668:function(t,a,i){},a4b2:function(t,a,i){"use strict";i.r(a);var n=i("f6c9"),e=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(a,t,function(){return n[t]})}(o);a["default"]=e.a},db69:function(t,a,i){"use strict";var n=i("8668"),e=i.n(n);e.a},f6c9:function(t,a,i){"use strict";(function(t,n){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=o(i("c478"));function o(t){return t&&t.__esModule?t:{default:t}}var s=function(){return i.e("components/mix-pulldown-refresh/mix-pulldown-refresh").then(i.bind(null,"7eee"))},l=function(){return i.e("components/mix-load-more/mix-load-more").then(i.bind(null,"9cfe"))},u=!1,d=t.createInnerAudioContext();d.autoplay=!0;var r={name:"signal",components:{mixPulldownRefresh:s,mixLoadMore:l},mixins:[e.default],data:function(){return{CustomBar:this.CustomBar,enableScroll:!0,tabsInfo:{tabsList:[{id:"1",name:"文字信号",list:[],isload:!1},{id:"2",name:"语言信号",list:[],isload:!1}],tabCur:""},signalList:null,deleteInfo:null,audioPlay:!1,audioPlayCur:-1}},onLoad:function(t){var a=this;d.onEnded(function(){console.log(n("播放结束"," at pages\\user\\signal.vue:88")),a.audioPlay=!1,a.audioPlayCur=-1}),this.tabsInfo.tabCur=this.tabsInfo.tabsList[0].id,t.navId&&(this.tabsInfo.tabCur="text"==t.navId?this.tabsInfo.tabsList[0].id:this.tabsInfo.tabsList[1].id),this.api_SignalList()},methods:{api_SignalList:function(t){var a=this,i=this;if(t&&"add"==t){if(2==this.loadMoreStatus)return!1;this.page++,this.showLoadMore=!0,setTimeout(function(){a.loadMoreStatus=1},100)}this.$http1.post("user/signal-list",{type:i.tabsInfo.tabCur,page:i.page,pageSize:i.pageSize}).then(function(n){i.clog("signallist",n),n.data?t&&"add"==t?(i.signalList=Object.assign(i.signalList,n.data),a.showLoadMore=!1,a.loadMoreStatus=0):i.signalList=n.data:a.loadMoreStatus=2})},api_DeleteSignal:function(){var t=this,a=this,i=this.signalList[this.deleteInfo.key],n=i[this.deleteInfo.cindex];this.$http1.post("signal/delete",{signal_id:n.id}).then(function(i){a.modalName="toastModal",a.toastText="删除信号成功",t.signalList[a.deleteInfo.key].splice(a.deleteInfo.cindex,1)}).catch(function(t){a.modalName="toastModal",a.toastText=t.msg})},loadMore:function(){this.api_SignalList("add")},tabChange:function(t){var a=this;if(t.id===this.tabsInfo.tabCur)return!1;this.page=1,this.showLoadMore=!1,this.loadMoreStatus=0,u&&(clearTimeout(u),u=!1),u=setTimeout(function(){a.signalList=null,a.tabsInfo.tabCur=t.id,a.api_SignalList()},200)},playVoice:function(t){this.audioPlay?(d.pause(),this.audioPlay=!1):t.content&&(d.src=t.content,d.play(),this.audioPlay=!0,this.audioPlayCur=t.id)},stopVoiceHandle:function(){"2"==this.tabsInfo.tabCur&&(d.paused||d.stop(),d.src="",this.audioPlay=!1)},showDialogModal:function(t,a,i){this.modalName="dialogModal",this.dialogText="确定要删除该信号吗?",this.deleteInfo={key:t,cindex:i}},hideModal:function(){this.modalName=""},dialogConfirm:function(){this.clog("删除信号",this.deleteInfo),this.hideModal(),this.api_DeleteSignal()},shareSignal:function(t,a,i){this.modalName="toastModal",this.toastText="进行分享后期调整"}},onHide:function(){this.stopVoiceHandle()},onUnload:function(){this.stopVoiceHandle()}};a.default=r}).call(this,i("6e42")["default"],i("0de9")["default"])}},[["3483","common/runtime","common/vendor"]]]);
});
require('pages/user/signal.js');
__wxRoute = 'pages/user/coin';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/coin.js';

define('pages/user/coin.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/coin"],{1870:function(t,e,n){"use strict";n.r(e);var r=n("cc4d"),a=n("c7d3");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("84fd");var i=n("2877"),u=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=u.exports},"27e3":function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(n("a34a")),o=u(n("c478")),i=n("2f62");function u(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,r,a,o,i){try{var u=t[o](i),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(r,a)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var o=t.apply(e,n);function i(t){s(o,r,a,i,u,"next",t)}function u(t){s(o,r,a,i,u,"throw",t)}i(void 0)})}}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){d(t,e,n[e])})}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=function(){return n.e("meetu-ui/components/cu-modal").then(n.bind(null,"f079"))},p={name:"coin",components:{cuModal:f},mixins:[o.default],computed:l({},(0,i.mapGetters)(["userInfo"])),data:function(){return{modalName:"",pointsList:[],pointsPropery:[],payOk:!1,orderSn:null,orderInfo:null}},watch:{payOk:function(t,e){this.payOk&&this.api_UserInfo()}},onLoad:function(){this.api_PointsList(),this.api_PointsProperty()},methods:{api_PointsList:function(){var t=this;this.$http1.post("points/list",{page:t.page}).then(function(e){t.pointsList=e.data})},api_PointsProperty:function(){var t=this;this.$http1.post("points/property",{},{custom:{istoken:!1}}).then(function(e){t.pointsPropery=e.data})},api_UserInfo:function(){var e=this;this.$http1.post("user/info").then(function(t){e.$store.dispatch("changeVal",{stateKey:"userInfo",newValue:t.data})}).catch(function(e){console.log(t("userinfo-err",e," at pages\\user\\coin.vue:120"))})},api_OrderCreate:function(){var t=c(a.default.mark(function t(e){var n,r;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=this,e){t.next=4;break}return n.modalShow("toastModal","请选择充值规格"),t.abrupt("return",!1);case 4:return t.next=6,n.$http1.post("order/create",{fee:e.money,type:1,property:e.id,pay_type:1,status:"unpaid"});case 6:if(r=t.sent,n.clog("下单",r),0!=r.code){t.next=13;break}return this.orderSn=r.data.order_sn,t.abrupt("return",r.data.order_sn);case 13:return n.modalShow("toastModal",r.msg),t.abrupt("return",!1);case 15:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),api_OrderCancel:function(){var t=c(a.default.mark(function t(){var e,n;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.orderSn){t.next=2;break}return t.abrupt("return",!1);case 2:return e=this,t.next=5,this.$http1.post("order/cancel",{order_sn:e.orderSn});case 5:n=t.sent,0==n.code&&(this.orderSn=null,e.modalShow("toastModal","订单删除成功"));case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),api_WxPay:function(){var t=c(a.default.mark(function t(e){var n,o,i;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",!1);case 2:return n=this,t.next=5,n.$http1.post("wxapay/pay-params",{order_sn:e});case 5:o=t.sent,n.clog("微信支付",o),0==o.code&&(i=o.data.params,this.orderInfo=i,r.requestPayment({provider:"wxpay",orderInfo:i,success:function(t){n.payOk=!0,n.modalShow("toastModal","支付成功")},fail:function(t){n.clog("Uni-pay-fail",t),-1!=t.errMsg.indexOf("payment微信:-2")?(n.modalName="dialogModal",n.dialogText="你取消了支付, 是否继续支付?",n.dialogSureText="继续支付"):elf.modalShow("toastModal",t.errMsg)}}));case 8:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),navRightHandle:function(){r.navigateTo({url:"./coinrecord",animationDuration:300,animationType:"fade-in"})},showTechargeModal:function(){this.modalName="bottomModal"},hideModal:function(){"bottomModal"==this.modalName&&(this.modalName=""),"dialogModal"==this.modalName&&(this.modalName="",this.orderInfo=null,this.api_OrderCancel())},properyHandle:function(){var e=c(a.default.mark(function e(n){var r;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t(n," at pages\\user\\coin.vue:217")),e.next=3,this.api_OrderCreate(n);case 3:if(r=e.sent,!r){e.next=7;break}return e.next=7,this.api_WxPay(r);case 7:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),dialogConfirm:function(){var e=this,n=this;console.log(t("继续支付",n.orderInfo," at pages\\user\\coin.vue:226")),r.requestPayment({provider:"wxpay",orderInfo:n.orderInfo,success:function(t){n.payOk=!0,e.modalName="",n.modalShow("toastModal","支付成功")},fail:function(t){if(n.clog("Uni-pay-fail",t),"dialogModal"==n.modalName)return!1;-1!=t.errMsg.indexOf("payment微信:-2")?(n.modalName="dialogModal",n.dialogText="你取消了支付, 是否继续支付?",n.dialogSureText="继续支付"):n.modalShow("toastModal",t.errMsg)}})},pointsTapHandle:function(t){}}};e.default=p}).call(this,n("0de9")["default"],n("6e42")["default"])},"2b96":function(t,e,n){},"84fd":function(t,e,n){"use strict";var r=n("2b96"),a=n.n(r);a.a},c7d3:function(t,e,n){"use strict";n.r(e);var r=n("27e3"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=a.a},cc4d:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},ef7a:function(t,e,n){"use strict";(function(t){n("e1e3"),n("921b");r(n("66fd"));var e=r(n("1870"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["ef7a","common/runtime","common/vendor"]]]);
});
require('pages/user/coin.js');
__wxRoute = 'pages/user/vip';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/vip.js';

define('pages/user/vip.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/vip"],{"5b13":function(e,t,r){"use strict";r.r(t);var n=r("d707"),a=r.n(n);for(var o in n)"default"!==o&&function(e){r.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},"5d77":function(e,t,r){"use strict";(function(e){r("e1e3"),r("921b");n(r("66fd"));var t=n(r("8b28"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("6e42")["createPage"])},"618e":function(e,t,r){},"8b28":function(e,t,r){"use strict";r.r(t);var n=r("b138"),a=r("5b13");for(var o in a)"default"!==o&&function(e){r.d(t,e,function(){return a[e]})}(o);r("db85");var i=r("2877"),u=Object(i["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=u.exports},b138:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},a=[];r.d(t,"a",function(){return n}),r.d(t,"b",function(){return a})},d707:function(e,t,r){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(r("a34a")),o=r("2f62"),i=u(r("c478"));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t,r,n,a,o,i){try{var u=e[o](i),s=u.value}catch(c){return void r(c)}u.done?t(s):Promise.resolve(s).then(n,a)}function c(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function i(e){s(o,n,a,i,u,"next",e)}function u(e){s(o,n,a,i,u,"throw",e)}i(void 0)})}}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){f(e,t,r[t])})}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d={name:"vip",computed:l({},(0,o.mapGetters)(["userInfo"])),mixins:[i.default],data:function(){return{vipProperty:null,selectPropertyItem:null,orderSn:null,orderInfo:null,payOk:!1}},onLoad:function(){this.api_GetVipProperty()},watch:{payOk:function(e,t){this.payOk&&this.api_UserInfo()}},methods:{api_GetVipProperty:function(){var e=this;this.$http1.post("points/vip-property",{},{custom:{istoken:!1}}).then(function(t){e.vipProperty=t.data})},api_UserInfo:function(){var t=this;this.$http1.post("user/info").then(function(e){t.$store.dispatch("changeVal",{stateKey:"userInfo",newValue:e.data})}).catch(function(t){console.log(e("userinfo-err",t," at pages\\user\\vip.vue:112"))})},api_OrderCreate:function(){var e=c(a.default.mark(function e(){var t,r;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=this,t.selectPropertyItem){e.next=4;break}return t.modalShow("toastModal","请选择充值规格"),e.abrupt("return",!1);case 4:return e.next=6,t.$http1.post("order/create",{fee:t.selectPropertyItem.price,type:2,property:t.selectPropertyItem.id,pay_type:1,status:"unpaid"});case 6:if(r=e.sent,t.clog("下单",r),0!=r.code){e.next=13;break}return this.orderSn=r.data.order_sn,e.abrupt("return",r.data.order_sn);case 13:return t.modalShow("toastModal",r.msg),e.abrupt("return",!1);case 15:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),api_OrderCancel:function(){var e=c(a.default.mark(function e(){var t,r;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.orderSn){e.next=2;break}return e.abrupt("return",!1);case 2:return t=this,e.next=5,this.$http1.post("order/cancel",{order_sn:t.orderSn});case 5:r=e.sent,0==r.code&&(this.orderSn=null,t.modalShow("toastModal","订单删除成功"));case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),api_WxPay:function(){var e=c(a.default.mark(function e(t){var r,o,i;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",!1);case 2:return r=this,e.next=5,r.$http1.post("wxapay/pay-params",{order_sn:t});case 5:o=e.sent,r.clog("微信支付",o),0==o.code&&(i=o.data.params,this.orderInfo=i,n.requestPayment({provider:"wxpay",orderInfo:i,success:function(e){r.payOk=!0,r.modalShow("toastModal","支付成功")},fail:function(e){r.clog("Uni-pay-fail",e),-1!=e.errMsg.indexOf("payment微信:-2")?(r.modalName="dialogModal",r.dialogText="你取消了支付, 是否继续支付?",r.dialogSureText="继续支付"):elf.modalShow("toastModal",e.errMsg)}}));case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),vipPropertyChange:function(e){this.selectPropertyItem=this.vipProperty[e]},vipPay:function(){var t=c(a.default.mark(function t(){var r,n;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=this,t.next=3,r.api_OrderCreate();case 3:if(n=t.sent,console.log(e("---VIPpAY----",n," at pages\\user\\vip.vue:197")),!n){t.next=8;break}return t.next=8,r.api_WxPay(n);case 8:case"end":return t.stop()}},t,this)}));function r(){return t.apply(this,arguments)}return r}(),hideModal:function(){this.modalName="",this.orderInfo=null,this.api_OrderCancel()},dialogConfirm:function(){var t=this,r=this;console.log(e("继续支付",r.orderInfo," at pages\\user\\vip.vue:211")),n.requestPayment({provider:"wxpay",orderInfo:r.orderInfo,success:function(e){r.payOk=!0,t.modalName="",r.modalShow("toastModal","支付成功")},fail:function(e){if(r.clog("Uni-pay-fail",e),"dialogModal"==r.modalName)return!1;-1!=e.errMsg.indexOf("payment微信:-2")?(r.modalName="dialogModal",r.dialogText="你取消了支付, 是否继续支付?",r.dialogSureText="继续支付"):r.modalShow("toastModal",e.errMsg)}})}}};t.default=d}).call(this,r("0de9")["default"],r("6e42")["default"])},db85:function(e,t,r){"use strict";var n=r("618e"),a=r.n(n);a.a}},[["5d77","common/runtime","common/vendor"]]]);
});
require('pages/user/vip.js');
__wxRoute = 'pages/user/coinrecord';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/coinrecord.js';

define('pages/user/coinrecord.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/coinrecord"],{"3a30":function(t,n,o){"use strict";o.r(n);var e=o("8844"),a=o("427b");for(var r in a)"default"!==r&&function(t){o.d(n,t,function(){return a[t]})}(r);o("c7bf");var i=o("2877"),u=Object(i["a"])(a["default"],e["a"],e["b"],!1,null,null,null);n["default"]=u.exports},"427b":function(t,n,o){"use strict";o.r(n);var e=o("bc44"),a=o.n(e);for(var r in e)"default"!==r&&function(t){o.d(n,t,function(){return e[t]})}(r);n["default"]=a.a},8844:function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},a=[];o.d(n,"a",function(){return e}),o.d(n,"b",function(){return a})},b90f:function(t,n,o){"use strict";(function(t){o("e1e3"),o("921b");e(o("66fd"));var n=e(o("3a30"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("6e42")["createPage"])},bc44:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=a(o("c478"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t){return s(t)||u(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function s(t){if(Array.isArray(t)){for(var n=0,o=new Array(t.length);n<t.length;n++)o[n]=t[n];return o}}var c=function(){return o.e("components/mix-load-more/mix-load-more").then(o.bind(null,"9cfe"))},f={name:"coinrecord",mixins:[e.default],components:{mixLoadMore:c},data:function(){return{tabsInfo:{tabsList:[{id:"1",name:"获得星豆"},{id:"2",name:"消耗星豆"}],tabCur:"1"},pointsLog:null}},onLoad:function(){this.api_PointsLog()},methods:{api_PointsLog:function(t){var n=this,o=this;if(t&&"add"==t){if(2==this.loadMoreStatus)return!1;this.page++,this.showLoadMore=!0,setTimeout(function(){n.loadMoreStatus=1},100)}this.$http1.post("points/log",{type:o.tabsInfo.tabCur,page:o.page,pageSize:10}).then(function(e){if(!e.data&&!t)return o.modalShow("toastModal","暂无记录"),!1;e.data?"add"==t?(o.pointsLog=[].concat(r(o.pointsLog),r(e.data)),n.showLoadMore=!1,n.loadMoreStatus=0):o.pointsLog=e.data:n.loadMoreStatus=2})},loadMore:function(){this.api_PointsLog("add")},tabChange:function(t){if(t.id===this.tabsInfo.tabCur)return!1;this.page=1,this.showLoadMore=!1,this.loadMoreStatus=0,this.tabsInfo.tabCur=t.id,this.pointsLog=[],this.api_PointsLog()}}};n.default=f},bf47:function(t,n,o){},c7bf:function(t,n,o){"use strict";var e=o("bf47"),a=o.n(e);a.a}},[["b90f","common/runtime","common/vendor"]]]);
});
require('pages/user/coinrecord.js');
__wxRoute = 'pages/user/settings';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/settings.js';

define('pages/user/settings.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/settings"],{3720:function(t,e,n){"use strict";(function(t){n("e1e3"),n("921b");a(n("66fd"));var e=a(n("fae2"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"690a":function(t,e,n){"use strict";var a=n("ac90"),o=n.n(a);o.a},7303:function(t,e,n){"use strict";n.r(e);var a=n("b738"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=o.a},ac90:function(t,e,n){},b738:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62"),u=r(n("c478"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){c(t,e,n[e])})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={name:"",mixins:[u.default],data:function(){return{actionList:[{text:"编辑个人资料",navUrl:"edit"},{text:"联系客服",navUrl:"content"},{text:"吐个槽",navUrl:"opinion"},{text:"关于我们",navUrl:"about"}]}},computed:i({},(0,o.mapState)({WS:function(t){return t.socketInfo.WS}})),methods:i({},(0,o.mapMutations)(["outApp"]),{api_OutApp:function(){var e=this;this.$http1.post("user/out-login").then(function(n){0==n.code?(e.WS.closeSocket(),e.outApp(),t.reLaunch({url:"../initial/wxoauth"})):e.modalShow("toastModal",n.msg)}).catch(function(t){console.log(a("退出err",t," at pages\\user\\settings.vue:70"))})},actionTapHandle:function(e){switch(e){case"edit":t.navigateTo({url:"../initial/personaldata?type=edit",animationDuration:300,animationType:"fade-in"});break;case"content":break;case"opinion":break;case"about":break;case"outApp":this.api_OutApp();break}}})};e.default=f}).call(this,n("6e42")["default"],n("0de9")["default"])},fa83:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},fae2:function(t,e,n){"use strict";n.r(e);var a=n("fa83"),o=n("7303");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("690a");var r=n("2877"),i=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports}},[["3720","common/runtime","common/vendor"]]]);
});
require('pages/user/settings.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

