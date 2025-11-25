'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Shield, 
  Zap, 
  Users, 
  TrendingUp, 
  Clock,
  CheckCircle,
  Building,
  Network,
  Target
} from 'lucide-react';


export default function BenefitsSection() {
  const benefits = [
    {
      icon: DollarSign,
      title: '$50K - $500K Funding Access',
      description: 'Get access to capital ranging from $50,000 to $500,000 for your business growth, equipment, or expansion needs.',
      stat: '$50K-$500K Range',
      color: 'green'
    },
    {
      icon: Network,
      title: '100+ Lender Network',
      description: 'Access our exclusive network of 100+ alternative lenders, including banks, credit unions, and private lenders.',
      stat: '100+ Lenders',
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'Fast Funding in 30 Days',
      description: 'Get pre-qualified in minutes and receive funding in as little as 30 days. No more waiting months for capital.',
      stat: '30 Day Funding',
      color: 'orange'
    },
    {
      icon: Users,
      title: 'Expert Funding Guidance',
      description: 'Work with our funding experts who understand lender requirements and can maximize your approval chances.',
      stat: '90%+ Approval Rate',
      color: 'purple'
    },
    {
      icon: Shield,
      title: 'All Credit Types Welcome',
      description: 'We work with businesses of all credit types - good credit, bad credit, startups, and established companies.',
      stat: '500+ FICO Accepted',
      color: 'emerald'
    },
    {
      icon: Building,
      title: 'Multiple Funding Options',
      description: 'Choose from business term loans, lines of credit, SBA loans, equipment financing, and more.',
      stat: '5+ Loan Types',
      color: 'indigo'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
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
      green: 'from-green-500 to-green-600',
      blue: 'from-blue-500 to-blue-600',
      orange: 'from-orange-500 to-orange-600',
      purple: 'from-purple-500 to-purple-600',
      emerald: 'from-emerald-500 to-emerald-600',
      indigo: 'from-indigo-500 to-indigo-600'
    };
    return colors[color] || colors.blue;
  };

  const getBorderColor = (color) => {
    const colors = {
      green: 'border-green-100',
      blue: 'border-blue-100',
      orange: 'border-orange-100',
      purple: 'border-purple-100',
      emerald: 'border-emerald-100',
      indigo: 'border-indigo-100'
    };
    return colors[color] || colors.blue;
  };

  const getTextColor = (color) => {
    const colors = {
      green: 'text-green-600',
      blue: 'text-blue-600',
      orange: 'text-orange-600',
      purple: 'text-purple-600',
      emerald: 'text-emerald-600',
      indigo: 'text-indigo-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-white to-gray-50 px-6">
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
            Why Choose ScoreUp RiseUp for Business Funding?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another loan broker. We're your strategic partners in accessing the capital 
            you need to grow your business, with proven results and unmatched support.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-50 hover:border-gray-100 group"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(benefit.color)} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Stat Badge */}
                <div className={`text-white inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${getColorClasses(benefit.color)} bg-opacity-10 ${getTextColor(benefit.color)} border ${getBorderColor(benefit.color)}`}>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {benefit.stat}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Funding vs Traditional Lenders Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">ScoreUp RiseUp vs Traditional Lenders</h3>
            <p className="text-blue-100 text-xl">Why we're the smarter choice for business funding</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
              <h4 className="text-xl font-bold mb-4 text-center">Traditional Banks</h4>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  <span>60-90 day approval process</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  <span>700+ credit score required</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  <span>2+ years in business needed</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  <span>15-20% approval rate</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm border-2 border-yellow-400">
              <h4 className="text-xl font-bold mb-4 text-center">ScoreUp RiseUp</h4>
              <ul className="space-y-3 text-white">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>30 day funding timeline</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>500+ credit score accepted</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>3+ months in business</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>90%+ approval rate</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Alternative Solutions for Non-Qualified */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Not Qualified for Funding? We Have Solutions</h3>
            <p className="text-gray-600">Our alternative packages help you build credit and qualify for future funding</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
              <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="text-xl font-bold text-gray-900 mb-2">Credit Builder</div>
              <div className="text-2xl font-bold text-green-600 mb-3">$7</div>
              <p className="text-gray-600 text-sm mb-4">Basic credit education and DIY templates</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors">
                Learn More
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-300 transform scale-105 shadow-lg">
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-xl font-bold text-gray-900 mb-2">Funding Ready</div>
              <div className="text-2xl font-bold text-blue-600 mb-3">$497</div>
              <p className="text-gray-600 text-sm mb-4">Credit repair + Business funding preparation</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
              <Building className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <div className="text-xl font-bold text-gray-900 mb-2">Business Elite</div>
              <div className="text-2xl font-bold text-purple-600 mb-3">$997</div>
              <p className="text-gray-600 text-sm mb-4">1-on-1 coaching + Advanced business strategies</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors">
                Upgrade Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Access Business Funding?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses who have unlocked growth capital through our network of 100+ lenders.
            </p>
            <Link href="/quiz">
            <button 
              onClick={() => document.getElementById('qualification-quiz')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 font-bold text-lg py-4 px-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Check My Funding Eligibility Now
            </button></Link>
            <div className="flex items-center justify-center mt-6 space-x-8 text-blue-100 text-sm">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                No Credit Impact
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                2-Minute Check
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2" />
                Instant Results
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}