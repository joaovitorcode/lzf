import Image from 'next/image'

interface AuthorProps {
  name: string
  picture: {
    url: string
  }
  bio: string
}

export function Author(props: AuthorProps) {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-900 rounded-2xl mt-16 p-6 sm:p-12 flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row gap-6">
        <Image
          src={props.picture.url}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-24 h-24 rounded-full"
        />
        <div>
          <p className="text-slate-950 dark:text-white font-semibold border-b border-amber-500 pb-2 uppercase inline">O autor</p>
          <p className="text-slate-950 dark:text-white text-2xl sm:text-4xl font-semibold pt-6">{props.name}</p>
        </div>
      </div>
      <p className="text-slate-800 dark:text-slate-300 text-base sm:text-lg text-justify">
        {props.bio}
      </p>
    </section>
  )
}