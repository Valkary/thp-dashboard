import{l as $,c as D,a as C,g as s,e as p,i as o,d as e,t as c,f as O,r as b,F as E,S as l,h as d,j as S,k as w}from"./web.f33a4f10.js";import{e as R,S as M}from"./Spinner.c0d0ba46.js";import{T as u}from"./Table.1fdad99f.js";const L=["FORMULADO","MEZCLADO","LAMINADO","VULCANIZADO","CARDADO"],N=c('<div class="flex flex-row items-center gap-4 text-xl font-bold"><!#><!/><p>Cargando información...'),F=c("<p>Error de carga"),k=c('<section class="w-full max-w-[800px] h-screen flex flex-col items-center gap-5 max-h-screen overflow-hidden px-5"><div class="flex flex-wrap gap-4 justify-center"></div><!#><!/>'),v=c("<button>"),U=c("<p>Error");function T(){const[r,f]=D(),[t]=C(r,R);return(()=>{const i=s(k),g=i.firstChild,h=g.nextSibling,[x,m]=p(h.nextSibling);return o(g,e(E,{each:L,children:n=>(()=>{const a=s(v);return a.$$click=()=>f(n),o(a,n),O(()=>w(a,`${r()===n?"bg-black text-white font-bold":""} px-5 py-2 rounded-md border border-black`)),b(),a})()})),o(i,e(S,{get fallback(){return s(U)},get children(){return[e(l,{get when(){return t.loading},get children(){const n=s(N),a=n.firstChild,[A,_]=p(a.nextSibling);return A.nextSibling,o(n,e(M,{size:"lg"}),A,_),n}}),e(l,{get when(){return t.error},get children(){return s(F)}}),e(l,{get when(){return t.state==="ready"},get children(){return[e(l,{get when(){return d(()=>r()==="MEZCLADO"||r()==="FORMULADO"||r()==="CARDADO")()&&t()!==null},get children(){return e(u,{titles:["FECHA","NOMBRES","FÓRMULA","CARGAS"],get data(){return t()}})}}),e(l,{get when(){return d(()=>r()==="VULCANIZADO")()&&t()!==null},get children(){return e(u,{titles:["FECHA","NOMBRES","FÓRMULA","CANTIDAD"],get data(){return t()}})}}),e(l,{get when(){return d(()=>r()==="LAMINADO")()&&t()!==null},get children(){return e(u,{titles:["FECHA","TRABAJADOR"],get data(){return t()}})}})]}})]}}),x,m),i})()}$(["click"]);export{T as default};