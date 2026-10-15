import { useState, useRef, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FloatingHearts from '../components/FloatingHearts'
import './HomePage.css'

const TRIGGER_DIST = 150

function randomPos(btnW, btnH) {
  const padding = 24
  return {
    x: padding + Math.random() * (window.innerWidth - btnW - padding * 2),
    y: padding + Math.random() * (window.innerHeight - btnH - padding * 2),
  }
}

export default function HomePage() {
  const navigate = useNavigate()
  const noBtnRef = useRef(null)
  const [noPos, setNoPos] = useState(null)
  const [isMoving, setIsMoving] = useState(false)

  useEffect(() => {
    const btn = noBtnRef.current
    if (!btn) return
    setNoPos({
      x: window.innerWidth * 0.65,
      y: window.innerHeight * 0.58,
    })
  }, [])

  const handleMouseMove = useCallback((e) => {
    const btn = noBtnRef.current
    if (!btn || !noPos) return

    const btnCX = noPos.x + btn.offsetWidth / 2
    const btnCY = noPos.y + btn.offsetHeight / 2
    const dist = Math.sqrt((e.clientX - btnCX) ** 2 + (e.clientY - btnCY) ** 2)

    if (dist < TRIGGER_DIST) {
      let next, attempts = 0
      do {
        next = randomPos(btn.offsetWidth, btn.offsetHeight)
        attempts++
      } while (
        Math.sqrt((e.clientX - (next.x + btn.offsetWidth / 2)) ** 2 +
                  (e.clientY - (next.y + btn.offsetHeight / 2)) ** 2) < 200
        && attempts < 10
      )
      setNoPos(next)
      setIsMoving(true)
    }
  }, [noPos])

  return (
    <div className="home-page" onMouseMove={handleMouseMove}>
      <FloatingHearts count={25} />

      <div className="home-content">
        <h1 className="home-title">
          To my life and soul<br />
          and the loved one of all
        </h1>

        <p className="home-subtitle">
          Will you be mine forever?
        </p>

        <div className="home-buttons">
          <button className="btn-yes" onClick={() => navigate('/yes')}>
            💖 Yes, Always!
          </button>
        </div>
      </div>

      {/* No button — always fixed, always visible, always running */}
      <button
        ref={noBtnRef}
        className={`btn-no${isMoving ? ' btn-no--moving' : ''}`}
        style={noPos ? { left: noPos.x, top: noPos.y } : { opacity: 0, pointerEvents: 'none' }}
        onClick={() => {}}
        onTransitionEnd={() => setIsMoving(false)}
      >
        No 🙅
      </button>
    </div>
  )
}
