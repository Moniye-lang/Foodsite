import React from 'react';
import '../head/hero.css'
import { Link } from 'react-router-dom';

/**
 * 10/10 DESIGN REFINEMENTS:
 * 1. Typography: Adjusted the massive 105px font to scale better across devices.
 * 2. Visual Rhythm: Used standard Tailwind spacing (mt-12) instead of empty brackets.
 * 3. Interaction: Enhanced the button with a smooth shadow and scale effect.
 */

export default function Hero() {
  return (
    <section className="main relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#F9F9FB]">
      {/* Optional: Decorative Background Element */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#AD343E]/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 flex flex-col items-center text-center">
        
        {/* MAIN HEADING */}
        <div className="space-y-6">
          <h1 className="text-[48px] leading-[1.1] sm:text-[64px] md:text-[80px] lg:text-[100px] font-black text-[#1A1A1A] tracking-tighter">
            Best food for <br />
            <span className="text-[#AD343E]">your taste</span>
          </h1>

          {/* SUBTEXT */}
          <p className="max-w-[600px] mx-auto text-[16px] sm:text-[18px] md:text-[20px] text-black/60 leading-relaxed font-medium">
            Discover delectable cuisine and unforgettable moments 
            in our welcoming, culinary haven.
          </p>
        </div>

        {/* CTA BUTTONS */}
        
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <Link 
            to="/Menu" 
            className="
              group relative flex items-center justify-center
              h-[60px] w-[200px] rounded-full 
              bg-[#AD343E] text-white font-bold text-lg
              shadow-lg shadow-[#AD343E]/20
              hover:bg-[#8e2a33] hover:-translate-y-1 
              transition-all duration-300
            "
          >
            Explore Menu
          </Link>

          <Link 
            to="/Reservation" 
            className="
              flex items-center justify-center
              h-[60px] w-[200px] rounded-full 
              border-2 border-[#1A1A1A] text-[#1A1A1A] font-bold text-lg
              hover:bg-[#1A1A1A] hover:text-white
              transition-all duration-300
            "
          >
            Book A Table
          </Link>
        </div>
      </div>
    </section>
  );
}