'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Star, Users, Clock, ArrowRight, Shield, TrendingUp, Zap } from 'lucide-react';

export default function DownsellClient() {
  const paymentLinks = {
    creditRepair: 'https://buy.stripe.com/test_00g5nF5Cw0CB9pC7ss',
    businessSetup: 'https://buy.stripe.com/test_00g5nF5Cw0CB9pC7ss',
    jumpstartBundle: 'https://buy.stripe.com/test_00g5nF5Cw0CB9pC7ss',
    consultation: 'https://calendly.com/your-calendar'
  };

  const skoolCommunityLink = 'https://www.skool.com/scoreup-riseup-8242/about?ref=b4cc043a053741369202bc1a39df4599';

  const packages = [
    {
      id: 'credit-repair',
      name: 'Credit Repair Kit',
      price: '$7',
      description: 'Start improving your credit score immediately with our proven system',
      features: [
        'Credit Repair Education Course',
        'DIY Dispute Letter Templates',
        'Credit Score Tracking Guide',
        '30-Day Action Plan',
        'Basic Skool Community Access',
        'Email Support'
      ],
      cta: 'Get Credit Repair Kit',
      popular: true,
      color: 'blue'
    },
    {
      id: 'business-setup',
      name: 'Business Setup Kit',
      price: '$97',
      description: 'Properly structure your business for funding success',
      features: [
        'Business Entity Formation Guide',
        'EIN Application Assistance',
        'Business Banking Setup',
        'Credit Building Strategies',
        'Funding Preparation Checklist',
        'Lender Requirements Guide'
      ],
      cta: 'Get Business Setup Kit',
      popular: false,
      color: 'green'
    },
    {
      id: 'jumpstart-bundle',
      name: 'Business Jumpstart Bundle',
      price: '$197',
      description: 'Complete package to get your business funding ready',
      features: [
        'Credit Repair Kit (Included)',
        'Business Setup Kit (Included)',
        'Business Plan Templates',
        'Funding Application Templates',
        'Priority Skool Community Access',
        '1-Hour Strategy Session',
        'Lender Introduction Service'
      ],
      cta: 'Get Jumpstart Bundle',
      popular: false,
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-2xl shadow-lg border-2 ${
                pkg.popular ? 'border-blue-500 transform scale-105 relative' : 'border-gray-200'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm">{pkg.description}</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                  <span className="text-gray-600">/one-time</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle
                        className={`w-5 h-5 ${
                          pkg.color === 'blue' ? 'text-blue-500' : pkg.color === 'green' ? 'text-green-500' : 'text-purple-500'
                        } mr-3 mt-0.5 flex-shrink-0`}
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={
                    pkg.id === 'credit-repair'
                      ? paymentLinks.creditRepair
                      : pkg.id === 'business-setup'
                      ? paymentLinks.businessSetup
                      : paymentLinks.jumpstartBundle
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center font-bold py-4 px-6 rounded-lg transition-colors duration-200 ${
                    pkg.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : pkg.color === 'green'
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  } flex items-center justify-center space-x-2`}
                >
                  <span>{pkg.cta}</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skool CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-center text-white mb-12">
          <Users className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Join Our Skool Community</h3>
          <p className="text-blue-100 text-lg mb-6">
            Get instant access to our exclusive community of entrepreneurs.
          </p>
          <a
            href={skoolCommunityLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Join ScoreUp RiseUp Community
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
