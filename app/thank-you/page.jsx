// app/thank-you/page.jsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ThankYouPage() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    
    // Only run on client side
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    const product = urlParams.get('product');
    
    if (email) {
      console.log('Thank you for:', email, product);
      // You can save to localStorage or send to your backend here
      localStorage.setItem('last_signup', JSON.stringify({ email, product, date: new Date().toISOString() }));
    }
  }, []);
  
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You!
          </h1>
          <p className="text-gray-600 mb-8">
            Your 7-day free trial access is being processed. Check your email for next steps.
          </p>
          
          <div className="space-y-4">
            <a
              href="https://www.skool.com/scoreup-riseup-8242/about"
              target="_blank"
              className="block w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-xl text-center transition-colors"
            >
              Go to Skool Community
            </a>
            
            <Link
              href="/"
              className="block w-full border-2 border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold py-4 px-6 rounded-xl text-center transition-colors"
            >
              Return to Homepage
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Need help? Email{' '}
              <a href="mailto:support@scoreupriseup.com" className="text-purple-600 font-medium">
                support@scoreupriseup.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}