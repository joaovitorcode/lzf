export function Footer() {
  return (
    <footer className="w-full bg-slate-100 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto py-8 px-4 xl:px-0">
        <div className="flex gap-8 lg:gap-16 flex-col md:flex-row">
          <div className="w-full h-[362px] rounded-lg bg-white dark:bg-slate-950" />
          <div className="w-full flex flex-col gap-8 md:gap-12">
            <div>
              <h3 className="text-slate-950 dark:text-white font-semibold text-3xl md:text-4xl">Fale conosco</h3>
              <p className="text-slate-800 dark:text-slate-300 pt-4">+55 11 97074-6016</p>
            </div>
            <div>
              <h3 className="text-slate-950 dark:text-white font-semibold text-3xl md:text-4xl">E-mail</h3>
              <p className="text-slate-800 dark:text-slate-300 pt-4">dr.zaiafilho@outlook.com.br</p>
            </div>
            <div>
              <h3 className="text-slate-950 dark:text-white font-semibold text-3xl md:text-4xl">Nos visite</h3>
              <p className="text-slate-800 dark:text-slate-300 pt-4">Rua José Margarido, 23, Santana, São Paulo SP, 02021-020, Brasil</p>
            </div>
          </div>
        </div>
        <p className="text-slate-950 dark:text-white text-center pt-8">
          © 2023 LZF - Advocacia e Assessoria Jurídica. Todos os Direitos Reservados | Desenvolvido por <a href="https://www.linkedin.com/in/joaovitorcode/" target="_blank" className="text-amber-500 dark:text-amber-400">João Vitor</a>
        </p>
      </div>
    </footer>
  )
}