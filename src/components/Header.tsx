import Link from 'next/link'
import { MdOutlineLightMode } from "react-icons/md"

export function Header() {
  return (
    <header className='w-full bg-slate-900 shadow-2xl fixed z-10'>
      <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
        <Link href='/' >
          <h1 className="text-amber-500 text-4xl font-bold uppercase">Logo</h1>
        </Link>

        <nav className='flex gap-6'>
          <Link href='/' className='text-white border-b border-amber-500 pb-2'>Início</Link>
          <Link href='/' className='text-white hover:border-b border-amber-500 pb-2'>Artigos</Link>
          <Link href='/' className='text-white hover:border-b border-amber-500 pb-2'>Parceiros</Link>
        </nav>

        <button className='bg-slate-800 hover:bg-slate-700 rounded-lg p-2'>
          <MdOutlineLightMode className="w-6 h-6 text-white" />
        </button>
      </div>
    </header>
  )
}