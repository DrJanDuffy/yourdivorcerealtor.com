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
            <div className="h-16 bg-blue-500/30 rounded-lg mb-4 animate-pulse" />
            <div className="h-8 bg-blue-500/30 rounded-lg mb-8 w-3/4 mx-auto animate-pulse" />
            <div className="flex gap-4 justify-center">
              <div className="h-12 w-40 bg-white/30 rounded-lg animate-pulse" />
              <div className="h-12 w-40 bg-white/30 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-8">
          <div className="h-8 bg-gray-200 rounded-lg w-1/2 animate-pulse" />
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-4 bg-gray-200 rounded-lg w-5/6 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded-lg w-4/6 animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-48 bg-gray-200 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

