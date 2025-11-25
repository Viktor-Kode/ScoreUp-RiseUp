'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, ArrowRight, DollarSign, Clock, Users, TrendingUp } from 'lucide-react';

export default function ProblemSolution() {
  const problems = [
    'Denied for business loans and funding repeatedly',
    'Need capital to grow but stuck with bad credit or no credit history',
    'Complex lender requirements and overwhelming paperwork',
    'Missing growth opportunities without access to funding',
    'Wasting time applying to lenders who don\'t work with your situation'
  ]

  const solutions = [
    'Access to 100+ alternative lenders who work with challenged credit',
    'Expert matching with funding programs that fit your specific business',
    'Streamlined application process with professional guidance',
    'Get pre-qualified for $50K-$500K in business funding',
    'Fast approval process with funding in as little as 30 days'
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
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          The Business Funding Struggle Is Real.
          <span className="block text-blue-600 mt-2">We Have The Solution.</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Thousands of business owners face funding challenges every day. 
          Discover how our network of 100+ lenders can unlock your growth potential.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Problems Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 shadow-xl border border-red-100"
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">The Funding Roadblocks</h3>
              <p className="text-red-600 font-semibold">What's Blocking Your Growth?</p>
            </div>
          </div>

          <ul className="space-y-4">
            {problems.map((problem, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-3 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-gray-700 font-medium">{problem}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Solutions Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-xl border border-green-100"
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">The ScoreUp RiseUp Advantage</h3>
              <p className="text-green-600 font-semibold">Your Path to Business Funding</p>
            </div>
          </div>

          <ul className="space-y-4">
            {solutions.map((solution, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-gray-700 font-medium">{solution}</span>
              </motion.li>
            ))}
          </ul>

          {/* CTA Card */}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center"
          >
            <h4 className="text-xl font-bold mb-2">Ready to Get Funded?</h4>
            <p className="mb-4 text-blue-100">Join thousands of businesses who've unlocked growth capital</p>
            <Link href="/quiz">
            <button 
              onClick={() => document.getElementById('qualification-quiz')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors inline-flex items-center group"
            >
              Check My Funding Eligibility
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Funding Results Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <DollarSign className="w-8 h-8 text-green-500 mx-auto mb-3" />
          <div className="text-3xl font-bold text-green-600 mb-2">$50K-$500K</div>
          <div className="text-gray-600 font-medium">Funding Range</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />
          <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
          <div className="text-gray-600 font-medium">Lender Network</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <Clock className="w-8 h-8 text-purple-500 mx-auto mb-3" />
          <div className="text-3xl font-bold text-purple-600 mb-2">30 Days</div>
          <div className="text-gray-600 font-medium">Average Funding Time</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <TrendingUp className="w-8 h-8 text-orange-500 mx-auto mb-3" />
          <div className="text-3xl font-bold text-orange-600 mb-2">90%+</div>
          <div className="text-gray-600 font-medium">Approval Rate</div>
        </div>
      </motion.div>

      {/* Qualification Requirements */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Who Typically Qualifies for Funding</h3>
          <p className="text-gray-600">Even with these challenges, you may still qualify</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="text-sm text-gray-500 mb-1">Credit Score</div>
            <div className="text-lg font-bold text-gray-900">500+</div>
            <div className="text-xs text-green-600">Minimum Required</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="text-sm text-gray-500 mb-1">Time in Business</div>
            <div className="text-lg font-bold text-gray-900">3+ Months</div>
            <div className="text-xs text-green-600">Startups Welcome</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="text-sm text-gray-500 mb-1">Monthly Revenue</div>
            <div className="text-lg font-bold text-gray-900">$5K+</div>
            <div className="text-xs text-green-600">Minimum</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="text-sm text-gray-500 mb-1">Funding Use</div>
            <div className="text-lg font-bold text-gray-900">Any Business Need</div>
            <div className="text-xs text-green-600">Equipment, Growth, etc.</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}