// app/thank-you/page.jsx
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, ArrowRight, Home, Mail } from 'lucide-react';

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [paymentVerified, setPaymentVerified] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check URL parameters after component mounts
    const product = searchParams.get('product');
    const payment = searchParams.get('payment');
    const email = searchParams.get('email');
    
    console.log('Thank You Page Params:', { product, payment, email });
    
    if (payment === 'completed') {
      setPaymentVerified(true);
      
      // Track the conversion
      if (typeof window !== 'undefined') {
        // Save to localStorage for tracking
        const purchases = JSON.parse(localStorage.getItem('skool_purchases') || '[]');
        purchases.push({
          product,
          email,
          timestamp: new Date().toISOString(),
          status: 'completed'
        });
        localStorage.setItem('skool_purchases', JSON.stringify(purchases));
        
        // Google Analytics (if available)
        window.gtag?.('event', 'purchase', {
          value: product === 'monthly' ? 10 : 97,
          currency: 'USD',
          transaction_id: Date.now().toString(),
        });
      }
      
      // Send email notification (optional - remove if causing issues)
      sendConfirmationEmail(product, email);
    }
    
    // Set loading to false after processing
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
  }, [searchParams]);
  
  const sendConfirmationEmail = async (product, email) => {
    try {
      // Only run in browser
      if (typeof window === 'undefined') return;
      
      // Import emailjs dynamically to avoid SSR issues
      const emailjs = await import('@emailjs/browser');
      
      const result = await emailjs.send(
        'service_renapht',
        'template_z1vr7ty',
        {
          to_email: email || 'travis@scoreupriseup.com',
          to_name: email?.split('@')[0] || 'Customer',
          product_name: product || 'ScoreUp RiseUp',
          customer_action: 'Payment Completed',
          timestamp: new Date().toLocaleString(),
          next_steps: 'Check your email for community access details'
        },
        'SS2R3dMbKoMDjBayk'
      );
      
      console.log('Confirmation email sent:', result);
      setEmailSent(true);
    } catch (error) {
      console.log('Email not sent (optional):', error.message);
      // Don't show error to user - email is optional
    }
  };
  
  const handleReturnHome = () => {
    router.push('/');
  };
  
  const handleJoinCommunity = () => {
    window.open('https://www.skool.com/scoreup-riseup-8242/about', '_blank');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your confirmation...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {paymentVerified ? 'Payment Confirmed! 🎉' : 'Thank You! 🎉'}
            </h1>
            <p className="text-lg opacity-90">
              {paymentVerified 
                ? 'Your ScoreUp RiseUp access is being activated'
                : 'We appreciate your interest in ScoreUp RiseUp'
              }
            </p>
          </div>
          
          {/* Content */}
          <div className="p-8 md:p-12">
            {paymentVerified ? (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Welcome to the Community!
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Your payment has been successfully processed. You now have full access to the ScoreUp RiseUp community.
                  </p>
                  
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                    <h3 className="font-semibold text-green-800 mb-3">Next Steps:</h3>
                    <ul className="text-left space-y-3 text-green-700">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>Check your email for community access instructions</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>Join our live training sessions starting this week</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>Download the resource library and templates</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="space-y-4">
                  <button
                    onClick={handleJoinCommunity}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-200 flex items-center justify-center space-x-3 group"
                  >
                    <span>Go to ScoreUp RiseUp Community</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button
                    onClick={handleReturnHome}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-4 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center"
                  >
                    <Home className="w-5 h-5 mr-2" />
                    Return to Homepage
                  </button>
                </div>
                
                {/* Email Status */}
                {emailSent && (
                  <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-xl text-center">
                    <Mail className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                    <p className="text-blue-700">Confirmation email sent! Check your inbox.</p>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Your Free Trial is Ready
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Thank you for signing up for the ScoreUp RiseUp 7-day free trial. 
                    You should receive an email with next steps shortly.
                  </p>
                  
                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
                    <h3 className="font-semibold text-purple-800 mb-3">What Happens Next:</h3>
                    <ul className="text-left space-y-3 text-purple-700">
                      <li className="flex items-center">
                        <Clock className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                        <span>Check your email for community access link</span>
                      </li>
                      <li className="flex items-center">
                        <Clock className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                        <span>Join the Skool community to access all resources</span>
                      </li>
                      <li className="flex items-center">
                        <Clock className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                        <span>Attend the next live training session</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Action Buttons for non-payment */}
                <div className="space-y-4">
                  <button
                    onClick={handleJoinCommunity}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-200"
                  >
                    Go to Community Now
                  </button>
                  
                  <button
                    onClick={handleReturnHome}
                    className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold py-4 px-6 rounded-xl transition-colors duration-200"
                  >
                    Return to Homepage
                  </button>
                </div>
                
                {/* Support Info */}
                <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                  <p className="text-gray-600 text-sm">
                    Need help? Email us at{' '}
                    <a href="mailto:support@scoreupriseup.com" className="text-purple-600 hover:underline">
                      support@scoreupriseup.com
                    </a>
                  </p>
                </div>
              </>
            )}
          </div>
          
          {/* Footer */}
          <div className="bg-gray-50 p-6 text-center border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} ScoreUp RiseUp. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs mt-2">
              If you encounter any issues, please contact our support team.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}