// // src/components/Hero.jsx
// "use client";

// import React from 'react';
// import FloatingSpring from './FloatingSpring';
// import { Search } from 'lucide-react';

// export default function Hero() {
//   return (
//     <section className="relative bg-[#003be2] text-white pt-10 pb-20 px-6 overflow-hidden min-h-[600px]">
//         <div>
//             <h1 className='text-center text-6xl text-[#F5F5F6] font-bold'>Get Access to Hundreds <br></br>Courses Available</h1>
//             <p className='text-center text-sm mt-10'>Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>

//             <form  
//       className="flex items-center justify-center gap-3 max-w-lg mx-auto"
//     >
//       {/* WHITE PILL INPUT FIELD */}
//       <div className="flex items-center bg-white rounded-full px-4 py-2.5 shadow-lg w-full max-w-md">
//         <Search className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0" />
//         <input
//           type="text"
//           placeholder="Course, topic, creator"
//           className="w-full text-xs sm:text-sm text-slate-700 placeholder-slate-400 outline-none bg-transparent"
//         />
//       </div>

//       {/* SEPARATE LIME SEARCH BUTTON */}
//       <button
//         type="submit"
//         className="bg-[#D4FB20] hover:bg-[#c2ea19] text-slate-900 text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full shadow-lg transition-colors flex-shrink-0"
//       >
//         Search
//       </button>
//     </form>
//     <img src="/Hero.png" alt="Hero Image" className="h-full w-auto items-center" />

//         </div>

//     </section>
//   );
// }


// src/components/Hero.jsx
// "use client";

// import React, { useState } from 'react';
// import FloatingSpring from './FloatingSpring';
// import { Search } from 'lucide-react';

// export default function Hero() {
//   const [query, setQuery] = useState('');

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log('Searching for:', query);
//   };

//   return (
//     <section className="relative bg-[#003be2] text-white pt-12 px-4 sm:px-6 overflow-hidden min-h-[680px]">



//       {/* 3. MAIN HERO CONTENT CONTAINER */}
//       <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">

//         {/* Title */}
//         <h1 className="font-['Clash_Display'] text-4xl sm:text-6xl font-bold tracking-tight leading-tight text-[#F5F5F6]">
//           Get Access to Hundreds <br /> Courses Available
//         </h1>

//         {/* Subtitle */}
//         <p className="text-slate-200 text-xs sm:text-sm mt-4 mb-8 max-w-xl font-normal leading-relaxed">
//           Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
//         </p>

//         {/* Search Bar Form */}
//         <form 
//           onSubmit={handleSearch} 
//           className="flex items-center justify-center gap-3 w-full max-w-lg mb-12"
//         >
//           {/* Input Box */}
//           <div className="flex items-center bg-white rounded-full px-4 py-3 shadow-lg flex-1">
//             <Search className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0" />
//             <input
//               type="text"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               placeholder="Course, topic, creator"
//               className="w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none bg-transparent"
//             />
//           </div>

//           {/* Lime Search Button */}
//           <button
//             type="submit"
//             className="bg-[#D4FB20] hover:bg-[#c2ea19] text-slate-900 text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-lg transition-colors flex-shrink-0"
//           >
//             Search
//           </button>
//         </form>

//         <div className='relative'>
//           <img src="/mask-group.png" alt="ByteSpace Hero" className="w-30 h-30 max-w-2xl mx-auto" />
//         <img src="/mask-group-1.png" alt="ByteSpace Hero" className="w-30 h-30 max-w-2xl mx-auto" />
//         <img src="/mask-group-2.png" alt="ByteSpace Hero" className="w-30 h-30 max-w-2xl mx-auto" />
//         <img src="/mask-group-3.png" alt="ByteSpace Hero" className="w-30 h-30 max-w-2xl mx-auto" />
//         <img src="/mask-group-4.png" alt="ByteSpace Hero" className="w-85 h-85 max-w-2xl mx-auto" />
//         <img src="/cone.png" alt="ByteSpace Hero" className="w-30 h-30 max-w-2xl mx-auto" />

//         </div>
//         {/* 4. HERO CENTER IMAGE WITH LIME BACKDROP & STAT CARDS */}

// <div className="relative w-full max-w-5xl mx-auto flex justify-center items-end mt-8 min-h-[420px]">

//   {/* LARGE LIME ARCH (Extends wide across the section) */}
//   <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[325px] sm:w-[850px] sm:h-[375px] lg:w-[900px] lg:h-[400px] bg-[#D4FB20] rounded-t-full pointer-events-none z-0" />

//   {/* Student Image */}
//   <img 
//     src="/hero.png" 
//     alt="ByteSpace Hero Student" 
//     className="relative z-10 w-80 sm:w-[480px] object-contain pointer-events-none drop-shadow-2xl" 
//   />


//   {/* FLOATING CARD 1: UI/UX Design */}
// <div className="absolute top-36 sm:top-28 left-2 sm:left-12 lg:left-44 z-30 bg-white text-slate-900 px-3 py-2 sm:px-5 sm:py-3 rounded-2xl shadow-xl flex flex-col justify-center text-left border border-slate-100">
//   <p className="text-[11px] sm:text-xs font-bold text-slate-900">UI/UX Design</p>
//   <p className="text-[9px] sm:text-[10px] text-slate-400">200 Courses • 1000+ Students</p>
// </div>

// {/* FLOATING CARD 2: Learning Progress */}
// <div className="absolute top-40 sm:top-32 right-2 sm:right-12 lg:right-48 z-20 bg-white text-slate-900 p-3 sm:p-4 rounded-2xl shadow-xl flex flex-col justify-center text-left w-28 sm:w-40 border border-slate-100">
//   <p className="text-[9px] sm:text-[10px] text-slate-400 font-medium">Learning Progress</p>
//   <p className="text-lg sm:text-2xl font-black text-slate-900 my-0.5">55%</p>
//   <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
//     <div className="w-[55%] h-full bg-[#D4FB20] rounded-full" />
//   </div>
// </div>
// {/* FLOATING CARD 3: Happy Students */}
// <div className="absolute bottom-12 sm:bottom-24 left-4 sm:left-20 lg:left-36 z-20 bg-white text-slate-900 p-3 sm:p-4 rounded-2xl shadow-xl flex items-center justify-center border border-slate-100 w-auto min-w-[170px] sm:min-w-[220px]">
//   <div className="flex flex-col items-start justify-center text-left w-full">
//     <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Happy Students</p>
//     <p className="text-[10px] sm:text-[11px] text-slate-500 font-semibold my-1">4.5 (240) ★</p>
//     <div className="flex -space-x-1.5 mt-0.5">
//       <img className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=3" alt="User" />
//       <img className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=5" alt="User" />
//       <img className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=8" alt="User" />
//       <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#D4FB20] text-[8px] sm:text-[9px] font-bold flex items-center justify-center text-slate-950 border-2 border-white">2K+</span>
//     </div>
//   </div>
// </div>

// </div>

//       </div>

//     </section>
//   );
// }


// src/components/Hero.jsx
"use client";

import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function Hero() {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', query);
  };

  return (
    <section className="relative bg-[#003be2] text-white pt-12 px-4 sm:px-6 overflow-hidden min-h-[720px]">


      {/* --- 2. FLOATING DECORATIVE SHAPES (EXACT FIGMA POSITIONS) --- */}

      {/* Top-Left Lime Spring */}
      <img
        src="/mask-group-4.png"
        alt="Lime Spring"
        className="absolute top-10 -left-10 sm:-left-6 w-32 sm:w-48 z-0 pointer-events-none -rotate-12"
      />

      {/* Mid-Left White Spring */}
      <img
        src="/mask-group.png"
        alt="White Spring Left"
        className="absolute top-[38%] left-6 sm:left-16 w-16 sm:w-24 z-0 pointer-events-none"
      />

      {/* Bottom-Left White Torus / Ring */}
      <img
        src="/mask-group-3.png"
        alt="White Torus Ring"
        className="absolute bottom-16 left-[-28rem] sm:left-[-8] w-36 sm:w-52 z-0 pointer-events-none"
      />

      {/* Top-Right Large Lime Cylinder */}
      <img
        src="/mask-group-2.png"
        alt="Lime Cylinder Right"
        className="absolute top-28 -right-2 w-20 sm:w-32 h-auto object-contain z-0 pointer-events-none"
      />

      {/* Mid-Right White Cone */}
      <img
        src="/cone.png"
        alt="White Cone"
        className="absolute top-[36%] right-8 sm:right-20 w-24 sm:w-36 z-0 pointer-events-none"
      />

      {/* Bottom-Right White Spring */}
      <img
        src="/mask-group-1.png"
        alt="White Spring Right"
        className="absolute bottom-36 right-[-8rem] sm:right-2 w-24 sm:w-36 z-0 pointer-events-none"
      />


      {/* --- 3. MAIN HERO CONTENT CONTAINER --- */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">

        {/* Title */}
        <h1 className="font-['Clash_Display'] text-4xl sm:text-6xl font-bold tracking-tight leading-tight text-[#F5F5F6]">
          Get Access to Hundreds <br /> Courses Available
        </h1>

        {/* Subtitle */}
        <p className="text-slate-200 text-xs sm:text-sm mt-4 mb-8 max-w-xl font-normal leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar Form */}
        <form
          onSubmit={handleSearch}
          className="flex items-center justify-center gap-3 w-full max-w-lg mb-12"
        >
          <div className="flex items-center bg-white rounded-full px-4 py-3 shadow-lg flex-1">
            <Search className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Course, topic, creator"
              className="w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none bg-transparent"
            />
          </div>

          <button
            type="submit"
            className="bg-[#D4FB20] hover:bg-[#c2ea19] text-slate-900 text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-lg transition-colors flex-shrink-0"
          >
            Search
          </button>
        </form>


        {/* --- 4. CENTER HERO IMAGE & STAT CARDS --- */}
        <div className="relative w-full max-w-5xl mx-auto flex justify-center items-end mt-4 min-h-[420px]">

          {/* Lime Backdrop Arch */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[325px] sm:w-[850px] sm:h-[375px] lg:w-[900px] lg:h-[400px] bg-[#D4FB20] rounded-t-full pointer-events-none z-0" />

          {/* Student Hero Photo */}
          <img
            src="/hero.png"
            alt="ByteSpace Hero Student"
            className="relative z-10 w-80 sm:w-[480px] object-contain pointer-events-none drop-shadow-2xl"
          />

          {/* Floating Card 1: UI/UX Design */}
          <div className="absolute top-36 sm:top-28 left-2 sm:left-12 lg:left-44 z-30 bg-white text-slate-900 px-3 py-2 sm:px-5 sm:py-3 rounded-2xl shadow-xl flex flex-col justify-center text-left border border-slate-100">
            <p className="text-[11px] sm:text-xs font-bold text-slate-900">UI/UX Design</p>
            <p className="text-[9px] sm:text-[10px] text-slate-400">200 Courses • 1000+ Students</p>
          </div>

          {/* Floating Card 2: Learning Progress */}
          <div className="absolute top-40 sm:top-32 right-2 sm:right-12 lg:right-48 z-20 bg-white text-slate-900 p-3 sm:p-4 rounded-2xl shadow-xl flex flex-col justify-center text-left w-28 sm:w-40 border border-slate-100">
            <p className="text-[9px] sm:text-[10px] text-slate-400 font-medium">Learning Progress</p>
            <p className="text-lg sm:text-2xl font-black text-slate-900 my-0.5">55%</p>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="w-[55%] h-full bg-[#D4FB20] rounded-full" />
            </div>
          </div>

          {/* Floating Card 3: Happy Students */}
          <div className="absolute bottom-12 sm:bottom-24 left-4 sm:left-20 lg:left-36 z-20 bg-white text-slate-900 p-3 sm:p-4 rounded-2xl shadow-xl flex items-center justify-center border border-slate-100 w-auto min-w-[170px] sm:min-w-[220px]">
            <div className="flex flex-col items-start justify-center text-left w-full">
              <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Happy Students</p>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-semibold my-1">4.5 (240) ★</p>
              <div className="flex -space-x-1.5 mt-0.5">
                <img className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=3" alt="User" />
                <img className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=5" alt="User" />
                <img className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=8" alt="User" />
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#D4FB20] text-[8px] sm:text-[9px] font-bold flex items-center justify-center text-slate-950 border-2 border-white">2K+</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}