import{e as Xe,c as nt,f as dt,a as l,g as $,S as c,b,i as r,F as at,j,h as st,d as ot,t as _,s as ct,k as i}from"./web.a979243f.js";import{d as bt,S as gt}from"./Spinner.2aad722a.js";const ft=_('<div class="flex flex-row items-center gap-4 text-xl font-bold"><!#><!/><p>Cargando información...'),$t=_('<div class="w-full flex flex-row flex-wrap my-4 justify-center"><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">idTrabajador:</h5><p class="w-1/3 border border-black rounded-sm bg-gray-200 text-center"></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">Nombre completo:</h5><p class="w-1/3 border border-black rounded-sm bg-gray-200 text-center"></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">Foto:</h5><img loading="lazy" alt="Foto de trabajador"></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">idSexo:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">idSangre:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">Fecha nacimiento:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">Fecha alta:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">Sueldo:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">NSS:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">CURP:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">RFC:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">INE:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">Domicilio:</h5><p class="w-1/3 border border-black rounded-sm bg-gray-200 text-center"></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">Celular:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">idBanco:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">Número de cuenta:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">CLABE:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">Calzado Medida:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">Calzado Medida:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">Calzado Medida:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">Teléfono del contacto:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">Beneficiario:</h5><p>'),_t=_('<article class="mx-8"><div class="flex w-full justify-end gap-4"><!#><!/><!#><!/><select></select></div><!#><!/>'),xt=_("<div>Cargando informacion"),vt=_("<option><!#><!/> <!#><!/>");function ht(){const[s,Fe]=Xe(),[e,Te]=Xe(),[g]=nt(bt);return dt(()=>{s()&&Te(g()[s()]),console.log(e())}),l(ot,{get fallback(){return $(xt)},get children(){return[l(c,{get when(){return g.error},get children(){const n=$(ft),o=n.firstChild,[x,v]=b(o.nextSibling);return x.nextSibling,r(n,l(gt,{size:"lg"}),x,v),n}}),l(c,{get when(){return g.error},children:"Error"}),l(c,{get when(){return g.state==="ready"},get children(){const n=$(_t),o=n.firstChild,x=o.firstChild,[v,ze]=b(x.nextSibling),Be=v.nextSibling,[p,De]=b(Be.nextSibling),h=p.nextSibling,Ee=o.nextSibling,[Me,Re]=b(Ee.nextSibling);return r(o,l(c,{get when(){return!s()},children:"Trabajador no seleccionado"}),v,ze),r(o,l(c,{get when(){return s()},children:"Trabajador seleccionado:"}),p,De),h.addEventListener("change",d=>Fe(d.currentTarget.value)),r(h,l(at,{get each(){return g()},children:(d,w)=>(()=>{const a=$(vt),m=a.firstChild,[f,S]=b(m.nextSibling),y=f.nextSibling,u=y.nextSibling,[C,k]=b(u.nextSibling);return r(a,()=>d.Nombres,f,S),r(a,()=>d.APaterno,C,k),j(()=>a.value=w()),a})()})),r(n,l(c,{get when(){return st(()=>!!s())()&&e()},get children(){const d=$($t),w=d.firstChild,a=w.firstChild,m=a.nextSibling,f=w.nextSibling,S=f.firstChild,y=S.nextSibling,u=f.nextSibling,C=u.firstChild,k=C.nextSibling,N=u.nextSibling,Ae=N.firstChild,X=Ae.nextSibling,F=N.nextSibling,Ie=F.firstChild,T=Ie.nextSibling,z=F.nextSibling,Pe=z.firstChild,B=Pe.nextSibling,D=z.nextSibling,Ue=D.firstChild,E=Ue.nextSibling,M=D.nextSibling,qe=M.firstChild,R=qe.nextSibling,A=M.nextSibling,Le=A.firstChild,I=Le.nextSibling,P=A.nextSibling,Ge=P.firstChild,U=Ge.nextSibling,q=P.nextSibling,He=q.firstChild,L=He.nextSibling,G=q.nextSibling,Je=G.firstChild,H=Je.nextSibling,J=G.nextSibling,Ke=J.firstChild,Oe=Ke.nextSibling,K=J.nextSibling,Qe=K.firstChild,O=Qe.nextSibling,Q=K.nextSibling,Ve=Q.firstChild,V=Ve.nextSibling,W=Q.nextSibling,We=W.firstChild,Y=We.nextSibling,Z=W.nextSibling,Ye=Z.firstChild,ee=Ye.nextSibling,te=Z.nextSibling,Ze=te.firstChild,re=Ze.nextSibling,ie=te.nextSibling,et=ie.firstChild,le=et.nextSibling,ne=ie.nextSibling,tt=ne.firstChild,de=tt.nextSibling,ae=ne.nextSibling,rt=ae.firstChild,se=rt.nextSibling,it=ae.nextSibling,lt=it.firstChild,oe=lt.nextSibling;return r(m,()=>e().idTrabajador),r(y,()=>`${e().Nombres} ${e().APaterno} ${e().AMaterno}`),r(X,()=>e().idSexo??"X"),r(T,()=>e().idSangre??"X"),r(B,()=>e().FecNacimiento??"X"),r(E,()=>e().FecAlta??"X"),r(R,()=>e().SBC??"X"),r(I,()=>e().Nss??"X"),r(U,()=>e().CURP??"X"),r(L,()=>e().Rfc??"X"),r(H,()=>e().Ife??"X"),r(Oe,()=>`${e().DomCalle}, ${e().DomNumExt},${e().DomNumInt?e().DomNumInt+",":""} ${e().DomColonia}, ${e().DomCp}, ${e().DomCiudad}, ${e().DomEstado}`),r(O,()=>e().Cel??"X"),r(V,()=>e().idBanco??"X"),r(Y,()=>e().CtaNum??"X"),r(ee,()=>e().CtaClabe??"X"),r(re,()=>e().CalzMedida??"X"),r(le,()=>e().CalzCasquillo?"Si":"No"),r(de,()=>e().Contacto??"X"),r(se,()=>e().TelContacto??"X"),r(oe,()=>e().Beneficiario??"X"),j(t=>{const ce=e().Foto,be=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().idSexo?"bg-gray-200":"bg-red-400"}`,ge=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().idSangre?"bg-gray-200":"bg-red-400"}`,fe=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().FecNacimiento?"bg-gray-200":"bg-red-400"}`,$e=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().FecAlta?"bg-gray-200":"bg-red-400"}`,_e=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().SBC?"bg-gray-200":"bg-red-400"}`,xe=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().Nss?"bg-gray-200":"bg-red-400"}`,ve=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().CURP?"bg-gray-200":"bg-red-400"}`,we=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().Rfc?"bg-gray-200":"bg-red-400"}`,ue=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().Ife?"bg-gray-200":"bg-red-400"}`,he=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().Cel?"bg-gray-200":"bg-red-400"}`,me=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().idBanco?"bg-gray-200":"bg-red-400"}`,Se=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().CtaNum?"bg-gray-200":"bg-red-400"}`,ye=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().CtaClabe?"bg-gray-200":"bg-red-400"}`,Ce=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().CalzMedida?"bg-gray-200":"bg-red-400"}`,ke=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().CalzCasquillo?"bg-gray-200":"bg-red-400"}`,je=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().Contacto?"bg-gray-200":"bg-red-400"}`,pe=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().TelContacto?"bg-gray-200":"bg-red-400"}`,Ne=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().Beneficiario?"bg-gray-200":"bg-red-400"}`;return ce!==t._v$&&ct(k,"src",t._v$=ce),be!==t._v$2&&i(X,t._v$2=be),ge!==t._v$3&&i(T,t._v$3=ge),fe!==t._v$4&&i(B,t._v$4=fe),$e!==t._v$5&&i(E,t._v$5=$e),_e!==t._v$6&&i(R,t._v$6=_e),xe!==t._v$7&&i(I,t._v$7=xe),ve!==t._v$8&&i(U,t._v$8=ve),we!==t._v$9&&i(L,t._v$9=we),ue!==t._v$10&&i(H,t._v$10=ue),he!==t._v$11&&i(O,t._v$11=he),me!==t._v$12&&i(V,t._v$12=me),Se!==t._v$13&&i(Y,t._v$13=Se),ye!==t._v$14&&i(ee,t._v$14=ye),Ce!==t._v$15&&i(re,t._v$15=Ce),ke!==t._v$16&&i(le,t._v$16=ke),je!==t._v$17&&i(de,t._v$17=je),pe!==t._v$18&&i(se,t._v$18=pe),Ne!==t._v$19&&i(oe,t._v$19=Ne),t},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0}),d}}),Me,Re),j(()=>h.value=s()),n}})]}})}export{ht as default};
