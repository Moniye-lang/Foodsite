import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";
import { fdata } from "./footerdata";
import { useState } from "react";

export default function Footer() {
  const [thedata] = useState(fdata);

  return (
    <div className="min-h-[90vh] bg-[#333] text-white grid items-center px-4 py-10">
      <div className="flex flex-col lg:flex-row justify-evenly gap-10">

        <div className="grid max-w-[300px]">
          <div className="flex items-center gap-[15px]">
            <img src="japanese-food.png" alt="" className="h-[45px]" />
            <div className="text-[28px] sm:text-[32px]">Bistro Bliss</div>
          </div>
          <div className="mt-4 text-sm leading-relaxed">
            In the new era of technology we look <br /> to the future with certainty and pride <br /> for our company and.
          </div>
          <div className="flex gap-[15px] mt-4 mb-10">
            <button className="bg-[#AD343E] size-[27px] rounded-full flex items-center justify-center cursor-pointer">
              <Twitter />
            </button>
            <button className="bg-[#AD343E] size-[27px] rounded-full flex items-center justify-center cursor-pointer">
              <Facebook />
            </button>
            <button className="bg-[#AD343E] size-[27px] rounded-full flex items-center justify-center cursor-pointer">
              <Instagram />
            </button>
            <button className="bg-[#AD343E] size-[27px] rounded-full flex items-center justify-center cursor-pointer">
              <Github />
            </button>
          </div>
        </div>

        <div className="grid gap-[20px]">
          <div className="font-semibold text-[19px]">Pages</div>
          <div className="grid gap-[15px] text-[#fffafa9e] text-sm">
            <Link to='/'>Home</Link>
            <Link to='/MainAbout'>About</Link>
            <Link to='/Menu'>Menu</Link>
            <Link to='/Menu'>Pricing</Link>
            <Link to='/MainPage'>Blog</Link>
            <Link to='/MainPage'>Content</Link>
            <Link to='/Contact'>Contact</Link>
            <Link>404</Link>
          </div>
        </div>

        <div className="grid max-w-[320px]">
          <div className="font-medium mb-2">Follow Us On Instagram</div>
          <div className="grid grid-cols-2 gap-[15px]">
            {thedata.map((items) => (
              <div key={items.id}>
                <img src={items.img} alt="" className="h-[130px] w-full object-cover rounded-[10px]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-[#fffafa9e] text-center mt-10 text-sm">
        Copyright © 2023 Hashtag Developer. All Rights Reserved
      </div>
    </div>
  );
}
