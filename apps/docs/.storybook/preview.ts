import type { Preview, StoryFn } from "@storybook/web-components";
import { html } from 'lit';
import { injectGlobalSvgFilter } from  '../../../../painting-ui/packages/paintings/filter.svg';

const FILTER_ID = 'fractal';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  }
}

export default preview;
