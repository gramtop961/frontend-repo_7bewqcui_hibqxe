import { useState, useEffect } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-semibold">P</div>
          <span className="text-xl font-serif tracking-tight text-neutral-900 group-hover:opacity-80 transition">Parallel</span>
        </a>
        <nav className="flex items-center gap-3">
          <a href="#principles" className="hidden sm:inline text-sm text-neutral-600 hover:text-neutral-900 transition">Principles</a>
          <a href="#testimonials" className="hidden sm:inline text-sm text-neutral-600 hover:text-neutral-900 transition">Voices</a>
          <button onClick={() => setOpen(true)} className="inline-flex items-center rounded-full bg-neutral-900 text-white text-sm px-4 py-2 hover:bg-neutral-800 transition">
            Login
          </button>
        </nav>
      </div>

      {open && (
        <div className="fixed inset-0 z-30 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
          <div className="relative z-40 w-full max-w-md mx-auto rounded-2xl bg-white shadow-xl border border-neutral-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-serif text-neutral-900">Private Forum</h3>
              <button onClick={() => setOpen(false)} aria-label="Close" className="text-neutral-500 hover:text-neutral-900">✕</button>
            </div>
            <p className="text-sm text-neutral-600 mb-4">Members can access a quiet, private space to discuss deep work and digital minimalism. Sign in below to continue.</p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Demo only — authentication not connected.'); }} className="space-y-3">
              <div>
                <label className="block text-sm text-neutral-700 mb-1">Email</label>
                <input type="email" required className="w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-1">Password</label>
                <input type="password" required className="w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" placeholder="••••••••" />
              </div>
              <button type="submit" className="w-full rounded-md bg-neutral-900 text-white py-2 hover:bg-neutral-800 transition">Sign in</button>
              <p className="text-xs text-neutral-500 text-center">Don’t have access? Request an invite from an existing member.</p>
            </form>
          </div>
        </div>
      )}
    </header>
  )
}
