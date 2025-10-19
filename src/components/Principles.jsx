export default function Principles() {
  const items = [
    {
      title: 'Rituals of Focus',
      body:
        'We cultivate daily blocks of undisturbed, high‑value work. Phones out of sight, notifications off, priorities defined.',
    },
    {
      title: 'Deliberate Input',
      body:
        'We reduce low‑signal consumption and favor slow media: books, long essays, and real conversations.',
    },
    {
      title: 'Calm Technology',
      body:
        'We design our tools to serve us. Minimal interfaces, intentional defaults, and time boundaries.',
    },
    {
      title: 'Community Accountability',
      body:
        'We share weekly intentions and outcomes in a respectful, low‑traffic cadence — no feeds, no dopamine loops.',
    },
  ]

  return (
    <section id="principles" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-2xl mb-10">
        <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900">Principles</h2>
        <p className="mt-3 text-neutral-600">A shared set of commitments that make space for depth and meaning.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {items.map((p) => (
          <div key={p.title} className="rounded-xl border border-neutral-200 bg-white p-6 hover:shadow-sm transition">
            <h3 className="font-serif text-xl text-neutral-900">{p.title}</h3>
            <p className="mt-2 text-neutral-600 leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
