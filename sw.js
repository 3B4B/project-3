if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const t={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return t;default:return e(r)}}))).then((e=>{const r=n(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-d9ace124"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"14ed46a3.js",revision:"980911efabbb95156dae4fb132a1d2b6"},{url:"1d11d0ad.js",revision:"30710b86225396d0c4110cd4023b7b72"},{url:"65590c1f.js",revision:"ee0115b939bfcf9ea1a7b5915b3f7ccf"},{url:"cf7af23f.js",revision:"68e98f245cbe1569ef8460ce2b98d503"},{url:"e4bbcd5f.js",revision:"b484211229dbf8f7f4988ec7920db635"},{url:"index.html",revision:"ae7167771fb51dde26d124286d2aa576"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
