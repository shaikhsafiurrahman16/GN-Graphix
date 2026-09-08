import React, { useState } from 'react';
import { Sparkles, Eye, ArrowUpRight, Check, Image as ImageIcon, Layers } from 'lucide-react';
import { decorCategories, decorItems } from '../data/decorData';
import LightboxModal from './LightboxModal';

const DecorShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? decorItems
    : decorItems.filter(item => item.category === activeCategory);

  return (
    <section id="decor" className="relative py-24 sm:py-32 bg-navy-900/40 overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-navy-700/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative site-container">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-xs font-semibold gold-gradient-text uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Finished Projects Gallery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            3D Wallpapers, Panaflex & Décor Showcase
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
            Explore authentic projects delivered by <strong className="text-white">GN Graphix</strong> — from bespoke 3D interior wallpapers and giant outdoor Panaflex banners to 3D illuminated shop signage across Hyderabad and Pakistan.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {decorCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'gold-btn-gradient text-navy-950 shadow-gold-sm scale-105'
                    : 'bg-navy-900/80 text-slate-300 hover:text-white hover:bg-navy-800 border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Showcase Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-3xl overflow-hidden glass-card cursor-pointer border border-white/10 hover:border-gold-500/40 hover:-translate-y-2 transition-all duration-500 shadow-xl"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-navy-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Dark Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300" />

                {/* Category Badge Top Left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-navy-950/85 text-gold-300 border border-gold-500/30 backdrop-blur-md">
                    {item.badge}
                  </span>
                </div>

                {/* Quick Expand Icon Top Right */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-navy-950/80 text-slate-300 group-hover:text-gold-400 group-hover:bg-navy-900 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Content Overlay Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col justify-end">
                  <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider mb-1">
                    {item.categoryLabel}
                  </span>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-gold-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2 mb-3">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-gold-300 group-hover:translate-x-1 transition-transform">
                    <span>Inspect Specs & Order</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Full Inspection Modal */}
      {selectedItem && (
        <LightboxModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}

    </section>
  );
};

export default DecorShowcase;
