import{c as p,e as d,f,a as r,g as s,S as o,b as u,i as m,d as h,t as i}from"./web.62d84d6d.js";import{T as b}from"./Table.fe7b6c68.js";import{e as x,S}from"./Spinner.512ba937.js";const _=i('<div class="flex flex-row items-center gap-4 text-xl font-bold"><!#><!/><p>Cargando información...'),$=i("<p>Error de carga de información!"),E=i("<div>Error");function w(t){let a=[];const n=Object.entries(t);for(let e=0;e<n.length;e++)!n[e][1]&&a.push({estacion:n[e][0].toUpperCase()});return a}function v(){const[t]=p(x),[a,n]=d([]);return f(()=>{if(t.state==="ready"){const e=w(t());n(e)}}),r(h,{get fallback(){return s(E)},get children(){return[r(o,{get when(){return t.loading},get children(){const e=s(_),c=e.firstChild,[l,g]=u(c.nextSibling);return l.nextSibling,m(e,r(S,{size:"lg"}),l,g),e}}),r(o,{get when(){return t.error},get children(){return s($)}}),r(o,{get when(){return t.state==="ready"},get children(){return r(b,{titles:["Estaciones sin reportar"],get data(){return Object.values(a())}})}})]}})}export{v as default};