"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-md py-3 shadow-sm' 
          : 'py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between flex">
        {/* Logo */}
        <motion.a 
          href="#" 
          className="flex items-center space-x-3" 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="font-bold text-xl tracking-tight">
            <span className="text-primary">WEBEAVER</span>
          </div>
        </motion.a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="px-5 py-2 text-mono-dark/80 hover:text-primary transition-colors duration-300 relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {item.name}
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Contact Button - Desktop */}
        <motion.div 
          className="hidden md:block"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
        >
          <a 
            href="#contact"
            className="relative inline-flex h-10 overflow-hidden rounded-sm p-[1px]"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#333333_50%,#000000_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm bg-background px-5 py-1 text-sm font-medium backdrop-blur-3xl">
              Contact
            </span>
          </a>
        </motion.div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-mono-dark p-2"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 bg-background z-40 pt-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-8 bg-white">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="flex justify-between items-center py-4 text-primary text-2xl font-medium border-b border-mono-light/20"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <span>{item.name}</span>
                  <ChevronRight size={20} />
                </motion.a>
              ))}
              
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
              >
                <a 
                  href="#contact" 
                  className="block w-full py-4 text-center bg-primary text-background font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
