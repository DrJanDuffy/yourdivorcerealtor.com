'use client';

import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Banner */}
      <div className="bg-blue-600 py-2 text-center text-sm text-white">
        <p>
          Skip the Showings. Get an Instant Offer.
          {' '}
          <Link href="/sell/instant-offer" className="font-semibold underline">
            Get My Offer
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
          <div className="hidden items-center space-x-8 lg:flex">
            <Link href="/homes" className="font-medium text-gray-700 hover:text-blue-600">
              Homes for Sale
            </Link>
            <Link href="/communities" className="font-medium text-gray-700 hover:text-blue-600">
              Communities
            </Link>
            <Link href="/sell" className="font-medium text-gray-700 hover:text-blue-600">
              Sell
            </Link>
            <Link href="/about" className="font-medium text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/dashboard" className="font-medium text-gray-700 hover:text-blue-600">
              My Dashboard
            </Link>
          </div>

          {/* Right Side - Phone & Auth */}
          <div className="hidden items-center space-x-6 lg:flex">
            <a href="tel:+12562709393" className="font-semibold text-blue-600 hover:text-blue-700">
              (256) 270-9393
            </a>
            <UserButton afterSignOutUrl="/" />
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
            <Link href="/homes" className="block text-gray-700 hover:text-blue-600">
              Homes for Sale
            </Link>
            <Link href="/communities" className="block text-gray-700 hover:text-blue-600">
              Communities
            </Link>
            <Link href="/sell" className="block text-gray-700 hover:text-blue-600">
              Sell
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/dashboard" className="block text-gray-700 hover:text-blue-600">
              My Dashboard
            </Link>
            <a href="tel:+12562709393" className="block font-semibold text-blue-600">
              (256) 270-9393
            </a>
            <div className="pt-4">
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
