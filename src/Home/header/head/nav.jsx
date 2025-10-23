import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white h-[80px] flex items-center justify-between lg:justify-evenly px-6 md:px-12 relative z-50">
      
      <div className="flex items-center gap-2.5">
        <img src="japanese-food.png" alt="" className="h-[35px]" />
        <span className="text-[22px] sm:text-[26px] font-semibold">Bistro Bliss</span>
      </div>

     
      <ul className="hidden md:flex gap-[30px] items-center">
        <Link to="/" className="focus:bg-gray-300/30 p-[5px] rounded-[30px] font-semibold">Home</Link>
        <Link to="/MainAbout" className="focus:bg-gray-300/30 p-[5px] rounded-[30px] font-semibold">About</Link>
        <Link to="/Menu" className="focus:bg-gray-300/30 p-[5px] rounded-[30px] font-semibold">Menu</Link>
        <Link to="/MainPage" className="focus:bg-gray-300/30 p-[5px] rounded-[30px] font-semibold">Pages</Link>
        <Link to="/Contact" className="focus:bg-gray-300/30 p-[5px] rounded-[30px] font-semibold">Contact</Link>
      </ul>
      <div
        className="md:hidden flex flex-col justify-center items-center w-[30px] h-[30px] gap-1 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`w-full h-[3px] bg-black transition-all ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}></span>
        <span className={`w-full h-[3px] bg-black ${menuOpen ? "opacity-0" : ""}`}></span>
        <span className={`w-full h-[3px] bg-black transition-all ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}></span>
      </div>
      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center gap-4 py-4 z-40">
          <Link to="/" onClick={() => setMenuOpen(false)} className="font-semibold">Home</Link>
          <Link to="/MainAbout" onClick={() => setMenuOpen(false)} className="font-semibold">About</Link>
          <Link to="/Menu" onClick={() => setMenuOpen(false)} className="font-semibold">Menu</Link>
          <Link to="/MainPage" onClick={() => setMenuOpen(false)} className="font-semibold">Pages</Link>
          <Link to="/Contact" onClick={() => setMenuOpen(false)} className="font-semibold">Contact</Link>
         
        </div>
      )}
    </div>
  );
}
