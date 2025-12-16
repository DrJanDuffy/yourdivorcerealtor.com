import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';

type IEnterpriseProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Divorce Realtor in Enterprise Las Vegas | Dr. Jan Duffy',
    description: 'Expert divorce real estate services in Enterprise, Las Vegas.',
    keywords: 'divorce realtor enterprise, enterprise las vegas divorce real estate',
  };
}

export default async function Enterprise(props: IEnterpriseProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <DivorcePageTemplate
      h1="Divorce Realtor in Enterprise Las Vegas"
      heroSubhead="Expert Divorce Real Estate Services in Enterprise"
      showHomeValue
    >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Enterprise Divorce Real Estate Expertise</h2>
        <p>
          Enterprise offers growing neighborhoods and family-friendly communities. When going through divorce in Enterprise, you need specialized real estate expertise. Dr. Jan Duffy provides comprehensive divorce real estate services for Enterprise homeowners.
        </p>

        <h2>Enterprise Divorce Services</h2>
        <p>
          Dr. Jan Duffy provides comprehensive divorce real estate services for Enterprise homeowners, ensuring your property transaction supports your overall divorce resolution.
        </p>

        <h2>Get Started Today</h2>
        <p>
          Schedule a confidential consultation with Dr. Jan Duffy to discuss your Enterprise property and learn how specialized divorce real estate expertise can support your situation.
        </p>
      </div>
    </DivorcePageTemplate>
  );
}

