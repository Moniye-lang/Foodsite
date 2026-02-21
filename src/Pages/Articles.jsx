import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Maindata } from "./maindata";
import { ChevronLeft } from "lucide-react";

/**
 * 10/10 UX STRATEGY:
 * 1. Clean Loop: Replaced manual list divs with a mapped array to handle content dynamically.
 * 2. Visual Hierarchy: Used varying text sizes and colors to distinguish headers from body text.
 * 3. Navigation: Added a "Back" button with an icon for better usability.
 */

export default function Articles() {
  const { maindataId } = useParams();
  const article = Maindata.find((item) => item.id === parseInt(maindataId));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [maindataId]);

  if (!article) {
    return <div className="py-20 text-center">Article not found.</div>;
  }

  // Grouping list items for cleaner rendering
  const listItems = [article.list, article.list2, article.list3, article.list4, article.list5].filter(Boolean);

  return (
    <article className="min-h-screen bg-white pb-20">
      
      {/* HEADER SECTION */}
      <header className="max-w-[800px] mx-auto pt-16 px-6 text-center">
        <Link 
          to="/MainPage" 
          className="inline-flex items-center gap-2 text-[#AD343E] font-bold mb-8 hover:underline"
        >
          <ChevronLeft size={20} /> Back to Articles
        </Link>
        <h1 className="text-4xl md:text-6xl font-black text-[#1A1A1A] leading-tight tracking-tighter">
          {article.header}
        </h1>
      </header>

      {/* FEATURED IMAGE */}
      
      <div className="max-w-[1000px] mx-auto mt-12 px-6">
        <img
          src={article.img}
          alt={article.header}
          className="w-full h-[400px] md:h-[600px] object-cover rounded-[2.5rem] shadow-2xl"
        />
      </div>

      {/* CONTENT BODY */}
      <div className="max-w-[800px] mx-auto mt-16 px-6">
        
        {/* SECTION 1 */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">
          {article.header2}
        </h2>
        <p className="text-lg text-black/70 leading-relaxed mb-8">
          {article.body}
        </p>

        {/* DYNAMIC LIST */}
        <ul className="space-y-4 mb-12">
          {listItems.map((text, idx) => (
            <li key={idx} className="flex gap-4 items-start text-lg font-semibold text-black/80">
              <span className="text-[#AD343E]">•</span> {text}
            </li>
          ))}
        </ul>

        {/* SECTION 2 */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">
          {article.header3}
        </h2>
        
        <div className="bg-[#F9F9FB] p-8 rounded-[2rem] border-l-4 border-[#AD343E] italic text-black/70 text-lg mb-12">
          "Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsan."
        </div>

        {/* SECONDARY IMAGE */}
        <img
          src="/pexels-suzy-hazelwood-2966196 1 (1).webp"
          alt="Atmospheric detail"
          className="w-full rounded-[2rem] mb-12"
        />

        <p className="text-lg text-black/70 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus ve of all hendrerit elementum morbi curabitur etiam nibh justo.
        </p>
      </div>

      {/* FOOTER CALL TO ACTION */}
      <footer className="mt-20 text-center">
        <Link 
          to="/MainPage" 
          className="px-10 py-4 bg-[#AD343E] text-white font-bold rounded-full shadow-lg shadow-[#AD343E]/20 hover:bg-[#8e2a33] transition-all inline-block"
        >
          Back to Articles
        </Link>
      </footer>
    </article>
  );
}