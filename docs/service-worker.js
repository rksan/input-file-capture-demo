if(!self.define){let s,e={};const r=(r,n)=>(r=new URL(r+".js",n).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(n,o)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let l={};const u=s=>r(s,i),c={module:{uri:i},exports:l,require:u};e[i]=Promise.all(n.map((s=>c[s]||u(s)))).then((s=>(o(...s),l)))}}define(["./workbox-5b385ed2"],(function(s){"use strict";s.setCacheNameDetails({prefix:"video-capture-demo"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"css/app.a53354b1.css",revision:null},{url:"css/camera.19ec9218.css",revision:null},{url:"css/chunk-vendors.092f9b11.css",revision:null},{url:"css/form.e32d2575.css",revision:null},{url:"fonts/bootstrap-icons.02685dab.woff2",revision:null},{url:"fonts/bootstrap-icons.8463cb1e.woff",revision:null},{url:"index.html",revision:"c23adbb9fbad79033b27452853d4de70"},{url:"js/688.56fc647c.js",revision:null},{url:"js/about.2e07b2e1.js",revision:null},{url:"js/app.0d2f7167.js",revision:null},{url:"js/chunk-vendors.2935fd58.js",revision:null},{url:"js/form.faca9f8a.js",revision:null},{url:"manifest.json",revision:"982882c5d9a7ed09f1956d082ebdab13"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
