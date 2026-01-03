import React, { useState, useRef, useEffect } from 'react';
import { GeminiService } from '../services/geminiService';
import { Bot, Send, X, Minimize2, Maximize2, Loader2, Dumbbell } from 'lucide-react';

const FitnessAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {role: 'user' || 'bot', text: "Hey warrior! I'm your Maharudraya AI coach. Need a workout tip or diet advice today?"}
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const gemini = useRef(null);

  useEffect(() => {
    if (!gemini.current) {
      gemini.current = new GeminiService();
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, {role: 'user', text: userText}]);
    setIsLoading(true);

    const response = await gemini.current?.getFitnessAdvice(userText);

    setMessages(prev => [...prev, {role: 'bot', text: response || "Something went wrong. Let's try again!"}]);
    setIsLoading(false);
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 bg-orange-600 text-white p-4 rounded-full shadow-2xl hover:bg-orange-700 transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center group"
      >
        <Bot size={28} />
        <span className="absolute right-full mr-4 bg-zinc-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-zinc-800">
          FITNESS AI ASSISTANT
        </span>
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-[100] w-[350px] sm:w-[400px] bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col transition-all duration-300 animate-in slide-in-from-bottom-5 ${isMinimized ? 'h-16 overflow-hidden' : 'h-[500px]'}`}>
      <div className="p-4 bg-orange-600 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Dumbbell className="text-white" size={20} />
          <h3 className="font-orbitron font-bold text-sm tracking-widest text-white">AI COACH</h3>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setIsMinimized(!isMinimized)} className="text-white hover:bg-white/10 p-1 rounded transition-colors">
            {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
          </button>
          <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/10 p-1 rounded transition-colors">
            <X size={18} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-orange-600 text-white rounded-tr-none' : 'bg-zinc-800 text-zinc-300 rounded-tl-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-3 rounded-2xl rounded-tl-none flex items-center gap-2 text-zinc-500 text-sm">
                  <Loader2 className="animate-spin" size={16} />
                  Coaching is thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-4 border-t border-zinc-800">
            <div className="relative">
              <input 
                type="text"
                placeholder="Ask about diet, workout, etc..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 pr-12 transition-colors"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-orange-500 hover:text-orange-400 disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default FitnessAssistant;
