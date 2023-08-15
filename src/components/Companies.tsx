import { Company } from './Company'

export function Companies() {
  return (
    <section className="w-full">
      <h3 className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-4 border-b border-amber-500 inline-block">
        Empresas Parceiras
      </h3>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 xl:gap-16 pt-6'>
        <Company />
        <Company />
      </div>
    </section>
  )
}