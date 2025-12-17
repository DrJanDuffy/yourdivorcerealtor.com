import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import {
  generateServiceSchema,
  generateRealEstateAgentSchema,
} from '@/lib/schema';

type IAboutProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Dr. Jan Duffy - Your Las Vegas Divorce Realtor | About',
    description: 'Meet Dr. Jan Duffy, your trusted Las Vegas divorce real estate specialist. Certified expert helping divorcing homeowners navigate property division with compassion and expertise.',
    keywords: 'dr jan duffy, las vegas divorce realtor, divorce real estate expert, berkshire hathaway las vegas',
  };
}

export default async function About(props: IAboutProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const serviceSchema = generateServiceSchema(
    'Divorce Real Estate Consultation',
    'Expert divorce real estate services in Las Vegas. Specialized in helping divorcing homeowners navigate property division with compassion and expertise.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Dr. Jan Duffy - Your Las Vegas Divorce Real Estate Expert"
        heroSubhead="Your Divorce Real Estate Specialist"
        currentPath="/about"
      >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Why Specialization Matters in Divorce Real Estate</h2>
        <p>
          Divorce is complicated enough without real estate. When you're going through one of life's most challenging transitions, you need a real estate professional who understands the unique complexities of divorce transactions. Dr. Jan Duffy brings specialized expertise, compassion, and a proven track record to every divorce real estate case in Las Vegas.
        </p>

        <h3>Understanding the Divorce Real Estate Difference</h3>
        <p>
          Traditional real estate transactions follow a standard process. But divorce real estate is anything but standard. It involves emotional dynamics, legal considerations, financial complexities, and often court involvement. Non-specialized realtors apply traditional processes to divorce transactions—and that doesn't work. Dr. Jan Duffy has dedicated her career to mastering the art and science of divorce real estate, ensuring your property transaction supports your overall divorce resolution rather than complicating it.
        </p>

        <h2>Dr. Jan Duffy's Credentials and Experience</h2>
        <p>
          Dr. Jan Duffy is a REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, serving the Las Vegas metropolitan area. With a Ph.D. in Market Research & Consumer Behavior, she brings a unique analytical perspective to divorce real estate. Her specialized focus on divorce real estate has made her the go-to expert for divorcing homeowners, family law attorneys, and divorce mediators throughout Nevada.
        </p>

        <div className="bg-blue-50 rounded-lg p-6 my-8">
          <h3 className="text-xl font-bold mb-4">Professional Credentials</h3>
          <ul className="space-y-2">
            <li><strong>Ph.D.</strong> in Market Research & Consumer Behavior</li>
            <li><strong>Nevada Real Estate License:</strong> #S.0197614.LLC</li>
            <li><strong>Brokerage:</strong> Berkshire Hathaway HomeServices Nevada Properties</li>
            <li><strong>Specialization:</strong> Certified Divorce Real Estate Expert (CDRE)</li>
            <li><strong>Training:</strong> Trained through Ilumni® Institute</li>
            <li><strong>Experience:</strong> Specialized in court-appointed transactions</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 my-8">
          <h3 className="text-xl font-bold mb-4">Track Record</h3>
          <ul className="space-y-2">
            <li><strong>500+ families</strong> served through divorce real estate transactions</li>
            <li><strong>$127M+</strong> in sales volume</li>
            <li><strong>99%</strong> of listings sold successfully</li>
            <li><strong>4X faster</strong> average sale time compared to traditional listings</li>
            <li><strong>100%</strong> referral-based business</li>
          </ul>
        </div>

        <h3>Professional Qualifications</h3>
        <p>
          With extensive training in divorce real estate transactions, Dr. Jan Duffy understands the legal, financial, and emotional aspects of property division during divorce. She works seamlessly with family law attorneys, financial advisors, appraisers, and other professionals to ensure comprehensive support for her clients.
        </p>

        <h3>Court-Appointed Expertise</h3>
        <p>
          When court-appointed, Dr. Jan Duffy dutifully ensures all orders are followed. She understands the importance of neutrality, transparency, and adherence to court directives. Her experience with court-ordered sales and property division makes her uniquely qualified to handle even the most complex divorce real estate situations.
        </p>

        <h2>The Divorce Real Estate Approach</h2>
        <p>
          Dr. Jan Duffy's approach to divorce real estate is built on three foundational principles: neutrality, communication, and expertise. These principles guide every interaction and decision throughout the process.
        </p>

        <h3>Neutrality: Equal Treatment for All Clients</h3>
        <p>
          In divorce real estate, neutrality isn't just a preference—it's a necessity. Dr. Jan Duffy provides equal treatment between all clients and doesn't pick sides. This neutral approach ensures fair outcomes, reduces conflict, and helps both parties move forward with their lives. Whether you're the one staying in the home, the one leaving, or both parties are selling, you'll receive the same level of professional service and advocacy.
        </p>

        <h3>Communication: Everyone Stays Informed</h3>
        <p>
          Divorce real estate transactions require clear, consistent communication with all parties involved. Dr. Jan Duffy maintains transparent communication with both spouses, their attorneys, and any other professionals involved in the case. Everyone stays on the same page, reducing misunderstandings and preventing delays. This communication system is especially critical when dealing with court orders, timelines, and settlement agreements.
        </p>

        <h3>Expertise: Specialized Knowledge for Complex Situations</h3>
        <p>
          Divorce real estate requires knowledge beyond standard real estate transactions. Dr. Jan Duffy understands property division laws, quitclaim deeds, refinancing requirements, buyout calculations, and the emotional dynamics that can impact transactions. This specialized expertise ensures that your property transaction supports your overall divorce resolution.
        </p>

        <h2>Services Offered by Dr. Jan Duffy</h2>
        <p>
          Dr. Jan Duffy provides comprehensive divorce real estate services tailored to your unique situation. Whether you're selling, buying, refinancing, or navigating a buyout, she has the expertise to guide you through the process.
        </p>

        <h3>Home Valuation and Equity Analysis</h3>
        <p>
          Understanding your home's value and equity position is critical for property division negotiations. Dr. Jan Duffy provides accurate home valuations and detailed equity analyses, helping you make informed decisions about your property. This information is essential whether you're selling, buying out your spouse, or determining how to divide assets.
        </p>

        <h3>Divorce Listing Process</h3>
        <p>
          Selling a home during divorce requires a specialized approach. Dr. Jan Duffy's divorce listing process is customized to prevent problems before they arise. She understands the unique challenges of selling during divorce, including coordinating with both parties, managing emotional dynamics, and ensuring compliance with court orders or settlement agreements.
        </p>

        <h3>Buyout and Refinancing Assistance</h3>
        <p>
          If one spouse wants to keep the home, Dr. Jan Duffy can help navigate the buyout process. This includes determining fair market value, calculating buyout amounts, and coordinating with lenders for refinancing. She understands the financial and legal requirements of removing a spouse from a mortgage and can guide you through the entire process.
        </p>

        <h3>Timeline Management</h3>
        <p>
          Divorce real estate transactions often have strict timelines tied to court orders or settlement agreements. Dr. Jan Duffy helps you understand how long the process will take and when you'll need to move. This timeline transparency is essential for planning your next steps and reducing stress during an already challenging time.
        </p>

        <h2>Working with Attorneys and Mediators</h2>
        <p>
          Dr. Jan Duffy regularly collaborates with family law attorneys and divorce mediators throughout Las Vegas. She understands the legal aspects of divorce and can provide expert testimony, property valuations, and transaction coordination that supports your legal case. Her professional relationships with the legal community ensure seamless collaboration throughout your divorce process.
        </p>

        <h3>Expert Witness Services</h3>
        <p>
          When court involvement is necessary, Dr. Jan Duffy can serve as an expert witness, providing professional opinions on property values, market conditions, and transaction feasibility. Her expertise and credibility make her a valuable resource in contested divorce cases.
        </p>

        <h2>Why Choose Dr. Jan Duffy?</h2>
        <p>
          Choosing the right real estate professional during divorce is one of the most important decisions you'll make. Dr. Jan Duffy brings specialized expertise, proven processes, and compassionate service to every case. She understands that divorce real estate isn't just about property—it's about helping you unlock your new normal and move forward with your life.
        </p>

        <h3>Compassionate Service</h3>
        <p>
          Divorce is emotionally challenging. Dr. Jan Duffy provides compassionate, understanding service that acknowledges the difficulty of your situation while maintaining professional boundaries. She's there to support you through the process, not just complete a transaction.
        </p>

        <h3>Proven Results</h3>
        <p>
          Dr. Jan Duffy's specialized approach delivers results. Her clients benefit from faster transactions, reduced conflict, and better outcomes. She's helped countless Las Vegas families navigate divorce real estate successfully, and she can help you too.
        </p>

        <h3>Berkshire Hathaway Resources</h3>
        <p>
          As a REALTOR® with Berkshire Hathaway HomeServices Sahara, Dr. Jan Duffy has access to extensive resources, marketing capabilities, and professional networks. This affiliation ensures you receive top-tier service backed by one of the most respected names in real estate.
        </p>

        <h2>Get Started Today</h2>
        <p>
          It's never too early to discuss your real estate options during divorce. Whether you're just beginning the divorce process or you're ready to move forward with a property transaction, Dr. Jan Duffy is here to help. Schedule a confidential consultation to discuss your situation and learn how specialized divorce real estate expertise can support your journey to a new beginning.
        </p>
      </div>
      </DivorcePageTemplate>
    </>
  );
}
