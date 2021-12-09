import { html } from 'lit';

import '../post-card.js';

export default {
  title: 'Post Card',
  component: 'post-card',
  argTypes: {
    location: { control: 'text' },
    photoSrc: { control: 'file' },
    stampSrc: { control: 'file' },
    to: { control: 'text' },
    from: { control: 'text' },
    message: { control: 'text' },
  },
};

function PostCardTemplate({
  location,
  photoSrc,
  stampSrc,
  to,
  from,
  message,
  slot,
}) {
  return html`<post-card
    post-mark-locations="${location}"
    photoSrc="${photoSrc}"
    stampSrc="${stampSrc}"
    to="${to}"
    from="${from}"
    message="${message}"
  >
    ${slot}
  </post-card>`;
}
export const Card = PostCardTemplate.bind({});

export const ScienceCard = PostCardTemplate.bind({});
// ScienceCard.args = {
//   need: 'science',
//   slot: html`<p>slotted content that should render</p>`,
// };
