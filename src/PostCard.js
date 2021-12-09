// dependencies / things imported
import { LitElement, html, css } from 'lit';
// CREATIVE COMMONS CREDIT: All graphics and visuals gathered from: https://remixer.visualthinkery.com/a/OEG-postcard

export class PostCard extends LitElement {
  static get tag() {
    return 'post-card';
  }

  constructor() {
    super();
    this.t = {
      label: 'Post Card',
      send: 'To',
      receive: 'From',
    };
    this.photoSrc = '../assets/postcard-photo-stock.jpg';
    this.stampSrc = '../assets/postcard-stamp-stock.jpg';
    this.postMarkLocations = 'insert - locations - here';

    window.dispatchEvent(
      new CustomEvent('i18n-manager-register-element', {
        detail: {
          context: this,
          namespace: 'post-card',
          localesPath: new URL('../locales', import.meta.url).href,
          updateCallback: 'render',
          locales: ['es', 'de', 'fr', 'it', 'ja', 'zh_CN'],
        },
      })
    );

    setTimeout(() => {
      import('./PostCardPhoto.js');
      import('./PostCardStamp.js');
      import('./PostCardPostmark.js');
    }, 0);
  }

  static get properties() {
    return {
      t: {
        type: Object,
      },
      to: { type: String, reflect: true },
      from: { type: String, reflect: true },
      message: { type: String, reflect: true },
      photoSrc: { type: String, reflect: true },
      stampSrc: { type: String, reflect: true },
      postMarkLocations: {
        type: String,
        reflect: true,
        attribute: 'post-mark-locations',
      },
    };
  }

  // CSS
  static get styles() {
    return css`
      :host {
        --width-body: 690px;
        height: calc(var(--width-body) * (2 / 3));
        width: var(--width-body);
        margin: 20px;
        display: inline-grid;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        transition: all 0.35s ease-in-out;
      }

      .entireCard {
        height: calc(var(--width-body) * (2 / 3));
        width: var(--width-body);
        background-image: url(assets/postcard-bg.jpg);
        background-color: rgb(246, 240, 232);
        border: 1px solid lightgrey;
        box-shadow: grey 3px 3px 3px;
        text-align: center;
        display: inline-grid;
        grid-template-rows: 1fr 2fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        text-transform: uppercase;
        font-family: 'Patrick Hand', cursive;
      }

      /* Used for scaffolding, remove later 
      div {
        border: 2px dotted purple;
      }
      */

      .backgroundLines {
        display: block;
        z-index: 1;
        padding: 0px;
        border: none;
        width: var(--width-body);
        height: calc(var(--width-body) * (2 / 3));

        /*Below selectors are only used to circumvent dotted lines, remove later */
        padding: 0px;
        border: none;
      }

      .label {
        letter-spacing: 16px;
        font-size: 50px;
        font-weight: 400;
        color: rgb(202, 134, 134);
        text-align: center;
        z-index: 2;
      }

      .backgroundLines img {
        width: calc(var(--width-body) * (17 / 25));
        mix-blend-mode: multiply;
        transform: translate(14%, -10%);
      }

      .foregroundElements {
        z-index: 2;
        display: inline-grid;
        position: absolute;
        width: var(--width-body);
        height: calc(var(--width-body) * (2 / 3));
      }

      /* Inlcudes both the post mark and the stamp */
      .postage {
        grid-column: 4 / 5;
        grid-row: 1 / 2;
        font-family: 'Bebas Neue', sans-serif;
        display: grid;
        display: inline-grid;
        grid-template-columns: 330px 1fr;
        grid-template-rows: 150px 1fr;

        /* border: 5px dotted green; */
      }

      .stamp {
        z-index: 3;
        grid-area: 1 / 1 / 1 / 1;
        margin-left: 195px;
        margin-bottom: 20px;
        padding-top: 20px;
      }

      .postmark {
        z-index: 5;
        grid-area: 1 / 1 / 1 / 1;
        padding-top: 35px;

        /* border: 5px dotted purple;  */
      }

      .image {
        grid-column: 1 / 3;
        grid-row: 1 / 4;
        border-radius: 1px;
        padding-top: 80px;
      }
      .tofrom {
        grid-column: 4 / 6;
        grid-row: 2 / 5;
        font-size: 22px;
      }

      .tofrom ::slotted(*) {
        margin-left: 20%;
        margin-right: 20%;
        margin-bottom: 1px;
        border-radius: 1px 3px 1px 2px;
        opacity: 0.8;
      }

      .to {
        padding-bottom: 120px;
      }

      .to ::slotted(*) {
        font-size: 40px;
        font-weight: bolder;
        letter-spacing: 2px;
        line-height: 1.25;
      }

      .from {
      }

      h2,
      h3 {
        margin: 0px;
      }

      .tofrom h3 {
        text-align: left;
        transform: rotate(-1deg);
        color: #ca8686;
        padding-left: 20px;
      }

      .message {
        grid-column: 1 / 3;
        grid-row: 3 / 5;
        padding-right: 30px;
        align-items: center;
        padding-bottom: 20px;
        padding-top: 150px;
        font-size: 18px;
      }

      /* @media screen and (min-width: 300px) and (max-width: 650px) {
        :host {
          transform: scale(.3);
          transition: all 0.35s ease-in-out;
        }
      }
      @media screen and (min-width: 650px) and (max-width: 1000px) {
        :host {
          transform: scale(.8);
          transition: all 0.35s ease-in-out;
        }
      } */

      /* Query sizes sourced from: https://www.geeksforgeeks.org/how-to-target-desktop-tablet-and-mobile-using-media-query/ */
      @media (max-width: 370px) {
        :host {
          transform: scale(0.25);
          transition: all 0.35s ease-in-out;
        }
      }

      @media (min-width: 371px) and (max-width: 480px) {
        :host {
          transform: scale(0.5);
          transition: all 0.35s ease-in-out;
        }
      }

      @media (min-width: 481px) and (max-width: 600px) {
        :host {
          transform: scale(0.6);
          transition: all 0.35s ease-in-out;
        }
      }

      @media (min-width: 601px) and (max-width: 720px) {
        :host {
          transform: scale(0.8);
          transition: all 0.35s ease-in-out;
        }
      }

      @media (min-width: 721px) {
        :host {
          transform: scale(1);
          transition: all 0.35s ease-in-out;
        }
      }
    `;
  }

  /*
  Will need to use Z index for layering 
  */
  render() {
    // console.log(navigator.language); // Leave this in for now, using to test something with I18N

    return html`
      <div class="entireCard" tabindex="0">
        <div class="backgroundLines">
          <h2 class="label">${this.t.label}</h2>
          <img alt="" src="assets/postcard-lines.png" />
        </div>
        <div class="foregroundElements">
          <div class="postage">
            <post-card-postmark
              class="postmark"
              locations="${this.postMarkLocations}"
            ></post-card-postmark>
            <post-card-stamp
              class="stamp"
              image="${this.stampSrc}"
            ></post-card-stamp>
          </div>
          <div class="image">
            <post-card-photo image="${this.photoSrc}"></post-card-photo>
          </div>
          <div class="tofrom">
            <div class="to">
              <h3>${this.t.send}</h3>
              <slot name="to">${this.to}</slot>
            </div>
            <div class="from">
              <h3>${this.t.receive}</h3>
              <slot name="from">${this.from}</slot>
            </div>
          </div>
          <div class="message">
            <slot name="message">${this.message}</slot>
          </div>
        </div>
      </div>
    `;
  }

  // HAX specific callback
  // This teaches HAX how to edit and work with your web component
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`../lib/post-card.haxProperties.json`, import.meta.url).href;
  }
}
