import { useEffect } from "react";
import { PhoneIcon, Mail, MapPin } from "lucide-react";
import "../BOM/minabout.css";

export default function M_about() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slideup2");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const section = document.querySelector(".about-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-section opacity-0 flex flex-col lg:flex-row h-auto lg:h-[100vh] bg-[rgb(128,128,128,0.15)] items-center justify-evenly px-4 py-10 gap-10">
      <div className="relative w-full max-w-[500px] h-[500px]">
        <div className="notmain h-full w-full relative rounded-[10px] bg-gray-300/20">
          <div className="absolute bg-[#333] text-white w-[290px] h-[240px] rounded-[20px] grid bottom-0 right-0 translate-y-[20px] translate-x-[10px] p-4">
            <div className="font-semibold text-[18px]">Come and Visit Us</div>
            <p className="flex gap-3 mt-4">
              <PhoneIcon className="size-4 mt-[3px]" />
              <span className="text-[14px]">(414) 857-0107</span>
            </p>
            <p className="flex gap-3">
              <Mail className="size-4 mt-[3px]" />
              <span className="text-[14px]">happytummy@restaurant.com</span>
            </p>
            <p className="flex gap-3">
              <MapPin className="size-4 mt-[3px]" />
              <span className="text-[14px]">
                837 W. Marshall Lane, Marshalltown,
                <br />
                IA 50158, Los Angeles
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[600px] text-center lg:text-left px-2">
        <div className="text-[32px] sm:text-[40px] lg:text-[50px] font-medium leading-tight">
          We provide healthy <br /> food for your family.
        </div>
        <p className="font-medium text-[#333] mt-4 text-[15px] sm:text-[16px]">
          Our story began with a vision to create a unique dining <br className="hidden sm:block" />
          experience that merges fine dining, exceptional service, and a <br className="hidden sm:block" />
          vibrant ambiance. Rooted in the city's rich culinary culture, we aim to <br className="hidden sm:block" />
          honor our local roots while infusing a global palate.
        </p>
        <p className="text-[#333] mt-4 text-[15px] sm:text-[16px]">
          At Place, we believe that dining is not just about food, but also about the <br className="hidden sm:block" />
          overall experience. Our staff, renowned for their warmth and dedication, <br className="hidden sm:block" />
          strives to make every visit an unforgettable event.
        </p>
        <button className="mt-6 border-2 w-[180px] h-[50px] font-[550] text-[#333] rounded-[40px] hover:bg-[#333] hover:text-white transition-all">
          More About Us
        </button>
      </div>
    </div>
  );
}