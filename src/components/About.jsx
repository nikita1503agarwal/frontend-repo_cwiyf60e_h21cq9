function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-lg shadow">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop"
            alt="Warehouse interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900" style={{fontFamily:'Montserrat, Inter, system-ui, sans-serif'}}>
            A Modern B2B Distribution Partner
          </h3>
          <p className="mt-6 text-slate-700 leading-relaxed">
            Northwest Sporting Goods was founded to bridge the gap between world-class performance gear manufacturers and the independent retailers who equip our communities' athletes and adventurers. Operating from our logistical hub in Oregon, we are a registered business committed to providing our dealer network with dependable service, authentic products, and a seamless supply chain experience. Our specialized focus on performance sporting goods ensures we understand the quality your customers demand.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
