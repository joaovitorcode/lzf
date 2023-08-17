import { Lawyer } from './Lawyer'

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

export function Lawyers() {
  return (
    <section className="w-full">
      <h3 className="text-slate-950 dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pt-4 pb-2 border-b border-amber-500 inline-block">
        Advogados
      </h3>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-16 pt-6'>
        {lawyers.map((lawyer) => <Lawyer key={lawyer.name} {...lawyer} />)}
      </div>
    </section>
  )
}