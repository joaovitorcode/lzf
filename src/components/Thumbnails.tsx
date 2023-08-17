import { Thumbnail } from './Thumbnail'

export function Thumbnails() {
  return (
    <section className="w-full">
      <div className='flex justify-between items-end'>
        <h2 className='text-slate-950 dark:text-white text-2xl sm:text-3xl md:text-4xl font-semibold border-b border-amber-500 pb-2'>
          Artigos Recentes
        </h2>

      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-6'>
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </div>
    </section>
  )
}
