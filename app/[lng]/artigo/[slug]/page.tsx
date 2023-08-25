import { Header } from "../../../components/Header"
import { Footer } from "../../../components/Footer"
import { Author } from "../../../components/Author"
import { AltThumbnail } from "../../../components/AltThumbnail"
import { fetchHygraphQuery } from "../../../../app/utils/fetch-hygraph-query"
import Image from 'next/image'
import { RichText } from "../../../components/RichText"
import readingTime from 'reading-time'
import { useTranslation } from '../../../i18n'

interface Props {
  params: {
    lng: string
    slug: string
  }
}

const getPageData = async (slug: string) => {
  const query = `
    query MyQuery {
      post(where: {slug: "${slug}"}) {
        slug
        title
        titleEn
        titleEs
        titleIt
        tag {
          title
        }
        date
        author {
          name
          picture {
            url
          }
          bio
          bioEn
          bioEs
          bioIt
        }
        cover {
          url
        }
        body {
          raw
          text
        }
        bodyEn {
          raw
        }
        bodyEs {
          raw
        }
        bodyIt {
          raw
        }
        related {
          slug
          title
          titleEn
          titleEs
          titleIt
          tag {
            title
          }
          date
          author {
            name
            picture {
              url
            }
            bio
          }
          cover {
            url
          }
          body {
            text
          }
        }
      }
    }  
  `

  return fetchHygraphQuery(
    query
  )
}

export default async function Artigo({ params }: Props) {
  const { post } = await getPageData(params.slug)
  const stats = readingTime(post.body.text)
  const { t } = await useTranslation(params.lng, 'translation')

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
      <Header header={header} lng={params.lng} />
      <div className='max-w-3xl mx-auto px-4 md:px-0 relative top-[104px]'>
        <div className="flex gap-4 flex-wrap items-center">
          <p className="text-sm text-amber-600 dark:text-amber-400 py-1 px-2 bg-amber-100 dark:bg-slate-900 rounded-2xl inline">
            {post.tag.title}
          </p>
          <p className="text-sm text-slate-950 dark:text-white">{post.date}</p>
          <p className="text-sm text-slate-950 dark:text-white">{post.author.name}</p>
          <p className="text-sm text-slate-950 dark:text-white">{Math.ceil(stats.minutes)} {t('reading-time')}</p>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white pt-6">
          {params.lng === 'pt' ? post.title : 
            params.lng === 'en' ? post.titleEn :
              params.lng === 'es' ? post.titleEs :
                params.lng === 'it' ? post.titleIt : ''}
        </h2>
      
        <Image
          src={post.cover.url}
          alt=''
          width={0}
          height={0}
          sizes="100vw"
          className='w-full aspect-square md:aspect-video object-cover rounded-2xl mt-6'
        />

        <article className="prose dark:prose-invert prose-base sm:prose-lg md:prose-xl mt-6">
          {params.lng === 'pt' ? <RichText content={post.body?.raw} /> :
            params.lng === 'en' ? <RichText content={post.bodyEn?.raw} /> :
              params.lng === 'es' ? <RichText content={post.bodyEs?.raw} /> :
                params.lng === 'it' ? <RichText content={post.bodyIt?.raw} /> : ""}
        </article>

        <Author {...post.author} lng={params.lng} />
        {post.related.length && <h2 className='text-slate-950 dark:text-white text-2xl sm:text-3xl md:text-4xl font-semibold border-b border-amber-500 pb-2 inline-block pt-16'>
          {t('alt-thumbnail__title')}
        </h2>}
        {post.related.map((rel: any) => <AltThumbnail key={rel.slug} {...rel} lng={params.lng} />)}
      </div>
      <div className='relative top-[104px] pt-8'>
        <Footer footer={footer} />
      </div>
    </div>
  )
}