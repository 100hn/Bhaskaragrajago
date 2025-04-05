import React from 'react'

function QualitySection() {
  return (
    <section id="quality" className="spice-bg py-20 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Quality Assurance</h2>
          <div className="w-24 h-1 bg-[#70BF01] mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-black bg-opacity-50 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Quality is Our Priority</h3>
            <p className="mb-6">
              At Bhaskar Agraj Agro, we implement strict quality control measures throughout our supply chain to ensure that only the finest spices reach our customers.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="bi bi-check-circle-fill text-[#70BF01] text-xl mt-1"></i>
                <span>Stringent quality control measures from sourcing to packaging</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="bi bi-check-circle-fill text-[#70BF01] text-xl mt-1"></i>
                <span>Laboratory testing for purity, authenticity, and contamination</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="bi bi-check-circle-fill text-[#70BF01] text-xl mt-1"></i>
                <span>Hygienic processing with modern equipment</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="bi bi-check-circle-fill text-[#70BF01] text-xl mt-1"></i>
                <span>Compliance with international food safety standards</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="bi bi-check-circle-fill text-[#70BF01] text-xl mt-1"></i>
                <span>Traceability through the supply chain</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-black bg-opacity-50 backdrop-blur-sm p-6 rounded-lg text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/FSSAI_logo.svg/1200px-FSSAI_logo.svg.png" alt="FSSAI Certified" className="h-16 mx-auto mb-4" />
              <h4 className="font-bold">FSSAI Certified</h4>
              <p className="text-sm mt-2">Food Safety Standards Authority of India</p>
            </div>

            <div className="bg-black bg-opacity-50 backdrop-blur-sm p-6 rounded-lg text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/USDA_organic_seal.svg/1024px-USDA_organic_seal.svg.png" alt="USDA Organic" className="h-16 mx-auto mb-4" />
              <h4 className="font-bold">USDA Organic</h4>
              <p className="text-sm mt-2">United States Department of Agriculture</p>
            </div>

            <div className="bg-black bg-opacity-50 backdrop-blur-sm p-6 rounded-lg text-center">
              <img src="https://www.iso.org/files/live/sites/isoorg/files/about%20ISO/iso-logo.svg" alt="ISO Certified" className="h-16 mx-auto mb-4" />
              <h4 className="font-bold">ISO Certified</h4>
              <p className="text-sm mt-2">International Organization for Standardization</p>
            </div>

            <div className="bg-black bg-opacity-50 backdrop-blur-sm p-6 rounded-lg text-center">
              <i className="bi bi-award-fill text-[#70BF01] text-5xl mb-4"></i>
              <h4 className="font-bold">Quality Guarantee</h4>
              <p className="text-sm mt-2">100% satisfaction guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QualitySection