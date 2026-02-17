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

const path = '/divorce-home-sale-taxes-nevada';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'Divorce Home Sale Taxes Nevada | Tax Guide | Dr. Jan Duffy',
    description: 'Complete guide to divorce home sale taxes in Nevada. Capital gains tax, exemptions, Nevada tax considerations, and strategies to minimize taxes. Expert guidance.',
    keywords: 'divorce home sale taxes Nevada, Nevada divorce home sale tax, capital gains tax Nevada divorce, home sale tax divorce',
    alternates: { canonical, languages },
  };
}

export default async function DivorceHomeSaleTaxesNevada(props: PageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const baseUrl = 'https://www.yourdivorcerealtor.com';
  const currentPath = '/divorce-home-sale-taxes-nevada';
  const articleSchema = generateArticleSchema(
    'Divorce Home Sale Taxes Nevada: Complete Tax Guide',
    'Complete guide to divorce home sale taxes in Nevada. Capital gains tax, exemptions, Nevada tax considerations, and strategies to minimize taxes.',
    `${baseUrl}${currentPath}`,
    toSchemaDateTime(CONTENT_LAST_UPDATED),
    toSchemaDateTime(CONTENT_LAST_UPDATED),
  );
  const serviceSchema = generateServiceSchema(
    'Nevada Divorce Home Sale Tax Services',
    'Complete guide to divorce home sale taxes in Nevada. Capital gains tax, exemptions, Nevada tax considerations, and strategies to minimize taxes.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[articleSchema, serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Divorce Home Sale Taxes Nevada: Complete Tax Guide"
        heroSubhead="Understand Tax Implications and Minimize Your Tax Burden"
        datePublished={CONTENT_LAST_UPDATED}
        dateModified={CONTENT_LAST_UPDATED}
        currentPath={currentPath}
      >
        <div className="prose prose-lg mx-auto max-w-4xl">
          <h2>Nevada Divorce Home Sale Tax Overview</h2>
          <p>
            When you sell your home during divorce in Nevada, understanding tax implications is essential. Nevada has no state income tax, which is a significant advantage, but you still need to consider federal capital gains tax. This guide explains everything you need to know about taxes when selling your home during divorce in Nevada.
          </p>

          <h2>Nevada Tax Advantage: No State Income Tax</h2>
          <p>
            Nevada has no state income tax, which means:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>You only pay federal capital gains tax (not state tax)</li>
            <li>This can save thousands compared to states with income tax</li>
            <li>Simpler tax situation overall</li>
            <li>More proceeds available after taxes</li>
          </ul>
          <p>
            However, you still need to understand and plan for federal capital gains tax.
          </p>

          <h2>Federal Capital Gains Tax</h2>
          <p>
            Federal capital gains tax applies to profit from selling your home. The good news is that most homeowners can exclude significant amounts from taxation.
          </p>

          <h3>Home Sale Exclusion</h3>
          <p>
            The IRS allows you to exclude capital gains from selling your primary residence:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Married filing jointly:</strong>
              {' '}
              Up to $500,000 exclusion
            </li>
            <li>
              <strong>Single or divorced:</strong>
              {' '}
              Up to $250,000 exclusion per person
            </li>
          </ul>
          <p>
            <strong>To qualify, you must:</strong>
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Owned the home for at least 2 years</li>
            <li>Used it as primary residence for 2 of the last 5 years</li>
            <li>Not excluded gains from another home sale in the past 2 years</li>
          </ul>

          <h2>Timing and Tax Implications</h2>
          <h3>Selling Before Divorce is Final</h3>
          <p>
            If you sell while still married and file jointly:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Can exclude up to $500,000 of capital gains</li>
            <li>Both spouses must meet ownership and use requirements</li>
            <li>May provide tax advantage over selling after divorce</li>
          </ul>

          <h3>Selling After Divorce is Final</h3>
          <p>
            After divorce, each spouse can exclude up to $250,000:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Each spouse uses their own $250,000 exclusion</li>
            <li>Total exclusion is still $500,000 (split between spouses)</li>
            <li>Each spouse files separately and claims their share</li>
          </ul>

          <h2>Calculating Capital Gains</h2>
          <p>
            Capital gains = Sale price minus your adjusted basis. Your adjusted basis includes:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Original purchase price</li>
            <li>Cost of improvements (not repairs)</li>
            <li>Certain closing costs from purchase</li>
            <li>Minus depreciation (if applicable)</li>
          </ul>
          <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <p className="mb-2 font-semibold">Example:</p>
            <ul className="space-y-1 text-sm">
              <li>Sale price: $500,000</li>
              <li>Purchase price: $300,000</li>
              <li>Improvements: $50,000</li>
              <li>Adjusted basis: $350,000</li>
              <li className="mt-2 border-t pt-2">Capital gains: $150,000</li>
              <li>Exclusion: $250,000 (if single) or $500,000 (if married filing jointly)</li>
              <li className="mt-2 border-t pt-2">Taxable gain: $0 (fully excluded)</li>
            </ul>
          </div>

          <h2>Nevada-Specific Tax Considerations</h2>
          <h3>No State Capital Gains Tax</h3>
          <p>
            Nevada doesn't tax capital gains, which means you only pay federal tax. This is a significant advantage.
          </p>

          <h3>Property Tax Considerations</h3>
          <p>
            Property taxes are prorated at closing, but these are typically handled in the sale transaction and don't create additional tax liability for the sale itself.
          </p>

          <h2>Minimizing Taxes</h2>
          <p>
            Strategies to minimize or eliminate capital gains tax:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Meet exclusion requirements:</strong>
              {' '}
              Ensure you meet ownership and use tests
            </li>
            <li>
              <strong>Time the sale:</strong>
              {' '}
              Consider timing relative to divorce finalization
            </li>
            <li>
              <strong>Document improvements:</strong>
              {' '}
              Keep records of all improvements to increase basis
            </li>
            <li>
              <strong>Consider buyout:</strong>
              {' '}
              Transfer between spouses is typically tax-free
            </li>
            <li>
              <strong>Plan ahead:</strong>
              {' '}
              Work with tax professional to plan strategy
            </li>
          </ul>

          <h2>Documentation Needed</h2>
          <p>
            Keep detailed records for tax purposes:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Original purchase documents</li>
            <li>Receipts for all home improvements</li>
            <li>Closing statements from sale</li>
            <li>Divorce decree or settlement agreement</li>
            <li>Any transfer documents</li>
          </ul>

          <h2>Working with Tax Professionals</h2>
          <p>
            Tax implications can be complex, especially during divorce. Dr. Jan Duffy recommends consulting with a CPA or tax attorney who specializes in divorce to ensure you understand all tax implications and take advantage of available exemptions and strategies.
          </p>

          <h2>Get Expert Guidance</h2>
          <p>
            Understanding tax implications is essential for making informed decisions about selling your home during divorce. While Dr. Jan Duffy provides real estate expertise, she recommends consulting with a tax professional for specific tax advice.
          </p>
          <div className="my-8 border-l-4 border-blue-600 bg-blue-50 p-6">
            <h3 className="mb-2 text-xl font-semibold">Need Tax Guidance?</h3>
            <p className="mb-4">
              Schedule a consultation with Dr. Jan Duffy to discuss your situation. She can coordinate with your tax professional to ensure your home sale supports your overall financial strategy.
            </p>
            <CalendlyLink
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Schedule Your Consultation
            </CalendlyLink>
          </div>

          <h2>Related Resources</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li><Link href="/capital-gains-tax-divorce-home-sale" className="text-blue-600 underline hover:text-blue-700">Capital Gains Tax Guide</Link></li>
            <li><Link href="/selling-home-during-divorce" className="text-blue-600 underline hover:text-blue-700">Selling Home During Divorce</Link></li>
            <li><Link href="/financial-planning-divorce-real-estate" className="text-blue-600 underline hover:text-blue-700">Financial Planning</Link></li>
          </ul>

          <div className="my-8 border-l-4 border-yellow-600 bg-yellow-50 p-6">
            <p className="mb-2 font-semibold">Disclaimer:</p>
            <p className="text-sm">
              This information is for educational purposes only and does not constitute tax advice. Tax laws are complex and vary by situation. Always consult with a qualified CPA or tax attorney for advice specific to your circumstances.
            </p>
          </div>
        </div>
      </DivorcePageTemplate>
    </>
  );
}
