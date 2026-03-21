import type { Metadata } from 'next';
import type { PageProps } from '@/types';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { CalendlyLink } from '@/components/calendly/CalendlyLink';
import { generateLocaleAlternates } from '@/lib/metadata';
import {
  BROKERAGE_NAME,
  REAL_ESTATE_LICENSE_NV,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
} from '@/lib/site-contact';

const path = '/homes';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'Browse Homes & Listings | Las Vegas Divorce Real Estate',
    description:
      'Explore active listing tools from the yourdivorcerealtor.com home page, or talk with Dr. Jan Duffy about divorce-related buying and selling in Las Vegas and Henderson.',
    alternates: { canonical, languages },
  };
}

export default async function HomesPage(props: PageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Homes for Sale — Las Vegas Area
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-pretty text-gray-700">
          Featured MLS-powered search widgets and listing sections live on the
          {' '}
          <Link href="/" className="font-semibold text-blue-600 hover:underline">
            homepage
          </Link>
          . Dr. Jan Duffy focuses on divorce-related real estate—if you need a curated search tied to your timeline,
          equity questions, or court orders, start with a consultation rather than anonymous listing data alone.
        </p>

        <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-8">
          <h2 className="mb-3 text-xl font-semibold text-gray-900">Next steps</h2>
          <ul className="mb-6 list-inside list-disc space-y-2 text-gray-700">
            <li>
              Return to the
              {' '}
              <Link href="/" className="font-semibold text-blue-600 hover:underline">
                home page
              </Link>
              {' '}
              to use the live listing tools there.
            </li>
            <li>
              Review
              {' '}
              <Link href="/buying-home-after-divorce" className="font-semibold text-blue-600 hover:underline">
                buying after divorce
              </Link>
              {' '}
              or
              {' '}
              <Link href="/selling-home-during-divorce" className="font-semibold text-blue-600 hover:underline">
                selling during divorce
              </Link>
              .
            </li>
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <CalendlyLink className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
              Schedule a call
            </CalendlyLink>
            <a href={SITE_PHONE_TEL} className="text-center font-semibold text-blue-700 hover:underline sm:text-left">
              {SITE_PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-600">
          MLS data is subject to change. Dr. Jan Duffy, license #
          {REAL_ESTATE_LICENSE_NV}
          ,
          {' '}
          {BROKERAGE_NAME}
          .
        </p>
      </div>
    </div>
  );
}
