import{c as $,e as M,f as C,a as d,g as h,S as m,b as E,i as S,k as F,d as N,t as p,l as j}from"./web.73dce35b.js";import{h as J,i as L,S as O}from"./Spinner.3ca7a5ec.js";import{T as R}from"./Table.2003223b.js";const l=new Date;new Date(l.getFullYear(),0,1);const f=l.getDay(),_=new Date,w=new Date;_.setDate(f<4?l.getDate()-f-3:l.getDate()-f+4);w.setDate(f<4?l.getDate()-f+3:l.getDate()-f+10);function x(t,e){let n=[],o=new Date(t.getTime());for(let i=o;i<=e;i.setDate(i.getDate()+1)){const s=i.toUTCString().split(" ");n.push(`${s[1]} ${s[2]}`)}return n}const u={0:"J",1:"V",2:"S",3:"D",4:"L",5:"M",6:"m"};function U(){const t=x(_,w);let e=[];for(let n=0;n<t.length;n++)e.push(`${u[n]} - ${t[n].split(" ")[0]}`);return e}function V(t,e){const n=new Array(t.length);for(let o=0;o<t.length;o++)n[o]={id:t[o].idTrabajador,nombres:`${t[o].Nombres} ${t[o].APaterno}`.toUpperCase(),J:e,V:e,S:e,D:e,L:e,M:e,m:e};return n}function A(t,e,n){const o=Math.abs(l.getTime()-_.getTime()),i=Math.ceil(o/(1e3*60*60*24))+1,s={};for(let r=0;r<t.length;r++)s[t[r].id]=r;for(const r in n){const a=n[r];for(let g=0;g<a.length;g++){const D=new Date(a[g]).toUTCString().split(" "),y=`${D[1]} ${D[2]}`,T=e.indexOf(y),b=u[T];if(b===void 0||!s[r])continue;const k=s[r];t[k][b]=!0}}for(let r=0;r<t.length;r++)for(let a=i+1;a<7;a++)t[r][u[a]]=null}const z=p("<span>"),P=p('<div class="flex flex-row items-center gap-4 text-xl font-bold"><!#><!/><p>Cargando información...'),Y=p("<div>Error");function c(t,e){return Object.values(u).indexOf(t)===-1?e:e===null?[]:(()=>{const n=h(z);return j(n,`inline-flex w-full h-full font-bold justify-center items-center text-lg ${e?"bg-green-300":"bg-red-300"}`),S(n,e?"✔️":"✖️"),n})()}const q={J:c,V:c,S:c,D:c,L:c,M:c,m:c},B=x(_,w);function K(){const[t]=$(J),[e]=$(L),[n,o]=M(null);C(()=>{if(e.state==="ready"&&t.state==="ready"){const s=V(e(),!1);A(s,B,t()),o(s)}});const i=["Nombres",...U()];return d(N,{get fallback(){return h(Y)},get children(){return[d(m,{get when(){return t.loading||e.loading},get children(){const s=h(P),r=s.firstChild,[a,g]=E(r.nextSibling);return a.nextSibling,S(s,d(O,{size:"lg"}),a,g),s}}),d(m,{get when(){return t.error||e.error},children:"Error de carga!"}),d(m,{get when(){return F(()=>typeof n()<"u")()&&n()!==null},get children(){return d(R,{get data(){return n()},titles:i,col_conditions:q,ignore_cols:["id"]})}})]}})}export{K as default};
