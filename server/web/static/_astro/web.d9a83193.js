const u={context:void 0,registry:void 0};function q(e){u.context=e}function Ce(){return{...u.context,id:`${u.context.id}${u.context.count++}-`,count:0}}const Ee=(e,t)=>e===t,ke=Symbol("solid-track"),D={equals:Ee};let ue=ye;const L=1,R=2,ce={owned:null,cleanups:null,context:null,owner:null},te={};var y=null;let B=null,p=null,S=null,T=null,Q=0;function _(e,t){const n=p,s=y,i=e.length===0,r=i?ce:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},l=i?e:()=>e(()=>E(()=>J(r)));y=r,p=null;try{return j(l,!0)}finally{p=n,y=s}}function P(e,t){t=t?Object.assign({},D,t):D;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),pe(n,i));return[ge.bind(n),s]}function ie(e,t,n){const s=X(e,t,!0,L);V(s)}function Y(e,t,n){const s=X(e,t,!1,L);V(s)}function Ye(e,t,n){ue=qe;const s=X(e,t,!1,L),i=F&&Z(y,F.id);i&&(s.suspense=i),(!n||!n.render)&&(s.user=!0),T?T.push(s):V(s)}function H(e,t,n){n=n?Object.assign({},D,n):D;const s=X(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,V(s),ge.bind(s)}function Ke(e,t,n){let s,i,r;arguments.length===2&&typeof t=="object"||arguments.length===1?(s=!0,i=e,r=t||{}):(s=e,i=t,r=n||{});let l=null,o=te,c=null,a=!1,f=!1,w="initialValue"in r,d=typeof s=="function"&&H(s);const h=new Set,[b,C]=(r.storage||P)(r.initialValue),[k,N]=P(void 0),[x,v]=P(void 0,{equals:!1}),[$,M]=P(w?"ready":"unresolved");if(u.context){c=`${u.context.id}${u.context.count++}`;let g;r.ssrLoadFrom==="initial"?o=r.initialValue:u.load&&(g=u.load(c))&&(o=g[0])}function U(g,m,A,I){return l===g&&(l=null,I!==void 0&&(w=!0),(g===o||m===o)&&r.onHydrated&&queueMicrotask(()=>r.onHydrated(I,{value:m})),o=te,ve(m,A)),m}function ve(g,m){j(()=>{m===void 0&&C(()=>g),M(m!==void 0?"errored":w?"ready":"unresolved"),N(m);for(const A of h.keys())A.decrement();h.clear()},!1)}function z(){const g=F&&Z(y,F.id),m=b(),A=k();if(A!==void 0&&!l)throw A;return p&&!p.user&&g&&ie(()=>{x(),l&&(g.resolved&&B&&a?B.promises.add(l):h.has(g)||(g.increment(),h.add(g)))}),m}function ee(g=!0){if(g!==!1&&f)return;f=!1;const m=d?d():s;if(a=B,m==null||m===!1){U(l,E(b));return}const A=o!==te?o:E(()=>i(m,{value:b(),refetching:g}));return typeof A!="object"||!(A&&"then"in A)?(U(l,A,void 0,m),A):(l=A,f=!0,queueMicrotask(()=>f=!1),j(()=>{M(w?"refreshing":"pending"),v()},!1),A.then(I=>U(A,I,void 0,m),I=>U(A,void 0,xe(I),m)))}return Object.defineProperties(z,{state:{get:()=>$()},error:{get:()=>k()},loading:{get(){const g=$();return g==="pending"||g==="refreshing"}},latest:{get(){if(!w)return z();const g=k();if(g&&!l)throw g;return b()}}}),d?ie(()=>ee(!1)):ee(!1),[z,{refetch:ee,mutate:C}]}function E(e){if(p===null)return e();const t=p;p=null;try{return e()}finally{p=t}}function ae(e){return y===null||(y.cleanups===null?y.cleanups=[e]:y.cleanups.push(e)),e}function $e(){return y}function Ne(e){T.push.apply(T,e),e.length=0}function de(e,t){const n=Symbol("context");return{id:n,Provider:Pe(n),defaultValue:e}}function Te(e){let t;return(t=Z(y,e.id))!==void 0?t:e.defaultValue}function he(e){const t=H(e),n=H(()=>ne(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let F;function He(){return F||(F=de({}))}function ge(){if(this.sources&&this.state)if(this.state===L)V(this);else{const e=S;S=null,j(()=>G(this),!1),S=e}if(p){const e=this.observers?this.observers.length:0;p.sources?(p.sources.push(this),p.sourceSlots.push(e)):(p.sources=[this],p.sourceSlots=[e]),this.observers?(this.observers.push(p),this.observerSlots.push(p.sources.length-1)):(this.observers=[p],this.observerSlots=[p.sources.length-1])}return this.value}function pe(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&j(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],l=B&&B.running;l&&B.disposed.has(r),(l?!r.tState:!r.state)&&(r.pure?S.push(r):T.push(r),r.observers&&we(r)),l||(r.state=L)}if(S.length>1e6)throw S=[],new Error},!1)),t}function V(e){if(!e.fn)return;J(e);const t=y,n=p,s=Q;p=y=e,Me(e,e.value,s),p=n,y=t}function Me(e,t,n){let s;try{s=e.fn(t)}catch(i){return e.pure&&(e.state=L,e.owned&&e.owned.forEach(J),e.owned=null),e.updatedAt=n+1,be(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?pe(e,s):e.value=s,e.updatedAt=n)}function X(e,t,n,s=L,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:y,context:null,pure:n};return y===null||y!==ce&&(y.owned?y.owned.push(r):y.owned=[r]),r}function K(e){if(e.state===0)return;if(e.state===R)return G(e);if(e.suspense&&E(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Q);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===L)V(e);else if(e.state===R){const s=S;S=null,j(()=>G(e,t[0]),!1),S=s}}function j(e,t){if(S)return e();let n=!1;t||(S=[]),T?n=!0:T=[],Q++;try{const s=e();return Le(n),s}catch(s){n||(T=null),S=null,be(s)}}function Le(e){if(S&&(ye(S),S=null),e)return;const t=T;T=null,t.length&&j(()=>ue(t),!1)}function ye(e){for(let t=0;t<e.length;t++)K(e[t])}function qe(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:K(s)}for(u.context&&q(),t=0;t<n;t++)K(e[t])}function G(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const i=s.state;i===L?s!==t&&(!s.updatedAt||s.updatedAt<Q)&&K(s):i===R&&G(s,t)}}}function we(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=R,n.pure?S.push(n):T.push(n),n.observers&&we(n))}}function J(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),l=n.observerSlots.pop();s<i.length&&(r.sourceSlots[l]=s,i[s]=r,n.observerSlots[s]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)J(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function xe(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function be(e,t=y){throw xe(e)}function Z(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:Z(e.owner,t):void 0}function ne(e){if(typeof e=="function"&&!e.length)return ne(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=ne(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Pe(e,t){return function(s){let i;return Y(()=>i=E(()=>(y.context={[e]:s.value},he(()=>s.children))),void 0),i}}const je=Symbol("fallback");function re(e){for(let t=0;t<e.length;t++)e[t]()}function Ue(e,t,n={}){let s=[],i=[],r=[],l=0,o=t.length>1?[]:null;return ae(()=>re(r)),()=>{let c=e()||[],a,f;return c[ke],E(()=>{let d=c.length,h,b,C,k,N,x,v,$,M;if(d===0)l!==0&&(re(r),r=[],s=[],i=[],l=0,o&&(o=[])),n.fallback&&(s=[je],i[0]=_(U=>(r[0]=U,n.fallback())),l=1);else if(l===0){for(i=new Array(d),f=0;f<d;f++)s[f]=c[f],i[f]=_(w);l=d}else{for(C=new Array(d),k=new Array(d),o&&(N=new Array(d)),x=0,v=Math.min(l,d);x<v&&s[x]===c[x];x++);for(v=l-1,$=d-1;v>=x&&$>=x&&s[v]===c[$];v--,$--)C[$]=i[v],k[$]=r[v],o&&(N[$]=o[v]);for(h=new Map,b=new Array($+1),f=$;f>=x;f--)M=c[f],a=h.get(M),b[f]=a===void 0?-1:a,h.set(M,f);for(a=x;a<=v;a++)M=s[a],f=h.get(M),f!==void 0&&f!==-1?(C[f]=i[a],k[f]=r[a],o&&(N[f]=o[a]),f=b[f],h.set(M,f)):r[a]();for(f=x;f<d;f++)f in C?(i[f]=C[f],r[f]=k[f],o&&(o[f]=N[f],o[f](f))):i[f]=_(w);i=i.slice(0,l=d),s=c.slice(0)}return i});function w(d){if(r[f]=d,o){const[h,b]=P(f);return o[f]=b,t(c[f],h)}return t(c[f])}}}let me=!1;function Ie(){me=!0}function Oe(e,t){if(me&&u.context){const n=u.context;q(Ce());const s=E(()=>e(t||{}));return q(n),s}return E(()=>e(t||{}))}const Ae=e=>`Stale read from <${e}>.`;function Ge(e){const t="fallback"in e&&{fallback:()=>e.fallback};return H(Ue(()=>e.each,e.children,t||void 0))}function We(e){const t=e.keyed,n=H(()=>e.when,void 0,{equals:(s,i)=>t?s===i:!s==!i});return H(()=>{const s=n();if(s){const i=e.children;return typeof i=="function"&&i.length>0?E(()=>i(t?s:()=>{if(!E(n))throw Ae("Show");return e.when})):i}return e.fallback},void 0,void 0)}function Qe(e){let t=!1;const n=(r,l)=>r[0]===l[0]&&(t?r[1]===l[1]:!r[1]==!l[1])&&r[2]===l[2],s=he(()=>e.children),i=H(()=>{let r=s();Array.isArray(r)||(r=[r]);for(let l=0;l<r.length;l++){const o=r[l].when;if(o)return t=!!r[l].keyed,[l,o,r[l]]}return[-1]},void 0,{equals:n});return H(()=>{const[r,l,o]=i();if(r<0)return e.fallback;const c=o.children;return typeof c=="function"&&c.length>0?E(()=>c(t?l:()=>{if(E(i)[0]!==r)throw Ae("Match");return o.when})):c},void 0,void 0)}function Xe(e){return e}const Be=de();function Je(e){let t=0,n,s,i,r,l;const[o,c]=P(!1),a=He(),f={increment:()=>{++t===1&&c(!0)},decrement:()=>{--t===0&&c(!1)},inFallback:o,effects:[],resolved:!1},w=$e();if(u.context&&u.load){const b=u.context.id+u.context.count;let C=u.load(b);if(C&&(i=C[0])&&i!=="$$f"){(typeof i!="object"||!("then"in i))&&(i=Promise.resolve(i));const[k,N]=P(void 0,{equals:!1});r=k,i.then(x=>{if(x||u.done)return x&&(l=x),N();u.gather(b),q(s),N(),q()})}}const d=Te(Be);d&&(n=d.register(f.inFallback));let h;return ae(()=>h&&h()),Oe(a.Provider,{value:f,get children(){return H(()=>{if(l)throw l;if(s=u.context,r)return r(),r=void 0;s&&i==="$$f"&&q();const b=H(()=>e.children);return H(C=>{const k=f.inFallback(),{showContent:N=!0,showFallback:x=!0}=n?n():{};if((!k||i&&i!=="$$f")&&N)return f.resolved=!0,h&&h(),h=s=i=void 0,Ne(f.effects),b();if(x)return h?C:_(v=>(h=v,s&&(q({id:s.id+"f",count:0}),s=void 0),e.fallback),w)})})}})}function Fe(e,t,n){let s=n.length,i=t.length,r=s,l=0,o=0,c=t[i-1].nextSibling,a=null;for(;l<i||o<r;){if(t[l]===n[o]){l++,o++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===l){const f=r<s?o?n[o-1].nextSibling:n[r-o]:c;for(;o<r;)e.insertBefore(n[o++],f)}else if(r===o)for(;l<i;)(!a||!a.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[r-1]&&n[o]===t[i-1]){const f=t[--i].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--r],f),t[i]=n[r]}else{if(!a){a=new Map;let w=o;for(;w<r;)a.set(n[w],w++)}const f=a.get(t[l]);if(f!=null)if(o<f&&f<r){let w=l,d=1,h;for(;++w<i&&w<r&&!((h=a.get(t[w]))==null||h!==f+d);)d++;if(d>f-o){const b=t[l];for(;o<f;)e.insertBefore(n[o++],b)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const oe="_$DX_DELEGATE";function Ve(e,t,n,s={}){let i;return _(r=>{i=r,t===document?e():_e(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function Ze(e,t,n){let s;const i=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},r=t?()=>E(()=>document.importNode(s||(s=i()),!0)):()=>(s||(s=i())).cloneNode(!0);return r.cloneNode=r,r}function ze(e,t=window.document){const n=t[oe]||(t[oe]=new Set);for(let s=0,i=e.length;s<i;s++){const r=e[s];n.has(r)||(n.add(r),t.addEventListener(r,Se))}}function et(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function tt(e,t){t==null?e.removeAttribute("class"):e.className=t}function _e(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return W(e,t,s,n);Y(i=>W(e,t(),i,n),s)}function De(e,t,n={}){u.completed=globalThis._$HY.completed,u.events=globalThis._$HY.events,u.load=globalThis._$HY.load,u.gather=i=>fe(t,i),u.registry=new Map,u.context={id:n.renderId||"",count:0},fe(t,n.renderId);const s=Ve(e,t,[...t.childNodes],n);return u.context=null,s}function nt(e){let t,n;if(!u.context||!(t=u.registry.get(n=Re()))){if(u.context&&console.warn("Unable to find DOM nodes for hydration key:",n),!e)throw new Error("Unrecoverable Hydration Mismatch. No template for key: "+n);return e()}return u.completed&&u.completed.add(t),u.registry.delete(n),t}function st(e){let t=e,n=0,s=[];if(u.context)for(;t;){if(t.nodeType===8){const i=t.nodeValue;if(i==="#")n++;else if(i==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function it(){u.events&&!u.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=u;for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;Se(s),t.shift()}}),u.events.queued=!0)}function Se(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),u.registry&&!u.done&&(u.done=_$HY.done=!0);n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function W(e,t,n,s,i){if(u.context){!n&&(n=[...e.childNodes]);let o=[];for(let c=0;c<n.length;c++){const a=n[c];a.nodeType===8&&a.data.slice(0,2)==="!$"?a.remove():o.push(a)}n=o}for(;typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,r==="string"||r==="number"){if(u.context)return n;if(r==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=O(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||r==="boolean"){if(u.context)return n;n=O(e,n,s)}else{if(r==="function")return Y(()=>{let o=t();for(;typeof o=="function";)o=o();n=W(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],c=n&&Array.isArray(n);if(se(o,t,n,i))return Y(()=>n=W(e,o,n,s,!0)),()=>n;if(u.context){if(!o.length)return n;for(let a=0;a<o.length;a++)if(o[a].parentNode)return n=o}if(o.length===0){if(n=O(e,n,s),l)return n}else c?n.length===0?le(e,o,s):Fe(e,n,o):(n&&O(e),le(e,o));n=o}else if(t.nodeType){if(u.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=O(e,n,s,t);O(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function se(e,t,n,s){let i=!1;for(let r=0,l=t.length;r<l;r++){let o=t[r],c=n&&n[r],a;if(!(o==null||o===!0||o===!1))if((a=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))i=se(e,o,c)||i;else if(a==="function")if(s){for(;typeof o=="function";)o=o();i=se(e,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||i}else e.push(o),i=!0;else{const f=String(o);c&&c.nodeType===3&&c.data===f?e.push(c):e.push(document.createTextNode(f))}}return i}function le(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function O(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(i!==o){const c=o.parentNode===e;!r&&!l?c?e.replaceChild(i,o):e.insertBefore(i,n):c&&o.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}function fe(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const i=n[s],r=i.getAttribute("data-hk");(!t||r.startsWith(t))&&!u.registry.has(r)&&u.registry.set(r,i)}}function Re(){const e=u.context;return`${e.id}${e.count++}`}const rt=(...e)=>(Ie(),De(...e));export{Ge as F,Xe as M,We as S,Ke as a,Ye as b,P as c,Oe as d,st as e,Y as f,nt as g,H as h,_e as i,Je as j,tt as k,ze as l,Qe as m,Ve as n,rt as o,u as p,it as r,et as s,Ze as t};
