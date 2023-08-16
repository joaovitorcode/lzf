import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Author } from "@/components/Author";
import { AltThumbnail } from "@/components/AltThumbnail";
import Link from "next/link";

export default function Post({ params }: { params: { slug: string } }) {
  return (
    <div>
      <Header />
      <div className='max-w-3xl mx-auto px-4 md:px-0 relative top-[104px]'>
        <div className="flex gap-4 flex-wrap items-center">
          <Link href='#' className="text-sm text-amber-600 dark:text-amber-400 py-1 px-2 bg-amber-100 dark:bg-slate-900 rounded-2xl inline hover:underline">
            Trabalhista e Previdenciário
          </Link>
          <p className="text-sm text-slate-950 dark:text-white">14 de Agosto de 2023</p>
          <p className="text-sm text-slate-950 dark:text-white">Leandro Zaia</p>
          <p className="text-sm text-slate-950 dark:text-white">8 min de leitura</p>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white pt-6">Donec pretium arcu a urna suscipit commodo. Phasellus ac pulvinar massa, id dapibus tortor.</h2>
      
        <div className="w-[768] aspect-square md:aspect-video bg-slate-200 dark:bg-slate-900 rounded-2xl mt-6" />

        <article className="prose dark:prose-invert prose-base sm:prose-lg md:prose-xl mt-6">
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus lacus, a mattis turpis. Pellentesque rutrum euismod risus eget lacinia. Aenean in nulla dolor. Pellentesque quis tempor ipsum, in molestie dui.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus lacus, a mattis turpis. Pellentesque rutrum euismod risus eget lacinia. Aenean in nulla dolor. Pellentesque quis tempor ipsum, in molestie dui.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus lacus, a mattis turpis. Pellentesque rutrum euismod risus eget lacinia. Aenean in nulla dolor. Pellentesque quis tempor ipsum, in molestie dui.
          </p>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus lacus, a mattis turpis. Pellentesque rutrum euismod risus eget lacinia. Aenean in nulla dolor. Pellentesque quis tempor ipsum, in molestie dui.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus lacus, a mattis turpis. Pellentesque rutrum euismod risus eget lacinia. Aenean in nulla dolor. Pellentesque quis tempor ipsum, in molestie dui.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus lacus, a mattis turpis. Pellentesque rutrum euismod risus eget lacinia. Aenean in nulla dolor. Pellentesque quis tempor ipsum, in molestie dui.
          </p>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus lacus, a mattis turpis. Pellentesque rutrum euismod risus eget lacinia. Aenean in nulla dolor. Pellentesque quis tempor ipsum, in molestie dui.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus lacus, a mattis turpis. Pellentesque rutrum euismod risus eget lacinia. Aenean in nulla dolor. Pellentesque quis tempor ipsum, in molestie dui.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus lacus, a mattis turpis. Pellentesque rutrum euismod risus eget lacinia. Aenean in nulla dolor. Pellentesque quis tempor ipsum, in molestie dui.
          </p>
        </article>

        <Author />
        <h2 className='text-slate-950 dark:text-white text-2xl sm:text-3xl md:text-4xl font-semibold border-b border-amber-500 pb-2 inline-block pt-16'>
          Artigos Recomendados
        </h2>
        <AltThumbnail />
        <AltThumbnail />
        <AltThumbnail />
      </div>
      <div className='relative top-[104px] pt-8'>
        <Footer />
      </div>
    </div>
  )
}