import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { RealScoutHomeValue } from '@/components/widgets/RealScoutHomeValue';
import { RealScoutCondoListings } from '@/components/widgets/RealScoutCondoListings';
import { RealScoutFamilyHomes } from '@/components/widgets/RealScoutFamilyHomes';

type IGreenValleyProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Divorce Realtor in Green Valley Henderson | Dr. Jan Duffy',
    description: 'Expert divorce real estate services in Green Valley, Henderson. Helping divorcing homeowners navigate property division.',
    keywords: 'divorce realtor green valley, green valley henderson divorce real estate',
  };
}

export default async function GreenValley(props: IGreenValleyProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <DivorcePageTemplate
        h1="Divorce Realtor in Green Valley Henderson"
        heroSubhead="Expert Divorce Real Estate Services in Green Valley"
      >
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2>Green Valley Divorce Real Estate Expertise</h2>
          <p>
            Green Valley is one of Henderson's most established and desirable communities, known for excellent schools, family-friendly neighborhoods, and strong property values. When you're going through a divorce in Green Valley, you need specialized real estate expertise that understands both the local market and divorce transaction complexities. Dr. Jan Duffy brings this expertise to Green Valley divorcing homeowners.
          </p>

          <h3>Understanding Green Valley's Market</h3>
          <p>
            Green Valley's established nature, excellent schools, and community amenities create unique market dynamics. Dr. Jan Duffy's deep knowledge of Green Valley ensures accurate valuations and effective transactions that reflect the community's true value.
          </p>

          <h2>Green Valley Divorce Services</h2>
          <p>
            Dr. Jan Duffy provides comprehensive divorce real estate services for Green Valley homeowners, including accurate valuations, specialized listing processes, and buyout assistance tailored to the Green Valley market.
          </p>

          <h2>Why Choose Dr. Jan Duffy for Green Valley</h2>
          <p>
            Green Valley divorcing homeowners choose Dr. Jan Duffy for her specialized divorce expertise combined with deep local market knowledge. Her approach ensures optimal outcomes for Green Valley property transactions during divorce.
          </p>

          <h2>Get Started Today</h2>
          <p>
            Schedule a confidential consultation with Dr. Jan Duffy to discuss your Green Valley property and learn how specialized divorce real estate expertise can support your situation.
          </p>
        </div>
      </DivorcePageTemplate>
      <RealScoutHomeValue />
      <RealScoutCondoListings />
      <RealScoutFamilyHomes />
    </>
  );
}

