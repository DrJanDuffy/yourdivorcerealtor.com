# Vercel Deployment Guide

This guide covers deploying this Next.js 16 application to Vercel via GitHub triggers.

## Prerequisites

1. **GitHub Repository**: Ensure your code is pushed to GitHub
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **Database**: Set up a PostgreSQL database (e.g., Neon, Supabase, or Vercel Postgres)

## Setup Steps

### 1. Connect GitHub Repository to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js 16

### 2. Configure Environment Variables

In your Vercel project settings, add the following **required** environment variables:

#### Required Variables

```bash
# Database
DATABASE_URL=postgresql://user:password@host:port/database

# Clerk Authentication
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...

# Optional: Analytics & Monitoring
ARCJET_KEY=ajkey_...                    # Optional: Bot protection
NEXT_PUBLIC_APP_URL=https://yourdomain.com  # Optional: App URL
NEXT_PUBLIC_POSTHOG_KEY=...             # Optional: PostHog analytics
NEXT_PUBLIC_POSTHOG_HOST=...            # Optional: PostHog host
NEXT_PUBLIC_BETTER_STACK_SOURCE_TOKEN=...  # Optional: Better Stack logging
NEXT_PUBLIC_BETTER_STACK_INGESTING_HOST=... # Optional: Better Stack host

# Optional: Sentry (disable if not using)
NEXT_PUBLIC_SENTRY_DISABLED=true        # Set to 'true' to disable Sentry
SENTRY_ORGANIZATION=...                 # Only if using Sentry
SENTRY_PROJECT=...                      # Only if using Sentry
```

### 3. Build Configuration

The project is configured with:
- **Build Command**: `npm run build` (runs migrations automatically)
- **Install Command**: `npm ci` (uses package-lock.json)
- **Framework**: Next.js 16 (auto-detected)

### 4. Database Migrations

Database migrations run automatically during the build process via the `build` script:
```json
"build": "run-s db:migrate build:next"
```

**Important**: Ensure `DATABASE_URL` is set in Vercel environment variables before deploying, as migrations require database access.

### 5. Deploy

1. Push changes to your GitHub repository's `main` branch
2. Vercel will automatically trigger a deployment
3. Monitor the deployment in the Vercel dashboard

## Troubleshooting

### Build Fails with "DATABASE_URL is required"

- Ensure `DATABASE_URL` is set in Vercel project settings
- Check that the database is accessible from Vercel's IP ranges
- Verify the connection string format is correct

### Build Fails with "CLERK_SECRET_KEY is required"

- Add `CLERK_SECRET_KEY` to Vercel environment variables
- Ensure both `CLERK_SECRET_KEY` and `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` are set

### Migrations Fail During Build

- Verify `DATABASE_URL` is correct and accessible
- Check database connection limits (some free tiers have connection limits)
- Ensure the database user has permissions to run migrations

### Next.js 16 Compatibility Issues

- Ensure all dependencies are updated (already done in this project)
- Check that `proxy.ts` exists (not `middleware.ts`) - already configured
- Verify Turbopack is being used (default in Next.js 16, no `--webpack` flag needed)

## Post-Deployment

After successful deployment:

1. **Test the application**: Visit your Vercel deployment URL
2. **Set up custom domain** (optional): Configure in Vercel project settings
3. **Monitor**: Check Vercel logs and any monitoring services (Sentry, Better Stack, etc.)

## Continuous Deployment

Once configured, every push to the `main` branch will automatically trigger a new deployment. You can also:
- Deploy previews for pull requests
- Set up branch-specific deployments
- Configure deployment protection rules

## Additional Resources

- [Vercel Next.js Documentation](https://vercel.com/docs/frameworks/nextjs)
- [Next.js 16 Upgrade Guide](https://nextjs.org/docs/app/guides/upgrading/version-16)
- [Environment Variables in Vercel](https://vercel.com/docs/projects/environment-variables)
