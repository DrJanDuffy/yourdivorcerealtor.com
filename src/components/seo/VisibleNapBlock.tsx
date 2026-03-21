import {
  BROKERAGE_NAME,
  NAP_ADDRESS_LOCALITY,
  NAP_ADDRESS_REGION,
  NAP_POSTAL_CODE,
  NAP_STREET_LINES,
  REAL_ESTATE_LICENSE_NV,
  SITE_EMAIL,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
} from '@/lib/site-contact';

type VisibleNapBlockProps = {
  className?: string;
};

/**
 * Visible NAP block (matches GBP) for pages that use a minimal layout without DivorcePageTemplate.
 */
export function VisibleNapBlock({ className = '' }: VisibleNapBlockProps) {
  return (
    <aside
      className={`rounded-2xl border border-gray-200 bg-gray-50/90 p-6 text-sm text-gray-800 ${className}`}
      aria-label="Business contact and address"
    >
      <p className="font-semibold text-gray-900">Dr. Jan Duffy</p>
      <p>{BROKERAGE_NAME}</p>
      <p>
        Nevada license #
        {REAL_ESTATE_LICENSE_NV}
      </p>
      {NAP_STREET_LINES.map(line => (
        <p key={line}>{line}</p>
      ))}
      <p>
        {NAP_ADDRESS_LOCALITY}
        ,
        {NAP_ADDRESS_REGION}
        {' '}
        {NAP_POSTAL_CODE}
      </p>
      <p>
        <a href={SITE_PHONE_TEL} className="font-semibold text-blue-700 hover:underline">
          {SITE_PHONE_DISPLAY}
        </a>
      </p>
      <p>
        <a href={`mailto:${SITE_EMAIL}`} className="text-blue-700 hover:underline">
          {SITE_EMAIL}
        </a>
      </p>
    </aside>
  );
}
