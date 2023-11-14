import { Route, Routes } from 'react-router-dom'
import Home from '../page/HomePage'
import AboutmePage from '../page/AboutMePage'

export default function Router({darkMode, setDarkMode}) {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home darkMode={darkMode} setDarkMode={setDarkMode}/>} />
            <Route path='/aboutme' element={<AboutmePage darkMode={darkMode}/>}/>
        </Routes>
    </div>
  )
}
