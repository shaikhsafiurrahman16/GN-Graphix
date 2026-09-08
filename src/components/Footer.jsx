import React from 'react';
import { Phone, MessageCircle, ArrowUp, Sparkles, ExternalLink, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mapUrl = "https://maps.google.com/maps?q=25.387311935424805%2C68.36736297607422&z=17&hl=en";

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Wallpapers & Decor', href: '#decor' },
    { name: 'Production Reel', href: '#production-reel' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const pos = target.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-navy-950 border-t border-gold-500/20 pt-16 pb-12 overflow-hidden">

      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative site-container">

        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">

          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">

            {/* Logo Brand */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 p-[1px] shadow-gold-sm border border-gold-500/40 flex items-center justify-center">
                <span className="font-display font-black text-xl gold-gradient-text">
                  GN
                </span>
              </div>
              <div>
                <h3 className="font-display font-black text-xl text-white tracking-tight">
                  GN GRAPHIX
                </h3>
                <p className="text-xs text-gold-300 font-semibold uppercase tracking-wider">
                  GN PENAFLEX • PRINTING SOLUTIONS
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              "Quality Printing. Every Time." Large-format Panaflex printing, custom 3D wallpapers, acrylic 3D LED signboards, digital offset printing, and complete business branding in Hyderabad.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/923453624620"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500 hover:text-navy-950 text-emerald-400 border border-emerald-500/30 transition-all"
                title="Connect on WhatsApp"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="tel:03453624620"
                className="p-2.5 rounded-xl bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-gold-400 border border-gold-500/30 transition-all"
                title="Call Directly"
                aria-label="Phone Hotline"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-gold-400 border border-gold-500/30 transition-all"
                title="Open Location in Google Maps"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-300">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-slate-300 hover:text-gold-300 transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct Col */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-300">
              Shop Address & Direct Contacts
            </h4>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block font-semibold">Shop Location:</span>
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 hover:text-gold-300 transition-colors inline-flex items-center gap-1"
                  >
                    <span>Opposite Muhabbat Shah Bukhari Dargah, Khokhar Mohalla, Hyderabad.</span>
                    <ExternalLink className="w-3 h-3 text-gold-400 shrink-0" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block font-semibold">Phone Numbers:</span>
                  <div className="flex flex-wrap items-center gap-2">
                    <a href="tel:03453624620" className="font-bold text-white hover:text-gold-300 transition-colors">
                      0345-3624620
                    </a>
                    <span className="text-slate-500">•</span>
                    <a href="tel:03161307588" className="text-slate-200 hover:text-gold-300 transition-colors">
                      0316-1307588
                    </a>
                    <span className="text-slate-500">•</span>
                    <a href="tel:03322418944" className="text-slate-200 hover:text-gold-300 transition-colors">
                      0332-2418944
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Creator Attribution, and Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">

          <div>
            <p>© 2026 GN Graphix & GN Printing Solutions. All rights reserved.</p>
          </div>

          {/* Creator Attribution Link */}
          <div className="flex items-center gap-1.5">
            <span>Developed by</span>
            <a
              href="https://portfolio-rouge-sigma-59.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-gold-300 hover:text-gold-200 underline decoration-gold-500/40 hover:decoration-gold-300 transition-all inline-flex items-center gap-1"
            >
              <span>Safi ur rahman</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Scroll To Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-300 hover:text-gold-300 transition-colors p-2 rounded-lg bg-navy-900 border border-white/10 hover:border-gold-500/30"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
