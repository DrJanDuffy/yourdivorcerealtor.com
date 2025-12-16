'use client';

import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Only render UserButton on client-side to avoid SSG issues
  // Check if we're in the browser and Clerk is configured
  const showUserButton = typeof window !== 'undefined'
    && !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Banner */}
      <div className="bg-blue-600 py-2 text-center text-sm text-white">
        <p>
          Skip the Stress. Get Expert Divorce Real Estate Help.
          {' '}
          <Link href="/contact" className="font-semibold underline">
            Schedule a Consultation
          </Link>
        </p>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600">
              Your Divorce Realtor
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-6 lg:flex">
            <Link href="/" className="font-medium text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/divorce-real-estate-services" className="font-medium text-gray-700 hover:text-blue-600">
              Divorce Specialist
            </Link>
            <Link href="/divorce-realtor-henderson" className="font-medium text-gray-700 hover:text-blue-600">
              Las Vegas Communities
            </Link>
            <Link href="/attorney-resources" className="font-medium text-gray-700 hover:text-blue-600">
              Resources
            </Link>
            <Link href="/about" className="font-medium text-gray-700 hover:text-blue-600">
              About Dr. Jan
            </Link>
            <Link href="/contact" className="font-medium text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Right Side - Phone & Auth */}
          <div className="hidden items-center space-x-6 lg:flex">
            <a href="tel:+17025551234" className="font-semibold text-blue-600 hover:text-blue-700">
              (702) 555-1234
            </a>
            {showUserButton && (
              <UserButton afterSignOutUrl="/" />
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="p-2 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen
                ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  )
                : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="space-y-4 py-4 lg:hidden">
            <Link href="/" className="block text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/divorce-real-estate-services" className="block text-gray-700 hover:text-blue-600">
              Divorce Specialist
            </Link>
            <Link href="/divorce-realtor-henderson" className="block text-gray-700 hover:text-blue-600">
              Las Vegas Communities
            </Link>
            <Link href="/attorney-resources" className="block text-gray-700 hover:text-blue-600">
              Resources
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-blue-600">
              About Dr. Jan
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-blue-600">
              Contact
            </Link>
            <a href="tel:+17025551234" className="block font-semibold text-blue-600">
              (702) 555-1234
            </a>
            {showUserButton && (
              <div className="pt-4">
                <UserButton afterSignOutUrl="/" />
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
