import Header from './components/Header'
import Hero from './components/Hero'
import Principles from './components/Principles'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />

      <main>
        <Hero />
        <Principles />
        <Testimonials />
      </main>

      <Footer />
    </div>
  )
}

export default App
