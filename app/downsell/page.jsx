// app/offers/page.jsx - FOR QUALIFIED USERS
'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Zap, Users, Star, Shield } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export default function Offers() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type'); // 'nodoc' or 'docs'
  
  // CLIENT'S ACTUAL SKOOL LINK
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Boost Your Funding Success</h1>
            <p className="text-gray-600">
              You're pre-qualified! Add these services to maximize your funding amount and speed.
            </p>
          </div>

          {/* Special Offer Alert */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6 mb-8">
            <div className="flex items-center mb-2">
              <Star className="w-6 h-6 text-green-600 mr-2" />
              <span className="text-green-800 font-bold text-lg">Special Limited-Time Offers</span>
            </div>
            <p className="text-green-700">
              As a pre-qualified applicant, you get exclusive access to these premium services 
              that can double your funding amount and cut approval time in half.
            </p>
          </div>

          {/* Offer Packages */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg border-2 ${
                  offer.popular ? 'border-blue-500 relative' : 'border-gray-200'
                }`}
              >
                {offer.popular && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{offer.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{offer.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">{offer.price}</span>
                    <span className="text-gray-600">/one-time</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {offer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
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
                      offer.popular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-600 hover:bg-gray-700 text-white'
                    }`}
                  >
                    {offer.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Consultation Call */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-center text-white mb-8"
          >
            <h3 className="text-xl font-bold mb-3">1-on-1 Funding Strategy Session</h3>
            <p className="text-purple-100 mb-4">
              Get personalized guidance from our funding experts. Perfect your application and maximize your approval chances.
            </p>
            <a
              href={paymentLinks.consultation}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-purple-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Book Strategy Session
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>

          {/* Skool Community */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="border-2 border-blue-200 bg-blue-50 rounded-xl p-6 text-center"
          >
            <h3 className="text-xl font-bold text-blue-900 mb-3">Join Our Exclusive Community</h3>
            <p className="text-blue-800 mb-4">
              Get access to our private Skool community where you can network with other funded entrepreneurs, 
              get expert advice, and accelerate your business growth.
            </p>
            <a
              href={skoolCommunityLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Join ScoreUp RiseUp Community
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>

          {/* Skip Option */}
          <div className="text-center mt-6">
            <a
              href="/thank-you?type=application"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              No thanks, proceed with standard application →
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}