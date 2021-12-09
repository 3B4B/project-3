import{r as t,p as e}from"./c582d2e4.js";import{S as r}from"./d1b85784.js";class i extends r{constructor(){super(),this.accentColor="grey",this.image=new URL(new URL("8b38ac39.svg",import.meta.url).href,import.meta.url).href,this.alt="Post Mark",this.locations="insert - locations - here"}static get tag(){return"post-card-postmark"}static get properties(){return{...super.properties,image:{type:String},alt:{type:String},locations:{type:String}}}static get styles(){return[...super.styles,t`:host{--img-width:200px;font-family:'Bebas Neue',sans-serif}div{width:var(--img-width);border:1px dashed #000;display:flex;flex-direction:column;justify-content:center;align-items:center;opacity:.8}img{width:var(--img-width);height:calc(var(--img-width) * (1 / 3));filter:invert(62%) sepia(0) saturate(329%) hue-rotate(162deg) brightness(98%) contrast(95%)}p{width:var(--img-width);text-transform:uppercase;text-align:center;color:var(--simple-colors-default-theme-accent-6);margin:0;font-size:16px;letter-spacing:2px;text-align:center;overflow:hidden}`]}render(){return e` <div> <img src="${this.image}" alt="${this.alt}"> <p>${this.locations}</p> </div> `}}customElements.define(i.tag,i);export{i as PostCardPostmark};
