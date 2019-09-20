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
Z([3,'mov-area'])
Z([3,'__e'])
Z(z[4])
Z(z[4])
Z([3,'control-ball'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'horizontal'])
Z([[7],[3,'ballmove']])
Z([[6],[[6],[[7],[3,'$store']],[3,'getters']],[3,'progress']])
Z([3,'3'])
Z([3,'control'])
Z([3,'loop-type'])
Z(z[4])
Z([3,'pre'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'premusic']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[4])
Z([[4],[[5],[[7],[3,'stoporplay']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handleMusic']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[4])
Z([3,'next'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'nextmusic']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'comment'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'header'])
Z([3,'简单音乐播放器'])
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
Z([3,'__e'])
Z(z[6])
Z(z[6])
Z([3,'scroll-Y songs-list'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'scrolltoupper']],[[4],[[5],[[4],[[5],[[5],[1,'upper']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'lower']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'scrollTop']])
Z([3,'true'])
Z([3,'idx'])
Z(z[2])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[13])
Z([3,'song-item'])
Z([3,'song-num'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[2,'+'],[[7],[3,'idx']],[1,1]]],[1,'']]])
Z([3,'song-name'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'name']]],[1,'']]])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'m0']]])
Z(z[6])
Z([3,'song play'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'playsong']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'hotsong']],[1,'']],[[7],[3,'idx']]],[1,'id']]]]]]]]]]]]]]])
Z([[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'id']])
Z(z[6])
Z([3,'song pause'])
Z(z[25])
Z(z[26])
Z([3,'singer'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'singer']]],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'my'])
Z([3,'123'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'recommend'])
Z([3,'321'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'search'])
Z([3,'789'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-flex uni-column content'])
Z([3,'flex-item'])
Z([3,'__l'])
Z([3,'1'])
Z([3,'flex-item tab'])
Z([3,'__e'])
Z([3,'tab-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'switchPage']],[[4],[[5],[1,'正在']]]]]]]]]]])
Z([3,'正在热播'])
Z(z[5])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'switchPage']],[[4],[[5],[1,'推荐']]]]]]]]]]])
Z([3,'推荐'])
Z(z[5])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'switchPage']],[[4],[[5],[1,'搜索']]]]]]]]]]])
Z([3,'搜索'])
Z(z[5])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'switchPage']],[[4],[[5],[1,'我的']]]]]]]]]]])
Z([3,'我听过的'])
Z([3,'flex-item page-swich'])
Z([[2,'!'],[[2,'=='],[[7],[3,'current']],[1,'正在']]])
Z(z[2])
Z([[7],[3,'songList']])
Z([3,'2'])
Z([[2,'!'],[[2,'=='],[[7],[3,'current']],[1,'推荐']]])
Z(z[2])
Z([3,'3'])
Z([[2,'!'],[[2,'=='],[[7],[3,'current']],[1,'搜索']]])
Z(z[2])
Z([3,'4'])
Z([[2,'!'],[[2,'=='],[[7],[3,'current']],[1,'我的']]])
Z(z[2])
Z([3,'5'])
Z([3,'flex-item bottom'])
Z(z[2])
Z(z[24])
Z([3,'6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/bmusic.wxml','./components/header.wxml','./components/hot.wxml','./components/my.wxml','./components/recommend.wxml','./components/search.wxml','./pages/index/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',1,e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',2,e,s,gg)
var fE=_n('movable-area')
_rz(z,fE,'class',3,e,s,gg)
var cF=_mz(z,'movable-view',['bindtouchend',4,'bindtouchmove',1,'bindtouchstart',2,'class',3,'data-event-opts',4,'direction',5,'x',6],[],e,s,gg)
_(fE,cF)
_(oD,fE)
var hG=_mz(z,'progress',['percent',11,'strokeWidth',1],[],e,s,gg)
_(oD,hG)
_(xC,oD)
_(oB,xC)
var oH=_n('view')
_rz(z,oH,'class',13,e,s,gg)
var cI=_n('view')
_rz(z,cI,'class',14,e,s,gg)
_(oH,cI)
var oJ=_mz(z,'view',['bindtap',15,'class',1,'data-event-opts',2],[],e,s,gg)
_(oH,oJ)
var lK=_mz(z,'view',['bindtap',18,'class',1,'data-event-opts',2],[],e,s,gg)
_(oH,lK)
var aL=_mz(z,'view',['bindtap',21,'class',1,'data-event-opts',2],[],e,s,gg)
_(oH,aL)
var tM=_n('view')
_rz(z,tM,'class',24,e,s,gg)
_(oH,tM)
_(oB,oH)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var bO=_n('view')
_rz(z,bO,'class',0,e,s,gg)
var oP=_oz(z,1,e,s,gg)
_(bO,oP)
_(r,bO)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oR=_n('view')
_rz(z,oR,'class',0,e,s,gg)
var fS=_n('view')
_rz(z,fS,'class',1,e,s,gg)
var cT=_n('view')
_rz(z,cT,'class',2,e,s,gg)
var hU=_oz(z,3,e,s,gg)
_(cT,hU)
_(fS,cT)
var oV=_n('view')
_rz(z,oV,'class',4,e,s,gg)
var cW=_oz(z,5,e,s,gg)
_(oV,cW)
_(fS,oV)
_(oR,fS)
var oX=_mz(z,'scroll-view',['bindscroll',6,'bindscrolltolower',1,'bindscrolltoupper',2,'class',3,'data-event-opts',4,'scrollTop',5,'scrollY',6],[],e,s,gg)
var lY=_v()
_(oX,lY)
var aZ=function(e2,t1,b3,gg){
var x5=_n('view')
_rz(z,x5,'class',17,e2,t1,gg)
var f7=_n('view')
_rz(z,f7,'class',18,e2,t1,gg)
var c8=_oz(z,19,e2,t1,gg)
_(f7,c8)
_(x5,f7)
var h9=_n('view')
_rz(z,h9,'class',20,e2,t1,gg)
var o0=_oz(z,21,e2,t1,gg)
_(h9,o0)
_(x5,h9)
var o6=_v()
_(x5,o6)
if(_oz(z,22,e2,t1,gg)){o6.wxVkey=1
var cAB=_mz(z,'view',['bindtap',23,'class',1,'data-event-opts',2,'data-id',3],[],e2,t1,gg)
_(o6,cAB)
}
else{o6.wxVkey=2
var oBB=_mz(z,'view',['bindtap',27,'class',1,'data-event-opts',2,'data-id',3],[],e2,t1,gg)
_(o6,oBB)
}
var lCB=_n('view')
_rz(z,lCB,'class',31,e2,t1,gg)
var aDB=_oz(z,32,e2,t1,gg)
_(lCB,aDB)
_(x5,lCB)
o6.wxXCkey=1
_(b3,x5)
return b3
}
lY.wxXCkey=2
_2z(z,15,aZ,e,s,gg,lY,'item','idx','idx')
_(oR,oX)
_(r,oR)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var eFB=_n('view')
_rz(z,eFB,'class',0,e,s,gg)
var bGB=_oz(z,1,e,s,gg)
_(eFB,bGB)
_(r,eFB)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var xIB=_n('view')
_rz(z,xIB,'class',0,e,s,gg)
var oJB=_oz(z,1,e,s,gg)
_(xIB,oJB)
_(r,xIB)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var cLB=_n('view')
_rz(z,cLB,'class',0,e,s,gg)
var hMB=_oz(z,1,e,s,gg)
_(cLB,hMB)
_(r,cLB)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var cOB=_n('view')
_rz(z,cOB,'class',0,e,s,gg)
var oPB=_n('view')
_rz(z,oPB,'class',1,e,s,gg)
var lQB=_mz(z,'mheader',['bind:__l',2,'vueId',1],[],e,s,gg)
_(oPB,lQB)
_(cOB,oPB)
var aRB=_n('view')
_rz(z,aRB,'class',4,e,s,gg)
var tSB=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2],[],e,s,gg)
var eTB=_oz(z,8,e,s,gg)
_(tSB,eTB)
_(aRB,tSB)
var bUB=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],e,s,gg)
var oVB=_oz(z,12,e,s,gg)
_(bUB,oVB)
_(aRB,bUB)
var xWB=_mz(z,'view',['bindtap',13,'class',1,'data-event-opts',2],[],e,s,gg)
var oXB=_oz(z,16,e,s,gg)
_(xWB,oXB)
_(aRB,xWB)
var fYB=_mz(z,'view',['bindtap',17,'class',1,'data-event-opts',2],[],e,s,gg)
var cZB=_oz(z,20,e,s,gg)
_(fYB,cZB)
_(aRB,fYB)
_(cOB,aRB)
var h1B=_n('view')
_rz(z,h1B,'class',21,e,s,gg)
var o2B=_n('view')
_rz(z,o2B,'hidden',22,e,s,gg)
var c3B=_mz(z,'hot',['bind:__l',23,'hotsong',1,'vueId',2],[],e,s,gg)
_(o2B,c3B)
_(h1B,o2B)
var o4B=_n('view')
_rz(z,o4B,'hidden',26,e,s,gg)
var l5B=_mz(z,'recommend',['bind:__l',27,'vueId',1],[],e,s,gg)
_(o4B,l5B)
_(h1B,o4B)
var a6B=_n('view')
_rz(z,a6B,'hidden',29,e,s,gg)
var t7B=_mz(z,'search',['bind:__l',30,'vueId',1],[],e,s,gg)
_(a6B,t7B)
_(h1B,a6B)
var e8B=_n('view')
_rz(z,e8B,'hidden',32,e,s,gg)
var b9B=_mz(z,'my',['bind:__l',33,'vueId',1],[],e,s,gg)
_(e8B,b9B)
_(h1B,e8B)
_(cOB,h1B)
var o0B=_n('view')
_rz(z,o0B,'class',35,e,s,gg)
var xAC=_mz(z,'bmusic',['bind:__l',36,'songList',1,'vueId',2],[],e,s,gg)
_(o0B,xAC)
_(cOB,o0B)
_(r,cOB)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
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

__wxAppCode__['components/bmusic.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"m_container { width: 100%; height: 12vh; background-color: #000000; }\n.",[1],"m_container .",[1],"progress { width: 100vw; height: ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"m_container .",[1],"progress .",[1],"progress-box { position: relative; width: 90%; }\n.",[1],"m_container .",[1],"progress .",[1],"progress-box .",[1],"mov-area { width: 100%; height: 3px; position: absolute; left: 0; top: 0; }\n.",[1],"m_container .",[1],"progress .",[1],"progress-box .",[1],"control-ball { position: absolute; width: ",[0,30],"; height: ",[0,30],"; border-radius: 50%; background-color: #FFFFFF; top: ",[0,-11],"; left: ",[0,-15],"; }\n.",[1],"m_container .",[1],"control { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; height: ",[0,110],"; }\n.",[1],"m_container .",[1],"control .",[1],"loop-type { width: ",[0,70],"; height: ",[0,70],"; background-image: url(\x22data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDguMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xMzcuNyA1NzIuOWMtMy4yLTUuNi0xMS4zLTUuNy0xNC42LTAuMWwtMTcuOCAzMC42TDg3LjUgNjM0Yy0zLjMgNS42IDAuOCAxMi43IDcuMyAxMi43bDM1LjQgMC4xIDM1LjQgMC4xYzYuNSAwIDEwLjYtNyA3LjQtMTIuNmwtMTcuNi0zMC44LTE3LjctMzAuNnpNODYwLjIgNDczLjhjLTMuMiA1LjYtMTEuMyA1LjctMTQuNiAwLjFsLTE3LjgtMzAuNi0xNy44LTMwLjdjLTMuMy01LjYgMC44LTEyLjcgNy4zLTEyLjdsMzUuNC0wLjEgMzUuNC0wLjFjNi41IDAgMTAuNiA3IDcuNCAxMi42bC0xNy42IDMwLjgtMTcuNyAzMC43eiIgIC8+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTg1NiA0MjUuOWMtNiAwLTExLjUtMy44LTEzLjQtOS44LTQ4LjItMTU0LjMtMTk1LTI1OS45LTM1Ni44LTI1Ni43LTE1Ny43IDMuMS0yOTUuMiAxMDYuMy0zNDIuMyAyNTYuNy0yLjMgNy40LTEwLjIgMTEuNS0xNy41IDkuMi03LjQtMi4zLTExLjUtMTAuMi05LjItMTcuNSAxMi4yLTM4LjkgMzAuMy03NS42IDUzLjktMTA5LjEgMjMuMy0zMy4xIDUxLjQtNjIuMyA4My42LTg2LjggNjYuOC01MSAxNDYuNy03OC44IDIzMS04MC41IDQzLjktMC45IDg3LjEgNS40IDEyOC41IDE4LjcgNDAgMTIuOSA3Ny42IDMyIDExMS43IDU2LjkgMzMuNyAyNC42IDYzLjIgNTQuMyA4Ny42IDg4LjIgMjQuOCAzNC40IDQzLjcgNzIuMiA1Ni4zIDExMi41IDIuMyA3LjQtMS44IDE1LjItOS4yIDE3LjUtMS40IDAuNS0yLjggMC43LTQuMiAwLjd6TTQ5MyA5MTkuN2MtNDEuMSAwLTgxLjYtNi4zLTEyMC41LTE4LjgtNDAtMTIuOS03Ny42LTMyLTExMS43LTU2LjktMzMuNy0yNC42LTYzLjItNTQuMy04Ny42LTg4LjItMjQuOC0zNC40LTQzLjctNzIuMi01Ni4zLTExMi41LTIuMy03LjQgMS44LTE1LjIgOS4yLTE3LjUgNy40LTIuMyAxNS4yIDEuOCAxNy41IDkuMiA0OC4yIDE1NC4zIDE5NSAyNTkuOSAzNTYuOCAyNTYuNyAxNTcuNy0zLjEgMjk1LjItMTA2LjMgMzQyLjMtMjU2LjcgMi4zLTcuNCAxMC4yLTExLjUgMTcuNS05LjIgNy40IDIuMyAxMS41IDEwLjIgOS4yIDE3LjVhMzkzLjcyIDM5My43MiAwIDAgMS01My45IDEwOS4xYy0yMy4zIDMzLjEtNTEuNCA2Mi4zLTgzLjYgODYuOC02Ni44IDUxLTE0Ni43IDc4LjgtMjMxIDgwLjUtMi42LTAuMS01LjMgMC03LjkgMHoiICAvPjwvc3ZnPg\x3d\x3d\x22); background-size: cover; }\n.",[1],"m_container .",[1],"control .",[1],"pre { width: ",[0,70],"; height: ",[0,70],"; background-image: url(\x22data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDguMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0zNjQuMzAyMDgzIDQ2NS42MDI4MTlMNjg3Ljk1NDM2NSAyMTguNTg4Mjk0YzM4LjQxNjQxNC0yOS4zMjc1MzQgOTMuNzkxMzkzLTEuOTI5MDM5IDkzLjc5MTM5MiA0Ni4zOTYyNzd2NDk0LjAyOTA1MWMwIDQ4LjMyNTMxNi01NS4zNzQ5NzkgNzUuNzI1NjE3LTkzLjc5MTM5MiA0Ni4zOTgwODRMMzY0LjMwMjA4MyA1NTguMzk3MTgxYy0zMC42MDA5MTYtMjMuMzU3OTg5LTMwLjYwMDkxNi02OS40MzYzNzIgMC05Mi43OTQzNjJ6TTIzOC45NDUyNTQgNzgwLjc5ODM5N1Y0NTEuNjg0MTE3di0xNjQuNTYyNTU5YzAtMTkuNjI4MTUyLTUuOTA0NTIxLTYwLjQ3NTczMyAxNy4wNTc5MDctNzUuODQxMjE1IDI1LjUyMzY0Mi0xNy4wNjg3NDQgNTkuNzQ3ODI4IDEuMjEwMTY1IDU5Ljc0NzgyOCAzMS45MTk0NTR2NDkzLjY3NjgzOWMwIDE5LjYyODE1MiA1LjkxNTM1OCA2MC40NzM5MjctMTcuMDQ3MDY5IDc1Ljg0MTIxNS0yNS41MzQ0OCAxNy4wNjg3NDQtNTkuNzU4NjY2LTEuMjExOTcxLTU5Ljc1ODY2Ni0zMS45MTk0NTR6IiAgLz48L3N2Zz4\x3d\x22); background-size: cover; }\n.",[1],"m_container .",[1],"control .",[1],"stop { width: ",[0,100],"; height: ",[0,100],"; background-image: url(\x22data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDguMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik01MTIgOTI4QzI4Mi4yNSA5MjggOTYgNzQxLjc1IDk2IDUxMlMyODIuMjUgOTYgNTEyIDk2czQxNiAxODYuMjUgNDE2IDQxNi0xODYuMjUgNDE2LTQxNiA0MTZ6TTM4NCAzMDRjLTE3LjY3MyAwLTMyIDE0LjMyNy0zMiAzMnYzODRoOTZjMTcuNjczIDAgMzItMTQuMzI3IDMyLTMyVjMwNGgtOTZ6IG0xOTIgMGMtMTcuNjczIDAtMzIgMTQuMzI3LTMyIDMydjM4NGg5NmMxNy42NzMgMCAzMi0xNC4zMjcgMzItMzJWMzA0aC05NnoiIC8+PC9zdmc+\x22); background-size: cover; }\n.",[1],"m_container .",[1],"control .",[1],"play { width: ",[0,100],"; height: ",[0,100],"; background-image: url(\x22data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDguMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik02NzUuMzI4IDExNy43MTczMzNBNDI1LjQyOTMzMyA0MjUuNDI5MzMzIDAgMCAwIDUxMiA4NS4zMzMzMzNDMjc2LjM1MiA4NS4zMzMzMzMgODUuMzMzMzMzIDI3Ni4zNTIgODUuMzMzMzMzIDUxMnMxOTEuMDE4NjY3IDQyNi42NjY2NjcgNDI2LjY2NjY2NyA0MjYuNjY2NjY3IDQyNi42NjY2NjctMTkxLjAxODY2NyA0MjYuNjY2NjY3LTQyNi42NjY2NjdjMC01Ni43NDY2NjctMTEuMDkzMzMzLTExMi0zMi4zODQtMTYzLjMyOGEyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAwLTM5LjQwMjY2NyAxNi4zNDEzMzNBMzgyLjc2MjY2NyAzODIuNzYyNjY3IDAgMCAxIDg5NiA1MTJjMCAyMTIuMDc0NjY3LTE3MS45MjUzMzMgMzg0LTM4NCAzODRTMTI4IDcyNC4wNzQ2NjcgMTI4IDUxMiAyOTkuOTI1MzMzIDEyOCA1MTIgMTI4YzUxLjExNDY2NyAwIDEwMC44IDkuOTg0IDE0Ni45ODY2NjcgMjkuMTJhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMCAxNi4zNDEzMzMtMzkuNDAyNjY3ek00NTYuNzA0IDMwNS45MkM0MzIuNzA0IDI4OS4xNTIgNDA1LjMzMzMzMyAzMDMuMDgyNjY3IDQwNS4zMzMzMzMgMzMxLjc5NzMzM3YzNjAuNTMzMzM0YzAgMjguNTg2NjY3IDI3LjU0MTMzMyA0Mi41Mzg2NjcgNTEuMzcwNjY3IDI1Ljg1NmwyNTIuMzUyLTE3Ni43NjhjMjEuNzYtMTUuMjUzMzMzIDIxLjYzMi00My41NDEzMzMgMC01OC43MDkzMzRsLTI1Mi4zNzMzMzMtMTc2Ljc2OHogbS04LjU5NzMzMyAzNjYuNzJWMzUxLjQ2NjY2N2wyMjkuMjY5MzMzIDE2MC41OTczMzMtMjI5LjI2OTMzMyAxNjAuNTk3MzMzeiIgIC8+PC9zdmc+\x22); background-size: cover; }\n.",[1],"m_container .",[1],"control .",[1],"next { width: ",[0,70],"; height: ",[0,70],"; background-image: url(\x22data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDguMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik02NTUuNzA2MTc5IDQ2NS42MDI4MTlMMzMyLjA1Mzg5NyAyMTguNTg4Mjk0Yy0zOC40MTQ2MDgtMjkuMzI3NTM0LTkzLjc5MTM5My0xLjkyOTAzOS05My43OTEzOTIgNDYuMzk2Mjc3djQ5NC4wMjkwNTFjMCA0OC4zMjUzMTYgNTUuMzc2Nzg1IDc1LjcyNTYxNyA5My43OTEzOTIgNDYuMzk4MDg0bDMyMy42NTIyODItMjQ3LjAxNDUyNWMzMC42MDI3MjItMjMuMzU3OTg5IDMwLjYwMjcyMi02OS40MzYzNzIgMC05Mi43OTQzNjJ6TTc4MS4wNjQ4MTQgNzgwLjc5ODM5N1Y0NTEuNjg0MTE3di0xNjQuNTYyNTU5YzAtMTkuNjI4MTUyIDUuOTA0NTIxLTYwLjQ3NTczMy0xNy4wNTc5MDctNzUuODQxMjE1LTI1LjUyMzY0Mi0xNy4wNjg3NDQtNTkuNzQ3ODI4IDEuMjEwMTY1LTU5Ljc0NzgyOCAzMS45MTk0NTR2NDkzLjY3NjgzOWMwIDE5LjYyODE1Mi01LjkxNTM1OCA2MC40NzM5MjcgMTcuMDQ3MDY5IDc1Ljg0MTIxNSAyNS41MzI2NzMgMTcuMDY4NzQ0IDU5Ljc1ODY2Ni0xLjIxMTk3MSA1OS43NTg2NjYtMzEuOTE5NDU0eiIgIC8+PC9zdmc+\x22); background-size: cover; }\n.",[1],"m_container .",[1],"control .",[1],"comment { width: ",[0,70],"; height: ",[0,70],"; background-image: url(\x22data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDguMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik01MTEuOTk5NDg4IDg0Ny44ODI4NjNjLTI4LjczNDU5MiAwLTU2LjcyOTMwMy0yLjYwNDMxNC04My45Njk4MDctNy4wOTk2OThMMjMxLjIzMjY3MyA5NjAuMTg1NjAyIDIzMS4yMzI2NzMgNzYxLjQwNzM1QzEyOC42MTg0ODYgNjg5LjM1NTMzNyA2Mi43NzIxNzQgNTc4Ljg4OTQzMyA2Mi43NzIxNzQgNDU0LjgyNTgzNmMwLTIxNy4wNzkwNiAyMDEuMTI5ODY0LTM5My4wNTgwNTEgNDQ5LjIyODMzOC0zOTMuMDU4MDUxIDI0OC4wODQxNDYgMCA0NDkuMjI4MzM4IDE3NS45ODAwMTQgNDQ5LjIyODMzOCAzOTMuMDU4MDUxQzk2MS4yMjc4MjYgNjcxLjkxNzE3NiA3NjAuMDgzNjM1IDg0Ny44ODI4NjMgNTExLjk5OTQ4OCA4NDcuODgyODYzek01MTEuOTk5NDg4IDExNy45MTc2MmMtMjE3LjA4NjkzMiAwLTM5My4wNzQxNTYgMTUwLjg1MTcwNy0zOTMuMDc0MTU2IDMzNi45MDcxOTMgMCAxMTQuMTY2MTc5IDY2LjQyMTQzNCAyMTQuODk4Mzk1IDE2Ny43NjE1NTIgMjc1LjgyMDkyOWwtMS43NjgzNDYgMTMwLjIzNDEzMyAxMzIuMTcxNTUxLTc5LjQ1NTYzM2MzMC40NDg3IDYuNDk3OTk0IDYyLjExNzIzMSAxMC4zMDg3ODcgOTQuOTEwNDIyIDEwLjMwODc4NyAyMTcuMTAxMjU4IDAgMzkzLjA3MzEzMi0xNTAuODI1MTAxIDM5My4wNzMxMzItMzM2LjkwNzE5M0M5MDUuMDczNjQ0IDI2OC43NjkzMjYgNzI5LjEwMTc3IDExNy45MTc2MiA1MTEuOTk5NDg4IDExNy45MTc2MnpNNzM2LjYxNDE2OSA1MTAuOTc2Njk0Yy0zMS4wMTE1NDIgMC01Ni4xNTQxODItMjUuMTI4MzA3LTU2LjE1NDE4Mi01Ni4xNTA4NTggMC0zMS4wMTAyNzEgMjUuMTQyNjQtNTYuMTUxODgxIDU2LjE1NDE4Mi01Ni4xNTE4ODFzNTYuMTU0MTgyIDI1LjE0MTYxIDU2LjE1NDE4MiA1Ni4xNTE4ODFDNzkyLjc2ODM1MSA0ODUuODQ4Mzg3IDc2Ny42MjQ2ODcgNTEwLjk3NjY5NCA3MzYuNjE0MTY5IDUxMC45NzY2OTR6TTUxMS45OTk0ODggNTEwLjk3NjY5NGMtMzEuMDEwNTE4IDAtNTYuMTUzMTU4LTI1LjEyODMwNy01Ni4xNTMxNTgtNTYuMTUwODU4IDAtMzEuMDEwMjcxIDI1LjE0MjY0LTU2LjE1MTg4MSA1Ni4xNTMxNTgtNTYuMTUxODgxIDMxLjAxMTU0MiAwIDU2LjE1NDE4MiAyNS4xNDE2MSA1Ni4xNTQxODIgNTYuMTUxODgxQzU2OC4xNTM2NyA0ODUuODQ4Mzg3IDU0My4wMTEwMyA1MTAuOTc2Njk0IDUxMS45OTk0ODggNTEwLjk3NjY5NHpNMjg3LjM4NTgzMSA1MTAuOTc2Njk0Yy0zMS4wMTA1MTggMC01Ni4xNTMxNTgtMjUuMTI4MzA3LTU2LjE1MzE1OC01Ni4xNTA4NTggMC0zMS4wMTAyNzEgMjUuMTQyNjQtNTYuMTUxODgxIDU2LjE1MzE1OC01Ni4xNTE4ODFzNTYuMTUzMTU4IDI1LjE0MTYxIDU2LjE1MzE1OCA1Ni4xNTE4ODFDMzQzLjUzODk5IDQ4NS44NDgzODcgMzE4LjM5NjM1IDUxMC45NzY2OTQgMjg3LjM4NTgzMSA1MTAuOTc2Njk0eiIgLz48L3N2Zz4\x3d\x22); background-size: cover; }\n",],undefined,{path:"./components/bmusic.wxss"});    
__wxAppCode__['components/bmusic.wxml']=$gwx('./components/bmusic.wxml');

__wxAppCode__['components/header.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"header { color: white; text-align: center; background: black; height: 8vh; font-size: ",[0,40],"; line-height: 8vh; }\n",],undefined,{path:"./components/header.wxss"});    
__wxAppCode__['components/header.wxml']=$gwx('./components/header.wxml');

__wxAppCode__['components/hot.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"hot { width: 100%; height: 100%; color: white; font-size: ",[0,30],"; }\n.",[1],"hot .",[1],"hot-head { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; height: 7vh; border-bottom: ",[0,1]," solid #ccc; }\n.",[1],"hot .",[1],"hot-head .",[1],"item { text-align: center; width: 50%; line-height: 7vh; }\n.",[1],"hot .",[1],"songs-list { color: rgba(255, 255, 255, 0.6); height: 67vh; }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item { height: 6.5vh; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; line-height: ",[0,100],"; border-bottom: ",[0,1]," solid #ccc; }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item .",[1],"song-num { -webkit-box-flex: 1.1; -webkit-flex: 1.1; -ms-flex: 1.1; flex: 1.1; text-align: center; }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item .",[1],"song-name { -webkit-box-flex: 2; -webkit-flex: 2; -ms-flex: 2; flex: 2; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item .",[1],"song { width: ",[0,70],"; height: ",[0,70],"; background-size: cover; background-repeat: no-repeat; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; margin-right: ",[0,10],"; }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item .",[1],"play { background-image: url(\x22data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDguMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik02NzUuMzI4IDExNy43MTczMzNBNDI1LjQyOTMzMyA0MjUuNDI5MzMzIDAgMCAwIDUxMiA4NS4zMzMzMzNDMjc2LjM1MiA4NS4zMzMzMzMgODUuMzMzMzMzIDI3Ni4zNTIgODUuMzMzMzMzIDUxMnMxOTEuMDE4NjY3IDQyNi42NjY2NjcgNDI2LjY2NjY2NyA0MjYuNjY2NjY3IDQyNi42NjY2NjctMTkxLjAxODY2NyA0MjYuNjY2NjY3LTQyNi42NjY2NjdjMC01Ni43NDY2NjctMTEuMDkzMzMzLTExMi0zMi4zODQtMTYzLjMyOGEyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAwLTM5LjQwMjY2NyAxNi4zNDEzMzNBMzgyLjc2MjY2NyAzODIuNzYyNjY3IDAgMCAxIDg5NiA1MTJjMCAyMTIuMDc0NjY3LTE3MS45MjUzMzMgMzg0LTM4NCAzODRTMTI4IDcyNC4wNzQ2NjcgMTI4IDUxMiAyOTkuOTI1MzMzIDEyOCA1MTIgMTI4YzUxLjExNDY2NyAwIDEwMC44IDkuOTg0IDE0Ni45ODY2NjcgMjkuMTJhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMCAxNi4zNDEzMzMtMzkuNDAyNjY3ek00NTYuNzA0IDMwNS45MkM0MzIuNzA0IDI4OS4xNTIgNDA1LjMzMzMzMyAzMDMuMDgyNjY3IDQwNS4zMzMzMzMgMzMxLjc5NzMzM3YzNjAuNTMzMzM0YzAgMjguNTg2NjY3IDI3LjU0MTMzMyA0Mi41Mzg2NjcgNTEuMzcwNjY3IDI1Ljg1NmwyNTIuMzUyLTE3Ni43NjhjMjEuNzYtMTUuMjUzMzMzIDIxLjYzMi00My41NDEzMzMgMC01OC43MDkzMzRsLTI1Mi4zNzMzMzMtMTc2Ljc2OHogbS04LjU5NzMzMyAzNjYuNzJWMzUxLjQ2NjY2N2wyMjkuMjY5MzMzIDE2MC41OTczMzMtMjI5LjI2OTMzMyAxNjAuNTk3MzMzeiIgIC8+PC9zdmc+\x22); }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item .",[1],"pause { background-image: url(\x22data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDguMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik01MTIgOTI4QzI4Mi4yNSA5MjggOTYgNzQxLjc1IDk2IDUxMlMyODIuMjUgOTYgNTEyIDk2czQxNiAxODYuMjUgNDE2IDQxNi0xODYuMjUgNDE2LTQxNiA0MTZ6TTM4NCAzMDRjLTE3LjY3MyAwLTMyIDE0LjMyNy0zMiAzMnYzODRoOTZjMTcuNjczIDAgMzItMTQuMzI3IDMyLTMyVjMwNGgtOTZ6IG0xOTIgMGMtMTcuNjczIDAtMzIgMTQuMzI3LTMyIDMydjM4NGg5NmMxNy42NzMgMCAzMi0xNC4zMjcgMzItMzJWMzA0aC05NnoiIC8+PC9zdmc+\x22); }\n.",[1],"hot .",[1],"songs-list .",[1],"song-item .",[1],"singer { -webkit-box-flex: 1.6; -webkit-flex: 1.6; -ms-flex: 1.6; flex: 1.6; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; }\n",],undefined,{path:"./components/hot.wxss"});    
__wxAppCode__['components/hot.wxml']=$gwx('./components/hot.wxml');

__wxAppCode__['components/my.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"my { width: 100%; height: 100%; padding: ",[0,10],"; -webkit-box-sizing: border-box; box-sizing: border-box; color: white; }\n",],undefined,{path:"./components/my.wxss"});    
__wxAppCode__['components/my.wxml']=$gwx('./components/my.wxml');

__wxAppCode__['components/recommend.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"recommend { width: 100%; background-color: yellow; height: 100%; padding: ",[0,10],"; -webkit-box-sizing: border-box; box-sizing: border-box; color: white; }\n",],undefined,{path:"./components/recommend.wxss"});    
__wxAppCode__['components/recommend.wxml']=$gwx('./components/recommend.wxml');

__wxAppCode__['components/search.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"search { width: 100%; background-color: blue; height: 100%; padding: ",[0,10],"; -webkit-box-sizing: border-box; box-sizing: border-box; color: white; }\n",],undefined,{path:"./components/search.wxss"});    
__wxAppCode__['components/search.wxml']=$gwx('./components/search.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead(["body { height: 100vh; background-color: rgba(0, 0, 0, .3); }\n.",[1],"content { background-color: rgba(0, 0, 0, .3); height: 100vh; width: 100%; }\n.",[1],"tab { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; font-size: ",[0,30],"; height: 6vh; background-color: white; }\n.",[1],"tab-item { line-height: 6vh; }\n.",[1],"bottom { width: 100%; }\n.",[1],"page-swich { width: 100%; height: 74vh; padding:0 ",[0,10],"; -webkit-box-sizing: border-box; box-sizing: border-box; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
