if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const t={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return t;default:return e(r)}}))).then((e=>{const r=n(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-d9ace124"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"3ec2026d.js",revision:"63d917341c281bc9ae56f6c03fff9ebb"},{url:"63c9b46c.js",revision:"a314a4206ef1b704d7b13e2eef105920"},{url:"916667af.js",revision:"6678a3dbeb074f62ee05bd707cd074b5"},{url:"a7cafcbb.js",revision:"cc6f2564ac86d7ed6741ff524d93d53a"},{url:"ae12a36e.js",revision:"08edbb976869c4980b01453088500ade"},{url:"index.html",revision:"41e94857b7751e9afe1e0292da7457eb"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
