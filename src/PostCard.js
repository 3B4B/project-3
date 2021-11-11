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
    this.label = 'P O S T    C A R D';
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      label: { type: String, reflect: true },
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
        display: block;
        background-color: #f6f0e8;
        border: 1px solid grey;
        border-radius: 4;
        box-shadow: 3px 3px 3px grey;
        margin: 20px;
        height: 300px;
        width: 700px;
        text-align: center;
        display: inline-grid;
        grid-template-rows: 0.5fr 1fr 1fr 1fr 0.25fr;
        grid-template-columns: 1fr 1fr 0.2fr 1fr 1fr;
      }
      .header {
        grid-column: 1 / span 5;
        grid-row: 1;
      }
      .postage {
        grid-column: 4;
        grid-row: 1 / 3;
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
        grid-column: 4 /6;
        grid-row: 3 / 5;
      }

      .message {
        grid-column: 1 / 3;
        grid-row: 4;
      }
      .line {
        grid-column: 3;
        grid-row: 2 / 5;
        background: linear-gradient(#000, #000) no-repeat center/2px 100%;
      }

      div {
        border: 2px dotted purple;
        padding: 10px;
      }
    `;
  }

  /*
  Will need to use Z index for layering 
  */
  render() {
    return html`
        <div class="header">
            ${this.label}
        </div>
        <div class="postage">
 
        </div>
        <div class="image">
     
        </div>
        <div class="stamp">
    
        </div>
        <div class="tofrom">
          TO: <br>
          <slot name="to"></slot>
          FROM: <br>
          <slot name="from"></slot>
        </div>
        <div class="message">
          <slot name="message"></slot>
        </div>
        <div class="line"></div>
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
