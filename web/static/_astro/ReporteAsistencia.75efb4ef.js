import{c as w,a as R,g as I,b as k,d as A,t as p,M as m,e as P,f as N,i as u,S as Y,h as G,j as z}from"./web.33be2172.js";import{f as Z,a as q,r as C,s as H}from"./fetch.e76ce3a6.js";import K from"./Table.76d584d1.js";const Q=p("<span>"),W=p('<h3 class="text-xl font-bold">Trabajador'),X=p('<div class="w-full max-w-[800px] h-screen flex flex-col items-center gap-5 max-h-screen overflow-hidden px-5"><h1 class="uppercase tracking-wide font-bold underline">José Salcedo Nuñez</h1><div class="flex justify-around uppercase w-full max-w-7xl"><h2>Nómina periodo <!#><!/></h2><h2></h2><h2 class="font-bold underline"></h2></div><div class="max-w-7xl"></div><div class="text-xs w-full"><h3 class="font-bold uppercase">Trabajadores: <!#><!/></h3><h3 class="font-bold uppercase underline">Clave</h3><ul class="ml-5"><li>A = ASISTENCIA</li><li>B = BAJA</li><li>P = PERMISO (FALTA INJUSTIFICADA, NO AMERITA ACTA ADMINISTRATIVA)</li><li>F = FALTA INJUSTIFICADA (AMERITA ACTA ADMINISTRATIVA)</li><li>V = VACACIONES</li><li>N = NO LABORABLE</li><li>I = INCAPACIDAD</li></ul></div><div class="w-full flex flex-col items-center mt-5"><div class="w-1/4 h-[4px] bg-black"></div><p>JEFE DE PRODUCCIÓN'),o=new Date,ee=new Date(o.getFullYear(),0,1),te=Math.ceil(Math.floor((o-ee)/(24*60*60*1e3))/7),h=o.getDay(),D=new Date,y=new Date;D.setDate(h<4?o.getDate()-h-3:o.getDate()-h+4);y.setDate(h<4?o.getDate()-h+3:o.getDate()-h+10);const O=ne(D,y),T={A:"bg-green-50 text-green-600",B:"bg-gray-50 text-gray-600",P:"bg-green-50 text-green-600",F:"bg-red-50 text-red-600",V:"bg-gray-50 text-gray-600",N:"bg-gray-50 text-gray-600",I:"bg-yellow-50 text-yellow-600"};function ne(l,t){let e=[],a=new Date(l.getTime());for(let r=a;r<=t;r.setDate(r.getDate()+1)){const i=r.toUTCString().split(" ");e.push(`${i[1]} ${i[2]}`)}return e}function le(l,t,e){const a=new Array(e.length),r=o.getDate()-D.getDate()+1,i={0:"J",1:"V",2:"S",3:"D",4:"L",5:"M",6:"m"};for(let s=0;s<e.length;s++){a[s]={nombres:`${e[s].Nombres} ${e[s].APaterno}`.toUpperCase()};for(let c=0;c<r;c++)a[s][i[c]]="A"}for(let s=0;s<t.length;s++){const c=t[s],n=new Date(c.Fecha).toUTCString().split(" "),x=`${n[1]} ${n[2]}`,_=l.indexOf(x);let g,f=0;for(;f<e.length;){if(e[f].idTrabajador===c.idTrabajador){g=f;break}f++}a[g][i[_]]=c.idIncidencia}return a}function ae(l,t){const e=C(l),a=C(t);return H(e,"idNivel",!1),le(O,a,e)}function d(l,t){return l==="nombres"||!T[t]?t:(()=>{const e=I(Q);return u(e,t),G(()=>z(e,`inline-flex w-full h-full font-bold justify-center items-center text-lg ${T[t]}`)),e})()}const se={J:d,V:d,S:d,D:d,L:d,M:d,m:d};function ce(){const[l,t]=w(null),[e,a]=w({state:"LOADING"}),[r]=R(Z),[i]=R(q),s={0:"J",1:"V",2:"S",3:"D",4:"L",5:"M",6:"m"},c={0:"ENERO",1:"FEBRERO",2:"MARZO",3:"ABRIL",4:"MAYO",5:"JUNIO",6:"JULIO",7:"AGOSTO",8:"SEPTIEMBRE",9:"OCTUBRE",10:"NOVIEMBRE",11:"DICIEMBRE"};let b={0:I(W)};for(let n=0;n<7;n++)b[n+1]=`${s[n]} ${O[n].split(" ")[0]}`;return k(async()=>{if(r.state==="ready"&&i.state==="ready"){a({state:"READY",msg:""});const n=ae(r.latest,i.latest);t(n)}else r.error||i.error?a({state:"ERROR",msg:"Error de peticion de tablas"}):(r.loading||i.loading)&&a({state:"LOADING",msg:"Cargando informacion..."})}),A(Y,{get children(){return[A(m,{get when(){return e().state==="ERROR"},get children(){return e().msg}}),A(m,{get when(){return e().state==="LOADING"},get children(){return e().msg}}),A(m,{get when(){return P(()=>e().state==="READY"&&l()!==null)()&&typeof l()?.length<"u"},get children(){const n=I(X),x=n.firstChild,_=x.nextSibling,g=_.firstChild,f=g.firstChild,M=f.nextSibling,[L,v]=N(M.nextSibling),S=g.nextSibling,B=S.nextSibling,E=_.nextSibling,F=E.nextSibling,$=F.firstChild,j=$.firstChild,J=j.nextSibling,[U,V]=N(J.nextSibling);return u(g,te,L,v),u(S,()=>c[o.getMonth()]),u(B,()=>o.getFullYear()),u(E,A(K,{get data(){return l()},get titles(){return Object.values(b)},col_conditions:se})),u($,()=>l().length,U,V),n}})]}})}export{ce as default};
