/* eslint-disable no-unused-vars */
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class PostCardStamp extends SimpleColors {
  constructor() {
    super();
    this.accentColor = 'grey';
    this.image = new URL(
      '../assets/postcard-stamp-stock.jpg',
      import.meta.url
    ).href;
    this.alt = 'Stamp';
  }

  static get tag() {
    return 'post-card-stamp';
  }

  static get properties() {
    return {
      ...super.properties,
      image: { type: String, reflect: true },
      alt: { type: String },
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          --img-width: 100px;
        }

        div {
          display: inline-grid;
          grid-template-columns: 1;
          grid-template-rows: 1;
          padding-top: 10%;
        }
        img {
          grid-column: 1;
          grid-row: 1;
          justify-content: center;
        }

        .stampImage {
          width: var(--img-width);
          height: calc(var(--img-width) * 1.25);
          justify-self: center;
          padding-top: 10px;
          transform: rotate(1.5deg);
          z-index: 3;
        }

        .stampBackground {
          width: calc(var(--img-width) + 20px);
          height: calc(var(--img-width) * 1.25 + 20px);
          z-index: 2;
        }
      `,
    ];
  }

  render() {
    return html`
      <div>
        <img
          src="../assets/postcard-stamp-bg.png"
          alt=""
          class="stampBackground"
        />
        <img src="${this.image}" alt="${this.alt}" class="stampImage" />
      </div>
    `;
  }
}
customElements.define(PostCardStamp.tag, PostCardStamp);
