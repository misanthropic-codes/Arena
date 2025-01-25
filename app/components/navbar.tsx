"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative w-full bg-[#FFFFF6] px-4 md:px-8 lg:px-16 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center justify-between h-[60px]">
        {/* Logo */}
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

        {/* Hamburger Menu Button */}
        <div className="block md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black focus:outline-none"
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

        {/* Navigation Links for Larger Screens */}
        <div className="hidden md:flex items-center space-x-6">
          {[
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Services', href: '/services' },
            { name: 'Gallery', href: '/gallery' },
            { name: 'Contact', href: '/contact' },
          ].map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="font-['Instrument_Sans'] font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] text-center text-black hover:text-[#004D00] transition-colors duration-300"
            >
              {name}
            </a>
          ))}
        </div>
      </div>

      {/* Dropdown Menu for Mobile Screens */}
      {menuOpen && (
        <div className="flex flex-col items-start mt-2 space-y-2 bg-[#FFFFF6] p-4 shadow-md md:hidden">
          {[
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Services', href: '/services' },
            { name: 'Gallery', href: '/gallery' },
            { name: 'Contact', href: '/contact' },
          ].map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="font-['Instrument_Sans'] font-medium text-[16px] leading-[22px] text-black hover:text-[#004D00] transition-colors duration-300 w-full"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              {name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
