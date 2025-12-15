// app/offers/credit-builder/page.jsx
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
  Building,
  CreditCard,
  BadgeDollarSign,
  FileText,
  Target,
  Award,
  Clock,
  BarChart
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CreditBuilderOffer() {
  const router = useRouter();
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [showUpsell, setShowUpsell] = useState(false);

  // PayPal payment links
  const mainPayPalLink = 'https://www.paypal.com/ncp/payment/7BFPM954XGJ7U';
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
          product_name: 'Business Credit Builder System',
          product_price: '$97',
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
        product_name: 'Priority Implementation Support',
        product_price: '$197',
        customer_action: 'Accepted Upsell',
        timestamp: new Date().toISOString()
      },
      'SS2R3dMbKoMDjBayk'
    ).catch(console.error);
    
    router.push('/thank-you?product=credit-builder+upsell');
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
        product_name: 'Business Credit Builder System',
        product_price: '$97',
        customer_action: 'Declined Upsell',
        timestamp: new Date().toISOString()
      },
      'SS2R3dMbKoMDjBayk'
    ).catch(console.error);
    
    router.push('/thank-you?product=credit-builder');
  };

  const features = [
    {
      icon: Building,
      title: 'Business Entity Setup',
      description: 'Step-by-step guide to properly structure your business for credit'
    },
    {
      icon: CreditCard,
      title: 'Credit Building System',
      description: 'Proven system to build business credit from ground zero'
    },
    {
      icon: BadgeDollarSign,
      title: 'Lender Relationships',
      description: 'Access to business-friendly lenders and credit providers'
    },
    {
      icon: FileText,
      title: 'Document Templates',
      description: 'Ready-to-use templates for credit applications and business documents'
    },
    {
      icon: TrendingUp,
      title: 'Credit Monitoring',
      description: 'Tools and systems to monitor and maintain your business credit'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Access to credit building specialists and community support'
    }
  ];

  const results = [
    {
      metric: '50-100 Points',
      description: 'Average business credit score improvement in 90 days'
    },
    {
      metric: '$50K+',
      description: 'Average funding accessed after building business credit'
    },
    {
      metric: '30-60 Days',
      description: 'Time to establish initial business credit profile'
    },
    {
      metric: '85% Success Rate',
      description: 'Of users who secure business funding after completion'
    }
  ];

  const testimonials = [
    {
      name: 'Michael Chen',
      business: 'Digital Agency Owner',
      content: 'I built $75,000 in business credit lines within 90 days using this system. Completely transformed how I fund my business.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      business: 'Consulting Business',
      content: 'The step-by-step system made it so easy. Went from no business credit to multiple six-figure credit lines.',
      rating: 5
    },
    {
      name: 'David Martinez',
      business: 'E-commerce Store',
      content: 'This system paid for itself 10x over. The lender relationships alone are worth the investment.',
      rating: 5
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Business Foundation',
      description: 'Properly structure your business entity and establish legal foundation'
    },
    {
      number: '02',
      title: 'Credit Profile Setup',
      description: 'Establish business credit profiles with major credit bureaus'
    },
    {
      number: '03',
      title: 'Initial Credit Building',
      description: 'Secure starter credit accounts and build payment history'
    },
    {
      number: '04',
      title: 'Advanced Credit Access',
      description: 'Access higher credit limits and premium lending relationships'
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
            <Zap className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Add Priority Implementation</h3>
            <p className="text-gray-600">
              Get 1-on-1 implementation support and custom strategy for just $197!
            </p>
          </div>

          <div className="bg-purple-50 rounded-xl p-4 mb-6">
            <ul className="space-y-2 text-sm text-purple-800">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Personalized implementation plan
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                2-hour strategy session
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Direct lender introductions
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Document review and optimization
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                30-day priority email support
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleUpsellAccept}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200"
            >
              Yes, Add Implementation Support - $197
            </button>
            <button
              onClick={handleUpsellDecline}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-lg transition-colors duration-200"
            >
              No Thanks, I'll Do It Myself
            </button>
            <p className="text-xs text-gray-500 text-center mt-2">
              Limited spots available for priority implementation
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                Business Credit Focused
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Business Credit Builder System
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                The complete system to establish strong business credit, separate from personal credit, 
                and unlock $50,000+ in business funding.
              </p>

              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-bold text-gray-900">$97</span>
              
              </div>

              <button
                onClick={handlePurchase}
                disabled={isPurchasing}
                className="w-full lg:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isPurchasing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Build My Business Credit</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* PayPal Security Badge */}
              <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-100">
                <div className="flex items-center justify-center space-x-2 text-purple-700">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.973.382-1.055.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 00-.607-.541c-1.516-1.137-4.139-1.098-5.83-1.098h-4.4c-.524 0-.968.382-1.05.9l-1.12 7.105-.006.038a.641.641 0 00.633.74h3.347c.524 0 .968-.382 1.05-.9l.177-1.102c.082-.518.526-.9 1.05-.9h.66c3.909 0 6.79-1.624 7.61-6.712.02-.104.037-.207.053-.309.013-.063.025-.124.036-.182z" />
                  </svg>
                  <span className="font-semibold">PayPal Payment Secured</span>
                </div>
                <p className="text-sm text-purple-600 text-center mt-1">
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
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-purple-600" />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-xl text-gray-600">What our members achieve with the Business Credit Builder System</p>
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
                <div className="text-3xl font-bold text-purple-600 mb-2">{result.metric}</div>
                <p className="text-gray-600 text-sm">{result.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your 4-Step Business Credit Blueprint</h2>
            <p className="text-xl text-gray-600">A proven process to build strong business credit</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-purple-200 -z-10" />
                )}
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Build Business Credit?</h2>
            <p className="text-xl text-gray-600">Separate your business and personal finances for better funding opportunities</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart,
                title: 'Higher Funding Limits',
                description: 'Access larger credit lines and loans with established business credit'
              },
              {
                icon: Shield,
                title: 'Asset Protection',
                description: 'Keep personal assets separate from business liabilities'
              },
              {
                icon: Zap,
                title: 'Better Terms',
                description: 'Lower interest rates and better repayment terms with strong business credit'
              },
              {
                icon: Users,
                title: 'Business Growth',
                description: 'Scale your business with access to capital when you need it'
              },
              {
                icon: Target,
                title: 'Funding Readiness',
                description: 'Be prepared for opportunities with established credit profiles'
              },
              {
                icon: Award,
                title: 'Professional Image',
                description: 'Build credibility with suppliers, partners, and customers'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-2xl"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    

      {/* Final CTA */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <BadgeDollarSign className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Build Your Business Credit?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of successful entrepreneurs who have unlocked business funding through strong credit profiles.
            </p>
            
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 mb-8 max-w-2xl mx-auto border border-purple-200">
              <div className="flex items-baseline justify-center mb-6">
                <span className="text-4xl font-bold text-gray-900">$97</span>
                <span className="text-gray-500 ml-2 line-through text-xl">$997</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold ml-4">
                  Save $500
                </span>
              </div>
              
              <button
                onClick={handlePurchase}
                disabled={isPurchasing}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isPurchasing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Start Building Business Credit</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
              
              {/* PayPal Assurance */}
              <div className="mt-4 flex items-center justify-center space-x-2 text-purple-600">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.973.382-1.055.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 00-.607-.541c-1.516-1.137-4.139-1.098-5.83-1.098h-4.4c-.524 0-.968.382-1.05.9l-1.12 7.105-.006.038a.641.641 0 00.633.74h3.347c.524 0 .968-.382 1.05-.9l.177-1.102c.082-.518.526-.9 1.05-.9h.66c3.909 0 6.79-1.624 7.61-6.712.02-.104.037-.207.053-.309.013-.063.025-.124.036-.182z" />
                </svg>
                <span className="text-sm">PayPal Secured Checkout</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-gray-600 text-sm">
              <div className="flex items-center justify-center">
                <Shield className="w-5 h-5 mr-2" />
                30-Day Money Back Guarantee
              </div>
              <div className="flex items-center justify-center">
                <Clock className="w-5 h-5 mr-2" />
                Lifetime Updates Included
              </div>
              <div className="flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Community Support Access
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}