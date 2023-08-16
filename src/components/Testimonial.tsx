import { MdStarRate } from 'react-icons/md'

export function Testimonial() {
  return (
    <div className="w-full p-6 flex flex-col gap-2 bg-slate-900 rounded-2xl">
      <div className="flex gap-2 items-center">
        <div className="w-8 h-8 bg-slate-800 rounded-full" />
        <span className="text-white font-semibold">João Vitor</span>
      </div>
      <span className="text-slate-300 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est neque, fermentum non volutpat efficitur, lobortis vitae ipsum. Mauris eget blandit mauris.</span>
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