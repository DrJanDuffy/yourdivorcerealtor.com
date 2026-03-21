'use client';

import { useEffect, useState } from 'react';
import { loadRealScoutScript } from '@/lib/realscout/load-realscout-script';

/**
 * After the widget region becomes visible, loads the RealScout UMD once and sets ready.
 */
export function useRealScoutScriptReady(visible: boolean) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!visible) {
      return;
    }
    let cancelled = false;
    loadRealScoutScript()
      .then(() => {
        if (!cancelled) {
          setReady(true);
        }
      })
      .catch(() => {
        // Listing widgets keep skeleton or error UI if extended later
      });
    return () => {
      cancelled = true;
    };
  }, [visible]);

  return ready;
}
