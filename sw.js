if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,c)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const n={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return n;default:return e(r)}}))).then((e=>{const r=c(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-d9ace124"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"6570134b.js",revision:"dfca4b40f86d406b9fb10acce471833e"},{url:"b082e8ad.js",revision:"57d6ec5f0c6b941fd7bb832f8e09e36f"},{url:"d24e6390.js",revision:"65901e2e4cc749e1796fdffef8e67fd3"},{url:"e47b6712.js",revision:"f0c12704b5827b26ce865148c3997bd9"},{url:"f8ab6cf3.js",revision:"e65ea1d5119417f185fc04055784fc47"},{url:"index.html",revision:"68a9160665cba3c0f17b5eae5d800b44"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
