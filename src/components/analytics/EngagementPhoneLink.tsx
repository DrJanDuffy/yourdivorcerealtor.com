'use client';

import type { ReactNode } from 'react';
import { captureEngagement } from '@/lib/analytics/engagement';

type EngagementPhoneLinkProps = {
  'href': string;
  'children': ReactNode;
  'className'?: string;
  /** Identifies placement for analytics (e.g. footer_primary, header_nav). */
  'location': string;
  'aria-label'?: string;
  'onClick'?: () => void;
};

/**
 * Tel link with PostHog engagement capture (when configured).
 */
export function EngagementPhoneLink({
  href,
  children,
  className,
  location,
  'aria-label': ariaLabel,
  onClick,
}: EngagementPhoneLinkProps) {
  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={() => {
        captureEngagement('phone_click', { location });
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}
