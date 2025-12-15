// app/offers/builder-kit/page.jsx
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
  TrendingUp,
  Zap,
  FileText,
  Clock,
  Award,
  Building,
  CreditCard,
  BadgeDollarSign,
  HeartHandshake
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BuilderKitOffer() {
  const router = useRouter();
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [showUpsell, setShowUpsell] = useState(false);

  // PayPal payment links
  const mainPayPalLink = 'https://www.paypal.com/ncp/payment/MB95QJ9P7V4RG';
  // For upsell, you'll need to create a separate PayPal payment link for $97
  // For now, I'll use the same link but you should update this
  const upsellPayPalLink = 'https://www.paypal.com/ncp/payment/YOUR_UPSELL_LINK_HERE';

  const handlePurchase = async () => {
    setIsPurchasing(true);
    
    // Track conversion
    try {
      await emailjs.send(
        'service_renapht',
        'template_z1vr7ty',
        {
          to_email: 'travis@scoreupriseup.com',
          to_name: 'Travis',
          product_name: 'Business Credit Builder Kit',
          product_price: '$997',
          customer_action: 'Clicked Purchase Button',
          timestamp: new Date().toISOString(),
          customer_ip: await getClientIP(),
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

  // Function to get client IP (optional for tracking)
  const getClientIP = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch {
      return 'Unknown';
    }
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
        product_name: 'Priority Processing Upsell',
        product_price: '$97',
        customer_action: 'Accepted Upsell',
        timestamp: new Date().toISOString()
      },
      'SS2R3dMbKoMDjBayk'
    ).catch(console.error);
    
    router.push('/thank-you?product=builder-kit+upsell');
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
        product_name: 'Business Credit Builder Kit',
        product_price: '$997',
        customer_action: 'Declined Upsell',
        timestamp: new Date().toISOString()
      },
      'SS2R3dMbKoMDjBayk'
    ).catch(console.error);
    
    router.push('/thank-you?product=builder-kit');
  };

  const features = [
    {
      icon: Building,
      title: 'Business Entity Setup',
      description: 'Step-by-step guide to properly structure your business'
    },
    {
      icon: CreditCard,
      title: 'Credit Building System',
      description: 'Proven system to build business credit from scratch'
    },
    {
      icon: BadgeDollarSign,
      title: 'Lender Relationships',
      description: 'Access to our network of business-friendly lenders'
    },
    {
      icon: FileText,
      title: 'Document Templates',
      description: 'Ready-to-use templates for funding applications'
    },
    {
      icon: TrendingUp,
      title: 'Funding Strategies',
      description: 'Advanced strategies to maximize your funding potential'
    },
    {
      icon: Users,
      title: 'Personal Coach Access',
      description: 'Direct access to business funding experts'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      business: 'Tech Startup Founder',
      content: 'The Business Credit Builder Kit helped me secure $250k in funding within 90 days. The step-by-step system made it incredibly easy.',
      rating: 5
    },
    {
      name: 'Mike Rodriguez',
      business: 'E-commerce Store Owner',
      content: 'I went from no business credit to a $50k line of credit in 60 days. This kit is worth every penny!',
      rating: 5
    },
    {
      name: 'Jessica Chen',
      business: 'Consulting Business',
      content: 'The lender relationships alone are worth the investment. Got approved for funding that I never would have found on my own.',
      rating: 5
    }
  ];

  const guarantees = [
    '30-Day Money Back Guarantee',
    'Lifetime Updates Included',
    '1-Year Support Access',
    '100% Satisfaction Guaranteed'
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
            <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Wait! Special Offer Just For You</h3>
            <p className="text-gray-600">
              Add Priority Processing for just $97 and get your funding applications reviewed within 24 hours!
            </p>
          </div>

          <div className="bg-yellow-50 rounded-xl p-4 mb-6">
            <ul className="space-y-2 text-sm text-yellow-800">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                24-hour application review
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Dedicated funding specialist
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Lender introduction service
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Priority support access
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleUpsellAccept}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200"
            >
              Yes, Add Priority Processing - $97
            </button>
            <button
              onClick={handleUpsellDecline}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-lg transition-colors duration-200"
            >
              No Thanks, I'll Wait
            </button>
            <p className="text-xs text-gray-500 text-center mt-2">
              This is a one-time offer only available after purchase
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                Most Popular Offer
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Business Credit Builder Kit
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                The complete system to build business credit, establish lender relationships, 
                and access $50,000+ in funding for your business.
              </p>

              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-bold text-gray-900">$997</span>
                
              </div>

              <button
                onClick={handlePurchase}
                disabled={isPurchasing}
                className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isPurchasing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Get Instant Access</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex items-center justify-center space-x-2 text-blue-700">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold">PayPal Payment Secured</span>
                </div>
                <p className="text-sm text-blue-600 text-center mt-1">
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
                  2,000+ Sold
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
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-blue-600" />
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

      {/* Rest of your existing code remains the same... */}
      {/* Benefits Section, Testimonials, Guarantee Section, Final CTA */}

    </div>
  );
}