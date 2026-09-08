import React from 'react';
import { 
  Printer, 
  Layers, 
  Store, 
  Image as ImageIcon, 
  PanelsTopLeft, 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  MessageCircle 
} from 'lucide-react';

const iconMap = {
  Printer: Printer,
  Sparkles: Sparkles,
  Layers: Layers,
  Store: Store,
  Image: ImageIcon,
  PanelsTopLeft: PanelsTopLeft
};

const ServiceCard = ({ service, onSelectService, onWhatsAppClick }) => {
  const IconComponent = iconMap[service.icon] || Sparkles;

  return (
    <div className="group relative rounded-2xl glass-card p-6 sm:p-7 flex flex-col justify-between hover:border-gold-500/40 hover:-translate-y-2 transition-all duration-300">
      
      {/* Subtle Top Accent Line on Hover */}
      <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Header: Icon + Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-navy-900 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 group-hover:shadow-gold-sm transition-all duration-300">
            <IconComponent className="w-6 h-6" />
          </div>

          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-white/5 text-slate-300 border border-white/10 group-hover:border-gold-500/30 group-hover:text-gold-300 transition-colors">
            {service.tag}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gold-300 transition-colors">
          {service.title}
        </h3>
        <p className="text-xs font-semibold text-gold-400/90 uppercase tracking-wider mb-3">
          {service.tagline}
        </p>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-5 line-clamp-3">
          {service.shortDesc}
        </p>

        {/* Feature Highlights */}
        <ul className="space-y-2 mb-6">
          {service.features.slice(0, 2).map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Actions Footer */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
        <button
          onClick={() => onSelectService(service)}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-200 hover:text-gold-300 transition-colors group/btn"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 text-gold-400 group-hover/btn:translate-x-1 transition-transform" />
        </button>

        <button
          onClick={() => onWhatsAppClick(service.title)}
          className="p-2 rounded-lg bg-white/5 hover:bg-gold-500 hover:text-navy-950 text-gold-400 border border-gold-500/20 transition-all duration-200"
          title={`Inquire about ${service.title} on WhatsApp`}
          aria-label={`Inquire about ${service.title}`}
        >
          <MessageCircle className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};

export default ServiceCard;
