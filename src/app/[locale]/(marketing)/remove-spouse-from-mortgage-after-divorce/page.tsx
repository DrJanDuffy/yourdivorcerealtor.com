import type { Metadata } from 'next';
import type { PageProps } from '@/types';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import {
  generateArticleSchema,
  generateServiceSchema,
  generateRealEstateAgentSchema,
} from '@/lib/schema';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Remove Spouse from Mortgage After Divorce | Refinancing Guide | Dr. Jan Duffy',
    description: 'Complete guide to removing spouse from mortgage after divorce. Refinancing process, lender requirements, quitclaim deeds, and credit protection. Expert guidance from Las Vegas.',
    keywords: 'remove spouse from mortgage after divorce, refinance house after divorce, remove name from mortgage divorce, divorce mortgage refinancing',
  };
}

export default async function RemoveSpouseFromMortgageAfterDivorce(props: PageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const baseUrl = 'https://www.yourdivorcerealtor.com';
  const currentPath = '/remove-spouse-from-mortgage-after-divorce';
  const articleSchema = generateArticleSchema(
    'Remove Spouse from Mortgage After Divorce: Complete Guide',
    'Complete guide to removing spouse from mortgage after divorce. Refinancing process, lender requirements, quitclaim deeds, and credit protection.',
    `${baseUrl}${currentPath}`,
    new Date().toISOString(),
  );
  const serviceSchema = generateServiceSchema(
    'Post-Divorce Mortgage Refinancing Services',
    'Complete guide to removing spouse from mortgage after divorce. Refinancing process, lender requirements, quitclaim deeds, and credit protection.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[articleSchema, serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Remove Spouse from Mortgage After Divorce: Complete Guide"
        heroSubhead="Protect Your Credit and Financial Future"
        currentPath={currentPath}
      >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Why Remove Spouse from Mortgage?</h2>
        <p>
          After divorce, if one spouse keeps the house, it's essential to remove the other spouse from the mortgage. This protects the removed spouse's credit, eliminates financial liability, and allows them to qualify for new financing. Simply transferring the deed (quitclaim) doesn't remove mortgage liability—refinancing is required.
        </p>

        <h2>Understanding the Difference: Deed vs. Mortgage</h2>
        <p>
          Many people confuse removing someone from the deed with removing them from the mortgage. These are separate legal actions:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Deed (Quitclaim):</strong> Transfers ownership interest in the property</li>
          <li><strong>Mortgage:</strong> The loan obligation that remains until paid off or refinanced</li>
        </ul>
        <p>
          <strong>Important:</strong> A quitclaim deed removes ownership but NOT mortgage liability. The removed spouse remains responsible for the mortgage until it's refinanced or paid off.
        </p>

        <h2>The Refinancing Process</h2>
        <p>
          Refinancing is the only way to remove a spouse from the mortgage. The spouse keeping the house must qualify for a new mortgage based solely on their income and credit.
        </p>

        <h3>Step 1: Qualify for Refinancing</h3>
        <p>
          The spouse keeping the house must qualify for refinancing based on:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Individual income (no longer joint income)</li>
          <li>Credit score and credit history</li>
          <li>Debt-to-income ratio</li>
          <li>Home value and equity position</li>
          <li>Lender requirements</li>
        </ul>

        <h3>Step 2: Choose Refinancing Type</h3>
        <p>
          Several refinancing options are available:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Rate and term refinance:</strong> New loan with same or different terms</li>
          <li><strong>Cash-out refinance:</strong> Borrow more to pay buyout amount</li>
          <li><strong>Streamline refinance:</strong> If eligible (FHA, VA loans)</li>
        </ul>

        <h3>Step 3: Complete Refinancing Application</h3>
        <p>
          The keeping spouse applies for refinancing, providing:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Income documentation</li>
          <li>Credit report</li>
          <li>Property appraisal</li>
          <li>Divorce decree</li>
          <li>Quitclaim deed (if already executed)</li>
        </ul>

        <h3>Step 4: Close on Refinancing</h3>
        <p>
          At closing, the old mortgage is paid off and a new mortgage is created in only the keeping spouse's name. The removed spouse is released from mortgage liability.
        </p>

        <h2>Lender Requirements</h2>
        <p>
          Lenders have specific requirements for post-divorce refinancing:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Income qualification:</strong> Must qualify on individual income</li>
          <li><strong>Credit score:</strong> Typically need 620+ (varies by lender)</li>
          <li><strong>Debt-to-income ratio:</strong> Usually 43% or less</li>
          <li><strong>Equity:</strong> May need 20% equity for conventional loans</li>
          <li><strong>Divorce decree:</strong> Must show property division agreement</li>
          <li><strong>Quitclaim deed:</strong> May be required before or after refinancing</li>
        </ul>

        <h2>Timeline for Refinancing</h2>
        <p>
          The refinancing process typically takes 30-45 days:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Application:</strong> 1-2 days</li>
          <li><strong>Underwriting:</strong> 2-3 weeks</li>
          <li><strong>Appraisal:</strong> 1-2 weeks</li>
          <li><strong>Closing:</strong> 1 week</li>
        </ul>
        <p>
          However, if the keeping spouse doesn't qualify immediately, they may need time to improve credit, reduce debt, or increase income.
        </p>

        <h2>What If Refinancing Isn't Possible?</h2>
        <p>
          If the keeping spouse can't qualify for refinancing, options include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Sell the house:</strong> Both parties get proceeds and move on</li>
          <li><strong>Wait and improve credit:</strong> Work on credit score and debt-to-income ratio</li>
          <li><strong>Co-signer:</strong> If allowed by lender (rare)</li>
          <li><strong>Assumption:</strong> If loan is assumable (rare for conventional loans)</li>
          <li><strong>Modify agreement:</strong> Adjust property division to account for inability to refinance</li>
        </ul>

        <h2>Quitclaim Deed Process</h2>
        <p>
          A quitclaim deed transfers the removed spouse's ownership interest to the keeping spouse. This is typically done as part of the property division process.
        </p>
        <p>
          <strong>Important considerations:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Quitclaim deed doesn't remove mortgage liability</li>
          <li>Should be recorded with county recorder</li>
          <li>Timing relative to refinancing varies by situation</li>
          <li>May affect refinancing qualification</li>
        </ul>
        <p className="mt-4">
          Learn more: <Link href="/quitclaim-deed-divorce" className="text-blue-600 hover:text-blue-700 underline">Quitclaim Deed in Divorce</Link>
        </p>

        <h2>Protecting Your Credit</h2>
        <p>
          Until refinancing is complete, the removed spouse remains liable for the mortgage. This means:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Late payments affect both parties' credit</li>
          <li>Foreclosure affects both parties' credit</li>
          <li>Mortgage appears on both credit reports</li>
          <li>May affect ability to qualify for new financing</li>
        </ul>
        <p>
          <strong>Protection strategies:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Set clear timeline for refinancing in divorce decree</li>
          <li>Monitor mortgage payments to ensure they're made on time</li>
          <li>Consider temporary arrangements if refinancing is delayed</li>
          <li>Document any payment issues</li>
        </ul>

        <h2>Coordination with Divorce Process</h2>
        <p>
          Refinancing should be coordinated with your divorce:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Divorce decree:</strong> Should specify refinancing timeline and requirements</li>
          <li><strong>Buyout amount:</strong> May need cash-out refinance to pay buyout</li>
          <li><strong>Attorney coordination:</strong> Attorneys should be involved in refinancing process</li>
          <li><strong>Timeline:</strong> Refinancing should be completed within timeframe specified in decree</li>
        </ul>

        <h2>Common Challenges</h2>
        <h3>Challenge 1: Can't Qualify for Refinancing</h3>
        <p>
          If the keeping spouse can't qualify, options include selling, improving credit, or modifying the property division agreement.
        </p>

        <h3>Challenge 2: Delayed Refinancing</h3>
        <p>
          If refinancing is delayed, the removed spouse remains liable. Clear timelines and consequences in the divorce decree help protect both parties.
        </p>

        <h3>Challenge 3: Buyout Amount</h3>
        <p>
          If a cash-out refinance is needed to pay the buyout, the keeping spouse must qualify for a larger loan amount, which can be challenging.
        </p>

        <h2>Get Expert Help</h2>
        <p>
          Removing a spouse from a mortgage requires coordination between real estate, legal, and lending professionals. Dr. Jan Duffy helps coordinate this process, working with lenders and attorneys to ensure refinancing supports your property division agreement.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
          <h3 className="text-xl font-semibold mb-2">Need Help with Refinancing?</h3>
          <p className="mb-4">
            Schedule a consultation with Dr. Jan Duffy to discuss your refinancing needs. She can help coordinate with lenders and ensure the process supports your property division agreement.
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
          <li><Link href="/refinancing-after-divorce" className="text-blue-600 hover:text-blue-700 underline">Refinancing After Divorce</Link></li>
          <li><Link href="/divorce-buyout-options" className="text-blue-600 hover:text-blue-700 underline">Buyout Options</Link></li>
          <li><Link href="/quitclaim-deed-divorce" className="text-blue-600 hover:text-blue-700 underline">Quitclaim Deed Guide</Link></li>
          <li><Link href="/divorce-and-mortgage" className="text-blue-600 hover:text-blue-700 underline">Divorce and Mortgage</Link></li>
          <li><Link href="/divorce-property-division" className="text-blue-600 hover:text-blue-700 underline">Property Division</Link></li>
        </ul>
      </div>
    </DivorcePageTemplate>
    </>
  );
}
