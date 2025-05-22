import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  const scrollToRegister = () => {
    const registerSection = document.querySelector('#register');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (    <section id="hero" className="relative min-h-screen w-full overflow-hidden code-pattern flex flex-col justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-vibe-github/95 to-vibe-github/85"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-white">AI Day: <span className="block sm:inline">Vibe Coding Edition</span> <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-vibe-blue to-vibe-pink">Code the Vibe</span></h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6">
              Unleash your inner dev with AI, GitHub, and modern stacks
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-2 text-gray-300 mb-8 space-y-3 sm:space-y-0">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span className="ml-1">Last week of May or First week of June</span>
              </div>
              <span className="hidden sm:inline mx-2">•</span>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="ml-1">10:30 AM - 5:30 PM</span>
              </div>
              <span className="hidden sm:inline mx-2">•</span>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 4a3 3 0 013-3h4a3 3 0 013 3v3a3 3 0 01-3 3H8a3 3 0 01-3-3V4zm3-1a1 1 0 00-1 1v3a1 1 0 001 1h4a1 1 0 001-1V4a1 1 0 00-1-1H8z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h8a1 1 0 011 1v7a5 5 0 01-10 0v-7z" clipRule="evenodd" />
                </svg>
                <span className="ml-1">Capgemini Hall, DIEMS</span>
              </div>
            </div>            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 px-4 sm:px-0">
              <Button onClick={scrollToRegister} className="button-primary text-base sm:text-lg w-full sm:w-auto">
                Register Now
              </Button>
              <Button variant="outline" className="bg-white/10 text-white border border-white/30 hover:bg-white/20 text-base sm:text-lg w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>          <div className="mt-10 sm:mt-16 animate-float px-4 sm:px-0">
            <div className="typing-container max-w-sm sm:max-w-lg mx-auto bg-black/50 p-3 sm:p-4 rounded-lg text-left overflow-x-auto">
              <div className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">// Build with the power of AI + modern stacks</div>
              <code className="text-vibe-blue typing-text text-sm sm:text-base">
                const aiDayVibe = () =&gt; console.log("Code the vibe!");
              </code>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,154.7C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
