import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingSidebar = () => {
  return (
    <>
      {/* Desktop Vertical Sidebar */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <a
          href="https://wa.me/+14472272513"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-l-2xl shadow-[0_0_20px_rgba(16,185,129,0.4)] flex flex-col items-center gap-4 transition-transform transform hover:-translate-x-1 border border-r-0 border-emerald-400"
        >
          <MessageCircle size={28} className="animate-pulse" />
          <span className="font-bold text-sm tracking-widest uppercase" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            Book Demo
          </span>
        </a>
      </div>

      {/* Mobile Floating Button */}
      <div className="fixed right-4 bottom-6 z-50 md:hidden">
        <a
          href="https://wa.me/+14472272513"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-2 transition-transform transform hover:scale-105 border border-emerald-400"
        >
          <MessageCircle size={24} className="animate-pulse" />
          <span className="font-bold text-sm">Book Demo</span>
        </a>
      </div>
    </>
  );
};

export default FloatingSidebar;
