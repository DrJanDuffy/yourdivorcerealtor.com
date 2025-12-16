import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';

type ISellingProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Selling Your Home During Divorce in Las Vegas | Dr. Jan Duffy',
    description: 'Expert guidance for selling your home during divorce in Las Vegas. Specialized process, neutral representation, and proven results.',
    keywords: 'selling home during divorce, divorce home sale, las vegas divorce home sale',
  };
}

export default async function SellingDuringDivorce(props: ISellingProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <DivorcePageTemplate
      h1="Selling Your Home During Divorce in Las Vegas"
      heroSubhead="Your House is Closure - Let's Help You Move Forward"
      showHomeValue
    >
      <div className="max-w-4xl mx-auto prose prose-lg">
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
          Preparing a home for sale during divorce requires sensitivity and coordination. Dr. Jan Duffy helps you prepare your property for sale while respecting the emotional dynamics of the situation. She coordinates with both parties to ensure the property is presented in its best light, maximizing its value in the Las Vegas market.
        </p>

        <h3>Marketing and Showings</h3>
        <p>
          Effective marketing is crucial for selling your home quickly and at the best price. Dr. Jan Duffy develops customized marketing strategies that highlight your property's strengths and appeal to Las Vegas buyers. She coordinates showings with sensitivity to the divorce situation, ensuring the process is as smooth as possible.
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
          Las Vegas market conditions directly impact how quickly your home will sell and what price you can expect. Dr. Jan Duffy provides realistic timelines based on current market conditions, ensuring you have accurate expectations from the start.
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
          Getting the best price for your home is important, especially during divorce when proceeds need to be divided. Dr. Jan Duffy's expertise in the Las Vegas market and her specialized divorce listing process help maximize your home's value.
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

        <h2>Get Started Today</h2>
        <p>
          If you're considering selling your home during divorce, don't wait to get expert guidance. Schedule a confidential consultation with Dr. Jan Duffy today and learn how her specialized divorce listing process can help you sell your home smoothly while supporting your overall divorce resolution. Your house is closure—let's help you move forward.
        </p>

        <p className="text-center mt-8">
          <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">
            Schedule Your Consultation →
          </Link>
        </p>
      </div>
    </DivorcePageTemplate>
  );
}

