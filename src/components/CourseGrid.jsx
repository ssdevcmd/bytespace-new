import React from 'react';

const categories = [
  { name: 'Design', icon: '/learning/frame-1.png' },
  { name: 'Development', icon: '/learning/frame-2.png' },
  { name: 'IT & Software', icon: '/learning/frame-3.png' },
  { name: 'Business', icon: '/learning/frame-4.png' },
  { name: 'Marketing', icon: '/learning/frame-5.png' },
  { name: 'Photography', icon: '/learning/frame-6.png' },
];

const CourseGrid = () => {
    return (
        <section className="py-16 px-4 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-[#040819] mb-3">
        Explore Diverse Learning Paths at Bytespace
      </h2>
      <p className="text-sm text-[#82868E] max-w-2xl mx-auto mb-10">
        At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
      </p>

     {/* Grid Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center p-6 border border-slate-200 rounded-2xl bg-white hover:shadow-md hover:border-slate-300 transition-all cursor-pointer"
          >
            <img 
              src={item.icon} 
              alt={item.name} 
              className="w-12 h-12 object-contain mb-3" 
            />
            <span className="text-sm font-semibold text-slate-800">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
    );
};

export default CourseGrid;