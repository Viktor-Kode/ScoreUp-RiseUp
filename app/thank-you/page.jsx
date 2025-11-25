// app/thank-you/page.jsx
'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Mail, Clock, Users, ArrowRight } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export default function ThankYou() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'general';

  const getContent = () => {
    switch (type) {
      case 'funding':
        return {
          title: 'Funding Application Received!',
          message: 'Thank you for submitting your funding application. Our team will review your information and contact you within 24 hours to discuss next steps.',
          nextSteps: [
            'Check your email for a confirmation',
            'Our team will review your application',
            'We\'ll match you with suitable lenders',
            'Get funded in as little as 30 days'
          ]
        };
      case 'credit-repair':
        return {
          title: 'Welcome to Credit Repair!',
          message: 'Thank you for your purchase! Check your email for access instructions and next steps to start improving your credit.',
          nextSteps: [
            'Check your email for login details',
            'Access your Skool community',
            'Complete your onboarding process',
            'Start your credit improvement journey'
          ]
        };
      default:
        return {
          title: 'Thank You!',
          message: 'Thank you for your submission. We appreciate your interest and will be in touch soon.',
          nextSteps: [
            'Check your email for confirmation',
            'Our team will review your information',
            'We\'ll contact you with next steps'
          ]
        };
    }
  };

  const content = getContent();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center"
        >
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>

          {/* Title & Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{content.title}</h1>
          <p className="text-lg text-gray-600 mb-8">{content.message}</p>

          {/* Next Steps */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              What Happens Next:
            </h3>
            <ul className="space-y-3">
              {content.nextSteps.map((step, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  {step}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            {type === 'funding' && (
              <a
                href="/credit-repair"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200"
              >
                Boost Your Approval Odds with Credit Repair
              </a>
            )}
            
            <a
              href="https://www.skool.com/your-community" // Replace with your Skool link
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Join Our Skool Community
            </a>

            <a
              href="/"
              className="block w-full text-blue-600 hover:text-blue-700 font-medium py-2"
            >
              Return to Homepage
            </a>
          </div>

          {/* Support Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>support@scoreupriseup.com</span>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>24-48 Hour Response</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mt-8"
        >
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-200">
            <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <div className="text-sm font-semibold text-gray-900">5,000+</div>
            <div className="text-xs text-gray-600">Clients Served</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-200">
            <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <div className="text-sm font-semibold text-gray-900">90%+</div>
            <div className="text-xs text-gray-600">Approval Rate</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-200">
            <Clock className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <div className="text-sm font-semibold text-gray-900">30 Days</div>
            <div className="text-xs text-gray-600">Average Funding Time</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}