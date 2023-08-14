import { Lawyer } from './Lawyer'

export function ListLawyer() {
  return (
    <section className="w-full">
      <h2 className='text-white text-4xl font-semibold'>
        Advogados
        <div className="w-full border-t mt-4 border-amber-500" />
      </h2>

      <div className='flex justify-between pt-6'>
        <Lawyer />
        <Lawyer />
        <Lawyer />
      </div>
    </section>
  )
}