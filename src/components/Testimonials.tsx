import { Testimonial } from './Testimonial'

export function Testimonials() {
  return (
    <section className="w-full bg-slate-800">
      <div className="max-w-7xl mx-auto py-16">
        <h2 className="text-white text-6xl font-semibold text-center pb-12">Depoimentos</h2>
        <div className="flex gap-16 flex-wrap">
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