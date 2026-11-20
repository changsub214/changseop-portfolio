'use client';

import React from 'react';
import styles from './OverlaySheet.module.css';

interface OverlaySheetProps {
  open: boolean;
  onClose: () => void;
  mode?: 'sheet' | 'console';
  ariaLabel: string;
  children: React.ReactNode;
}

export function OverlaySheet({
  open,
  onClose,
  mode = 'sheet',
  ariaLabel,
  children,
}: OverlaySheetProps) {
  if (!open) return null;

  return (
    <div
      className={`${styles.backdrop} ${
        mode === 'console' ? styles.consoleAlign : styles.sheetAlign
      }`}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        className={mode === 'console' ? styles.consolePanel : styles.sheetPanel}
      >
        {children}
      </div>
    </div>
  );
}
