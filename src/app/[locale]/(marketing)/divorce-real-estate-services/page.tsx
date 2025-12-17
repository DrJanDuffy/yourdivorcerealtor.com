import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import {
  generateServiceSchema,
  generateRealEstateAgentSchema,
} from '@/lib/schema';

type IServicesProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Divorce Real Estate Services in Las Vegas | Dr. Jan Duffy',
    description: 'Comprehensive divorce real estate services in Las Vegas. Home valuation, property division, buyout assistance, and specialized divorce listing process.',
    keywords: 'divorce real estate services, divorce property services, las vegas divorce realtor services',
  };
}

export default async function Services(props: IServicesProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const serviceSchema = generateServiceSchema(
    'Divorce Real Estate Services',
    'Comprehensive divorce real estate services in Las Vegas. Home valuation, property division, buyout assistance, specialized divorce listing process, and expert witness services.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas', 'Green Valley', 'Spring Valley'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Divorce Real Estate Services in Las Vegas"
        heroSubhead="This Isn't Business As Usual"
        showHomeValue
        currentPath="/divorce-real-estate-services"
      >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Specialized Services for Divorcing Homeowners</h2>
        <p>
          Divorce real estate requires specialized expertise that goes far beyond traditional real estate transactions. Dr. Jan Duffy provides comprehensive services designed specifically for divorcing homeowners in Las Vegas. Each service is customized to your unique situation, ensuring your property transaction supports your overall divorce resolution.
        </p>

        <h3>Why Specialized Services Matter</h3>
        <p>
          Traditional real estate processes don't work for divorce transactions. Divorce involves emotional dynamics, legal considerations, financial complexities, and often court involvement. Dr. Jan Duffy's specialized services address these unique challenges, ensuring smoother transactions and better outcomes for all parties involved.
        </p>

        <h2>Home Valuation and Equity Analysis</h2>
        <p>
          Understanding your home's value and equity position is the foundation of property division during divorce. Dr. Jan Duffy provides accurate, comprehensive home valuations and detailed equity analyses that support fair property division negotiations.
        </p>

        <h3>Comprehensive Market Analysis</h3>
        <p>
          Dr. Jan Duffy conducts thorough market analyses using comparable sales, current market conditions, and property-specific factors. This analysis provides an accurate assessment of your home's value, which is essential for property division, buyout calculations, and settlement negotiations.
        </p>

        <h3>Equity Calculations</h3>
        <p>
          Understanding your equity position requires more than just knowing your home's value. Dr. Jan Duffy calculates your equity by considering your home's value, outstanding mortgage balance, and any other liens or encumbrances. This information is critical for determining buyout amounts and dividing assets fairly.
        </p>

        <h2>Divorce Listing Process</h2>
        <p>
          Selling a home during divorce requires a specialized approach that prevents problems before they arise. Dr. Jan Duffy's divorce listing process is customized to address the unique challenges of divorce transactions.
        </p>

        <h3>Neutral Representation</h3>
        <p>
          Dr. Jan Duffy provides equal treatment to all clients and doesn't pick sides. This neutral approach ensures fair outcomes, reduces conflict, and helps both parties move forward. Whether you're the one staying, leaving, or both parties are selling, you'll receive the same level of professional service.
        </p>

        <h3>Communication System</h3>
        <p>
          Everyone stays on the same page with Dr. Jan Duffy's communication system. She maintains transparent communication with both spouses, their attorneys, and any other professionals involved. This ensures all parties are informed, reducing misunderstandings and preventing delays.
        </p>

        <h3>Timeline Transparency</h3>
        <p>
          You'll know exactly how long the process will take and when you'll need to move. Dr. Jan Duffy provides clear timelines based on market conditions, property specifics, and any court orders or settlement agreements. This transparency helps you plan your next steps and reduces stress.
        </p>

        <h2>Buyout and Refinancing Assistance</h2>
        <p>
          If one spouse wants to keep the home, Dr. Jan Duffy can help navigate the entire buyout process. This includes determining fair market value, calculating buyout amounts, and coordinating with lenders for refinancing.
        </p>

        <h3>Buyout Calculations</h3>
        <p>
          Calculating a fair buyout amount requires understanding your home's value, outstanding mortgage balance, and how to divide equity fairly. Dr. Jan Duffy provides detailed buyout calculations that consider all relevant factors, ensuring fair outcomes for both parties.
        </p>

        <h3>Refinancing Coordination</h3>
        <p>
          Removing a spouse from a mortgage requires refinancing, which involves financial qualifications, lender requirements, and legal documentation. Dr. Jan Duffy coordinates with lenders and attorneys to ensure the refinancing process supports your buyout agreement.
        </p>

        <h2>Court-Appointed Services</h2>
        <p>
          When court-appointed, Dr. Jan Duffy dutifully ensures all orders are followed. She understands the importance of neutrality, transparency, and adherence to court directives. Her experience with court-ordered sales and property division makes her uniquely qualified for complex situations.
        </p>

        <h3>Expert Witness Services</h3>
        <p>
          Dr. Jan Duffy can serve as an expert witness, providing professional opinions on property values, market conditions, and transaction feasibility. Her expertise and credibility make her a valuable resource in contested divorce cases.
        </p>

        <h3>Sale Sabotage Escalation</h3>
        <p>
          If someone deviates from the plan, Dr. Jan Duffy's escalation protocol gets things back on track. She understands how to handle non-compliance, coordinate with attorneys, and ensure transactions proceed according to agreements or court orders.
        </p>

        <h2>Professional Collaboration</h2>
        <p>
          Divorce real estate often requires collaboration with other professionals. Dr. Jan Duffy works seamlessly with family law attorneys, divorce mediators, financial advisors, appraisers, and lenders to ensure comprehensive support for her clients.
        </p>

        <h3>Attorney Resources</h3>
        <p>
          Dr. Jan Duffy provides resources and support for family law attorneys, including property valuations, market analyses, and transaction coordination. Her professional relationships with the legal community ensure seamless collaboration throughout your divorce process.
        </p>

        <h3>Mediator Support</h3>
        <p>
          For couples working with mediators, Dr. Jan Duffy provides the real estate expertise needed to make informed decisions about property. She understands the mediation process and can provide information and analysis that supports productive mediation sessions.
        </p>

        <h2>Additional Services</h2>
        <p>
          Beyond the core services, Dr. Jan Duffy provides additional support to help you navigate your divorce real estate transaction successfully.
        </p>

        <h3>Property Preparation</h3>
        <p>
          Preparing a home for sale during divorce requires sensitivity and coordination. Dr. Jan Duffy helps you prepare your property for sale while respecting the emotional dynamics of the situation. She coordinates with both parties to ensure the property is presented in its best light.
        </p>

        <h3>Documentation and Paperwork</h3>
        <p>
          Divorce real estate transactions involve extensive documentation, including quitclaim deeds, refinancing paperwork, and settlement agreements. Dr. Jan Duffy ensures all documentation is completed correctly and coordinates with attorneys to ensure legal compliance.
        </p>

        <h2>Why Choose Dr. Jan Duffy's Services?</h2>
        <p>
          Dr. Jan Duffy's specialized services are designed specifically for divorce real estate. Her approach addresses the unique challenges of divorce transactions, ensuring smoother processes and better outcomes. When you choose Dr. Jan Duffy, you're choosing expertise, compassion, and proven results.
        </p>

        <h3>Specialized Expertise</h3>
        <p>
          Dr. Jan Duffy's specialized knowledge of divorce real estate ensures your transaction is handled correctly from start to finish. She understands the legal, financial, and emotional aspects of property division during divorce.
        </p>

        <h3>Proven Processes</h3>
        <p>
          Her customized processes are designed to prevent problems before they arise. This proactive approach reduces conflict, speeds up transactions, and ensures better outcomes for all parties involved.
        </p>

        <h3>Compassionate Service</h3>
        <p>
          Divorce is emotionally challenging. Dr. Jan Duffy provides compassionate, understanding service that acknowledges the difficulty of your situation while maintaining professional boundaries. She's there to support you through the process, not just complete a transaction.
        </p>

        <h2>Get Started Today</h2>
        <p>
          It's never too early to discuss your real estate options during divorce. Schedule a confidential consultation with Dr. Jan Duffy to learn how her specialized services can support your journey to a new beginning. Whether you're selling, buying, refinancing, or navigating a buyout, she has the expertise to guide you through the process.
        </p>
      </div>
      </DivorcePageTemplate>
    </>
  );
}

