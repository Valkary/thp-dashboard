function r(t){const a=Object.keys(t),c=Object.keys(t[a[0]]).length;let s=Array.from({length:c},()=>({}));for(let e=0;e<c;e++)for(let n=0;n<a.length;n++)s[e][a[n]]=Object.values(t[a[n]])[e];return s}function i(t,a,c){let s=!0;do{s=!1;for(let e=0;e<t.length-1;e++)if(c){if(t[e][a]>t[e+1][a]){let n=t[e];t[e]=t[e+1],t[e+1]=n,s=!0}}else if(t[e][a]<t[e+1][a]){let n=t[e];t[e]=t[e+1],t[e+1]=n,s=!0}}while(s);return t}const o="http://192.168.100.7:5000";async function u(){return await(await fetch(`${o}/api/trabajadores`)).json()}async function f(){return await(await fetch(`${o}/api/trabajadores/asistencias`)).json()}async function l(t){try{const a=await(await fetch(`${o}/api/produccion/ultima_semana/${t}`)).json();return r(a)}catch(a){return console.error(a),[]}}async function h(){try{const t=await(await fetch(`${o}/api/trabajadores_full`)).json();return r(t)}catch(t){return console.error(t),[]}}export{l as a,u as b,f as c,h as f,r,i as s};
