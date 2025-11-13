import { Trophy, Truck, Handshake } from 'lucide-react'

function Highlights() {
  const items = [
    {
      icon: Trophy,
      title: 'Authentic Performance Gear',
      text:
        'We provide our dealers with access to 100% authentic gear sourced through official channels, ensuring full manufacturer warranties and the performance your customers trust.',
    },
    {
      icon: Truck,
      title: 'Streamlined Logistics',
      text:
        'Our Oregon-based warehouse is equipped to handle professional-grade freight, ensuring efficient and reliable order fulfillment for your business.',
    },
    {
      icon: Handshake,
      title: 'Dedicated Support',
      text:
        'We are more than a supplier; we are a partner invested in your success. We provide support with seasonal inventory trends to help your business thrive.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center" style={{fontFamily:'Montserrat, Inter, system-ui, sans-serif'}}>
          Dealer Program Highlights
        </h3>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100">
              <Icon className="h-10 w-10 text-emerald-700" />
              <h4 className="mt-4 text-xl font-bold text-slate-900">{title}</h4>
              <p className="mt-3 text-slate-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights
