import React from 'react'

function HeroSection() {
  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center justify-center text-white">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Premium Indian Spices for Global Markets</h1>
        <p className="text-xl md:text-2xl mb-10">Harvesting trust through quality and authenticity since 2025</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/products" className="bg-[#70BF01] text-white px-8 py-3 rounded-full hover:bg-yellow-700 transition duration-300 font-medium">
            Explore Products
          </a>
          <a href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#70BF01] transition duration-300 font-medium">
            Contact Us
          </a>
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/FSSAI_logo.svg/1200px-FSSAI_logo.svg.png" alt="FSSAI Certified" className="h-12 mx-auto" />
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/USDA_organic_seal.svg/1024px-USDA_organic_seal.svg.png" alt="USDA Organic" className="h-12 mx-auto" />
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg">
            <img src="https://www.iso.org/files/live/sites/isoorg/files/about%20ISO/iso-logo.svg" alt="ISO Certified" className="h-12 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection