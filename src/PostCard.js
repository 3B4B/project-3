// dependencies / things imported
import { LitElement, html, css } from 'lit';

// TODO: Import to be deleted or used based on whether dispatchEvent works
// import { I18NMixin } from "@lrnwebcomponents/i18n-manager/lib/I18NMixin.js";

// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
//
export class PostCard extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'post-card';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    // this.label = 'post card';
    // this.to = 'to:';
    // this.from = 'from:';

    this.t = {
      label: 'Post Card',
      to: 'To',
      from: 'From',
    };

    // TODO: Code snippet to be deleted or used based on whether dispatchEvent works
    // this.registerTranslation({
    //   context: this,
    //   basePath: import.meta.url,
    //   locales: ["es"],
    // });

    window.dispatchEvent(
      new CustomEvent('i18n-manager-register-element', {
        detail: {
          context: this,
          namespace: 'post-card',
          localesPath: `${decodeURIComponent(import.meta.url)}/../locales`,
          updateCallback: 'render',
          locales: ['en', 'es'],
        },
      })
    );

    setTimeout(() => {
      import('./PostCardPhoto.js');
      import('./PostCardStamp.js');
      import('./PostCardPostmark.js');
    }, 0);
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle

  // **Not necessary in I18N because everything is established in constructor
  // static get properties() {
  //   return {
  //     label: { type: String },
  //     to: { type: String },
  //     from: { type: String },
  //   };
  // }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated() {}

  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }

  // HTMLElement life-cycle, element has been connected to the page / added or moved
  // this fires EVERY time the element is moved
  connectedCallback() {
    super.connectedCallback();
  }

  // HTMLElement life-cycle, element has been removed from the page OR moved
  // this fires every time the element moves
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  // CSS - specific to Lit
  static get styles() {
    return css`
      :host {
        --width-body: 690px;
        background-image: url('assets/postcard-bg.jpg');
        background-color: #f6f0e8;
        border: 1px solid lightgrey;
        border-radius: 4;
        box-shadow: 3px 3px 3px grey;
        margin: 20px;
        height: calc(var(--width-body) * (2 / 3));
        width: var(--width-body);
        text-align: center;
        display: inline-grid;
        grid-template-rows: 1fr 2fr 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        text-transform: uppercase;

        font-family: 'Patrick Hand', cursive;
      }

      .header {
        grid-column: 1 / span 5;
        grid-row: 1;
        letter-spacing: 4px;
        font-size: 30px;
        font-weight: 400px;
      }
      .postage {
        grid-column: 4;
        grid-row: 1 / auto;
        font-family: 'Bebas Neue', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .image {
        grid-column: 1 / 3;
        grid-row: 2 / 4;
        border-radius: 1px;
      }
      .stamp {
        grid-column: 5;
        grid-row: 1 / auto;
      }
      .tofrom {
        grid-column: 4 / 6;
        grid-row: 2 / 5;
        font-size: 22px;
      }

      .tofrom ::slotted(*) {
        margin-left: 20%;
        margin-right: 20%;
        margin-bottom: 10px;
        border-radius: 1px 3px 1px 2px;
      }

      h2,
      h3 {
        margin: 0px;
      }

      .tofrom h3 {
        text-align: left;
        transform: rotate(-1deg);
        color: #ca8686;
      }

      .message {
        grid-column: 1 / 3;
        grid-row: 4;
      }

      .line {
        grid-column: 3;
        grid-row: 2 / 5;
        background: linear-gradient(#ff4c4c, #ff4c4c) no-repeat center/2px 100%;
      }

      div {
        border: 2px dotted purple;
      }

      img {
        width: calc(var(--width-body) * (17 / 25));
        display: block;
        mix-blend-mode: multiply;
      }

      .backgroundLines {
        display: block;
        z-index: 1;
        transform: translate(35%, 5%);

        /*Below selectors are only used to circumvent dotted lines, remove later */
        padding: 0px;
        border: none;
      }

      .foregroundElements {
        z-index: 2;
        display: inline-grid;
        position: absolute;
        width: var(--width-body);
        height: calc(var(--width-body) * (2 / 3));
      }
    `;
  }

  /*
  Will need to use Z index for layering 
  */
  render() {
    // Couldn't be commented due to linter error, if needed place as 1st el in foreground div: <div class="header"><h2>${this.label}</h2></div>
    return html`
      <div class="backgroundLines">
        <img src="assets/postcard-title-with-lines.png" alt="" />
      </div>

      <div class="foregroundElements">
        <div class="postage">
          <post-card-postmark></post-card-postmark>
        </div>
        <div class="image">
          <post-card-photo></post-card-photo>
        </div>
        <div class="stamp">
          <post-card-stamp></post-card-stamp>
        </div>
        <div class="tofrom">
          <h3>${this.t.to}</h3>
          <slot name="to"></slot>
          <h3>${this.t.from}</h3>
          <slot name="from"></slot>
        </div>
        <div class="message">
          <slot name="message"></slot>
        </div>
        <!-- <div class="line"></div> -->
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
