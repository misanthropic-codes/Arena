"use client"
import React, { useState } from "react";

const ContactForm = () => {
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);

  return (
    <div className="w-full max-w-[1512px] bg-[#FFFFF6] px-4 py-8 md:px-12 lg:px-24">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Image */}
        <div 
          className="w-full max-w-[362px] h-[362px] bg-cover bg-no-repeat mx-auto lg:mx-0"
          style={{ backgroundImage: `url(/contact.svg)` }}
        ></div>

        {/* Form Container */}
        <div className="w-full max-w-[430px] space-y-7">
          {/* Name Input */}
          <div className="relative w-full h-[44px] border-b border-[#004D00]">
            <label
              className={`absolute left-2 transition-all duration-300 text-[#004D00] font-normal text-[16px] leading-[20px] font-[Instrument_Sans] bg-[#FFFFF6] px-1 z-10 ${
                nameFocused ? "top-[-10px] text-[12px]" : "top-4"
              }`}
            >
              Name
            </label>
            <input
              type="text"
              className="absolute w-full h-full bg-[#FFFFF6] border-none outline-none px-2 text-[16px] z-0"
              onFocus={() => setNameFocused(true)}
              onBlur={(e) => setNameFocused(!!e.target.value)}
            />
          </div>

          {/* Email Input */}
          <div className="relative w-full h-[44px] border-b border-[#004D00]">
            <label
              className={`absolute left-2 transition-all duration-300 text-[#004D00] font-normal text-[16px] leading-[20px] font-[Instrument_Sans] bg-[#FFFFF6] px-1 z-10 ${
                emailFocused ? "top-[-10px] text-[12px]" : "top-4"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              className="absolute w-full h-full bg-[#FFFFF6] border-none outline-none px-2 text-[16px] z-0"
              onFocus={() => setEmailFocused(true)}
              onBlur={(e) => setEmailFocused(!!e.target.value)}
            />
          </div>

          {/* Message Input */}
          <div className="relative w-full h-[150px] border-b border-[#004D00]">
            <label
              className={`absolute left-2 transition-all duration-300 text-[#004D00] font-normal text-[16px] leading-[20px] font-[Instrument_Sans] bg-[#FFFFF6] px-1 z-10 ${
                messageFocused ? "top-[-10px] text-[12px]" : "top-3"
              }`}
            >
              Message
            </label>
            <textarea
              className="absolute w-full h-full bg-[#FFFFF6] border-none outline-none px-2 text-[16px] resize-none z-0"
              onFocus={() => setMessageFocused(true)}
              onBlur={(e) => setMessageFocused(!!e.target.value)}
            ></textarea>
          </div>

          {/* Send Message Button */}
          <div className="w-full max-w-[220px] h-[64px] bg-[#559312] rounded-[8px] cursor-pointer flex justify-center items-center mx-auto lg:mx-0">
            <span className="text-[#FFFFFF] font-medium text-[24px] leading-[29px] font-[Instrument_Sans]">
              Send Message
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;