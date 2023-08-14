import { Banner } from '../components/Banner'
import { RecentPosts } from '../components/RecentPosts'
import { Services } from '../components/Services'
import { ListLawyer } from '../components/ListLawyer'
import { ListCompany } from '../components/ListCompany'

export default function Home() {
  return (
    <div className='flex flex-col gap-16'>
      <Banner />
      <RecentPosts />
      <Services direction='row' />
      <Services direction='row-reverse' />
      <Services direction='row' />
      <Services direction='row-reverse' />
      <ListLawyer />
      <ListCompany />
    </div>
  )
}
