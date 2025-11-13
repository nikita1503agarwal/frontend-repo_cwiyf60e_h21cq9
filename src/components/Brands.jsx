function Brands() {
  const logos = [
    { name: 'The North Face', url: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/The_North_Face_logo.svg' },
    { name: 'Patagonia', url: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Patagonia_%28brand%29_logo.svg' },
    { name: 'Under Armour', url: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Under_armour_logo.svg' },
    { name: 'Wilson', url: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Wilson_brand_logo.svg' },
    { name: 'Rawlings', url: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Rawlings_logo.svg' },
    { name: 'Yeti', url: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/YETI_Coolers_logo.svg' },
  ]

  return (
    <section id="brands" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center" style={{fontFamily:'Montserrat, Inter, system-ui, sans-serif'}}>
          Representing Iconic Performance Brands
        </h2>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center h-16">
              <img
                src={logo.url}
                alt={`${logo.name} logo`}
                className="max-h-10 opacity-80 grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands
