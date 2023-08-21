import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Author } from "@/components/Author";
import { AltThumbnail } from "@/components/AltThumbnail";
import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";
import Image from 'next/image'
import { RichText } from "@/components/RichText";
import readingTime from 'reading-time'

const getPageData = async (slug: string) => {
  const query = `
    query MyQuery {
      post(where: {slug: "${slug}"}) {
        slug
        title
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
          raw
          text
        }
        related {
          slug
          title
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

export default async function Artigo({ params }: { params: { slug: string } }) {
  const { post } = await getPageData(params.slug)
  const stats = readingTime(post.body.text)
  
  return (
    <div>
      <Header />
      <div className='max-w-3xl mx-auto px-4 md:px-0 relative top-[104px]'>
        <div className="flex gap-4 flex-wrap items-center">
          <p className="text-sm text-amber-600 dark:text-amber-400 py-1 px-2 bg-amber-100 dark:bg-slate-900 rounded-2xl inline">
            {post.tag.title}
          </p>
          <p className="text-sm text-slate-950 dark:text-white">{post.date}</p>
          <p className="text-sm text-slate-950 dark:text-white">{post.author.name}</p>
          <p className="text-sm text-slate-950 dark:text-white">{Math.ceil(stats.minutes)} min de leitura</p>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white pt-6">
          {post.title}
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
          <RichText content={post.body.raw} />
        </article>

        <Author {...post.author} />
        {post.related.length && <h2 className='text-slate-950 dark:text-white text-2xl sm:text-3xl md:text-4xl font-semibold border-b border-amber-500 pb-2 inline-block pt-16'>
          Artigos Recomendados
        </h2>}
        {post.related.map((rel: any) => <AltThumbnail key={rel.slug} {...rel} />)}
      </div>
      <div className='relative top-[104px] pt-8'>
        <Footer />
      </div>
    </div>
  )
}