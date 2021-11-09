import { html } from 'lit';

import '../post-card.js';

export default {
  title: 'Post Card',
  component: 'post-card',
  argTypes: {
    need: { control: 'text' },
  },
};

function Template({ need = 'rename', slot }) {
  return html` <post-card need="${need}"> ${slot} </post-card> `;
}
export const Card = Template.bind({});

export const ScienceCard = Template.bind({});
ScienceCard.args = {
  need: 'science',
  slot: html`<p>slotted content that should render</p>`,
};
