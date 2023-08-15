"use client"

import Link from 'next/link'
import { useState } from 'react'
import { MdOutlineLightMode, MdMenu } from "react-icons/md"

export function Header() {
  const [toggle, setToggle] = useState(false)

  return (
    <header className='w-full bg-slate-900 shadow-2xl fixed z-10'>
      <div className="max-w-7xl mx-auto py-4 px-4 xl:px-0 flex justify-between items-center">
        <Link href='/' >
          <h1 className="text-amber-500 text-4xl font-bold uppercase">Logo</h1>
        </Link>

        <nav className='hidden sm:flex gap-6'>
          <Link href='/' className='text-white border-b border-amber-500 pb-2'>Início</Link>
          <Link href='/' className='text-white hover:border-b border-amber-500 pb-2'>Artigos</Link>
          <Link href='/' className='text-white hover:border-b border-amber-500 pb-2'>Parceiros</Link>
        </nav>

        <div className='flex gap-4'>
          <button className='bg-slate-800 hover:bg-slate-700 rounded-lg p-2'>
            <MdOutlineLightMode className="w-6 h-6 text-white" />
          </button>
          <button onClick={() => setToggle(value => !value)} className='sm:hidden bg-slate-800 hover:bg-slate-700 rounded-lg p-2'>
            <MdMenu className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
      <nav className={`${toggle === true ? 'flex' : 'hidden'} sm:hidden flex-col mx-4 mb-4 p-4 bg-slate-800 rounded-lg`}>
        <Link href='/' className='text-slate-900 font-semibold py-2 px-3 bg-amber-400 rounded'>Início</Link>
        <Link href='/' className='text-white py-2 px-3 hover:bg-slate-700 rounded'>Artigos</Link>
        <Link href='/' className='text-white py-2 px-3 hover:bg-slate-700 rounded'>Parceiros</Link>
      </nav>
    </header>
  )
}