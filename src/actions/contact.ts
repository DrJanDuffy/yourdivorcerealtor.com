'use server';

import { headers } from 'next/headers';
import { z } from 'zod';
import { checkRateLimit, contactRateLimit, getClientIP } from '@/lib/ratelimit';

/**
 * Contact Form Server Action
 * Validates and processes consultation requests
 * Can be extended to integrate with Follow Up Boss CRM
 */

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[\d\s\-\(\)]+$/, 'Invalid phone number'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message too long'),
  preferredContact: z.enum(['email', 'phone', 'either']).optional(),
  divorceStage: z.enum(['considering', 'in-process', 'finalizing', 'completed']).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ContactActionResult = {
  success: boolean;
  error?: string;
  message?: string;
};

/**
 * Server Action to handle contact form submissions
 */
export async function submitConsultation(
  formData: FormData,
): Promise<ContactActionResult> {
  try {
    // Rate limiting check
    const headersList = await headers();
    const clientIP = getClientIP(headersList);
    const rateLimitResult = await checkRateLimit(contactRateLimit, clientIP);

    if (!rateLimitResult.success) {
      return {
        success: false,
        error: `Too many requests. Please try again in ${Math.ceil((rateLimitResult.reset - Date.now()) / 1000 / 60)} minutes, or call (702) 222-1964.`,
      };
    }

    // Extract and validate form data
    const rawData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
      preferredContact: formData.get('preferredContact') as string | undefined,
      divorceStage: formData.get('divorceStage') as string | undefined,
    };

    const validatedData = contactSchema.parse(rawData);

    // TODO: Integrate with Follow Up Boss CRM
    // Example:
    // await createLeadInFUB({
    //   name: validatedData.name,
    //   email: validatedData.email,
    //   phone: validatedData.phone,
    //   source: 'Website Contact Form',
    //   tags: ['Divorce Real Estate', validatedData.divorceStage],
    //   notes: validatedData.message,
    // });

    // For now, log the submission (in production, send to CRM)
    console.log('Contact form submission:', {
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      preferredContact: validatedData.preferredContact,
      divorceStage: validatedData.divorceStage,
      messageLength: validatedData.message.length,
    });

    return {
      success: true,
      message: 'Thank you! Dr. Jan Duffy will contact you soon.',
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0]?.message || 'Invalid form data',
      };
    }

    console.error('Contact form error:', error);
    return {
      success: false,
      error: 'An error occurred. Please try again or call (702) 222-1964.',
    };
  }
}

