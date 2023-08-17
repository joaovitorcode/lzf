"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { MdMenu } from "react-icons/md"
import { ToggleColorModeButton } from '../components/ToggleColorModeButton'

export function Header() {
  const pathname = usePathname()
  const [toggle, setToggle] = useState(false)

  return (
    <header className='w-full bg-slate-50 dark:bg-slate-900 shadow-md fixed z-10'>
      <div className="max-w-7xl mx-auto py-4 px-4 xl:px-0 flex justify-between items-center">
        <Link href='/' >
          <h1 className="text-amber-500 text-4xl font-bold uppercase">Logo</h1>
        </Link>

        <nav className='hidden sm:flex gap-6'>
          <Link href='/' className={`text-slate-950 dark:text-white ${pathname === '/' && "border-b"} hover:border-b border-amber-500 pb-2`}>Início</Link>
          <Link href='/artigos' className={`text-slate-950 dark:text-white ${pathname === '/artigos' && "border-b"} hover:border-b border-amber-500 pb-2`}>Artigos</Link>
          <Link href='/parceiros' className={`text-slate-950 dark:text-white ${pathname === '/parceiros' && "border-b"} hover:border-b border-amber-500 pb-2`}>Parceiros</Link>
        </nav>

        <div className='flex gap-4'>
          <ToggleColorModeButton />
          <button onClick={() => setToggle(value => !value)} className='sm:hidden bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg p-2'>
            <MdMenu className="w-6 h-6 text-slate-950 dark:text-white" />
          </button>
        </div>
      </div>
      <nav className={`${toggle === true ? 'flex' : 'hidden'} sm:hidden flex-col mx-4 mb-4 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg`}>
        <Link href='/' className={`text-slate-950 py-2 px-3 ${pathname === '/' ? "font-medium bg-amber-300 dark:bg-amber-400" : "dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"} rounded`}>Início</Link>
        <Link href='/artigos' className={`text-slate-950 py-2 px-3 ${pathname === '/artigos' ? "font-medium bg-amber-300 dark:bg-amber-400" : "dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"} rounded`}>Artigos</Link>
        <Link href='/parceiros' className={`text-slate-950 py-2 px-3 ${pathname === '/parceiros' ? "font-medium bg-amber-300 dark:bg-amber-400" : "dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"} rounded`}>Parceiros</Link>
      </nav>
    </header>
  )
}