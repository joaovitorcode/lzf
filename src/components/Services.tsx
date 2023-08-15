interface ServicesProps {
  direction: 'row' | 'row-reverse'
}

export function Services({ direction }: ServicesProps) {
  return (
    <section className={direction === 'row' ? "w-full flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 items-center" : "w-full flex flex-col-reverse lg:flex-row-reverse gap-8 lg:gap-16 items-center"}>
      <div className="w-full lg:max-w-[608px] h-[456px] rounded-2xl bg-slate-800" />
      <div className="w-full lg:max-w-[608px]">
        <h3 className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-4 border-b border-amber-500 inline-block">
          Serviço 1
        </h3>

        <p className="lg:text-lg xl:text-xl text-slate-300 pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est neque, fermentum non volutpat efficitur, lobortis vitae ipsum. Mauris eget blandit mauris.
        </p>
        <p className="lg:text-lg xl:text-xl text-slate-300 pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est neque, fermentum non volutpat efficitur, lobortis vitae ipsum. Mauris eget blandit mauris.
        </p>
        <p className="lg:text-lg xl:text-xl text-slate-300 pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est neque, fermentum non volutpat efficitur, lobortis vitae ipsum. Mauris eget blandit mauris.
        </p>
      </div>
    </section>
  )
}