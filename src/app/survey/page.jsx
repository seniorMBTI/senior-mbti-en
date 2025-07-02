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
      text: 'When planning travel, what do you focus on more?',
      choices: [
        { id: 'A', text: 'I prefer places I\'ve been before or well-known destinations', type: 'S' },
        { id: 'B', text: 'I look forward to new places and unexpected discoveries', type: 'N' }
      ]
    },
    {
      id: 11,
      category: 'S/N',
      text: 'When working on tasks, which approach do you prefer?',
      choices: [
        { id: 'A', text: 'I proceed step by step and check details carefully', type: 'S' },
        { id: 'B', text: 'I understand the overall flow and draw the big picture first', type: 'N' }
      ]
    },
    {
      id: 12,
      category: 'S/N',
      text: 'When reading books or watching movies, what do you prefer?',
      choices: [
        { id: 'A', text: 'I prefer realistic content based on actual experiences', type: 'S' },
        { id: 'B', text: 'I prefer content that stimulates imagination and shows new worlds', type: 'N' }
      ]
    },
    
    // T/F Dimension - 6 questions
    {
      id: 13,
      category: 'T/F',
      text: 'When making important decisions, what do you consider most important?',
      choices: [
        { id: 'A', text: 'I make judgments based on objective facts and logical analysis', type: 'T' },
        { id: 'B', text: 'I prioritize the feelings and relationships of people involved', type: 'F' }
      ]
    },
    {
      id: 14,
      category: 'T/F',
      text: 'How do you respond when someone makes a mistake?',
      choices: [
        { id: 'A', text: 'I focus on the cause of the problem and point out solutions', type: 'T' },
        { id: 'B', text: 'I consider their feelings first and offer encouragement and comfort', type: 'F' }
      ]
    },
    {
      id: 15,
      category: 'T/F',
      text: 'What attitude do you take in arguments or conflict situations?',
      choices: [
        { id: 'A', text: 'I make fair judgments based on facts and logic', type: 'T' },
        { id: 'B', text: 'I consider everyone\'s feelings and strive for harmony', type: 'F' }
      ]
    },
    {
      id: 16,
      category: 'T/F',
      text: 'When giving advice, how do you help others?',
      choices: [
        { id: 'A', text: 'I provide practical solutions that will be helpful in the future', type: 'T' },
        { id: 'B', text: 'I empathize with their emotions and offer comfort and encouragement', type: 'F' }
      ]
    },
    {
      id: 17,
      category: 'T/F',
      text: 'When evaluating others, what do you consider more important?',
      choices: [
        { id: 'A', text: 'I objectively assess their abilities and achievements', type: 'T' },
        { id: 'B', text: 'I first consider their intentions, efforts, and human qualities', type: 'F' }
      ]
    },
    {
      id: 18,
      category: 'T/F',
      text: 'When making important decisions, which criteria do you value more?',
      choices: [
        { id: 'A', text: 'I value fairness, principles, and consistent standards', type: 'T' },
        { id: 'B', text: 'I prioritize human emotions and individual circumstances', type: 'F' }
      ]
    },
    
    // J/P Dimension - 6 questions
    {
      id: 19,
      category: 'J/P',
      text: 'How do you prefer to manage your daily life?',
      choices: [
        { id: 'A', text: 'I make plans in advance and proceed systematically according to schedule', type: 'J' },
        { id: 'B', text: 'I respond flexibly to situations and let things flow naturally', type: 'P' }
      ]
    },
    {
      id: 20,
      category: 'J/P',
      text: 'How do you feel when you have unfinished tasks?',
      choices: [
        { id: 'A', text: 'I feel uncomfortable and anxious, wanting to finish them quickly', type: 'J' },
        { id: 'B', text: 'I don\'t feel rushed and am okay with proceeding slowly', type: 'P' }
      ]
    },
    {
      id: 21,
      category: 'J/P',
      text: 'What are your thoughts on appointments and plans?',
      choices: [
        { id: 'A', text: 'I think appointments are important commitments that must be kept', type: 'J' },
        { id: 'B', text: 'I think of them as flexible guidelines that can change with circumstances', type: 'P' }
      ]
    },
    {
      id: 22,
      category: 'J/P',
      text: 'What style do you prefer when going on trips?',
      choices: [
        { id: 'A', text: 'I book everything in advance - schedule, accommodation, and attractions', type: 'J' },
        { id: 'B', text: 'I make rough plans and decide things spontaneously at the destination', type: 'P' }
      ]
    },
    {
      id: 23,
      category: 'J/P',
      text: 'When working on tasks, which approach do you prefer?',
      choices: [
        { id: 'A', text: 'I proceed step by step from beginning to end in order', type: 'J' },
        { id: 'B', text: 'I start with what I want to do and proceed freely', type: 'P' }
      ]
    },
    {
      id: 24,
      category: 'J/P',
      text: 'How do you behave when you need to make choices?',
      choices: [
        { id: 'A', text: 'After sufficient consideration, I make a decision and don\'t change it', type: 'J' },
        { id: 'B', text: 'I often postpone choices and decide at the last moment', type: 'P' }
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

    const newAnswers = [...answers, selectedChoice];
    setAnswers(newAnswers);
    setSelectedChoice(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit(newAnswers);
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

  const handleSubmit = async (finalAnswers) => {
    setIsSubmitting(true);
    
    // Senior-friendly loading time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // MBTI score calculation (24 questions, 6 per dimension)
    const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    
    finalAnswers.forEach((answer, index) => {
      const question = questions[index];
      const choice = question.choices.find(c => c.id === answer);
      if (choice) {
        scores[choice.type]++;
      }
    });
    
    // Determine MBTI type
    const mbtiType = 
      (scores.E > scores.I ? 'E' : 'I') +
      (scores.S > scores.N ? 'S' : 'N') +
      (scores.T > scores.F ? 'T' : 'F') +
      (scores.J > scores.P ? 'J' : 'P');
    
    console.log('MBTI scores:', scores);
    console.log('Final type:', mbtiType);
    
    router.push(`/result/${mbtiType}`);
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
      {/* Header */}
      <header className="survey-header">
        <div className="container">
          <div className="header-content">
            <button 
              onClick={() => router.push('/')}
              className="back-button"
              aria-label="Return to home"
            >
              ← {t('survey.home')}
            </button>
            
            <div className="progress-info">
              <span className="question-counter">
                {currentQuestion + 1} / {questions.length}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="survey-main">
        <div className="container">
          {/* Progress Bar */}
          <div className="progress-section">
            <div className="progress-label">
              <span className="progress-text">{t('survey.progress')}</span>
              <span className="progress-percentage">{Math.round(progress)}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="question-card">
            <div className="question-header">
              <div className="question-number">
                <span className="question-icon">❓</span>
                <span className="question-label">
                  {t('survey.question')} {currentQuestion + 1}
                </span>
              </div>
              
              {currentQuestion < questions.length - 1 ? (
                <div className="remaining-questions">
                  {questions.length - currentQuestion - 1} remaining
                </div>
              ) : (
                <div className="final-question">
                  Final question!
                </div>
              )}
            </div>

            <div className="question-content">
              <h2 className="question-text">
                {currentQ.text}
              </h2>
              
              <p className="question-hint">
                {t('survey.hint')}
              </p>

              <div className="choices-container">
                {currentQ.choices.map((choice, index) => (
                  <button
                    key={choice.id}
                    onClick={() => handleChoiceSelect(choice.id)}
                    className={`choice-button senior-choice ${
                      selectedChoice === choice.id ? 'choice-selected' : ''
                    }`}
                    aria-label={`Choice ${choice.id}: ${choice.text}`}
                  >
                    <div className="choice-label">
                      <span className="choice-letter">{choice.id}</span>
                      <span className="choice-number">({index + 1} key)</span>
                    </div>
                    <div className="choice-content">
                      <span className="choice-text">{choice.text}</span>
                    </div>
                    <div className="choice-indicator">
                      {selectedChoice === choice.id && (
                        <div className="selected-icon">✓</div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="navigation">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="nav-button nav-previous"
            >
              <span className="nav-icon">←</span>
              <span className="nav-text">{t('survey.previous')}</span>
            </button>

            <div className="nav-center">
              <div className="keyboard-hint">
                💡 Keyboard shortcuts: 1(A) / 2(B)
              </div>
            </div>

            <button
              onClick={handleNext}
              disabled={selectedChoice === null}
              className={`nav-button nav-next ${isSubmitting ? 'nav-submitting' : ''}`}
            >
              <span className="nav-text">
                {isSubmitting ? t('survey.processing') : 
                 currentQuestion === questions.length - 1 ? t('survey.submit') : t('survey.next')}
              </span>
              {isSubmitting ? (
                <div className="loading-spinner">
                  <div className="spinner"></div>
                </div>
              ) : (
                <span className="nav-icon">→</span>
              )}
            </button>
          </div>
        </div>
      </main>

      <style jsx>{`
        .survey-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Header */
        .survey-header {
          background: white;
          border-bottom: 1px solid #e5e7eb;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
        }

        .back-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #f3f4f6;
          border: 1px solid #d1d5db;
          border-radius: 12px;
          padding: 12px 16px;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .back-button:hover {
          background: #e5e7eb;
          border-color: #9ca3af;
        }

        .progress-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .question-counter {
          background: #eff6ff;
          color: #1d4ed8;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 700;
        }

        /* Main Content */
        .survey-main {
          padding: 40px 0;
        }

        /* Progress Section */
        .progress-section {
          margin-bottom: 40px;
        }

        .progress-label {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .progress-text {
          font-size: 16px;
          font-weight: 600;
          color: #374151;
        }

        .progress-percentage {
          font-size: 18px;
          font-weight: 700;
          color: #1d4ed8;
        }

        .progress-bar {
          width: 100%;
          height: 12px;
          background: #e5e7eb;
          border-radius: 6px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6, #1d4ed8);
          border-radius: 6px;
          transition: width 0.6s ease;
          position: relative;
        }

        .progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* Question Card */
        .question-card {
          background: white;
          border-radius: 24px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          margin-bottom: 40px;
        }

        .question-header {
          background: linear-gradient(45deg, #667eea, #764ba2);
          padding: 24px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .question-number {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .question-icon {
          font-size: 24px;
        }

        .question-label {
          color: white;
          font-size: 18px;
          font-weight: 700;
        }

        .remaining-questions,
        .final-question {
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.2);
          padding: 8px 16px;
          border-radius: 20px;
        }

        .final-question {
          background: linear-gradient(45deg, #f59e0b, #eab308);
        }

        .question-content {
          padding: 40px 32px;
        }

        .question-text {
          font-size: 24px;
          font-weight: 700;
          color: #1f2937;
          line-height: 1.4;
          margin: 0 0 16px 0;
        }

        .question-hint {
          font-size: 16px;
          color: #6b7280;
          margin: 0 0 32px 0;
          text-align: center;
          padding: 12px 20px;
          background: #f9fafb;
          border-radius: 12px;
          border-left: 4px solid #3b82f6;
        }

        /* Senior-friendly 2-choice container */
        .choices-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-top: 32px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Senior-friendly choice button */
        .senior-choice {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 24px 32px;
          background: #ffffff;
          border: 3px solid #e5e7eb;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
          width: 100%;
          position: relative;
          min-height: 100px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .senior-choice:hover {
          border-color: #3b82f6;
          background: #f8fafc;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.15);
        }

        .choice-selected {
          border-color: #22c55e !important;
          background: #f0fdf4 !important;
          box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.1);
          transform: translateY(-3px);
        }

        .choice-label {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 80px;
          flex-shrink: 0;
        }

        .choice-letter {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 24px;
          margin-bottom: 8px;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .choice-selected .choice-letter {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
        }

        .choice-number {
          font-size: 12px;
          color: #6b7280;
          font-weight: 600;
          text-align: center;
        }

        .choice-content {
          flex: 1;
          padding: 0 16px;
        }

        .choice-text {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          line-height: 1.6;
          word-break: keep-all;
        }

        .choice-indicator {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .selected-icon {
          width: 32px;
          height: 32px;
          background: #22c55e;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 800;
          animation: checkmark 0.3s ease-in-out;
        }

        @keyframes checkmark {
          0% { transform: scale(0); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }

        /* Navigation */
        .navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .nav-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 16px 24px;
          border-radius: 16px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid;
          min-width: 140px;
          justify-content: center;
        }

        .nav-previous {
          background: white;
          color: #6b7280;
          border-color: #d1d5db;
        }

        .nav-previous:hover:not(:disabled) {
          background: #f3f4f6;
          border-color: #9ca3af;
        }

        .nav-previous:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .nav-next {
          background: linear-gradient(45deg, #3b82f6, #1d4ed8);
          color: white;
          border-color: #3b82f6;
        }

        .nav-next:hover:not(:disabled) {
          background: linear-gradient(45deg, #2563eb, #1e40af);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
        }

        .nav-next:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .nav-center {
          flex: 1;
          text-align: center;
        }

        .keyboard-hint {
          font-size: 14px;
          color: #6b7280;
          background: white;
          padding: 8px 16px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
        }

        .loading-spinner {
          margin-left: 8px;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 0 16px;
          }

          .survey-main {
            padding: 24px 0;
          }

          .question-header {
            padding: 20px 24px;
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }

          .question-content {
            padding: 32px 24px;
          }

          .question-text {
            font-size: 20px;
          }

          .choice-button {
            flex-direction: column;
            text-align: center;
            gap: 12px;
            padding: 20px;
          }

          .navigation {
            flex-direction: column;
            gap: 16px;
          }

          .nav-button {
            width: 100%;
            max-width: 300px;
          }

          .nav-center {
            order: -1;
          }
        }

        /* Animation for reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .choice-button,
          .nav-button,
          .progress-fill {
            transition: none;
            animation: none;
          }
          
          .choice-button:hover {
            transform: none;
          }
        }

        /* High contrast mode */
        @media (prefers-contrast: high) {
          .choice-button,
          .nav-button {
            border-width: 3px;
          }
        }
      `}</style>
    </div>
  );
}