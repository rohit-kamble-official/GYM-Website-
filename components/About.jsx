import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const highlights = [
    "Certified Trainers with Pro Experience",
    "Latest Imported Fitness Equipment",
    "Hygienic and Sanitized Environment",
    "Personalized Progress Tracking",
    "Prime Location in Pune",
    "Community Support & Motivation"
  ];

  return (
    <section id="about" className="py-24 bg-zinc-900/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-zinc-800 group">
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef03a94e78?auto=format&fit=crop&q=80&w=800" 
                alt="Personal Training" 
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 bg-orange-600 p-6 rounded-xl text-white">
                <p className="text-4xl font-black font-orbitron">10+</p>
                <p className="text-sm font-bold uppercase">Years Excellence</p>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 border-2 border-orange-600/30 rounded-2xl z-0 -rotate-6"></div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-orbitron font-black mt-4 mb-8">
              WHY CHOOSE <br /> <span className="text-zinc-600">MAHARUDRAYA?</span>
            </h2>
            
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              At Maharudraya Fitness Club, we don't just provide a space for exercise; we build warriors. 
              Our mission is to empower the community of Pune with high-quality fitness solutions 
              that are both effective and sustainable.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-orange-500" size={20} />
                  <span className="text-zinc-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-12 bg-zinc-100 text-zinc-950 px-8 py-4 rounded-xl font-black hover:bg-orange-600 hover:text-white transition-all uppercase tracking-widest">
              View Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
