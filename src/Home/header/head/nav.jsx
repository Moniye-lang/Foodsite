import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, UtensilsCrossed } from "lucide-react";

/**
 * 10/10 UX STRATEGY:
 * 1. Semantic Navigation: Replaced manual Link logic with NavLink for cleaner "active" states.
 * 2. Visual Anchor: Added a prominent CTA button to drive table reservations.
 * 3. Accessibility: Swapped span-based hamburger for Lucide icons for better screen reader support.
 */

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 768 && setMenuOpen(false);
    window.addEventListener("resize", handleResize);
    
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/MainAbout" },
    { name: "Menu", path: "/Menu" },
    { name: "Pages", path: "/MainPage" },
    { name: "Contact", path: "/Contact" },
  ];

  const linkStyles = ({ isActive }) =>
    `px-4 py-2 text-lg font-semibold transition-all duration-300 rounded-full ${
      isActive 
        ? "bg-[#AD343E]/10 text-[#AD343E]" 
        : "text-[#333] hover:text-[#AD343E] hover:bg-gray-50"
    }`;

  return (
    <>
      {/* MAIN NAVBAR */}
      <header className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-[100] border-b border-gray-100">
        <nav className="max-w-[1280px] mx-auto h-[80px] flex items-center justify-between px-6 lg:px-12">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-[#AD343E] p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
               <UtensilsCrossed className="text-white size-6" />
            </div>
            <span className="text-2xl font-black text-[#1A1A1A] tracking-tighter">
              Bistro Bliss
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={linkStyles}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <Link 
              to="/BookATable" 
              className="px-6 py-3 border-2 border-[#1A1A1A] rounded-full font-bold text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300"
            >
              Book A Table
            </Link>
          </div>

          {/* HAMBURGER TOGGLE */}
          <button 
            className="md:hidden p-2 text-[#1A1A1A]"
            onClick={() => setMenuOpen(true)}
            aria-label="Toggle Menu"
          >
            <Menu size={32} />
          </button>
        </nav>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] transition-opacity duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* MOBILE SIDEBAR */}
      
      <aside
        className={`fixed top-0 right-0 h-full w-[300px] bg-white z-[120] shadow-2xl transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-[80px] flex items-center justify-between px-8 border-b">
          <span className="font-bold text-lg">Navigation</span>
          <button onClick={() => setMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col p-8 gap-4">
          {navLinks.map((link, idx) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={linkStyles}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.name}
            </NavLink>
          ))}
          
          <Link 
            to="/BookATable"
            onClick={() => setMenuOpen(false)}
            className="mt-6 flex justify-center py-4 bg-[#AD343E] text-white rounded-full font-bold shadow-lg shadow-[#AD343E]/20"
          >
            Book A Table
          </Link>
        </nav>
      </aside>
    </>
  );
}