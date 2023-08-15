export function Company() {
  return (
    <div className="w-full bg-slate-800 rounded-2xl p-6 flex flex-col lg:flex-row gap-6">
      <div className="w-full h-[256px] bg-slate-900 rounded-xl" />
      <div className="w-full py-2 flex flex-col gap-4 justify-between">
        <div className="">
          <div className="text-white font-semibold border-b border-amber-500 pb-2 inline-block">Nome da Empresa</div>
          <div className="text-slate-300 text-justify pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est neque, fermentum non volutpat efficitur, lobortis vitae ipsum. Mauris eget blandit mauris.</div>
        </div>

        <button className="w-full py-3 text-slate-900 font-semibold rounded bg-amber-400 hover:bg-amber-300">Acesse</button>
      </div>
    </div>
  )
}