import Image from 'next/image' 
import Link from 'next/link' 

export function Thumbnail() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className='w-full aspect-square bg-slate-800 rounded-2xl' />
      <div className='flex gap-2 items-center'>
        <div className='w-8 h-8 bg-slate-800 rounded-full' />
        <span className='text-slate-300'>Leandro Zaia</span>
        <span className='text-slate-300'>•</span>
        <span className='text-slate-300'>3 horas atrás</span>
      </div>
      <Link href='/post/1' className='text-white text-lg font-medium hover:text-amber-400'>
        Donec pretium arcu a urna suscipit commodo. Phasellus ac pulvinar massa, id dapibus tortor.
      </Link>
      <div className='flex gap-2 items-center'>
        <span className='text-amber-400'>Tema</span>
        <span className='text-slate-300'>•</span>
        <span className='text-slate-300'>8 min de leitura</span>
      </div>
    </div>
  )
}
