(()=>{"use strict";var e={387:(e,n,t)=>{e.exports=t.p+"41d79fbd18157bf8b180.wasm"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.u=e=>e+".index.js",t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{const e=Symbol("Comlink.proxy"),n=Symbol("Comlink.endpoint"),r=Symbol("Comlink.releaseProxy"),a=Symbol("Comlink.thrown"),o=e=>"object"==typeof e&&null!==e||"function"==typeof e,i=new Map([["proxy",{canHandle:n=>o(n)&&n[e],serialize(e){const{port1:n,port2:t}=new MessageChannel;return c(e,n),[t,[t]]},deserialize:e=>(e.start(),s(e))}],["throw",{canHandle:e=>o(e)&&a in e,serialize({value:e}){let n;return n=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[n,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function c(n,t=self){t.addEventListener("message",(function r(o){if(!o||!o.data)return;const{id:i,type:s,path:_}=Object.assign({path:[]},o.data),f=(o.data.argumentList||[]).map(d);let l;try{const t=_.slice(0,-1).reduce(((e,n)=>e[n]),n),r=_.reduce(((e,n)=>e[n]),n);switch(s){case"GET":l=r;break;case"SET":t[_.slice(-1)[0]]=d(o.data.value),l=!0;break;case"APPLY":l=r.apply(t,f);break;case"CONSTRUCT":l=function(n){return Object.assign(n,{[e]:!0})}(new r(...f));break;case"ENDPOINT":{const{port1:e,port2:t}=new MessageChannel;c(n,t),l=w(e,[e])}break;case"RELEASE":l=void 0;break;default:return}}catch(e){l={value:e,[a]:0}}Promise.resolve(l).catch((e=>({value:e,[a]:0}))).then((e=>{const[n,a]=g(e);t.postMessage(Object.assign(Object.assign({},n),{id:i}),a),"RELEASE"===s&&(t.removeEventListener("message",r),u(t))}))})),t.start&&t.start()}function u(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function s(e,n){return f(e,[],n)}function _(e){if(e)throw new Error("Proxy has been released and is not useable")}function f(e,t=[],a=function(){}){let o=!1;const i=new Proxy(a,{get(n,a){if(_(o),a===r)return()=>p(e,{type:"RELEASE",path:t.map((e=>e.toString()))}).then((()=>{u(e),o=!0}));if("then"===a){if(0===t.length)return{then:()=>i};const n=p(e,{type:"GET",path:t.map((e=>e.toString()))}).then(d);return n.then.bind(n)}return f(e,[...t,a])},set(n,r,a){_(o);const[i,c]=g(a);return p(e,{type:"SET",path:[...t,r].map((e=>e.toString())),value:i},c).then(d)},apply(r,a,i){_(o);const c=t[t.length-1];if(c===n)return p(e,{type:"ENDPOINT"}).then(d);if("bind"===c)return f(e,t.slice(0,-1));const[u,s]=l(i);return p(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:u},s).then(d)},construct(n,r){_(o);const[a,i]=l(r);return p(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:a},i).then(d)}});return i}function l(e){const n=e.map(g);return[n.map((e=>e[0])),(t=n.map((e=>e[1])),Array.prototype.concat.apply([],t))];var t}const b=new WeakMap;function w(e,n){return b.set(e,n),e}function g(e){for(const[n,t]of i)if(t.canHandle(e)){const[r,a]=t.serialize(e);return[{type:"HANDLER",name:n,value:r},a]}return[{type:"RAW",value:e},b.get(e)||[]]}function d(e){switch(e.type){case"HANDLER":return i.get(e.name).deserialize(e.value);case"RAW":return e.value}}function p(e,n,t){return new Promise((r=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function n(t){t.data&&t.data.id&&t.data.id===a&&(e.removeEventListener("message",n),r(t.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},n),t)}))}var m=[],h=[];function y(e,n,{x:t,y:r,w:a,h:o},i){const c=4*e*r;i.set(n,c)}async function v(e,n,t,r,a,o){for(;t.length>0;){var i=t.pop(),c=await n.workerRenderRegion(i);null!=e?e(r,c,i):y(r,c,i,o)}}async function E({sceneNum:e,previewCb:n,width:t,height:r,numSamples:a,maxDepth:o,enableBvh:i}){const c=performance.now(),u=function(e,n,t){!function(e,n){if(!e)throw new Error("Assertion failed")}(n>=t);for(var r=[],a=n;a>0;a-=t){var o=Math.max(0,a-t),i=a-o;r.push({x:0,y:o,w:e,h:i})}return r}(t,r,4),s=await async function(e,n,t,r,a,o,i,c){var u=null;null==e&&(u=new Uint8ClampedArray(r*a*4));for(var s=0;s<m.length;s++)await m[s].workerCreateRaytracer(t,r,a,o,i,c);var _=[];for(s=0;s<m.length;s++)_.push(v(e,m[s],n,r,0,u));for(s=0;s<_.length;s++)await _[s];return u}(n,u,e,t,r,a,o,i),_=performance.now()-c;return null!=n?{rawImageData:null,time:_}:{rawImageData:w(s,[s.buffer]),time:_}}let I;const R=new Array(32).fill(void 0);function S(e){return R[e]}R.push(void 0,null,!0,!1);let x=R.length;function D(e){const n=S(e);return function(e){e<36||(R[e]=x,x=e)}(e),n}let A=0,k=null;function j(){return null!==k&&k.buffer===I.memory.buffer||(k=new Uint8Array(I.memory.buffer)),k}let O=new TextEncoder("utf-8");const T="function"==typeof O.encodeInto?function(e,n){return O.encodeInto(e,n)}:function(e,n){const t=O.encode(e);return n.set(t),{read:e.length,written:t.length}};function B(e,n,t){if(void 0===t){const t=O.encode(e),r=n(t.length);return j().subarray(r,r+t.length).set(t),A=t.length,r}let r=e.length,a=n(r);const o=j();let i=0;for(;i<r;i++){const n=e.charCodeAt(i);if(n>127)break;o[a+i]=n}if(i!==r){0!==i&&(e=e.slice(i)),a=t(a,r,r=i+3*e.length);const n=j().subarray(a+i,a+r);i+=T(e,n).written}return A=i,a}let L=null;function N(){return null!==L&&L.buffer===I.memory.buffer||(L=new Int32Array(I.memory.buffer)),L}let C=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});function M(e,n){return C.decode(j().subarray(e,e+n))}function P(e){x===R.length&&R.push(R.length+1);const n=x;return x=R[n],R[n]=e,n}function W(e){return null==e}function $(e){const n=typeof e;if("number"==n||"boolean"==n||null==e)return`${e}`;if("string"==n)return`"${e}"`;if("symbol"==n){const n=e.description;return null==n?"Symbol":`Symbol(${n})`}if("function"==n){const n=e.name;return"string"==typeof n&&n.length>0?`Function(${n})`:"Function"}if(Array.isArray(e)){const n=e.length;let t="[";n>0&&(t+=$(e[0]));for(let r=1;r<n;r++)t+=", "+$(e[r]);return t+="]",t}const t=/\[object ([^\]]+)\]/.exec(toString.call(e));let r;if(!(t.length>1))return toString.call(e);if(r=t[1],"Object"==r)try{return"Object("+JSON.stringify(e)+")"}catch(e){return"Object"}return e instanceof Error?`${e.name}: ${e.message}\n${e.stack}`:r}function U(e,n,t){I._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hfc6bde766572050c(e,n,P(t))}function F(e,n){try{const u=I.__wbindgen_add_to_stack_pointer(-16);!function(e,n){if(!(e instanceof n))throw new Error(`expected instance of ${n.name}`);e.ptr}(e,H);var t=B(n,I.__wbindgen_malloc,I.__wbindgen_realloc),r=A;I.get_resource(u,e.ptr,t,r);var a=N()[u/4+0],o=N()[u/4+1];let s;return 0!==a&&(s=(i=a,c=o,j().subarray(i/1,i/1+c)).slice(),I.__wbindgen_free(a,1*o)),s}finally{I.__wbindgen_add_to_stack_pointer(16)}var i,c}function z(e,n){try{return e.apply(this,n)}catch(e){I.__wbindgen_exn_store(P(e))}}C.decode();class H{static __wrap(e){const n=Object.create(H.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();I.__wbg_resourcecache_free(e)}}const q=async function e(n){void 0===n&&(n=new URL(t(387),t.b));const r={wbg:{}};r.wbg.__wbindgen_object_drop_ref=function(e){D(e)},r.wbg.__wbindgen_json_serialize=function(e,n){const t=S(n);var r=B(JSON.stringify(void 0===t?null:t),I.__wbindgen_malloc,I.__wbindgen_realloc),a=A;N()[e/4+1]=a,N()[e/4+0]=r},r.wbg.__wbg_resourcecache_new=function(e){return P(H.__wrap(e))},r.wbg.__wbindgen_string_new=function(e,n){return P(M(e,n))},r.wbg.__wbindgen_cb_drop=function(e){const n=D(e).original;return 1==n.cnt--&&(n.a=0,!0)},r.wbg.__wbg_new_693216e109162396=function(){return P(new Error)},r.wbg.__wbg_stack_0ddaca5d1abfb52f=function(e,n){var t=B(S(n).stack,I.__wbindgen_malloc,I.__wbindgen_realloc),r=A;N()[e/4+1]=r,N()[e/4+0]=t},r.wbg.__wbg_error_09919627ac0992f5=function(e,n){try{console.error(M(e,n))}finally{I.__wbindgen_free(e,n)}},r.wbg.__wbindgen_object_clone_ref=function(e){return P(S(e))},r.wbg.__wbg_fetch_45791be0f20b9c8d=function(e){return P(fetch(S(e)))},r.wbg.__wbg_instanceof_Window_c4b70662a0d2c5ec=function(e){return S(e)instanceof Window},r.wbg.__wbg_document_1c64944725c0d81d=function(e){var n=S(e).document;return W(n)?0:P(n)},r.wbg.__wbg_URL_db6637e306672144=function(){return z((function(e,n){var t=B(S(n).URL,I.__wbindgen_malloc,I.__wbindgen_realloc),r=A;N()[e/4+1]=r,N()[e/4+0]=t}),arguments)},r.wbg.__wbg_new_9c35e8e8b09fb4a3=function(){return z((function(){return P(new Headers)}),arguments)},r.wbg.__wbg_append_fb85316567f7a798=function(){return z((function(e,n,t,r,a){S(e).append(M(n,t),M(r,a))}),arguments)},r.wbg.__wbindgen_string_get=function(e,n){const t=S(n);var r="string"==typeof t?t:void 0,a=W(r)?0:B(r,I.__wbindgen_malloc,I.__wbindgen_realloc),o=A;N()[e/4+1]=o,N()[e/4+0]=a},r.wbg.__wbg_log_3445347661d4505e=function(e){console.log(S(e))},r.wbg.__wbg_fetch_b4e81012e07ff95a=function(e,n){return P(S(e).fetch(S(n)))},r.wbg.__wbg_instanceof_Response_e1b11afbefa5b563=function(e){return S(e)instanceof Response},r.wbg.__wbg_url_50e0bdb6051741be=function(e,n){var t=B(S(n).url,I.__wbindgen_malloc,I.__wbindgen_realloc),r=A;N()[e/4+1]=r,N()[e/4+0]=t},r.wbg.__wbg_status_6d8bb444ddc5a7b2=function(e){return S(e).status},r.wbg.__wbg_headers_5ffa990806e04cfc=function(e){return P(S(e).headers)},r.wbg.__wbg_arrayBuffer_b8937ed04beb0d36=function(){return z((function(e){return P(S(e).arrayBuffer())}),arguments)},r.wbg.__wbg_newwithstrandinit_9b0fa00478c37287=function(){return z((function(e,n,t){return P(new Request(M(e,n),S(t)))}),arguments)},r.wbg.__wbindgen_is_function=function(e){return"function"==typeof S(e)},r.wbg.__wbg_newnoargs_be86524d73f67598=function(e,n){return P(new Function(M(e,n)))},r.wbg.__wbindgen_is_object=function(e){const n=S(e);return"object"==typeof n&&null!==n},r.wbg.__wbg_next_c4151d46d5fa7097=function(e){return P(S(e).next)},r.wbg.__wbg_next_7720502039b96d00=function(){return z((function(e){return P(S(e).next())}),arguments)},r.wbg.__wbg_done_b06cf0578e89ff68=function(e){return S(e).done},r.wbg.__wbg_value_e74a542443d92451=function(e){return P(S(e).value)},r.wbg.__wbg_iterator_4fc4ce93e6b92958=function(){return P(Symbol.iterator)},r.wbg.__wbg_get_4d0f21c2f823742e=function(){return z((function(e,n){return P(Reflect.get(S(e),S(n)))}),arguments)},r.wbg.__wbg_call_888d259a5fefc347=function(){return z((function(e,n){return P(S(e).call(S(n)))}),arguments)},r.wbg.__wbg_new_0b83d3df67ecb33e=function(){return P(new Object)},r.wbg.__wbg_call_346669c262382ad7=function(){return z((function(e,n,t){return P(S(e).call(S(n),S(t)))}),arguments)},r.wbg.__wbg_new_b1d61b5687f5e73a=function(e,n){try{var t={a:e,b:n},r=new Promise(((e,n)=>{const r=t.a;t.a=0;try{return function(e,n,t,r){I.wasm_bindgen__convert__closures__invoke2_mut__h5c0860dfcddbf3dd(e,n,P(t),P(r))}(r,t.b,e,n)}finally{t.a=r}}));return P(r)}finally{t.a=t.b=0}},r.wbg.__wbg_resolve_d23068002f584f22=function(e){return P(Promise.resolve(S(e)))},r.wbg.__wbg_then_2fcac196782070cc=function(e,n){return P(S(e).then(S(n)))},r.wbg.__wbg_then_8c2d62e8ae5978f7=function(e,n,t){return P(S(e).then(S(n),S(t)))},r.wbg.__wbg_self_c6fbdfc2918d5e58=function(){return z((function(){return P(self.self)}),arguments)},r.wbg.__wbg_window_baec038b5ab35c54=function(){return z((function(){return P(window.window)}),arguments)},r.wbg.__wbg_globalThis_3f735a5746d41fbd=function(){return z((function(){return P(globalThis.globalThis)}),arguments)},r.wbg.__wbg_global_1bc0b39582740e95=function(){return z((function(){return P(t.g.global)}),arguments)},r.wbg.__wbindgen_is_undefined=function(e){return void 0===S(e)},r.wbg.__wbg_buffer_397eaa4d72ee94dd=function(e){return P(S(e).buffer)},r.wbg.__wbg_newwithbyteoffsetandlength_4b9b8c4e3f5adbff=function(e,n,t){return P(new Uint8Array(S(e),n>>>0,t>>>0))},r.wbg.__wbg_new_a7ce447f15ff496f=function(e){return P(new Uint8Array(S(e)))},r.wbg.__wbg_set_969ad0a60e51d320=function(e,n,t){S(e).set(S(n),t>>>0)},r.wbg.__wbg_length_1eb8fc608a0d4cdb=function(e){return S(e).length},r.wbg.__wbg_has_1275b5eec3dc7a7a=function(){return z((function(e,n){return Reflect.has(S(e),S(n))}),arguments)},r.wbg.__wbg_set_82a4e8a85e31ac42=function(){return z((function(e,n,t){return Reflect.set(S(e),S(n),S(t))}),arguments)},r.wbg.__wbg_stringify_d4507a59932eed0c=function(){return z((function(e){return P(JSON.stringify(S(e)))}),arguments)},r.wbg.__wbindgen_debug_string=function(e,n){var t=B($(S(n)),I.__wbindgen_malloc,I.__wbindgen_realloc),r=A;N()[e/4+1]=r,N()[e/4+0]=t},r.wbg.__wbindgen_throw=function(e,n){throw new Error(M(e,n))},r.wbg.__wbindgen_memory=function(){return P(I.memory)},r.wbg.__wbindgen_closure_wrapper302=function(e,n,t){var r=function(e,n,t,r){const a={a:e,b:n,cnt:1,dtor:122},o=(...e)=>{a.cnt++;const n=a.a;a.a=0;try{return r(n,a.b,...e)}finally{0==--a.cnt?I.__wbindgen_export_2.get(a.dtor)(n,a.b):a.a=n}};return o.original=a,o}(e,n,0,U);return P(r)},("string"==typeof n||"function"==typeof Request&&n instanceof Request||"function"==typeof URL&&n instanceof URL)&&(n=fetch(n));const{instance:a,module:o}=await async function(e,n){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,n)}catch(n){if("application/wasm"==e.headers.get("Content-Type"))throw n;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n)}const t=await e.arrayBuffer();return await WebAssembly.instantiate(t,n)}{const t=await WebAssembly.instantiate(e,n);return t instanceof WebAssembly.Instance?{instance:t,module:e}:t}}(await n,r);return I=a.exports,e.__wbindgen_wasm_module=o,I.__wbindgen_start(),I},G=document.getElementById("canvas"),{width:J,height:Y}=G,X=G.getContext("2d"),K=document.getElementById("time"),Q=document.getElementById("renderButton"),V=document.getElementById("numThreads"),Z=new Map,ee=document.getElementById("sceneNum"),ne=document.getElementById("samplesNum"),te=document.getElementById("maxDepthNum"),re=document.getElementById("bvhEnable"),ae=document.getElementById("resolution"),oe=document.getElementById("threadsMode"),ie=new Map;var ce;function ue(e){var n=e/1e3;K.value=`${n.toFixed(2)} sec(s)`}async function se(e){m.length!=e&&await async function(e,n){for(var r=0;r<m.length;r++)h[r].terminate(),h[r]=null,m[r]=null;for(h=[],m=[],r=0;r<e;r++){let e=new Worker(new URL(t.p+t.u(963),t.b),{type:void 0}),a=await s(e);await a.init(r,n),h.push(e),m.push(a)}}(e,ie)}function _e(e){return async function(){be(!1),ce=new ImageData(J,Y),X.putImageData(ce,0,0);const n=parseInt(V.value);await se(n);const t=parseInt(ee.value),r=parseInt(ne.value),a=parseInt(te.value),o="true"===re.value;let{rawImageData:i,time:c}=await e.renderImage({sceneNum:t,width:J,height:Y,numSamples:r,maxDepth:a,enableBvh:o});ue(c),X.putImageData(new ImageData(i,J,Y),0,0),be(!0)}}function fe(e,n,{x:t,y:r,w:a,h:o}){y(e,n,{x:t,y:r,w:a,h:o},ce.data)}function le(){X.putImageData(ce,0,0)}function be(e){e?(hideDiv("progress"),showDiv("parametersRow1"),showDiv("parametersRow2"),showDiv("renderButton")):(showDiv("progress"),hideDiv("parametersRow1"),hideDiv("parametersRow2"),hideDiv("renderButton"))}!async function(){const e=[{path:"earthmap.jpeg"}];await q();const n=await(r=e,D(I.create_and_load_resource_cache(P(r))));for(var r,a=0;a<e.length;a++){var o=e[a].path;ie.set(o,F(n,o))}let i=await s(new Worker(new URL(t.p+t.u(135),t.b),{type:void 0})).initHandlers(ie);var c=navigator.hardwareConcurrency||8;await se(c),V.value=`${c}`,0==!!await i.supportsThreads&&hideDiv("rayonDropDown"),Z.set("single",_e(i.singleThread)),Z.set("rayon",_e(i.multiThread)),Z.set("workers",(async function(){be(!1),ce=new ImageData(J,Y),X.putImageData(ce,0,0);const e=setInterval(le,250),n=parseInt(V.value);await se(n);const t=parseInt(ee.value),r=parseInt(ne.value),a=parseInt(te.value),o="true"===re.value;let{rawImageData:i,time:c}=await E({sceneNum:t,previewCb:fe,width:J,height:Y,numSamples:r,maxDepth:a,enableBvh:o});ue(c),clearInterval(e),X.putImageData(ce,0,0),be(!0)})),Object.assign(Q,{async onclick(){const e=oe.value;Z.get(e)()}}),ae.value=`${J}x${Y}`,hideDiv("loading"),showDiv("paramInfo"),be(!0)}()})()})();