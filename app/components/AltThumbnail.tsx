import Link from 'next/link' 
import Image from 'next/image'
import readingTime from 'reading-time'

interface AltThumbnailProps {
  slug: string
  title: string
  tag: {
    title: string
  }
  date: string
  author: {
    name: string
    picture: {
      url: string
    }
    bio: string
  }
  cover: {
    url: string
  }
  body: {
    text: string
  }
}

export function AltThumbnail(props: AltThumbnailProps) {
  const stats = readingTime(props.body.text)

  return (
    <div className="w-full flex flex-col sm:flex-row gap-4 pt-6">
      <Image
        src={props.cover.url}
        alt=''
        width={0}
        height={0}
        sizes="100vw"
        className='w-full sm:w-48 sm:h-48 aspect-square rounded-2xl object-cover'
      />

      <div className='flex flex-col gap-4 py-4'>
        <div className='flex gap-2 items-center'>
          <Image
            src={props.author.picture.url}
            alt=''
            width={0}
            height={0}
            sizes="100vw"
            className='w-8 h-8 rounded-full'
          />
          <span className='text-slate-800 dark:text-slate-300'>{props.author.name}</span>
          <span className='text-slate-800 dark:text-slate-300'>•</span>
          <span className='text-slate-800 dark:text-slate-300'>{props.date}</span>
        </div>
        <Link href={`/artigo/${props.slug}`} className='text-slate-950 dark:text-white text-lg font-medium hover:text-amber-600 dark:hover:text-amber-400'>
          {props.title}
        </Link>
        <div className='flex gap-2 items-center'>
          <span className='font-bold text-amber-600 dark:text-amber-400'>{props.tag.title}</span>
          <span className='text-slate-800 dark:text-slate-300'>•</span>
          <span className='text-slate-800 dark:text-slate-300'>{Math.ceil(stats.minutes)} min de leitura</span>
        </div>
      </div>
    </div>
  )
}