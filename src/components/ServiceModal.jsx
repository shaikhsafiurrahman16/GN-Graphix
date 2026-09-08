import React from 'react';
import { X, CheckCircle2, Clock, Layers, MessageCircle, Phone, ArrowRight } from 'lucide-react';

const ServiceModal = ({ service, onClose, onWhatsAppClick }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-2xl rounded-3xl bg-navy-900/95 border border-gold-500/40 shadow-2xl p-6 sm:p-8 backdrop-blur-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-500/20 text-gold-300 border border-gold-500/30">
            {service.tag}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
            <Clock className="w-3.5 h-3.5 text-gold-400" />
            <span>Turnaround: {service.turnaround}</span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
          {service.title}
        </h2>
        <p className="text-sm font-semibold gold-gradient-text uppercase tracking-wider mb-4">
          {service.tagline}
        </p>

        {/* Image Preview */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-6 border border-white/10">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
        </div>

        {/* Detailed Description */}
        <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
          {service.fullDesc}
        </p>

        {/* Features List */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gold-300 mb-3 flex items-center gap-1.5">
            <Layers className="w-4 h-4" />
            <span>Key Specifications & Materials</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ideal Applications */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
            Ideal For Commercial & Retail Applications:
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.idealFor.map((item, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-navy-800 text-slate-300 text-xs font-medium border border-white/10">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Modal CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-5 border-t border-white/10">
          <button
            onClick={() => {
              onWhatsAppClick(service.title);
              onClose();
            }}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl gold-btn-gradient text-navy-950 font-bold text-sm shadow-gold-sm hover:shadow-gold-md transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-navy-950/20" />
            <span>Inquire on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="tel:+923453624620"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-navy-800 hover:bg-navy-750 text-white font-semibold text-sm border border-white/15 transition-all"
          >
            <Phone className="w-4 h-4 text-gold-400" />
            <span>Call Now</span>
          </a>
        </div>

      </div>

    </div>
  );
};

export default ServiceModal;
