import Image from 'next/image' 
import Link from 'next/link' 
import readingTime from 'reading-time'
import { useTranslation } from '../i18n'

interface ThumbnailProps {
  slug: string
  title: string
  titleEn?: string
  titleEs?: string
  titleIt?: string
  cover: {
    url: string
  }
  author: {
    name: string
    picture: {
      url: string
    }
  }
  date: string
  tag: {
    title: string
  }
  body: {
    text: string
  }
  lng: string
}

export async function Thumbnail(props: ThumbnailProps) {
  const stats = readingTime(props.body.text)
  const { t } = await useTranslation(props.lng, 'translation')

  return (
    <div className="w-full flex flex-col gap-4">
      <Image
        src={props.cover.url}
        alt=''
        width={0}
        height={0}
        sizes="100vw"
        className='rounded-2xl w-full aspect-square object-cover'
      />
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
      <Link href={`/artigo/${props.slug}`} className='line-clamp-3 text-slate-950 dark:text-white text-lg font-medium hover:text-amber-600 dark:hover:text-amber-400'>
        {props.lng === 'pt' ? props.title : 
          props.lng === 'en' ? props.titleEn :
            props.lng === 'es' ? props.titleEs :
              props.lng === 'it' ? props.titleIt : ""}
      </Link>
      <div className='flex gap-2 items-center'>
        <span className='text-amber-600 dark:text-amber-400 font-bold'>{props.tag.title}</span>
        <span className='text-slate-800 dark:text-slate-300'>•</span>
        <span className='text-slate-800 dark:text-slate-300'>{Math.ceil(stats.minutes)} {t('reading-time')}</span>
      </div>
    </div>
  )
}
