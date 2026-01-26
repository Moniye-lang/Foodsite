import React, { useEffect, useState } from "react";
import { Calendar, Users, Clock, Info } from "lucide-react";

/**
 * 10/10 RESERVATION UX:
 * 1. Specific Inputs: Used type="date" and type="time" for native mobile pickers.
 * 2. Visual Context: Added a "Booking Policy" card to manage guest expectations.
 * 3. Consistent Branding: Applied the #AD343E red for all primary actions.
 */

export default function BookATable() {
  const [bookingData, setBookingData] = useState({
    date: "",
    time: "",
    name: "",
    phone: "",
    totalPerson: "2 Person",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleBooking = (e) => {
    e.preventDefault();
    alert(`Table reserved for ${bookingData.name} on ${bookingData.date}!`);
  };

  const inputStyle = `
    w-full p-4 bg-gray-50 border-2 border-gray-200 rounded-2xl
    text-[#1A1A1A] outline-none transition-all duration-300
    focus:bg-white focus:border-[#AD343E] focus:ring-4 focus:ring-[#AD343E]/10
  `;

  return (
    <section className="min-h-screen bg-[#F9F9FB] py-16 md:py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-[#1A1A1A] tracking-tighter">
            Book A Table
          </h1>
          <p className="mt-4 text-black/60 text-lg max-w-lg mx-auto">
            Secure your spot at Bistro Bliss. We look forward to serving you 
            an unforgettable meal.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* LEFT: THE FORM */}
          
          <form 
            onSubmit={handleBooking}
            className="w-full lg:w-2/3 bg-white shadow-2xl rounded-[2.5rem] p-8 md:p-12 border border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[15px] font-bold text-[#1A1A1A] ml-2">
                  <Calendar size={16} className="text-[#AD343E]"/> Date
                </label>
                <input 
                  type="date" 
                  required
                  className={inputStyle}
                  onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[15px] font-bold text-[#1A1A1A] ml-2">
                  <Clock size={16} className="text-[#AD343E]"/> Time
                </label>
                <input 
                  type="time" 
                  required
                  className={inputStyle}
                  onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-[15px] font-bold text-[#1A1A1A] ml-2">Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  required
                  className={inputStyle}
                  onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[15px] font-bold text-[#1A1A1A] ml-2">Phone</label>
                <input 
                  type="tel" 
                  placeholder="x-xxx-xxx-xxxx"
                  required
                  className={inputStyle}
                  onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2 mb-10">
              <label className="flex items-center gap-2 text-[15px] font-bold text-[#1A1A1A] ml-2">
                <Users size={16} className="text-[#AD343E]"/> Total Person
              </label>
              <select 
                className={inputStyle}
                onChange={(e) => setBookingData({...bookingData, totalPerson: e.target.value})}
              >
                <option>1 Person</option>
                <option>2 Person</option>
                <option>3 Person</option>
                <option>4 Person</option>
                <option>Large Party (5+)</option>
              </select>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-[#AD343E] text-white font-bold rounded-2xl hover:bg-[#1A1A1A] transition-all duration-300 shadow-lg shadow-[#AD343E]/20"
            >
              Book Now
            </button>
          </form>

          {/* RIGHT: INFO PANEL */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="bg-[#1A1A1A] text-white p-8 rounded-[2rem] shadow-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Info size={20} className="text-[#AD343E]"/> Booking Policy
              </h3>
              <ul className="space-y-4 text-sm text-white/70">
                <li>• For parties larger than 6, please call us directly.</li>
                <li>• Reservations are held for 15 minutes past the booking time.</li>
                <li>• Please notify us 2 hours in advance for cancellations.</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
               <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Need Help?</h3>
               <p className="text-black/50 text-sm mb-4">Our support team is available from 9am to 9pm.</p>
               <p className="text-[#AD343E] font-bold text-lg">+1 (555) 123-4567</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}