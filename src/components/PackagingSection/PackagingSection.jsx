import React from 'react'

function PackagingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Packaging Options</h2>
          <div className="w-24 h-1 bg-[#70BF01] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">We offer flexible packaging options to meet your specific requirements.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-yellow-50 rounded-lg p-8 text-center shadow-sm hover:shadow-md transition duration-300">
            <div className="h-20 w-20 bg-[#70BF01] rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="bi bi-box-seam text-white text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Retail Packaging</h3>
            <p className="text-gray-600 mb-4">Perfect for retail distribution</p>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>100g</li>
              <li>200g</li>
              <li>500g</li>
              <li>1kg</li>
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-lg p-8 text-center shadow-sm hover:shadow-md transition duration-300">
            <div className="h-20 w-20 bg-[#70BF01] rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="bi bi-truck text-white text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Bulk Packaging</h3>
            <p className="text-gray-600 mb-4">Ideal for commercial use</p>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>5kg</li>
              <li>10kg</li>
              <li>25kg</li>
              <li>50kg</li>
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-lg p-8 text-center shadow-sm hover:shadow-md transition duration-300">
            <div className="h-20 w-20 bg-[#70BF01] rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="bi bi-gear text-white text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Custom Packaging</h3>
            <p className="text-gray-600 mb-4">Tailored to your specifications</p>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>Private labeling</li>
              <li>Custom weights</li>
              <li>Branded packaging</li>
              <li>Special requirements</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PackagingSection