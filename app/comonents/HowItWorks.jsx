'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ClipboardCheck, Users, FileCheck, DollarSign, TrendingUp, Shield, Clock, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Free Funding Eligibility Check',
      description: 'Complete our quick 2-minute assessment to see if you qualify for business funding. No credit impact and instant results.',
      icon: ClipboardCheck,
      color: 'blue',
      details: [
        '2-minute online assessment',
        'No credit impact check',
        'Instant eligibility results',
        'Multiple lender criteria matching'
      ]
    },
    {
      number: '02',
      title: 'Get Matched with 5-10 Lenders',
      description: 'We analyze your business profile and connect you with 5-10 lenders who are most likely to approve your funding request.',
      icon: Users,
      color: 'green',
      details: [
        'Access to 100+ lender network',
        'Pre-vetted funding partners',
        'Best-fit program matching',
        'Higher approval probability'
      ]
    },
    {
      number: '03',
      title: 'Streamlined Application Process',
      description: 'We help you prepare and submit applications to multiple lenders simultaneously, maximizing your chances of approval.',
      icon: FileCheck,
      color: 'purple',
      details: [
        'Professional application preparation',
        'Multiple lender submissions',
        'Documentation assistance',
        'Application status tracking'
      ]
    },
    {
      number: '04',
      title: 'Get Funded & Grow Your Business',
      description: 'Receive funding in 30 days or less and start growing your business. Most clients get $50K-$500K in business capital.',
      icon: DollarSign,
      color: 'orange',
      details: [
        'Fast funding in 30 days or less',
        '$50K-$500K capital access',
        'Ongoing funding opportunities',
        'Business growth support'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Our Funding Process Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined 4-step process has helped thousands of businesses access the capital they need to grow. 
            Simple, transparent, and designed for success.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:border-blue-100"
              >
                <div className="flex items-start space-x-6">
                  {/* Number and Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 bg-gradient-to-r ${getColorClasses(step.color)} rounded-2xl flex flex-col items-center justify-center text-white relative group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-xs font-bold absolute -top-2 -left-2 bg-white text-gray-800 rounded-full w-6 h-6 flex items-center justify-center shadow-lg">
                        {step.number}
                      </span>
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Details List */}
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                          <div className={`w-2 h-2 bg-gradient-to-r ${getColorClasses(step.color)} rounded-full mr-3 flex-shrink-0`}></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Funding Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Funding Options Available</h3>
            <p className="text-blue-100">We help you access multiple types of business funding</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
              <DollarSign className="w-8 h-8 text-green-300 mx-auto mb-3" />
              <div className="font-bold mb-2">Business Term Loans</div>
              <div className="text-blue-100 text-sm">$50K - $500K</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
              <TrendingUp className="w-8 h-8 text-blue-300 mx-auto mb-3" />
              <div className="font-bold mb-2">Lines of Credit</div>
              <div className="text-blue-100 text-sm">Flexible access</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
              <Shield className="w-8 h-8 text-purple-300 mx-auto mb-3" />
              <div className="font-bold mb-2">SBA Loans</div>
              <div className="text-blue-100 text-sm">Government-backed</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
              <Clock className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
              <div className="font-bold mb-2">Equipment Financing</div>
              <div className="text-blue-100 text-sm">Asset-based funding</div>
            </div>
          </div>
        </motion.div>

        {/* Qualification Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Minimum Qualification Requirements</h3>
            <p className="text-gray-600">Even with these minimums, we have options for most businesses</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold text-lg">500+</span>
              </div>
              <div className="font-semibold text-gray-900">Credit Score</div>
              <div className="text-sm text-gray-500">Minimum FICO</div>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold text-lg">3+</span>
              </div>
              <div className="font-semibold text-gray-900">Months in Business</div>
              <div className="text-sm text-gray-500">Startups welcome</div>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold text-lg">$5K+</span>
              </div>
              <div className="font-semibold text-gray-900">Monthly Revenue</div>
              <div className="text-sm text-gray-500">Minimum average</div>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 font-bold text-lg">90%+</span>
              </div>
              <div className="font-semibold text-gray-900">Approval Rate</div>
              <div className="text-sm text-gray-500">For qualified applicants</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/quiz">
          <button 
            onClick={() => document.getElementById('qualification-quiz')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg py-4 px-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center group"
          >
            Check My Funding Eligibility Now
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button></Link>
          <p className="text-gray-500 mt-4 text-sm">
            Free assessment • No credit impact • 2-minute check
          </p>
        </motion.div>
      </div>
    </section>
  );
}