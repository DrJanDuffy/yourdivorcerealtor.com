import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { RealScoutHomeValue } from '@/components/widgets/RealScoutHomeValue';
import { RealScoutCondoListings } from '@/components/widgets/RealScoutCondoListings';
import { RealScoutFamilyHomes } from '@/components/widgets/RealScoutFamilyHomes';

type IHendersonProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Divorce Realtor in Henderson Nevada | Dr. Jan Duffy',
    description: 'Expert divorce real estate services in Henderson, Nevada. Helping divorcing homeowners in Henderson navigate property division, home sales, and fresh starts.',
    keywords: 'divorce realtor henderson, henderson divorce real estate, divorce realtor henderson nevada',
  };
}

export default async function Henderson(props: IHendersonProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <DivorcePageTemplate
        h1="Divorce Realtor in Henderson Nevada"
        heroSubhead="Expert Divorce Real Estate Services in Henderson"
      >
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2>Why Choose Dr. Jan Duffy for Henderson Divorce Real Estate?</h2>
          <p>
            Henderson, Nevada, is one of Las Vegas's most desirable communities, known for its excellent schools, family-friendly neighborhoods, and strong real estate market. When you're going through a divorce in Henderson, you need a real estate professional who understands both the local market and the unique challenges of divorce transactions. Dr. Jan Duffy brings specialized expertise to Henderson divorcing homeowners, ensuring your property transaction supports your overall divorce resolution.
          </p>

          <h3>Understanding the Henderson Real Estate Market</h3>
          <p>
            Henderson's real estate market has unique characteristics that impact divorce transactions. Property values, market trends, and neighborhood dynamics all play a role in property division decisions. Dr. Jan Duffy's deep knowledge of the Henderson market ensures accurate valuations and informed decision-making for divorcing homeowners.
          </p>

          <h2>Henderson Divorce Real Estate Services</h2>
          <p>
            Dr. Jan Duffy provides comprehensive divorce real estate services specifically tailored for Henderson homeowners. Whether you're in Green Valley, Anthem, Seven Hills, or any other Henderson neighborhood, she has the local expertise to guide you through your property transaction.
          </p>

          <h3>Home Valuation in Henderson</h3>
          <p>
            Accurate home valuation is critical for property division during divorce. Dr. Jan Duffy provides comprehensive market analyses for Henderson properties, using comparable sales, current market conditions, and neighborhood-specific factors. Her valuations support fair property division negotiations and informed decision-making.
          </p>

          <h3>Henderson Property Sales</h3>
          <p>
            Selling a home in Henderson during divorce requires specialized expertise. Dr. Jan Duffy's divorce listing process is customized to address the unique challenges of divorce transactions while maximizing your property's value in the Henderson market. She understands how to present Henderson properties effectively and coordinate with both parties throughout the process.
          </p>

          <h2>Henderson Neighborhoods We Serve</h2>
          <p>
            Dr. Jan Duffy serves all Henderson neighborhoods, including Green Valley, Anthem, Seven Hills, MacDonald Ranch, and more. Her local expertise ensures you receive accurate valuations and effective marketing regardless of where your property is located in Henderson.
          </p>

          <h3>Green Valley</h3>
          <p>
            Green Valley is one of Henderson's most established communities, known for its excellent schools and family-friendly atmosphere. Divorce real estate transactions in Green Valley require understanding the local market dynamics and neighborhood appeal. Dr. Jan Duffy has extensive experience with Green Valley properties and understands what makes them valuable.
          </p>

          <h3>Anthem</h3>
          <p>
            Anthem is a master-planned community known for its amenities and quality of life. Properties in Anthem often have unique features and community benefits that impact their value. Dr. Jan Duffy understands these factors and can help you navigate property division in Anthem effectively.
          </p>

          <h2>Why Henderson Homeowners Choose Dr. Jan Duffy</h2>
          <p>
            Henderson divorcing homeowners consistently choose Dr. Jan Duffy for her specialized expertise, local market knowledge, and compassionate service. Her approach addresses the unique challenges of divorce transactions while leveraging Henderson's strong real estate market to achieve optimal outcomes.
          </p>

          <h3>Local Market Expertise</h3>
          <p>
            Dr. Jan Duffy's deep knowledge of the Henderson real estate market ensures accurate valuations and effective marketing. She understands neighborhood trends, property values, and what makes Henderson properties desirable to buyers.
          </p>

          <h3>Specialized Divorce Expertise</h3>
          <p>
            Beyond local market knowledge, Dr. Jan Duffy brings specialized expertise in divorce real estate. She understands the legal, financial, and emotional aspects of property division during divorce, ensuring your Henderson property transaction supports your overall divorce resolution.
          </p>

          <h2>Henderson Divorce Real Estate Process</h2>
          <p>
            Dr. Jan Duffy's process for Henderson divorce real estate transactions is designed to be smooth, transparent, and results-oriented. She maintains clear communication with all parties, provides accurate timelines, and ensures compliance with any court orders or settlement agreements.
          </p>

          <h3>Initial Consultation</h3>
          <p>
            Your journey begins with a confidential consultation where Dr. Jan Duffy learns about your situation, answers your questions, and helps you understand your options. She'll provide an initial Henderson market analysis and outline the process for your specific circumstances.
          </p>

          <h3>Property Valuation</h3>
          <p>
            Accurate Henderson property valuation is essential for property division. Dr. Jan Duffy conducts comprehensive market analyses using Henderson-specific comparable sales and current market conditions. This valuation supports fair negotiations and informed decision-making.
          </p>

          <h3>Transaction Execution</h3>
          <p>
            Once you've decided on your path forward, Dr. Jan Duffy executes the transaction with professionalism and expertise. She coordinates with attorneys, lenders, and other professionals while maintaining clear communication with all parties throughout the process.
          </p>

          <h2>Get Started with Henderson Divorce Real Estate</h2>
          <p>
            If you're going through a divorce in Henderson, don't wait to address your real estate situation. Schedule a confidential consultation with Dr. Jan Duffy today and learn how her specialized expertise can help you navigate property division, home sales, or buyouts in Henderson. She's here to support you through this challenging time and help you move forward with confidence.
          </p>
        </div>
      </DivorcePageTemplate>
      <RealScoutHomeValue />
      <RealScoutCondoListings />
      <RealScoutFamilyHomes />
    </>
  );
}

