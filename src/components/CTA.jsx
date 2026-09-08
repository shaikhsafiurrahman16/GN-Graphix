import React from 'react';
import { MessageCircle, Phone, ArrowRight, Sparkles } from 'lucide-react';

const CTA = ({ onGetQuoteClick }) => {
  const scrollToContact = () => {
    if (onGetQuoteClick) {
      onGetQuoteClick();
    } else {
      const el = document.querySelector('#contact');
      if (el) {
        const navOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative py-20 bg-navy-950 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-gold-500/10 via-amber-600/5 to-navy-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative site-container">
        
        {/* Glass Container */}
        <div className="relative rounded-3xl glass-panel-gold p-8 sm:p-12 lg:p-16 border border-gold-500/40 shadow-2xl overflow-hidden text-center glow-gold">
          
          {/* Subtle gold watermark sparkle */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-400/10 rounded-full blur-2xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/90 border border-gold-500/30 text-xs font-bold gold-gradient-text uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Elevate Your Brand Presence</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto mb-4">
            Ready to Bring Your Ideas to Life?
          </h2>

          {/* Subtext */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Let’s create professional printing and branding solutions that make your business stand out. Uncompromising quality with competitive pricing on every project.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl gold-btn-gradient text-navy-950 font-bold text-base shadow-gold-md hover:shadow-gold-lg active:scale-95 transition-all"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="https://wa.me/923453624620"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-navy-900/90 text-white font-semibold text-base border border-gold-500/30 hover:border-gold-400 hover:bg-navy-850 shadow-lg active:scale-95 transition-all"
            >
              <MessageCircle className="w-5 h-5 text-gold-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Quick Direct Call Link */}
          <div className="mt-8 text-xs sm:text-sm text-slate-400 flex items-center justify-center gap-2">
            <span>Prefer a direct phone conversation?</span>
            <a
              href="tel:+923453624620"
              className="text-gold-300 font-bold hover:underline flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+92 345 3624620</span>
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;
