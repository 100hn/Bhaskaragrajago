import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import AboutSection from '../AboutSection/AboutSection'
import ProductCategoriesSection from '../ProductSection/ProductCategoriesSection'
import PackagingSection from '../PackagingSection/PackagingSection'
import QualitySection from '../QualitySection/QualitySection'
import WhyChooseUs from '../WhyChooseUsSection/WhyChooseUs'
import ContactUs from '../ContactSection/ContactUs'

function HomePage() {
  return (
    <>
    <HeroSection />
    <AboutSection />
    <ProductCategoriesSection />
    <PackagingSection/>
    <QualitySection />
    <WhyChooseUs />
    <ContactUs />
    </>
  )
}

export default HomePage