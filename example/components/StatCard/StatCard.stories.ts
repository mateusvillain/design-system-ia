import type { Meta, StoryObj } from '@storybook/react-vite';

import { StatCard } from './StatCard';

const meta = {
  title: 'Example/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Revenue: Story = {
  args: {
    eyebrow: 'Monthly revenue',
    value: '$124k',
    caption: 'Compared to the previous 30 days across all active channels.',
    trend: 'up',
  },
};

export const Pipeline: Story = {
  args: {
    eyebrow: 'Open pipeline',
    value: '42 deals',
    caption: 'No relevant movement since the last weekly planning cycle.',
    trend: 'neutral',
  },
};

export const Churn: Story = {
  args: {
    eyebrow: 'Churn risk',
    value: '8.2%',
    caption: 'A small cohort moved from warning to critical during the last sync.',
    trend: 'down',
  },
};
