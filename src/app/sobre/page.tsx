import Image from 'next/image'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

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

export default function Sobre() {
  return (
    <div className='h-screen'>
      <Header />
      <div className='max-w-3xl mx-auto xl:h-[calc(100vh-80px)] relative top-[80px] px-4 xl:px-0 py-8 flex flex-col gap-8 items-center'>
        <Image
          src="/images/office.jpg"
          alt='Escritório'
          width={0}
          height={0}
          sizes="100vw"
          className='rounded-2xl w-full aspect-auto'
        />
        <p className="lg:text-lg xl:text-xl text-slate-800 dark:text-slate-300">O Escritório oferece atendimento jurídico personalizado, prático e moderno, pautado na excelência e ética profissional.</p>
        <p className="lg:text-lg xl:text-xl text-slate-800 dark:text-slate-300">Nossa abordagem integra inovação e tecnologia para aprimorar a eficiência dos serviços, sempre com foco nas necessidades individuais de cada cliente.</p>
        <p className="lg:text-lg xl:text-xl text-slate-800 dark:text-slate-300">Nosso compromisso é com a justiça, respeito, integridade e transparência, visando sempre ao melhor interesse de nossos clientes.</p>
      </div>
      <div className='relative top-[80px]'>
        <Footer />
      </div>
    </div>
  )
}
