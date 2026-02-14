
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-32 px-6" id="contact">
      <div className="max-w-6xl mx-auto glass rounded-[2rem] overflow-hidden relative border border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Info Side */}
          <div className="p-10 md:p-16 lg:bg-primary/5">
            <h2 className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4">Contact</h2>
            <h3 className="text-4xl font-black text-white mb-6">Let's build something <br/><span class="text-gradient">exceptional</span> together.</h3>
            <p className="text-slate-400 mb-10">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-xl glass flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase font-bold tracking-wider">Email Me</p>
                  <p className="text-white font-medium">hello@nahian.dev</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-xl glass flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">pin_drop</span>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase font-bold tracking-wider">Location</p>
                  <p className="text-white font-medium">Remote / Worldwide</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-12">
              <SocialButton href="#" icon="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
              <SocialButton href="#" icon="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
              <SocialButton href="#" icon="https://cdn-icons-png.flaticon.com/512/124/124021.png" />
            </div>
          </div>
          
          {/* Form Side */}
          <div className="p-10 md:p-16">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput label="Full Name" placeholder="John Doe" type="text" />
                <FormInput label="Email Address" placeholder="john@example.com" type="email" />
              </div>
              <FormInput label="Subject" placeholder="Project Inquiry" type="text" />
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-1">Message</label>
                <textarea 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-all resize-none" 
                  placeholder="How can I help you?" 
                  rows={4}
                ></textarea>
              </div>
              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2">
                Send Message
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialButton: React.FC<{ href: string; icon: string }> = ({ href, icon }) => (
  <a href={href} className="size-10 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-colors">
    <img src={icon} alt="Social" className="w-5 h-5 invert opacity-70" />
  </a>
);

const FormInput: React.FC<{ label: string; placeholder: string; type: string }> = ({ label, placeholder, type }) => (
  <div className="space-y-2">
    <label className="text-sm font-bold text-slate-300 ml-1">{label}</label>
    <input 
      type={type} 
      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-all" 
      placeholder={placeholder} 
    />
  </div>
);

export default Contact;
