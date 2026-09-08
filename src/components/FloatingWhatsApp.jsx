import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quickMsg, setQuickMsg] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    const textToSend = quickMsg.trim() || 'Hello GN Graphix! I would like to inquire about printing services.';
    window.open(`https://wa.me/923453624620?text=${encodeURIComponent(textToSend)}`, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
    setQuickMsg('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      
      {/* Pop-up Chat Bubble */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 rounded-3xl bg-navy-900 border border-emerald-500/40 shadow-2xl p-5 backdrop-blur-2xl animate-fadeIn">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <MessageCircle className="w-5 h-5" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-navy-900" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">GN Graphix WhatsApp</h4>
                <p className="text-[10px] text-emerald-400 font-medium">Online • Instant Response</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Body */}
          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            👋 Hi there! Need urgent flex printing, acrylic shop boards, or 3D wallpaper quotation? Chat with our team now!
          </p>

          {/* Quick Input */}
          <form onSubmit={handleSend} className="space-y-2">
            <input
              type="text"
              value={quickMsg}
              onChange={(e) => setQuickMsg(e.target.value)}
              placeholder="Type your question or size..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
            />
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-navy-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Start WhatsApp Chat</span>
            </button>
          </form>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="relative group">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
          aria-label="Chat with GN Graphix on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-white/10" />
          
          {/* Notification Ping */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 text-[9px] text-navy-950 font-black items-center justify-center">
              1
            </span>
          </span>
        </button>

        {/* Hover Tooltip */}
        {!isOpen && (
          <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden sm:group-hover:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-navy-900 border border-emerald-500/30 text-xs font-semibold text-white shadow-xl whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Chat on WhatsApp</span>
          </div>
        )}
      </div>

    </div>
  );
};

export default FloatingWhatsApp;
