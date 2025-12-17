import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import {
  generateArticleSchema,
  generateServiceSchema,
  generateRealEstateAgentSchema,
} from '@/lib/schema';

type IPropertyDivisionProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Nevada Divorce Property Division | Who Gets the House in a Divorce Nevada | Dr. Jan Duffy',
    description: 'Expert guidance for Nevada divorce property division. Learn who gets the house in a divorce Nevada. Community property laws, fair valuations, and equitable solutions for dividing real estate assets.',
    keywords: 'Nevada divorce property division, who gets the house in a divorce Nevada, divorce property division, property division divorce, las vegas divorce property division, community property divorce house',
  };
}

export default async function PropertyDivision(props: IPropertyDivisionProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const baseUrl = 'https://www.yourdivorcerealtor.com';
  const currentPath = '/divorce-property-division';
  const articleSchema = generateArticleSchema(
    'Nevada Divorce Property Division | Who Gets the House in a Divorce Nevada',
    'Expert guidance for Nevada divorce property division. Learn who gets the house in a divorce Nevada. Community property laws, fair valuations, and equitable solutions.',
    `${baseUrl}${currentPath}`,
    new Date().toISOString(),
  );
  const serviceSchema = generateServiceSchema(
    'Divorce Property Division Services',
    'Expert guidance for Nevada divorce property division. Fair valuations and equitable solutions for dividing real estate assets during divorce.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[articleSchema, serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Divorce Property Division in Las Vegas"
        heroSubhead="Fair and Equitable Solutions"
        showHomeValue
        currentPath={currentPath}
      >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Understanding Property Division During Divorce</h2>
        <p>
          Property division is one of the most complex aspects of divorce, especially when real estate is involved. Your home is often your most valuable asset, and how it's divided can significantly impact your financial future. Dr. Jan Duffy provides specialized expertise in divorce property division, helping you understand your options and achieve fair, equitable outcomes.
        </p>

        <h3>The Importance of Accurate Valuation</h3>
        <p>
          Fair property division starts with accurate <Link href="/divorce-home-valuation" className="text-blue-600 hover:text-blue-700 underline">home valuation</Link>. Without knowing your home's true value, you can't make informed decisions about how to divide it. Dr. Jan Duffy provides comprehensive home valuations that consider market conditions, property specifics, and comparable sales, ensuring you have accurate information for property division negotiations.
        </p>

        <h2>Property Division Options</h2>
        <p>
          When it comes to dividing real estate during divorce, you have several options. Each option has different financial, legal, and emotional implications. Dr. Jan Duffy helps you understand all your options and choose the path that makes the most sense for your situation.
        </p>

        <h3>Sell and Split Proceeds</h3>
        <p>
          Selling the home and splitting the proceeds is often the simplest option. It provides a clean break, eliminates ongoing financial entanglements, and gives both parties cash to start fresh. However, it requires both parties to agree to sell and coordinate the process. Dr. Jan Duffy's specialized divorce listing process makes this option as smooth as possible.
        </p>

        <h3>One Spouse Buys Out the Other</h3>
        <p>
          If one spouse wants to keep the home, they can buy out the other spouse's share. This involves determining the home's value, calculating the buyout amount, and <Link href="/refinancing-after-divorce" className="text-blue-600 hover:text-blue-700 underline">refinancing the mortgage</Link> to remove the other spouse. Dr. Jan Duffy helps navigate this entire process, from <Link href="/divorce-home-valuation" className="text-blue-600 hover:text-blue-700 underline">valuation</Link> to refinancing. Learn more about <Link href="/divorce-buyout-options" className="text-blue-600 hover:text-blue-700 underline">divorce buyout options</Link>.
        </p>

        <h3>Co-Own Temporarily</h3>
        <p>
          Some couples choose to co-own the property temporarily, often to allow children to finish school or to wait for better market conditions. This "bird nesting" arrangement can work but requires clear agreements about expenses, maintenance, and eventual sale. Dr. Jan Duffy helps structure these arrangements to prevent future conflicts.
        </p>

        <h3>Refinance to Remove Spouse</h3>
        <p>
          If one spouse keeps the home, <Link href="/refinancing-after-divorce" className="text-blue-600 hover:text-blue-700 underline">refinancing</Link> removes the other spouse from the mortgage, protecting their credit and financial future. This process involves qualifying for a new mortgage based on one income, which can be challenging. Dr. Jan Duffy helps coordinate with lenders and ensures the refinancing supports the property division agreement.
        </p>

        <h2>Calculating Fair Division</h2>
        <p>
          Fair property division requires understanding your home's value, outstanding mortgage balance, and how to divide equity equitably. Dr. Jan Duffy provides detailed calculations that consider all relevant factors, ensuring both parties understand the numbers and can make informed decisions.
        </p>

        <h3>Equity Calculation</h3>
        <p>
          Your equity is your home's value minus any outstanding mortgage balance and liens. Understanding this number is essential for property division. Dr. Jan Duffy calculates your equity accurately, considering all factors that impact your home's value and your financial obligations.
        </p>

        <h3>Division Methods</h3>
        <p>
          How equity is divided depends on your state's laws and your specific circumstances. In community property states like Nevada, marital property is typically divided equally, but separate property and other factors can complicate this. Dr. Jan Duffy helps you understand how these laws apply to your situation.
        </p>

        <h2>Nevada Community Property Laws</h2>
        <p>
          Nevada is a community property state, which means property acquired during marriage is generally considered community property and is divided equally (50/50) during divorce. However, separate property (owned before marriage or received as gifts/inheritance) remains with the original owner. Understanding these laws is essential for fair property division.
        </p>
        <p>
          When it comes to your home, if it was purchased during marriage with marital funds, it's typically considered community property and subject to equal division. However, if one spouse owned the home before marriage or contributed separate property to the purchase, the division can be more complex. Dr. Jan Duffy helps you understand how Nevada's community property laws apply to your specific situation.
        </p>

        <h2>Legal Considerations</h2>
        <p>
          Property division has legal implications that must be handled correctly. Dr. Jan Duffy works with family law attorneys to ensure property division agreements are structured correctly and comply with legal requirements.
        </p>

        <h3>Quitclaim Deeds</h3>
        <p>
          When one spouse transfers their interest to the other, a quitclaim deed is typically used. This legal document must be prepared and recorded correctly. Dr. Jan Duffy coordinates with attorneys to ensure quitclaim deeds are handled properly.
        </p>

        <h3>Court Orders</h3>
        <p>
          If property division is court-ordered, strict compliance is required. Dr. Jan Duffy ensures all court orders are followed exactly, coordinating with attorneys and ensuring all requirements are met.
        </p>

        <h2>Financial Implications</h2>
        <p>
          Property division has significant financial implications for both parties. Understanding these implications helps you make informed decisions and plan for your financial future.
        </p>

        <h3>Tax Considerations</h3>
        <p>
          Property division can have tax implications, especially when selling or transferring property. Dr. Jan Duffy helps you understand these considerations and coordinates with tax professionals to ensure you're aware of all tax implications.
        </p>

        <h3>Credit Impact</h3>
        <p>
          How property division is handled can impact your credit. Refinancing, removing names from mortgages, and other actions all affect credit. Dr. Jan Duffy helps you understand these impacts and ensures actions are taken to protect your credit.
        </p>

        <h2>Working with Attorneys</h2>
        <p>
          Property division typically requires legal documentation and coordination with family law attorneys. Dr. Jan Duffy works seamlessly with attorneys, providing property valuations, market analyses, and transaction coordination that supports your legal case.
        </p>

        <h3>Expert Testimony</h3>
        <p>
          When court involvement is necessary, Dr. Jan Duffy can serve as an expert witness, providing professional opinions on property values and market conditions. Her expertise and credibility support your legal case.
        </p>

        <h2>Frequently Asked Questions: Who Gets the House in a Divorce Nevada?</h2>
        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Who Gets the House in a Divorce Nevada?</h3>
            <p>
              In Nevada, a community property state, the house is typically divided equally between spouses if it was acquired during marriage. However, who actually gets to keep the house depends on several factors:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Agreement:</strong> If both spouses agree, one can keep the house by buying out the other's share</li>
              <li><strong>Court Decision:</strong> If there's no agreement, the court may order the house sold and proceeds divided equally</li>
              <li><strong>Children:</strong> The spouse with primary custody may be more likely to keep the house for stability</li>
              <li><strong>Financial Ability:</strong> The spouse who can qualify for refinancing and afford the mortgage alone may keep it</li>
              <li><strong>Separate Property:</strong> If one spouse owned the house before marriage, they may retain it, but may owe the other spouse for community property contributions</li>
            </ul>
            <p className="mt-3">
              Dr. Jan Duffy helps divorcing homeowners understand their options and navigate the process of determining who gets the house in a divorce in Nevada. She provides accurate valuations, buyout calculations, and coordinates with attorneys to ensure fair outcomes.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">How is Property Divided in Nevada Divorce?</h3>
            <p>
              Nevada follows community property laws, meaning property acquired during marriage is divided equally (50/50). This includes the marital home, unless it was separate property. Dr. Jan Duffy provides accurate home valuations and equity calculations to ensure fair division according to Nevada law.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">What if We Can't Agree on Who Gets the House?</h3>
            <p>
              If spouses can't agree, the court may order the house sold and proceeds divided equally. Dr. Jan Duffy specializes in court-ordered home sales and ensures compliance with all court directives. She also helps mediate between parties to reach agreements when possible.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Can One Spouse Keep the House in Nevada Divorce?</h3>
            <p>
              Yes, one spouse can keep the house by buying out the other spouse's share. This requires accurate home valuation, calculating the buyout amount, and refinancing the mortgage to remove the other spouse. Dr. Jan Duffy helps navigate this entire process, from valuation to refinancing coordination.
            </p>
          </div>
        </div>

        <h2>Related Resources</h2>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><a href="/divorce-home-valuation" className="text-blue-600 hover:text-blue-700 underline">Get Your Home Valuation</a></li>
          <li><a href="/divorce-buyout-options" className="text-blue-600 hover:text-blue-700 underline">Divorce Buyout Options</a></li>
          <li><a href="/community-property-divorce-house" className="text-blue-600 hover:text-blue-700 underline">Community Property and Divorce</a></li>
          <li><a href="/divorce-home-equity-split" className="text-blue-600 hover:text-blue-700 underline">Divorce Home Equity Split</a></li>
          <li><a href="/selling-home-during-divorce" className="text-blue-600 hover:text-blue-700 underline">Selling Home During Divorce</a></li>
        </ul>

        <h2>Get Expert Help with Property Division</h2>
        <p>
          Property division is complex, but you don't have to navigate it alone. Dr. Jan Duffy provides the specialized expertise you need to understand your options, achieve fair outcomes, and move forward with confidence. Schedule a consultation today and learn how she can help you navigate property division during your divorce.
        </p>
      </div>
      </DivorcePageTemplate>
    </>
  );
}

