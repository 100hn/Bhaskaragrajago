import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 py-16">
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-6">Bhaskar Agraj Agro</h3>
            <p className="text-gray-400 mb-6">Premium Indian spices exporter, dedicated to quality, authenticity, and customer satisfaction.</p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#70BF01] transition duration-300">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#70BF01] transition duration-300">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#70BF01] transition duration-300">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#70BF01] transition duration-300">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              <li><Link to="/products#whole-spices" className="text-gray-400 hover:text-white transition">Whole Spices</Link></li>
              <li><Link to="/products#ground-spices" className="text-gray-400 hover:text-white transition">Ground Spices</Link></li>
              <li><Link to="/products#dried-fruits" className="text-gray-400 hover:text-white transition">Dried Fruits</Link></li>
              <li><Link to="/products#rice" className="text-gray-400 hover:text-white transition">Rice</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition">Products</Link></li>
              <li><Link to="/quality" className="text-gray-400 hover:text-white transition">Quality</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <i className="bi bi-geo-alt text-[#70BF01]"></i>
                <span className="text-gray-400">D – 409 Shayona Sarvopari, Ghatlodia, Ahmedabad, Gujarat, India</span>
              </li>
              <li className="flex gap-3">
                <i className="bi bi-envelope text-[#70BF01]"></i>
                <span className="text-gray-400">info@bhaskaragrajagro.com</span>
              </li>
              <li className="flex gap-3">
                <i className="bi bi-globe text-[#70BF01]"></i>
                <span className="text-gray-400">www.bhaskaragrajagro.com</span>
              </li>
              <li className="flex gap-3">
                <i className="bi bi-telephone text-[#70BF01]"></i>
                <span className="text-gray-400">+91 9998862147</span> 
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; 2023 Bhaskar Agraj Agro Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;