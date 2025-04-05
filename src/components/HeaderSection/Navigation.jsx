import React, { useState } from 'react';
import logo from '../HeaderSection/Baa-logo.png';

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#010F11] shadow-lg fixed w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img src={logo} alt="" className='text-2xl font-bold text-[#70BF01] w-40' />
              {/* <span className="text-2xl font-bold text-[#70BF01]">Bhaskar Agraj Agro</span> */}
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="/" className="text-white hover:text-[#70BF01] px-3 py-2 font-medium transition duration-300">Home</a>
              <a href="/about" className="text-white hover:text-[#70BF01] px-3 py-2 font-medium transition duration-300">About</a>
              <a href="/products" className="text-white hover:text-[#70BF01] px-3 py-2 font-medium transition duration-300">Products</a>
              <a href="/quality" className="text-white hover:text-[#70BF01] px-3 py-2 font-medium transition duration-300">Quality</a>
              <a href="/contact" className="text-white hover:text-[#70BF01] px-3 py-2 font-medium transition duration-300">Contact</a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-700">
              <i className="bi bi-list text-3xl"></i>
            </button>
          </div>
        </div>
      </div>
      <div id="mobile-menu" className={`bg-white shadow-inner ${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="/home" className="block text-gray-700 hover:bg-yellow-50 hover:text-[#70BF01] px-3 py-2 rounded-md font-medium">Home</a>
          <a href="/about" className="block text-gray-700 hover:bg-yellow-50 hover:text-[#70BF01] px-3 py-2 rounded-md font-medium">About</a>
          <a href="/products" className="block text-gray-700 hover:bg-yellow-50 hover:text-[#70BF01] px-3 py-2 rounded-md font-medium">Products</a>
          <a href="/quality" className="block text-gray-700 hover:bg-yellow-50 hover:text-[#70BF01] px-3 py-2 rounded-md font-medium">Quality</a>
          <a href="/contact" className="block text-gray-700 hover:bg-yellow-50 hover:text-[#70BF01] px-3 py-2 rounded-md font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
