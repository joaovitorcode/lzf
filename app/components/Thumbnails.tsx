import { Thumbnail } from './Thumbnail'
import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query"

interface Props {
  value: string
  lng: string
}

const getPageData = async () => {
  const query = `
  query MyQuery {
    posts(first: 4, orderBy: createdAt_DESC) {
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

export async function Thumbnails({ value, lng }: Props) {
  const { posts } = await getPageData()

  return (
    <section className="w-full">
      <div className='flex justify-between items-end'>
        <h2 className='text-slate-950 dark:text-white text-2xl sm:text-3xl md:text-4xl font-semibold border-b border-amber-500 pb-2'>
          {value}
        </h2>

      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-6'>
        {posts.map((post:any) => <Thumbnail key={post.slug} {...post} lng={lng} />)}
      </div>
    </section>
  )
}
