import React from 'react';
import AboutSection from '../components/About';
import { Trophy, Users, Award, ShieldCheck, HeartPulse, Zap } from 'lucide-react';

const AboutPage = () => {
  const values = [
    { icon: <Zap className="text-orange-500" />, title: "Intensity", text: "We push boundaries every single day." },
    { icon: <HeartPulse className="text-orange-500" />, title: "Wellness", text: "Holistic health is our primary goal." },
    { icon: <Users className="text-orange-500" />, title: "Community", text: "You're not alone in this fight." },
    { icon: <ShieldCheck className="text-orange-500" />, title: "Safety", text: "Certified techniques for injury-free training." }
  ];

  return (
    <div className="pt-24 animate-in fade-in slide-in-from-bottom-5 duration-700">
      {/* Page Header */}
      <div className="bg-zinc-900/50 py-20 border-b border-zinc-800">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6">THE LEGACY</h1>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Maharudraya Fitness Club started with a simple vision: To create a sanctuary for transformation in the heart of Pune.
          </p>
        </div>
      </div>

      <AboutSection />

      {/* Values Grid */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-orbitron font-bold mb-4">OUR CORE VALUES</h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl text-center hover:border-orange-500 transition-colors">
                <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-zinc-500 text-sm">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders/Team Teaser */}
      <section className="py-24 bg-zinc-900/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-4xl font-orbitron font-black mb-8 uppercase">Meet Our <span className="text-orange-500">Master Trainers</span></h2>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                Our team consists of national-level athletes, certified nutritionists, and injury-rehabilitation experts. Every trainer at Maharudraya is hand-picked for their expertise and passion.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-zinc-900 rounded-xl border border-zinc-800">
                  <Award className="text-orange-500" />
                  <span className="font-bold">IFBB Certified Coaches</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-zinc-900 rounded-xl border border-zinc-800">
                  <Trophy className="text-orange-500" />
                  <span className="font-bold">K1 Level Kickboxing Experts</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800" alt="Trainers" className="rounded-3xl border-2 border-zinc-800 grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
