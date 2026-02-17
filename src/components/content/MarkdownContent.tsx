'use client';

import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { CalendlyLink } from '@/components/calendly/CalendlyLink';

type MarkdownContentProps = {
  content: string;
  className?: string;
};

/** Renders markdown with Tailwind prose styling. Internal links use Next.js Link; external links open in new tab. Links with href="calendly:" render CalendlyLink. */
export function MarkdownContent({ content, className = '' }: MarkdownContentProps) {
  return (
    <div className={`prose prose-lg max-w-4xl mx-auto ${className}`.trim()}>
      <ReactMarkdown
        components={{
          blockquote: ({ children }) => (
            <blockquote className="my-8 border-l-4 border-blue-600 bg-blue-50 p-6 not-italic">
              {children}
            </blockquote>
          ),
          a: ({ href, children }) => {
            if (!href) {
              return <span>{children}</span>;
            }
            if (href === 'calendly:') {
              return <CalendlyLink className="text-blue-600 underline hover:text-blue-700">{children}</CalendlyLink>;
            }
            const isInternal = href.startsWith('/') && !href.startsWith('//');
            if (isInternal) {
              return (
                <Link href={href} className="text-blue-600 underline hover:text-blue-700">
                  {children}
                </Link>
              );
            }
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-700"
              >
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
