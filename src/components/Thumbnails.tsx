import { Thumbnail } from './Thumbnail'

const thumbnails = [
  {
    coverUrl: "/images/example_01.png",
    user: {
      name: "Leandro Zaia",
      photoUrl: "",
    },
    date: "3 horas atrás",
    title: "Donec pretium arcu a urna suscipit commodo. Phasellus ac pulvinar massa, id dapibus tortor.",
    theme: "Penal",
    readingTime: "8 min de leitura",
  },
  {
    coverUrl: "/images/example_02.png",
    user: {
      name: "Natalia Martin",
      photoUrl: "",
    },
    date: "3 horas atrás",
    title: "Donec pretium arcu a urna suscipit commodo. Phasellus ac pulvinar massa, id dapibus tortor.",
    theme: "Empresarial",
    readingTime: "8 min de leitura",
  },
  {
    coverUrl: "/images/example_03.png",
    user: {
      name: "Thais Vieira",
      photoUrl: "",
    },
    date: "3 horas atrás",
    title: "Donec pretium arcu a urna suscipit commodo. Phasellus ac pulvinar massa, id dapibus tortor.",
    theme: "Internacional",
    readingTime: "8 min de leitura",
  },
  {
    coverUrl: "/images/example_04.png",
    user: {
      name: "Convidado",
      photoUrl: "",
    },
    date: "3 horas atrás",
    title: "Donec pretium arcu a urna suscipit commodo. Phasellus ac pulvinar massa, id dapibus tortor.",
    theme: "LGPD e Compliance",
    readingTime: "8 min de leitura",
  },
]

export function Thumbnails() {
  return (
    <section className="w-full">
      <div className='flex justify-between items-end'>
        <h2 className='text-slate-950 dark:text-white text-2xl sm:text-3xl md:text-4xl font-semibold border-b border-amber-500 pb-2'>
          Artigos Recentes
        </h2>

      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-6'>
        {thumbnails.map((thumbnail) => <Thumbnail key={thumbnail.title} {...thumbnail} />)}
      </div>
    </section>
  )
}
