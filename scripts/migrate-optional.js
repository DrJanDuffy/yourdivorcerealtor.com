#!/usr/bin/env node

/**
 * Conditionally run database migrations
 * Skips migrations if DATABASE_URL is not set or SKIP_MIGRATIONS is true
 */

const { execSync } = require('node:child_process');

const hasDatabaseUrl = !!process.env.DATABASE_URL;
const skipMigrations = process.env.SKIP_MIGRATIONS === 'true';

if (!hasDatabaseUrl) {
  console.log('⚠️  Skipping migrations: DATABASE_URL not set');
  process.exit(0);
}

if (skipMigrations) {
  console.log('⚠️  Skipping migrations: SKIP_MIGRATIONS=true');
  process.exit(0);
}

try {
  console.log('🔄 Running database migrations...');
  execSync('npm run db:migrate', { stdio: 'inherit' });
  console.log('✅ Migrations completed successfully');
} catch (error) {
  console.error('❌ Migration failed:', error.message);
  // Don't fail the build if migrations fail - they can be run separately
  console.log('⚠️  Continuing build despite migration failure');
  process.exit(0);
}
