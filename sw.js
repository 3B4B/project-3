if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const t={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return t;default:return e(r)}}))).then((e=>{const r=n(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-d9ace124"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"0230f2be.js",revision:"c981f0917693caa13cefbb90a0668543"},{url:"0615126e.js",revision:"ce9918f8758b6356acde16d735b691bf"},{url:"470765e2.js",revision:"8ec7e2e0c6e962cc7d7dd94c43799d28"},{url:"a5bdffa0.js",revision:"368314768ddde21d38137deca96116ea"},{url:"b2f9cf20.js",revision:"672f5317073e9c66bdb7fc44567df3e0"},{url:"index.html",revision:"30fd17e2ef81be1ee2ab0606aa465913"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
