export function Company() {
  return (
    <div className="w-[608px] bg-slate-800 rounded-2xl p-6 flex gap-6">
      <div className="w-[256px] h-[256px] bg-slate-900 rounded-xl" />
      <div className="w-[280px] py-2 flex flex-col justify-between">
        <div className="">
          <div className="text-white font-semibold border-b border-amber-500 pb-2 inline-block">Nome da Empresa</div>
          <div className="text-slate-300 text-justify pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est neque, fermentum non volutpat efficitur, lobortis vitae ipsum. Mauris eget blandit mauris.</div>
        </div>

        <button className="w-full py-3 text-slate-900 font-semibold rounded bg-amber-400 hover:bg-amber-300">Acesse</button>
      </div>
    </div>
  )
}