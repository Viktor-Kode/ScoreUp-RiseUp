// app/credit-repair/page.jsx
'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Star, Users, Clock, ArrowRight, Shield, Zap } from 'lucide-react';

export default function CreditRepair() {
  // Replace these with your actual Stripe payment links
  const paymentLinks = {
    education: 'https://buy.stripe.com/test_00g5nF5Cw0CB9pC7ss', // $7 DIY Education
    pro: 'https://buy.stripe.com/test_00g5nF5Cw0CB9pC7ss', // $497 Credit Repair Pro  
    coaching: 'https://buy.stripe.com/test_00g5nF5Cw0CB9pC7ss' // $997 Coaching
  };

  const skoolCommunityLink = 'https://www.skool.com/your-community'; // Your actual Skool link

  const packages = [
    {
      id: 'education',
      name: 'DIY Credit Education',
      price: '$7',
      description: 'Perfect for self-starters who want to learn credit repair basics',
      features: [
        'Credit Education Course',
        'DIY Templates & Guides', 
        'Email Support',
        '30-Day Course Access',
        'Basic Skool Community Access'
      ],
      cta: 'Get Started',
      popular: false,
      color: 'gray',
      stripeLink: paymentLinks.education
    },
    {
      id: 'pro',
      name: 'Credit Repair Pro',
      price: '$497',
      description: 'Full-service credit restoration with expert support',
      features: [
        'Full Credit Repair Service',
        'Premium Skool Community Access',
        'Dispute Letters & Monitoring',
        'Credit Score Tracking',
        'Priority Support',
        '90-Day Program',
        'Funding Readiness Guarantee'
      ],
      cta: 'Start Credit Repair',
      popular: true,
      color: 'blue',
      stripeLink: paymentLinks.pro
    },
    {
      id: 'coaching',
      name: '1-on-1 Business Coaching',
      price: '$997',
      description: 'Premium personalized guidance for maximum results',
      features: [
        'Personalized Coaching Sessions',
        'Advanced Funding Strategies',
        'Direct Lender Access',
        'Business Plan Review',
        'Unlimited Support',
        'Funding Guarantee',
        'Lifetime Skool Community Access'
      ],
      cta: 'Get Premium Coaching',
      popular: false,
      color: 'purple',
      stripeLink: paymentLinks.coaching
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Get Funding Ready
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Based on your quiz results, we recommend starting with credit improvement. 
            <strong> 85% of clients</strong> qualify for funding after completing our program.
          </motion.p>
        </div>

        {/* Trust Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">5,000+</div>
            <div className="text-gray-600">Clients Served</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
            <Star className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">85%</div>
            <div className="text-gray-600">Funding Success Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
            <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">30-60</div>
            <div className="text-gray-600">Days to Funding Ready</div>
          </div>
        </div>

        {/* Package Comparison */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-2xl shadow-lg border-2 ${
                pkg.popular 
                  ? 'border-blue-500 transform scale-105 relative' 
                  : 'border-gray-200'
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
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className={`w-5 h-5 ${
                        pkg.color === 'gray' ? 'text-gray-500' :
                        pkg.color === 'blue' ? 'text-blue-500' :
                        'text-purple-500'
                      } mr-3 mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Payment Button */}
                <a
                  href={pkg.stripeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center font-bold py-4 px-6 rounded-lg transition-colors duration-200 ${
                    pkg.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : pkg.color === 'gray' 
                        ? 'bg-gray-600 hover:bg-gray-700 text-white'
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

        {/* Skool Community CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-center text-white mb-12"
        >
          <div className="max-w-2xl mx-auto">
            <Zap className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Join Our Skool Community</h3>
            <p className="text-blue-100 text-lg mb-6">
              Get instant access to our exclusive community of entrepreneurs, funding experts, and credit specialists. 
              Ask questions, get support, and network with like-minded business owners.
            </p>
            <a
              href={skoolCommunityLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Join Skool Community
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Money-Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-2 text-green-600 mb-4">
            <Shield className="w-6 h-6" />
            <span className="font-semibold text-lg">30-Day Money-Back Guarantee</span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're confident our programs will get you funding ready. If you're not satisfied with your purchase 
            within 30 days, we'll refund your money. No questions asked.
          </p>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Join 5,000+ Successful Clients</h3>
          
          <div className="mb-8 max-w-2xl mx-auto">
            <p className="text-gray-600 italic mb-6">
              "After the credit repair program, I qualified for $150K in funding for my business expansion. 
              The Skool community provided incredible support throughout the process. Best investment I ever made!"
            </p>
            <div className="font-semibold text-gray-900">- Sarah J., E-commerce Business Owner</div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-600 mb-6">
              Ready to start your journey to business funding?
            </p>
            <a
              href={paymentLinks.pro}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200"
            >
              Start with Credit Repair Pro
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}