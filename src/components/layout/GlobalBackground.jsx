import React from 'react';

const GlobalBackground = () => (
  <div className="fixed inset-0 bg-slate-50 overflow-hidden pointer-events-none -z-10">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-300/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-300/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
    <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-cyan-300/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000 -translate-y-1/2"></div>
    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-200/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
  </div>
);

export default GlobalBackground;
