'use client';

import React from 'react';
import { Container } from '@/components/primitives/Container';
import { profileContent } from '@/content/profile';
import { roleLensLabels, uiCopy } from '@/content/ui-copy';
import { usePortfolio } from '@/context/PortfolioContext';
import { ContextSpineStrip } from './ContextSpineStrip';
import styles from './EditorialHero.module.css';

export function EditorialHero({ indexCode }: { indexCode: string }) {
  const { lens, locale } = usePortfolio();

  return (
    <Container as="section" id="top" variant="editorial" className={styles.hero}>
      <div className={styles.metaLine}>
        <span className={styles.indexCode}>[{indexCode}]</span>
        <span className={styles.roleTag}>{profileContent.currentRoleTag[locale]}</span>
        <span className={styles.lensBadge}>
          <span className={styles.dot} aria-hidden="true" />
          {uiCopy.hero.lensIndicatorPrefix[locale]} {roleLensLabels[lens][locale].full}
        </span>
      </div>

      <h1 className={styles.headline}>{profileContent.lensHeadline[lens][locale]}</h1>

      <p className={styles.manifesto}>{profileContent.lensManifesto[lens][locale]}</p>

      <ContextSpineStrip />
    </Container>
  );
}
