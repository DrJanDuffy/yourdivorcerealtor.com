import Link from 'next/link';
import { CalendlyLink } from '@/components/calendly/CalendlyLink';

/**
 * 404 Not Found page
 * Friendly messaging for divorce clients who land on non-existent pages
 */
export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="mx-auto max-w-md px-4 text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>
        <p className="mb-8 text-lg text-gray-600">
          The page you're looking for doesn't exist. During divorce, it's important to have the right information and support. Let us help you find what you need.
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="block w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Return Home
          </Link>
          <Link
            href="/divorce-real-estate-services"
            className="block w-full rounded-lg bg-gray-200 px-6 py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-300"
          >
            View Our Services
          </Link>
          <CalendlyLink
            className="block w-full font-semibold text-blue-600 hover:underline"
          >
            Schedule a Consultation
          </CalendlyLink>
        </div>
        <div className="mt-12 space-y-2">
          <p className="text-sm font-semibold text-gray-700">Popular Pages:</p>
          <div className="flex flex-wrap justify-center gap-2">
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
