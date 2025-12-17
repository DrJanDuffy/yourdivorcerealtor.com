import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import {
  generateServiceSchema,
  generateRealEstateAgentSchema,
} from '@/lib/schema';

type IAppraisalProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Divorce Appraisal Services Las Vegas | Dr. Jan Duffy',
    description: 'Professional divorce appraisal services in Las Vegas. Accurate property valuations for property division and court proceedings.',
    keywords: 'divorce appraisal, property appraisal divorce, las vegas divorce appraisal',
  };
}

export default async function AppraisalServices(props: IAppraisalProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const currentPath = '/divorce-appraisal-services';
  const serviceSchema = generateServiceSchema(
    'Divorce Appraisal Services',
    'Professional divorce appraisal services in Las Vegas. Accurate property valuations for property division and court proceedings.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Divorce Appraisal Services Las Vegas"
        heroSubhead="Accurate Valuations for Property Division"
        showHomeValue
        currentPath={currentPath}
      >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Professional Divorce Appraisal Services</h2>
        <p>
          Accurate property appraisals are essential for property division during divorce. Dr. Jan Duffy provides comprehensive appraisal services specifically designed for divorce situations, ensuring you have accurate, defensible valuations that support property division negotiations and court proceedings.
        </p>

        <h3>Why Professional Appraisals Matter</h3>
        <p>
          Professional appraisals provide credible, defensible valuations that support property division negotiations and court proceedings. Dr. Jan Duffy's appraisals are thorough, well-documented, and court-ready.
        </p>

        <h2>Appraisal Process</h2>
        <p>
          Dr. Jan Duffy's appraisal process is comprehensive and designed to provide accurate, defensible valuations. She uses multiple methods and considers all relevant factors to ensure accuracy.
        </p>

        <h2>Get Appraisal Services Today</h2>
        <p>
          Accurate appraisals are essential for fair property division. Schedule a consultation with Dr. Jan Duffy today and get the professional appraisal services you need for your divorce case.
        </p>
      </div>
    </DivorcePageTemplate>
    </>
  );
}
