import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';

type IMountainsEdgeProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Divorce Realtor in Mountains Edge Las Vegas | Dr. Jan Duffy',
    description: 'Expert divorce real estate services in Mountains Edge, Las Vegas.',
    keywords: 'divorce realtor mountains edge, mountains edge las vegas divorce real estate',
  };
}

export default async function MountainsEdge(props: IMountainsEdgeProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <DivorcePageTemplate
      h1="Divorce Realtor in Mountains Edge Las Vegas"
      heroSubhead="Expert Divorce Real Estate Services in Mountains Edge"
      showHomeValue
    >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Mountains Edge Divorce Real Estate Expertise</h2>
        <p>
          Mountains Edge is a master-planned community in southwest Las Vegas offering newer homes and family amenities. When going through divorce in Mountains Edge, you need specialized real estate expertise. Dr. Jan Duffy provides comprehensive divorce real estate services for Mountains Edge homeowners.
        </p>

        <h2>Mountains Edge Divorce Services</h2>
        <p>
          Dr. Jan Duffy provides comprehensive divorce real estate services for Mountains Edge homeowners, ensuring your property transaction supports your overall divorce resolution.
        </p>

        <h2>Get Started Today</h2>
        <p>
          Schedule a confidential consultation with Dr. Jan Duffy to discuss your Mountains Edge property.
        </p>
      </div>
    </DivorcePageTemplate>
  );
}

