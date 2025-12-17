import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

/**
 * Rate Limiting Configuration
 * Uses Upstash Redis (works with Vercel)
 * Falls back gracefully if Redis is not configured
 */

// Initialize Redis client (only if environment variables are set)
const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null;

/**
 * Contact form rate limiter: 3 submissions per hour per IP
 */
export const contactRateLimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, '1 h'),
      analytics: true,
      prefix: '@ratelimit/contact',
    })
  : null;

/**
 * Valuation form rate limiter: 5 submissions per day per IP
 */
export const valuationRateLimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, '1 d'),
      analytics: true,
      prefix: '@ratelimit/valuation',
    })
  : null;

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



