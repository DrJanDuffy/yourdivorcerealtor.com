/**
 * Centralized TypeScript Types
 * Optimized type definitions for Next.js 16 App Router
 */

import type { Metadata } from 'next';
import type { routing } from '@/libs/I18nRouting';

// ============================================================================
// Locale Types
// ============================================================================

/** Available locales from routing configuration */
export type Locale = (typeof routing.locales)[number];

/** Locale params for Next.js 15+ async params */
export type LocaleParams = {
  locale: Locale;
};

// ============================================================================
// Page Props Types
// ============================================================================

/**
 * Standard page props with locale params
 * Use for all [locale] route pages
 */
export type PageProps = {
  params: Promise<LocaleParams>;
};

/**
 * Page props with additional dynamic segment
 * Use for [locale]/[slug] routes
 */
export type PagePropsWithSlug = {
  params: Promise<LocaleParams & { slug: string }>;
};

/**
 * Page props with search params
 * Use for pages that handle URL query parameters
 */
export type PagePropsWithSearch = PageProps & {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

/**
 * Layout props with children
 * Use for layout.tsx files
 */
export type LayoutProps = {
  children: React.ReactNode;
  params: Promise<LocaleParams>;
};

/**
 * Layout props with parallel routes
 * Use for layouts with @modal or other parallel routes
 */
export type LayoutPropsWithModal = LayoutProps & {
  modal: React.ReactNode;
};

// ============================================================================
// Error & Loading Types
// ============================================================================

/**
 * Error page props for error.tsx
 */
export type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

/**
 * Not Found page doesn't receive props in App Router
 */
export type NotFoundPageProps = Record<string, never>;

// ============================================================================
// Metadata Types
// ============================================================================

/**
 * Generate metadata function type
 */
export type GenerateMetadata<T extends PageProps = PageProps> = (
  props: T
) => Promise<Metadata>;

/**
 * Static metadata object type
 */
export type StaticMetadata = Metadata;

// ============================================================================
// Component Prop Types
// ============================================================================

/**
 * Base props for components with optional className
 */
export type BaseComponentProps = {
  className?: string;
};

/**
 * Props for components with children
 */
export type WithChildren = {
  children: React.ReactNode;
};

/**
 * Props for components with optional children
 */
export type WithOptionalChildren = {
  children?: React.ReactNode;
};

// ============================================================================
// Form Types
// ============================================================================

/**
 * Standard form state for Server Actions
 */
export type FormState<T = unknown> = {
  success: boolean;
  error?: string;
  data?: T;
};

/**
 * Contact form data type
 */
export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

/**
 * Home valuation form data type
 */
export type ValuationFormData = {
  address: string;
  name: string;
  email: string;
  phone: string;
};

// ============================================================================
// Real Estate Types
// ============================================================================

/**
 * Property listing type
 */
export type PropertyListing = {
  id: string;
  address: string;
  city: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  mlsNumber: string;
  agentName: string;
  agentPhone: string;
  status: 'New' | 'Active' | 'Pending' | 'Sold';
  imageUrl?: string;
};

/**
 * Community/Neighborhood type
 */
export type Community = {
  name: string;
  slug: string;
  description: string;
  features: string[];
};

/**
 * Testimonial type
 */
export type Testimonial = {
  id: string;
  name: string;
  text: string;
  rating?: number;
  imageUrl?: string;
};

// ============================================================================
// Utility Types
// ============================================================================

/**
 * Make specific properties optional
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Make specific properties required
 */
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

/**
 * Extract non-nullable type
 */
export type NonNullableDeep<T> = {
  [K in keyof T]: NonNullable<T[K]>;
};

/**
 * Async function return type extractor
 */
export type AsyncReturnType<T extends (...args: unknown[]) => Promise<unknown>> =
  T extends (...args: unknown[]) => Promise<infer R> ? R : never;

/**
 * String literal union from array
 */
export type ArrayElement<T extends readonly unknown[]> =
  T extends readonly (infer U)[] ? U : never;



