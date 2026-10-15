import { useNavigate } from 'react-router-dom'
import FloatingHearts from '../components/FloatingHearts'
import './YesPage.css'

export default function YesPage() {
  const navigate = useNavigate()

  return (
    <div className="yes-page">
      <FloatingHearts count={30} />

      <div className="yes-content">
        <h1 className="yes-title">
          Thank you for the yes babe 😘
        </h1>

        <p className="yes-subtitle">
          I knew you would choose meeee 🤭
        </p>

        <button className="btn-more" onClick={() => navigate('/gift')}>
          Click for more 💌
        </button>
      </div>
    </div>
  )
}
