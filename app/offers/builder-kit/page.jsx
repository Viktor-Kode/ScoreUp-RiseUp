// app/offers/builder-kit/page.jsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  ArrowRight,
  Shield,
  Star,
  Users,
  TrendingUp,
  FileText,
  Clock,
  Building,
  CreditCard,
  BadgeDollarSign,
  HeartHandshake
} from 'lucide-react';

export default function BuilderKitOffer() {
  const [isPurchasing, setIsPurchasing] = useState(false);

  const mainPayPalLink = 'https://www.paypal.com/ncp/payment/MB95QJ9P7V4RG';

  const handlePurchase = async () => {
    setIsPurchasing(true);

    try {
      await emailjs.send(
        'service_renapht',
        'template_z1vr7ty',
        {
          to_email: 'travis@scoreupriseup.com',
          to_name: 'Travis',
          product_name: 'Business Credit Builder Kit',
          product_price: '$997',
          customer_action: 'Clicked Purchase',
          timestamp: new Date().toISOString(),
          page_url: window.location.href
        },
        'SS2R3dMbKoMDjBayk'
      );
    } catch (error) {
      console.error('Tracking failed:', error);
    }

    window.open(mainPayPalLink, '_blank');
    setIsPurchasing(false);
  };

  const features = [
    {
      icon: Building,
      title: 'Business Entity Setup',
      description: 'Proper structure for fundability'
    },
    {
      icon: CreditCard,
      title: 'Business Credit System',
      description: 'Build credit without using your SSN'
    },
    {
      icon: BadgeDollarSign,
      title: 'Lender Access',
      description: 'Funding sources most people never find'
    },
    {
      icon: FileText,
      title: 'Funding Documents',
      description: 'Templates lenders actually approve'
    },
    {
      icon: TrendingUp,
      title: 'Funding Strategy',
      description: 'How to stack approvals correctly'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Guidance from funding professionals'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      business: 'Tech Startup Founder',
      content: 'Secured $250k in 90 days using this system.',
      rating: 5
    },
    {
      name: 'Mike Rodriguez',
      business: 'E-commerce Owner',
      content: 'Went from zero credit to $50k approvals.',
      rating: 5
    },
    {
      name: 'Jessica Chen',
      business: 'Consultant',
      content: 'Lender access alone paid for this kit.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* HERO */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Premium Program
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Business Credit Builder Kit
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Build business credit, access real lenders, and unlock $50,000+ in funding.
            </p>

            <div className="mb-8">
              <span className="text-5xl font-bold">$997</span>
            </div>

            <button
              onClick={handlePurchase}
              disabled={isPurchasing}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-lg text-lg w-full lg:w-auto"
            >
              {isPurchasing ? 'Processing…' : 'Get Instant Access'}
            </button>

            <div className="flex gap-6 mt-6 text-sm text-gray-600">
              <span className="flex items-center"><Shield className="w-4 h-4 mr-1" /> Secure</span>
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> Instant</span>
              <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> 2,000+ Clients</span>
            </div>
          </motion.div>

          {/* FEATURES */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">What You Get</h3>
            <div className="space-y-4">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{f.title}</h4>
                    <p className="text-sm text-gray-600">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow">
              <div className="flex mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="italic text-gray-700 mb-4">"{t.content}"</p>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-gray-500">{t.business}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-4">
        <HeartHandshake className="w-16 h-16 mx-auto mb-6 text-purple-300" />
        <h2 className="text-3xl font-bold mb-4">Ready to Build Real Business Credit?</h2>
        <p className="text-xl mb-8">$997 · Instant Access · No Fluff</p>

        <button
          onClick={handlePurchase}
          className="bg-white text-blue-600 font-bold py-4 px-10 rounded-lg text-lg"
        >
          Get Business Credit Builder Kit
        </button>
      </section>
    </div>
  );
}
