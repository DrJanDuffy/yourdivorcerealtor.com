import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';

type ICDREProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Certified Divorce Real Estate Expert Las Vegas | Dr. Jan Duffy',
    description: 'CDRE certified divorce real estate expert services in Las Vegas. Specialized training and expertise for divorce transactions.',
    keywords: 'certified divorce real estate expert, CDRE, divorce real estate certification',
  };
}

export default async function CDRE(props: ICDREProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <DivorcePageTemplate
      h1="Certified Divorce Real Estate Expert Las Vegas"
      heroSubhead="Specialized Training and Expertise"
    >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>What is a Certified Divorce Real Estate Expert?</h2>
        <p>
          A Certified Divorce Real Estate Expert (CDRE) is a real estate professional who has received specialized training in handling real estate transactions during divorce. This certification, offered through the Ilumni® Institute, provides comprehensive education on the legal, financial, and emotional aspects of divorce real estate, ensuring professionals have the expertise needed to handle these complex transactions effectively.
        </p>

        <h3>Specialized Training</h3>
        <p>
          CDRE certification involves comprehensive training on divorce real estate, including property division, court-ordered sales, buyouts, and the unique challenges of divorce transactions. This specialized training ensures CDRE professionals have the expertise needed to handle these complex situations.
        </p>

        <h2>Why CDRE Certification Matters</h2>
        <p>
          Divorce real estate requires specialized expertise that goes beyond standard real estate training. CDRE certification ensures professionals have the knowledge and skills needed to handle these complex transactions effectively, supporting better outcomes for divorcing homeowners.
        </p>

        <h2>Dr. Jan Duffy's CDRE Expertise</h2>
        <p>
          Dr. Jan Duffy brings CDRE-level expertise to every divorce real estate transaction, ensuring you receive specialized service that addresses the unique challenges of divorce transactions. Her expertise supports better outcomes and smoother processes.
        </p>

        <h2>Get CDRE-Level Service Today</h2>
        <p>
          When you work with Dr. Jan Duffy, you receive CDRE-level expertise and specialized service. Schedule a consultation today and experience the difference specialized divorce real estate expertise makes.
        </p>
      </div>
    </DivorcePageTemplate>
  );
}

