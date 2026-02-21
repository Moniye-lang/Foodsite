import React from "react";

/**
 * 10/10 DESIGN REFINEMENTS:
 * 1. Data Grid: Swapped 'rounded-md' for 'rounded-[2rem]' to match your brand's soft aesthetic.
 * 2. Visual Polish: Added a "soft-glow" hover effect to the stat cards.
 * 3. Typography: Scaled the numbers to be bolder and more authoritative.
 */

export default function Info() {
  const stats = [
    { value: "3", label: "Locations" },
    { value: "1995", label: "Founded" },
    { value: "65+", label: "Staff Members" },
    { value: "100%", label: "Satisfied Guests" },
  ];

  return (
    <section className="bg-[#F9F9FB] py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-24">
        
        {/* LEFT SIDE: THE TEXT & STATS GRID */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-[1.1] tracking-tighter">
            A little information <br className="hidden md:block" /> 
            for our valuable guest
          </h2>
          
          <p className="mt-6 text-black/60 text-lg leading-relaxed max-w-[540px] mx-auto lg:mx-0">
            At Bistro Bliss, we believe that dining is not just about food, but also about the 
            overall experience. Our staff, renowned for their warmth and dedication, 
            strives to make every visit an unforgettable event.
          </p>

          {/* STATS GRID */}
          
          <div className="grid grid-cols-2 gap-4 md:gap-6 mt-12">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="
                  bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm
                  hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                  flex flex-col items-center justify-center text-center
                "
              >
                <span className="text-3xl md:text-4xl font-black text-[#1A1A1A]">
                  {stat.value}
                </span>
                <span className="mt-2 text-sm md:text-base font-bold text-black/40 uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: THE IMAGE */}
        <div className="w-full lg:w-1/2">
          <div className="relative">
            {/* Decorative Element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#AD343E]/5 rounded-full blur-2xl" />
            
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <img
                src="pexels-cottonbro-studio-4252139 1.webp"
                alt="Our professional culinary team in action"
                className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}