// app/prequalification-nodoc/page.jsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { CheckCircle, ArrowRight, Shield, Building, User, Mail, Phone, DollarSign, Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PrequalificationNoDoc() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    fundingAmount: '',
    useOfFunds: '',
    timeInBusiness: '',
    annualRevenue: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_renapht',
        'template_z1vr7ty',
        {
          to_email: 'your-email@scoreupriseup.com',
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          business_name: formData.businessName,
          business_type: formData.businessType,
          funding_amount: formData.fundingAmount,
          use_of_funds: formData.useOfFunds,
          time_in_business: formData.timeInBusiness,
          annual_revenue: formData.annualRevenue,
          application_type: 'No-Doc Funding Application',
          credit_tier: '700+',
          submission_date: new Date().toISOString(),
          message: `No-doc funding application from ${formData.fullName} (${formData.email})`
        },
        'SS2R3dMbKoMDjBayk'
      );

      router.push('/offers?type=nodoc');
    } catch (error) {
      console.error('Failed to submit application:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">No-Document Funding Application</h1>
            <p className="text-gray-600">
              Complete your application for fast, document-free funding approval.
            </p>
          </div>

          {/* Premium Status Alert */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6 mb-8">
            <div className="flex items-center mb-2">
              <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
              <span className="text-green-800 font-bold text-lg">Premium Qualification Status</span>
            </div>
            <p className="text-green-700">
              Based on your excellent credit score (700+), you qualify for our premium no-document funding program. 
              Get approved faster with minimal paperwork.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Name *</label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your Business LLC"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Business Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Type *</label>
                  <select
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select</option>
                    <option value="sole-proprietorship">Sole Proprietorship</option>
                    <option value="llc">LLC</option>
                    <option value="corporation">Corporation</option>
                    <option value="partnership">Partnership</option>
                    <option value="non-profit">Non-Profit</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time in Business *</label>
                  <select
                    name="timeInBusiness"
                    required
                    value={formData.timeInBusiness}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select</option>
                    <option value="0-6 months">0-6 months</option>
                    <option value="6-12 months">6-12 months</option>
                    <option value="1-2 years">1-2 years</option>
                    <option value="2+ years">2+ years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Annual Revenue *</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <select
                      name="annualRevenue"
                      required
                      value={formData.annualRevenue}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select</option>
                      <option value="0-50k">$0 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="500k+">$500,000+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Desired Funding Amount *</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      name="fundingAmount"
                      required
                      value={formData.fundingAmount}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="$50,000"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Funding Details */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Funding Details</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Use of Funds *</label>
                <select
                  name="useOfFunds"
                  required
                  value={formData.useOfFunds}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select</option>
                  <option value="equipment">Equipment Purchase</option>
                  <option value="inventory">Inventory</option>
                  <option value="marketing">Marketing & Advertising</option>
                  <option value="expansion">Business Expansion</option>
                  <option value="working-capital">Working Capital</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-3">🚀 No-Document Funding Benefits</h4>
              <ul className="text-blue-800 space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Faster approval process (24-48 hours)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  No bank statements or tax returns required
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Higher funding amounts available
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Lower interest rates for qualified applicants
                </li>
              </ul>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  <span>Submitting Application...</span>
                </>
              ) : (
                <>
                  <span>Submit No-Doc Application</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            {/* Trust Indicators */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
                <Shield className="w-4 h-4" />
                <span>Your information is secure and encrypted</span>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}