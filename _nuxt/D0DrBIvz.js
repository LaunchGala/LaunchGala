import{r as A,bR as k,x as O,bQ as P,cR as I,cN as D,bS as x,f as T}from"./D0hPKPsa.js";import{i as N}from"./DvDH6DOc.js";function L(e,o){if(typeof e!="string")throw new TypeError("argument str must be a string");const i={},t=o||{},s=t.decode||M;let a=0;for(;a<e.length;){const r=e.indexOf("=",a);if(r===-1)break;let n=e.indexOf(";",a);if(n===-1)n=e.length;else if(n<r){a=e.lastIndexOf(";",r-1)+1;continue}const f=e.slice(a,r).trim();if(t!=null&&t.filter&&!(t!=null&&t.filter(f))){a=n+1;continue}if(i[f]===void 0){let c=e.slice(r+1,n).trim();c.codePointAt(0)===34&&(c=c.slice(1,-1)),i[f]=U(c,s)}a=n+1}return i}function M(e){return e.includes("%")?decodeURIComponent(e):e}function U(e,o){try{return o(e)}catch{return e}}const h=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function E(e,o,i){const t=i||{},s=t.encode||encodeURIComponent;if(typeof s!="function")throw new TypeError("option encode is invalid");if(!h.test(e))throw new TypeError("argument name is invalid");const a=s(o);if(a&&!h.test(a))throw new TypeError("argument val is invalid");let r=e+"="+a;if(t.maxAge!==void 0&&t.maxAge!==null){const n=t.maxAge-0;if(Number.isNaN(n)||!Number.isFinite(n))throw new TypeError("option maxAge is invalid");r+="; Max-Age="+Math.floor(n)}if(t.domain){if(!h.test(t.domain))throw new TypeError("option domain is invalid");r+="; Domain="+t.domain}if(t.path){if(!h.test(t.path))throw new TypeError("option path is invalid");r+="; Path="+t.path}if(t.expires){if(!_(t.expires)||Number.isNaN(t.expires.valueOf()))throw new TypeError("option expires is invalid");r+="; Expires="+t.expires.toUTCString()}if(t.httpOnly&&(r+="; HttpOnly"),t.secure&&(r+="; Secure"),t.priority)switch(typeof t.priority=="string"?t.priority.toLowerCase():t.priority){case"low":{r+="; Priority=Low";break}case"medium":{r+="; Priority=Medium";break}case"high":{r+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(t.sameSite)switch(typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite){case!0:{r+="; SameSite=Strict";break}case"lax":{r+="; SameSite=Lax";break}case"strict":{r+="; SameSite=Strict";break}case"none":{r+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return t.partitioned&&(r+="; Partitioned"),r}function _(e){return Object.prototype.toString.call(e)==="[object Date]"||e instanceof Date}function u(e){if(typeof e!="object")return e;var o,i,t=Object.prototype.toString.call(e);if(t==="[object Object]"){if(e.constructor!==Object&&typeof e.constructor=="function"){i=new e.constructor;for(o in e)e.hasOwnProperty(o)&&i[o]!==e[o]&&(i[o]=u(e[o]))}else{i={};for(o in e)o==="__proto__"?Object.defineProperty(i,o,{value:u(e[o]),configurable:!0,enumerable:!0,writable:!0}):i[o]=u(e[o])}return i}if(t==="[object Array]"){for(o=e.length,i=Array(o);o--;)i[o]=u(e[o]);return i}return t==="[object Set]"?(i=new Set,e.forEach(function(s){i.add(u(s))}),i):t==="[object Map]"?(i=new Map,e.forEach(function(s,a){i.set(u(a),u(s))}),i):t==="[object Date]"?new Date(+e):t==="[object RegExp]"?(i=new RegExp(e.source,e.flags),i.lastIndex=e.lastIndex,i):t==="[object DataView]"?new e.constructor(u(e.buffer)):t==="[object ArrayBuffer]"?e.slice(0):t.slice(-6)==="Array]"?new e.constructor(e):e}const q={path:"/",watch:!0,decode:e=>D(decodeURIComponent(e)),encode:e=>encodeURIComponent(typeof e=="string"?e:JSON.stringify(e))},y=window.cookieStore;function b(e,o){var f;const i={...q,...o};i.filter??(i.filter=c=>c===e);const t=C(i)||{};let s;i.maxAge!==void 0?s=i.maxAge*1e3:i.expires&&(s=i.expires.getTime()-Date.now());const a=s!==void 0&&s<=0,r=u(a?void 0:t[e]??((f=i.default)==null?void 0:f.call(i))),n=s&&!a?H(r,s,i.watch&&i.watch!=="shallow"):A(r);{let c=null;try{!y&&typeof BroadcastChannel<"u"&&(c=new BroadcastChannel(`nuxt:cookies:${e}`))}catch{}const l=()=>{i.readonly||N(n.value,t[e])||(F(e,n.value,i),t[e]=u(n.value),c==null||c.postMessage({value:i.encode(n.value)}))},p=d=>{var m;const w=d.refresh?(m=C(i))==null?void 0:m[e]:i.decode(d.value);v=!0,n.value=w,t[e]=u(w),x(()=>{v=!1})};let v=!1;const S=!!P();if(S&&k(()=>{v=!0,l(),c==null||c.close()}),y){const d=w=>{const m=w.changed.find(g=>g.name===e),R=w.deleted.find(g=>g.name===e);m&&p({value:m.value}),R&&p({value:null})};y.addEventListener("change",d),S&&k(()=>y.removeEventListener("change",d))}else c&&(c.onmessage=({data:d})=>p(d));i.watch?O(n,()=>{v||l()},{deep:i.watch!=="shallow"}):l()}return n}function C(e={}){return L(document.cookie,e)}function B(e,o,i={}){return o==null?E(e,o,{...i,maxAge:-1}):E(e,o,i)}function F(e,o,i={}){document.cookie=B(e,o,i)}const j=2147483647;function H(e,o,i){let t,s,a=0;const r=i?A(e):{value:e};return P()&&k(()=>{s==null||s(),clearTimeout(t)}),I((n,f)=>{i&&(s=O(r,f));function c(){a=0,clearTimeout(t);const l=o-a,p=l<j?l:j;t=setTimeout(()=>{if(a+=p,a<o)return c();r.value=void 0,f()},p)}return{get(){return n(),r.value},set(l){c(),r.value=l,f()}}})}const $=()=>({isEnabled:()=>{const t=T().query;return Object.prototype.hasOwnProperty.call(t,"preview")&&!t.preview?!1:!!(t.preview||b("previewToken").value||sessionStorage.getItem("previewToken"))},getPreviewToken:()=>b("previewToken").value||sessionStorage.getItem("previewToken")||void 0,setPreviewToken:t=>{b("previewToken").value=t,T().query.preview=t||"",t?sessionStorage.setItem("previewToken",t):sessionStorage.removeItem("previewToken"),window.location.reload()}});export{$ as u};
