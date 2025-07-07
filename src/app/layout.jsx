import './globals.css'
import { LanguageProvider } from '../contexts/LanguageContext'

// AdSense optimized SEO metadata
export const metadata = {
  title: 'Senior MBTI Test | Personality Type Assessment for 60+ Adults | Retirement Life Guide',
  description: 'Professional MBTI personality test designed for seniors 60+. Discover your personality type and find compatible companions for your golden years. Free psychological assessment with senior-specific life guidance and relationship compatibility analysis.',
  keywords: 'senior MBTI test, elderly personality test, retirement personality assessment, MBTI for seniors, golden years psychology, senior compatibility test, retirement life planning, elderly relationship advice, personality test over 60, senior lifestyle guide',
  authors: [{ name: 'Senior MBTI Expert Team' }],
  creator: 'Senior MBTI Expert Team',
  publisher: 'Senior MBTI',
  category: 'Psychology Test, Personality Assessment, Senior Lifestyle',
  classification: 'Psychology, Personality Assessment, Senior Lifestyle',
  openGraph: {
    title: 'Senior MBTI - Discover Your MBTI & Compatible Types',
    description: 'Discover your MBTI and find compatible personality types! Identify people with compatible personalities who will make great companions for the rest of your life journey.',
    type: 'website',
    locale: 'en_US',
    url: 'https://seniormbti.com',
    siteName: 'Senior MBTI',
    images: [
      {
        url: 'https://seniormbti.com/en.png',
        width: 1200,
        height: 630,
        alt: 'Senior MBTI Personality Test - Discover Your MBTI & Compatible Types'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Senior MBTI - Discover Your MBTI & Compatible Types',
    description: 'Discover your MBTI and find compatible personality types! Identify people with compatible personalities who will make great companions for the rest of your life journey.',
    images: ['https://seniormbti.com/en.png']
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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WSQ3FHZLB3"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WSQ3FHZLB3');
            `,
          }}
        />
        
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3506846365049386"
          crossOrigin="anonymous"
        />
        
        {/* AdSense optimization meta tags */}
        <meta name="theme-color" content="#667eea" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* SEO optimization */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Multilingual SEO optimization */}
        <link rel="alternate" hrefLang="en" href="https://seniormbti.com/" />
        <link rel="alternate" hrefLang="ko" href="https://kr.seniormbti.com/" />
        <link rel="alternate" hrefLang="zh" href="https://cn.seniormbti.com/" />
        <link rel="alternate" hrefLang="ja" href="https://jp.seniormbti.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://seniormbti.com/" />
        
        {/* Performance optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Senior MBTI",
              "alternateName": "Elderly Personality Type Test",
              "description": "Professional MBTI personality type test designed for seniors 60+. Retirement life planning and relationship improvement through psychological analysis.",
              "url": "https://seniormbti.com",
              "applicationCategory": "LifestyleApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "provider": {
                "@type": "Organization",
                "name": "Senior MBTI Expert Team",
                "url": "https://seniormbti.com"
              },
              "audience": {
                "@type": "Audience",
                "audienceType": "Seniors, Elderly Adults",
                "geographicArea": {
                  "@type": "Country",
                  "name": "United States"
                }
              },
              "inLanguage": "en-US",
              "isAccessibleForFree": true,
              "mainEntity": {
                "@type": "Quiz",
                "name": "Senior MBTI Personality Type Test",
                "description": "24-question personality test tailored for seniors",
                "educationalLevel": "Adult",
                "timeRequired": "PT5M",
                "assesses": "Personality Type, MBTI, Relationship Compatibility"
              }
            })
          }}
        />
        
        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is the Senior MBTI test free?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, the Senior MBTI test is completely free. You can take the test immediately without any registration or payment."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "How is Senior MBTI different from regular MBTI?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Senior MBTI is specifically designed for adults 60+ and considers their unique life experiences and values. It provides senior-specific advice for retirement life, relationships, and health management."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does the test take?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "The Senior MBTI test takes approximately 5 minutes. It consists of 24 simple questions that are easy to complete."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="bg-gradient-to-br min-h-screen">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}