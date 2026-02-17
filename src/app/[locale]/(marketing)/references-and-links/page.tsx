import type { Metadata } from 'next';
import type { ReferenceLink } from '@/lib/references-and-links';
import { setRequestLocale } from 'next-intl/server';
import { DivorcePageTemplate } from '@/components/divorce/DivorcePageTemplate';
import { StructuredData } from '@/components/seo/StructuredData';
import { generateLocaleAlternates } from '@/lib/metadata';
import {
  brochuresLinks,
  clarkCountyLinks,
  lawLibrariesLinks,

  stateOfNevadaLinks,
  videosLinks,
} from '@/lib/references-and-links';
import { generateRealEstateAgentSchema } from '@/lib/schema';

type ReferencesAndLinksProps = {
  params: Promise<{ locale: string }>;
};

const path = '/references-and-links';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'References & Links | Dr. Jan Duffy – Divorce Real Estate Expert',
    description:
      'Official resources, brochures, Clark County and Nevada state links, law libraries, and videos for divorce and real estate in Las Vegas and Henderson.',
    keywords:
      'references and links, divorce resources Nevada, Clark County family law, Nevada e-filing, law library, Legal Aid Southern Nevada',
    alternates: { canonical, languages },
  };
}

function LinkCard({ resource }: { resource: ReferenceLink }) {
  return (
    <a
      href={resource.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-lg border border-gray-200 bg-gray-50 p-4 transition-colors hover:border-blue-400 hover:bg-blue-50/50"
    >
      <h3 className="mb-1 font-semibold text-gray-900 group-hover:text-blue-700">
        {resource.title}
      </h3>
      <p className="text-sm text-gray-600">{resource.description}</p>
      <span className="mt-2 inline-flex items-center text-sm font-medium text-blue-600">
        Visit resource
        <svg
          className="ml-1 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </span>
    </a>
  );
}

function LinkSection({
  id,
  title,
  links,
}: {
  id: string;
  title: string;
  links: ReferenceLink[];
}) {
  if (links.length === 0) {
    return null;
  }
  return (
    <section aria-labelledby={id} className="space-y-4">
      <h2 id={id} className="text-xl font-bold text-gray-900 sm:text-2xl">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(resource => (
          <LinkCard key={resource.href} resource={resource} />
        ))}
      </div>
    </section>
  );
}

export default async function ReferencesAndLinksPage(props: ReferencesAndLinksProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const currentPath = path;
  const realEstateAgentSchema = generateRealEstateAgentSchema();

  return (
    <>
      <StructuredData data={[realEstateAgentSchema]} />
      <DivorcePageTemplate
        currentPath={currentPath}
        h1="References & Links"
        heroSubhead="Official resources for divorce and real estate in Clark County and Nevada"
      >
        <div className="mx-auto max-w-5xl space-y-12">
          <p className="text-lg text-gray-700">
            Below are authoritative links to government, court, and community
            resources that can help you with family law and real estate matters
            in Clark County and Nevada. These primary sources support informed
            decisions during divorce and property transactions.
          </p>

          <LinkSection
            id="brochures"
            title="Brochures"
            links={brochuresLinks}
          />
          <LinkSection
            id="clark-county"
            title="Clark County Links"
            links={clarkCountyLinks}
          />
          <LinkSection
            id="law-libraries"
            title="Law Libraries"
            links={lawLibrariesLinks}
          />
          <LinkSection
            id="state-nevada"
            title="State of Nevada Links"
            links={stateOfNevadaLinks}
          />
          <LinkSection
            id="videos"
            title="Videos"
            links={videosLinks}
          />
        </div>
      </DivorcePageTemplate>
    </>
  );
}
