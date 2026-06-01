import React from 'react';
import { MessageCircle, Activity, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 relative z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">How it works</h2>
        <p className="text-slate-600 text-lg">Three simple steps to secure your next doctor's visit.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connection line for desktop */}
        <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-emerald-200 via-teal-200 to-sky-200"></div>
        
        <div className="relative text-center z-10">
          <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center text-emerald-500 shadow-lg border-4 border-slate-50 mb-6">
            <MessageCircle size={40} />
          </div>
          <h4 className="text-xl font-bold text-slate-800 mb-2">1. Say "Hi"</h4>
          <p className="text-slate-600">Start a chat with our verified WhatsApp business account.</p>
        </div>
        
        <div className="relative text-center z-10">
          <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center text-teal-500 shadow-lg border-4 border-slate-50 mb-6">
            <Activity size={40} />
          </div>
          <h4 className="text-xl font-bold text-slate-800 mb-2">2. Choose Doctor</h4>
          <p className="text-slate-600">Select the specialization and pick a time slot that works for you.</p>
        </div>

        <div className="relative text-center z-10">
          <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center text-sky-500 shadow-lg border-4 border-slate-50 mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h4 className="text-xl font-bold text-slate-800 mb-2">3. Get Confirmed</h4>
          <p className="text-slate-600">Receive instant confirmation and a calendar invite in your inbox.</p>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
