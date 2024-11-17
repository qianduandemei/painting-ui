// stories/WaterDrop.stories.ts
import { html } from 'lit';
import './Drop.ui';
import { Meta, StoryFn } from '@storybook/web-components';

// Storybook 的元数据配置
export default {
  title: 'Components/WaterDrop',
  component: 'water-drop',
} as Meta;

// 创建 stories 模板
const Template: StoryFn = () => html`<water-drop></water-drop>`;

// 导出故事
export const Default = Template.bind({});
Default.args = {};
