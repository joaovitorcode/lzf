export function Footer() {
  return (
    <footer className="w-full bg-slate-100 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto py-8 px-4 xl:px-0">
        <div className="flex gap-8 lg:gap-16 flex-col md:flex-row">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.904205778316!2d-46.63710342383338!3d-23.499959659340792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef7cd834868d9%3A0x2fd83cb5abe1afd7!2sR.%20Jos%C3%A9%20Margarido%2C%2023%20-%20Santana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002021-020!5e0!3m2!1spt-BR!2sbr!4v1692485607467!5m2!1spt-BR!2sbr"
            className="w-full h-[362px] rounded-lg border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* <div className="w-full h-[362px] rounded-lg bg-white dark:bg-slate-950" /> */}
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
          © 2023 LZF - Advocacia e Assessoria Jurídica. Todos os Direitos Reservados | Desenvolvido por <a href="https://www.linkedin.com/in/joaovitorcode/" target="_blank" className="hover:underline font-bold text-amber-600 dark:text-amber-400">João Vitor</a>
        </p>
      </div>
    </footer>
  )
}