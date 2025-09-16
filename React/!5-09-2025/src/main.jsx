import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Parents from './Parents'
import ParentIntrest from './ParentIntrest'
import ParentEmployee from './ParentEmployee'
import Movies from './Component/Movies'
import Card from './Component/Card'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ParentIntrest /> */}
    {/* <ParentEmployee/> */}
    <Movies />
    {/* <Card/> */}
  </StrictMode>,
)
