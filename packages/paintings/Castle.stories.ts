import { html } from 'lit';
import './Castle.ui';
import { Meta, StoryFn } from '@storybook/web-components';

// Storybook 的元数据配置
export default {
  title: 'Components/Castle',
  component: 'castle-ui',
} as Meta;

// 创建 stories 模板
const Template: StoryFn = () => html`<castle-ui></castle-ui>`;

// 导出故事
export const Default = Template.bind({});
Default.args = {};
