
import React from 'react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto" id="education">
      <div className="text-center mb-16">
        <h2 className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4">Background</h2>
        <h3 className="text-4xl md:text-5xl font-black text-white">Education</h3>
      </div>
      
      <div className="relative pl-8 md:pl-0">
        {/* Timeline Desktop Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
        {/* Timeline Mobile Line */}
        <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-white/10"></div>
        
        {EDUCATION.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={item.id} className="relative mb-12">
              <div className="md:flex md:items-center">
                {/* Degree Info */}
                <div className={`md:w-1/2 mb-4 md:mb-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 order-3'}`}>
                  <h4 className="text-white font-bold text-xl">{item.degree}</h4>
                  <p className={`${item.highlight ? 'text-primary' : 'text-secondary'} font-medium`}>{item.specialization}</p>
                </div>
                
                {/* Dot */}
                <div className={`absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full ${item.highlight ? 'bg-primary shadow-lg shadow-primary/50' : 'bg-white/10'} border-4 border-background-dark z-10 ${isEven ? '' : 'order-2'}`}></div>
                
                {/* Description */}
                <div className={`md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12 md:text-right order-1'}`}>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
