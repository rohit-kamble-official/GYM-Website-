import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from 'lucide-react';
import { CLUB_DETAILS } from '../constants';

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Reach Out</span>
            <h2 className="text-4xl md:text-5xl font-orbitron font-black mt-4 mb-10">CONTACT US</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center text-orange-500 border border-zinc-800">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Our Location</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{CLUB_DETAILS.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center text-orange-500 border border-zinc-800">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Call Us</h4>
                  <p className="text-zinc-500 text-sm">{CLUB_DETAILS.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center text-orange-500 border border-zinc-800">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email Us</h4>
                  <p className="text-zinc-500 text-sm">{CLUB_DETAILS.email}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-all border border-zinc-800">
                  <Icon size={20} />
                </a>
              ))}
            </div>

            <div className="mt-12 rounded-2xl overflow-hidden border border-zinc-800 h-64 grayscale contrast-125">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04360341517!2d73.79292679907106!3d18.52487061245645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43105d951336!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
              ></iframe>
            </div>
          </div>

          <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800">
            <h3 className="text-2xl font-bold mb-8 uppercase tracking-tight">Drop a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-500 mb-2">Name</label>
                  <input type="text" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors" placeholder="Full Name" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-500 mb-2">Phone</label>
                  <input type="tel" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors" placeholder="+91" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-zinc-500 mb-2">Subject</label>
                <select className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>Personal Training</option>
                  <option>Group Classes</option>
                  <option>Business Collaboration</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-zinc-500 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors resize-none" placeholder="Tell us how we can help..."></textarea>
              </div>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
