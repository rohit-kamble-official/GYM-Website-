import React from 'react';
import { ChevronRight, Trophy, Users, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920" 
          alt="Gym Interior" 
          className="w-full h-full object-cover brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-zinc-800/50 backdrop-blur border border-zinc-700 rounded-full px-4 py-1.5 mb-8 animate-bounce">
          <Star className="text-orange-500 fill-orange-500" size={16} />
          <span className="text-sm font-medium text-zinc-300 uppercase tracking-widest">The #1 Fitness Hub in Pune</span>
        </div>

        <h1 className="font-orbitron text-5xl md:text-8xl font-black mb-6 leading-tight">
          UNLEASH YOUR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">INTERNAL POWER</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl mb-10 leading-relaxed">
          Premium equipment, professional trainers, and an atmosphere built for champions. 
          Start your transformation journey at Maharudraya today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#pricing" 
            className="group bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(249,115,22,0.3)]"
          >
            Get Started Now
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#about" 
            className="px-8 py-4 rounded-xl font-bold text-lg border border-zinc-700 hover:bg-zinc-800 transition-all"
          >
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto border-t border-zinc-800 pt-10">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-orbitron font-bold text-orange-500">500+</span>
            <span className="text-zinc-500 text-sm uppercase tracking-widest mt-1">Active Members</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-orbitron font-bold text-orange-500">20+</span>
            <span className="text-zinc-500 text-sm uppercase tracking-widest mt-1">Expert Trainers</span>
          </div>
          <div className="flex flex-col items-center col-span-2 md:col-span-1">
            <span className="text-3xl font-orbitron font-bold text-orange-500">10k sqft</span>
            <span className="text-zinc-500 text-sm uppercase tracking-widest mt-1">Modern Space</span>
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-orange-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-red-600/10 blur-[120px] rounded-full"></div>
    </section>
  );
};

export default Hero;
