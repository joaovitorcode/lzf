import { Testimonial } from './Testimonial'

export function Testimonials() {
  return (
    <section className="w-full bg-slate-800">
      <div className="max-w-7xl mx-auto py-16 text-center">
        <h2 className="text-white text-6xl font-semibold text-center border-b border-amber-500 pb-4 inline-block">Depoimentos</h2>
        <div className="grid grid-cols-3 gap-16 pt-12">
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