"use client";

import Link from 'next/link';
import React, { useState } from 'react';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
     
  };

  return (
    <div className="relative min-h-screen w-full bg-[#0042EC] overflow-hidden font-satoshi flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">

      {/* Logo */}
      <div className="absolute top-4 left-8 sm:left-12 z-20">
        <img src="/Vector.png" alt="ByteSpace Logo" className="h-8 w-auto" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[640px]">
        
        {/* LEFT COLUMN: Text, Floating Cards & 3D Assets */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full pt-12 lg:pt-0 text-[#F5F5F6]">
          
          {/* Header Text */}
          <div className="max-w-md">
            <h1 className="text-2xl sm:text-3xl font-extrabold mb-4 mt-8 tracking-tight">
              Sign in with ease
            </h1>
            <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed">
              Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
            </p>
          </div>

          {/* Stacked Cards & Decorative Floating Assets Area */}
          <div className="relative mt-12 mb-6 h-[340px] sm:h-[380px] w-full max-w-lg mx-auto lg:mx-0">
            
            {/* 3D Asset: Lime Ring / Oval (Top-Left) */}
            <img
              src="/mask-group-7.png"
              alt="Decoration"
              className="pointer-events-none absolute -left-[-1rem] sm:-left-[-1rem] top-2 z-30 w-24 sm:w-28 object-contain drop-shadow-md"
            />

            {/* 3D Asset: Lime Pyramid / Cone (Bottom-Left) */}
            <img
              src="/design/cone-2.png"
              alt="Decoration"
              className="pointer-events-none absolute -left-4 -bottom-6 z-30 w-28 sm:w-36 object-contain drop-shadow-md"
            />

            {/* Card 1: Background Course Card ("Build Digital Asset") */}
            <img
              src="/courses/course_card_2.png"
              alt="Build Digital Asset Course"
              className="pointer-events-none absolute left-0 top-10 z-10 w-64 sm:w-72 rounded-3xl shadow-xl border border-white/20 opacity-90 scale-95 origin-bottom-left"
            />

            {/* Card 2: Main Foreground Course Card ("the Power of Big Data") */}
            <img
              src="/courses/course_card_3.png"
              alt="The Power of Big Data Course"
              className="pointer-events-none absolute left-16 sm:left-20 top-0 z-20 w-72 sm:w-80 rounded-3xl shadow-2xl"
            />

            {/* Card 3: Bottom Happy Students Badge Card */}
            <div className="absolute left-36 sm:left-44 bottom-2 z-20 w-44 rounded-2xl bg-[#D4FB20] p-3 shadow-lg">
              <div className="flex flex-col items-center justify-between">
                <span className="text-xs font-bold text-[#242528]">Happy Students</span>
                <span className="text-[10px] font-bold text-slate-800">4.5 (240) ★</span>
              </div>
              <img
                src="/happy-students.png"
                alt="Happy Students Avatars"
                className="w-full object-contain"
              />
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: White Signup Form Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-md rounded-[32px] bg-white p-8 sm:p-10 shadow-2xl">
            
            {/* Form Title */}
            <div className="mb-8">
              <p className="text-xs font-medium text-[#003BE2] mb-1">
                Sign In
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242528] tracking-tight font-clash">
                Welcome Back
              </h2>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="designer@example.com"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-[#0042EC] focus:outline-none focus:ring-1 focus:ring-[#0042EC] transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="********"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-[#0042EC] focus:outline-none focus:ring-1 focus:ring-[#0042EC] transition-all"
                  required
                />
              </div>

              {/* Action Button */}
              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="rounded-full bg-[#D4FB20] px-8 py-3 text-xs sm:text-sm font-bold text-slate-900 shadow-sm transition-all hover:bg-[#c2eb12] hover:scale-105 active:scale-95"
                >
                  sign In
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="relative my-6 flex items-center justify-center">
              <div className="w-full border-t border-slate-200"></div>
              <span className="absolute bg-white px-3 text-xs text-slate-400">or</span>
            </div>

            {/* Social Logins */}
            <div className="flex justify-center items-center gap-4">
              <button
                type="button"
                className="transition-transform hover:scale-105 active:scale-95 focus:outline-none"
              >
                <img src="/social/facebook.png" alt="Sign in with Facebook" className="w-12 h-12 sm:w-14 sm:h-14" />
              </button>

              <button
                type="button"
                className="transition-transform hover:scale-105 active:scale-95 focus:outline-none"
              >
                <img src="/social/google.png" alt="Sign in with Google" className="w-12 h-12 sm:w-14 sm:h-14" />
              </button>
            </div>

            {/* Bottom Login Link */}
            <div className="mt-12 text-center text-xs text-[#4B4C53]">
              New user?{' '}
              <Link href="/signup" className="font-semibold text-[#0042EC] hover:underline">
                Create an account
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default SignIn;