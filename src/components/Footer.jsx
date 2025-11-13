import { Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer id="contact" className="bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <h4 className="text-xl font-extrabold" style={{fontFamily:'Montserrat, Inter, system-ui, sans-serif'}}>Northwest Sporting Goods</h4>
          <p className="mt-3 text-emerald-100">A registered trade name of Aman Ecom LLC.</p>
        </div>

        <div className="text-center">
          <h5 className="text-lg font-bold">Get In Touch</h5>
          <div className="mt-4 space-y-3 inline-block text-left">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-emerald-300" />
              <a href="mailto:accounts@northwestsporting.com" className="hover:underline">accounts@northwestsporting.com</a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-emerald-300" />
              <a href="tel:15551234567" className="hover:underline">(555) 123-4567</a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-emerald-300" />
              <span>[Your Oregon Warehouse Address]</span>
            </div>
          </div>
        </div>

        <div className="md:text-right">
          <h5 className="text-lg font-bold">Dealer Inquiries</h5>
          <p className="mt-3 text-emerald-100">Ready to partner with a modern B2B distributor?</p>
          <Link
            to="/dealer-application"
            className="inline-flex items-center rounded-md bg-lime-500 hover:bg-lime-600 text-white font-semibold px-5 py-2.5 mt-4 shadow-lg transition-colors"
          >
            Become a Dealer
          </Link>
        </div>
      </div>
      <div className="border-t border-emerald-800 py-4 text-center text-emerald-200 text-sm">© {new Date().getFullYear()} Northwest Sporting Goods</div>
    </footer>
  )
}

export default Footer
