interface ServicesProps {
  name: string
  paragraphs: string[]
  photoUrl: string
  direction: string
}

export function Services(props: ServicesProps) {
  return (
    <section className={props.direction === 'row' ? "w-full flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 items-center" : "w-full flex flex-col-reverse lg:flex-row-reverse gap-8 lg:gap-16 items-center"}>
      <div className="w-full lg:max-w-[608px] h-[456px] rounded-2xl bg-slate-200 dark:bg-slate-900" />
      <div className="w-full lg:max-w-[608px]">
        <h3 className="text-slate-950 dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pt-4 pb-2 border-b border-amber-500 inline-block">
          {props.name}
        </h3>

        {props.paragraphs.map((paragraph) => <p key={paragraph} className="lg:text-lg xl:text-xl text-slate-800 dark:text-slate-300 pt-4">
          {paragraph}
        </p>)}
      </div>
    </section>
  )
}