"use client";

import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Corbin Lazarone</h1>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 transition-transform duration-200 ease-in-out" 
                 style={{ transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                 fill="none" 
                 strokeLinecap="round" 
                 strokeLinejoin="round" 
                 strokeWidth="2" 
                 viewBox="0 0 24 24" 
                 stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('about')} className="hover:text-purple-800 transition-colors">About</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-purple-800 transition-colors">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-purple-800 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-purple-800 transition-colors">Contact</button>
          </div>
        </div>

        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
