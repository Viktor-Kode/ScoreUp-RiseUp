import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ScoreUp RiseUp | Business Funding & Capital Access - Get $50K-$500K in 30 Days",
  description: "Access $50K-$500K in business funding through our 100+ lender network. Fast approvals for startups and established businesses. Get pre-qualified in 2 minutes with no credit impact.",
  keywords: "business funding, small business loans, business capital, SBA loans, equipment financing, lines of credit, startup funding, business loans bad credit, alternative lenders",
  authors: [{ name: "ScoreUp RiseUp" }],
  creator: "ScoreUp RiseUp",
  publisher: "ScoreUp RiseUp",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://scoreupriseup.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "ScoreUp RiseUp | Business Funding & Capital Solutions",
    description: "Get $50K-$500K in business funding in 30 days. Access our network of 100+ lenders with 90%+ approval rate for qualified applicants.",
    url: 'https://scoreupriseup.com',
    siteName: 'ScoreUp RiseUp',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ScoreUp RiseUp - Business Funding Experts',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ScoreUp RiseUp | Business Funding Solutions",
    description: "Get $50K-$500K in business funding through our 100+ lender network. Fast approvals, competitive rates.",
    images: ['/og-image.jpg'],
    creator: '@scoreupriseup',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification here
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Financial Service & Funding Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "ScoreUp RiseUp",
              "description": "Business funding and capital access services through a network of 100+ lenders",
              "url": "https://scoreupriseup.com",
              "telephone": "+1-816-438-3423",
              "email": "info@scoreupriseup.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "serviceType": "Business Funding, Business Loans, Capital Access",
              "areaServed": "US",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Business Funding Solutions",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Funding Eligibility Assessment",
                      "description": "Free business funding qualification check with no credit impact"
                    },
                    "price": "0",
                    "priceCurrency": "USD"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Business Funding Access",
                      "description": "Access to $50K-$500K business funding through 100+ lender network"
                    },
                    "price": "497",
                    "priceCurrency": "USD"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Premium Funding & Coaching",
                      "description": "1-on-1 business funding coaching and advanced capital strategies"
                    },
                    "price": "997",
                    "priceCurrency": "USD"
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "5000",
                "bestRating": "5",
                "worstRating": "1"
              },
              "serviceArea": {
                "@type": "Country",
                "name": "United States"
              }
            })
          }}
        />
        
        {/* Additional Structured Data for Loan Broker */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LoanBroker",
              "name": "ScoreUp RiseUp Business Funding",
              "description": "Connecting businesses with 100+ lenders for capital funding from $50,000 to $500,000",
              "url": "https://scoreupriseup.com",
              "telephone": "+1-816-438-3423",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "feesAndCommissions": "Free eligibility assessment, service fees apply for funded amounts",
              "processingTime": "P30D",
              "loanTerm": "12-60 months",
              "interestRate": "Varies by lender and creditworthiness",
              "credential": "5,000+ businesses funded",
              "serviceAudience": {
                "@type": "Audience",
                "audienceType": "Small businesses, startups, established companies"
              }
            })
          }}
        />

        {/* Facebook Pixel */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'your-pixel-id');
              fbq('track', 'PageView');
            `,
          }}
        /> */}
        
        {/* Favicon Links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Additional meta tags for business funding */}
        <meta name="business:category" content="Financial Services" />
        <meta name="business:service" content="Business Funding, Small Business Loans, Capital Access" />
        <meta name="target_audience" content="Small business owners, startups, entrepreneurs, established businesses" />
        <meta name="funding_range" content="$50,000 to $500,000" />
        <meta name="funding_time" content="30 days or less" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
        
        {/* Additional Schema.org markup for service area */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Business Funding Service",
              "description": "Professional business funding services to help businesses access capital from $50,000 to $500,000 through a network of 100+ lenders.",
              "provider": {
                "@type": "Organization",
                "name": "ScoreUp RiseUp",
                "description": "Business funding experts connecting companies with capital solutions"
              },
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "serviceType": "Business loans, SBA loans, equipment financing, lines of credit",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Funding Solutions",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Funding Eligibility Assessment"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Lender Matching Service"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Application Preparation"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* FAQ Schema for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How does the business funding process work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our 4-step process includes: 1) Free 2-minute eligibility check, 2) Matching with 5-10 lenders from our 100+ network, 3) Application preparation and submission, 4) Funding in 30 days or less. Most qualified clients get $50K-$500K in business capital."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the minimum requirements to qualify for funding?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Minimum requirements include: 500+ credit score, 3+ months in business, $5K+ monthly revenue. We work with startups and established businesses, and have solutions for those who don't immediately qualify."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to get funded?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most qualified clients receive funding within 30 days. The process includes instant eligibility check, 1-2 days for lender matching, 3-5 days for application preparation, and 2-3 weeks for funding disbursement."
                  }
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}