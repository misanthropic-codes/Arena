import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="relative w-full h-[50px] bg-[#FFFFF6] px-4 md:px-8 lg:px-16">
      {/* Logo Section */}
      <div className="absolute w-[80px] h-[24px] left-4 md:left-8 lg:left-16 top-1/2 -translate-y-1/2">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={80}
          height={24}
          className="absolute -left-[44px] top-0"
        />
      </div>

      {/* Navigation Links */}
      <div className="absolute flex flex-row items-center space-x-4 md:space-x-6 lg:space-x-8 w-auto h-[29px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
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
            className="font-['Instrument_Sans'] font-medium text-[24px] leading-[29px] text-center text-black"
          >
            {name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;