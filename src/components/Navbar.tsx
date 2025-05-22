import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navLinks = [
    { name: "Expected Outcomes", href: "#why-join" },
    { name: "Schedule", href: "#schedule" },
    { name: "Rewards", href: "#rewards" },
    { name: "Tools", href: "#tools" },
    { name: "Who Can Join", href: "#who-can-join" },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className={`text-xl font-bold ${isScrolled ? 'bg-clip-text text-transparent bg-gradient-to-r from-[#0969DA] via-[#0969DA] to-[#FF0080]' : 'text-white'}`}>
                <span className="text-vibe-blue">AI Day</span> <span className="text-vibe-pink">Vibe Coding</span>
              </span>
              <span className={`ml-2 px-3 py-1 text-xs font-medium rounded-full ${isScrolled ? 'bg-gray-900 text-white' : 'bg-white/20 text-white'}`}>
              code the vibe
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                link.href.startsWith('/') ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-vibe-blue' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-vibe-blue' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </button>
                )
              ))}
              <Button
                onClick={() => scrollToSection("#register")}
                className={isScrolled ? "bg-gradient-to-r from-vibe-blue to-vibe-pink text-white shadow-md" : "bg-white/10 text-white border border-white/30 hover:bg-white/20"}
              >
                Register Now
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled ? 'text-gray-700 hover:text-vibe-blue' : 'text-white hover:bg-white/10'}`}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-vibe-blue w-full text-left"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-vibe-blue w-full text-left"
                >
                  {link.name}
                </button>
              )
            ))}
            <Button
              onClick={() => scrollToSection("#register")}
              className="bg-gradient-to-r from-vibe-blue to-vibe-pink text-white w-full mt-4"
            >
              Register Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
