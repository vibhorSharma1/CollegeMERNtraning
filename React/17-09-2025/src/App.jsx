import React from 'react'
import NavBar from './Components/NavBar.jsx'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
        <NavBar/>
        <Outlet/>
        
    </>
  )
}

export default App