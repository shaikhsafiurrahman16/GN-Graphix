import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import DecorShowcase from './components/DecorShowcase';
import VideoShowcase from './components/VideoShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import InteractiveEstimator from './components/InteractiveEstimator';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'decor', 'production-reel', 'why-us', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col relative selection:bg-gold-500 selection:text-navy-950">
      
      {/* Top Fixed Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Single Page Content */}
      <main className="flex-1">
        {/* Hero Section with Gn1.mp4 Background Video */}
        <Hero onGetQuoteClick={handleScrollToContact} />

        {/* Core Services Section */}
        <Services />

        {/* Wallpapers, Panaflex & Décor Gallery Section */}
        <DecorShowcase />

        {/* Live Production & Machinery Video Reel Section */}
        <VideoShowcase />

        {/* Why Choose GN? Section */}
        <WhyChooseUs />

        {/* How It Works (Process) Section */}
        <Process />

        {/* Interactive Quote Configurator Section */}
        <InteractiveEstimator onApplyToContactForm={handleScrollToContact} />

        {/* Call To Action Banner */}
        <CTA onGetQuoteClick={handleScrollToContact} />

        {/* Contact Us Section with Shop Address & Interactive Google Maps */}
        <Contact />
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

    </div>
  );
}

export default App;
