import React from 'react';

const CareerGrowth = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-10 lg:py-16">
      {/* background effects */}
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-[#D4FB20]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-blue-100/70 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

        {/* left */}
        <div className="text-left">
          <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-[#242528] sm:text-3xl lg:text-4xl">
            Your Path to Professional
            <br className="hidden sm:inline" />
            {" "}Growth Starts Here!
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-[#4B4C53]">
            Explore our curated selection of courses tailored to enhance
            your capabilities and accelerate your career journey.
            Whether you are looking to sharpen specific skills, gain
            industry expertise, or embark on a new career path entirely,
            we have the resources you need.
          </p>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap gap-8 sm:gap-14">
            <div>
              <p className="text-2xl font-bold text-blue-600 sm:text-3xl">
                12K
              </p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500">
                Students
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-blue-600 sm:text-3xl">
                70+
              </p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500">
                Courses
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-blue-600 sm:text-3xl">
                16
              </p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500">
                Creators
              </p>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="relative mx-auto flex h-[380px] w-full max-w-md items-center justify-center sm:h-[460px] lg:h-[520px] lg:max-w-xl">

            {/* background card */}
          <img
            src="/courses/course_card_1.png"
            alt="Course"
            className="absolute left-[15%] top-12 z-0 w-[55%] rounded-2xl shadow-md transition-transform sm:left-[20%] sm:top-16 sm:w-[50%]"
          />

          {/* main person */}
          <img
            src="/hero.png"
            alt="ByteSpace learner"
            className="absolute bottom-0 left-1/2 z-10 max-h-[90%] w-auto -translate-x-1/2 object-contain"
          />

            {/* foreground card */}
          <img
            src="/mask-group-5.png"
            alt=""
            className="absolute right-3 top-[32%] z-20 w-20 object-contain sm:right-8 sm:top-[30%] sm:w-28 lg:w-32"
          />

          {/* learning progress */}
          <div className="absolute right-0 top-[51%] z-30 w-32 rounded-xl border border-slate-100 bg-white p-3 shadow-2xl sm:right-4 sm:w-40 sm:rounded-2xl sm:p-4">
            <p className="text-[10px] font-medium text-slate-500 sm:text-xs">
              Learning Progress
            </p>

            <p className="mt-0.5 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              55%
            </p>

            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100 sm:mt-3 sm:h-2">
              <div className="h-full w-[55%] rounded-full bg-[#D4FB20]" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CareerGrowth;