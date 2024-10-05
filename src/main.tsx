import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CountryProvider } from './providers/CountryContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CountryProvider>
      <App />
    </CountryProvider>
  </StrictMode>,
)
