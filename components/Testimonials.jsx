import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-24 bg-zinc-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-orbitron font-black mt-4 mb-6">WHAT MEMBERS <br /> ARE SAYING</h2>
            <p className="text-zinc-500 mb-8">
              Real people, real results. Hear it from our Pune community members who transformed their lives at Maharudraya.
            </p>
            <div className="flex gap-4">
              <button onClick={prev} className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition-all">
                <ChevronLeft size={24} />
              </button>
              <button onClick={next} className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition-all">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="relative overflow-hidden min-h-[300px]">
              {TESTIMONIALS.map((t, idx) => (
                <div 
                  key={t.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out flex flex-col justify-center ${idx === active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20 pointer-events-none'}`}
                >
                  <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 shadow-xl">
                    <Quote className="text-orange-500 mb-6" size={40} fill="currentColor" fillOpacity={0.1} />
                    <p className="text-xl italic text-zinc-300 mb-8 leading-relaxed">"{t.content}"</p>
                    <div className="flex items-center gap-4">
                      <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-orange-600" />
                      <div>
                        <h4 className="font-bold text-lg">{t.name}</h4>
                        <p className="text-orange-500 text-sm font-medium uppercase tracking-widest">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
