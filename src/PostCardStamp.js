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
        img {
          width: var(--img-width);
          height: calc(var(--img-width) * 1.25);
          border: 1px dashed black;
        }
      `,
    ];
  }

  render() {
    return html`
      <div>
        <span><img src="${this.image}" alt="${this.alt}" /></span>
      </div>
    `;
  }
}
customElements.define(PostCardStamp.tag, PostCardStamp);
