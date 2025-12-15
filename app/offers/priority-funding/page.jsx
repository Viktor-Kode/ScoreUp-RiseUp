// app/offers/priority-funding/page.jsx
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
  Clock,
  Award,
  Rocket,
  Target,
  Calendar,
  HeadphonesIcon
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PriorityFundingOffer() {
  const router = useRouter();
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [showUpsell, setShowUpsell] = useState(false);

  // PayPal payment links
  const mainPayPalLink = 'https://www.paypal.com/ncp/payment/M8PQB6EXE3YJ8';
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
          product_name: 'Priority Funding Access',
          product_price: '$297',
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
        product_name: 'Strategy Session Upsell',
        product_price: '$97',
        customer_action: 'Accepted Upsell',
        timestamp: new Date().toISOString()
      },
      'SS2R3dMbKoMDjBayk'
    ).catch(console.error);
    
    router.push('/thank-you?product=priority-funding+upsell');
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
        product_name: 'Priority Funding Access',
        product_price: '$297',
        customer_action: 'Declined Upsell',
        timestamp: new Date().toISOString()
      },
      'SS2R3dMbKoMDjBayk'
    ).catch(console.error);
    
    router.push('/thank-you?product=priority-funding');
  };

  const features = [
    {
      icon: Clock,
      title: '48-Hour Funding Decision',
      description: 'Get your applications reviewed and decisions made within 2 business days'
    },
    {
      icon: HeadphonesIcon,
      title: 'Dedicated Funding Specialist',
      description: 'Your personal expert who knows your business and funding needs'
    },
    {
      icon: Target,
      title: 'Premium Lender Network',
      description: 'Access to our exclusive network of 50+ business-friendly lenders'
    },
    {
      icon: Rocket,
      title: 'Expedited Processing',
      description: 'Jump to the front of the line for all application reviews'
    },
    {
      icon: Zap,
      title: 'Rate Negotiation',
      description: 'Our specialists negotiate better terms and rates on your behalf'
    },
    {
      icon: Award,
      title: 'Document Preparation',
      description: 'We help prepare and optimize your funding applications'
    }
  ];

  const testimonials = [
    {
      name: 'Marcus Thompson',
      business: 'Restaurant Owner',
      content: 'Priority Funding got me a $100k line of credit in 3 days when I needed it most. The dedicated specialist made all the difference.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      business: 'Digital Marketing Agency',
      content: 'Worth every penny! They negotiated my interest rate down by 2% and got me approved in 48 hours.',
      rating: 5
    },
    {
      name: 'David Rodriguez',
      business: 'Construction Company',
      content: 'The lender network access alone is incredible. Got offers from lenders I never would have found on my own.',
      rating: 5
    }
  ];

  const comparisonData = [
    {
      feature: 'Application Review Time',
      standard: '5-7 business days',
      priority: '24-48 hours'
    },
    {
      feature: 'Dedicated Support',
      standard: 'Email only',
      priority: 'Personal specialist + phone'
    },
    {
      feature: 'Lender Network',
      standard: 'Basic network',
      priority: 'Premium 50+ lenders'
    },
    {
      feature: 'Rate Negotiation',
      standard: 'Self-negotiated',
      priority: 'Expert negotiation'
    },
    {
      feature: 'Document Help',
      standard: 'Templates only',
      priority: 'Full preparation assistance'
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
            <Calendar className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Your Strategy Session</h3>
            <p className="text-gray-600">
              Add a 60-minute funding strategy session for just $97 and maximize your funding results!
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-4 mb-6">
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Personalized funding roadmap
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Lender-specific strategy
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Document optimization review
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Actionable implementation plan
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Q&A with funding expert
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleUpsellAccept}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200"
            >
              Yes, Add Strategy Session - $97
            </button>
            <button
              onClick={handleUpsellDecline}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-lg transition-colors duration-200"
            >
              No Thanks, Just Priority Funding
            </button>
            <p className="text-xs text-gray-500 text-center mt-2">
              Limited spots available for strategy sessions
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
                <Zap className="w-4 h-4 mr-2" />
                Fast-Track Funding
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Priority Funding Access
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Skip the wait and get expedited processing, premium lender access, and dedicated specialist support for your funding applications.
              </p>

              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-bold text-gray-900">$297</span>
                <span className="text-gray-500 ml-2 line-through text-xl">$597</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold ml-4">
                  Save $300
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
                    <span>Get Priority Access</span>
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
                  Instant Setup
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  1,500+ Members
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Priority Benefits</h3>
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

      {/* Comparison Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Standard vs Priority Funding</h2>
            <p className="text-xl text-gray-600">See the difference priority access makes</p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
              <div className="p-6 font-semibold text-gray-900">Feature</div>
              <div className="p-6 text-center font-semibold text-gray-500">Standard</div>
              <div className="p-6 text-center font-semibold text-blue-600">Priority</div>
            </div>
            
            {comparisonData.map((item, index) => (
              <div key={index} className="grid grid-cols-3 border-b border-gray-200 last:border-b-0">
                <div className="p-6 font-medium text-gray-900">{item.feature}</div>
                <div className="p-6 text-center text-gray-500">{item.standard}</div>
                <div className="p-6 text-center text-blue-600 font-semibold">{item.priority}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Priority Funding?</h2>
            <p className="text-xl text-gray-600">Get more than just faster processing</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Higher Approval Rates',
                description: 'Priority applications get more attention and careful review from lenders'
              },
              {
                icon: Target,
                title: 'Better Terms',
                description: 'Negotiate lower interest rates and better repayment terms'
              },
              {
                icon: Rocket,
                title: 'Time Savings',
                description: 'Save weeks of waiting and get back to growing your business'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Priority Member Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from entrepreneurs who accelerated their funding</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-6 border border-blue-200"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t border-blue-200 pt-4">
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
            <Rocket className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Ready to Fast-Track Your Funding?</h2>
            <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
              Don't let slow processing times hold your business back. Get priority access and secure your funding faster.
            </p>
            
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <div className="flex items-baseline justify-center mb-6">
                <span className="text-4xl font-bold">$297</span>
                <span className="text-blue-200 ml-2 line-through text-xl">$597</span>
                <span className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-semibold ml-4">
                  Save $300
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
                    <span>Get Priority Access Now</span>
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
                Instant Access After Payment
              </div>
              <div className="flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Dedicated Specialist Assigned
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}