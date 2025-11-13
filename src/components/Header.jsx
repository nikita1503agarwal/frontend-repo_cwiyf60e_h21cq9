import { Link, NavLink, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()
  const isApplication = location.pathname === '/dealer-application'

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="font-extrabold tracking-tight text-xl sm:text-2xl" style={{fontFamily:'Montserrat, Inter, system-ui, sans-serif'}}>
            <span className="text-slate-900">Northwest </span>
            <span className="text-emerald-800">Sporting Goods</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {!isApplication && (
              <>
                <a href="#brands" className="text-slate-700 hover:text-slate-900 font-medium">Brands</a>
                <a href="#about" className="text-slate-700 hover:text-slate-900 font-medium">About Us</a>
                <a href="#contact" className="text-slate-700 hover:text-slate-900 font-medium">Contact</a>
              </>
            )}
            <Link
              to="/dealer-application"
              className="inline-flex items-center rounded-md bg-lime-500 hover:bg-lime-600 text-white font-semibold px-4 py-2 shadow-sm transition-colors"
            >
              Become a Dealer
            </Link>
          </nav>

          {/* Mobile menu (anchors hidden on application page) */}
          <div className="md:hidden flex items-center gap-3">
            {!isApplication && (
              <>
                <a href="#brands" className="text-slate-700 hover:text-slate-900 font-medium">Brands</a>
                <a href="#about" className="text-slate-700 hover:text-slate-900 font-medium">About</a>
              </>
            )}
            <Link
              to="/dealer-application"
              className="inline-flex items-center rounded-md bg-lime-500 hover:bg-lime-600 text-white font-semibold px-3 py-2 shadow-sm transition-colors"
            >
              Dealer
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
