import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative h-[78vh] min-h-[520px] w-full" aria-label="Hero">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?q=80&w=2000&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-slate-900/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center mx-auto">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight" style={{fontFamily:'Oswald, Montserrat, Inter, system-ui, sans-serif'}}>
            Your Source for Performance Sporting Goods
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto">
            We supply independent sporting goods retailers and team outfitters with wholesale access to the world's most trusted performance and outdoor brands.
          </p>
          <div className="mt-10">
            <Link
              to="/dealer-application"
              className="inline-flex items-center rounded-md bg-lime-500 hover:bg-lime-600 text-white font-semibold px-6 py-3 shadow-lg transition-colors"
            >
              Open a Dealer Account
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
