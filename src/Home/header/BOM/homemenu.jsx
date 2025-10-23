import { Coffee, Soup, CupSoda, Dessert } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import '../BOM/homemenu.css'

export default function Homemenu() {
    useEffect(() => { 
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        const elems = document.querySelectorAll('.menu-card');

        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slideup');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        elems.forEach(el => obs.observe(el));

        return () => obs.disconnect();
    }, []);

    return (
        <div className="min-h-screen px-4 py-[90px] flex flex-col items-center bg-white">
            <p className="text-[32px] md:text-[60px] text-[#333] font-medium text-center mb-[50px]">
                Browse Our Menu
            </p>

            <div className="flex flex-wrap justify-center gap-[30px] max-w-[1200px]">
                {
                    [
                     { Icon: Coffee, label: "Breakfast" },
                     { Icon: Soup, label: "Main Dishes" },
                     { Icon: CupSoda, label: "Drinks" },
                     { Icon: Dessert, label: "Dessert" }
                    ].map((item, index) => (
                        <div 
                            key={index} 
                            className="menu-card w-[270px] h-[320px] bg-[#fff] border-2 rounded-[10px] border-[rgba(128,128,128,0.7)] grid items-center justify-center opacity-0"
                        >
                            <item.Icon className="text-[30px] text-[#333] bg-[rgba(128,128,128,0.2)] lg:ml-[70px] w-[70px] h-[60px] p-[10px] rounded-full mt-[30px]" />
                            <p className="text-[24px] font-[550] text-center">{item.label}</p>
                            <p className="mb-[10px] text-center px-2 text-sm">
                                In the new era of technology we <br /> look in the future with certainty <br /> and pride for our life.
                            </p>
                            <Link to="/Menu" className="text-[#AD343E] font-medium mb-[20px] cursor-pointer hover:opacity-80 text-center">
                                Explore Menu
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}