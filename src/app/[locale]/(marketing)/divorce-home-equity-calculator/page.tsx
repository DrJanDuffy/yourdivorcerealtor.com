import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import { generateLocaleAlternates } from '@/lib/metadata';
import {
  generateRealEstateAgentSchema,
  generateServiceSchema,
} from '@/lib/schema';

type IEquityCalculatorProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

const path = '/divorce-home-equity-calculator';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'Divorce Home Equity Calculator Las Vegas | Dr. Jan Duffy',
    description: 'Calculate your home equity for divorce property division. Understand your equity position with our calculator and expert guidance.',
    keywords: 'divorce home equity calculator, home equity calculator divorce, calculate equity divorce',
    alternates: { canonical, languages },
  };
}

export default async function HomeEquityCalculator(props: IEquityCalculatorProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const currentPath = '/divorce-home-equity-calculator';
  const serviceSchema = generateServiceSchema(
    'Home Equity Calculator',
    'Calculate your home equity for divorce property division. Understand your equity position with our calculator and expert guidance.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Divorce Home Equity Calculator Las Vegas"
        currentPath={currentPath}
        heroSubhead="Know Your Equity Position"
        showHomeValue
      >
        <div className="prose prose-lg mx-auto max-w-4xl">
          <h2>Understanding Home Equity in Divorce</h2>
          <p>
            Your home equity is the foundation of property division during divorce. Equity equals your home's value minus outstanding mortgage balance and any liens. Understanding your equity position is essential for making informed decisions about property division, buyouts, and selling. Dr. Jan Duffy helps you calculate your equity accurately and understand what it means for your property division.
          </p>

          <h3>Why Equity Calculation Matters</h3>
          <p>
            Accurate equity calculation is essential for fair property division. Without knowing your equity, you can't make informed decisions about selling, buying out, or dividing assets. Dr. Jan Duffy provides accurate equity calculations that support informed decision-making.
          </p>

          <h2>How to Calculate Home Equity</h2>
          <p>
            Home equity calculation is straightforward: Home Value - Outstanding Mortgage - Liens = Equity. However, getting accurate numbers for each component requires professional expertise. Dr. Jan Duffy provides comprehensive equity calculations that consider all relevant factors.
          </p>

          <h3>Home Value</h3>
          <p>
            Accurate home valuation is the first step in equity calculation. Dr. Jan Duffy provides comprehensive market analyses that determine your home's true value, considering market conditions, comparable sales, and property specifics.
          </p>

          <h3>Outstanding Mortgage</h3>
          <p>
            Your outstanding mortgage balance is the amount you still owe on your home loan. This number comes from your lender and represents your current loan balance.
          </p>

          <h3>Liens and Encumbrances</h3>
          <p>
            Any liens or encumbrances on your property reduce your equity. These might include second mortgages, home equity lines of credit, or other liens. Dr. Jan Duffy helps identify all liens and encumbrances to ensure accurate equity calculation.
          </p>

          <h2>Using Equity for Property Division</h2>
          <p>
            Once you know your equity, you can use it for property division decisions. Equity can be divided through selling and splitting proceeds, buyouts, or other arrangements. Dr. Jan Duffy helps you understand how equity applies to each option.
          </p>

          <h2>Get Your Equity Calculation Today</h2>
          <p>
            Understanding your equity position is essential for property division. Use the home value widget below to get started, or schedule a consultation with Dr. Jan Duffy for a comprehensive equity calculation and expert guidance on how it applies to your property division.
          </p>
        </div>
      </DivorcePageTemplate>
    </>
  );
}
