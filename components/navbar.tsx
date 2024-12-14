/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      'header',
      { y: -100 },
      { y: 0, duration: 1, ease: 'bounce.out' }
    );
  }, []);

  return (
    <motion.header
      className="bg-white shadow-sm sticky top-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4 flex justify-between items-center">
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none mr-4"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <Link href="/" className="flex items-center">
            <h2 className='gap-2 font-bold text-2xl sm:text-3xl lg:text-4xl text-black'>Eventium</h2>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between w-full space-x-6 xl:space-x-12">
          <Link href="/" className="flex items-center">
            <h2 className='gap-2 font-bold text-2xl sm:text-3xl lg:text-4xl text-black'>Eventium</h2>
          </Link>
          <div className="flex items-center space-x-6 xl:space-x-12">
            <NavLinks />
            <Link href="#download" className="inline-flex hover:border-green-500 items-center justify-center border-2 border-black rounded-full py-2 px-4 lg:py-3 lg:px-6 bg-black text-white hover:text-black hover:bg-white transition-all duration-200 ease-in-out transform hover:scale-105">
              <span className="flex flex-col items-start leading-none">
                <p className="text-base lg:text-lg xl:text-xl font-bold">Download App</p>
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Download Button */}
        <div className="lg:hidden">
          <Link href="#download" className="inline-flex hover:border-green-500 items-center justify-center border-2 border-black rounded-full py-2 px-4 bg-black text-black hover:text-black hover:bg-white transition-all duration-200 ease-in-out transform hover:scale-105">
            <span className="flex flex-col items-start leading-none">
              <p className="text-sm font-bold">Download</p>
            </span>
          </Link>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white text-center "
          >
            <div className="px-6 pt-6 pb-6 space-y-1">
              <NavLinks />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const NavLinks: React.FC = () => (
  <nav className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-6">
    <ul className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-6">
      <li><NavLink href="/">Home</NavLink></li>
      <li><NavLink href="/systems/services">Services</NavLink></li>
      {/* <li><NavLink href="/systems/How-It-Works">How It Works</NavLink></li> */}
      <li><NavLink href="/systems/about-us">About</NavLink></li>
      <li><NavLink href="/systems/contact">Contact</NavLink></li>
      <li><NavLink href="/systems/gallery">Gallery</NavLink></li>
    </ul>
  </nav>
);

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <motion.div whileHover={{ scale: 1.1 }}>
    <Link 
      href={href} 
      className="block lg:inline-block text-sm items-center justify-center lg:text-base xl:text-lg text-black hover:text-black transition-colors duration-200 font-medium"
    >
      {children}
    </Link>
  </motion.div>
);



export default Navbar;
