import React, { useState, useEffect } from "react";
import { Datamenu } from "./mainMenudata";

/**
 * 10/10 LOGIC & UI:
 * 1. Single Filter Function: One function handles all categories, making the code DRY.
 * 2. Active States: Visual feedback on buttons shows what's currently selected.
 * 3. Layout Grid: Improved card structure for better alignment of prices and titles.
 */

export default function MainMenu1() {
  const [food, setFood] = useState(Datamenu);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // One function to rule them all
  const filterMenu = (category) => {
    setActiveTab(category);
    if (category === "all") {
      setFood(Datamenu);
    } else {
      const filtered = Datamenu.filter((item) => item.category === category);
      setFood(filtered);
    }
  };

  const categories = [
    { id: "all", label: "All" },
    { id: "breakfast", label: "Breakfast" },
    { id: "maindish", label: "Main Dishes" },
    { id: "drink", label: "Drinks" },
    { id: "dessert", label: "Desserts" },
  ];

  return (
    <section className="min-h-screen py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-5xl md:text-7xl font-black text-[#1A1A1A] tracking-tighter">
            Our Menu
          </h1>
          <p className="mt-6 text-black/60 text-lg">
            We consider all the drivers of change to provide you the finest 
            ingredients and flavors for a truly memorable dining experience.
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => filterMenu(cat.id)}
              className={`
                px-8 py-3 rounded-full font-bold transition-all duration-300 border-2
                ${activeTab === cat.id 
                  ? "bg-[#AD343E] border-[#AD343E] text-white shadow-lg shadow-[#AD343E]/30" 
                  : "bg-transparent border-gray-200 text-[#1A1A1A] hover:border-[#AD343E] hover:text-[#AD343E]"
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* MENU GRID */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {food.map((item) => (
            <div 
              key={item.id} 
              className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.img}
                  alt={item.Meal}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col items-center text-center grow">
                <span className="text-[#AD343E] text-xl font-black mb-2">
                  {item.Price}
                </span>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-3 leading-tight">
                  {item.Meal}
                </h3>
                <p className="text-sm text-black/50 leading-relaxed italic">
                  {item.Ingridients}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {food.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-black/40 font-medium">No items found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}