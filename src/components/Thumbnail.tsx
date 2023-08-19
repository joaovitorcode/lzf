import Image from 'next/image' 
import Link from 'next/link' 

interface ThumbnailProps {
  coverUrl: string
  user: {
    name: string
    photoUrl: string
  }
  date: string
  title: string
  theme: string
  readingTime: string
}

export function Thumbnail(props: ThumbnailProps) {
  return (
    <div className="w-full flex flex-col gap-4">
      <Image
        src={props.coverUrl}
        alt=''
        width={0}
        height={0}
        sizes="100vw"
        className='rounded-2xl w-full aspect-square object-cover'
      />
      <div className='flex gap-2 items-center'>
        <div className='w-8 h-8 bg-slate-200 dark:bg-slate-900 rounded-full' />
        <span className='text-slate-800 dark:text-slate-300'>{props.user.name}</span>
        <span className='text-slate-800 dark:text-slate-300'>•</span>
        <span className='text-slate-800 dark:text-slate-300'>{props.date}</span>
      </div>
      <Link href='/artigo/1' className='text-slate-950 dark:text-white text-lg font-medium hover:text-amber-500 dark:hover:text-amber-400'>
        {props.title}
      </Link>
      <div className='flex gap-2 items-center'>
        <span className='text-amber-600 dark:text-amber-400 font-bold'>{props.theme}</span>
        <span className='text-slate-800 dark:text-slate-300'>•</span>
        <span className='text-slate-800 dark:text-slate-300'>{props.readingTime}</span>
      </div>
    </div>
  )
}
