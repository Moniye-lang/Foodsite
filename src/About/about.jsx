import React, { useEffect } from "react";
import { PhoneIcon, Mail, MapPin } from "lucide-react";

/**
 * 10/10 DESIGN REFINEMENTS:
 * 1. Image Composition: Uses relative/absolute positioning to create a "collage" feel.
 * 2. Modern Typography: Swapped manual line breaks for 'max-w' constraints for natural flow.
 * 3. Accessibility: Added descriptive alt text for images.
 */

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="bg-[#F5F5F7] py-20 px-6 lg:py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
        
        {/* LEFT SIDE: THE VISUAL STACK */}
        
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative group">
            {/* Main Image */}
            <div className="overflow-hidden rounded-[2.5rem] shadow-2xl">
              <img
                src="image 111.webp"
                alt="Bistro Bliss welcoming dining area"
                className="h-[450px] w-full max-w-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Floating Contact Card */}
            <div className="
              bg-[#1A1A1A] text-white p-8 rounded-[2rem] shadow-2xl
              w-[300px] md:w-[340px]
              relative mt-[-60px] mx-auto lg:absolute lg:mt-0 lg:bottom-[-40px] lg:right-[-60px] z-10
            ">
              <h3 className="text-xl font-bold mb-6 tracking-tight">Come and Visit Us</h3>
              
              <div className="space-y-4">
                <a href="tel:4148570107" className="flex items-center gap-4 hover:text-[#AD343E] transition-colors">
                  <PhoneIcon size={18} className="text-[#AD343E]" /> 
                  <span className="text-sm font-medium">(414) 857-0107</span>
                </a>

                <a href="mailto:happytummy@restaurant.com" className="flex items-center gap-4 hover:text-[#AD343E] transition-colors">
                  <Mail size={18} className="text-[#AD343E]" /> 
                  <span className="text-sm font-medium">happytummy@restaurant.com</span>
                </a>

                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-[#AD343E] mt-1 shrink-0" /> 
                  <span className="text-sm font-medium leading-relaxed">
                    837 W. Marshall Lane <br />
                    Marshalltown, IA 50158
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: THE STORY */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-[1.1] tracking-tighter">
            We provide healthy <br className="hidden md:block" /> 
            food for your family.
          </h2>
          
          <div className="mt-8 space-y-6 max-w-[600px] mx-auto lg:mx-0">
            <p className="text-lg font-bold text-[#1A1A1A]">
              Our story began with a vision to create a unique dining 
              experience that merges fine dining with local heart.
            </p>
            <p className="text-black/60 leading-relaxed text-base md:text-lg">
              At Bistro Bliss, we believe that dining is not just about food, but also about the 
              overall experience. Rooted in the city's rich culinary culture, we aim to 
              honor our local roots while infusing a global palate.
            </p>
            <p className="text-black/60 leading-relaxed text-base md:text-lg">
              Our staff, renowned for their warmth and dedication, 
              strives to make every visit an unforgettable event for you and your loved ones.
            </p>
          </div>

          <div className="mt-12">
             <button className="px-10 py-4 border-2 border-[#1A1A1A] rounded-full font-bold text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300">
               Learn More Our Story
             </button>
          </div>
        </div>

      </div>
    </section>
  );
}