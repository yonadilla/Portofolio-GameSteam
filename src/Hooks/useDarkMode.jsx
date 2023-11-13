import React, { useEffect } from 'react'
import { useLocalStorage } from './useStorage'
import useMediaQuery from './useMediaQuery'

export default function useDarkMode() {
    
  const [darkMode, setDarkMode] = useLocalStorage("useDarkMode")
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const enabled = darkMode ?? prefersDarkMode
  
  useEffect(() => {
    document.body.classList.toggle("dark", enabled)
  }, [enabled])

  return [enabled, setDarkMode]
}
