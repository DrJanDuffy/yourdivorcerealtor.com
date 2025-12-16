import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Las Vegas Communities */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Las Vegas Communities</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/divorce-realtor-henderson" className="text-gray-300 hover:text-white">
                  Henderson
                </Link>
              </li>
              <li>
                <Link href="/divorce-realtor-summerlin" className="text-gray-300 hover:text-white">
                  Summerlin
                </Link>
              </li>
              <li>
                <Link href="/divorce-realtor-north-las-vegas" className="text-gray-300 hover:text-white">
                  North Las Vegas
                </Link>
              </li>
              <li>
                <Link href="/divorce-realtor-green-valley" className="text-gray-300 hover:text-white">
                  Green Valley
                </Link>
              </li>
              <li>
                <Link href="/divorce-realtor-southern-highlands" className="text-gray-300 hover:text-white">
                  Southern Highlands
                </Link>
              </li>
              <li>
                <Link href="/divorce-realtor-spring-valley" className="text-gray-300 hover:text-white">
                  Spring Valley
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/divorce-home-valuation" className="text-gray-300 hover:text-white">
                  Home Valuation
                </Link>
              </li>
              <li>
                <Link href="/selling-home-during-divorce" className="text-gray-300 hover:text-white">
                  Selling During Divorce
                </Link>
              </li>
              <li>
                <Link href="/buying-home-after-divorce" className="text-gray-300 hover:text-white">
                  Buying After Divorce
                </Link>
              </li>
              <li>
                <Link href="/attorney-resources" className="text-gray-300 hover:text-white">
                  Attorney Resources
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Dr. Jan Duffy, REALTOR</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Berkshire Hathaway HomeServices Sahara</li>
              <li>Las Vegas, NV</li>
              <li>
                <a href="tel:+17025551234" className="hover:text-white">
                  Phone: (702) 555-1234
                </a>
              </li>
              <li className="mt-4">
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Dr. Jan
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                aria-label="YouTube"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                aria-label="Twitter"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                aria-label="Facebook"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>
            ©
            {' '}
            {currentYear}
            {' '}
            Your Divorce Realtor. All Rights Reserved.
          </p>
          <div className="mt-4 space-x-4">
            <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
