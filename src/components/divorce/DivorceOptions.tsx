import Link from 'next/link';
import { messaging } from '@/lib/messaging';

export function DivorceOptions() {
  const options = [
    {
      title: 'Sell and Split Proceeds',
      description: messaging.options.sell,
      icon: '💰',
      href: '/selling-home-during-divorce',
    },
    {
      title: 'Buyout Option',
      description: messaging.options.buyout,
      icon: '🏠',
      href: '/divorce-buyout-options',
    },
    {
      title: 'Co-Own Temporarily',
      description: messaging.options.coOwn,
      icon: '🤝',
      href: '/divorce-settlement-options',
    },
    {
      title: 'Refinance',
      description: messaging.options.refinance,
      icon: '📊',
      href: '/refinancing-after-divorce',
    },
    {
      title: 'Short Sale',
      description: messaging.options.shortSale,
      icon: '📉',
      href: '/divorce-settlement-options',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Know Your Options
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Understanding all your options is the first step to making the right decision for your future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {options.map((option) => (
            <Link
              key={option.title}
              href={option.href}
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{option.icon}</div>
              <h3 className="text-xl font-bold mb-3">{option.title}</h3>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <span className="text-blue-600 font-semibold hover:underline">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

