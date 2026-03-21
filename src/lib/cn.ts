import { twMerge } from 'tailwind-merge';

/** Merge Tailwind classes; later args win over conflicting earlier utilities. */
export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(inputs.filter((x): x is string => typeof x === 'string' && x.length > 0));
}
