import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Lawyer } from '../../components/Lawyer'

const lawyers = [
  {
    photoUrl: '/images/photo_leandro.png',
    name: "Leandro Zaia Filho",
    bio: "Advogado excepcional, unindo conhecimento profundo, paixão pela justiça e habilidades persuasivas para representar seus clientes com distinção e sucesso.",
    platforms: {
      instragram: "https://www.instagram.com/leandrozaia.adv/",
      linkedin: "https://www.linkedin.com/in/leandrozaiafilho/",
      email: "dr.zaiafilho@outlook.com.br"
    },
  },
  {
    photoUrl: '/images/photo_natalia.png',
    name: "Natalia Martin",
    bio: "Advogada brilhante e compassiva, une sua vasta expertise legal a um compromisso inabalável com a equidade, sendo uma defensora exemplar da justiça.",
    platforms: {
      instragram: "https://www.instagram.com/adv.nataliamartin/",
      linkedin: "https://www.linkedin.com/in/natalia-de-castro-martin-18399822a/",
      email: "nataliamartin@adv.oabsp.org.br"
    },
  },
  {
    photoUrl: '/images/photo_thais.png',
    name: "Thais Vieira",
    bio: "Advogada notável, cativa com sua perspicácia jurídica e ética inabalável, representando seus clientes com zelo e garantindo a excelência da justiça.",
    platforms: {
      instragram: "https://www.instagram.com/adv.thaisvvieira/",
      linkedin: "",
      email: "tvieiraadvogada@gmail.com"
    },
  },
]

export default function Parceiros() {
  return (
    <div>
      <Header />
      <div className='max-w-7xl mx-auto lg:h-screen relative top-[104px] flex flex-col gap-8 items-center'>
        <h3 className="text-slate-950 dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pb-1 sm:pb-2 border-b border-amber-500 inline-block">
          Parceiros
        </h3>
        <p className="max-w-xl text-center lg:text-lg xl:text-xl text-slate-800 dark:text-slate-300">
          Leia os artigos de convidados e especialistas em diversas áreas do direito.
        </p>
        <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {lawyers.map((lawyer) => <Lawyer key={lawyer.name} {...lawyer} />)}
        </div>
      </div>
      <div className='relative top-[104px] pt-8'>
        <Footer />
      </div>
    </div>
  )
}
