var u=Object.defineProperty;var p=(t,e,r)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var n=(t,e,r)=>(p(t,typeof e!="symbol"?e+"":e,r),r);import{k as l,r as c}from"./index.5dec1e70.js";import{api as y}from"./axios.ce13ef04.js";class f{constructor(){n(this,"httpClient");this.httpClient=y}}const m="/currencies";class d extends f{async getItems(){return(await this.httpClient.get(m)).data}}const v=new d,T=l("currency-types",()=>{const t=c([]),e=c(!1);async function r(){if(!e.value)try{const s=await v.getItems();t.value=Object.entries(s).map(([i,o])=>({id:i,name:o})),e.value=!0}catch(s){console.error(s)}}function a(){t.value=[],e.value=!1}return{items:t,itemsLoaded:e,initState:r,dispose:a}});export{f as H,T as u};
