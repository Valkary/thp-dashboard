import{T as a}from"./Table.6eb91b40.js";import{b as s}from"./fetch.829df414.js";import{e as n}from"./web.1f286c52.js";const o=await s();let r=[];if(o){const t=Object.entries(o);for(let e=0;e<t.length;e++)!t[e][1]&&r.push({estacion:t[e][0].toUpperCase()})}function f(){return n(a,{titles:["Estaciones sin reportar"],get data(){return Object.values(r)}})}export{f as default};