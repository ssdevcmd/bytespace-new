import { Check } from 'lucide-react';
import React from 'react';

const benefits = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
];

const Creator = () => {
    return (
        <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-28 container mx-auto">
            {/* background */}
            <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-[#D4FB20]/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-40 bottom-0 h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] rounded-full bg-blue-100/70 blur-3xl" />

            <div className="relative mx-auto grid max-w-7xl items-center gap-12 sm:gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

                {/* left content */}
                <div className="relative mx-auto flex h-[420px] sm:h-[500px] lg:h-[560px] w-full max-w-md lg:max-w-xl items-center justify-center">

                    {/* total revenue card */}
                    <div className="absolute left-0 sm:left-[2%] top-[8%] sm:top-[10%] z-0 w-36 sm:w-44 lg:w-48 rounded-xl sm:rounded-2xl bg-[#0042EC] p-3 sm:p-4 text-white shadow-xl">
                        <p className="text-[10px] sm:text-xs font-medium opacity-90">
                            Total Revenue
                        </p>
                        <p className="mt-0.5 text-[9px] sm:text-[10px] opacity-75">
                            July 1-28
                        </p>
                        <p className="mt-1 sm:mt-2 text-base sm:text-xl font-bold">
                            $120.29
                        </p>
                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/20">
                            <div className="h-full w-[55%] rounded-full bg-[#D4FB20]" />
                        </div>
                    </div>

                    {/* year to date card */}
                    <div className="absolute left-0 sm:left-[2%] top-[40%] sm:top-[42%] z-0 w-32 sm:w-40 rounded-xl sm:rounded-2xl bg-[#0042EC] p-1 sm:p-2 text-white shadow-xl">
                        <p className="text-[10px] sm:text-xs font-medium opacity-90">
                            Year to Date
                        </p>
                        <p className="text-[9px] sm:text-[10px] opacity-75">
                            2023
                        </p>
                        <p className="mt-1 sm:mt-2 text-sm sm:text-lg font-bold">
                            $1,200.38
                        </p>
                        <span className="mt-1 sm:mt-2 inline-block rounded-full bg-[#D4FB20] px-2 py-0.5 text-[8px] sm:text-[9px] font-bold text-slate-900">
                            +12$
                        </span>
                    </div>

                    {/* creator image */}
                    <img
                        src="/creator.png"
                        alt="ByteSpace creator"
                        className="absolute bottom-0 left-[52%] sm:left-[50%] z-20 max-h-[95%] w-auto -translate-x-1/2 object-contain"
                    />

                    <img
                        src="/mask-group-6.png"
                        alt=""
                        className="absolute right-[8%] sm:right-[12%] top-[18%] sm:top-[22%] max-[500px]:top-[32%] z-20 w-20 sm:w-28 lg:w-36 object-contain"
                    />

                    {/* happy-student card*/}
                    <div className="absolute right-[2%] sm:right-[5%] bottom-[12%] sm:bottom-[15%] max-[500px]:bottom-[26%] z-30 rounded-xl sm:rounded-2xl bg-white p-3 sm:p-4 shadow-2xl border border-slate-100/80">
                        <p className="text-[11px] sm:text-xs font-bold text-slate-800">
                            Happy Students
                        </p>
                        <p className="mt-0.5 text-[9px] sm:text-[10px] text-slate-500 font-medium">
                            4.8 (240) ⭐
                        </p>

                        <img
                            src="/happy-students.png"
                            alt="happy-students"
                            className="w-28 sm:w-30 h-auto"
                        />
                    </div>

                </div>

                {/* right content */}
                <div className="max-w-xl text-left">
                    <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#242528] sm:text-4xl lg:text-5xl">
                        Create & Manage
                        <br />
                        Courses Easily.
                    </h2>

                    <p className="mt-5 text-sm leading-relaxed text-[#4B4C53]">
                        <strong className="text-[#4B4C53] font-semibold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
                    </p>

                    <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                        {benefits.map((benefit) => (
                            <div
                                key={benefit}
                                className="flex items-center gap-3"
                            >
                                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0042EC] text-white">
                                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                                </div>

                                <span className="text-sm sm:text-base font-semibold text-slate-800">
                                    {benefit}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Creator;