// MBTI personality type keywords for seniors
const mbtiKeywords = {
  'INTJ': 'Architect INTJ, Senior INTJ, 60+ INTJ, Retired INTJ, INTJ personality, INTJ traits, INTJ career, INTJ compatibility, INTJ relationships',
  'INTP': 'Thinker INTP, Senior INTP, 60+ INTP, Retired INTP, INTP personality, INTP traits, INTP career, INTP compatibility, INTP relationships',
  'ENTJ': 'Commander ENTJ, Senior ENTJ, 60+ ENTJ, Retired ENTJ, ENTJ personality, ENTJ traits, ENTJ career, ENTJ compatibility, ENTJ relationships',
  'ENTP': 'Debater ENTP, Senior ENTP, 60+ ENTP, Retired ENTP, ENTP personality, ENTP traits, ENTP career, ENTP compatibility, ENTP relationships',
  'INFJ': 'Advocate INFJ, Senior INFJ, 60+ INFJ, Retired INFJ, INFJ personality, INFJ traits, INFJ career, INFJ compatibility, INFJ relationships',
  'INFP': 'Mediator INFP, Senior INFP, 60+ INFP, Retired INFP, INFP personality, INFP traits, INFP career, INFP compatibility, INFP relationships',
  'ENFJ': 'Protagonist ENFJ, Senior ENFJ, 60+ ENFJ, Retired ENFJ, ENFJ personality, ENFJ traits, ENFJ career, ENFJ compatibility, ENFJ relationships',
  'ENFP': 'Campaigner ENFP, Senior ENFP, 60+ ENFP, Retired ENFP, ENFP personality, ENFP traits, ENFP career, ENFP compatibility, ENFP relationships',
  'ISTJ': 'Logistician ISTJ, Senior ISTJ, 60+ ISTJ, Retired ISTJ, ISTJ personality, ISTJ traits, ISTJ career, ISTJ compatibility, ISTJ relationships',
  'ISFJ': 'Protector ISFJ, Senior ISFJ, 60+ ISFJ, Retired ISFJ, ISFJ personality, ISFJ traits, ISFJ career, ISFJ compatibility, ISFJ relationships',
  'ESTJ': 'Executive ESTJ, Senior ESTJ, 60+ ESTJ, Retired ESTJ, ESTJ personality, ESTJ traits, ESTJ career, ESTJ compatibility, ESTJ relationships',
  'ESFJ': 'Consul ESFJ, Senior ESFJ, 60+ ESFJ, Retired ESFJ, ESFJ personality, ESFJ traits, ESFJ career, ESFJ compatibility, ESFJ relationships',
  'ISTP': 'Virtuoso ISTP, Senior ISTP, 60+ ISTP, Retired ISTP, ISTP personality, ISTP traits, ISTP career, ISTP compatibility, ISTP relationships',
  'ISFP': 'Adventurer ISFP, Senior ISFP, 60+ ISFP, Retired ISFP, ISFP personality, ISFP traits, ISFP career, ISFP compatibility, ISFP relationships',
  'ESTP': 'Entrepreneur ESTP, Senior ESTP, 60+ ESTP, Retired ESTP, ESTP personality, ESTP traits, ESTP career, ESTP compatibility, ESTP relationships',
  'ESFP': 'Entertainer ESFP, Senior ESFP, 60+ ESFP, Retired ESFP, ESFP personality, ESFP traits, ESFP career, ESFP compatibility, ESFP relationships'
};

// MBTI personality type detailed descriptions
const mbtiDescriptions = {
  'INTJ': '60+ Senior INTJ Architect personality type detailed analysis. Discover the systematic thinking and independent lifestyle preferences of retired INTJs. Explore their traits, strengths, and compatibility analysis.',
  'INTP': '60+ Senior INTP Thinker personality type detailed analysis. Learn about analytical thinking and intellectual curiosity that INTPs maintain in retirement. Check their traits, strengths, and compatibility analysis.',
  'ENTJ': '60+ Senior ENTJ Commander personality type detailed analysis. Understand the leadership and challenge-oriented spirit that ENTJs maintain after retirement. Explore their traits, strengths, and compatibility analysis.',
  'ENTP': '60+ Senior ENTP Debater personality type detailed analysis. Discover the creative thinking and love for new challenges that ENTPs enjoy in retirement. Check their traits, strengths, and compatibility analysis.',
  'INFJ': '60+ Senior INFJ Advocate personality type detailed analysis. Learn about deep insights and meaningful relationships that INFJs pursue in retirement. Explore their traits, strengths, and compatibility analysis.',
  'INFP': '60+ Senior INFP Mediator personality type detailed analysis. Understand value-driven and free-spirited nature that INFPs maintain in retirement. Check their traits, strengths, and compatibility analysis.',
  'ENFJ': '60+ Senior ENFJ Protagonist personality type detailed analysis. Discover caring for others and social contribution that ENFJs continue in retirement. Explore their traits, strengths, and compatibility analysis.',
  'ENFP': '60+ Senior ENFP Campaigner personality type detailed analysis. Learn about passionate and positive energy that ENFPs maintain even in retirement. Check their traits, strengths, and compatibility analysis.',
  'ISTJ': '60+ Senior ISTJ Logistician personality type detailed analysis. Understand responsibility and preference for systematic living that ISTJs show in retirement. Explore their traits, strengths, and compatibility analysis.',
  'ISFJ': '60+ Senior ISFJ Protector personality type detailed analysis. Discover dedicated and warm caregiving that ISFJs provide in retirement. Check their traits, strengths, and compatibility analysis.',
  'ESTJ': '60+ Senior ESTJ Executive personality type detailed analysis. Learn about efficiency and organizational skills that ESTJs demonstrate even in retirement. Explore their traits, strengths, and compatibility analysis.',
  'ESFJ': '60+ Senior ESFJ Consul personality type detailed analysis. Understand warm sociability and caregiving that ESFJs continue in retirement. Check their traits, strengths, and compatibility analysis.',
  'ISTP': '60+ Senior ISTP Virtuoso personality type detailed analysis. Discover practical and logical approach that ISTPs prefer in retirement. Explore their traits, strengths, and compatibility analysis.',
  'ISFP': '60+ Senior ISFP Adventurer personality type detailed analysis. Learn about artistic sense and free-spirited nature that ISFPs maintain in retirement. Check their traits, strengths, and compatibility analysis.',
  'ESTP': '60+ Senior ESTP Entrepreneur personality type detailed analysis. Understand present-focused enjoyment and active lifestyle that ESTPs live in retirement. Explore their traits, strengths, and compatibility analysis.',
  'ESFP': '60+ Senior ESFP Entertainer personality type detailed analysis. Discover joy and social activities that ESFPs enjoy even in retirement. Check their traits, strengths, and compatibility analysis.'
};

export async function generateMetadata({ params }) {
  const resultId = params.type.toUpperCase();
  const keywords = mbtiKeywords[resultId] || `${resultId}, MBTI result, Senior MBTI, personality type, MBTI compatibility, golden years`;
  const description = mbtiDescriptions[resultId] || `Detailed analysis results for ${resultId} personality type. Discover compatible and challenging MBTI types and find your ideal life companions for the golden years ahead.`;
  
  return {
    title: `Senior MBTI ${resultId} Personality Type Result | 60+ ${resultId} Traits & Compatibility Analysis`,
    description,
    keywords,
    openGraph: {
      title: `Senior MBTI Result - ${resultId} Type`,
      description: `${resultId} personality type detailed analysis results. Discover compatible and challenging MBTI types for meaningful relationships.`,
      type: 'website',
      locale: 'en_US',
      url: `https://senior-mbti-l3zee5a4g-seniormbtis-projects.vercel.app/result/${resultId}`,
      siteName: 'Senior MBTI',
      images: [
        {
          url: '/en.png',
          width: 1200,
          height: 630,
          alt: `${resultId} Personality Type Result - Senior MBTI`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `Senior MBTI Result - ${resultId} Type`,
      description: `${resultId} personality type detailed analysis results. Discover compatible and challenging MBTI types for meaningful relationships.`,
      images: ['/en.png']
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
}

export default function ResultLayout({ children, params }) {
  const resultId = params.type.toUpperCase();
  
  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3506846365049386"
        crossOrigin="anonymous"
      />
      
      {/* Structured Data - TestResults Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TestResults",
            "name": `Senior MBTI ${resultId} Personality Type Result`,
            "description": mbtiDescriptions[resultId] || `${resultId} personality type result`,
            "result": {
              "@type": "PsychologicalTrait",
              "name": `MBTI ${resultId} Type`,
              "description": `Myers-Briggs personality type ${resultId}`
            },
            "mainEntity": {
              "@type": "Person",
              "description": `Senior with ${resultId} personality type`
            },
            "provider": {
              "@type": "Organization",
              "name": "Senior MBTI Research Team",
              "url": "https://senior-mbti-l3zee5a4g-seniormbtis-projects.vercel.app"
            },
            "datePublished": new Date().toISOString(),
            "inLanguage": "en-US",
            "isAccessibleForFree": true
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
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": `${resultId} Type Result`,
                "item": `https://senior-mbti-l3zee5a4g-seniormbtis-projects.vercel.app/result/${resultId.toLowerCase()}`
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}