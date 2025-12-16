'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  CheckCircle, 
  ArrowRight, 
  Shield, 
  Building, 
  User, 
  Mail, 
  Phone, 
  DollarSign, 
  Loader,
  Star,
  Clock,
  FileText,
  Award,
  Zap
} from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function PrequalificationNoDoc() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOffers, setShowOffers] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);

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

  // Fix: Convert searchParams.get() to string for comparison
  useEffect(() => {
    const submitted = searchParams?.get('submitted');
    if (submitted === 'true') {
      setShowOffers(true);
    }
  }, [searchParams]);

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
      // Fix: Added template_params object structure
      const templateParams = {
        to_email: 'travis@scoreupriseup.com',
        to_name: 'Travis',
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
        qualification_status: 'Premium',
        submission_date: new Date().toLocaleDateString(),
        message: `PREMIUM NO-DOC APPLICATION: ${formData.fullName} - ${formData.businessName}`
      };

      await emailjs.send(
        'service_renapht',
        'template_z1vr7ty',
        templateParams,
        'SS2R3dMbKoMDjBayk'
      );

      // Fix: Update URL with query parameter
      router.push('/prequalification-nodoc?submitted=true');
      setShowOffers(true);

    } catch (error) {
      console.error('Failed to submit application:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOfferSelect = (offer) => {
    setSelectedOffer(offer);
    
    // Fix: Added null check for offer
    if (!offer) return;
    
    if (offer.id === 'tri-merge') {
      window.open('https://myfreescorenow.com/enroll/?AID=ScoreUpRiseUp&PID=58125', '_blank');
      router.push('/thank-you/tri-merge-report?type=free');
    } else if (offer.id === 'builder-kit') {
      router.push('/offers/builder-kit');
    } else if (offer.id === 'priority') {
      router.push('/offers/priority-funding');
    }
  };

  const premiumOffers = [
    {
      id: 'tri-merge',
      title: 'Free Tri-Merge Credit Report',
      description: 'Get your comprehensive credit report to access no-document funding',
      price: 'Free',
      features: [
        '3-bureau credit report',
        'Instant access',
        'No credit card required',
        'Funding pre-approval'
      ],
      cta: 'Get Free Report',
      popular: false,
      badge: 'Required for Funding'
    },
    {
      id: 'builder-kit',
      title: 'Business Credit Builder Kit',
      description: 'Complete system to build business credit and access higher funding limits',
      price: '$497',
      originalPrice: '$997',
      features: [
        'Business credit blueprint',
        'Lender relationships',
        'Funding strategies',
        'Personal coach access',
        'Document templates'
      ],
      cta: 'Get Builder Kit',
      popular: true,
      badge: 'Most Popular'
    },
    {
      id: 'priority',
      title: 'Priority Funding Access',
      description: 'Expedited processing and premium lender network access',
      price: '$297',
      features: [
        '48-hour funding decision',
        'Premium lender network',
        'Dedicated funding specialist',
        'Rate negotiation service',
        'Document preparation help'
      ],
      cta: 'Get Priority Access',
      popular: false,
      badge: 'Fast Track'
    }
  ];

  // Fix: Check if showOffers is true before rendering offers
  if (showOffers) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Premium Funding Options Available!
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Based on your excellent credit score, you qualify for our highest-tier funding programs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-lg border-2 border-green-500 p-6 mb-8 mx-auto max-w-4xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Zap className="w-8 h-8 text-green-600" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">No-Document Funding Approved! 🎉</h3>
                  <p className="text-gray-600">
                    Skip the paperwork and get funded faster with your premium credit profile
                  </p>
                </div>
              </div>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                700+ Credit Tier
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {premiumOffers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg border-2 ${
                  offer.popular ? 'border-blue-500 relative' : 'border-gray-200'
                } p-6 hover:shadow-xl transition-all duration-300 flex flex-col h-full`}
              >
                {offer.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      {offer.badge}
                    </span>
                  </div>
                )}
                {!offer.popular && offer.badge && (
                  <div className="mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {offer.badge}
                    </span>
                  </div>
                )}

                <div className="text-center mb-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{offer.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{offer.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">{offer.price}</span>
                    {offer.originalPrice && (
                      <span className="text-lg text-gray-500 line-through ml-2">
                        {offer.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {offer.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleOfferSelect(offer)}
                  disabled={selectedOffer !== null}
                  className={`w-full py-4 px-6 rounded-lg font-bold text-white transition-all duration-200 ${
                    offer.popular 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-green-600 hover:bg-green-700'
                  } disabled:opacity-50 disabled:cursor-not-allowed mt-auto`}
                >
                  {selectedOffer?.id === offer.id ? (
                    <span className="flex items-center justify-center">
                      <Loader className="w-4 h-4 animate-spin mr-2" />
                      Processing...
                    </span>
                  ) : (
                    offer.cta
                  )}
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Join Our Exclusive Community</h3>
              <p className="text-purple-100 mb-6">
                Connect with other successful entrepreneurs and get ongoing support
              </p>
              <button
                onClick={() => window.open('https://skool.com/scoreupriseup', '_blank')}
                className="bg-white text-purple-600 hover:bg-purple-50 font-bold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Join Skool Community
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8"
        >
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Premium Funding Application</h1>
            <p className="text-gray-600 text-lg">
              Complete your application for exclusive no-document funding options.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6 mb-8">
            <div className="flex items-center mb-2">
              <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
              <span className="text-green-800 font-bold text-lg">Premium Qualification Status</span>
            </div>
            <p className="text-green-700">
              Based on your excellent credit score (700+), you qualify for our premium no-document funding program. 
              Get approved faster with minimal paperwork and access higher funding amounts.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
              <h4 className="font-semibold text-green-900 mb-3 text-lg">🚀 No-Document Funding Benefits</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-green-800 space-y-2">
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
                </ul>
                <ul className="text-blue-800 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Lower interest rates for qualified applicants
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Premium lender network access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Dedicated funding specialist
                  </li>
                </ul>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 disabled:from-green-400 disabled:to-blue-400 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  <span>Submitting Application...</span>
                </>
              ) : (
                <>
                  <span>Submit Premium Application</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

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