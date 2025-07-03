'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ResultPage() {
  const params = useParams();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [showCopySuccess, setShowCopySuccess] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Load result data from localStorage
    const resultId = params.id;
    if (resultId && typeof window !== 'undefined') {
      const storedData = localStorage.getItem(`mbti-result-${resultId}`);
      if (storedData) {
        setResultData(JSON.parse(storedData));
      }
    }
  }, [params.id]);

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

  const copyResultLink = () => {
    if (mounted && typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setShowCopySuccess(true);
      setTimeout(() => {
        setShowCopySuccess(false);
        setShowShareDialog(false);
      }, 2000);
    }
  };

  if (!mounted || !resultData) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading your results...</p>
        
        <style jsx>{`
          .loading-container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }
          
          .loading-spinner {
            width: 40px;
            height: 40px;
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top: 4px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 20px;
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  const typeInfo = mbtiTypes[resultData.mbtiType] || mbtiTypes['INTJ'];

  return (
    <div className="result-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="type-badge">
            <span className="type-emoji">{typeInfo.emoji}</span>
            <div className="type-info">
              <h1 className="type-title">{typeInfo.type}</h1>
              <p className="type-subtitle">{typeInfo.title}</p>
            </div>
          </div>
          
          <h2 className="hero-title">{typeInfo.subtitle}</h2>
          <p className="hero-description">{typeInfo.description}</p>
          
          <div className="action-buttons">
            <button 
              className="share-button"
              onClick={() => setShowShareDialog(true)}
            >
              <span>🔗</span> Share Results
            </button>
            <button 
              className="home-button"
              onClick={() => router.push('/')}
            >
              <span>🏠</span> Take Test Again
            </button>
          </div>
        </div>
      </div>

      {/* Detailed Analysis Section */}
      <div className="analysis-section">
        <div className="analysis-grid">
          {/* Strengths Card */}
          <div className="analysis-card strengths-card">
            <div className="card-header">
              <h3>💪 Key Strengths</h3>
            </div>
            <div className="card-content">
              {typeInfo.strengths.map((strength, index) => (
                <div key={index} className="strength-item">
                  <span className="bullet">✨</span>
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges Card */}
          <div className="analysis-card challenges-card">
            <div className="card-header">
              <h3>🎯 Growth Points</h3>
            </div>
            <div className="card-content">
              {typeInfo.challenges.map((challenge, index) => (
                <div key={index} className="challenge-item">
                  <span className="bullet">🔍</span>
                  <span>{challenge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Activities Card */}
          <div className="analysis-card careers-card">
            <div className="card-header">
              <h3>🌟 Recommended Activities</h3>
            </div>
            <div className="card-content">
              {typeInfo.careers.map((career, index) => (
                <div key={index} className="career-item">
                  <span className="bullet">🎨</span>
                  <span>{career}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Relationships Card */}
          <div className="analysis-card relationships-card">
            <div className="card-header">
              <h3>❤️ Relationships</h3>
            </div>
            <div className="card-content">
              <p className="relationship-text">{typeInfo.relationships}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Compatibility Information Section */}
      <div className="compatibility-section">
        <div className="section-header">
          <h2 className="section-title">💕 MBTI Types That Match Well With You</h2>
          <p className="section-subtitle">Relationships become even more precious in our senior years. Which personality types are you most compatible with?</p>
        </div>
        
        <div className="compatibility-grid">
          {/* Best Match */}
          <div className="compatibility-card best-match">
            <div className="card-header">
              <h3>💖 Perfect Match</h3>
              <p>Types with whom you can build deep and meaningful relationships</p>
            </div>
            <div className="card-content">
              {mbtiCompatibility[resultData.mbtiType]?.bestMatch.map((type, index) => (
                <div key={index} className="compatibility-item">
                  <span className="type-badge-small">{type}</span>
                  <span className="type-name">{mbtiTypes[type]?.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Good Match */}
          <div className="compatibility-card good-match">
            <div className="card-header">
              <h3>😊 Good Match</h3>
              <p>Types with whom you can maintain comfortable and stable relationships</p>
            </div>
            <div className="card-content">
              {mbtiCompatibility[resultData.mbtiType]?.goodMatch.map((type, index) => (
                <div key={index} className="compatibility-item">
                  <span className="type-badge-small">{type}</span>
                  <span className="type-name">{mbtiTypes[type]?.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenging Match */}
          <div className="compatibility-card challenging-match">
            <div className="card-header">
              <h3>🤔 Growth Match</h3>
              <p>Types with whom you can grow by understanding differences</p>
            </div>
            <div className="card-content">
              {mbtiCompatibility[resultData.mbtiType]?.challengingMatch.map((type, index) => (
                <div key={index} className="compatibility-item">
                  <span className="type-badge-small">{type}</span>
                  <span className="type-name">{mbtiTypes[type]?.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Senior-Specific Advice Section */}
      <div className="senior-advice-section">
        <div className="section-header">
          <h2 className="section-title">🎯 Senior Life Guide Tailored to You</h2>
          <p className="section-subtitle">Personalized senior lifestyle advice based on your personality type</p>
        </div>
        
        <div className="advice-grid">
          {/* Lifestyle Advice Card */}
          <div className="advice-card lifestyle-card">
            <div className="card-header">
              <h3>🌟 Lifestyle Advice</h3>
            </div>
            <div className="card-content">
              {typeInfo.seniorTips?.map((tip, index) => (
                <div key={index} className="advice-item">
                  <span className="bullet">💡</span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Health Management Card */}
          <div className="advice-card health-card">
            <div className="card-header">
              <h3>🏥 Health Management Advice</h3>
            </div>
            <div className="card-content">
              {typeInfo.healthTips?.map((tip, index) => (
                <div key={index} className="advice-item">
                  <span className="bullet">🌿</span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {showShareDialog && (
        <div className="modal-overlay" onClick={() => setShowShareDialog(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Share Results</h3>
              <button 
                className="close-button"
                onClick={() => setShowShareDialog(false)}
              >
                ×
              </button>
            </div>
            
            <div className="modal-body">
              {showCopySuccess ? (
                <div className="success-message">
                  <span className="success-icon">✅</span>
                  <p>Link has been copied to clipboard!</p>
                </div>
              ) : (
                <button className="copy-button" onClick={copyResultLink}>
                  <span>📋</span> Copy Link
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .result-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow-x: hidden;
        }

        .result-container::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 120, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 226, 0.2) 0%, transparent 50%);
          pointer-events: none;
        }

        .hero-section {
          position: relative;
          z-index: 10;
          padding: 60px 20px 80px;
          text-align: center;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .type-badge {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 30px;
          padding: 24px 40px;
          margin-bottom: 40px;
          box-shadow: 
            0 32px 64px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.4);
        }

        .type-emoji {
          font-size: 48px;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
        }

        .type-info {
          text-align: left;
        }

        .type-title {
          font-size: 48px;
          font-weight: 900;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
          letter-spacing: -1px;
        }

        .type-subtitle {
          font-size: 18px;
          color: #6B7280;
          margin: 8px 0 0 0;
          font-weight: 600;
        }

        .hero-title {
          font-size: 36px;
          font-weight: 800;
          color: white;
          margin-bottom: 24px;
          text-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        }

        .hero-description {
          font-size: 20px;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin-bottom: 48px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .action-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .share-button, .home-button {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          border: none;
          border-radius: 20px;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }

        .share-button {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }

        .home-button {
          background: rgba(255, 255, 255, 0.9);
          color: #374151;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .share-button:hover, .home-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(102, 126, 234, 0.5);
        }

        .analysis-section {
          position: relative;
          z-index: 10;
          padding: 0 20px 80px;
        }

        .analysis-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }

        .analysis-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 24px;
          padding: 32px;
          box-shadow: 
            0 32px 64px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.4);
          transition: transform 0.3s ease;
        }

        .analysis-card:hover {
          transform: translateY(-8px);
        }

        .card-header {
          margin-bottom: 24px;
        }

        .card-header h3 {
          font-size: 24px;
          font-weight: 800;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
        }

        .card-content {
          space-y: 16px;
        }

        .strength-item, .challenge-item, .career-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
          font-size: 16px;
          line-height: 1.6;
          color: #374151;
        }

        .bullet {
          font-size: 18px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .relationship-text {
          font-size: 16px;
          line-height: 1.6;
          color: #374151;
          margin: 0;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-content {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 24px;
          padding: 32px;
          min-width: 400px;
          box-shadow: 0 32px 64px rgba(0, 0, 0, 0.2);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .modal-header h3 {
          font-size: 24px;
          font-weight: 800;
          color: #374151;
          margin: 0;
        }

        .close-button {
          background: none;
          border: none;
          font-size: 24px;
          color: #6B7280;
          cursor: pointer;
          padding: 4px;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background 0.2s ease;
        }

        .close-button:hover {
          background: rgba(107, 114, 128, 0.1);
        }

        .copy-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 16px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          border-radius: 16px;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .copy-button:hover {
          transform: translateY(-2px);
        }

        .success-message {
          text-align: center;
          padding: 20px;
        }

        .success-icon {
          font-size: 48px;
          display: block;
          margin-bottom: 16px;
        }

        .success-message p {
          font-size: 18px;
          color: #10B981;
          font-weight: 600;
          margin: 0;
        }

        /* Compatibility and Senior Advice Sections */
        .compatibility-section, .senior-advice-section {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          padding: 60px 24px;
          margin: 40px 0;
        }

        .section-title {
          font-size: 32px;
          font-weight: 800;
          color: #1e293b;
          text-align: center;
          margin-bottom: 8px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 18px;
          color: #64748b;
          text-align: center;
          margin-bottom: 40px;
          font-weight: 500;
        }

        .compatibility-grid, .advice-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .compatibility-card, .advice-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .compatibility-card:hover, .advice-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 32px 64px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        .card-title {
          font-size: 20px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .card-icon {
          font-size: 24px;
        }

        .perfect-match {
          border-left: 4px solid #10b981;
        }

        .good-match {
          border-left: 4px solid #3b82f6;
        }

        .growth-match {
          border-left: 4px solid #f59e0b;
        }

        .compatibility-item, .advice-item {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
          padding: 12px;
          background: rgba(248, 250, 252, 0.8);
          border-radius: 12px;
          transition: all 0.2s ease;
        }

        .compatibility-item:hover, .advice-item:hover {
          background: rgba(241, 245, 249, 0.9);
          transform: translateX(4px);
        }

        .type-badge-small {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 32px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 800;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .type-name {
          font-size: 16px;
          font-weight: 600;
          color: #374151;
          flex: 1;
        }

        .advice-item .bullet {
          font-size: 20px;
          flex-shrink: 0;
        }

        .advice-item span:last-child {
          font-size: 16px;
          line-height: 1.6;
          color: #374151;
          flex: 1;
        }

        .lifestyle-card {
          border-left: 4px solid #f59e0b;
        }

        .health-card {
          border-left: 4px solid #059669;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .hero-section {
            padding: 40px 16px 60px;
          }

          .type-badge {
            flex-direction: column;
            gap: 16px;
            padding: 20px;
          }

          .type-info {
            text-align: center;
          }

          .type-title {
            font-size: 36px;
          }

          .hero-title {
            font-size: 28px;
          }

          .hero-description {
            font-size: 18px;
          }

          .action-buttons {
            flex-direction: column;
            align-items: center;
          }

          .share-button, .home-button {
            width: 100%;
            max-width: 300px;
          }

          .analysis-section {
            padding: 0 16px 60px;
          }

          .analysis-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .analysis-card {
            padding: 24px;
          }

          .modal-content {
            margin: 20px;
            min-width: unset;
            width: calc(100% - 40px);
          }

          .compatibility-section, .senior-advice-section {
            padding: 40px 16px;
          }

          .section-title {
            font-size: 26px;
          }

          .section-subtitle {
            font-size: 16px;
          }

          .compatibility-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .advice-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .compatibility-card, .advice-card {
            padding: 24px;
          }

          .compatibility-item, .advice-item {
            gap: 12px;
            padding: 16px 12px;
          }

          .type-badge-small {
            width: 40px;
            height: 28px;
            font-size: 11px;
          }

          .type-name {
            font-size: 14px;
          }

          .advice-item span:last-child {
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  );
}