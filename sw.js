if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,c)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const n={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return n;default:return e(r)}}))).then((e=>{const r=c(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-d9ace124"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"38786cc1.js",revision:"e1e259036791fa73c96037ad4bf7f01c"},{url:"42c1dda2.js",revision:"9bfb8d3e4c79c7f498f26d960e259b68"},{url:"697b257d.js",revision:"eec6dc1e7aca51001ebd2278e6fd40b6"},{url:"902a0834.js",revision:"145d643b441fcbf0312272c997c9c96c"},{url:"beb570ec.js",revision:"a03d8e508dbc766a13fc08f2a9d0fe05"},{url:"index.html",revision:"35c057b826b3580f505f799e1da3a043"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
