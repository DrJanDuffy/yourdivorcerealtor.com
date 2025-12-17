import Link from 'next/link';

/**
 * 404 Not Found page
 * Friendly messaging for divorce clients who land on non-existent pages
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md mx-auto text-center px-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist. During divorce, it's important to have the right information and support. Let us help you find what you need.
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="/divorce-real-estate-services"
            className="block w-full bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            View Our Services
          </Link>
          <Link
            href="/contact"
            className="block w-full text-blue-600 font-semibold hover:underline"
          >
            Contact Dr. Jan Duffy
          </Link>
        </div>
        <div className="mt-12 space-y-2">
          <p className="text-sm font-semibold text-gray-700">Popular Pages:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/about" className="text-sm text-blue-600 hover:underline">
              About
            </Link>
            <Link href="/faq" className="text-sm text-blue-600 hover:underline">
              FAQ
            </Link>
            <Link href="/divorce-home-valuation" className="text-sm text-blue-600 hover:underline">
              Home Valuation
            </Link>
            <Link href="/testimonials" className="text-sm text-blue-600 hover:underline">
              Testimonials
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}



