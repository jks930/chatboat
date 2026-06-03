import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingSidebar = () => {
  return (
    <div className="fixed right-6 bottom-6 md:right-8 md:bottom-8 z-50">
      <a
        href="https://wa.me/+14472272513"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform transform hover:scale-110 border border-emerald-400 group relative"
      >
        {/* Ping effect behind the button */}
        <span className="absolute w-full h-full rounded-full bg-emerald-400 opacity-20 animate-ping -z-10"></span>
        <MessageCircle size={32} className="animate-pulse" />
      </a>
    </div>
  );
};

export default FloatingSidebar;
