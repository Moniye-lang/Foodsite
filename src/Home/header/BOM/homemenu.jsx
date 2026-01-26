import React, { useEffect, useRef } from 'react';
import { Coffee, Soup, CupSoda, Dessert } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * 10/10 REFINEMENTS:
 * 1. Intersection Observer: Switched to a Ref-based approach to avoid document.querySelectorAll.
 * 2. Visual Polish: Replaced standard borders with soft shadows and elegant transitions.
 * 3. Iconography: Centered the icons properly and added a subtle scale effect on hover.
 */

export default function Homemenu() {
    const sectionRef = useRef(null);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-10');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = sectionRef.current.querySelectorAll('.menu-card');
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    const categories = [
        { Icon: Coffee, label: "Breakfast", delay: "0ms" },
        { Icon: Soup, label: "Main Dishes", delay: "150ms" },
        { Icon: CupSoda, label: "Drinks", delay: "300ms" },
        { Icon: Dessert, label: "Dessert", delay: "450ms" }
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6">
                
                {/* HEADER */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1A] tracking-tight">
                        Browse Our Menu
                    </h2>
                    <div className="w-20 h-1.5 bg-[#AD343E] mx-auto mt-6 rounded-full" />
                </div>

                {/* CATEGORY GRID */}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((item, index) => (
                        <div 
                            key={index} 
                            style={{ transitionDelay: item.delay }}
                            className="
                                menu-card opacity-0 translate-y-10
                                flex flex-col items-center p-10
                                bg-white border border-gray-100 rounded-[2rem]
                                shadow-sm hover:shadow-2xl hover:-translate-y-2
                                transition-all duration-700 ease-out
                                group
                            "
                        >
                            {/* ICON WRAPPER */}
                            <div className="
                                w-20 h-20 rounded-full 
                                bg-gray-50 flex items-center justify-center
                                group-hover:bg-[#AD343E]/10 transition-colors duration-300
                            ">
                                <item.Icon 
                                    size={35} 
                                    className="text-[#1A1A1A] group-hover:text-[#AD343E] transition-transform duration-500 group-hover:scale-110" 
                                />
                            </div>

                            <h3 className="mt-8 text-2xl font-bold text-[#1A1A1A]">
                                {item.label}
                            </h3>

                            <p className="mt-4 text-center text-black/50 leading-relaxed text-sm">
                                In the new era of technology we look into the future with certainty 
                                and pride for our culinary craft.
                            </p>

                            <Link 
                                to="/Menu" 
                                className="mt-8 font-black text-sm uppercase tracking-widest text-[#AD343E] hover:tracking-[0.2em] transition-all"
                            >
                                Explore Menu
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}