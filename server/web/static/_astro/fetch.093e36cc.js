function s(t){const a=Object.keys(t),o=Object.keys(t[a[0]]).length;let n=Array.from({length:o},()=>({}));for(let e=0;e<o;e++)for(let r=0;r<a.length;r++)n[e][a[r]]=Object.values(t[a[r]])[e];return n}function i(t,a,o){let n=!0;do{n=!1;for(let e=0;e<t.length-1;e++)if(o){if(t[e][a]>t[e+1][a]){let r=t[e];t[e]=t[e+1],t[e+1]=r,n=!0}}else if(t[e][a]<t[e+1][a]){let r=t[e];t[e]=t[e+1],t[e+1]=r,n=!0}}while(n);return t}const c="http://192.168.100.7:5000";async function u(){return await(await fetch(`${c}/api/trabajadores`)).json()}async function f(){return await(await fetch(`${c}/api/trabajadores/asistencias`)).json()}async function h(){try{return await(await fetch(`${c}/api/produccion/ayer/ESTACIONES`)).json()}catch(t){console.error(t)}}async function l(){try{return await(await fetch(`${c}/api/reportes/registro`)).json()}catch(t){console.error(t)}}async function d(){try{const t=await(await fetch(`${c}/api/reportes/derecho_descanso`)).json();return s(t)}catch(t){console.error(t)}}async function p(t){try{const a=await(await fetch(`${c}/api/produccion/ultima_semana/${t}`)).json();return s(a)}catch(a){return console.error(a),[]}}async function j(){try{const t=await(await fetch(`${c}/api/trabajadores_full`)).json();return s(t)}catch(t){return console.error(t),[]}}async function w(){try{const t=await(await fetch(`${c}/api/trabajadores`)).json();return s(t)}catch(t){return console.error(t),[]}}export{d as a,u as b,f as c,h as d,l as e,j as f,w as g,p as h,s as r,i as s};
