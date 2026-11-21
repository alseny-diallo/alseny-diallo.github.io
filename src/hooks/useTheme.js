import { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme' // Must match the inline script in index.html
const lightQuery = () => window.matchMedia?.('(prefers-color-scheme: light)')

function readSavedTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === 'light' || saved === 'dark' ? saved : null
  } catch {
    return null // Storage unavailable (private mode, blocked cookies…)
  }
}

const systemTheme = () => (lightQuery()?.matches ? 'light' : 'dark')

// The visitor's explicit choice wins. Until they make one, the theme follows
// the OS setting, live.
export function useTheme() {
  const [saved, setSaved] = useState(readSavedTheme)
  const [system, setSystem] = useState(systemTheme)
  const theme = saved ?? system

  useEffect(() => {
    const query = lightQuery()
    if (!query) return
    const onChange = () => setSystem(systemTheme())
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setSaved(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Storage unavailable: the choice lasts until the page is closed
    }
  }

  return { theme, toggleTheme }
}
