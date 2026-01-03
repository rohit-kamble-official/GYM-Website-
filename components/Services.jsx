import React from 'react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-orbitron font-black mt-4 mb-4">PREMIUM PROGRAMS</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = Icons[service.icon];
            return (
              <div 
                key={service.id} 
                className="group p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-600 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <IconComponent size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-orange-500 transition-colors uppercase tracking-tight">{service.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
