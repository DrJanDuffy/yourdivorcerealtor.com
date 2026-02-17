import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import { RealScoutCondoListings } from '@/components/widgets/RealScoutCondoListings';
import { RealScoutFamilyHomes } from '@/components/widgets/RealScoutFamilyHomes';
import { RealScoutHomeValue } from '@/components/widgets/RealScoutHomeValue';
import { CONTENT_LAST_UPDATED, toSchemaDateTime } from '@/lib/content-dates';
import { generateLocaleAlternates } from '@/lib/metadata';
import {
  generateArticleSchema,
  generateRealEstateAgentSchema,
  generateServiceSchema,
} from '@/lib/schema';

const path = '/divorce-settlement-options';

type ISettlementProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'Divorce Settlement Real Estate Options | Dr. Jan Duffy',
    description: 'Understand all your divorce settlement real estate options. Sell, buyout, co-own, or refinance - expert guidance for each option.',
    keywords: 'divorce settlement options, divorce real estate options, property settlement divorce',
    alternates: { canonical, languages },
  };
}

export default async function SettlementOptions(props: ISettlementProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const baseUrl = 'https://www.yourdivorcerealtor.com';
  const currentPath = '/divorce-settlement-options';
  const articleSchema = generateArticleSchema(
    'Divorce Settlement Real Estate Options',
    'Understand all your divorce settlement real estate options. Sell, buyout, co-own, or refinance - expert guidance for each option.',
    `${baseUrl}${currentPath}`,
    toSchemaDateTime(CONTENT_LAST_UPDATED),
    toSchemaDateTime(CONTENT_LAST_UPDATED),
  );
  const serviceSchema = generateServiceSchema(
    'Divorce Settlement Options Services',
    'Understand all your divorce settlement real estate options. Expert guidance for each option.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[articleSchema, serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Divorce Settlement Real Estate Options"
        heroSubhead="Understand All Your Options"
        currentPath={currentPath}
        datePublished={CONTENT_LAST_UPDATED}
        dateModified={CONTENT_LAST_UPDATED}
      >
        <div className="prose prose-lg mx-auto max-w-4xl">
          <h2>Understanding Your Divorce Settlement Options</h2>
          <p>
            When it comes to real estate during divorce, you have several settlement options. Understanding all your options is essential for making informed decisions that support your financial future and overall divorce resolution. Dr. Jan Duffy helps you understand each option, its implications, and which path makes the most sense for your situation.
          </p>

          <h3>The Importance of Understanding Options</h3>
          <p>
            Many divorcing homeowners don't realize they have multiple options for handling their property. Understanding all options helps you make informed decisions and choose the path that best supports your goals. Dr. Jan Duffy provides comprehensive guidance on all available options.
          </p>

          <h2>Option 1: Sell and Split Proceeds</h2>
          <p>
            Selling the home and splitting proceeds is often the simplest and cleanest option. It provides a clean break, eliminates ongoing financial entanglements, and gives both parties cash to start fresh. This option works well when neither party wants to keep the home or when keeping it isn't financially feasible.
          </p>

          <h3>Benefits of Selling</h3>
          <p>
            Selling provides immediate cash, eliminates ongoing mortgage obligations, and creates a clean break. Both parties can use their proceeds to start fresh, whether that means buying new homes, renting, or other financial goals.
          </p>

          <h3>Considerations</h3>
          <p>
            Selling requires both parties to agree, coordinate the process, and potentially move out before closing. Market conditions affect sale price and timeline. Dr. Jan Duffy's specialized divorce listing process makes this option as smooth as possible.
          </p>

          <h2>Option 2: One Spouse Buys Out the Other</h2>
          <p>
            If one spouse wants to keep the home, they can buy out the other spouse's share. This involves determining the home's value, calculating the buyout amount, and refinancing the mortgage to remove the other spouse. This option works well when one party has strong emotional or practical reasons to keep the home.
          </p>

          <h3>Buyout Process</h3>
          <p>
            The buyout process involves accurate valuation, calculating equity division, and refinancing. Dr. Jan Duffy guides you through each step, ensuring fair calculations and smooth execution.
          </p>

          <h3>Financial Considerations</h3>
          <p>
            The buying spouse must qualify for a new mortgage based on their income alone. This can be challenging, especially if income has changed due to divorce. Dr. Jan Duffy helps coordinate with lenders and ensures the buying spouse understands financial requirements.
          </p>

          <h2>Option 3: Co-Own Temporarily</h2>
          <p>
            Some couples choose to co-own the property temporarily, often to allow children to finish school or to wait for better market conditions. This "bird nesting" arrangement can work but requires clear agreements about expenses, maintenance, and eventual sale.
          </p>

          <h3>Structuring Co-Ownership</h3>
          <p>
            Successful co-ownership requires clear agreements about who pays what, how maintenance is handled, and when the property will be sold. Dr. Jan Duffy helps structure these arrangements to prevent future conflicts.
          </p>

          <h2>Option 4: Refinance to Remove Spouse</h2>
          <p>
            If one spouse keeps the home, refinancing removes the other spouse from the mortgage, protecting their credit and financial future. This process involves qualifying for a new mortgage based on one income, which can be challenging.
          </p>

          <h3>Refinancing Process</h3>
          <p>
            Refinancing requires qualification, lender coordination, and legal documentation. Dr. Jan Duffy helps coordinate this process, ensuring it supports your property division agreement.
          </p>

          <h2>Option 5: Short Sale if Underwater</h2>
          <p>
            If your home is worth less than the mortgage balance, a short sale may be an option. This requires lender approval and can have credit implications, but it may be preferable to foreclosure. Dr. Jan Duffy helps you understand if this option applies to your situation.
          </p>

          <h2>Choosing the Right Option</h2>
          <p>
            Choosing the right option depends on your financial situation, emotional needs, long-term goals, and practical considerations. Dr. Jan Duffy helps you evaluate each option and choose the path that makes the most sense for your situation.
          </p>

          <h2>Get Expert Guidance on Your Options</h2>
          <p>
            Understanding all your options is the first step to making informed decisions. Schedule a consultation with Dr. Jan Duffy today and learn how she can help you understand your options and choose the path that best supports your future.
          </p>
        </div>
      </DivorcePageTemplate>
      <RealScoutHomeValue />
      <RealScoutCondoListings />
      <RealScoutFamilyHomes />
    </>
  );
}
