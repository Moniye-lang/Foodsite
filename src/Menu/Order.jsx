import React from "react";

export default function Order() {
  const partners = [
    { name: "Uber Eats", color: "#05C167", type: "text" },
    { name: "GRUBHUB", color: "#F63440", type: "text", bold: true },
    { name: "Postmates", color: "#000000", type: "text" },
    // Assuming these images are already colored versions
    { src: "Vector (2).png", type: "image" }, 
    { src: "Group.png", type: "image" },
    { src: "Vector (4).png", type: "image" },
    { src: "Group 39981.png", type: "image" },
    { src: "Vector (5).png", type: "image" },
    { src: "Group 39979.png", type: "image" },
  ];

  return (
    <section className="bg-[#F9F9FB] py-20 px-6 mt-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* TEXT CONTENT */}
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] leading-tight tracking-tighter">
            You can order <br className="hidden lg:block" /> through apps
          </h2>
          <p className="mt-6 text-black/60 text-lg leading-relaxed">
            Can't make it to us? We'll come to you. Order your favorite meals 
            through our trusted delivery partners and enjoy Bistro Bliss 
            anywhere in the city.
          </p>
        </div>

        {/* LOGO GRID */}
        <div className="w-full lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              // Removed 'group' class as it's no longer needed for internal hover effects
              className="bg-white h-[70px] md:h-[80px] px-4 rounded-[1rem] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center justify-center border border-gray-50"
            >
              {partner.type === "text" ? (
                <span 
                  className={`text-lg md:text-xl ${partner.bold ? 'font-black' : 'font-bold'}`}
                  style={{ color: partner.color }}
                >
                  {partner.name === "Uber Eats" ? (
                    <>Uber <span className="text-[#05C167]">Eats</span></>
                  ) : partner.name}
                </span>
              ) : (
                // REMOVED: grayscale group-hover:grayscale-0
                <img 
                  src={partner.src} 
                  alt="Delivery Partner" 
                  className="max-h-[30px] md:max-h-[35px] w-auto" 
                />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}