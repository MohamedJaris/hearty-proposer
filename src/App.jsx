import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import YesPage from './pages/YesPage'
import GiftPage from './pages/GiftPage'
import BirthdayPage from './pages/BirthdayPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/yes" element={<YesPage />} />
        <Route path="/gift" element={<GiftPage />} />
        <Route path="/birthday" element={<BirthdayPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
