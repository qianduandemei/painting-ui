import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './Card.ui'; // 引入 my-card 组件，确保路径正确
import './Flower.ui'; // 如果有 flower-ui 组件，请确保路径正确
import './RoadSign.ui'
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

export const WithRoadSign: Story = {
  args: {
    'card-width': 450,
    'bg-color': '#f5f5f5',
    width: '300px',
    height: '120px',
    topColor: '#0000FF',
    bottomColor: '#FFFFFF',
    topTextColor: '#FFFFFF',
    bottomTextColor: '#000000',
    text: '遇见美好，遇见你',
    englishText: 'Meet the Beauty, Meet You',
    topFontSize: '16px',
    bottomFontSize: '14px',
    cornerFontSize: '12px',
    poleColor: '#8B8B8B',
    poleWidth: '10px',
    poleHeight: '150px',
    poleGap: '0px',
  },
  render: (args: any) => html`
    <card-ui width=${args['card-width']} bg-color=${args['bg-color']}>
      <!-- 插槽内容测试 -->
      <road-sign
        style="top: 50%; left: 50%; transform: translate(-50%, -50%); position: absolute;"
        width=${args.width}
        height=${args.height}
        topColor=${args.topColor}
        bottomColor=${args.bottomColor}
        topTextColor=${args.topTextColor}
        bottomTextColor=${args.bottomTextColor}
        text=${args.text}
        englishText=${args.englishText}
        topFontSize=${args.topFontSize}
        bottomFontSize=${args.bottomFontSize}
        cornerFontSize=${args.cornerFontSize}
        poleColor=${args.poleColor}
        poleWidth=${args.poleWidth}
        poleHeight=${args.poleHeight}
        poleGap=${args.poleGap}
  ></road-sign>
      <p
        style="position: absolute; bottom: 10px; right: 10px; color: #333; font-size: 18px;"
      >
        This is a slot test
      </p>
    </card-ui>
  `,
};