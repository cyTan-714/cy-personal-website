import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* BrowserRouter keeps the page in sync with the URL in the address bar */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
