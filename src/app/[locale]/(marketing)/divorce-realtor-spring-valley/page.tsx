import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';

type ISpringValleyProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Divorce Realtor in Spring Valley Las Vegas | Dr. Jan Duffy',
    description: 'Expert divorce real estate services in Spring Valley, Las Vegas.',
    keywords: 'divorce realtor spring valley, spring valley las vegas divorce real estate',
  };
}

export default async function SpringValley(props: ISpringValleyProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <DivorcePageTemplate
      h1="Divorce Realtor in Spring Valley Las Vegas"
      heroSubhead="Expert Divorce Real Estate Services in Spring Valley"
      showHomeValue
    >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Spring Valley Divorce Real Estate Expertise</h2>
        <p>
          Spring Valley offers diverse housing options and convenient location within Las Vegas. When going through divorce in Spring Valley, you need specialized real estate expertise. Dr. Jan Duffy provides comprehensive divorce real estate services for Spring Valley homeowners, ensuring your property transaction supports your overall divorce resolution.
        </p>

        <h3>Understanding Spring Valley's Market</h3>
        <p>
          Spring Valley's diverse neighborhoods and convenient location create unique market dynamics. Dr. Jan Duffy's knowledge of Spring Valley ensures accurate valuations and effective transactions.
        </p>

        <h2>Spring Valley Divorce Services</h2>
        <p>
          Dr. Jan Duffy provides comprehensive divorce real estate services for Spring Valley homeowners, including accurate valuations, specialized listing processes, and property division assistance.
        </p>

        <h2>Why Choose Dr. Jan Duffy</h2>
        <p>
          Spring Valley divorcing homeowners choose Dr. Jan Duffy for specialized expertise and local market knowledge. Schedule a consultation today.
        </p>
      </div>
    </DivorcePageTemplate>
  );
}

