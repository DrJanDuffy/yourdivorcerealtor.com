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
    title: 'Selling House During Divorce Nevada | Ultimate Guide | Dr. Jan Duffy',
    description: 'Complete ultimate guide to selling house during divorce in Nevada. Nevada laws, community property, court orders, timelines, and expert strategies. Everything you need to know.',
    keywords: 'selling house during divorce Nevada, Nevada divorce home sale, divorce property division Nevada, Nevada community property divorce',
  };
}

export default async function SellingHouseDuringDivorceNevadaGuide(props: PageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const baseUrl = 'https://www.yourdivorcerealtor.com';
  const currentPath = '/selling-house-during-divorce-nevada-guide';
  const articleSchema = generateArticleSchema(
    'Ultimate Guide: Selling House During Divorce in Nevada',
    'Complete ultimate guide to selling house during divorce in Nevada. Nevada laws, community property, court orders, timelines, and expert strategies. Everything you need to know.',
    `${baseUrl}${currentPath}`,
    new Date().toISOString(),
  );
  const serviceSchema = generateServiceSchema(
    'Nevada Divorce Real Estate Guide Services',
    'Complete ultimate guide to selling house during divorce in Nevada. Nevada laws, community property, court orders, timelines, and expert strategies.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[articleSchema, serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Ultimate Guide: Selling House During Divorce in Nevada"
        heroSubhead="Complete Guide to Nevada Divorce Real Estate"
        showHomeValue
        currentPath={currentPath}
      >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Introduction: Nevada Divorce Real Estate</h2>
        <p>
          Selling a house during divorce in Nevada involves unique considerations due to Nevada's community property laws, court processes, and real estate market. This comprehensive guide covers everything you need to know about selling your home during divorce in Nevada, from legal requirements to practical strategies.
        </p>

        <h2>Nevada Community Property Laws</h2>
        <p>
          Nevada is a community property state, meaning property acquired during marriage is generally considered community property and divided equally (50/50) during divorce. This affects how your home is valued, divided, and sold.
        </p>
        <p>
          <strong>Key points about Nevada community property:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Property acquired during marriage is community property</li>
          <li>Community property is divided equally (50/50)</li>
          <li>Separate property (pre-marital or inheritance) remains with original owner</li>
          <li>Both spouses typically have equal rights to community property</li>
          <li>Court can order sale if spouses can't agree</li>
        </ul>

        <h2>Nevada Divorce Property Division Process</h2>
        <p>
          The process for selling a house during divorce in Nevada typically involves:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Property identification:</strong> Determine if home is community or separate property</li>
          <li><strong>Valuation:</strong> Get accurate home valuation for property division</li>
          <li><strong>Division decision:</strong> Decide to sell, buyout, or co-own</li>
          <li><strong>Agreement or court order:</strong> Reach agreement or obtain court order</li>
          <li><strong>Sale execution:</strong> List and sell property according to agreement/order</li>
          <li><strong>Proceeds distribution:</strong> Distribute proceeds per agreement/order</li>
        </ol>

        <h2>Court-Ordered Sales in Nevada</h2>
        <p>
          If spouses can't agree on selling, Nevada courts can order the sale. This is called a "partition sale" or "forced sale." The court may:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Order the property sold</li>
          <li>Appoint a neutral real estate agent</li>
          <li>Specify sale terms and timeline</li>
          <li>Order proceeds distribution</li>
        </ul>
        <p className="mt-4">
          Learn more: <Link href="/court-ordered-home-sale" className="text-blue-600 hover:text-blue-700 underline">Court-Ordered Home Sale</Link>
        </p>

        <h2>Nevada Real Estate Market Considerations</h2>
        <p>
          Las Vegas and Nevada real estate markets have unique characteristics that affect divorce home sales:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Market volatility:</strong> Las Vegas market can be volatile</li>
          <li><strong>Seasonal patterns:</strong> Sales vary by season</li>
          <li><strong>Neighborhood variations:</strong> Different areas have different market conditions</li>
          <li><strong>Price ranges:</strong> Market conditions vary by price range</li>
        </ul>
        <p>
          Dr. Jan Duffy's expertise in the Las Vegas market ensures accurate valuations and realistic timelines for your divorce home sale.
        </p>

        <h2>Complete Resource Guide</h2>
        <p>
          This ultimate guide links to all related resources you need:
        </p>

        <h3>Process Guides</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/how-to-sell-house-during-divorce" className="text-blue-600 hover:text-blue-700 underline">How to Sell House During Divorce: Step-by-Step</Link></li>
          <li><Link href="/divorce-listing-process" className="text-blue-600 hover:text-blue-700 underline">Divorce Listing Process</Link></li>
          <li><Link href="/divorce-home-sale-timeline" className="text-blue-600 hover:text-blue-700 underline">Timeline: How Long to Sell</Link></li>
        </ul>

        <h3>Checklists and Planning</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/divorce-home-sale-checklist" className="text-blue-600 hover:text-blue-700 underline">Complete Divorce Home Sale Checklist</Link></li>
          <li><Link href="/divorce-real-estate-checklist" className="text-blue-600 hover:text-blue-700 underline">Divorce Real Estate Checklist</Link></li>
          <li><Link href="/preparing-home-sale-divorce" className="text-blue-600 hover:text-blue-700 underline">Preparing Your Home for Sale</Link></li>
        </ul>

        <h3>Options and Decisions</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/divorce-property-division" className="text-blue-600 hover:text-blue-700 underline">Property Division Options</Link></li>
          <li><Link href="/what-to-do-with-house-in-divorce" className="text-blue-600 hover:text-blue-700 underline">What to Do with House in Divorce</Link></li>
          <li><Link href="/selling-house-before-or-after-divorce" className="text-blue-600 hover:text-blue-700 underline">Selling Before or After Divorce</Link></li>
        </ul>

        <h3>Financial Guides</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/divorce-home-valuation" className="text-blue-600 hover:text-blue-700 underline">Home Valuation Guide</Link></li>
          <li><Link href="/divorce-home-equity-split" className="text-blue-600 hover:text-blue-700 underline">Home Equity Split</Link></li>
          <li><Link href="/splitting-house-proceeds-divorce" className="text-blue-600 hover:text-blue-700 underline">Splitting House Proceeds</Link></li>
          <li><Link href="/capital-gains-tax-divorce-home-sale" className="text-blue-600 hover:text-blue-700 underline">Capital Gains Tax Guide</Link></li>
          <li><Link href="/divorce-home-sale-taxes-nevada" className="text-blue-600 hover:text-blue-700 underline">Nevada Tax Considerations</Link></li>
        </ul>

        <h3>Special Situations</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/one-spouse-wont-sell-house-divorce" className="text-blue-600 hover:text-blue-700 underline">One Spouse Won't Sell</Link></li>
          <li><Link href="/court-ordered-home-sale" className="text-blue-600 hover:text-blue-700 underline">Court-Ordered Sales</Link></li>
          <li><Link href="/divorce-buyout-options" className="text-blue-600 hover:text-blue-700 underline">Buyout Options</Link></li>
        </ul>

        <h2>Nevada-Specific Considerations</h2>
        <h3>No State Income Tax</h3>
        <p>
          Nevada has no state income tax, which means you only need to consider federal capital gains tax when selling your home. This is a significant advantage compared to states with income tax.
        </p>

        <h3>Clark County Specifics</h3>
        <p>
          Most Las Vegas area divorces are in Clark County. Understanding Clark County court processes and requirements is important for divorce home sales.
        </p>

        <h3>Las Vegas Market Dynamics</h3>
        <p>
          Las Vegas real estate market has unique characteristics:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Tourism and economic factors affect market</li>
          <li>Seasonal variations in buyer activity</li>
          <li>Price ranges vary significantly by area</li>
          <li>New construction competes with resales</li>
        </ul>

        <h2>Working with Nevada Divorce Attorneys</h2>
        <p>
          Nevada divorce attorneys understand community property laws and can help structure property division agreements. Dr. Jan Duffy works seamlessly with Nevada family law attorneys, providing property valuations and transaction coordination.
        </p>
        <p className="mt-4">
          Resources: <Link href="/attorney-resources" className="text-blue-600 hover:text-blue-700 underline">Attorney Resources</Link> | <Link href="/family-law-attorney-collaboration" className="text-blue-600 hover:text-blue-700 underline">Attorney Collaboration</Link>
        </p>

        <h2>Get Expert Nevada Divorce Real Estate Help</h2>
        <p>
          Selling a house during divorce in Nevada requires specialized expertise in both Nevada law and Las Vegas real estate. Dr. Jan Duffy brings this expertise to every transaction, ensuring your sale proceeds smoothly and supports your overall divorce resolution.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
          <h3 className="text-xl font-semibold mb-2">Ready to Sell Your Nevada Home During Divorce?</h3>
          <p className="mb-4">
            Schedule a confidential consultation with Dr. Jan Duffy to discuss your Nevada divorce home sale. She understands Nevada laws, Las Vegas market, and divorce dynamics.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Schedule Your Consultation
          </Link>
        </div>

        <h2>Quick Reference: Key Nevada Divorce Real Estate Terms</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
          <dl className="space-y-3">
            <dt className="font-semibold">Community Property</dt>
            <dd className="ml-4">Property acquired during marriage, divided equally in Nevada</dd>
            
            <dt className="font-semibold">Separate Property</dt>
            <dd className="ml-4">Property owned before marriage or received as gift/inheritance</dd>
            
            <dt className="font-semibold">Partition Sale</dt>
            <dd className="ml-4">Court-ordered sale when spouses can't agree</dd>
            
            <dt className="font-semibold">Quitclaim Deed</dt>
            <dd className="ml-4">Transfers ownership interest but not mortgage liability</dd>
            
            <dt className="font-semibold">Buyout</dt>
            <dd className="ml-4">One spouse buys the other's share of the home</dd>
          </dl>
        </div>
      </div>
    </DivorcePageTemplate>
  );
}

