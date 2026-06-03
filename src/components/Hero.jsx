import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

const Hero = () => (
  <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="max-w-2xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-100 text-emerald-700 font-medium text-sm mb-8 shadow-sm shadow-emerald-100/50 mx-auto lg:mx-0">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Available 24/7 on WhatsApp
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-800 leading-[1.1] mb-6 tracking-tight">
            Book doctors <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
              in 10 seconds.
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed font-light">
            Skip the waiting room. Find specialists, schedule visits, and manage your appointments instantly—all from your favorite messaging app.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-300 group-hover:duration-200"></div>
              <a
                href="https://wa.me/+14472272513"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-[1.02]"
              >
                <MessageCircle size={24} className="text-emerald-400" />
                <span>Start WhatsApp Chat</span>
                <ArrowRight size={20} className="text-slate-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Content - Phone Mockup */}
        <div className="relative mx-auto w-full max-w-[280px] lg:ml-auto">
          {/* Decorative background behind phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-emerald-100 to-cyan-50 rounded-full blur-3xl -z-10"></div>

          <div
            className="relative bg-white rounded-[2.5rem] border-[8px] border-slate-900 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] h-[540px] w-full overflow-hidden flex flex-col ring-1 ring-slate-900/10"
            style={{ animation: 'float 6s ease-in-out infinite' }}
          >
            {/* Phone Notch */}
            <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 rounded-b-2xl w-32 mx-auto z-30"></div>

            {/* WhatsApp Header area (covers status bar too for immersive look) */}
            <div className="bg-[#075e54] pt-8 pb-3 px-4 flex items-center gap-3 text-white z-20 shadow-md">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <img src="/logo.jpg" className="w-8 h-8 rounded-full object-cover bg-white" alt="BotDoct" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base truncate leading-tight">BotDoct</h3>
                <p className="text-[11px] text-white/80 truncate">Official Business Account</p>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 bg-[#efeae2] px-4 py-3 flex flex-col gap-2.5 overflow-hidden relative bg-[url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')] bg-cover bg-center bg-blend-soft-light">
              <div className="text-center my-2">
                <span className="bg-[#e1f3fb] text-slate-600 text-[11px] font-medium px-3 py-1 rounded-lg shadow-sm">Today</span>
              </div>

              <div className="bg-white p-3 rounded-xl rounded-tl-none text-sm text-slate-800 shadow-sm self-start max-w-[85%] relative">
                Welcome to Doc Appointment Assistant. What's your name?
                <span className="text-[10px] text-slate-400 block text-right mt-1">9:41 AM</span>
              </div>

              <div className="bg-[#dcf8c6] p-3 rounded-2xl rounded-tr-none text-sm text-slate-800 shadow-sm self-end max-w-[85%] relative">

                Jitendra Singh              <span className="text-[10px] text-teal-600 block text-right mt-1">9:42 AM ✓✓</span>
              </div>

              <div className="bg-white p-3 rounded-xl rounded-tl-none text-sm text-slate-800 shadow-sm self-start max-w-[85%] relative">
                What would you like to do next?
                <br></br>
                1. Book appointment
                <br></br>
                2. Reschedule appointment
                <br></br>
                3. Cancel appointment
                <br></br>
                4. View my appointments

                Reply with number                <span className="text-[10px] text-slate-400 block text-right mt-1">9:42 AM</span>
              </div>

              <div className="bg-[#dcf8c6] p-3 rounded-2xl rounded-tr-none text-sm text-slate-800 shadow-sm self-end max-w-[85%] relative">
                Yes, please!
                <span className="text-[10px] text-teal-600 block text-right mt-1">9:43 AM ✓✓</span>
              </div>

              <div className="bg-white p-3 rounded-2xl rounded-tl-none text-sm text-slate-800 shadow-sm self-start max-w-[85%] relative">
                ✅ Done! Your appointment is confirmed for tomorrow at 10:00 AM. I've sent a Google Calendar invite to your email.
                <span className="text-[10px] text-slate-400 block text-right mt-1">9:43 AM</span>
              </div>
            </div>

            {/* Input Area */}
            <div className="bg-[#f0f0f0] p-3 flex items-center gap-2 z-20">
              <div className="flex-1 bg-white rounded-full h-10 px-4 flex items-center text-slate-400 text-sm shadow-sm border border-slate-200">
                Type a message
              </div>
              <div className="w-10 h-10 bg-[#00a884] rounded-full flex items-center justify-center text-white shadow-md shrink-0">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </div>
            </div>

            {/* Home indicator */}
            <div className="h-1 bg-slate-900 w-1/3 rounded-full absolute bottom-2 left-1/2 -translate-x-1/2 z-30"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
