import React from 'react';

import './badge.css';

export interface BadgeProps {
  label: string;
  tone?: 'neutral' | 'success' | 'warning';
}

export const Badge = ({ label, tone = 'neutral' }: BadgeProps) => (
  <span className={['storybook-badge', `storybook-badge--${tone}`].join(' ')}>{label}</span>
);
