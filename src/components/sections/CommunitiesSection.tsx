import Image from 'next/image';
import Link from 'next/link';

const communities = [
  { name: 'Athens, AL', slug: 'athens', image: '/communities/athens.jpg' },
  { name: 'Limestone County, AL', slug: 'limestone', image: '/communities/limestone.jpg' },
  { name: 'Priceville, AL', slug: 'priceville', image: '/communities/priceville.jpg' },
  { name: 'Meridianville, AL', slug: 'meridianville', image: '/communities/meridianville.jpg' },
  { name: 'Harvest, AL', slug: 'harvest', image: '/communities/harvest.jpg' },
  { name: 'Huntsville, AL', slug: 'huntsville', image: '/communities/huntsville.jpg' },
];

export function CommunitiesSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="mb-2 text-4xl font-bold text-gray-900">
              North Alabama Communities
            </h2>
          </div>
          <Link
            href="/communities"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {communities.map(community => (
            <Link
              key={community.slug}
              href={`/communities/${community.slug}`}
              className="group relative h-64 overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="relative h-full w-full bg-gray-200">
                <Image
                  src={community.image}
                  alt={`${community.name} real estate community`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">{community.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
