import Link from 'next/link';
import { communities } from '@/lib/communities';

const PREVIEW = communities.slice(0, 6);

export function CommunitiesSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="mb-2 text-4xl font-bold text-gray-900">
              Las Vegas Area Communities
            </h2>
            <p className="max-w-2xl text-gray-600">
              Divorce real estate help across Southern Nevada—select an area for localized guidance.
            </p>
          </div>
          <Link href="/communities" className="font-semibold text-blue-600 hover:text-blue-700">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PREVIEW.map(community => (
            <Link
              key={community.href}
              href={community.href}
              className="group rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm transition-shadow hover:border-blue-300 hover:shadow-md"
            >
              <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-blue-600">{community.name}</h3>
              <p className="text-sm text-gray-600">{community.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
