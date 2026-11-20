import React from 'react';
import type { MatchedTraceHop } from '@/types/ontology';
import styles from './CommandQueryModal.module.css';

export function OntologyTraceBar({
  label,
  trace,
}: {
  label: string;
  trace: MatchedTraceHop[];
}) {
  if (trace.length === 0) return null;

  return (
    <div className={styles.traceBlock}>
      <div className={styles.sectionLabel}>{label}</div>
      <div className={styles.traceList}>
        {trace.map((hop, idx) => (
          <div key={idx} className={styles.traceHop}>
            <span className={styles.entityNode}>{hop.fromLabel}</span>
            <span className={styles.predicate}>──[{hop.predicate}]──&gt;</span>
            <span className={styles.entityNodeAccent}>{hop.toLabel}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
