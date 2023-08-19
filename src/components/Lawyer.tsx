import { IoLogoInstagram, IoLogoLinkedin, IoMdMail } from 'react-icons/io'
import Image from 'next/image'

interface LawyerProps {
  photoUrl: string
  name: string
  bio: string
  platforms: {
    instragram: string,
    linkedin: string,
    email: string
  }
}

export function Lawyer(props: LawyerProps) {
  return (
    <div className="w-full md:max-w-[384px] bg-slate-100 dark:bg-slate-900 rounded-2xl p-6 sm:p-24 md:p-6 flex flex-col items-center gap-4">
      <Image
        src={props.photoUrl}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="rounded-full w-32 h-32"
      />
      <span className="text-slate-950 dark:text-white font-semibold border-b border-amber-500 pb-1">{props.name}</span>
      <span className="text-slate-800 dark:text-slate-300 text-center">{props.bio}</span>
      <div className='flex gap-6'>
        {props.platforms?.instragram !== "" && <a aria-label="Ir para o Instagram" href={props.platforms?.instragram} target='_blank'>
          <IoLogoInstagram className="w-8 h-8 text-slate-950 dark:text-white hover:text-amber-500 dark:hover:text-amber-400" />
        </a>}
        {props.platforms?.linkedin !== "" && <a aria-label="Ir para o LinkedIn" href={props.platforms?.linkedin} target='_blank'>
          <IoLogoLinkedin className="w-8 h-8 text-slate-950 dark:text-white hover:text-amber-500 dark:hover:text-amber-400" />
        </a>}
        {props.platforms?.email !== "" && <a aria-label="Ir para o E-mail" href={`mailto:${props.platforms?.email}`} target='_blank'>
          <IoMdMail className="w-8 h-8 text-slate-950 dark:text-white hover:text-amber-500 dark:hover:text-amber-400" />
        </a>}
      </div>
    </div>
  )
}