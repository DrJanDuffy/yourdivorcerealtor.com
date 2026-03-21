'use client';

import { useEffect, useRef } from 'react';

const CALENDLY_URL = 'https://calendly.com/drjanduffy/dr-duffy-private-15-min-conversation';

type CalendlyGlobal = {
  initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
};

function getCalendly(): CalendlyGlobal | undefined {
  if (typeof window === 'undefined') {
    return undefined;
  }
  return (window as unknown as { Calendly?: CalendlyGlobal }).Calendly;
}

/**
 * Inline Calendly scheduler embed. Requires CalendlyScripts in root layout.
 *
 * Uses `Calendly.initInlineWidget` so the widget initializes when this component
 * mounts (including after lazy load). The global script only auto-scans the DOM on
 * first load; embeds that appear later (e.g. below-the-fold lazy sections) would
 * stay empty without this.
 */
export function CalendlyInline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parentElement = containerRef.current;
    if (!parentElement) {
      return;
    }

    let cancelled = false;
    let timeoutId: number | undefined;
    let attempts = 0;
    const maxAttempts = 150;

    const tryInit = () => {
      if (cancelled) {
        return;
      }
      const Calendly = getCalendly();
      if (Calendly?.initInlineWidget) {
        parentElement.innerHTML = '';
        Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement,
        });
        return;
      }
      attempts++;
      if (attempts < maxAttempts) {
        timeoutId = window.setTimeout(tryInit, 100);
      }
    };

    tryInit();

    return () => {
      cancelled = true;
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
      parentElement.innerHTML = '';
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-[700px] w-full min-w-[320px]"
      style={{ minWidth: 320, height: 700 }}
    />
  );
}
