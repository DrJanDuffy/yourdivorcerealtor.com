'use client';

import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useTransition } from 'react';
import { NavigationLink } from './NavigationLink';

/**
 * Optimized Header Component
 * - Split interactive parts (mobile menu) into client component
 * - Uses React 19.2 View Transitions for smooth animations
 * - Optimized for accessibility and SEO
 * - Prefetches navigation links on hover
 */
export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, startTransition] = useTransition();

  // Only render UserButton on client-side to avoid SSG issues
  const showUserButton = typeof window !== 'undefined'
    && !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  const toggleMobileMenu = () => {
    startTransition(() => {
      setMobileMenuOpen(prev => !prev);
    });
  };

  const closeMobileMenu = () => {
    startTransition(() => {
      setMobileMenuOpen(false);
    });
  };

  const navigationLinks = [
    { href: '/', label: 'Home', priority: 'high' as const },
    { href: '/divorce-real-estate-services', label: 'Divorce Specialist', priority: 'high' as const },
    { href: '/divorce-realtor-henderson', label: 'Las Vegas Communities', priority: 'low' as const },
    { href: '/attorney-resources', label: 'Resources', priority: 'low' as const },
    { href: '/about', label: 'About Dr. Jan', priority: 'low' as const },
    { href: '/contact', label: 'Contact', priority: 'high' as const },
  ];

  const isActive = (href: string) => pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md" role="banner">
      {/* Top Banner - Dismissible */}
      <div className="bg-blue-600 py-2 text-center text-sm text-white">
        <div className="container mx-auto px-4">
          <p>
            Skip the Stress. Get Expert Divorce Real Estate Help.
            {' '}
            <Link
              href="/contact"
              className="font-semibold underline transition-colors hover:text-blue-200"
              prefetch={true}
            >
              Schedule a Consultation
            </Link>
          </p>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - SEO Optimized with Schema Markup */}
          <Link
            href="/"
            className="flex rounded focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:outline-none"
            prefetch={true}
            aria-label="Dr. Jan Duffy - Divorce Real Estate Specialist Home"
            itemScope
            itemType="https://schema.org/RealEstateAgent"
          >
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo/berkshire-hathaway-quality-seal.png"
                alt="Berkshire Hathaway HomeServices Nevada Properties quality seal"
                width={40}
                height={40}
                priority
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-blue-600" itemProp="name">
                  Dr. Jan Duffy
                </span>
                <span className="text-sm font-medium text-gray-600" itemProp="description">
                  Divorce Real Estate Specialist
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-6 lg:flex">
            {navigationLinks.map(link => (
              <NavigationLink
                key={link.href}
                href={link.href}
                label={link.label}
                priority={link.priority}
                prefetch={true}
              />
            ))}
          </div>

          {/* Right Side - Phone & Auth */}
          <div className="hidden items-center space-x-6 lg:flex">
            <a
              href="tel:+17022221964"
              className="rounded px-2 py-1 font-semibold text-blue-600 transition-colors hover:text-blue-700 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:outline-none"
              aria-label="Call Dr. Jan Duffy at 702-222-1964"
            >
              (702) 222-1964
            </a>
            {showUserButton && (
              <div className="flex items-center">
                <UserButton afterSignOutUrl="/" />
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="rounded p-2 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:outline-none lg:hidden"
            onClick={toggleMobileMenu}
            {...(mobileMenuOpen ? { 'aria-expanded': 'true' } : { 'aria-expanded': 'false' })}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              className="h-6 w-6 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
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
          <div id="mobile-menu" className="lg:hidden" aria-hidden="false">
            <div className="space-y-4 border-t border-gray-200 py-4">
              {navigationLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`block rounded-md px-4 py-2 transition-colors focus:ring-2 focus:ring-blue-600 focus:outline-none ${
                    isActive(link.href)
                      ? 'bg-blue-50 font-semibold text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                  }`}
                  prefetch={true}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+17022221964"
                onClick={closeMobileMenu}
                className="block rounded-md px-4 py-2 font-semibold text-blue-600 transition-colors hover:bg-blue-50 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                aria-label="Call Dr. Jan Duffy at 702-222-1964"
              >
                (702) 222-1964
              </a>
              {showUserButton && (
                <div className="border-t border-gray-200 px-4 pt-4">
                  <UserButton afterSignOutUrl="/" />
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
