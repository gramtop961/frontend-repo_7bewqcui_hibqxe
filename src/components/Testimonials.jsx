export default function Testimonials() {
  const quotes = [
    {
      quote:
        'Since joining, my mornings are quiet again. I finish by noon what used to take all day.',
      name: 'Amara K.',
      role: 'Researcher',
    },
    {
      quote:
        'The cadence is calm, the conversations are thoughtful, and my screen time dropped by 40%.',
      name: 'Leo M.',
      role: 'Product Designer',
    },
    {
      quote:
        'Parallel helped me build a sustainable deep work routine without the guilt or the hype.',
      name: 'Nadia S.',
      role: 'Writer',
    },
  ]

  return (
    <section id="testimonials" className="bg-neutral-50 border-t border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-2xl mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900">What members say</h2>
          <p className="mt-3 text-neutral-600">Short reflections from a quiet corner of the internet.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <figure key={q.name} className="rounded-xl border border-neutral-200 bg-white p-6">
              <blockquote className="text-neutral-800 leading-relaxed">“{q.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-neutral-600">{q.name} · {q.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
