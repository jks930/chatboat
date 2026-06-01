import React from 'react';
import Navbar from './components/layout/Navbar';
import GlobalBackground from './components/layout/GlobalBackground';
import Footer from './components/layout/Footer';
import FloatingSidebar from './components/layout/FloatingSidebar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import './App.css';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-emerald-200 selection:text-emerald-900 relative">
      <GlobalBackground />
      <FloatingSidebar />
      <div className="relative z-0">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Footer />
      </div>
    </div>
  );
}

export default App;
