import{o as f,c as L,a as M,g as s,f as c,i as a,d as t,t as i,p as F,F as N,k as g,e as _,l as k}from"./web.33be2172.js";import{c as E}from"./fetch.e76ce3a6.js";import m from"./Table.76d584d1.js";const R=["FORMULADO","MEZCLADO","LAMINADO","VULCANIZADO","CARDADO"],I=i("<section><!#><!/><em>Seleccionado: <!#><!/></em><!#><!/>"),U=i('<button class="px-5 py-2 rounded-md border border-black mx-5">'),Z=i("<p>Cargando producción...");function T(){const[e,$]=L(),[r]=M(e,E);return(()=>{const n=s(I),p=n.firstChild,[u,A]=c(p.nextSibling),o=u.nextSibling,b=o.firstChild,h=b.nextSibling,[D,O]=c(h.nextSibling),x=o.nextSibling,[C,S]=c(x.nextSibling);return a(n,t(N,{each:R,children:d=>(()=>{const l=s(U);return l.$$click=()=>$(d),a(l,d),F(),l})()}),u,A),a(o,e,D,O),a(n,t(k,{get fallback(){return s(Z)},get children(){return[t(g,{get when(){return _(()=>e()==="MEZCLADO"||e()==="FORMULADO"||e()==="VULCANIZADO"||e()==="CARDADO")()&&r()!==null},get children(){return t(m,{titles:["Fecha","Nombres","Formula","Cargas"],get data(){return r()}})}}),t(g,{get when(){return _(()=>e()==="LAMINADO")()&&r()!==null},get children(){return t(m,{titles:["Trabajador","Laminado","Fecha"],get data(){return r()}})}})]}}),C,S),n})()}f(["click"]);export{T as default};
