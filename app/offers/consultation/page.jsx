// app/offers/consultation/page.jsx
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
  Calendar,
  Video,
  Target,
  Clock,
  Award,
  MessageCircle,
  Zap,
  HeadphonesIcon
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ConsultationOffer() {
  const router = useRouter();
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [showUpsell, setShowUpsell] = useState(false);

  // Updated: Replaced Stripe link with PayPal link
  const paypalPaymentLink = 'https://www.paypal.com/ncp/payment/3V7784HMRWY4C';
  const calendlyLink = 'https://calendly.com/your-calendar/strategy-session';

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
          product_name: 'Funding Strategy Session',
          product_price: '$197',
          customer_action: 'Clicked Purchase',
          timestamp: new Date().toISOString(),
          message: 'Customer purchased Funding Strategy Session'
        },
        'SS2R3dMbKoMDjBayk'
      );
    } catch (error) {
      console.error('Failed to track conversion:', error);
    }

    // Updated: Redirect to PayPal payment
    setTimeout(() => {
      window.open(paypalPaymentLink, '_blank');
      // Show upsell after payment (consider moving this to a post-payment redirect)
      setShowUpsell(true);
      setIsPurchasing(false);
    }, 1500);
  };

  const handleUpsellAccept = () => {
    window.open(calendlyLink, '_blank');
    setShowUpsell(false);
    router.push('/thank-you?product=consultation');
  };

  const handleUpsellDecline = () => {
    setShowUpsell(false);
    window.open(calendlyLink, '_blank');
    router.push('/thank-you?product=consultation');
  };

  const benefits = [
    {
      icon: Target,
      title: 'Personalized Funding Roadmap',
      description: 'Get a customized plan tailored to your specific business and credit situation'
    },
    {
      icon: MessageCircle,
      title: '1-on-1 Expert Guidance',
      description: '60 minutes with a funding specialist who understands your industry'
    },
    {
      icon: Zap,
      title: 'Lender-Specific Strategy',
      description: 'Learn which lenders are most likely to approve your specific business'
    },
    {
      icon: HeadphonesIcon,
      title: 'Document Review',
      description: 'Get feedback on your current documents and what needs improvement'
    },
    {
      icon: Clock,
      title: 'Time-Saving Insights',
      description: 'Avoid common mistakes and streamline your funding application process'
    },
    {
      icon: Award,
      title: 'Actionable Next Steps',
      description: 'Leave with a clear, step-by-step plan to secure your funding'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      business: 'Boutique Owner',
      content: 'The strategy session saved me months of trial and error. My specialist identified 3 lenders perfect for my business and I got funded in 2 weeks!',
      rating: 5
    },
    {
      name: 'Robert Kim',
      business: 'Software Developer',
      content: 'Worth every penny! The document review alone helped me improve my application and secure $75k more than I expected.',
      rating: 5
    },
    {
      name: 'Amanda Thompson',
      business: 'Food Truck Owner',
      content: 'I was stuck for months until my strategy session. The personalized roadmap got me approved for funding in 10 days.',
      rating: 5
    }
  ];

  const whatWeCover = [
    'Current funding options analysis',
    'Credit improvement strategy',
    'Document preparation checklist',
    'Lender matching for your business type',
    'Funding amount optimization',
    'Timeline planning',
    'Risk assessment and mitigation',
    'Application review criteria'
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
            <Calendar className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Schedule Your Session</h3>
            <p className="text-gray-600">
              You're all set! Click below to book your 60-minute strategy session with our funding expert.
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-4 mb-6">
            <ul className="space-y-2 text-sm text-green-800">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Choose your preferred date and time
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Receive calendar confirmation
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Get pre-session questionnaire
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleUpsellAccept}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200"
            >
              Book My Session Now
            </button>
            <button
              onClick={handleUpsellDecline}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-lg transition-colors duration-200"
            >
              I'll Book Later
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <MessageCircle className="w-4 h-4 mr-2" />
                1-on-1 Expert Session
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Funding Strategy Session
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Get 60 minutes with a funding expert to create your personalized roadmap to secure the capital your business needs.
              </p>

              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-bold text-gray-900">$197</span>
               
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <Video className="w-5 h-5 text-green-600 mr-3" />
                  <span>60-minute video call</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Calendar className="w-5 h-5 text-green-600 mr-3" />
                  <span>Schedule at your convenience</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Target className="w-5 h-5 text-green-600 mr-3" />
                  <span>Personalized funding roadmap</span>
                </div>
              </div>

              <button
                onClick={handlePurchase}
                disabled={isPurchasing}
                className="w-full lg:w-auto bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isPurchasing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Book My Strategy Session</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* PayPal Security Badge - Added for consistency */}
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
                  Easy Scheduling
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  500+ Sessions
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Session Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* PayPal Badge - Added for trust signals */}
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

      {/* Rest of the existing code remains exactly the same... */}
      {/* What We Cover Section, How It Works, Testimonials, Final CTA */}
    </div>
  );
}