import { Thumbnail } from './Thumbnail'

export function Thumbnails() {
  return (
    <section className="w-full">
      <div className='flex justify-between items-end'>
        <h2 className='text-white text-4xl font-semibold border-b border-amber-500 pb-4'>
          Artigos Recentes
        </h2>

        <button className='py-3 px-6 font-semibold text-slate-900 rounded bg-amber-400 hover:bg-amber-300'>Ver mais</button>
      </div>
      <div className='flex gap-6 pt-6'>
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </div>
    </section>
  )
}
