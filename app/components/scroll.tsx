"use client";
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg 
    viewBox="0 0 32 32" 
    className="w-6 h-6 fill-current"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.0002 8.99997C21.2002 7.19997 18.7002 6.19997 16.1002 6.19997C10.7002 6.19997 6.30023 10.6 6.30023 16C6.30023 17.9 6.90023 19.7 7.90023 21.3L6.20023 26L11.0002 24.3C12.5002 25.2 14.2002 25.7 16.0002 25.7C21.4002 25.7 25.8002 21.3 25.8002 15.9C25.8002 13.3 24.8002 10.8 23.0002 9.09997V8.99997ZM16.1002 24C14.5002 24 12.9002 23.5 11.5002 22.5L11.2002 22.3L8.30023 23.3L9.30023 20.5L9.00023 20.2C7.90023 18.7 7.30023 17.4 7.30023 16C7.30023 11.2 11.2002 7.29997 16.0002 7.29997C18.2002 7.29997 20.3002 8.19997 21.9002 9.69997C23.4002 11.2 24.3002 13.3 24.3002 15.5C24.4002 20.3 20.9002 24 16.1002 24ZM20.1002 17.9C19.8002 17.8 18.5002 17.2 18.3002 17.1C18.0002 17 17.8002 17 17.6002 17.3C17.4002 17.6 16.9002 18.2 16.7002 18.4C16.5002 18.6 16.4002 18.6 16.1002 18.5C15.8002 18.4 14.9002 18.1 13.9002 17.2C13.1002 16.5 12.5002 15.6 12.4002 15.3C12.2002 15 12.4002 14.8 12.5002 14.7C12.6002 14.6 12.8002 14.4 12.9002 14.2C13.0002 14 13.1002 13.9 13.2002 13.7C13.3002 13.5 13.2002 13.3 13.1002 13.2C13.0002 13.1 12.5002 11.8 12.2002 11.2C12.0002 10.6 11.7002 10.7 11.5002 10.7C11.3002 10.7 11.1002 10.7 10.9002 10.7C10.7002 10.7 10.4002 10.8 10.1002 11.1C9.80023 11.4 9.20023 12 9.20023 13.3C9.20023 14.6 10.1002 15.8 10.2002 16C10.3002 16.2 12.4002 19.4 15.6002 20.5C16.2002 20.8 16.7002 20.9 17.1002 21C17.7002 21.2 18.3002 21.1 18.7002 21C19.2002 20.9 20.2002 20.3 20.5002 19.6C20.7002 18.9 20.7002 18.3 20.6002 18.2C20.5002 18.1 20.3002 18 20.1002 17.9Z"/>
  </svg>
);

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = '254790520501';

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed right-4 bottom-4 flex flex-col gap-4 z-50">
      <button
        onClick={openWhatsApp}
        className="p-3 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-400"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </button>
      
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;