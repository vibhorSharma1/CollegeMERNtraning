import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Loop from './Loop.jsx' 
import Student from './Student.jsx'
import {App} from './Student.jsx'
import RadioButton from './RadioButton.jsx'
import DropDown from './DropDown.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Student />
    <App /> */}
    <RadioButton />
    <DropDown />
  </StrictMode>,
)
