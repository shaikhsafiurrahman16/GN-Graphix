import React from 'react';
import { X, MessageCircle, ZoomIn, Layers, Sparkles } from 'lucide-react';

const LightboxModal = ({ item, onClose }) => {
  if (!item) return null;

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      `Hello GN Graphix! I am interested in the Décor/Showcase item: "${item.title}" (${item.categoryLabel}). Can you provide a quotation for custom sizing?`
    );
    window.open(`https://wa.me/923453624620?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-lg animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-navy-900 border border-gold-500/40 shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-navy-950/80 hover:bg-navy-950 text-white border border-white/10 transition-colors"
          aria-label="Close image preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Visual Frame */}
        <div className="md:w-3/5 relative bg-navy-950 flex items-center justify-center min-h-[280px] md:min-h-[480px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent md:hidden" />
        </div>

        {/* Content Details */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-navy-900">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gold-500/15 text-gold-300 border border-gold-500/30">
                {item.badge}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {item.categoryLabel}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
              {item.title}
            </h3>
            <p className="text-xs font-semibold gold-gradient-text uppercase tracking-wider mb-4">
              {item.subtitle}
            </p>

            <p className="text-slate-300 text-sm leading-relaxed mb-5">
              {item.description}
            </p>

            {/* Specifications */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 mb-6">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                <Layers className="w-3.5 h-3.5 text-gold-400" />
                <span>Substrate & Finishing:</span>
              </div>
              <p className="text-xs text-slate-200">
                {item.specs}
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={handleWhatsAppInquiry}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl gold-btn-gradient text-navy-950 font-bold text-xs shadow-gold-sm hover:shadow-gold-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-navy-950/20" />
              <span>Get Custom Quote on WhatsApp</span>
            </button>

            <a
              href="tel:+923453624620"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-navy-800 text-slate-300 hover:text-white text-xs font-semibold border border-white/10 transition-colors"
            >
              <span>Call For Site Measurement (+92 345 3624620)</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};

export default LightboxModal;
