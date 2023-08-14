import { Company } from './Company'

export function ListCompany() {
  return (
    <section className="w-full">
      <h2 className='text-white text-4xl font-semibold'>
        Empresas Parceiras
        <div className="w-full border-t mt-4 border-amber-500" />
      </h2>

      <div className='flex justify-between pt-6'>
        <Company />
        <Company />
      </div>
    </section>
  )
}