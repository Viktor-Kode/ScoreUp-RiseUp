// app/quiz/page.jsx - UPDATED LOGIC
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
      question: "What's your credit score range?",
      description: "This helps us determine the best funding options for you",
      options: [
        { text: "Below 680", value: "below-680", route: "downsell" },
        { text: "680-699", value: "680-699", route: "prequal-docs" },
        { text: "700+", value: "700-plus", route: "prequal-nodoc" }
      ]
    },
    {
      id: 2,
      question: "What's your average monthly business revenue?",
      description: "Higher revenue increases your funding potential",
      options: [
        { text: "Under $5,000", value: "under-5k" },
        { text: "$5,000-$10,000", value: "5k-10k" },
        { text: "Over $10,000", value: "over-10k" }
      ]
    },
    {
      id: 3,
      question: "Do you have 3-4 months of bank statements available?",
      description: "Required for most funding applications",
      options: [
        { text: "Yes, readily available", value: "yes-statements" },
        { text: "No, but I can get them", value: "no-but-can-get" },
        { text: "Not available", value: "not-available" }
      ]
    },
    {
      id: 4,
      question: "Do you have a tri-merge credit report?",
      description: "A tri-merge report shows data from all three credit bureaus",
      options: [
        { text: "Yes, I have one", value: "yes-report" },
        { text: "No, but I can get one", value: "no-but-can-get" },
        { text: "What's a tri-merge report?", value: "dont-know" }
      ]
    },
    {
      id: 5,
      question: "How do you plan to use the funding?",
      description: "Specific use cases help match you with the right lenders",
      options: [
        { text: "Business expansion/growth", value: "expansion" },
        { text: "Equipment purchase", value: "equipment" },
        { text: "Working capital", value: "working-capital" },
        { text: "Marketing & advertising", value: "marketing" },
        { text: "Inventory purchase", value: "inventory" }
      ]
    }
  ];

  const handleAnswer = (questionId, answer, value, route, optionIndex) => {
    setSelectedOption(optionIndex);
    
    const newAnswers = {
      ...answers,
      [questionId]: { answer, value, route }
    };
    
    setAnswers(newAnswers);
    
    setTimeout(() => {
      setSelectedOption(null);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Determine routing based on credit score answer
        const creditScoreAnswer = newAnswers[1]; // Question 1 is credit score
        if (creditScoreAnswer) {
          setShowLeadForm(true);
        }
      }
    }, 400);
  };

  const handleLeadSubmit = async (formData) => {
    setIsSubmitting(true);

    try {
      // Get credit score from answers to determine routing
      const creditScoreAnswer = answers[1]; // Question 1
      const creditScoreRoute = creditScoreAnswer?.route;

      // Prepare lead data
      const leadData = {
        to_email: 'your-email@scoreupriseup.com',
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        business_name: formData.businessName,
        credit_score: creditScoreAnswer?.answer || 'Not provided',
        monthly_revenue: answers[2]?.answer || 'Not provided',
        has_statements: answers[3]?.answer || 'Not provided',
        has_credit_report: answers[4]?.answer || 'Not provided',
        funding_purpose: answers[5]?.answer || 'Not provided',
        qualification_route: creditScoreRoute,
        submission_date: new Date().toISOString(),
        message: `New quiz submission from ${formData.firstName} ${formData.lastName}. Credit: ${creditScoreAnswer?.answer}`
      };

      await emailjs.send(
        'service_renapht',
        'template_z1vr7ty',
        leadData,
        'SS2R3dMbKoMDjBayk'
      );

      // Route user based on credit score
      if (creditScoreRoute === 'downsell') {
        router.push('/downsell');
      } else if (creditScoreRoute === 'prequal-docs') {
        router.push('/prequalification-docs');
      } else if (creditScoreRoute === 'prequal-nodoc') {
        router.push('/prequalification-nodoc');
      } else {
        router.push('/offers');
      }

    } catch (error) {
      console.error('Failed to submit:', error);
      // Fallback routing based on credit score
      const creditScoreAnswer = answers[1];
      if (creditScoreAnswer?.route === 'downsell') {
        router.push('/downsell');
      } else {
        router.push('/offers');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Progress calculation
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Lead Capture Component (will be shown after quiz)
  const LeadCaptureForm = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
        >
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Your Results!</h2>
            <p className="text-gray-600">
              Enter your details to see your personalized funding options
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
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
              <input
                type="text"
                name="businessName"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200"
            >
              {isSubmitting ? 'Processing...' : 'See My Results →'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );

  if (showLeadForm) {
    return <LeadCaptureForm />;
  }

  // Quiz Questions UI
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Business Funding Qualification Quiz
          </motion.h1>
          <p className="text-lg text-gray-600">
            Answer 5 questions to discover your funding options
          </p>
        </div>

        {/* Progress */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-3">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div 
              className="bg-blue-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
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
                    option.text,
                    option.value,
                    option.route,
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
                      <ArrowRight className="w-5 h-5 text-gray-400" />
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
            <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <div className="text-sm font-semibold text-gray-900">5,000+</div>
            <div className="text-xs text-gray-600">Clients Served</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-200">
            <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <div className="text-sm font-semibold text-gray-900">90%+</div>
            <div className="text-xs text-gray-600">Approval Rate</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-200">
            <Shield className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <div className="text-sm font-semibold text-gray-900">Secure</div>
            <div className="text-xs text-gray-600">& Compliant</div>
          </div>
        </div>
      </div>
    </div>
  );
}