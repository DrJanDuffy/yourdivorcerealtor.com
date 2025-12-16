import type { Metadata } from 'next';
import type { PageProps } from '@/types';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'One Spouse Won\'t Sell House Divorce | Forced Sale Divorce Nevada | Dr. Jan Duffy',
    description: 'What to do when one spouse won\'t sell house during divorce. Legal options, forced sale divorce Nevada, court-ordered sales, and mediation strategies. Expert guidance.',
    keywords: 'one spouse won\'t sell house divorce, forced sale divorce Nevada, court ordered home sale divorce, spouse refusing to sell house',
  };
}

export default async function OneSpouseWontSellHouseDivorce(props: PageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <DivorcePageTemplate
      h1="One Spouse Won't Sell House Divorce: Your Legal Options"
      heroSubhead="Navigate Forced Sales and Court-Ordered Solutions"
    >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>When One Spouse Refuses to Sell</h2>
        <p>
          One of the most challenging situations in divorce real estate occurs when one spouse refuses to sell the house. This can delay your divorce resolution, create financial strain, and prevent you from moving forward. Understanding your legal options and working with a divorce real estate specialist helps you navigate this difficult situation effectively.
        </p>

        <h2>Why Spouses Refuse to Sell</h2>
        <p>
          Understanding the reasons behind refusal can help address the situation:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Emotional attachment:</strong> The home represents memories and stability</li>
          <li><strong>Financial concerns:</strong> Fear of not being able to afford a new home</li>
          <li><strong>Children's stability:</strong> Wanting to keep children in the same school/neighborhood</li>
          <li><strong>Leverage:</strong> Using the house as leverage in other divorce negotiations</li>
          <li><strong>Market timing:</strong> Waiting for better market conditions</li>
          <li><strong>Lack of understanding:</strong> Not understanding the financial implications</li>
        </ul>

        <h2>Legal Options When One Spouse Won't Sell</h2>
        <h3>Option 1: Court-Ordered Sale (Forced Sale Divorce Nevada)</h3>
        <p>
          If one spouse refuses to sell and you can't reach an agreement, you can petition the court to order the sale. In Nevada, courts have the authority to order the sale of marital property when spouses can't agree. This is often called a "forced sale" or "partition sale."
        </p>
        <p>
          <strong>Process for court-ordered sale:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>File a motion with the court requesting sale of the property</li>
          <li>Court evaluates the situation and may order sale if it's in both parties' best interests</li>
          <li>Court may appoint a neutral real estate agent (like Dr. Jan Duffy) to handle the sale</li>
          <li>Sale proceeds are distributed according to court order</li>
        </ul>
        <p className="mt-4">
          Learn more: <Link href="/court-ordered-home-sale" className="text-blue-600 hover:text-blue-700 underline">Court-Ordered Home Sale Process</Link>
        </p>

        <h3>Option 2: Mediation and Negotiation</h3>
        <p>
          Before going to court, mediation can help resolve the impasse. A neutral mediator helps both parties understand options and reach agreement. Dr. Jan Duffy can participate in mediation, providing property valuations and market information that supports informed decision-making.
        </p>

        <h3>Option 3: Buyout Offer</h3>
        <p>
          If one spouse wants to keep the house, they can buy out the other spouse's share. This requires accurate valuation, buyout calculation, and refinancing. Dr. Jan Duffy helps structure fair buyout offers that may resolve the impasse.
        </p>

        <h3>Option 4: Temporary Co-Ownership Agreement</h3>
        <p>
          In some cases, temporary co-ownership with a clear exit strategy can work. This requires detailed agreements about expenses, maintenance, and eventual sale. Dr. Jan Duffy helps structure these agreements to prevent future conflicts.
        </p>

        <h2>Forced Sale Divorce Nevada: Court Process</h2>
        <p>
          When seeking a forced sale in Nevada, the court process typically involves:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Filing motion:</strong> Your attorney files a motion requesting court-ordered sale</li>
          <li><strong>Court hearing:</strong> Court evaluates the situation and both parties' positions</li>
          <li><strong>Court order:</strong> If granted, court issues order specifying sale terms</li>
          <li><strong>Appointment of agent:</strong> Court may appoint neutral real estate agent</li>
          <li><strong>Sale execution:</strong> Property is listed and sold according to court order</li>
          <li><strong>Proceeds distribution:</strong> Proceeds distributed per court order</li>
        </ol>

        <h2>Working with a Court-Appointed Agent</h2>
        <p>
          When courts order a sale, they often appoint a neutral real estate agent to handle the transaction. Dr. Jan Duffy has experience as a court-appointed agent, ensuring compliance with court orders and fair treatment of all parties.
        </p>
        <p>
          <strong>Court-appointed agent responsibilities:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Maintain strict neutrality between parties</li>
          <li>Ensure compliance with all court orders</li>
          <li>Provide regular updates to court and parties</li>
          <li>Handle non-cooperative situations professionally</li>
          <li>Ensure fair market value sale</li>
        </ul>

        <h2>Preventing Sale Sabotage</h2>
        <p>
          Sometimes a refusing spouse may try to sabotage the sale (refusing showings, not maintaining property, etc.). Dr. Jan Duffy has escalation protocols to handle these situations and keep transactions on track.
        </p>
        <p>
          <strong>Escalation strategies:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Document all non-compliance issues</li>
          <li>Coordinate with attorneys to address problems</li>
          <li>Request court intervention when necessary</li>
          <li>Maintain professional communication</li>
          <li>Focus on transaction completion</li>
        </ul>

        <h2>Financial Implications of Refusal</h2>
        <p>
          Refusing to sell can have significant financial consequences:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Ongoing expenses:</strong> Both spouses remain responsible for mortgage, taxes, insurance</li>
          <li><strong>Market risk:</strong> Property values can decline while waiting</li>
          <li><strong>Legal costs:</strong> Court proceedings add legal expenses</li>
          <li><strong>Delayed resolution:</strong> Prevents financial closure and moving forward</li>
          <li><strong>Credit impact:</strong> Ongoing joint mortgage affects both parties' credit</li>
        </ul>

        <h2>Mediation Strategies</h2>
        <p>
          Before pursuing court-ordered sale, consider mediation:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Address concerns:</strong> Understand why spouse refuses and address those concerns</li>
          <li><strong>Provide information:</strong> Share market data and financial implications</li>
          <li><strong>Explore alternatives:</strong> Discuss buyout, temporary co-ownership, or delayed sale</li>
          <li><strong>Set timeline:</strong> Agree on timeline for eventual sale if keeping temporarily</li>
          <li><strong>Document agreement:</strong> Put any agreement in writing with clear terms</li>
        </ul>

        <h2>When to Seek Court Intervention</h2>
        <p>
          Court intervention may be necessary when:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Mediation fails to resolve the impasse</li>
          <li>One spouse is using the house as leverage unfairly</li>
          <li>Financial hardship requires immediate sale</li>
          <li>Court order already exists but isn't being followed</li>
          <li>Children's best interests require sale and relocation</li>
        </ul>

        <h2>Get Expert Help</h2>
        <p>
          Navigating a situation where one spouse won't sell requires specialized expertise. Dr. Jan Duffy understands these challenges and helps you explore all options, from mediation to court-ordered sales. She maintains neutrality and focuses on achieving fair outcomes.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
          <h3 className="text-xl font-semibold mb-2">Need Help with a Refusing Spouse?</h3>
          <p className="mb-4">
            Schedule a confidential consultation with Dr. Jan Duffy to discuss your situation and explore options for moving forward, whether through negotiation, mediation, or court-ordered sale.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Schedule Your Consultation
          </Link>
        </div>

        <h2>Related Resources</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/court-ordered-home-sale" className="text-blue-600 hover:text-blue-700 underline">Court-Ordered Home Sale</Link></li>
          <li><Link href="/divorce-mediator-resources" className="text-blue-600 hover:text-blue-700 underline">Divorce Mediation Resources</Link></li>
          <li><Link href="/divorce-buyout-options" className="text-blue-600 hover:text-blue-700 underline">Buyout Options</Link></li>
          <li><Link href="/selling-home-during-divorce" className="text-blue-600 hover:text-blue-700 underline">Selling Home During Divorce</Link></li>
          <li><Link href="/divorce-property-division" className="text-blue-600 hover:text-blue-700 underline">Property Division Guide</Link></li>
        </ul>
      </div>
    </DivorcePageTemplate>
  );
}

