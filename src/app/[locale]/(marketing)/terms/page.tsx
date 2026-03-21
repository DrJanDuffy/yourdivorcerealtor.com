import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import { generateLocaleAlternates } from '@/lib/metadata';
import { generateRealEstateAgentSchema } from '@/lib/schema';
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

type PageProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

const path = '/terms';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'Terms of Use | Dr. Jan Duffy — Las Vegas Divorce Real Estate',
    description:
      'Terms of use for yourdivorcerealtor.com: acceptable use, disclaimers, MLS compliance, and contact information. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties.',
    alternates: { canonical, languages },
    robots: { index: true, follow: true },
  };
}

export default async function TermsPage(props: PageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <StructuredData data={[generateRealEstateAgentSchema()]} />
      <DivorcePageTemplate
        h1="Terms of Use"
        heroSubhead="Rules and disclaimers for using this website and working with our team."
        currentPath={path}
        showHomeValue={false}
        showRelatedLinks={false}
      >
        <div className="prose prose-lg mx-auto max-w-4xl">
          <p className="text-sm text-gray-600">
            <strong>Last updated:</strong>
            {' '}
            {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h2>Agreement</h2>
          <p>
            By accessing or using this website, you agree to these Terms of Use. If you do not agree, please do not use the site.
          </p>

          <h2>Business information (NAP)</h2>
          <address className="not-italic">
            <p className="font-semibold text-gray-900">Dr. Jan Duffy</p>
            <p>{BROKERAGE_NAME}</p>
            <p>
              Nevada real estate license #
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
              <a href={SITE_PHONE_TEL} className="text-blue-700 hover:underline">
                {SITE_PHONE_DISPLAY}
              </a>
            </p>
            <p>
              <a href={`mailto:${SITE_EMAIL}`} className="text-blue-700 hover:underline">
                {SITE_EMAIL}
              </a>
            </p>
          </address>

          <h2>Not legal or tax advice</h2>
          <p>
            Content on this site is for general information about real estate and divorce-related property topics. It is not legal, tax, or investment advice. Always consult a qualified Nevada attorney or tax professional for advice about your case.
          </p>

          <h2>Real estate and MLS</h2>
          <p>
            Where listing data or IDX content appears, it is provided subject to MLS rules and applicable disclaimers shown on those pages. Listing information is deemed reliable but not guaranteed.
          </p>

          <h2>No guarantee of results</h2>
          <p>
            Past performance, testimonials, and examples do not guarantee future results. Timing, price, and outcomes depend on market conditions, court orders, and the parties involved.
          </p>

          <h2>Intellectual property</h2>
          <p>
            Text, images, logos (where permitted), and layout are protected by applicable intellectual property laws. You may not copy or reuse site content for commercial purposes without written permission, except as allowed by fair use.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, Dr. Jan Duffy and
            {' '}
            {BROKERAGE_NAME}
            {' '}
            are not liable for any indirect, incidental, or consequential damages arising from use of this website or reliance on its content.
          </p>

          <h2>Links</h2>
          <p>
            Links to third-party sites are provided for convenience. We do not control those sites and are not responsible for their content or policies.
          </p>

          <h2>Changes</h2>
          <p>
            We may update these terms periodically. Continued use of the site after updates constitutes acceptance of the revised terms.
          </p>

          <p>
            <Link href="/contact" className="font-semibold text-blue-700 hover:underline">
              Contact Dr. Jan Duffy
            </Link>
            {' · '}
            <Link href="/privacy" className="font-semibold text-blue-700 hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </DivorcePageTemplate>
    </>
  );
}
