import { useEffect } from 'react'
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md"
import { useDarkMode } from '../hooks/useDarkMode'

export function ToggleColorModeButton() {
  const { isDark, setIsDark } = useDarkMode()

  useEffect(() => {
    const htmlElement = document.querySelector('html')
    isDark === 'dark'
      ? htmlElement?.classList.add('dark')
      : htmlElement?.classList.remove('dark')
  }, [isDark])

  useEffect(() => {
    let localStorage = window.localStorage.getItem('theme')
    setIsDark(localStorage!)
  }, [setIsDark])

  const switchTheme = () => {
    const theme = isDark === 'light' ? 'dark' : 'light'
    window.localStorage.setItem('theme', theme)
    setIsDark(theme)
  }

  return (
    <button
      onClick={switchTheme}
      aria-label={`Modo ${isDark === 'dark' ? "claro": "escuro"}`}
      className='bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg p-2'
    >
      {isDark === 'dark' ? (
        <MdOutlineLightMode className="w-6 h-6 text-slate-950 dark:text-white" />
      ) : (
        <MdOutlineDarkMode className="w-6 h-6 text-slate-950 dark:text-white" />
      )}
    </button>
  )
}