import React from 'react';
import { siteLayoutConfig } from '@/config/site-layout.config';
import styles from './HairlineFrame.module.css';

interface HairlineFrameProps {
  variant?: 'panel' | 'interactive' | 'flush';
  crosshair?: boolean;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export function HairlineFrame({
  variant = 'panel',
  crosshair = siteLayoutConfig.theme.showBlueprintCrosshairs,
  className = '',
  onClick,
  children,
}: HairlineFrameProps) {
  const classes = [
    styles.frame,
    styles[variant],
    crosshair ? styles.crosshair : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classes}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
