'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ArrowRight, CheckCircle, Star, Clock, Users, TrendingUp, Shield } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function QualificationQuiz() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      id: 1,
      question: "What's your current credit score range?",
      description: "This determines your funding eligibility and documentation requirements",
      type: "credit-score",
      options: [
        { 
          text: "Excellent (700+)", 
          value: "700-plus", 
          route: "prequal-nodoc",
          description: "Qualify for no-document funding options"
        },
        { 
          text: "Good (680-699)", 
          value: "680-699", 
          route: "prequal-docs",
          description: "Funding available with documentation"
        },
        { 
          text: "Needs Improvement (Below 680)", 
          value: "below-680", 
          route: "downsell",
          description: "Credit repair options available"
        }
      ]
    },
    {
      id: 2,
      question: "What's your average monthly business revenue?",
      description: "Helps determine your funding amount and terms",
      type: "revenue",
      options: [
        { 
          text: "Under $5,000", 
          value: "under-5k",
          description: "Startup and small business options"
        },
        { 
          text: "$5,000 - $15,000", 
          value: "5k-15k",
          description: "Growing business funding"
        },
        { 
          text: "$15,000 - $50,000", 
          value: "15k-50k",
          description: "Established business funding" 
        },
        { 
          text: "Over $50,000", 
          value: "over-50k",
          description: "Premium funding solutions"
        }
      ]
    },
    {
      id: 3,
      question: "Do you have 3-4 months of bank statements available?",
      description: "Required for most traditional funding applications",
      type: "statements",
      options: [
        { 
          text: "Yes, readily available", 
          value: "yes-statements",
          description: "Quick processing available"
        },
        { 
          text: "No, but I can get them", 
          value: "no-but-can-get",
          description: "May delay processing slightly"
        },
        { 
          text: "Not available", 
          value: "not-available",
          description: "Limited funding options"
        }
      ]
    },
    {
      id: 4,
      question: "Do you have a tri-merge credit report?",
      description: "Combines data from all three credit bureaus for accurate assessment",
      type: "credit-report",
      options: [
        { 
          text: "Yes, I have one ready", 
          value: "yes-report",
          description: "Expedited processing"
        },
        { 
          text: "No, but I can get one", 
          value: "no-but-can-get",
          description: "We can help you obtain one"
        },
        { 
          text: "What's a tri-merge report?", 
          value: "dont-know",
          description: "We'll guide you through the process"
        }
      ]
    },
    {
      id: 5,
      question: "What type of funding are you seeking?",
      description: "Helps match you with the right lenders and programs",
      type: "funding-type",
      options: [
        { 
          text: "Business Expansion & Growth", 
          value: "expansion",
          description: "Scale your operations"
        },
        { 
          text: "Equipment & Technology", 
          value: "equipment",
          description: "Purchase necessary equipment"
        },
        { 
          text: "Working Capital", 
          value: "working-capital",
          description: "Daily operational expenses"
        },
        { 
          text: "Marketing & Customer Acquisition", 
          value: "marketing",
          description: "Grow your customer base"
        },
        { 
          text: "Inventory Purchase", 
          value: "inventory",
          description: "Stock and supply chain"
        }
      ]
    }
  ];

  const handleAnswer = (questionId, answer, value, route, optionIndex) => {
    setSelectedOption(optionIndex);
    
    const newAnswers = {
      ...answers,
      [questionId]: { 
        answer, 
        value, 
        route,
        question: questions.find(q => q.id === questionId)?.question
      }
    };
    
    setAnswers(newAnswers);
    
    setTimeout(() => {
      setSelectedOption(null);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowLeadForm(true);
      }
    }, 400);
  };

  const determineUserTier = () => {
    const creditScore = answers[1]?.value;
    
    if (creditScore === '700-plus') {
      return {
        tier: 'premium',
        route: '/prequalification-nodoc',
        message: 'No Documentation Funding Available',
        color: 'green'
      };
    } else if (creditScore === '680-699') {
      return {
        tier: 'standard', 
        route: '/prequalification-docs',
        message: 'Documentation Required Funding',
        color: 'blue'
      };
    } else {
      return {
        tier: 'repair',
        route: '/downsell',
        message: 'Credit Improvement Path',
        color: 'orange'
      };
    }
  };

  const calculateFundingRange = () => {
    const revenue = answers[2]?.value;
    switch(revenue) {
      case 'under-5k': return '$5,000 - $20,000';
      case '5k-15k': return '$20,000 - $75,000';
      case '15k-50k': return '$75,000 - $250,000';
      case 'over-50k': return '$250,000 - $500,000+';
      default: return 'To be determined';
    }
  };

  const determineStatus = () => {
    const creditScore = answers[1]?.value;
    const statements = answers[3]?.value;
    const creditReport = answers[4]?.value;
    
    if (creditScore === '700-plus' && statements === 'yes-statements' && creditReport === 'yes-report') {
      return 'Express Approval - 24-48 Hours';
    } else if (creditScore === '680-699' && statements !== 'not-available') {
      return 'Standard Processing - 3-5 Business Days';
    } else if (creditScore === 'below-680' || statements === 'not-available') {
      return 'Needs Review - Credit Improvement Path';
    } else {
      return 'Under Review - Additional Info Required';
    }
  };

  const formatQuizAnswers = () => {
    return Object.entries(answers)
      .sort(([a], [b]) => parseInt(a) - parseInt(b))
      .map(([questionId, data]) => {
        return `${data.question}: ${data.answer}`;
      })
      .join('\n');
  };

  const calculateApprovalScore = () => {
    let score = 0;
    let maxScore = 100;
    
    Object.entries(answers).forEach(([questionId, data]) => {
      switch(questionId) {
        case '1': // Credit score
          if (data.value === '700-plus') score += 25;
          else if (data.value === '680-699') score += 18;
          else if (data.value === 'below-680') score += 8;
          break;
        case '2': // Revenue
          if (data.value === 'over-50k') score += 25;
          else if (data.value === '15k-50k') score += 18;
          else if (data.value === '5k-15k') score += 12;
          else if (data.value === 'under-5k') score += 6;
          break;
        case '3': // Bank statements
          if (data.value === 'yes-statements') score += 20;
          else if (data.value === 'no-but-can-get') score += 12;
          else if (data.value === 'not-available') score += 5;
          break;
        case '4': // Credit report
          if (data.value === 'yes-report') score += 20;
          else if (data.value === 'no-but-can-get') score += 10;
          else if (data.value === 'dont-know') score += 5;
          break;
        case '5': // Funding type
          score += 10; // All funding types are valid
          break;
      }
    });
    
    return score;
  };

  const getApprovalOdds = (score) => {
    if (score >= 80) return "Excellent (90%+)";
    if (score >= 65) return "Very Good (75-89%)";
    if (score >= 50) return "Good (60-74%)";
    if (score >= 35) return "Fair (40-59%)";
    return "Needs Improvement (<40%)";
  };

  const handleLeadSubmit = async (formData) => {
    setIsSubmitting(true);

    try {
      const userTier = determineUserTier();
      const fundingRange = calculateFundingRange();
      const status = determineStatus();
      const quizAnswers = formatQuizAnswers();
      const quizScore = calculateApprovalScore();
      const maxScore = 100;
      const approvalOdds = getApprovalOdds(quizScore);
      
      const leadData = {
        to_email: 'travis@scoreupriseup.com',
        to_name: 'Travis',
        
        // Contact Information - matches template
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        business_name: formData.businessName,
        
        // Qualification Results - matches template
        quiz_score: quizScore,
        max_score: maxScore,
        qualification_status: status,
        funding_range: fundingRange,
        approval_odds: approvalOdds,
        
        // Quiz Answers - matches template
        quiz_answers: quizAnswers,
        
        // Submission Date - matches template
        submission_date: new Date().toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      };

      console.log('Sending email with data:', leadData);

      await emailjs.send(
        'service_renapht',
        'template_z1vr7ty',
        leadData,
        'SS2R3dMbKoMDjBayk'
      );

      router.push(userTier.route);

    } catch (error) {
      console.error('Failed to submit:', error);
      console.error('Error details:', error.text || error.message);
      
      const userTier = determineUserTier();
      router.push(userTier.route);
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const LeadCaptureForm = () => {
    const userTier = determineUserTier();
    const fundingRange = calculateFundingRange();
    const status = determineStatus();
    const quizScore = calculateApprovalScore();
    const maxScore = 100;
    const approvalOdds = getApprovalOdds(quizScore);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8"
          >
            <div className={`text-center mb-6 p-4 rounded-xl bg-${userTier.color}-50 border border-${userTier.color}-200`}>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Qualification Complete!</h2>
              <p className="text-sm text-gray-600">
                Based on your answers, you qualify for: <strong>{userTier.message}</strong>
              </p>
            </div>
            
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                Your Funding Profile
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                  <span className="text-gray-600">Qualification Score</span>
                  <span className="font-bold text-blue-600">{quizScore}/{maxScore}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                  <span className="text-gray-600">Funding Range</span>
                  <span className="font-bold text-green-600">{fundingRange}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                  <span className="text-gray-600">Approval Odds</span>
                  <span className="font-bold text-purple-600">{approvalOdds}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                  <span className="text-gray-600">Processing Status</span>
                  <span className="font-bold text-orange-600">{status.split('-')[0]?.trim()}</span>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Get Your Personalized Funding Options
              </h3>
              <p className="text-gray-600 text-sm">
                Enter your details to access your custom funding recommendations
              </p>
            </div>
            
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              handleLeadSubmit({
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                businessName: formData.get('businessName')
              });
            }} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@yourbusiness.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Name *</label>
                <input
                  type="text"
                  name="businessName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Business LLC"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'See My Funding Options →'
                )}
              </button>
              
              <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-xs text-blue-700 text-center">
                  <strong>What happens next?</strong><br />
                  After submitting, you'll be redirected to your personalized funding options page. You'll also receive an email with your qualification results and next steps.
                </p>
              </div>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    );
  };

  if (showLeadForm) {
    return <LeadCaptureForm />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Business Funding Qualification
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Answer 5 quick questions to discover your best funding options
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-3">
            <span className="font-medium">Question {currentQuestion + 1} of {questions.length}</span>
            <span className="font-semibold">{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <motion.div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8"
          >
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {questions[currentQuestion].question}
              </h2>
              <p className="text-gray-600 text-lg">
                {questions[currentQuestion].description}
              </p>
            </div>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: selectedOption === null ? 1.02 : 1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(
                    questions[currentQuestion].id,
                    option.text,
                    option.value,
                    option.route,
                    index
                  )}
                  disabled={selectedOption !== null}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-200 ${
                    selectedOption === index
                      ? 'border-blue-500 bg-blue-50 shadow-md scale-105'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-25'
                  } ${selectedOption !== null && selectedOption !== index ? 'opacity-50' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-semibold text-gray-900">
                          {option.text}
                        </span>
                        {selectedOption === index ? (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                          >
                            <CheckCircle className="w-4 h-4 text-white" />
                          </motion.div>
                        ) : (
                          <ArrowRight className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                      {option.description && (
                        <p className="text-sm text-gray-600 text-left">
                          {option.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8"
        >
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-200">
            <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <div className="text-sm font-semibold text-gray-900">5,000+</div>
            <div className="text-xs text-gray-600">Funded Businesses</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-200">
            <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <div className="text-sm font-semibold text-gray-900">$50M+</div>
            <div className="text-xs text-gray-600">Capital Deployed</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-200 md:block hidden">
            <Shield className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <div className="text-sm font-semibold text-gray-900">Secure</div>
            <div className="text-xs text-gray-600">& Confidential</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}