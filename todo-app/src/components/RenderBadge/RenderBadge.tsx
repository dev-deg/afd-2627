import React from 'react';
import type { RenderBadgeProps } from '../../types/todo';
import styles from './RenderBadge.module.css';

const RenderBadge: React.FC<RenderBadgeProps> = ({count, noisyAfter = 10}) => {
  return (
    <span
        className={`${styles.badge} ${count > noisyAfter ? styles.noisy : ''}`}
    >
        {count}
    </span>
  );
};

export default RenderBadge;