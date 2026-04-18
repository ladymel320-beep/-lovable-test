import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Biography from '../components/Biography';
import FAQ from '../components/FAQ';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <Features />
      <Biography />
      <FAQ />
      <Pricing />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
