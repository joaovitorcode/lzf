import { Company } from './Company'

interface Company {
  name: string
  photoUrl: string
  bio: string
  website: string
}

interface Props {
  title: string
  companies: Company[]
}

export function Companies({ companies, title }: Props) {
  return (
    <section className="w-full">
      <h3 className="text-slate-950 dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pt-4 pb-2 border-b border-amber-500 inline-block">
        {title}
      </h3>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 xl:gap-16 pt-6'>
        {companies.map((company) => <Company key={company.name} {...company} />)}
      </div>
    </section>
  )
}