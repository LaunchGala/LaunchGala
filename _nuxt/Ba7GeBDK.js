import{e as p,r as _,x as g,o as u,m as c,w as r,I as m,j as a,aW as b,T as w,U as y,aX as h,a0 as B,b as l,aZ as x,aY as v,a as C,Y as P,a_ as $,a$ as k}from"./D0hPKPsa.js";import{c as z}from"./B146-RAi.js";import{r as D}from"./BFMW6-gF.js";const N=p({__name:"Dialog",emits:["open"],setup(d,{emit:t}){const e=t,s=_(!1),i=()=>{e("open")};return g(s,o=>{o&&i()}),(o,n)=>(u(),c(a(b),{open:s.value,"onUpdate:open":n[0]||(n[0]=f=>s.value=f)},{default:r(()=>[m(o.$slots,"default")]),_:3},8,["open"]))}}),R=p({__name:"DialogTrigger",props:{asChild:{type:Boolean},as:{}},setup(d){const t=d;return(e,s)=>(u(),c(a(h),w(y(t)),{default:r(()=>[m(e.$slots,"default")]),_:3},16))}}),T=p({__name:"DialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(d,{emit:t}){const e=d,i=B(t);return(o,n)=>(u(),c(a(k),null,{default:r(()=>[l(a(x),{class:"fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),l(a($),P({class:a(z)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",e.class)},{...e,...a(i)}),{default:r(()=>[m(o.$slots,"default"),l(a(v),{class:"absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary"},{default:r(()=>[l(a(D),{class:"w-4 h-4"}),n[0]||(n[0]=C("span",{class:"sr-only"},"Close",-1))]),_:1})]),_:3},16,["class"])]),_:3}))}});export{R as _,T as a,N as b};
