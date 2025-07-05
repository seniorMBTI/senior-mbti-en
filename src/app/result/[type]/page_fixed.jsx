'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

// Complete 16 MBTI types data with English translations - moved outside component
const mbtiTypes = {
  'INTJ': {
    type: 'INTJ',
    title: 'Senior Strategic Architect',
    subtitle: 'Wise Strategist with Future Vision',
    description: 'Based on wisdom accumulated through long experience, you engage in systematic and logical thinking with insightful foresight into the future.',
    strengths: ['Excellent strategic thinking', 'Independent judgment', 'Systematic planning', 'Deep insight', 'Goal-oriented execution'],
    challenges: ['Perfectionist tendencies', 'Difficulty expressing emotions', 'Critical perspective', 'Resistance to change'],
    careers: ['Consultant', 'Researcher', 'Planner', 'Writer', 'Investment Expert'],
    relationships: 'You prefer deep relationships with a trustworthy few and value intellectual connection.',
    emoji: '🔮',
    color: '#6366f1',
    bgGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    seniorTips: ['Engage in regular intellectual activities to maintain brain health', 'Practice strategic financial planning and investment for a secure retirement', 'Build networks with trusted professionals and experts'],
    healthTips: ['Maintain cognitive function through regular reading and learning', 'Practice stress management through meditation or yoga', 'Focus on preventive healthcare with regular check-ups']
  },
  'INTP': {
    type: 'INTP', 
    title: 'Senior Contemplative Scholar',
    subtitle: 'Curious Knowledge Seeker',
    description: 'Through lifelong learning and exploration, you have built deep knowledge and enjoy exploring new ideas.',
    strengths: ['Excellent analytical skills', 'Creative thinking', 'Logical reasoning', 'Intellectual curiosity', 'Objective judgment'],
    challenges: ['Difficulty in practical application', 'Lack of emotional communication', 'Indecisiveness', 'Missing details'],
    careers: ['Researcher', 'Professor', 'Analyst', 'Philosopher', 'Inventor'],
    relationships: 'You prefer partners with whom you can have intellectual conversations and value personal space.',
    emoji: '🤔',
    color: '#8b5cf6',
    bgGradient: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
    seniorTips: ['Continue learning new subjects to satisfy intellectual curiosity', 'Participate in online courses or seminars to stay updated', 'Consider volunteering using your research and analytical skills'],
    healthTips: ['Enjoy brain exercises like puzzles or chess for mental stimulation', 'Take sufficient alone time to recharge your mental energy', 'Prevent depression by engaging in research on topics of interest']
  },
  'ENTJ': {
    type: 'ENTJ',
    title: 'Senior Leader',
    subtitle: 'Experienced Leadership Role Model',
    description: 'With leadership built through long experience, you guide those around you and act systematically to achieve clear goals.',
    strengths: ['Strong leadership', 'Strategic thinking', 'Decisiveness', 'Organizational management', 'Efficient execution'],
    challenges: ['Stubbornness', 'Lack of emotional consideration', 'Authoritative tendencies', 'Missing details'],
    careers: ['Executive', 'Project Manager', 'Instructor', 'Counselor', 'Organization Leader'],
    relationships: 'You pursue goal-oriented relationships that foster mutual growth and prefer honest communication.',
    emoji: '👑',
    color: '#dc2626',
    bgGradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    seniorTips: ['Use your experience to mentor younger generations', 'Take leadership roles in community organizations or volunteer groups', 'Share your lifetime knowledge through writing or speaking'],
    healthTips: ['Maintain physical fitness and energy through regular exercise', 'Balance work and rest with appropriate leisure activities', 'Stay mentally active through regular social activities']
  },
  'ENTP': {
    type: 'ENTP',
    title: 'Senior Innovator',
    subtitle: 'Source of Creative Ideas',
    description: 'Based on rich experience, you constantly create new ideas and gain vitality through change and innovation.',
    strengths: ['Creative ideation', 'Adaptability', 'Persuasiveness', 'Challenging spirit', 'Broad interests'],
    challenges: ['Lack of focus', 'Inconsistency', 'Neglecting details', 'Lack of realism'],
    careers: ['Entrepreneur', 'Inventor', 'Speaker', 'Planner', 'Cultural Arts Activist'],
    relationships: 'You enjoy interacting with diverse people who provide intellectual stimulation and like sharing new ideas.',
    emoji: '💡',
    color: '#f59e0b',
    bgGradient: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    seniorTips: ['Learn new technologies or trends to adapt to changing times', 'Develop creative projects or entrepreneurial ideas', 'Engage with diverse generations to gain new perspectives'],
    healthTips: ['Manage stress by flexibly adapting to changing environments', 'Stay energized with new activities and travel experiences', 'Keep your brain active through creative activities']
  },
  'INFJ': {
    type: 'INFJ',
    title: 'Senior Sage',
    subtitle: 'Advisor with Deep Insight',
    description: 'With deep insight built through lifelong experience, you are dedicated to understanding and helping others while pursuing meaningful values.',
    strengths: ['Deep insight', 'Empathy', 'Idealism', 'Dedicated attitude', 'Creative thinking'],
    challenges: ['Excessive perfectionism', 'Burnout risk', 'Conflict avoidance', 'Lack of realism'],
    careers: ['Counselor', 'Educator', 'Writer', 'Social Worker', 'Artist'],
    relationships: 'You pursue genuine deep relationships and sincerely wish for the growth and happiness of others.',
    emoji: '🌟',
    color: '#10b981',
    bgGradient: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
    seniorTips: ['Start counseling or coaching activities based on life experience', 'Participate in meaningful social service or charitable activities', 'Write an autobiography or memoir to organize the meaning of life'],
    healthTips: ['Find inner peace through meditation or spiritual activities', 'Set appropriate boundaries to prevent emotional exhaustion', 'Find mental stability through time with nature']
  },
  'INFP': {
    type: 'INFP',
    title: 'Senior Mediator',
    subtitle: 'Warm-hearted Peacemaker',
    description: 'With deep understanding of humanity built over a lifetime, you create harmonious environments and cherish personal values and beliefs.',
    strengths: ['High empathy', 'Creativity', 'Pursuing personal values', 'Adaptability', 'Seeking harmony'],
    challenges: ['Excessive idealism', 'Conflict avoidance', 'Indecisiveness', 'Reality escape'],
    careers: ['Writer', 'Artist', 'Counselor', 'Educator', 'Social Worker'],
    relationships: 'You value authentic and meaningful relationships and respect the individuality and values of others.',
    emoji: '🕊️',
    color: '#06b6d4',
    bgGradient: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
    seniorTips: ['Create your own artistic world through art or creative activities', 'Find ways to live harmoniously while maintaining personal values and beliefs', 'Take sufficient rest and reflection time in quiet environments'],
    healthTips: ['Create a peaceful environment as you are sensitive to stress', 'Find emotional stability through creative activities or journaling', 'Avoid conflict situations and maintain stable relationships']
  },
  'ENFJ': {
    type: 'ENFJ',
    title: 'Senior Teacher',
    subtitle: 'Warm-hearted Life Mentor',
    description: 'Based on rich life experience, you help others grow and dedicate yourself to community harmony and development.',
    strengths: ['Excellent communication skills', 'Interest in others', 'Leadership', 'Empathy', 'Motivation'],
    challenges: ['Self-sacrificing tendencies', 'Sensitivity to criticism', 'Excessive involvement', 'Difficulty setting boundaries'],
    careers: ['Educator', 'Counselor', 'Social Worker', 'Instructor', 'Religious Leader'],
    relationships: 'You find joy in bringing out others\' potential and helping them grow, creating warm and supportive relationships.',
    emoji: '🌻',
    color: '#f97316',
    bgGradient: 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)',
    seniorTips: ['Use your experience to train successors or operate educational programs', 'Participate in activities or committees for community development', 'Engage in volunteer work to help marginalized neighbors'],
    healthTips: ['Be careful not to overextend yourself in helping others', 'Secure your own time and space for recharging', 'Maintain energy through regular exercise and social activities']
  },
  'ENFP': {
    type: 'ENFP',
    title: 'Senior Activist',
    subtitle: 'Passionate Life Supporter',
    description: 'With overflowing passion and positive energy, you inspire those around you and excel at discovering and realizing new possibilities.',
    strengths: ['Excellent communication', 'Creative problem-solving', 'Passion and energy', 'Motivating others', 'Adaptability'],
    challenges: ['Lack of focus', 'Inconsistency', 'Excessive optimism', 'Difficulty handling details'],
    careers: ['Speaker', 'Cultural Planner', 'Counselor', 'Educator', 'Artist'],
    relationships: 'You prefer vibrant relationships where you share energy with diverse people and inspire each other.',
    emoji: '🎪',
    color: '#ec4899',
    bgGradient: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)',
    seniorTips: ['Gain energy through meetings and interactions with diverse people', 'Start new hobbies or activities for continuous stimulation', 'Play a role in inspiring others with positive energy'],
    healthTips: ['Prevent loneliness and depression through active social activities', 'Maintain health and release energy through various physical activities', 'Keep your brain active with new experiences and challenges']
  },
  'ISTJ': {
    type: 'ISTJ',
    title: 'Senior Guardian',
    subtitle: 'Reliable Keeper of Tradition',
    description: 'With lifelong sincerity and responsibility, you serve as a reliable support for those around you and pursue a stable and systematic life.',
    strengths: ['High responsibility', 'Systematic approach', 'Reliability', 'Attention to detail', 'Patience'],
    challenges: ['Resistance to change', 'Lack of flexibility', 'Difficulty expressing emotions', 'Difficulty accepting new ideas'],
    careers: ['Manager', 'Accountant', 'Civil Servant', 'Educator', 'Technical Specialist'],
    relationships: 'You value long-term, deep relationships based on trust and stability, and consider keeping promises important.',
    emoji: '🏛️',
    color: '#374151',
    bgGradient: 'linear-gradient(135deg, #6b7280 0%, #374151 100%)',
    seniorTips: ['Pass on professional knowledge accumulated through long experience to successors', 'Maintain stable and systematic daily routines', 'Play a role in preserving and transmitting traditional values and wisdom'],
    healthTips: ['Stabilize your body rhythm with regular lifestyle patterns', 'Adapt to new environments through gradual changes', 'Focus on preventive healthcare with regular health check-ups']
  },
  'ISFJ': {
    type: 'ISFJ',
    title: 'Senior Protector',
    subtitle: 'Warm-hearted Caregiver',
    description: 'With lifelong dedication and service, you care for family and community, having a warm heart that thinks of others\' needs first.',
    strengths: ['Excellent caregiving ability', 'Thoughtful consideration', 'Responsibility', 'Cooperative attitude', 'Respect for tradition'],
    challenges: ['Lack of self-assertion', 'Excessive self-sacrifice', 'Difficulty adapting to change', 'Conflict avoidance'],
    careers: ['Caregiver', 'Social Worker', 'Educator', 'Counselor', 'Religious Leader'],
    relationships: 'You find joy in carefully considering and supporting others, seeking stable and trustworthy relationships.',
    emoji: '🤱',
    color: '#059669',
    bgGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    seniorTips: ['Find fulfillment in caregiving activities for family and community', 'Pass on traditional cooking or handicraft skills to younger generations', 'Maintain stable daily life in quiet and peaceful environments'],
    healthTips: ['Avoid excessive self-sacrifice and take care of your own health too', 'Take sufficient rest to reduce stress', 'Find emotional stability through emotional bonds with close people']
  },
  'ESTJ': {
    type: 'ESTJ',
    title: 'Senior Manager',
    subtitle: 'Experienced Organizational Pillar',
    description: 'With organizational management skills built through long experience, you create and manage efficient systems with a practical and realistic approach.',
    strengths: ['Excellent organizational skills', 'Practical thinking', 'Leadership', 'Decisiveness', 'Responsibility'],
    challenges: ['Stubbornness', 'Lack of emotional consideration', 'Resistance to change', 'Obsession with details'],
    careers: ['Manager', 'Business Owner', 'Civil Servant', 'Educational Administrator', 'Organization Leader'],
    relationships: 'You prefer systematic relationships based on clear roles and responsibilities, valuing mutual respect and trust.',
    emoji: '📊',
    color: '#b91c1c',
    bgGradient: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
    seniorTips: ['Use organizational management experience to serve as an advisor to groups or organizations', 'Consider consulting activities that create efficient systems and procedures', 'Contribute to the community with practical problem-solving abilities'],
    healthTips: ['Avoid excessive stress and balance work and rest', 'Manage both physical and mental health through regular exercise', 'Reduce psychological burden by moderating perfectionist tendencies']
  },
  'ESFJ': {
    type: 'ESFJ',
    title: 'Senior Collaborator',
    subtitle: 'Warm Heart of the Community',
    description: 'With rich interpersonal experience, you promote community harmony and thoughtfully care for everyone\'s comfort and happiness.',
    strengths: ['Excellent interpersonal relationships', 'Cooperative attitude', 'Responsibility', 'Practical help', 'Seeking harmony'],
    challenges: ['Sensitivity to criticism', 'Conflict stress', 'Lack of self-assertion', 'Difficulty adapting to change'],
    careers: ['Educator', 'Counselor', 'Social Worker', 'Event Planner', 'Service Industry'],
    relationships: 'You value creating warm and harmonious relationships where everyone is included and cherished.',
    emoji: '🤗',
    color: '#d97706',
    bgGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    seniorTips: ['Plan gatherings or events using your ability to bring people together and create harmony', 'Play a bridging role in helping communication between generations', 'Maintain networks based on warm relationships'],
    healthTips: ['Set appropriate boundaries to avoid excessive stress', 'Gain mental satisfaction through positive social activities', 'Pursue peaceful environments away from conflict situations']
  },
  'ISTP': {
    type: 'ISTP',
    title: 'Senior Craftsman',
    subtitle: 'Owner of Practical Wisdom',
    description: 'With practical problem-solving abilities gained through lifelong hands-on experience, you enjoy making and fixing things with your hands.',
    strengths: ['Excellent problem-solving', 'Practical thinking', 'Manual skills', 'Independence', 'Composure'],
    challenges: ['Difficulty expressing emotions', 'Lack of long-term planning', 'Teamwork difficulties', 'Boredom with routine tasks'],
    careers: ['Technician', 'Repair Specialist', 'Craftsperson', 'Farmer', 'Machine Operator'],
    relationships: 'You express care through practical help and prefer comfortable relationships that respect others\' independence.',
    emoji: '🔧',
    color: '#7c2d12',
    bgGradient: 'linear-gradient(135deg, #a3a3a3 0%, #525252 100%)',
    seniorTips: ['Gain a sense of achievement through crafts or repair activities using your manual skills', 'Pass on practical skills or know-how to younger generations', 'Maintain an independent and free lifestyle'],
    healthTips: ['Take sufficient alone time to recharge your mental energy', 'Promote brain activation through hands-on activities', 'Maintain health through regular physical activity, but not excessively']
  },
  'ISFP': {
    type: 'ISFP',
    title: 'Senior Artist',
    subtitle: 'Creator of Quiet Beauty',
    description: 'With lifelong aesthetic sense and delicate sensitivity, you create beauty and pursue personal values and harmonious living.',
    strengths: ['Artistic sense', 'Empathy', 'Flexibility', 'Pursuing personal values', 'Keen observation'],
    challenges: ['Lack of self-assertion', 'Conflict avoidance', 'Difficulty solving practical problems', 'Sensitivity to stress'],
    careers: ['Artist', 'Designer', 'Musician', 'Writer', 'Therapist'],
    relationships: 'You value genuine and deep emotional connections, thoughtfully considering others\' individuality and emotions.',
    emoji: '🎨',
    color: '#7c3aed',
    bgGradient: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
    seniorTips: ['Pursue beauty through artistic creation or cultural activities', 'Live life that maintains personal values and beliefs while respecting others', 'Take sufficient rest in quiet and peaceful environments'],
    healthTips: ['Create a calm environment as you are sensitive to stress', 'Find emotional stability through creative activities or art appreciation', 'Spend time close to nature to gain peace of mind']
  },
  'ESTP': {
    type: 'ESTP',
    title: 'Senior Adventurer',
    subtitle: 'Active Life Enjoyer',
    description: 'Based on rich life experience, you enjoy the present moment and solve problems with a practical and flexible approach.',
    strengths: ['Excellent adaptability', 'Practical problem-solving', 'Sociability', 'Realistic sense', 'Action-oriented'],
    challenges: ['Lack of planning', 'Impulsive behavior', 'Lack of long-term perspective', 'Missing details'],
    careers: ['Sales', 'Service Industry', 'Sports Coach', 'Event Planner', 'Emergency Responder'],
    relationships: 'You enjoy sharing active and fun experiences together and prefer natural and comfortable relationships.',
    emoji: '🏃',
    color: '#dc2626',
    bgGradient: 'linear-gradient(135deg, #f87171 0%, #dc2626 100%)',
    seniorTips: ['Maintain an active lifestyle and enjoy new experiences', 'Help people around you with practical problem-solving abilities', 'Enjoy the present moment and maintain a positive mindset'],
    healthTips: ['Maintain physical fitness and vitality through regular physical activities', 'Make careful choices considering health rather than impulsive decisions', 'Prevent loneliness and gain energy through social activities']
  },
  'ESFP': {
    type: 'ESFP',
    title: 'Senior Entertainer',
    subtitle: 'Warm-hearted Mood Maker',
    description: 'With overflowing energy and a warm heart, you bring joy to those around you, cherishing and enjoying the present moment.',
    strengths: ['Excellent sociability', 'Positive energy', 'Empathy', 'Flexibility', 'Practical help'],
    challenges: ['Lack of planning', 'Sensitivity to criticism', 'Conflict stress', 'Difficulty setting long-term goals'],
    careers: ['Educator', 'Counselor', 'Entertainer', 'Event Planner', 'Service Industry'],
    relationships: 'You find joy in seeing everyone happy and enjoying themselves, creating warm and vibrant relationships.',
    emoji: '🌈',
    color: '#f59e0b',
    bgGradient: 'linear-gradient(135deg, #fde047 0%, #f59e0b 100%)',
    seniorTips: ['Play a role in energizing people around you with positive energy', 'Receive continuous stimulation through meetings with diverse people', 'Enjoy the present moment and create many happy memories'],
    healthTips: ['Prevent depression through active social activities', 'Maintain mental stimulation through various hobby activities', 'Avoid excessive stress and focus on enjoyable activities']
  }
};

// MBTI Compatibility Information
const mbtiCompatibility = {
  'INTJ': {
    bestMatch: ['ENFP', 'ENTP', 'INFJ'],
    goodMatch: ['INTJ', 'INFP', 'ENTJ'],
    challengingMatch: ['ESFJ', 'ISFJ', 'ESTJ']
  },
  'INTP': {
    bestMatch: ['ENFJ', 'ENTJ', 'INFJ'],
    goodMatch: ['INTP', 'ENTP', 'INTJ'],
    challengingMatch: ['ESFJ', 'ISFJ', 'ESTJ']
  },
  'ENTJ': {
    bestMatch: ['INFP', 'INTP', 'ENFP'],
    goodMatch: ['ENTJ', 'INTJ', 'ENTP'],
    challengingMatch: ['ISFP', 'INFP', 'ESFP']
  },
  'ENTP': {
    bestMatch: ['INFJ', 'INTJ', 'ENFJ'],
    goodMatch: ['ENTP', 'ENFP', 'ENTJ'],
    challengingMatch: ['ISTJ', 'ISFJ', 'ESTJ']
  },
  'INFJ': {
    bestMatch: ['ENTP', 'ENFP', 'INTJ'],
    goodMatch: ['INFJ', 'INFP', 'ENFJ'],
    challengingMatch: ['ESTP', 'ESFP', 'ISTP']
  },
  'INFP': {
    bestMatch: ['ENFJ', 'ENTJ', 'ENFP'],
    goodMatch: ['INFP', 'INFJ', 'ISFP'],
    challengingMatch: ['ESTJ', 'ENTJ', 'ESTP']
  },
  'ENFJ': {
    bestMatch: ['INFP', 'ISFP', 'INTP'],
    goodMatch: ['ENFJ', 'ENFP', 'INFJ'],
    challengingMatch: ['ISTP', 'ESTP', 'ISTJ']
  },
  'ENFP': {
    bestMatch: ['INTJ', 'INFJ', 'ENFJ'],
    goodMatch: ['ENFP', 'ENTP', 'INFP'],
    challengingMatch: ['ISTJ', 'ESTJ', 'ISTP']
  },
  'ISTJ': {
    bestMatch: ['ESFP', 'ESTP', 'ISFP'],
    goodMatch: ['ISTJ', 'ISFJ', 'ESTJ'],
    challengingMatch: ['ENFP', 'ENTP', 'INFP']
  },
  'ISFJ': {
    bestMatch: ['ESFP', 'ESTP', 'ENFP'],
    goodMatch: ['ISFJ', 'ISTJ', 'ESFJ'],
    challengingMatch: ['ENTP', 'ENTJ', 'INTP']
  },
  'ESTJ': {
    bestMatch: ['ISFP', 'INFP', 'ISTP'],
    goodMatch: ['ESTJ', 'ISTJ', 'ESFJ'],
    challengingMatch: ['INFP', 'ENFP', 'INTP']
  },
  'ESFJ': {
    bestMatch: ['ISFP', 'INFP', 'ISTP'],
    goodMatch: ['ESFJ', 'ISFJ', 'ESTJ'],
    challengingMatch: ['INTP', 'INTJ', 'ENTP']
  },
  'ISTP': {
    bestMatch: ['ESFJ', 'ESTJ', 'ENFJ'],
    goodMatch: ['ISTP', 'ESTP', 'ISFP'],
    challengingMatch: ['ENFJ', 'INFJ', 'ENFP']
  },
  'ISFP': {
    bestMatch: ['ENFJ', 'ESFJ', 'ESTJ'],
    goodMatch: ['ISFP', 'INFP', 'ESFP'],
    challengingMatch: ['ENTJ', 'ESTJ', 'ENTP']
  },
  'ESTP': {
    bestMatch: ['ISFJ', 'ISTJ', 'INFJ'],
    goodMatch: ['ESTP', 'ESFP', 'ISTP'],
    challengingMatch: ['INFJ', 'INTJ', 'INFP']
  },
  'ESFP': {
    bestMatch: ['ISFJ', 'ISTJ', 'INFJ'],
    goodMatch: ['ESFP', 'ENFP', 'ISFP'],
    challengingMatch: ['INTJ', 'INTP', 'ENTJ']
  }
};

export default function ResultPage() {
  const params = useParams();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [showCopySuccess, setShowCopySuccess] = useState(false);
  const shareButtonRef = useRef(null);
  const [modalPosition, setModalPosition] = useState({ top: '50%', left: '50%' });

  useEffect(() => {
    setMounted(true);
    
    // Get MBTI type directly from URL parameter
    const mbtiType = params.type?.toUpperCase();
    
    if (mbtiType && typeof window !== 'undefined') {
      // Check if it's a valid MBTI type
      const validTypes = ['INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'INFP', 'ENFJ', 'ENFP', 
                         'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP'];
      
      if (validTypes.includes(mbtiType)) {
        // Create result data from MBTI type parameter
        const resultData = {
          mbtiType: mbtiType,
          timestamp: Date.now(),
          isDirectLink: true
        };
        setResultData(resultData);
      } else {
        // Redirect to home if invalid MBTI type
        router.push('/');
      }
    }
  }, [params.type, router]);

  // Dynamic meta tags update based on MBTI result
  useEffect(() => {
    if (resultData && mounted) {
      const mbtiType = resultData.mbtiType;
      const mbtiInfo = mbtiTypes[mbtiType];
      
      if (mbtiInfo) {
        // Update page title
        document.title = `${mbtiType} ${mbtiInfo.name} - Senior MBTI Result`;
        
        // Update Open Graph meta tags
        const updateMetaTag = (property, content) => {
          let meta = document.querySelector(`meta[property="${property}"]`);
          if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute('property', property);
            document.head.appendChild(meta);
          }
          meta.setAttribute('content', content);
        };

        const updateNameMetaTag = (name, content) => {
          let meta = document.querySelector(`meta[name="${name}"]`);
          if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute('name', name);
            document.head.appendChild(meta);
          }
          meta.setAttribute('content', content);
        };

        // Update meta tags with MBTI-specific images using production domain
        updateMetaTag('og:title', `${mbtiType} ${mbtiInfo.name} - Senior MBTI Result`);
        updateMetaTag('og:description', `Your MBTI is ${mbtiType} ${mbtiInfo.name}. ${mbtiInfo.subtitle} ${mbtiInfo.description.substring(0, 100)}...`);
        updateMetaTag('og:image', `https://seniormbti.com/${mbtiType}-en.png`);
        updateMetaTag('og:url', window.location.href);
        updateMetaTag('og:type', 'website');
        
        updateNameMetaTag('description', `Your MBTI is ${mbtiType} ${mbtiInfo.name}. ${mbtiInfo.subtitle} ${mbtiInfo.description.substring(0, 100)}...`);
        updateNameMetaTag('twitter:title', `${mbtiType} ${mbtiInfo.name} - Senior MBTI Result`);
        updateNameMetaTag('twitter:description', `Your MBTI is ${mbtiType} ${mbtiInfo.name}. ${mbtiInfo.subtitle}`);
        updateNameMetaTag('twitter:image', `https://seniormbti.com/${mbtiType}-en.png`);
        updateNameMetaTag('twitter:card', 'summary_large_image');
      }
    }
  }, [resultData, mounted]);

  // Complete 16 MBTI types data with English translations
  // MBTI Compatibility Information
  const mbtiCompatibility = {
    'INTJ': {
      bestMatch: ['ENFP', 'ENTP', 'INFJ'],
      goodMatch: ['INTJ', 'INFP', 'ENTJ'],
      challengingMatch: ['ESFJ', 'ISFJ', 'ESTJ']
    },
    'INTP': {
      bestMatch: ['ENFJ', 'ENTJ', 'INFJ'],
      goodMatch: ['INTP', 'ENTP', 'INTJ'],
      challengingMatch: ['ESFJ', 'ISFJ', 'ESTJ']
    },
    'ENTJ': {
      bestMatch: ['INFP', 'INTP', 'ENFP'],
      goodMatch: ['ENTJ', 'INTJ', 'ENTP'],
      challengingMatch: ['ISFP', 'INFP', 'ESFP']
    },
    'ENTP': {
      bestMatch: ['INFJ', 'INTJ', 'ENFJ'],
      goodMatch: ['ENTP', 'ENFP', 'ENTJ'],
      challengingMatch: ['ISTJ', 'ISFJ', 'ESTJ']
    },
    'INFJ': {
      bestMatch: ['ENTP', 'ENFP', 'INTJ'],
      goodMatch: ['INFJ', 'INFP', 'ENFJ'],
      challengingMatch: ['ESTP', 'ESFP', 'ISTP']
    },
    'INFP': {
      bestMatch: ['ENFJ', 'ENTJ', 'ENFP'],
      goodMatch: ['INFP', 'INFJ', 'ISFP'],
      challengingMatch: ['ESTJ', 'ENTJ', 'ESTP']
    },
    'ENFJ': {
      bestMatch: ['INFP', 'ISFP', 'INTP'],
      goodMatch: ['ENFJ', 'ENFP', 'INFJ'],
      challengingMatch: ['ISTP', 'ESTP', 'ISTJ']
    },
    'ENFP': {
      bestMatch: ['INTJ', 'INFJ', 'ENFJ'],
      goodMatch: ['ENFP', 'ENTP', 'INFP'],
      challengingMatch: ['ISTJ', 'ESTJ', 'ISTP']
    },
    'ISTJ': {
      bestMatch: ['ESFP', 'ESTP', 'ISFP'],
      goodMatch: ['ISTJ', 'ISFJ', 'ESTJ'],
      challengingMatch: ['ENFP', 'ENTP', 'INFP']
    },
    'ISFJ': {
      bestMatch: ['ESFP', 'ESTP', 'ENFP'],
      goodMatch: ['ISFJ', 'ISTJ', 'ESFJ'],
      challengingMatch: ['ENTP', 'ENTJ', 'INTP']
    },
    'ESTJ': {
      bestMatch: ['ISFP', 'INFP', 'ISTP'],
      goodMatch: ['ESTJ', 'ISTJ', 'ESFJ'],
      challengingMatch: ['INFP', 'ENFP', 'INTP']
    },
    'ESFJ': {
      bestMatch: ['ISFP', 'INFP', 'ISTP'],
      goodMatch: ['ESFJ', 'ISFJ', 'ESTJ'],
      challengingMatch: ['INTP', 'INTJ', 'ENTP']
    },
    'ISTP': {
      bestMatch: ['ESFJ', 'ESTJ', 'ENFJ'],
      goodMatch: ['ISTP', 'ESTP', 'ISFP'],
      challengingMatch: ['ENFJ', 'INFJ', 'ENFP']
    },
    'ISFP': {
      bestMatch: ['ENFJ', 'ESFJ', 'ESTJ'],
      goodMatch: ['ISFP', 'INFP', 'ESFP'],
      challengingMatch: ['ENTJ', 'ESTJ', 'ENTP']
    },
    'ESTP': {
      bestMatch: ['ISFJ', 'ISTJ', 'INFJ'],
      goodMatch: ['ESTP', 'ESFP', 'ISTP'],
      challengingMatch: ['INFJ', 'INTJ', 'INFP']
    },
    'ESFP': {
      bestMatch: ['ISFJ', 'ISTJ', 'INFJ'],
      goodMatch: ['ESFP', 'ENFP', 'ISFP'],
      challengingMatch: ['INTJ', 'INTP', 'ENTJ']
    }
  };
