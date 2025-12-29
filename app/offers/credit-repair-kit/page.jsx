// app/offers/credit-repair-kit/page.jsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  CheckCircle,
  ArrowRight,
  Shield,
  Star,
  Users,
  TrendingUp,
  FileText,
  Clock,
  Target,
  BarChart,
  HeartHandshake
} from 'lucide-react';

export default function CreditRepairKitOffer() {
  const [isPurchasing, setIsPurchasing] = useState(false);

  const mainPayPalLink = 'https://www.paypal.com/ncp/payment/NE7NMY5WWTJ7N';

  const handlePurchase = async () => {
    setIsPurchasing(true);

    try {
      await emailjs.send(
        'service_renapht',
        'template_z1vr7ty',
        {
          to_email: 'travis@scoreupriseup.com',
          to_name: 'Travis',
          product_name: 'Credit Repair Kit',
          product_price: '$7',
          customer_action: 'Clicked Purchase',
          timestamp: new Date().toISOString(),
          page_url: window.location.href
        },
        'SS2R3dMbKoMDjBayk'
      );
    } catch (error) {
      console.error('Email tracking failed:', error);
    }

    window.open(mainPayPalLink, '_blank');
    setIsPurchasing(false);
  };

  const features = [
    {
      icon: FileText,
      title: 'Credit Repair Education Course',
      description: 'Step-by-step video training on credit repair strategies'
    },
    {
      icon: Target,
      title: 'DIY Dispute Letter Templates',
      description: 'Professionally crafted dispute letters for all credit issues'
    },
    {
      icon: BarChart,
      title: 'Credit Score Tracking System',
      description: 'Tools to monitor your credit progress and set goals'
    },
    {
      icon: TrendingUp,
      title: '30-Day Action Plan',
      description: 'Daily tasks and checklist to maximize results'
    },
    {
      icon: Users,
      title: 'Community Access',
      description: 'Support from others repairing their credit'
    },
    {
      icon: Shield,
      title: 'Credit Bureau Guides',
      description: 'How to deal with Experian, Equifax & TransUnion'
    }
  ];

  const testimonials = [
    {
      name: 'Marcus Johnson',
      business: 'Restaurant Owner',
      content: '620 to 715 in 90 days. Finally qualified for funding.',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      business: 'Freelance Designer',
      content: 'Removed 3 negative items in the first month.',
      rating: 5
    },
    {
      name: 'David Martinez',
      business: 'E-commerce Owner',
      content: 'Best $7 I ever spent. Up 85 points.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* HERO */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Credit Repair Jumpstart Kit
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Improve your credit and unlock funding opportunities in as little as 30 days.
            </p>

            <div className="flex items-baseline mb-8">
              <span className="text-5xl font-bold">$7</span>
              <span className="ml-3 line-through text-gray-500 text-xl">$47</span>
            </div>

            <button
              onClick={handlePurchase}
              disabled={isPurchasing}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 px-8 rounded-lg text-lg w-full lg:w-auto"
            >
              {isPurchasing ? 'Processing…' : 'Get Instant Access'}
            </button>

            <div className="flex gap-6 mt-6 text-sm text-gray-600">
              <span className="flex items-center"><Shield className="w-4 h-4 mr-1" /> Secure</span>
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> Instant</span>
              <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> 3,000+ Sold</span>
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center px-4">
        <HeartHandshake className="w-16 h-16 mx-auto mb-6 text-cyan-300" />
        <h2 className="text-3xl font-bold mb-4">Fix Your Credit Now</h2>
        <p className="text-xl mb-8">Only $7. Instant access.</p>

        <button
          onClick={handlePurchase}
          className="bg-white text-blue-600 font-bold py-4 px-10 rounded-lg text-lg"
        >
          Get Credit Repair Kit
        </button>
      </section>
    </div>
  );
}
