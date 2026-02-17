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

const path = '/capital-gains-tax-divorce-home-sale';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'Capital Gains Tax Divorce Home Sale | Tax Guide Nevada | Dr. Jan Duffy',
    description: 'Complete guide to capital gains tax on divorce home sale. IRS rules, exemptions, and Nevada-specific considerations. Minimize taxes when selling your home during divorce.',
    keywords: 'capital gains tax divorce home sale, divorce home sale taxes Nevada, capital gains tax divorce, home sale tax divorce',
    alternates: { canonical, languages },
  };
}

export default async function CapitalGainsTaxDivorceHomeSale(props: PageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const baseUrl = 'https://www.yourdivorcerealtor.com';
  const currentPath = '/capital-gains-tax-divorce-home-sale';
  const articleSchema = generateArticleSchema(
    'Capital Gains Tax on Divorce Home Sale: Complete Tax Guide',
    'Complete guide to capital gains tax on divorce home sale. IRS rules, exemptions, and Nevada-specific considerations. Minimize taxes when selling your home during divorce.',
    `${baseUrl}${currentPath}`,
    toSchemaDateTime(CONTENT_LAST_UPDATED),
    toSchemaDateTime(CONTENT_LAST_UPDATED),
  );
  const serviceSchema = generateServiceSchema(
    'Divorce Home Sale Tax Services',
    'Complete guide to capital gains tax on divorce home sale. IRS rules, exemptions, and Nevada-specific considerations.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[articleSchema, serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Capital Gains Tax on Divorce Home Sale: Complete Tax Guide"
        heroSubhead="Understand Tax Implications and Minimize Your Tax Burden"
        currentPath={currentPath}
        datePublished={CONTENT_LAST_UPDATED}
        dateModified={CONTENT_LAST_UPDATED}
      >
        <div className="prose prose-lg mx-auto max-w-4xl">
          <h2>Understanding Capital Gains Tax on Home Sales</h2>
          <p>
            When you sell your home during divorce, you may be subject to capital gains tax on any profit. However, the IRS provides significant exemptions that can eliminate or reduce this tax burden. Understanding these rules helps you minimize taxes and maximize proceeds from your home sale.
          </p>

          <h2>IRS Home Sale Exclusion Rules</h2>
          <p>
            The IRS allows most homeowners to exclude up to $250,000 of capital gains ($500,000 for married couples filing jointly) when selling their primary residence. To qualify, you must:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Owned the home for at least 2 years</li>
            <li>Used it as your primary residence for at least 2 of the last 5 years</li>
            <li>Not excluded gains from another home sale in the past 2 years</li>
          </ul>

          <h2>Divorce and the Home Sale Exclusion</h2>
          <p>
            During divorce, the home sale exclusion rules can be complex. Here's what you need to know:
          </p>

          <h3>Married Filing Jointly</h3>
          <p>
            If you sell the home while still married and file jointly, you can exclude up to $500,000 of capital gains, assuming both spouses meet the ownership and use requirements.
          </p>

          <h3>After Divorce</h3>
          <p>
            After divorce, each spouse can exclude up to $250,000 of capital gains on their share of the sale, as long as they meet the ownership and use requirements individually.
          </p>

          <h3>Transfer Between Spouses</h3>
          <p>
            If one spouse transfers their interest to the other (via buyout or quitclaim deed), this is typically a tax-free transfer under IRS rules. The receiving spouse takes the transferor's basis and holding period.
          </p>

          <h2>Calculating Capital Gains</h2>
          <p>
            Capital gains equal the sale price minus your adjusted basis. Your adjusted basis includes:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Original purchase price</li>
            <li>Cost of improvements (not repairs)</li>
            <li>Certain closing costs</li>
            <li>Minus depreciation (if applicable)</li>
          </ul>
          <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <p className="text-center text-xl font-semibold">
              Capital Gains = Sale Price - Adjusted Basis - Selling Costs
            </p>
          </div>

          <h2>Nevada-Specific Tax Considerations</h2>
          <p>
            Nevada has no state income tax, which means you only need to consider federal capital gains tax. This is a significant advantage compared to states with income tax. However, you still need to understand federal tax implications.
          </p>

          <h2>Timing Considerations</h2>
          <p>
            When you sell during divorce can affect your tax situation:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Before divorce final:</strong>
              {' '}
              May file jointly and use $500,000 exclusion
            </li>
            <li>
              <strong>After divorce final:</strong>
              {' '}
              Each spouse uses $250,000 exclusion
            </li>
            <li>
              <strong>Tax year considerations:</strong>
              {' '}
              Timing can affect which tax year gains are reported
            </li>
          </ul>

          <h2>Minimizing Capital Gains Tax</h2>
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
              Keep records of all home improvements to increase basis
            </li>
            <li>
              <strong>Consider buyout:</strong>
              {' '}
              Transfer between spouses is typically tax-free
            </li>
            <li>
              <strong>Consult tax professional:</strong>
              {' '}
              Work with a CPA or tax attorney for your specific situation
            </li>
          </ul>

          <h2>Common Tax Scenarios</h2>
          <h3>Scenario 1: Selling Before Divorce Final</h3>
          <p>
            If you sell while still married and file jointly, you can exclude up to $500,000. Both spouses must meet ownership and use requirements.
          </p>

          <h3>Scenario 2: Selling After Divorce</h3>
          <p>
            After divorce, each spouse can exclude up to $250,000 on their share, assuming they meet requirements individually.
          </p>

          <h3>Scenario 3: One Spouse Keeps Home</h3>
          <p>
            If one spouse keeps the home via buyout, the transfer is typically tax-free. The receiving spouse takes the transferor's basis and can use the exclusion when they eventually sell.
          </p>

          <h2>Documentation Needed</h2>
          <p>
            Keep detailed records for tax purposes:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Original purchase documents</li>
            <li>Receipts for all home improvements</li>
            <li>Closing statements from sale</li>
            <li>Divorce settlement agreement</li>
            <li>Any transfer documents (quitclaim deeds, etc.)</li>
          </ul>

          <h2>Working with Tax Professionals</h2>
          <p>
            Tax implications of divorce home sales can be complex. Dr. Jan Duffy recommends consulting with a CPA or tax attorney who specializes in divorce to ensure you understand all tax implications and take advantage of available exemptions and strategies.
          </p>

          <h2>Important Tax Deadlines</h2>
          <p>
            Be aware of tax deadlines:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Capital gains are reported in the tax year of the sale</li>
            <li>File taxes by April 15 (or extension deadline)</li>
            <li>Keep records for at least 3 years after filing</li>
            <li>Consider estimated tax payments if gains are significant</li>
          </ul>

          <h2>Get Expert Guidance</h2>
          <p>
            Understanding tax implications is essential for making informed decisions about selling your home during divorce. Dr. Jan Duffy helps you understand the basics and coordinates with tax professionals to ensure you minimize your tax burden.
          </p>
          <div className="my-8 border-l-4 border-blue-600 bg-blue-50 p-6">
            <h3 className="mb-2 text-xl font-semibold">Need Tax Guidance?</h3>
            <p className="mb-4">
              While Dr. Jan Duffy provides real estate expertise, she recommends consulting with a tax professional for specific tax advice. She can coordinate with your CPA or tax attorney to ensure your home sale supports your overall financial strategy.
            </p>
            <CalendlyLink
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Schedule a Consultation
            </CalendlyLink>
          </div>

          <h2>Related Resources</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li><Link href="/divorce-home-sale-taxes-nevada" className="text-blue-600 underline hover:text-blue-700">Divorce Home Sale Taxes Nevada</Link></li>
            <li><Link href="/selling-home-during-divorce" className="text-blue-600 underline hover:text-blue-700">Selling Home During Divorce</Link></li>
            <li><Link href="/divorce-property-division" className="text-blue-600 underline hover:text-blue-700">Property Division Guide</Link></li>
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
