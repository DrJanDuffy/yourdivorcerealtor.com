import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { CalendlyLink } from '@/components/calendly/CalendlyLink';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import { CONTENT_LAST_UPDATED, toSchemaDateTime } from '@/lib/content-dates';
import { generateLocaleAlternates } from '@/lib/metadata';
import {
  generateArticleSchema,
  generateFAQPageSchema,
  generateRealEstateAgentSchema,
  generateServiceSchema,
} from '@/lib/schema';

type ISellingProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

const path = '/selling-home-during-divorce';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'Selling House During Divorce Las Vegas | Dr. Jan Duffy',
    description: 'Expert guidance for selling house during divorce in Las Vegas. Specialized divorce listing process, neutral representation, and proven results. Learn how to sell house during divorce.',
    keywords: 'selling house during divorce Las Vegas, selling house during divorce, how to sell house during divorce, divorce home sale, las vegas divorce home sale, selling marital home divorce',
    alternates: { canonical, languages },
  };
}

export default async function SellingDuringDivorce(props: ISellingProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const baseUrl = 'https://www.yourdivorcerealtor.com';
  const currentPath = '/selling-home-during-divorce';

  const sellingFaqs = [
    {
      question: 'How to Sell House During Divorce?',
      answer: 'Selling a house during divorce requires a specialized approach. The process begins with a confidential consultation where Dr. Jan Duffy provides an accurate home valuation and explains the divorce-specific listing process. She coordinates with both spouses and their attorneys, ensures compliance with court orders, and maintains neutral representation throughout. The key is working with a divorce real estate specialist who understands the unique challenges of divorce transactions.',
    },
    {
      question: 'Can I Sell My House During Divorce?',
      answer: 'Yes, you can sell your house during divorce, but it requires coordination and often court approval or agreement from both spouses. Dr. Jan Duffy helps navigate the legal requirements, coordinates with attorneys, and ensures all necessary approvals are obtained before listing. If one spouse won\'t agree to sell, court intervention may be necessary, which Dr. Jan Duffy can help coordinate.',
    },
    {
      question: 'How Long Does It Take to Sell a House During Divorce?',
      answer: 'The timeline varies based on Las Vegas market conditions, your property specifics, and any court orders or settlement agreements. Typically, well-priced homes in good condition sell within 30-90 days in Las Vegas. Dr. Jan Duffy provides realistic timelines based on your specific situation and keeps you informed throughout the process.',
    },
    {
      question: 'What Happens to the Proceeds When Selling House During Divorce?',
      answer: 'Proceeds from selling your house during divorce are typically divided according to your settlement agreement or court order. In Nevada, as a community property state, proceeds are usually split 50/50 unless otherwise specified. Dr. Jan Duffy coordinates with attorneys to ensure proceeds are distributed correctly.',
    },
  ];

  const articleSchema = generateArticleSchema(
    'Selling House During Divorce Las Vegas',
    'Expert guidance for selling house during divorce in Las Vegas. Specialized divorce listing process, neutral representation, and proven results.',
    `${baseUrl}${currentPath}`,
    toSchemaDateTime(CONTENT_LAST_UPDATED),
    toSchemaDateTime(CONTENT_LAST_UPDATED),
  );
  const serviceSchema = generateServiceSchema(
    'Divorce Home Sale Services',
    'Expert guidance for selling house during divorce in Las Vegas. Specialized divorce listing process with neutral representation.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();
  const faqPageSchema = generateFAQPageSchema(sellingFaqs);

  return (
    <>
      <StructuredData data={[articleSchema, serviceSchema, realEstateAgentSchema, faqPageSchema]} />
      <DivorcePageTemplate
        currentPath={currentPath}
        h1="Selling House During Divorce Las Vegas"
        heroSubhead="Your House is Closure - Let's Help You Move Forward"
        showHomeValue
        datePublished={CONTENT_LAST_UPDATED}
        dateModified={CONTENT_LAST_UPDATED}
      >
        <div className="prose prose-lg mx-auto max-w-4xl">
          <h2>Why Selling During Divorce is Different</h2>
          <p>
            Selling a home during divorce is fundamentally different from a traditional real estate transaction. It involves emotional dynamics, legal considerations, financial complexities, and often requires coordination with attorneys and court orders. Dr. Jan Duffy's specialized divorce listing process addresses these unique challenges, ensuring your sale proceeds smoothly while supporting your overall divorce resolution.
          </p>

          <h3>The Emotional Component</h3>
          <p>
            Your home represents more than just property—it's where memories were made, where your family grew, and where your life unfolded. Selling during divorce means letting go of that chapter, which can be emotionally challenging. Dr. Jan Duffy understands this emotional component and provides compassionate, professional service that acknowledges the difficulty while maintaining focus on moving forward.
          </p>

          <h3>The Legal Component</h3>
          <p>
            Divorce home sales often involve court orders, settlement agreements, or legal requirements that don't exist in traditional transactions. Dr. Jan Duffy ensures all legal requirements are met, coordinates with attorneys, and maintains compliance with court orders or settlement agreements throughout the process.
          </p>

          <h2>The Divorce Listing Process</h2>
          <p>
            Dr. Jan Duffy's divorce listing process is customized specifically for divorce transactions. It's designed to prevent problems before they arise, maintain neutrality, and ensure smooth execution from listing to closing.
          </p>

          <h3>Initial Consultation and Valuation</h3>
          <p>
            Your journey begins with a confidential consultation where Dr. Jan Duffy learns about your situation, provides an accurate home valuation, and helps you understand the selling process. This valuation is essential for property division negotiations and ensures you have realistic expectations about your home's value.
          </p>

          <h3>Neutral Representation</h3>
          <p>
            Dr. Jan Duffy provides equal treatment to all clients and doesn't pick sides. This neutral approach ensures fair outcomes, reduces conflict, and helps both parties move forward. Whether you're the one initiating the sale or both parties agree to sell, you'll receive the same level of professional service and advocacy.
          </p>

          <h3>Property Preparation</h3>
          <p>
            Preparing a home for sale during divorce requires sensitivity and coordination. Dr. Jan Duffy helps you prepare your property for sale while respecting the emotional dynamics of the situation. She coordinates with both parties to ensure the property is presented in its best light, maximizing its value in the
            {' '}
            <Link href="/divorce-realtor-henderson" className="text-blue-600 underline hover:text-blue-700">Las Vegas</Link>
            {' '}
            market. Learn more about
            {' '}
            <Link href="/preparing-home-sale-divorce" className="text-blue-600 underline hover:text-blue-700">preparing your home for sale during divorce</Link>
            .
          </p>

          <h3>Marketing and Showings</h3>
          <p>
            Effective marketing is crucial for selling your home quickly and at the best price. Dr. Jan Duffy develops customized marketing strategies that highlight your property's strengths and appeal to
            {' '}
            <Link href="/divorce-realtor-summerlin" className="text-blue-600 underline hover:text-blue-700">Las Vegas</Link>
            {' '}
            buyers. She coordinates showings with sensitivity to the divorce situation, ensuring the process is as smooth as possible. You are not obligated to disclose divorce to buyers—your agent deflects &quot;why are you selling&quot; questions and protects your confidentiality.
          </p>

          <h3>Offer Negotiation</h3>
          <p>
            When offers come in, Dr. Jan Duffy negotiates on behalf of both parties, ensuring fair outcomes that support your divorce resolution. She maintains transparency throughout the negotiation process, keeping all parties informed and ensuring decisions are made collaboratively.
          </p>

          <h3>Closing Coordination</h3>
          <p>
            Closing a divorce home sale requires coordination with attorneys, lenders, title companies, and both parties. Dr. Jan Duffy manages this coordination, ensuring all documentation is completed correctly and the closing proceeds smoothly. She understands the importance of meeting timelines, especially when court orders or settlement agreements are involved.
          </p>

          <h2>Timeline Transparency</h2>
          <p>
            You'll know exactly how long the process will take and when you'll need to move. Dr. Jan Duffy provides clear timelines based on Las Vegas market conditions, your property specifics, and any court orders or settlement agreements. This transparency helps you plan your next steps and reduces stress during an already challenging time.
          </p>

          <h3>Market Conditions Impact</h3>
          <p>
            <Link href="/divorce-realtor-henderson" className="text-blue-600 underline hover:text-blue-700">Las Vegas</Link>
            {' '}
            market conditions directly impact how quickly your home will sell and what price you can expect. Dr. Jan Duffy provides realistic timelines based on current market conditions, ensuring you have accurate expectations from the start.
          </p>

          <h3>Property-Specific Factors</h3>
          <p>
            Your property's location, condition, and features all impact the selling timeline. Dr. Jan Duffy evaluates these factors and provides timelines specific to your property, helping you plan accordingly.
          </p>

          <h2>Communication Throughout the Process</h2>
          <p>
            Everyone stays on the same page with Dr. Jan Duffy's communication system. She maintains transparent communication with both spouses, their attorneys, and any other professionals involved. This ensures all parties are informed, reducing misunderstandings and preventing delays.
          </p>

          <h3>Regular Updates</h3>
          <p>
            You'll receive regular updates throughout the selling process, including showing feedback, market activity, and any developments that affect your sale. This transparency keeps you informed and reduces anxiety during the process.
          </p>

          <h3>Attorney Coordination</h3>
          <p>
            Dr. Jan Duffy works seamlessly with family law attorneys, ensuring the sale supports your overall divorce resolution. She coordinates with attorneys on documentation, timelines, and any legal requirements, ensuring everything aligns with your divorce case.
          </p>

          <h2>Maximizing Your Home's Value</h2>
          <p>
            Getting the best price for your home is important, especially during divorce when proceeds need to be divided. Dr. Jan Duffy's expertise in the
            {' '}
            <Link href="/divorce-realtor-summerlin" className="text-blue-600 underline hover:text-blue-700">Las Vegas</Link>
            {' '}
            market and her specialized
            {' '}
            <Link href="/divorce-listing-process" className="text-blue-600 underline hover:text-blue-700">divorce listing process</Link>
            {' '}
            help maximize your home's value.
          </p>

          <h3>Accurate Pricing</h3>
          <p>
            Pricing your home correctly from the start is crucial. Overpricing can lead to extended time on market, while underpricing leaves money on the table. Dr. Jan Duffy's comprehensive market analysis ensures your home is priced accurately, maximizing value while ensuring a timely sale.
          </p>

          <h3>Effective Marketing</h3>
          <p>
            Effective marketing showcases your home's strengths and reaches the right buyers. Dr. Jan Duffy develops customized marketing strategies that highlight what makes your property desirable in the Las Vegas market, ensuring maximum exposure to qualified buyers.
          </p>

          <h2>Handling Challenges</h2>
          <p>
            Divorce home sales can face unique challenges, from non-cooperative spouses to court order complications. Dr. Jan Duffy has experience handling these challenges and has protocols in place to keep transactions on track.
          </p>

          <h3>Sale Sabotage Escalation</h3>
          <p>
            If someone deviates from the plan, Dr. Jan Duffy's escalation protocol gets things back on track. She understands how to handle non-compliance, coordinate with attorneys, and ensure transactions proceed according to agreements or court orders.
          </p>

          <h3>Court Order Compliance</h3>
          <p>
            When court orders are involved, Dr. Jan Duffy ensures strict compliance. She understands the importance of following court directives exactly and coordinates with attorneys to ensure all requirements are met.
          </p>

          <h2>After the Sale</h2>
          <p>
            Once your home is sold, Dr. Jan Duffy helps ensure proceeds are distributed according to your agreement or court order. She coordinates with attorneys and financial professionals to ensure the closing supports your overall divorce resolution.
          </p>

          <h2>Frequently Asked Questions: How to Sell House During Divorce</h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="mb-2 text-xl font-semibold">How to Sell House During Divorce?</h3>
              <p>
                Selling a house during divorce requires a specialized approach. The process begins with a confidential consultation where Dr. Jan Duffy provides an accurate home valuation and explains the divorce-specific listing process. She coordinates with both spouses and their attorneys, ensures compliance with court orders, and maintains neutral representation throughout. The key is working with a divorce real estate specialist who understands the unique challenges of divorce transactions.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">Can I Sell My House During Divorce?</h3>
              <p>
                Yes, you can sell your house during divorce, but it requires coordination and often court approval or agreement from both spouses. Dr. Jan Duffy helps navigate the legal requirements, coordinates with attorneys, and ensures all necessary approvals are obtained before listing. If one spouse won't agree to sell, court intervention may be necessary, which Dr. Jan Duffy can help coordinate.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">How Long Does It Take to Sell a House During Divorce?</h3>
              <p>
                The timeline varies based on Las Vegas market conditions, your property specifics, and any court orders or settlement agreements. Typically, well-priced homes in good condition sell within 30-90 days in Las Vegas. Dr. Jan Duffy provides realistic timelines based on your specific situation and keeps you informed throughout the process. For more details, see our
                {' '}
                <Link href="/divorce-home-sale-timeline" className="text-blue-600 underline hover:text-blue-700">divorce home sale timeline guide</Link>
                .
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">What Happens to the Proceeds When Selling House During Divorce?</h3>
              <p>
                Proceeds from selling your house during divorce are typically divided according to your settlement agreement or court order. In Nevada, as a community property state, proceeds are usually split 50/50 unless otherwise specified. Dr. Jan Duffy coordinates with attorneys to ensure proceeds are distributed correctly. Learn more about
                {' '}
                <Link href="/splitting-house-proceeds-divorce" className="text-blue-600 underline hover:text-blue-700">splitting house proceeds in divorce</Link>
                .
              </p>
            </div>
          </div>

          <h2>Related Resources</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li><Link href="/how-to-sell-house-during-divorce" className="text-blue-600 underline hover:text-blue-700">Step-by-Step Guide: How to Sell House During Divorce</Link></li>
            <li><Link href="/divorce-home-valuation" className="text-blue-600 underline hover:text-blue-700">Get Your Free Home Valuation</Link></li>
            <li><Link href="/divorce-listing-process" className="text-blue-600 underline hover:text-blue-700">Understanding the Divorce Listing Process</Link></li>
            <li><Link href="/divorce-home-sale-checklist" className="text-blue-600 underline hover:text-blue-700">Divorce Home Sale Checklist</Link></li>
            <li><Link href="/one-spouse-wont-sell-house-divorce" className="text-blue-600 underline hover:text-blue-700">What to Do When One Spouse Won't Sell</Link></li>
          </ul>

          <h2>Get Started Today</h2>
          <p>
            If you're considering selling your home during divorce, don't wait to get expert guidance. Schedule a confidential consultation with Dr. Jan Duffy today and learn how her specialized divorce listing process can help you sell your home smoothly while supporting your overall divorce resolution. Your house is closure—let's help you move forward.
          </p>

          <p className="mt-8 text-center">
            <CalendlyLink className="font-semibold text-blue-600 hover:text-blue-700">
              Schedule Your Consultation →
            </CalendlyLink>
          </p>
        </div>
      </DivorcePageTemplate>
    </>
  );
}
