import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';

type ICDREProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'CDRE Real Estate Agent Nevada | Certified Divorce Real Estate Expert Las Vegas | Dr. Jan Duffy',
    description: 'CDRE real estate agent Nevada. Certified Divorce Real Estate Expert (CDRE) services in Las Vegas. Specialized training and expertise for divorce transactions.',
    keywords: 'CDRE real estate agent Nevada, certified divorce real estate expert Las Vegas, CDRE, divorce real estate certification, certified divorce real estate expert',
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
        <h2>What is a CDRE Real Estate Agent?</h2>
        <p>
          A CDRE (Certified Divorce Real Estate Expert) real estate agent is a professional who has received specialized training in handling real estate transactions during divorce. This certification, offered through the Ilumni® Institute, provides comprehensive education on the legal, financial, and emotional aspects of divorce real estate, ensuring professionals have the expertise needed to handle these complex transactions effectively.
        </p>
        <p>
          CDRE real estate agents in Nevada understand the unique challenges of divorce transactions, including property division laws, court-ordered sales, buyout calculations, and the emotional dynamics that make divorce real estate fundamentally different from traditional transactions.
        </p>

        <h3>CDRE Certification and Specialized Training</h3>
        <p>
          CDRE certification involves comprehensive training on divorce real estate, including property division, court-ordered sales, buyouts, and the unique challenges of divorce transactions. This specialized training ensures CDRE professionals have the expertise needed to handle these complex situations. CDRE real estate agents in Nevada must complete rigorous coursework covering:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Nevada community property laws and property division</li>
          <li>Court-ordered home sales and compliance</li>
          <li>Buyout calculations and refinancing strategies</li>
          <li>Emotional dynamics and neutral representation</li>
          <li>Attorney coordination and legal requirements</li>
          <li>Timeline management and escalation protocols</li>
        </ul>

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

