import Header from '../components/Header'
import Footer from '../components/Footer'

function DealerApplication() {
  return (
    <div className="font-sans text-slate-800" style={{fontFamily:'Inter, system-ui, sans-serif'}}>
      <Header />
      <main className="pt-20 pb-24 bg-gray-50">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900" style={{fontFamily:'Montserrat, Inter, system-ui, sans-serif'}}>
              Dealer Application
            </h1>
            <p className="mt-3 text-slate-600 max-w-3xl">
              Complete the form below to apply for a wholesale dealer account. We’ll review your information and follow up with next steps.
            </p>
          </div>

          <form className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 grid grid-cols-1 gap-6">
            {/* Company Information */}
            <div>
              <h2 className="text-xl font-bold text-slate-900">Company Information</h2>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Legal Business Name</label>
                  <input className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-600 focus:border-emerald-600" placeholder="e.g., Summit Sports LLC" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">DBA (if applicable)</label>
                  <input className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-600 focus:border-emerald-600" placeholder="Doing Business As" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Website</label>
                  <input type="url" className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-600 focus:border-emerald-600" placeholder="https://" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Business Type</label>
                  <select className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-600 focus:border-emerald-600">
                    <option>Independent Sporting Goods Store</option>
                    <option>Team Outfitter</option>
                    <option>Specialty Shop (Ski/Run/Bike)</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Business Address */}
            <div>
              <h2 className="text-xl font-bold text-slate-900">Business Address</h2>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Street Address</label>
                  <input className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-600 focus:border-emerald-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Suite/Unit</label>
                  <input className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-600 focus:border-emerald-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">City</label>
                  <input className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-600 focus:border-emerald-600" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">State</label>
                    <input className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-600 focus:border-emerald-600" placeholder="OR" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">ZIP Code</label>
                    <input className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-600 focus:border-emerald-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-bold text-slate-900">Contact Information</h2>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Primary Contact Name</label>
                  <input className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-600 focus:border-emerald-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Title/Role</label>
                  <input className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-600 focus:border-emerald-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-600 focus:border-emerald-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Phone</label>
                  <input type="tel" className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-600 focus:border-emerald-600" />
                </div>
              </div>
            </div>

            {/* Tax/Licensing Information */}
            <div>
              <h2 className="text-xl font-bold text-slate-900">Tax/Licensing Information</h2>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Federal EIN</label>
                  <input className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-600 focus:border-emerald-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Resale Certificate Number</label>
                  <input className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-600 focus:border-emerald-600" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">Additional Notes</label>
                  <textarea rows={4} className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-600 focus:border-emerald-600" placeholder="Tell us about your business, brands you carry, and seasonal needs." />
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <p className="text-sm text-slate-500">By submitting, you agree that the information provided is accurate and may be used to evaluate your eligibility.</p>
              <button type="submit" className="inline-flex items-center rounded-md bg-lime-500 hover:bg-lime-600 text-white font-semibold px-6 py-3 shadow-lg transition-colors">Submit Application</button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default DealerApplication
