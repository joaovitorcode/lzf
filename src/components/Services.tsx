interface ServicesProps {
  direction: 'row' | 'row-reverse'
}

export function Services({ direction }: ServicesProps) {
  return (
    <section className={direction === 'row' ? "w-full flex flex-row gap-16" : "w-full flex flex-row-reverse gap-16"}>
      <div className="w-[608px] h-[456px] rounded-2xl bg-slate-800" />
      <div className="w-[608px]">
        <h3 className="text-white font-semibold text-6xl py-4 border-b border-amber-500 inline-block">
          Serviço 1
        </h3>

        <p className="text-xl text-slate-300 pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est neque, fermentum non volutpat efficitur, lobortis vitae ipsum. Mauris eget blandit mauris.
        </p>
        <p className="text-xl text-slate-300 pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est neque, fermentum non volutpat efficitur, lobortis vitae ipsum. Mauris eget blandit mauris.
        </p>
        <p className="text-xl text-slate-300 pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est neque, fermentum non volutpat efficitur, lobortis vitae ipsum. Mauris eget blandit mauris.
        </p>
      </div>
    </section>
  )
}