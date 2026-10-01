import React from 'react';

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden bg-[#0042EC] py-20 lg:py-28 text-white">


     {/* design images */}
      <img
        src="/design/frame-9.png"
        alt=""
        className="pointer-events-none absolute -left-4 -top-4 w-32 sm:w-48 lg:w-64 object-contain"
      />

      <img
        src="/design/frame-8.png"
        alt=""
        className="pointer-events-none absolute left-[15%] top-6 w-14 sm:w-20 lg:w-28 object-contain"
      />

      <img
        src="/design/cone-4.png"
        alt=""
        className="pointer-events-none absolute left-0 bottom-[12%] w-16 sm:w-24 lg:w-32 object-contain"
      />

      <img
        src="/design/cone-3.png"
        alt=""
        className="pointer-events-none absolute left-[5%] -bottom-12 w-40 sm:w-56 lg:w-72 object-contain"
      />

      <img
        src="/design/cone-2.png"
        alt=""
        className="pointer-events-none absolute right-[15%] top-8 w-[70px] sm:w-[100px] lg:w-[130px] object-contain"
      />

      <img
        src="/design/cone-1.png"
        alt=""
        className="pointer-events-none absolute -right-8 top-0 w-36 sm:w-30 lg:w-45 object-contain"
      />

      <img
        src="/design/frame-7.png"
        alt=""
        className="pointer-events-none absolute right-[3%] -bottom-8 w-28 sm:w-40 lg:w-52 object-contain"
      />

      {/* text and button */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-[#F5F5F6] sm:text-2xl lg:text-4xl leading-tight">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-xs leading-relaxed text-[#F5F5F6] font-normal">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <div className="mt-8 flex justify-center">
          <button 
            type="button"
            className="rounded-full bg-[#D4FB20] px-8 py-3 text-sm sm:text-base font-bold text-slate-900 shadow-md transition-all duration-200 hover:bg-[#c2eb12] hover:scale-105 active:scale-95"
          >
            Join as Creator
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;