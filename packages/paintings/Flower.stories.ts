import { html } from 'lit';
import { Meta, StoryFn } from '@storybook/web-components';
import './Flower.ui';

// 默认导出元数据
export default {
  title: 'Components/Flower', // 目录名称
  component: 'flower-ui', // 组件名称
  parameters: {
    actions: {
      handles: ['petals-change', 'skin-change'], // 监听事件
    },
  },
  argTypes: {
    petals: {
      control: { type: 'number' }, // 控制面板中可以用数字输入
      defaultValue: 4,
      description: 'Number of petals for the flower', // 描述
    },
    skin: {
      control: { type: 'select' }, // 控制面板中提供选择器
      options: ['classic', 'white-yellow'], // 可选项
      defaultValue: 'classic',
      description: 'Skin type for the flower (color theme)',
    },
  },
} as Meta;

// 默认故事
const Template: StoryFn = ({ petals, skin }) => html`
  <flower-ui .petals=${petals} .skin=${skin}></flower-ui>
`;

// 故事：经典主题
export const Classic = Template.bind({});
Classic.args = {
  petals: 4, // 经典主题例子：6个花瓣
  skin: 'classic',
};

// 故事：白色主题
export const WhiteYellow = Template.bind({});
WhiteYellow.args = {
  petals: 4, // 白色主题例子：8个花瓣
  skin: 'white-yellow',
};

// 故事：密集花瓣
export const DenseFlower = Template.bind({});
DenseFlower.args = {
  petals: 5, // 非常多的花瓣展示
  skin: 'classic',
};

// 故事：单独的一个花瓣测试
export const SinglePetalFlower = Template.bind({});
SinglePetalFlower.args = {
  petals: 1, // 单花瓣测试
  skin: 'classic',
};