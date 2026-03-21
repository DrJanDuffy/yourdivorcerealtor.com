/**
 * Loading state for marketing pages
 * Shows skeleton loaders while content is being fetched
 */
export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero skeleton */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 h-16 animate-pulse rounded-lg bg-blue-500/30" />
            <div className="mx-auto mb-8 h-8 w-3/4 animate-pulse rounded-lg bg-blue-500/30" />
            <div className="flex justify-center gap-4">
              <div className="h-12 w-40 animate-pulse rounded-lg bg-white/30" />
              <div className="h-12 w-40 animate-pulse rounded-lg bg-white/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-8">
          <div className="h-8 w-1/2 animate-pulse rounded-lg bg-gray-200" />
          <div className="space-y-4">
            <div className="h-4 animate-pulse rounded-lg bg-gray-200" />
            <div className="h-4 w-5/6 animate-pulse rounded-lg bg-gray-200" />
            <div className="h-4 w-4/6 animate-pulse rounded-lg bg-gray-200" />
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-48 animate-pulse rounded-lg bg-gray-200" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
