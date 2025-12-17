import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import {
  generateServiceSchema,
  generateRealEstateAgentSchema,
} from '@/lib/schema';
import Link from 'next/link';

type IAttorneyResourcesProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Real Estate Expert Family Law | Divorce Attorney Real Estate Referral | Dr. Jan Duffy',
    description: 'Real estate expert for family law attorneys. Divorce attorney real estate referral services. Property valuations, expert testimony, court-appointed real estate Nevada. B2B resources.',
    keywords: 'real estate expert family law, divorce attorney real estate referral, family law real estate specialist, court appointed real estate Nevada, collaborative divorce real estate, real estate expert witness family law',
  };
}

export default async function AttorneyResources(props: IAttorneyResourcesProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const currentPath = '/attorney-resources';
  const serviceSchema = generateServiceSchema(
    'Attorney Collaboration Services',
    'Real estate expert for family law attorneys. Divorce attorney real estate referral services. Property valuations, expert testimony, court-appointed real estate Nevada.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        currentPath={currentPath}
      h1="Attorney Resources for Divorce Real Estate"
      heroSubhead="Working Together for Your Clients"
    >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Supporting Family Law Attorneys</h2>
        <p>
          Family law attorneys face complex challenges when divorce cases involve real estate. Property division, home sales, and buyouts all require specialized real estate expertise that complements legal representation. Dr. Jan Duffy provides comprehensive resources and support for family law attorneys, ensuring your clients receive the specialized real estate expertise they need during divorce.
        </p>

        <h3>Professional Collaboration</h3>
        <p>
          Dr. Jan Duffy understands the importance of professional collaboration in divorce cases. She works seamlessly with family law attorneys, providing property valuations, market analyses, and transaction coordination that supports your legal strategy. Her expertise complements your legal representation, ensuring comprehensive support for your clients.
        </p>

        <h2>Services for Attorneys</h2>
        <p>
          Dr. Jan Duffy provides a range of services specifically designed to support family law attorneys and their clients during divorce proceedings involving real estate.
        </p>

        <h3>Property Valuations</h3>
        <p>
          Accurate property valuations are essential for property division negotiations and court proceedings. Dr. Jan Duffy provides comprehensive, court-ready valuations that are thoroughly documented and defensible. Her valuations support your legal strategy and provide credible evidence for negotiations or court proceedings.
        </p>

        <h3>Expert Witness Services</h3>
        <p>
          When court involvement is necessary, Dr. Jan Duffy can serve as an expert witness, providing professional testimony on property values, market conditions, and transaction feasibility. Her expertise and credibility make her a valuable resource in contested divorce cases.
        </p>

        <h3>Transaction Coordination</h3>
        <p>
          When property transactions are part of divorce settlements, coordination is essential. Dr. Jan Duffy coordinates transactions, ensuring compliance with court orders or settlement agreements. She maintains clear communication with all parties and ensures transactions proceed according to legal requirements.
        </p>

        <h2>Court-Appointed Services</h2>
        <p>
          When courts appoint real estate professionals for divorce cases, Dr. Jan Duffy provides neutral, professional service that ensures court orders are followed exactly. Her experience with court-appointed transactions makes her uniquely qualified for these situations.
        </p>

        <h3>Neutral Representation</h3>
        <p>
          Court-appointed service requires strict neutrality. Dr. Jan Duffy provides equal treatment to all parties, ensuring fair outcomes while maintaining compliance with court directives. Her neutral approach supports fair resolutions and reduces conflict.
        </p>

        <h3>Compliance and Documentation</h3>
        <p>
          Court-appointed transactions require strict compliance with court orders and comprehensive documentation. Dr. Jan Duffy ensures all requirements are met and provides detailed documentation that supports compliance and transparency.
        </p>

        <h2>Resources Available</h2>
        <p>
          Dr. Jan Duffy provides various resources to support family law attorneys and their clients during divorce proceedings involving real estate.
        </p>

        <h3>Property Valuation Reports</h3>
        <p>
          Comprehensive property valuation reports provide detailed analysis, documentation, and conclusions. These reports are court-ready and can be used in negotiations, mediations, or court proceedings. Dr. Jan Duffy's reports are thorough, professional, and defensible.
        </p>

        <h3>Market Analysis Reports</h3>
        <p>
          Market analysis reports provide insights into current market conditions, trends, and property values. These reports help attorneys understand market context and support property division strategies.
        </p>

        <h3>Transaction Documentation</h3>
        <p>
          When transactions are part of divorce settlements, comprehensive documentation is essential. Dr. Jan Duffy provides detailed transaction documentation that supports compliance with agreements and court orders.
        </p>

        <h2>Working with Mediators</h2>
        <p>
          For cases involving mediation, Dr. Jan Duffy provides real estate expertise that supports productive mediation sessions. She can provide valuations, market analyses, and transaction information that helps parties make informed decisions during mediation.
        </p>

        <h3>Mediation Support</h3>
        <p>
          Dr. Jan Duffy understands the mediation process and provides information and analysis that supports productive mediation. Her expertise helps parties understand their options and make informed decisions during mediation sessions.
        </p>

        <h2>Referral Process</h2>
        <p>
          Referring clients to Dr. Jan Duffy is simple. She provides initial consultations to understand the situation, provides valuations or analyses as needed, and coordinates with attorneys throughout the process. Her professional approach ensures seamless collaboration.
        </p>

        <h3>Initial Consultation</h3>
        <p>
          Dr. Jan Duffy provides confidential consultations to understand the situation and determine how she can help. She coordinates with attorneys to ensure her services support the overall legal strategy.
        </p>

        <h3>Ongoing Communication</h3>
        <p>
          Throughout the process, Dr. Jan Duffy maintains clear communication with attorneys, ensuring everyone stays informed and coordinated. Her communication supports effective collaboration and better outcomes for clients.
        </p>

        <h2>Why Attorneys Choose Dr. Jan Duffy</h2>
        <p>
          Family law attorneys consistently choose Dr. Jan Duffy for her specialized expertise, professional collaboration, and proven results. Her approach supports legal strategies and ensures clients receive comprehensive support during divorce proceedings involving real estate.
        </p>

        <h3>Specialized Expertise</h3>
        <p>
          Dr. Jan Duffy's specialized knowledge of divorce real estate ensures accurate valuations, effective transactions, and court-ready documentation. Her expertise complements legal representation and supports better outcomes for clients.
        </p>

        <h3>Professional Collaboration</h3>
        <p>
          Dr. Jan Duffy understands the importance of professional collaboration and works seamlessly with attorneys to support clients. Her communication and coordination ensure effective teamwork throughout the process.
        </p>

        <h2>Contact Dr. Jan Duffy</h2>
        <p>
          If you're a family law attorney working on divorce cases involving real estate, Dr. Jan Duffy is here to help. <Link href="/contact" className="text-blue-600 hover:text-blue-700">Contact her today</Link> to learn how her specialized expertise can support your clients and your legal practice.
        </p>
      </div>
      </DivorcePageTemplate>
    </>
  );
}

