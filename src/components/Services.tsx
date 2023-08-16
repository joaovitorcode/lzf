interface ServicesProps {
  direction: 'row' | 'row-reverse'
}

export function Services({ direction }: ServicesProps) {
  return (
    <section className={direction === 'row' ? "w-full flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 items-center" : "w-full flex flex-col-reverse lg:flex-row-reverse gap-8 lg:gap-16 items-center"}>
      <div className="w-full lg:max-w-[608px] h-[456px] rounded-2xl bg-slate-200 dark:bg-slate-900" />
      <div className="w-full lg:max-w-[608px]">
        <h3 className="text-slate-950 dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pt-4 pb-2 border-b border-amber-500 inline-block">
          Serviço 1
        </h3>

        <p className="lg:text-lg xl:text-xl text-slate-800 dark:text-slate-300 pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est neque, fermentum non volutpat efficitur, lobortis vitae ipsum. Mauris eget blandit mauris.
        </p>
        <p className="lg:text-lg xl:text-xl text-slate-800 dark:text-slate-300 pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est neque, fermentum non volutpat efficitur, lobortis vitae ipsum. Mauris eget blandit mauris.
        </p>
        <p className="lg:text-lg xl:text-xl text-slate-800 dark:text-slate-300 pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est neque, fermentum non volutpat efficitur, lobortis vitae ipsum. Mauris eget blandit mauris.
        </p>
      </div>
    </section>
  )
}