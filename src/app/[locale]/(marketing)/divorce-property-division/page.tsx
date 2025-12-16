import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';

type IPropertyDivisionProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Divorce Property Division in Las Vegas | Fair and Equitable Solutions',
    description: 'Expert guidance for divorce property division in Las Vegas. Fair valuations, equitable solutions, and specialized expertise for dividing real estate assets.',
    keywords: 'divorce property division, property division divorce, las vegas divorce property division',
  };
}

export default async function PropertyDivision(props: IPropertyDivisionProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <DivorcePageTemplate
      h1="Divorce Property Division in Las Vegas"
      heroSubhead="Fair and Equitable Solutions"
      showHomeValue
    >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Understanding Property Division During Divorce</h2>
        <p>
          Property division is one of the most complex aspects of divorce, especially when real estate is involved. Your home is often your most valuable asset, and how it's divided can significantly impact your financial future. Dr. Jan Duffy provides specialized expertise in divorce property division, helping you understand your options and achieve fair, equitable outcomes.
        </p>

        <h3>The Importance of Accurate Valuation</h3>
        <p>
          Fair property division starts with accurate home valuation. Without knowing your home's true value, you can't make informed decisions about how to divide it. Dr. Jan Duffy provides comprehensive home valuations that consider market conditions, property specifics, and comparable sales, ensuring you have accurate information for property division negotiations.
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
          If one spouse wants to keep the home, they can buy out the other spouse's share. This involves determining the home's value, calculating the buyout amount, and refinancing the mortgage to remove the other spouse. Dr. Jan Duffy helps navigate this entire process, from valuation to refinancing.
        </p>

        <h3>Co-Own Temporarily</h3>
        <p>
          Some couples choose to co-own the property temporarily, often to allow children to finish school or to wait for better market conditions. This "bird nesting" arrangement can work but requires clear agreements about expenses, maintenance, and eventual sale. Dr. Jan Duffy helps structure these arrangements to prevent future conflicts.
        </p>

        <h3>Refinance to Remove Spouse</h3>
        <p>
          If one spouse keeps the home, refinancing removes the other spouse from the mortgage, protecting their credit and financial future. This process involves qualifying for a new mortgage based on one income, which can be challenging. Dr. Jan Duffy helps coordinate with lenders and ensures the refinancing supports the property division agreement.
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

        <h2>Get Expert Help with Property Division</h2>
        <p>
          Property division is complex, but you don't have to navigate it alone. Dr. Jan Duffy provides the specialized expertise you need to understand your options, achieve fair outcomes, and move forward with confidence. Schedule a consultation today and learn how she can help you navigate property division during your divorce.
        </p>
      </div>
    </DivorcePageTemplate>
  );
}

