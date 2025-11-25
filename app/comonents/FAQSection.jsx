'use client';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle, Shield, Clock, DollarSign, Users, Building, Target, Zap, CheckCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How does the business funding process work?',
      answer: 'Our 4-step process is simple: 1) Complete our free 2-minute eligibility check, 2) Get matched with 5-10 lenders from our 100+ network, 3) We help you prepare and submit applications, 4) Receive funding in 30 days or less. Most qualified clients get $50K-$500K in business capital.',
      icon: DollarSign
    },
    {
      question: 'What are the minimum requirements to qualify for funding?',
      answer: 'We work with businesses of all types! Minimum requirements include: 500+ credit score, 3+ months in business, $5K+ monthly revenue, and no recent bankruptcies. Even if you don\'t meet all requirements, we have alternative solutions to help you get funded.',
      icon: Target
    },
    {
      question: 'How long does it take to get funded?',
      answer: 'Most qualified clients receive funding within 30 days. The process includes: 2-minute eligibility check (instant), lender matching (1-2 days), application preparation (3-5 days), and funding disbursement (2-3 weeks). We prioritize fast funding because we know your business needs capital quickly.',
      icon: Clock
    },
    {
      question: 'What types of business funding are available?',
      answer: 'We provide access to multiple funding options: Business term loans ($50K-$500K), lines of credit (flexible amounts), SBA loans (government-backed), equipment financing, merchant cash advances, and invoice factoring. We match you with the best options for your specific business needs.',
      icon: Building
    },
    {
      question: 'Will checking my eligibility affect my credit score?',
      answer: 'No! Our initial eligibility check is a soft pull that does not impact your credit score. We only proceed with credit checks when you choose to move forward with specific lenders, and we always get your permission first.',
      icon: Shield
    },
    {
      question: 'What if I don\'t qualify for funding right now?',
      answer: 'We have solutions for everyone! If you don\'t qualify for immediate funding, we offer credit repair packages starting at $7 and business credit building programs to help you qualify in the future. 85% of clients who start with our credit programs qualify for funding within 3-6 months.',
      icon: HelpCircle
    },
    {
      question: 'What\'s included in your different package levels?',
      answer: '$7: Credit education & DIY templates. $497: Full credit repair + Skool community access + funding preparation. $997: 1-on-1 coaching + advanced business strategies + priority funding access. Each package is designed to get you from where you are to where you want to be.',
      icon: DollarSign
    },
    {
      question: 'How does the Skool community help with business funding?',
      answer: 'Our Skool community provides exclusive access to: Live Q&A sessions with funding experts, networking with other business owners, advanced funding strategies, lender relationship building, and ongoing support. It\'s included with our $497 and $997 packages.',
      icon: Users
    },
    {
      question: 'What makes you different from traditional banks or loan brokers?',
      answer: 'We offer: 90%+ approval rate (vs 15-20% at banks), 30-day funding (vs 60-90 days at banks), work with 500+ credit scores (vs 700+ at banks), 100+ lender network (vs limited options with brokers), and we provide solutions for both qualified and non-qualified applicants.',
      icon: Zap
    },
    {
      question: 'Do you guarantee funding approval?',
      answer: 'While we cannot guarantee specific funding amounts (as lender decisions are final), we do guarantee our service. We offer a 30-day money-back satisfaction guarantee. 97% of qualified clients who complete our process receive funding, and we provide alternative paths for those who don\'t qualify immediately.',
      icon: CheckCircle
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-gray-50 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Funding Questions Answered
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get clear answers about our business funding process, eligibility, and how we help businesses access capital.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => {
            const IconComponent = faq.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-blue-200 transition-colors">
                      <IconComponent className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-gray-900 pr-8 group-hover:text-blue-600 transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 group-hover:text-blue-500 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="pl-14">
                          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="text-2xl font-bold text-green-600 mb-2">90%+</div>
            <div className="text-sm font-semibold text-gray-900">Approval Rate</div>
            <div className="text-xs text-gray-500">For qualified applicants</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="text-2xl font-bold text-blue-600 mb-2">30 Days</div>
            <div className="text-sm font-semibold text-gray-900">Average Funding</div>
            <div className="text-xs text-gray-500">From application to funds</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="text-2xl font-bold text-purple-600 mb-2">100+</div>
            <div className="text-sm font-semibold text-gray-900">Lender Network</div>
            <div className="text-xs text-gray-500">Alternative lenders</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="text-2xl font-bold text-orange-600 mb-2">5,000+</div>
            <div className="text-sm font-semibold text-gray-900">Businesses Funded</div>
            <div className="text-xs text-gray-500">Successful clients</div>
          </div>
        </motion.div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Funded?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses who have accessed capital through our network of 100+ lenders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quiz">
              <button 
                onClick={() => document.getElementById('qualification-quiz')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Check Funding Eligibility
              </button></Link>
              <a 
                href="https://calendly.com/scoreupriseup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-white text-white font-bold py-3 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                <Users className="w-4 h-4 mr-2" />
                Free Consultation
              </a>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-sm font-semibold text-gray-900">No Credit Impact</div>
            <div className="text-xs text-gray-500">Soft pull only</div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-sm font-semibold text-gray-900">30-Day Guarantee</div>
            <div className="text-xs text-gray-500">Money-back promise</div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <div className="text-sm font-semibold text-gray-900">5,000+ Clients</div>
            <div className="text-xs text-gray-500">Businesses served</div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <CheckCircle className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <div className="text-sm font-semibold text-gray-900">Expert Support</div>
            <div className="text-xs text-gray-500">Funding specialists</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}