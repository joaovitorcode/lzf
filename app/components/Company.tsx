import Image from "next/image"

interface CompanyProps {
  name: string
  photoUrl: string
  bio: string
  website: string
}

export function Company(props: CompanyProps) {
  return (
    <div className="w-full bg-slate-100 dark:bg-slate-900 rounded-2xl p-6 flex flex-col lg:flex-row gap-6">
      <a aria-label={`Ir para o site do nosso parceiro ${props.name}`} href={props.website} target="_blank">
        <div className="w-full sm:w-48 sm:h-48 aspect-square bg-slate-50 flex items-center justify-center rounded-xl">
          <Image
            src={props.photoUrl}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
      </a>
      <div className="w-full py-2 flex flex-col gap-4 justify-between">
        <div>
          <a aria-label={`Ir para o site do nosso parceiro ${props.name}`} href={props.website} target="_blank" className="text-slate-950 dark:text-white font-semibold border-b border-amber-500 pb-1 inline-block">{props.name}</a>
          <p className="text-slate-800 dark:text-slate-300 pt-4">{props.bio}</p>
        </div>
      </div>
    </div>
  )
}