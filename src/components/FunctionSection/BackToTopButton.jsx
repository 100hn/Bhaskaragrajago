// BackToTopButton.js
import React, { useState, useEffect } from 'react';

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a
      href="#"
      id="back-to-top"
      className={`fixed bottom-6 right-6 bg-[#70BF01] text-white h-12 w-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50 ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      onClick={scrollToTop}
    >
      <i className="bi bi-arrow-up text-xl"></i>
    </a>
  );
}

export default BackToTopButton;
