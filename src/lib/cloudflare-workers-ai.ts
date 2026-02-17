/**
 * Cloudflare Workers AI REST API client
 * @see https://developers.cloudflare.com/workers-ai/
 */

const WORKERS_AI_BASE = 'https://api.cloudflare.com/client/v4/accounts';

export type RunModelOptions = {
  prompt: string;
  stream?: boolean;
};

export type RunModelResult = {
  response: string;
};

/**
 * Run a Workers AI model inference.
 * @param modelId - Model ID (e.g. @cf/meta/llama-3.1-8b-instruct-fast)
 * @param options - Prompt and optional stream flag
 * @returns Parsed response or ReadableStream if stream is true
 */
export async function runModel(
  modelId: string,
  options: RunModelOptions,
): Promise<RunModelResult | ReadableStream<Uint8Array>> {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const apiToken = process.env.CLOUDFLARE_WORKERS_AI_API_TOKEN;

  if (!accountId || !apiToken) {
    throw new Error(
      'Cloudflare Workers AI: CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_WORKERS_AI_API_TOKEN must be set',
    );
  }

  const url = `${WORKERS_AI_BASE}/${accountId}/ai/run/${modelId}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: options.prompt,
      stream: options.stream ?? false,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `Cloudflare Workers AI error ${response.status}: ${text}`,
    );
  }

  if (options.stream) {
    const body = response.body;
    if (!body) {
      throw new Error('No stream body');
    }
    return body;
  }

  const json = await response.json() as {
    result?: { response?: string };
    success?: boolean;
    errors?: unknown[];
  };

  if (!json.success || !json.result?.response) {
    throw new Error(
      `Workers AI failed: ${JSON.stringify(json.errors ?? json)}`,
    );
  }

  return { response: json.result.response };
}

/** Default model for text generation (fast, lower latency) */
export const DEFAULT_MODEL = '@cf/meta/llama-3.1-8b-instruct-fast';
