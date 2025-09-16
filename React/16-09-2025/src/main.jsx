import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home'
import MainPage from './MainPage'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <MainPage/>
  </StrictMode>,
)
