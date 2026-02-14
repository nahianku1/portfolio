
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-dark h-16' : 'bg-transparent h-20'}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-white">developer_mode</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Nahian Bin Islam</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium hover:text-primary transition-colors text-slate-300" href="#home">Home</a>
          <a className="text-sm font-medium hover:text-primary transition-colors text-slate-300" href="#skills">Skills</a>
          <a className="text-sm font-medium hover:text-primary transition-colors text-slate-300" href="#projects">Projects</a>
          <a className="text-sm font-medium hover:text-primary transition-colors text-slate-300" href="#education">Education</a>
          <a className="text-sm font-medium hover:text-primary transition-colors text-slate-300" href="#contact">Contact</a>
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/30">
            Let's Talk
          </button>
        </div>
        
        <button className="md:hidden text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
