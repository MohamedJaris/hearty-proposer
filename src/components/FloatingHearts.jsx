import { useEffect, useState } from 'react'
import './FloatingHearts.css'

const HEART_EMOJIS = ['❤️', '🩷', '💕', '💗', '💓', '💞', '💖', '🩷', '💝']

function generateHeart(id) {
  return {
    id,
    emoji: HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)],
    left: Math.random() * 100,
    size: 0.8 + Math.random() * 1.8,
    duration: 6 + Math.random() * 10,
    delay: Math.random() * 5,
    opacity: 0.4 + Math.random() * 0.5,
  }
}

export default function FloatingHearts({ count = 30 }) {
  const [hearts, setHearts] = useState(() =>
    Array.from({ length: count }, (_, i) => generateHeart(i))
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(prev => {
        const newId = Date.now()
        const newHeart = generateHeart(newId)
        return [...prev.slice(-count), newHeart]
      })
    }, 800)
    return () => clearInterval(interval)
  }, [count])

  return (
    <div className="hearts-container" aria-hidden="true">
      {hearts.map(h => (
        <span
          key={h.id}
          className="floating-heart"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}rem`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            opacity: h.opacity,
          }}
        >
          {h.emoji}
        </span>
      ))}
    </div>
  )
}
