import Image from 'next/image' 

export function Thumbnail() {
  return (
    <div className="w-[302px] flex flex-col gap-4">
      <div className='w-full aspect-square bg-slate-800 rounded-2xl' />
      <div className='flex gap-2 items-center'>
        <div className='w-8 h-8 bg-slate-800 rounded-full' />
        <span className='text-slate-300'>Leandro Zaia</span>
        <span className='text-slate-300'>•</span>
        <span className='text-slate-300'>3 horas atrás</span>
      </div>
      <div className='text-white text-lg font-medium'>
        Donec pretium arcu a urna suscipit commodo. Phasellus ac pulvinar massa, id dapibus tortor.
      </div>
      <div className='flex gap-2 items-center'>
        <span className='text-amber-400'>Tema</span>
        <span className='text-slate-300'>•</span>
        <span className='text-slate-300'>8 min de leitura</span>
      </div>
    </div>
  )
}
