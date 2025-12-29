'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Lock,
  AlertCircle
} from 'lucide-react';

// --- CONFIGURATION ---
const SERVICE_ID = 'service_nwn8itj';
const TEMPLATE_ID = 'template_t7v1p78';
const PUBLIC_KEY = '7vyRc9YT7OttdbuIW';
const SKOOL_URL = 'https://www.skool.com/scoreup-riseup-8242/about';

export default function SkoolCommunityTrial() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // 1. Correct Initialization for Next.js
  useEffect(() => {
    if (typeof window !== 'undefined') {
      emailjs.init(PUBLIC_KEY);
    }
  }, []);

  const handleFinalRedirect = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      window.open(SKOOL_URL, '_blank', 'noopener,noreferrer');
    }, 1500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    // Matches standard EmailJS naming conventions
    const templateParams = {
      user_name: email.split('@')[0],
      user_email: email,
      signup_date: new Date().toLocaleString(),
      message: `New Skool Trial Request from: ${email}`
    };

    try {
      // METHOD 1: Try SDK
      console.log('Attempting EmailJS SDK send...');
      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      if (response.status === 200) {
        console.log('✅ SDK Success');
        handleFinalRedirect();
      } else {
        throw new Error(`SDK status: ${response.status}`);
      }

    } catch (sdkError) {
      console.warn('SDK failed, trying REST API Fallback...', sdkError);

      // METHOD 2: Direct REST API (The most reliable fallback)
      try {
        const restResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: SERVICE_ID,
            template_id: TEMPLATE_ID,
            user_id: PUBLIC_KEY,
            template_params: templateParams,
          }),
        });

        if (restResponse.ok) {
          console.log('✅ REST Fallback Success');
          handleFinalRedirect();
        } else {
          const errorText = await restResponse.text();
          console.error('❌ REST API Error Detail:', errorText);
          // Still redirect the user so you don't lose the lead
          handleFinalRedirect();
        }
      } catch (restError) {
        console.error('❌ All email methods failed:', restError);
        handleFinalRedirect();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-purple-100">
          {isSubmitted ? (
            <div className="text-center py-10">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Success!</h3>
              <p className="text-gray-600 mb-6">Redirecting you to ScoreUp RiseUp...</p>
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">7-Day Free Trial</h3>
                <p className="text-gray-500">Instant access to our community</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                    required
                  />
                </div>

                {error && (
                  <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-2" /> {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl text-lg hover:shadow-xl transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Get Free Access</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <div className="grid grid-cols-1 gap-2 pt-4">
                  <div className="flex items-center text-xs text-gray-500">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2" /> Full community access
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2" /> No credit card required
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
        
        <div className="mt-6 flex items-center justify-center space-x-4 text-gray-400 text-xs">
          <span className="flex items-center"><Shield className="w-3 h-3 mr-1" /> Secure</span>
          <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> Limited Slots</span>
        </div>
      </div>
    </div>
  );
}