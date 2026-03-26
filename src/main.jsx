import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Globalhooks from './hooks/Globalhooks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Globalhooks>
    <App />
    </Globalhooks>
  </StrictMode>,
)
