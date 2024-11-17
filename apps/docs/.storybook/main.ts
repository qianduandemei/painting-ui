import type { StorybookConfig } from "@storybook/web-components-vite";
// import { mergeConfig } from "vite";
// import { readFileSync } from 'fs';
import { join } from 'path';

const storiesPath = join(__dirname, '../../../packages/paintings');
// import autoStoryGenerator from "@takuma-ru/auto-story-generator";
const config: StorybookConfig = {
  stories: [`${storiesPath}/*.stories.@(js|jsx|mjs|ts|tsx)`],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
};
export default config;
