import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './Blessing.ui';

export default {
  title: 'Components/Blessing',
  component: 'spring-blessing',
  argTypes: {
    dotCount: {
      control: { type: 'number', min: 10, max: 100, step: 1 },
      description: '金色点点的数量'
    },
    containerWidth: {
      control: { type: 'number', min: 100, max: 300, step: 10 },
      description: '容器的宽度'
    }
  },
} as Meta;

type Story = StoryObj;

const Template = (args: any) => html`
  <spring-blessing .dotCount=${args.dotCount} .containerWidth=${args.containerWidth}></spring-blessing>
`;


export const Default: Story = {
    render: Template,
    args: {
        dotCount: 30,
        containerWidth: 150,
    }
}

export const LargeContainer: Story = {
    render: Template,
    args: {
        dotCount: 30,
  containerWidth: 250,
    }
}

export const SmallContainer: Story = {
    render: Template,
    args: {
        dotCount: 20,
  containerWidth: 100,
    }
}

export const MoreDots: Story = {
    render: Template,
    args: {
        dotCount: 50,
        containerWidth: 150,
    }
}

