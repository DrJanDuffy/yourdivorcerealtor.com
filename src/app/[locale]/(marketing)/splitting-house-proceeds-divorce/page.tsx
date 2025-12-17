import type { Metadata } from 'next';
import type { PageProps } from '@/types';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import {
  generateArticleSchema,
  generateServiceSchema,
  generateRealEstateAgentSchema,
} from '@/lib/schema';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Splitting House Proceeds Divorce | How Proceeds Are Divided | Dr. Jan Duffy',
    description: 'Complete guide to splitting house proceeds in divorce. Nevada community property laws, 50/50 division, calculating each spouse\'s share, and distribution process. Expert guidance.',
    keywords: 'splitting house proceeds divorce, dividing home sale proceeds divorce, divorce proceeds distribution, house sale proceeds divorce',
  };
}

export default async function SplittingHouseProceedsDivorce(props: PageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const baseUrl = 'https://www.yourdivorcerealtor.com';
  const currentPath = '/splitting-house-proceeds-divorce';
  const articleSchema = generateArticleSchema(
    'Splitting House Proceeds in Divorce: Complete Guide',
    'Complete guide to splitting house proceeds in divorce. Nevada community property laws, 50/50 division, calculating each spouse\'s share, and distribution process.',
    `${baseUrl}${currentPath}`,
    new Date().toISOString(),
  );
  const serviceSchema = generateServiceSchema(
    'Divorce Proceeds Distribution Services',
    'Complete guide to splitting house proceeds in divorce. Nevada community property laws, 50/50 division, calculating each spouse\'s share, and distribution process.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[articleSchema, serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Splitting House Proceeds in Divorce: Complete Guide"
        heroSubhead="Understanding How Proceeds Are Divided Fairly"
        showHomeValue
        currentPath={currentPath}
      >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>How House Proceeds Are Split in Divorce</h2>
        <p>
          When you sell your house during divorce, the proceeds must be divided between spouses. In Nevada, as a community property state, proceeds are typically divided equally (50/50), but the calculation can be complex. Understanding how proceeds are calculated and distributed helps ensure fair outcomes.
        </p>

        <h2>Calculating Net Proceeds</h2>
        <p>
          Before splitting proceeds, you must calculate net proceeds—the amount remaining after all expenses are paid:
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
          <p className="text-xl font-semibold text-center mb-4">Net Proceeds Calculation</p>
          <div className="space-y-2">
            <p><strong>Sale Price:</strong> $500,000</p>
            <p className="ml-4">- Mortgage Payoff: $300,000</p>
            <p className="ml-4">- Closing Costs: $15,000</p>
            <p className="ml-4">- Repairs/Credits: $5,000</p>
            <p className="ml-4">- Other Liens: $0</p>
            <p className="border-t pt-2 mt-2"><strong>Net Proceeds:</strong> $180,000</p>
            <p className="border-t pt-2 mt-2"><strong>Each Spouse's Share (50/50):</strong> $90,000</p>
          </div>
        </div>

        <h2>Nevada Community Property Division</h2>
        <p>
          In Nevada, community property is divided equally (50/50). This means:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Net proceeds are typically split 50/50</li>
          <li>This applies regardless of who paid the mortgage</li>
          <li>Both spouses have equal rights to community property</li>
          <li>Court can order different division if circumstances warrant</li>
        </ul>

        <h2>What Gets Deducted from Sale Price</h2>
        <p>
          Several expenses are deducted before proceeds are split:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Mortgage payoff:</strong> Outstanding loan balance</li>
          <li><strong>Closing costs:</strong> Title, escrow, recording fees</li>
          <li><strong>Real estate commissions:</strong> Agent fees (typically 5-6%)</li>
          <li><strong>Repairs/credits:</strong> Agreed-upon repairs or buyer credits</li>
          <li><strong>Liens:</strong> Any liens against the property</li>
          <li><strong>Property taxes:</strong> Prorated property taxes</li>
          <li><strong>HOA fees:</strong> Prorated HOA fees (if applicable)</li>
        </ul>

        <h2>Distribution Process</h2>
        <p>
          Proceeds are typically distributed at closing:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Sale closes:</strong> Buyer pays purchase price</li>
          <li><strong>Expenses paid:</strong> Mortgage, closing costs, commissions deducted</li>
          <li><strong>Net proceeds calculated:</strong> Remaining amount determined</li>
          <li><strong>Distribution per agreement:</strong> Proceeds distributed according to settlement agreement or court order</li>
          <li><strong>Separate accounts:</strong> Each spouse receives their share</li>
        </ol>

        <h2>When Division Isn't 50/50</h2>
        <p>
          While 50/50 is typical in Nevada, division may differ if:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Separate property involved:</strong> One spouse owned home before marriage</li>
          <li><strong>Separate contributions:</strong> One spouse contributed separate property funds</li>
          <li><strong>Court order:</strong> Court orders different division</li>
          <li><strong>Settlement agreement:</strong> Spouses agree to different division</li>
          <li><strong>Other assets:</strong> Division adjusted for other property division</li>
        </ul>

        <h2>Tax Implications</h2>
        <p>
          Each spouse is responsible for their share of capital gains tax (if applicable). The $250,000 exclusion applies to each spouse's share if they meet ownership and use requirements.
        </p>
        <p className="mt-4">
          Learn more: <Link href="/capital-gains-tax-divorce-home-sale" className="text-blue-600 hover:text-blue-700 underline">Capital Gains Tax Guide</Link>
        </p>

        <h2>Common Questions</h2>
        <div className="space-y-4 mt-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">What if one spouse paid more of the mortgage?</h3>
            <p>
              In Nevada, it doesn't matter who made mortgage payments during marriage—equity acquired during marriage is community property and divided equally. However, if payments came from separate property funds, that may affect division.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">What if the house was owned before marriage?</h3>
            <p>
              If one spouse owned the home before marriage, they may retain pre-marital equity, but community property contributions (payments, improvements) create community property interest that must be divided.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">When do we get the proceeds?</h3>
            <p>
              Proceeds are typically distributed at closing. Each spouse receives their share via wire transfer or check, usually within 1-2 business days of closing.
            </p>
          </div>
        </div>

        <h2>Get Expert Help</h2>
        <p>
          Understanding how proceeds are split and ensuring fair distribution requires accurate calculations and proper documentation. Dr. Jan Duffy provides detailed calculations and coordinates with attorneys to ensure proceeds are distributed correctly.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
          <h3 className="text-xl font-semibold mb-2">Need Help Understanding Proceeds Division?</h3>
          <p className="mb-4">
            Schedule a consultation with Dr. Jan Duffy to get accurate calculations and understand how proceeds will be split in your specific situation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Schedule Your Consultation
          </Link>
        </div>

        <h2>Related Resources</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/divorce-home-equity-split" className="text-blue-600 hover:text-blue-700 underline">Home Equity Split</Link></li>
          <li><Link href="/divorce-property-division" className="text-blue-600 hover:text-blue-700 underline">Property Division Guide</Link></li>
          <li><Link href="/divorce-home-valuation" className="text-blue-600 hover:text-blue-700 underline">Get Your Home Valuation</Link></li>
          <li><Link href="/selling-home-during-divorce" className="text-blue-600 hover:text-blue-700 underline">Selling Home During Divorce</Link></li>
        </ul>
      </div>
    </DivorcePageTemplate>
    </>
  );
}
