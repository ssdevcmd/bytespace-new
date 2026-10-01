"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF] text-[#111827] pt-16 pb-12 font-satoshi">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 pb-16">
          
          {/* Left Side: Logo & Newsletter Form */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <div className="flex gap-2 items-center mb-6">

          <img src="/Vector.png" alt="ByteSpace Logo" className="h-8 w-auto" />
            
          <span className="text-2xl font-clash font-extrabold tracking-tight text-[#242528]">
                  ByteSpace
                </span>
              </div>

              {/* Newsletter Text */}
              <p className="text-xs sm:text-sm text-[#4F4F4F] font-normal mb-6 leading-relaxed">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>

              {/* Input + Search Button Form */}
              <form 
                onSubmit={(e) => e.preventDefault()} 
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:w-72 rounded-full border border-slate-200 px-5 py-3 text-xs sm:text-sm placeholder-slate-400 focus:border-[#0042EC] focus:outline-none focus:ring-1 focus:ring-[#0042EC] transition-all"
                  required
                />
                <button
                  type="submit"
                  className="rounded-full bg-[#D4FB20] px-8 py-3 text-xs sm:text-sm font-semibold text-slate-900 transition-all hover:bg-[#c2eb12] hover:shadow-sm active:scale-95 shrink-0"
                >
                  Search
                </button>
              </form>

              {/* Terms / Disclaimer Text */}
              <p className="text-[11px] sm:text-xs text-[#828282] leading-normal max-w-sm">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>

          {/* Right Side: Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-2 lg:pt-0 mt-12">
            {/* Column 1 */}
            <div className="flex flex-col gap-3.5 text-xs sm:text-sm font-normal text-[#242528]">
              <a href="#" className="hover:text-[#0042EC] transition-colors">
                Featured Courses
              </a>
              <a href="#" className="hover:text-[#0042EC] transition-colors">
                Featured Categories
              </a>
              <a href="#" className="hover:text-[#0042EC] transition-colors">
                Business
              </a>
              <a href="#" className="hover:text-[#0042EC] transition-colors">
                IT
              </a>
              <a href="#" className="hover:text-[#0042EC] transition-colors">
                Design
              </a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3.5 text-xs sm:text-sm font-satoshi text-[#333333]">
              <a href="#" className="hover:text-[#0042EC] transition-colors">
                Development
              </a>
              <a href="#" className="hover:text-[#0042EC] transition-colors">
                Marketing
              </a>
              <a href="#" className="hover:text-[#0042EC] transition-colors">
                Photography
              </a>
              <a href="#" className="hover:text-[#0042EC] transition-colors">
                Finance
              </a>
              <a href="#" className="hover:text-[#0042EC] transition-colors">
                Sport
              </a>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-3.5 text-xs sm:text-sm font-normal text-[#333333] col-span-2 sm:col-span-1">
              <a href="#" className="hover:text-[#0042EC] transition-colors">
                Become a Creator
              </a>
              <a href="#" className="hover:text-[#0042EC] transition-colors">
                Affiliate Program
              </a>
              <a href="#" className="hover:text-[#0042EC] transition-colors">
                Contact
              </a>
              <a href="#" className="hover:text-[#0042EC] transition-colors">
                Help
              </a>
              <a href="#" className="hover:text-[#0042EC] transition-colors">
                About
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Line & Copyright Footer */}
        <div className="border-t border-slate-200/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#828282]">
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:underline hover:text-slate-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline hover:text-slate-900 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:underline hover:text-slate-900 transition-colors">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;