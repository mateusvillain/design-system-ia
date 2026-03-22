import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from './Badge';

const meta = {
  title: 'Example/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {
  args: {
    label: 'Neutral',
    tone: 'neutral',
  },
};

export const Success: Story = {
  args: {
    label: 'Published',
    tone: 'success',
  },
};

export const Warning: Story = {
  args: {
    label: 'Pending review',
    tone: 'warning',
  },
};
