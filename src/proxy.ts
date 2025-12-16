import type { NextRequest } from 'next/server';

/**
 * Next.js 16 proxy.ts replaces middleware.ts
 * Runs on Node.js runtime (not Edge)
 * Handles redirects and request processing for Vercel deployment
 */
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Redirect non-www to www (primary domain)
  if (hostname === 'yourdivorcerealtor.com' || hostname === 'yourdivorcerealtor.com:3000') {
    url.hostname = 'www.yourdivorcerealtor.com';
    return Response.redirect(url, 301);
  }

  // Handle trailing slashes - remove trailing slash except for root
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1);
    return Response.redirect(url, 301);
  }

  // Log request for analytics (non-blocking)
  // In production, you might want to send this to your analytics service
  if (process.env.NODE_ENV === 'production') {
    // Log request metadata (no PII)
    console.log(`[${new Date().toISOString()}] ${request.method} ${url.pathname}`);
  }

  // Continue with the request
  return undefined;
}
