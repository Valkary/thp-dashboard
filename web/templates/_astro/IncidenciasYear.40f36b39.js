import{c as _,a as E,l as F,e as o,g as r,b as u,i as a,S as h,j as I,t as p,F as N}from"./web.7c46431d.js";import{i as T,S as B}from"./Spinner.aad98488.js";import{T as V}from"./Table.d357bf8b.js";const A=p('<div class="flex flex-col gap-1 items-center justify-start">'),L=p("<p>"),m=p('<div class="flex h-full justify-start items-start">'),M=p('<div class="flex flex-row items-center gap-4 text-xl font-bold"><!#><!/><p>Cargando incidencias'),O=p('<div class="w-full max-w-[800px] min-h-screen flex flex-col items-center gap-5 overflow-hidden px-5"><div class="w-full flex items-center justify-end"><p>Incidencia:</p><select><option value="V">Vacaciones</option><option value="B">Baja</option><option value="P">Permiso</option><option value="F">Falta</option><option value="N">No laborable</option><option value="I">Incapacidad</option></select></div><!#><!/><!#><!/>');function z(){const[$,x]=_("V"),[b,v]=_([]),[t]=E($,T);return F(()=>{if(console.log(t()),t.state==="ready"){const i=[];let s=[];for(let n=0;n<t().length;n++){for(let e=0;e<t()[n].fechas.length;e++){const l=t()[n].fechas[e].split("-");s.push(`${l[2]}/${l[1]}/${l[0]}`)}const d=(()=>{const e=r(A);return a(e,o(N,{each:s,children:l=>(()=>{const f=r(L);return a(f,l),f})()})),e})();i.push({nombre:(()=>{const e=r(m);return a(e,()=>t()[n].nombre),e})(),total:(()=>{const e=r(m);return a(e,()=>t()[n].total),e})(),fechas:d}),s=[]}v(i)}}),o(I,{get children(){const i=r(O),s=i.firstChild,n=s.firstChild,d=n.nextSibling,e=s.nextSibling,[l,f]=u(e.nextSibling),S=l.nextSibling,[w,j]=u(S.nextSibling);return d.addEventListener("change",c=>x(c.target.value)),a(i,o(h,{get when(){return t.state==="ready"},get children(){return o(V,{titles:["NOMBRE","TOTAL","FECHAS"],get data(){return b()}})}}),l,f),a(i,o(h,{get when(){return t.state==="refreshing"||t.loading},get children(){const c=r(M),C=c.firstChild,[g,y]=u(C.nextSibling);return g.nextSibling,a(c,o(B,{size:"lg"}),g,y),c}}),w,j),i}})}export{z as default};
