import React from 'react';
import { Users, Gem, Zap, CheckCircle2, Sparkles, Shield, Award, ThumbsUp } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      number: '01',
      title: 'Expert Team',
      icon: Users,
      description: 'Experienced professionals dedicated to delivering precise and creative printing solutions.',
      details: [
        'Dedicated graphic designers & pre-press colorists',
        'Over 10+ years of collective print fabrication craft',
        'Rigorous quality control on each print run'
      ]
    },
    {
      number: '02',
      title: 'Premium Materials',
      icon: Gem,
      description: 'We use quality materials and modern printing techniques to deliver durable and impressive results.',
      details: [
        'Imported cast virgin acrylic & high-density flex',
        'Archival-grade UV inks resistant to fading & moisture',
        'Certified premium substrates for long-term endurance'
      ]
    },
    {
      number: '03',
      title: 'Fast Delivery',
      icon: Zap,
      description: 'Efficient production and reliable turnaround times without compromising quality.',
      details: [
        'Same-day and 24-hour rush printing slots',
        'Real-time status updates via WhatsApp',
        'Secure doorstep packing and prompt delivery'
      ]
    }
  ];

  const stats = [
    { value: '500+', label: 'Commercial Projects' },
    { value: '99.8%', label: 'Color Accuracy' },
    { value: '24/7', label: 'WhatsApp Support' },
    { value: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="why-us" className="relative py-24 sm:py-32 bg-navy-950 overflow-hidden">
      
      {/* Background Decorative Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-navy-800/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative site-container">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-xs font-semibold gold-gradient-text uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>The GN Standard</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Why Choose GN?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
            Quality, reliability, and professional service in every project. We combine industrial-grade machinery with artisanal attention to detail.
          </p>
        </div>

        {/* 3 Major Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="group relative rounded-3xl glass-card p-8 sm:p-9 flex flex-col justify-between hover:border-gold-500/40 hover:-translate-y-2 transition-all duration-300"
              >
                {/* Large Background Watermark Number */}
                <span className="absolute top-6 right-6 font-display font-black text-6xl sm:text-7xl text-white/[0.04] group-hover:text-gold-500/[0.12] transition-colors pointer-events-none select-none">
                  {item.number}
                </span>

                <div>
                  {/* Top Badge: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-navy-900 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 group-hover:shadow-gold-md transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className="font-display font-extrabold text-sm px-3 py-1 rounded-full bg-white/5 text-gold-300 border border-gold-500/20">
                      Feature {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 pt-4 border-t border-white/10">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-gold-400">
                  <Shield className="w-4 h-4" />
                  <span>Guaranteed Quality Output</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Numerical Trust Metrics Strip */}
        <div className="rounded-3xl glass-panel-gold p-8 sm:p-10 border border-gold-500/30 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {stats.map((stat, idx) => (
              <div key={idx} className={`pt-4 lg:pt-0 ${idx % 2 !== 0 ? 'border-t sm:border-t-0' : ''}`}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-display gold-gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;
