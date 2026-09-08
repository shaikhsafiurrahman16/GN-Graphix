import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Sparkles, ArrowRight, MapPin } from 'lucide-react';

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Wallpapers & Decor', href: '#decor' },
    { name: 'Production Reel', href: '#production-reel' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navOffset = 85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/90 backdrop-blur-xl border-b border-gold-500/20 shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-navy-950/95 via-navy-950/70 to-transparent backdrop-blur-md py-4'
      }`}
    >
      <div className="site-container">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Mark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-lg p-1"
          >
            {/* Custom Luxury Crest */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 p-[1.5px] shadow-lg shadow-gold-500/10 group-hover:shadow-gold-500/30 transition-all duration-300">
              <div className="w-full h-full rounded-[10px] bg-navy-900 flex items-center justify-center border border-gold-500/30 group-hover:border-gold-400/60 transition-colors">
                <span className="font-display font-black text-lg sm:text-xl gold-gradient-text tracking-tighter">
                  GN
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-gold-500 flex items-center justify-center text-[8px] text-navy-950 font-bold">
                ★
              </div>
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-lg sm:text-xl tracking-tight text-white group-hover:text-gold-300 transition-colors">
                  GN GRAPHIX
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-gold-500/15 text-gold-300 border border-gold-500/30">
                  Hyderabad
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium tracking-wide uppercase">
                Panaflex & Printing Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-navy-900/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/10 font-semibold shadow-sm'
                      : 'text-slate-300 hover:text-gold-300 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-gold-400 to-amber-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: WhatsApp & Phone */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href="tel:03453624620"
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
              title="Call GN Graphix Hyderabad"
            >
              <div className="w-7 h-7 rounded-lg bg-slate-800/80 flex items-center justify-center text-gold-400 border border-gold-500/20">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>0345-3624620</span>
            </a>

            <a
              href="https://wa.me/923453624620"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold gold-btn-gradient shadow-gold-sm hover:shadow-gold-md active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-navy-950 fill-navy-950/20" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="https://wa.me/923453624620"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gold-500/20 text-gold-400 border border-gold-500/30"
              aria-label="WhatsApp Contact"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-navy-850 text-slate-300 hover:text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-gold-400"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen
            ? 'max-h-[32rem] opacity-100 border-b border-gold-500/20 bg-navy-950/95 backdrop-blur-2xl'
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-5 py-6 space-y-2.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-gold-500/15 text-gold-300 border border-gold-500/30 font-semibold'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                {isActive && <Sparkles className="w-4 h-4 text-gold-400" />}
              </a>
            );
          })}

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <div className="px-4 py-2 rounded-xl bg-navy-900/60 border border-white/5 text-xs text-slate-300 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>Khokhar Mohalla, Hyderabad</span>
            </div>

            <a
              href="tel:03453624620"
              className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-navy-900 border border-white/10 text-slate-200 text-sm font-semibold hover:border-gold-500/30 transition-all"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Call: 0345-3624620</span>
            </a>

            <a
              href="https://wa.me/923453624620"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl gold-btn-gradient text-navy-950 font-bold text-sm shadow-gold-sm active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-navy-950/20" />
              <span>Connect on WhatsApp</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
