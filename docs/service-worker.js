if(!self.define){let s,e={};const r=(r,n)=>(r=new URL(r+".js",n).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(n,o)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let l={};const u=s=>r(s,i),t={module:{uri:i},exports:l,require:u};e[i]=Promise.all(n.map((s=>t[s]||u(s)))).then((s=>(o(...s),l)))}}define(["./workbox-5b385ed2"],(function(s){"use strict";s.setCacheNameDetails({prefix:"input-file-capture-demo"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"css/app.a53354b1.css",revision:null},{url:"css/camera.6a738b9f.css",revision:null},{url:"css/chunk-vendors.092f9b11.css",revision:null},{url:"css/form.6a738b9f.css",revision:null},{url:"fonts/bootstrap-icons.02685dab.woff2",revision:null},{url:"fonts/bootstrap-icons.8463cb1e.woff",revision:null},{url:"index.html",revision:"070f1426802f47dfd0e53f032f811942"},{url:"js/225.f993fe90.js",revision:null},{url:"js/about.8bbd69d6.js",revision:null},{url:"js/app.e718e4d6.js",revision:null},{url:"js/chunk-vendors.db79852b.js",revision:null},{url:"js/form.559d1d3d.js",revision:null},{url:"manifest.json",revision:"5ab6675d9ea307efb6ee2f3f0a7195a6"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
