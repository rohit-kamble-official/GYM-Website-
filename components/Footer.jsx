import React from 'react';
import { CLUB_DETAILS } from '../constants';
import { Dumbbell, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-orange-600 p-2 rounded-lg">
                <Dumbbell className="text-white" size={24} />
              </div>
              <span className="font-orbitron text-xl font-black tracking-tighter">
                MAHARUDRAYA<span className="text-orange-500">FIT</span>
              </span>
            </div>
            <p className="text-zinc-500 leading-relaxed mb-8">
              Maharudraya Fitness Club is the premium destination for fitness enthusiasts in Pune. 
              We combine science, spirit, and grit to help you transform.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Programs', 'Membership', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-zinc-500 hover:text-orange-500 flex items-center gap-2 group transition-colors">
                    {item}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest">Our Programs</h4>
            <ul className="space-y-4">
              {['Strength Training', 'Body Building', 'Weight Loss', 'Yoga Classes', 'Nutrition Counseling'].map((item) => (
                <li key={item} className="text-zinc-500">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest">Opening Hours</h4>
            <ul className="space-y-4 text-zinc-500">
              <li className="flex justify-between">
                <span>Mon - Sat</span>
                <span className="text-orange-500 font-bold">5:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-zinc-700">Closed</span>
              </li>
              <li className="pt-4 border-t border-zinc-900">
                <p className="text-xs italic uppercase tracking-widest">Pune, Maharashtra</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Maharudraya Fitness Club. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-zinc-600 text-sm">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
