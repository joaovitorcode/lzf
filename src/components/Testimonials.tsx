import { Testimonial } from './Testimonial'

export function Testimonials() {
  return (
    <section className="w-full bg-slate-800">
      <div className="max-w-7xl mx-auto py-16 text-center">
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center border-b border-amber-500 pb-2 inline-block">Depoimentos</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 px-4 xl:px-0 gap-16 pt-12">
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
      </div>
    </section>
  )
}