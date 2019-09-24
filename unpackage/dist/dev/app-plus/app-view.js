var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
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

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
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
Z([3,'m_container'])
Z([3,'progress'])
Z([3,'progress-box'])
Z([[7],[3,'percent']])
Z([3,'#FFFFFF'])
Z([3,'#ccc'])
Z([3,'__e'])
Z(z[6])
Z(z[4])
Z([3,'20'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'sliderChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'false'])
Z([[7],[3,'balllocat']])
Z([3,'control'])
Z(z[6])
Z([[4],[[5],[[5],[1,'loop-type']],[[7],[3,'curtype']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'openlist']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'isopenlist']])
Z([3,'type-list'])
Z([3,'idx'])
Z([3,'item'])
Z([[7],[3,'loop_type']])
Z(z[19])
Z(z[6])
Z([[4],[[5],[[6],[[7],[3,'item']],[3,'type']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'choosetype']],[[4],[[5],[[5],[1,'$0']],[1,'$1']]]],[[4],[[5],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'loop_type']],[1,'']],[[7],[3,'idx']]],[1,'type']]]]]],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'loop_type']],[1,'']],[[7],[3,'idx']]],[1,'name']]]]]]]]]]]]]]])
Z(z[6])
Z([3,'pre'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'premusic']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[6])
Z([[4],[[5],[[7],[3,'stoporplay']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handleMusic']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[6])
Z([3,'next'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'nextmusic']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[6])
Z([3,'comment'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'getComment']],[[4],[[5],[1,'$event']]]]]]]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'header'])
Z([3,'left'])
Z([3,'avatar-container'])
Z([3,'avatar'])
Z([[7],[3,'getavatar']])
Z([3,'title'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'name']]],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'hot'])
Z([3,'hot-head'])
Z([3,'item'])
Z([3,'歌曲'])
Z(z[2])
Z([3,'歌手'])
Z([3,'scroll-Y songs-list'])
Z([3,'true'])
Z([3,'idx'])
Z(z[2])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[8])
Z([3,'song-item'])
Z([3,'song-num'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[2,'+'],[[7],[3,'idx']],[1,1]]],[1,'']]])
Z([3,'song-name'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'name']]],[1,'']]])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'m0']]])
Z([3,'__e'])
Z([3,'song play'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'playsong']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'hotsong']],[1,'']],[[7],[3,'idx']]],[1,'id']]]]]]]]]]]]]]])
Z([[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'id']])
Z(z[18])
Z([3,'song pause'])
Z(z[20])
Z(z[21])
Z([3,'singer'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'singer']]],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'my'])
Z([3,'__l'])
Z([[7],[3,'mysonglist']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'hot'])
Z([3,'hot-head'])
Z([3,'item'])
Z([3,'歌曲'])
Z(z[2])
Z([3,'歌手'])
Z([3,'scroll-Y songs-list'])
Z([3,'true'])
Z([3,'idx'])
Z(z[2])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[8])
Z([3,'song-item'])
Z([3,'song-num'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[2,'+'],[[7],[3,'idx']],[1,1]]],[1,'']]])
Z([3,'song-name'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'name']]],[1,'']]])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'m0']]])
Z([3,'__e'])
Z([3,'song play'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'playsong']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'sendsonglist']],[1,'']],[[7],[3,'idx']]],[1,'id']]]]]]]]]]]]]]])
Z(z[18])
Z([3,'song pause'])
Z(z[20])
Z([3,'singer'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'singer']]],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'recommend'])
Z([[7],[3,'isshowlist']])
Z([3,'seelist'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^closelist']],[[4],[[5],[[4],[[5],[1,'changeisshowlist']]]]]]]]])
Z([[7],[3,'sendsonglist']])
Z([3,'1'])
Z([[2,'!'],[[7],[3,'isshowlist']]])
Z([3,'scroll-Y songs-list'])
Z([3,'true'])
Z([3,'music-special'])
Z([3,'title'])
Z([3,'云音乐特色榜'])
Z([3,'list'])
Z([3,'idx'])
Z([3,'item'])
Z([[7],[3,'songrankinglist']])
Z(z[15])
Z(z[4])
Z(z[16])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'sendlist1']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'songrankinglist']],[1,'']],[[7],[3,'idx']]],[1,'id']]]]]]]]]]]]]]])
Z([3,'type-img'])
Z(z[10])
Z([[6],[[7],[3,'item']],[3,'imgurl']])
Z([3,'description'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'name']]],[1,'']]])
Z(z[11])
Z(z[12])
Z([3,'热门歌单'])
Z(z[14])
Z(z[15])
Z(z[16])
Z([[7],[3,'hotsonglist']])
Z(z[15])
Z(z[4])
Z(z[16])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'sendlist2']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'hotsonglist']],[1,'']],[[7],[3,'idx']]],[1,'id']]]]]]]]]]]]]]])
Z(z[22])
Z(z[24])
Z(z[25])
Z([a,z[26][1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'search-container'])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'search'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'getkeyword']]]]]]]]])
Z([3,'1'])
Z([3,'search-head'])
Z([3,'item'])
Z([3,'歌曲'])
Z(z[7])
Z([3,'歌手'])
Z([3,'scroll-Y songs-list'])
Z([3,'true'])
Z([3,'idx'])
Z(z[7])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[13])
Z([3,'song-item'])
Z([3,'song-num'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[2,'+'],[[7],[3,'idx']],[1,1]]],[1,'']]])
Z([3,'song-name'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'name']]],[1,'']]])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'m0']]])
Z(z[2])
Z([3,'song play'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'playsong']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'ssongList']],[1,'']],[[7],[3,'idx']]],[1,'id']]]]]]]]]]]]]]])
Z(z[2])
Z([3,'song pause'])
Z(z[25])
Z([3,'singer'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'singer']]],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'hot'])
Z([3,'__e'])
Z([3,'backtobangdan'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'backtobangdan']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'返回'])
Z([3,'hot-head'])
Z([3,'item'])
Z([3,'歌曲'])
Z(z[6])
Z([3,'歌手'])
Z([3,'scroll-Y songs-list'])
Z([3,'true'])
Z([3,'idx'])
Z(z[6])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[12])
Z([3,'song-item'])
Z([3,'song-num'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[2,'+'],[[7],[3,'idx']],[1,1]]],[1,'']]])
Z([3,'song-name'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'name']]],[1,'']]])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'m0']]])
Z(z[1])
Z([3,'song play'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'playsong']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'sendsonglist']],[1,'']],[[7],[3,'idx']]],[1,'id']]]]]]]]]]]]]]])
Z(z[1])
Z([3,'song pause'])
Z(z[24])
Z([3,'singer'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'singer']]],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'uni-icon']],[[2,'+'],[1,'uni-icon-'],[[7],[3,'type']]]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'_onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']],[[2,'+'],[[2,'+'],[1,'font-size:'],[[2,'+'],[[7],[3,'size']],[1,'px']]],[1,';']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-searchbar'])
Z([[4],[[5],[[5],[1,'uni-searchbar-form']],[[2,'?:'],[[7],[3,'show']],[1,''],[1,'hide']]]])
Z([3,'uni-searchbar-form__box'])
Z([[2,'+'],[[2,'+'],[1,'border-radius:'],[[2,'+'],[[7],[3,'radius']],[1,'rpx']]],[1,';']])
Z([3,'__l'])
Z([3,'icon-search'])
Z([3,'#fff'])
Z([3,'24'])
Z([3,'search'])
Z([3,'1'])
Z([3,'__e'])
Z(z[10])
Z([3,'search-input'])
Z(z[8])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'confirm']],[[4],[[5],[[4],[[5],[[5],[1,'confirm']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'searchVal']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([[7],[3,'show']])
Z([[7],[3,'placeholder']])
Z([3,'color:#cccccc'])
Z([3,'text'])
Z([[7],[3,'searchVal']])
Z([[2,'||'],[[2,'==='],[[7],[3,'clearButton']],[1,'always']],[[2,'&&'],[[2,'==='],[[7],[3,'clearButton']],[1,'auto']],[[2,'!=='],[[7],[3,'searchVal']],[1,'']]]])
Z(z[4])
Z(z[10])
Z([3,'icon-clear'])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'clear']]]]]]]]])
Z(z[7])
Z([3,'clear'])
Z([3,'2'])
Z(z[10])
Z([3,'uni-searchbar-form__text'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'searchClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[8])
Z([3,'3'])
Z([3,'placeholder'])
Z([a,[[7],[3,'placeholder']]])
Z(z[10])
Z([3,'uni-searchbar-form__cancel'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'cancel']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'取消'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-padding-wrap'])
Z([3,'uni-comment'])
Z([3,'idx'])
Z([3,'item'])
Z([[7],[3,'commentlist']])
Z(z[2])
Z([3,'uni-comment-list'])
Z([3,'uni-comment-face'])
Z([3,'widthFix'])
Z([[6],[[7],[3,'item']],[3,'avatar']])
Z([3,'uni-comment-body'])
Z([3,'uni-comment-top'])
Z([a,[[6],[[7],[3,'item']],[3,'nickname']]])
Z([3,'uni-comment-date'])
Z([a,[[6],[[7],[3,'item']],[3,'time']]])
Z([3,'uni-comment-content'])
Z([a,[[6],[[7],[3,'item']],[3,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-flex uni-column content'])
Z([3,'mask'])
Z([3,'bg'])
Z([[2,'+'],[[2,'+'],[1,'background-image:'],[[7],[3,'imgurl']]],[1,';']])
Z([3,'__e'])
Z([3,'currimg'])
Z([[4],[[5],[[4],[[5],[[5],[1,'load']],[[4],[[5],[[4],[[5],[[5],[1,'onImageLoad']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'getimgbg']])
Z([3,'flex-item'])
Z([3,'__l'])
Z([3,'1'])
Z([3,'flex-item tab'])
Z([3,'idx'])
Z([3,'item'])
Z([[7],[3,'tablist']])
Z(z[12])
Z(z[4])
Z([[4],[[5],[[5],[1,'tab-item']],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[[7],[3,'current']]],[1,'active'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'switchPage']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'tablist']],[1,'']],[[7],[3,'idx']]],[1,'type']]]]]]]]]]]]]]])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'title']]],[1,'']]])
Z([3,'flex-item page-swich'])
Z([[2,'!'],[[2,'=='],[[7],[3,'current']],[1,'now']]])
Z(z[9])
Z([[7],[3,'songList']])
Z([3,'2'])
Z([[2,'!'],[[2,'=='],[[7],[3,'current']],[1,'recommend']]])
Z(z[9])
Z([3,'3'])
Z([[2,'!'],[[2,'=='],[[7],[3,'current']],[1,'search']]])
Z(z[9])
Z([3,'4'])
Z([[2,'!'],[[2,'=='],[[7],[3,'current']],[1,'already']]])
Z(z[9])
Z([3,'5'])
Z([3,'flex-item bottom'])
Z(z[9])
Z(z[23])
Z([3,'6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/bmusic.wxml','./components/header.wxml','./components/hot.wxml','./components/my.wxml','./components/mylist.wxml','./components/recommend.wxml','./components/search.wxml','./components/songlist.wxml','./components/uni-ui/uni-icons/uni-icons.wxml','./components/uni-ui/uni-search-bar/uni-search-bar.wxml','./pages/comment/comment.wxml','./pages/index/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',1,e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',2,e,s,gg)
var fE=_mz(z,'slider',['aaa',3,'activeColor',1,'backgroundColor',2,'bindchange',3,'bindtouchstart',4,'blockColor',5,'blockSize',6,'data-event-opts',7,'disabled',8,'value',9],[],e,s,gg)
_(oD,fE)
_(xC,oD)
_(oB,xC)
var cF=_n('view')
_rz(z,cF,'class',13,e,s,gg)
var hG=_mz(z,'view',['bindtap',14,'class',1,'data-event-opts',2],[],e,s,gg)
var oH=_v()
_(hG,oH)
if(_oz(z,17,e,s,gg)){oH.wxVkey=1
var cI=_n('view')
_rz(z,cI,'class',18,e,s,gg)
var oJ=_v()
_(cI,oJ)
var lK=function(tM,aL,eN,gg){
var oP=_mz(z,'view',['bindtap',23,'class',1,'data-event-opts',2],[],tM,aL,gg)
_(eN,oP)
return eN
}
oJ.wxXCkey=2
_2z(z,21,lK,e,s,gg,oJ,'item','idx','idx')
_(oH,cI)
}
oH.wxXCkey=1
_(cF,hG)
var xQ=_mz(z,'view',['bindtap',26,'class',1,'data-event-opts',2],[],e,s,gg)
_(cF,xQ)
var oR=_mz(z,'view',['bindtap',29,'class',1,'data-event-opts',2],[],e,s,gg)
_(cF,oR)
var fS=_mz(z,'view',['bindtap',32,'class',1,'data-event-opts',2],[],e,s,gg)
_(cF,fS)
var cT=_mz(z,'view',['bindtap',35,'class',1,'data-event-opts',2],[],e,s,gg)
_(cF,cT)
_(oB,cF)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oV=_n('view')
_rz(z,oV,'class',0,e,s,gg)
var cW=_n('view')
_rz(z,cW,'class',1,e,s,gg)
var oX=_n('view')
_rz(z,oX,'class',2,e,s,gg)
var lY=_mz(z,'image',['class',3,'src',1],[],e,s,gg)
_(oX,lY)
_(cW,oX)
_(oV,cW)
var aZ=_n('view')
_rz(z,aZ,'class',5,e,s,gg)
var t1=_oz(z,6,e,s,gg)
_(aZ,t1)
_(oV,aZ)
_(r,oV)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var b3=_n('view')
_rz(z,b3,'class',0,e,s,gg)
var o4=_n('view')
_rz(z,o4,'class',1,e,s,gg)
var x5=_n('view')
_rz(z,x5,'class',2,e,s,gg)
var o6=_oz(z,3,e,s,gg)
_(x5,o6)
_(o4,x5)
var f7=_n('view')
_rz(z,f7,'class',4,e,s,gg)
var c8=_oz(z,5,e,s,gg)
_(f7,c8)
_(o4,f7)
_(b3,o4)
var h9=_mz(z,'scroll-view',['class',6,'scrollY',1],[],e,s,gg)
var o0=_v()
_(h9,o0)
var cAB=function(lCB,oBB,aDB,gg){
var eFB=_n('view')
_rz(z,eFB,'class',12,lCB,oBB,gg)
var oHB=_n('view')
_rz(z,oHB,'class',13,lCB,oBB,gg)
var xIB=_oz(z,14,lCB,oBB,gg)
_(oHB,xIB)
_(eFB,oHB)
var oJB=_n('view')
_rz(z,oJB,'class',15,lCB,oBB,gg)
var fKB=_oz(z,16,lCB,oBB,gg)
_(oJB,fKB)
_(eFB,oJB)
var bGB=_v()
_(eFB,bGB)
if(_oz(z,17,lCB,oBB,gg)){bGB.wxVkey=1
var cLB=_mz(z,'view',['bindtap',18,'class',1,'data-event-opts',2,'data-id',3],[],lCB,oBB,gg)
_(bGB,cLB)
}
else{bGB.wxVkey=2
var hMB=_mz(z,'view',['bindtap',22,'class',1,'data-event-opts',2,'data-id',3],[],lCB,oBB,gg)
_(bGB,hMB)
}
var oNB=_n('view')
_rz(z,oNB,'class',26,lCB,oBB,gg)
var cOB=_oz(z,27,lCB,oBB,gg)
_(oNB,cOB)
_(eFB,oNB)
bGB.wxXCkey=1
_(aDB,eFB)
return aDB
}
o0.wxXCkey=2
_2z(z,10,cAB,e,s,gg,o0,'item','idx','idx')
_(b3,h9)
_(r,b3)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var lQB=_n('view')
_rz(z,lQB,'class',0,e,s,gg)
var aRB=_mz(z,'alreadylist',['bind:__l',1,'sendsonglist',1,'vueId',2],[],e,s,gg)
_(lQB,aRB)
_(r,lQB)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var eTB=_n('view')
_rz(z,eTB,'class',0,e,s,gg)
var bUB=_n('view')
_rz(z,bUB,'class',1,e,s,gg)
var oVB=_n('view')
_rz(z,oVB,'class',2,e,s,gg)
var xWB=_oz(z,3,e,s,gg)
_(oVB,xWB)
_(bUB,oVB)
var oXB=_n('view')
_rz(z,oXB,'class',4,e,s,gg)
var fYB=_oz(z,5,e,s,gg)
_(oXB,fYB)
_(bUB,oXB)
_(eTB,bUB)
var cZB=_mz(z,'scroll-view',['class',6,'scrollY',1],[],e,s,gg)
var h1B=_v()
_(cZB,h1B)
var o2B=function(o4B,c3B,l5B,gg){
var t7B=_n('view')
_rz(z,t7B,'class',12,o4B,c3B,gg)
var b9B=_n('view')
_rz(z,b9B,'class',13,o4B,c3B,gg)
var o0B=_oz(z,14,o4B,c3B,gg)
_(b9B,o0B)
_(t7B,b9B)
var xAC=_n('view')
_rz(z,xAC,'class',15,o4B,c3B,gg)
var oBC=_oz(z,16,o4B,c3B,gg)
_(xAC,oBC)
_(t7B,xAC)
var e8B=_v()
_(t7B,e8B)
if(_oz(z,17,o4B,c3B,gg)){e8B.wxVkey=1
var fCC=_mz(z,'view',['bindtap',18,'class',1,'data-event-opts',2],[],o4B,c3B,gg)
_(e8B,fCC)
}
else{e8B.wxVkey=2
var cDC=_mz(z,'view',['bindtap',21,'class',1,'data-event-opts',2],[],o4B,c3B,gg)
_(e8B,cDC)
}
var hEC=_n('view')
_rz(z,hEC,'class',24,o4B,c3B,gg)
var oFC=_oz(z,25,o4B,c3B,gg)
_(hEC,oFC)
_(t7B,hEC)
e8B.wxXCkey=1
_(l5B,t7B)
return l5B
}
h1B.wxXCkey=2
_2z(z,10,o2B,e,s,gg,h1B,'item','idx','idx')
_(eTB,cZB)
_(r,eTB)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var oHC=_n('view')
_rz(z,oHC,'class',0,e,s,gg)
var lIC=_v()
_(oHC,lIC)
if(_oz(z,1,e,s,gg)){lIC.wxVkey=1
var tKC=_n('view')
_rz(z,tKC,'class',2,e,s,gg)
var eLC=_mz(z,'songlist',['bind:__l',3,'bind:closelist',1,'data-event-opts',2,'sendsonglist',3,'vueId',4],[],e,s,gg)
_(tKC,eLC)
_(lIC,tKC)
}
var aJC=_v()
_(oHC,aJC)
if(_oz(z,8,e,s,gg)){aJC.wxVkey=1
var bMC=_mz(z,'scroll-view',['class',9,'scrollY',1],[],e,s,gg)
var oNC=_n('view')
_rz(z,oNC,'class',11,e,s,gg)
var xOC=_n('view')
_rz(z,xOC,'class',12,e,s,gg)
var oPC=_oz(z,13,e,s,gg)
_(xOC,oPC)
_(oNC,xOC)
var fQC=_n('view')
_rz(z,fQC,'class',14,e,s,gg)
var cRC=_v()
_(fQC,cRC)
var hSC=function(cUC,oTC,oVC,gg){
var aXC=_mz(z,'view',['bindtap',19,'class',1,'data-event-opts',2],[],cUC,oTC,gg)
var tYC=_mz(z,'image',['mode',-1,'class',22,'lazyLoad',1,'src',2],[],cUC,oTC,gg)
_(aXC,tYC)
var eZC=_n('view')
_rz(z,eZC,'class',25,cUC,oTC,gg)
var b1C=_oz(z,26,cUC,oTC,gg)
_(eZC,b1C)
_(aXC,eZC)
_(oVC,aXC)
return oVC
}
cRC.wxXCkey=2
_2z(z,17,hSC,e,s,gg,cRC,'item','idx','idx')
_(oNC,fQC)
_(bMC,oNC)
var o2C=_n('view')
_rz(z,o2C,'class',27,e,s,gg)
var x3C=_n('view')
_rz(z,x3C,'class',28,e,s,gg)
var o4C=_oz(z,29,e,s,gg)
_(x3C,o4C)
_(o2C,x3C)
var f5C=_n('view')
_rz(z,f5C,'class',30,e,s,gg)
var c6C=_v()
_(f5C,c6C)
var h7C=function(c9C,o8C,o0C,gg){
var aBD=_mz(z,'view',['bindtap',35,'class',1,'data-event-opts',2],[],c9C,o8C,gg)
var tCD=_mz(z,'image',['mode',-1,'class',38,'src',1],[],c9C,o8C,gg)
_(aBD,tCD)
var eDD=_n('view')
_rz(z,eDD,'class',40,c9C,o8C,gg)
var bED=_oz(z,41,c9C,o8C,gg)
_(eDD,bED)
_(aBD,eDD)
_(o0C,aBD)
return o0C
}
c6C.wxXCkey=2
_2z(z,33,h7C,e,s,gg,c6C,'item','idx','idx')
_(o2C,f5C)
_(bMC,o2C)
_(aJC,bMC)
}
lIC.wxXCkey=1
lIC.wxXCkey=3
aJC.wxXCkey=1
_(r,oHC)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var xGD=_n('view')
_rz(z,xGD,'class',0,e,s,gg)
var oHD=_mz(z,'search-bar',['bind:__l',1,'bind:confirm',1,'class',2,'data-event-opts',3,'vueId',4],[],e,s,gg)
_(xGD,oHD)
var fID=_n('view')
_rz(z,fID,'class',6,e,s,gg)
var cJD=_n('view')
_rz(z,cJD,'class',7,e,s,gg)
var hKD=_oz(z,8,e,s,gg)
_(cJD,hKD)
_(fID,cJD)
var oLD=_n('view')
_rz(z,oLD,'class',9,e,s,gg)
var cMD=_oz(z,10,e,s,gg)
_(oLD,cMD)
_(fID,oLD)
_(xGD,fID)
var oND=_mz(z,'scroll-view',['class',11,'scrollY',1],[],e,s,gg)
var lOD=_v()
_(oND,lOD)
var aPD=function(eRD,tQD,bSD,gg){
var xUD=_n('view')
_rz(z,xUD,'class',17,eRD,tQD,gg)
var fWD=_n('view')
_rz(z,fWD,'class',18,eRD,tQD,gg)
var cXD=_oz(z,19,eRD,tQD,gg)
_(fWD,cXD)
_(xUD,fWD)
var hYD=_n('view')
_rz(z,hYD,'class',20,eRD,tQD,gg)
var oZD=_oz(z,21,eRD,tQD,gg)
_(hYD,oZD)
_(xUD,hYD)
var oVD=_v()
_(xUD,oVD)
if(_oz(z,22,eRD,tQD,gg)){oVD.wxVkey=1
var c1D=_mz(z,'view',['bindtap',23,'class',1,'data-event-opts',2],[],eRD,tQD,gg)
_(oVD,c1D)
}
else{oVD.wxVkey=2
var o2D=_mz(z,'view',['bindtap',26,'class',1,'data-event-opts',2],[],eRD,tQD,gg)
_(oVD,o2D)
}
var l3D=_n('view')
_rz(z,l3D,'class',29,eRD,tQD,gg)
var a4D=_oz(z,30,eRD,tQD,gg)
_(l3D,a4D)
_(xUD,l3D)
oVD.wxXCkey=1
_(bSD,xUD)
return bSD
}
lOD.wxXCkey=2
_2z(z,15,aPD,e,s,gg,lOD,'item','idx','idx')
_(xGD,oND)
_(r,xGD)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var e6D=_n('view')
_rz(z,e6D,'class',0,e,s,gg)
var b7D=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var o8D=_oz(z,4,e,s,gg)
_(b7D,o8D)
_(e6D,b7D)
var x9D=_n('view')
_rz(z,x9D,'class',5,e,s,gg)
var o0D=_n('view')
_rz(z,o0D,'class',6,e,s,gg)
var fAE=_oz(z,7,e,s,gg)
_(o0D,fAE)
_(x9D,o0D)
var cBE=_n('view')
_rz(z,cBE,'class',8,e,s,gg)
var hCE=_oz(z,9,e,s,gg)
_(cBE,hCE)
_(x9D,cBE)
_(e6D,x9D)
var oDE=_mz(z,'scroll-view',['class',10,'scrollY',1],[],e,s,gg)
var cEE=_v()
_(oDE,cEE)
var oFE=function(aHE,lGE,tIE,gg){
var bKE=_n('view')
_rz(z,bKE,'class',16,aHE,lGE,gg)
var xME=_n('view')
_rz(z,xME,'class',17,aHE,lGE,gg)
var oNE=_oz(z,18,aHE,lGE,gg)
_(xME,oNE)
_(bKE,xME)
var fOE=_n('view')
_rz(z,fOE,'class',19,aHE,lGE,gg)
var cPE=_oz(z,20,aHE,lGE,gg)
_(fOE,cPE)
_(bKE,fOE)
var oLE=_v()
_(bKE,oLE)
if(_oz(z,21,aHE,lGE,gg)){oLE.wxVkey=1
var hQE=_mz(z,'view',['bindtap',22,'class',1,'data-event-opts',2],[],aHE,lGE,gg)
_(oLE,hQE)
}
else{oLE.wxVkey=2
var oRE=_mz(z,'view',['bindtap',25,'class',1,'data-event-opts',2],[],aHE,lGE,gg)
_(oLE,oRE)
}
var cSE=_n('view')
_rz(z,cSE,'class',28,aHE,lGE,gg)
var oTE=_oz(z,29,aHE,lGE,gg)
_(cSE,oTE)
_(bKE,cSE)
oLE.wxXCkey=1
_(tIE,bKE)
return tIE
}
cEE.wxXCkey=2
_2z(z,14,oFE,e,s,gg,cEE,'item','idx','idx')
_(e6D,oDE)
_(r,e6D)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var aVE=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'style',2],[],e,s,gg)
_(r,aVE)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var eXE=_n('view')
_rz(z,eXE,'class',0,e,s,gg)
var bYE=_n('view')
_rz(z,bYE,'class',1,e,s,gg)
var oZE=_mz(z,'view',['class',2,'style',1],[],e,s,gg)
var o2E=_mz(z,'uni-icons',['bind:__l',4,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(oZE,o2E)
var f3E=_mz(z,'input',['bindconfirm',10,'bindinput',1,'class',2,'confirmType',3,'data-event-opts',4,'focus',5,'placeholder',6,'placeholderStyle',7,'type',8,'value',9],[],e,s,gg)
_(oZE,f3E)
var x1E=_v()
_(oZE,x1E)
if(_oz(z,20,e,s,gg)){x1E.wxVkey=1
var c4E=_mz(z,'uni-icons',['bind:__l',21,'bind:click',1,'class',2,'color',3,'data-event-opts',4,'size',5,'type',6,'vueId',7],[],e,s,gg)
_(x1E,c4E)
}
x1E.wxXCkey=1
x1E.wxXCkey=3
_(bYE,oZE)
var h5E=_mz(z,'view',['bindtap',29,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var o6E=_mz(z,'uni-icons',['bind:__l',33,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(h5E,o6E)
var c7E=_n('text')
_rz(z,c7E,'class',39,e,s,gg)
var o8E=_oz(z,40,e,s,gg)
_(c7E,o8E)
_(h5E,c7E)
_(bYE,h5E)
var l9E=_mz(z,'text',['bindtap',41,'class',1,'data-event-opts',2],[],e,s,gg)
var a0E=_oz(z,44,e,s,gg)
_(l9E,a0E)
_(bYE,l9E)
_(eXE,bYE)
_(r,eXE)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var eBF=_n('view')
var bCF=_n('view')
_rz(z,bCF,'class',0,e,s,gg)
var oDF=_n('view')
_rz(z,oDF,'class',1,e,s,gg)
var xEF=_v()
_(oDF,xEF)
var oFF=function(cHF,fGF,hIF,gg){
var cKF=_n('view')
_rz(z,cKF,'class',6,cHF,fGF,gg)
var oLF=_n('view')
_rz(z,oLF,'class',7,cHF,fGF,gg)
var lMF=_mz(z,'image',['mode',8,'src',1],[],cHF,fGF,gg)
_(oLF,lMF)
_(cKF,oLF)
var aNF=_n('view')
_rz(z,aNF,'class',10,cHF,fGF,gg)
var tOF=_n('view')
_rz(z,tOF,'class',11,cHF,fGF,gg)
var ePF=_n('text')
var bQF=_oz(z,12,cHF,fGF,gg)
_(ePF,bQF)
_(tOF,ePF)
_(aNF,tOF)
var oRF=_n('view')
_rz(z,oRF,'class',13,cHF,fGF,gg)
var xSF=_n('text')
var oTF=_oz(z,14,cHF,fGF,gg)
_(xSF,oTF)
_(oRF,xSF)
_(aNF,oRF)
var fUF=_n('view')
_rz(z,fUF,'class',15,cHF,fGF,gg)
var cVF=_oz(z,16,cHF,fGF,gg)
_(fUF,cVF)
_(aNF,fUF)
_(cKF,aNF)
_(hIF,cKF)
return hIF
}
xEF.wxXCkey=2
_2z(z,4,oFF,e,s,gg,xEF,'item','idx','idx')
_(bCF,oDF)
_(eBF,bCF)
_(r,eBF)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var oXF=_n('view')
_rz(z,oXF,'class',0,e,s,gg)
var cYF=_n('view')
_rz(z,cYF,'class',1,e,s,gg)
_(oXF,cYF)
var oZF=_mz(z,'view',['class',2,'style',1],[],e,s,gg)
_(oXF,oZF)
var l1F=_mz(z,'image',['bindload',4,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
_(oXF,l1F)
var a2F=_n('view')
_rz(z,a2F,'class',8,e,s,gg)
var t3F=_mz(z,'mheader',['bind:__l',9,'vueId',1],[],e,s,gg)
_(a2F,t3F)
_(oXF,a2F)
var e4F=_n('view')
_rz(z,e4F,'class',11,e,s,gg)
var b5F=_v()
_(e4F,b5F)
var o6F=function(o8F,x7F,f9F,gg){
var hAG=_mz(z,'view',['bindtap',16,'class',1,'data-event-opts',2],[],o8F,x7F,gg)
var oBG=_oz(z,19,o8F,x7F,gg)
_(hAG,oBG)
_(f9F,hAG)
return f9F
}
b5F.wxXCkey=2
_2z(z,14,o6F,e,s,gg,b5F,'item','idx','idx')
_(oXF,e4F)
var cCG=_n('view')
_rz(z,cCG,'class',20,e,s,gg)
var oDG=_n('view')
_rz(z,oDG,'hidden',21,e,s,gg)
var lEG=_mz(z,'hot',['bind:__l',22,'hotsong',1,'vueId',2],[],e,s,gg)
_(oDG,lEG)
_(cCG,oDG)
var aFG=_n('view')
_rz(z,aFG,'hidden',25,e,s,gg)
var tGG=_mz(z,'recommend',['bind:__l',26,'vueId',1],[],e,s,gg)
_(aFG,tGG)
_(cCG,aFG)
var eHG=_n('view')
_rz(z,eHG,'hidden',28,e,s,gg)
var bIG=_mz(z,'search',['bind:__l',29,'vueId',1],[],e,s,gg)
_(eHG,bIG)
_(cCG,eHG)
var oJG=_n('view')
_rz(z,oJG,'hidden',31,e,s,gg)
var xKG=_mz(z,'my',['bind:__l',32,'vueId',1],[],e,s,gg)
_(oJG,xKG)
_(cCG,oJG)
_(oXF,cCG)
var oLG=_n('view')
_rz(z,oLG,'class',34,e,s,gg)
var fMG=_mz(z,'bmusic',['bind:__l',35,'songList',1,'vueId',2],[],e,s,gg)
_(oLG,fMG)
_(oXF,oLG)
_(r,oXF)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["wx-uni-page-head { display: none; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/bmusic.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"m_container { width: 100%; height: 12vh; }\n.",[1],"m_container .",[1],"progress { width: 100vw; height: ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"m_container .",[1],"progress .",[1],"progress-box { position: relative; width: 90%; }\n.",[1],"m_container .",[1],"control { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; height: ",[0,110],"; }\n.",[1],"m_container .",[1],"control .",[1],"loop-type { width: ",[0,70],"; height: ",[0,70],"; background-size: cover; position: relative; }\n.",[1],"m_container .",[1],"control .",[1],"loop-type .",[1],"type-list { position: absolute; left: 0; top: ",[0,-250],"; width: ",[0,70],"; height: ",[0,250],"; background-color: rgba(0, 0, 0, 0.4); display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; border-radius: ",[0,30],"; }\n.",[1],"m_container .",[1],"control .",[1],"loop-type .",[1],"type-list .",[1],"list-loop { width: ",[0,70],"; height: ",[0,70],"; background-image: url(\x22data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDguMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xMzcuNyA1NzIuOWMtMy4yLTUuNi0xMS4zLTUuNy0xNC42LTAuMWwtMTcuOCAzMC42TDg3LjUgNjM0Yy0zLjMgNS42IDAuOCAxMi43IDcuMyAxMi43bDM1LjQgMC4xIDM1LjQgMC4xYzYuNSAwIDEwLjYtNyA3LjQtMTIuNmwtMTcuNi0zMC44LTE3LjctMzAuNnpNODYwLjIgNDczLjhjLTMuMiA1LjYtMTEuMyA1LjctMTQuNiAwLjFsLTE3LjgtMzAuNi0xNy44LTMwLjdjLTMuMy01LjYgMC44LTEyLjcgNy4zLTEyLjdsMzUuNC0wLjEgMzUuNC0wLjFjNi41IDAgMTAuNiA3IDcuNCAxMi42bC0xNy42IDMwLjgtMTcuNyAzMC43eiIgIC8+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTg1NiA0MjUuOWMtNiAwLTExLjUtMy44LTEzLjQtOS44LTQ4LjItMTU0LjMtMTk1LTI1OS45LTM1Ni44LTI1Ni43LTE1Ny43IDMuMS0yOTUuMiAxMDYuMy0zNDIuMyAyNTYuNy0yLjMgNy40LTEwLjIgMTEuNS0xNy41IDkuMi03LjQtMi4zLTExLjUtMTAuMi05LjItMTcuNSAxMi4yLTM4LjkgMzAuMy03NS42IDUzLjktMTA5LjEgMjMuMy0zMy4xIDUxLjQtNjIuMyA4My42LTg2LjggNjYuOC01MSAxNDYuNy03OC44IDIzMS04MC41IDQzLjktMC45IDg3LjEgNS40IDEyOC41IDE4LjcgNDAgMTIuOSA3Ny42IDMyIDExMS43IDU2LjkgMzMuNyAyNC42IDYzLjIgNTQuMyA4Ny42IDg4LjIgMjQuOCAzNC40IDQzLjcgNzIuMiA1Ni4zIDExMi41IDIuMyA3LjQtMS44IDE1LjItOS4yIDE3LjUtMS40IDAuNS0yLjggMC43LTQuMiAwLjd6TTQ5MyA5MTkuN2MtNDEuMSAwLTgxLjYtNi4zLTEyMC41LTE4LjgtNDAtMTIuOS03Ny42LTMyLTExMS43LTU2LjktMzMuNy0yNC42LTYzLjItNTQuMy04Ny42LTg4LjItMjQuOC0zNC40LTQzLjctNzIuMi01Ni4zLTExMi41LTIuMy03LjQgMS44LTE1LjIgOS4yLTE3LjUgNy40LTIuMyAxNS4yIDEuOCAxNy41IDkuMiA0OC4yIDE1NC4zIDE5NSAyNTkuOSAzNTYuOCAyNTYuNyAxNTcuNy0zLjEgMjk1LjItMTA2LjMgMzQyLjMtMjU2LjcgMi4zLTcuNCAxMC4yLTExLjUgMTcuNS05LjIgNy40IDIuMyAxMS41IDEwLjIgOS4yIDE3LjVhMzkzLjcyIDM5My43MiAwIDAgMS01My45IDEwOS4xYy0yMy4zIDMzLjEtNTEuNCA2Mi4zLTgzLjYgODYuOC02Ni44IDUxLTE0Ni43IDc4LjgtMjMxIDgwLjUtMi42LTAuMS01LjMgMC03LjkgMHoiICAvPjwvc3ZnPg\x3d\x3d\x22); background-size: cover; }\n.",[1],"m_container .",[1],"control .",[1],"loop-type .",[1],"type-list .",[1],"single-loop { width: ",[0,70],"; height: ",[0,70],"; background-image: url(\x22data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTY4OTcwMDYyNzUzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI4NzQiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTc3My41OTc4NjcgMjAzLjc3NmwtMC4yNzMwNjcgMC40NDM3MzNhMzMuNjIxMzMzIDMzLjYyMTMzMyAwIDAgMC0yMC4zNDM0NjctNi40ODUzMzNjLTE4Ljk3ODEzMyAwLjc4NTA2Ny0zMy43MjM3MzMgMTYuNzI1MzMzLTMyLjk3MjggMzUuNzcxNzMzYTMzLjgyNjEzMyAzMy44MjYxMzMgMCAwIDAgMTUuNjMzMDY3IDI2Ljc5NDY2N2wtMC4xMDI0IDAuMTcwNjY3YTM3NS4yMjc3MzMgMzc1LjIyNzczMyAwIDAgMSAxNjYuMjk3NiAzMTEuODc2MjY2YzAgMjA3LjAxODY2Ny0xNjguNDQ4IDM3NS40NjY2NjctMzc1LjQ2NjY2NyAzNzUuNDY2NjY3LTI3LjgxODY2NyAwLTI3LjgxODY2NyAwLTU0LjM0MDI2Ni0yLjkwMTMzMy05MC40NTMzMzMtOS44OTg2NjctMTUyLjYxMDEzMy01OC45ODI0LTE1NS41NDU2LTYxLjIwMTA2N2EzNzUuMzMwMTMzIDM3NS4zMzAxMzMgMCAwIDEtMTY1LjU4MDgtMzExLjM2NDI2N2MwLTIwMS40MjA4IDE1OS41MzkyLTM2NS44NDEwNjcgMzU4Ljg0MzczMy0zNzQuNjQ3NDY2bC00MS45ODQgNDAuODIzNDY2IDAuODE5MiAwLjg1MzMzNGEzMy44NjAyNjcgMzMuODYwMjY3IDAgMCAwLTE1LjI1NzYgMjkuMjE4MTMzYzAuNzUwOTMzIDE4Ljk3ODEzMyAxNi43MjUzMzMgMzMuNzU3ODY3IDM1LjY2OTMzMyAzMy4wNDEwNjdhMzMuNzkyIDMzLjc5MiAwIDAgMCAyNi4wMDk2LTE0LjQ3MjUzNGwwLjMwNzIgMC4zNDEzMzQgMTI4LjY0ODUzNC0xMjQuOTk2MjY3TDUxNS42ODY0IDM0LjA5OTJsLTAuNDA5NiAwLjQwOTZhMzMuNjg5NiAzMy42ODk2IDAgMCAwLTI2LjMxNjgtMTEuNDAwNTMzYy0xOC45NDQgMC43NTA5MzMtMzMuNjg5NiAxNi43MjUzMzMtMzIuOTcyOCAzNS43MDM0NjZhMzMuODk0NCAzMy44OTQ0IDAgMCAwIDEzLjAzODkzMyAyNS4xNTYyNjdsNDUuMjI2NjY3IDQ1LjI2MDhDMjc1LjE4MjkzMyAxMzUuNzE0MTMzIDgyLjYwMjY2NyAzMzEuNzQxODY3IDgyLjYwMjY2NyA1NzIuMzQ3NzMzYzAgMTQ3LjYyNjY2NyA3My4xMTM2IDI4NS4xNDk4NjcgMTkzLjE5NDY2NiAzNjYuMTE0MTM0IDMuMDcyIDIuNTYgNzcuNTUwOTMzIDYyLjE5MDkzMyAxODguNzU3MzM0IDc0LjMwODI2NiAyOS40MjI5MzMgMy4yMDg1MzMgMzEuMTI5NiAzLjMxMDkzMyA2MS43ODEzMzMgMy4zMTA5MzQgMjQ0LjY2NzczMyAwIDQ0My43MzMzMzMtMTk5LjA2NTYgNDQzLjczMzMzMy00NDMuNzMzMzM0QTQ0My4zOTIgNDQzLjM5MiAwIDAgMCA3NzMuNTk3ODY3IDIwMy43NzYiIHAtaWQ9IjI4NzUiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNNTQyLjA3MTQ2NyA0MDAuODI3NzMzYTMzLjI4IDMzLjI4IDAgMCAwLTE3LjEzNDkzNCA2LjA3NTczNGwtMC4xNzA2NjYtMC4zMDcyLTEwNi44MDMyIDY5LjcwMDI2NiAwLjE3MDY2NiAwLjI3MzA2N2EzMy45OTY4IDMzLjk5NjggMCAwIDAtMTUuODM3ODY2IDI5LjY5NmMwLjc1MDkzMyAxOC45NDQgMTYuNzI1MzMzIDMzLjcyMzczMyAzNS42NjkzMzMgMzIuOTcyOGEzMy4xMDkzMzMgMzMuMTA5MzMzIDAgMCAwIDE3LjEwMDgtNi4wNDE2bDAuMjA0OCAwLjI3MzA2NyA1My45OTg5MzMtMzUuMjU5NzM0djI0OS44NTZoMC4wMzQxMzRjMCAwLjQ3Nzg2Ny0wLjIzODkzMyAwLjg4NzQ2Ny0wLjIwNDggMS4zNjUzMzRhMzQuMjAxNiAzNC4yMDE2IDAgMSAwIDY4LjQwMzItMS4zNjUzMzRoMC4wMzQxMzN2LTAuMTcwNjY2YzAtMC40MDk2IDAuMjA0OC0wLjc1MDkzMyAwLjIwNDgtMS4xNjA1MzQgMC0wLjI3MzA2Ny0wLjE3MDY2Ny0wLjQ3Nzg2Ny0wLjIwNDgtMC43ODUwNjZWNDM1LjJjMC0wLjQ3Nzg2NyAwLjIwNDgtMC44ODc0NjcgMC4yMDQ4LTEuMzMxMmEzNC40MDY0IDM0LjQwNjQgMCAwIDAtMzUuNjY5MzMzLTMzLjA0MTA2NyIgcC1pZD0iMjg3NiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg\x3d\x3d\x22); background-size: cover; }\n.",[1],"m_container .",[1],"control .",[1],"loop-type .",[1],"type-list .",[1],"random { width: ",[0,70],"; height: ",[0,70],"; background-image: url(\x22data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTY4OTY5OTA0NzM3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIwOTIiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTkxMiAzMTEuOWMwIDQuMS0xLjMgNy42LTQgMTAuMmwtMTQyLjkgMTQzYy0yLjcgMi43LTYuMSA0LTEwLjIgNC0zLjggMC03LjItMS40LTEwLTQuMi0yLjgtMi44LTQuMi02LjItNC4yLTEwdi04NS43SDYyNi4zYy0xNC4zIDAtMjcuMiAyLjMtMzguOSA2LjctMTEuNiA0LjUtMjEuOSAxMS4yLTMwLjggMjAuMS04LjkgOC45LTE2LjUgMTguMS0yMi43IDI3LjQtNi4zIDkuNC0xMyAyMC45LTIwLjEgMzQuNi05LjUgMTguNS0yMS4xIDQzLjktMzQuOCA3Ni4zLTguNiAxOS42LTE2IDM2LjItMjIuMSA0OS42LTYuMSAxMy40LTE0LjIgMjktMjQuMSA0Ni45cy0xOS41IDMyLjgtMjguNSA0NC42Yy05LjEgMTEuOS0yMC4xIDI0LjItMzMuMSAzNy4xLTEzIDEyLjgtMjYuNCAyMy00MC4yIDMwLjYtMTMuOCA3LjYtMjkuNyAxMy44LTQ3LjUgMTguOC0xNy44IDQuOS0zNi45IDcuMy01Ny4yIDcuM2gtMTAwYy00LjEgMC03LjYtMS4zLTEwLjItNC0yLjctMi42LTQtNi00LTEwLjF2LTg1LjdjMC00LjEgMS4zLTcuNiA0LTEwLjIgMi43LTIuNyA2LjEtNCAxMC4yLTRoMTAwYzE0LjMgMCAyNy4yLTIuMyAzOC45LTYuNyAxMS42LTQuNSAyMS45LTExLjIgMzAuOC0yMC4xIDguOS04LjkgMTYuNS0xOC4xIDIyLjctMjcuNCA2LjMtOS40IDEzLTIwLjkgMjAuMS0zNC42IDkuNS0xOC40IDIxLjEtNDMuOSAzNC44LTc2LjMgOC42LTE5LjYgMTYtMzYuMiAyMi4xLTQ5LjYgNi4xLTEzLjQgMTQuMi0yOSAyNC4xLTQ2LjkgMTAtMTcuOCAxOS41LTMyLjggMjguNS00NC42IDkuMS0xMS45IDIwLjEtMjQuMiAzMy4xLTM3LjEgMTMtMTIuOCAyNi40LTIzIDQwLjItMzAuNiAxMy44LTcuNiAyOS43LTEzLjggNDcuNS0xOC44IDE3LjgtNC45IDM2LjktNy4zIDU3LjItNy4zaDExNC4zdi04NS43YzAtNC4xIDEuMy03LjYgNC0xMC4yIDIuNy0yLjcgNi4xLTQgMTAuMi00IDMuNiAwIDcuMSAxLjUgMTAuNyA0LjVMOTA4IDMwMS45YzIuNyAyLjQgNCA1LjkgNCAxMHogbS01MDIuNyA0My4zYy0xNy44IDI3LjQtMzguMiA2OC02MS4xIDEyMS45LTYuNi0xMy40LTEyLTI0LjEtMTYuNS0zMi40LTQuNS04LjItMTAuNS0xNy43LTE4LjEtMjguNC03LjYtMTAuNy0xNS4yLTE5LjItMjIuNy0yNS4zLTcuNi02LjEtMTctMTEuMy0yOC4yLTE1LjYtMTEuMi00LjMtMjMuMy02LjUtMzYuNC02LjVoLTk5LjljLTQuMSAwLTcuNi0xLjMtMTAuMi00LTIuNy0yLjctNC02LjEtNC0xMC4yVjI2OWMwLTQuMSAxLjMtNy42IDQtMTAuMiAyLjctMi43IDYuMS00IDEwLjItNGgxMDBjNzQuMi0wLjEgMTM1LjMgMzMuNCAxODIuOSAxMDAuNHpNOTEyIDcxMS45YzAgNC4xLTEuMyA3LjYtNCAxMC4ybC0xNDIuOSAxNDNjLTIuNyAyLjctNi4xIDQtMTAuMiA0LTMuOCAwLTcuMi0xLjQtMTAtNC4ycy00LjItNi4yLTQuMi0xMHYtODUuN2MtOS41IDAtMjIuMiAwLjEtMzcuOSAwLjItMTUuOCAwLjItMjcuOCAwLjMtMzYuMiAwLjUtOC40IDAuMi0xOS4yIDAtMzIuNi0wLjVzLTIzLjktMS4yLTMxLjctMi4zYy03LjctMS0xNy4zLTIuNi0yOC41LTQuNy0xMS4zLTIuMS0yMC43LTQuOC0yOC4yLTguMy03LjQtMy40LTE2LjEtNy43LTI1LjktMTIuOC05LjktNS4xLTE4LjYtMTEtMjYuNC0xNy44LTcuNy02LjktMTYtMTQuOC0yNC42LTIzLjgtOC42LTkuMS0xNy0xOS40LTI1LTMxIDE3LjYtMjcuNyAzNy44LTY4LjMgNjAuOC0xMjEuOSA2LjYgMTMuNCAxMiAyNC4yIDE2LjUgMzIuNHMxMC41IDE3LjcgMTguMSAyOC40YzcuNiAxMC43IDE1LjIgMTkuMiAyMi43IDI1LjMgNy42IDYuMSAxNyAxMS40IDI4LjIgMTUuNiAxMS4yIDQuMyAyMy4zIDYuNSAzNi40IDYuNWgxMTQuM3YtODUuN2MwLTQuMSAxLjMtNy42IDQtMTAuMiAyLjctMi43IDYuMS00IDEwLjItNCAzLjYgMCA3LjEgMS41IDEwLjcgNC41TDkwOCA3MDJjMi43IDIuMyA0IDUuOCA0IDkuOXoiIHAtaWQ9IjIwOTMiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4\x3d\x22); background-size: cover; }\n.",[1],"m_container .",[1],"control .",[1],"list-loop { background-image: url(\x22data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDguMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xMzcuNyA1NzIuOWMtMy4yLTUuNi0xMS4zLTUuNy0xNC42LTAuMWwtMTcuOCAzMC42TDg3LjUgNjM0Yy0zLjMgNS42IDAuOCAxMi43IDcuMyAxMi43bDM1LjQgMC4xIDM1LjQgMC4xYzYuNSAwIDEwLjYtNyA3LjQtMTIuNmwtMTcuNi0zMC44LTE3LjctMzAuNnpNODYwLjIgNDczLjhjLTMuMiA1LjYtMTEuMyA1LjctMTQuNiAwLjFsLTE3LjgtMzAuNi0xNy44LTMwLjdjLTMuMy01LjYgMC44LTEyLjcgNy4zLTEyLjdsMzUuNC0wLjEgMzUuNC0wLjFjNi41IDAgMTAuNiA3IDcuNCAxMi42bC0xNy42IDMwLjgtMTcuNyAzMC43eiIgIC8+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTg1NiA0MjUuOWMtNiAwLTExLjUtMy44LTEzLjQtOS44LTQ4LjItMTU0LjMtMTk1LTI1OS45LTM1Ni44LTI1Ni43LTE1Ny43IDMuMS0yOTUuMiAxMDYuMy0zNDIuMyAyNTYuNy0yLjMgNy40LTEwLjIgMTEuNS0xNy41IDkuMi03LjQtMi4zLTExLjUtMTAuMi05LjItMTcuNSAxMi4yLTM4LjkgMzAuMy03NS42IDUzLjktMTA5LjEgMjMuMy0zMy4xIDUxLjQtNjIuMyA4My42LTg2LjggNjYuOC01MSAxNDYuNy03OC44IDIzMS04MC41IDQzLjktMC45IDg3LjEgNS40IDEyOC41IDE4LjcgNDAgMTIuOSA3Ny42IDMyIDExMS43IDU2LjkgMzMuNyAyNC42IDYzLjIgNTQuMyA4Ny42IDg4LjIgMjQuOCAzNC40IDQzLjcgNzIuMiA1Ni4zIDExMi41IDIuMyA3LjQtMS44IDE1LjItOS4yIDE3LjUtMS40IDAuNS0yLjggMC43LTQuMiAwLjd6TTQ5MyA5MTkuN2MtNDEuMSAwLTgxLjYtNi4zLTEyMC41LTE4LjgtNDAtMTIuOS03Ny42LTMyLTExMS43LTU2LjktMzMuNy0yNC42LTYzLjItNTQuMy04Ny42LTg4LjItMjQuOC0zNC40LTQzLjctNzIuMi01Ni4zLTExMi41LTIuMy03LjQgMS44LTE1LjIgOS4yLTE3LjUgNy40LTIuMyAxNS4yIDEuOCAxNy41IDkuMiA0OC4yIDE1NC4zIDE5NSAyNTkuOSAzNTYuOCAyNTYuNyAxNTcuNy0zLjEgMjk1LjItMTA2LjMgMzQyLjMtMjU2LjcgMi4zLTcuNCAxMC4yLTExLjUgMTcuNS05LjIgNy40IDIuMyAxMS41IDEwLjIgOS4yIDE3LjVhMzkzLjcyIDM5My43MiAwIDAgMS01My45IDEwOS4xYy0yMy4zIDMzLjEtNTEuNCA2Mi4zLTgzLjYgODYuOC02Ni44IDUxLTE0Ni43IDc4LjgtMjMxIDgwLjUtMi42LTAuMS01LjMgMC03LjkgMHoiICAvPjwvc3ZnPg\x3d\x3d\x22); }\n.",[1],"m_container .",[1],"control .",[1],"single-loop { background-image: url(\x22data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTY4OTcwMDYyNzUzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI4NzQiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTc3My41OTc4NjcgMjAzLjc3NmwtMC4yNzMwNjcgMC40NDM3MzNhMzMuNjIxMzMzIDMzLjYyMTMzMyAwIDAgMC0yMC4zNDM0NjctNi40ODUzMzNjLTE4Ljk3ODEzMyAwLjc4NTA2Ny0zMy43MjM3MzMgMTYuNzI1MzMzLTMyLjk3MjggMzUuNzcxNzMzYTMzLjgyNjEzMyAzMy44MjYxMzMgMCAwIDAgMTUuNjMzMDY3IDI2Ljc5NDY2N2wtMC4xMDI0IDAuMTcwNjY3YTM3NS4yMjc3MzMgMzc1LjIyNzczMyAwIDAgMSAxNjYuMjk3NiAzMTEuODc2MjY2YzAgMjA3LjAxODY2Ny0xNjguNDQ4IDM3NS40NjY2NjctMzc1LjQ2NjY2NyAzNzUuNDY2NjY3LTI3LjgxODY2NyAwLTI3LjgxODY2NyAwLTU0LjM0MDI2Ni0yLjkwMTMzMy05MC40NTMzMzMtOS44OTg2NjctMTUyLjYxMDEzMy01OC45ODI0LTE1NS41NDU2LTYxLjIwMTA2N2EzNzUuMzMwMTMzIDM3NS4zMzAxMzMgMCAwIDEtMTY1LjU4MDgtMzExLjM2NDI2N2MwLTIwMS40MjA4IDE1OS41MzkyLTM2NS44NDEwNjcgMzU4Ljg0MzczMy0zNzQuNjQ3NDY2bC00MS45ODQgNDAuODIzNDY2IDAuODE5MiAwLjg1MzMzNGEzMy44NjAyNjcgMzMuODYwMjY3IDAgMCAwLTE1LjI1NzYgMjkuMjE4MTMzYzAuNzUwOTMzIDE4Ljk3ODEzMyAxNi43MjUzMzMgMzMuNzU3ODY3IDM1LjY2OTMzMyAzMy4wNDEwNjdhMzMuNzkyIDMzLjc5MiAwIDAgMCAyNi4wMDk2LTE0LjQ3MjUzNGwwLjMwNzIgMC4zNDEzMzQgMTI4LjY0ODUzNC0xMjQuOTk2MjY3TDUxNS42ODY0IDM0LjA5OTJsLTAuNDA5NiAwLjQwOTZhMzMuNjg5NiAzMy42ODk2IDAgMCAwLTI2LjMxNjgtMTEuNDAwNTMzYy0xOC45NDQgMC43NTA5MzMtMzMuNjg5NiAxNi43MjUzMzMtMzIuOTcyOCAzNS43MDM0NjZhMzMuODk0NCAzMy44OTQ0IDAgMCAwIDEzLjAzODkzMyAyNS4xNTYyNjdsNDUuMjI2NjY3IDQ1LjI2MDhDMjc1LjE4MjkzMyAxMzUuNzE0MTMzIDgyLjYwMjY2NyAzMzEuNzQxODY3IDgyLjYwMjY2NyA1NzIuMzQ3NzMzYzAgMTQ3LjYyNjY2NyA3My4xMTM2IDI4NS4xNDk4NjcgMTkzLjE5NDY2NiAzNjYuMTE0MTM0IDMuMDcyIDIuNTYgNzcuNTUwOTMzIDYyLjE5MDkzMyAxODguNzU3MzM0IDc0LjMwODI2NiAyOS40MjI5MzMgMy4yMDg1MzMgMzEuMTI5NiAzLjMxMDkzMyA2MS43ODEzMzMgMy4zMTA5MzQgMjQ0LjY2NzczMyAwIDQ0My43MzMzMzMtMTk5LjA2NTYgNDQzLjczMzMzMy00NDMuNzMzMzM0QTQ0My4zOTIgNDQzLjM5MiAwIDAgMCA3NzMuNTk3ODY3IDIwMy43NzYiIHAtaWQ9IjI4NzUiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNNTQyLjA3MTQ2NyA0MDAuODI3NzMzYTMzLjI4IDMzLjI4IDAgMCAwLTE3LjEzNDkzNCA2LjA3NTczNGwtMC4xNzA2NjYtMC4zMDcyLTEwNi44MDMyIDY5LjcwMDI2NiAwLjE3MDY2NiAwLjI3MzA2N2EzMy45OTY4IDMzLjk5NjggMCAwIDAtMTUuODM3ODY2IDI5LjY5NmMwLjc1MDkzMyAxOC45NDQgMTYuNzI1MzMzIDMzLjcyMzczMyAzNS42NjkzMzMgMzIuOTcyOGEzMy4xMDkzMzMgMzMuMTA5MzMzIDAgMCAwIDE3LjEwMDgtNi4wNDE2bDAuMjA0OCAwLjI3MzA2NyA1My45OTg5MzMtMzUuMjU5NzM0djI0OS44NTZoMC4wMzQxMzRjMCAwLjQ3Nzg2Ny0wLjIzODkzMyAwLjg4NzQ2Ny0wLjIwNDggMS4zNjUzMzRhMzQuMjAxNiAzNC4yMDE2IDAgMSAwIDY4LjQwMzItMS4zNjUzMzRoMC4wMzQxMzN2LTAuMTcwNjY2YzAtMC40MDk2IDAuMjA0OC0wLjc1MDkzMyAwLjIwNDgtMS4xNjA1MzQgMC0wLjI3MzA2Ny0wLjE3MDY2Ny0wLjQ3Nzg2Ny0wLjIwNDgtMC43ODUwNjZWNDM1LjJjMC0wLjQ3Nzg2NyAwLjIwNDgtMC44ODc0NjcgMC4yMDQ4LTEuMzMxMmEzNC40MDY0IDM0LjQwNjQgMCAwIDAtMzUuNjY5MzMzLTMzLjA0MTA2NyIgcC1pZD0iMjg3NiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg\x3d\x3d\x22); }\n.",[1],"m_container .",[1],"control .",[1],"random { background-image: url(\x22data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTY4OTY5OTA0NzM3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIwOTIiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTkxMiAzMTEuOWMwIDQuMS0xLjMgNy42LTQgMTAuMmwtMTQyLjkgMTQzYy0yLjcgMi43LTYuMSA0LTEwLjIgNC0zLjggMC03LjItMS40LTEwLTQuMi0yLjgtMi44LTQuMi02LjItNC4yLTEwdi04NS43SDYyNi4zYy0xNC4zIDAtMjcuMiAyLjMtMzguOSA2LjctMTEuNiA0LjUtMjEuOSAxMS4yLTMwLjggMjAuMS04LjkgOC45LTE2LjUgMTguMS0yMi43IDI3LjQtNi4zIDkuNC0xMyAyMC45LTIwLjEgMzQuNi05LjUgMTguNS0yMS4xIDQzLjktMzQuOCA3Ni4zLTguNiAxOS42LTE2IDM2LjItMjIuMSA0OS42LTYuMSAxMy40LTE0LjIgMjktMjQuMSA0Ni45cy0xOS41IDMyLjgtMjguNSA0NC42Yy05LjEgMTEuOS0yMC4xIDI0LjItMzMuMSAzNy4xLTEzIDEyLjgtMjYuNCAyMy00MC4yIDMwLjYtMTMuOCA3LjYtMjkuNyAxMy44LTQ3LjUgMTguOC0xNy44IDQuOS0zNi45IDcuMy01Ny4yIDcuM2gtMTAwYy00LjEgMC03LjYtMS4zLTEwLjItNC0yLjctMi42LTQtNi00LTEwLjF2LTg1LjdjMC00LjEgMS4zLTcuNiA0LTEwLjIgMi43LTIuNyA2LjEtNCAxMC4yLTRoMTAwYzE0LjMgMCAyNy4yLTIuMyAzOC45LTYuNyAxMS42LTQuNSAyMS45LTExLjIgMzAuOC0yMC4xIDguOS04LjkgMTYuNS0xOC4xIDIyLjctMjcuNCA2LjMtOS40IDEzLTIwLjkgMjAuMS0zNC42IDkuNS0xOC40IDIxLjEtNDMuOSAzNC44LTc2LjMgOC42LTE5LjYgMTYtMzYuMiAyMi4xLTQ5LjYgNi4xLTEzLjQgMTQuMi0yOSAyNC4xLTQ2LjkgMTAtMTcuOCAxOS41LTMyLjggMjguNS00NC42IDkuMS0xMS45IDIwLjEtMjQuMiAzMy4xLTM3LjEgMTMtMTIuOCAyNi40LTIzIDQwLjItMzAuNiAxMy44LTcuNiAyOS43LTEzLjggNDcuNS0xOC44IDE3LjgtNC45IDM2LjktNy4zIDU3LjItNy4zaDExNC4zdi04NS43YzAtNC4xIDEuMy03LjYgNC0xMC4yIDIuNy0yLjcgNi4xLTQgMTAuMi00IDMuNiAwIDcuMSAxLjUgMTAuNyA0LjVMOTA4IDMwMS45YzIuNyAyLjQgNCA1LjkgNCAxMHogbS01MDIuNyA0My4zYy0xNy44IDI3LjQtMzguMiA2OC02MS4xIDEyMS45LTYuNi0xMy40LTEyLTI0LjEtMTYuNS0zMi40LTQuNS04LjItMTAuNS0xNy43LTE4LjEtMjguNC03LjYtMTAuNy0xNS4yLTE5LjItMjIuNy0yNS4zLTcuNi02LjEtMTctMTEuMy0yOC4yLTE1LjYtMTEuMi00LjMtMjMuMy02LjUtMzYuNC02LjVoLTk5LjljLTQuMSAwLTcuNi0xLjMtMTAuMi00LTIuNy0yLjctNC02LjEtNC0xMC4yVjI2OWMwLTQuMSAxLjMtNy42IDQtMTAuMiAyLjctMi43IDYuMS00IDEwLjItNGgxMDBjNzQuMi0wLjEgMTM1LjMgMzMuNCAxODIuOSAxMDAuNHpNOTEyIDcxMS45YzAgNC4xLTEuMyA3LjYtNCAxMC4ybC0xNDIuOSAxNDNjLTIuNyAyLjctNi4xIDQtMTAuMiA0LTMuOCAwLTcuMi0xLjQtMTAtNC4ycy00LjItNi4yLTQuMi0xMHYtODUuN2MtOS41IDAtMjIuMiAwLjEtMzcuOSAwLjItMTUuOCAwLjItMjcuOCAwLjMtMzYuMiAwLjUtOC40IDAuMi0xOS4yIDAtMzIuNi0wLjVzLTIzLjktMS4yLTMxLjctMi4zYy03LjctMS0xNy4zLTIuNi0yOC41LTQuNy0xMS4zLTIuMS0yMC43LTQuOC0yOC4yLTguMy03LjQtMy40LTE2LjEtNy43LTI1LjktMTIuOC05LjktNS4xLTE4LjYtMTEtMjYuNC0xNy44LTcuNy02LjktMTYtMTQuOC0yNC42LTIzLjgtOC42LTkuMS0xNy0xOS40LTI1LTMxIDE3LjYtMjcuNyAzNy44LTY4LjMgNjAuOC0xMjEuOSA2LjYgMTMuNCAxMiAyNC4yIDE2LjUgMzIuNHMxMC41IDE3LjcgMTguMSAyOC40YzcuNiAxMC43IDE1LjIgMTkuMiAyMi43IDI1LjMgNy42IDYuMSAxNyAxMS40IDI4LjIgMTUuNiAxMS4yIDQuMyAyMy4zIDYuNSAzNi40IDYuNWgxMTQuM3YtODUuN2MwLTQuMSAxLjMtNy42IDQtMTAuMiAyLjctMi43IDYuMS00IDEwLjItNCAzLjYgMCA3LjEgMS41IDEwLjcgNC41TDkwOCA3MDJjMi43IDIuMyA0IDUuOCA0IDkuOXoiIHAtaWQ9IjIwOTMiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4\x3d\x22); }\n.",[1],"m_container .",[1],"control .",[1],"pre { width: ",[0,70],"; height: ",[0,70],"; background-image: url(\x22data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDguMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0zNjQuMzAyMDgzIDQ2NS42MDI4MTlMNjg3Ljk1NDM2NSAyMTguNTg4Mjk0YzM4LjQxNjQxNC0yOS4zMjc1MzQgOTMuNzkxMzkzLTEuOTI5MDM5IDkzLjc5MTM5MiA0Ni4zOTYyNzd2NDk0LjAyOTA1MWMwIDQ4LjMyNTMxNi01NS4zNzQ5NzkgNzUuNzI1NjE3LTkzLjc5MTM5MiA0Ni4zOTgwODRMMzY0LjMwMjA4MyA1NTguMzk3MTgxYy0zMC42MDA5MTYtMjMuMzU3OTg5LTMwLjYwMDkxNi02OS40MzYzNzIgMC05Mi43OTQzNjJ6TTIzOC45NDUyNTQgNzgwLjc5ODM5N1Y0NTEuNjg0MTE3di0xNjQuNTYyNTU5YzAtMTkuNjI4MTUyLTUuOTA0NTIxLTYwLjQ3NTczMyAxNy4wNTc5MDctNzUuODQxMjE1IDI1LjUyMzY0Mi0xNy4wNjg3NDQgNTkuNzQ3ODI4IDEuMjEwMTY1IDU5Ljc0NzgyOCAzMS45MTk0NTR2NDkzLjY3NjgzOWMwIDE5LjYyODE1MiA1LjkxNTM1OCA2MC40NzM5MjctMTcuMDQ3MDY5IDc1Ljg0MTIxNS0yNS41MzQ0OCAxNy4wNjg3NDQtNTkuNzU4NjY2LTEuMjExOTcxLTU5Ljc1ODY2Ni0zMS45MTk0NTR6IiAgLz48L3N2Zz4\x3d\x22); background-size: cover; }\n.",[1],"m_container .",[1],"control .",[1],"stop { width: ",[0,100],"; height: ",[0,100],"; background-image: url(\x22data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDguMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik01MTIgOTI4QzI4Mi4yNSA5MjggOTYgNzQxLjc1IDk2IDUxMlMyODIuMjUgOTYgNTEyIDk2czQxNiAxODYuMjUgNDE2IDQxNi0xODYuMjUgNDE2LTQxNiA0MTZ6TTM4NCAzMDRjLTE3LjY3MyAwLTMyIDE0LjMyNy0zMiAzMnYzODRoOTZjMTcuNjczIDAgMzItMTQuMzI3IDMyLTMyVjMwNGgtOTZ6IG0xOTIgMGMtMTcuNjczIDAtMzIgMTQuMzI3LTMyIDMydjM4NGg5NmMxNy42NzMgMCAzMi0xNC4zMjcgMzItMzJWMzA0aC05NnoiIC8+PC9zdmc+\x22); background-size: cover; }\n.",[1],"m_container .",[1],"control .",[1],"play { width: ",[0,100],"; height: ",[0,100],"; background-image: url(\x22data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDguMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik02NzUuMzI4IDExNy43MTczMzNBNDI1LjQyOTMzMyA0MjUuNDI5MzMzIDAgMCAwIDUxMiA4NS4zMzMzMzNDMjc2LjM1MiA4NS4zMzMzMzMgODUuMzMzMzMzIDI3Ni4zNTIgODUuMzMzMzMzIDUxMnMxOTEuMDE4NjY3IDQyNi42NjY2NjcgNDI2LjY2NjY2NyA0MjYuNjY2NjY3IDQyNi42NjY2NjctMTkxLjAxODY2NyA0MjYuNjY2NjY3LTQyNi42NjY2NjdjMC01Ni43NDY2NjctMTEuMDkzMzMzLTExMi0zMi4zODQtMTYzLjMyOGEyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAwLTM5LjQwMjY2NyAxNi4zNDEzMzNBMzgyLjc2MjY2NyAzODIuNzYyNjY3IDAgMCAxIDg5NiA1MTJjMCAyMTIuMDc0NjY3LTE3MS45MjUzMzMgMzg0LTM4NCAzODRTMTI4IDcyNC4wNzQ2NjcgMTI4IDUxMiAyOTkuOTI1MzMzIDEyOCA1MTIgMTI4YzUxLjExNDY2NyAwIDEwMC44IDkuOTg0IDE0Ni45ODY2NjcgMjkuMTJhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMCAxNi4zNDEzMzMtMzkuNDAyNjY3ek00NTYuNzA0IDMwNS45MkM0MzIuNzA0IDI4OS4xNTIgNDA1LjMzMzMzMyAzMDMuMDgyNjY3IDQwNS4zMzMzMzMgMzMxLjc5NzMzM3YzNjAuNTMzMzM0YzAgMjguNTg2NjY3IDI3LjU0MTMzMyA0Mi41Mzg2NjcgNTEuMzcwNjY3IDI1Ljg1NmwyNTIuMzUyLTE3Ni43NjhjMjEuNzYtMTUuMjUzMzMzIDIxLjYzMi00My41NDEzMzMgMC01OC43MDkzMzRsLTI1Mi4zNzMzMzMtMTc2Ljc2OHogbS04LjU5NzMzMyAzNjYuNzJWMzUxLjQ2NjY2N2wyMjkuMjY5MzMzIDE2MC41OTczMzMtMjI5LjI2OTMzMyAxNjAuNTk3MzMzeiIgIC8+PC9zdmc+\x22); background-size: cover; }\n.",[1],"m_container .",[1],"control .",[1],"next { width: ",[0,70],"; height: ",[0,70],"; background-image: url(\x22data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDguMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik02NTUuNzA2MTc5IDQ2NS42MDI4MTlMMzMyLjA1Mzg5NyAyMTguNTg4Mjk0Yy0zOC40MTQ2MDgtMjkuMzI3NTM0LTkzLjc5MTM5My0xLjkyOTAzOS05My43OTEzOTIgNDYuMzk2Mjc3djQ5NC4wMjkwNTFjMCA0OC4zMjUzMTYgNTUuMzc2Nzg1IDc1LjcyNTYxNyA5My43OTEzOTIgNDYuMzk4MDg0bDMyMy42NTIyODItMjQ3LjAxNDUyNWMzMC42MDI3MjItMjMuMzU3OTg5IDMwLjYwMjcyMi02OS40MzYzNzIgMC05Mi43OTQzNjJ6TTc4MS4wNjQ4MTQgNzgwLjc5ODM5N1Y0NTEuNjg0MTE3di0xNjQuNTYyNTU5YzAtMTkuNjI4MTUyIDUuOTA0NTIxLTYwLjQ3NTczMy0xNy4wNTc5MDctNzUuODQxMjE1LTI1LjUyMzY0Mi0xNy4wNjg3NDQtNTkuNzQ3ODI4IDEuMjEwMTY1LTU5Ljc0NzgyOCAzMS45MTk0NTR2NDkzLjY3NjgzOWMwIDE5LjYyODE1Mi01LjkxNTM1OCA2MC40NzM5MjcgMTcuMDQ3MDY5IDc1Ljg0MTIxNSAyNS41MzI2NzMgMTcuMDY4NzQ0IDU5Ljc1ODY2Ni0xLjIxMTk3MSA1OS43NTg2NjYtMzEuOTE5NDU0eiIgIC8+PC9zdmc+\x22); background-size: cover; }\n.",[1],"m_container .",[1],"control .",[1],"comment { width: ",[0,70],"; height: ",[0,70],"; background-image: url(\x22data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDguMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik01MTEuOTk5NDg4IDg0Ny44ODI4NjNjLTI4LjczNDU5MiAwLTU2LjcyOTMwMy0yLjYwNDMxNC04My45Njk4MDctNy4wOTk2OThMMjMxLjIzMjY3MyA5NjAuMTg1NjAyIDIzMS4yMzI2NzMgNzYxLjQwNzM1QzEyOC42MTg0ODYgNjg5LjM1NTMzNyA2Mi43NzIxNzQgNTc4Ljg4OTQzMyA2Mi43NzIxNzQgNDU0LjgyNTgzNmMwLTIxNy4wNzkwNiAyMDEuMTI5ODY0LTM5My4wNTgwNTEgNDQ5LjIyODMzOC0zOTMuMDU4MDUxIDI0OC4wODQxNDYgMCA0NDkuMjI4MzM4IDE3NS45ODAwMTQgNDQ5LjIyODMzOCAzOTMuMDU4MDUxQzk2MS4yMjc4MjYgNjcxLjkxNzE3NiA3NjAuMDgzNjM1IDg0Ny44ODI4NjMgNTExLjk5OTQ4OCA4NDcuODgyODYzek01MTEuOTk5NDg4IDExNy45MTc2MmMtMjE3LjA4NjkzMiAwLTM5My4wNzQxNTYgMTUwLjg1MTcwNy0zOTMuMDc0MTU2IDMzNi45MDcxOTMgMCAxMTQuMTY2MTc5IDY2LjQyMTQzNCAyMTQuODk4Mzk1IDE2Ny43NjE1NTIgMjc1LjgyMDkyOWwtMS43NjgzNDYgMTMwLjIzNDEzMyAxMzIuMTcxNTUxLTc5LjQ1NTYzM2MzMC40NDg3IDYuNDk3OTk0IDYyLjExNzIzMSAxMC4zMDg3ODcgOTQuOTEwNDIyIDEwLjMwODc4NyAyMTcuMTAxMjU4IDAgMzkzLjA3MzEzMi0xNTAuODI1MTAxIDM5My4wNzMxMzItMzM2LjkwNzE5M0M5MDUuMDczNjQ0IDI2OC43NjkzMjYgNzI5LjEwMTc3IDExNy45MTc2MiA1MTEuOTk5NDg4IDExNy45MTc2MnpNNzM2LjYxNDE2OSA1MTAuOTc2Njk0Yy0zMS4wMTE1NDIgMC01Ni4xNTQxODItMjUuMTI4MzA3LTU2LjE1NDE4Mi01Ni4xNTA4NTggMC0zMS4wMTAyNzEgMjUuMTQyNjQtNTYuMTUxODgxIDU2LjE1NDE4Mi01Ni4xNTE4ODFzNTYuMTU0MTgyIDI1LjE0MTYxIDU2LjE1NDE4MiA1Ni4xNTE4ODFDNzkyLjc2ODM1MSA0ODUuODQ4Mzg3IDc2Ny42MjQ2ODcgNTEwLjk3NjY5NCA3MzYuNjE0MTY5IDUxMC45NzY2OTR6TTUxMS45OTk0ODggNTEwLjk3NjY5NGMtMzEuMDEwNTE4IDAtNTYuMTUzMTU4LTI1LjEyODMwNy01Ni4xNTMxNTgtNTYuMTUwODU4IDAtMzEuMDEwMjcxIDI1LjE0MjY0LTU2LjE1MTg4MSA1Ni4xNTMxNTgtNTYuMTUxODgxIDMxLjAxMTU0MiAwIDU2LjE1NDE4MiAyNS4xNDE2MSA1Ni4xNTQxODIgNTYuMTUxODgxQzU2OC4xNTM2NyA0ODUuODQ4Mzg3IDU0My4wMTEwMyA1MTAuOTc2Njk0IDUxMS45OTk0ODggNTEwLjk3NjY5NHpNMjg3LjM4NTgzMSA1MTAuOTc2Njk0Yy0zMS4wMTA1MTggMC01Ni4xNTMxNTgtMjUuMTI4MzA3LTU2LjE1MzE1OC01Ni4xNTA4NTggMC0zMS4wMTAyNzEgMjUuMTQyNjQtNTYuMTUxODgxIDU2LjE1MzE1OC01Ni4xNTE4ODFzNTYuMTUzMTU4IDI1LjE0MTYxIDU2LjE1MzE1OCA1Ni4xNTE4ODFDMzQzLjUzODk5IDQ4NS44NDgzODcgMzE4LjM5NjM1IDUxMC45NzY2OTQgMjg3LjM4NTgzMSA1MTAuOTc2Njk0eiIgLz48L3N2Zz4\x3d\x22); background-size: cover; }\n",],undefined,{path:"./components/bmusic.wxss"});    
__wxAppCode__['components/bmusic.wxml']=$gwx('./components/bmusic.wxml');

__wxAppCode__['components/header.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"header { color: white; text-align: center; height: 8vh; font-size: ",[0,40],"; line-height: 8vh; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; padding: ",[0,8]," 0; -webkit-box-sizing: border-box; box-sizing: border-box; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"header .",[1],"left { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"header .",[1],"left .",[1],"avatar-container { margin: 0 auto; width: 8vh; height: 8vh; border-radius: 50%; overflow: hidden; border: ",[0,8]," solid #8a977b; -webkit-box-sizing: border-box; box-sizing: border-box; -webkit-animation: headRotate 6s linear infinite; animation: headRotate 6s linear infinite; }\n.",[1],"header .",[1],"left .",[1],"avatar-container .",[1],"avatar { width: 100%; height: 100%; }\n.",[1],"header .",[1],"title { -webkit-box-flex: 2; -webkit-flex: 2; -ms-flex: 2; flex: 2; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; }\n@-webkit-keyframes headRotate { 0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n50% { -webkit-transform: rotate(180deg); transform: rotate(180deg); }\n100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}@keyframes headRotate { 0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n50% { -webkit-transform: rotate(180deg); transform: rotate(180deg); }\n100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}",],undefined,{path:"./components/header.wxss"});    
__wxAppCode__['components/header.wxml']=$gwx('./components/header.wxml');

__wxAppCode__['components/hot.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"hot { width: 100%; height: 100%; color: white; font-size: ",[0,30],"; }\n.",[1],"hot .",[1],"hot-head { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; height: 7vh; border-bottom: ",[0,1]," solid #ccc; }\n.",[1],"hot .",[1],"hot-head .",[1],"item { text-align: center; width: 50%; line-height: 7vh; }\n.",[1],"hot .",[1],"songs-list { color: rgba(255, 255, 255, 0.6); height: 63vh; }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item { height: 6.1vh; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; line-height: ",[0,100],"; border-bottom: ",[0,1]," solid rgba(255, 255, 255, 0.1); -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item .",[1],"song-num { -webkit-box-flex: 1.1; -webkit-flex: 1.1; -ms-flex: 1.1; flex: 1.1; text-align: center; }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item .",[1],"song-name { -webkit-box-flex: 2; -webkit-flex: 2; -ms-flex: 2; flex: 2; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item .",[1],"song { width: ",[0,70],"; height: ",[0,70],"; background-size: cover; background-repeat: no-repeat; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; margin-right: ",[0,10],"; }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item .",[1],"play { background-image: url(\x22data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDguMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik02NzUuMzI4IDExNy43MTczMzNBNDI1LjQyOTMzMyA0MjUuNDI5MzMzIDAgMCAwIDUxMiA4NS4zMzMzMzNDMjc2LjM1MiA4NS4zMzMzMzMgODUuMzMzMzMzIDI3Ni4zNTIgODUuMzMzMzMzIDUxMnMxOTEuMDE4NjY3IDQyNi42NjY2NjcgNDI2LjY2NjY2NyA0MjYuNjY2NjY3IDQyNi42NjY2NjctMTkxLjAxODY2NyA0MjYuNjY2NjY3LTQyNi42NjY2NjdjMC01Ni43NDY2NjctMTEuMDkzMzMzLTExMi0zMi4zODQtMTYzLjMyOGEyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAwLTM5LjQwMjY2NyAxNi4zNDEzMzNBMzgyLjc2MjY2NyAzODIuNzYyNjY3IDAgMCAxIDg5NiA1MTJjMCAyMTIuMDc0NjY3LTE3MS45MjUzMzMgMzg0LTM4NCAzODRTMTI4IDcyNC4wNzQ2NjcgMTI4IDUxMiAyOTkuOTI1MzMzIDEyOCA1MTIgMTI4YzUxLjExNDY2NyAwIDEwMC44IDkuOTg0IDE0Ni45ODY2NjcgMjkuMTJhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMCAxNi4zNDEzMzMtMzkuNDAyNjY3ek00NTYuNzA0IDMwNS45MkM0MzIuNzA0IDI4OS4xNTIgNDA1LjMzMzMzMyAzMDMuMDgyNjY3IDQwNS4zMzMzMzMgMzMxLjc5NzMzM3YzNjAuNTMzMzM0YzAgMjguNTg2NjY3IDI3LjU0MTMzMyA0Mi41Mzg2NjcgNTEuMzcwNjY3IDI1Ljg1NmwyNTIuMzUyLTE3Ni43NjhjMjEuNzYtMTUuMjUzMzMzIDIxLjYzMi00My41NDEzMzMgMC01OC43MDkzMzRsLTI1Mi4zNzMzMzMtMTc2Ljc2OHogbS04LjU5NzMzMyAzNjYuNzJWMzUxLjQ2NjY2N2wyMjkuMjY5MzMzIDE2MC41OTczMzMtMjI5LjI2OTMzMyAxNjAuNTk3MzMzeiIgIC8+PC9zdmc+\x22); }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item .",[1],"pause { background-image: url(\x22data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDguMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik01MTIgOTI4QzI4Mi4yNSA5MjggOTYgNzQxLjc1IDk2IDUxMlMyODIuMjUgOTYgNTEyIDk2czQxNiAxODYuMjUgNDE2IDQxNi0xODYuMjUgNDE2LTQxNiA0MTZ6TTM4NCAzMDRjLTE3LjY3MyAwLTMyIDE0LjMyNy0zMiAzMnYzODRoOTZjMTcuNjczIDAgMzItMTQuMzI3IDMyLTMyVjMwNGgtOTZ6IG0xOTIgMGMtMTcuNjczIDAtMzIgMTQuMzI3LTMyIDMydjM4NGg5NmMxNy42NzMgMCAzMi0xNC4zMjcgMzItMzJWMzA0aC05NnoiIC8+PC9zdmc+\x22); }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item .",[1],"singer { -webkit-box-flex: 1.6; -webkit-flex: 1.6; -ms-flex: 1.6; flex: 1.6; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; }\n",],undefined,{path:"./components/hot.wxss"});    
__wxAppCode__['components/hot.wxml']=$gwx('./components/hot.wxml');

__wxAppCode__['components/my.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"my { width: 100%; height: 100%; padding: ",[0,10],"; -webkit-box-sizing: border-box; box-sizing: border-box; color: white; }\n",],undefined,{path:"./components/my.wxss"});    
__wxAppCode__['components/my.wxml']=$gwx('./components/my.wxml');

__wxAppCode__['components/mylist.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"hot { width: 100%; height: 100%; color: white; font-size: ",[0,30],"; }\n.",[1],"hot .",[1],"backtobangdan { text-align: center; width: ",[0,100],"; border: 1px solid #FFFFFF; border-radius: ",[0,8],"; }\n.",[1],"hot .",[1],"hot-head { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; height: 7vh; border-bottom: ",[0,1]," solid #ccc; }\n.",[1],"hot .",[1],"hot-head .",[1],"item { text-align: center; width: 50%; line-height: 7vh; }\n.",[1],"hot .",[1],"songs-list { color: rgba(255, 255, 255, 0.6); height: 57vh; }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item { height: 6.1vh; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; line-height: ",[0,100],"; border-bottom: ",[0,1]," solid rgba(255, 255, 255, 0.1); -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item .",[1],"song-num { -webkit-box-flex: 1.1; -webkit-flex: 1.1; -ms-flex: 1.1; flex: 1.1; text-align: center; }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item .",[1],"song-name { -webkit-box-flex: 2; -webkit-flex: 2; -ms-flex: 2; flex: 2; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item .",[1],"song { width: ",[0,70],"; height: ",[0,70],"; background-size: cover; background-repeat: no-repeat; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; margin-right: ",[0,10],"; }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item .",[1],"play { background-image: url(\x22data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDguMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik02NzUuMzI4IDExNy43MTczMzNBNDI1LjQyOTMzMyA0MjUuNDI5MzMzIDAgMCAwIDUxMiA4NS4zMzMzMzNDMjc2LjM1MiA4NS4zMzMzMzMgODUuMzMzMzMzIDI3Ni4zNTIgODUuMzMzMzMzIDUxMnMxOTEuMDE4NjY3IDQyNi42NjY2NjcgNDI2LjY2NjY2NyA0MjYuNjY2NjY3IDQyNi42NjY2NjctMTkxLjAxODY2NyA0MjYuNjY2NjY3LTQyNi42NjY2NjdjMC01Ni43NDY2NjctMTEuMDkzMzMzLTExMi0zMi4zODQtMTYzLjMyOGEyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAwLTM5LjQwMjY2NyAxNi4zNDEzMzNBMzgyLjc2MjY2NyAzODIuNzYyNjY3IDAgMCAxIDg5NiA1MTJjMCAyMTIuMDc0NjY3LTE3MS45MjUzMzMgMzg0LTM4NCAzODRTMTI4IDcyNC4wNzQ2NjcgMTI4IDUxMiAyOTkuOTI1MzMzIDEyOCA1MTIgMTI4YzUxLjExNDY2NyAwIDEwMC44IDkuOTg0IDE0Ni45ODY2NjcgMjkuMTJhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMCAxNi4zNDEzMzMtMzkuNDAyNjY3ek00NTYuNzA0IDMwNS45MkM0MzIuNzA0IDI4OS4xNTIgNDA1LjMzMzMzMyAzMDMuMDgyNjY3IDQwNS4zMzMzMzMgMzMxLjc5NzMzM3YzNjAuNTMzMzM0YzAgMjguNTg2NjY3IDI3LjU0MTMzMyA0Mi41Mzg2NjcgNTEuMzcwNjY3IDI1Ljg1NmwyNTIuMzUyLTE3Ni43NjhjMjEuNzYtMTUuMjUzMzMzIDIxLjYzMi00My41NDEzMzMgMC01OC43MDkzMzRsLTI1Mi4zNzMzMzMtMTc2Ljc2OHogbS04LjU5NzMzMyAzNjYuNzJWMzUxLjQ2NjY2N2wyMjkuMjY5MzMzIDE2MC41OTczMzMtMjI5LjI2OTMzMyAxNjAuNTk3MzMzeiIgIC8+PC9zdmc+\x22); }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item .",[1],"pause { background-image: url(\x22data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDguMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik01MTIgOTI4QzI4Mi4yNSA5MjggOTYgNzQxLjc1IDk2IDUxMlMyODIuMjUgOTYgNTEyIDk2czQxNiAxODYuMjUgNDE2IDQxNi0xODYuMjUgNDE2LTQxNiA0MTZ6TTM4NCAzMDRjLTE3LjY3MyAwLTMyIDE0LjMyNy0zMiAzMnYzODRoOTZjMTcuNjczIDAgMzItMTQuMzI3IDMyLTMyVjMwNGgtOTZ6IG0xOTIgMGMtMTcuNjczIDAtMzIgMTQuMzI3LTMyIDMydjM4NGg5NmMxNy42NzMgMCAzMi0xNC4zMjcgMzItMzJWMzA0aC05NnoiIC8+PC9zdmc+\x22); }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item .",[1],"singer { -webkit-box-flex: 1.6; -webkit-flex: 1.6; -ms-flex: 1.6; flex: 1.6; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; }\n",],undefined,{path:"./components/mylist.wxss"});    
__wxAppCode__['components/mylist.wxml']=$gwx('./components/mylist.wxml');

__wxAppCode__['components/recommend.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"recommend { width: 100%; height: 100%; padding: ",[0,10],"; -webkit-box-sizing: border-box; box-sizing: border-box; color: white; }\n.",[1],"recommend .",[1],"songs-list { width: 100%; height: 65vh; }\n.",[1],"recommend .",[1],"songs-list .",[1],"music-special { width: 100%; margin-top: 3vh; }\n.",[1],"recommend .",[1],"songs-list .",[1],"music-special .",[1],"title { margin-bottom: 2vh; }\n.",[1],"recommend .",[1],"songs-list .",[1],"music-special .",[1],"list { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"recommend .",[1],"songs-list .",[1],"music-special .",[1],"list .",[1],"item { width: 33.3%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; margin-bottom: 3vh; }\n.",[1],"recommend .",[1],"songs-list .",[1],"music-special .",[1],"list .",[1],"item .",[1],"type-img { width: ",[0,160],"; height: ",[0,160],"; }\n.",[1],"recommend .",[1],"songs-list .",[1],"music-special .",[1],"list .",[1],"item .",[1],"description { width: 80%; text-align: center; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; font-size: ",[0,30],"; }\n",],undefined,{path:"./components/recommend.wxss"});    
__wxAppCode__['components/recommend.wxml']=$gwx('./components/recommend.wxml');

__wxAppCode__['components/search.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"search-container { width: 100%; height: 100%; font-size: ",[0,30],"; }\n.",[1],"search-container .",[1],"search-head { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: 7vh; }\n.",[1],"search-container .",[1],"search-head .",[1],"item { text-align: center; width: 50%; line-height: 7vh; color: white; }\n.",[1],"search-container .",[1],"songs-list { color: rgba(255, 255, 255, 0.6); height: 55vh; padding: 0 ",[0,15],"; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"search-container .",[1],"songs-list .",[1],"song-item { height: 6.1vh; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; line-height: ",[0,100],"; border-bottom: ",[0,1]," solid rgba(255, 255, 255, 0.1); -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"search-container .",[1],"songs-list .",[1],"song-item .",[1],"song-num { -webkit-box-flex: 1.1; -webkit-flex: 1.1; -ms-flex: 1.1; flex: 1.1; text-align: center; }\n.",[1],"search-container .",[1],"songs-list .",[1],"song-item .",[1],"song-name { -webkit-box-flex: 2; -webkit-flex: 2; -ms-flex: 2; flex: 2; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; }\n.",[1],"search-container .",[1],"songs-list .",[1],"song-item .",[1],"song { width: ",[0,70],"; height: ",[0,70],"; background-size: cover; background-repeat: no-repeat; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; margin-right: ",[0,10],"; }\n.",[1],"search-container .",[1],"songs-list .",[1],"song-item .",[1],"play { background-image: url(\x22data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDguMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik02NzUuMzI4IDExNy43MTczMzNBNDI1LjQyOTMzMyA0MjUuNDI5MzMzIDAgMCAwIDUxMiA4NS4zMzMzMzNDMjc2LjM1MiA4NS4zMzMzMzMgODUuMzMzMzMzIDI3Ni4zNTIgODUuMzMzMzMzIDUxMnMxOTEuMDE4NjY3IDQyNi42NjY2NjcgNDI2LjY2NjY2NyA0MjYuNjY2NjY3IDQyNi42NjY2NjctMTkxLjAxODY2NyA0MjYuNjY2NjY3LTQyNi42NjY2NjdjMC01Ni43NDY2NjctMTEuMDkzMzMzLTExMi0zMi4zODQtMTYzLjMyOGEyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAwLTM5LjQwMjY2NyAxNi4zNDEzMzNBMzgyLjc2MjY2NyAzODIuNzYyNjY3IDAgMCAxIDg5NiA1MTJjMCAyMTIuMDc0NjY3LTE3MS45MjUzMzMgMzg0LTM4NCAzODRTMTI4IDcyNC4wNzQ2NjcgMTI4IDUxMiAyOTkuOTI1MzMzIDEyOCA1MTIgMTI4YzUxLjExNDY2NyAwIDEwMC44IDkuOTg0IDE0Ni45ODY2NjcgMjkuMTJhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMCAxNi4zNDEzMzMtMzkuNDAyNjY3ek00NTYuNzA0IDMwNS45MkM0MzIuNzA0IDI4OS4xNTIgNDA1LjMzMzMzMyAzMDMuMDgyNjY3IDQwNS4zMzMzMzMgMzMxLjc5NzMzM3YzNjAuNTMzMzM0YzAgMjguNTg2NjY3IDI3LjU0MTMzMyA0Mi41Mzg2NjcgNTEuMzcwNjY3IDI1Ljg1NmwyNTIuMzUyLTE3Ni43NjhjMjEuNzYtMTUuMjUzMzMzIDIxLjYzMi00My41NDEzMzMgMC01OC43MDkzMzRsLTI1Mi4zNzMzMzMtMTc2Ljc2OHogbS04LjU5NzMzMyAzNjYuNzJWMzUxLjQ2NjY2N2wyMjkuMjY5MzMzIDE2MC41OTczMzMtMjI5LjI2OTMzMyAxNjAuNTk3MzMzeiIgIC8+PC9zdmc+\x22); }\n.",[1],"search-container .",[1],"songs-list .",[1],"song-item .",[1],"pause { background-image: url(\x22data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDguMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik01MTIgOTI4QzI4Mi4yNSA5MjggOTYgNzQxLjc1IDk2IDUxMlMyODIuMjUgOTYgNTEyIDk2czQxNiAxODYuMjUgNDE2IDQxNi0xODYuMjUgNDE2LTQxNiA0MTZ6TTM4NCAzMDRjLTE3LjY3MyAwLTMyIDE0LjMyNy0zMiAzMnYzODRoOTZjMTcuNjczIDAgMzItMTQuMzI3IDMyLTMyVjMwNGgtOTZ6IG0xOTIgMGMtMTcuNjczIDAtMzIgMTQuMzI3LTMyIDMydjM4NGg5NmMxNy42NzMgMCAzMi0xNC4zMjcgMzItMzJWMzA0aC05NnoiIC8+PC9zdmc+\x22); }\n.",[1],"search-container .",[1],"songs-list .",[1],"song-item .",[1],"singer { -webkit-box-flex: 1.6; -webkit-flex: 1.6; -ms-flex: 1.6; flex: 1.6; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; }\n",],undefined,{path:"./components/search.wxss"});    
__wxAppCode__['components/search.wxml']=$gwx('./components/search.wxml');

__wxAppCode__['components/songlist.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"hot { width: 100%; height: 100%; color: white; font-size: ",[0,30],"; }\n.",[1],"hot .",[1],"backtobangdan { text-align: center; width: ",[0,100],"; border: 1px solid #FFFFFF; border-radius: ",[0,8],"; }\n.",[1],"hot .",[1],"hot-head { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; height: 7vh; border-bottom: ",[0,1]," solid #ccc; }\n.",[1],"hot .",[1],"hot-head .",[1],"item { text-align: center; width: 50%; line-height: 7vh; }\n.",[1],"hot .",[1],"songs-list { color: rgba(255, 255, 255, 0.6); height: 57vh; }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item { height: 6.1vh; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; line-height: ",[0,100],"; border-bottom: ",[0,1]," solid rgba(255, 255, 255, 0.1); -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item .",[1],"song-num { -webkit-box-flex: 1.1; -webkit-flex: 1.1; -ms-flex: 1.1; flex: 1.1; text-align: center; }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item .",[1],"song-name { -webkit-box-flex: 2; -webkit-flex: 2; -ms-flex: 2; flex: 2; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item .",[1],"song { width: ",[0,70],"; height: ",[0,70],"; background-size: cover; background-repeat: no-repeat; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; margin-right: ",[0,10],"; }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item .",[1],"play { background-image: url(\x22data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDguMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik02NzUuMzI4IDExNy43MTczMzNBNDI1LjQyOTMzMyA0MjUuNDI5MzMzIDAgMCAwIDUxMiA4NS4zMzMzMzNDMjc2LjM1MiA4NS4zMzMzMzMgODUuMzMzMzMzIDI3Ni4zNTIgODUuMzMzMzMzIDUxMnMxOTEuMDE4NjY3IDQyNi42NjY2NjcgNDI2LjY2NjY2NyA0MjYuNjY2NjY3IDQyNi42NjY2NjctMTkxLjAxODY2NyA0MjYuNjY2NjY3LTQyNi42NjY2NjdjMC01Ni43NDY2NjctMTEuMDkzMzMzLTExMi0zMi4zODQtMTYzLjMyOGEyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAwLTM5LjQwMjY2NyAxNi4zNDEzMzNBMzgyLjc2MjY2NyAzODIuNzYyNjY3IDAgMCAxIDg5NiA1MTJjMCAyMTIuMDc0NjY3LTE3MS45MjUzMzMgMzg0LTM4NCAzODRTMTI4IDcyNC4wNzQ2NjcgMTI4IDUxMiAyOTkuOTI1MzMzIDEyOCA1MTIgMTI4YzUxLjExNDY2NyAwIDEwMC44IDkuOTg0IDE0Ni45ODY2NjcgMjkuMTJhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMCAxNi4zNDEzMzMtMzkuNDAyNjY3ek00NTYuNzA0IDMwNS45MkM0MzIuNzA0IDI4OS4xNTIgNDA1LjMzMzMzMyAzMDMuMDgyNjY3IDQwNS4zMzMzMzMgMzMxLjc5NzMzM3YzNjAuNTMzMzM0YzAgMjguNTg2NjY3IDI3LjU0MTMzMyA0Mi41Mzg2NjcgNTEuMzcwNjY3IDI1Ljg1NmwyNTIuMzUyLTE3Ni43NjhjMjEuNzYtMTUuMjUzMzMzIDIxLjYzMi00My41NDEzMzMgMC01OC43MDkzMzRsLTI1Mi4zNzMzMzMtMTc2Ljc2OHogbS04LjU5NzMzMyAzNjYuNzJWMzUxLjQ2NjY2N2wyMjkuMjY5MzMzIDE2MC41OTczMzMtMjI5LjI2OTMzMyAxNjAuNTk3MzMzeiIgIC8+PC9zdmc+\x22); }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item .",[1],"pause { background-image: url(\x22data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDguMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik01MTIgOTI4QzI4Mi4yNSA5MjggOTYgNzQxLjc1IDk2IDUxMlMyODIuMjUgOTYgNTEyIDk2czQxNiAxODYuMjUgNDE2IDQxNi0xODYuMjUgNDE2LTQxNiA0MTZ6TTM4NCAzMDRjLTE3LjY3MyAwLTMyIDE0LjMyNy0zMiAzMnYzODRoOTZjMTcuNjczIDAgMzItMTQuMzI3IDMyLTMyVjMwNGgtOTZ6IG0xOTIgMGMtMTcuNjczIDAtMzIgMTQuMzI3LTMyIDMydjM4NGg5NmMxNy42NzMgMCAzMi0xNC4zMjcgMzItMzJWMzA0aC05NnoiIC8+PC9zdmc+\x22); }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item .",[1],"singer { -webkit-box-flex: 1.6; -webkit-flex: 1.6; -ms-flex: 1.6; flex: 1.6; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; }\n",],undefined,{path:"./components/songlist.wxss"});    
__wxAppCode__['components/songlist.wxml']=$gwx('./components/songlist.wxml');

__wxAppCode__['components/uni-ui/uni-icons/uni-icons.wxss']=setCssToHead(["@font-face { font-family: uniicons; font-weight: normal; font-style: normal; src: url(data:font/truetype;charset\x3dutf-8;base64,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PDgtsDEssAAWILAJI0IgICBGI0ewACsjYTgtsDIssAAWsAMlsAIlRyNHI2GwAFRYLiA8IyEbsAIlsAIlRyNHI2EgsAUlsAQlRyNHI2GwBiWwBSVJsAIlYbABRWMjIFhiGyFZY7ABRWJgIy4jICA8ijgjIVktsDMssAAWILAJQyAuRyNHI2EgYLAgYGawgGIjICA8ijgtsDQsIyAuRrACJUZSWCA8WS6xJAEUKy2wNSwjIC5GsAIlRlBYIDxZLrEkARQrLbA2LCMgLkawAiVGUlggPFkjIC5GsAIlRlBYIDxZLrEkARQrLbA3LLAuKyMgLkawAiVGUlggPFkusSQBFCstsDgssC8riiAgPLAEI0KKOCMgLkawAiVGUlggPFkusSQBFCuwBEMusCQrLbA5LLAAFrAEJbAEJiAuRyNHI2GwBkUrIyA8IC4jOLEkARQrLbA6LLEJBCVCsAAWsAQlsAQlIC5HI0cjYSCwBCNCsAZFKyCwYFBYILBAUVizAiADIBuzAiYDGllCQiMgR7AEQ7CAYmAgsAArIIqKYSCwAkNgZCOwA0NhZFBYsAJDYRuwA0NgWbADJbCAYmGwAiVGYTgjIDwjOBshICBGI0ewACsjYTghWbEkARQrLbA7LLAuKy6xJAEUKy2wPCywLyshIyAgPLAEI0IjOLEkARQrsARDLrAkKy2wPSywABUgR7AAI0KyAAEBFRQTLrAqKi2wPiywABUgR7AAI0KyAAEBFRQTLrAqKi2wPyyxAAEUE7ArKi2wQCywLSotsEEssAAWRSMgLiBGiiNhOLEkARQrLbBCLLAJI0KwQSstsEMssgAAOistsEQssgABOistsEUssgEAOistsEYssgEBOistsEcssgAAOystsEgssgABOystsEkssgEAOystsEossgEBOystsEsssgAANystsEwssgABNystsE0ssgEANystsE4ssgEBNystsE8ssgAAOSstsFAssgABOSstsFEssgEAOSstsFIssgEBOSstsFMssgAAPCstsFQssgABPCstsFUssgEAPCstsFYssgEBPCstsFcssgAAOCstsFgssgABOCstsFkssgEAOCstsFossgEBOCstsFsssDArLrEkARQrLbBcLLAwK7A0Ky2wXSywMCuwNSstsF4ssAAWsDArsDYrLbBfLLAxKy6xJAEUKy2wYCywMSuw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AVkBWgFbAVwBXQd1bmlFMTAwB3VuaUUxMDEHdW5pRTEwMgd1bmlFMTMwB3VuaUUxMzEHdW5pRTEzMgd1bmlFMjAwB3VuaUUyMDEHdW5pRTIwMgd1bmlFMjAzB3VuaUUyMzAHdW5pRTIzMQd1bmlFMjMyB3VuaUUyMzMHdW5pRTI2MAd1bmlFMjYxB3VuaUUyNjIHdW5pRTI2Mwd1bmlFMjY0B3VuaUUzMDAHdW5pRTMwMQd1bmlFMzAyB3VuaUUzMDMHdW5pRTMzMgd1bmlFMzMzB3VuaUUzNjAHdW5pRTM2Mwd1bmlFMzY0B3VuaUU0MDAHdW5pRTQwMQd1bmlFNDAyB3VuaUU0MDMHdW5pRTQwNAd1bmlFNDA1B3VuaUU0MDYHdW5pRTQwNwd1bmlFNDA4B3VuaUU0MDkHdW5pRTQxMAd1bmlFNDExB3VuaUU0MTMHdW5pRTQzNAd1bmlFNDM3B3VuaUU0MzgHdW5pRTQzOQd1bmlFNDQwB3VuaUU0NDEHdW5pRTQ0Mgd1bmlFNDQzB3VuaUU0NjAHdW5pRTQ2MQd1bmlFNDYyB3VuaUU0NjMHdW5pRTQ2NAd1bmlFNDY1B3VuaUU0NjYHdW5pRTQ2OAd1bmlFNDcwB3VuaUU0NzEHdW5pRTQ3Mgd1bmlFNTAwB3VuaUU1MDEHdW5pRTUwMgd1bmlFNTAzB3VuaUU1MDQHdW5pRTUwNQd1bmlFNTA2B3VuaUU1MDcHdW5pRTUwOAd1bmlFNTMwB3VuaUU1MzIHdW5pRTUzNAd1bmlFNTM1B3VuaUU1MzcHdW5pRTU2MAd1bmlFNTYyB3VuaUU1NjMHdW5pRTU2NQd1bmlFNTY3B3VuaUU1NjgHdW5pRTU4MAd1bmlFNTgxB3VuaUU1ODIHdW5pRTU4Mwd1bmlFNTg0B3VuaUU1ODUHdW5pRTU4Ngd1bmlFNTg3B3VuaUU1ODgHdW5pRTU4OQRFdXJvBEV1cm8AAQAB//8ADwABAAAADAAAABYAAAACAAEAAQBfAAEABAAAAAIAAAAAAAAAAQAAAADVpCcIAAAAANJrTZkAAAAA2DhhuQ\x3d\x3d) format(\x27truetype\x27); }\n.",[1],"uni-icon-wrapper { line-height: 1; }\n.",[1],"uni-icon { font-family: uniicons; font-weight: normal; font-style: normal; line-height: 1; display: inline-block; text-decoration: none; -webkit-font-smoothing: antialiased; }\n.",[1],"uni-icon.",[1],"uni-active { color: #007aff; }\n.",[1],"uni-icon-contact:before { content: \x27\\E100\x27; }\n.",[1],"uni-icon-person:before { content: \x27\\E101\x27; }\n.",[1],"uni-icon-personadd:before { content: \x27\\E102\x27; }\n.",[1],"uni-icon-contact-filled:before { content: \x27\\E130\x27; }\n.",[1],"uni-icon-person-filled:before { content: \x27\\E131\x27; }\n.",[1],"uni-icon-personadd-filled:before { content: \x27\\E132\x27; }\n.",[1],"uni-icon-phone:before { content: \x27\\E200\x27; }\n.",[1],"uni-icon-email:before { content: \x27\\E201\x27; }\n.",[1],"uni-icon-chatbubble:before { content: \x27\\E202\x27; }\n.",[1],"uni-icon-chatboxes:before { content: \x27\\E203\x27; }\n.",[1],"uni-icon-phone-filled:before { content: \x27\\E230\x27; }\n.",[1],"uni-icon-email-filled:before { content: \x27\\E231\x27; }\n.",[1],"uni-icon-chatbubble-filled:before { content: \x27\\E232\x27; }\n.",[1],"uni-icon-chatboxes-filled:before { content: \x27\\E233\x27; }\n.",[1],"uni-icon-weibo:before { content: \x27\\E260\x27; }\n.",[1],"uni-icon-weixin:before { content: \x27\\E261\x27; }\n.",[1],"uni-icon-pengyouquan:before { content: \x27\\E262\x27; }\n.",[1],"uni-icon-chat:before { content: \x27\\E263\x27; }\n.",[1],"uni-icon-qq:before { content: \x27\\E264\x27; }\n.",[1],"uni-icon-videocam:before { content: \x27\\E300\x27; }\n.",[1],"uni-icon-camera:before { content: \x27\\E301\x27; }\n.",[1],"uni-icon-mic:before { content: \x27\\E302\x27; }\n.",[1],"uni-icon-location:before { content: \x27\\E303\x27; }\n.",[1],"uni-icon-mic-filled:before, .",[1],"uni-icon-speech:before { content: \x27\\E332\x27; }\n.",[1],"uni-icon-location-filled:before { content: \x27\\E333\x27; }\n.",[1],"uni-icon-micoff:before { content: \x27\\E360\x27; }\n.",[1],"uni-icon-image:before { content: \x27\\E363\x27; }\n.",[1],"uni-icon-map:before { content: \x27\\E364\x27; }\n.",[1],"uni-icon-compose:before { content: \x27\\E400\x27; }\n.",[1],"uni-icon-trash:before { content: \x27\\E401\x27; }\n.",[1],"uni-icon-upload:before { content: \x27\\E402\x27; }\n.",[1],"uni-icon-download:before { content: \x27\\E403\x27; }\n.",[1],"uni-icon-close:before { content: \x27\\E404\x27; }\n.",[1],"uni-icon-redo:before { content: \x27\\E405\x27; }\n.",[1],"uni-icon-undo:before { content: \x27\\E406\x27; }\n.",[1],"uni-icon-refresh:before { content: \x27\\E407\x27; }\n.",[1],"uni-icon-star:before { content: \x27\\E408\x27; }\n.",[1],"uni-icon-plus:before { content: \x27\\E409\x27; }\n.",[1],"uni-icon-minus:before { content: \x27\\E410\x27; }\n.",[1],"uni-icon-circle:before, .",[1],"uni-icon-checkbox:before { content: \x27\\E411\x27; }\n.",[1],"uni-icon-close-filled:before, .",[1],"uni-icon-clear:before { content: \x27\\E434\x27; }\n.",[1],"uni-icon-refresh-filled:before { content: \x27\\E437\x27; }\n.",[1],"uni-icon-star-filled:before { content: \x27\\E438\x27; }\n.",[1],"uni-icon-plus-filled:before { content: \x27\\E439\x27; }\n.",[1],"uni-icon-minus-filled:before { content: \x27\\E440\x27; }\n.",[1],"uni-icon-circle-filled:before { content: \x27\\E441\x27; }\n.",[1],"uni-icon-checkbox-filled:before { content: \x27\\E442\x27; }\n.",[1],"uni-icon-closeempty:before { content: \x27\\E460\x27; }\n.",[1],"uni-icon-refreshempty:before { content: \x27\\E461\x27; }\n.",[1],"uni-icon-reload:before { content: \x27\\E462\x27; }\n.",[1],"uni-icon-starhalf:before { content: \x27\\E463\x27; }\n.",[1],"uni-icon-spinner:before { content: \x27\\E464\x27; }\n.",[1],"uni-icon-spinner-cycle:before { content: \x27\\E465\x27; }\n.",[1],"uni-icon-search:before { content: \x27\\E466\x27; }\n.",[1],"uni-icon-plusempty:before { content: \x27\\E468\x27; }\n.",[1],"uni-icon-forward:before { content: \x27\\E470\x27; }\n.",[1],"uni-icon-back:before, .",[1],"uni-icon-left-nav:before { content: \x27\\E471\x27; }\n.",[1],"uni-icon-checkmarkempty:before { content: \x27\\E472\x27; }\n.",[1],"uni-icon-home:before { content: \x27\\E500\x27; }\n.",[1],"uni-icon-navigate:before { content: \x27\\E501\x27; }\n.",[1],"uni-icon-gear:before { content: \x27\\E502\x27; }\n.",[1],"uni-icon-paperplane:before { content: \x27\\E503\x27; }\n.",[1],"uni-icon-info:before { content: \x27\\E504\x27; }\n.",[1],"uni-icon-help:before { content: \x27\\E505\x27; }\n.",[1],"uni-icon-locked:before { content: \x27\\E506\x27; }\n.",[1],"uni-icon-more:before { content: \x27\\E507\x27; }\n.",[1],"uni-icon-flag:before { content: \x27\\E508\x27; }\n.",[1],"uni-icon-home-filled:before { content: \x27\\E530\x27; }\n.",[1],"uni-icon-gear-filled:before { content: \x27\\E532\x27; }\n.",[1],"uni-icon-info-filled:before { content: \x27\\E534\x27; }\n.",[1],"uni-icon-help-filled:before { content: \x27\\E535\x27; }\n.",[1],"uni-icon-more-filled:before { content: \x27\\E537\x27; }\n.",[1],"uni-icon-settings:before { content: \x27\\E560\x27; }\n.",[1],"uni-icon-list:before { content: \x27\\E562\x27; }\n.",[1],"uni-icon-bars:before { content: \x27\\E563\x27; }\n.",[1],"uni-icon-loop:before { content: \x27\\E565\x27; }\n.",[1],"uni-icon-paperclip:before { content: \x27\\E567\x27; }\n.",[1],"uni-icon-eye:before { content: \x27\\E568\x27; }\n.",[1],"uni-icon-arrowup:before { content: \x27\\E580\x27; }\n.",[1],"uni-icon-arrowdown:before { content: \x27\\E581\x27; }\n.",[1],"uni-icon-arrowleft:before { content: \x27\\E582\x27; }\n.",[1],"uni-icon-arrowright:before { content: \x27\\E583\x27; }\n.",[1],"uni-icon-arrowthinup:before { content: \x27\\E584\x27; }\n.",[1],"uni-icon-arrowthindown:before { content: \x27\\E585\x27; }\n.",[1],"uni-icon-arrowthinleft:before { content: \x27\\E586\x27; }\n.",[1],"uni-icon-arrowthinright:before { content: \x27\\E587\x27; }\n.",[1],"uni-icon-pulldown:before { content: \x27\\E588\x27; }\n.",[1],"uni-icon-closefill:before { content: \x27\\E589\x27; }\n.",[1],"uni-icon-sound:before { content: \x27\\E590\x27; }\n.",[1],"uni-icon-scan:before { content: \x27\\E612\x27; }\n",],undefined,{path:"./components/uni-ui/uni-icons/uni-icons.wxss"});    
__wxAppCode__['components/uni-ui/uni-icons/uni-icons.wxml']=$gwx('./components/uni-ui/uni-icons/uni-icons.wxml');

__wxAppCode__['components/uni-ui/uni-search-bar/uni-search-bar.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"uni-searchbar-form { position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; padding: ",[0,15],"; width: 100%; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"uni-searchbar-form__box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; width: 100%; height: ",[0,64],"; color: #fff; border: solid 1px #c8c7cc; border-radius: ",[0,10]," }\n.",[1],"uni-searchbar-form__box .",[1],"icon-search { color: #fff; line-height: 24px; padding: ",[0,0]," ",[0,10]," ",[0,0]," ",[0,15]," }\n.",[1],"uni-searchbar-form__box .",[1],"search-input { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; font-size: ",[0,28],"; height: ",[0,64],"; line-height: ",[0,64],"; color: #fff }\n.",[1],"uni-searchbar-form__box .",[1],"icon-clear { color: #c8c7cc; line-height: 20px; padding: ",[0,0]," ",[0,15]," ",[0,0]," ",[0,10]," }\n.",[1],"uni-searchbar-form__text { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; width: 100%; height: ",[0,64],"; line-height: ",[0,64],"; text-align: center; color: #c8c7cc; border: solid 1px #c8c7cc; border-radius: ",[0,10],"; display: none }\n.",[1],"uni-searchbar-form__text .",[1],"icon-search { height: ",[0,64],"; line-height: ",[0,64],"; color: #FFFFFF; }\n.",[1],"uni-searchbar-form__text .",[1],"placeholder { display: inline-block; font-size: ",[0,28],"; color: #ccc; margin-left: ",[0,10]," }\n.",[1],"uni-searchbar-form__cancel { padding-left: ",[0,20],"; line-height: ",[0,64],"; color: #fff; font-size: ",[0,30],"; white-space: nowrap }\n.",[1],"uni-searchbar-form.",[1],"hide .",[1],"uni-searchbar-form__box { display: none }\n.",[1],"uni-searchbar-form.",[1],"hide .",[1],"uni-searchbar-form__text { display: block }\n.",[1],"uni-searchbar-form.",[1],"hide .",[1],"uni-searchbar-form__cancel { display: none }\n",],undefined,{path:"./components/uni-ui/uni-search-bar/uni-search-bar.wxss"});    
__wxAppCode__['components/uni-ui/uni-search-bar/uni-search-bar.wxml']=$gwx('./components/uni-ui/uni-search-bar/uni-search-bar.wxml');

__wxAppCode__['pages/comment/comment.wxss']=setCssToHead(["body { background-color: #f8f8f8; }\n.",[1],"uni-padding-wrap { padding: ",[0,30],"; }\nwx-view { font-size: ",[0,28],"; }\n.",[1],"uni-comment { padding: ",[0,5]," 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -webkit-flex-grow: 1; -ms-flex-positive: 1; flex-grow: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"uni-comment-list { -webkit-flex-wrap: nowrap; -ms-flex-wrap: nowrap; flex-wrap: nowrap; padding: ",[0,10]," 0; margin: ",[0,10]," 0; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"uni-comment-face { width: ",[0,70],"; height: ",[0,70],"; border-radius: 100%; margin-right: ",[0,20],"; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; overflow: hidden; }\n.",[1],"uni-comment-face wx-image { width: 100%; border-radius: 100%; }\n.",[1],"uni-comment-body { width: 100%; }\n.",[1],"uni-comment-top { line-height: 1.5em; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"uni-comment-top wx-text { color: #0A98D5; font-size: ",[0,24],"; }\n.",[1],"uni-comment-date { line-height: ",[0,38],"; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; display: -webkit-box !important; display: -webkit-flex !important; display: -ms-flexbox !important; display: flex !important; -webkit-box-flex: 1; -webkit-flex-grow: 1; -ms-flex-positive: 1; flex-grow: 1; }\n.",[1],"uni-comment-date wx-view { color: #666666; font-size: ",[0,24],"; line-height: ",[0,38],"; }\n.",[1],"uni-comment-content { line-height: 1.6em; font-size: ",[0,28],"; padding: ",[0,8]," 0; }\n.",[1],"uni-comment-replay-btn { background: #FFF; font-size: ",[0,24],"; line-height: ",[0,28],"; padding: ",[0,5]," ",[0,20],"; border-radius: ",[0,30],"; color: #333 !important; margin: 0 ",[0,10],"; }\n",],undefined,{path:"./pages/comment/comment.wxss"});    
__wxAppCode__['pages/comment/comment.wxml']=$gwx('./pages/comment/comment.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead(["body { height: 100vh; position: relative; }\n.",[1],"bg { -webkit-filter: blur(",[0,22],"); filter: blur(",[0,22],"); position: absolute; top: 0; left: 0; bottom: 0; right: 0; z-index: -3; -webkit-transform: translateZ(0); transform: translateZ(0); background-repeat: no-repeat; background-position: center; background-attachment: fixed; background-size: 150% 150%; -webkit-transition: all .8s; -o-transition: all .8s; transition: all .8s; }\n.",[1],"currimg { width: 0; height: 0; position: absolute; top: 0; }\n.",[1],"active { border-bottom: ",[0,7]," solid #FFFFFF; }\n.",[1],"mask { position: absolute; top: 0; left: 0; bottom: 0; right: 0; z-index: -1; background-color: rgba(0, 0, 0, .4) }\n.",[1],"content { height: 100vh; width: 100%; padding-top: 4vh; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"tab { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; font-size: ",[0,30],"; height: 6vh; color: white; }\n.",[1],"tab-item { line-height: 6vh }\n.",[1],"bottom { width: 100%; }\n.",[1],"page-swich { width: 100%; height: 70vh; padding: 0 ",[0,10],"; -webkit-box-sizing: border-box; box-sizing: border-box; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
