import React from "react";

/**
 * 10/10 DESIGN STRATEGY:
 * 1. DRY Principle: Centralized data array for easy updates and cleaner JSX.
 * 2. Visual Hierarchy: Stronger heading for the quote, softer text for the body.
 * 3. Consistent Spacing: Unified padding and margins using Tailwind's standard scales.
 */

export default function Wcs() {
  const testimonials = [
    {
      id: 1,
      title: "The best restaurant",
      text: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
      author: "Sophie Robson",
      location: "Los Angeles, CA",
      img: "Ellipse 19.webp",
    },
    {
      id: 2,
      title: "Simply delicious",
      text: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
      author: "Matt Cannon",
      location: "San Diego, CA",
      img: "Image (1).webp",
    },
    {
      id: 3,
      title: "One of a kind",
      text: "The culinary experience at place is second to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
      author: "Andy Smith",
      location: "San Francisco, CA",
      img: "Image (2).webp",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* HEADER */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] text-center mb-16 tracking-tighter">
          What Our Customers Say
        </h2>

        {/* TESTIMONIALS GRID */}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#F9F9FB] p-8 md:p-10 rounded-[2rem] flex flex-col justify-between border border-gray-50 hover:shadow-xl transition-all duration-500 group"
            >
              <div>
                <h3 className="text-[#AD343E] text-xl md:text-2xl font-bold tracking-tight mb-6">
                  “{item.title}”
                </h3>
                <p className="text-black/70 leading-relaxed italic mb-8">
                  {item.text}
                </p>
              </div>

              <div>
                <hr className="border-black/10 mb-8" />
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <img
                      src={item.img}
                      alt={item.author}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-[#1A1A1A]">{item.author}</p>
                    <p className="text-sm text-black/50 font-medium">
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}