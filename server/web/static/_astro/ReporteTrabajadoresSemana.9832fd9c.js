import{c as $,f as y,l as k,a as d,g as h,S as m,b as T,i as b,j as C,d as E,t as p,k as F}from"./web.190aa895.js";import{g as M,h as N,S as j}from"./Spinner.b3bd3a04.js";import{T as J}from"./Table.c6bc32b6.js";const l=new Date;new Date(l.getFullYear(),0,1);const g=l.getDay(),_=new Date,D=new Date;_.setDate(g<4?l.getDate()-g-3:l.getDate()-g+4);D.setDate(g<4?l.getDate()-g+3:l.getDate()-g+10);function S(t,e){let n=[],o=new Date(t.getTime());for(let s=o;s<=e;s.setDate(s.getDate()+1)){const r=s.toUTCString().split(" ");n.push(`${r[1]} ${r[2]}`)}return n}const u={0:"J",1:"V",2:"S",3:"D",4:"L",5:"M",6:"m"};function L(){const t=S(_,D);let e=[];for(let n=0;n<t.length;n++)e.push(`${u[n]} - ${t[n].split(" ")[0]}`);return e}function O(t,e){const n=new Array(t.length);for(let o=0;o<t.length;o++)n[o]={id:t[o].idTrabajador,nombres:`${t[o].Nombres} ${t[o].APaterno}`.toUpperCase(),J:e,V:e,S:e,D:e,L:e,M:e,m:e};return n}function R(t,e,n){const o=l.getDate()-_.getDate(),s={};console.log(n);for(let r=0;r<t.length;r++)s[t[r].id]=r;for(const r in n){const a=n[r];for(let c=0;c<a.length;c++){const f=new Date(a[c]).toUTCString().split(" "),x=`${f[1]} ${f[2]}`,w=u[e.indexOf(x)];w===void 0||!s[r]||(t[s[r]][w]=!0)}}for(let r=0;r<t.length;r++)for(let a=o+1;a<7;a++)t[r][u[a]]=null}const U=p("<span>"),V=p('<div class="flex flex-row items-center gap-4 text-xl font-bold"><!#><!/><p>Cargando información...'),A=p("<div>Error");function i(t,e){return Object.values(u).indexOf(t)===-1?e:e===null?[]:(()=>{const n=h(U);return F(n,`inline-flex w-full h-full font-bold justify-center items-center text-lg ${e?"bg-green-300":"bg-red-300"}`),b(n,e?"✔️":"✖️"),n})()}const z={J:i,V:i,S:i,D:i,L:i,M:i,m:i},P=S(_,D);function G(){const[t]=$(M),[e]=$(N),[n,o]=y(null);k(()=>{if(e.state==="ready"&&t.state==="ready"){const r=O(e(),!1);R(r,P,t()),o(r)}});const s=["Nombres",...L()];return d(E,{get fallback(){return h(A)},get children(){return[d(m,{get when(){return t.loading||e.loading},get children(){const r=h(V),a=r.firstChild,[c,f]=T(a.nextSibling);return c.nextSibling,b(r,d(j,{size:"lg"}),c,f),r}}),d(m,{get when(){return t.error||e.error},children:"Error de carga!"}),d(m,{get when(){return C(()=>typeof n()<"u")()&&n()!==null},get children(){return d(J,{get data(){return n()},titles:s,col_conditions:z,ignore_cols:["id"]})}})]}})}export{G as default};
