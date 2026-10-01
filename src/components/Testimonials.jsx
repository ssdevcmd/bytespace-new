import React from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: '/users/user.png', // Sarah's photo
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    id: 2,
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: '/users/user-2.png', // James's photo
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    id: 3,
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: '/users/user-3.png', // Alex's photo
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
        
     {/* Left Side: Blue Radial Glow */}
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.0552) 53%, rgba(0, 59, 226, 0.0144) 75%, rgba(0, 59, 226, 0) 100%)',
        }}
      />

      {/* Right Side: Lime Radial Glow */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start mb-12 sm:mb-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#000000] sm:text-3xl lg:text-4xl leading-[1.15]">
              Discover What Our <br className="hidden sm:inline" />
              Community Is Saying
            </h2>
          </div>

          <div>
            <p className="text-sm sm:text-xs leading-relaxed text-[#4F4F4F] font-satoshi">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-[28px] bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md border border-slate-100/80"
            >
              <div>
                {/* Avatar */}
                <div className="mb-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                </div>

                {/* Name & Role */}
                <div className="mb-6">
                  <h3 className="text-base font-bold text-[#000000]">
                    {item.name}
                  </h3>
                  <p className="text-xs font-medium text-[#003BE2] mt-0.5">
                    {item.role}
                  </p>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-xs leading-relaxed text-[#4F4F4F] font-satoshi">
                  {item.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;