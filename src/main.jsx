import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PolymarketLandingPage from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PolymarketLandingPage />
  </StrictMode>,
)
