export function Footer() {
  return (
    <footer className="w-full bg-slate-800">
      <div className="max-w-7xl mx-auto py-8">
        <div className="flex gap-16">
          <div className="w-[608px] h-[362px] rounded-lg bg-slate-900" />
          <div className="w-[608px] flex flex-col gap-12">
            <div>
              <h3 className="text-white font-semibold text-4xl">Fale conosco</h3>
              <p className="text-slate-300 pt-4">+55 11 97074-6016</p>
            </div>
            <div>
              <h3 className="text-white font-semibold text-4xl">E-mail</h3>
              <p className="text-slate-300 pt-4">dr.zaiafilho@outlook.com.br</p>
            </div>
            <div>
              <h3 className="text-white font-semibold text-4xl">Nos visite</h3>
              <p className="text-slate-300 pt-4">Rua José Margarido, 23, Santana, São Paulo SP, 02021-020, Brasil</p>
            </div>
          </div>
        </div>
        <p className="text-white text-center pt-8">
          © 2023 LZF - Advocacia e Assessoria Jurídica. Todos os Direitos Reservados | Desenvolvido por <span className="text-amber-300">João Vitor</span>
        </p>
      </div>
    </footer>
  )
}