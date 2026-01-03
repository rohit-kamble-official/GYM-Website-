import React from 'react';
import PricingSection from '../components/Pricing';
import { HelpCircle, CheckCircle2 } from 'lucide-react';

const PricingPage = () => {
  const faqs = [
    { q: "Is there a registration fee?", a: "No, we don't charge any hidden registration fees. You only pay for the plan you choose." },
    { q: "Can I upgrade my plan later?", a: "Yes! You can upgrade from Basic to Pro or Elite at any time. We will adjust your payment accordingly." },
    { q: "Do you offer personal training?", a: "Our Elite plan includes personal training sessions. For standalone PT, please contact the front desk." },
    { q: "What are the payment modes?", a: "We accept UPI, all major Credit/Debit cards, Net Banking, and cash at the club." }
  ];

  return (
    <div className="pt-24 animate-in fade-in slide-in-from-bottom-5 duration-700">
      {/* Page Header */}
      <div className="bg-zinc-900/50 py-20 border-b border-zinc-800">
        <div className="container mx-auto px-6 text-center">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 block">Invest in yourself</span>
          <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6 uppercase">MEMBERSHIP</h1>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Transparent pricing, no contracts, just results. Join Maharudraya Fitness Club today.
          </p>
        </div>
      </div>

      <PricingSection />

      {/* Plan Comparison (Mini) */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-orbitron font-bold mb-4">PLAN COMPARISON</h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
          </div>
          
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-zinc-900 border-b border-zinc-800">
                  <th className="p-6 text-sm font-bold uppercase text-zinc-400">Features</th>
                  <th className="p-6 text-sm font-bold uppercase text-zinc-100">Basic</th>
                  <th className="p-6 text-sm font-bold uppercase text-orange-500">Pro</th>
                  <th className="p-6 text-sm font-bold uppercase text-zinc-100">Elite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {[
                  { f: "Gym Access", b: true, p: true, e: true },
                  { f: "Cardio + Strength", b: true, p: true, e: true },
                  { f: "Locker Access", b: true, p: true, e: true },
                  { f: "Diet Guidance", b: false, p: true, e: true },
                  { f: "Personal Trainer", b: false, p: false, e: true },
                  { f: "Priority Support", b: false, p: false, e: true }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-zinc-800/20 transition-colors">
                    <td className="p-6 text-zinc-300 font-medium">{row.f}</td>
                    <td className="p-6">{row.b ? <CheckCircle2 className="text-green-500" size={20} /> : '-'}</td>
                    <td className="p-6">{row.p ? <CheckCircle2 className="text-green-500" size={20} /> : '-'}</td>
                    <td className="p-6">{row.e ? <CheckCircle2 className="text-green-500" size={20} /> : '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-zinc-900/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-orbitron font-bold mb-4">FREQUENTLY ASKED</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, i) => (
              <div key={i} className="p-8 bg-zinc-900 border border-zinc-800 rounded-2xl">
                <div className="flex items-start gap-4">
                  <HelpCircle className="text-orange-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold mb-3">{faq.q}</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
