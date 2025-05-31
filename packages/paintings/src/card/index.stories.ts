import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { Card} from './index.ui';
import type { CardProps } from './index.ui';
const meta = {
  title: 'Components/Card', // 在 Storybook 中的路径
  tags: ['autodocs'],
  render: (args) => Card(args),
  argTypes: {
    width: {
      control: 'number',
      description: 'Card width (square card, width equals height)',
      defaultValue: 450,
    },
    bgColor: {
      control: 'color',
      description: 'Background color of the card',
      defaultValue: '#e0e0e0',
    },
    beforeColor: {
        control: 'color',
        defaultValue: '#ffffff',
    }
  },
} satisfies Meta<CardProps>;

export default meta;

type Story = StoryObj<CardProps>;



export const Default: Story = {
  args: {
    width: 450,
    bgColor: '#e0e0e0',
    beforeColor: '#ffffff'
  },
};
