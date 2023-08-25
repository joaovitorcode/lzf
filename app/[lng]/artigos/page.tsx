import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Thumbnail } from '../../components/Thumbnail'
import { fetchHygraphQuery } from "../../../app/utils/fetch-hygraph-query"
import { useTranslation } from '../../i18n'

interface Props {
  params: {
    lng: string
  }
}

const getPageData = async () => {
  const query = `
  query MyQuery {
    posts(orderBy: createdAt_DESC) {
      slug
      title
      titleEn
      titleEs
      titleIt
      cover {
        url
      }
      author {
        name
        picture {
          url
        }
      }
      date
      tag {
        title
      }
      body {
        text
      }
    }
  }  
  `

  return fetchHygraphQuery(
    query
  )
}

export default async function Artigos({ params: { lng } }: Props) {
  const { posts } = await getPageData()
  const { t } = await useTranslation(lng, 'translation')

  const header = {
    nav_1: t('nav-1'),
    nav_2: t('nav-2'),
    nav_3: t('nav-3')
  }

  const footer = {
    contact_us: t('footer__contact-us'),
    email: t('footer__email'),
    visit_us: t('footer__visit-us'),
    rights: t('footer__rights')
  }

  return (
    <div>
      <Header header={header} lng={lng} />
      <div className={`max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 xl:px-0 py-8 gap-x-6 gap-y-16 ${posts.length <= 4 ? "xl:h-[calc(100vh-80px)]" : ""} relative top-[80px]`}>
        {posts.map((post: any) => <Thumbnail key={post.title} {...post} lng={lng} />)}
      </div>
      <div className='relative top-[80px]'>
        <Footer footer={footer} />
      </div>
    </div>
  )
}
