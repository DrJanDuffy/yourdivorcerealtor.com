import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { RealScoutHomeValue } from '@/components/widgets/RealScoutHomeValue';
import { RealScoutCondoListings } from '@/components/widgets/RealScoutCondoListings';
import { RealScoutFamilyHomes } from '@/components/widgets/RealScoutFamilyHomes';

type ISummerlinProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Summerlin Divorce Realtor | Divorce Realtor Summerlin | Dr. Jan Duffy',
    description: 'Divorce realtor Summerlin helping divorcing homeowners. Summerlin divorce home sale expert. Property division, home sales, and buyouts in Summerlin, Las Vegas.',
    keywords: 'divorce realtor Summerlin, Summerlin divorce realtor, Summerlin divorce home sale, divorce real estate Summerlin, divorce realtor Summerlin Las Vegas',
  };
}

export default async function Summerlin(props: ISummerlinProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <DivorcePageTemplate
        h1="Divorce Realtor Summerlin"
        heroSubhead="Summerlin Divorce Home Sale Expert"
      >
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2>Summerlin Divorce Real Estate Expertise</h2>
          <p>
            Summerlin is one of Las Vegas's premier master-planned communities, known for its quality of life, excellent amenities, and strong real estate values. When you're going through a divorce in Summerlin, you need a real estate professional who understands both the local market and the unique challenges of divorce transactions. Dr. Jan Duffy brings specialized expertise to Summerlin divorcing homeowners, ensuring your property transaction supports your overall divorce resolution.
          </p>

          <h3>Understanding the Summerlin Market</h3>
          <p>
            Summerlin's real estate market has unique characteristics that impact divorce transactions. The community's master-planned nature, amenities, and reputation all influence property values and market dynamics. Dr. Jan Duffy's deep knowledge of the Summerlin market ensures accurate valuations and informed decision-making for divorcing homeowners.
          </p>

          <h2>Summerlin Divorce Real Estate Services</h2>
          <p>
            Dr. Jan Duffy provides comprehensive divorce real estate services specifically tailored for Summerlin homeowners. Whether you're in The Trails, The Hills, The Paseos, or any other Summerlin village, she has the local expertise to guide you through your property transaction.
          </p>

          <h3>Home Valuation in Summerlin</h3>
          <p>
            Accurate home valuation is critical for property division during divorce. Dr. Jan Duffy provides comprehensive market analyses for Summerlin properties, using comparable sales within the community, current market conditions, and Summerlin-specific factors. Her valuations support fair property division negotiations and informed decision-making.
          </p>

          <h3>Summerlin Property Sales</h3>
          <p>
            Selling a home in Summerlin during divorce requires specialized expertise. Dr. Jan Duffy's divorce listing process is customized to address the unique challenges of divorce transactions while maximizing your property's value in the Summerlin market. She understands how to present Summerlin properties effectively, highlighting community amenities and quality of life features that make these properties desirable.
          </p>

          <h2>Why Summerlin Homeowners Choose Dr. Jan Duffy</h2>
          <p>
            Summerlin divorcing homeowners consistently choose Dr. Jan Duffy for her specialized expertise, local market knowledge, and compassionate service. Her approach addresses the unique challenges of divorce transactions while leveraging Summerlin's strong real estate market to achieve optimal outcomes.
          </p>

          <h3>Local Market Expertise</h3>
          <p>
            Dr. Jan Duffy's deep knowledge of the Summerlin real estate market ensures accurate valuations and effective marketing. She understands neighborhood trends, property values, and what makes Summerlin properties desirable to buyers. This local expertise is essential for achieving optimal outcomes in divorce real estate transactions.
          </p>

          <h3>Specialized Divorce Expertise</h3>
          <p>
            Beyond local market knowledge, Dr. Jan Duffy brings specialized expertise in divorce real estate. She understands the legal, financial, and emotional aspects of property division during divorce, ensuring your Summerlin property transaction supports your overall divorce resolution.
          </p>

          <h2>Get Started with Summerlin Divorce Real Estate</h2>
          <p>
            If you're going through a divorce in Summerlin, don't wait to address your real estate situation. Schedule a confidential consultation with Dr. Jan Duffy today and learn how her specialized expertise can help you navigate property division, home sales, or buyouts in Summerlin. She's here to support you through this challenging time and help you move forward with confidence.
          </p>
        </div>
      </DivorcePageTemplate>
      <RealScoutHomeValue />
      <RealScoutCondoListings />
      <RealScoutFamilyHomes />
    </>
  );
}

