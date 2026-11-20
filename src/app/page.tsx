import React, { Suspense } from 'react';
import { PortfolioShell } from '@/features/PortfolioShell';

function AppShellFallback() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--surface-canvas)',
      }}
    />
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<AppShellFallback />}>
      <PortfolioShell />
    </Suspense>
  );
}
