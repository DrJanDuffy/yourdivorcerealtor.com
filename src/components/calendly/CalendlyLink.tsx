'use client';

import type { ReactNode } from 'react';

const CALENDLY_URL = 'https://calendly.com/drjanduffy/dr-duffy-private-15-min-conversation';

type CalendlyLinkProps = {
  children: ReactNode;
  className?: string;
  /** Optional callback when link is clicked (e.g. close mobile menu) */
  onClick?: () => void;
};

declare global {
  // eslint-disable-next-line ts/consistent-type-definitions -- global augmentation requires interface
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

/**
 * Link that opens Calendly scheduler in a popup. Use for "Schedule a Consultation" CTAs.
 */
export function CalendlyLink({ children, className, onClick }: CalendlyLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.();
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <a
      href={CALENDLY_URL}
      onClick={handleClick}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
