export default function Hero() {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 bg-[radial-gradient(40%_30%_at_50%_0%,#e7e7e7,transparent)] pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl sm:text-6xl leading-tight text-neutral-900">
            Practice deep work. Live with fewer distractions. Grow together.
          </h1>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            Parallel is a quiet community for focused people who value clarity over noise. We share methods, rhythms, and accountability to help you do your best work without the constant pull of the feed.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#principles" className="inline-flex items-center rounded-full bg-neutral-900 text-white px-5 py-3 text-sm hover:bg-neutral-800 transition">Explore principles</a>
            <a href="#testimonials" className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-3 text-sm text-neutral-800 hover:bg-neutral-50 transition">Hear from members</a>
          </div>
        </div>
      </div>
    </section>
  )
}
