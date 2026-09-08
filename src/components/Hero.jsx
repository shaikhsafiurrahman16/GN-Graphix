import React, { useState, useRef } from 'react';
import { MessageCircle, ArrowRight, Sparkles, ShieldCheck, Zap, Award, CheckCircle2, Star, Play, Pause, Volume2, VolumeX, MapPin } from 'lucide-react';

const Hero = ({ onGetQuoteClick }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeVisual, setActiveVisual] = useState(0);
  const videoRef = useRef(null);

  const heroVisuals = [
    {
      image: "/assets/img/gn-img-2.jpeg",
      title: "Commercial Heavy-Duty Panaflex",
      category: "Panaflex & Outdoor Banners",
      badge: "High-Speed Production"
    },
    {
      image: "/assets/img/gn-img-1.jpeg",
      title: "Luxury 3D Wallpapers & Murals",
      category: "Custom Interior Decor",
      badge: "Ultra-HD Resolution"
    },
    {
      image: "/assets/img/gn-img-3.jpeg",
      title: "3D Acrylic & LED Signboards",
      category: "Architectural Storefronts",
      badge: "Custom Fabrication"
    }
  ];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      
      {/* Background Video Player (Gn1.mp4) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src="/assets/videos/Gn1.mp4"
          poster="/assets/img/gn-img-2.jpeg"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.38] contrast-[1.15]"
        />
        
        {/* Luxury Multi-Layer Dark Gradient & Glass Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/80 to-navy-950" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70" />
        <div className="absolute inset-0 grid-bg-pattern opacity-40" />
      </div>

      {/* Ambient Gradient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-br from-gold-500/15 via-amber-600/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-navy-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[400px] h-[400px] bg-gold-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating subtle gold sparkles */}
      <div className="absolute top-36 left-12 hidden lg:block opacity-60 animate-float">
        <div className="w-2 h-2 rounded-full bg-gold-400 shadow-gold-sm" />
      </div>
      <div className="absolute top-64 right-16 hidden lg:block opacity-50 animate-float-slow">
        <div className="w-3 h-3 rounded-full bg-gold-300 shadow-gold-sm" />
      </div>

      <div className="relative z-10 site-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Trust Badge with Live Video Status & Location */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/90 border border-gold-500/40 shadow-lg shadow-gold-500/10 backdrop-blur-md mb-6 hover:border-gold-400/80 transition-colors">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide gold-gradient-text uppercase">
                Panaflex • 3D Wallpapers • Signage • Digital Offset
              </span>
              <span className="hidden sm:inline-block text-slate-500">•</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-slate-300">
                <MapPin className="w-3 h-3 text-gold-400" />
                Hyderabad, Sindh
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight mb-4">
              QUALITY PRINTING. <br />
              <span className="gold-gradient-text">EVERY TIME.</span>
            </h1>

            {/* Supporting Heading */}
            <div className="flex items-center gap-2 mb-6">
              <span className="h-[2px] w-6 bg-gold-400/80 rounded-full hidden sm:inline-block" />
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-200 tracking-normal">
                Panaflex Banners, 3D Wallpapers & Complete Branding
              </h2>
            </div>

            {/* Additional Subtext */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-8">
              From heavy-duty <strong className="text-white font-semibold">Panaflex billboards</strong> and bespoke <strong className="text-white font-semibold">3D wallpapers</strong> to 3D illuminated acrylic signage and premium offset printing — <strong className="text-gold-300 font-semibold">GN Graphix (GN Printing Solutions)</strong> brings your vision to life in Hyderabad and nationwide.
            </p>

            {/* CTAs & Interactive Video Controls */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8">
              <button
                onClick={() => onGetQuoteClick ? onGetQuoteClick() : scrollToSection('#contact')}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl gold-btn-gradient text-navy-950 font-bold text-base shadow-gold-md hover:shadow-gold-lg active:scale-95 transition-all group"
              >
                <span>Get a Fast Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/923453624620"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-navy-900/90 text-white font-semibold text-base border border-gold-500/40 hover:border-gold-400 hover:bg-navy-850 shadow-lg active:scale-95 transition-all group"
              >
                <MessageCircle className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform" />
                <span>WhatsApp: 0345-3624620</span>
              </a>
            </div>

            {/* Live Hero Video Controls Bar */}
            <div className="flex items-center gap-3 py-2 px-4 rounded-2xl bg-navy-900/80 border border-white/10 backdrop-blur-md mb-8">
              <span className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                Live Workshop Footage:
              </span>
              
              <button
                onClick={togglePlay}
                className="p-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-gold-300 border border-gold-500/30 transition-colors flex items-center gap-1 text-xs"
                title={isPlaying ? "Pause Background Video" : "Play Background Video"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>

              <button
                onClick={toggleMute}
                className="p-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-300 hover:text-white border border-white/10 transition-colors flex items-center gap-1 text-xs"
                title={isMuted ? "Unmute Video Audio" : "Mute Video Audio"}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5 text-slate-400" /> : <Volume2 className="w-3.5 h-3.5 text-gold-400" />}
                <span>{isMuted ? 'Muted' : 'Sound On'}</span>
              </button>
            </div>

            {/* Micro Trust Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-white/10 w-full">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Panaflex & 3D Wallpaper</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Same-Day Fast Dispatch</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Hyderabad Workshop</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual 3D Showcase Card & Live Badges */}
          <div className="lg:col-span-5 relative">
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/25 via-navy-600/30 to-transparent rounded-3xl blur-2xl transform -rotate-3 scale-95" />

            {/* Main Showcase Card */}
            <div className="relative rounded-3xl bg-gradient-to-b from-navy-850/95 to-navy-950/98 border border-gold-500/40 shadow-2xl p-4 sm:p-5 backdrop-blur-2xl">
              
              {/* Image Frame with Overlay */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-navy-900 border border-white/10 group">
                <img
                  src={heroVisuals[activeVisual].image}
                  alt={heroVisuals[activeVisual].title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent opacity-80" />

                {/* Live Top Tag */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-950/85 backdrop-blur-md border border-gold-500/40 text-[11px] font-semibold text-gold-300">
                  <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                  <span>{heroVisuals[activeVisual].badge}</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-navy-900/85 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gold-300 font-medium uppercase tracking-wider">{heroVisuals[activeVisual].category}</p>
                      <h3 className="text-sm font-bold text-white">{heroVisuals[activeVisual].title}</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Selectors */}
              <div className="flex items-center justify-between gap-2 mt-3 pt-3 border-t border-white/10">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">GN Work Showcase:</span>
                <div className="flex items-center gap-2">
                  {heroVisuals.map((vis, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveVisual(idx)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                        activeVisual === idx
                          ? 'gold-btn-gradient text-navy-950 shadow-gold-sm'
                          : 'bg-navy-900 text-slate-300 hover:text-white border border-white/10'
                      }`}
                    >
                      {idx === 0 ? 'Panaflex' : idx === 1 ? 'Wallpapers' : 'Signage'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Floating Metric Badge 1: 500+ Projects */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 p-3.5 sm:p-4 rounded-2xl bg-navy-900/95 border border-gold-500/40 backdrop-blur-xl shadow-2xl flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center text-gold-400 border border-gold-500/30">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-extrabold gold-gradient-text font-display">10,000+</div>
                  <div className="text-[11px] text-slate-300 font-medium">Sq.Ft Prints Delivered</div>
                </div>
              </div>

              {/* Floating Metric Badge 2: Quick Dispatch */}
              <div className="absolute -top-4 -right-2 sm:-right-4 p-3 rounded-2xl bg-navy-900/95 border border-white/15 backdrop-blur-xl shadow-2xl flex items-center gap-2.5 animate-float-slow">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/30">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Same Day / 24h</div>
                  <div className="text-[10px] text-emerald-400 font-medium">Hyderabad Rush Delivery</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
