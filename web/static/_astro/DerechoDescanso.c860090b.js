import{c as u,a as e,g as a,b as l,i as o,S as d,d as $,t as s}from"./web.a979243f.js";import{f as b,S}from"./Spinner.3844c73a.js";import{T as w}from"./Table.2a22066d.js";const C=s('<div class="flex flex-row items-center gap-4 text-xl font-bold"><!#><!/><p>Cargando información...'),D=s('<section class="w-full max-w-[800px] h-screen flex flex-col items-center gap-5 max-h-screen overflow-hidden px-5"><!#><!/><!#><!/>'),N=s("<div>No data");function A(){const[r]=u(b);return e($,{get fallback(){return a(N)},get children(){const t=a(D),g=t.firstChild,[i,f]=l(g.nextSibling),m=i.nextSibling,[x,p]=l(m.nextSibling);return o(t,e(d,{get when(){return r.loading},get children(){const n=a(C),h=n.firstChild,[c,_]=l(h.nextSibling);return c.nextSibling,o(n,e(S,{size:"lg"}),c,_),n}}),i,f),o(t,e(d,{get when(){return r.state==="ready"},get children(){return e(w,{titles:["idTrabajador","Nombres","APaterno","AMaterno"],get data(){return r()}})}}),x,p),t}})}export{A as default};