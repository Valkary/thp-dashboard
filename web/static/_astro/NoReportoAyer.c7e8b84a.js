import{a as p,c as d,b as f,d as r,g as s,S as o,e as u,i as m,j as h,t as i}from"./web.f33a4f10.js";import{T as b}from"./Table.1fdad99f.js";import{c as x,S}from"./Spinner.a3da7ec1.js";const _=i('<div class="flex flex-row items-center gap-4 text-xl font-bold"><!#><!/><p>Cargando información...'),$=i("<p>Error de carga de información!"),E=i("<div>Error");function w(t){let a=[];const n=Object.entries(t);for(let e=0;e<n.length;e++)!n[e][1]&&a.push({estacion:n[e][0].toUpperCase()});return a}function j(){const[t]=p(x),[a,n]=d([]);return f(()=>{if(t.state==="ready"){const e=w(t());n(e)}}),r(h,{get fallback(){return s(E)},get children(){return[r(o,{get when(){return t.loading},get children(){const e=s(_),c=e.firstChild,[l,g]=u(c.nextSibling);return l.nextSibling,m(e,r(S,{size:"lg"}),l,g),e}}),r(o,{get when(){return t.error},get children(){return s($)}}),r(o,{get when(){return t.state==="ready"},get children(){return r(b,{titles:["Estaciones sin reportar"],get data(){return Object.values(a())}})}})]}})}export{j as default};