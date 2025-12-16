import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';

type IAttorneyCollabProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Working with Family Law Attorneys on Divorce Property | Dr. Jan Duffy',
    description: 'Professional collaboration with family law attorneys on divorce property cases. Expert coordination and support.',
    keywords: 'family law attorney collaboration, divorce attorney real estate, attorney real estate coordination',
  };
}

export default async function AttorneyCollaboration(props: IAttorneyCollabProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <DivorcePageTemplate
      h1="Working with Family Law Attorneys on Divorce Property"
      heroSubhead="Professional Collaboration for Your Clients"
    >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Professional Collaboration with Family Law Attorneys</h2>
        <p>
          Divorce cases involving real estate require collaboration between family law attorneys and real estate professionals. Dr. Jan Duffy works seamlessly with family law attorneys throughout Las Vegas, providing property valuations, market analyses, and transaction coordination that supports your legal strategy and ensures comprehensive support for your clients.
        </p>

        <h3>Why Collaboration Matters</h3>
        <p>
          Effective collaboration ensures your clients receive comprehensive support during divorce. Real estate expertise complements legal representation, ensuring property transactions support overall divorce resolution and legal strategies.
        </p>

        <h2>Services for Attorneys</h2>
        <p>
          Dr. Jan Duffy provides a range of services specifically designed to support family law attorneys and their clients during divorce proceedings involving real estate.
        </p>

        <h3>Property Valuations</h3>
        <p>
          Accurate property valuations are essential for property division negotiations and court proceedings. Dr. Jan Duffy provides comprehensive, court-ready valuations that support your legal strategy.
        </p>

        <h3>Expert Witness Services</h3>
        <p>
          When court involvement is necessary, Dr. Jan Duffy can serve as an expert witness, providing professional testimony on property values and market conditions.
        </p>

        <h3>Transaction Coordination</h3>
        <p>
          Dr. Jan Duffy coordinates property transactions, ensuring compliance with court orders or settlement agreements and supporting your legal strategy.
        </p>

        <h2>Get Started with Collaboration</h2>
        <p>
          If you're a family law attorney working on divorce cases involving real estate, Dr. Jan Duffy is here to help. Contact her today to learn how her specialized expertise can support your clients and your legal practice.
        </p>
      </div>
    </DivorcePageTemplate>
  );
}

