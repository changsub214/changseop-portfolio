'use client';

import React from 'react';
import { Container } from '@/components/primitives/Container';
import { SectionIndexHeader } from '@/components/primitives/SectionIndexHeader';
import { profileContent } from '@/content/profile';
import { roleLensLabels, uiCopy } from '@/content/ui-copy';
import { usePortfolio } from '@/context/PortfolioContext';
import type { RoleLens } from '@/types/portfolio';
import styles from './FooterSection.module.css';

const DEEP_LINK_LENSES: RoleLens[] = ['de', 'ai', 'ax'];

export function FooterSection({ indexCode }: { indexCode: string }) {
  const { locale, lens, setLens } = usePortfolio();

  return (
    <Container
      as="footer"
      id="contact"
      variant="blueprint"
      className={styles.footer}
    >
      <SectionIndexHeader
        indexCode={indexCode}
        title={uiCopy.footer.sectionTitle[locale]}
      />

      <div className={styles.row}>
        <div className={styles.channels}>
          {profileContent.channels.map((ch) => (
            <a
              key={ch.label}
              href={ch.href}
              target={ch.external ? '_blank' : undefined}
              rel={ch.external ? 'noreferrer' : undefined}
              className={styles.channelLink}
            >
              <span>{ch.label}</span>
              <span>↗</span>
            </a>
          ))}
        </div>

        <div className={styles.deepLinks}>
          {DEEP_LINK_LENSES.map((targetLens) => (
            <button
              key={targetLens}
              type="button"
              className={`${styles.lensLinkBtn} ${
                lens === targetLens ? styles.lensActive : ''
              }`.trim()}
              onClick={() => {
                setLens(targetLens);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              /?lens={targetLens} ({roleLensLabels[targetLens][locale].full})
            </button>
          ))}
        </div>
      </div>

      <p className={styles.note}>{uiCopy.footer.note[locale]}</p>
    </Container>
  );
}
