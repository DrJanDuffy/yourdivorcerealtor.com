import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';

type ICourtOrderedProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Court-Ordered Home Sale in Divorce | Dr. Jan Duffy',
    description: 'Expert handling of court-ordered home sales in divorce. We handle court orders with strict compliance and professional service.',
    keywords: 'court ordered home sale, divorce court order sale, las vegas court ordered sale',
  };
}

export default async function CourtOrderedSale(props: ICourtOrderedProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <DivorcePageTemplate
      h1="Court-Ordered Home Sale in Divorce"
      heroSubhead="We Handle Court Orders"
      showHomeValue
    >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Understanding Court-Ordered Home Sales</h2>
        <p>
          When courts order home sales as part of divorce proceedings, strict compliance is required. Court orders may specify timelines, pricing requirements, or other conditions that must be followed exactly. Dr. Jan Duffy has extensive experience with court-ordered sales, ensuring all court directives are followed while maximizing your property's value and ensuring timely closings.
        </p>

        <h3>The Importance of Compliance</h3>
        <p>
          Court orders must be followed exactly. Non-compliance can result in legal consequences and delays. Dr. Jan Duffy ensures strict compliance with all court directives while working efficiently to meet requirements.
        </p>

        <h2>Court-Appointed Service</h2>
        <p>
          When court-appointed, Dr. Jan Duffy provides neutral, professional service that ensures court orders are followed exactly. Her experience with court-appointed transactions makes her uniquely qualified for these situations.
        </p>

        <h3>Neutral Representation</h3>
        <p>
          Court-appointed service requires strict neutrality. Dr. Jan Duffy provides equal treatment to all parties, ensuring fair outcomes while maintaining compliance with court directives.
        </p>

        <h3>Compliance and Documentation</h3>
        <p>
          Court-ordered sales require strict compliance and comprehensive documentation. Dr. Jan Duffy ensures all requirements are met and provides detailed documentation that supports compliance and transparency.
        </p>

        <h2>The Court-Ordered Sale Process</h2>
        <p>
          Court-ordered sales follow a structured process designed to ensure compliance while maximizing property value and ensuring timely closings.
        </p>

        <h3>Understanding Court Orders</h3>
        <p>
          Dr. Jan Duffy carefully reviews court orders to understand all requirements, including timelines, pricing, and other conditions. This understanding ensures compliance from the start.
        </p>

        <h3>Coordination with Attorneys</h3>
        <p>
          Court-ordered sales require close coordination with attorneys. Dr. Jan Duffy works seamlessly with legal counsel to ensure the sale process supports compliance with court orders.
        </p>

        <h3>Timeline Management</h3>
        <p>
          Court orders often specify strict timelines. Dr. Jan Duffy manages these timelines carefully, ensuring all deadlines are met while working efficiently to complete the sale.
        </p>

        <h2>Get Court-Ordered Sale Help Today</h2>
        <p>
          Court-ordered sales require specialized expertise and strict compliance. Dr. Jan Duffy provides the experience and professionalism you need to navigate these sales successfully. Schedule a consultation today and learn how she can help you comply with court orders while achieving optimal outcomes.
        </p>
      </div>
    </DivorcePageTemplate>
  );
}

