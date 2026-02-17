/**
 * User-visible byline date for Google byline-date best practices.
 * Renders "Last updated: Feb 16, 2025" or "Published Feb 16, 2025" with semantic <time>.
 */

import { formatBylineDate, toSchemaDateTime } from '@/lib/content-dates';

type BylineDateProps = {
  /** Publication date (YYYY-MM-DD or ISO). */
  datePublished?: string;
  /** Last modified date (YYYY-MM-DD or ISO). When present, shown as "Last updated". */
  dateModified?: string;
  /** Optional class for the wrapper. */
  className?: string;
};

export function BylineDate({
  datePublished,
  dateModified,
  className = '',
}: BylineDateProps) {
  const displayDate = dateModified ?? datePublished;
  if (!displayDate) {
    return null;
  }

  const label = dateModified ? 'Last updated' : 'Published';
  const isoForSchema = displayDate.length <= 10
    ? toSchemaDateTime(displayDate)
    : displayDate;

  return (
    <p className={`text-sm text-gray-600 ${className}`.trim()}>
      {label}
      {' '}
      <time dateTime={isoForSchema}>{formatBylineDate(displayDate)}</time>
    </p>
  );
}
