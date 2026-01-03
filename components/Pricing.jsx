import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MEMBERSHIP_PLANS } from '../constants';
import { Check, ShieldCheck, Loader2 } from 'lucide-react';
import { generateReceiptPDF } from '../services/receiptService';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    if (!selectedPlan) return;

    setLoading(true);
    
    // Simulate payment processing delay
    setTimeout(() => {
      const transaction = {
        transactionId: `TXN-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        date: new Date().toLocaleDateString(),
        planName: selectedPlan.name,
        amount: selectedPlan.price,
        userName: userDetails.name,
        userEmail: userDetails.email,
        userPhone: userDetails.phone
      };

      // 1. Generate PDF
      generateReceiptPDF(transaction);

      // 2. Save to "Database" (LocalStorage for demo)
      const existingHistory = JSON.parse(localStorage.getItem('m_fitness_history') || '[]');
      localStorage.setItem('m_fitness_history', JSON.stringify([...existingHistory, transaction]));

      // 3. Clear state and redirect
      setLoading(false);
      setSelectedPlan(null);
      navigate('/success', { state: { transaction } });
    }, 2500);
  };

  return (
    <section id="pricing" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Flexible Options</span>
          <h2 className="text-4xl md:text-5xl font-orbitron font-black mt-4 mb-4">MEMBERSHIP PLANS</h2>
          <p className="text-zinc-500 max-w-xl mx-auto">Choose a plan that fits your goals and budget. No hidden fees, just results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MEMBERSHIP_PLANS.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative flex flex-col p-10 rounded-3xl border-2 transition-all duration-500 ${plan.popular ? 'bg-zinc-900 border-orange-600 scale-105 z-10' : 'bg-zinc-900/40 border-zinc-800'}`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                  Best Value
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-orbitron font-bold mb-2 uppercase">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">₹{plan.price.toLocaleString()}</span>
                  <span className="text-zinc-500 text-sm">/ {plan.duration}</span>
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={18} className="text-orange-500 flex-shrink-0" />
                    <span className="text-zinc-300 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setSelectedPlan(plan)}
                className={`w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${plan.popular ? 'bg-orange-600 hover:bg-orange-700 text-white' : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-100'}`}
              >
                Join Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-zinc-950/90 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-zinc-800 w-full max-w-md rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="bg-orange-600 p-6 text-white flex justify-between items-center">
              <div>
                <h4 className="font-orbitron font-bold text-xl uppercase">Checkout</h4>
                <p className="text-sm opacity-80">{selectedPlan.name} Plan • ₹{selectedPlan.price.toLocaleString()}</p>
              </div>
              <button 
                onClick={() => setSelectedPlan(null)}
                className="text-white hover:rotate-90 transition-transform"
              >
                <Icons.X />
              </button>
            </div>

            <form onSubmit={handlePayment} className="p-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-500 mb-2">Full Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="John Doe"
                    value={userDetails.name}
                    onChange={(e) => setUserDetails({...userDetails, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-500 mb-2">Email Address</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="john@example.com"
                    value={userDetails.email}
                    onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-500 mb-2">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="+91 00000 00000"
                    value={userDetails.phone}
                    onChange={(e) => setUserDetails({...userDetails, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="p-4 bg-zinc-800/50 rounded-xl border border-dashed border-zinc-700">
                <div className="flex items-center gap-3 text-sm text-zinc-400">
                  <ShieldCheck className="text-green-500" size={20} />
                  Secure payment gateway powered by Razorpay
                </div>
              </div>

              <button 
                disabled={loading}
                type="submit"
                className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-black uppercase tracking-widest transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Processing...
                  </>
                ) : `Pay ₹${selectedPlan.price.toLocaleString()}`}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

// Internal icon import for modal close button
const Icons = {
  X: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
    </svg>
  )
};

export default Pricing;
