// app/offers/credit-repair-kit/page.jsx
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
  Target,
  BarChart,
  HeartHandshake
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CreditRepairKitOffer() {
  const router = useRouter();
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [showUpsell, setShowUpsell] = useState(false);

  // PayPal payment links
  const mainPayPalLink = 'https://www.paypal.com/ncp/payment/NE7NMY5WWTJ7N';
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
          product_name: 'Credit Repair Kit',
          product_price: '$7',
          customer_action: 'Clicked Purchase',
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
        product_name: 'Business Foundation Kit Upsell',
        product_price: '$47',
        customer_action: 'Accepted Upsell',
        timestamp: new Date().toISOString()
      },
      'SS2R3dMbKoMDjBayk'
    ).catch(console.error);
    
    router.push('/thank-you?product=credit-repair+upsell');
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
        product_name: 'Credit Repair Kit',
        product_price: '$7',
        customer_action: 'Declined Upsell',
        timestamp: new Date().toISOString()
      },
      'SS2R3dMbKoMDjBayk'
    ).catch(console.error);
    
    router.push('/thank-you?product=credit-repair');
  };

  const features = [
    {
      icon: FileText,
      title: 'Credit Repair Education Course',
      description: 'Step-by-step video training on credit repair strategies'
    },
    {
      icon: Target,
      title: 'DIY Dispute Letter Templates',
      description: 'Professionally crafted dispute letters for all credit issues'
    },
    {
      icon: BarChart,
      title: 'Credit Score Tracking System',
      description: 'Tools to monitor your credit progress and set goals'
    },
    {
      icon: TrendingUp,
      title: '30-Day Action Plan',
      description: 'Daily tasks and checklist to maximize your credit improvement'
    },
    {
      icon: Users,
      title: 'Basic Community Access',
      description: 'Access to our credit repair support community'
    },
    {
      icon: Shield,
      title: 'Credit Bureau Guides',
      description: 'Detailed guides for dealing with each credit bureau'
    }
  ];

  const testimonials = [
    {
      name: 'Marcus Johnson',
      business: 'Restaurant Owner',
      content: 'Went from 620 to 715 in 90 days using this system. Finally qualified for the business loan I needed!',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      business: 'Freelance Designer',
      content: 'The dispute letters worked perfectly. Removed 3 negative items from my report in the first month.',
      rating: 5
    },
    {
      name: 'David Martinez',
      business: 'E-commerce Store',
      content: 'Best $7 I ever spent. The education alone was worth 10x the price. Credit score up 85 points!',
      rating: 5
    }
  ];

  const results = [
    {
      metric: '50-120 Points',
      description: 'Average credit score improvement'
    },
    {
      metric: '30-90 Days',
      description: 'Typical time to see significant results'
    },
    {
      metric: '85% Success',
      description: 'Of users who follow the system'
    },
    {
      metric: '$7 Investment',
      description: 'For potentially thousands in savings'
    }
  ];

  if (showUpsell) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl p-8 max-w-md w-full"
        >
          <div className="text-center mb-6">
            <Zap className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Add Business Foundation Kit</h3>
            <p className="text-gray-600">
              Get our complete business setup guide for 50% off - only $47 (normally $97)!
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-4 mb-6">
            <ul className="space-y-2 text-sm text-green-800">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Business entity formation guide
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                EIN application assistance
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Business banking setup
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Business credit building starter
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Business plan templates
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleUpsellAccept}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200"
            >
              Yes, Add Business Kit - $47
            </button>
            <button
              onClick={handleUpsellDecline}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-lg transition-colors duration-200"
            >
              No Thanks, Just Credit Repair
            </button>
            <p className="text-xs text-gray-500 text-center mt-2">
              This offer is only available after purchasing the Credit Repair Kit
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
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
                Instant Access
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Credit Repair Jumpstart Kit
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                The complete system to improve your credit score quickly and qualify for business funding. 
                Start seeing results in as little as 30 days.
              </p>

              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-bold text-gray-900">$7</span>
                <span className="text-gray-500 ml-2 line-through text-xl">$47</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold ml-4">
                  Save $40
                </span>
              </div>

              <button
                onClick={handlePurchase}
                disabled={isPurchasing}
                className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
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

              {/* PayPal Security Badge */}
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex items-center justify-center space-x-2 text-blue-700">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.973.382-1.055.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 00-.607-.541c-1.516-1.137-4.139-1.098-5.83-1.098h-4.4c-.524 0-.968.382-1.05.9l-1.12 7.105-.006.038a.641.641 0 00.633.74h3.347c.524 0 .968-.382 1.05-.9l.177-1.102c.082-.518.526-.9 1.05-.9h.66c3.909 0 6.79-1.624 7.61-6.712.02-.104.037-.207.053-.309.013-.063.025-.124.036-.182z" />
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
                  3,000+ Sold
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

      {/* Results Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Credit Repair Results</h2>
            <p className="text-xl text-gray-600">What our members achieve with the Credit Repair Kit</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{result.metric}</div>
                <p className="text-gray-600 text-sm">{result.description}</p>
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
            <p className="text-xl text-gray-600">Hear from entrepreneurs who improved their credit</p>
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <HeartHandshake className="w-16 h-16 text-cyan-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Ready to Improve Your Credit?</h2>
            <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
              Start your journey to better credit and business funding today. Only $7 for instant access.
            </p>
            
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <div className="flex items-baseline justify-center mb-6">
                <span className="text-4xl font-bold">$7</span>
                <span className="text-blue-200 ml-2 line-through text-xl">$47</span>
                <span className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-semibold ml-4">
                  Save $40
                </span>
              </div>
              
              <button
                onClick={handlePurchase}
                disabled={isPurchasing}
                className="w-full bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isPurchasing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Get Credit Repair Kit Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
              
              {/* PayPal Assurance */}
              <div className="mt-4 flex items-center justify-center space-x-2 text-blue-100">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.973.382-1.055.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 00-.607-.541c-1.516-1.137-4.139-1.098-5.83-1.098h-4.4c-.524 0-.968.382-1.05.9l-1.12 7.105-.006.038a.641.641 0 00.633.74h3.347c.524 0 .968-.382 1.05-.9l.177-1.102c.082-.518.526-.9 1.05-.9h.66c3.909 0 6.79-1.624 7.61-6.712.02-.104.037-.207.053-.309.013-.063.025-.124.036-.182z" />
                </svg>
                <span className="text-sm">PayPal Secured Checkout</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-blue-100 text-sm">
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
                Community Support Included
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}