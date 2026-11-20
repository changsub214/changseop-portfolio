'use client';

import { useEffect } from 'react';

interface ShortcutHandlers {
  onToggleCommandQuery: () => void;
  onEscape: () => void;
}

export function useGlobalShortcuts({
  onToggleCommandQuery,
  onEscape,
}: ShortcutHandlers): void {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        onToggleCommandQuery();
        return;
      }
      if (event.key === 'Escape') {
        onEscape();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onToggleCommandQuery, onEscape]);
}
