import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import {
  generateServiceSchema,
  generateRealEstateAgentSchema,
} from '@/lib/schema';

type INetProceedsProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Calculate Your Divorce Net Proceeds | Dr. Jan Duffy',
    description: 'Calculate your net proceeds from selling your home during divorce. Understand what you\'ll actually receive after all costs.',
    keywords: 'divorce net proceeds, net proceeds calculator, selling home net proceeds',
  };
}

export default async function NetProceedsCalculator(props: INetProceedsProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const currentPath = '/divorce-net-proceeds-calculator';
  const serviceSchema = generateServiceSchema(
    'Net Proceeds Calculator',
    'Calculate your net proceeds from selling your home during divorce. Understand what you\'ll actually receive after all costs.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Calculate Your Divorce Net Proceeds"
        heroSubhead="Know What You'll Actually Receive"
        showHomeValue
        currentPath={currentPath}
      >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Understanding Net Proceeds in Divorce</h2>
        <p>
          When selling your home during divorce, understanding net proceeds—what you'll actually receive after all costs—is essential for property division planning. Net proceeds equal sale price minus mortgage payoff, closing costs, commissions, and other expenses. Dr. Jan Duffy helps you calculate net proceeds accurately, ensuring you understand what you'll actually receive from the sale.
        </p>

        <h3>Why Net Proceeds Matter</h3>
        <p>
          The sale price isn't what you'll receive. Net proceeds represent what's actually available for property division after all costs are paid. Understanding net proceeds helps you plan property division and make informed decisions.
        </p>

        <h2>Calculating Net Proceeds</h2>
        <p>
          Net proceeds calculation involves subtracting all costs from the sale price. Dr. Jan Duffy provides comprehensive calculations that consider all relevant costs, ensuring you have accurate expectations.
        </p>

        <h3>Sale Price</h3>
        <p>
          The sale price is what the buyer pays for your home. This is determined through market analysis and negotiation.
        </p>

        <h3>Mortgage Payoff</h3>
        <p>
          Your outstanding mortgage balance must be paid off from sale proceeds. This reduces the amount available for division.
        </p>

        <h3>Closing Costs</h3>
        <p>
          Closing costs include various fees and expenses associated with the sale. These reduce net proceeds and must be considered in calculations.
        </p>

        <h3>Commissions and Fees</h3>
        <p>
          Real estate commissions and other fees reduce net proceeds. Dr. Jan Duffy provides transparent information about all costs.
        </p>

        <h2>Get Net Proceeds Calculation Today</h2>
        <p>
          Understanding net proceeds is essential for property division planning. Schedule a consultation with Dr. Jan Duffy today and get an accurate net proceeds calculation for your situation.
        </p>
      </div>
    </DivorcePageTemplate>
    </>
  );
}
