import{d as C,c as L,a as M,g as l,b as c,i as a,e as t,t as i,r as F,F as N,S as g,f as _,h as E}from"./web.1f286c52.js";import{f as k}from"./fetch.829df414.js";import{T as m}from"./Table.6eb91b40.js";const R=["FORMULADO","MEZCLADO","LAMINADO","VULCANIZADO","CARDADO"],I=i("<section><!#><!/><em>Seleccionado: <!#><!/></em><!#><!/>"),U=i('<button class="px-5 py-2 rounded-md border border-black mx-5">'),Z=i("<p>Cargando producción...");function y(){const[e,$]=L(),[r]=M(e,k);return(()=>{const n=l(I),A=n.firstChild,[u,b]=c(A.nextSibling),o=u.nextSibling,p=o.firstChild,h=p.nextSibling,[D,O]=c(h.nextSibling),S=o.nextSibling,[f,x]=c(S.nextSibling);return a(n,t(N,{each:R,children:d=>(()=>{const s=l(U);return s.$$click=()=>$(d),a(s,d),F(),s})()}),u,b),a(o,e,D,O),a(n,t(E,{get fallback(){return l(Z)},get children(){return[t(g,{get when(){return _(()=>e()==="MEZCLADO"||e()==="FORMULADO"||e()==="VULCANIZADO"||e()==="CARDADO")()&&r()!==null},get children(){return t(m,{titles:["Fecha","Nombres","Formula","Cargas"],get data(){return r()}})}}),t(g,{get when(){return _(()=>e()==="LAMINADO")()&&r()!==null},get children(){return t(m,{titles:["Trabajador","Laminado","Fecha"],get data(){return r()}})}})]}}),f,x),n})()}C(["click"]);export{y as default};
