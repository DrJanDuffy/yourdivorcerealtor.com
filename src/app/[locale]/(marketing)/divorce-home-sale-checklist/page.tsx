import type { Metadata } from 'next';
import type { PageProps } from '@/types';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import {
  generateServiceSchema,
  generateRealEstateAgentSchema,
} from '@/lib/schema';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Divorce Home Sale Checklist | Complete Step-by-Step Checklist | Dr. Jan Duffy',
    description: 'Complete divorce home sale checklist. Step-by-step checklist for selling your home during divorce. Downloadable PDF option. Everything you need to know.',
    keywords: 'divorce home sale checklist, selling home divorce checklist, divorce property sale checklist, home sale during divorce checklist',
  };
}

export default async function DivorceHomeSaleChecklist(props: PageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const currentPath = '/divorce-home-sale-checklist';
  const serviceSchema = generateServiceSchema(
    'Divorce Home Sale Checklist Services',
    'Complete divorce home sale checklist. Step-by-step checklist for selling your home during divorce. Downloadable PDF option. Everything you need to know.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Divorce Home Sale Checklist: Complete Step-by-Step Guide"
        heroSubhead="Stay Organized Throughout the Process"
        currentPath={currentPath}
      >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h2>Your Complete Divorce Home Sale Checklist</h2>
        <p>
          Selling your home during divorce involves many steps. This comprehensive checklist helps you stay organized and ensures nothing is missed. Print this page or download it as a reference throughout your sale process.
        </p>

        <h2>Phase 1: Initial Planning and Decision Making</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
          <h3 className="font-semibold mb-4">Pre-Sale Planning</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Schedule consultation with divorce real estate specialist (Dr. Jan Duffy)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Get accurate home valuation for property division</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Calculate equity position (home value minus mortgage)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Understand all property division options (sell, buyout, co-own)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Consult with family law attorney about property division</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Review financial implications of each option</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Make decision on property division approach</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Document decision in settlement agreement or court order</span>
            </li>
          </ul>
        </div>

        <h2>Phase 2: Preparing for Sale</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
          <h3 className="font-semibold mb-4">Home Preparation</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Coordinate with spouse on sale preparation (if applicable)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Declutter and remove personal items</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Remove family photos and personal memorabilia</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Deep clean entire home (carpets, windows, bathrooms, kitchen)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Make necessary repairs (leaks, broken fixtures, etc.)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Paint walls neutral colors if needed</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Stage home for showings (or hire stager)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Coordinate showing schedule with both spouses</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Prepare home for professional photography</span>
            </li>
          </ul>
        </div>

        <h2>Phase 3: Listing and Marketing</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
          <h3 className="font-semibold mb-4">Listing Process</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Both spouses sign listing agreement (if required)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Set listing price based on market analysis</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Professional photography completed</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Virtual tour created (if applicable)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Property listed on MLS</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Online marketing launched (Zillow, Realtor.com, etc.)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Open house scheduled (if appropriate)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Coordinate showings with sensitivity to divorce situation</span>
            </li>
          </ul>
        </div>

        <h2>Phase 4: Offers and Negotiations</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
          <h3 className="font-semibold mb-4">Offer Management</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Review all offers with both spouses</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Evaluate offer terms (price, contingencies, timeline)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Negotiate offer terms if needed</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Both spouses approve final offer</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Sign purchase agreement</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Coordinate with attorneys on agreement terms</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Ensure agreement complies with court order (if applicable)</span>
            </li>
          </ul>
        </div>

        <h2>Phase 5: Inspections and Appraisals</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
          <h3 className="font-semibold mb-4">Due Diligence</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Schedule home inspection</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Attend inspection (or have agent attend)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Review inspection report with both spouses</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Negotiate repairs or credits based on inspection</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Complete agreed-upon repairs</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Schedule appraisal (if required by buyer's lender)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Address any appraisal issues</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Ensure all contingencies are satisfied</span>
            </li>
          </ul>
        </div>

        <h2>Phase 6: Closing Preparation</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
          <h3 className="font-semibold mb-4">Pre-Closing</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Coordinate closing date with all parties</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Review closing documents with attorney</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Ensure both spouses can attend closing (or arrange power of attorney)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Arrange for mortgage payoff</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Confirm lien releases will be obtained</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Coordinate with title company</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Arrange for final walkthrough</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Plan for moving out (if applicable)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Cancel or transfer utilities</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Confirm proceeds distribution per agreement/order</span>
            </li>
          </ul>
        </div>

        <h2>Phase 7: Closing</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
          <h3 className="font-semibold mb-4">Closing Day</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Attend closing (both spouses or with power of attorney)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Review and sign all closing documents</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Verify mortgage payoff amounts</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Confirm closing costs and fees</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Verify net proceeds calculation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Receive proceeds distribution per agreement</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Obtain copies of all closing documents</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Turn over keys to buyer</span>
            </li>
          </ul>
        </div>

        <h2>Phase 8: Post-Closing</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
          <h3 className="font-semibold mb-4">After Sale</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>File closing documents with county recorder (if needed)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Update address with all relevant parties</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Cancel homeowners insurance</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Consult with tax professional about capital gains (if applicable)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Keep all closing documents for tax and legal records</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Confirm proceeds were distributed correctly</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold">□</span>
              <span>Move forward with your new chapter</span>
            </li>
          </ul>
        </div>

        <h2>Important Documents to Keep</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Home valuation report</li>
          <li>Listing agreement</li>
          <li>Purchase agreement</li>
          <li>Inspection reports</li>
          <li>Appraisal report</li>
          <li>Closing statement (HUD-1 or ALTA)</li>
          <li>Deed and title documents</li>
          <li>Divorce decree or settlement agreement</li>
          <li>All correspondence related to the sale</li>
        </ul>

        <h2>Get Expert Help with Your Checklist</h2>
        <p>
          This checklist covers the major steps, but every divorce home sale is unique. Dr. Jan Duffy helps you work through this checklist, ensuring nothing is missed and everything is handled correctly. She coordinates with attorneys, lenders, and other professionals to keep your sale on track.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
          <h3 className="text-xl font-semibold mb-2">Need Help Staying Organized?</h3>
          <p className="mb-4">
            Schedule a consultation with Dr. Jan Duffy to discuss your situation. She'll help you work through this checklist and ensure your divorce home sale proceeds smoothly.
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
          <li><Link href="/how-to-sell-house-during-divorce" className="text-blue-600 hover:text-blue-700 underline">How to Sell House During Divorce</Link></li>
          <li><Link href="/divorce-home-sale-timeline" className="text-blue-600 hover:text-blue-700 underline">Sale Timeline Guide</Link></li>
          <li><Link href="/divorce-real-estate-checklist" className="text-blue-600 hover:text-blue-700 underline">General Divorce Real Estate Checklist</Link></li>
          <li><Link href="/preparing-home-sale-divorce" className="text-blue-600 hover:text-blue-700 underline">Preparing Your Home</Link></li>
          <li><Link href="/divorce-real-estate-documents" className="text-blue-600 hover:text-blue-700 underline">Required Documents</Link></li>
        </ul>
      </div>
    </DivorcePageTemplate>
  );
}

