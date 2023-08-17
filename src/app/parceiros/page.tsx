import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Lawyer } from '../../components/Lawyer'

export default function Parceiros() {
  return (
    <div>
      <Header />
      <div className='max-w-7xl mx-auto relative top-[104px] flex flex-col gap-8 items-center'>
        <h3 className="text-slate-950 dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pb-1 sm:pb-2 border-b border-amber-500 inline-block">
          Parceiros
        </h3>
        <p className="max-w-xl text-center lg:text-lg xl:text-xl text-slate-800 dark:text-slate-300">
          Leia os artigos de convidados e especialistas em diversas áreas do direito.
        </p>
        <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <Lawyer />
          <Lawyer />
          <Lawyer />
          <Lawyer />
          <Lawyer />
          <Lawyer />
        </div>
      </div>
      <div className='relative top-[104px] pt-8'>
        <Footer />
      </div>
    </div>
  )
}
