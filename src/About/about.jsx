import { PhoneIcon, Mail, MapPin } from "lucide-react";
import { useEffect } from "react";

export default function About() {

  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div className="flex flex-col-reverse lg:flex-row h-auto lg:h-[100vh] bg-[rgb(128,128,128,15%)] items-center justify-evenly px-[20px] py-[50px] gap-[50px]">
      <div className="relative flex flex-col items-center">
        <img
          src="image 111.png"
          alt=""
          className="h-[450px] w-[350px] sm:w-[400px] md:w-[500px] rounded-[10px] object-cover"
        />

        <div className="bg-[#333] text-white w-[280px] sm:w-[320px] h-auto p-5 rounded-[20px] 
                        mt-5 lg:mt-0 lg:absolute lg:bottom-5 lg:right-[-40px]">
          <div className="font-[650] text-lg mb-3">Come and Visit Us</div>

          <p className="flex items-center gap-2 mb-2">
            <PhoneIcon className="size-[15px]" /> 
            <span className="text-[14px]">(414)857-0107</span>
          </p>

          <p className="flex items-center gap-2 mb-2">
            <Mail className="size-[15px]" /> 
            <span className="text-[14px]">happytummy@resturant.com</span>
          </p>

          <p className="flex items-start gap-2">
            <MapPin className="size-[15px] mt-[3px]" /> 
            <span className="text-[14px]">
              837 W. Marshall Lane Marshalltown, <br />
              IA 50158, Los Angeles
            </span>
          </p>
        </div>
      </div>

      {/* RIGHT TEXT */}
      <div>
        <div className="text-[30px] sm:text-[40px] lg:text-[50px] font-medium">
          We provide healthy <br /> food for your family.
        </div>
        <p className="font-medium text-[#333] mt-3">
          Our story began with a vision to create a unique dining <br />
          experience that merges fine dining, exceptional service, and a <br />
          vibrant ambiance. Rooted in city's rich culinary culture, we aim to <br />
          honor our local roots while infusing a global palate.
        </p>
        <br />
        <p className="text-[#333]">
          At place, we believe that dining is not just about food, but also about the <br />
          overall experience. Our staff, renowned for their warmth and dedication, <br />
          strives to make every visit an unforgettable event.
        </p>
      </div>
    </div>
  );
}
