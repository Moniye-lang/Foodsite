import React from "react";
import { Clock4, ShoppingCart, ReceiptText } from "lucide-react";

/**
 * 10/10 UX STRATEGY:
 * 1. Image Bento Grid: Uses a structured layout to prevent images from shifting.
 * 2. Copywriting: Updated placeholder text to be relevant to food delivery.
 * 3. Icon Consistency: Unified the styling for Lucide icons for a premium feel.
 */

export default function Delivery() {
  const features = [
    { Icon: Clock4, text: "Delivery within 30 minutes" },
    { Icon: ReceiptText, text: "Best Offer & Prices" },
    { Icon: ShoppingCart, text: "Online Services Available" },
  ];

  return (
    <section className="bg-[#F9F9FB] py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* LEFT SIDE: THE IMAGE GRID (Bento Style) */}
        <div className="w-full lg:w-1/2 flex gap-4 md:gap-6">
          <div className="w-3/5">
            <img 
              src="mid-shot-chef-holding-plate-with-pasta-making-ok-sign 1.webp" 
              alt="Professional Chef" 
              className="w-full h-full object-cover rounded-[2rem] shadow-xl"
            />
          </div>
          <div className="w-2/5 flex flex-col gap-4 md:gap-6">
            <div className="h-1/2">
              <img 
                src="sour-curry-with-snakehead-fish-spicy-garden-hot-pot-thai-food 1.webp" 
                alt="Thai Food Hot Pot" 
                className="w-full h-full object-cover rounded-[2rem] shadow-lg"
              />
            </div>
            <div className="h-1/2">
              <img 
                src="sadj-iron-pot-with-various-salads 1.webp" 
                alt="Fresh Salads" 
                className="w-full h-full object-cover rounded-[2rem] shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: CONTENT */}
        
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-[1.1] tracking-tighter">
            Fastest Food <br /> Delivery In City
          </h2>
          
          <p className="mt-8 text-black/60 text-lg leading-relaxed max-w-[500px] mx-auto lg:mx-0">
            Our specialized delivery fleet ensures your meals arrive steaming hot 
            and fresh. Experience the convenience of gourmet dining from the 
            comfort of your own home.
          </p>

          <div className="mt-10 space-y-5">
            {features.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-5 p-2 rounded-2xl hover:bg-white hover:shadow-sm transition-all duration-300"
              >
                <div className="bg-[#AD343E] p-3 rounded-full text-white shadow-md shadow-[#AD343E]/20">
                  <item.Icon size={22} strokeWidth={2.5} />
                </div>
                <span className="text-lg font-bold text-[#1A1A1A]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}