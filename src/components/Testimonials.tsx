import { Testimonial } from './Testimonial'

const testimonials = [
  {
    name: "Maria Silva",
    message: "O doutor Leandro Zaia foi incrível ao lidar com nosso caso complicado de Direito Penal Empresarial. Ele nos tranquilizou durante todo o processo. Recomendo muito!"
  },
  {
    name: "João Santos",
    message: "Estou muito satisfeito com os serviços prestados. O doutor Leandro é incrivelmente versátil, cobrindo Direito Empresarial, Internacional e LGPD com muita competência.",
  },
  {
    name: "Ana Rodrigues",
    message: "O doutor Zaia foi uma ajuda valiosa nas questões de Direito Internacional. Sua experiência fez toda a diferença para o sucesso do nosso caso.",
  },
  {
    name: "Pedro Almeida",
    message: "Estou impressionado com a habilidade do doutor Leandro Zaia em abordar questões de Direito Penal. Sua estratégia e confiança realmente se destacaram.",
  },
  {
    name: "Laura Gonçalves",
    message: "Nossa experiência em LGPD e Compliance foi ótima graças ao doutor Leandro. Sua orientação foi fundamental para implementarmos medidas de proteção de dados.",
  },
  {
    name: "Rafael Fernandes",
    message: "O doutor Zaia é um especialista em Direito Empresarial. Sua capacidade de fornecer orientações claras e relevantes é impressionante. Altamente recomendado!",
  },
]

export function Testimonials() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto py-16 text-center">
        <h2 className="text-slate-950 dark:text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center border-b border-amber-500 pb-2 inline-block">Depoimentos</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 px-4 xl:px-0 gap-16 pt-12">
          {testimonials.map((testimonial) => <Testimonial key={testimonial.name} {...testimonial} />)}
        </div>
      </div>
    </section>
  )
}