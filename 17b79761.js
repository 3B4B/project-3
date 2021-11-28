/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),s=new Map;class i{constructor(t,s){if(this._$cssResult$=!0,s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=s.get(this.cssText);return t&&void 0===e&&(s.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const r=(t,...s)=>{const r=1===t.length?t[0]:s.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new i(r,e)},o=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const e of t.cssRules)s+=e.cssText;return(t=>new i("string"==typeof t?t:t+"",e))(s)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var n;const l=window.reactiveElementPolyfillSupport,a={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},h=(t,e)=>e!==t&&(e==e||t==t),d={attribute:!0,type:String,converter:a,reflect:!1,hasChanged:h};class c extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Eh(s,e);void 0!==i&&(this._$Eu.set(i,s),t.push(i))})),t}static createProperty(t,e=d){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||d}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eh(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const s=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{t?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style"),i=window.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=t.cssText,e.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$Eg(t,e,s=d){var i,r;const o=this.constructor._$Eh(t,s);if(void 0!==o&&!0===s.reflect){const n=(null!==(r=null===(i=s.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==r?r:a.toAttribute)(e,s.type);this._$Ei=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Ei=null}}_$AK(t,e){var s,i,r;const o=this.constructor,n=o._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=o.getPropertyOptions(n),l=t.converter,h=null!==(r=null!==(i=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==i?i:"function"==typeof l?l:null)&&void 0!==r?r:a.fromAttribute;this._$Ei=n,this[n]=h(e,t.type),this._$Ei=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var p;c.finalized=!0,c.elementProperties=new Map,c.elementStyles=[],c.shadowRootOptions={mode:"open"},null==l||l({ReactiveElement:c}),(null!==(n=globalThis.reactiveElementVersions)&&void 0!==n?n:globalThis.reactiveElementVersions=[]).push("1.0.1");const u=globalThis.trustedTypes,v=u?u.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,m="?"+$,g=`<${m}>`,f=document,_=(t="")=>f.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,y=Array.isArray,b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,w=/>/g,S=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,x=/'/g,C=/"/g,U=/^(?:script|style|textarea)$/i,P=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),T=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),k=new WeakMap,N=(t,e,s)=>{var i,r;const o=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let n=o._$litPart$;if(void 0===n){const t=null!==(r=null==s?void 0:s.renderBefore)&&void 0!==r?r:null;o._$litPart$=n=new j(e.insertBefore(_(),t),t,void 0,null!=s?s:{})}return n._$AI(t),n},R=f.createTreeWalker(f,129,null,!1),M=(t,e)=>{const s=t.length-1,i=[];let r,o=2===e?"<svg>":"",n=b;for(let e=0;e<s;e++){const s=t[e];let l,a,h=-1,d=0;for(;d<s.length&&(n.lastIndex=d,a=n.exec(s),null!==a);)d=n.lastIndex,n===b?"!--"===a[1]?n=E:void 0!==a[1]?n=w:void 0!==a[2]?(U.test(a[2])&&(r=RegExp("</"+a[2],"g")),n=S):void 0!==a[3]&&(n=S):n===S?">"===a[0]?(n=null!=r?r:b,h=-1):void 0===a[1]?h=-2:(h=n.lastIndex-a[2].length,l=a[1],n=void 0===a[3]?S:'"'===a[3]?C:x):n===C||n===x?n=S:n===E||n===w?n=b:(n=S,r=void 0);const c=n===S&&t[e+1].startsWith("/>")?" ":"";o+=n===b?s+g:h>=0?(i.push(l),s.slice(0,h)+"$lit$"+s.slice(h)+$+c):s+$+(-2===h?(i.push(void 0),e):c)}const l=o+(t[s]||"<?>")+(2===e?"</svg>":"");return[void 0!==v?v.createHTML(l):l,i]};class O{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const n=t.length-1,l=this.parts,[a,h]=M(t,e);if(this.el=O.createElement(a,s),R.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=R.nextNode())&&l.length<n;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const s=h[o++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(s);l.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?I:"?"===e[1]?D:"@"===e[1]?V:B})}else l.push({type:6,index:r})}for(const e of t)i.removeAttribute(e)}if(U.test(i.tagName)){const t=i.textContent.split($),e=t.length-1;if(e>0){i.textContent=u?u.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],_()),R.nextNode(),l.push({type:2,index:++r});i.append(t[e],_())}}}else if(8===i.nodeType)if(i.data===m)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf($,t+1));)l.push({type:7,index:r}),t+=$.length-1}r++}}static createElement(t,e){const s=f.createElement("template");return s.innerHTML=t,s}}function L(t,e,s=t,i){var r,o,n,l;if(e===T)return e;let a=void 0!==i?null===(r=s._$Cl)||void 0===r?void 0:r[i]:s._$Cu;const h=A(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(o=null==a?void 0:a._$AO)||void 0===o||o.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,s,i)),void 0!==i?(null!==(n=(l=s)._$Cl)&&void 0!==n?n:l._$Cl=[])[i]=a:s._$Cu=a),void 0!==a&&(e=L(t,a._$AS(t,e.values),a,i)),e}class z{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:f).importNode(s,!0);R.currentNode=r;let o=R.nextNode(),n=0,l=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new j(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new W(o,this,t)),this.v.push(e),a=i[++l]}n!==(null==a?void 0:a.index)&&(o=R.nextNode(),n++)}return r}m(t){let e=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class j{constructor(t,e,s,i){var r;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),A(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==T&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return y(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==H&&A(this._$AH)?this._$AA.nextSibling.data=t:this.S(f.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=O.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(s);else{const t=new z(r,this),e=t.p(this.options);t.m(s),this.S(e),this._$AH=t}}_$AC(t){let e=k.get(t.strings);return void 0===e&&k.set(t.strings,e=new O(t)),e}M(t){y(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new j(this.A(_()),this.A(_()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class B{constructor(t,e,s,i,r){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(void 0===r)t=L(this,t,e,0),o=!A(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else{const i=t;let n,l;for(t=r[0],n=0;n<r.length-1;n++)l=L(this,i[s+n],e,n),l===T&&(l=this._$AH[n]),o||(o=!A(l)||l!==this._$AH[n]),l===H?t=H:t!==H&&(t+=(null!=l?l:"")+r[n+1]),this._$AH[n]=l}o&&!i&&this.k(t)}k(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class I extends B{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===H?void 0:t}}class D extends B{constructor(){super(...arguments),this.type=4}k(t){t&&t!==H?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class V extends B{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=L(this,t,e,0))&&void 0!==s?s:H)===T)return;const i=this._$AH,r=t===H&&i!==H||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==H&&(i===H||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class W{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}const q=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var J,K;null==q||q(O,j),(null!==(p=globalThis.litHtmlVersions)&&void 0!==p?p:globalThis.litHtmlVersions=[]).push("2.0.1");class Z extends c{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=N(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return T}}Z.finalized=!0,Z._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:Z});const F=globalThis.litElementPolyfillSupport;null==F||F({LitElement:Z}),(null!==(K=globalThis.litElementVersions)&&void 0!==K?K:globalThis.litElementVersions=[]).push("3.0.1");class G extends Z{static get tag(){return"post-card"}constructor(){super(),this.t={label:"Post Card",to:"To",from:"From"},window.dispatchEvent(new CustomEvent("i18n-manager-register-element",{detail:{context:this,namespace:"post-card",localesPath:`${decodeURIComponent(import.meta.url)}/../locales`,updateCallback:"render",locales:["en","es"]}})),setTimeout((()=>{import("./78110b1a.js"),import("./3e053779.js"),import("./98b68e1d.js")}),0)}updated(){}firstUpdated(t){super.firstUpdated&&super.firstUpdated(t)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}static get styles(){return r`:host{--width-body:690px;background-image:url(assets/postcard-bg.jpg);background-color:#f6f0e8;border:1px solid grey;border-radius:4;box-shadow:3px 3px 3px grey;margin:20px;height:calc(var(--width-body) * (2 / 3));width:var(--width-body);text-align:center;display:inline-grid;grid-template-rows:.5fr 1fr 1fr 1fr .25fr;grid-template-columns:1fr 1fr .2fr 1fr 1fr;text-transform:uppercase;font-family:'Patrick Hand',cursive}.header{grid-column:1/span 5;grid-row:1;letter-spacing:4px;font-size:30px;font-weight:400px}.postage{grid-column:4;grid-row:1/auto;font-family:'Bebas Neue',sans-serif;display:flex;justify-content:center;align-items:center}.image{grid-column:1/3;grid-row:2/4;border-radius:1px}.stamp{grid-column:5;grid-row:1/auto}.tofrom{grid-column:4/6;grid-row:2/5;font-size:22px}.tofrom ::slotted(*){margin-left:20%;margin-right:20%;margin-bottom:10px;border-radius:1px 3px 1px 2px}h2,h3{margin:0}.tofrom h3{text-align:left;transform:rotate(-1deg);color:#ca8686}.message{grid-column:1/3;grid-row:4}.line{grid-column:3;grid-row:2/5;background:linear-gradient(#ff4c4c,#ff4c4c) no-repeat center/2px 100%}div{border:2px dotted purple;padding:10px}img{width:calc(var(--width-body) * (17 / 25));display:block;mix-blend-mode:multiply}.backgroundLines{display:block;z-index:1;transform:translate(35%,5%);padding:0;border:none}.foregroundElements{z-index:2;display:inline-grid;position:absolute;width:calc(var(--width-body) - 20px)}`}render(){return P` <div class="backgroundLines"> <img src="assets/postcard-title-with-lines.png" alt=""> </div> <div class="foregroundElements"> <div class="postage"> <post-card-postmark></post-card-postmark> </div> <div class="image"> <post-card-photo></post-card-photo> </div> <div class="stamp"> <post-card-stamp></post-card-stamp> </div> <div class="tofrom"> <h3>${this.t.to}</h3> <slot name="to"></slot> <h3>${this.t.from}</h3> <slot name="from"></slot> </div> <div class="message"> <slot name="message"></slot> </div> </div> `}static get haxProperties(){return new URL("../lib/post-card.haxProperties.json",import.meta.url).href}}customElements.define(G.tag,G);export{T as b,c as n,P as p,r,N as w};
