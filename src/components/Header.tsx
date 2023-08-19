"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { MdMenu } from "react-icons/md"
import { ToggleColorModeButton } from '../components/ToggleColorModeButton'
import { useDarkMode } from '@/hooks/useDarkMode'

export function Header() {
  const pathname = usePathname()
  const [toggle, setToggle] = useState(false)
  const { isDark } = useDarkMode()

  return (
    <header className='w-full bg-slate-50 dark:bg-slate-900 shadow-md fixed z-10'>
      <div className="max-w-7xl mx-auto py-5 px-4 xl:px-0 flex justify-between items-center relative">
        <Link href='/' >
          {isDark === "dark" ? (
            <Image src="/images/logo_white.png" alt='Logo LZF - Leandro Zaia Filho' priority width={80} height={80} className='absolute top-0' />
          ) : (
            <Image src="/images/logo_black.png" alt='Logo LZF - Leandro Zaia Filho' priority width={80} height={80} className='absolute top-0' />
          )}
        </Link>

        <nav className='hidden sm:flex gap-6'>
          <Link href='/' className={`text-slate-950 dark:text-white ${pathname === '/' && "border-b"} hover:border-b border-amber-500 pb-2`}>Início</Link>
          <Link href='/artigos' className={`text-slate-950 dark:text-white ${pathname === '/artigos' && "border-b"} hover:border-b border-amber-500 pb-2`}>Artigos</Link>
          <Link href='/sobre' className={`text-slate-950 dark:text-white ${pathname === '/sobre' && "border-b"} hover:border-b border-amber-500 pb-2`}>Sobre</Link>
        </nav>

        <div className='flex gap-4'>
          <ToggleColorModeButton />
          <button aria-label='Menu' onClick={() => setToggle(value => !value)} className='sm:hidden bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg p-2'>
            <MdMenu className="w-6 h-6 text-slate-950 dark:text-white" />
          </button>
        </div>
      </div>
      <nav className={`${toggle === true ? 'flex' : 'hidden'} sm:hidden flex-col mx-4 mb-4 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg`}>
        <Link href='/' className={`text-slate-950 py-2 px-3 ${pathname === '/' ? "font-medium bg-amber-300 dark:bg-amber-400" : "dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"} rounded`}>Início</Link>
        <Link href='/artigos' className={`text-slate-950 py-2 px-3 ${pathname === '/artigos' ? "font-medium bg-amber-300 dark:bg-amber-400" : "dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"} rounded`}>Artigos</Link>
        <Link href='/sobre' className={`text-slate-950 py-2 px-3 ${pathname === '/sobre' ? "font-medium bg-amber-300 dark:bg-amber-400" : "dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"} rounded`}>Sobre</Link>
      </nav>
    </header>
  )
}