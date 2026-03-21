import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { CalendlyLink } from '@/components/calendly/CalendlyLink';
import { generateLocaleAlternates } from '@/lib/metadata';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '@/lib/site-contact';

type SellPageProps = {
  params: Promise<{ locale: string }>;
};

const path = '/sell';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'Selling a Home During Divorce | Dr. Jan Duffy — Las Vegas',
    description:
      'Neutral, specialized listing support for divorcing homeowners in Las Vegas and Henderson. Strategy, valuation coordination, and court-aware timelines—not generic “instant offer” programs.',
    alternates: { canonical, languages },
  };
}

export default async function SellPage(props: SellPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Sell Your Home During Divorce
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-pretty text-gray-700">
          Dr. Jan Duffy helps divorcing homeowners in Las Vegas and Henderson plan and execute a sale with clear
          communication, neutral representation, and timelines that work with attorneys and court schedules. This is
          not a generic iBuyer or “instant cash offer” program—expect a confidential consultation and a path tailored
          to your situation.
        </p>

        <ul className="mb-10 list-inside list-disc space-y-2 text-gray-700">
          <li>Listing strategy aligned with property division and court orders</li>
          <li>Coordination with your legal and financial professionals when appropriate</li>
          <li>Focus on equity, timing, and reducing conflict—not hype or guarantees we cannot keep</li>
        </ul>

        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <CalendlyLink className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-sm transition-colors hover:bg-blue-700">
            Schedule a confidential consultation
          </CalendlyLink>
          <Link
            href="/selling-home-during-divorce"
            className="inline-flex items-center justify-center rounded-xl border-2 border-blue-600 px-6 py-3.5 font-semibold text-blue-700 transition-colors hover:bg-blue-50"
          >
            Read: selling during divorce
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-6 py-3.5 font-semibold text-gray-800 transition-colors hover:bg-gray-50"
          >
            Contact
          </Link>
        </div>

        <p className="mt-10 text-sm text-gray-600">
          Call
          {' '}
          <a href={SITE_PHONE_TEL} className="font-semibold text-blue-600 hover:underline">
            {SITE_PHONE_DISPLAY}
          </a>
          {' '}
          for phone questions. Dr. Jan Duffy is a licensed Nevada real estate professional; she does not provide legal
          or tax advice—your attorney and CPA remain the sources for those topics.
        </p>
      </div>
    </div>
  );
}
