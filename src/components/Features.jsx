import React from 'react';
import { Search, Calendar, RefreshCcw } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Search className="text-blue-500" size={28} />,
      title: "Find the Right Specialist",
      desc: "Easily search for doctors by specialization, availability, and rating directly within the chat.",
      bg: "bg-blue-50"
    },
    {
      icon: <Calendar className="text-emerald-500" size={28} />,
      title: "Google Calendar Sync",
      desc: "Never miss an appointment. Receive automatic Google Calendar invites as soon as you book.",
      bg: "bg-emerald-50"
    },
    {
      icon: <RefreshCcw className="text-purple-500" size={28} />,
      title: "Easy Rescheduling",
      desc: "Plans changed? Cancel or reschedule your appointment with a simple text message. No phone calls needed.",
      bg: "bg-purple-50"
    }
  ];

  return (
    <section id="features" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2">Why Choose DocBot</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Healthcare management, simplified</h3>
          <p className="text-slate-600 text-lg">We've removed the friction from booking doctor visits. Everything you need is right in your pocket.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-3xl border border-white/50 bg-white/60 backdrop-blur-md shadow-xl shadow-slate-200/20 hover:shadow-2xl hover:shadow-slate-200/40 transition-all group">
              <div className={`w-14 h-14 rounded-2xl ${f.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {f.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">{f.title}</h4>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
