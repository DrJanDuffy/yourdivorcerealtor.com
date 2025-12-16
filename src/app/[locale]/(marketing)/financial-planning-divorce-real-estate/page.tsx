import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { RealScoutHomeValue } from '@/components/widgets/RealScoutHomeValue';
import { RealScoutCondoListings } from '@/components/widgets/RealScoutCondoListings';
import { RealScoutFamilyHomes } from '@/components/widgets/RealScoutFamilyHomes';

type IFinancialPlanningProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Financial Planning for Divorce Real Estate | Dr. Jan Duffy',
    description: 'Expert financial planning guidance for divorce real estate. Understand financial implications and plan for your future.',
    keywords: 'financial planning divorce, divorce real estate finances, property division finances',
  };
}

export default async function FinancialPlanning(props: IFinancialPlanningProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <DivorcePageTemplate
        h1="Financial Planning for Divorce Real Estate"
        heroSubhead="Plan for Your Financial Future"
      >
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2>Financial Planning for Divorce Real Estate</h2>
          <p>
            Divorce real estate decisions have significant financial implications that affect your future. Understanding these implications and planning accordingly is essential for protecting your financial well-being. Dr. Jan Duffy provides financial planning guidance that helps you understand costs, plan for expenses, and make decisions that support your long-term financial health.
          </p>

          <h3>Why Financial Planning Matters</h3>
          <p>
            Good financial planning helps you make informed decisions, avoid costly mistakes, and protect your financial future. Understanding financial implications is essential for successful divorce real estate navigation.
          </p>

          <h2>Understanding Costs and Expenses</h2>
          <p>
            Divorce real estate transactions involve various costs and expenses that must be considered in financial planning. Understanding these costs helps you plan and make informed decisions.
          </p>

          <h3>Transaction Costs</h3>
          <p>
            Transaction costs include commissions, closing costs, repairs, and other expenses. These costs reduce net proceeds and must be considered in financial planning.
          </p>

          <h3>Ongoing Expenses</h3>
          <p>
            If you're keeping the home, ongoing expenses include mortgage, property taxes, insurance, and maintenance. Understanding these ongoing costs is essential for financial planning.
          </p>

          <h2>Tax Implications</h2>
          <p>
            Divorce real estate transactions can have tax implications that affect your financial situation. Understanding these implications helps you plan and make informed decisions.
          </p>

          <h3>Capital Gains Tax</h3>
          <p>
            Selling your home may have capital gains tax implications, though primary residence exclusions often apply. Understanding these implications helps you plan accordingly.
          </p>

          <h3>Property Transfer Taxes</h3>
          <p>
            Property transfers may involve taxes or fees. Understanding these helps you plan for all costs.
          </p>

          <h2>Planning for Your Future</h2>
          <p>
            Financial planning for divorce real estate involves planning for your future financial needs. This includes understanding how property decisions affect your ability to meet future goals.
          </p>

          <h3>Housing Affordability</h3>
          <p>
            Understanding what you can afford after divorce is essential. This includes considering your income, expenses, and financial goals.
          </p>

          <h3>Long-Term Goals</h3>
          <p>
            Property decisions should support your long-term financial goals. Dr. Jan Duffy helps you understand how decisions affect your ability to meet these goals.
          </p>

          <h2>Get Financial Planning Guidance Today</h2>
          <p>
            Financial planning is essential for protecting your financial future during divorce. Schedule a consultation with Dr. Jan Duffy today and get expert financial planning guidance for your divorce real estate decisions.
          </p>
        </div>
      </DivorcePageTemplate>
      <RealScoutHomeValue />
      <RealScoutCondoListings />
      <RealScoutFamilyHomes />
    </>
  );
}

