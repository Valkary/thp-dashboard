import{g as r,i as n,d as i,F as d,e as w,h as b,t as a,j as h}from"./web.fde07de3.js";const p=a('<table><thead class="bg-white border-b"><tr></tr></thead><tbody>'),C=a('<th scope="col" class="text-sm font-medium text-gray-900 px-6 text-center">'),N=a("<div>No data"),j=a("<tr>"),y=a("<td>");function F(t){const $=()=>Object.keys(t.data[0]);return(()=>{const m=r(p),_=m.firstChild,g=_.firstChild,u=_.nextSibling;return n(g,i(d,{get each(){return t.titles},children:c=>(()=>{const l=r(C);return n(l,c),l})()})),n(u,i(d,{get each(){return t.data},get fallback(){return r(N)},children:(c,l)=>(()=>{const o=r(j);return n(o,i(d,{get each(){return $()},children:(e,f)=>(()=>{const s=r(y);return n(s,(()=>{const x=w(()=>!!(t.col_conditions&&t.col_conditions[e]));return()=>x()?t.col_conditions[e](e,c[e]):c[e]})()),b(()=>h(s,`border-2 border-black whitespace-nowrap text-sm font-medium text-gray-900 ${f()===0?"font-medium text-left":"font-light text-center"}`)),s})()})),b(()=>h(o,`${l()%2?"bg-white":"bg-gray-100"} border-b`)),o})()})),m})()}export{F as T};