import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import {
  generateArticleSchema,
  generateServiceSchema,
  generateRealEstateAgentSchema,
} from '@/lib/schema';

type IBuyoutProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Divorce Buyout Options for Las Vegas Homes | Dr. Jan Duffy',
    description: 'Expert guidance for divorce buyout options. Keep your home if you can with professional buyout assistance.',
    keywords: 'divorce buyout, home buyout divorce, las vegas divorce buyout',
  };
}

export default async function BuyoutOptions(props: IBuyoutProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const baseUrl = 'https://www.yourdivorcerealtor.com';
  const currentPath = '/divorce-buyout-options';
  const articleSchema = generateArticleSchema(
    'Divorce Buyout Options for Las Vegas Homes',
    'Expert guidance for divorce buyout options. Keep your home if you can with professional buyout assistance.',
    `${baseUrl}${currentPath}`,
    new Date().toISOString(),
  );
  const serviceSchema = generateServiceSchema(
    'Divorce Buyout Services',
    'Expert guidance for divorce buyout options. Professional buyout assistance to help you keep your home.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[articleSchema, serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Divorce Buyout Options for Las Vegas Homes"
        heroSubhead="Keep Your Home If You Can"
        showHomeValue
        currentPath={currentPath}
      >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Understanding Divorce Buyout Options</h2>
        <p>
          If you want to keep your home during divorce, a buyout allows you to purchase your spouse's share and become the sole owner. This option works well when you have strong emotional or practical reasons to keep the home, such as children's stability, school districts, or personal attachment. Dr. Jan Duffy provides expert guidance through the entire buyout process, ensuring fair calculations and smooth execution.
        </p>

        <h3>When Buyout Makes Sense</h3>
        <p>
          Buyout makes sense when one spouse wants to keep the home and can afford to do so. It requires the buying spouse to qualify for a new mortgage based on their income alone, which can be challenging but is often achievable with proper planning and guidance.
        </p>

        <h2>The Buyout Process</h2>
        <p>
          The buyout process involves several steps, from initial valuation to final refinancing. Dr. Jan Duffy guides you through each step, ensuring fair calculations and smooth execution.
        </p>

        <h3>Step 1: Home Valuation</h3>
        <p>
          Accurate home valuation is the foundation of fair buyout calculations. Dr. Jan Duffy provides comprehensive valuations that consider market conditions, property specifics, and comparable sales. This valuation determines the buyout amount.
        </p>

        <h3>Step 2: Equity Calculation</h3>
        <p>
          Calculating equity requires understanding your home's value, outstanding mortgage balance, and any liens or encumbrances. Dr. Jan Duffy calculates your equity accurately, ensuring both parties understand the numbers.
        </p>

        <h3>Step 3: Buyout Amount Calculation</h3>
        <p>
          The buyout amount is typically half the equity (in community property states like Nevada), though this can vary based on your specific circumstances. Dr. Jan Duffy helps calculate the buyout amount fairly, considering all relevant factors.
        </p>

        <h3>Step 4: Refinancing</h3>
        <p>
          Refinancing removes the other spouse from the mortgage and provides funds for the buyout. This requires the buying spouse to qualify for a new mortgage based on their income alone. Dr. Jan Duffy coordinates with lenders and helps ensure successful refinancing.
        </p>

        <h3>Step 5: Legal Documentation</h3>
        <p>
          Buyout requires legal documentation, including quitclaim deeds and refinancing paperwork. Dr. Jan Duffy coordinates with attorneys to ensure all documentation is completed correctly and legally compliant.
        </p>

        <h2>Financial Considerations</h2>
        <p>
          Buyout has significant financial implications that must be carefully considered. Understanding these implications helps you make informed decisions about whether buyout is the right choice for your situation.
        </p>

        <h3>Mortgage Qualification</h3>
        <p>
          The buying spouse must qualify for a new mortgage based on their income alone. This can be challenging, especially if income has changed due to divorce. Dr. Jan Duffy helps coordinate with lenders and ensures you understand qualification requirements.
        </p>

        <h3>Down Payment and Closing Costs</h3>
        <p>
          Buyout may require cash for down payment and closing costs, depending on how the buyout is structured. Dr. Jan Duffy helps you understand these costs and plan accordingly.
        </p>

        <h3>Ongoing Expenses</h3>
        <p>
          Keeping the home means taking on all ongoing expenses, including mortgage, property taxes, insurance, and maintenance. Dr. Jan Duffy helps you understand these ongoing costs and ensure they're affordable.
        </p>

        <h2>Legal Considerations</h2>
        <p>
          Buyout has legal implications that must be handled correctly. Dr. Jan Duffy works with family law attorneys to ensure buyout agreements are structured correctly and comply with legal requirements.
        </p>

        <h3>Quitclaim Deeds</h3>
        <p>
          When one spouse transfers their interest to the other, a quitclaim deed is typically used. This legal document must be prepared and recorded correctly. Dr. Jan Duffy coordinates with attorneys to ensure quitclaim deeds are handled properly.
        </p>

        <h3>Settlement Agreements</h3>
        <p>
          Buyout terms should be included in your divorce settlement agreement. Dr. Jan Duffy works with your attorney to ensure buyout terms are clearly defined and legally enforceable.
        </p>

        <h2>Get Expert Buyout Guidance</h2>
        <p>
          Buyout can be complex, but you don't have to navigate it alone. Dr. Jan Duffy provides the specialized expertise you need to understand buyout options, calculate fair amounts, and execute the process smoothly. Schedule a consultation today and learn how she can help you keep your home if that's the right choice for your situation.
        </p>
      </div>
    </DivorcePageTemplate>
  );
}

