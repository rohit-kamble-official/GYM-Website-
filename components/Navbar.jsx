import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 ${isScrolled || isOpen ? 'bg-zinc-950/90 backdrop-blur-lg border-b border-zinc-800 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-orange-600 p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <Dumbbell className="text-white" size={24} />
          </div>
          <span className="font-orbitron text-xl font-black tracking-tighter">
            MAHARUDRAYA<span className="text-orange-500">FIT</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm font-medium transition-all uppercase tracking-widest relative group ${isActive(link.path) ? 'text-orange-500' : 'text-zinc-300 hover:text-orange-500'}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform ${isActive(link.path) ? 'scale-x-100' : ''}`}></span>
            </Link>
          ))}
          <Link 
            to="/pricing" 
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(234,88,12,0.2)]"
          >
            JOIN NOW
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-zinc-100" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300 h-screen">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-2xl font-orbitron font-black ${isActive(link.path) ? 'text-orange-500' : 'text-zinc-300'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/pricing" 
            className="bg-orange-600 text-center text-white py-4 rounded-xl font-bold text-lg"
            onClick={() => setIsOpen(false)}
          >
            JOIN NOW
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
