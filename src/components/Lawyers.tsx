import { Lawyer } from './Lawyer'

export function Lawyers() {
  return (
    <section className="w-full">
      <h3 className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pt-4 pb-2 border-b border-amber-500 inline-block">
        Advogados
      </h3>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-16 pt-6'>
        <Lawyer />
        <Lawyer />
        <Lawyer />
      </div>
    </section>
  )
}