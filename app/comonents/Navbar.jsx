'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const navigation = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Funding Options', href: '#funding-options' },
    { 
      name: 'Solutions', 
      href: '#solutions',
      dropdown: [
        { name: 'Business Funding', href: '#business-funding' },
        { name: 'Credit Repair', href: '#credit-repair' },
        { name: 'Business Credit', href: '#business-credit' },
        { name: 'Funding Preparation', href: '#funding-prep' }
      ]
    },
    { name: 'Success Stories', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl shadow-lg z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-40 h-10 relative flex items-center">
              <Image
                src="/logo.png"
                alt="ScoreUp RiseUp - Business Funding Experts"
                width={160}
                height={40}
                className="object-contain w-full h-auto hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                  >
                    <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 group">
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isSolutionsOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 backdrop-blur-xl">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a 
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="https://calendly.com/scoreupriseup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Free Consultation
            </a>
            <Link href="/quiz">
            <button 
              onClick={() => document.getElementById('qualification-quiz')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Check Eligibility
            </button></Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-4 px-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="space-y-2">
                      <button 
                        onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                        className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 font-medium py-2"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isSolutionsOpen && (
                        <div className="pl-4 space-y-2 border-l-2 border-blue-100">
                          {item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a 
                      href={item.href}
                      className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3 border-t border-gray-200">
                <a 
                  href="https://calendly.com/scoreupriseup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Free Consultation
                </a>
                <Link href="/quiz">
                <button 
                  onClick={() => {
                    document.getElementById('qualification-quiz')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Check Funding Eligibility
                </button></Link>
              </div>
            </div>
          </div>
        )}
      </div>

    </nav>
  );
}