import{r as t,p as e}from"./d98daa73.js";import{S as r}from"./1e60a5fd.js";class i extends r{constructor(){super(),this.accentColor="grey",this.image=new URL(new URL("85b56bf9.jpg",import.meta.url).href,import.meta.url).href,this.alt="Stamp"}static get tag(){return"post-card-stamp"}static get properties(){return{...super.properties,image:{type:String,reflect:!0},alt:{type:String}}}static get styles(){return[...super.styles,t`:host{--img-width:100px}div{display:inline-grid;grid-template-columns:1;grid-template-rows:1;padding-top:10%}img{grid-column:1;grid-row:1;justify-content:center}.stampImage{width:var(--img-width);height:calc(var(--img-width) * 1.25);justify-self:center;padding-top:10px;transform:rotate(1.5deg);z-index:3}.stampBackground{width:calc(var(--img-width) + 20px);height:calc(var(--img-width) * 1.25 + 20px);z-index:2}`]}render(){return e` <div> <img src="../assets/postcard-stamp-bg.png" alt="" class="stampBackground"> <img src="${this.image}" alt="${this.alt}" class="stampImage"> </div> `}}customElements.define(i.tag,i);export{i as PostCardStamp};
