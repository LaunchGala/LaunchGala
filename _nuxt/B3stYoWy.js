import{e as r,o as c,m as l,w as o,I as d,T as _,U as f,j as s,a0 as h,cE as v,a as y,Y as i,cF as b,cG as B,b as u,cH as x,cI as C}from"./D0hPKPsa.js";import{c as p}from"./B146-RAi.js";import{r as g}from"./BOEAlli8.js";const I=r({__name:"Accordion",props:{collapsible:{type:Boolean},disabled:{type:Boolean},dir:{},orientation:{},asChild:{type:Boolean},as:{},type:{},modelValue:{},defaultValue:{}},emits:["update:modelValue"],setup(a,{emit:e}){const t=a,n=e;return(m,w)=>(c(),l(s(v),_(f({...t,...s(h)(n)})),{default:o(()=>[d(m.$slots,"default")]),_:3},16))}}),$={class:"pb-4 pt-0"},P=r({__name:"AccordionContent",props:{asChild:{type:Boolean},as:{},class:{}},setup(a){const e=a;return(t,n)=>(c(),l(s(b),i(e,{class:s(p)("overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",e.class)}),{default:o(()=>[y("div",$,[d(t.$slots,"default")])]),_:3},16,["class"]))}}),j=r({__name:"AccordionItem",props:{disabled:{type:Boolean},value:{},asChild:{type:Boolean},as:{},class:{}},setup(a){const e=a;return(t,n)=>(c(),l(s(B),i(e,{class:s(p)("border-b",e.class??"")}),{default:o(()=>[d(t.$slots,"default")]),_:3},16,["class"]))}}),N=r({__name:"AccordionTrigger",props:{asChild:{type:Boolean},as:{},class:{}},setup(a){const e=a;return(t,n)=>(c(),l(s(C),{class:"flex",as:"div"},{default:o(()=>[u(s(x),i(e,{class:s(p)("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",e.class)}),{default:o(()=>[d(t.$slots,"default"),u(s(g),{class:"h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"})]),_:3},16,["class"])]),_:3}))}});export{I as _,j as a,N as b,P as c};
