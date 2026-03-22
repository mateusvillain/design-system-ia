import React from 'react';

import './stat-card.css';

export interface StatCardProps {
  eyebrow: string;
  value: string;
  caption: string;
  trend?: 'up' | 'neutral' | 'down';
}

export const StatCard = ({
  eyebrow,
  value,
  caption,
  trend = 'neutral',
}: StatCardProps) => (
  <section className="storybook-stat-card">
    <span className="storybook-stat-card__eyebrow">{eyebrow}</span>
    <strong className="storybook-stat-card__value">{value}</strong>
    <p className="storybook-stat-card__caption">{caption}</p>
    <span className={['storybook-stat-card__trend', `storybook-stat-card__trend--${trend}`].join(' ')}>
      {trend === 'up' ? 'Growing' : trend === 'down' ? 'Dropping' : 'Stable'}
    </span>
  </section>
);
