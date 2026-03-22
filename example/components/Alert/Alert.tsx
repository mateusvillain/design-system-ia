import React from 'react';

import './alert.css';

export interface AlertProps {
  title: string;
  description: string;
  tone?: 'info' | 'success' | 'warning' | 'danger';
}

export const Alert = ({ title, description, tone = 'info' }: AlertProps) => (
  <div className={['storybook-alert', `storybook-alert--${tone}`].join(' ')} role="status">
    <div className="storybook-alert__marker" aria-hidden="true" />
    <div className="storybook-alert__body">
      <strong className="storybook-alert__title">{title}</strong>
      <p className="storybook-alert__description">{description}</p>
    </div>
  </div>
);
