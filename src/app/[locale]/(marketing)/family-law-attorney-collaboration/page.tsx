import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import { generateLocaleAlternates } from '@/lib/metadata';
import {
  generateRealEstateAgentSchema,
  generateServiceSchema,
} from '@/lib/schema';

type IAttorneyCollabProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

const path = '/family-law-attorney-collaboration';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'Family Law Real Estate Specialist | Collaborative Divorce Real Estate | Dr. Jan Duffy',
    description: 'Family law real estate specialist collaborating with attorneys. Collaborative divorce real estate services. Expert coordination, property valuations, and transaction support for family law cases.',
    keywords: 'family law real estate specialist, collaborative divorce real estate, real estate expert family law, divorce attorney collaboration, family law attorney real estate coordination',
    alternates: { canonical, languages },
  };
}

export default async function AttorneyCollaboration(props: IAttorneyCollabProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const currentPath = '/family-law-attorney-collaboration';
  const serviceSchema = generateServiceSchema(
    'Family Law Attorney Collaboration Services',
    'Family law real estate specialist collaborating with attorneys. Collaborative divorce real estate services. Expert coordination, property valuations, and transaction support for family law cases.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Working with Family Law Attorneys on Divorce Property"
        heroSubhead="Professional Collaboration for Your Clients"
        currentPath={currentPath}
      >
        <div className="prose prose-lg mx-auto max-w-4xl">
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
    </>
  );
}
