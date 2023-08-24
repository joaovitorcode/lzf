import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { Thumbnails } from '../components/Thumbnails'
import { Services } from '../components/Services'
import { Lawyers } from '../components/Lawyers'
import { Companies } from '../components/Companies'
import { Testimonials } from '../components/Testimonials'
import { Footer } from '../components/Footer'
import { useTranslation } from '../i18n'

interface Props {
  params: {
    lng: string
  }
}

export default async function Home({ params: { lng } }: Props) {
  const { t } = await useTranslation(lng, 'translation')

  const header = {
    nav_1: t('nav-1'),
    nav_2: t('nav-2'),
    nav_3: t('nav-3')
  }

  const services = [
    {
      name: t('service-1__name'),
      paragraphs: [
        t('service-1__paragraph-1'),
        t('service-1__paragraph-2'),
        t('service-1__paragraph-3'),
      ],
      photoUrl: "/images/example_01.png",
      direction: "row",
    },
    {
      name: t('service-2__name'),
      paragraphs: [
        t('service-2__paragraph-1'),
        t('service-2__paragraph-2'),
        t('service-2__paragraph-3'),
      ],
      photoUrl: "/images/example_02.png",
      direction: "row-reverse",
    },
    {
      name: t('service-3__name'),
      paragraphs: [
        t('service-3__paragraph-1'),
        t('service-3__paragraph-2'),
        t('service-3__paragraph-3'),
      ],
      photoUrl: "/images/example_03.png",
      direction: "row",
    },
    {
      name: t('service-4__name'),
      paragraphs: [
        t('service-4__paragraph-1'),
        t('service-4__paragraph-2'),
        t('service-4__paragraph-3'),
      ],
      photoUrl: "/images/example_04.png",
      direction: "row-reverse",
    },
    {
      name: t('service-5__name'),
      paragraphs: [
        t('service-5__paragraph-1'),
        t('service-5__paragraph-2'),
        t('service-5__paragraph-3'),
      ],
      photoUrl: "/images/example_05.png",
      direction: "row",
    },
  ]

  const lawyers = [
    {
      photoUrl: '/images/photo_leandro.png',
      name: "Leandro Zaia Filho",
      bio: t('lawyer-1__bio'),
      platforms: {
        instragram: "https://www.instagram.com/leandrozaia.adv/",
        linkedin: "https://www.linkedin.com/in/leandrozaiafilho/",
        email: "dr.zaiafilho@outlook.com.br"
      },
    },
    {
      photoUrl: '/images/photo_natalia.png',
      name: "Natalia Martin",
      bio: t('lawyer-2__bio'),
      platforms: {
        instragram: "https://www.instagram.com/adv.nataliamartin/",
        linkedin: "https://www.linkedin.com/in/natalia-de-castro-martin-18399822a/",
        email: "nataliamartin@adv.oabsp.org.br"
      },
    },
    {
      photoUrl: '/images/photo_thais.png',
      name: "Thais Vieira",
      bio: t('lawyer-3__bio'),
      platforms: {
        instragram: "https://www.instagram.com/adv.thaisvvieira/",
        linkedin: "",
        email: "tvieiraadvogada@gmail.com"
      },
    },
  ]

  const companies = [
    {
      name: "Efficiency Service",
      photoUrl: "/images/logo_es.png",
      bio: t('company-1__bio'),
      website: "http://efficiencyservice.com.br/"
    },
    {
      name: "Contabil Planejamento",
      photoUrl: "/images/logo_cp.png",
      bio: t('company-2__bio'),
      website: "https://contabilplanejamento.com.br/"
    },
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      message: t('testimonial-1__message')
    },
    {
      name: "João Santos",
      message: t('testimonial-2__message')
    },
    {
      name: "Ana Rodrigues",
      message: t('testimonial-3__message')
    },
    {
      name: "Pedro Almeida",
      message: t('testimonial-4__message')
    },
    {
      name: "Laura Gonçalves",
      message: t('testimonial-5__message')
    },
    {
      name: "Rafael Fernandes",
      message: t('testimonial-6__message')
    },
  ]

  const footer = {
    contact_us: t('footer__contact-us'),
    email: t('footer__email'),
    visit_us: t('footer__visit-us'),
    rights: t('footer__rights')
  }

  return (
    <div>
      <Header header={header} lng={lng} />
      <div className='max-w-7xl mx-auto px-4 xl:px-0 flex flex-col gap-16 relative top-[104px]'>
        <Banner value={t('banner')} />
        <Thumbnails value={t('thumbnails')} />
        {services.map((service) => <Services key={service.name} {...service} />)}
        <Lawyers lawyers={lawyers} title={t('lawyers')} />
        <Companies companies={companies} title={t('companies')} />
      </div>
      <div className='flex flex-col gap-8 pt-8 relative top-[104px]'>
        <Testimonials testimonials={testimonials} title={t('testimonials')} />
        <Footer footer={footer} />
      </div>
    </div>
  )
}
