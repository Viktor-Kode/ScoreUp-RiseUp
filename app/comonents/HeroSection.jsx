'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, Shield, Zap, Lock, Target, CheckCircle, TrendingUp, DollarSign, Users } from 'lucide-react';

export default function HeroSection() {
  const handleCTAClick = () => {
    // This will now link to the funding qualification quiz
    document.getElementById('qualification-quiz')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

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

  const blobVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div
        variants={blobVariants}
        animate="animate"
        className="absolute top-10 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70"
      />
      <motion.div
        variants={blobVariants}
        animate="animate"
        initial={{ scale: 0, rotate: 0 }}
        className="absolute top-10 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        style={{ animationDelay: '2s' }}
      />
      <motion.div
        variants={blobVariants}
        animate="animate"
        className="absolute bottom-10 left-1/2 w-72 h-72 bg-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        style={{ animationDelay: '4s' }}
      />
      
      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
      >
        {/* Trust Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20"
        >
          <div className="flex items-center space-x-2 text-sm">
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white font-semibold">5,000+ Businesses Funded</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Get <span className="text-yellow-400">$50K - $500K</span> Business Funding
          <span className="block text-3xl md:text-5xl lg:text-6xl">See If You Qualify in 2 Minutes</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Access Our Network of <span className="text-green-400 font-semibold">100+ Alternative Lenders</span> 
          {" "}— Even With Challenged Credit or Limited Business History
        </motion.p>

        {/* Key Benefits */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <DollarSign className="w-12 h-12 text-green-400 mb-4 mx-auto" />
            <h3 className="text-white font-bold text-lg mb-2">$50K - $500K Funding</h3>
            <p className="text-blue-100 text-sm">Access capital for growth, equipment, or expansion</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Zap className="w-12 h-12 text-yellow-400 mb-4 mx-auto" />
            <h3 className="text-white font-bold text-lg mb-2">Fast Approval</h3>
            <p className="text-blue-100 text-sm">Get pre-qualified in minutes, funded in 30 days</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Users className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
            <h3 className="text-white font-bold text-lg mb-2">All Credit Types</h3>
            <p className="text-blue-100 text-sm">Solutions for good credit, bad credit, and startups</p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="space-y-6"
        >
      
<Link href="/quiz">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors"
  >
    Check My Funding Eligibility - Free
  </motion.button>
</Link>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-200 text-sm"
          >
            <div className="flex items-center space-x-2">
              <Lock className="w-4 h-4" />
              <span>No Credit Impact</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>100+ Lender Network</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>90%+ Approval Rate</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Qualification Criteria Preview */}
        <motion.div
          variants={itemVariants}
          className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto"
        >
          <h4 className="text-white font-semibold mb-4 text-lg">Who Typically Qualifies:</h4>
          <div className="grid grid-cols-2 gap-4 text-sm text-blue-100">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span>500+ Credit Score</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span>3+ Months in Business</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span>$5K+ Monthly Revenue</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span>Startups Welcome</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center mx-auto">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}