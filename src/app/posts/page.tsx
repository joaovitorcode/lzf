import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Thumbnail } from '../../components/Thumbnail'

export default function Posts() {
  return (
    <div>
      <Header />
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 xl:px-0 gap-x-6 gap-y-16 relative top-[104px]'>
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </div>
      <div className='relative top-[104px] pt-8'>
        <Footer />
      </div>
    </div>
  )
}
