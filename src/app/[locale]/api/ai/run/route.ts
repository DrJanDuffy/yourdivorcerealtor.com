import type { NextRequest } from 'next/server';
import arcjet, { fixedWindow } from '@arcjet/next';
import { NextResponse } from 'next/server';
import { DEFAULT_MODEL, runModel } from '@/lib/cloudflare-workers-ai';

const MAX_PROMPT_LENGTH = 1000;

const aiProtection = process.env.ARCJET_KEY
  ? arcjet({
      key: process.env.ARCJET_KEY,
      characteristics: ['ip.src'],
      rules: [
        fixedWindow({
          mode: 'LIVE',
          window: '1m',
          max: 10,
        }),
      ],
    })
  : null;

export async function POST(request: NextRequest) {
  try {
    if (aiProtection) {
      const decision = await aiProtection.protect(request);
      if (decision.isDenied()) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again in a minute.' },
          { status: 429 },
        );
      }
    }
    if (!process.env.CLOUDFLARE_ACCOUNT_ID || !process.env.CLOUDFLARE_WORKERS_AI_API_TOKEN) {
      return NextResponse.json(
        { error: 'Workers AI not configured' },
        { status: 503 },
      );
    }

    const body = await request.json() as { prompt?: string; model?: string };

    const prompt = typeof body.prompt === 'string' ? body.prompt.trim() : '';

    if (!prompt) {
      return NextResponse.json(
        { error: 'prompt is required' },
        { status: 400 },
      );
    }

    if (prompt.length > MAX_PROMPT_LENGTH) {
      return NextResponse.json(
        { error: `prompt must be at most ${MAX_PROMPT_LENGTH} characters` },
        { status: 400 },
      );
    }

    const model = typeof body.model === 'string' && body.model
      ? body.model
      : DEFAULT_MODEL;

    const result = await runModel(model, { prompt, stream: false });

    if (typeof result === 'object' && 'response' in result) {
      return NextResponse.json({ response: result.response });
    }

    return NextResponse.json({ error: 'Unexpected result format' }, { status: 500 });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: message },
      { status: 500 },
    );
  }
}
