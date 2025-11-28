import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { APP_ENG_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Amenities', path: '/amenities' },
  ];

  const headerClass = `fixed w-full z-40 transition-all duration-300 ${
    scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4 text-gray-800' : 'bg-transparent py-6 text-white'
  }`;

  return (
    <nav className={headerClass}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-serif font-bold tracking-wider z-50">
          {APP_ENG_NAME}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium tracking-wide hover:text-brand-accent transition ${
                location.pathname === link.path && scrolled ? 'text-brand-primary' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-brand-accent hover:bg-brand-primary text-white text-sm px-6 py-2 rounded-full transition duration-300">
            예약하기
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} className={scrolled ? 'text-gray-800' : 'text-white'} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-brand-dark/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-opacity duration-300 md:hidden ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-2xl text-white font-serif hover:text-brand-accent"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-brand-accent text-white text-lg px-8 py-3 rounded-full mt-4">
            예약하기
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;