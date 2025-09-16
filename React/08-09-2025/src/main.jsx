import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import First from './Component/First.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <First name="Mohit" email="mohit@gmail.com" /> */}
  </StrictMode>,
)

