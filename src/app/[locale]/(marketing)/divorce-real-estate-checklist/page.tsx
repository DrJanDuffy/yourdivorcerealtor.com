import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import { generateLocaleAlternates } from '@/lib/metadata';
import {
  generateRealEstateAgentSchema,
  generateServiceSchema,
} from '@/lib/schema';

type IChecklistProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

const path = '/divorce-real-estate-checklist';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'Divorce Real Estate Checklist for Las Vegas | Dr. Jan Duffy',
    description: 'Comprehensive checklist for divorce real estate in Las Vegas. Know what to do and when during your divorce property transaction.',
    keywords: 'divorce real estate checklist, divorce property checklist, selling home divorce checklist',
    alternates: { canonical, languages },
  };
}

export default async function RealEstateChecklist(props: IChecklistProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const currentPath = '/divorce-real-estate-checklist';
  const serviceSchema = generateServiceSchema(
    'Divorce Real Estate Checklist Services',
    'Comprehensive checklist for divorce real estate in Las Vegas. Know what to do and when during your divorce property transaction.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Divorce Real Estate Checklist for Las Vegas"
        heroSubhead="Know What to Do and When"
        currentPath={currentPath}
      >
        <div className="prose prose-lg mx-auto max-w-4xl">
          <h2>Your Divorce Real Estate Checklist</h2>
          <p>
            Navigating divorce real estate involves many steps and considerations. This comprehensive checklist helps you stay organized and ensures you don't miss important steps. Dr. Jan Duffy can help you work through this checklist and ensure everything is handled correctly.
          </p>

          <h3>Early Stage Checklist</h3>
          <ul>
            <li>Schedule consultation with divorce real estate specialist</li>
            <li>Get home valuation</li>
            <li>Calculate equity position</li>
            <li>Understand all property options</li>
            <li>Coordinate with attorney</li>
          </ul>

          <h3>Decision Making Checklist</h3>
          <ul>
            <li>Review all property division options</li>
            <li>Consider financial implications</li>
            <li>Consider emotional and practical factors</li>
            <li>Make informed decision</li>
            <li>Document decision in settlement agreement</li>
          </ul>

          <h3>If Selling Checklist</h3>
          <ul>
            <li>Prepare property for sale</li>
            <li>List property</li>
            <li>Coordinate showings</li>
            <li>Review and negotiate offers</li>
            <li>Complete inspections and appraisals</li>
            <li>Close sale</li>
            <li>Distribute proceeds according to agreement</li>
          </ul>

          <h3>If Buyout Checklist</h3>
          <ul>
            <li>Get accurate valuation</li>
            <li>Calculate buyout amount</li>
            <li>Qualify for refinancing</li>
            <li>Complete refinancing</li>
            <li>Execute quitclaim deed</li>
            <li>Update property records</li>
          </ul>

          <h2>Get Checklist Guidance Today</h2>
          <p>
            This checklist provides a framework, but every situation is unique. Schedule a consultation with Dr. Jan Duffy today and get personalized guidance on your specific checklist and timeline.
          </p>
        </div>
      </DivorcePageTemplate>
    </>
  );
}
