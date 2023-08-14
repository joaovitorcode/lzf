import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { Thumbnails } from '../components/Thumbnails'
import { Services } from '../components/Services'
import { Lawyers } from '../components/Lawyers'
import { Companies } from '../components/Companies'
import { Testimonials } from '../components/Testimonials'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <div className=''>
      <Header />
      <div className='max-w-7xl mx-auto flex flex-col gap-8 relative top-[104px]'>
        <Banner />
        <Thumbnails />
        <Services direction='row' />
        <Services direction='row-reverse' />
        <Services direction='row' />
        <Services direction='row-reverse' />
        <Lawyers />
        <Companies />
      </div>
      <div className='flex flex-col gap-8 pt-8 relative top-[104px]'>
        <Testimonials />
        <Footer />
      </div>
    </div>
  )
}
