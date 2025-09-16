import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SiCiCalculator from './Intrest.jsx'
import CheckBox from './CheckBox.jsx'
import Loop from './Loop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Loop />
  </StrictMode>,
)
