"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  interface NavLink {
    name: string;
    id: string;
    type: 'scroll' | 'link';
  }

  const navLinks: NavLink[] = [
    { name: 'Home', id: '/', type: 'link' },
    { name: 'About', id: 'about', type: 'scroll' },
    { name: 'Services', id: 'services', type: 'scroll' },
    { name: 'Gallery', id: '/Gallery', type: 'link' },
    { name: 'Contact', id: 'contact', type: 'scroll' }
  ];

  const scrollToSection = (elementId: string): void => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setMenuOpen(false);
    }
  };

  const handleNavigation = (item: NavLink) => {
    if (item.type === 'scroll') {
      scrollToSection(item.id);
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <nav className="relative w-full bg-[#FFFFF6] px-4 md:px-8 lg:px-16 shadow-md">
      <div className="flex items-center justify-between h-[60px]">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={30}
            className="object-contain"
            priority={true}
          />
        </div>
        
        <div className="block md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((item) => (
            item.type === 'scroll' ? (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className="font-['Instrument_Sans'] font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] text-center text-black hover:text-[#004D00] transition-colors duration-300"
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={item.name}
                href={item.id}
                className="font-['Instrument_Sans'] font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] text-center text-black hover:text-[#004D00] transition-colors duration-300"
              >
                {item.name}
              </Link>
            )
          ))}
        </div>
      </div>
      
      {menuOpen && (
        <div className="flex flex-col items-start mt-2 space-y-2 bg-[#FFFFF6] p-4 shadow-md md:hidden">
          {navLinks.map((item) => (
            item.type === 'scroll' ? (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className="font-['Instrument_Sans'] font-medium text-[16px] leading-[22px] text-black hover:text-[#004D00] transition-colors duration-300 w-full text-left"
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={item.name}
                href={item.id}
                className="font-['Instrument_Sans'] font-medium text-[16px] leading-[22px] text-black hover:text-[#004D00] transition-colors duration-300 w-full text-left"
              >
                {item.name}
              </Link>
            )
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;