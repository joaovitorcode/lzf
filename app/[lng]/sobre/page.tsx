import Image from 'next/image'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { useTranslation } from '../../i18n'

interface Props {
  params: {
    lng: string
  }
}

export default async function Sobre({ params: { lng } }: Props) {
  const { t } = await useTranslation(lng, 'translation')

  const header = {
    nav_1: t('nav-1'),
    nav_2: t('nav-2'),
    nav_3: t('nav-3')
  }

  const footer = {
    contact_us: t('footer__contact-us'),
    email: t('footer__email'),
    visit_us: t('footer__visit-us'),
    rights: t('footer__rights')
  }

  return (
    <div className='h-screen'>
      <Header header={header} lng={lng} />
      <div className='max-w-3xl mx-auto xl:h-[calc(100vh-80px)] relative top-[80px] px-4 xl:px-0 py-8 flex flex-col gap-8 items-center'>
        <Image
          src="/images/office.jpg"
          alt='Escritório'
          width={0}
          height={0}
          sizes="100vw"
          className='rounded-2xl w-full aspect-auto'
        />
        <p className="lg:text-lg xl:text-xl text-slate-800 dark:text-slate-300">
          {t('about__paragraph-1')}
        </p>
        <p className="lg:text-lg xl:text-xl text-slate-800 dark:text-slate-300">
          {t('about__paragraph-2')}
        </p>
        <p className="lg:text-lg xl:text-xl text-slate-800 dark:text-slate-300">
          {t('about__paragraph-3')}
        </p>
      </div>
      <div className='relative top-[80px]'>
        <Footer footer={footer} />
      </div>
    </div>
  )
}
