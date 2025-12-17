import { Inter, Playfair_Display } from 'next/font/google';

/**
 * Optimized font loading with next/font
 * Automatically optimizes fonts and self-hosts them
 */

// Primary font for body text
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

// Display font for headings
export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  preload: false, // Only load when needed
  weight: ['400', '600', '700'],
});



