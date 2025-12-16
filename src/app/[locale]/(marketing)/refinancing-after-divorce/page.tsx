import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { RealScoutCondoListings } from '@/components/widgets/RealScoutCondoListings';
import { RealScoutFamilyHomes } from '@/components/widgets/RealScoutFamilyHomes';

type IRefinancingProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Refinancing Your Home After Divorce | Dr. Jan Duffy',
    description: 'Expert guidance for refinancing your home after divorce. Remove your ex from the mortgage and protect your credit.',
    keywords: 'refinancing after divorce, remove spouse from mortgage, divorce refinancing',
  };
}

export default async function RefinancingAfterDivorce(props: IRefinancingProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <DivorcePageTemplate
        h1="Refinancing Your Home After Divorce"
        heroSubhead="Remove Your Ex from the Mortgage"
      >
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2>Why Refinancing After Divorce Matters</h2>
          <p>
            If you're keeping the home after divorce, refinancing removes your ex-spouse from the mortgage, protecting both your credit and theirs. This is essential even if your divorce decree says you're responsible for the mortgage—without refinancing, both names remain on the loan, and both credit scores are affected by payment history. Dr. Jan Duffy helps coordinate the refinancing process, ensuring it supports your property division agreement and protects your financial future.
          </p>

          <h3>The Credit Protection Issue</h3>
          <p>
            Without refinancing, both spouses remain legally responsible for the mortgage, even if only one is making payments. This means both credit scores are affected by payment history, and both are at risk if payments are missed. Refinancing removes this risk and protects both parties' credit.
          </p>

          <h2>The Refinancing Process</h2>
          <p>
            Refinancing after divorce involves qualifying for a new mortgage based on your income alone, which can be challenging but is often achievable with proper planning. Dr. Jan Duffy helps coordinate with lenders and ensures the process supports your property division agreement.
          </p>

          <h3>Qualification Requirements</h3>
          <p>
            Refinancing requires qualifying for a new mortgage based on your income alone. Lenders will evaluate your income, credit, debt-to-income ratio, and the property's value. Dr. Jan Duffy helps you understand these requirements and coordinate with lenders.
          </p>

          <h3>Lender Coordination</h3>
          <p>
            Dr. Jan Duffy works with lenders to ensure the refinancing process proceeds smoothly. She helps coordinate documentation, appraisals, and closing, ensuring everything aligns with your property division agreement.
          </p>

          <h2>Financial Considerations</h2>
          <p>
            Refinancing has financial implications that must be carefully considered. Understanding these implications helps you make informed decisions and plan accordingly.
          </p>

          <h3>Interest Rates</h3>
          <p>
            Current interest rates affect your new mortgage payment. Dr. Jan Duffy helps you understand how rates impact your payment and whether refinancing makes financial sense.
          </p>

          <h3>Closing Costs</h3>
          <p>
            Refinancing involves closing costs that must be paid. Dr. Jan Duffy helps you understand these costs and plan for them.
          </p>

          <h2>Get Refinancing Help Today</h2>
          <p>
            Refinancing after divorce is important for protecting your credit and financial future. Dr. Jan Duffy provides the expertise and coordination you need to navigate this process successfully. Schedule a consultation today and learn how she can help you refinance and protect your financial future.
          </p>
        </div>
      </DivorcePageTemplate>
      <RealScoutCondoListings />
      <RealScoutFamilyHomes />
    </>
  );
}

