import{a as r,d as e,g as a,S as o,j as s,t as n}from"./web.1e73aeaa.js";import{a as c}from"./fetch.093e36cc.js";import{T as d}from"./Table.883ae907.js";const m=n("<div>No data");function h(){const[t]=r(c);return e(s,{get fallback(){return a(m)},get children(){return e(o,{get when(){return t.state==="ready"},get children(){return e(d,{titles:["idTrabajador","Nombres","APaterno","AMaterno"],get data(){return t()}})}})}})}export{h as default};
