import type { Metadata } from 'next';
import { siteLayoutConfig } from '@/config/site-layout.config';
import './globals.css';

export const metadata: Metadata = {
  title: '신창섭 (Changseop Shin) — DataOps, Ontology & Agent Architecture',
  description:
    'Google Cloud Customer Engineer specializing in Ontology Data Modeling, Contract-Driven DataOps, and Agentic Systems across DE, AI, and Enterprise AX.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      data-accent={siteLayoutConfig.theme.accentPreset}
      data-density={siteLayoutConfig.theme.densityPreset}
    >
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
