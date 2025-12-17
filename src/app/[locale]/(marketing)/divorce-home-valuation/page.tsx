import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import {
  generateArticleSchema,
  generateServiceSchema,
  generateRealEstateAgentSchema,
} from '@/lib/schema';

type IValuationProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Divorce Home Valuation Las Vegas | Free Home Value Calculator | Dr. Jan Duffy',
    description: 'Get accurate divorce home valuation in Las Vegas. Free home value calculator and expert valuation services for property division. Know your equity position today.',
    keywords: 'divorce home valuation Las Vegas, divorce home valuation, home valuation divorce, las vegas divorce home value, divorce home equity calculator',
  };
}

export default async function HomeValuation(props: IValuationProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const baseUrl = 'https://www.yourdivorcerealtor.com';
  const currentPath = '/divorce-home-valuation';
  const articleSchema = generateArticleSchema(
    'Divorce Home Valuation Las Vegas | Free Home Value Calculator',
    'Get accurate divorce home valuation in Las Vegas. Free home value calculator and expert valuation services for property division.',
    `${baseUrl}${currentPath}`,
    new Date().toISOString(),
  );
  const serviceSchema = generateServiceSchema(
    'Divorce Home Valuation Services',
    'Get accurate divorce home valuation in Las Vegas. Free home value calculator and expert valuation services for property division.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[articleSchema, serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Divorce Home Valuation Services Las Vegas"
        currentPath={currentPath}
      heroSubhead="Know Your Equity Position"
      showHomeValue
    >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Why Accurate Home Valuation Matters in Divorce</h2>
        <p>
          Accurate home valuation is the foundation of fair property division during divorce. Without knowing your home's true value, you can't make informed decisions about selling, buying out, or dividing assets. Dr. Jan Duffy provides comprehensive home valuation services specifically designed for divorce situations, ensuring you have accurate information to support your property division negotiations.
        </p>

        <h3>The Foundation of Property Division</h3>
        <p>
          Every property division decision starts with understanding your home's value. Whether you're selling, buying out, or dividing assets, accurate valuation ensures fair outcomes. Dr. Jan Duffy's comprehensive valuations provide the foundation you need for informed decision-making.
        </p>

        <h2>Comprehensive Market Analysis</h2>
        <p>
          Dr. Jan Duffy conducts thorough market analyses using multiple methods to ensure accurate valuations. She considers comparable sales, current market conditions, property-specific factors, and neighborhood trends to provide a comprehensive assessment of your home's value.
        </p>

        <h3>Comparable Sales Analysis</h3>
        <p>
          Comparing your home to recently sold similar properties provides the most accurate valuation. Dr. Jan Duffy identifies true comparable sales in your <Link href="/divorce-realtor-henderson" className="text-blue-600 hover:text-blue-700 underline">Las Vegas</Link> neighborhood, adjusting for differences in size, condition, features, and location to determine your home's value.
        </p>

        <h3>Current Market Conditions</h3>
        <p>
          <Link href="/divorce-realtor-summerlin" className="text-blue-600 hover:text-blue-700 underline">Las Vegas</Link> market conditions directly impact your home's value. Dr. Jan Duffy analyzes current market trends, inventory levels, and buyer activity to understand how market conditions affect your property's value. This analysis ensures your valuation reflects current market reality.
        </p>

        <h3>Property-Specific Factors</h3>
        <p>
          Your home's condition, features, upgrades, and location all impact its value. Dr. Jan Duffy evaluates these factors comprehensively, ensuring your valuation reflects your property's true worth. She considers both positive factors that add value and negative factors that may reduce it.
        </p>

        <h2>Equity Calculation</h2>
        <p>
          Understanding your equity position requires more than just knowing your home's value. Dr. Jan Duffy calculates your equity by considering your home's value, outstanding mortgage balance, and any other liens or encumbrances. This calculation is essential for property division and decision-making.
        </p>

        <h3>Home Value Minus Liabilities</h3>
        <p>
          Your equity equals your home's value minus all outstanding obligations. Dr. Jan Duffy identifies all mortgages, liens, and encumbrances to calculate your true equity position. This accurate calculation supports fair property division.
        </p>

        <h3>Net Proceeds Calculation</h3>
        <p>
          If you're selling, understanding net proceeds is important. Dr. Jan Duffy calculates your expected net proceeds after paying off mortgages, closing costs, and other expenses. This calculation helps you understand what you'll actually receive from a sale. Use our <Link href="/divorce-net-proceeds-calculator" className="text-blue-600 hover:text-blue-700 underline">divorce net proceeds calculator</Link> to estimate your proceeds.
        </p>

        <h2>Valuation Methods</h2>
        <p>
          Dr. Jan Duffy uses multiple valuation methods to ensure accuracy. Each method provides different insights, and combining them creates the most accurate assessment possible.
        </p>

        <h3>Comparative Market Analysis (CMA)</h3>
        <p>
          A CMA compares your home to similar recently sold properties. This method is most commonly used and provides the best indication of what buyers are willing to pay. Dr. Jan Duffy's CMAs are comprehensive and consider all relevant factors.
        </p>

        <h3>Broker Price Opinion (BPO)</h3>
        <p>
          A BPO provides a professional opinion of value based on market analysis and property evaluation. Dr. Jan Duffy's BPOs are thorough and can be used for property division, court proceedings, or decision-making.
        </p>

        <h2>Court-Ready Valuations</h2>
        <p>
          When court involvement is necessary, valuations must be thorough, defensible, and court-ready. Dr. Jan Duffy provides valuations that meet these requirements, supporting your legal case with credible, professional assessments.
        </p>

        <h3>Documentation</h3>
        <p>
          Court-ready valuations require comprehensive documentation. Dr. Jan Duffy provides detailed reports that document her analysis, methods, and conclusions. This documentation supports your legal case and provides transparency for all parties.
        </p>

        <h3>Expert Testimony</h3>
        <p>
          When necessary, Dr. Jan Duffy can serve as an expert witness, providing professional testimony on property values and market conditions. Her expertise and credibility support your legal case.
        </p>

        <h2>Timing of Valuations</h2>
        <p>
          When you get a valuation matters. Market conditions change, and property values fluctuate. Dr. Jan Duffy helps you understand when to get a valuation and how timing affects your property division decisions.
        </p>

        <h3>Early Valuation Benefits</h3>
        <p>
          Getting an early valuation helps you understand your options and plan accordingly. It provides information for property division negotiations and helps you make informed decisions from the start.
        </p>

        <h3>Updated Valuations</h3>
        <p>
          If your divorce process takes time, updated valuations may be necessary. Market conditions change, and property values can fluctuate. Dr. Jan Duffy provides updated valuations when needed, ensuring you always have current information.
        </p>

        <h2>The Divorce Home Valuation Process</h2>
        <p>
          Dr. Jan Duffy's divorce home valuation process is designed specifically for divorcing homeowners. It's comprehensive, accurate, and provides the information you need for property division decisions.
        </p>
        <ol className="list-decimal pl-6 space-y-3 mt-4">
          <li>
            <strong>Initial Consultation:</strong> We start with a confidential consultation to understand your situation, property details, and valuation needs. This helps us tailor the valuation to your specific circumstances.
          </li>
          <li>
            <strong>Property Inspection:</strong> Dr. Jan Duffy conducts a thorough inspection of your property, evaluating condition, features, upgrades, and any factors that affect value. This on-site evaluation ensures accuracy.
          </li>
          <li>
            <strong>Market Analysis:</strong> Comprehensive analysis of comparable sales, current market conditions, and neighborhood trends. This analysis uses multiple methods to ensure the most accurate valuation possible.
          </li>
          <li>
            <strong>Equity Calculation:</strong> Calculation of your equity position by subtracting all outstanding obligations from your home's value. This includes mortgages, liens, and other encumbrances.
          </li>
          <li>
            <strong>Detailed Report:</strong> You receive a comprehensive valuation report documenting the analysis, methods, and conclusions. This report can be used for property division negotiations, court proceedings, or decision-making.
          </li>
          <li>
            <strong>Ongoing Support:</strong> Dr. Jan Duffy provides ongoing support, answering questions and providing updates as needed. If market conditions change or your situation evolves, updated valuations are available.
          </li>
        </ol>

        <h2>Get Your Free Home Valuation Today</h2>
        <p>
          Don't wait to understand your home's value and equity position. Use the free home value calculator below to get an instant estimate, or schedule a consultation with Dr. Jan Duffy for a comprehensive, court-ready valuation. Accurate divorce home valuation is the foundation of fair property division—get started today.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
          <h3 className="text-xl font-semibold mb-2">Free Home Value Calculator</h3>
          <p className="mb-4">
            Get an instant estimate of your home's value using our free calculator below. For a comprehensive, court-ready valuation, contact Dr. Jan Duffy for a detailed analysis.
          </p>
          <p className="text-sm text-gray-600">
            <em>Scroll down to use the home value widget, or <a href="/contact" className="text-blue-600 hover:text-blue-700 underline">contact us</a> for a full valuation report.</em>
          </p>
        </div>
      </div>
      </DivorcePageTemplate>
    </>
  );
}

