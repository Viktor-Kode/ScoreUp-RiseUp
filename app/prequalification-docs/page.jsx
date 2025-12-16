'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  FileText,
  Star,
  Clock,
  Zap,
  Award,
  TrendingUp
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PrequalificationDocs() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOffers, setShowOffers] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);

  // Fixed: Check URL params on client side only
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('submitted') === 'true') {
      setShowOffers(true);
    }
  }, []);

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
      // Using EmailJS directly in client (dynamic import to avoid SSR issues)
      const emailjs = (await import('@emailjs/browser')).default;
      
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
        application_type: 'Document-Based Funding Application',
        credit_tier: '680-699',
        qualification_status: 'Standard - Docs Required',
        submission_date: new Date().toLocaleDateString(),
        message: `STANDARD FUNDING APPLICATION: ${formData.fullName} - ${formData.businessName} - Documents Required`
      };

      await emailjs.send(
        'service_renapht',
        'template_z1vr7ty',
        templateParams,
        'SS2R3dMbKoMDjBayk'
      );

      // Update URL without reload
      const url = new URL(window.location.href);
      url.searchParams.set('submitted', 'true');
      window.history.pushState({}, '', url);
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
    
    if (!offer) return;
    
    if (offer.id === 'tri-merge') {
      window.open('https://myfreescorenow.com/enroll/?AID=ScoreUpRiseUp&PID=58125', '_blank');
      router.push('/thank-you/tri-merge-report?type=premium');
    } else if (offer.id === 'builder-kit') {
      router.push('/offers/builder-kit');
    } else if (offer.id === 'priority') {
      router.push('/offers/priority-funding');
    } else if (offer.id === 'consultation') {
      router.push('/offers/consultation');
    }
  };

  const standardOffers = [
    {
      id: 'tri-merge',
      title: 'Tri-Merge Credit Report',
      description: 'Required for funding application - get your comprehensive 3-bureau report',
      price: '$7',
      features: [
        'All 3 credit bureaus',
        'Instant access',
        'Required for funding',
        'Funding pre-approval'
      ],
      cta: 'Get Credit Report',
      popular: false,
      badge: 'Required'
    },
    {
      id: 'builder-kit',
      title: 'Business Credit Builder',
      description: 'Build your business credit to access better rates and no-doc funding',
      price: '$497',
      originalPrice: '$997',
      features: [
        'Business credit system',
        'Lender relationships',
        'Funding strategies',
        'Document templates',
        'Credit improvement guide'
      ],
      cta: 'Get Builder Kit',
      popular: true,
      badge: 'Recommended'
    },
    {
      id: 'priority',
      title: 'Priority Processing',
      description: 'Expedite your application and get funding decisions faster',
      price: '$197',
      features: [
        '72-hour funding decision',
        'Dedicated specialist',
        'Document review',
        'Lender matching',
        'Application optimization'
      ],
      cta: 'Get Priority Processing',
      popular: false,
      badge: 'Fast Track'
    },
    {
      id: 'consultation',
      title: 'Funding Strategy Session',
      description: '1-on-1 consultation to optimize your funding application',
      price: '$97',
      features: [
        '60-minute strategy call',
        'Document preparation review',
        'Lender matching advice',
        'Funding amount optimization',
        'Credit improvement plan'
      ],
      cta: 'Book Session',
      popular: false,
      badge: 'Advisory'
    }
  ];

  if (showOffers) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Funding Options Available!
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Based on your good credit score, you qualify for our standard funding programs with excellent terms
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-lg border-2 border-blue-500 p-6 mb-8 mx-auto max-w-4xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <FileText className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Document-Based Funding Approved! 🎉</h3>
                  <p className="text-gray-600">
                    You qualify for excellent funding terms with standard documentation requirements
                  </p>
                </div>
              </div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                680-699 Credit Tier
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8 max-w-4xl mx-auto"
          >
            <h4 className="font-bold text-yellow-800 mb-3">📋 Required for Funding:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <ul className="text-yellow-800 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Tri-merge credit report (all 3 bureaus)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  3-4 months business bank statements
                </li>
              </ul>
              <ul className="text-yellow-800 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Business tax returns (if applicable)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Business license & registration
                </li>
              </ul>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {standardOffers.map((offer, index) => (
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
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
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
                  className={`w-full py-3 px-6 rounded-lg font-bold text-white transition-all duration-200 ${
                    offer.popular 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-purple-600 hover:bg-purple-700'
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
            className="text-center"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Business Community</h3>
              <p className="text-gray-600 mb-6">
                Connect with other entrepreneurs, get funding tips, and access exclusive resources
              </p>
              <button
                onClick={() => window.open('https://skool.com/scoreupriseup', '_blank')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200"
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8"
        >
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Standard Funding Application</h1>
            <p className="text-gray-600 text-lg">
              Complete your application - our team will contact you to securely collect required documents.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <div className="flex items-center mb-3">
              <FileText className="w-6 h-6 text-blue-600 mr-2" />
              <span className="text-blue-800 font-bold text-lg">Document-Based Funding</span>
            </div>
            <p className="text-blue-700 mb-4">
              Based on your good credit score (680-699), you qualify for funding with standard documentation requirements. 
              Our team will contact you within 24 hours to securely collect your documents.
            </p>
            <div className="bg-white rounded-lg p-4 border border-blue-300">
              <h4 className="font-semibold text-blue-900 mb-2">📋 Required Documents:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <ul className="text-blue-800 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Tri-merge credit report
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    3-4 months bank statements
                  </li>
                </ul>
                <ul className="text-blue-800 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Business tax returns
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Business license
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form fields same as prequalification-nodoc */}
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

            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h4 className="font-semibold text-green-900 mb-3">📞 What Happens Next:</h4>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <ol className="text-green-800 space-y-3">
                  <li className="flex items-start">
                    <span className="font-bold mr-2 bg-green-200 rounded-full w-6 h-6 flex items-center justify-center">1</span>
                    Submit this application
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2 bg-green-200 rounded-full w-6 h-6 flex items-center justify-center">2</span>
                    Our team contacts you within 24 hours
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2 bg-green-200 rounded-full w-6 h-6 flex items-center justify-center">3</span>
                    Securely provide required documents
                  </li>
                </ol>
                <ol className="text-green-800 space-y-3">
                  <li className="flex items-start">
                    <span className="font-bold mr-2 bg-green-200 rounded-full w-6 h-6 flex items-center justify-center">4</span>
                    Get matched with lenders (48-72 hours)
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2 bg-green-200 rounded-full w-6 h-6 flex items-center justify-center">5</span>
                    Receive funding (1-2 weeks)
                  </li>
                </ol>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-blue-400 disabled:to-purple-400 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  <span>Submitting Application...</span>
                </>
              ) : (
                <>
                  <span>Submit Application & See Offers</span>
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