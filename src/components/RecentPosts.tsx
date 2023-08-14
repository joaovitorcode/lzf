import { Thumbnail } from './Thumbnail'

export function RecentPosts() {
  return (
    <section className="w-full">
      <div className='flex justify-between items-end'>
        <h2 className='text-white text-4xl font-semibold'>
          Artigos Recentes
          <div className="w-full border-t mt-4 border-amber-500" />
        </h2>

        <button className='py-3 px-6 font-semibold text-slate-900 rounded bg-amber-400 hover:bg-amber-300'>Ver mais</button>
      </div>
      <div className='flex justify-between pt-6'>
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </div>
    </section>
  )
}
