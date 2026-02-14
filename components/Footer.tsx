
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-slate-500 text-sm">© 2024 Nahian Bin Islam. All rights reserved.</p>
        <div className="flex items-center gap-8">
          <a className="text-slate-500 hover:text-white transition-colors text-sm" href="#">Privacy Policy</a>
          <a className="text-slate-500 hover:text-white transition-colors text-sm" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
