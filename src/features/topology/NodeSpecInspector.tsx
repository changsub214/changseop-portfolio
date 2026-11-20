import React from 'react';
import { MonoTag } from '@/components/primitives/MonoTag';
import { uiCopy } from '@/content/ui-copy';
import type { ArchitectureNode, Locale } from '@/types/portfolio';
import styles from './NodeSpecInspector.module.css';

interface NodeSpecInspectorProps {
  node: ArchitectureNode;
  locale: Locale;
}

export function NodeSpecInspector({ node, locale }: NodeSpecInspectorProps) {
  return (
    <div className={styles.inspector}>
      <div className={styles.topRow}>
        <MonoTag active>
          {`${node.code} // ${node.layer}`}
        </MonoTag>
        <h4 className={styles.nodeName}>{node.label}</h4>
      </div>

      <div className={styles.techList}>
        {node.tech.map((item) => (
          <MonoTag key={item} subtle>
            {item}
          </MonoTag>
        ))}
      </div>

      <div className={styles.specGrid}>
        <div className={styles.specBlock}>
          <span className={styles.blockLabel}>{uiCopy.sheet.whyChosen[locale]}</span>
          <p className={styles.blockText}>{node.whyChosen[locale]}</p>
        </div>

        <div className={styles.specBlock}>
          <span className={styles.blockLabel}>{uiCopy.sheet.tradeOff[locale]}</span>
          <p className={styles.blockText}>{node.tradeOff[locale]}</p>
        </div>
      </div>

      <div className={styles.codeSection}>
        <div className={styles.codeHeader}>
          <span>{uiCopy.sheet.specTitle[locale]}</span>
          <span>[{node.specLang.toUpperCase()}]</span>
        </div>
        <pre className={styles.pre}>
          <code>{node.specSnippet}</code>
        </pre>
      </div>
    </div>
  );
}
