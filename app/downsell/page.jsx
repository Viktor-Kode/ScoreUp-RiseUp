// app/downsell/page.jsx - COMPLETED WITH CLIENT'S SKOOL LINK
'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Star, Users, Clock, ArrowRight, Shield, TrendingUp, Zap } from 'lucide-react';

export default function Downsell() {
  // Replace these with your actual Stripe payment links
  const paymentLinks = {
    creditRepair: 'https://buy.stripe.com/test_00g5nF5Cw0CB9pC7ss', // $7 Credit Repair Kit
    businessSetup: 'https://buy.stripe.com/test_00g5nF5Cw0CB9pC7ss', // Business Setup Kit
    jumpstartBundle: 'https://buy.stripe.com/test_00g5nF5Cw0CB9pC7ss', // Jumpstart Bundle
    consultation: 'https://calendly.com/your-calendar' // Consultation call
  };

  // CLIENT'S ACTUAL SKOOL LINK
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
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Let's Get You Funding Ready
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Based on your credit score, we recommend starting with credit improvement. 
            <strong> 85% of clients</strong> who complete our programs qualify for funding within 90 days.
          </motion.p>
        </div>

        {/* Why Improve Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Improve Your Credit First?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Higher Funding Amounts</h3>
                <p className="text-gray-600 text-sm">50-100 point increase = $50K-$100K more funding</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Better Interest Rates</h3>
                <p className="text-gray-600 text-sm">Save thousands with lower APRs</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">More Lender Options</h3>
                <p className="text-gray-600 text-sm">Access premium lenders with better terms</p>
              </div>
            </div>
          </div>
        </motion.div>

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
                        pkg.color === 'blue' ? 'text-blue-500' :
                        pkg.color === 'green' ? 'text-green-500' :
                        'text-purple-500'
                      } mr-3 mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Payment Button */}
                <a
                  href={paymentLinks[pkg.id === 'credit-repair' ? 'creditRepair' : pkg.id === 'business-setup' ? 'businessSetup' : 'jumpstartBundle']}
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

        {/* Success Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Your Path to Funding Success</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-blue-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Start Credit Repair</h4>
              <p className="text-gray-600 text-sm">Begin improving your credit score immediately</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-green-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Build Business Credit</h4>
              <p className="text-gray-600 text-sm">Establish strong business credit profile</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-purple-600">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Quality for Funding</h4>
              <p className="text-gray-600 text-sm">Meet lender requirements in 30-90 days</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-orange-600">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Get Funded</h4>
              <p className="text-gray-600 text-sm">Access $50K-$500K in business funding</p>
            </div>
          </div>
        </motion.div>

        {/* Consultation Call CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-lg p-8 text-center text-white mb-12"
        >
          <div className="max-w-2xl mx-auto">
            <Zap className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Need Personalized Guidance?</h3>
            <p className="text-orange-100 text-lg mb-6">
              Book a 1-on-1 consultation call with our funding experts. Get personalized advice 
              on your specific situation and create a custom roadmap to funding success.
            </p>
            <a
              href={paymentLinks.consultation}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-orange-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Book Consultation Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Skool Community CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-center text-white mb-12"
        >
          <div className="max-w-2xl mx-auto">
            <Users className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Join Our Skool Community</h3>
            <p className="text-blue-100 text-lg mb-6">
              Get instant access to our exclusive community of entrepreneurs. Learn from others 
              who successfully improved their credit and got funded. Ask questions, get support, 
              and accelerate your journey.
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
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Join 5,000+ Successful Clients</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center justify-center">
              <Users className="w-8 h-8 text-blue-600 mr-3" />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">5,000+</div>
                <div className="text-gray-600 text-sm">Clients Served</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Star className="w-8 h-8 text-green-600 mr-3" />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">85%</div>
                <div className="text-gray-600 text-sm">Funding Success Rate</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Clock className="w-8 h-8 text-purple-600 mr-3" />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">30-90</div>
                <div className="text-gray-600 text-sm">Days to Funding Ready</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
              "I started with a 580 credit score and was denied everywhere. After the credit repair program, 
              I boosted my score to 720 and got approved for $150K in business funding. The Skool community 
              was incredibly supportive throughout the entire process!"
            </p>
            <div className="font-semibold text-gray-900">- Michael T., E-commerce Business Owner</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}