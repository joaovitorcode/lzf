import { Lawyer } from './Lawyer'

interface Lawyer {
  photoUrl: string
  name: string
  bio: string
  platforms: {
    instragram: string,
    linkedin: string,
    email: string
  }
}

interface Props {
  title: string
  lawyers: Lawyer[]
}

export function Lawyers({ title, lawyers } : Props) {
  return (
    <section className="w-full">
      <h3 className="text-slate-950 dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pt-4 pb-2 border-b border-amber-500 inline-block">
        {title}
      </h3>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-16 pt-6'>
        {lawyers.map((lawyer) => <Lawyer key={lawyer.name} {...lawyer} />)}
      </div>
    </section>
  )
}