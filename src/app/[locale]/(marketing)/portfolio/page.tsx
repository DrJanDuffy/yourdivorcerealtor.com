import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { CalendlyLink } from '@/components/calendly/CalendlyLink';
import { generateLocaleAlternates } from '@/lib/metadata';

type PortfolioProps = {
  params: Promise<{ locale: string }>;
};

const path = '/portfolio';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'Success Stories & Resources | Dr. Jan Duffy',
    description:
      'Learn about Dr. Jan Duffy’s divorce real estate work through testimonials and about pages—this site does not use a public transaction “portfolio” gallery.',
    alternates: { canonical, languages },
    robots: { index: true, follow: true },
  };
}

export default async function Portfolio(props: PortfolioProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Client Experience</h1>
        <p className="mb-8 text-lg leading-relaxed text-pretty text-gray-700">
          For privacy and MLS compliance, we do not publish a browsable gallery of past sales here. For social proof and
          background on how Dr. Jan Duffy helps divorcing homeowners in Las Vegas and Henderson, use the links below.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/testimonials"
            className="inline-flex rounded-xl bg-blue-600 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Testimonials
          </Link>
          <Link
            href="/about"
            className="inline-flex rounded-xl border-2 border-blue-600 px-8 py-3.5 font-semibold text-blue-700 transition-colors hover:bg-blue-50"
          >
            About Dr. Jan
          </Link>
          <CalendlyLink className="inline-flex rounded-xl border border-gray-300 px-8 py-3.5 font-semibold text-gray-800 transition-colors hover:bg-gray-50">
            Schedule a call
          </CalendlyLink>
        </div>
      </div>
    </div>
  );
}
