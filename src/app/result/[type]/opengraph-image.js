import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'MBTI Personality Type Result - Senior MBTI'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// MBTI Type 정보
const mbtiInfo = {
  'INTJ': { emoji: '🏛️', name: 'Architect', color: '#6C5CE7' },
  'INTP': { emoji: '🔬', name: 'Thinker', color: '#A29BFE' },
  'ENTJ': { emoji: '👑', name: 'Commander', color: '#E17055' },
  'ENTP': { emoji: '🚀', name: 'Debater', color: '#00B894' },
  'INFJ': { emoji: '🌟', name: 'Advocate', color: '#00CEC9' },
  'INFP': { emoji: '🎨', name: 'Mediator', color: '#FD79A8' },
  'ENFJ': { emoji: '🤝', name: 'Protagonist', color: '#FDCB6E' },
  'ENFP': { emoji: '🎭', name: 'Campaigner', color: '#E84393' },
  'ISTJ': { emoji: '🛡️', name: 'Logistician', color: '#2D3436' },
  'ISFJ': { emoji: '💝', name: 'Protector', color: '#636E72' },
  'ESTJ': { emoji: '💼', name: 'Executive', color: '#74B9FF' },
  'ESFJ': { emoji: '❤️', name: 'Consul', color: '#FF7675' },
  'ISTP': { emoji: '🔧', name: 'Virtuoso', color: '#00B894' },
  'ISFP': { emoji: '🌸', name: 'Adventurer', color: '#FD79A8' },
  'ESTP': { emoji: '⚡', name: 'Entrepreneur', color: '#FDCB6E' },
  'ESFP': { emoji: '🎪', name: 'Entertainer', color: '#E84393' }
}

export default async function Image({ params }) {
  const mbtiType = params.type.toUpperCase()
  const typeInfo = mbtiInfo[mbtiType] || { emoji: '🌟', name: 'Personality', color: '#667eea' }

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Arial, sans-serif',
          position: 'relative',
        }}
      >
        {/* Top Badge */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '50px',
            padding: '12px 24px',
            marginBottom: '40px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            fontSize: '18px',
            color: 'white',
            fontWeight: '500',
          }}
        >
          Senior MBTI Result
        </div>

        {/* MBTI Type with Emoji */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '30px',
          }}
        >
          <div style={{ fontSize: '80px', marginRight: '20px' }}>
            {typeInfo.emoji}
          </div>
          <div
            style={{
              fontSize: '96px',
              fontWeight: 'bold',
              color: typeInfo.color,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            {mbtiType}
          </div>
        </div>

        {/* Type Name */}
        <div
          style={{
            fontSize: '36px',
            fontWeight: '600',
            color: 'rgba(255, 255, 255, 0.95)',
            marginBottom: '30px',
            textAlign: 'center',
          }}
        >
          {typeInfo.name}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '24px',
            color: 'rgba(255, 255, 255, 0.8)',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: '1.4',
          }}
        >
          Discover compatible and challenging MBTI types for meaningful relationships
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}