import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import {
  generateReviewSchema,
  generateRealEstateAgentSchema,
} from '@/lib/schema';

type ITestimonialsProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Divorce Real Estate Success Stories Las Vegas | Testimonials',
    description: 'Read success stories from Las Vegas families who worked with Dr. Jan Duffy for their divorce real estate needs. Real testimonials from satisfied clients.',
    keywords: 'divorce realtor reviews, divorce real estate testimonials, las vegas divorce realtor success stories',
  };
}

export default async function Testimonials(props: ITestimonialsProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const currentPath = '/testimonials';
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  // Generate Review schemas for each testimonial
  const reviewSchemas = [
    generateReviewSchema(
      'Sarah M.',
      'Dr. Jan Duffy made selling our home during divorce so much easier than I expected. She was neutral, professional, and kept both of us informed every step of the way. The process was smooth, and we got a great price. I can\'t recommend her enough.',
      5,
      new Date().toISOString(),
    ),
    generateReviewSchema(
      'Michael R.',
      'I needed to buy out my ex-wife and keep the house. Dr. Jan Duffy helped me understand the process, coordinated with my lender for refinancing, and made sure everything was done correctly. Her expertise saved me time and money.',
      5,
      new Date().toISOString(),
    ),
    generateReviewSchema(
      'Jennifer L.',
      'Going through a divorce with kids is hard enough. Dr. Jan Duffy understood our situation and helped us sell our home quickly so we could both move on. She was compassionate, professional, and got results. We\'re both in our new homes now, and the kids are adjusting well.',
      5,
      new Date().toISOString(),
    ),
    generateReviewSchema(
      'Attorney David Chen',
      'I\'ve worked with Dr. Jan Duffy on multiple divorce cases, and she\'s always professional, knowledgeable, and efficient. Her expertise in divorce real estate makes my job easier, and my clients consistently get better outcomes. I recommend her to all my clients dealing with property division.',
      5,
      new Date().toISOString(),
    ),
    generateReviewSchema(
      'Robert T.',
      'The court ordered us to sell our home, and I was worried about the process. Dr. Jan Duffy handled everything perfectly. She followed the court order exactly, kept everyone informed, and we closed on time. I couldn\'t have asked for better service.',
      5,
      new Date().toISOString(),
    ),
  ];

  return (
    <>
      <StructuredData data={[realEstateAgentSchema, ...reviewSchemas]} />
      <DivorcePageTemplate
        h1="Divorce Real Estate Success Stories Las Vegas"
        heroSubhead="Real Stories from Real Families"
        currentPath={currentPath}
      >
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg mb-12">
          <h2>Why Our Clients Choose Dr. Jan Duffy</h2>
          <p>
            Divorce real estate is about more than just property—it's about helping families navigate one of life's most challenging transitions. Dr. Jan Duffy's clients consistently praise her expertise, compassion, and ability to make difficult situations manageable. Here are their stories.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-2xl mr-2">★★★★★</div>
              <span className="font-semibold">Sarah M., Henderson</span>
            </div>
            <p className="text-gray-700 italic mb-4">
              "Dr. Jan Duffy made selling our home during divorce so much easier than I expected. She was neutral, professional, and kept both of us informed every step of the way. The process was smooth, and we got a great price. I can't recommend her enough."
            </p>
            <p className="text-sm text-gray-500">Sold home in 45 days | Closed successfully</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-2xl mr-2">★★★★★</div>
              <span className="font-semibold">Michael R., Summerlin</span>
            </div>
            <p className="text-gray-700 italic mb-4">
              "I needed to buy out my ex-wife and keep the house. Dr. Jan Duffy helped me understand the process, coordinated with my lender for refinancing, and made sure everything was done correctly. Her expertise saved me time and money."
            </p>
            <p className="text-sm text-gray-500">Successful buyout | Refinanced in 30 days</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-2xl mr-2">★★★★★</div>
              <span className="font-semibold">Jennifer L., North Las Vegas</span>
            </div>
            <p className="text-gray-700 italic mb-4">
              "Going through a divorce with kids is hard enough. Dr. Jan Duffy understood our situation and helped us sell our home quickly so we could both move on. She was compassionate, professional, and got results. We're both in our new homes now, and the kids are adjusting well."
            </p>
            <p className="text-sm text-gray-500">Sold in 38 days | Both parties satisfied</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-2xl mr-2">★★★★★</div>
              <span className="font-semibold">Attorney David Chen, Family Law</span>
            </div>
            <p className="text-gray-700 italic mb-4">
              "I've worked with Dr. Jan Duffy on multiple divorce cases, and she's always professional, knowledgeable, and efficient. Her expertise in divorce real estate makes my job easier, and my clients consistently get better outcomes. I recommend her to all my clients dealing with property division."
            </p>
            <p className="text-sm text-gray-500">Family Law Attorney | Las Vegas</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-2xl mr-2">★★★★★</div>
              <span className="font-semibold">Robert T., Green Valley</span>
            </div>
            <p className="text-gray-700 italic mb-4">
              "The court ordered us to sell our home, and I was worried about the process. Dr. Jan Duffy handled everything perfectly. She followed the court order exactly, kept everyone informed, and we closed on time. I couldn't have asked for better service."
            </p>
            <p className="text-sm text-gray-500">Court-ordered sale | Completed on schedule</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none bg-blue-50 rounded-lg p-8">
          <h2>What Makes Dr. Jan Duffy Different</h2>
          <p>
            These testimonials reflect the consistent themes clients mention when working with Dr. Jan Duffy: expertise, compassion, neutrality, and results. Her specialized approach to divorce real estate delivers better outcomes for everyone involved.
          </p>

          <h3>Expertise You Can Trust</h3>
          <p>
            Dr. Jan Duffy's specialized knowledge of divorce real estate ensures your transaction is handled correctly from start to finish. Clients consistently praise her understanding of the legal, financial, and emotional aspects of property division during divorce.
          </p>

          <h3>Compassionate Service</h3>
          <p>
            Divorce is emotionally challenging, and Dr. Jan Duffy provides compassionate, understanding service that acknowledges the difficulty of your situation. Clients appreciate her ability to be professional while also being human and understanding.
          </p>

          <h3>Proven Results</h3>
          <p>
            The results speak for themselves: faster transactions, reduced conflict, and better outcomes. Dr. Jan Duffy's clients consistently achieve their goals, whether that's selling quickly, completing a buyout, or navigating a court-ordered sale.
          </p>

          <h2>Ready to Write Your Success Story?</h2>
          <p>
            Join the many Las Vegas families who have successfully navigated divorce real estate with Dr. Jan Duffy. Schedule a confidential consultation today and take the first step toward your own success story.
          </p>
        </div>
      </div>
      </DivorcePageTemplate>
    </>
  );
}

