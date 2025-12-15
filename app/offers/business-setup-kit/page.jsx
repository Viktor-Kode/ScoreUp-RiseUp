// app/offers/business-setup-kit/page.jsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  CheckCircle,
  ArrowRight,
  Shield,
  Star,
  Users,
  Building,
  FileText,
  TrendingUp,
  Zap,
  Target,
  Award,
  Clock
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BusinessSetupKitOffer() {
  const router = useRouter();
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [showUpsell, setShowUpsell] = useState(false);

  // PayPal payment links
  const mainPayPalLink = 'https://www.paypal.com/ncp/payment/SNVZWZ4X5STBQ';
  // For upsell, create a separate PayPal payment link for $97
  const upsellPayPalLink = 'https://www.paypal.com/ncp/payment/YOUR_UPSELL_LINK_HERE';

  const handlePurchase = async () => {
    setIsPurchasing(true);
    
    try {
      await emailjs.send(
        'service_renapht',
        'template_z1vr7ty',
        {
          to_email: 'travis@scoreupriseup.com',
          to_name: 'Travis',
          product_name: 'Business Setup Kit',
          product_price: '$147',
          customer_action: 'Clicked Purchase Button',
          timestamp: new Date().toISOString(),
          page_url: window.location.href
        },
        'SS2R3dMbKoMDjBayk'
      );
    } catch (error) {
      console.error('Failed to track conversion:', error);
    }

    // Open PayPal payment in new tab
    window.open(mainPayPalLink, '_blank');
    
    // Show upsell after a short delay
    setTimeout(() => {
      setShowUpsell(true);
      setIsPurchasing(false);
    }, 2000);
  };

  const handleUpsellAccept = () => {
    // Open upsell PayPal link
    window.open(upsellPayPalLink, '_blank');
    setShowUpsell(false);
    
    // Track upsell conversion
    emailjs.send(
      'service_renapht',
      'template_z1vr7ty',
      {
        to_email: 'travis@scoreupriseup.com',
        to_name: 'Travis',
        product_name: 'Credit Builder System Upsell',
        product_price: '$97',
        customer_action: 'Accepted Upsell',
        timestamp: new Date().toISOString()
      },
      'SS2R3dMbKoMDjBayk'
    ).catch(console.error);
    
    router.push('/thank-you?product=business-setup+upsell');
  };

  const handleUpsellDecline = () => {
    setShowUpsell(false);
    
    // Track upsell decline
    emailjs.send(
      'service_renapht',
      'template_z1vr7ty',
      {
        to_email: 'travis@scoreupriseup.com',
        to_name: 'Travis',
        product_name: 'Business Setup Kit',
        product_price: '$147',
        customer_action: 'Declined Upsell',
        timestamp: new Date().toISOString()
      },
      'SS2R3dMbKoMDjBayk'
    ).catch(console.error);
    
    router.push('/thank-you?product=business-setup');
  };

  const features = [
    {
      icon: Building,
      title: 'Business Entity Formation',
      description: 'Step-by-step guide to choosing and setting up the right business structure'
    },
    {
      icon: FileText,
      title: 'EIN Application Assistance',
      description: 'Complete guide to getting your Employer Identification Number'
    },
    {
      icon: TrendingUp,
      title: 'Business Banking Setup',
      description: 'How to open business bank accounts and separate finances'
    },
    {
      icon: Target,
      title: 'Business Credit Building',
      description: 'Start building business credit separate from personal credit'
    },
    {
      icon: Users,
      title: 'Funding Preparation',
      description: 'Checklist and requirements for business funding applications'
    },
    {
      icon: Award,
      title: 'Business Plan Templates',
      description: 'Professional templates to create your business plan'
    }
  ];

  const testimonials = [
    {
      name: 'Jessica Lin',
      business: 'Consulting Business',
      content: 'The business setup kit saved me thousands in legal fees. Had my LLC and EIN in 2 days!',
      rating: 5
    },
    {
      name: 'Michael Torres',
      business: 'Tech Startup',
      content: 'Perfect for first-time business owners. The banking setup guide alone was worth the price.',
      rating: 5
    },
    {
      name: 'Amanda Park',
      business: 'Online Store',
      content: 'Went from idea to legally registered business in one weekend. Incredible value!',
      rating: 5
    }
  ];

  // Upsell Modal
  if (showUpsell) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl p-8 max-w-md w-full"
        >
          <div className="text-center mb-6">
            <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Upgrade to Complete Business Credit System</h3>
            <p className="text-gray-600">
              Get our complete Business Credit Builder System for just $97 (normally $497)!
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-4 mb-6">
            <ul className="space-y-2 text-sm text-green-800">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Advanced credit building strategies
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Lender relationship access
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                $50k+ funding system
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Personal coach support
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Document templates library
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleUpsellAccept}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200"
            >
              Yes, Upgrade to Complete System - $97
            </button>
            <button
              onClick={handleUpsellDecline}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-lg transition-colors duration-200"
            >
              No Thanks, Just Business Setup
            </button>
            <p className="text-xs text-gray-500 text-center mt-2">
              This upgrade offer is only available for Business Setup Kit customers
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Building className="w-4 h-4 mr-2" />
                Business Foundation
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Business Foundation Kit
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Everything you need to properly structure your business, establish credit, 
                and prepare for funding success.
              </p>

              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-bold text-gray-900">$147</span>
                
              </div>

              <button
                onClick={handlePurchase}
                disabled={isPurchasing}
                className="w-full lg:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isPurchasing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Get Business Setup Kit</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* PayPal Security Badge */}
              <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="flex items-center justify-center space-x-2 text-green-700">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.973.382-1.055.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 00-.607-.541c-1.516-1.137-4.139-1.098-5.83-1.098h-4.4c-.524 0-.968.382-1.05.9l-1.12 7.105-.006.038a.641.641 0 00.633.74h3.347c.524 0 .968-.382 1.05-.9l.177-1.102c.082-.518.526-.9 1.05-.9h.66c3.909 0 6.79-1.624 7.61-6.712.02-.104.037-.207.053-.309.013-.063.025-.124.036-.182z" />
                  </svg>
                  <span className="font-semibold">PayPal Payment Secured</span>
                </div>
                <p className="text-sm text-green-600 text-center mt-1">
                  Fast & secure checkout through PayPal
                </p>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-4 mt-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-1" />
                  Secure Payment
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  Instant Access
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  2,500+ Sold
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What's Included</h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* PayPal Badge */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-2 text-gray-700">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.973.382-1.055.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 00-.607-.541c-1.516-1.137-4.139-1.098-5.83-1.098h-4.4c-.524 0-.968.382-1.05.9l-1.12 7.105-.006.038a.641.641 0 00.633.74h3.347c.524 0 .968-.382 1.05-.9l.177-1.102c.082-.518.526-.9 1.05-.9h.66c3.909 0 6.79-1.624 7.61-6.712.02-.104.037-.207.053-.309.013-.063.025-.124.036-.182z" />
                    </svg>
                    <span className="font-semibold">PayPal Protection Included</span>
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-1">
                    Your purchase is protected by PayPal's Buyer Protection
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Proper Business Setup Matters</h2>
            <p className="text-xl text-gray-600">Set your business up for success from day one</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Asset Protection',
                description: 'Protect personal assets from business liabilities'
              },
              {
                icon: TrendingUp,
                title: 'Funding Readiness',
                description: 'Meet lender requirements for business funding'
              },
              {
                icon: Zap,
                title: 'Tax Advantages',
                description: 'Maximize tax benefits with proper business structure'
              },
              {
                icon: Users,
                title: 'Professional Image',
                description: 'Build credibility with customers and partners'
              },
              {
                icon: Target,
                title: 'Business Credit',
                description: 'Establish credit separate from personal finances'
              },
              {
                icon: Award,
                title: 'Growth Foundation',
                description: 'Scale your business with proper legal structure'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-2xl"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from entrepreneurs who built strong business foundations</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.business}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Building className="w-16 h-16 text-emerald-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Build Your Business Foundation Today</h2>
            <p className="text-green-100 text-xl mb-8 max-w-2xl mx-auto">
              Don't let improper business structure hold you back. Get everything you need for legal business setup.
            </p>
            
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <div className="flex items-baseline justify-center mb-6">
                <span className="text-4xl font-bold">$147</span>
                <span className="text-green-200 ml-2 line-through text-xl">$97</span>
                <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold ml-4">
                  Save $50
                </span>
              </div>
              
              <button
                onClick={handlePurchase}
                disabled={isPurchasing}
                className="w-full bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isPurchasing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-green-600 border-t-transparent rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Get Business Setup Kit</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
              
              {/* PayPal Assurance */}
              <div className="mt-4 flex items-center justify-center space-x-2 text-green-100">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.973.382-1.055.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 00-.607-.541c-1.516-1.137-4.139-1.098-5.83-1.098h-4.4c-.524 0-.968.382-1.05.9l-1.12 7.105-.006.038a.641.641 0 00.633.74h3.347c.524 0 .968-.382 1.05-.9l.177-1.102c.082-.518.526-.9 1.05-.9h.66c3.909 0 6.79-1.624 7.61-6.712.02-.104.037-.207.053-.309.013-.063.025-.124.036-.182z" />
                </svg>
                <span className="text-sm">PayPal Secured Checkout</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-green-100 text-sm">
              <div className="flex items-center justify-center">
                <Shield className="w-5 h-5 mr-2" />
                30-Day Money Back Guarantee
              </div>
              <div className="flex items-center justify-center">
                <Clock className="w-5 h-5 mr-2" />
                Instant Digital Delivery
              </div>
              <div className="flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Lifetime Updates Included
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}