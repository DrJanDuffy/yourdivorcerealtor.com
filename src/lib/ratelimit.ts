import type { Ratelimit } from '@upstash/ratelimit';

/**
 * Rate Limiting Configuration
 * Uses Upstash Redis (works with Vercel)
 * getClientIP and checkRateLimit are available for future rate limiters
 */

/**
 * Get client IP address from request headers
 */
export function getClientIP(headers: Headers): string {
  // Check various headers for client IP (Vercel, Cloudflare, etc.)
  const forwarded = headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0]?.trim() || 'unknown';
  }

  const realIP = headers.get('x-real-ip');
  if (realIP) {
    return realIP;
  }

  return 'unknown';
}

/**
 * Check rate limit and return result
 */
export async function checkRateLimit(
  rateLimiter: Ratelimit | null,
  identifier: string,
): Promise<{ success: boolean; limit: number; remaining: number; reset: number }> {
  if (!rateLimiter) {
    // If rate limiting is not configured, allow the request
    return { success: true, limit: 0, remaining: 0, reset: 0 };
  }

  const result = await rateLimiter.limit(identifier);
  return {
    success: result.success,
    limit: result.limit,
    remaining: result.remaining,
    reset: result.reset,
  };
}
