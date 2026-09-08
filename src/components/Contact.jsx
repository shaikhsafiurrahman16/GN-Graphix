import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Sparkles, Copy, Check, Building2, ExternalLink, Navigation } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText('0345-3624620');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mapUrl = "https://maps.google.com/maps?q=25.387311935424805%2C68.36736297607422&z=17&hl=en";
  const embedMapUrl = "https://maps.google.com/maps?q=25.387311935424805,68.36736297607422&hl=en&z=17&output=embed";

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-navy-950 overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-navy-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative site-container">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-xs font-semibold gold-gradient-text uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Direct Inquiries & Shop Location</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Visit Our Hyderabad Workshop or Order Online
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
            Have a Panaflex banner, custom 3D wallpaper, shop signboard, or printing order? Reach out to GN Graphix directly or visit our shop in Hyderabad.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="mb-16">
          <div className="lg:col-span-12 space-y-6">
            
            {/* Primary Business Card */}
            <div className="rounded-3xl glass-panel-gold p-6 sm:p-8 border border-gold-500/30 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center text-gold-400 border border-gold-500/30">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    GN PRINTING SOLUTIONS
                  </h3>
                  <p className="text-xs text-gold-300 font-semibold uppercase tracking-wider">
                    GN GRAPHIX • PENA FLEX
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Your premier production hub for large-format Panaflex printing, custom 3D wallpapers, 3D acrylic LED signboards, and digital offset printing in Hyderabad with nationwide delivery.
              </p>

              {/* Quick Actions Bar */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                <a
                  href="tel:03453624620"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-navy-900 hover:bg-navy-850 text-white text-xs font-bold border border-white/10 hover:border-gold-500/30 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span>Call 0345-3624620</span>
                </a>

                <a
                  href="https://wa.me/923453624620"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl gold-btn-gradient text-navy-950 text-xs font-bold shadow-gold-sm transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-navy-950/20" />
                  <span>WhatsApp Live</span>
                </a>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5">
              
              {/* Phone & Copy Card */}
              <div className="rounded-2xl glass-card p-4 sm:p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-navy-900 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Primary Phone & WhatsApp</span>
                    <a href="tel:03453624620" className="block text-sm sm:text-base font-bold text-white hover:text-gold-300 transition-colors">
                      0345-3624620
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyNumber}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  title="Copy Phone Number"
                  aria-label="Copy Phone Number"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Additional Phone Numbers */}
              <div className="rounded-2xl glass-card p-4 sm:p-5 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-navy-900 border border-white/10 flex items-center justify-center text-gold-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Additional Hotlines</span>
                  <div className="flex flex-wrap items-center gap-x-3 text-xs sm:text-sm font-semibold text-white">
                    <a href="tel:03161307588" className="hover:text-gold-300 transition-colors">0316-1307588</a>
                    <span className="text-slate-500">•</span>
                    <a href="tel:03322418944" className="hover:text-gold-300 transition-colors">0332-2418944</a>
                  </div>
                </div>
              </div>

              {/* Shop Physical Address */}
              <div className="rounded-2xl glass-card p-4 sm:p-5 flex items-start gap-3.5 border border-gold-500/20">
                <div className="w-11 h-11 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400">Shop Address</span>
                  <p className="text-xs sm:text-sm font-bold text-white leading-snug mt-0.5">
                    Opposite Muhabbat Shah Bukhari Dargah, Khokhar Mohalla, Hyderabad.
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Direct pickup available + Nationwide cargo delivery across Pakistan.
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="rounded-2xl glass-card p-4 sm:p-5 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-navy-900 border border-white/10 flex items-center justify-center text-gold-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Shop & Production Hours</span>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    Monday – Saturday: 9:00 AM – 10:00 PM <br />
                    <span className="text-xs text-gold-300 font-normal">WhatsApp 24/7 for urgent orders</span>
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* FULL WIDTH GOOGLE MAP EMBED & SHOP LOCATION CARD */}
        <div className="rounded-3xl glass-card p-6 sm:p-8 border border-gold-500/40 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-400 mb-1">
                <MapPin className="w-4 h-4" />
                <span>Google Maps Location Pin</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                GN Graphix Shop Location
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Opposite Muhabbat Shah Bukhari Dargah, Khokhar Mohalla, Hyderabad.
              </p>
            </div>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl gold-btn-gradient text-navy-950 font-bold text-xs shadow-gold-sm hover:shadow-gold-md active:scale-95 transition-all shrink-0"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions / Open Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>

          {/* Map Frame */}
          <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/10 bg-navy-900 shadow-inner">
            <iframe
              title="GN Graphix Hyderabad Location Map"
              src={embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter contrast-[1.05] brightness-[0.95]"
            />
          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;
