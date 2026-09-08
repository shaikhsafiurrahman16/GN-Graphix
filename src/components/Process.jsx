import React from 'react';
import { MessageSquareText, PenTool, Printer, Truck, Sparkles, CheckCircle2 } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      step: '01',
      title: 'Discuss Requirements',
      shortDesc: 'Share your vision, dimensions, and artwork with our printing specialists.',
      icon: MessageSquareText,
      tag: 'Consultation'
    },
    {
      step: '02',
      title: 'Design & Approval',
      shortDesc: 'We prepare digital proofs, 3D mockups, and color calibrations for your final sign-off.',
      icon: PenTool,
      tag: 'Pre-Press'
    },
    {
      step: '03',
      title: 'Professional Printing',
      shortDesc: 'High-speed precision fabrication using industrial Heidelberg, Roland, and laser CNC systems.',
      icon: Printer,
      tag: 'Production'
    },
    {
      step: '04',
      title: 'Final Delivery',
      shortDesc: 'Rigorous quality inspection, protective packaging, and fast doorstep delivery or site installation.',
      icon: Truck,
      tag: 'Dispatch'
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-navy-900/30 overflow-hidden">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative site-container">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-xs font-semibold gold-gradient-text uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Seamless Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            How It Works
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
            From initial design brief to final delivery, our streamlined 4-step workflow ensures fast turnarounds and impeccable quality.
          </p>
        </div>

        {/* 4-Step Process Timeline */}
        <div className="relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-[2px] bg-gradient-to-r from-gold-500/20 via-gold-400/50 to-gold-500/20 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="group relative rounded-3xl glass-card p-6 sm:p-7 flex flex-col items-center text-center hover:border-gold-500/40 hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Step Number Badge */}
                  <div className="w-14 h-14 rounded-2xl bg-navy-900 border border-gold-500/40 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 group-hover:shadow-gold-sm transition-all duration-300 mb-5 relative">
                    <Icon className="w-7 h-7" />
                    
                    {/* Tiny Number Pin */}
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold-500 text-navy-950 text-xs font-extrabold flex items-center justify-center border-2 border-navy-950">
                      {idx + 1}
                    </span>
                  </div>

                  {/* Stage Tag */}
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 text-slate-300 border border-white/10 mb-3">
                    {item.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.shortDesc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
};

export default Process;
