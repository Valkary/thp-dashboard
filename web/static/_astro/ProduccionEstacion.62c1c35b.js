import{g as i,i as l,c,F as h,a as A,b as p,t as d,d as C,e as w,f as L,h as N,j as E,k as x,r as M,S,l as j}from"./web.c9aea172.js";function F(t){const e=Object.keys(t),n=Object.keys(t[e[0]]).length;let r=Array.from({length:n},()=>({}));for(let o=0;o<n;o++)for(let a=0;a<e.length;a++)r[o][e[a]]=Object.values(t[e[a]])[o];return r}const R="192.168.100.10:5000";async function v(t){try{const e=await(await fetch(`http://${R}/api/produccion/ultima_semana/${t}`)).json();return F(e)}catch(e){return console.error(e),[]}}const I=["FORMULADO","MEZCLADO","LAMINADO","VULCANIZADO","CARDADO"],U=d('<table><thead class="bg-white border-b"><tr></tr></thead><tbody>'),Z=d('<th scope="col" class="text-sm font-medium text-gray-900 px-6 text-center">'),T=d("<div>No data"),V=d("<tr>"),H=d("<td>");function D(t){const e=()=>Object.keys(t.data[0]);return(()=>{const n=i(U),r=n.firstChild,o=r.firstChild,a=r.nextSibling;return l(o,c(h,{get each(){return t.titles},children:_=>(()=>{const s=i(Z);return l(s,_),s})()})),l(a,c(h,{get each(){return t.data},get fallback(){return i(T)},children:(_,s)=>(()=>{const $=i(V);return l($,c(h,{get each(){return e()},children:(u,b)=>(()=>{const g=i(H);return l(g,(()=>{const m=A(()=>!!(t.col_conditions&&t.col_conditions[u]));return()=>m()?t.col_conditions[u](u,_[u]):_[u]})()),p(()=>C(g,`border-2 border-black whitespace-nowrap text-sm font-medium text-gray-900 ${b()===0?"font-medium text-left":"font-light text-center"}`)),g})()})),p(()=>C($,`${s()%2?"bg-white":"bg-gray-100"} border-b`)),$})()})),n})()}const P=d("<section><!#><!/><em>Seleccionado: <!#><!/></em><!#><!/>"),q=d('<button class="px-5 py-2 rounded-md border border-black mx-5">'),z=d("<p>Cargando producción...");function G(){const[t,e]=L(),[n]=N(t,v);return E(()=>console.log(n())),(()=>{const r=i(P),o=r.firstChild,[a,_]=x(o.nextSibling),s=a.nextSibling,$=s.firstChild,u=$.nextSibling,[b,g]=x(u.nextSibling),m=s.nextSibling,[y,k]=x(m.nextSibling);return l(r,c(h,{each:I,children:O=>(()=>{const f=i(q);return f.$$click=()=>e(O),l(f,O),M(),f})()}),a,_),l(s,t,b,g),l(r,c(j,{get fallback(){return i(z)},get children(){return[c(S,{get when(){return A(()=>t()==="MEZCLADO"||t()==="FORMULADO"||t()==="VULCANIZADO"||t()==="CARDADO")()&&n()!==null},get children(){return c(D,{titles:["Fecha","Nombres","Formula","Cargas"],get data(){return n()}})}}),c(S,{get when(){return A(()=>t()==="LAMINADO")()&&n()!==null},get children(){return c(D,{titles:["Trabajador","Laminado","Fecha"],get data(){return n()}})}})]}}),y,k),r})()}w(["click"]);export{G as default};
