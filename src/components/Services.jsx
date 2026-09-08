import React, { useState } from 'react';
import { Sparkles, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';
import { servicesData } from '../data/servicesData';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleWhatsAppServiceInquiry = (serviceTitle) => {
    const encodedMsg = encodeURIComponent(
      `Hello GN Graphix! I am interested in getting a quote for your ${serviceTitle} service. Could you please share pricing and turnaround details?`
    );
    window.open(`https://wa.me/923453624620?text=${encodedMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-navy-950/60 overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-navy-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative site-container">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-xs font-semibold gold-gradient-text uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Mastery In Every Print</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Our Core Services
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
            Professional printing solutions designed to make your brand stand out. From large-format flex to luxury laser acrylics, we bring uncompromised precision to every job.
          </p>
        </div>

        {/* Services Grid (2 cols on tablet, 3 cols on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={setSelectedService}
              onWhatsAppClick={handleWhatsAppServiceInquiry}
            />
          ))}
        </div>

        {/* Custom Project Note Banner */}
        <div className="relative rounded-2xl glass-panel-gold p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 glow-gold">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="hidden sm:flex w-12 h-12 rounded-xl bg-gold-500/20 items-center justify-center text-gold-400 border border-gold-500/30 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                Need a Custom or Bulk Commercial Requirement?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                We handle bespoke custom sizes, specialty inks, spot UV, 3D channel letters, and on-site installations across Pakistan.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
            <a
              href="https://wa.me/923453624620?text=Hello%20GN%20Graphix!%20I%20have%20a%20custom%20printing%20requirement%20and%20need%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl gold-btn-gradient text-navy-950 text-xs font-bold shadow-gold-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-navy-950/20" />
              <span>Discuss Custom Order</span>
            </a>
          </div>
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onWhatsAppClick={handleWhatsAppServiceInquiry}
        />
      )}

    </section>
  );
};

export default Services;
