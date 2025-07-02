// AdSense-optimized SEO metadata for Senior MBTI Survey
export const metadata = {
  title: 'Senior MBTI Personality Test | Elderly Personality Assessment Survey | Post-Retirement Self-Discovery',
  description: 'A comprehensive 24-question MBTI personality type test designed specifically for seniors 60+. Professional psychological analysis for new life chapters and lifestyle after retirement. Senior-tailored questions for accurate personality diagnosis.',
  keywords: 'Senior MBTI Test, Elderly Personality Assessment, 60+ Personality Analysis, Post-Retirement Psychology Test, Senior Self-Discovery, Golden Age Personality Diagnosis, Middle-Age Psychology Counseling, Senior Life Coaching',
  openGraph: {
    title: 'Senior MBTI Personality Test - Discover Your Personality Type in 24 Questions',
    description: 'Professional MBTI test designed for seniors 60+. Discover your personality type and compatibility with 24 simple questions.',
    type: 'website',
    locale: 'en_US',
    url: 'https://senior-mbti-l3zee5a4g-seniormbtis-projects.vercel.app/survey',
    siteName: 'Senior MBTI',
    images: [
      {
        url: '/images/senior-mbti-survey-en.jpg',
        width: 1200,
        height: 630,
        alt: 'Senior MBTI Personality Test Survey - Discover Your Personality Type in 24 Questions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Senior MBTI Personality Test - Discover Your Personality Type in 24 Questions',
    description: 'Professional MBTI test designed for seniors 60+. Discover your personality type and compatibility with 24 simple questions.',
    images: ['/images/senior-mbti-survey-en.jpg']
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
  alternates: {
    canonical: 'https://senior-mbti-l3zee5a4g-seniormbtis-projects.vercel.app/survey',
    languages: {
      'ko-KR': 'https://senior-mbti-qwnq47jj8-seniormbtis-projects.vercel.app/survey',
      'en-US': 'https://senior-mbti-l3zee5a4g-seniormbtis-projects.vercel.app/survey',
      'zh-CN': 'https://senior-mbti-k71r0f94e-seniormbtis-projects.vercel.app/survey',
      'ja-JP': 'https://senior-mbti-nkth90d1y-seniormbtis-projects.vercel.app/survey'
    }
  }
};

export default function SurveyLayout({ children }) {
  return (
    <>
      {/* Google AdSense Script */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID"
        crossOrigin="anonymous"
      />
      
      {/* Google AdSense Auto Ads Activation */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "ca-pub-YOUR_PUBLISHER_ID",
              enable_page_level_ads: true,
              page_level_ads_config: {
                level: "minor"
              }
            });
          `
        }}
      />
      
      {/* Structured Data - Survey Quiz Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Quiz",
            "name": "Senior MBTI Personality Type Test",
            "description": "24-question MBTI personality type test designed for middle-aged and elderly people over 60",
            "about": {
              "@type": "Thing",
              "name": "MBTI Personality Types",
              "description": "Myers-Briggs Type Indicator Personality Assessment"
            },
            "numberOfQuestions": 24,
            "timeRequired": "PT5M",
            "educationalLevel": "Adult",
            "audience": {
              "@type": "Audience",
              "audienceType": "Seniors, Middle-aged, 60+ years old"
            },
            "provider": {
              "@type": "Organization",
              "name": "Senior MBTI Research Team",
              "url": "https://senior-mbti-l3zee5a4g-seniormbtis-projects.vercel.app"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "inLanguage": "en-US",
            "isAccessibleForFree": true,
            "learningResourceType": "Assessment",
            "assesses": [
              "Personality Types",
              "MBTI Personality Analysis",
              "Relationship Compatibility",
              "Lifestyle Suitability"
            ]
          })
        }}
      />
      
      {/* BreadcrumbList Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Senior MBTI Home",
                "item": "https://senior-mbti-l3zee5a4g-seniormbtis-projects.vercel.app"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Personality Test Survey",
                "item": "https://senior-mbti-l3zee5a4g-seniormbtis-projects.vercel.app/survey"
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}