
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 pt-32 relative" id="home">
      <div className="max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Available for projects
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tighter text-white">
          Designing <span class="text-gradient">Digital</span> <br/>Excellence
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          A high-end portfolio showcasing sophisticated web solutions with a focus on modern glassmorphism and vibrant blue aesthetics.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
            View Projects
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
          <button className="flex items-center gap-2 glass text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
            Download CV
            <span className="material-symbols-outlined text-sm">download</span>
          </button>
        </div>
      </div>
      
      <div className="mt-20 w-full max-w-5xl aspect-video rounded-2xl glass overflow-hidden relative shadow-2xl border border-white/10 shadow-[0_0_50px_-12px_rgba(37,71,244,0.3)]">
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
        <img 
          alt="Professional Dashboard Preview" 
          className="w-full h-full object-cover object-top" 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
        />
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 glass rounded-xl">
              <span className="material-symbols-outlined text-primary">monitoring</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Performance Metrics</p>
              <p className="text-slate-400 text-xs">Real-time optimization</p>
            </div>
          </div>
          <div className="hidden md:flex gap-2">
            <div className="h-1.5 w-8 rounded-full bg-primary"></div>
            <div className="h-1.5 w-4 rounded-full bg-white/20"></div>
            <div className="h-1.5 w-4 rounded-full bg-white/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
