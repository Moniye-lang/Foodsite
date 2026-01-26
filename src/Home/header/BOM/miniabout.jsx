import React, { useEffect, useRef } from "react";
import { PhoneIcon, Mail, MapPin } from "lucide-react";

/**
 * 10/10 REFINEMENTS:
 * 1. Image Layering: Replaced the gray box with a "Hero-style" image and an offset info card.
 * 2. Intersection Logic: Used useRef to target the section safely.
 * 3. Text Flow: Removed manual <br /> tags in favor of max-width containers for natural wrapping.
 */

export default function M_about() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="opacity-0 translate-y-10 transition-all duration-1000 ease-out py-24 bg-[#F9F9FB] overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-20">
        
        {/* LEFT SIDE: THE VISUAL STACK */}
        
        <div className="relative w-full lg:w-1/2">
          {/* Main Image Backdrop */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] sm:aspect-square lg:aspect-auto lg:h-[600px]">
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800" 
              alt="Our Restaurant Interior" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Floating Info Card */}
          <div className="absolute bottom-[-40px] right-[-20px] md:right-[-40px] bg-[#1A1A1A] text-white p-8 md:p-10 rounded-[2rem] shadow-2xl max-w-[320px] z-20">
            <h3 className="text-xl font-bold mb-6 tracking-tight">Come and Visit Us</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <PhoneIcon className="size-5 text-[#AD343E] shrink-0" />
                <span className="text-sm font-medium text-white/80">(414) 857-0107</span>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="size-5 text-[#AD343E] shrink-0" />
                <span className="text-sm font-medium text-white/80">happytummy@restaurant.com</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="size-5 text-[#AD343E] shrink-0" />
                <address className="text-sm font-medium text-white/80 not-italic leading-relaxed">
                  837 W. Marshall Lane, <br />
                  Marshalltown, IA 50158
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE: THE STORY */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-[1.1] tracking-tighter">
            We provide healthy <br className="hidden lg:block" /> 
            food for your family.
          </h2>
          
          <div className="mt-8 space-y-6 max-w-[550px] mx-auto lg:mx-0">
            <p className="text-lg font-bold text-[#1A1A1A]">
              Our story began with a vision to create a unique dining 
              experience that merges fine dining with local heart.
            </p>
            <p className="text-black/60 leading-relaxed">
              At Place, we believe that dining is not just about food, but also about the 
              overall experience. Rooted in the city's rich culinary culture, we aim to 
              honor our local roots while infusing a global palate.
            </p>
            <p className="text-black/60 leading-relaxed">
              Our staff, renowned for their warmth and dedication, 
              strives to make every visit an unforgettable event for you and your loved ones.
            </p>
          </div>

          <button className="mt-10 group relative inline-flex items-center justify-center px-10 py-4 font-black text-[#1A1A1A] border-2 border-[#1A1A1A] rounded-full overflow-hidden hover:text-white transition-all duration-300">
            <span className="absolute inset-0 w-0 bg-[#1A1A1A] transition-all duration-300 group-hover:w-full"></span>
            <span className="relative z-10 uppercase tracking-widest text-sm">More About Us</span>
          </button>
        </div>
      </div>
    </section>
  );
}