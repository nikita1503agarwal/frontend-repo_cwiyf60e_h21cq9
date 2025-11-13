import Header from '../components/Header'
import Hero from '../components/Hero'
import Brands from '../components/Brands'
import About from '../components/About'
import Highlights from '../components/Highlights'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="font-sans text-slate-800" style={{fontFamily:'Inter, system-ui, sans-serif'}}>
      <Header />
      <main className="pt-16">
        <Hero />
        <Brands />
        <About />
        <Highlights />
      </main>
      <Footer />
    </div>
  )
}

export default Home
