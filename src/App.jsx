import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navigation from './components/HeaderSection/Navigation';
import Footer from './components/FooterSection/Footer';
import BackToTopButton from './components/FunctionSection/BackToTopButton';
import HomePage from './components/HomePageSection/HomePage';
import AboutSection from './components/AboutSection/AboutSection';
import ContactUs from './components/ContactSection/ContactUs';
import ProductCategoriesSection from './components/ProductSection/ProductCategoriesSection';
import QualitySection from './components/QualitySection/QualitySection';
import ProductDetails from './components/ProductSection/ProductDetails';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/about" element={<AboutSection />} /> 
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/products" element={<ProductCategoriesSection />} />
          <Route path="/products/:productName" element={<ProductDetails />} />
          <Route path="/quality" element={<QualitySection />} />
        </Routes>
        <Footer />
        <BackToTopButton />
      </BrowserRouter>
    </>
  );
}

export default App;
