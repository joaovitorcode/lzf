import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Thumbnail } from '../../components/Thumbnail'

export default function Posts() {
  return (
    <div>
      <Header />
      <div className='max-w-7xl mx-auto flex flex-wrap gap-x-6 gap-y-16 relative top-[104px]'>
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
