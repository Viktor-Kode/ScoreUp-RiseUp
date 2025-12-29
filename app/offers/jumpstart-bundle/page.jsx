// app/offers/jumpstart-bundle/page.jsx
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
  Zap,
  TrendingUp,
  Award,
  Clock,
  Rocket,
  Crown,
  Target,
  BarChart,
  HeartHandshake,
  Building,
  FileText
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function JumpstartBundleOffer() {
  const router = useRouter();
  const [isPurchasing, setIsPurchasing] = useState(false);

  // NOTE: You need a separate PayPal link for $97 Jumpstart Bundle
  // Currently using the Credit Repair Kit link - UPDATE THIS
  const paypalPaymentLink = 'https://www.paypal.com/ncp/payment/V5WSU2LNPMU2L';

  const handlePurchase = async () => {
    setIsPurchasing(true);
    
    try {
      await emailjs.send(
        'service_renapht',
        'template_z1vr7ty',
        {
          to_email: 'travis@scoreupriseup.com',
          to_name: 'Travis',
          product_name: 'Jumpstart Bundle',
          product_price: '$47',
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
    window.open(paypalPaymentLink, '_blank');
    
    // Delay and redirect to thank you page
    setTimeout(() => {
      setIsPurchasing(false);
      router.push('/thank-you?product=jumpstart-bundle');
    }, 2000);
  };

  const bundleFeatures = [
    {
      category: 'Credit Repair System',
      items: [
        'Credit Repair Education Course',
        'DIY Dispute Letter Templates',
        'Credit Score Tracking System',
        '30-Day Action Plan',
        'Advanced Credit Strategies',
        'Credit Bureau Dispute Guides'
      ],
      icon: TrendingUp,
      color: 'blue'
    },
    {
      category: 'Business Foundation',
      items: [
        'Business Entity Formation Guide',
        'EIN Application Assistance',
        'Business Banking Setup',
        'Business Credit Building',
        'Funding Preparation Checklist',
        'Business Plan Templates'
      ],
      icon: Building,
      color: 'green'
    },
    {
      category: 'Premium Bonuses',
      items: [
        'Priority Skool Community Access',
        '30-Min Strategy Session',
        'Lender Introduction Service',
        'Ongoing Support & Updates',
        'Advanced Funding Strategies',
        'Exclusive Webinars'
      ],
      icon: Crown,
      color: 'purple'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Rodriguez',
      business: 'Digital Marketing Agency',
      content: 'This bundle transformed my financial life. Went from 580 to 720 credit score and got $50k in business funding within 90 days!',
      rating: 5,
      results: '580 → 720 in 90 days'
    },
    {
      name: 'Sarah Johnson',
      business: 'Beauty Salon Owner',
      content: 'The strategy session alone was worth the price. Travis helped me structure my business perfectly and avoid costly mistakes.',
      rating: 5,
      results: '$75k Funding Secured'
    },
    {
      name: 'Marcus Williams',
      business: 'Construction Company',
      content: 'Finally found an all-in-one solution. The community support kept me accountable and the results speak for themselves.',
      rating: 5,
      results: '100+ Points Credit Improvement'
    }
  ];

  const valueComparison = [
    {
      item: 'Credit Repair Kit',
      individual: '$47',
      bundle: 'INCLUDED',
      savings: '$47'
    },
    {
      item: 'Business Setup Kit',
      individual: '$97',
      bundle: 'INCLUDED',
      savings: '$97'
    },
    {
      item: 'Strategy Session',
      individual: '$197',
      bundle: 'INCLUDED',
      savings: '$197'
    },
    {
      item: 'Community Access',
      individual: '$27/month',
      bundle: 'INCLUDED',
      savings: '$81+'
    },
    {
      item: 'Total Value',
      individual: '$368+',
      bundle: '$97',
      savings: '$271+'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Crown className="w-4 h-4 mr-2" />
                Complete Business Jumpstart
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Complete Business Jumpstart Bundle
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Everything you need to repair credit, build business credit, and secure funding - all in one complete package. 
                The ultimate shortcut to business funding success.
              </p>

              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-bold text-gray-900">$47</span>
                <span className="text-gray-500 ml-2 line-through text-xl">$190</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold ml-4">
                  Save $150
                </span>
              </div>

              <button
                onClick={handlePurchase}
                disabled={isPurchasing}
                className="w-full lg:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isPurchasing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Get Complete Bundle</span>
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
                  1,200+ Sold
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="text-center mb-6">
                  <Rocket className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Everything Included</h3>
                  <p className="text-gray-600">Complete system for credit repair + business funding</p>
                </div>
                
                <div className="space-y-6">
                  {bundleFeatures.map((category, index) => (
                    <div key={index} className="border-l-4 border-purple-500 pl-4">
                      <div className="flex items-center mb-3">
                        <div className={`w-8 h-8 bg-${category.color}-100 rounded-full flex items-center justify-center mr-3`}>
                          <category.icon className={`w-4 h-4 text-${category.color}-600`} />
                        </div>
                        <h4 className="font-bold text-gray-900">{category.category}</h4>
                      </div>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
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

      {/* Value Comparison Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Incredible Value - Save 60%</h2>
            <p className="text-xl text-gray-600">Get everything you need at a fraction of the cost</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <div className="grid gap-4">
              {valueComparison.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-4 gap-4 py-3 ${
                    index === valueComparison.length - 1 
                      ? 'border-t-2 border-gray-300 font-bold text-lg' 
                      : 'border-b border-gray-200'
                  }`}
                >
                  <div className="text-gray-900">{item.item}</div>
                  <div className="text-gray-500 text-right line-through">{item.individual}</div>
                  <div className="text-green-600 font-semibold text-right">{item.bundle}</div>
                  <div className="text-green-600 font-semibold text-right">{item.savings}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white text-center">
              <p className="text-lg font-semibold">
                Total Savings: <span className="text-yellow-300">$271+</span>
              </p>
              <p className="text-purple-100 text-sm">
                Plus time savings and faster results with the integrated system
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Path Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your 90-Day Success Path</h2>
            <p className="text-xl text-gray-600">From credit repair to funded business</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                phase: 'Phase 1: Foundation',
                duration: 'Days 1-30',
                tasks: ['Start credit repair', 'Set up business entity', 'Open business banking'],
                icon: Target,
                color: 'purple'
              },
              {
                phase: 'Phase 2: Building',
                duration: 'Days 31-60',
                tasks: ['Improve credit score', 'Establish business credit', 'Prepare funding docs'],
                icon: TrendingUp,
                color: 'blue'
              },
              {
                phase: 'Phase 3: Funding',
                duration: 'Days 61-90',
                tasks: ['Reach 680+ credit', 'Apply for funding', 'Secure capital'],
                icon: Award,
                color: 'green'
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center"
              >
                <div className={`w-12 h-12 bg-${phase.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <phase.icon className={`w-6 h-6 text-${phase.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.phase}</h3>
                <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  {phase.duration}
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  {phase.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transformational Results</h2>
            <p className="text-xl text-gray-600">See what our bundle users achieve</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-6 border border-purple-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                    {testimonial.results}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t border-purple-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.business}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Rocket className="w-16 h-16 text-pink-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Ready for Your Business Transformation?</h2>
            <p className="text-purple-100 text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of entrepreneurs who used this complete system to repair credit, 
              build businesses, and secure the funding they needed to grow.
            </p>
            
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <div className="flex items-baseline justify-center mb-6">
                <span className="text-4xl font-bold">$97</span>
                <span className="text-purple-200 ml-2 line-through text-xl">$247</span>
                <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold ml-4">
                  Save $150
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="text-left">
                  <h4 className="font-semibold mb-3 text-purple-100">What You Get:</h4>
                  <ul className="space-y-2 text-sm text-purple-100">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                      Credit Repair System ($47 Value)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                      Business Setup Kit ($97 Value)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                      Strategy Session ($197 Value)
                    </li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold mb-3 text-purple-100">Plus Bonuses:</h4>
                  <ul className="space-y-2 text-sm text-purple-100">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                      Priority Community Access
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                      Lender Introductions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                      Ongoing Support
                    </li>
                  </ul>
                </div>
              </div>
              
              <button
                onClick={handlePurchase}
                disabled={isPurchasing}
                className="w-full bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isPurchasing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Get Complete Bundle Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
              
              {/* PayPal Assurance */}
              <div className="mt-4 flex items-center justify-center space-x-2 text-purple-100">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.973.382-1.055.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 00-.607-.541c-1.516-1.137-4.139-1.098-5.83-1.098h-4.4c-.524 0-.968.382-1.05.9l-1.12 7.105-.006.038a.641.641 0 00.633.74h3.347c.524 0 .968-.382 1.05-.9l.177-1.102c.082-.518.526-.9 1.05-.9h.66c3.909 0 6.79-1.624 7.61-6.712.02-.104.037-.207.053-.309.013-.063.025-.124.036-.182z" />
                </svg>
                <span className="text-sm">PayPal Secured Checkout</span>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 text-purple-100 text-sm">
              <div className="flex items-center justify-center">
                <Shield className="w-5 h-5 mr-2" />
                30-Day Guarantee
              </div>
              <div className="flex items-center justify-center">
                <Clock className="w-5 h-5 mr-2" />
                Instant Access
              </div>
              <div className="flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Priority Support
              </div>
              <div className="flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2" />
                Fastest Results
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}