import{c as i,a as _}from"./B146-RAi.js";import{e as r,o,m as l,w as c,I as p,n as m,j as t,bD as d,Y as f,bE as h,T as v,U as b,bF as g}from"./D0hPKPsa.js";const x=r({__name:"Avatar",props:{size:{default:"sm"},shape:{default:"circle"},class:{}},setup(e){const s=e;return(a,n)=>(o(),l(t(d),{class:m(t(i)(t(u)({size:a.size,shape:a.shape}),s.class))},{default:c(()=>[p(a.$slots,"default")]),_:3},8,["class"]))}}),w=r({__name:"AvatarImage",props:{src:{},asChild:{type:Boolean},as:{}},setup(e){const s=e;return(a,n)=>(o(),l(t(h),f(s,{class:"h-full w-full aspect-square"}),null,16))}}),z=r({__name:"AvatarFallback",props:{delayMs:{},asChild:{type:Boolean},as:{}},setup(e){const s=e;return(a,n)=>(o(),l(t(g),v(b(s)),{default:c(()=>[p(a.$slots,"default")]),_:3},16))}}),u=_("inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-muted overflow-hidden",{variants:{size:{sm:"h-10 w-10 text-xs",base:"h-16 w-16 text-2xl",lg:"h-32 w-32 text-5xl"},shape:{circle:"rounded-full",square:"rounded-md"}}}),k=Object.freeze(Object.defineProperty({__proto__:null,Avatar:x,AvatarFallback:z,AvatarImage:w,avatarVariant:u},Symbol.toStringTag,{value:"Module"}));export{w as _,z as a,x as b,k as c};
