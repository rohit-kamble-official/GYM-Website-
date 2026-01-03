import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/About';
import ServicesSection from '../components/Services';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <Hero />
      <AboutSection />
      
      {/* Featured Services Call to Action */}
      <div className="bg-zinc-950 py-10">
        <div className="container mx-auto px-6 flex justify-between items-center border-b border-zinc-900 pb-10">
          <h2 className="text-2xl font-orbitron font-bold">OUR PROGRAMS</h2>
          <Link to="/services" className="text-orange-500 font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
            View All Services <ArrowRight size={20} />
          </Link>
        </div>
      </div>
      
      <ServicesSection />
      <Testimonials />
      
      {/* Join Call to Action */}
      <section className="py-24 bg-orange-600 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-orbitron font-black text-white mb-8">READY TO START YOUR JOURNEY?</h2>
          <p className="text-orange-100 text-xl mb-12 max-w-2xl mx-auto">
            Join the community of fighters and achievers in Pune. No excuses, just progress.
          </p>
          <Link to="/pricing" className="inline-block bg-zinc-950 text-white px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl">
            CHOOSE YOUR PLAN
          </Link>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -rotate-12 translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rotate-45 -translate-x-20 translate-y-20"></div>
      </section>
    </div>
  );
};

export default Home;
