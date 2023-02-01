parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"VY3I":[function(require,module,exports) {
var o=Math.floor,r=Math.random;function t(t,a){return t+o(r()*(a-t+1))}module.exports=t;
},{}],"LIpy":[function(require,module,exports) {
function e(e,n){return e===n||e!=e&&n!=n}module.exports=e;
},{}],"j3D9":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3],t="object"==typeof e&&e&&e.Object===Object&&e;module.exports=t;
},{}],"MIhM":[function(require,module,exports) {
var e=require("./_freeGlobal"),t="object"==typeof self&&self&&self.Object===Object&&self,l=e||t||Function("return this")();module.exports=l;
},{"./_freeGlobal":"j3D9"}],"wppe":[function(require,module,exports) {
var o=require("./_root"),r=o.Symbol;module.exports=r;
},{"./_root":"MIhM"}],"uiOY":[function(require,module,exports) {
var r=require("./_Symbol"),t=Object.prototype,e=t.hasOwnProperty,o=t.toString,a=r?r.toStringTag:void 0;function l(r){var t=e.call(r,a),l=r[a];try{r[a]=void 0;var c=!0}catch(n){}var i=o.call(r);return c&&(t?r[a]=l:delete r[a]),i}module.exports=l;
},{"./_Symbol":"wppe"}],"lPmd":[function(require,module,exports) {
var t=Object.prototype,o=t.toString;function r(t){return o.call(t)}module.exports=r;
},{}],"e5TX":[function(require,module,exports) {
var e=require("./_Symbol"),r=require("./_getRawTag"),o=require("./_objectToString"),t="[object Null]",i="[object Undefined]",n=e?e.toStringTag:void 0;function u(e){return null==e?void 0===e?i:t:n&&n in Object(e)?r(e):o(e)}module.exports=u;
},{"./_Symbol":"wppe","./_getRawTag":"uiOY","./_objectToString":"lPmd"}],"u9vI":[function(require,module,exports) {
function n(n){var o=typeof n;return null!=n&&("object"==o||"function"==o)}module.exports=n;
},{}],"dRuq":[function(require,module,exports) {
var e=require("./_baseGetTag"),r=require("./isObject"),t="[object AsyncFunction]",n="[object Function]",o="[object GeneratorFunction]",c="[object Proxy]";function u(u){if(!r(u))return!1;var i=e(u);return i==n||i==o||i==t||i==c}module.exports=u;
},{"./_baseGetTag":"e5TX","./isObject":"u9vI"}],"GmNU":[function(require,module,exports) {
var e=9007199254740991;function r(r){return"number"==typeof r&&r>-1&&r%1==0&&r<=e}module.exports=r;
},{}],"LN6c":[function(require,module,exports) {
var e=require("./isFunction"),n=require("./isLength");function r(r){return null!=r&&n(r.length)&&!e(r)}module.exports=r;
},{"./isFunction":"dRuq","./isLength":"GmNU"}],"AGrE":[function(require,module,exports) {
var e=9007199254740991,r=/^(?:0|[1-9]\d*)$/;function t(t,n){var o=typeof t;return!!(n=null==n?e:n)&&("number"==o||"symbol"!=o&&r.test(t))&&t>-1&&t%1==0&&t<n}module.exports=t;
},{}],"R62e":[function(require,module,exports) {
var e=require("./eq"),r=require("./isArrayLike"),i=require("./_isIndex"),n=require("./isObject");function u(u,t,q){if(!n(q))return!1;var s=typeof t;return!!("number"==s?r(q)&&i(t,q.length):"string"==s&&t in q)&&e(q[t],u)}module.exports=u;
},{"./eq":"LIpy","./isArrayLike":"LN6c","./_isIndex":"AGrE","./isObject":"u9vI"}],"OuyB":[function(require,module,exports) {
function e(e){return null!=e&&"object"==typeof e}module.exports=e;
},{}],"bgO7":[function(require,module,exports) {
var e=require("./_baseGetTag"),r=require("./isObjectLike"),o="[object Symbol]";function t(t){return"symbol"==typeof t||r(t)&&e(t)==o}module.exports=t;
},{"./_baseGetTag":"e5TX","./isObjectLike":"OuyB"}],"iS0Z":[function(require,module,exports) {
var e=require("./isObject"),r=require("./isSymbol"),t=NaN,i=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,n=/^0o[0-7]+$/i,s=parseInt;function a(a){if("number"==typeof a)return a;if(r(a))return t;if(e(a)){var o="function"==typeof a.valueOf?a.valueOf():a;a=e(o)?o+"":o}if("string"!=typeof a)return 0===a?a:+a;a=a.replace(i,"");var l=u.test(a);return l||n.test(a)?s(a.slice(2),l?2:8):f.test(a)?t:+a}module.exports=a;
},{"./isObject":"u9vI","./isSymbol":"bgO7"}],"Cyzk":[function(require,module,exports) {
var e=require("./toNumber"),r=1/0,u=1.7976931348623157e308;function o(o){return o?(o=e(o))===r||o===-r?(o<0?-1:1)*u:o==o?o:0:0===o?o:0}module.exports=o;
},{"./toNumber":"iS0Z"}],"BDhs":[function(require,module,exports) {
var e=require("./_baseRandom"),o=require("./_isIterateeCall"),i=require("./toFinite"),r=parseFloat,a=Math.min,t=Math.random;function n(n,d,v){if(v&&"boolean"!=typeof v&&o(n,d,v)&&(d=v=void 0),void 0===v&&("boolean"==typeof d?(v=d,d=void 0):"boolean"==typeof n&&(v=n,n=void 0)),void 0===n&&void 0===d?(n=0,d=1):(n=i(n),void 0===d?(d=n,n=0):d=i(d)),n>d){var l=n;n=d,d=l}if(v||n%1||d%1){var u=t();return a(n+u*(d-n+r("1e-"+((u+"").length-1))),d)}return e(n,d)}module.exports=n;
},{"./_baseRandom":"VY3I","./_isIterateeCall":"R62e","./toFinite":"Cyzk"}],"s9iF":[function(require,module,exports) {
function t(){this.__data__=[],this.size=0}module.exports=t;
},{}],"yEjJ":[function(require,module,exports) {
var r=require("./eq");function e(e,n){for(var t=e.length;t--;)if(r(e[t][0],n))return t;return-1}module.exports=e;
},{"./eq":"LIpy"}],"bWyl":[function(require,module,exports) {
var e=require("./_assocIndexOf"),r=Array.prototype,t=r.splice;function a(r){var a=this.__data__,o=e(a,r);return!(o<0)&&(o==a.length-1?a.pop():t.call(a,o,1),--this.size,!0)}module.exports=a;
},{"./_assocIndexOf":"yEjJ"}],"Ewuv":[function(require,module,exports) {
var r=require("./_assocIndexOf");function e(e){var a=this.__data__,o=r(a,e);return o<0?void 0:a[o][1]}module.exports=e;
},{"./_assocIndexOf":"yEjJ"}],"xDQX":[function(require,module,exports) {
var e=require("./_assocIndexOf");function r(r){return e(this.__data__,r)>-1}module.exports=r;
},{"./_assocIndexOf":"yEjJ"}],"h0zV":[function(require,module,exports) {
var s=require("./_assocIndexOf");function e(e,r){var t=this.__data__,i=s(t,e);return i<0?(++this.size,t.push([e,r])):t[i][1]=r,this}module.exports=e;
},{"./_assocIndexOf":"yEjJ"}],"Xk23":[function(require,module,exports) {
var e=require("./_listCacheClear"),t=require("./_listCacheDelete"),r=require("./_listCacheGet"),l=require("./_listCacheHas"),o=require("./_listCacheSet");function a(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var l=e[t];this.set(l[0],l[1])}}a.prototype.clear=e,a.prototype.delete=t,a.prototype.get=r,a.prototype.has=l,a.prototype.set=o,module.exports=a;
},{"./_listCacheClear":"s9iF","./_listCacheDelete":"bWyl","./_listCacheGet":"Ewuv","./_listCacheHas":"xDQX","./_listCacheSet":"h0zV"}],"y4DG":[function(require,module,exports) {
var e=require("./_ListCache");function i(){this.__data__=new e,this.size=0}module.exports=i;
},{"./_ListCache":"Xk23"}],"TpjK":[function(require,module,exports) {
function e(e){var t=this.__data__,i=t.delete(e);return this.size=t.size,i}module.exports=e;
},{}],"skbs":[function(require,module,exports) {
function t(t){return this.__data__.get(t)}module.exports=t;
},{}],"ocJ6":[function(require,module,exports) {
function t(t){return this.__data__.has(t)}module.exports=t;
},{}],"q3B8":[function(require,module,exports) {
var r=require("./_root"),e=r["__core-js_shared__"];module.exports=e;
},{"./_root":"MIhM"}],"qpNZ":[function(require,module,exports) {
var e=require("./_coreJsData"),r=function(){var r=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();function n(e){return!!r&&r in e}module.exports=n;
},{"./_coreJsData":"q3B8"}],"g55O":[function(require,module,exports) {
var t=Function.prototype,r=t.toString;function n(t){if(null!=t){try{return r.call(t)}catch(n){}try{return t+""}catch(n){}}return""}module.exports=n;
},{}],"iEGD":[function(require,module,exports) {
var e=require("./isFunction"),r=require("./_isMasked"),t=require("./isObject"),o=require("./_toSource"),n=/[\\^$.*+?()[\]{}|]/g,c=/^\[object .+?Constructor\]$/,i=Function.prototype,u=Object.prototype,p=i.toString,s=u.hasOwnProperty,a=RegExp("^"+p.call(s).replace(n,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function l(n){return!(!t(n)||r(n))&&(e(n)?a:c).test(o(n))}module.exports=l;
},{"./isFunction":"dRuq","./_isMasked":"qpNZ","./isObject":"u9vI","./_toSource":"g55O"}],"Nk5W":[function(require,module,exports) {
function n(n,o){return null==n?void 0:n[o]}module.exports=n;
},{}],"bViC":[function(require,module,exports) {
var e=require("./_baseIsNative"),r=require("./_getValue");function u(u,a){var i=r(u,a);return e(i)?i:void 0}module.exports=u;
},{"./_baseIsNative":"iEGD","./_getValue":"Nk5W"}],"K9uV":[function(require,module,exports) {
var e=require("./_getNative"),r=require("./_root"),o=e(r,"Map");module.exports=o;
},{"./_getNative":"bViC","./_root":"MIhM"}],"FTXF":[function(require,module,exports) {
var e=require("./_getNative"),r=e(Object,"create");module.exports=r;
},{"./_getNative":"bViC"}],"RxSq":[function(require,module,exports) {
var e=require("./_nativeCreate");function t(){this.__data__=e?e(null):{},this.size=0}module.exports=t;
},{"./_nativeCreate":"FTXF"}],"qBl2":[function(require,module,exports) {
function t(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}module.exports=t;
},{}],"hClK":[function(require,module,exports) {
var e=require("./_nativeCreate"),r="__lodash_hash_undefined__",t=Object.prototype,a=t.hasOwnProperty;function _(t){var _=this.__data__;if(e){var o=_[t];return o===r?void 0:o}return a.call(_,t)?_[t]:void 0}module.exports=_;
},{"./_nativeCreate":"FTXF"}],"YIaf":[function(require,module,exports) {
var e=require("./_nativeCreate"),r=Object.prototype,t=r.hasOwnProperty;function a(r){var a=this.__data__;return e?void 0!==a[r]:t.call(a,r)}module.exports=a;
},{"./_nativeCreate":"FTXF"}],"Ag0p":[function(require,module,exports) {
var e=require("./_nativeCreate"),_="__lodash_hash_undefined__";function i(i,t){var a=this.__data__;return this.size+=this.has(i)?0:1,a[i]=e&&void 0===t?_:t,this}module.exports=i;
},{"./_nativeCreate":"FTXF"}],"C8N4":[function(require,module,exports) {
var e=require("./_hashClear"),r=require("./_hashDelete"),t=require("./_hashGet"),h=require("./_hashHas"),o=require("./_hashSet");function a(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var h=e[r];this.set(h[0],h[1])}}a.prototype.clear=e,a.prototype.delete=r,a.prototype.get=t,a.prototype.has=h,a.prototype.set=o,module.exports=a;
},{"./_hashClear":"RxSq","./_hashDelete":"qBl2","./_hashGet":"hClK","./_hashHas":"YIaf","./_hashSet":"Ag0p"}],"lBq7":[function(require,module,exports) {
var e=require("./_Hash"),i=require("./_ListCache"),r=require("./_Map");function a(){this.size=0,this.__data__={hash:new e,map:new(r||i),string:new e}}module.exports=a;
},{"./_Hash":"C8N4","./_ListCache":"Xk23","./_Map":"K9uV"}],"XJYD":[function(require,module,exports) {
function o(o){var n=typeof o;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==o:null===o}module.exports=o;
},{}],"ZC1a":[function(require,module,exports) {
var r=require("./_isKeyable");function e(e,a){var t=e.__data__;return r(a)?t["string"==typeof a?"string":"hash"]:t.map}module.exports=e;
},{"./_isKeyable":"XJYD"}],"cDyG":[function(require,module,exports) {
var e=require("./_getMapData");function t(t){var r=e(this,t).delete(t);return this.size-=r?1:0,r}module.exports=t;
},{"./_getMapData":"ZC1a"}],"G3gK":[function(require,module,exports) {
var e=require("./_getMapData");function t(t){return e(this,t).get(t)}module.exports=t;
},{"./_getMapData":"ZC1a"}],"ueph":[function(require,module,exports) {
var e=require("./_getMapData");function r(r){return e(this,r).has(r)}module.exports=r;
},{"./_getMapData":"ZC1a"}],"UY82":[function(require,module,exports) {
var e=require("./_getMapData");function t(t,i){var s=e(this,t),r=s.size;return s.set(t,i),this.size+=s.size==r?0:1,this}module.exports=t;
},{"./_getMapData":"ZC1a"}],"wtMJ":[function(require,module,exports) {
var e=require("./_mapCacheClear"),r=require("./_mapCacheDelete"),t=require("./_mapCacheGet"),a=require("./_mapCacheHas"),p=require("./_mapCacheSet");function o(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var a=e[r];this.set(a[0],a[1])}}o.prototype.clear=e,o.prototype.delete=r,o.prototype.get=t,o.prototype.has=a,o.prototype.set=p,module.exports=o;
},{"./_mapCacheClear":"lBq7","./_mapCacheDelete":"cDyG","./_mapCacheGet":"G3gK","./_mapCacheHas":"ueph","./_mapCacheSet":"UY82"}],"fwYF":[function(require,module,exports) {
var e=require("./_ListCache"),i=require("./_Map"),t=require("./_MapCache"),s=200;function _(_,a){var r=this.__data__;if(r instanceof e){var h=r.__data__;if(!i||h.length<s-1)return h.push([_,a]),this.size=++r.size,this;r=this.__data__=new t(h)}return r.set(_,a),this.size=r.size,this}module.exports=_;
},{"./_ListCache":"Xk23","./_Map":"K9uV","./_MapCache":"wtMJ"}],"I84N":[function(require,module,exports) {
var e=require("./_ListCache"),t=require("./_stackClear"),r=require("./_stackDelete"),a=require("./_stackGet"),s=require("./_stackHas"),o=require("./_stackSet");function i(t){var r=this.__data__=new e(t);this.size=r.size}i.prototype.clear=t,i.prototype.delete=r,i.prototype.get=a,i.prototype.has=s,i.prototype.set=o,module.exports=i;
},{"./_ListCache":"Xk23","./_stackClear":"y4DG","./_stackDelete":"TpjK","./_stackGet":"skbs","./_stackHas":"ocJ6","./_stackSet":"fwYF"}],"r0rT":[function(require,module,exports) {
var _="__lodash_hash_undefined__";function t(t){return this.__data__.set(t,_),this}module.exports=t;
},{}],"thFQ":[function(require,module,exports) {
var e=require("./_MapCache"),t=require("./_setCacheAdd"),r=require("./_setCacheHas");function a(t){var r=-1,a=null==t?0:t.length;for(this.__data__=new e;++r<a;)this.add(t[r])}a.prototype.add=a.prototype.push=t,a.prototype.has=r,module.exports=a;
},{"./_MapCache":"wtMJ","./_setCacheAdd":"r0rT","./_setCacheHas":"ocJ6"}],"SfCF":[function(require,module,exports) {
function r(r,n){for(var e=-1,t=null==r?0:r.length;++e<t;)if(n(r[e],e,r))return!0;return!1}module.exports=r;
},{}],"qxaq":[function(require,module,exports) {
function e(e,n){return e.has(n)}module.exports=e;
},{}],"pkMv":[function(require,module,exports) {
var e=require("./_SetCache"),r=require("./_arraySome"),i=require("./_cacheHas"),t=1,a=2;function n(n,f,u,o,v,c){var l=u&t,s=n.length,d=f.length;if(s!=d&&!(l&&d>s))return!1;var h=c.get(n);if(h&&c.get(f))return h==f;var g=-1,b=!0,k=u&a?new e:void 0;for(c.set(n,f),c.set(f,n);++g<s;){var q=n[g],_=f[g];if(o)var m=l?o(_,q,g,f,n,c):o(q,_,g,n,f,c);if(void 0!==m){if(m)continue;b=!1;break}if(k){if(!r(f,function(e,r){if(!i(k,r)&&(q===e||v(q,e,u,o,c)))return k.push(r)})){b=!1;break}}else if(q!==_&&!v(q,_,u,o,c)){b=!1;break}}return c.delete(n),c.delete(f),b}module.exports=n;
},{"./_SetCache":"thFQ","./_arraySome":"SfCF","./_cacheHas":"qxaq"}],"yfX1":[function(require,module,exports) {
var r=require("./_root"),e=r.Uint8Array;module.exports=e;
},{"./_root":"MIhM"}],"BjGi":[function(require,module,exports) {
function r(r){var n=-1,o=Array(r.size);return r.forEach(function(r,e){o[++n]=[e,r]}),o}module.exports=r;
},{}],"ZEJm":[function(require,module,exports) {
function r(r){var n=-1,o=Array(r.size);return r.forEach(function(r){o[++n]=r}),o}module.exports=r;
},{}],"oaAh":[function(require,module,exports) {
var e=require("./_Symbol"),r=require("./_Uint8Array"),t=require("./eq"),a=require("./_equalArrays"),c=require("./_mapToArray"),o=require("./_setToArray"),s=1,u=2,n="[object Boolean]",b="[object Date]",i="[object Error]",f="[object Map]",y="[object Number]",j="[object RegExp]",l="[object Set]",g="[object String]",m="[object Symbol]",q="[object ArrayBuffer]",v="[object DataView]",p=e?e.prototype:void 0,h=p?p.valueOf:void 0;function A(e,p,A,_,d,w,L){switch(A){case v:if(e.byteLength!=p.byteLength||e.byteOffset!=p.byteOffset)return!1;e=e.buffer,p=p.buffer;case q:return!(e.byteLength!=p.byteLength||!w(new r(e),new r(p)));case n:case b:case y:return t(+e,+p);case i:return e.name==p.name&&e.message==p.message;case j:case g:return e==p+"";case f:var S=c;case l:var O=_&s;if(S||(S=o),e.size!=p.size&&!O)return!1;var x=L.get(e);if(x)return x==p;_|=u,L.set(e,p);var z=a(S(e),S(p),_,d,w,L);return L.delete(e),z;case m:if(h)return h.call(e)==h.call(p)}return!1}module.exports=A;
},{"./_Symbol":"wppe","./_Uint8Array":"yfX1","./eq":"LIpy","./_equalArrays":"pkMv","./_mapToArray":"BjGi","./_setToArray":"ZEJm"}],"srRO":[function(require,module,exports) {
function e(e,n){for(var r=-1,t=n.length,o=e.length;++r<t;)e[o+r]=n[r];return e}module.exports=e;
},{}],"p0cq":[function(require,module,exports) {
var r=Array.isArray;module.exports=r;
},{}],"Vhgk":[function(require,module,exports) {
var r=require("./_arrayPush"),e=require("./isArray");function u(u,a,i){var n=a(u);return e(u)?n:r(n,i(u))}module.exports=u;
},{"./_arrayPush":"srRO","./isArray":"p0cq"}],"uvMU":[function(require,module,exports) {
function r(r,n){for(var e=-1,l=null==r?0:r.length,o=0,t=[];++e<l;){var u=r[e];n(u,e,r)&&(t[o++]=u)}return t}module.exports=r;
},{}],"Mmba":[function(require,module,exports) {
function e(){return[]}module.exports=e;
},{}],"EvLK":[function(require,module,exports) {
var r=require("./_arrayFilter"),e=require("./stubArray"),t=Object.prototype,u=t.propertyIsEnumerable,n=Object.getOwnPropertySymbols,o=n?function(e){return null==e?[]:(e=Object(e),r(n(e),function(r){return u.call(e,r)}))}:e;module.exports=o;
},{"./_arrayFilter":"uvMU","./stubArray":"Mmba"}],"r8MY":[function(require,module,exports) {
function r(r,o){for(var e=-1,n=Array(r);++e<r;)n[e]=o(e);return n}module.exports=r;
},{}],"pK4Y":[function(require,module,exports) {
var e=require("./_baseGetTag"),r=require("./isObjectLike"),t="[object Arguments]";function u(u){return r(u)&&e(u)==t}module.exports=u;
},{"./_baseGetTag":"e5TX","./isObjectLike":"OuyB"}],"tilN":[function(require,module,exports) {
var e=require("./_baseIsArguments"),r=require("./isObjectLike"),t=Object.prototype,l=t.hasOwnProperty,n=t.propertyIsEnumerable,u=e(function(){return arguments}())?e:function(e){return r(e)&&l.call(e,"callee")&&!n.call(e,"callee")};module.exports=u;
},{"./_baseIsArguments":"pK4Y","./isObjectLike":"OuyB"}],"PYZb":[function(require,module,exports) {
function e(){return!1}module.exports=e;
},{}],"iyC2":[function(require,module,exports) {

var e=require("./_root"),o=require("./stubFalse"),r="object"==typeof exports&&exports&&!exports.nodeType&&exports,t=r&&"object"==typeof module&&module&&!module.nodeType&&module,p=t&&t.exports===r,u=p?e.Buffer:void 0,d=u?u.isBuffer:void 0,s=d||o;module.exports=s;
},{"./_root":"MIhM","./stubFalse":"PYZb"}],"L2LX":[function(require,module,exports) {
var e=require("./_baseGetTag"),t=require("./isLength"),r=require("./isObjectLike"),o="[object Arguments]",b="[object Array]",c="[object Boolean]",j="[object Date]",a="[object Error]",n="[object Function]",i="[object Map]",A="[object Number]",y="[object Object]",u="[object RegExp]",g="[object Set]",l="[object String]",p="[object WeakMap]",s="[object ArrayBuffer]",m="[object DataView]",U="[object Float32Array]",f="[object Float64Array]",q="[object Int8Array]",F="[object Int16Array]",I="[object Int32Array]",d="[object Uint8Array]",h="[object Uint8ClampedArray]",k="[object Uint16Array]",x="[object Uint32Array]",B={};function D(o){return r(o)&&t(o.length)&&!!B[e(o)]}B[U]=B[f]=B[q]=B[F]=B[I]=B[d]=B[h]=B[k]=B[x]=!0,B[o]=B[b]=B[s]=B[c]=B[m]=B[j]=B[a]=B[n]=B[i]=B[A]=B[y]=B[u]=B[g]=B[l]=B[p]=!1,module.exports=D;
},{"./_baseGetTag":"e5TX","./isLength":"GmNU","./isObjectLike":"OuyB"}],"PnXa":[function(require,module,exports) {
function n(n){return function(r){return n(r)}}module.exports=n;
},{}],"PBPf":[function(require,module,exports) {
var e=require("./_freeGlobal"),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,r=o&&"object"==typeof module&&module&&!module.nodeType&&module,t=r&&r.exports===o,p=t&&e.process,u=function(){try{var e=r&&r.require&&r.require("util").types;return e||p&&p.binding&&p.binding("util")}catch(o){}}();module.exports=u;
},{"./_freeGlobal":"j3D9"}],"kwIb":[function(require,module,exports) {
var e=require("./_baseIsTypedArray"),r=require("./_baseUnary"),a=require("./_nodeUtil"),i=a&&a.isTypedArray,s=i?r(i):e;module.exports=s;
},{"./_baseIsTypedArray":"L2LX","./_baseUnary":"PnXa","./_nodeUtil":"PBPf"}],"VcLW":[function(require,module,exports) {
var e=require("./_baseTimes"),r=require("./isArguments"),t=require("./isArray"),i=require("./isBuffer"),n=require("./_isIndex"),s=require("./isTypedArray"),u=Object.prototype,f=u.hasOwnProperty;function a(u,a){var o=t(u),p=!o&&r(u),y=!o&&!p&&i(u),g=!o&&!p&&!y&&s(u),h=o||p||y||g,l=h?e(u.length,String):[],q=l.length;for(var b in u)!a&&!f.call(u,b)||h&&("length"==b||y&&("offset"==b||"parent"==b)||g&&("buffer"==b||"byteLength"==b||"byteOffset"==b)||n(b,q))||l.push(b);return l}module.exports=a;
},{"./_baseTimes":"r8MY","./isArguments":"tilN","./isArray":"p0cq","./isBuffer":"iyC2","./_isIndex":"AGrE","./isTypedArray":"kwIb"}],"nhsl":[function(require,module,exports) {
var t=Object.prototype;function o(o){var r=o&&o.constructor;return o===("function"==typeof r&&r.prototype||t)}module.exports=o;
},{}],"oss3":[function(require,module,exports) {
function n(n,r){return function(t){return n(r(t))}}module.exports=n;
},{}],"J1oc":[function(require,module,exports) {
var e=require("./_overArg"),r=e(Object.keys,Object);module.exports=r;
},{"./_overArg":"oss3"}],"BNjb":[function(require,module,exports) {
var r=require("./_isPrototype"),e=require("./_nativeKeys"),t=Object.prototype,o=t.hasOwnProperty;function n(t){if(!r(t))return e(t);var n=[];for(var u in Object(t))o.call(t,u)&&"constructor"!=u&&n.push(u);return n}module.exports=n;
},{"./_isPrototype":"nhsl","./_nativeKeys":"J1oc"}],"HI10":[function(require,module,exports) {
var e=require("./_arrayLikeKeys"),r=require("./_baseKeys"),i=require("./isArrayLike");function u(u){return i(u)?e(u):r(u)}module.exports=u;
},{"./_arrayLikeKeys":"VcLW","./_baseKeys":"BNjb","./isArrayLike":"LN6c"}],"uf6I":[function(require,module,exports) {
var e=require("./_baseGetAllKeys"),r=require("./_getSymbols"),u=require("./keys");function s(s){return e(s,u,r)}module.exports=s;
},{"./_baseGetAllKeys":"Vhgk","./_getSymbols":"EvLK","./keys":"HI10"}],"mFpP":[function(require,module,exports) {
var r=require("./_getAllKeys"),t=1,e=Object.prototype,n=e.hasOwnProperty;function o(e,o,c,i,a,f){var u=c&t,s=r(e),v=s.length;if(v!=r(o).length&&!u)return!1;for(var l=v;l--;){var p=s[l];if(!(u?p in o:n.call(o,p)))return!1}var g=f.get(e);if(g&&f.get(o))return g==o;var y=!0;f.set(e,o),f.set(o,e);for(var d=u;++l<v;){var h=e[p=s[l]],b=o[p];if(i)var O=u?i(b,h,p,o,e,f):i(h,b,p,e,o,f);if(!(void 0===O?h===b||a(h,b,c,i,f):O)){y=!1;break}d||(d="constructor"==p)}if(y&&!d){var j=e.constructor,k=o.constructor;j!=k&&"constructor"in e&&"constructor"in o&&!("function"==typeof j&&j instanceof j&&"function"==typeof k&&k instanceof k)&&(y=!1)}return f.delete(e),f.delete(o),y}module.exports=o;
},{"./_getAllKeys":"uf6I"}],"fLfT":[function(require,module,exports) {
var e=require("./_getNative"),r=require("./_root"),t=e(r,"DataView");module.exports=t;
},{"./_getNative":"bViC","./_root":"MIhM"}],"gTEC":[function(require,module,exports) {
var e=require("./_getNative"),r=require("./_root"),o=e(r,"Promise");module.exports=o;
},{"./_getNative":"bViC","./_root":"MIhM"}],"IVes":[function(require,module,exports) {
var e=require("./_getNative"),r=require("./_root"),t=e(r,"Set");module.exports=t;
},{"./_getNative":"bViC","./_root":"MIhM"}],"N036":[function(require,module,exports) {
var e=require("./_getNative"),r=require("./_root"),a=e(r,"WeakMap");module.exports=a;
},{"./_getNative":"bViC","./_root":"MIhM"}],"tQCT":[function(require,module,exports) {
var e=require("./_DataView"),r=require("./_Map"),t=require("./_Promise"),a=require("./_Set"),u=require("./_WeakMap"),c=require("./_baseGetTag"),o=require("./_toSource"),i="[object Map]",n="[object Object]",s="[object Promise]",b="[object Set]",w="[object WeakMap]",j="[object DataView]",q=o(e),_=o(r),p=o(t),f=o(a),v=o(u),M=c;(e&&M(new e(new ArrayBuffer(1)))!=j||r&&M(new r)!=i||t&&M(t.resolve())!=s||a&&M(new a)!=b||u&&M(new u)!=w)&&(M=function(e){var r=c(e),t=r==n?e.constructor:void 0,a=t?o(t):"";if(a)switch(a){case q:return j;case _:return i;case p:return s;case f:return b;case v:return w}return r}),module.exports=M;
},{"./_DataView":"fLfT","./_Map":"K9uV","./_Promise":"gTEC","./_Set":"IVes","./_WeakMap":"N036","./_baseGetTag":"e5TX","./_toSource":"g55O"}],"ykgi":[function(require,module,exports) {
var e=require("./_Stack"),r=require("./_equalArrays"),a=require("./_equalByTag"),u=require("./_equalObjects"),t=require("./_getTag"),i=require("./isArray"),_=require("./isBuffer"),n=require("./isTypedArray"),q=1,c="[object Arguments]",l="[object Array]",o="[object Object]",p=Object.prototype,f=p.hasOwnProperty;function s(p,s,y,b,j,v){var w=i(p),A=i(s),d=w?l:t(p),g=A?l:t(s),O=(d=d==c?o:d)==o,T=(g=g==c?o:g)==o,m=d==g;if(m&&_(p)){if(!_(s))return!1;w=!0,O=!1}if(m&&!O)return v||(v=new e),w||n(p)?r(p,s,y,b,j,v):a(p,s,d,y,b,j,v);if(!(y&q)){var B=O&&f.call(p,"__wrapped__"),h=T&&f.call(s,"__wrapped__");if(B||h){var k=B?p.value():p,x=h?s.value():s;return v||(v=new e),j(k,x,y,b,v)}}return!!m&&(v||(v=new e),u(p,s,y,b,j,v))}module.exports=s;
},{"./_Stack":"I84N","./_equalArrays":"pkMv","./_equalByTag":"oaAh","./_equalObjects":"mFpP","./_getTag":"tQCT","./isArray":"p0cq","./isBuffer":"iyC2","./isTypedArray":"kwIb"}],"iKxp":[function(require,module,exports) {
var e=require("./_baseIsEqualDeep"),r=require("./isObjectLike");function u(l,i,n,s,t){return l===i||(null==l||null==i||!r(l)&&!r(i)?l!=l&&i!=i:e(l,i,n,s,u,t))}module.exports=u;
},{"./_baseIsEqualDeep":"ykgi","./isObjectLike":"OuyB"}],"R6wa":[function(require,module,exports) {
var e=require("./_baseIsEqual");function r(r,u){return e(r,u)}module.exports=r;
},{"./_baseIsEqual":"iKxp"}],"KIzB":[function(require,module,exports) {
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function r(e,r,t){return r&&n(e.prototype,r),t&&n(e,t),e}function t(e){return s(e)||c(e)||i(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,n){if(e){if("string"==typeof e)return u(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,n):void 0}}function c(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function s(e){if(Array.isArray(e))return u(e)}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var a=require("../../node_modules/lodash/random"),l=require("../../node_modules/lodash/isEqual"),d=document.querySelector(".game-field").tBodies[0],f=t(d.querySelectorAll("td")),y=d.rows,m=document.querySelector(".button"),h=document.querySelector(".game-score"),v=+h.innerText,g=document.querySelector(".high-score"),x=N();g.innerText=x;var w=document.querySelector(".message-lose"),L=document.querySelector(".message-win"),b=document.querySelector(".message-start"),p=function(){function n(r){e(this,n),this.coords={x:r.cellIndex,y:r.closest("tr").rowIndex},this.HTML=r}return r(n,[{key:"fillCell",value:function(e){this.HTML.classList.add("field-cell--".concat(e)),this.HTML.innerText=e}},{key:"clearCell",value:function(){this.HTML.classList.remove(this.HTML.classList[1]),this.HTML.innerText=""}},{key:"number",get:function(){return+this.HTML.innerText}},{key:"isEmpty",get:function(){return 1===this.HTML.classList.length}}]),n}(),T=function n(r){e(this,n);var t=n.isVerticalKey(r)?"y":"x",o="y"===t?"x":"y",i=n.isAscOrderKey(r)?y[y.length-1].rowIndex:y[0].rowIndex;this.code=r,this.axis=t,this.acrossAxis=o,this.edgeIdx=i};T.arrowKeys=[37,38,39,40],T.isVerticalKey=function(e){return e%2==0},T.isAscOrderKey=function(e){return e>38};var E=f.map(function(e){return new p(e)}),S=new Promise(function(e){m.addEventListener("click",function(){e()})}),A=function(e){var n=new T(e.keyCode);if(T.arrowKeys.includes(n.code)){var r=O(n),t=P(n);O(n),(t.some(function(e){return e})||r)&&I(),C(),K()||k()}};function k(){var e=[];T.arrowKeys.forEach(function(n){var r=new T(n);e=[].concat(t(e),t(P(r,!0)))}),e.every(function(e){return!e})&&w.classList.remove("hidden")}function C(){M().some(function(e){return 2048===e.number})&&(L.classList.remove("hidden"),document.removeEventListener("keydown",A))}function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"coords",n=a(1,100)<=90?2:4,r={x:a(0,3),y:a(0,3)};return"cell"===e?n:r}function I(){var e=q(),n=E.find(function(n){var r=n.coords;return+r.x===e.x&&+r.y===e.y});if(n.isEmpty){var r=q("cell");n.fillCell(r)}else K()&&I()}function K(){return E.some(function(e){return e.isEmpty})}function M(){return E.filter(function(e){return!e.isEmpty})}function H(e,n,r,t){var o=e,i=c(o);function c(e){var r=e.coords,t=r.x,o=r.y,i=T.isAscOrderKey(n)?1:-1;return T.isVerticalKey(n)?E.find(function(e){var n=e.coords,r=n.x,c=n.y;return r===t&&c===o+i}):E.find(function(e){var n=e.coords,r=n.x,c=n.y;return r===t+i&&c===o})}for(;i.isEmpty&&i.coords[r]!==t;)i=c(o=i);return i.isEmpty?i:o}function O(e){var n=e.code,r=e.axis,t=e.edgeIdx,o=M().filter(function(e){return e.coords[r]!==t}),i=!1;return o.forEach(function(e){var o=H(e,n,r,t);l(e,o)||(i=!0,o.fillCell(e.number),e.clearCell())}),i}function j(e,n){for(var r=n.code,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=!1,i=T.isAscOrderKey(r)?e.reverse():e,c=0;c<i.length-1;c++)if(i[c].number===i[c+1].number){var s=2*i[c+1].number;if(o=!0,t)return o;i[c].clearCell(),i[c].fillCell(s),i[c+1].clearCell(),v+=s,h.innerText=v,x=x<v?v:x,g.innerText=x,_(),c++}return o}function P(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=V(e),t=[];return r.forEach(function(r){return t.push(j(r,e,n))}),t}function V(e){var n=e.acrossAxis,r=Array.from({length:y.length},function(){return[]});return M().forEach(function(e){r[e.coords[n]].push(e)}),r}function N(){var e=window.localStorage.getItem("highScore");return e?isNaN(+e)?+g.innerText:+e:+g.innerText}function _(){window.localStorage.setItem("highScore",x)}S.then(function(){I(),I(),b.classList.add("hidden"),document.addEventListener("keydown",A)}).then(function(){return m.addEventListener("click",function(){M().forEach(function(e){return e.clearCell()}),I(),I(),v=0,h.innerText=v,L.classList.add("hidden"),w.classList.add("hidden"),document.addEventListener("keydown",A)}),new Promise(function(e){document.addEventListener("keydown",function(n){T.arrowKeys.includes(n.keyCode)&&e()},{once:!0})})}).then(function(){m.classList.remove("start"),m.classList.add("restart"),m.innerText="Restart"});
},{"../../node_modules/lodash/random":"BDhs","../../node_modules/lodash/isEqual":"R6wa"}]},{},["KIzB"], null)
//# sourceMappingURL=main.4a2e94a5.js.map