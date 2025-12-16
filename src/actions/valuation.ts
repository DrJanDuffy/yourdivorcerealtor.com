'use server';

import { headers } from 'next/headers';
import { z } from 'zod';
import { checkRateLimit, getClientIP, valuationRateLimit } from '@/lib/ratelimit';

/**
 * Home Valuation Form Server Action
 * Validates and processes home valuation requests
 * Can be extended to integrate with Follow Up Boss CRM
 */

const valuationSchema = z.object({
  propertyAddress: z.string().min(5, 'Please enter a valid address'),
  city: z.string().min(2, 'City is required').default('Las Vegas'),
  state: z.string().length(2, 'State must be 2 letters').default('NV'),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code'),
  propertyType: z.enum(['SFR', 'Condo', 'Townhome', 'Other']),
  bedrooms: z.coerce.number().int().min(0).max(10).optional(),
  bathrooms: z.coerce.number().min(0).max(20).optional(),
  squareFeet: z.coerce.number().int().positive().optional(),
  yearBuilt: z.coerce.number().int().min(1800).max(new Date().getFullYear() + 1).optional(),
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[\d\s\-\(\)]+$/, 'Invalid phone number'),
  divorceTimeline: z.enum(['immediate', '1-3-months', '3-6-months', '6-12-months', 'planning']).optional(),
  currentSituation: z.string().max(500).optional(),
});

export type ValuationFormData = z.infer<typeof valuationSchema>;

export type ValuationActionResult = {
  success: boolean;
  error?: string;
  message?: string;
  estimatedValue?: number; // Could be populated from valuation API
};

/**
 * Server Action to handle home valuation form submissions
 */
export async function submitValuation(
  formData: FormData,
): Promise<ValuationActionResult> {
  try {
    // Rate limiting check
    const headersList = await headers();
    const clientIP = getClientIP(headersList);
    const rateLimitResult = await checkRateLimit(valuationRateLimit, clientIP);

    if (!rateLimitResult.success) {
      return {
        success: false,
        error: `Too many requests. Please try again tomorrow, or call (702) 222-1964 for immediate assistance.`,
      };
    }

    // Extract and validate form data
    const rawData = {
      propertyAddress: formData.get('propertyAddress') as string,
      city: formData.get('city') as string || 'Las Vegas',
      state: formData.get('state') as string || 'NV',
      zipCode: formData.get('zipCode') as string,
      propertyType: formData.get('propertyType') as string,
      bedrooms: formData.get('bedrooms'),
      bathrooms: formData.get('bathrooms'),
      squareFeet: formData.get('squareFeet'),
      yearBuilt: formData.get('yearBuilt'),
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      divorceTimeline: formData.get('divorceTimeline') as string | undefined,
      currentSituation: formData.get('currentSituation') as string | undefined,
    };

    const validatedData = valuationSchema.parse(rawData);

    // TODO: Integrate with Follow Up Boss CRM
    // Example:
    // await createLeadInFUB({
    //   name: validatedData.name,
    //   email: validatedData.email,
    //   phone: validatedData.phone,
    //   source: 'Home Valuation Widget',
    //   tags: ['Home Valuation', 'Divorce Real Estate', validatedData.divorceTimeline],
    //   propertyAddress: `${validatedData.propertyAddress}, ${validatedData.city}, ${validatedData.state} ${validatedData.zipCode}`,
    //   propertyType: validatedData.propertyType,
    //   notes: `Divorce Timeline: ${validatedData.divorceTimeline}\n${validatedData.currentSituation}`,
    // });

    // TODO: Integrate with RealScout or other valuation API
    // const estimatedValue = await getPropertyValuation(validatedData);

    // For now, log the submission
    console.log('Valuation form submission:', {
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      address: `${validatedData.propertyAddress}, ${validatedData.city}, ${validatedData.state}`,
      propertyType: validatedData.propertyType,
      divorceTimeline: validatedData.divorceTimeline,
    });

    return {
      success: true,
      message: 'Thank you! Dr. Jan Duffy will provide your home valuation soon.',
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0]?.message || 'Invalid form data',
      };
    }

    console.error('Valuation form error:', error);
    return {
      success: false,
      error: 'An error occurred. Please try again or call (702) 222-1964.',
    };
  }
}

