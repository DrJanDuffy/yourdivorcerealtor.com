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

const path = '/privacy';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'Privacy Policy | Dr. Jan Duffy — Las Vegas Divorce Real Estate',
    description:
      'Privacy policy for yourdivorcerealtor.com: how we handle contact information, analytics, scheduling, and third-party tools. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties.',
    alternates: { canonical, languages },
    robots: { index: true, follow: true },
  };
}

export default async function PrivacyPage(props: PageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <StructuredData data={[generateRealEstateAgentSchema()]} />
      <DivorcePageTemplate
        h1="Privacy Policy"
        heroSubhead="How we collect, use, and protect information when you use this website."
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

          <h2>Who we are</h2>
          <p>
            This website is operated by Dr. Jan Duffy, REALTOR®, Nevada license #
            {REAL_ESTATE_LICENSE_NV}
            , with
            {' '}
            {BROKERAGE_NAME}
            . For questions about this policy, contact us using the information below.
          </p>

          <h2>Contact (NAP)</h2>
          <address className="not-italic">
            <p className="font-semibold text-gray-900">Dr. Jan Duffy</p>
            <p>{BROKERAGE_NAME}</p>
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

          <h2>Information we may collect</h2>
          <ul>
            <li>
              <strong>Information you provide</strong>
              {' '}
              when you call, email, submit a form, or book a consultation (for example, name, phone number, and email address).
            </li>
            <li>
              <strong>Technical data</strong>
              {' '}
              such as browser type, device type, and general usage data collected by analytics tools to understand how visitors use the site.
            </li>
          </ul>

          <h2>How we use information</h2>
          <p>
            We use contact and scheduling information to respond to inquiries, provide real estate services you request, and coordinate with professionals involved in your transaction (for example, lenders or attorneys when you ask us to). We do not sell your personal information.
          </p>

          <h2>Cookies and analytics</h2>
          <p>
            This site may use cookies or similar technologies and product analytics (for example, to measure engagement and improve the site). You can control cookies through your browser settings. Where optional analytics are used, we configure them to support privacy-conscious measurement.
          </p>

          <h2>Third-party services</h2>
          <p>
            When you use embedded tools (such as scheduling or property search widgets), those providers may process data under their own policies. We encourage you to review their terms and privacy notices when you interact with their services.
          </p>

          <h2>Children</h2>
          <p>This site is not directed at children under 13, and we do not knowingly collect personal information from children.</p>

          <h2>Changes</h2>
          <p>
            We may update this policy from time to time. The &quot;Last updated&quot; date at the top reflects the latest revision. Continued use of the site after changes means you accept the updated policy.
          </p>

          <h2>Disclaimer</h2>
          <p>
            This policy is for general information and is not legal advice. For questions about your specific situation, consult a qualified attorney or tax professional.
          </p>

          <p>
            <Link href="/contact" className="font-semibold text-blue-700 hover:underline">
              Contact Dr. Jan Duffy
            </Link>
            {' · '}
            <Link href="/terms" className="font-semibold text-blue-700 hover:underline">
              Terms of Use
            </Link>
          </p>
        </div>
      </DivorcePageTemplate>
    </>
  );
}
