interface ServicesProps {
  direction: 'row' | 'row-reverse'
}

export function Services({ direction }: ServicesProps) {

  return (
    <section className={`w-full flex flex-${direction} gap-16`}>
      <div className="w-[608px] h-[456px] rounded-2xl bg-slate-800" />
      <div className="w-[608px] flex flex-col gap-6">
        <h3 className="text-white font-semibold text-6xl pt-4">
          Serviço 1
          <div className="w-full border-t mt-4 border-amber-500" />
        </h3>

        <p className="text-xl text-slate-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est neque, fermentum non volutpat efficitur, lobortis vitae ipsum. Mauris eget blandit mauris.
        </p>
        <p className="text-xl text-slate-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est neque, fermentum non volutpat efficitur, lobortis vitae ipsum. Mauris eget blandit mauris.
        </p>
        <p className="text-xl text-slate-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est neque, fermentum non volutpat efficitur, lobortis vitae ipsum. Mauris eget blandit mauris.
        </p>
      </div>
    </section>
  )
}