import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import { CONTENT_LAST_UPDATED, toSchemaDateTime } from '@/lib/content-dates';
import { generateLocaleAlternates } from '@/lib/metadata';
import {
  generateArticleSchema,
  generateRealEstateAgentSchema,
  generateServiceSchema,
} from '@/lib/schema';

type IQuitclaimProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-dynamic';

const path = '/quitclaim-deed-divorce';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'Quitclaim Deed in Divorce Transactions | Dr. Jan Duffy',
    description: 'Expert guidance for quitclaim deeds in divorce. Transfer ownership correctly with professional assistance.',
    keywords: 'quitclaim deed divorce, transfer property divorce, divorce property transfer',
    alternates: { canonical, languages },
  };
}

export default async function QuitclaimDeed(props: IQuitclaimProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const baseUrl = 'https://www.yourdivorcerealtor.com';
  const currentPath = '/quitclaim-deed-divorce';
  const articleSchema = generateArticleSchema(
    'Quitclaim Deed in Divorce Transactions',
    'Expert guidance for quitclaim deeds in divorce. Transfer ownership correctly with professional assistance.',
    `${baseUrl}${currentPath}`,
    toSchemaDateTime(CONTENT_LAST_UPDATED),
    toSchemaDateTime(CONTENT_LAST_UPDATED),
  );
  const serviceSchema = generateServiceSchema(
    'Quitclaim Deed Services',
    'Expert guidance for quitclaim deeds in divorce. Transfer ownership correctly with professional assistance.',
    ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  );
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[articleSchema, serviceSchema, realEstateAgentSchema]} />
      <DivorcePageTemplate
        h1="Quitclaim Deed in Divorce Transactions"
        heroSubhead="Transfer Ownership Correctly"
        currentPath={currentPath}
        datePublished={CONTENT_LAST_UPDATED}
        dateModified={CONTENT_LAST_UPDATED}
      >
        <div className="prose prose-lg mx-auto max-w-4xl">
          <h2>Understanding Quitclaim Deeds in Divorce</h2>
          <p>
            A quitclaim deed transfers ownership interest in a property from one person to another. In divorce, it's often used when one spouse transfers their interest to the other, typically as part of a buyout or property division agreement. Dr. Jan Duffy helps ensure quitclaim deeds are handled correctly, coordinating with attorneys to ensure legal compliance and proper documentation.
          </p>

          <h3>How Quitclaim Deeds Work</h3>
          <p>
            A quitclaim deed transfers whatever interest the grantor has in the property to the grantee. It doesn't guarantee the grantor has clear title, but in divorce situations where both parties are on the deed, it effectively transfers one spouse's interest to the other.
          </p>

          <h2>When Quitclaim Deeds Are Used</h2>
          <p>
            Quitclaim deeds are commonly used in divorce when one spouse is keeping the home and buying out the other's share. They're also used when property is being transferred as part of a settlement agreement.
          </p>

          <h2>Legal Requirements</h2>
          <p>
            Quitclaim deeds must be prepared correctly and recorded with the county recorder's office. Dr. Jan Duffy coordinates with attorneys to ensure quitclaim deeds are handled properly and legally compliant.
          </p>

          <h2>Get Quitclaim Deed Help Today</h2>
          <p>
            Quitclaim deeds are important legal documents that must be handled correctly. Dr. Jan Duffy provides the coordination and expertise you need to ensure quitclaim deeds are processed properly. Schedule a consultation today.
          </p>
        </div>
      </DivorcePageTemplate>
    </>
  );
}
