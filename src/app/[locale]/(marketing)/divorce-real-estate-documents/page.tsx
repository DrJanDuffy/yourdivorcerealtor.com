import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import { generateLocaleAlternates } from '@/lib/metadata';
import {
  generateRealEstateAgentSchema,
  generateServiceSchema,
} from '@/lib/schema';

type IDocumentsProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

const path = '/divorce-real-estate-documents';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'Divorce Real Estate Documents You Need | Dr. Jan Duffy',
    description: 'Essential documents for divorce real estate transactions. Know what documents you need and why.',
    keywords: 'divorce real estate documents, property division documents, divorce property paperwork',
    alternates: { canonical, languages },
  };
}

export default async function RealEstateDocuments(props: IDocumentsProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const currentPath = '/divorce-real-estate-documents';
  const serviceSchema = generateServiceSchema(
    'Divorce Real Estate Documents Services',
    'Essential documents for divorce real estate transactions. Know what documents you need and why.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Divorce Real Estate Documents You Need"
        heroSubhead="Know What Documents You Need and Why"
        currentPath={currentPath}
      >
        <div className="prose prose-lg mx-auto max-w-4xl">
          <h2>Essential Documents for Divorce Real Estate</h2>
          <p>
            Divorce real estate transactions involve extensive documentation. Understanding what documents you need and why helps ensure the process proceeds smoothly. Dr. Jan Duffy helps you understand required documents and coordinates with attorneys to ensure all documentation is completed correctly.
          </p>

          <h3>Why Documentation Matters</h3>
          <p>
            Proper documentation ensures legal compliance, protects your interests, and supports smooth transactions. Dr. Jan Duffy ensures all required documents are prepared correctly and completed on time.
          </p>

          <h2>Common Documents Needed</h2>
          <p>
            Divorce real estate transactions typically require various documents, depending on your specific situation and chosen path.
          </p>

          <h3>Property Documents</h3>
          <ul>
            <li>Deed to property</li>
            <li>Mortgage statements</li>
            <li>Property tax records</li>
            <li>Homeowners insurance documents</li>
            <li>Homeowners association documents (if applicable)</li>
          </ul>

          <h3>Divorce Documents</h3>
          <ul>
            <li>Divorce decree or settlement agreement</li>
            <li>Court orders (if applicable)</li>
            <li>Property division agreements</li>
          </ul>

          <h3>Transaction Documents</h3>
          <ul>
            <li>Quitclaim deeds (if applicable)</li>
            <li>Refinancing documents (if applicable)</li>
            <li>Sale contracts</li>
            <li>Closing documents</li>
          </ul>

          <h2>Get Document Guidance Today</h2>
          <p>
            Understanding required documents helps ensure smooth transactions. Schedule a consultation with Dr. Jan Duffy today and get expert guidance on the documents you need for your specific situation.
          </p>
        </div>
      </DivorcePageTemplate>
    </>
  );
}
