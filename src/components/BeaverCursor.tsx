"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BeaverCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleLinkHoverIn = (e: Event) => {
      setIsHoveringLink(true);
      const target = e.target as HTMLElement;
      const cursorTextAttr = target.getAttribute('data-cursor-text');
      if (cursorTextAttr) {
        setCursorText(cursorTextAttr);
      }
    };
    
    const handleLinkHoverOut = () => {
      setIsHoveringLink(false);
      setCursorText("");
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    const clickableElements = document.querySelectorAll('a, button, input[type="button"], input[type="submit"], .clickable');
    clickableElements.forEach(element => {
      element.addEventListener('mouseenter', handleLinkHoverIn);
      element.addEventListener('mouseleave', handleLinkHoverOut);
    });

    // Hide the default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      clickableElements.forEach(element => {
        element.removeEventListener('mouseenter', handleLinkHoverIn);
        element.removeEventListener('mouseleave', handleLinkHoverOut);
      });
      
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-50">
      {/* Main beaver cursor */}
      <motion.div
        className="absolute"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        animate={{
          scale: isClicking ? 0.8 : 1,
          rotate: isClicking ? 15 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      >
        <div className="relative w-8 h-8">
          {/* Beaver body - more sophisticated shape */}
          <div className="absolute w-6 h-4 rounded-[60%_60%_70%_70%] bg-mono-dark left-1 top-1"></div>
          
          {/* Beaver head */}
          <div className="absolute w-4 h-3.5 rounded-full bg-mono-dark left-2 -top-0.5"></div>
          
          {/* Beaver eyes */}
          <div className="absolute w-0.5 h-0.5 rounded-full bg-white left-3 top-0.5 opacity-80"></div>
          <div className="absolute w-0.5 h-0.5 rounded-full bg-white left-5 top-0.5 opacity-80"></div>
          
          {/* Beaver nose */}
          <div className="absolute w-1.5 h-1 rounded-[70%] bg-accent2-dark left-3.5 top-1.2"></div>
          
          {/* Beaver teeth */}
          <div className="absolute w-[3px] h-[4px] bg-white left-[18px] top-[10px]"></div>
          <div className="absolute w-[3px] h-[4px] bg-white left-[14px] top-[10px]"></div>
          
          {/* Beaver tail */}
          <div className="absolute w-3 h-1.5 rounded-sm bg-mono-dark left-2.5 top-5 transform rotate-180 rounded-t-sm"></div>
        </div>
      </motion.div>
      
      {/* Circle for hover state */}
      {isHoveringLink && (
        <motion.div
          className="rounded-full bg-primary/30 border border-primary/70 flex items-center justify-center text-xs font-medium text-white"
          style={{
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            width: 48,
            height: 48,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
          }}
        >
          {cursorText && (
            <span className="text-center text-white opacity-100 text-xs whitespace-nowrap">
              {cursorText}
            </span>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default BeaverCursor;
