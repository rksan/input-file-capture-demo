(self["webpackChunkinput_file_capture_demo"]=self["webpackChunkinput_file_capture_demo"]||[]).push([[935],{5787:function(t,e,r){var n=r(7976),o=TypeError;t.exports=function(t,e){if(n(e,t))return t;throw o("Incorrect invocation")}},6135:function(t,e,r){"use strict";var n=r(4948),o=r(3070),a=r(9114);t.exports=function(t,e,r){var i=n(e);i in t?o.f(t,i,a(0,r)):t[i]=r}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},7871:function(t,e,r){var n=r(3823),o=r(5268);t.exports=!n&&!o&&"object"==typeof window&&"object"==typeof document},3823:function(t){t.exports="object"==typeof Deno&&Deno&&"object"==typeof Deno.version},5268:function(t,e,r){var n=r(4326);t.exports="undefined"!=typeof process&&"process"==n(process)},9974:function(t,e,r){var n=r(1470),o=r(9662),a=r(4374),i=n(n.bind);t.exports=function(t,e){return o(t),void 0===e?t:a?i(t,e):function(){return t.apply(e,arguments)}}},1470:function(t,e,r){var n=r(4326),o=r(1702);t.exports=function(t){if("Function"===n(t))return o(t)}},1246:function(t,e,r){var n=r(648),o=r(8173),a=r(8554),i=r(7497),c=r(5112),s=c("iterator");t.exports=function(t){if(!a(t))return o(t,s)||o(t,"@@iterator")||i[n(t)]}},4121:function(t,e,r){var n=r(6916),o=r(9662),a=r(9670),i=r(6330),c=r(1246),s=TypeError;t.exports=function(t,e){var r=arguments.length<2?c(t):e;if(o(r))return a(n(r,t));throw s(i(t)+" is not iterable")}},7659:function(t,e,r){var n=r(5112),o=r(7497),a=n("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||i[a]===t)}},4411:function(t,e,r){var n=r(1702),o=r(7293),a=r(614),i=r(648),c=r(5005),s=r(2788),u=function(){},l=[],f=c("Reflect","construct"),p=/^\s*(?:class|function)\b/,v=n(p.exec),d=!p.exec(u),h=function(t){if(!a(t))return!1;try{return f(u,l,t),!0}catch(e){return!1}},y=function(t){if(!a(t))return!1;switch(i(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return d||!!v(p,s(t))}catch(e){return!0}};y.sham=!0,t.exports=!f||o((function(){var t;return h(h.call)||!h(Object)||!h((function(){t=!0}))||t}))?y:h},408:function(t,e,r){var n=r(9974),o=r(6916),a=r(9670),i=r(6330),c=r(7659),s=r(6244),u=r(7976),l=r(4121),f=r(1246),p=r(9212),v=TypeError,d=function(t,e){this.stopped=t,this.result=e},h=d.prototype;t.exports=function(t,e,r){var y,b,_,g,m,x,w,E=r&&r.that,R=!(!r||!r.AS_ENTRIES),A=!(!r||!r.IS_RECORD),O=!(!r||!r.IS_ITERATOR),k=!(!r||!r.INTERRUPTED),j=n(e,E),C=function(t){return y&&p(y,"normal",t),new d(!0,t)},D=function(t){return R?(a(t),k?j(t[0],t[1],C):j(t[0],t[1])):k?j(t,C):j(t)};if(A)y=t.iterator;else if(O)y=t;else{if(b=f(t),!b)throw v(i(t)+" is not iterable");if(c(b)){for(_=0,g=s(t);g>_;_++)if(m=D(t[_]),m&&u(h,m))return m;return new d(!1)}y=l(t,b)}x=A?t.next:y.next;while(!(w=o(x,y)).done){try{m=D(w.value)}catch(I){p(y,"throw",I)}if("object"==typeof m&&m&&u(h,m))return m}return new d(!1)}},9212:function(t,e,r){var n=r(6916),o=r(9670),a=r(8173);t.exports=function(t,e,r){var i,c;o(t);try{if(i=a(t,"return"),!i){if("throw"===e)throw r;return r}i=n(i,t)}catch(s){c=!0,i=s}if("throw"===e)throw r;if(c)throw i;return o(i),r}},7497:function(t){t.exports={}},5706:function(t,e,r){var n=r(1702),o=Map.prototype;t.exports={Map:Map,set:n(o.set),get:n(o.get),has:n(o.has),remove:n(o["delete"]),proto:o}},7066:function(t,e,r){"use strict";var n=r(9670);t.exports=function(){var t=n(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},4706:function(t,e,r){var n=r(6916),o=r(2597),a=r(7976),i=r(7066),c=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in c||o(t,"flags")||!a(c,t)?e:n(i,t)}},9405:function(t,e,r){var n=r(1702),o=Set.prototype;t.exports={Set:Set,add:n(o.add),has:n(o.has),remove:n(o["delete"]),proto:o}},4124:function(t,e,r){var n=r(7854),o=r(7293),a=r(7392),i=r(7871),c=r(3823),s=r(5268),u=n.structuredClone;t.exports=!!u&&!o((function(){if(c&&a>92||s&&a>94||i&&a>97)return!1;var t=new ArrayBuffer(8),e=u(t,{transfer:[t]});return 0!=t.byteLength||8!=e.byteLength}))},8053:function(t){var e=TypeError;t.exports=function(t,r){if(t<r)throw e("Not enough arguments");return t}},2801:function(t,e,r){"use strict";var n=r(2109),o=r(7854),a=r(5005),i=r(9114),c=r(3070).f,s=r(2597),u=r(5787),l=r(9587),f=r(6277),p=r(3678),v=r(1060),d=r(9781),h=r(1913),y="DOMException",b=a("Error"),_=a(y),g=function(){u(this,m);var t=arguments.length,e=f(t<1?void 0:arguments[0]),r=f(t<2?void 0:arguments[1],"Error"),n=new _(e,r),o=b(e);return o.name=y,c(n,"stack",i(1,v(o.stack,1))),l(n,this,g),n},m=g.prototype=_.prototype,x="stack"in b(y),w="stack"in new _(1,2),E=_&&d&&Object.getOwnPropertyDescriptor(o,y),R=!!E&&!(E.writable&&E.configurable),A=x&&!R&&!w;n({global:!0,constructor:!0,forced:h||A},{DOMException:A?g:_});var O=a(y),k=O.prototype;if(k.constructor!==O)for(var j in h||c(k,"constructor",i(1,O)),p)if(s(p,j)){var C=p[j],D=C.s;s(O,D)||c(O,D,i(6,C.c))}},1295:function(t,e,r){var n=r(1913),o=r(2109),a=r(7854),i=r(5005),c=r(1702),s=r(7293),u=r(9711),l=r(614),f=r(4411),p=r(8554),v=r(111),d=r(2190),h=r(408),y=r(9670),b=r(648),_=r(2597),g=r(6135),m=r(8880),x=r(6244),w=r(8053),E=r(4706),R=r(5706),A=r(9405),O=r(2914),k=r(4124),j=a.Object,C=a.Array,D=a.Date,I=a.Error,S=a.EvalError,T=a.RangeError,M=a.ReferenceError,N=a.SyntaxError,P=a.TypeError,U=a.URIError,F=a.PerformanceMark,B=a.WebAssembly,L=B&&B.CompileError||I,z=B&&B.LinkError||I,V=B&&B.RuntimeError||I,W=i("DOMException"),H=R.Map,$=R.has,q=R.get,G=R.set,Q=A.Set,Y=A.add,Z=i("Object","keys"),X=c([].push),K=c((!0).valueOf),J=c(1..valueOf),tt=c("".valueOf),et=c(D.prototype.getTime),rt=u("structuredClone"),nt="DataCloneError",ot="Transferring",at=function(t){return!s((function(){var e=new a.Set([7]),r=t(e),n=t(j(7));return r==e||!r.has(7)||"object"!=typeof n||7!=n}))&&t},it=function(t,e){return!s((function(){var r=new e,n=t({a:r,b:r});return!(n&&n.a===n.b&&n.a instanceof e&&n.a.stack===r.stack)}))},ct=function(t){return!s((function(){var e=t(new a.AggregateError([1],rt,{cause:3}));return"AggregateError"!=e.name||1!=e.errors[0]||e.message!=rt||3!=e.cause}))},st=a.structuredClone,ut=n||!it(st,I)||!it(st,W)||!ct(st),lt=!st&&at((function(t){return new F(rt,{detail:t}).detail})),ft=at(st)||lt,pt=function(t){throw new W("Uncloneable type: "+t,nt)},vt=function(t,e){throw new W((e||"Cloning")+" of "+t+" cannot be properly polyfilled in this engine",nt)},dt=function(t,e){return ft||vt(e),ft(t)},ht=function(){var t;try{t=new a.DataTransfer}catch(e){try{t=new a.ClipboardEvent("").clipboardData}catch(r){}}return t&&t.items&&t.files?t:null},yt=function(t,e){if(d(t)&&pt("Symbol"),!v(t))return t;if(e){if($(e,t))return q(e,t)}else e=new H;var r,n,o,c,s,u,f,p,h,y,w,R=b(t),A=!1;switch(R){case"Array":o=C(x(t)),A=!0;break;case"Object":o={},A=!0;break;case"Map":o=new H,A=!0;break;case"Set":o=new Q,A=!0;break;case"RegExp":o=new RegExp(t.source,E(t));break;case"Error":switch(n=t.name,n){case"AggregateError":o=i("AggregateError")([]);break;case"EvalError":o=S();break;case"RangeError":o=T();break;case"ReferenceError":o=M();break;case"SyntaxError":o=N();break;case"TypeError":o=P();break;case"URIError":o=U();break;case"CompileError":o=L();break;case"LinkError":o=z();break;case"RuntimeError":o=V();break;default:o=I()}A=!0;break;case"DOMException":o=new W(t.message,t.name),A=!0;break;case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":r=a[R],v(r)||vt(R),o=new r(yt(t.buffer,e),t.byteOffset,"DataView"===R?t.byteLength:t.length);break;case"DOMQuad":try{o=new DOMQuad(yt(t.p1,e),yt(t.p2,e),yt(t.p3,e),yt(t.p4,e))}catch(k){o=dt(t,R)}break;case"File":if(ft)try{o=ft(t),b(o)!==R&&(o=void 0)}catch(k){}if(!o)try{o=new File([t],t.name,t)}catch(k){}o||vt(R);break;case"FileList":if(c=ht(),c){for(s=0,u=x(t);s<u;s++)c.items.add(yt(t[s],e));o=c.files}else o=dt(t,R);break;case"ImageData":try{o=new ImageData(yt(t.data,e),t.width,t.height,{colorSpace:t.colorSpace})}catch(k){o=dt(t,R)}break;default:if(ft)o=ft(t);else switch(R){case"BigInt":o=j(t.valueOf());break;case"Boolean":o=j(K(t));break;case"Number":o=j(J(t));break;case"String":o=j(tt(t));break;case"Date":o=new D(et(t));break;case"ArrayBuffer":r=a.DataView,r||"function"==typeof t.slice||vt(R);try{if("function"!=typeof t.slice||t.resizable){u=t.byteLength,w="maxByteLength"in t?{maxByteLength:t.maxByteLength}:void 0,o=new ArrayBuffer(u,w),h=new r(t),y=new r(o);for(s=0;s<u;s++)y.setUint8(s,h.getUint8(s))}else o=t.slice(0)}catch(k){throw new W("ArrayBuffer is detached",nt)}break;case"SharedArrayBuffer":o=t;break;case"Blob":try{o=t.slice(0,t.size,t.type)}catch(k){vt(R)}break;case"DOMPoint":case"DOMPointReadOnly":r=a[R];try{o=r.fromPoint?r.fromPoint(t):new r(t.x,t.y,t.z,t.w)}catch(k){vt(R)}break;case"DOMRect":case"DOMRectReadOnly":r=a[R];try{o=r.fromRect?r.fromRect(t):new r(t.x,t.y,t.width,t.height)}catch(k){vt(R)}break;case"DOMMatrix":case"DOMMatrixReadOnly":r=a[R];try{o=r.fromMatrix?r.fromMatrix(t):new r(t)}catch(k){vt(R)}break;case"AudioData":case"VideoFrame":l(t.clone)||vt(R);try{o=t.clone()}catch(k){pt(R)}break;case"CropTarget":case"CryptoKey":case"FileSystemDirectoryHandle":case"FileSystemFileHandle":case"FileSystemHandle":case"GPUCompilationInfo":case"GPUCompilationMessage":case"ImageBitmap":case"RTCCertificate":case"WebAssembly.Module":vt(R);default:pt(R)}}if(G(e,t,o),A)switch(R){case"Array":case"Object":for(f=Z(t),s=0,u=x(f);s<u;s++)p=f[s],g(o,p,yt(t[p],e));break;case"Map":t.forEach((function(t,r){G(o,yt(r,e),yt(t,e))}));break;case"Set":t.forEach((function(t){Y(o,yt(t,e))}));break;case"Error":m(o,"message",yt(t.message,e)),_(t,"cause")&&m(o,"cause",yt(t.cause,e)),"AggregateError"==n&&(o.errors=yt(t.errors,e));case"DOMException":O&&m(o,"stack",yt(t.stack,e))}return o},bt=function(t,e){if(!v(t))throw P("Transfer option cannot be converted to a sequence");var r=[];h(t,(function(t){X(r,y(t))}));var n,o,i,c,s,u,p,d=0,_=x(r);if(k){c=st(r,{transfer:r});while(d<_)G(e,r[d],c[d++])}else while(d<_){if(n=r[d++],$(e,n))throw new W("Duplicate transferable",nt);switch(o=b(n),o){case"ImageBitmap":i=a.OffscreenCanvas,f(i)||vt(o,ot);try{u=new i(n.width,n.height),p=u.getContext("bitmaprenderer"),p.transferFromImageBitmap(n),s=u.transferToImageBitmap()}catch(g){}break;case"AudioData":case"VideoFrame":l(n.clone)&&l(n.close)||vt(o,ot);try{s=n.clone(),n.close()}catch(g){}break;case"ArrayBuffer":l(n.transfer)||vt(o,ot),s=n.transfer();break;case"MediaSourceHandle":case"MessagePort":case"OffscreenCanvas":case"ReadableStream":case"TransformStream":case"WritableStream":vt(o,ot)}if(void 0===s)throw new W("This object cannot be transferred: "+o,nt);G(e,n,s)}};o({global:!0,enumerable:!0,sham:!k,forced:ut},{structuredClone:function(t){var e,r=w(arguments.length,1)>1&&!p(arguments[1])?y(arguments[1]):void 0,n=r?r.transfer:void 0;return void 0!==n&&(e=new H,bt(n,e)),yt(t,e)}})},5623:function(t,e,r){var n=r(3301),o=r(3992),a=r(2762),i=r(3584),c=r(5745);function s(t){var e=-1,r=null==t?0:t.length;this.clear();while(++e<r){var n=t[e];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype["delete"]=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=c,t.exports=s},5094:function(t,e,r){var n=r(4209),o=r(6326),a=r(4697),i=r(556),c=r(2405);function s(t){var e=-1,r=null==t?0:t.length;this.clear();while(++e<r){var n=t[e];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype["delete"]=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=c,t.exports=s},9014:function(t,e,r){var n=r(6213),o=r(9159),a=n(o,"Map");t.exports=a},8082:function(t,e,r){var n=r(1052),o=r(9240),a=r(8843),i=r(27),c=r(9154);function s(t){var e=-1,r=null==t?0:t.length;this.clear();while(++e<r){var n=t[e];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype["delete"]=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=c,t.exports=s},4614:function(t,e,r){var n=r(5094),o=r(846),a=r(1353),i=r(2334),c=r(252),s=r(1538);function u(t){var e=this.__data__=new n(t);this.size=e.size}u.prototype.clear=o,u.prototype["delete"]=a,u.prototype.get=i,u.prototype.has=c,u.prototype.set=s,t.exports=u},9016:function(t,e,r){var n=r(9159),o=n.Symbol;t.exports=o},6522:function(t,e,r){var n=r(9159),o=n.Uint8Array;t.exports=o},9707:function(t){function e(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}t.exports=e},7498:function(t,e,r){r(7658);var n=r(2802),o=r(8804),a=r(6602),i=r(1976),c=r(8286),s=r(6965),u=Object.prototype,l=u.hasOwnProperty;function f(t,e){var r=a(t),u=!r&&o(t),f=!r&&!u&&i(t),p=!r&&!u&&!f&&s(t),v=r||u||f||p,d=v?n(t.length,String):[],h=d.length;for(var y in t)!e&&!l.call(t,y)||v&&("length"==y||f&&("offset"==y||"parent"==y)||p&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||c(y,h))||d.push(y);return d}t.exports=f},5234:function(t,e,r){var n=r(3883),o=r(4240);function a(t,e,r){(void 0!==r&&!o(t[e],r)||void 0===r&&!(e in t))&&n(t,e,r)}t.exports=a},1767:function(t,e,r){var n=r(3883),o=r(4240),a=Object.prototype,i=a.hasOwnProperty;function c(t,e,r){var a=t[e];i.call(t,e)&&o(a,r)&&(void 0!==r||e in t)||n(t,e,r)}t.exports=c},6637:function(t,e,r){var n=r(4240);function o(t,e){var r=t.length;while(r--)if(n(t[r][0],e))return r;return-1}t.exports=o},3883:function(t,e,r){var n=r(6105);function o(t,e,r){"__proto__"==e&&n?n(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}t.exports=o},1262:function(t,e,r){var n=r(150),o=Object.create,a=function(){function t(){}return function(e){if(!n(e))return{};if(o)return o(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();t.exports=a},4427:function(t,e,r){var n=r(1686),o=n();t.exports=o},6423:function(t,e,r){var n=r(9016),o=r(2366),a=r(2886),i="[object Null]",c="[object Undefined]",s=n?n.toStringTag:void 0;function u(t){return null==t?void 0===t?c:i:s&&s in Object(t)?o(t):a(t)}t.exports=u},9986:function(t,e,r){var n=r(6423),o=r(4430),a="[object Arguments]";function i(t){return o(t)&&n(t)==a}t.exports=i},6853:function(t,e,r){var n=r(9314),o=r(2604),a=r(150),i=r(627),c=/[\\^$.*+?()[\]{}|]/g,s=/^\[object .+?Constructor\]$/,u=Function.prototype,l=Object.prototype,f=u.toString,p=l.hasOwnProperty,v=RegExp("^"+f.call(p).replace(c,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function d(t){if(!a(t)||o(t))return!1;var e=n(t)?v:s;return e.test(i(t))}t.exports=d},6930:function(t,e,r){var n=r(6423),o=r(4629),a=r(4430),i="[object Arguments]",c="[object Array]",s="[object Boolean]",u="[object Date]",l="[object Error]",f="[object Function]",p="[object Map]",v="[object Number]",d="[object Object]",h="[object RegExp]",y="[object Set]",b="[object String]",_="[object WeakMap]",g="[object ArrayBuffer]",m="[object DataView]",x="[object Float32Array]",w="[object Float64Array]",E="[object Int8Array]",R="[object Int16Array]",A="[object Int32Array]",O="[object Uint8Array]",k="[object Uint8ClampedArray]",j="[object Uint16Array]",C="[object Uint32Array]",D={};function I(t){return a(t)&&o(t.length)&&!!D[n(t)]}D[x]=D[w]=D[E]=D[R]=D[A]=D[O]=D[k]=D[j]=D[C]=!0,D[i]=D[c]=D[g]=D[s]=D[m]=D[u]=D[l]=D[f]=D[p]=D[v]=D[d]=D[h]=D[y]=D[b]=D[_]=!1,t.exports=I},6101:function(t,e,r){r(7658);var n=r(150),o=r(9192),a=r(5083),i=Object.prototype,c=i.hasOwnProperty;function s(t){if(!n(t))return a(t);var e=o(t),r=[];for(var i in t)("constructor"!=i||!e&&c.call(t,i))&&r.push(i);return r}t.exports=s},1720:function(t,e,r){var n=r(4614),o=r(5234),a=r(4427),i=r(9661),c=r(150),s=r(4494),u=r(6334);function l(t,e,r,f,p){t!==e&&a(e,(function(a,s){if(p||(p=new n),c(a))i(t,e,s,r,l,f,p);else{var v=f?f(u(t,s),a,s+"",t,e,p):void 0;void 0===v&&(v=a),o(t,s,v)}}),s)}t.exports=l},9661:function(t,e,r){var n=r(5234),o=r(9097),a=r(2385),i=r(1548),c=r(8895),s=r(8804),u=r(6602),l=r(8306),f=r(1976),p=r(9314),v=r(150),d=r(1012),h=r(6965),y=r(6334),b=r(5791);function _(t,e,r,_,g,m,x){var w=y(t,r),E=y(e,r),R=x.get(E);if(R)n(t,r,R);else{var A=m?m(w,E,r+"",t,e,x):void 0,O=void 0===A;if(O){var k=u(E),j=!k&&f(E),C=!k&&!j&&h(E);A=E,k||j||C?u(w)?A=w:l(w)?A=i(w):j?(O=!1,A=o(E,!0)):C?(O=!1,A=a(E,!0)):A=[]:d(E)||s(E)?(A=w,s(w)?A=b(w):v(w)&&!p(w)||(A=c(E))):O=!1}O&&(x.set(E,A),g(A,E,_,m,x),x["delete"](E)),n(t,r,A)}}t.exports=_},7628:function(t,e,r){var n=r(9761),o=r(2187),a=r(4396);function i(t,e){return a(o(t,e,n),t+"")}t.exports=i},8795:function(t,e,r){var n=r(9483),o=r(6105),a=r(9761),i=o?function(t,e){return o(t,"toString",{configurable:!0,enumerable:!1,value:n(e),writable:!0})}:a;t.exports=i},2802:function(t){function e(t,e){var r=-1,n=Array(t);while(++r<t)n[r]=e(r);return n}t.exports=e},7362:function(t){function e(t){return function(e){return t(e)}}t.exports=e},2635:function(t,e,r){var n=r(6522);function o(t){var e=new t.constructor(t.byteLength);return new n(e).set(new n(t)),e}t.exports=o},9097:function(t,e,r){t=r.nmd(t);var n=r(9159),o=e&&!e.nodeType&&e,a=o&&t&&!t.nodeType&&t,i=a&&a.exports===o,c=i?n.Buffer:void 0,s=c?c.allocUnsafe:void 0;function u(t,e){if(e)return t.slice();var r=t.length,n=s?s(r):new t.constructor(r);return t.copy(n),n}t.exports=u},2385:function(t,e,r){var n=r(2635);function o(t,e){var r=e?n(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}t.exports=o},1548:function(t){function e(t,e){var r=-1,n=t.length;e||(e=Array(n));while(++r<n)e[r]=t[r];return e}t.exports=e},6877:function(t,e,r){var n=r(1767),o=r(3883);function a(t,e,r,a){var i=!r;r||(r={});var c=-1,s=e.length;while(++c<s){var u=e[c],l=a?a(r[u],t[u],u,r,t):void 0;void 0===l&&(l=t[u]),i?o(r,u,l):n(r,u,l)}return r}t.exports=a},9749:function(t,e,r){var n=r(9159),o=n["__core-js_shared__"];t.exports=o},5882:function(t,e,r){var n=r(7628),o=r(5875);function a(t){return n((function(e,r){var n=-1,a=r.length,i=a>1?r[a-1]:void 0,c=a>2?r[2]:void 0;i=t.length>3&&"function"==typeof i?(a--,i):void 0,c&&o(r[0],r[1],c)&&(i=a<3?void 0:i,a=1),e=Object(e);while(++n<a){var s=r[n];s&&t(e,s,n,i)}return e}))}t.exports=a},1686:function(t){function e(t){return function(e,r,n){var o=-1,a=Object(e),i=n(e),c=i.length;while(c--){var s=i[t?c:++o];if(!1===r(a[s],s,a))break}return e}}t.exports=e},6105:function(t,e,r){var n=r(6213),o=function(){try{var t=n(Object,"defineProperty");return t({},"",{}),t}catch(e){}}();t.exports=o},791:function(t,e,r){var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;t.exports=n},3582:function(t,e,r){var n=r(5462);function o(t,e){var r=t.__data__;return n(e)?r["string"==typeof e?"string":"hash"]:r.map}t.exports=o},6213:function(t,e,r){var n=r(6853),o=r(8474);function a(t,e){var r=o(t,e);return n(r)?r:void 0}t.exports=a},4677:function(t,e,r){var n=r(1867),o=n(Object.getPrototypeOf,Object);t.exports=o},2366:function(t,e,r){var n=r(9016),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,c=n?n.toStringTag:void 0;function s(t){var e=a.call(t,c),r=t[c];try{t[c]=void 0;var n=!0}catch(s){}var o=i.call(t);return n&&(e?t[c]=r:delete t[c]),o}t.exports=s},8474:function(t){function e(t,e){return null==t?void 0:t[e]}t.exports=e},3301:function(t,e,r){var n=r(988);function o(){this.__data__=n?n(null):{},this.size=0}t.exports=o},3992:function(t){function e(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}t.exports=e},2762:function(t,e,r){var n=r(988),o="__lodash_hash_undefined__",a=Object.prototype,i=a.hasOwnProperty;function c(t){var e=this.__data__;if(n){var r=e[t];return r===o?void 0:r}return i.call(e,t)?e[t]:void 0}t.exports=c},3584:function(t,e,r){var n=r(988),o=Object.prototype,a=o.hasOwnProperty;function i(t){var e=this.__data__;return n?void 0!==e[t]:a.call(e,t)}t.exports=i},5745:function(t,e,r){var n=r(988),o="__lodash_hash_undefined__";function a(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=n&&void 0===e?o:e,this}t.exports=a},8895:function(t,e,r){var n=r(1262),o=r(4677),a=r(9192);function i(t){return"function"!=typeof t.constructor||a(t)?{}:n(o(t))}t.exports=i},8286:function(t){var e=9007199254740991,r=/^(?:0|[1-9]\d*)$/;function n(t,n){var o=typeof t;return n=null==n?e:n,!!n&&("number"==o||"symbol"!=o&&r.test(t))&&t>-1&&t%1==0&&t<n}t.exports=n},5875:function(t,e,r){var n=r(4240),o=r(5372),a=r(8286),i=r(150);function c(t,e,r){if(!i(r))return!1;var c=typeof e;return!!("number"==c?o(r)&&a(e,r.length):"string"==c&&e in r)&&n(r[e],t)}t.exports=c},5462:function(t){function e(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}t.exports=e},2604:function(t,e,r){var n=r(9749),o=function(){var t=/[^.]+$/.exec(n&&n.keys&&n.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function a(t){return!!o&&o in t}t.exports=a},9192:function(t){var e=Object.prototype;function r(t){var r=t&&t.constructor,n="function"==typeof r&&r.prototype||e;return t===n}t.exports=r},4209:function(t){function e(){this.__data__=[],this.size=0}t.exports=e},6326:function(t,e,r){var n=r(6637),o=Array.prototype,a=o.splice;function i(t){var e=this.__data__,r=n(e,t);if(r<0)return!1;var o=e.length-1;return r==o?e.pop():a.call(e,r,1),--this.size,!0}t.exports=i},4697:function(t,e,r){var n=r(6637);function o(t){var e=this.__data__,r=n(e,t);return r<0?void 0:e[r][1]}t.exports=o},556:function(t,e,r){var n=r(6637);function o(t){return n(this.__data__,t)>-1}t.exports=o},2405:function(t,e,r){r(7658);var n=r(6637);function o(t,e){var r=this.__data__,o=n(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this}t.exports=o},1052:function(t,e,r){var n=r(5623),o=r(5094),a=r(9014);function i(){this.size=0,this.__data__={hash:new n,map:new(a||o),string:new n}}t.exports=i},9240:function(t,e,r){var n=r(3582);function o(t){var e=n(this,t)["delete"](t);return this.size-=e?1:0,e}t.exports=o},8843:function(t,e,r){var n=r(3582);function o(t){return n(this,t).get(t)}t.exports=o},27:function(t,e,r){var n=r(3582);function o(t){return n(this,t).has(t)}t.exports=o},9154:function(t,e,r){var n=r(3582);function o(t,e){var r=n(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this}t.exports=o},988:function(t,e,r){var n=r(6213),o=n(Object,"create");t.exports=o},5083:function(t,e,r){function n(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}r(7658),t.exports=n},1330:function(t,e,r){t=r.nmd(t);var n=r(791),o=e&&!e.nodeType&&e,a=o&&t&&!t.nodeType&&t,i=a&&a.exports===o,c=i&&n.process,s=function(){try{var t=a&&a.require&&a.require("util").types;return t||c&&c.binding&&c.binding("util")}catch(e){}}();t.exports=s},2886:function(t){var e=Object.prototype,r=e.toString;function n(t){return r.call(t)}t.exports=n},1867:function(t){function e(t,e){return function(r){return t(e(r))}}t.exports=e},2187:function(t,e,r){var n=r(9707),o=Math.max;function a(t,e,r){return e=o(void 0===e?t.length-1:e,0),function(){var a=arguments,i=-1,c=o(a.length-e,0),s=Array(c);while(++i<c)s[i]=a[e+i];i=-1;var u=Array(e+1);while(++i<e)u[i]=a[i];return u[e]=r(s),n(t,this,u)}}t.exports=a},9159:function(t,e,r){var n=r(791),o="object"==typeof self&&self&&self.Object===Object&&self,a=n||o||Function("return this")();t.exports=a},6334:function(t){function e(t,e){if(("constructor"!==e||"function"!==typeof t[e])&&"__proto__"!=e)return t[e]}t.exports=e},4396:function(t,e,r){var n=r(8795),o=r(2499),a=o(n);t.exports=a},2499:function(t){var e=800,r=16,n=Date.now;function o(t){var o=0,a=0;return function(){var i=n(),c=r-(i-a);if(a=i,c>0){if(++o>=e)return arguments[0]}else o=0;return t.apply(void 0,arguments)}}t.exports=o},846:function(t,e,r){var n=r(5094);function o(){this.__data__=new n,this.size=0}t.exports=o},1353:function(t){function e(t){var e=this.__data__,r=e["delete"](t);return this.size=e.size,r}t.exports=e},2334:function(t){function e(t){return this.__data__.get(t)}t.exports=e},252:function(t){function e(t){return this.__data__.has(t)}t.exports=e},1538:function(t,e,r){r(7658);var n=r(5094),o=r(9014),a=r(8082),i=200;function c(t,e){var r=this.__data__;if(r instanceof n){var c=r.__data__;if(!o||c.length<i-1)return c.push([t,e]),this.size=++r.size,this;r=this.__data__=new a(c)}return r.set(t,e),this.size=r.size,this}t.exports=c},627:function(t){var e=Function.prototype,r=e.toString;function n(t){if(null!=t){try{return r.call(t)}catch(e){}try{return t+""}catch(e){}}return""}t.exports=n},9483:function(t){function e(t){return function(){return t}}t.exports=e},4240:function(t){function e(t,e){return t===e||t!==t&&e!==e}t.exports=e},9761:function(t){function e(t){return t}t.exports=e},8804:function(t,e,r){var n=r(9986),o=r(4430),a=Object.prototype,i=a.hasOwnProperty,c=a.propertyIsEnumerable,s=n(function(){return arguments}())?n:function(t){return o(t)&&i.call(t,"callee")&&!c.call(t,"callee")};t.exports=s},6602:function(t){var e=Array.isArray;t.exports=e},5372:function(t,e,r){var n=r(9314),o=r(4629);function a(t){return null!=t&&o(t.length)&&!n(t)}t.exports=a},8306:function(t,e,r){var n=r(5372),o=r(4430);function a(t){return o(t)&&n(t)}t.exports=a},1976:function(t,e,r){t=r.nmd(t);var n=r(9159),o=r(2225),a=e&&!e.nodeType&&e,i=a&&t&&!t.nodeType&&t,c=i&&i.exports===a,s=c?n.Buffer:void 0,u=s?s.isBuffer:void 0,l=u||o;t.exports=l},9314:function(t,e,r){var n=r(6423),o=r(150),a="[object AsyncFunction]",i="[object Function]",c="[object GeneratorFunction]",s="[object Proxy]";function u(t){if(!o(t))return!1;var e=n(t);return e==i||e==c||e==a||e==s}t.exports=u},4629:function(t){var e=9007199254740991;function r(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=e}t.exports=r},150:function(t){function e(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=e},4430:function(t){function e(t){return null!=t&&"object"==typeof t}t.exports=e},1012:function(t,e,r){var n=r(6423),o=r(4677),a=r(4430),i="[object Object]",c=Function.prototype,s=Object.prototype,u=c.toString,l=s.hasOwnProperty,f=u.call(Object);function p(t){if(!a(t)||n(t)!=i)return!1;var e=o(t);if(null===e)return!0;var r=l.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&u.call(r)==f}t.exports=p},6965:function(t,e,r){var n=r(6930),o=r(7362),a=r(1330),i=a&&a.isTypedArray,c=i?o(i):n;t.exports=c},4494:function(t,e,r){var n=r(7498),o=r(6101),a=r(5372);function i(t){return a(t)?n(t,!0):o(t)}t.exports=i},1823:function(t,e,r){var n=r(1720),o=r(5882),a=o((function(t,e,r){n(t,e,r)}));t.exports=a},2225:function(t){function e(){return!1}t.exports=e},5791:function(t,e,r){var n=r(6877),o=r(4494);function a(t){return n(t,o(t))}t.exports=a},3278:function(t,e,r){r(2801),r(1295);const n=structuredClone,o=r(1823),a={DOM:{target:".viewport"},CONSTRAINS:{audio:!1,video:{width:{min:160,ideal:2400,max:10240},height:{min:120,ideal:1440,max:4320},facingMode:"environment",aspectRatio:{ideal:16/9},frameRate:{min:1,ideal:16,max:30}}}};t.exports=(t=a.DOM.target,e=a.CONSTRAINS)=>{const r={target:t,viewport:null,canvas:null,video:null,imageBuffer:null},i=(t,e,r,{classes:n,attrs:o}={})=>{let a=t.querySelector(e);return a||(a=document.createElement(r),t.appendChild(a)),a&&(n&&(Array.isArray(n)?n.forEach((t=>a.classList.add(t))):"string"===typeof n&&a.classList.add(n)),o&&Object.entries(o).forEach((([t,e])=>a[t]=e))),a},c=t=>{let e;e=t?"string"===typeof t?document.querySelector(t):t:document.querySelector(".viewport");let n=i(e,":scope>canvas","canvas"),a=i(e,":scope>video","video",{autoplay:!0}),c=i(e,":scope>canvas.image-buffer","canvas",{classes:"image-buffer"});o(r,{viewport:e,canvas:n,video:a,imageBuffer:c})},s=t=>{const{viewport:e,canvas:n,imageBuffer:a}=r;e.style.aspectRatio=t.aspectRatio;const i={width:t.width,height:t.height};o(n,i),o(a,i)},u={constraints:{init:o(a.CONSTRAINS,e,{audio:!1}),apply:null},stream:null,videoTrack:null},l=async t=>{try{const e=await navigator.mediaDevices.getUserMedia(t);u.stream=e;const{video:n}=r;return n.srcObject=e,e.getVideoTracks().forEach((t=>{u.videoTrack=t;const e=t.getSettings();s(e)})),e}catch(e){return Promise.reject(e)}},f=()=>(u.constraints.apply||(u.constraints.apply=n(u.constraints.init)),u.constraints.apply),p=async t=>{const e=f();return e.video.aspectRatio={exact:t},await _(),await l(e)},v=async()=>{const{stream:t}=u;if(t){const e=t.getVideoTracks()[0],r=e.getSettings();if(r){let t=r.facingMode;"user"===t&&(t="environment");const e=f();return e.video.facingMode={ideal:t},await _(),await l(e)}}return t},d=(t,e)=>{const r=e.getContext("2d"),n={w:Math.floor(e.width),h:Math.floor(e.height)};r.clearRect(0,0,n.w,n.h),r.drawImage(t,0,0,n.w,n.h)},h={pause:!1},y=async()=>{try{let{stream:t}=u;return t||(t=await l(u.constraints.init)),u.constraints.apply=null,t&&(h.pause=!1,t.getVideoTracks().forEach((t=>{t.enabled=!0}))),Promise.resolve(u.stream)}catch(t){return Promise.reject(t)}},b=async()=>{try{const{stream:t}=u;return t&&(h.pause=!0,t.getVideoTracks().forEach((t=>{t.enabled=!1}))),Promise.resolve(t)}catch(t){return Promise.reject(t)}},_=async()=>{try{const{stream:t}=u;return t&&(t.getTracks().forEach((t=>{t.enabled=!0,t.stop()})),u.stream=null,h.pause=!1),Promise.resolve(t)}catch(t){return Promise.reject(t)}},g=async(t,e)=>{const{video:n,imageBuffer:o}=r;return d(n,o),new Promise(((r,n)=>{try{o.toBlob((t=>{r(t)}),t,e)}catch(a){n(a)}}))},m=()=>{const{video:t,imageBuffer:e}=r;return d(t,e),e.toDataURL()};return{get DOM(){return r},async init(){return new Promise((e=>(c(t),e(this))))},async start(){return await y()},async pause(){return await b()},async stop(){return await _()},async blob(){return await g()},snap(){return m()},async applyAspectRatio(t){return await p(t)},async toggleFacingMode(t){return await v(t)}}}},7935:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return G}});var n=r(3396),o=r(7139),a=r(9242);const i=t=>((0,n.dD)("data-v-4c23fb1a"),t=t(),(0,n.Cn)(),t),c={class:"wapper"},s={class:"main"},u=i((()=>(0,n._)("section",{class:"camera camera-full"},[(0,n._)("div",{class:"viewport"},[(0,n._)("canvas"),(0,n._)("video",{autoplay:"",playsinline:""}),(0,n._)("canvas",{class:"image-buffer"})])],-1))),l={class:"position-relative",style:{width:"100%",height:"100%"}},f=i((()=>(0,n._)("div",{class:"position-absolute top-50 start-50 translate-middle"},[(0,n._)("div",{class:"spinner-border",role:"status",style:{width:"3rem",height:"3rem"}},[(0,n._)("span",{class:"visually-hidden"},"Loading...")]),(0,n._)("p",null,"カメラの権限を確認中...")],-1))),p=[f],v={class:"camera-menu fixed-top m-0 p-0"},d={class:"nav display-1"},h={class:"nav-item"},y=i((()=>(0,n._)("i",{class:"bi bi-x-square"},null,-1))),b=[y],_={class:"nav-item dropdown"},g=i((()=>(0,n._)("button",{class:"nav-link dropdown-toggle","data-bs-toggle":"dropdown","data-bs-display":"static",role:"button","aria-expanded":"false"},[(0,n._)("i",{class:"bi bi-aspect-ratio"})],-1))),m={class:"dropdown-menu dropdown-menu-lg-end dropdown-menu-dark"},x=i((()=>(0,n._)("li",null,[(0,n._)("p",{class:"dropdown-header fs-5"},"ascpect ratio")],-1))),w=i((()=>(0,n._)("li",null,[(0,n._)("hr",{class:"dropdown-divider"})],-1))),E=i((()=>(0,n._)("i",{class:"bi bi-aspect-ratio"},null,-1))),R=i((()=>(0,n._)("i",{class:"bi bi-aspect-ratio"},null,-1))),A=i((()=>(0,n._)("i",{class:"bi bi-aspect-ratio"},null,-1))),O={class:"nav-item"},k=i((()=>(0,n._)("i",{class:"bi bi-phone-flip"},null,-1))),j=[k],C=i((()=>(0,n._)("div",null,null,-1))),D=i((()=>(0,n._)("div",null,null,-1))),I={class:"fixed-bottom"},S=i((()=>(0,n._)("i",{class:"bi bi-caret-right-square"},null,-1))),T=[S],M=i((()=>(0,n._)("i",{class:"bi bi-pause-circle"},null,-1))),N=[M],P=i((()=>(0,n._)("i",{class:"bi bi-stop-fill"},null,-1))),U=[P];function F(t,e){return(0,n.wg)(),(0,n.iD)("div",c,[(0,n._)("main",s,[u,(0,n._)("section",{class:(0,o.C_)(["cover",t.ui.loaded?"":"cover-loading"])},[(0,n.wy)((0,n._)("div",l,p,512),[[a.F8,!t.ui.loaded]])],2),(0,n._)("nav",v,[(0,n._)("ul",d,[(0,n._)("li",h,[(0,n.WI)(t.$slots,"close-button",{},(()=>[(0,n._)("button",{class:"nav-link",onClick:e[0]||(e[0]=(...e)=>t.close&&t.close(...e))},b)]),!0)]),(0,n._)("li",_,[g,(0,n._)("ul",m,[x,w,(0,n._)("li",null,[(0,n._)("button",{class:"dropdown-item","data-aspect-ratio":"16/9",onClick:e[1]||(e[1]=(...e)=>t.doClickChangeAspectRatio&&t.doClickChangeAspectRatio(...e))},[E,(0,n.Uk)(" 16/9 ")])]),(0,n._)("li",null,[(0,n._)("button",{class:"dropdown-item","data-aspect-ratio":"4/3",onClick:e[2]||(e[2]=(...e)=>t.doClickChangeAspectRatio&&t.doClickChangeAspectRatio(...e))},[R,(0,n.Uk)(" 4/3 ")])]),(0,n._)("li",null,[(0,n._)("button",{class:"dropdown-item","data-aspect-ratio":"1/1",onClick:e[3]||(e[3]=(...e)=>t.doClickChangeAspectRatio&&t.doClickChangeAspectRatio(...e))},[A,(0,n.Uk)(" 1/1 ")])])])]),(0,n._)("li",O,[(0,n._)("button",{class:"nav-link",type:"button",onClick:e[4]||(e[4]=(...e)=>t.doClickFacingMode&&t.doClickFacingMode(...e))},j)])]),C,D]),(0,n._)("section",I,[(0,n.WI)(t.$slots,"start-button",{},(()=>[(0,n._)("button",{class:"btn btn-primary",onClick:e[5]||(e[5]=(...e)=>t.start&&t.start(...e))},T)]),!0),(0,n.WI)(t.$slots,"pause-button",{},(()=>[(0,n._)("button",{class:"btn btn-warning",onClick:e[6]||(e[6]=(...e)=>t.pause&&t.pause(...e))},N)]),!0),(0,n.WI)(t.$slots,"stop-button",{},(()=>[(0,n._)("button",{class:"btn btn-danger",onClick:e[7]||(e[7]=(...e)=>t.stop&&t.stop(...e))},U)]),!0)])])])}var B=r(4870),L=r(6542),z=r(3278),V=r.n(z);const W=(t,e)=>{const r=(0,L.tv)(),o=(0,B.iH)({instance:null}),a=(0,B.qj)({loaded:!1,error:""}),i=t=>{t&&t.preventDefault(),r.back()},c=t=>{t&&t.preventDefault();const r=o.value.instance;return r.start().then((t=>(a.loaded=!0,e.emit("start",{data:r}),t))).catch((t=>(console.error(t),a.error=t,t)))},s=t=>{t&&t.preventDefault();const r=o.value.instance;return r.pause().then((t=>(e.emit("pause",{data:r}),t)))},u=t=>{t&&t.preventDefault(),a.loaded=!1;const r=o.value.instance;return r.stop().then((t=>(e.emit("stop",{data:r}),t)))},l=()=>{const t=o.value.instance;return t.snap()},f=t=>{t&&t.preventDefault();const e=t.target,r=e.dataset.aspectRatio,n=o.value.instance;switch(r){case"16/9":n.applyAspectRatio(16/9);break;case"4/3":n.applyAspectRatio(4/3);break;case"1/1":n.applyAspectRatio(1);break;default:break}},p=t=>{t&&t.preventDefault();const e=o.value.instance;e.toggleFacingMode()};return(0,n.bv)((()=>{const t=V()(".viewport",{video:{width:{min:160,ideal:2400,max:10240},height:{min:120,ideal:1440,max:4320},facingMode:{ideal:"environment"},aspectRatio:{ideal:16/9}}});o.value.instance=t,t.init().then((()=>{e.emit("init",{data:t})}))})),(0,n.Ah)((()=>{u()})),{ui:a,close:i,start:c,pause:s,stop:u,snap:l,doClickChangeAspectRatio:f,doClickFacingMode:p}};var H=(0,n.aZ)({name:"p-camera",setup:W}),$=r(89);const q=(0,$.Z)(H,[["render",F],["__scopeId","data-v-4c23fb1a"]]);var G=q}}]);
//# sourceMappingURL=935.dc071c31.js.map