// import { GrInstagram, GrLinkedinOption, GrMail } from 'react-icons/Gr'

export function Lawyer() {
  return (
    <div className="w-96 h-96 bg-slate-800 rounded-2xl p-6 flex flex-col items-center gap-4">
      <div className="w-32 h-32 bg-slate-900 rounded-full" />
      <span className="text-white font-semibold border-b border-amber-500 pb-2">Leandro Zaia</span>
      <span className="text-slate-300 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est neque, fermentum non volutpat efficitur, lobortis vitae ipsum. Mauris eget blandit mauris.</span>
      {/* <div className='flex gap-6'>
        <button>
          <GrInstagram className="w-6 h-6 text-white" />
        </button>
        <button>
          <GrLinkedinOption className="w-6 h-6 text-white" />
        </button>
        <button>
          <GrMail className="w-6 h-6 text-white" />
        </button>
      </div> */}
    </div>
  )
}