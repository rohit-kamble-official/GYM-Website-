import React from 'react';
import ServicesSection from '../components/Services';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="pt-24 animate-in fade-in slide-in-from-bottom-5 duration-700">
      {/* Page Header */}
      <div className="bg-zinc-900/50 py-20 border-b border-zinc-800">
        <div className="container mx-auto px-6 text-center">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 block">World Class Training</span>
          <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6 uppercase">OUR PROGRAMS</h1>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg leading-relaxed">
            From beginner fundamentals to elite-level performance training, we have a program tailored for your success.
          </p>
        </div>
      </div>

      <ServicesSection />

      {/* Detailed Service Cards */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-12">
            {SERVICES.map((service, index) => {
              const IconComponent = Icons[service.icon];
              return (
                <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center p-8 bg-zinc-900/20 border border-zinc-900 rounded-3xl transition-all hover:bg-zinc-900/40 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/3">
                    <div className="w-24 h-24 bg-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(234,88,12,0.3)]">
                      <IconComponent size={48} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-orbitron font-bold mb-4 uppercase">{service.title}</h2>
                    <p className="text-zinc-400 leading-relaxed mb-6">{service.description}</p>
                    <button className="text-orange-500 font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-sm">
                      Learn More <Icons.ArrowRight size={18} />
                    </button>
                  </div>
                  <div className="lg:w-2/3 h-64 md:h-96 w-full rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                    <img 
                      src={`https://images.unsplash.com/photo-${index === 0 ? '1583454110551-21f2fa2adfcd' : index === 1 ? '1540497077202-7c8a3999166f' : index === 2 ? '1571019613454-1cb2f99b2d8b' : '1591027480007-a42f6ef886c3'}?auto=format&fit=crop&q=80&w=1200`} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
