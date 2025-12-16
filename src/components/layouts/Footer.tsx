import Link from 'next/link';
import { generateLocalBusinessSchema } from '@/lib/schema';

/**
 * Optimized Footer Component
 * - Server Component (static content)
 * - Includes LocalBusiness structured data
 * - Optimized for SEO and accessibility
 * - Cached year calculation
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  // Generate structured data for SEO
  const localBusinessSchema = generateLocalBusinessSchema();

  const communities = [
    { name: 'Henderson', href: '/divorce-realtor-henderson' },
    { name: 'Summerlin', href: '/divorce-realtor-summerlin' },
    { name: 'North Las Vegas', href: '/divorce-realtor-north-las-vegas' },
    { name: 'Green Valley', href: '/divorce-realtor-green-valley' },
    { name: 'Spring Valley', href: '/divorce-realtor-spring-valley' },
    { name: 'Enterprise', href: '/divorce-realtor-enterprise' },
    { name: 'Paradise', href: '/divorce-realtor-paradise' },
    { name: 'Centennial Hills', href: '/divorce-realtor-centennial-hills' },
    { name: 'Southern Highlands', href: '/divorce-realtor-southern-highlands' },
    { name: 'Aliante', href: '/divorce-realtor-aliante' },
    { name: 'Mountains Edge', href: '/divorce-realtor-mountains-edge' },
    { name: 'Inspirada', href: '/divorce-realtor-inspirada' },
  ];

  const resources = [
    { name: 'Home Valuation', href: '/divorce-home-valuation' },
    { name: 'Selling During Divorce', href: '/selling-home-during-divorce' },
    { name: 'Buying After Divorce', href: '/buying-home-after-divorce' },
    { name: 'Attorney Resources', href: '/attorney-resources' },
    { name: 'FAQ', href: '/faq' },
  ];

  const socialLinks = [
    {
      name: 'YouTube',
      href: 'https://youtube.com',
      icon: (
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: (
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      ),
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: (
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      ),
    },
  ];

  return (
    <footer className="bg-gray-900 py-12 text-white" role="contentinfo">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="container mx-auto px-4">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Las Vegas Communities */}
          <nav aria-label="Las Vegas Communities">
            <h3 className="mb-4 text-lg font-semibold">Las Vegas Communities</h3>
            <ul className="space-y-2">
              {communities.map((community) => (
                <li key={community.href}>
                  <Link
                    href={community.href}
                    className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    prefetch={true}
                  >
                    {community.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-label="Resources">
            <h3 className="mb-4 text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.href}>
                  <Link
                    href={resource.href}
                    className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    prefetch={true}
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company Info */}
          <address className="not-italic">
            <h3 className="mb-4 text-lg font-semibold">Dr. Jan Duffy, REALTOR</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Berkshire Hathaway HomeServices Nevada Properties</li>
              <li>License #S.0197614.LLC</li>
              <li>Las Vegas, NV</li>
              <li>
                <a
                  href="tel:+17022221964"
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  aria-label="Call client phone number 702-222-1964"
                >
                  Client Phone: (702) 222-1964
                </a>
              </li>
              <li>
                <a
                  href="tel:+17025001955"
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  aria-label="Call professional phone number 702-500-1955"
                >
                  Professional Phone: (702) 500-1955
                </a>
              </li>
              <li className="mt-4">
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  prefetch={true}
                >
                  About Dr. Jan
                </Link>
              </li>
            </ul>
          </address>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Connect With Us</h3>
            <nav aria-label="Social media links">
              <ul className="flex space-x-4">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
                      aria-label={`Visit Dr. Jan Duffy on ${social.name}`}
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        {social.icon}
                      </svg>
                      <span className="sr-only">{social.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>
            ©
            {' '}
            {currentYear}
            {' '}
            Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. All Rights Reserved.
          </p>
          <nav className="mt-4 space-x-4" aria-label="Legal links">
            <Link
              href="/sitemap"
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            >
              Sitemap
            </Link>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            >
              Terms of Use
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
