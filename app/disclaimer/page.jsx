// app/legal/no-doc-loans-disclaimer/page.jsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  AlertTriangle,
  FileText,
  Scale,
  Clock,
  DollarSign,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  XCircle,
  Building,
  CreditCard,
  Users,
  Target
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function NoDocLoansDisclaimer() {
  const router = useRouter();
  const [currentSection, setCurrentSection] = useState('overview');

  const navigationSections = [
    { id: 'overview', label: 'Overview', icon: Building },
    { id: 'types', label: 'Loan Types', icon: CreditCard },
    { id: 'pros-cons', label: 'Pros & Cons', icon: Scale },
    { id: 'risks', label: 'Key Risks', icon: AlertTriangle },
    { id: 'disclaimer', label: 'Legal Disclaimer', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-10 h-10 text-blue-300 mr-3" />
              <h1 className="text-3xl lg:text-4xl font-bold">No-Doc Business Loans Disclosure</h1>
            </div>
            <p className="text-blue-200 text-lg max-w-3xl mx-auto">
              Important Legal Disclosures & Risk Information Regarding No-Documentation Business Financing
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Page Navigation
              </h3>
              <nav className="space-y-2">
                {navigationSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setCurrentSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center ${
                      currentSection === section.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <section.icon className="w-4 h-4 mr-3" />
                    {section.label}
                  </button>
                ))}
              </nav>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center text-red-600 mb-2">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Important Notice</span>
                </div>
                <p className="text-sm text-gray-600">
                  This information is for educational purposes only and does not constitute financial or legal advice.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              {/* Overview Section */}
              {currentSection === 'overview' && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Building className="w-6 h-6 mr-3 text-blue-600" />
                    Understanding No-Doc Business Loans
                  </h2>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">What Are No-Doc Business Loans?</h3>
                    <p className="text-gray-700 mb-4">
                      A "no-doc" (no-documentation) business loan refers to a financing option that requires minimal paperwork compared to traditional business loans. While termed "no-documentation," these loans typically still require basic items such as:
                    </p>
                    <ul className="space-y-3 mb-6">
                      {[
                        'Business identification and ownership verification',
                        'Recent bank statements (typically 3-6 months)',
                        'Personal and/or business credit score checks',
                        'Proof of revenue or sales activity'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">How They Work</h3>
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                      <div className="grid md:grid-cols-3 gap-6">
                        {[
                          {
                            title: 'Streamlined Process',
                            description: 'Extensive financial vetting is skipped in favor of alternative criteria',
                            icon: Clock
                          },
                          {
                            title: 'Primary Providers',
                            description: 'Alternative/online lenders (traditional banks typically do not offer these)',
                            icon: Users
                          },
                          {
                            title: 'Speed of Funding',
                            description: 'Faster approval and funding, sometimes within 24-72 hours',
                            icon: TrendingUp
                          }
                        ].map((item, index) => (
                          <div key={index} className="text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                              <item.icon className="w-6 h-6 text-blue-600" />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Loan Types Section */}
              {currentSection === 'types' && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <CreditCard className="w-6 h-6 mr-3 text-blue-600" />
                    Common Types of No-Doc Business Loans
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {[
                      {
                        type: 'Merchant Cash Advances (MCA)',
                        description: 'Upfront lump sum in exchange for a percentage of future credit/debit card sales',
                        keyFeatures: ['Daily/weekly repayments', 'Based on sales volume', 'Flexible repayment amounts'],
                        riskLevel: 'High'
                      },
                      {
                        type: 'Invoice Financing',
                        description: 'Advance on unpaid customer invoices, using them as collateral',
                        keyFeatures: ['Invoice-based funding', 'Quick access to cash', 'Customer-dependent'],
                        riskLevel: 'Medium'
                      },
                      {
                        type: 'Short-Term Loans',
                        description: 'Lump sum loan with fixed repayment schedule (months to 2 years)',
                        keyFeatures: ['Fixed payments', 'Quick funding', 'Higher interest rates'],
                        riskLevel: 'Medium-High'
                      },
                      {
                        type: 'Business Lines of Credit',
                        description: 'Draw funds as needed up to a set limit, pay interest only on amount used',
                        keyFeatures: ['Flexible access', 'Revolving credit', 'Variable interest'],
                        riskLevel: 'Medium'
                      },
                      {
                        type: 'Equipment Financing',
                        description: 'Loan specifically for equipment purchases, using equipment as collateral',
                        keyFeatures: ['Asset-backed', 'Specific use case', 'Equipment as security'],
                        riskLevel: 'Low-Medium'
                      }
                    ].map((loan, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-lg font-semibold text-gray-900">{loan.type}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            loan.riskLevel === 'High' ? 'bg-red-100 text-red-800' :
                            loan.riskLevel === 'Medium-High' ? 'bg-orange-100 text-orange-800' :
                            loan.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            Risk: {loan.riskLevel}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-4">{loan.description}</p>
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-gray-900">Key Features:</p>
                          <ul className="space-y-1">
                            {loan.keyFeatures.map((feature, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-start">
                                <ArrowRight className="w-3 h-3 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Pros & Cons Section */}
              {currentSection === 'pros-cons' && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Scale className="w-6 h-6 mr-3 text-blue-600" />
                    Advantages vs. Disadvantages
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Pros */}
                    <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                      <div className="flex items-center mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                        <h3 className="text-xl font-bold text-gray-900">Advantages</h3>
                      </div>
                      <div className="space-y-4">
                        {[
                          {
                            title: 'Fast Access to Capital',
                            description: 'Approval and funding can occur quickly (same day to few business days)'
                          },
                          {
                            title: 'Minimal Paperwork',
                            description: 'Simplified application process saves time and administrative effort'
                          },
                          {
                            title: 'Flexible Qualification',
                            description: 'Options for startups, self-employed, or those with inconsistent income or lower credit scores'
                          },
                          {
                            title: 'Less Financial Scrutiny',
                            description: 'Focus on current cash flow or collateral rather than extensive financial history'
                          }
                        ].map((pro, index) => (
                          <div key={index} className="pb-4 border-b border-green-200 last:border-0 last:pb-0">
                            <h4 className="font-semibold text-gray-900 mb-2">{pro.title}</h4>
                            <p className="text-gray-700 text-sm">{pro.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Cons */}
                    <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                      <div className="flex items-center mb-6">
                        <XCircle className="w-8 h-8 text-red-600 mr-3" />
                        <h3 className="text-xl font-bold text-gray-900">Disadvantages</h3>
                      </div>
                      <div className="space-y-4">
                        {[
                          {
                            title: 'Higher Interest Rates & Fees',
                            description: 'Typically more expensive than traditional loans due to higher lender risk'
                          },
                          {
                            title: 'Shorter Repayment Terms',
                            description: 'Often require repayment within months to 2 years'
                          },
                          {
                            title: 'Lower Loan Amounts',
                            description: 'Generally smaller funding amounts compared to traditional loans'
                          },
                          {
                            title: 'Potential for Debt Cycles',
                            description: 'High costs and frequent payments can strain cash flow'
                          }
                        ].map((con, index) => (
                          <div key={index} className="pb-4 border-b border-red-200 last:border-0 last:pb-0">
                            <h4 className="font-semibold text-gray-900 mb-2">{con.title}</h4>
                            <p className="text-gray-700 text-sm">{con.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Risks Section */}
              {currentSection === 'risks' && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <AlertTriangle className="w-6 h-6 mr-3 text-red-600" />
                    Key Risks & Considerations
                  </h2>
                  
                  <div className="space-y-6">
                    {[
                      {
                        risk: 'High Cost of Capital',
                        description: 'APR can exceed 30-100%+, significantly higher than traditional bank loans',
                        mitigation: 'Calculate total cost of borrowing before committing; explore all alternatives'
                      },
                      {
                        risk: 'Aggressive Repayment Terms',
                        description: 'Daily/weekly payments can strain cash flow, especially for seasonal businesses',
                        mitigation: 'Ensure you can handle frequent payments even during slow periods'
                      },
                      {
                        risk: 'Lack of Regulatory Oversight',
                        description: 'Alternative lenders may have less regulatory scrutiny than traditional banks',
                        mitigation: 'Research lender reputation and read all contract terms carefully'
                      },
                      {
                        risk: 'Personal Guarantee Requirements',
                        description: 'Many require personal guarantees, putting personal assets at risk',
                        mitigation: 'Understand personal liability before signing; consult legal counsel'
                      },
                      {
                        risk: 'Potential for Predatory Practices',
                        description: 'Some lenders target financially distressed businesses with unfair terms',
                        mitigation: 'Be wary of pressure tactics; get multiple quotes'
                      }
                    ].map((riskItem, index) => (
                      <div key={index} className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                        <div className="flex items-start">
                          <AlertTriangle className="w-6 h-6 text-yellow-600 mr-4 mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{riskItem.risk}</h3>
                            <p className="text-gray-700 mb-4">{riskItem.description}</p>
                            <div className="bg-white rounded-lg p-4 border border-yellow-300">
                              <p className="text-sm font-medium text-gray-900 mb-2">Risk Mitigation:</p>
                              <p className="text-gray-700">{riskItem.mitigation}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Legal Disclaimer Section */}
              {currentSection === 'disclaimer' && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Shield className="w-6 h-6 mr-3 text-gray-700" />
                    Legal Disclaimers & Important Notices
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="bg-red-50 rounded-xl p-6 border-2 border-red-300">
                      <div className="flex items-center mb-4">
                        <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                        <h3 className="text-xl font-bold text-gray-900">Critical Legal Disclaimer</h3>
                      </div>
                      <p className="text-gray-900 font-medium mb-4">
                        This information is provided for EDUCATIONAL PURPOSES ONLY and does NOT constitute financial, legal, or investment advice.
                      </p>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                          ScoreUpriseUp is NOT a lender, financial advisor, or legal counsel
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                          We do NOT recommend specific loan products or lenders
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                          Loan terms, rates, and availability vary by lender and individual circumstances
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Required Due Diligence</h3>
                      <p className="text-gray-700 mb-4">
                        Before pursuing any business financing option, we strongly advise:
                      </p>
                      <ol className="space-y-4 list-decimal pl-5">
                        {[
                          'Consult with qualified financial advisors, accountants, and legal counsel',
                          'Review all loan documentation thoroughly before signing',
                          'Compare multiple lending options and understand total cost of borrowing',
                          'Assess your ability to repay under worst-case scenarios',
                          'Verify lender credentials and check for complaints with the Better Business Bureau'
                        ].map((item, index) => (
                          <li key={index} className="text-gray-700">
                            {item}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="bg-gray-100 rounded-xl p-6 border border-gray-300">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                      <p className="text-gray-700 mb-4">
                        For questions about this disclosure or if you believe you have encountered predatory lending practices:
                      </p>
                      <ul className="space-y-2">
                        <li className="text-gray-700">
                          <span className="font-medium">Consumer Financial Protection Bureau (CFPB):</span> www.consumerfinance.gov
                        </li>
                        <li className="text-gray-700">
                          <span className="font-medium">Better Business Bureau (BBB):</span> www.bbb.org
                        </li>
                        <li className="text-gray-700">
                          <span className="font-medium">State Banking Regulator:</span> Contact your state's banking or financial services department
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900 text-white rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-4">Acceptance of Terms</h3>
                      <p className="mb-4 text-gray-300">
                        By accessing our services and educational materials, you acknowledge that you have read, understood, and agree to these disclosures.
                      </p>
                      <p className="text-sm text-gray-400">
                        Last Updated: {new Date().toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Navigation Footer */}
            <div className="mt-8 flex justify-between">
              <button
                onClick={() => {
                  const currentIndex = navigationSections.findIndex(s => s.id === currentSection);
                  if (currentIndex > 0) {
                    setCurrentSection(navigationSections[currentIndex - 1].id);
                  }
                }}
                disabled={currentSection === 'overview'}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
              >
                Previous Section
              </button>
              <button
                onClick={() => {
                  const currentIndex = navigationSections.findIndex(s => s.id === currentSection);
                  if (currentIndex < navigationSections.length - 1) {
                    setCurrentSection(navigationSections[currentIndex + 1].id);
                  }
                }}
                disabled={currentSection === 'disclaimer'}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
              >
                Next Section
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-2">
            © {new Date().getFullYear()} ScoreUpriseUp. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            This information is for educational purposes only and does not constitute financial or legal advice.
          </p>
          <button
            onClick={() => router.push('/')}
            className="mt-6 inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors"
          >
            Return to Home
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </footer>
    </div>
  );
}