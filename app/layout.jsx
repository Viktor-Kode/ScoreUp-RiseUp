import Image from 'next/image'
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'ScoreUp RiseUp - Business Funding Qualification',
  description: 'Get qualified for business funding in 5 minutes. Access $50,000+ in funding for your business.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-600">
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
            
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="/quiz" className="text-gray-600 hover:text-blue-600">Get Qualified</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
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
            <p className="text-gray-400">
              Helping entrepreneurs access the funding they need to grow their businesses.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/quiz" className="hover:text-white">Get Qualified</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: support@lmxsolutions.info</li>
              <li>Phone: +1-800-421-7558</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href={'/disclaimer'}>Disclaimer</Link></li>
              
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ScoreUp RiseUp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}