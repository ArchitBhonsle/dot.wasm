(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const v="modulepreload",g=function(s){return"/dot.wasm/"+s},f={},L=function(r,n,l){if(!n||n.length===0)return r();const t=document.getElementsByTagName("link");return Promise.all(n.map(e=>{if(e=g(e),e in f)return;f[e]=!0;const o=e.endsWith(".css"),y=o?'[rel="stylesheet"]':"";if(!!l)for(let c=t.length-1;c>=0;c--){const a=t[c];if(a.href===e&&(!o||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${y}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":v,o||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),o)return new Promise((c,a)=>{i.addEventListener("load",c),i.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>r())};const{init:E,dot:S}=await L(()=>import("./index-f478e1f0.js"),[]);await E();const m=document.querySelector("#vec-a"),p=document.querySelector("#vec-b"),u=document.querySelector("#output");m.addEventListener("input",h);p.addEventListener("input",h);function d(s){return s.split(",").map(r=>r.trim()).map(r=>parseFloat(r)).filter(r=>!isNaN(r))}function h(){const s=d(m.value),r=d(p.value);try{const n=S(s,r);u.classList.remove("error"),u.innerText=`Result: ${n}`}catch(n){n instanceof Error&&(u.classList.add("error"),u.innerText=`Error: ${n.message}`,console.error(n))}}