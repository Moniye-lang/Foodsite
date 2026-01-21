import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔒 Disable background scroll when sidebar is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const activeStyle =
    "flex items-center text-[#AD343E] text-[20px] font-bold px-4 py-2 rounded-xl transition";

  const defaultStyle =
    "px-4 py-2 text-[#333] font-medium flex items-center text-lg hover:text-[#AD343E] transition";

  return (
    <>
      {/* NAVBAR */}
      <div className="bg-white h-[80px] flex items-center justify-between lg:justify-evenly px-6 md:px-12 relative z-50">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="japanese-food.png" alt="Logo" className="h-[35px]" />
          <span className="text-[22px] sm:text-[26px] font-semibold">
            Bistro Bliss
        </span>
          </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={location.pathname === "/" ? activeStyle : defaultStyle}>Home</Link>
          <Link to="/MainAbout" className={location.pathname === "/MainAbout" ? activeStyle : defaultStyle}>About Us</Link>
          <Link to="/Menu" className={location.pathname === "/Menu" ? activeStyle : defaultStyle}>Menu</Link>
          <Link to="/MainPage" className={location.pathname === "/MainPage" ? activeStyle : defaultStyle}>Pages</Link>
          <Link to="/Contact" className={location.pathname === "/Contact" ? activeStyle : defaultStyle}>Contact</Link>
        </div>

        {/* HAMBURGER */}
        <div
          className="md:hidden flex flex-col justify-center items-center w-[30px] h-[30px] gap-1 cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <span className="w-full h-[3px] bg-black"></span>
          <span className="w-full h-[3px] bg-black"></span>
          <span className="w-full h-[3px] bg-black"></span>
        </div>
      </div>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* RIGHT SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
       <div className="h-[80px] flex items-center justify-end px-5 border-b">
  <button
    onClick={() => setMenuOpen(false)}
    className="text-2xl font-bold leading-none"
  >
    ×
  </button>
</div>


        <nav className="flex flex-col gap-4 mt-6 px-6">
          <Link to="/" onClick={() => setMenuOpen(false)} className={location.pathname === "/" ? activeStyle : defaultStyle}>Home</Link>
          <Link to="/MainAbout" onClick={() => setMenuOpen(false)} className={location.pathname === "/MainAbout" ? activeStyle : defaultStyle}>About</Link>
          <Link to="/Menu" onClick={() => setMenuOpen(false)} className={location.pathname === "/Menu" ? activeStyle : defaultStyle}>Menu</Link>
          <Link to="/MainPage" onClick={() => setMenuOpen(false)} className={location.pathname === "/MainPage" ? activeStyle : defaultStyle}>Pages</Link>
          <Link to="/Contact" onClick={() => setMenuOpen(false)} className={location.pathname === "/Contact" ? activeStyle : defaultStyle}>Contact</Link>
        </nav>
      </div>
    </>
  );
}
