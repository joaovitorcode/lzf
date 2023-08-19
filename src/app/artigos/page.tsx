import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Thumbnail } from '../../components/Thumbnail'

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
  }
]

export default function Artigos() {
  return (
    <div>
      <Header />
      <div className={`max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 xl:px-0 py-8 gap-x-6 gap-y-16 ${thumbnails.length <= 4 ? "xl:h-[calc(100vh-80px)]" : ""} relative top-[80px]`}>
        {thumbnails.map((thumbnail) => <Thumbnail key={thumbnail.title} {...thumbnail} />)}
      </div>
      <div className='relative top-[80px]'>
        <Footer />
      </div>
    </div>
  )
}
