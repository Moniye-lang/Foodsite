import React, { useEffect, useState } from "react";
import { Send } from "lucide-react";

/**
 * BISTRO BLISS - CONTACT PAGE (v1.1)
 * REVISIONS:
 * 1. Fixed JSX comment syntax error.
 * 2. Added bg-gray-50 to inputs for better visual separation from form.
 * 3. Standardized rounded-2xl for inputs, textarea, and button.
 * 4. Added active/focus states for a premium feel.
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your message has been sent successfully.");
  };

  // Base styling for all inputs to ensure consistency
  const inputBaseStyle = `
    w-full p-4 bg-gray-50 border-2 border-gray-200 rounded-2xl
    text-[#1A1A1A] placeholder:text-gray-400
    focus:bg-white focus:border-[#AD343E] focus:ring-4 focus:ring-[#AD343E]/10 
    outline-none transition-all duration-300
  `;

  return (
    <section className="min-h-screen bg-[#F2F4F7] py-16 md:py-24 px-6">
      
      {/* HEADER SECTION */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black text-[#1A1A1A] tracking-tighter">
          Contact Us
        </h1>
        <p className="mt-6 text-black/60 text-lg max-w-xl mx-auto">
          We consider all the drivers of change to provide you the components 
          you need to create a truly wonderful dining experience.
        </p>
      </div>

      {/* FORM CONTAINER */}
      
      <div className="max-w-[800px] mx-auto">
        <form 
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-[2.5rem] p-8 md:p-12 border border-gray-100"
        >
          {/* NAME & EMAIL ROW */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-[15px] font-bold text-[#1A1A1A] ml-2">Name</label>
              <input 
                id="name"
                type="text" 
                placeholder="Enter your name" 
                required
                className={inputBaseStyle}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-[15px] font-bold text-[#1A1A1A] ml-2">Email</label>
              <input 
                id="email"
                type="email" 
                placeholder="Enter email address" 
                required
                className={inputBaseStyle}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          {/* SUBJECT FIELD */}
          <div className="space-y-2 mb-6">
            <label htmlFor="subject" className="text-[15px] font-bold text-[#1A1A1A] ml-2">Subject</label>
            <input 
              id="subject"
              type="text" 
              placeholder="Write a subject" 
              className={inputBaseStyle}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
            />
          </div>

          {/* MESSAGE FIELD */}
          <div className="space-y-2 mb-10">
            <label htmlFor="message" className="text-[15px] font-bold text-[#1A1A1A] ml-2">Message</label>
            <textarea 
              id="message"
              placeholder="Write your message" 
              rows="6"
              className={`${inputBaseStyle} resize-none`}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>

          {/* SUBMIT BUTTON */}
          <button 
            type="submit"
            className="
              w-full py-4 bg-[#AD343E] text-white font-bold rounded-2xl
              flex items-center justify-center gap-3
              hover:bg-[#1A1A1A] hover:shadow-xl transition-all duration-300
              active:scale-[0.98] cursor-pointer
            "
          >
            Send Message <Send size={20} />
          </button>
        </form>
      </div>
    </section>
  );
}