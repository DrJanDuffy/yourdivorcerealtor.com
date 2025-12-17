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
    title: 'How to Sell House During Divorce | Step-by-Step Guide | Dr. Jan Duffy',
    description: 'Complete guide on how to sell house during divorce. Step-by-step process, timeline, checklist, and common mistakes to avoid. Expert guidance from Las Vegas divorce real estate specialist.',
    keywords: 'how to sell house during divorce, selling house during divorce, divorce home sale process, selling marital home divorce',
  };
}

export default async function HowToSellHouseDuringDivorce(props: PageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const baseUrl = 'https://www.yourdivorcerealtor.com';
  const currentPath = '/how-to-sell-house-during-divorce';
  const articleSchema = generateArticleSchema(
    'How to Sell House During Divorce: Complete Step-by-Step Guide',
    'Complete guide on how to sell house during divorce. Step-by-step process, timeline, checklist, and common mistakes to avoid.',
    `${baseUrl}${currentPath}`,
    new Date().toISOString(),
  );
  const serviceSchema = generateServiceSchema(
    'Divorce Home Sale Guide Services',
    'Complete guide on how to sell house during divorce. Step-by-step process, timeline, checklist, and expert guidance.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[articleSchema, serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="How to Sell House During Divorce: Complete Step-by-Step Guide"
        heroSubhead="Navigate the Process with Confidence and Clarity"
        showHomeValue
        currentPath={currentPath}
      >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Introduction: Why Selling During Divorce is Different</h2>
        <p>
          Selling a house during divorce is fundamentally different from a traditional real estate transaction. It involves emotional dynamics, legal considerations, coordination with attorneys, and often court involvement. This comprehensive guide walks you through the entire process, from initial decision-making to closing, helping you understand what to expect and how to navigate each step successfully.
        </p>

        <h2>Step 1: Understand Your Options</h2>
        <p>
          Before deciding to sell, understand all your property division options. You may be able to keep the house, buy out your spouse, or co-own temporarily. Dr. Jan Duffy helps you evaluate all options during a confidential consultation, ensuring you make informed decisions.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Sell and split proceeds:</strong> Clean break, both parties get cash</li>
          <li><strong>Buyout:</strong> One spouse buys out the other's share</li>
          <li><strong>Co-own temporarily:</strong> Keep house for children or market timing</li>
          <li><strong>Refinance:</strong> Remove one spouse from mortgage</li>
        </ul>
        <p className="mt-4">
          Learn more about your options: <Link href="/divorce-property-division" className="text-blue-600 hover:text-blue-700 underline">Divorce Property Division Options</Link>
        </p>

        <h2>Step 2: Get Accurate Home Valuation</h2>
        <p>
          Accurate home valuation is the foundation of fair property division. You need to know your home's true value to make informed decisions about selling, buyouts, or dividing assets. Dr. Jan Duffy provides comprehensive valuations using multiple methods to ensure accuracy.
        </p>
        <p>
          <strong>What's included in a divorce home valuation:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Comparative Market Analysis (CMA) using recent sales</li>
          <li>Current Las Vegas market conditions assessment</li>
          <li>Property-specific factors (condition, upgrades, location)</li>
          <li>Equity calculation (home value minus mortgage balance)</li>
          <li>Net proceeds estimate (after closing costs and expenses)</li>
        </ul>
        <p className="mt-4">
          Get your free home valuation: <Link href="/divorce-home-valuation" className="text-blue-600 hover:text-blue-700 underline">Home Valuation Services</Link>
        </p>

        <h2>Step 3: Coordinate with Attorneys</h2>
        <p>
          Selling during divorce requires coordination with family law attorneys. Your attorney needs to approve the sale, ensure compliance with settlement agreements or court orders, and handle legal documentation. Dr. Jan Duffy works seamlessly with attorneys, providing property valuations and coordinating the transaction to support your legal case.
        </p>
        <p>
          <strong>Legal requirements may include:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Court approval for the sale</li>
          <li>Settlement agreement terms</li>
          <li>Both spouses' signatures on listing agreement</li>
          <li>Distribution of proceeds according to agreement</li>
        </ul>

        <h2>Step 4: Choose a Divorce Real Estate Specialist</h2>
        <p>
          Not all real estate agents understand divorce transactions. A divorce real estate specialist like Dr. Jan Duffy has specialized training and experience handling the unique challenges of divorce sales. This expertise ensures smoother transactions and better outcomes.
        </p>
        <p>
          <strong>Why choose a specialist:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Understands emotional dynamics and maintains neutrality</li>
          <li>Coordinates with attorneys and court orders</li>
          <li>Prevents problems before they arise</li>
          <li>Handles non-cooperative spouse situations</li>
          <li>Ensures compliance with legal requirements</li>
        </ul>
        <p className="mt-4">
          Learn more: <Link href="/certified-divorce-real-estate-expert" className="text-blue-600 hover:text-blue-700 underline">Certified Divorce Real Estate Expert</Link>
        </p>

        <h2>Step 5: Prepare Your Home for Sale</h2>
        <p>
          Preparing your home for sale during divorce requires sensitivity and coordination. Both spouses need to agree on preparation, staging, and showing schedules. Dr. Jan Duffy helps coordinate this process while respecting the emotional dynamics of the situation.
        </p>
        <p>
          <strong>Preparation checklist:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Declutter and depersonalize (remove family photos, personal items)</li>
          <li>Make necessary repairs (fix leaks, broken fixtures, etc.)</li>
          <li>Deep clean (carpets, windows, bathrooms, kitchen)</li>
          <li>Stage for showings (neutral decor, maximize space)</li>
          <li>Coordinate showing schedule with both spouses</li>
        </ul>
        <p className="mt-4">
          Detailed guide: <Link href="/divorce-home-staging" className="text-blue-600 hover:text-blue-700 underline">Preparing Your Home for Sale During Divorce</Link>
        </p>

        <h2>Step 6: List and Market Your Home</h2>
        <p>
          Effective marketing is crucial for selling quickly and at the best price. Dr. Jan Duffy develops customized marketing strategies that highlight your property's strengths and reach qualified Las Vegas buyers. She coordinates showings with sensitivity to the divorce situation.
        </p>
        <p>
          <strong>Marketing strategy includes:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Professional photography and virtual tours</li>
          <li>MLS listing with compelling description</li>
          <li>Online marketing (Zillow, Realtor.com, social media)</li>
          <li>Open houses (when appropriate)</li>
          <li>Targeted buyer outreach</li>
        </ul>

        <h2>Step 7: Handle Offers and Negotiations</h2>
        <p>
          When offers come in, Dr. Jan Duffy negotiates on behalf of both parties, ensuring fair outcomes. She maintains transparency throughout, keeping all parties informed and ensuring decisions are made collaboratively. Both spouses typically need to approve offers and counteroffers.
        </p>
        <p>
          <strong>Negotiation considerations:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Sale price and terms</li>
          <li>Closing timeline (may be court-ordered)</li>
          <li>Contingencies (inspection, financing, appraisal)</li>
          <li>Repairs and credits</li>
          <li>Distribution of proceeds</li>
        </ul>

        <h2>Step 8: Navigate Inspections and Appraisals</h2>
        <p>
          Buyers will conduct inspections and appraisals, which may reveal issues or affect the sale price. Dr. Jan Duffy helps coordinate these processes, negotiates repairs or credits, and ensures both spouses are informed of all developments.
        </p>

        <h2>Step 9: Coordinate Closing</h2>
        <p>
          Closing a divorce home sale requires coordination with attorneys, lenders, title companies, and both spouses. Dr. Jan Duffy manages this coordination, ensuring all documentation is completed correctly and the closing proceeds smoothly. Proceeds are typically distributed according to your settlement agreement or court order.
        </p>
        <p>
          <strong>Closing requirements:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Both spouses sign closing documents</li>
          <li>Mortgage payoff and lien releases</li>
          <li>Title transfer to buyer</li>
          <li>Distribution of proceeds per agreement</li>
          <li>Final walkthrough completion</li>
        </ul>

        <h2>Step 10: Move Forward</h2>
        <p>
          After closing, you can move forward with your new chapter. The house sale provides closure and financial resources for your fresh start. Dr. Jan Duffy helps ensure the process supports your overall divorce resolution and sets you up for success.
        </p>

        <h2>Timeline: How Long Does It Take?</h2>
        <p>
          The timeline for selling a house during divorce varies based on market conditions, property specifics, and any court orders. Typically:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Preparation:</strong> 1-2 weeks</li>
          <li><strong>Listing to contract:</strong> 30-90 days (Las Vegas market average)</li>
          <li><strong>Contract to closing:</strong> 30-45 days</li>
          <li><strong>Total:</strong> 2-4 months typically</li>
        </ul>
        <p className="mt-4">
          Detailed timeline: <Link href="/divorce-home-sale-timeline" className="text-blue-600 hover:text-blue-700 underline">Divorce Home Sale Timeline</Link>
        </p>

        <h2>Common Mistakes to Avoid</h2>
        <p>
          Avoid these common mistakes when selling during divorce:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Using a non-specialized agent:</strong> Traditional agents don't understand divorce dynamics</li>
          <li><strong>Overpricing:</strong> Leads to extended time on market and lower final price</li>
          <li><strong>Poor communication:</strong> Both spouses must stay informed</li>
          <li><strong>Ignoring court orders:</strong> Strict compliance is required</li>
          <li><strong>Emotional decisions:</strong> Keep focus on financial outcomes</li>
          <li><strong>Rushing the process:</strong> Allow adequate time for proper preparation</li>
        </ul>
        <p className="mt-4">
          Learn more: <Link href="/divorce-real-estate-mistakes" className="text-blue-600 hover:text-blue-700 underline">Common Divorce Real Estate Mistakes</Link>
        </p>

        <h2>Checklist: Selling House During Divorce</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-2">□</span>
              <span>Get accurate home valuation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">□</span>
              <span>Consult with family law attorney</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">□</span>
              <span>Choose divorce real estate specialist</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">□</span>
              <span>Obtain court approval if required</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">□</span>
              <span>Prepare home for sale (declutter, clean, repair)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">□</span>
              <span>List and market property</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">□</span>
              <span>Review and approve offers</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">□</span>
              <span>Navigate inspections and appraisals</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">□</span>
              <span>Coordinate closing with attorneys</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">□</span>
              <span>Distribute proceeds per agreement</span>
            </li>
          </ul>
        </div>
        <p className="mt-4">
          Download full checklist: <Link href="/divorce-home-sale-checklist" className="text-blue-600 hover:text-blue-700 underline">Divorce Home Sale Checklist</Link>
        </p>

        <h2>Get Expert Help</h2>
        <p>
          Selling a house during divorce is complex, but you don't have to navigate it alone. Dr. Jan Duffy provides the specialized expertise you need to sell your home smoothly while supporting your overall divorce resolution. Schedule a confidential consultation today and learn how her specialized process can help you.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
          <h3 className="text-xl font-semibold mb-2">Ready to Get Started?</h3>
          <p className="mb-4">
            Schedule a confidential consultation with Dr. Jan Duffy to discuss your situation and learn how to sell your house during divorce with confidence.
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
          <li><Link href="/selling-home-during-divorce" className="text-blue-600 hover:text-blue-700 underline">Selling Home During Divorce</Link></li>
          <li><Link href="/divorce-home-valuation" className="text-blue-600 hover:text-blue-700 underline">Get Your Home Valuation</Link></li>
          <li><Link href="/divorce-listing-process" className="text-blue-600 hover:text-blue-700 underline">Divorce Listing Process</Link></li>
          <li><Link href="/divorce-home-sale-timeline" className="text-blue-600 hover:text-blue-700 underline">Timeline Guide</Link></li>
          <li><Link href="/divorce-home-sale-checklist" className="text-blue-600 hover:text-blue-700 underline">Complete Checklist</Link></li>
        </ul>
      </div>
    </DivorcePageTemplate>
    </>
  );
}
