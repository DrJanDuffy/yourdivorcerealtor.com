import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';

type IDocumentsProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Divorce Real Estate Documents You Need | Dr. Jan Duffy',
    description: 'Essential documents for divorce real estate transactions. Know what documents you need and why.',
    keywords: 'divorce real estate documents, property division documents, divorce property paperwork',
  };
}

export default async function RealEstateDocuments(props: IDocumentsProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <DivorcePageTemplate
      h1="Divorce Real Estate Documents You Need"
      heroSubhead="Know What Documents You Need and Why"
    >
      <div className="max-w-4xl mx-auto prose prose-lg">
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
  );
}

