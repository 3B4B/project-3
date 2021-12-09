/**
 * Copyright 2021 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
window.I18NManagerStore=window.I18NManagerStore||{},window.I18NManagerStore.requestAvailability=()=>(window.I18NManagerStore.instance||(window.I18NManagerStore.instance=document.createElement("i18n-manager"),document.body.appendChild(window.I18NManagerStore.instance)),window.I18NManagerStore.instance),window.I18NManagerStore.requestAvailability();class t extends HTMLElement{constructor(){super(),this.fetchTargets={},this.elements=[],this.locales=new Set([]),this.lang=this.documentLang,this.dir=this.documentDir}get documentLang(){return document.body.getAttribute("xml:lang")||document.body.getAttribute("lang")||document.documentElement.getAttribute("xml:lang")||document.documentElement.getAttribute("lang")||navigator.language||"en"}get documentDir(){return document.body.getAttribute("xml:dir")||document.body.getAttribute("dir")||document.documentElement.getAttribute("xml:dir")||document.documentElement.getAttribute("dir")||"ltr"}connectedCallback(){this.__ready=!0,window.addEventListener("i18n-manager-register-element",this.registerLocalizationEvent.bind(this)),window.addEventListener("languagechange",this.changeLanguageEvent.bind(this))}disconnectedCallback(){window.removeEventListener("i18n-manager-register-element",this.registerLocalizationEvent.bind(this)),window.removeEventListener("languagechange",this.changeLanguageEvent.bind(this))}changeLanguageEvent(t){this.lang=t.detail}registerLocalizationEvent(t){let e=this.detailNormalize(t.detail);e.namespace&&e.localesPath&&e.locales&&this.registerLocalization(e)}detailNormalize(t){if(!t.namespace&&t.context&&(t.namespace=t.context.tagName.toLowerCase()),!t.updateCallback&&t.context&&(t.context.requestUpdate?t.updateCallback="requestUpdate":t.context.render&&(t.updateCallback="render")),!t.localesPath&&t.basePath&&(t.localesPath=`${decodeURIComponent(t.basePath)}/../locales`),t.context&&t.namespace){t.context.t&&(t.context._t={...t.context.t});let e=this.elements.filter((e=>{if(e.namespace==t.namespace&&e.localesPath&&e.locales)return!0}));e&&e.length&&e[0]&&(t.localesPath=e[0].localesPath,t.locales=e[0].locales)}return t}registerLocalization(t){(!t.context&&0===this.elements.filter((e=>e.namespace===t.namespace)).length||0===this.elements.filter((e=>e.context===t.context)).length)&&(t=this.detailNormalize(t),this.elements.push(t),t.locales.forEach(this.locales.add,this.locales),this.lang&&this.__ready&&t.locales.includes(this.lang)&&(clearTimeout(this._debounce),this._debounce=setTimeout((()=>{this.updateLanguage(this.lang)}),0)))}static get tag(){return"i18n-manager"}async loadNamespaceFile(t,e=this.lang){const i=e.split("-");let s=this.elements.filter((s=>s.namespace===t&&(s.locales.includes(e)||s.locales.includes(i[0]))));if(s&&1===s.length){const t=s[0];var n="";return t.locales.includes(e)?n=`${t.localesPath}/${t.namespace}.${e}.json`:t.locales.includes(i[0])&&(n=`${t.localesPath}/${t.namespace}.${i[0]}.json`),""==n?{}:(this.fetchTargets[n]||(this.fetchTargets[n]=await fetch(n).then((t=>!(!t||!t.json)&&t.json()))),this.fetchTargets[n])}}async updateLanguage(t){if(t){const n=t.split("-"),o=this.elements.filter((e=>e.locales.includes(t)||e.locales.includes(n[0]))),r=this.elements.filter((e=>!e.locales.includes(t)&&!e.locales.includes(n[0])));if(0!==r.length)for(var e in r){let t=r[e];t.context&&(t.context.t={...t.context._t},t.updateCallback&&t.context[t.updateCallback]())}for(var e in o){let r=o[e];var i="";if(r.locales.includes(t)?i=`${r.localesPath}/${r.namespace}.${t}.json`:r.locales.includes(n[0])&&(i=`${r.localesPath}/${r.namespace}.${n[0]}.json`),this.fetchTargets[i]){if(r.context){let t=this.fetchTargets[i];for(var s in t)r.context.t[s]=t[s];r.context.t={...r.context.t},r.updateCallback&&r.context[r.updateCallback]()}}else if(this.fetchTargets[i]=await fetch(i).then((t=>!(!t||!t.json)&&t.json())),r.context){for(var s in this.fetchTargets[i])r.context.t[s]=this.fetchTargets[i][s];r.context.t={...r.context.t},r.updateCallback&&r.context&&r.context[r.updateCallback]()}}}}static get observedAttributes(){return["lang","dir"]}attributeChangedCallback(t,e,i){"lang"!=t&&"dir"!=t||this.dispatchEvent(new CustomEvent(`${t}-changed`,{detail:{value:i}})),"lang"==t&&i&&this.__ready&&this.updateLanguage(i)}get lang(){return this.getAttribute("lang")}set lang(t){t?this.setAttribute("lang",t):this.removeAttribute("lang")}get dir(){return this.getAttribute("dir")}set dir(t){t?this.setAttribute("dir",t):this.removeAttribute("dir")}}customElements.define(t.tag,t);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new Map;class n{constructor(t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=s.get(this.cssText);return e&&void 0===t&&(s.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(s,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const l=window.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},h=(t,e)=>e!==t&&(e==e||t==t),c={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:h};class u extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=c){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||c}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$Eg(t,e,i=c){var s,n;const o=this.constructor._$Eh(t,i);if(void 0!==o&&!0===i.reflect){const r=(null!==(n=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:d.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Ei=null}}_$AK(t,e){var i,s,n;const o=this.constructor,r=o._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=o.getPropertyOptions(r),a=t.converter,l=null!==(n=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==n?n:d.fromAttribute;this._$Ei=r,this[r]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var p;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==l||l({ReactiveElement:u}),(null!==(a=globalThis.reactiveElementVersions)&&void 0!==a?a:globalThis.reactiveElementVersions=[]).push("1.0.1");const g=globalThis.trustedTypes,m=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,f="?"+v,$=`<${f}>`,_=document,b=(t="")=>_.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,y=Array.isArray,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,w=/-->/g,E=/>/g,S=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,C=/'/g,P=/"/g,T=/^(?:script|style|textarea)$/i,U=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),N=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),L=new WeakMap,M=(t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new I(e.insertBefore(b(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r},H=_.createTreeWalker(_,129,null,!1),z=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=x;for(let e=0;e<i;e++){const i=t[e];let a,l,d=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)h=r.lastIndex,r===x?"!--"===l[1]?r=w:void 0!==l[1]?r=E:void 0!==l[2]?(T.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=S):void 0!==l[3]&&(r=S):r===S?">"===l[0]?(r=null!=n?n:x,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?S:'"'===l[3]?P:C):r===P||r===C?r=S:r===w||r===E?r=x:(r=S,n=void 0);const c=r===S&&t[e+1].startsWith("/>")?" ":"";o+=r===x?i+$:d>=0?(s.push(a),i.slice(0,d)+"$lit$"+i.slice(d)+v+c):i+v+(-2===d?(s.push(void 0),e):c)}const a=o+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==m?m.createHTML(a):a,s]};class R{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,d]=z(t,e);if(this.el=R.createElement(l,i),H.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=H.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(v)){const i=d[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(v),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?D:"?"===e[1]?q:"@"===e[1]?V:B})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(T.test(s.tagName)){const t=s.textContent.split(v),e=t.length-1;if(e>0){s.textContent=g?g.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],b()),H.nextNode(),a.push({type:2,index:++n});s.append(t[e],b())}}}else if(8===s.nodeType)if(s.data===f)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(v,t+1));)a.push({type:7,index:n}),t+=v.length-1}n++}}static createElement(t,e){const i=_.createElement("template");return i.innerHTML=t,i}}function O(t,e,i=t,s){var n,o,r,a;if(e===N)return e;let l=void 0!==s?null===(n=i._$Cl)||void 0===n?void 0:n[s]:i._$Cu;const d=A(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Cl)&&void 0!==r?r:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(e=O(t,l._$AS(t,e.values),l,s)),e}class j{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:_).importNode(i,!0);H.currentNode=n;let o=H.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new I(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new W(o,this,t)),this.v.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(o=H.nextNode(),r++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class I{constructor(t,e,i,s){var n;this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),A(t)?t===k||null==t||""===t?(this._$AH!==k&&this._$AR(),this._$AH=k):t!==this._$AH&&t!==N&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return y(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==k&&A(this._$AH)?this._$AA.nextSibling.data=t:this.S(_.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=R.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new j(n,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new R(t)),e}M(t){y(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new I(this.A(b()),this.A(b()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class B{constructor(t,e,i,s,n){this.type=1,this._$AH=k,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=k}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=O(this,t,e,0),o=!A(t)||t!==this._$AH&&t!==N,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=O(this,s[i+r],e,r),a===N&&(a=this._$AH[r]),o||(o=!A(a)||a!==this._$AH[r]),a===k?t=k:t!==k&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.k(t)}k(t){t===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class D extends B{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===k?void 0:t}}class q extends B{constructor(){super(...arguments),this.type=4}k(t){t&&t!==k?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class V extends B{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=O(this,t,e,0))&&void 0!==i?i:k)===N)return;const s=this._$AH,n=t===k&&s!==k||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==k&&(s===k||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class W{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const F=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var J,K;null==F||F(R,I),(null!==(p=globalThis.litHtmlVersions)&&void 0!==p?p:globalThis.litHtmlVersions=[]).push("2.0.1");class Z extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=M(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return N}}Z.finalized=!0,Z._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:Z});const G=globalThis.litElementPolyfillSupport;null==G||G({LitElement:Z}),(null!==(K=globalThis.litElementVersions)&&void 0!==K?K:globalThis.litElementVersions=[]).push("3.0.1");class Q extends Z{static get tag(){return"post-card"}constructor(){super(),this.t={label:"Post Card",send:"To",receive:"From"},this.photoSrc="../assets/postcard-photo-stock.jpg",this.stampSrc="../assets/postcard-stamp-stock.jpg",this.postMarkLocations="insert - locations - here",window.dispatchEvent(new CustomEvent("i18n-manager-register-element",{detail:{context:this,namespace:"post-card",localesPath:new URL("../locales",import.meta.url).href,updateCallback:"render",locales:["es","de","fr","it","ja","zh_CN"]}})),setTimeout((()=>{import("./38786cc1.js"),import("./beb570ec.js"),import("./902a0834.js")}),0)}static get properties(){return{t:{type:Object},to:{type:String,reflect:!0},from:{type:String,reflect:!0},message:{type:String,reflect:!0},photoSrc:{type:String,reflect:!0},stampSrc:{type:String,reflect:!0},postMarkLocations:{type:String,reflect:!0,attribute:"post-mark-locations"}}}static get styles(){return o`:host{--width-body:690px;height:calc(var(--width-body) * (2 / 3));width:var(--width-body);margin:20px;display:inline-grid;grid-template-rows:1fr 1fr 1fr 1fr;grid-template-columns:1fr 1fr 1fr 1fr 1fr;transition:all .35s ease-in-out}.entireCard{height:calc(var(--width-body) * (2 / 3));width:var(--width-body);background-image:url(assets/postcard-bg.jpg);background-color:#f6f0e8;border:1px solid #d3d3d3;box-shadow:grey 3px 3px 3px;text-align:center;display:inline-grid;grid-template-rows:1fr 2fr 1fr;grid-template-columns:1fr 1fr 1fr 1fr;text-transform:uppercase;font-family:'Patrick Hand',cursive}.backgroundLines{display:block;z-index:1;padding:0;border:none;width:var(--width-body);height:calc(var(--width-body) * (2 / 3));padding:0;border:none}.label{letter-spacing:16px;font-size:50px;font-weight:400;color:#ca8686;text-align:center;z-index:2}.backgroundLines img{width:calc(var(--width-body) * (17 / 25));mix-blend-mode:multiply;transform:translate(14%,-10%)}.foregroundElements{z-index:2;display:inline-grid;position:absolute;width:var(--width-body);height:calc(var(--width-body) * (2 / 3))}.postage{grid-column:4/5;grid-row:1/2;font-family:'Bebas Neue',sans-serif;display:flex;justify-content:center;align-items:center;z-index:4;padding-bottom:12px}.image{grid-column:1/3;grid-row:1/4;border-radius:1px;padding-top:70px}.stamp{grid-column:5/6;grid-row:1/2;padding-right:5px;z-index:2}.tofrom{grid-column:4/6;grid-row:2/5;font-size:22px}.tofrom ::slotted(*){margin-left:20%;margin-right:20%;margin-bottom:10px;border-radius:1px 3px 1px 2px}.to{padding-bottom:118px}h2,h3{margin:0}.tofrom h3{text-align:left;transform:rotate(-1deg);color:#ca8686;padding-left:20px}.message{grid-column:1/3;grid-row:3/5;padding-right:30px;align-items:center;padding-bottom:20px;padding-top:150px;font-size:2vw}@media (max-width:370px){:host{transform:scale(.25);transition:all .35s ease-in-out}}@media (min-width:371px) and (max-width:480px){:host{transform:scale(.5);transition:all .35s ease-in-out}}@media (min-width:481px) and (max-width:600px){:host{transform:scale(.6);transition:all .35s ease-in-out}}@media (min-width:601px) and (max-width:720px){:host{transform:scale(.8);transition:all .35s ease-in-out}}@media (min-width:721px){:host{transform:scale(1);transition:all .35s ease-in-out}}`}render(){return U` <div class="entireCard" tabindex="0"> <div class="backgroundLines"> <h2 class="label">${this.t.label}</h2> <img alt="" src="assets/postcard-lines.png"> </div> <div class="foregroundElements"> <div class="postage"> <post-card-postmark locations="${this.postMarkLocations}"></post-card-postmark> </div> <div class="image"> <post-card-photo image="${this.photoSrc}"></post-card-photo> </div> <div class="stamp"> <post-card-stamp image="${this.stampSrc}"></post-card-stamp> </div> <div class="tofrom"> <div class="to"> <h3>${this.t.send}</h3> <slot name="to">${this.to}</slot> </div> <div class="from"> <h3>${this.t.receive}</h3> <slot name="from">${this.from}</slot> </div> </div> <div class="message"> <slot name="message">${this.message}</slot> </div> </div> </div> `}static get haxProperties(){return new URL("../lib/post-card.haxProperties.json",import.meta.url).href}}customElements.define(Q.tag,Q);export{N as b,u as n,U as p,o as r,M as w};
