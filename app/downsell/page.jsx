'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Shield, 
  TrendingUp, 
  Zap, 
  Star,
  Clock,
  Award,
  FileText,
  HeartHandshake
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DownsellClient() {
  const router = useRouter();
  const [selectedPackage, setSelectedPackage] = useState(null);
  
  // Fixed: Route to offer pages instead of direct Stripe links
  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    
    setTimeout(() => {
      if (pkg.id === 'credit-repair') {
        router.push('/offers/credit-repair-kit');
      } else if (pkg.id === 'business-setup') {
        router.push('/offers/business-setup-kit');
      } else if (pkg.id === 'jumpstart-bundle') {
        router.push('/offers/jumpstart-bundle');
      }
    }, 500);
  };

  const skoolCommunityLink = 'https://www.skool.com/scoreup-riseup-8242/about?ref=b4cc043a053741369202bc1a39df4599';

  const packages = [
    {
      id: 'credit-repair',
      name: 'Credit Repair Jumpstart',
      price: '$7',
      description: 'Immediate credit improvement system to get you on the path to funding',
      features: [
        'Credit Repair Education Course',
        'DIY Dispute Letter Templates',
        'Credit Score Tracking System',
        '30-Day Action Plan',
        'Basic Skool Community Access',
        'Email Support',
        'Credit Bureau Dispute Guides'
      ],
      cta: 'Start Credit Repair',
      popular: true,
      color: 'blue',
      savings: null,
      badge: 'Best Value'
    },
    {
      id: 'business-setup',
      name: 'Business Foundation Kit',
      price: '$147',
      originalPrice: '$197',
      description: 'Complete business setup while you improve your credit score',
      features: [
        'Business Entity Formation Guide',
        'EIN Application Assistance',
        'Business Banking Setup',
        'Business Credit Building',
        'Funding Preparation Checklist',
        'Lender Requirements Guide',
        'Business Plan Templates'
      ],
      cta: 'Get Business Kit',
      popular: false,
      color: 'green',
      savings: '$50',
      badge: 'Foundational'
    },
    {
      id: 'jumpstart-bundle',
      name: 'Complete Business Jumpstart',
      price: '$47',
      originalPrice: '$247',
      description: 'Everything you need to repair credit and build business credit simultaneously',
      features: [
        'Credit Repair Kit (Included)',
        'Business Foundation Kit (Included)',
        'Advanced Credit Strategies',
        'Business Plan Templates',
        'Priority Skool Community Access',
        '30-Min Strategy Session',
        'Lender Introduction Service',
        'Ongoing Support'
      ],
      cta: 'Get Complete Bundle',
      popular: false,
      color: 'purple',
      savings: '$150',
      badge: 'Complete Solution'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <HeartHandshake className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Let's Get You Funding Ready! 🚀
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            While your current credit score doesn't qualify for immediate funding, we've helped thousands of entrepreneurs 
            like you improve their credit and access the funding they need.
          </p>
        </motion.div>

        {/* Credit Repair Alert */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-lg border-2 border-orange-500 p-6 mb-8 mx-auto max-w-4xl"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <TrendingUp className="w-8 h-8 text-orange-600" />
              <div>
                <h3 className="text-lg font-bold text-gray-900">Credit Improvement Path</h3>
                <p className="text-gray-600">
                  Start today and you could be funding-ready in 30-90 days
                </p>
              </div>
            </div>
            <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
              Below 680 Credit Tier
            </div>
          </div>
        </motion.div>

        {/* Packages Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your Path to Funding
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Select the package that fits your needs and start your journey to business funding today
          </p>
        </motion.div>

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.4 }}
              className={`bg-white rounded-2xl shadow-lg border-2 relative ${
                pkg.popular ? 'border-blue-500 transform scale-105' : 'border-gray-200'
              } hover:shadow-xl transition-all duration-300 flex flex-col h-full`}
              aria-label={pkg.name}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    {pkg.badge}
                  </span>
                </div>
              )}
              {!pkg.popular && pkg.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className={`bg-${pkg.color}-100 text-${pkg.color}-800 px-3 py-1 rounded-full text-sm font-semibold`}>
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600">/one-time</span>
                    {pkg.originalPrice && (
                      <div className="mt-1">
                        <span className="text-lg text-gray-500 line-through">
                          {pkg.originalPrice}
                        </span>
                        <span className="text-green-600 font-semibold ml-2">
                          Save {pkg.savings}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle
                        className={`text-${pkg.color}-500 w-5 h-5 mr-3 mt-0.5 flex-shrink-0`}
                      />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePackageSelect(pkg)}
                  disabled={selectedPackage !== null}
                  className={`w-full font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
                    pkg.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : pkg.color === 'green'
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  } disabled:opacity-50 disabled:cursor-not-allowed mt-auto`}
                >
                  {selectedPackage?.id === pkg.id ? (
                    <span className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Redirecting...
                    </span>
                  ) : (
                    <>
                      <span>{pkg.cta}</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credit Repair Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-12 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Your Path to Funding Success
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 font-bold">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Start Credit Repair</h4>
              <p className="text-gray-600 text-sm">Begin improving your credit score immediately</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Build Business Credit</h4>
              <p className="text-gray-600 text-sm">Establish business credit while personal credit improves</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Reach 680+ Score</h4>
              <p className="text-gray-600 text-sm">Qualify for document-based funding programs</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Get Funded</h4>
              <p className="text-gray-600 text-sm">Access the capital you need to grow your business</p>
            </div>
          </div>
        </motion.div>

        {/* Skool Community CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl shadow-lg p-8 text-center text-white mb-8"
        >
          <Users className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Join Our Supportive Community</h3>
          <p className="text-orange-100 text-lg mb-6 max-w-2xl mx-auto">
            Get instant access to our exclusive Skool community where you'll find support, resources, 
            and success stories from entrepreneurs who started right where you are now.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-6 max-w-3xl mx-auto">
            <div className="bg-white bg-opacity-10 rounded-xl p-4">
              <Star className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
              <h4 className="font-bold mb-2">Daily Support</h4>
              <p className="text-orange-100 text-sm">Get answers to your credit and funding questions</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-4">
              <FileText className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
              <h4 className="font-bold mb-2">Exclusive Resources</h4>
              <p className="text-orange-100 text-sm">Access guides, templates, and tools</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-4">
              <TrendingUp className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
              <h4 className="font-bold mb-2">Success Stories</h4>
              <p className="text-orange-100 text-sm">Learn from others who improved their credit</p>
            </div>
          </div>
          <a
            href={skoolCommunityLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-orange-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Join ScoreUp RiseUp Community
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>Instant Access</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>5,000+ Members</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}