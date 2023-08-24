import Image from "next/image"

interface Props {
  value: string
}

export function Banner({ value }: Props) {
  return (
    <section className="w-full h-[512px] md:h-auto md:aspect-video relative">
      <Image
        src="/images/background.png"
        alt="Estátua de mármore da deusa da justiça sobre um fundo escuro segurando uma balança em cada mão"
        priority
        fill
        className="rounded-3xl object-cover"
      />
      <div className="w-full h-full bg-black absolute rounded-3xl opacity-10" />
      <p className="text-white shad font-bold border-b-2 md:border-b-4 border-amber-500 pb-0 sm:pb-1 md:pb-2 lg:pb-3 xl:pb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-[279px] sm:max-w-[349px] md:max-w-[419px] lg:max-w-[559px] xl:max-w-[579px] absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 xl:bottom-24 left-8 sm:left-12 md:left-16 lg:left-20 xl:left-24">
        {value}
      </p>
    </section>
  )
}
