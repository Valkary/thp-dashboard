import{c as pe,a as nt,b as dt,d,g as _,S as o,e as b,i as r,F as at,f as C,h as st,j as ot,t as x,s as bt,k as i}from"./web.1e73aeaa.js";import{f as ct}from"./fetch.093e36cc.js";const gt=x('<div class="w-full flex flex-row flex-wrap my-4 justify-center"><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">idTrabajador:</h5><p class="w-1/3 border border-black rounded-sm bg-gray-200 text-center"></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">Nombre completo:</h5><p class="w-1/3 border border-black rounded-sm bg-gray-200 text-center"></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">Foto:</h5><img loading="lazy" alt="Foto de trabajador"></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">idSexo:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">idSangre:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">Fecha nacimiento:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">Fecha alta:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">Sueldo:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">NSS:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">CURP:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">RFC:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">INE:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">Domicilio:</h5><p class="w-1/3 border border-black rounded-sm bg-gray-200 text-center"></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">Celular:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">idBanco:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">Número de cuenta:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">CLABE:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">Calzado Medida:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">Calzado Medida:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">Calzado Medida:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">Teléfono del contacto:</h5><p></p></div><div class="w-1/2 flex flex-row justify-start items-center"><h5 class="font-bold tracking-wide w-2/3">Beneficiario:</h5><p>'),ft=x('<article class="mx-8"><div class="flex w-full justify-end gap-4"><!#><!/><!#><!/><select></select></div><!#><!/>'),$t=x("<div>Cargando informacion"),_t=x("<option><!#><!/> <!#><!/>");function wt(){const[a,Xe]=pe(),[e,Fe]=pe(),[c]=nt(ct);return dt(()=>{a()&&Fe(c()[a()]),console.log(e())}),d(ot,{get fallback(){return _($t)},get children(){return[d(o,{get when(){return c.state==="ready"},get children(){const v=_(ft),g=v.firstChild,Te=g.firstChild,[k,Be]=b(Te.nextSibling),De=k.nextSibling,[j,Ee]=b(De.nextSibling),w=j.nextSibling,ze=g.nextSibling,[Me,Re]=b(ze.nextSibling);return r(g,d(o,{get when(){return!a()},children:"Trabajador no seleccionado"}),k,Be),r(g,d(o,{get when(){return a()},children:"Trabajador seleccionado:"}),j,Ee),w.addEventListener("change",l=>Xe(l.currentTarget.value)),r(w,d(at,{get each(){return c()},children:(l,f)=>(()=>{const n=_(_t),u=n.firstChild,[s,h]=b(u.nextSibling),m=s.nextSibling,$=m.nextSibling,[S,y]=b($.nextSibling);return r(n,()=>l.Nombres,s,h),r(n,()=>l.APaterno,S,y),C(()=>n.value=f()),n})()})),r(v,d(o,{get when(){return st(()=>!!a())()&&e()},get children(){const l=_(gt),f=l.firstChild,n=f.firstChild,u=n.nextSibling,s=f.nextSibling,h=s.firstChild,m=h.nextSibling,$=s.nextSibling,S=$.firstChild,y=S.nextSibling,N=$.nextSibling,Ae=N.firstChild,p=Ae.nextSibling,X=N.nextSibling,Ie=X.firstChild,F=Ie.nextSibling,T=X.nextSibling,Pe=T.firstChild,B=Pe.nextSibling,D=T.nextSibling,Ue=D.firstChild,E=Ue.nextSibling,z=D.nextSibling,qe=z.firstChild,M=qe.nextSibling,R=z.nextSibling,Le=R.firstChild,A=Le.nextSibling,I=R.nextSibling,Ge=I.firstChild,P=Ge.nextSibling,U=I.nextSibling,He=U.firstChild,q=He.nextSibling,L=U.nextSibling,Je=L.firstChild,G=Je.nextSibling,H=L.nextSibling,Ke=H.firstChild,Oe=Ke.nextSibling,J=H.nextSibling,Qe=J.firstChild,K=Qe.nextSibling,O=J.nextSibling,Ve=O.firstChild,Q=Ve.nextSibling,V=O.nextSibling,We=V.firstChild,W=We.nextSibling,Y=V.nextSibling,Ye=Y.firstChild,Z=Ye.nextSibling,ee=Y.nextSibling,Ze=ee.firstChild,te=Ze.nextSibling,re=ee.nextSibling,et=re.firstChild,ie=et.nextSibling,le=re.nextSibling,tt=le.firstChild,ne=tt.nextSibling,de=le.nextSibling,rt=de.firstChild,ae=rt.nextSibling,it=de.nextSibling,lt=it.firstChild,se=lt.nextSibling;return r(u,()=>e().idTrabajador),r(m,()=>`${e().Nombres} ${e().APaterno} ${e().AMaterno}`),r(p,()=>e().idSexo??"X"),r(F,()=>e().idSangre??"X"),r(B,()=>e().FecNacimiento??"X"),r(E,()=>e().FecAlta??"X"),r(M,()=>e().SBC??"X"),r(A,()=>e().Nss??"X"),r(P,()=>e().CURP??"X"),r(q,()=>e().Rfc??"X"),r(G,()=>e().Ife??"X"),r(Oe,()=>`${e().DomCalle}, ${e().DomNumExt},${e().DomNumInt?e().DomNumInt+",":""} ${e().DomColonia}, ${e().DomCp}, ${e().DomCiudad}, ${e().DomEstado}`),r(K,()=>e().Cel??"X"),r(Q,()=>e().idBanco??"X"),r(W,()=>e().CtaNum??"X"),r(Z,()=>e().CtaClabe??"X"),r(te,()=>e().CalzMedida??"X"),r(ie,()=>e().CalzCasquillo?"Si":"No"),r(ne,()=>e().Contacto??"X"),r(ae,()=>e().TelContacto??"X"),r(se,()=>e().Beneficiario??"X"),C(t=>{const oe=e().Foto,be=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().idSexo?"bg-gray-200":"bg-red-400"}`,ce=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().idSangre?"bg-gray-200":"bg-red-400"}`,ge=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().FecNacimiento?"bg-gray-200":"bg-red-400"}`,fe=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().FecAlta?"bg-gray-200":"bg-red-400"}`,$e=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().SBC?"bg-gray-200":"bg-red-400"}`,_e=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().Nss?"bg-gray-200":"bg-red-400"}`,xe=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().CURP?"bg-gray-200":"bg-red-400"}`,ve=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().Rfc?"bg-gray-200":"bg-red-400"}`,we=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().Ife?"bg-gray-200":"bg-red-400"}`,ue=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().Cel?"bg-gray-200":"bg-red-400"}`,he=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().idBanco?"bg-gray-200":"bg-red-400"}`,me=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().CtaNum?"bg-gray-200":"bg-red-400"}`,Se=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().CtaClabe?"bg-gray-200":"bg-red-400"}`,ye=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().CalzMedida?"bg-gray-200":"bg-red-400"}`,Ce=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().CalzCasquillo?"bg-gray-200":"bg-red-400"}`,ke=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().Contacto?"bg-gray-200":"bg-red-400"}`,je=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().TelContacto?"bg-gray-200":"bg-red-400"}`,Ne=`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${e().Beneficiario?"bg-gray-200":"bg-red-400"}`;return oe!==t._v$&&bt(y,"src",t._v$=oe),be!==t._v$2&&i(p,t._v$2=be),ce!==t._v$3&&i(F,t._v$3=ce),ge!==t._v$4&&i(B,t._v$4=ge),fe!==t._v$5&&i(E,t._v$5=fe),$e!==t._v$6&&i(M,t._v$6=$e),_e!==t._v$7&&i(A,t._v$7=_e),xe!==t._v$8&&i(P,t._v$8=xe),ve!==t._v$9&&i(q,t._v$9=ve),we!==t._v$10&&i(G,t._v$10=we),ue!==t._v$11&&i(K,t._v$11=ue),he!==t._v$12&&i(Q,t._v$12=he),me!==t._v$13&&i(W,t._v$13=me),Se!==t._v$14&&i(Z,t._v$14=Se),ye!==t._v$15&&i(te,t._v$15=ye),Ce!==t._v$16&&i(ie,t._v$16=Ce),ke!==t._v$17&&i(ne,t._v$17=ke),je!==t._v$18&&i(ae,t._v$18=je),Ne!==t._v$19&&i(se,t._v$19=Ne),t},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0}),l}}),Me,Re),C(()=>w.value=a()),v}}),d(o,{get when(){return c.state==="errored"},children:"Error"})]}})}export{wt as default};