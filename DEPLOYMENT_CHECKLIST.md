# Vercel Deployment Checklist

Use this checklist to ensure successful deployments on Vercel.

## Pre-Deployment Setup

### 1. GitHub Integration
- [ ] Vercel GitHub App is installed and has access to repository
- [ ] Webhook exists in GitHub repository settings
- [ ] Git user email matches GitHub/Vercel account email
- [ ] Repository is connected to Vercel project

### 2. Environment Variables (Required)
Set these in Vercel Project Settings → Environment Variables:

- [ ] `DATABASE_URL` - PostgreSQL connection string
- [ ] `CLERK_SECRET_KEY` - Clerk authentication secret key
- [ ] `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk publishable key

### 3. Environment Variables (Optional)
These are optional but recommended if using the services:

- [ ] `ARCJET_KEY` - Bot protection (optional)
- [ ] `NEXT_PUBLIC_APP_URL` - Your app URL (optional)
- [ ] `NEXT_PUBLIC_POSTHOG_KEY` - PostHog analytics (optional)
- [ ] `NEXT_PUBLIC_POSTHOG_HOST` - PostHog host (optional)
- [ ] `NEXT_PUBLIC_BETTER_STACK_SOURCE_TOKEN` - Logging (optional)
- [ ] `NEXT_PUBLIC_BETTER_STACK_INGESTING_HOST` - Logging host (optional)

### 4. Sentry Configuration (Optional)
If using Sentry, set these. Otherwise, set:

- [ ] `NEXT_PUBLIC_SENTRY_DISABLED=true` - Disable Sentry if not using
- [ ] `SENTRY_ORGANIZATION` - Only if using Sentry
- [ ] `SENTRY_PROJECT` - Only if using Sentry

## Deployment Process

### 1. Code Changes
- [ ] All changes committed to `main` branch
- [ ] Code pushed to GitHub
- [ ] No TypeScript or linting errors

### 2. Build Verification
- [ ] Build command: `npm run build` (configured in vercel.json)
- [ ] Install command: `npm ci` (configured in vercel.json)
- [ ] Framework: Next.js 16 (auto-detected)

### 3. Database Setup
- [ ] PostgreSQL database created and accessible
- [ ] `DATABASE_URL` is correct and accessible from Vercel
- [ ] Database user has permissions to run migrations
- [ ] Database connection limits are sufficient

## Post-Deployment

### 1. Verify Deployment
- [ ] Deployment shows as "Ready" in Vercel dashboard
- [ ] No build errors in deployment logs
- [ ] Application loads at deployment URL

### 2. Test Application
- [ ] Homepage loads correctly
- [ ] Authentication works (Clerk)
- [ ] Database connections work
- [ ] API routes function properly

### 3. Monitor
- [ ] Check Vercel logs for any runtime errors
- [ ] Monitor database connections
- [ ] Check analytics/monitoring services (if configured)

## Troubleshooting

### Build Fails
1. Check Vercel deployment logs
2. Verify all required environment variables are set
3. Ensure database is accessible from Vercel
4. Check Next.js version compatibility

### Deployment Not Triggered
1. Verify GitHub integration is active
2. Check git user email matches GitHub account
3. Ensure commits are pushed to `main` branch
4. Check Vercel project is linked to correct repository

### Runtime Errors
1. Check Vercel function logs
2. Verify environment variables are set correctly
3. Check database connectivity
4. Review application logs

## Quick Commands

```bash
# Check git configuration
git config user.email

# Verify build locally (requires DATABASE_URL)
npm run build

# Check TypeScript
npm run check:types

# Run linter
npm run lint
```

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js 16 Upgrade Guide](https://nextjs.org/docs/app/guides/upgrading/version-16)
- [Vercel Deployment Guide](./VERCEL_DEPLOYMENT.md)



