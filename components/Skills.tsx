
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto" id="skills">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="max-w-xl">
          <h2 className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">Technical Prowess</h3>
        </div>
        <p className="text-slate-400 max-w-md">
          Mastering a modern stack to deliver performant, accessible, and visually stunning digital products.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {SKILLS.map((skill) => (
          <div key={skill.id} className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all group cursor-default">
            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
              <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">
                {skill.icon}
              </span>
            </div>
            <h4 className="text-white font-bold text-lg mb-2">{skill.name}</h4>
            <p className="text-slate-500 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
