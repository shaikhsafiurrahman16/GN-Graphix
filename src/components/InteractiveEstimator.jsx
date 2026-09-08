import React, { useState } from 'react';
import { Calculator, MessageCircle, Sparkles, Check, ArrowRight, Layers, HelpCircle } from 'lucide-react';

const options = [
  { id: 'flex', name: 'Flex Banner / Panaflex', unit: 'sq. ft', baseRate: 'Competitive', defaultQty: 50 },
  { id: 'acrylic', name: 'Acrylic 3D Sign Board', unit: 'sq. ft / letters', baseRate: 'Custom Fabrication', defaultQty: 10 },
  { id: 'digital', name: 'Digital Print (Posters / Flyers)', unit: 'pieces', baseRate: 'Short-Run Fast', defaultQty: 250 },
  { id: 'wallpaper', name: 'Custom 3D Wallpaper', unit: 'sq. ft', baseRate: 'Interior Grade', defaultQty: 120 },
  { id: 'vinyl', name: 'Vinyl Cut / Frosted Glass', unit: 'sq. ft', baseRate: 'Precision Die-Cut', defaultQty: 40 },
  { id: 'offset', name: 'Offset Bulk Printing / Packaging', unit: 'units (bulk)', baseRate: 'Volume Discount', defaultQty: 1000 }
];

const InteractiveEstimator = ({ onApplyToContactForm }) => {
  const [selectedService, setSelectedService] = useState(options[0]);
  const [quantity, setQuantity] = useState(50);
  const [urgency, setUrgency] = useState('Standard (2-3 Days)');
  const [finish, setFinish] = useState('Gloss / Standard Finish');

  const handleGenerateWhatsAppQuote = () => {
    const text = encodeURIComponent(
      `*New Project Estimate Inquiry - GN Graphix*\n` +
      `• Service: ${selectedService.name}\n` +
      `• Estimated Qty/Size: ${quantity} ${selectedService.unit}\n` +
      `• Finish: ${finish}\n` +
      `• Urgency: ${urgency}\n\n` +
      `Please provide exact pricing and material sample advice.`
    );
    window.open(`https://wa.me/923453624620?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative py-20 bg-navy-950/70 overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative site-container">
        
        {/* Estimator Container Card */}
        <div className="relative rounded-3xl glass-panel-gold p-6 sm:p-10 lg:p-12 border border-gold-500/30 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-xs font-semibold gold-gradient-text uppercase tracking-wider mb-4">
                <Calculator className="w-3.5 h-3.5 text-gold-400" />
                <span>Instant Inquiry Configurator</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
                Configure Your Print Specifications
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Select your required printing medium, approximate quantity, and finishing preferences. Generate a tailored inquiry directly to our WhatsApp printing desk for immediate quotation.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-gold-400" />
                  <span>Transparent wholesale & retail pricing tiers</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-gold-400" />
                  <span>Free pre-press file inspection & sizing check</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-gold-400" />
                  <span>Doorstep sample dispatch for commercial orders</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Configurator */}
            <div className="lg:col-span-7 bg-navy-900/90 rounded-2xl border border-white/10 p-5 sm:p-7 shadow-xl">
              
              {/* Service Selection */}
              <div className="mb-5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                  1. Select Printing Category:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {options.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setSelectedService(opt);
                        setQuantity(opt.defaultQty);
                      }}
                      className={`p-2.5 rounded-xl text-xs font-semibold text-left transition-all ${
                        selectedService.id === opt.id
                          ? 'bg-gold-500/20 text-gold-300 border border-gold-500/50 shadow-sm'
                          : 'bg-white/5 text-slate-300 border border-white/5 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {opt.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Slider / Input */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    2. Estimated Quantity / Area:
                  </label>
                  <span className="text-xs font-bold gold-gradient-text">
                    {quantity} {selectedService.unit}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max={selectedService.id === 'offset' ? 5000 : 500}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full accent-gold-500 bg-navy-950 rounded-lg cursor-pointer h-2"
                />
              </div>

              {/* Finishing Option */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    3. Finishing Style:
                  </label>
                  <select
                    value={finish}
                    onChange={(e) => setFinish(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-navy-950 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-gold-400"
                  >
                    <option>Standard / Clean Cut</option>
                    <option>Matte Velvet Lamination</option>
                    <option>High Gloss UV Coating</option>
                    <option>3D Acrylic Backlit Finish</option>
                    <option>Heavy-Duty Reinforced Eyelets</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    4. Required Turnaround:
                  </label>
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-navy-950 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-gold-400"
                  >
                    <option>Standard Delivery (2 - 4 Days)</option>
                    <option>Rush Express (Same Day / 24h)</option>
                    <option>Economy Commercial Run</option>
                  </select>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={handleGenerateWhatsAppQuote}
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl gold-btn-gradient text-navy-950 font-bold text-xs shadow-gold-sm hover:shadow-gold-md active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-navy-950/20" />
                  <span>Send Configured Inquiry via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default InteractiveEstimator;
