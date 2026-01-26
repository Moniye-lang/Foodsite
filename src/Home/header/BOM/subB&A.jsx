import React from "react";
import { Link } from "react-router-dom";
import { subBA } from "./subBAdata";

/**
 * 10/10 UX STRATEGY:
 * 1. Visual Hierarchy: Distinguishes between the "Featured" large post and "Secondary" grid posts.
 * 2. Modern Card UI: Replaced heavy shadows with a refined border + soft shadow combo.
 * 3. Responsive Container: Replaced hardcoded margins with 'mx-auto' for better scaling.
 */

export default function SubBandA() {
  return (
    <section className="bg-[#F9F9FB] py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] tracking-tighter">
            Our Blog & Articles
          </h2>
          <Link 
            to="/MainPage" 
            className="inline-flex items-center justify-center px-8 py-4 bg-[#AD343E] text-white font-bold rounded-full hover:bg-[#8e2a33] transition-colors shadow-lg shadow-[#AD343E]/20"
          >
            Read All Articles
          </Link>
        </div>

        {/* CONTENT LAYOUT */}
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* FEATURED POST (Takes 7 columns on LG screens) */}
          <div className="lg:col-span-7 group cursor-pointer">
            <div className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="aspect-video overflow-hidden">
                <img
                  src="pexels-andra-918581 1.png"
                  alt="Perfect burger and pizza"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 md:p-10">
                <span className="text-sm font-bold text-[#AD343E] uppercase tracking-widest">
                  January 3, 2026
                </span>
                <h3 className="mt-4 text-2xl md:text-3xl font-black text-[#1A1A1A] leading-tight">
                  The secret tips & tricks to prepare a perfect burger & pizza for our customers
                </h3>
                <p className="mt-4 text-black/60 leading-relaxed line-clamp-3">
                  Discover the culinary secrets that make our signature dishes stand out. From dough fermentation to the science of the perfect sear, we're sharing how we bring gourmet quality to every plate.
                </p>
              </div>
            </div>
          </div>

          {/* SECONDARY POSTS GRID (Takes 5 columns on LG screens) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {subBA.map((item) => (
              <div 
                key={item.id} 
                className="group flex flex-col sm:flex-row bg-white rounded-[1.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-full sm:w-2/5 aspect-square sm:aspect-auto overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="w-full sm:w-3/5 p-6 flex flex-col justify-center">
                  <span className="text-xs font-bold text-black/40 uppercase tracking-tighter">
                    {item.date}
                  </span>
                  <h4 className="mt-2 text-lg font-bold text-[#1A1A1A] group-hover:text-[#AD343E] transition-colors leading-snug">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}