import { useState, useEffect } from "react";
import { edata } from "./eventsdata";
import "../BOM/minabout.css";

export default function Events() {
  const [card] = useState(edata);

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

    const sections = document.querySelectorAll(".events-section, .event-card");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="opacity-0 events-section min-h-screen px-4 py-10">
      <div className="text-[30px] md:text-[42px] font-[550] mb-10 text-center md:text-left md:ml-[135px]">
        We also offer unique <br className="hidden md:block" />
        services for your events
      </div>

      <div className="flex flex-wrap justify-center gap-[30px]">
        {card.map((item) => (
          <div
            key={item.id}
            className="opacity-0 event-card w-full max-w-[260px]"
          >
            <img
              src={item.img} alt={item.title} className="h-[300px] w-full object-cover rounded-[10px]"/>
            <p className="mt-[25px] font-[550] text-[20px] text-center md:text-left">{item.title}</p>
            <p className="mt-[15px] text-sm text-[#444] text-center md:text-left">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}