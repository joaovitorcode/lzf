import { Company } from './Company'

export function Companies() {
  return (
    <section className="w-full">
      <h2 className='text-white text-4xl font-semibold border-b border-amber-500 pb-4 inline-block'>
        Empresas Parceiras
      </h2>

      <div className='flex justify-between pt-6'>
        <Company />
        <Company />
      </div>
    </section>
  )
}