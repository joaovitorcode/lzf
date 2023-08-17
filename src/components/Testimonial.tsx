import { MdStarRate } from 'react-icons/md'

interface TestimonialProps {
  name: string
  message: string
}

export function Testimonial(props: TestimonialProps) {
  return (
    <div className="w-full p-6 flex flex-col gap-2 bg-white dark:bg-slate-950 rounded-2xl">
      <div className="flex gap-2 items-center">
        <div className="w-8 h-8 bg-slate-200 dark:bg-slate-900 rounded-full" />
        <span className="text-slate-950 dark:text-white font-semibold">{props.name}</span>
      </div>
      <span className="text-slate-800 dark:text-slate-300 text-left">{props.message}</span>
      <div className='w-full flex gap-2'>
        <MdStarRate className="w-6 h-6 text-amber-400" />
        <MdStarRate className="w-6 h-6 text-amber-400" />
        <MdStarRate className="w-6 h-6 text-amber-400" />
        <MdStarRate className="w-6 h-6 text-amber-400" />
        <MdStarRate className="w-6 h-6 text-amber-400" />
      </div>
    </div>
  )
}