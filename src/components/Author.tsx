export function Author() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-900 rounded-2xl mt-16 p-6 sm:p-12 flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="w-24 h-24 bg-white dark:bg-slate-950 rounded-full" />
        <div className="">
          <p className="text-slate-950 dark:text-white font-semibold border-b border-amber-500 pb-2 uppercase inline">O autor</p>
          <p className="text-slate-950 dark:text-white text-2xl sm:text-4xl font-semibold pt-6">Leandro Zaia Filho</p>
        </div>
      </div>
      <p className="text-slate-800 dark:text-slate-300 text-base sm:text-lg text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus lacus, a mattis turpis. Pellentesque rutrum euismod risus eget lacinia. Aenean in nulla dolor. Nulla interdum egestas purus, at luctus risus ultrices eget. Curabitur nisl ex, finibus vitae auctor sed, eleifend auctor urna. Pellentesque quis tempor ipsum, in molestie dui.</p>
    </section>
  )
}