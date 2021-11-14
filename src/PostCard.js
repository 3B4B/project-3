// dependencies / things imported
import { LitElement, html, css } from 'lit';

// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class PostCard extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'post-card';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    this.label = 'post card';
    this.to = 'to:';
    this.from = 'from:';
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      label: { type: String },
      to: { type: String },
      from: { type: String },
    };
  }

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
        display: block;
        background-image: url('assets/postcard-bg.jpg');
        background-color: #f6f0e8;
        border: 1px solid grey;
        border-radius: 4;
        box-shadow: 3px 3px 3px grey;
        margin: 20px;
        height: calc(var(--width-body) * (2 / 3));
        width: var(--width-body);
        text-align: center;
        display: inline-grid;
        grid-template-rows: 0.5fr 1fr 1fr 1fr 0.25fr;
        grid-template-columns: 1fr 1fr 0.2fr 1fr 1fr;
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
        grid-row: 1 / 3;
        font-family: 'Bebas Neue', sans-serif;
      }
      .image {
        grid-column: 1 / 3;
        grid-row: 2 / 4;
        border-radius: 1px;
      }
      .stamp {
        grid-column: 5;
        grid-row: 1 / 3;
      }
      .tofrom {
        grid-column: 4 / 6;
        grid-row: 3 / 5;
        font-size: 22px;
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
        padding: 10px;
      }

      .tofrom ::slotted(*) {
        border-bottom: 4px solid blue;
        margin-left: 20%;
        margin-right: 20%;
        margin-bottom: 10px;
        border-radius: 1px 3px 1px 2px;
      }

      /* DO NOT DELETE -- using this to test adjustments to TO and FROM underlines */
      /* .underline::slotted(*) {
        display: inline;
        text-align: center;
        border-bottom: 4px solid blue;
        padding: 0px 5%;
      } */

      h2,
      h3 {
        margin: 0px;
      }

      .tofrom h3 {
        text-align: left;
      }
    `;
  }

  /*
  Will need to use Z index for layering 
  */
  render() {
    return html`
      <div class="header"><h2>${this.label}</h2></div>
      <div class="postage"></div>
      <div class="image"></div>
      <div class="stamp"></div>
      <div class="tofrom">
        <h3>${this.to}</h3>
        <slot name="to" class="underline"></slot>
        <h3>${this.from}</h3>
        <slot name="from"></slot>
      </div>
      <div class="message">
        <slot name="message"></slot>
      </div>
      <div class="line"></div>
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
