import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import { RealScoutFamilyHomes } from '@/components/widgets/RealScoutFamilyHomes';
import { RealScoutHomeValue } from '@/components/widgets/RealScoutHomeValue';
import { generateLocaleAlternates } from '@/lib/metadata';
import {
  generateLocalBusinessSchema,
  generateRealEstateAgentSchema,
  generateServiceSchema,
} from '@/lib/schema';

type INorthLasVegasProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

const path = '/divorce-realtor-north-las-vegas';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'North Las Vegas Divorce Realtor | Divorce Home Sale North Las Vegas | Dr. Jan Duffy',
    description: 'Divorce home sale North Las Vegas expert. North Las Vegas divorce realtor helping divorcing homeowners with property division, home sales, and buyouts.',
    keywords: 'divorce home sale North Las Vegas, North Las Vegas divorce realtor, divorce realtor North Las Vegas, North Las Vegas divorce real estate, divorce real estate agent North Las Vegas',
    alternates: { canonical, languages },
  };
}

export default async function NorthLasVegas(props: INorthLasVegasProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const currentPath = '/divorce-realtor-north-las-vegas';
  const localBusinessSchema = generateLocalBusinessSchema();
  localBusinessSchema.areaServed = [{ '@type': 'City', 'name': 'North Las Vegas' }];
  const serviceSchema = generateServiceSchema(
    'North Las Vegas Divorce Real Estate Services',
    'Divorce home sale North Las Vegas expert. North Las Vegas divorce realtor helping divorcing homeowners with property division, home sales, and buyouts.',
    'North Las Vegas',
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[localBusinessSchema, serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="North Las Vegas Divorce Realtor"
        heroSubhead="Divorce Home Sale North Las Vegas - Expert Guidance"
        currentPath={currentPath}
      >
        <div className="prose prose-lg mx-auto max-w-4xl">
          <h2>North Las Vegas Divorce Real Estate Expertise</h2>
          <p>
            North Las Vegas offers diverse neighborhoods and affordable housing options, making it an attractive area for many families. When you're going through a divorce in North Las Vegas, you need a real estate professional who understands both the local market and the unique challenges of divorce transactions. Dr. Jan Duffy brings specialized expertise to North Las Vegas divorcing homeowners, ensuring your property transaction supports your overall divorce resolution.
          </p>

          <h3>Understanding the North Las Vegas Market</h3>
          <p>
            North Las Vegas's real estate market offers diverse options from affordable starter homes to newer developments. Understanding these market dynamics is essential for accurate valuations and effective transactions. Dr. Jan Duffy's knowledge of the North Las Vegas market ensures you receive accurate information and effective service.
          </p>

          <h2>North Las Vegas Divorce Real Estate Services</h2>
          <p>
            Dr. Jan Duffy provides comprehensive divorce real estate services for North Las Vegas homeowners. Her specialized approach addresses the unique challenges of divorce transactions while leveraging local market knowledge to achieve optimal outcomes.
          </p>

          <h3>Home Valuation in North Las Vegas</h3>
          <p>
            Accurate home valuation is critical for property division during divorce. Dr. Jan Duffy provides comprehensive market analyses for North Las Vegas properties, considering neighborhood factors, market conditions, and property specifics. Her valuations support fair property division negotiations.
          </p>

          <h3>Property Sales in North Las Vegas</h3>
          <p>
            Selling a home in North Las Vegas during divorce requires specialized expertise. Dr. Jan Duffy's divorce listing process is customized to address divorce transaction challenges while maximizing your property's value in the North Las Vegas market.
          </p>

          <h2>Why North Las Vegas Homeowners Choose Dr. Jan Duffy</h2>
          <p>
            North Las Vegas divorcing homeowners choose Dr. Jan Duffy for her specialized expertise, local market knowledge, and compassionate service. Her approach ensures your property transaction supports your overall divorce resolution.
          </p>

          <h2>Get Started Today</h2>
          <p>
            If you're going through a divorce in North Las Vegas, schedule a confidential consultation with Dr. Jan Duffy today and learn how her specialized expertise can help you navigate property division and home sales.
          </p>
        </div>
      </DivorcePageTemplate>
      <RealScoutHomeValue />
      <RealScoutFamilyHomes />
    </>
  );
}
