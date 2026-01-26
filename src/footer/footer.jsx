import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";
import { fdata } from "./footerdata";

/**
 * 10/10 FOOTER STRATEGY:
 * 1. Social Touch Targets: Increased button size and added hover effects.
 * 2. Visual Hierarchy: Used 'text-white/60' for secondary links to create depth.
 * 3. Instagram Grid: Ensured consistent aspect ratios for the image feed.
 */

export default function Footer() {
  const [thedata] = useState(fdata);

  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 px-6">
      <div className="max-w-[1280px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* BRAND SECTION */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="japanese-food.png" alt="Logo" className="h-10 w-auto" />
              <span className="text-3xl font-black tracking-tighter italic">Bistro Bliss</span>
            </div>
            <p className="text-white/60 leading-relaxed max-w-[280px]">
              In the new era of technology we look to the future with certainty 
              and pride for our company and customers.
            </p>
            <div className="flex gap-4">
              {[Twitter, Facebook, Instagram, Github].map((Icon, idx) => (
                <button 
                  key={idx}
                  className="bg-[#AD343E] p-2.5 rounded-full hover:bg-white hover:text-[#AD343E] transition-all duration-300 cursor-pointer shadow-lg"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Pages</h4>
            <nav className="flex flex-col gap-4 text-white/50">
              {['Home', 'About', 'Menu', 'Blog', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.replace(' ', '')}`}
                  className="hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* UTILITY LINKS (Optional but adds to the 10/10 look) */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Utility Pages</h4>
            <nav className="flex flex-col gap-4 text-white/50">
              <Link className="hover:text-white transition-colors">Start Here</Link>
              <Link className="hover:text-white transition-colors">Style Guide</Link>
              <Link className="hover:text-white transition-colors">Password Protected</Link>
              <Link className="hover:text-white transition-colors">404 Not Found</Link>
              <Link className="hover:text-white transition-colors">Licenses</Link>
            </nav>
          </div>

          {/* INSTAGRAM GRID */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Follow Us On Instagram</h4>
            <div className="grid grid-cols-2 gap-3">
              {thedata.slice(0, 4).map((items) => (
                <div key={items.id} className="group relative overflow-hidden rounded-xl">
                  <img 
                    src={items.img} 
                    alt="Instagram Feed" 
                    className="aspect-square object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-[#AD343E]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Instagram size={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="pt-10 border-t border-white/10 text-center text-white/40 text-sm tracking-wide">
          Copyright © 2026 Bistro Bliss. Developed with passion by Hashtag Developer.
        </div>
      </div>
    </footer>
  );
}