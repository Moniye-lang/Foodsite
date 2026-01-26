import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Maindata } from "./maindata";

/**
 * 10/10 DESIGN REFINEMENTS:
 * 1. Fluid Layout: Removed fixed 'w-[320px]' to allow cards to fill their grid cells naturally.
 * 2. Brand Consistency: Swapped blue hover for the signature brand red (#AD343E).
 * 3. Shadow Depth: Replaced 'shadow-2xl' (which can look heavy) with a soft border + medium shadow.
 */

export default function MainBandA() {
  const [data] = useState(Maindata);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* PAGE HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-[#1A1A1A] tracking-tighter">
            Our Blog & Articles
          </h1>
          <p className="mt-6 text-black/60 text-lg leading-relaxed">
            We consider all the drivers of change to provide you the components 
            you need to create truly memorable dining moments.
          </p>
        </div>

        {/* BLOG GRID */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {data.map((items) => (
            <Link 
              to={`/maindata/${items.id}`} 
              key={items.id} 
              className="group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-t-[2rem]">
                <img 
                  src={items.img} 
                  alt={items.title} 
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content Card */}
              <div className="flex-grow p-6 bg-white border border-gray-100 border-t-0 rounded-b-[2rem] shadow-sm group-hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                   <span className="w-2 h-2 rounded-full bg-[#AD343E]"></span>
                   <span className="font-bold text-xs text-black/40 uppercase tracking-widest">
                    {items.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-[#1A1A1A] leading-snug group-hover:text-[#AD343E] transition-colors duration-300">
                  {items.title}
                </h3>
                
                <div className="mt-4 inline-flex items-center text-sm font-bold text-[#AD343E] opacity-0 group-hover:opacity-100 transition-opacity">
                  Read Article →
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}