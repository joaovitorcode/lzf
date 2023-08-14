import Link from 'next/link'
import { MdOutlineLightMode } from "react-icons/md"

export function Header() {
  return (
    <header className='w-full bg-slate-900'>
      <div className="max-w-7xl mx-auto py-4 flex justify-between">
        <Link href='/' >
          <h1 className="text-amber-500 text-4xl font-bold uppercase">Logo</h1>
        </Link>

        <button className='bg-slate-800 hover:bg-slate-700 rounded-lg p-2'>
          <MdOutlineLightMode className="w-6 h-6 text-white" />
        </button>
      </div>
    </header>
  )
}