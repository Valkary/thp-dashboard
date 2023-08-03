import{c as T,a as C,b as k,d as x,S as p,g as S,e as I,i as g,h as P,j as Y,t as D,f as G,k as z}from"./web.f33a4f10.js";import{a as Z,b as q,S as H,r as N,s as K}from"./Spinner.c0d0ba46.js";import{T as Q}from"./Table.1fdad99f.js";const W=D("<span>"),X=D('<div class="flex flex-row items-center gap-4 text-xl font-bold"><!#><!/><p>'),ee=D('<div class="w-full max-w-[800px] min-h-screen flex flex-col items-center gap-5 overflow-hidden px-5"><h1 class="uppercase tracking-wide">José Salcedo Núñez</h1><div class="flex justify-around uppercase w-full max-w-7xl"><h2>Nómina periodo <!#><!/></h2><h2></h2><h2></h2></div><div class="max-w-7xl"></div><div class="text-xs w-full"><h3 class="font-bold uppercase">Trabajadores: <!#><!/></h3><h3 class="font-bold uppercase underline">Clave</h3><ul class="ml-5"><li>A = ASISTENCIA</li><li>B = BAJA</li><li>P = PERMISO (FALTA INJUSTIFICADA, NO AMERITA ACTA ADMINISTRATIVA)</li><li>F = FALTA INJUSTIFICADA (AMERITA ACTA ADMINISTRATIVA)</li><li>V = VACACIONES</li><li>N = NO LABORABLE</li><li>I = INCAPACIDAD</li></ul></div><div class="w-full flex flex-col items-center mt-5"><div class="w-1/4 h-[4px] bg-black"></div><p>JEFE DE PRODUCCIÓN'),o=new Date,te=new Date(o.getFullYear(),0,1),ne=Math.ceil(Math.floor((o-te)/(24*60*60*1e3))/7),b=o.getDay(),$=new Date,O=new Date;$.setDate(b<4?o.getDate()-b-3:o.getDate()-b+4);O.setDate(b<4?o.getDate()-b+3:o.getDate()-b+10);const M=le($,O),y={A:"bg-green-50 text-green-600",B:"bg-gray-50 text-gray-600",P:"bg-green-50 text-green-600",F:"bg-red-50 text-red-600",V:"bg-gray-50 text-gray-600",N:"bg-gray-50 text-gray-600",I:"bg-yellow-50 text-yellow-600"};function le(l,n){let e=[],s=new Date(l.getTime());for(let a=s;a<=n;a.setDate(a.getDate()+1)){const c=a.toUTCString().split(" ");e.push(`${c[1]} ${c[2]}`)}return e}function se(l,n,e){const s=new Array(e.length),a=Math.abs(o-$),c=Math.ceil(a/(1e3*60*60*24))+1,m={0:"J",1:"V",2:"S",3:"D",4:"L",5:"M",6:"m"};for(let i=0;i<e.length;i++){s[i]={nombres:`${e[i].Nombres} ${e[i].APaterno}`.toUpperCase()};for(let r=0;r<c;r++)s[i][m[r]]="A"}for(let i=0;i<n.length;i++){const r=n[i],A=new Date(r.Fecha).toUTCString().split(" "),f=`${A[1]} ${A[2]}`,d=l.indexOf(f);let h=-1,_=0;for(;_<e.length;){if(e[_].idTrabajador===r.idTrabajador){h=_;break}_++}d!==-1&&h!==-1&&(s[h][m[d]]=r.idIncidencia)}return s}function ie(l,n){const e=N(l),s=N(n);return K(e,"idNivel",!1),se(M,s,e)}function u(l,n){return l==="nombres"||!y[n]?n:(()=>{const e=S(W);return g(e,n),G(()=>z(e,`inline-flex w-full h-full font-bold justify-center items-center text-lg ${y[n]}`)),e})()}const ae={J:u,V:u,S:u,D:u,L:u,M:u,m:u};function de(){const[l,n]=T(null),[e,s]=T({state:"LOADING"}),[a]=C(Z),[c]=C(q),m={0:"J",1:"V",2:"S",3:"D",4:"L",5:"M",6:"m"},i={0:"ENERO",1:"FEBRERO",2:"MARZO",3:"ABRIL",4:"MAYO",5:"JUNIO",6:"JULIO",7:"AGOSTO",8:"SEPTIEMBRE",9:"OCTUBRE",10:"NOVIEMBRE",11:"DICIEMBRE"};let r={0:"TRABAJADOR"};for(let t=0;t<7;t++)r[t+1]=`${m[t]} ${M[t].split(" ")[0]}`;return k(async()=>{if(a.state==="ready"&&c.state==="ready"){s({state:"READY",msg:""});const t=ie(a(),c());n(t)}else a.error||c.error?s({state:"ERROR",msg:"Error de peticion de tablas"}):(a.loading||c.loading)&&s({state:"LOADING",msg:"Cargando informacion..."})}),x(Y,{get children(){return[x(p,{get when(){return e().state==="ERROR"},get children(){return e().msg}}),x(p,{get when(){return e().state==="LOADING"},get children(){const t=S(X),A=t.firstChild,[f,d]=I(A.nextSibling),h=f.nextSibling;return g(t,x(H,{size:"lg"}),f,d),g(h,()=>e().msg),t}}),x(p,{get when(){return P(()=>e().state==="READY"&&l()!==null)()&&typeof l()?.length<"u"},get children(){const t=S(ee),A=t.firstChild,f=A.nextSibling,d=f.firstChild,h=d.firstChild,_=h.nextSibling,[v,B]=I(_.nextSibling),E=d.nextSibling,L=E.nextSibling,R=f.nextSibling,F=R.nextSibling,w=F.firstChild,J=w.firstChild,j=J.nextSibling,[U,V]=I(j.nextSibling);return g(d,ne,v,B),g(E,()=>i[o.getMonth()]),g(L,()=>o.getFullYear()),g(R,x(Q,{get data(){return l()},get titles(){return Object.values(r)},col_conditions:ae})),g(w,()=>l().length,U,V),t}})]}})}export{de as default};
