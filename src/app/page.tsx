import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { Thumbnails } from '../components/Thumbnails'
import { Services } from '../components/Services'
import { Lawyers } from '../components/Lawyers'
import { Companies } from '../components/Companies'
import { Testimonials } from '../components/Testimonials'
import { Footer } from '../components/Footer'

const services = [
  {
    name: "Direito Penal",
    paragraphs: [
      "Atuação em delitos patrimoniais como furto, roubo e estelionato. Intervenção em crimes contra a vida, incluindo homicídio e lesão corporal.",
      "Defesa e consultoria em crimes contra administração pública e sistema financeiro. Acompanhamento de infrações ambientais e cibernéticas.",
      "Assistência em execução penal, aconselhamento em direito penal econômico e tributário. Oferecemos soluções abrangentes e especializadas."
    ],
    photoUrl: "/images/example_01.png",
    direction: "row"
  },
  {
    name: "Direito Empresarial",
    paragraphs: [
      "Especialização em fusões, aquisições e contratos comerciais. Acompanhamento em processos e expertise em startups e governança corporativa.",
      "Assessoria completa em propriedade intelectual e compliance. Orientação em recuperação judicial e litígios empresariais.",
      "Consultoria sólida em direito societário, relações de consumo e estruturação de negócios. Soluções jurídicas abrangentes para empresas."
    ],
    photoUrl: "/images/example_02.png",
    direction: "row-reverse"
  },
  {
    name: "Direito Internacional",
    paragraphs: [
      "Homologação e execução de sentenças do exterior. Monitoramento de cartas rogatórias e medidas correspondentes.",
      "Abordagem de questões transnacionais alimentares, migração, residência e reconhecimento de nacionalidades.",
      "Legalização de eventos como nascimento, casamento e divórcio no exterior. Colaboração internacional e orientação para brasileiros residentes no exterior."
    ],
    photoUrl: "/images/example_03.png",
    direction: "row"
  },
  {
    name: "Direito Penal Empresarial",
    paragraphs: [
      "Representação sólida em ações penais e consultoria especializada em investigações corporativas. Aconselhamento para adesão às leis anticorrupção.",
      "Estratégias para prevenção e resolução de fraudes e incidentes corporativos, incluindo questões fiscais e financeiras.",
      "Implementação eficaz de programas de compliance com enfoque penal, garantindo o cumprimento regulatório e a conduta ética das empresas."
    ],
    photoUrl: "/images/example_04.png",
    direction: "row-reverse"
  },
  {
    name: "LGPD e Compliance",
    paragraphs: [
      "Nossa expertise abrange estratégias robustas para aderência à LGPD e políticas de Compliance. Garantimos conformidade nacional e internacional.",
      "Enfrentamos violações de dados com prevenção e solução, minimizando riscos. A gestão eficaz de incidentes é primordial.",
      "Além disso, fomentamos um ambiente corporativo ético e transparente. Nossas ações de Compliance promovem integridade e conformidade normativa."
    ],
    photoUrl: "/images/example_05.png",
    direction: "row"
  },
]

export default function Home() {
  return (
    <div>
      <Header />
      <div className='max-w-7xl mx-auto px-4 xl:px-0 flex flex-col gap-16 relative top-[104px]'>
        <Banner />
        <Thumbnails />
        {services.map((service) => <Services key={service.name} {...service} />)}
        <Lawyers />
        <Companies />
      </div>
      <div className='flex flex-col gap-8 pt-8 relative top-[104px]'>
        <Testimonials />
        <Footer />
      </div>
    </div>
  )
}
