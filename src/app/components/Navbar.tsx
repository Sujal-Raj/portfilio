"use client";
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Home', href: '/home' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/project' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Services', href: '/servicess' },
    { name: 'Contact', href: '/contact' },
    { name: 'Client', href: '/clientpage' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Section */}
            <div className="flex items-center space-x-4 group">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <span className="text-black font-bold text-xl">L</span>
              </div>
              <div className="text-white font-bold text-xl tracking-tight">
                Logo
              </div>
            </div>

            {/* Center Section - Schedule Call Button and Company Name */}
            <div className="flex items-center space-x-8">
       
              {/* Company Name */}
              <div className="hidden md:block ">
                <h1 className="text-white text-2xl font-light tracking-wider">
                  <span className="font-bold text-yellow-400">Your</span>Company
                </h1>
              </div>


                     {/* Schedule Call Button */}
                    
              <a
                href="/schedule"
                className="group relative px-6 py-2.5 bg-transparent border-2 border-yellow-400 rounded-full text-yellow-400 font-semibold text-sm tracking-wide uppercase transition-all duration-300 hover:bg-yellow-400 hover:text-black overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Schedule a Call</span>
                </span>
                <div className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>

            </div>

            {/* Hamburger Menu */}
            <div className="relative">
              <button
                onClick={toggleMenu}
                className="w-12 h-12 flex flex-col items-center justify-center space-y-1.5 group focus:outline-none"
                aria-label="Toggle menu"
              >
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : 'group-hover:w-8'
                }`}></span>
                <span className={`w-6 h-0.5 bg-yellow-400 transition-all duration-300 ease-out ${
                  isMenuOpen ? 'opacity-0' : 'group-hover:w-8'
                }`}></span>
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : 'group-hover:w-8'
                }`}></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 transition-all duration-500 ease-out ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-black/95 backdrop-blur-lg"></div>
        
        <div className={`relative h-full flex flex-col justify-center items-center transform transition-all duration-700 ease-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Menu Items */}
          <div className="space-y-8 text-center">
            {menuItems.map((item, index) => (
              <div
                key={item.name}
                className={`transform transition-all duration-500 ease-out ${
                  isMenuOpen 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <a
                  href={item.href}
                  className="group relative text-4xl md:text-6xl font-light text-white hover:text-yellow-400 transition-colors duration-300 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-0 bg-yellow-400/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></span>
                </a>
              </div>
            ))}
          </div>

          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center text-white hover:text-yellow-400 transition-colors duration-300"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Social Links */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-6 transition-all duration-700 ease-out ${
            isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '600ms' }}>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.566-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;