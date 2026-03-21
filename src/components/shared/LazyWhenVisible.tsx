'use client';

import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';

/**
 * Renders children only after the sentinel intersects the viewport (with rootMargin).
 * Use below-the-fold to defer dynamic imports and main-thread work until after LCP.
 */
export function LazyWhenVisible({
  children,
  fallback,
  rootMargin = '420px',
}: {
  children: ReactNode;
  fallback: ReactNode;
  rootMargin?: string;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref}>
      {visible ? children : fallback}
    </div>
  );
}
