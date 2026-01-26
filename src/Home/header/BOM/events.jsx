import React, { useEffect, useRef } from "react";
import { edata } from "./eventsdata";

/**
 * 10/10 DESIGN & LOGIC:
 * 1. Image Ratios: Used 'aspect-[3/4]' to ensure images are consistent regardless of source size.
 * 2. Staggered Animation: Logic to trigger cards sequentially for a smoother "wave" effect.
 * 3. Responsive Alignment: Fixed the header to align with the container rather than hardcoded margins.
 */

export default function Events() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-12");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current.querySelectorAll(".animate-item");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* SECTION HEADER */}
        <header className="mb-16 animate-item opacity-0 translate-y-12 transition-all duration-700 ease-out">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-[1.1] tracking-tighter">
            We also offer unique <br className="hidden md:block" />
            services for your events
          </h2>
        </header>

        {/* EVENTS GRID */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {edata.map((item, idx) => (
            <div
              key={item.id}
              style={{ transitionDelay: `${idx * 150}ms` }}
              className="animate-item opacity-0 translate-y-12 transition-all duration-700 ease-out group"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-lg mb-6">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* TEXT CONTENT */}
              <h3 className="text-2xl font-bold text-[#1A1A1A] group-hover:text-[#AD343E] transition-colors">
                {item.title}
              </h3>
              
              <p className="mt-4 text-black/60 leading-relaxed text-sm lg:text-base">
                {item.text || "Experience our signature hospitality tailored perfectly for your special occasion."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}