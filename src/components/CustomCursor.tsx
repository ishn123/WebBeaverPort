"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isHoveringText, setIsHoveringText] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleLinkHoverIn = (e: Event) => {
      setIsHoveringLink(true);
      
      // Get data attribute for custom cursor text if available
      const target = e.target as HTMLElement;
      const cursorTextAttr = target.getAttribute('data-cursor-text');
      if (cursorTextAttr) {
        setCursorText(cursorTextAttr);
        setIsHoveringText(true);
      }
    };
    
    const handleLinkHoverOut = () => {
      setIsHoveringLink(false);
      setIsHoveringText(false);
      setCursorText("");
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Add event listeners for clickable elements
    const addHoverListeners = () => {
      const clickableElements = document.querySelectorAll('a, button, input[type="button"], input[type="submit"], .clickable');
      clickableElements.forEach(element => {
        element.addEventListener('mouseenter', handleLinkHoverIn);
        element.addEventListener('mouseleave', handleLinkHoverOut);
      });
    };
    
    // Initial setup + MutationObserver to handle dynamically added elements
    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    // Hide the default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      document.querySelectorAll('a, button, input[type="button"], input[type="submit"], .clickable').forEach(element => {
        element.removeEventListener('mouseenter', handleLinkHoverIn);
        element.removeEventListener('mouseleave', handleLinkHoverOut);
      });
      
      observer.disconnect();
      document.body.style.cursor = 'auto';
    };
  }, []);

  // Draw a beaver tooth cursor
  const renderBeaverCursor = () => {
    if (isHoveringLink) {
      return (
        // Beaver face when hovering
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="15" fill="#333333" />
          <circle cx="10" cy="12" r="1.5" fill="white" />
          <circle cx="20" cy="12" r="1.5" fill="white" />
          <path d="M12 20C13.3333 21.5 16.7 21.5 18 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="13" y="16" width="2" height="4" fill="white" />
          <rect x="16" y="16" width="2" height="4" fill="white" />
        </svg>
      );
    }
    
    return (
      // Simple beaver tooth cursor when not hovering
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="0" width="4" height="10" fill="white" />
        <rect x="0" y="3" width="10" height="4" fill="white" />
      </svg>
    );
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50"
        style={{
          x: mousePosition.x - (isHoveringLink ? 15 : 5),
          y: mousePosition.y - (isHoveringLink ? 15 : 5),
        }}
        animate={{
          scale: isClicking ? 0.9 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      >
        {renderBeaverCursor()}
      </motion.div>
      
      {/* Secondary cursor ring - ripple effect like water */}
      {!isHoveringLink && (
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-40 rounded-full border border-primary/30"
          style={{
            height: 40,
            width: 40,
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
          }}
          animate={{
            scale: isClicking ? [1, 1.2, 1] : 1,
            opacity: isClicking ? [0.3, 0.1, 0.3] : 0.3,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut"
          }}
        />
      )}
      
      {/* Text cursor for special elements */}
      {isHoveringText && (
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-50 bg-primary text-background px-3 py-1.5 rounded-sm"
          style={{
            x: mousePosition.x + 16,
            y: mousePosition.y - 12,
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        >
          <span className="text-xs font-medium whitespace-nowrap">{cursorText}</span>
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;
