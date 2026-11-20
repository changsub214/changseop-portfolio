import React from 'react';
import styles from './MonoTag.module.css';

interface MonoTagProps {
  active?: boolean;
  subtle?: boolean;
  children: React.ReactNode;
}

export function MonoTag({
  active = false,
  subtle = false,
  children,
}: MonoTagProps) {
  const classes = [
    styles.tag,
    active ? styles.active : '',
    subtle ? styles.subtle : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes}>
      {active ? <span className={styles.led} aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
