"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import ThreeScene from './ThreeScene';
import { ArrowDown } from 'lucide-react';
import BeaverCursor from './BeaverCursor';

// Text animation variants
const letterVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { 
      delay: i * 0.05, 
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1]
    }
  })
};

const Hero = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollY, setLastScrollY] = useState(0);

  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  // Scroll-driven animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
  // Split text functions for character animation
  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <motion.span
        key={i}
        custom={i}
        variants={letterVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="inline-block"
        style={{ 
          willChange: 'transform', 
          display: char === ' ' ? 'inline' : 'inline-block',
          width: char === ' ' ? '0.5em' : 'auto'
        }}
      >
        {char}
      </motion.span>
    ));
  };

  // Text phrases for entrance animation
  const title = "WEBEAVER";
  const subtitle = "DIGITAL CRAFTSMANSHIP";

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen pt-20 overflow-hidden bg-background"
    >
      {/* Add the beaver cursor component */}
      <BeaverCursor />
      
      {/* Decorative background pattern - beaver dam pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
          {Array.from({ length: 13 }).map((_, i) => (
            <div 
              key={`v-${i}`} 
              className="w-px h-full bg-mono-dark/[0.03]"
              style={{ left: `${i * 8.33}%` }}
            />
          ))}
          {Array.from({ length: 13 }).map((_, i) => (
            <div 
              key={`h-${i}`} 
              className="h-px w-full bg-gradient-to-r from-mono-dark/[0.01] via-mono-dark/[0.03] to-mono-dark/[0.01]"
              style={{ top: `${i * 8.33}%` }}
            />
          ))}
        </div>
        
        {/* Abstract beaver dam pattern in the background */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23333333' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      
      <motion.div 
        className="container mx-auto px-4 flex flex-col h-[calc(100vh-80px)]"
        style={{ opacity, scale, y }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          {/* Left content - text and buttons */}
          <motion.div 
            className="flex flex-col justify-center items-start z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            ref={ref}
          >
            {/* Beaver logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <div className="w-16 h-16 relative">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90Z" fill="#333333" />
                  <path d="M35 40C37.7614 40 40 37.7614 40 35C40 32.2386 37.7614 30 35 30C32.2386 30 30 32.2386 30 35C30 37.7614 32.2386 40 35 40Z" fill="white" />
                  <path d="M65 40C67.7614 40 70 37.7614 70 35C70 32.2386 67.7614 30 65 30C62.2386 30 60 32.2386 60 35C60 37.7614 62.2386 40 65 40Z" fill="white" />
                  <path d="M40 60C45 65 55 65 60 60" stroke="white" strokeWidth="3" strokeLinecap="round" />
                  <rect x="45" y="50" width="4" height="8" fill="white" />
                  <rect x="52" y="50" width="4" height="8" fill="white" />
                  <path d="M75 25C85 15 95 20 95 20C95 20 85 30 75 25Z" fill="#333333" />
                  <path d="M25 25C15 15 5 20 5 20C5 20 15 30 25 25Z" fill="#333333" />
                  <path d="M50 90C50 90 40 100 30 90C20 80 40 75 50 90Z" fill="#333333" />
                </svg>
              </div>
            </motion.div>
            
            <div className="overflow-hidden mb-2">
              <motion.span 
                className="block text-sm tracking-[0.3em] font-light text-mono-dark/70" 
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : { y: 100 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                EXPERTLY CRAFTED WEBSITES
              </motion.span>
            </div>
            
            <div className="overflow-hidden mb-2">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-2 text-primary">
                {splitText(title)}
              </h1>
            </div>
            
            <div className="overflow-hidden">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-primary">
                {splitText(subtitle)}
              </h1>
            </div>
            
            <motion.div 
              className="h-px w-16 bg-primary mb-6"
              initial={{ width: 0 }}
              animate={isInView ? { width: 64 } : { width: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            />
            
            <motion.p
              className="text-lg text-mono-dark/80 max-w-md mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              We build dams of digital excellence. Creating thoughtful web experiences with precision and care, just like a beaver crafts its home.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <a 
                href="#projects" 
                className="relative group overflow-hidden border-2 border-primary px-8 py-3 inline-flex items-center gap-2"
                data-cursor-text="View Work"
              >
                <span className="relative z-10 text-primary group-hover:text-background transition-colors duration-300">
                  View Our Work
                </span>
                <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
              </a>
              
              <a 
                href="#contact" 
                className="relative group border-2 border-mono-dark/10 px-8 py-3 hover:border-mono-dark/30 transition-colors duration-300"
                data-cursor-text="Get in Touch"
              >
                <span className="text-mono-dark/80 group-hover:text-mono-dark transition-colors duration-300">
                  Contact
                </span>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right content - 3D scene */}
          <motion.div 
            className="flex items-center justify-center z-0 hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <ThreeScene />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.p className="text-mono-dark/40 text-sm tracking-wide mb-2">SCROLL</motion.p>
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              repeatType: "loop" 
            }}
          >
            <ArrowDown className="w-6 h-6 text-mono-dark/50" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
