import{g as q,bG as n,bH as x,bI as T,bJ as A}from"./DC9Rc9iq.js";import{u as F}from"./IaQ18vAM.js";function j(s,r,i){const[e={},u]=typeof r=="string"?[{},r]:[r,i],t=q(()=>n(s)),a=e.key||x([u,typeof t.value=="string"?t.value:"",...R(e)]);if(!a||typeof a!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+a);if(!s)throw new Error("[nuxt] [useFetch] request is missing.");const c=a===u?"$f"+a:a;if(!e.baseURL&&typeof t.value=="string"&&t.value[0]==="/"&&t.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:b,lazy:d,default:y,transform:g,pick:w,watch:h,immediate:v,getCachedData:D,deep:E,dedupe:O,..._}=e,l=T({...A,..._,cache:typeof e.cache=="boolean"?void 0:e.cache}),k={server:b,lazy:d,default:y,transform:g,pick:w,immediate:v,getCachedData:D,deep:E,dedupe:O,watch:h===!1?[]:[l,t,...h||[]]};let o;return F(c,()=>{var m;(m=o==null?void 0:o.abort)==null||m.call(o,new DOMException("Request aborted as another request to the same endpoint was initiated.","AbortError")),o=typeof AbortController<"u"?new AbortController:{};const p=n(e.timeout);let f;return p&&(f=setTimeout(()=>o.abort(new DOMException("Request aborted due to timeout.","AbortError")),p),o.signal.onabort=()=>clearTimeout(f)),(e.$fetch||globalThis.$fetch)(t.value,{signal:o.signal,...l}).finally(()=>{clearTimeout(f)})},k)}function R(s){var i;const r=[((i=n(s.method))==null?void 0:i.toUpperCase())||"GET",n(s.baseURL)];for(const e of[s.params||s.query]){const u=n(e);if(!u)continue;const t={};for(const[a,c]of Object.entries(u))t[n(a)]=n(c);r.push(t)}return r}export{j as u};
