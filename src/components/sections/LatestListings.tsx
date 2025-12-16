import Link from 'next/link';
import { PropertyCard } from './PropertyCard';

// Mock data - replace with real data from your API/database
const mockListings = [
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
    status: 'New' as const,
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
    status: 'New' as const,
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
    status: 'New' as const,
  },
];

export function LatestListings() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="mb-2 text-4xl font-bold text-gray-900">
              Latest Listings
            </h2>
          </div>
          <Link
            href="/homes"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mockListings.map(listing => (
            <PropertyCard key={listing.id} {...listing} />
          ))}
        </div>
      </div>
    </section>
  );
}
