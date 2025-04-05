import React from 'react'

function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-[#70BF01] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">Partner with Bhaskar Agraj Agro for a reliable supply chain of premium Indian spices.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition duration-300">
            <div className="h-16 w-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="bi bi-award text-[#70BF01] text-2xl"></i>
            </div>
            <h3 className="font-semibold text-lg mb-3">Premium Quality</h3>
            <p className="text-gray-600">Finest quality spices sourced directly from farms</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition duration-300">
            <div className="h-16 w-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="bi bi-currency-dollar text-[#70BF01] text-2xl"></i>
            </div>
            <h3 className="font-semibold text-lg mb-3">Competitive Pricing</h3>
            <p className="text-gray-600">Best value for premium quality products</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition duration-300">
            <div className="h-16 w-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="bi bi-clock text-[#70BF01] text-2xl"></i>
            </div>
            <h3 className="font-semibold text-lg mb-3">Timely Delivery</h3>
            <p className="text-gray-600">Reliable and prompt shipping worldwide</p> {/* Fixed the incomplete text-gray-6 class */}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition duration-300">
            <div className="h-16 w-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="bi bi-gear text-[#70BF01] text-2xl"></i>
            </div>
            <h3 className="font-semibold text-lg mb-3">Customized Solutions</h3>
            <p className="text-gray-600">Tailored products and packaging to meet your needs</p>
          </div>
        </div>

        <div className="mt-16 bg-[#70BF01] rounded-lg shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Ready to Place an Order?</h3>
              <p className="text-yellow-100">Contact us today to discuss your requirements and get a quote.</p>
            </div>
            <a href="/contact" className="bg-white text-[#70BF01] px-8 py-3 rounded-full font-medium hover:bg-yellow-50 transition duration-300">
              Contact Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
