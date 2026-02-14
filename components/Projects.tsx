
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section className="py-32 bg-primary/5 border-y border-white/5" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">Featured Projects</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative bg-background-dark/50 rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src={project.image}
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${idx % 2 === 0 ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">{project.title}</h4>
                <p className="text-slate-400 text-sm mb-6 flex-1">{project.description}</p>
                <a className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all" href="#">
                  View Project <span className="material-symbols-outlined">north_east</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
