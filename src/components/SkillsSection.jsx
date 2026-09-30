"use client";

import React, { useState } from 'react';

const categories = [
  // Row 1
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation", 
  "Social Media", "UI/UX Design", "Creative Marketing",
  // Row 2
  "Digital Illustration", "Film & Video", "Crafts", 
  "Freelance & Entrepreneurship", "Graphic Design", "Photography",
  // Row 3
  "Productivity", "Web Development", "Data Science", "Cooking"
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Featured");

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      {/* Header Info */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#000000] leading-tight">
        Discover Your Passion,<br /> Build Your Skills
      </h1>
      
      <p className="text-sm text-center text-[#82868E] mt-4 max-w-2xl mx-auto">
        At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
      </p>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 mt-8 sm:mt-10 max-w-5xl mx-auto">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[#D4FB20] text-slate-900 font-bold shadow-sm scale-105"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
              }`}
            >
              {category}
            </button>
          );
        })}

        {/* More Button */}
        <button 
          onClick={() => console.log("Load more categories")}
          className="px-4 py-2.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          + More
        </button>
      </div>
    </section>
  );
};

export default SkillsSection;