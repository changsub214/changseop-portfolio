'use client';

import React from 'react';
import styles from './SegmentedSwitch.module.css';

export interface SegmentOption<T extends string> {
  value: T;
  label: string;
  code?: string;
}

interface SegmentedSwitchProps<T extends string> {
  ariaLabel: string;
  options: SegmentOption<T>[];
  value: T;
  onChange: (next: T) => void;
  compact?: boolean;
}

export function SegmentedSwitch<T extends string>({
  ariaLabel,
  options,
  value,
  onChange,
  compact = false,
}: SegmentedSwitchProps<T>) {
  return (
    <div
      className={`${styles.group} ${compact ? styles.compact : ''}`.trim()}
      role="tablist"
      aria-label={ariaLabel}
    >
      {options.map((opt) => {
        const isActive = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`${styles.item} ${isActive ? styles.active : ''}`.trim()}
            onClick={() => onChange(opt.value)}
          >
            {isActive ? <span className={styles.indicator} aria-hidden="true" /> : null}
            {opt.code ? <span className={styles.code}>{opt.code}</span> : null}
            <span>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
