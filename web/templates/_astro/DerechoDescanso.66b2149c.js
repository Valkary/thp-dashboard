import{a as u,e,g as a,b as l,i as o,S as g,j as $,t as s}from"./web.7c46431d.js";import{a as b,S}from"./Spinner.aad98488.js";import{T as w}from"./Table.d357bf8b.js";const C=s('<div class="flex flex-row items-center gap-4 text-xl font-bold"><!#><!/><p>Cargando información...'),D=s('<section class="w-full max-w-[800px] h-screen flex flex-col items-center gap-5 max-h-screen overflow-hidden px-5"><!#><!/><!#><!/>'),N=s("<div>No data");function k(){const[r]=u(b);return e($,{get fallback(){return a(N)},get children(){const t=a(D),d=t.firstChild,[i,m]=l(d.nextSibling),x=i.nextSibling,[f,p]=l(x.nextSibling);return o(t,e(g,{get when(){return r.loading},get children(){const n=a(C),h=n.firstChild,[c,_]=l(h.nextSibling);return c.nextSibling,o(n,e(S,{size:"lg"}),c,_),n}}),i,m),o(t,e(g,{get when(){return r.state==="ready"},get children(){return e(w,{titles:["idTrabajador","Nombres","APaterno","AMaterno"],get data(){return r()}})}}),f,p),t}})}export{k as default};