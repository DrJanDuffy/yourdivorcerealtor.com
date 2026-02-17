import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import { generateLocaleAlternates } from '@/lib/metadata';
import {
  generateRealEstateAgentSchema,
  generateServiceSchema,
} from '@/lib/schema';

type IExpertWitnessProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

const path = '/divorce-real-estate-expert-witness';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'Divorce Real Estate Expert Witness Services | Dr. Jan Duffy',
    description: 'Expert witness services for divorce cases involving real estate. Professional testimony on property values and market conditions.',
    keywords: 'divorce real estate expert witness, expert witness real estate, court testimony real estate',
    alternates: { canonical, languages },
  };
}

export default async function ExpertWitness(props: IExpertWitnessProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const currentPath = '/divorce-real-estate-expert-witness';
  const serviceSchema = generateServiceSchema(
    'Expert Witness Services',
    'Expert witness services for divorce cases involving real estate. Professional testimony on property values and market conditions.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Divorce Real Estate Expert Witness Services"
        heroSubhead="Professional Testimony for Your Case"
        currentPath={currentPath}
      >
        <div className="prose prose-lg mx-auto max-w-4xl">
          <h2>Expert Witness Services for Divorce Cases</h2>
          <p>
            When court involvement is necessary in divorce cases involving real estate, expert witness testimony can be valuable. Dr. Jan Duffy provides expert witness services, offering professional testimony on property values, market conditions, and transaction feasibility. Her expertise and credibility make her a valuable resource in contested divorce cases, supporting your legal strategy with professional, defensible opinions.
          </p>

          <h3>When Expert Testimony is Needed</h3>
          <p>
            Expert testimony is often needed when property values are contested, when market conditions are questioned, or when transaction feasibility is in dispute. Dr. Jan Duffy's expert testimony provides credible, professional opinions that support your case.
          </p>

          <h2>Expert Witness Qualifications</h2>
          <p>
            Dr. Jan Duffy's specialized expertise, professional experience, and comprehensive knowledge of the Las Vegas real estate market qualify her as an expert witness. Her testimony is credible, defensible, and supports your legal case.
          </p>

          <h2>Get Expert Witness Services</h2>
          <p>
            If you need expert witness testimony for your divorce case, Dr. Jan Duffy is here to help. Contact her today to discuss your case and learn how her expert testimony can support your legal strategy.
          </p>
        </div>
      </DivorcePageTemplate>
    </>
  );
}
