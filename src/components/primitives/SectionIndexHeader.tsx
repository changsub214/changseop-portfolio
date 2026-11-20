import React from 'react';
import styles from './SectionIndexHeader.module.css';

interface SectionIndexHeaderProps {
  indexCode: string;
  title: string;
  note?: string;
}

export function SectionIndexHeader({
  indexCode,
  title,
  note,
}: SectionIndexHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <span className={styles.code}>[{indexCode}]</span>
        <h2 className={styles.title}>{title}</h2>
      </div>
      {note ? <p className={styles.note}>{note}</p> : null}
    </div>
  );
}
