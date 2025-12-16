import type { PropertyListing } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

type PropertyCardProps = Omit<PropertyListing, 'id'> & {
  id: string;
};

export function PropertyCard({
  address,
  city,
  price,
  beds,
  baths,
  sqft,
  mlsNumber,
  agentName,
  agentPhone,
  imageUrl,
  status = 'Active',
}: PropertyCardProps) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <Link href={`/property/${mlsNumber}`} className="group block">
      <div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl">
        {/* Image */}
        <div className="relative h-64 bg-gray-200">
          {status === 'New' && (
            <div className="absolute top-2 left-2 z-10 rounded bg-green-500 px-3 py-1 text-sm font-semibold text-white">
              New
            </div>
          )}
          {status && (
            <div
              className={`absolute top-2 right-2 z-10 rounded px-3 py-1 text-sm font-semibold text-white ${
                status === 'New'
                  ? 'bg-green-500'
                  : status === 'Active'
                    ? 'bg-blue-600'
                    : status === 'Pending'
                      ? 'bg-yellow-500'
                      : 'bg-gray-500'
              }`}
            >
              {status}
            </div>
          )}
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`${address}, ${city}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gray-300 text-gray-500">
              <span>No Image</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-2 text-2xl font-bold text-gray-900">
            {formattedPrice}
          </div>
          <div className="mb-4 text-gray-600">
            {address}
            ,
            {city}
          </div>

          <div className="mb-4 flex items-center space-x-4 text-sm text-gray-500">
            <span>
              {beds}
              {' '}
              Beds
            </span>
            <span>
              {baths}
              {' '}
              Baths
            </span>
            <span>
              {sqft.toLocaleString()}
              {' '}
              SqFt
            </span>
          </div>

          <div className="border-t pt-4">
            <div className="text-sm text-gray-600">
              <div className="font-semibold">Residential</div>
              <div>
                MLS® #
                {mlsNumber}
              </div>
              <div className="mt-2">
                <div className="font-semibold">{agentName}</div>
                <div className="text-blue-600">{agentPhone}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
