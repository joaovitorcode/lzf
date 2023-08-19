import Link from 'next/link' 

export function AltThumbnail() {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-4 pt-6">
      <div className='flex w-full sm:w-48 sm:h-48 aspect-square bg-slate-200 dark:bg-slate-900 rounded-2xl' />
      
      <div className='flex flex-col gap-4 py-4'>
        <div className='flex gap-2 items-center'>
          <div className='w-8 h-8 bg-slate-200 dark:bg-slate-900 rounded-full' />
          <span className='text-slate-800 dark:text-slate-300'>Leandro Zaia</span>
          <span className='text-slate-800 dark:text-slate-300'>•</span>
          <span className='text-slate-800 dark:text-slate-300'>3 horas atrás</span>
        </div>
        <Link href='/post/1' className='text-slate-950 dark:text-white text-lg font-medium hover:text-amber-500 dark:hover:text-amber-400'>
          Donec pretium arcu a urna suscipit commodo. Phasellus ac pulvinar massa, id dapibus tortor. Aenean in nulla dolor.
        </Link>
        <div className='flex gap-2 items-center'>
          <span className='font-bold text-amber-600 dark:text-amber-400'>Tema</span>
          <span className='text-slate-800 dark:text-slate-300'>•</span>
          <span className='text-slate-800 dark:text-slate-300'>8 min de leitura</span>
        </div>
      </div>
    </div>
  )
}