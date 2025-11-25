'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, Calendar, Award, DollarSign, Building, Users, Zap } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Marcus T.',
      location: 'Dallas, TX',
      business: 'Construction Company',
      quote: 'After being denied by 3 banks, ScoreUp RiseUp got me $250K in business funding in 30 days! The capital helped me buy new equipment and hire 3 more crew members. My business has grown 200% in 6 months.',
      fundingAmount: '$250,000',
      timeFrame: '30 days',
      rating: 5,
      beforeStatus: 'Multiple Denials',
      afterStatus: 'Fully Funded'
    },
    {
      name: 'Jessica L.',
      location: 'Miami, FL',
      business: 'E-commerce Store',
      quote: 'I needed $150K to scale my inventory but had bad credit from my divorce. ScoreUp fixed my credit AND got me funded. Now I\'m shipping 500+ orders monthly and just hired my first employees.',
      fundingAmount: '$150,000',
      timeFrame: '45 days',
      rating: 5,
      beforeStatus: 'Bad Credit',
      afterStatus: 'Business Growing'
    },
    {
      name: 'Robert K.',
      location: 'Chicago, IL',
      business: 'Food Truck Business',
      quote: 'The Skool community connected me with investors and the funding process was seamless. Got $75K to launch my second food truck. The networking alone was worth the investment!',
      fundingAmount: '$75,000',
      timeFrame: '25 days',
      rating: 5,
      beforeStatus: 'Startup Mode',
      afterStatus: 'Expanding'
    },
    {
      name: 'Sarah M.',
      location: 'Atlanta, GA',
      business: 'Consulting Firm',
      quote: 'As a new business with no credit history, I thought funding was impossible. ScoreUp matched me with startup-friendly lenders and I got $100K to build my team and office.',
      fundingAmount: '$100,000',
      timeFrame: '35 days',
      rating: 5,
      beforeStatus: 'No Business Credit',
      afterStatus: 'Team Hired'
    },
    {
      name: 'David P.',
      location: 'Phoenix, AZ',
      business: 'Tech Startup',
      quote: 'The $7 starter pack showed me exactly what I needed to fix. I upgraded to the Pro package and got $500K in funding 60 days later. Best ROI ever!',
      fundingAmount: '$500,000',
      timeFrame: '60 days',
      rating: 5,
      beforeStatus: 'Credit Issues',
      afterStatus: 'Series A Ready'
    },
    {
      name: 'Michelle J.',
      location: 'Seattle, WA',
      business: 'Boutique Agency',
      quote: 'Traditional banks wanted 2 years of tax returns. ScoreUp found me alternative lenders who understood startups. $80K helped me secure our first major clients.',
      fundingAmount: '$80,000',
      timeFrame: '28 days',
      rating: 5,
      beforeStatus: 'No Track Record',
      afterStatus: 'Profitable'
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

  const stats = [
    { number: '$50M+', label: 'Total Funding Secured', icon: DollarSign },
    { number: '5,000+', label: 'Businesses Funded', icon: Building },
    { number: '90%+', label: 'Approval Rate', icon: TrendingUp },
    { number: '30 Days', label: 'Average Funding Time', icon: Zap }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white px-6">
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
            Real Businesses, Real Funding Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See how thousands of businesses have accessed capital 
            and achieved growth through our funding network.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <IconComponent className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:border-blue-100"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-blue-600 opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Funding Achievement */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-4 mb-4 border border-green-100 group-hover:border-green-200 transition-colors">
                <div className="text-center mb-3">
                  <div className="text-xs text-gray-500 mb-1">Funding Secured</div>
                  <div className="text-2xl font-bold text-green-600">{testimonial.fundingAmount}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">Before</div>
                    <div className="text-sm font-semibold text-red-500">{testimonial.beforeStatus}</div>
                  </div>
                  <TrendingUp className="w-6 h-6 text-green-500" />
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">After</div>
                    <div className="text-sm font-semibold text-green-500">{testimonial.afterStatus}</div>
                  </div>
                </div>
              </div>

              {/* Client Info */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.business}</div>
                  <div className="text-xs text-gray-400">{testimonial.location}</div>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  {testimonial.timeFrame}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Stories by Industry */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">We Fund Businesses Across All Industries</h3>
            <p className="text-blue-100">From startups to established companies, we've helped them all access capital</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
              <Building className="w-8 h-8 text-green-300 mx-auto mb-3" />
              <div className="font-bold mb-2">Construction</div>
              <div className="text-blue-100 text-sm">$5M+ funded</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
              <Zap className="w-8 h-8 text-blue-300 mx-auto mb-3" />
              <div className="font-bold mb-2">Technology</div>
              <div className="text-blue-100 text-sm">$8M+ funded</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
              <Users className="w-8 h-8 text-purple-300 mx-auto mb-3" />
              <div className="font-bold mb-2">Services</div>
              <div className="text-blue-100 text-sm">$12M+ funded</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
              <DollarSign className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
              <div className="font-bold mb-2">Retail</div>
              <div className="text-blue-100 text-sm">$6M+ funded</div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Businesses Trust ScoreUp RiseUp</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <div className="text-lg font-semibold mb-2">100+ Lender Network</div>
              <div className="text-gray-600 text-sm">Access to banks, credit unions, and alternative lenders</div>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-12 h-12 text-yellow-500 mb-4" />
              <div className="text-lg font-semibold mb-2">4.9/5 Rating</div>
              <div className="text-gray-600 text-sm">Based on 2,000+ business reviews</div>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
              <div className="text-lg font-semibold mb-2">90%+ Success Rate</div>
              <div className="text-gray-600 text-sm">For qualified funding applications</div>
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
            <h3 className="text-2xl font-bold mb-4">Ready to Join These Success Stories?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get matched with 5-10 lenders from our network of 100+ and access the capital your business needs to grow.
            </p>
            <Link href="/quiz">
            <button 
              onClick={() => document.getElementById('qualification-quiz')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 font-bold text-lg py-4 px-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Check My Funding Eligibility
            </button></Link>
            <div className="flex items-center justify-center mt-6 space-x-8 text-blue-100 text-sm">
              <div className="flex items-center">
                <DollarSign className="w-4 h-4 mr-2" />
                $50K - $500K Available
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                30-Day Funding
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                100+ Lenders
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}