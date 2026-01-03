import React from 'react';
import ContactSection from '../components/Contact';
import { Instagram, Facebook, Twitter, MessageSquare, Clock } from 'lucide-react';
import { CLUB_DETAILS } from '../constants';

const ContactPage = () => {
  return (
    <div className="pt-24 animate-in fade-in slide-in-from-bottom-5 duration-700">
      {/* Page Header */}
      <div className="bg-zinc-900/50 py-20 border-b border-zinc-800">
        <div className="container mx-auto px-6 text-center">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 block">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6 uppercase">SUPPORT</h1>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a question? We're here to help you start your fitness transformation.
          </p>
        </div>
      </div>

      <ContactSection />

      {/* Additional Info Grid */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 bg-zinc-900/50 rounded-3xl border border-zinc-900">
              <div className="w-16 h-16 bg-orange-600/10 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">Operating Hours</h3>
              <p className="text-zinc-500 mb-2">Mon - Sat: 5 AM - 10 PM</p>
              <p className="text-zinc-500">Sun: Closed</p>
            </div>

            <div className="text-center p-8 bg-zinc-900/50 rounded-3xl border border-zinc-900">
              <div className="w-16 h-16 bg-orange-600/10 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500">
                <MessageSquare size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">Quick Chat</h3>
              <p className="text-zinc-500 mb-4">Talk to our front desk representative via WhatsApp.</p>
              <a 
                href={`https://wa.me/${CLUB_DETAILS.whatsapp.replace(/\D/g, '')}`} 
                className="inline-block bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
              >
                WhatsApp Us
              </a>
            </div>

            <div className="text-center p-8 bg-zinc-900/50 rounded-3xl border border-zinc-900">
              <div className="w-16 h-16 bg-orange-600/10 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500">
                <Instagram size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">Social Feed</h3>
              <p className="text-zinc-500 mb-4">Follow us for daily motivation and transformation stories.</p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-zinc-400 hover:text-orange-500"><Instagram /></a>
                <a href="#" className="text-zinc-400 hover:text-orange-500"><Facebook /></a>
                <a href="#" className="text-zinc-400 hover:text-orange-500"><Twitter /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
