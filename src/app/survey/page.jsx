'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../../contexts/LanguageContext';

export default function SurveyPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const { t } = useLanguage();

  // Senior-optimized 24 questions (2 choices each) - English Version
  const questions = [
    // E/I Dimension - 6 questions
    {
      id: 1,
      category: 'E/I',
      text: 'How do you prefer to spend time with friends and acquaintances?',
      choices: [
        { id: 'A', text: 'I enjoy gathering with many people for conversations and activities', type: 'E' },
        { id: 'B', text: 'I prefer quiet conversations with a few close friends', type: 'I' }
      ]
    },
    {
      id: 2,
      category: 'E/I',
      text: 'When you\'re tired at the end of the day, how do you prefer to recharge?',
      choices: [
        { id: 'A', text: 'I spend time talking with family or friends', type: 'E' },
        { id: 'B', text: 'I prefer to have quiet time alone to rest', type: 'I' }
      ]
    },
    {
      id: 3,
      category: 'E/I',
      text: 'How do you typically behave when meeting new people?',
      choices: [
        { id: 'A', text: 'I approach them first and start conversations', type: 'E' },
        { id: 'B', text: 'I wait for them to approach me first', type: 'I' }
      ]
    },
    {
      id: 4,
      category: 'E/I',
      text: 'What activities do you prefer on weekends or holidays?',
      choices: [
        { id: 'A', text: 'I participate in outings or gatherings with friends and family', type: 'E' },
        { id: 'B', text: 'I enjoy solo activities at home like reading or watching movies', type: 'I' }
      ]
    },
    {
      id: 5,
      category: 'E/I',
      text: 'What is your preference regarding phone conversations?',
      choices: [
        { id: 'A', text: 'I enjoy talking on the phone and call frequently', type: 'E' },
        { id: 'B', text: 'Unless urgent, I prefer texting or written messages', type: 'I' }
      ]
    },
    {
      id: 6,
      category: 'E/I',
      text: 'How do you behave at lectures or group meetings?',
      choices: [
        { id: 'A', text: 'I actively participate and share my opinions with others', type: 'E' },
        { id: 'B', text: 'I mostly listen and speak thoughtfully after careful consideration', type: 'I' }
      ]
    },
    
    // S/N Dimension - 6 questions
    {
      id: 7,
      category: 'S/N',
      text: 'When learning something new, which approach do you prefer?',
      choices: [
        { id: 'A', text: 'I learn step by step through concrete facts and real experiences', type: 'S' },
        { id: 'B', text: 'I try to understand the overall meaning and possibilities first', type: 'N' }
      ]
    },
    {
      id: 8,
      category: 'S/N',
      text: 'When solving problems, which approach do you prefer?',
      choices: [
        { id: 'A', text: 'I use past experiences and proven methods', type: 'S' },
        { id: 'B', text: 'I look for new ideas and creative solutions', type: 'N' }
      ]
    },
    {
      id: 9,
      category: 'S/N',
      text: 'What topics do you prefer when having conversations?',
      choices: [
        { id: 'A', text: 'I share concrete daily stories and practical information', type: 'S' },
        { id: 'B', text: 'I discuss future dreams and philosophical thoughts', type: 'N' }
      ]
    },
    {
      id: 10,
      category: 'S/N',
      text: 'When planning a trip, what do you focus on most?',
      choices: [
        { id: 'A', text: 'I prefer familiar places or well-known destinations', type: 'S' },
        { id: 'B', text: 'I look forward to discovering new places and unexpected experiences', type: 'N' }
      ]
    },
    {
      id: 11,
      category: 'S/N',
      text: 'When working on tasks, which approach do you prefer?',
      choices: [
        { id: 'A', text: 'I proceed step by step and check details carefully', type: 'S' },
        { id: 'B', text: 'I grasp the overall flow and start with the big picture', type: 'N' }
      ]
    },
    {
      id: 12,
      category: 'S/N',
      text: 'When reading books or watching movies, what do you prefer?',
      choices: [
        { id: 'A', text: 'I prefer realistic content based on actual experiences', type: 'S' },
        { id: 'B', text: 'I prefer imaginative content that shows new worlds', type: 'N' }
      ]
    },
    
    // T/F Dimension - 6 questions
    {
      id: 13,
      category: 'T/F',
      text: 'When making important decisions, what do you consider most important?',
      choices: [
        { id: 'A', text: 'I make judgments based on objective facts and logical analysis', type: 'T' },
        { id: 'B', text: 'I primarily consider the feelings and relationships of people involved', type: 'F' }
      ]
    },
    {
      id: 14,
      category: 'T/F',
      text: 'When someone makes a mistake, how do you respond?',
      choices: [
        { id: 'A', text: 'I focus on the cause of the problem and point out solutions', type: 'T' },
        { id: 'B', text: 'I first consider their feelings and offer encouragement and comfort', type: 'F' }
      ]
    },
    {
      id: 15,
      category: 'T/F',
      text: 'In arguments or conflict situations, what attitude do you take?',
      choices: [
        { id: 'A', text: 'I make fair judgments based on facts and logic', type: 'T' },
        { id: 'B', text: 'I try to understand everyone\'s feelings and create harmony', type: 'F' }
      ]
    },
    {
      id: 16,
      category: 'T/F',
      text: 'When giving advice, how do you help others?',
      choices: [
        { id: 'A', text: 'I suggest practical solutions that can be helpful in the future', type: 'T' },
        { id: 'B', text: 'I empathize with their emotions and offer comfort and encouragement', type: 'F' }
      ]
    },
    {
      id: 17,
      category: 'T/F',
      text: 'When evaluating others, what do you consider most important?',
      choices: [
        { id: 'A', text: 'I objectively assess their abilities, performance, and achievements', type: 'T' },
        { id: 'B', text: 'I first consider their intentions, efforts, and human qualities', type: 'F' }
      ]
    },
    {
      id: 18,
      category: 'T/F',
      text: 'When deciding on important matters, which standards do you prioritize?',
      choices: [
        { id: 'A', text: 'I emphasize fairness, principles, and consistent standards', type: 'T' },
        { id: 'B', text: 'I prioritize human emotions and personal circumstances', type: 'F' }
      ]
    },
    
    // J/P Dimension - 6 questions
    {
      id: 19,
      category: 'J/P',
      text: 'How do you prefer to manage your daily life?',
      choices: [
        { id: 'A', text: 'I plan ahead and proceed systematically according to schedule', type: 'J' },
        { id: 'B', text: 'I respond flexibly to situations and let things flow naturally', type: 'P' }
      ]
    },
    {
      id: 20,
      category: 'J/P',
      text: 'How do you feel when you have unfinished tasks?',
      choices: [
        { id: 'A', text: 'I feel uncomfortable and worried, wanting to finish quickly', type: 'J' },
        { id: 'B', text: 'I don\'t need to rush and can proceed slowly', type: 'P' }
      ]
    },
    {
      id: 21,
      category: 'J/P',
      text: 'What are your thoughts about appointments and plans?',
      choices: [
        { id: 'A', text: 'I think appointments are important commitments that must be kept', type: 'J' },
        { id: 'B', text: 'I think they are flexible guidelines that can change based on circumstances', type: 'P' }
      ]
    },
    {
      id: 22,
      category: 'J/P',
      text: 'When traveling, which style do you prefer?',
      choices: [
        { id: 'A', text: 'I book all schedules, accommodations, and tourist spots in advance', type: 'J' },
        { id: 'B', text: 'I make rough plans and decide spontaneously at the destination', type: 'P' }
      ]
    },
    {
      id: 23,
      category: 'J/P',
      text: 'When working on projects, which approach do you prefer?',
      choices: [
        { id: 'A', text: 'I proceed step by step from beginning to end in order', type: 'J' },
        { id: 'B', text: 'I start with what I want to do and proceed freely', type: 'P' }
      ]
    },
    {
      id: 24,
      category: 'J/P',
      text: 'In situations where you need to make choices, what are you like?',
      choices: [
        { id: 'A', text: 'After sufficient consideration, I decide and don\'t change it', type: 'J' },
        { id: 'B', text: 'I often postpone decisions and decide at the last moment', type: 'P' }
      ]
    }
  ];

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];

  const handleChoiceSelect = (choiceId) => {
    setSelectedChoice(choiceId);
  };

  const handleNext = () => {
    if (selectedChoice === null) return;

    const newAnswers = [...answers, {
      questionId: questions[currentQuestion].id,
      choice: selectedChoice,
      type: questions[currentQuestion].choices.find(c => c.id === selectedChoice).type,
      category: questions[currentQuestion].category
    }];
    
    setAnswers(newAnswers);
    setSelectedChoice(null);

    console.log(`Current Question: ${currentQuestion + 1}, Total Questions: ${questions.length}`);
    console.log(`New Answers Length: ${newAnswers.length}`);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log('Last question completed, calling calculateAndRedirect with answers:', newAnswers);
      calculateAndRedirect(newAnswers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedChoice(answers[currentQuestion - 1] || null);
      const newAnswers = answers.slice(0, -1);
      setAnswers(newAnswers);
    }
  };

  const calculateAndRedirect = async (finalAnswers) => {
    console.log('calculateAndRedirect called with answers:', finalAnswers);
    setIsSubmitting(true);
    
    try {
      // State update delay for completion
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Calculate MBTI type
      const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
      
      finalAnswers.forEach(answer => {
        scores[answer.type]++;
      });

      console.log('Calculated scores:', scores);

      const mbtiType = 
        (scores.E > scores.I ? 'E' : 'I') +
        (scores.S > scores.N ? 'S' : 'N') +
        (scores.T > scores.F ? 'T' : 'F') +
        (scores.J > scores.P ? 'J' : 'P');

      console.log('Calculated MBTI Type:', mbtiType);

      // MBTI type validation
      const validTypes = ['INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'INFP', 'ENFJ', 'ENFP', 
                         'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP'];
      
      if (validTypes.includes(mbtiType)) {
        // Save to localStorage for backup
        const resultData = {
          mbtiType,
          scores,
          answers: finalAnswers,
          completedAt: new Date().toISOString(),
          language: 'en'
        };
        
        localStorage.setItem(`mbti-result-${mbtiType}`, JSON.stringify(resultData));
        
        console.log('About to redirect to:', `/result/${mbtiType.toLowerCase()}`);
        
        // Additional delay for stable navigation
        await new Promise(resolve => setTimeout(resolve, 200));
        
        // Use replace to prevent back navigation issues
        router.replace(`/result/${mbtiType.toLowerCase()}`);
      } else {
        throw new Error(`Invalid MBTI type calculated: ${mbtiType}`);
      }
    } catch (error) {
      console.error('Error calculating results:', error);
      alert('An error occurred while calculating results. Please try again.');
      setIsSubmitting(false);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === '1') {
        setSelectedChoice('A');
      } else if (e.key === '2') {
        setSelectedChoice('B');
      } else if (e.key === 'Enter' && selectedChoice !== null) {
        handleNext();
      } else if (e.key === 'Escape') {
        router.push('/');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedChoice, currentQ, router]);

  return (
    <div className="survey-container">
      {/* Progress Bar */}
      <div className="progress-header">
        <div className="progress-info">
          <span className="progress-text">Question {currentQuestion + 1} / {questions.length}</span>
          <span className="progress-percent">{Math.round(progress)}%</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="question-card">
        <div className="question-category">
          {currentQ.category} Dimension · Question {currentQuestion + 1}
        </div>
        
        <h2 className="question-text">
          {currentQ.text}
        </h2>

        <div className="choices-container">
          {currentQ.choices.map((choice) => (
            <button
              key={choice.id}
              className={`choice-button ${selectedChoice === choice.id ? 'selected' : ''}`}
              onClick={() => handleChoiceSelect(choice.id)}
            >
              <div className="choice-label">{choice.id}</div>
              <div className="choice-text">{choice.text}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button
          className="nav-button prev-button"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          Previous Question
        </button>
        
        <button
          className="nav-button next-button"
          onClick={handleNext}
          disabled={selectedChoice === null || isSubmitting}
        >
          {isSubmitting ? 'Processing...' : 
           currentQuestion === questions.length - 1 ? 'Get Results' : 'Next Question'}
        </button>
      </div>

      <style jsx>{`
        .survey-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          padding: 20px;
          display: flex;
          flex-direction: column;
        }

        .survey-container::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 120, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 226, 0.2) 0%, transparent 50%);
          pointer-events: none;
        }

        .progress-header {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 24px;
          padding: 32px;
          margin-bottom: 32px;
          box-shadow: 
            0 32px 64px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.4);
          position: relative;
          z-index: 10;
        }

        .progress-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .progress-text {
          font-size: 20px;
          font-weight: 700;
          color: #1F2937;
          background: linear-gradient(45deg, #1F2937, #4F46E5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .progress-percent {
          font-size: 24px;
          font-weight: 800;
          background: linear-gradient(45deg, #4F46E5, #7C3AED);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 20px rgba(79, 70, 229, 0.3);
        }

        .progress-bar {
          width: 100%;
          height: 12px;
          background: rgba(229, 231, 235, 0.8);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #4F46E5, #7C3AED, #EC4899);
          border-radius: 12px;
          transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 
            0 0 20px rgba(79, 70, 229, 0.5),
            inset 0 1px 2px rgba(255, 255, 255, 0.3);
          position: relative;
        }

        .progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 20px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4));
          animation: shine 2s infinite;
        }

        @keyframes shine {
          0% { transform: translateX(-20px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(20px); opacity: 0; }
        }

        .question-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 32px;
          padding: 48px;
          margin-bottom: 32px;
          box-shadow: 
            0 32px 64px rgba(0, 0, 0, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.4);
          flex: 1;
          position: relative;
          z-index: 10;
          overflow: hidden;
        }

        .question-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(79, 70, 229, 0.5), transparent);
        }

        .question-category {
          display: inline-flex;
          align-items: center;
          background: linear-gradient(135deg, #4F46E5, #7C3AED);
          color: white;
          padding: 12px 24px;
          border-radius: 25px;
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 32px;
          box-shadow: 
            0 8px 25px rgba(79, 70, 229, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
        }

        .question-category::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          animation: categoryShine 3s infinite;
        }

        @keyframes categoryShine {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .question-text {
          font-size: 32px;
          font-weight: 800;
          background: linear-gradient(135deg, #1F2937, #4F46E5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.3;
          margin-bottom: 48px;
          position: relative;
        }

        .choices-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .choice-button {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 32px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(229, 231, 235, 0.8);
          border-radius: 24px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: left;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        .choice-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.05), rgba(124, 58, 237, 0.05));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .choice-button:hover {
          border-color: rgba(79, 70, 229, 0.5);
          background: rgba(255, 255, 255, 0.95);
          transform: translateY(-4px) scale(1.02);
          box-shadow: 
            0 20px 40px rgba(79, 70, 229, 0.15),
            0 0 0 1px rgba(79, 70, 229, 0.1);
        }

        .choice-button:hover::before {
          opacity: 1;
        }

        .choice-button.selected {
          border-color: #4F46E5;
          background: linear-gradient(135deg, 
            rgba(238, 242, 255, 0.9), 
            rgba(243, 232, 255, 0.9));
          box-shadow: 
            0 0 0 2px rgba(79, 70, 229, 0.3),
            0 20px 40px rgba(79, 70, 229, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.5);
          transform: translateY(-2px) scale(1.01);
        }

        .choice-button.selected::before {
          opacity: 1;
        }

        .choice-label {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #4F46E5, #7C3AED);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 800;
          flex-shrink: 0;
          box-shadow: 
            0 8px 25px rgba(79, 70, 229, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
        }

        .choice-label::after {
          content: '';
          position: absolute;
          inset: 2px;
          border-radius: 50%;
          background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.2));
        }

        .choice-text {
          font-size: 20px;
          font-weight: 600;
          color: #374151;
          line-height: 1.5;
          flex: 1;
        }

        .navigation-buttons {
          display: flex;
          justify-content: space-between;
          gap: 24px;
          position: relative;
          z-index: 10;
        }

        .nav-button {
          flex: 1;
          padding: 20px 32px;
          border: none;
          border-radius: 20px;
          font-size: 20px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .prev-button {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          color: #6B7280;
          border: 2px solid rgba(229, 231, 235, 0.8);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .prev-button:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.95);
          border-color: #D1D5DB;
          color: #374151;
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
        }

        .prev-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .next-button {
          background: linear-gradient(135deg, #4F46E5, #7C3AED);
          color: white;
          box-shadow: 
            0 8px 25px rgba(79, 70, 229, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .next-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .next-button:hover:not(:disabled) {
          background: linear-gradient(135deg, #4338CA, #6D28D9);
          transform: translateY(-4px);
          box-shadow: 
            0 16px 40px rgba(79, 70, 229, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        .next-button:hover:not(:disabled)::before {
          opacity: 1;
        }

        .next-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .survey-container {
            padding: 16px;
          }

          .progress-header {
            padding: 24px;
            margin-bottom: 24px;
          }

          .question-card {
            padding: 32px 24px;
          }

          .question-text {
            font-size: 26px;
          }

          .choice-button {
            padding: 24px 20px;
            gap: 20px;
          }

          .choice-label {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }

          .choice-text {
            font-size: 18px;
          }

          .navigation-buttons {
            flex-direction: column;
            gap: 16px;
          }

          .nav-button {
            font-size: 18px;
            padding: 18px 24px;
          }
        }

        /* Accessibility Support */
        @media (prefers-reduced-motion: reduce) {
          .choice-button,
          .nav-button,
          .progress-fill,
          .question-category::before,
          .progress-fill::after {
            animation: none;
            transition: none;
          }
        }

        /* High Contrast Mode */
        @media (prefers-contrast: high) {
          .choice-button {
            border-width: 3px;
          }
          
          .choice-button.selected {
            border-width: 4px;
          }
          
          .progress-header,
          .question-card {
            border-width: 2px;
          }
        }

        /* Dark Mode Support */
        @media (prefers-color-scheme: dark) {
          .progress-header,
          .question-card {
            background: rgba(17, 24, 39, 0.95);
            border-color: rgba(75, 85, 99, 0.3);
          }
          
          .choice-button {
            background: rgba(31, 41, 55, 0.9);
            border-color: rgba(75, 85, 99, 0.5);
          }
          
          .choice-text {
            color: #E5E7EB;
          }
          
          .progress-text {
            color: #E5E7EB;
          }
        }
      `}</style>
    </div>
  );
}