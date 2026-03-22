import type { Preview } from '@storybook/react-vite';

import '../dist/tokens.css';
import './preview.css';

const preview: Preview = {
  initialGlobals: {
    brand: 'brand-a',
    theme: 'light',
  },
  globalTypes: {
    brand: {
      name: 'Brand',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'brand-a', title: 'Brand A' },
          { value: 'brand-b', title: 'Brand B' },
        ],
      },
    },
    theme: {
      name: 'Theme',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const brand = context.globals.brand ?? 'brand-a';
      const theme = context.globals.theme ?? 'light';

      document.documentElement.dataset.brand = brand;
      document.documentElement.dataset.theme = theme;
      document.body.dataset.brand = brand;
      document.body.dataset.theme = theme;

      return Story();
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
