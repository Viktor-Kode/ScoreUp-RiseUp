'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Zap, Star } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export default function OffersClient() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type'); // 'nodoc' or 'docs'

  const skoolCommunityLink = 'https://www.skool.com/scoreup-riseup-8242/about?ref=b4cc043a053741369202bc1a39df4599';

  const paymentLinks = {
    creditBuilder: 'https://buy.stripe.com/test_00g5nF5Cw0CB9pC7ss',
    priorityFunding: 'https://buy.stripe.com/test_00g5nF5Cw0CB9pC7ss',
    consultation: 'https://calendly.com/your-calendar'
  };

  const offers = [
    {
      id: 'credit-builder',
      name: 'Business Credit Builder Kit',
      price: '$297',
      description: 'Build strong business credit to access premium funding options',
      features: [
        'Business Credit Building System',
        'Vendor & Lender Database',
        'Credit Monitoring Setup',
        'Funding Optimization Strategy',
        'Priority Skool Community Access',
        'Credit Building Templates'
      ],
      cta: 'Get Credit Builder Kit'
    },
    {
      id: 'priority-funding',
      name: 'Priority Funding Package',
      price: '$497',
      description: 'Expedited processing and premium lender access',
      features: [
        '48-Hour Application Processing',
        'Premium Lender Network Access',
        'Dedicated Funding Specialist',
        'Application Review & Optimization',
        'Higher Approval Odds Guarantee',
        'Lifetime Skool Community Access'
      ],
      cta: 'Get Priority Funding',
      popular: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Boost Your Funding Success</h1>
            <p className="text-gray-600">You're pre-qualified! Add these services to maximize your funding amount and speed.</p>
          </div>

          {/* Offer Packages */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg border-2 ${offer.popular ? 'border-blue-500 relative' : 'border-gray-200'}`}
              >
                {offer.popular && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{offer.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{offer.description}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">{offer.price}</span>
                    <span className="text-gray-600">/one-time</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {offer.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={paymentLinks[offer.id]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center font-bold py-3 px-6 rounded-lg transition-colors duration-200 ${
                      offer.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-600 hover:bg-gray-700 text-white'
                    }`}
                  >
                    {offer.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
