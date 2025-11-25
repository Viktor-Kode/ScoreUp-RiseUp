// app/quiz/page.jsx
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Clock, 
  Mail, 
  Phone,
  User,
  Building,
  TrendingUp,
  Award,
  Zap,
  Shield,
  ChevronRight
} from 'lucide-react';

export default function ProfessionalQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  
  const [leadInfo, setLeadInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessName: ''
  });

  const questions = [
    {
      id: 1,
      question: "How long has your business been operating?",
      description: "Lenders prefer businesses with at least 6 months of history",
      options: [
        { text: "Less than 6 months", points: 1 },
        { text: "6-12 months", points: 3 },
        { text: "1+ years", points: 5 }
      ]
    },
    {
      id: 2,
      question: "What's your average monthly revenue?",
      description: "Higher revenue increases your funding potential",
      options: [
        { text: "Under $5,000", points: 1 },
        { text: "$5,000-$10,000", points: 3 },
        { text: "Over $10,000", points: 5 }
      ]
    },
    {
      id: 3,
      question: "What's your credit score range?",
      description: "We work with all credit types (500+ FICO accepted)",
      options: [
        { text: "Below 580", points: 1 },
        { text: "580-700", points: 3 },
        { text: "700+", points: 5 }
      ]
    },
    {
      id: 4,
      question: "What type of funding are you seeking?",
      description: "This helps us match you with the right lenders",
      options: [
        { text: "Business expansion", points: 4 },
        { text: "Equipment financing", points: 4 },
        { text: "Working capital", points: 3 },
        { text: "Startup funding", points: 2 }
      ]
    },
    {
      id: 5,
      question: "Have you applied for business funding before?",
      description: "Previous experience helps us understand your situation",
      options: [
        { text: "No, first time", points: 2 },
        { text: "Yes, was approved", points: 4 },
        { text: "Yes, was denied", points: 1 },
        { text: "Have existing loans", points: 3 }
      ]
    }
  ];

  const [answers, setAnswers] = useState([]);

  const handleAnswer = (questionId, questionText, answer, points, optionIndex) => {
    setSelectedOption(optionIndex);
    
    // Save answer
    setAnswers(prev => [...prev, {
      questionId,
      question: questionText,
      answer,
      points
    }]);
    
    setTimeout(() => {
      const newScore = score + points;
      setScore(newScore);
      setSelectedOption(null);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowLeadForm(true);
      }
    }, 400);
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // Prepare comprehensive lead data
      const leadData = {
        to_email: 'your-email@scoreupriseup.com',
        first_name: leadInfo.firstName,
        last_name: leadInfo.lastName,
        email: leadInfo.email,
        phone: leadInfo.phone,
        business_name: leadInfo.businessName,
        quiz_score: score,
        max_score: 25, // 5 questions * 5 max points
        qualification_status: score >= 15 ? 'Highly Qualified' : score >= 10 ? 'Qualified' : 'Needs Improvement',
        funding_range: score >= 15 ? '$100K-$500K' : score >= 10 ? '$50K-$250K' : 'Credit Building First',
        approval_odds: score >= 15 ? '90%+' : score >= 10 ? '75%+' : '50%',
        quiz_answers: JSON.stringify(answers),
        submission_date: new Date().toISOString()
      };

      await emailjs.send(
        'service_renapht',
        'template_z1vr7ty', 
        leadData,
        'SS2R3dMbKoMDjBayk'
      );

      setShowLeadForm(false);
      setShowResults(true);
    } catch (error) {
      console.error('Failed to send email:', error);
      setShowLeadForm(false);
      setShowResults(true);
    } finally {
      setIsSending(false);
    }
  };

  const handleLeadInfoChange = (field, value) => {
    setLeadInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Professional Lead Capture Form
  if (showLeadForm) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Progress */}
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-3">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Quiz Complete</span>
              <ChevronRight className="w-4 h-4" />
              <span className="font-semibold text-blue-600">Your Information</span>
              <ChevronRight className="w-4 h-4" />
              <span>Results</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '66%' }}></div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Complete Your Profile</h2>
              <p className="text-gray-600">
                Share your details to see personalized funding options
              </p>
            </div>
            
            <form onSubmit={handleLeadSubmit} className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      required
                      value={leadInfo.firstName}
                      onChange={(e) => handleLeadInfoChange('firstName', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    value={leadInfo.lastName}
                    onChange={(e) => handleLeadInfoChange('lastName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="email"
                    required
                    value={leadInfo.email}
                    onChange={(e) => handleLeadInfoChange('email', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="tel"
                    required
                    value={leadInfo.phone}
                    onChange={(e) => handleLeadInfoChange('phone', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Business Name
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    required
                    value={leadInfo.businessName}
                    onChange={(e) => handleLeadInfoChange('businessName', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Business LLC"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                {isSending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>See My Results</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
                <Shield className="w-4 h-4" />
                <span>Your information is secure and encrypted</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Professional Results Page
  if (showResults) {
    const getQualificationStatus = () => {
      if (score >= 15) return { status: "Highly Qualified", color: "green", funding: "$100K-$500K", odds: "90%+" };
      if (score >= 10) return { status: "Qualified", color: "blue", funding: "$50K-$250K", odds: "75%+" };
      return { status: "Needs Improvement", color: "orange", funding: "Credit Building First", odds: "50%" };
    };

    const qualification = getQualificationStatus();

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
              <div className={`inline-flex items-center px-4 py-2 rounded-full bg-${qualification.color}-50 border border-${qualification.color}-200 mb-4`}>
                <div className={`w-2 h-2 rounded-full bg-${qualification.color}-500 mr-2`}></div>
                <span className={`text-${qualification.color}-800 font-semibold text-sm`}>
                  {qualification.status}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                {score >= 15 ? "Excellent! You're Highly Qualified" : 
                 score >= 10 ? "Great News! You Qualify for Funding" : 
                 "Let's Get You Funding Ready"}
              </h1>
              
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {score >= 15 
                  ? "Based on your profile, you're an excellent candidate for premium funding options."
                  : score >= 10
                  ? "You meet the requirements for business funding with our lender network."
                  : "With some strategic improvements, you could qualify for funding in 30-60 days."
                }
              </p>
            </div>

            {/* Score & Metrics */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
                <Star className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{score}/25</div>
                <div className="text-gray-600 text-sm">Qualification Score</div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
                <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{qualification.funding}</div>
                <div className="text-gray-600 text-sm">Funding Range</div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
                <Award className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{qualification.odds}</div>
                <div className="text-gray-600 text-sm">Approval Odds</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Qualification Progress</span>
                <span>{Math.round((score / 25) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <motion.div 
                  className={`h-3 rounded-full bg-${qualification.color}-500`}
                  initial={{ width: 0 }}
                  animate={{ width: `${(score / 25) * 100}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              {score >= 10 ? (
                <>
                  <a
                    href="/apply-funding"
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg text-center transition-colors duration-200"
                  >
                    Apply for Funding Now
                  </a>
                  <a
                    href="/credit-repair"
                    className="block w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg text-center transition-colors duration-200"
                  >
                    Learn About Credit Repair
                  </a>
                </>
              ) : (
                <>
                  <a
                    href="/credit-repair"
                    className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg text-center transition-colors duration-200"
                  >
                    View Credit Repair Packages
                  </a>
                  <a
                    href="/apply-funding"
                    className="block w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg text-center transition-colors duration-200"
                  >
                    Try Funding Application Anyway
                  </a>
                </>
              )}
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-center text-gray-600">
                <p className="mb-2">
                  <strong>Next Steps:</strong> {score >= 10 
                    ? "Complete your funding application to get matched with lenders." 
                    : "Start with credit improvement to increase your funding eligibility."
                  }
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Shield className="w-4 h-4" />
                    <span>Secure Application</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>5-10 Minute Process</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Professional Quiz Questions
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Business Funding Eligibility Quiz</h1>
          <p className="text-lg text-gray-600">
            Answer {questions.length} questions to discover your funding options
          </p>
        </div>

        {/* Progress */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-3">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>3-5 minutes</span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div 
              className="bg-blue-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Current Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {questions[currentQuestion].question}
              </h2>
              <p className="text-gray-600">
                {questions[currentQuestion].description}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: selectedOption === null ? 1.02 : 1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(
                    questions[currentQuestion].id,
                    questions[currentQuestion].question,
                    option.text,
                    option.points,
                    index
                  )}
                  disabled={selectedOption !== null}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                    selectedOption === index
                      ? 'border-blue-500 bg-blue-50 scale-105'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  } ${selectedOption !== null && selectedOption !== index ? 'opacity-50' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-gray-900">
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
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-200">
            <TrendingUp className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <div className="text-sm font-semibold text-gray-900">5,000+</div>
            <div className="text-xs text-gray-600">Clients Served</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-200">
            <Award className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <div className="text-sm font-semibold text-gray-900">90%+</div>
            <div className="text-xs text-gray-600">Approval Rate</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-200">
            <Zap className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <div className="text-sm font-semibold text-gray-900">100+</div>
            <div className="text-xs text-gray-600">Lender Network</div>
          </div>
        </div>
      </div>
    </div>
  );
}