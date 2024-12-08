import { html } from 'lit';
import { Meta, StoryFn, StoryObj } from '@storybook/web-components';
import './RoadSign.ui'; // 导入 RoadSign 组件

export default {
    title: 'Components/RoadSign',
    component: 'road-sign',
    parameters: { layout: 'centered' },
    argTypes: {
        width: {
            control: 'text',
            defaultValue: '300px',
            description: '路牌宽度。',
        },
        height: {
            control: 'text',
            defaultValue: '120px',
            description: '路牌高度。',
        },
        topColor: {
            control: 'color',
            defaultValue: '#0000FF',
            description: '顶部部分的背景颜色。',
        },
        bottomColor: {
            control: 'color',
            defaultValue: '#FFFFFF',
            description: '底部部分的背景颜色。',
        },
        topTextColor: {
            control: 'color',
            defaultValue: '#FFFFFF',
            description: '顶部文字的颜色。',
        },
        bottomTextColor: {
            control: 'color',
            defaultValue: '#000000',
            description: '底部文字的颜色。',
        },
        text: {
            control: 'text',
            defaultValue: '遇见美好，遇见你',
            description: '顶部区域的文字内容。',
        },
        englishText: {
            control: 'text',
            defaultValue: 'Meet the Beauty, Meet You',
            description: '底部区域的文字内容。',
        },
        topFontSize: {
            control: 'text',
            defaultValue: '16px',
            description: '顶部文字的字体大小。',
        },
        bottomFontSize: {
            control: 'text',
            defaultValue: '14px',
            description: '底部文字的字体大小。',
        },
        cornerFontSize: {
            control: 'text',
            defaultValue: '12px',
            description: '南/北角上的字体大小。',
        },
        poleBackground: {
            control: 'text',
            defaultValue: 'linear-gradient(to right, black, white)',
            description: '柱子的颜色。',
        },
        poleWidth: {
            control: 'text',
            defaultValue: '10px',
            description: '柱子的宽度。',
        },
        poleHeight: {
            control: 'text',
            defaultValue: '150px',
            description: '柱子的高度。',
        },
        poleGap: {
            control: 'text',
            defaultValue: '10px',
            description: '柱子与路牌之间的间距。',
        },
    },
} as Meta;

// 通用模板
const Template: StoryFn = (args) =>
    html`<road-sign
    .width=${args.width}
    .height=${args.height}
    .topColor=${args.topColor}
    .bottomColor=${args.bottomColor}
    .topTextColor=${args.topTextColor}
    .bottomTextColor=${args.bottomTextColor}
    .text=${args.text}
    .englishText=${args.englishText}
    .topFontSize=${args.topFontSize}
    .bottomFontSize=${args.bottomFontSize}
    .cornerFontSize=${args.cornerFontSize}
    .poleBackground=${args.poleBackground}
    .poleWidth=${args.poleWidth}
    .poleHeight=${args.poleHeight}
    .poleGap=${args.poleGap}
  ></road-sign>`;

// 默认样式
export const Default = Template.bind({});
Default.args = {
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
    poleBackground: 'linear-gradient(to right, black, white)',
    poleWidth: '10px',
    poleHeight: '150px',
    poleGap: '10px',
};

// 自定义宽度和高度的路牌
export const CustomSize = Template.bind({});
CustomSize.args = {
    ...Default.args,
    width: '500px',
    height: '200px',
    text: '宽高示例',
    englishText: 'Custom Size Example',
};

// 替换顶部和底部的背景颜色
export const DifferentColors = Template.bind({});
DifferentColors.args = {
    ...Default.args,
    topColor: '#FF6347', // 番茄色
    bottomColor: '#40E0D0', // 绿松石色
    text: '自定义颜色',
    englishText: 'Custom Colors Example',
};

// 测试自定义字体大小的故事
export const CustomFontSizes = Template.bind({});
CustomFontSizes.args = {
    ...Default.args,
    topFontSize: '20px',
    bottomFontSize: '18px',
    cornerFontSize: '14px',
    text: '大字体',
    englishText: 'Big Font Example',
};

// 自定义柱子的颜色和高度
export const CustomPole = Template.bind({});
CustomPole.args = {
    ...Default.args,
    poleBackground: '#4CAF50',
    poleWidth: '15px',
    poleHeight: '200px',
    poleGap: '15px',
    text: '绿柱子',
    englishText: 'Custom Pole',
};

// 测试更大的路牌组件
export const HugeSign = Template.bind({});
HugeSign.args = {
    ...Default.args,
    width: '800px',
    height: '400px',
    text: '非常大的路牌',
    englishText: 'Huge Sign Example',
    topFontSize: '28px',
    bottomFontSize: '24px',
    cornerFontSize: '18px',
    poleWidth: '20px',
    poleHeight: '300px',
};

// 低宽度的柱子
export const ThinPole = Template.bind({});
ThinPole.args = {
    ...Default.args,
    poleWidth: '5px',
    poleHeight: '250px',
    text: '细的柱子',
    englishText: 'Thin Pole Example',
};

// 去掉柱子的路牌
export const WithoutPole = Template.bind({});
WithoutPole.args = {
    ...Default.args,
    poleHeight: '0px', // 不绘制柱子
    text: '去掉柱子',
    englishText: 'No Pole Example',
};

// 高亮文字示例（高对比度颜色）
export const HighlightText = Template.bind({});
HighlightText.args = {
    ...Default.args,
    topTextColor: '#FFD700', // 金色字体
    bottomTextColor: '#FF4500', // 橙红色字体
    text: '高亮文字',
    englishText: 'Highlight Text Example',
};
