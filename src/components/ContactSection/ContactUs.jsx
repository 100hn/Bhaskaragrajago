import React from 'react'

function ContactUs() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-[#70BF01] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">We look forward to being your trusted spice supplier! Reach out to us with any questions or inquiries.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <form id="contact-form" className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Send us a Message</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-gray-700 mb-2 font-medium">First Name*</label>
                  <input type="text" id="first-name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-gray-700 mb-2 font-medium">Last Name*</label>
                  <input type="text" id="last-name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent" />
                </div>
              </div>
              <div>
                <label htmlFor="company-name" className="block text-gray-700 mb-2 font-medium">Company Name</label>
                <input type="text" id="company-name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email*</label>
                <input type="email" id="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message*</label>
                <textarea id="message" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent" rows="4"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#70BF01] text-white py-3 px-6 rounded-lg font-medium hover:bg-yellow-700 transition duration-300 flex items-center justify-center">
                <span>Send Message</span>
                <i className="bi bi-send ml-2"></i>
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="bi bi-geo-alt text-[#70BF01] text-xl" aria-label="Location"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Address</h4>
                    <p className="text-gray-600">D – 409 Shayona Sarvopari, Ghatlodia, Ahmedabad, Gujarat, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="bi bi-envelope text-[#70BF01] text-xl" aria-label="Email"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Email</h4>
                    <p className="text-gray-600">info@bhaskaragrajagro.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="bi bi-globe text-[#70BF01] text-xl" aria-label="Website"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Website</h4>
                    <p className="text-gray-600">www.bhaskaragrajagro.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-sm">
              <iframe
                title="Company Location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0450750627384!2d72.5267339!3d23.064111399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b267ef7e2a1%3A0x84b081be7c4c9dcb!2sShayona%20Sarvopari!5e0!3m2!1sen!2sin!4v1652345678901!5m2!1sen!2sin"
                width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
