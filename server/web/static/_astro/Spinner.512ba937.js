import{e as l,o as f,g as d,h,t as p,u as w,k as y}from"./web.62d84d6d.js";function c(t){const a=Object.keys(t),o=Object.keys(t[a[0]]).length;let n=Array.from({length:o},()=>({}));for(let e=0;e<o;e++)for(let r=0;r<a.length;r++)n[e][a[r]]=Object.values(t[a[r]])[e];return n}function m(t,a,o){let n=!0;do{n=!1;for(let e=0;e<t.length-1;e++)if(o){if(t[e][a]>t[e+1][a]){let r=t[e];t[e]=t[e+1],t[e+1]=r,n=!0}}else if(t[e][a]<t[e+1][a]){let r=t[e];t[e]=t[e+1],t[e+1]=r,n=!0}}while(n);return t}const s="http://192.168.100.7:5000";async function $(){return await(await fetch(`${s}/api/trabajadores`)).json()}async function g(){return await(await fetch(`${s}/api/trabajadores/asistencias`)).json()}async function S(){try{return await(await fetch(`${s}/api/produccion/ayer/ESTACIONES`)).json()}catch(t){console.error(t)}}async function v(){try{return await(await fetch(`${s}/api/reportes/registro`)).json()}catch(t){console.error(t)}}async function E(){try{const t=await(await fetch(`${s}/api/reportes/derecho_descanso`)).json();return c(t)}catch(t){console.error(t)}}async function I(t){try{const a=await(await fetch(`${s}/api/produccion/ultima_semana/${t}`)).json();return c(a)}catch(a){return console.error(a),[]}}async function N(){try{const t=await(await fetch(`${s}/api/trabajadores_full`)).json();return c(t)}catch(t){return console.error(t),[]}}async function O(){try{const t=await(await fetch(`${s}/api/trabajadores`)).json();return c(t)}catch(t){return console.error(t),[]}}const j=p('<div><div class="h-full w-full border-4 border-t-blue-500 rounded-full">'),_={sm:"h-8 w-8",md:"h-12 w-12",lg:"h-16 w-16"};function A(t){let a;const[o,n]=l(0),e=setInterval(()=>{n(o()+5),a&&(a.style.transform=`rotate(${o()}deg)`)},20);return f(()=>clearInterval(e)),(()=>{const r=d(j),i=r.firstChild,u=a;return typeof u=="function"?w(u,i):a=i,h(()=>y(r,`${_[t.size]??"h-24 w-24"} border-2 border-blue rounded-full p-0 m-0`)),r})()}export{A as S,N as a,I as b,$ as c,g as d,S as e,E as f,v as g,O as h,c as r,m as s};
