import{c as T,a as C,l as k,e as b,S as p,g as S,b as I,i as g,h as P,j as Y,t as D,f as G,k as z}from"./web.7c46431d.js";import{b as Z,c as q,S as H,r as N,s as K}from"./Spinner.aad98488.js";import{T as Q}from"./Table.d357bf8b.js";const W=D("<span>"),X=D('<div class="flex flex-row items-center gap-4 text-xl font-bold"><!#><!/><p>'),ee=D('<div class="w-full max-w-[800px] min-h-screen flex flex-col items-center gap-5 overflow-hidden px-5"><h1 class="uppercase tracking-wide">José Salcedo Núñez</h1><div class="flex justify-around uppercase w-full max-w-7xl"><h2>Nómina periodo <!#><!/></h2><h2></h2><h2></h2></div><div class="max-w-7xl"></div><div class="text-xs w-full"><h3 class="font-bold uppercase">Trabajadores: <!#><!/></h3><h3 class="font-bold uppercase underline">Clave</h3><ul class="ml-5"><li>A = ASISTENCIA</li><li>B = BAJA</li><li>P = PERMISO (FALTA INJUSTIFICADA, NO AMERITA ACTA ADMINISTRATIVA)</li><li>F = FALTA INJUSTIFICADA (AMERITA ACTA ADMINISTRATIVA)</li><li>V = VACACIONES</li><li>N = NO LABORABLE</li><li>I = INCAPACIDAD</li></ul></div><div class="w-full flex flex-col items-center mt-5"><div class="w-1/4 h-[4px] bg-black"></div><p>JEFE DE PRODUCCIÓN'),o=new Date,te=new Date(o.getFullYear(),0,1),le=Math.ceil(Math.floor((o-te)/(24*60*60*1e3))/7),x=o.getDay(),$=new Date,y=new Date;$.setDate(x<4?o.getDate()-x-3:o.getDate()-x+4);y.setDate(x<4?o.getDate()-x+3:o.getDate()-x+10);const M=ne($,y),O={A:"bg-green-50 text-green-600",B:"bg-gray-50 text-gray-600",P:"bg-orange-50 text-orange-600",F:"bg-red-50 text-red-600",V:"bg-blue-50 text-blue-600",N:"bg-gray-50 text-gray-600",I:"bg-yellow-50 text-yellow-600"};function ne(n,l){let e=[],s=new Date(n.getTime());for(let a=s;a<=l;a.setDate(a.getDate()+1)){const c=a.toUTCString().split(" ");e.push(`${c[1]} ${c[2]}`)}return e}function se(n,l,e){const s=new Array(e.length),a=Math.abs(o-$),c=Math.ceil(a/(1e3*60*60*24))+1,m={0:"J",1:"V",2:"S",3:"D",4:"L",5:"M",6:"m"};for(let i=0;i<e.length;i++){s[i]={nombres:`${e[i].Nombres} ${e[i].APaterno}`.toUpperCase()};for(let r=0;r<c;r++)s[i][m[r]]="A"}for(let i=0;i<l.length;i++){const r=l[i],A=new Date(r.Fecha).toUTCString().split(" "),f=`${A[1]} ${A[2]}`,d=n.indexOf(f);let u=-1,_=0;for(;_<e.length;){if(e[_].idTrabajador===r.idTrabajador){u=_;break}_++}d!==-1&&u!==-1&&(s[u][m[d]]=r.idIncidencia)}return s}function ie(n,l){const e=N(n),s=N(l);return K(e,"idNivel",!1),se(M,s,e)}function h(n,l){return n==="nombres"||!O[l]?l:(()=>{const e=S(W);return g(e,l),G(()=>z(e,`inline-flex w-full h-full font-bold justify-center items-center text-lg ${O[l]}`)),e})()}const ae={J:h,V:h,S:h,D:h,L:h,M:h,m:h};function de(){const[n,l]=T(null),[e,s]=T({state:"LOADING"}),[a]=C(Z),[c]=C(q),m={0:"J",1:"V",2:"S",3:"D",4:"L",5:"M",6:"m"},i={0:"ENERO",1:"FEBRERO",2:"MARZO",3:"ABRIL",4:"MAYO",5:"JUNIO",6:"JULIO",7:"AGOSTO",8:"SEPTIEMBRE",9:"OCTUBRE",10:"NOVIEMBRE",11:"DICIEMBRE"};let r={0:"TRABAJADOR"};for(let t=0;t<7;t++)r[t+1]=`${m[t]} ${M[t].split(" ")[0]}`;return k(async()=>{if(a.state==="ready"&&c.state==="ready"){s({state:"READY",msg:""});const t=ie(a(),c());l(t)}else a.error||c.error?s({state:"ERROR",msg:"Error de peticion de tablas"}):(a.loading||c.loading)&&s({state:"LOADING",msg:"Cargando informacion..."})}),b(Y,{get children(){return[b(p,{get when(){return e().state==="ERROR"},get children(){return e().msg}}),b(p,{get when(){return e().state==="LOADING"},get children(){const t=S(X),A=t.firstChild,[f,d]=I(A.nextSibling),u=f.nextSibling;return g(t,b(H,{size:"lg"}),f,d),g(u,()=>e().msg),t}}),b(p,{get when(){return P(()=>e().state==="READY"&&n()!==null)()&&typeof n()?.length<"u"},get children(){const t=S(ee),A=t.firstChild,f=A.nextSibling,d=f.firstChild,u=d.firstChild,_=u.nextSibling,[v,B]=I(_.nextSibling),E=d.nextSibling,L=E.nextSibling,R=f.nextSibling,F=R.nextSibling,w=F.firstChild,J=w.firstChild,j=J.nextSibling,[U,V]=I(j.nextSibling);return g(d,le,v,B),g(E,()=>i[o.getMonth()]),g(L,()=>o.getFullYear()),g(R,b(Q,{get data(){return n()},get titles(){return Object.values(r)},col_conditions:ae})),g(w,()=>n().length,U,V),t}})]}})}export{de as default};