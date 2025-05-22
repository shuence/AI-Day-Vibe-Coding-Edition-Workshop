import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

const GoogleIOHero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const phrases = [
    "Build What's Next",
    "Code the Future",
    "Create Together",
    "Innovate with AI",
    "Connect Everything"
  ];
  
  const [currentPhrase, setCurrentPhrase] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [phrases.length]);

  // Parallax effect
  const yBg = scrollY * 0.3;
  
  return (
    <AnimatedBackground variant="blobs" className="min-h-screen flex items-center justify-center overflow-hidden">
      <div className="section relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-vibe-light px-6 py-2 rounded-full mb-6">
              <span className="text-vibe-blue font-semibold">Google I/O Connect 2025</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span>Welcome to </span>
            <span className="gradient-text">Google I/O</span>
            <br />
            <motion.div
              key={currentPhrase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-2 h-24"
            >
              {phrases[currentPhrase]}
            </motion.div>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-600"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join thousands of developers from around the world for talks, hands-on learning, and a first look at Google's latest developer products.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button 
              className="io-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Register Now</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </motion.button>
            
            <motion.button 
              className="io-button bg-white !text-vibe-blue border border-vibe-blue"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Watch Sessions</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
            </motion.button>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ y: -yBg }}
        >
          <div className="w-full h-32 rounded-xl shadow-lg bg-white p-4 overflow-hidden">
            <div className="flex gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-vibe-red"></div>
              <div className="w-3 h-3 rounded-full bg-vibe-yellow"></div>
              <div className="w-3 h-3 rounded-full bg-vibe-green"></div>
            </div>
            <div className="flex items-center gap-2 text-sm font-mono">
              <span className="text-vibe-green">&gt;</span>
              <div className="typing-container">
                <span className="typing-text">npm install @google-io/next-gen</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedBackground>
  );
};

export default GoogleIOHero;
