import React, { useState } from 'react';
import { UserCog, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass border-b border-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <img   src={`${import.meta.env.BASE_URL}logo.jpg`}   alt="Logo"   className="h-10 w-auto rounded-lg object-contain" />
            <span className="font-bold text-2xl tracking-tight text-slate-800">DocBot</span>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#features" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Features</a>
            <a href="#how-it-works" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">How it works</a>
            <button className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-medium transition-colors border border-slate-200 px-4 py-2 rounded-full hover:bg-white hover:shadow-sm">
              <UserCog size={18} />
              Admin Login
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/50 px-4 py-6 space-y-4 shadow-lg absolute w-full left-0 bg-white/95 backdrop-blur-md">
          <a href="#features" onClick={() => setIsOpen(false)} className="block text-slate-600 font-medium hover:text-emerald-600">Features</a>
          <a href="#how-it-works" onClick={() => setIsOpen(false)} className="block text-slate-600 font-medium hover:text-emerald-600">How it works</a>
          <button className="flex w-full items-center gap-2 text-slate-700 font-medium border border-slate-200 px-4 py-2 rounded-full hover:bg-slate-50 mt-4 justify-center">
            <UserCog size={18} />
            Admin Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
