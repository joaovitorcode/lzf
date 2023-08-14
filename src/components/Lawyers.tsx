import { Lawyer } from './Lawyer'

export function Lawyers() {
  return (
    <section className="w-full">
      <h2 className='text-white text-4xl font-semibold border-b border-amber-500 pb-4 inline-block'>
        Advogados
      </h2>

      <div className='flex justify-between pt-6'>
        <Lawyer />
        <Lawyer />
        <Lawyer />
      </div>
    </section>
  )
}