export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Parallel. A community for deep work and digital minimalism.</p>
        <div className="flex items-center gap-4 text-sm text-neutral-600">
          <a href="#principles" className="hover:text-neutral-900 transition">Principles</a>
          <a href="#testimonials" className="hover:text-neutral-900 transition">Voices</a>
        </div>
      </div>
    </footer>
  )
}
