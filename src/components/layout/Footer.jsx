import React from 'react';

const Footer = () => (
  <footer className="py-12 border-t border-white/40 relative z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-3">
        <img
          src={`${import.meta.env.BASE_URL}logo.jpg`}
          alt="Logo"
          className="h-10 w-auto rounded-lg object-contain"
        />
        <span className="font-bold text-xl text-slate-800">BotDoct</span>
      </div>

      <p className="text-slate-400 text-sm">© {new Date().getFullYear()} BotDoct. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
