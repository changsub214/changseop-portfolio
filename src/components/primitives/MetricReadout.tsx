import React from 'react';
import styles from './MetricReadout.module.css';

interface MetricReadoutProps {
  label: string;
  value: string;
  delta?: string;
}

export function MetricReadout({ label, value, delta }: MetricReadoutProps) {
  return (
    <div className={styles.cell}>
      <span className={styles.label}>{label}</span>
      <div className={styles.valueRow}>
        <strong className={styles.value}>{value}</strong>
        {delta ? <span className={styles.delta}>{delta}</span> : null}
      </div>
    </div>
  );
}
