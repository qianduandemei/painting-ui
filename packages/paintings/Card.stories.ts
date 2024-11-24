import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './Card.ui'; // 引入 my-card 组件，确保路径正确
import './Flower.ui'; // 如果有 flower-ui 组件，请确保路径正确

const meta = {
  title: 'Components/Card', // 在 Storybook 中的路径
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

export const WithSlot: Story = {
  args: {
    width: 450,
    'bg-color': '#f5f5f5',
  },
  render: (args: any) => html`
    <card-ui width=${args.width} bg-color=${args['bg-color']}>
      <!-- 插槽内容测试 -->
      <flower-ui
        style="top: 10%; left: 10%; position: absolute;"
        petals="5"
        width="80"
        height="80"
      ></flower-ui>
      <flower-ui
        style="top: 50%; left: 50%; transform: translate(-50%, -50%); position: absolute;"
        petals="4"
        width="100"
        height="100"
      ></flower-ui>
      <p
        style="position: absolute; bottom: 10px; right: 10px; color: #333; font-size: 18px;"
      >
        This is a slot test
      </p>
    </card-ui>
  `,
};