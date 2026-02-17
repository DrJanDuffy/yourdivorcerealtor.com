import type { Metadata } from 'next';
import type { PageProps, PropertyListing } from '@/types';
import { setRequestLocale } from 'next-intl/server';
import { PropertyCard } from '@/components/sections/PropertyCard';
import { generateLocaleAlternates } from '@/lib/metadata';

const path = '/homes';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const { canonical, languages } = generateLocaleAlternates(path, locale);
  return {
    title: 'Homes for Sale | Your Divorce Realtor',
    description: 'Search homes for sale. Your best Real Estate Experience is here, browse homes.',
    alternates: { canonical, languages },
  };
}

// Mock listings - replace with real data from your API/database
const allListings: PropertyListing[] = [
  {
    id: '1',
    address: '216 Arcadian Way',
    city: 'Madison',
    price: 624999,
    beds: 4,
    baths: 4,
    sqft: 2895,
    mlsNumber: '21905765',
    agentName: 'Rochon Hall',
    agentPhone: '256-270-9393',
    status: 'New',
  },
  {
    id: '2',
    address: '110 Independence Drive',
    city: 'Meridianville',
    price: 315999,
    beds: 3,
    baths: 2,
    sqft: 1808,
    mlsNumber: '21905764',
    agentName: 'Rochon Hall',
    agentPhone: '256-270-9393',
    status: 'New',
  },
  {
    id: '3',
    address: '2011 1st Street',
    city: 'Huntsville',
    price: 179900,
    beds: 2,
    baths: 1,
    sqft: 1506,
    mlsNumber: '21902045',
    agentName: 'Benjamin Waye',
    agentPhone: '256-270-9393',
    status: 'Active',
  },
];

export default async function HomesPage(props: PageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Homes for Sale
        </h1>
        <p className="text-xl text-gray-600">
          Your best Real Estate Experience is here, browse homes.
        </p>
      </div>

      {/* Search Filters - Add later */}
      <div className="mb-8">
        <p className="text-gray-600">Search filters coming soon...</p>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {allListings.map(listing => (
          <PropertyCard key={listing.id} {...listing} />
        ))}
      </div>
    </div>
  );
}
