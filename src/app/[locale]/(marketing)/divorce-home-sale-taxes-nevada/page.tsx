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
    title: 'Divorce Home Sale Taxes Nevada | Tax Guide | Dr. Jan Duffy',
    description: 'Complete guide to divorce home sale taxes in Nevada. Capital gains tax, exemptions, Nevada tax considerations, and strategies to minimize taxes. Expert guidance.',
    keywords: 'divorce home sale taxes Nevada, Nevada divorce home sale tax, capital gains tax Nevada divorce, home sale tax divorce',
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
    new Date().toISOString(),
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
        currentPath={currentPath}
      >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Nevada Divorce Home Sale Tax Overview</h2>
        <p>
          When you sell your home during divorce in Nevada, understanding tax implications is essential. Nevada has no state income tax, which is a significant advantage, but you still need to consider federal capital gains tax. This guide explains everything you need to know about taxes when selling your home during divorce in Nevada.
        </p>

        <h2>Nevada Tax Advantage: No State Income Tax</h2>
        <p>
          Nevada has no state income tax, which means:
        </p>
        <ul className="list-disc pl-6 space-y-2">
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
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Married filing jointly:</strong> Up to $500,000 exclusion</li>
          <li><strong>Single or divorced:</strong> Up to $250,000 exclusion per person</li>
        </ul>
        <p>
          <strong>To qualify, you must:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Owned the home for at least 2 years</li>
          <li>Used it as primary residence for 2 of the last 5 years</li>
          <li>Not excluded gains from another home sale in the past 2 years</li>
        </ul>

        <h2>Timing and Tax Implications</h2>
        <h3>Selling Before Divorce is Final</h3>
        <p>
          If you sell while still married and file jointly:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Can exclude up to $500,000 of capital gains</li>
          <li>Both spouses must meet ownership and use requirements</li>
          <li>May provide tax advantage over selling after divorce</li>
        </ul>

        <h3>Selling After Divorce is Final</h3>
        <p>
          After divorce, each spouse can exclude up to $250,000:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Each spouse uses their own $250,000 exclusion</li>
          <li>Total exclusion is still $500,000 (split between spouses)</li>
          <li>Each spouse files separately and claims their share</li>
        </ul>

        <h2>Calculating Capital Gains</h2>
        <p>
          Capital gains = Sale price minus your adjusted basis. Your adjusted basis includes:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Original purchase price</li>
          <li>Cost of improvements (not repairs)</li>
          <li>Certain closing costs from purchase</li>
          <li>Minus depreciation (if applicable)</li>
        </ul>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
          <p className="font-semibold mb-2">Example:</p>
          <ul className="space-y-1 text-sm">
            <li>Sale price: $500,000</li>
            <li>Purchase price: $300,000</li>
            <li>Improvements: $50,000</li>
            <li>Adjusted basis: $350,000</li>
            <li className="border-t pt-2 mt-2">Capital gains: $150,000</li>
            <li>Exclusion: $250,000 (if single) or $500,000 (if married filing jointly)</li>
            <li className="border-t pt-2 mt-2">Taxable gain: $0 (fully excluded)</li>
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
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Meet exclusion requirements:</strong> Ensure you meet ownership and use tests</li>
          <li><strong>Time the sale:</strong> Consider timing relative to divorce finalization</li>
          <li><strong>Document improvements:</strong> Keep records of all improvements to increase basis</li>
          <li><strong>Consider buyout:</strong> Transfer between spouses is typically tax-free</li>
          <li><strong>Plan ahead:</strong> Work with tax professional to plan strategy</li>
        </ul>

        <h2>Documentation Needed</h2>
        <p>
          Keep detailed records for tax purposes:
        </p>
        <ul className="list-disc pl-6 space-y-2">
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
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
          <h3 className="text-xl font-semibold mb-2">Need Tax Guidance?</h3>
          <p className="mb-4">
            Schedule a consultation with Dr. Jan Duffy to discuss your situation. She can coordinate with your tax professional to ensure your home sale supports your overall financial strategy.
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
          <li><Link href="/capital-gains-tax-divorce-home-sale" className="text-blue-600 hover:text-blue-700 underline">Capital Gains Tax Guide</Link></li>
          <li><Link href="/selling-home-during-divorce" className="text-blue-600 hover:text-blue-700 underline">Selling Home During Divorce</Link></li>
          <li><Link href="/financial-planning-divorce-real-estate" className="text-blue-600 hover:text-blue-700 underline">Financial Planning</Link></li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
          <p className="font-semibold mb-2">Disclaimer:</p>
          <p className="text-sm">
            This information is for educational purposes only and does not constitute tax advice. Tax laws are complex and vary by situation. Always consult with a qualified CPA or tax attorney for advice specific to your circumstances.
          </p>
        </div>
      </div>
    </DivorcePageTemplate>
  );
}

