(()=>{"use strict";var e={},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.m=e,r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[])),r.u=e=>e+".index.js",r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{r.b=self.location+"";var e={963:1};r.f.i=(t,n)=>{e[t]||importScripts(r.p+r.u(t))};var t=self.webpackChunk=self.webpackChunk||[],n=t.push.bind(t);t.push=t=>{var[a,o,i]=t;for(var s in o)r.o(o,s)&&(r.m[s]=o[s]);for(i&&i(r);a.length;)e[a.pop()]=1;n(t)}})();const n=Symbol("Comlink.proxy"),a=Symbol("Comlink.endpoint"),o=Symbol("Comlink.releaseProxy"),i=Symbol("Comlink.thrown"),s=e=>"object"==typeof e&&null!==e||"function"==typeof e,c=new Map([["proxy",{canHandle:e=>s(e)&&e[n],serialize(e){const{port1:t,port2:r}=new MessageChannel;return u(e,t),[r,[r]]},deserialize:e=>(e.start(),f(e,[],undefined))}],["throw",{canHandle:e=>s(e)&&i in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function u(e,t=self){t.addEventListener("message",(function r(a){if(!a||!a.data)return;const{id:o,type:s,path:c}=Object.assign({path:[]},a.data),p=(a.data.argumentList||[]).map(g);let f;try{const t=c.slice(0,-1).reduce(((e,t)=>e[t]),e),r=c.reduce(((e,t)=>e[t]),e);switch(s){case"GET":f=r;break;case"SET":t[c.slice(-1)[0]]=g(a.data.value),f=!0;break;case"APPLY":f=r.apply(t,p);break;case"CONSTRUCT":f=function(e){return Object.assign(e,{[n]:!0})}(new r(...p));break;case"ENDPOINT":{const{port1:t,port2:r}=new MessageChannel;u(e,r),f=function(e,t){return h.set(e,t),e}(t,[t])}break;case"RELEASE":f=void 0;break;default:return}}catch(e){f={value:e,[i]:0}}Promise.resolve(f).catch((e=>({value:e,[i]:0}))).then((e=>{const[n,a]=d(e);t.postMessage(Object.assign(Object.assign({},n),{id:o}),a),"RELEASE"===s&&(t.removeEventListener("message",r),l(t))}))})),t.start&&t.start()}function l(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function p(e){if(e)throw new Error("Proxy has been released and is not useable")}function f(e,t=[],r=function(){}){let n=!1;const i=new Proxy(r,{get(r,a){if(p(n),a===o)return()=>y(e,{type:"RELEASE",path:t.map((e=>e.toString()))}).then((()=>{l(e),n=!0}));if("then"===a){if(0===t.length)return{then:()=>i};const r=y(e,{type:"GET",path:t.map((e=>e.toString()))}).then(g);return r.then.bind(r)}return f(e,[...t,a])},set(r,a,o){p(n);const[i,s]=d(o);return y(e,{type:"SET",path:[...t,a].map((e=>e.toString())),value:i},s).then(g)},apply(r,o,i){p(n);const s=t[t.length-1];if(s===a)return y(e,{type:"ENDPOINT"}).then(g);if("bind"===s)return f(e,t.slice(0,-1));const[c,u]=m(i);return y(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:c},u).then(g)},construct(r,a){p(n);const[o,i]=m(a);return y(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:o},i).then(g)}});return i}function m(e){const t=e.map(d);return[t.map((e=>e[0])),(r=t.map((e=>e[1])),Array.prototype.concat.apply([],r))];var r}const h=new WeakMap;function d(e){for(const[t,r]of c)if(r.canHandle(e)){const[n,a]=r.serialize(e);return[{type:"HANDLER",name:t,value:n},a]}return[{type:"RAW",value:e},h.get(e)||[]]}function g(e){switch(e.type){case"HANDLER":return c.get(e.name).deserialize(e.value);case"RAW":return e.value}}function y(e,t,r){return new Promise((n=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(r){r.data&&r.data.id&&r.data.id===a&&(e.removeEventListener("message",t),n(r.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),r)}))}var b;u({init:async function(e){b=await r.e(8).then(r.bind(r,149)),await b.default();const t=function(e){for(var t=0,r=1779033703^e.length;t<e.length;t++)r=(r=Math.imul(r^e.charCodeAt(t),3432918353))<<13|r>>>19;return function(){return r=Math.imul(r^r>>>16,2246822507),r=Math.imul(r^r>>>13,3266489909),(r^=r>>>16)>>>0}}(function(e){for(var t="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=r.length,a=0;a<32;a++)t+=r.charAt(Math.floor(Math.random()*n));return t}());await b.seed_rand(t())},workerRenderImage:async function(e,t,r,n){var a=b.create_webraytracer(e,t,r,n);return await b.multi_sample_buffer(a,!1)},workerRenderImageProgressive:async function(e,t,r,n,a,o,i,s,c){for(var u=b.create_webraytracer(t,r,n,a),l=i;l<i+c;l++)for(var p=o;p<o+s;p++){var f=await b.multi_sample_point(u,p,r-l);await e(p,l,f)}}})})();