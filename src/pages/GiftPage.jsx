import { useNavigate } from 'react-router-dom'
import FloatingHearts from '../components/FloatingHearts'
import './GiftPage.css'

// ✏️ Drop your photo into /public and update this path
const IMAGE_SRC = '/gift-photo.jpg'

export default function GiftPage() {
  const navigate = useNavigate()

  return (
    <div className="gift-page">
      <FloatingHearts count={20} />

      {/* Section 1 — Apology */}
      <section className="gift-section gift-section--apology">
        <div className="gift-card">
          <h2 className="gift-heading">
            Before wishing you, I am sorry that I couldn't get you any gifts 😔
          </h2>
        </div>
      </section>

      {/* Section 2 — Reveal */}
      <section className="gift-section gift-section--reveal">
        <div className="gift-card">
          <p className="gift-but-text">But, I've got this for as a collection of our memories together in this 3 years</p>

          {/* 16:9 image frame — drop gift-photo.jpg into /public */}
          <div className="gift-image-wrapper">
            <img
              src={IMAGE_SRC}
              alt="A special gift for you"
              className="gift-image"
              onError={e => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextSibling.style.display = 'flex'
              }}
            />
            <div className="gift-image-placeholder" style={{ display: 'none' }}>
              <span>🖼️</span>
              <p>Add your image at<br /><code>public/gift-photo.jpg</code></p>
            </div>
          </div>

          <button className="btn-final" onClick={() => navigate('/birthday')}>
            Final click 💌
          </button>
        </div>
      </section>
    </div>
  )
}
