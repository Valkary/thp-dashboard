import{a as g,c as b,j as y,e as d,g as m,S,f as $,h as T,t as _,m as k,i as x}from"./web.a82d59ce.js";import{e as E,g as F}from"./fetch.23516fc6.js";import{T as M}from"./Table.978b5d0e.js";const c=new Date;new Date(c.getFullYear(),0,1);const o=c.getDay(),D=new Date,p=new Date;D.setDate(o<4?c.getDate()-o-3:c.getDate()-o+4);p.setDate(o<4?c.getDate()-o+3:c.getDate()-o+10);function C(t,e){let n=[],s=new Date(t.getTime());for(let r=s;r<=e;r.setDate(r.getDate()+1)){const i=r.toUTCString().split(" ");n.push(`${i[1]} ${i[2]}`)}return n}const w={0:"J",1:"V",2:"S",3:"D",4:"L",5:"M",6:"m"};function J(t,e){const n=new Array(t.length);for(let s=0;s<t.length;s++)n[s]={id:t[s].idTrabajador,nombres:`${t[s].Nombres} ${t[s].APaterno}`.toUpperCase(),J:e,V:e,S:e,D:e,L:e,M:e,m:e};return n}function L(t,e,n){const s={};for(let r=0;r<t.length;r++)s[t[r].id]=r;for(const r in n){const i=n[r];for(let l=0;l<i.length;l++){const f=new Date(i[l]).toUTCString().split(" "),h=`${f[1]} ${f[2]}`,u=w[e.indexOf(h)];u!==void 0&&(t[s[r]][u]=!0)}}}const N=_("<span>"),V=_("<div>Error");function a(t,e){return Object.values(w).indexOf(t)===-1?e:(()=>{const n=m(N);return k(n,`inline-flex w-full h-full font-bold justify-center items-center text-lg ${e?"bg-green-300":"bg-red-300"}`),x(n,e?"✔️":"✖️"),n})()}const j={J:a,V:a,S:a,D:a,L:a,M:a,m:a},O=C(D,p);function P(){const[t]=g(E),[e]=g(F),[n,s]=b(null);return y(()=>{if(e.state==="ready"&&t.state==="ready"){const r=J(e(),!1);L(r,O,t()),s(r)}}),d(T,{get fallback(){return m(V)},get children(){return d(S,{get when(){return $(()=>typeof n()<"u")()&&n()!==null},get children(){return d(M,{get data(){return n()},titles:["Nombres","J","V","S","D","L","M","m"],col_conditions:j,ignore_cols:["id"]})}})}})}export{P as default};
