/* eslint-disable no-unused-vars */
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class PostCardPhoto extends SimpleColors {
  constructor() {
    super();
    this.accentColor = 'grey';
    this.image = new URL(
      '../assets/postcard-photo-stock.jpg',
      import.meta.url
    ).href;
    this.alt = 'Snowy trees';
  }

  static get tag() {
    return 'post-card-photo';
  }

  static get properties() {
    return {
      ...super.properties,
      image: { type: String, reflect: true },
      alt: { type: String, reflect: true },
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          --img-width: 310px;
        }
        img {
          width: var(--img-width);
          height: calc(var(--img-width) * 0.7);
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
customElements.define(PostCardPhoto.tag, PostCardPhoto);
