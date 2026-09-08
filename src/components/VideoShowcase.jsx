import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Video, Maximize2, X, MessageCircle, ArrowRight } from 'lucide-react';

const VideoShowcase = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [modalVideo, setModalVideo] = useState(null);

  const videoList = [
    {
      id: "vid-1",
      title: "GN Heavy-Duty Panaflex Printing In Action",
      category: "Panaflex Production",
      src: "/assets/videos/Gn1.mp4",
      description: "Live high-speed printing of commercial grade outdoor Panaflex banners on our multi-head precision solvent machines.",
      badge: "Featured Production"
    },
    {
      id: "vid-2",
      title: "3D Textured Wallpaper & Wall Mural Finishing",
      category: "3D Wallpapers",
      src: "/assets/videos/gn-vid-6.mp4",
      description: "Inspection of ultra-high definition non-woven seamless wallpapers with vibrant color depth and embossing.",
      badge: "Interior Decor"
    },
    {
      id: "vid-3",
      title: "3D Acrylic & LED Signboard Fabrication",
      category: "Architectural Signage",
      src: "/assets/videos/gn-vid-2.mp4",
      description: "Precision CNC cut acrylic lettering assembly and internal high-lumen waterproof LED testing for commercial shop fascias.",
      badge: "Shop Boards"
    },
    {
      id: "vid-4",
      title: "Commercial Large Format Digital Print Run",
      category: "Digital & Flex",
      src: "/assets/videos/gn-vid-5.mp4",
      description: "High-density color reproduction for event backdrops, marketing posters, and roll-up standees.",
      badge: "Fast Dispatch"
    }
  ];

  return (
    <section id="production-reel" className="relative py-24 sm:py-32 bg-navy-950/90 overflow-hidden border-t border-b border-gold-500/20">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-navy-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative site-container">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-xs font-semibold gold-gradient-text uppercase tracking-wider mb-4">
            <Video className="w-3.5 h-3.5 text-gold-400" />
            <span>Behind The Scenes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Live Production & Machinery Reel
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
            See our state-of-the-art Panaflex printers, CNC machines, and 3D wallpaper production units in action at the GN Graphix Hyderabad workshop.
          </p>
        </div>

        {/* Featured Main Video Player */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Main Large Player */}
          <div className="lg:col-span-8">
            <div className="relative rounded-3xl overflow-hidden glass-card border border-gold-500/40 shadow-2xl bg-navy-900 aspect-video group">
              <video
                key={videoList[activeVideoIndex].src}
                src={videoList[activeVideoIndex].src}
                controls
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Top Video Tag */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-navy-950/90 text-gold-300 border border-gold-500/40 backdrop-blur-md">
                  {videoList[activeVideoIndex].badge}
                </span>
              </div>

              {/* Fullscreen Button */}
              <button
                onClick={() => setModalVideo(videoList[activeVideoIndex])}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-navy-950/80 hover:bg-navy-900 text-slate-300 hover:text-gold-400 border border-white/10 transition-colors"
                title="Watch Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Video Information & Playlist */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-3xl glass-panel-gold border border-gold-500/30">
              <span className="text-xs font-bold text-gold-400 uppercase tracking-wider block mb-1">
                {videoList[activeVideoIndex].category}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                {videoList[activeVideoIndex].title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {videoList[activeVideoIndex].description}
              </p>

              <a
                href={`https://wa.me/923453624620?text=${encodeURIComponent(`Hello GN Graphix! I watched your video on "${videoList[activeVideoIndex].title}". I want a quote for my project.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl gold-btn-gradient text-navy-950 font-bold text-xs shadow-gold-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-navy-950/20" />
                <span>Inquire About This Service</span>
              </a>
            </div>

            {/* Quick Playlist Switcher */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-1">
                Select Production Video:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {videoList.map((vid, idx) => (
                  <button
                    key={vid.id}
                    onClick={() => setActiveVideoIndex(idx)}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      activeVideoIndex === idx
                        ? 'bg-gold-500/15 border-gold-500/50 text-gold-300 shadow-gold-sm'
                        : 'bg-navy-900/80 border-white/10 text-slate-300 hover:bg-navy-850 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase mb-1">
                      <Play className="w-3 h-3 fill-current" />
                      <span className="truncate">{vid.category}</span>
                    </div>
                    <p className="text-xs font-medium text-white truncate">
                      {vid.title}
                    </p>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Fullscreen Video Modal */}
      {modalVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/95 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-5xl rounded-3xl bg-navy-900 border border-gold-500/40 shadow-2xl overflow-hidden p-2">
            <button
              onClick={() => setModalVideo(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-navy-950/80 text-white hover:text-gold-400 border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black">
              <video
                src={modalVideo.src}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-gold-400 font-bold uppercase">{modalVideo.category}</span>
                <h4 className="text-base font-bold text-white">{modalVideo.title}</h4>
              </div>
              <a
                href="https://wa.me/923453624620"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl gold-btn-gradient text-navy-950 text-xs font-bold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order On WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default VideoShowcase;
