// app/offers/tri-merge-report/page.jsx
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
  FileText,
  Download,
  Clock,
  Award,
  BarChart,
  Eye,
  Lock,
  Zap,
  TrendingUp
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function TriMergeReportOffer() {
  const router = useRouter();
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [selectedOption, setSelectedOption] = useState('free'); // 'free' or 'premium'

  const paymentLink = 'https://buy.stripe.com/your-tri-merge-link';
  const freeReportLink = 'https://myfreescorenow.com/enroll/?AID=ScoreUpRiseUp&PID=58125';

  const handleGetReport = async () => {
    setIsPurchasing(true);
    
    // Track conversion
    try {
      await emailjs.send(
        'service_renapht',
        'template_z1vr7ty',
        {
          to_email: 'travis@scoreupriseup.com',
          to_name: 'Travis',
          product_name: selectedOption === 'free' ? 'Free Tri-Merge Report' : 'Premium Tri-Merge Report',
          product_price: selectedOption === 'free' ? 'Free' : '$7',
          customer_action: 'Clicked Get Report',
          timestamp: new Date().toISOString(),
          message: `Customer requested ${selectedOption} Tri-Merge Report`
        },
        'SS2R3dMbKoMDjBayk'
      );
    } catch (error) {
      console.error('Failed to track conversion:', error);
    }

    // Redirect to appropriate link
    setTimeout(() => {
      if (selectedOption === 'free') {
        window.open(freeReportLink, '_blank');
      } else {
        window.open(paymentLink, '_blank');
      }
      router.push('/thank-you?product=tri-merge-report');
    }, 1500);
  };

  const features = [
    {
      icon: FileText,
      title: '3-Bureau Credit Report',
      description: 'Get data from all three major credit bureaus in one comprehensive report'
    },
    {
      icon: BarChart,
      title: 'Credit Score Analysis',
      description: 'Detailed breakdown of your credit scores and factors affecting them'
    },
    {
      icon: Eye,
      title: 'Credit Monitoring',
      description: 'Monitor changes to your credit report and receive alerts'
    },
    {
      icon: TrendingUp,
      title: 'Funding Eligibility',
      description: 'Understand which funding programs you qualify for based on your credit'
    },
    {
      icon: Download,
      title: 'Instant Access',
      description: 'Get your report immediately after completing the simple process'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your information is protected with bank-level security'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      business: 'Small Business Owner',
      content: 'The tri-merge report showed me exactly why I was getting denied for funding. Fixed the issues and got approved for $50k!',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      business: 'Startup Founder',
      content: 'So much better than free credit reports. Having all three bureaus in one place saved me hours of work.',
      rating: 5
    },
    {
      name: 'James Wilson',
      business: 'Freelancer',
      content: 'The funding eligibility section was a game-changer. Knew exactly which lenders to approach based on my report.',
      rating: 5
    }
  ];

  const reportOptions = [
    {
      type: 'free',
      title: 'Free Tri-Merge Report',
      price: 'Free',
      description: 'Basic 3-bureau credit report with funding eligibility assessment',
      features: [
        '3-bureau credit report',
        'Basic credit scores',
        'Funding eligibility check',
        'One-time access',
        'Email support'
      ],
      cta: 'Get Free Report',
      popular: false
    },
    {
      type: 'premium',
      title: 'Premium Tri-Merge Report',
      price: '$7',
      description: 'Enhanced report with monitoring and expert analysis',
      features: [
        '3-bureau credit report',
        'Detailed score analysis',
        '30-day credit monitoring',
        'Funding optimization tips',
        'Priority support access',
        'Credit improvement plan'
      ],
      cta: 'Get Premium Report',
      popular: true
    }
  ];

  const whyImportant = [
    {
      title: 'Lender Requirement',
      description: 'Most business lenders require a tri-merge report for funding applications'
    },
    {
      title: 'Complete Picture',
      description: 'See your credit standing across all three bureaus, not just one'
    },
    {
      title: 'Error Detection',
      description: 'Identify and dispute errors that could be hurting your credit score'
    },
    {
      title: 'Funding Strategy',
      description: 'Understand exactly what lenders see when reviewing your application'
    }
  ];

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
                <FileText className="w-4 h-4 mr-2" />
                Required for Funding
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Tri-Merge Credit Report
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Get your comprehensive 3-bureau credit report instantly. Required by most lenders for business funding applications.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-yellow-800 mb-2">📋 Funding Requirement</h3>
                <p className="text-yellow-700 text-sm">
                  Most business lenders require a tri-merge credit report (showing data from all 3 bureaus) to process your funding application.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Data from Equifax, Experian, and TransUnion</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Required for most funding applications</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Instant access after verification</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              {/* Option Selector */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Choose Your Report</h3>
                
                <div className="space-y-4 mb-6">
                  {reportOptions.map((option, index) => (
                    <div
                      key={option.type}
                      className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-200 ${
                        selectedOption === option.type
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      } ${option.popular ? 'relative' : ''}`}
                      onClick={() => setSelectedOption(option.type)}
                    >
                      {option.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                            Most Popular
                          </span>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-gray-900">{option.title}</h4>
                        <div className="text-2xl font-bold text-gray-900">{option.price}</div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                      
                      <ul className="space-y-2">
                        {option.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleGetReport}
                  disabled={isPurchasing}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isPurchasing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>
                        {selectedOption === 'free' ? 'Get Free Report' : 'Get Premium Report - $7'}
                      </span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center space-x-4 mt-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Lock className="w-4 h-4 mr-1" />
                    Secure & Encrypted
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Instant Access
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Important Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why You Need a Tri-Merge Report</h2>
            <p className="text-xl text-gray-600">Understanding your complete credit picture is essential for funding success</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyImportant.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-blue-50 rounded-2xl"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What's In Your Report</h2>
            <p className="text-xl text-gray-600">Comprehensive credit insights to help you secure funding</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">See how entrepreneurs used their tri-merge reports to secure funding</p>
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
            <FileText className="w-16 h-16 text-cyan-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Get Your Tri-Merge Report Now</h2>
            <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
              Don't let missing documentation delay your funding. Get your required tri-merge report today.
            </p>
            
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {reportOptions.map((option, index) => (
                  <div
                    key={option.type}
                    className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-200 ${
                      selectedOption === option.type
                        ? 'border-white bg-white bg-opacity-20'
                        : 'border-white border-opacity-30 hover:border-opacity-50'
                    }`}
                    onClick={() => setSelectedOption(option.type)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold">{option.title}</h4>
                      <div className="text-2xl font-bold">{option.price}</div>
                    </div>
                    <ul className="space-y-2 text-sm text-blue-100">
                      {option.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-300 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <button
                onClick={handleGetReport}
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
                    <span>
                      {selectedOption === 'free' ? 'Get Free Report' : 'Get Premium Report - $7'}
                    </span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-blue-100 text-sm">
              <div className="flex items-center justify-center">
                <Shield className="w-5 h-5 mr-2" />
                Bank-Level Security
              </div>
              <div className="flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Instant Access
              </div>
              <div className="flex items-center justify-center">
                <Award className="w-5 h-5 mr-2" />
                Lender Approved
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}