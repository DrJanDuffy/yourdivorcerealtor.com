import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';

type IExpertWitnessProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Divorce Real Estate Expert Witness Services | Dr. Jan Duffy',
    description: 'Expert witness services for divorce cases involving real estate. Professional testimony on property values and market conditions.',
    keywords: 'divorce real estate expert witness, expert witness real estate, court testimony real estate',
  };
}

export default async function ExpertWitness(props: IExpertWitnessProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <DivorcePageTemplate
      h1="Divorce Real Estate Expert Witness Services"
      heroSubhead="Professional Testimony for Your Case"
    >
      <div className="max-w-4xl mx-auto prose prose-lg">
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
  );
}

