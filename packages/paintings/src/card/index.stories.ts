import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import './index.ui'; 
const meta = {
  title: 'Components/Card',
  component: 'card-ui',
  argTypes: {
    width: {
      control: 'number',
      description: 'Card width (square card, width equals height)',
      defaultValue: 450,
    },
    'bg-color': {
      control: 'color',
      description: 'Background color of the card',
      defaultValue: '#e0e0e0',
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

const Template = (args: any) => html`
  <card-ui width=${args.width} bg-color=${args['bg-color']}>
    <slot></slot>
  </card-ui>
`;

export const Default: Story = {
  render: Template,
  args: {
    width: 450,
    'bg-color': '#e0e0e0',
  },
};
