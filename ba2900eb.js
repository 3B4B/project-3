import{r as t,p as e}from"./83946094.js";import{S as r}from"./7a71693d.js";class a extends r{constructor(){super(),this.accentColor="grey",this.image=new URL(new URL("b79cc16e.jpg",import.meta.url).href,import.meta.url).href,this.alt=""}static get tag(){return"post-card-photo"}static get properties(){return{...super.properties,image:{type:String,reflect:!0},alt:{type:String,reflect:!0}}}static get styles(){return[...super.styles,t`:host{--img-width:310px}div{display:inline-grid;grid-template-columns:1;grid-template-rows:1;align-items:center}img{grid-column:1;grid-row:1;justify-self:center}.cardShadow{width:calc(var(--img-width) * 1.05);height:calc(var(--img-width) * .78);z-index:2;opacity:.5;transform:translate(1%,1.5%) rotate(.5deg)}.cardImage{width:var(--img-width);height:calc(var(--img-width) * .7);z-index:2;transform:rotate(-3deg)}.cardTape{width:auto;height:calc(var(--img-width) * .8);z-index:3}`]}render(){return e` <div> <img src="../assets/postcard-photo-shadow.png" alt="" class="cardShadow"> <img src="${this.image}" alt="${this.alt}" class="cardImage"> <img src="../assets/postcard-tape.png" alt="" class="cardTape"> </div> `}}customElements.define(a.tag,a);export{a as PostCardPhoto};
