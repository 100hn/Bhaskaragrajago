import React from 'react'

import image_about from '../AboutSection/leaves-turmeric-powder.jpeg'

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <div className="w-24 h-1 bg-[#70BF01] mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Harvesting Trust Since 2025</h3>
            <p className="text-gray-600 mb-6 text-lg">
              We are a new and dynamic spice export startup from India, committed to delivering high-quality and authentic Indian spices to global markets. Our mission is to establish strong business relationships by ensuring premium quality, competitive pricing, and timely delivery.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              At Bhaskar Agraj Agro we believe in harvesting trust and are committed to high quality delivery. Our team works day in and out to ensure high quality products are delivered on time following stringent quality checks that ensure happy and satisfied customers.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-yellow-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <i className="bi bi-award text-4xl text-[#70BF01] mb-4"></i>
                <h3 className="font-bold text-xl text-gray-800">Premium Quality</h3>
                <p className="text-gray-600 mt-2">Direct from farms</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <i className="bi bi-globe text-4xl text-[#70BF01] mb-4"></i>
                <h3 className="font-bold text-xl text-gray-800">Global Exports</h3>
                <p className="text-gray-600 mt-2">Worldwide shipping</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img src={image_about} alt="About Bhaskar Agraj Agro" className="rounded-lg shadow-xl w-full object-cover h-[500px]" />
              <div className="absolute -bottom-6 -right-6 bg-[#70BF01] text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-3xl font-bold">2025</p>
                <p>Established</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection