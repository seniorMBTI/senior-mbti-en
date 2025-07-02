export default function sitemap() {
  const baseUrl = 'https://l3zee5a4g.vercel.app';
  
  // Basic pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/survey`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // 16 MBTI personality type result pages
  const mbtiTypes = [
    'intj', 'intp', 'entj', 'entp', // NT (Analysts)
    'infj', 'infp', 'enfj', 'enfp', // NF (Diplomats)
    'istj', 'isfj', 'estj', 'esfj', // SJ (Sentinels)
    'istp', 'isfp', 'estp', 'esfp'  // SP (Explorers)
  ];

  const resultPages = mbtiTypes.map(type => ({
    url: `${baseUrl}/result/${type}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Additional related pages (for future implementation)
  const additionalPages = [
    {
      url: `${baseUrl}/compatibility`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/lifestyle`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  return [...staticPages, ...resultPages, ...additionalPages];
}