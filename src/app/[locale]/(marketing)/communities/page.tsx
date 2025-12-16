import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

type CommunitiesPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Alabama Communities | Your Divorce Realtor',
    description: 'Browse Alabama communities and find your dream home.',
  };
}

const communities = [
  { name: 'Huntsville, AL', slug: 'huntsville', description: 'The Heart and Soul of Huntsville' },
  { name: 'Madison, AL', slug: 'madison', description: 'Family-friendly community with excellent schools' },
  { name: 'Harvest, AL', slug: 'harvest', description: 'Beautiful suburban living' },
  { name: 'Athens, AL', slug: 'athens', description: 'Beautiful canola fields in Limestone County' },
  { name: 'Meridianville, AL', slug: 'meridianville', description: 'Quiet country living' },
  { name: 'Decatur, AL', slug: 'decatur', description: 'Riverside community with rich history' },
  { name: 'Hampton Cove, AL', slug: 'hampton-cove', description: 'Luxury golf community' },
];

export default async function CommunitiesPage(props: CommunitiesPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-5xl font-bold text-gray-900">
          Communities
        </h1>
        <p className="text-xl text-gray-600">
          Browse Alabama communities and find your dream home.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {communities.map(community => (
          <Link
            key={community.slug}
            href={`/communities/${community.slug}`}
            className="group"
          >
            <div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl">
              <div className="relative h-64 bg-gray-200">
                <Image
                  src={`/communities/${community.slug}.jpg`}
                  alt={`${community.name} real estate community`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <div className="p-6">
                <h2 className="mb-2 text-2xl font-bold text-gray-900">
                  {community.name}
                </h2>
                <p className="text-gray-600">{community.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
