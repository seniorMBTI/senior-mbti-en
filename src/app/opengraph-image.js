import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Senior MBTI Personality Test - Discover Your MBTI & Compatible Types'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
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
          ✨ 60+ Senior-Specific Personality Analysis
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #FFD700, #FFA500)',
            backgroundClip: 'text',
            color: 'transparent',
            textAlign: 'center',
            lineHeight: '1.1',
            marginBottom: '20px',
          }}
        >
          Senior MBTI
        </div>
        
        <div
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #FFD700, #FFA500)',
            backgroundClip: 'text',
            color: 'transparent',
            textAlign: 'center',
            lineHeight: '1.1',
            marginBottom: '30px',
          }}
        >
          Personality
        </div>

        <div
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #FFD700, #FFA500)',
            backgroundClip: 'text',
            color: 'transparent',
            textAlign: 'center',
            lineHeight: '1.1',
            marginBottom: '40px',
          }}
        >
          Type Test
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '24px',
            color: 'rgba(255, 255, 255, 0.9)',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: '1.4',
            fontWeight: '300',
          }}
        >
          Professional psychological analysis for post-retirement new life and ideal relationships
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}