#!/bin/bash
# Verification script for Vercel deployment
# This script checks if required environment variables are set

echo "🔍 Verifying deployment configuration..."

# Check required environment variables
REQUIRED_VARS=(
  "DATABASE_URL"
  "CLERK_SECRET_KEY"
  "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY"
)

MISSING_VARS=()

for var in "${REQUIRED_VARS[@]}"; do
  if [ -z "${!var}" ]; then
    MISSING_VARS+=("$var")
  fi
done

if [ ${#MISSING_VARS[@]} -eq 0 ]; then
  echo "✅ All required environment variables are set"
  exit 0
else
  echo "❌ Missing required environment variables:"
  for var in "${MISSING_VARS[@]}"; do
    echo "   - $var"
  done
  echo ""
  echo "Please set these in your Vercel project settings."
  exit 1
fi

