import Link from 'next/link';
import { messaging } from '@/lib/messaging';

type DivorceCTAProps = {
  variant?: 'primary' | 'secondary' | 'urgency';
  className?: string;
};

export function DivorceCTA({ variant = 'primary', className = '' }: DivorceCTAProps) {
  const variants = {
    primary: {
      text: messaging.ctas.primary,
      href: '/contact',
      style: 'bg-blue-600 text-white hover:bg-blue-700',
    },
    secondary: {
      text: messaging.ctas.valuation,
      href: '#home-value',
      style: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50',
    },
    urgency: {
      text: messaging.ctas.control,
      href: '/contact',
      style: 'bg-yellow-400 text-gray-900 hover:bg-yellow-300',
    },
  };

  const config = variants[variant];

  return (
    <Link
      href={config.href}
      className={`inline-block rounded-lg px-8 py-4 font-semibold transition-colors ${config.style} ${className}`}
    >
      {config.text}
    </Link>
  );
}




