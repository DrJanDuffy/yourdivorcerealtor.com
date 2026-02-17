import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { CalendlyInline } from '@/components/calendly/CalendlyInline';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { WhatWeDoAndDontDo } from '@/components/divorce/WhatWeDoAndDontDo';
import { FAQAccordion } from '@/components/faq/FAQAccordion';
import { StructuredData } from '@/components/seo/StructuredData';
import { generateLocaleAlternates } from '@/lib/metadata';
import {
  generateFAQPageSchema,
  generateRealEstateAgentSchema,
  generateServiceSchema,
} from '@/lib/schema';

type IContactProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

const whatToExpectFaqs = [
  {
    question: 'Confidential Discussion',
    answer: 'Your consultation is completely confidential. Dr. Jan Duffy will listen to your situation, answer your questions, and provide expert guidance without judgment. She understands the emotional challenges of divorce and provides compassionate, professional service.',
  },
  {
    question: 'Options Analysis',
    answer: 'During your consultation, Dr. Jan Duffy will help you understand all your property options: selling, buying out, co-owning, or refinancing. She\'ll explain the pros and cons of each option and help you determine which path makes the most sense for your situation.',
  },
  {
    question: 'Home Valuation',
    answer: 'If you\'re ready, Dr. Jan Duffy can provide an initial home valuation to help you understand your equity position. This information is essential for property division negotiations and decision-making.',
  },
  {
    question: 'Next Steps Planning',
    answer: 'By the end of your consultation, you\'ll have a clear understanding of your options and a plan for moving forward. Dr. Jan Duffy will outline the next steps and help you feel confident about your decisions.',
  },
];

const path = '/contact';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'Schedule Your Divorce Real Estate Consultation | Contact Dr. Jan Duffy',
    description: 'Schedule a confidential consultation with Dr. Jan Duffy, your Las Vegas divorce real estate specialist. It\'s never too early to discuss your options.',
    keywords: 'divorce realtor consultation, contact divorce realtor las vegas, schedule divorce real estate consultation',
    alternates: { canonical, languages },
  };
}

export default async function Contact(props: IContactProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const serviceSchema = generateServiceSchema(
    'Divorce Real Estate Consultation',
    'Schedule a confidential consultation with Dr. Jan Duffy, your Las Vegas divorce real estate specialist. Expert guidance for property division and home sales during divorce.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();
  const faqPageSchema = generateFAQPageSchema(whatToExpectFaqs);

  return (
    <>
      <StructuredData data={[serviceSchema, realEstateAgentSchema, faqPageSchema]} />
      <DivorcePageTemplate
        h1="Schedule Your Divorce Real Estate Consultation"
        heroSubhead="It's Never Too Early to Discuss Your Options"
        showHomeValue
        currentPath="/contact"
      >
        <div className="mx-auto max-w-5xl">
          {/* Primary action: Schedule or call — above the fold */}
          <section className="mb-14">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
              <div className="lg:col-span-2">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">Pick a time or call now</h2>
                <p className="mb-6 text-gray-600">
                  Choose a 15-minute slot below, or talk with Dr. Jan Duffy directly.
                </p>
                <a
                  href="tel:+17022221964"
                  className="mb-6 inline-flex items-center gap-2 rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-md transition-colors hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
                >
                  <span aria-hidden>📞</span>
                  Call (702) 222-1964
                </a>
                <div className="rounded-lg border border-blue-100 bg-blue-50/50 p-4">
                  <p className="text-sm font-semibold text-gray-800">Dr. Jan Duffy, REALTOR®</p>
                  <p className="text-sm text-gray-600">Berkshire Hathaway HomeServices Nevada Properties</p>
                  <p className="mt-1 text-sm text-gray-600">601 N. Pecos, Family Courts and Services Center</p>
                  <p className="text-sm text-gray-600">Las Vegas, NV 89155 · Monday - Friday, 8 a.m. - 4 p.m.</p>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Understand your property options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Get an accurate home valuation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Plan next steps with confidence</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-3">
                <h2 className="mb-2 text-2xl font-bold text-gray-900">Schedule your consultation</h2>
                <p className="mb-4 text-gray-600">
                  Select a time that works for you. Free 15-minute private conversation.
                </p>
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                  <CalendlyInline />
                </div>
              </div>
            </div>
          </section>

          {/* What to expect — accordion */}
          <section className="mb-14">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">What to expect in your consultation</h2>
            <FAQAccordion faqs={whatToExpectFaqs} />
          </section>

          {/* What we do / don't do — sets expectations before scheduling */}
          <section className="mb-14 rounded-xl border border-gray-200 bg-gray-50/50 p-6">
            <WhatWeDoAndDontDo variant="compact" />
          </section>

          {/* Second scheduler — if above fold is scrolled past */}
          <section className="mb-14">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Pick a time that works for you</h2>
            <p className="mb-6 text-gray-600">
              Choose a 15-minute slot below. Free, confidential consultation with Dr. Jan Duffy.
            </p>
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <CalendlyInline />
            </div>
          </section>

          {/* Short supporting copy */}
          <section className="prose prose-lg max-w-none border-t border-gray-200 pt-10">
            <h2 className="text-xl font-bold text-gray-900">Questions to bring</h2>
            <p className="text-gray-700">
              Consider asking about your home’s value, equity, options (sell, buyout, co-own), process timeline, and fees. Dr. Jan Duffy will answer honestly and help you decide next steps.
            </p>
            <p className="mt-6 text-center text-lg font-semibold text-gray-800">
              Schedule above or call (702) 222-1964. For a home valuation, schedule a call—Dr. Jan provides valuations during your consultation.
            </p>
          </section>
        </div>
      </DivorcePageTemplate>
    </>
  );
}
