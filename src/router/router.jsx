import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../page/HomePage'
import HomePage from '../page/AboutMePage'
import Footer from '../components/Footer'
import AboutmePage from '../page/AboutMePage'
import DialogExit from '../modal/DialogExit'

export default function Router({darkMode, setDarkMode}) {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home darkMode={darkMode} setDarkMode={setDarkMode}/>} />
            <Route path='/aboutme' element={<AboutmePage darkMode={darkMode}/>}/>
            <Route path='/exit' element={<DialogExit/>}/>
        </Routes>
    </div>
  )
}
