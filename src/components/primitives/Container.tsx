import React from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  variant?: 'editorial' | 'blueprint';
  as?: 'div' | 'section' | 'header' | 'footer';
  className?: string;
  id?: string;
  children: React.ReactNode;
}

export function Container({
  variant = 'blueprint',
  as: Tag = 'div',
  className = '',
  id,
  children,
}: ContainerProps) {
  const modeClass =
    variant === 'editorial' ? styles.editorial : styles.blueprint;

  return (
    <Tag id={id} className={`${styles.base} ${modeClass} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
