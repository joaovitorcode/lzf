import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Thumbnail } from '../../components/Thumbnail'
import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";

const getPageData = async () => {
  const query = `
  query MyQuery {
    posts(orderBy: createdAt_DESC) {
      slug
      title
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

export default async function Artigos() {
  const { posts } = await getPageData()

  return (
    <div>
      <Header />
      <div className={`max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 xl:px-0 py-8 gap-x-6 gap-y-16 ${posts.length <= 4 ? "xl:h-[calc(100vh-80px)]" : ""} relative top-[80px]`}>
        {posts.map((post: any) => <Thumbnail key={post.title} {...post} />)}
      </div>
      <div className='relative top-[80px]'>
        <Footer />
      </div>
    </div>
  )
}
