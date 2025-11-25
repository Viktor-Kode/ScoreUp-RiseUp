'use client';

import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  ArrowRight,
  Shield,
  CheckCircle,
  Users,
  CreditCard,
  DollarSign,
  Building,
  TrendingUp,
  Zap
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    funding: [
      { name: 'Business Loans', href: '#how-it-works' },
      { name: 'Lines of Credit', href: '#services' },
      { name: 'SBA Loans', href: '#services' },
      { name: 'Equipment Financing', href: '#services' },
    ],
    solutions: [
      { name: 'Funding Eligibility', href: '#qualification-quiz' },
      { name: 'Credit Repair', href: '#solutions' },
      { name: 'Business Credit', href: '#solutions' },
      { name: 'Funding Preparation', href: '#solutions' },
    ],
    company: [
      { name: 'Success Stories', href: '#testimonials' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Contact', href: '#contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Disclaimer', href: '/disclaimer' },
      { name: 'Compliance', href: '/compliance' },
    ]
  };

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
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      {/* CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 py-12"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Access Business Funding?
          </h3>
          <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
            Join 5,000+ businesses who have unlocked growth capital through our network of 100+ lenders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('qualification-quiz')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Check Funding Eligibility
            </button>
            <a 
              href="https://calendly.com/scoreupriseup" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Funding Consultation
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">SR</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">ScoreUp RiseUp</h3>
                <p className="text-gray-400 text-sm">Business Funding Experts</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Helping businesses access $50K-$500K in funding through our network of 100+ lenders. 
              Fast approvals, competitive rates, and solutions for all credit types.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-3" />
                <a href="mailto:info@scoreupriseup.com">info@scoreupriseup.com</a>
              </div>
              <div className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 mr-3" />
                <a href="tel:816-438-3423">816-438-3423</a>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3" />
                <span>Nationwide Funding Services</span>
              </div>
            </div>
          </motion.div>

          {/* Funding Options */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">Funding Options</h4>
            <ul className="space-y-3">
              {footerLinks.funding.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">Business Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Community & Resources */}
            <div className="mt-8">
              <h5 className="text-sm font-semibold mb-4 text-gray-300 uppercase tracking-wider">
                Resources & Community
              </h5>
              <div className="space-y-2">
                <a 
                  href="https://www.skool.com/scoreupriseup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors group"
                >
                  <Users className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Skool Community
                </a>
                <a 
                  href="https://www.creditbuildercard.com/scoreupriseup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors group"
                >
                  <CreditCard className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Credit Builder Tools
                </a>
                <a 
                  href="#testimonials"
                  className="flex items-center text-gray-400 hover:text-white transition-colors group"
                >
                  <TrendingUp className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Success Stories
                </a>
              </div>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">Why Choose Us</h4>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <DollarSign className="w-8 h-8 text-green-400 mr-3" />
                <div>
                  <div className="font-semibold text-white">$50K-$500K Funding</div>
                  <div className="text-gray-400 text-sm">Capital Access Range</div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <Zap className="w-8 h-8 text-yellow-400 mr-3" />
                <div>
                  <div className="font-semibold text-white">30 Day Funding</div>
                  <div className="text-gray-400 text-sm">Fast Approval Process</div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <Building className="w-8 h-8 text-blue-400 mr-3" />
                <div>
                  <div className="font-semibold text-white">100+ Lenders</div>
                  <div className="text-gray-400 text-sm">Network Access</div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <CheckCircle className="w-8 h-8 text-purple-400 mr-3" />
                <div>
                  <div className="font-semibold text-white">90%+ Approval</div>
                  <div className="text-gray-400 text-sm">Success Rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Funding Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-2xl font-bold text-green-400 mb-2">$50M+</div>
            <div className="text-gray-300 text-sm">Total Funding Secured</div>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-2xl font-bold text-blue-400 mb-2">5,000+</div>
            <div className="text-gray-300 text-sm">Businesses Funded</div>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-2xl font-bold text-yellow-400 mb-2">100+</div>
            <div className="text-gray-300 text-sm">Lender Partners</div>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-2xl font-bold text-purple-400 mb-2">30 Days</div>
            <div className="text-gray-300 text-sm">Average Funding Time</div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} ScoreUp RiseUp. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              {footerLinks.legal.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Compliance Notice */}
            <div className="text-gray-500 text-xs text-center md:text-right max-w-md">
              *Individual results may vary. Funding amounts and approval subject to lender qualifications and creditworthiness.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}