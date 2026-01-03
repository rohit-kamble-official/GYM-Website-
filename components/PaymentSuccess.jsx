import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle, Download, Share2, Home, Calendar, CreditCard } from 'lucide-react';

const PaymentSuccess = () => {
  const location = useLocation();
  const transaction = location.state?.transaction;

  if (!transaction) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">No Transaction Data</h1>
          <Link to="/" className="bg-orange-600 px-6 py-2 rounded-lg">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12 animate-in zoom-in duration-700">
          <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={60} className="text-green-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-orbitron font-black mb-4">PAYMENT SUCCESS!</h1>
          <p className="text-zinc-400 text-lg">Welcome to the family, {transaction.userName.split(' ')[0]}!</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-700 delay-200">
          <div className="p-8 border-b border-zinc-800">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <CreditCard className="text-orange-500" size={24} />
              TRANSACTION DETAILS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-zinc-500 text-xs uppercase font-black tracking-widest mb-1">Transaction ID</p>
                <p className="font-mono text-zinc-100">{transaction.transactionId}</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase font-black tracking-widest mb-1">Date & Time</p>
                <p className="text-zinc-100 flex items-center gap-2">
                  <Calendar size={14} className="text-zinc-500" />
                  {transaction.date}
                </p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase font-black tracking-widest mb-1">Plan Enrolled</p>
                <p className="text-zinc-100 font-bold">{transaction.planName} Membership</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase font-black tracking-widest mb-1">Amount Paid</p>
                <p className="text-orange-500 font-black text-xl">INR {transaction.amount.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-zinc-800/20">
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed text-center">
              Your receipt has been generated and downloaded. We have also sent a confirmation to your email 
              <span className="text-zinc-200 font-medium"> {transaction.userEmail}</span>. 
              Show this receipt at the gym reception to get your membership card.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                <Download size={20} />
                Download Again
              </button>
              <Link to="/" className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                <Home size={20} />
                Go to Homepage
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-500 mb-4">Share your commitment with friends!</p>
          <div className="flex justify-center gap-4">
             <button className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:text-orange-500 transition-colors">
               <Share2 size={20} />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
