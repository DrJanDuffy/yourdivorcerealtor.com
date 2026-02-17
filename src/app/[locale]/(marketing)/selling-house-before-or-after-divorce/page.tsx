import type { Metadata } from 'next';
import type { PageProps } from '@/types';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { CalendlyLink } from '@/components/calendly/CalendlyLink';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import { CONTENT_LAST_UPDATED, toSchemaDateTime } from '@/lib/content-dates';
import { generateLocaleAlternates } from '@/lib/metadata';
import {
  generateArticleSchema,
  generateRealEstateAgentSchema,
  generateServiceSchema,
} from '@/lib/schema';

export const dynamic = 'force-dynamic';

const path = '/selling-house-before-or-after-divorce';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'Selling House Before or After Divorce | Timing Guide | Dr. Jan Duffy',
    description: 'Should you sell house before or after divorce? Pros and cons, tax implications, timeline considerations, and financial impact. Expert guidance from Las Vegas divorce real estate specialist.',
    keywords: 'selling house before or after divorce, when to sell house divorce, divorce home sale timing, sell house before divorce final',
    alternates: { canonical, languages },
  };
}

export default async function SellingHouseBeforeOrAfterDivorce(props: PageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const baseUrl = 'https://www.yourdivorcerealtor.com';
  const currentPath = '/selling-house-before-or-after-divorce';
  const articleSchema = generateArticleSchema(
    'Selling House Before or After Divorce: Timing Your Sale',
    'Should you sell house before or after divorce? Pros and cons, tax implications, timeline considerations, and financial impact.',
    `${baseUrl}${currentPath}`,
    toSchemaDateTime(CONTENT_LAST_UPDATED),
    toSchemaDateTime(CONTENT_LAST_UPDATED),
  );
  const serviceSchema = generateServiceSchema(
    'Divorce Home Sale Timing Services',
    'Should you sell house before or after divorce? Pros and cons, tax implications, timeline considerations, and financial impact.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[articleSchema, serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Selling House Before or After Divorce: Timing Your Sale"
        heroSubhead="Make Informed Decisions About When to Sell"
        showHomeValue
        currentPath={currentPath}
        datePublished={CONTENT_LAST_UPDATED}
        dateModified={CONTENT_LAST_UPDATED}
      >
        <div className="prose prose-lg mx-auto max-w-4xl">
          <h2>Timing Your Home Sale During Divorce</h2>
          <p>
            One of the most important decisions in divorce real estate is when to sell your home. Should you sell before the divorce is final, or wait until after? The timing affects taxes, proceeds distribution, legal requirements, and your ability to move forward. Understanding the pros and cons of each approach helps you make informed decisions.
          </p>

          <h2>Selling Before Divorce is Final</h2>
          <h3>Advantages of Selling Before Divorce</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Higher tax exclusion:</strong>
              {' '}
              Married couples filing jointly can exclude up to $500,000 of capital gains (vs. $250,000 each after divorce)
            </li>
            <li>
              <strong>Clean financial break:</strong>
              {' '}
              Proceeds can be divided immediately, eliminating ongoing financial entanglements
            </li>
            <li>
              <strong>Faster resolution:</strong>
              {' '}
              Allows both parties to move forward more quickly
            </li>
            <li>
              <strong>Market timing:</strong>
              {' '}
              Can take advantage of current market conditions
            </li>
            <li>
              <strong>Reduced conflict:</strong>
              {' '}
              Selling while still negotiating may reduce conflict over the house
            </li>
          </ul>

          <h3>Disadvantages of Selling Before Divorce</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Requires agreement:</strong>
              {' '}
              Both spouses must agree to sell, which may not be possible
            </li>
            <li>
              <strong>Coordination challenges:</strong>
              {' '}
              Requires coordination during an emotionally difficult time
            </li>
            <li>
              <strong>Proceeds distribution:</strong>
              {' '}
              Need clear agreement on how proceeds will be divided
            </li>
            <li>
              <strong>Legal complexity:</strong>
              {' '}
              May require court approval or settlement agreement
            </li>
            <li>
              <strong>Timing pressure:</strong>
              {' '}
              May feel rushed to sell before divorce finalizes
            </li>
          </ul>

          <h2>Selling After Divorce is Final</h2>
          <h3>Advantages of Selling After Divorce</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Clear legal framework:</strong>
              {' '}
              Divorce decree specifies how proceeds will be divided
            </li>
            <li>
              <strong>Less emotional:</strong>
              {' '}
              Divorce is finalized, reducing emotional dynamics
            </li>
            <li>
              <strong>Individual tax planning:</strong>
              {' '}
              Each spouse can plan their own tax strategy
            </li>
            <li>
              <strong>More time:</strong>
              {' '}
              Can take time to prepare home and wait for better market conditions
            </li>
            <li>
              <strong>Court order protection:</strong>
              {' '}
              Sale terms may be court-ordered, providing protection
            </li>
          </ul>

          <h3>Disadvantages of Selling After Divorce</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Lower tax exclusion:</strong>
              {' '}
              Each spouse can only exclude $250,000 (vs. $500,000 jointly)
            </li>
            <li>
              <strong>Ongoing entanglements:</strong>
              {' '}
              Must continue coordinating until sale completes
            </li>
            <li>
              <strong>Delayed resolution:</strong>
              {' '}
              Financial closure is delayed
            </li>
            <li>
              <strong>Market risk:</strong>
              {' '}
              Property values may change while waiting
            </li>
            <li>
              <strong>Ongoing expenses:</strong>
              {' '}
              Both spouses remain responsible for expenses until sale
            </li>
          </ul>

          <h2>Tax Implications Comparison</h2>
          <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-3 font-semibold">Tax Exclusion Comparison</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-2 text-left">Scenario</th>
                  <th className="p-2 text-left">Exclusion Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">Married, filing jointly (before divorce)</td>
                  <td className="p-2">$500,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">After divorce (each spouse)</td>
                  <td className="p-2">$250,000 each</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong>Example:</strong>
            {' '}
            If you have $400,000 in capital gains:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Before divorce:</strong>
              {' '}
              Entire $400,000 excluded (filing jointly)
            </li>
            <li>
              <strong>After divorce:</strong>
              {' '}
              Each spouse excludes $200,000 (total $400,000 still excluded, but split)
            </li>
          </ul>
          <p className="mt-4">
            Learn more:
            {' '}
            <Link href="/capital-gains-tax-divorce-home-sale" className="text-blue-600 underline hover:text-blue-700">Capital Gains Tax Guide</Link>
          </p>

          <h2>Timeline Considerations</h2>
          <p>
            Consider these timeline factors when deciding when to sell:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Divorce timeline:</strong>
              {' '}
              How long until divorce is final?
            </li>
            <li>
              <strong>Market conditions:</strong>
              {' '}
              Is it a good time to sell now or wait?
            </li>
            <li>
              <strong>Property condition:</strong>
              {' '}
              Does home need preparation before selling?
            </li>
            <li>
              <strong>Financial needs:</strong>
              {' '}
              Do you need proceeds immediately?
            </li>
            <li>
              <strong>Children's needs:</strong>
              {' '}
              Do children need stability during divorce process?
            </li>
          </ul>

          <h2>Financial Implications</h2>
          <h3>Ongoing Expenses</h3>
          <p>
            While waiting to sell, both spouses typically remain responsible for:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Mortgage payments</li>
            <li>Property taxes</li>
            <li>Homeowners insurance</li>
            <li>Maintenance and repairs</li>
            <li>Utilities (if home is occupied)</li>
          </ul>

          <h3>Market Risk</h3>
          <p>
            Property values can change while waiting. Market conditions may improve or decline, affecting your sale price. Dr. Jan Duffy helps you understand current market conditions and make informed timing decisions.
          </p>

          <h2>Legal Requirements</h2>
          <p>
            Legal requirements vary based on timing:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Before divorce:</strong>
              {' '}
              May require both spouses' agreement or court approval
            </li>
            <li>
              <strong>After divorce:</strong>
              {' '}
              Divorce decree may specify sale terms and timeline
            </li>
            <li>
              <strong>Court orders:</strong>
              {' '}
              Must comply with any existing court orders
            </li>
            <li>
              <strong>Settlement agreements:</strong>
              {' '}
              Must follow terms of any settlement agreement
            </li>
          </ul>

          <h2>Making the Decision</h2>
          <p>
            Consider these factors when deciding:
          </p>
          <ol className="list-decimal space-y-2 pl-6">
            <li>
              <strong>Tax implications:</strong>
              {' '}
              Calculate potential tax savings of selling before divorce
            </li>
            <li>
              <strong>Agreement possibility:</strong>
              {' '}
              Can both spouses agree to sell now?
            </li>
            <li>
              <strong>Market conditions:</strong>
              {' '}
              Is it a good time to sell in Las Vegas market?
            </li>
            <li>
              <strong>Financial needs:</strong>
              {' '}
              Do you need proceeds immediately?
            </li>
            <li>
              <strong>Emotional readiness:</strong>
              {' '}
              Are both parties ready to sell?
            </li>
            <li>
              <strong>Legal requirements:</strong>
              {' '}
              What does your attorney recommend?
            </li>
          </ol>

          <h2>Working with Your Attorney</h2>
          <p>
            Your family law attorney can help you understand legal implications of timing. They can advise on:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Whether court approval is needed</li>
            <li>How to structure sale in settlement agreement</li>
            <li>Tax implications and planning</li>
            <li>Proceeds distribution arrangements</li>
          </ul>

          <h2>Get Expert Guidance</h2>
          <p>
            Deciding when to sell is complex and depends on your specific situation. Dr. Jan Duffy helps you understand market conditions, tax implications, and timing considerations so you can make informed decisions. She coordinates with your attorney to ensure timing supports your overall divorce resolution.
          </p>
          <div className="my-8 border-l-4 border-blue-600 bg-blue-50 p-6">
            <h3 className="mb-2 text-xl font-semibold">Need Help Deciding When to Sell?</h3>
            <p className="mb-4">
              Schedule a confidential consultation with Dr. Jan Duffy to discuss your situation, market conditions, and timing options. She'll help you understand the pros and cons of selling before or after divorce.
            </p>
            <CalendlyLink
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Schedule Your Consultation
            </CalendlyLink>
          </div>

          <h2>Related Resources</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li><Link href="/selling-home-during-divorce" className="text-blue-600 underline hover:text-blue-700">Selling Home During Divorce</Link></li>
            <li><Link href="/capital-gains-tax-divorce-home-sale" className="text-blue-600 underline hover:text-blue-700">Tax Implications Guide</Link></li>
            <li><Link href="/divorce-home-sale-timeline" className="text-blue-600 underline hover:text-blue-700">Sale Timeline Guide</Link></li>
            <li><Link href="/divorce-property-division" className="text-blue-600 underline hover:text-blue-700">Property Division Options</Link></li>
            <li><Link href="/financial-planning-divorce-real-estate" className="text-blue-600 underline hover:text-blue-700">Financial Planning</Link></li>
          </ul>
        </div>
      </DivorcePageTemplate>
    </>
  );
}
