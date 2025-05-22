import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

type AnimatedBackgroundProps = {
  children: React.ReactNode;
  variant?: 'blobs' | 'grid' | 'dots' | 'minimal';
  className?: string;
};

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  children, 
  variant = 'blobs',
  className = '' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create a grid pattern animation with GSAP
  useEffect(() => {
    if (variant !== 'grid' || !containerRef.current) return;
    
    const importGSAP = async () => {
      const { gsap } = await import('gsap');
      
      // Create grid elements dynamically
      const container = containerRef.current;
      const gridSize = 20;
      const dotSize = 4;
      
      // Clear existing dots if any
      const existingDots = container.querySelectorAll('.grid-dot');
      existingDots.forEach(dot => dot.remove());
      
      // Calculate how many dots to create based on container size
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      
      const cols = Math.ceil(containerWidth / gridSize);
      const rows = Math.ceil(containerHeight / gridSize);
      
      // Create and position dots
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const dot = document.createElement('div');
          dot.className = 'grid-dot absolute rounded-full opacity-20 bg-vibe-blue';
          dot.style.width = `${dotSize}px`;
          dot.style.height = `${dotSize}px`;
          dot.style.left = `${j * gridSize}px`;
          dot.style.top = `${i * gridSize}px`;
          
          container.appendChild(dot);
          
          // Animate with GSAP
          gsap.to(dot, {
            opacity: 0.6,
            scale: 1.5,
            duration: 1 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: Math.random() * 2
          });
        }
      }
    };
    
    importGSAP();
    
    // Clean up on component unmount
    return () => {
      if (containerRef.current) {
        const dots = containerRef.current.querySelectorAll('.grid-dot');
        dots.forEach(dot => dot.remove());
      }
    };
  }, [variant]);

  if (variant === 'blobs') {
    return (
      <div className={`relative overflow-hidden ${className}`} ref={containerRef}>
        <motion.div 
          className="blob g-blue w-64 h-64"
          animate={{
            x: [0, 100, 50, 200, 0],
            y: [0, 50, 100, 50, 0],
            scale: [1, 1.2, 1, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{ 
            top: '10%', 
            left: '10%' 
          }}
        />
        
        <motion.div 
          className="blob g-red w-80 h-80"
          animate={{
            x: [0, -100, -50, -150, 0],
            y: [0, 100, 50, 150, 0],
            scale: [1, 0.8, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{ 
            bottom: '10%', 
            right: '10%' 
          }}
        />
        
        <motion.div 
          className="blob g-yellow w-72 h-72"
          animate={{
            x: [0, 150, 100, 50, 0],
            y: [0, 50, 100, 50, 0],
            scale: [1, 1.1, 0.9, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{ 
            top: '40%', 
            right: '20%' 
          }}
        />
        
        <motion.div 
          className="blob g-green w-60 h-60"
          animate={{
            x: [0, -50, -100, -50, 0],
            y: [0, -100, -50, -150, 0],
            scale: [1, 0.9, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{ 
            bottom: '30%', 
            left: '20%' 
          }}
        />
        
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
  
  if (variant === 'dots') {
    return (
      <div className={`relative dot-pattern ${className}`} ref={containerRef}>
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
  
  if (variant === 'grid') {
    return (
      <div className={`relative ${className}`} ref={containerRef}>
        {/* Grid dots will be injected dynamically via JS */}
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
  
  // Minimal variant
  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <motion.div 
        className="absolute top-10 right-10 w-24 h-24 rounded-full bg-vibe-blue opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />
      <motion.div 
        className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-vibe-yellow opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedBackground;
