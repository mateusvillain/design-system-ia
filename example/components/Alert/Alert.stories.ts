import type { Meta, StoryObj } from '@storybook/react-vite';

import { Alert } from './Alert';

const meta = {
  title: 'Example/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    tone: 'info',
    title: 'API synchronized',
    description: 'The design tokens were rebuilt successfully for the current brand and theme.',
  },
};

export const Success: Story = {
  args: {
    tone: 'success',
    title: 'Release ready',
    description: 'All visual review checks passed for the generated Storybook build.',
  },
};

export const Warning: Story = {
  args: {
    tone: 'warning',
    title: 'Needs review',
    description: 'Brand B dark mode still needs manual visual approval before publishing.',
  },
};

export const Danger: Story = {
  args: {
    tone: 'danger',
    title: 'Token mismatch',
    description: 'A semantic alias is pointing to an unavailable primitive token.',
  },
};
