"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuData, MenuItem } from "@/data/menu";
import NutritionModal from "@/components/ui/NutritionModal";
import Link from "next/link";
import { Star, Info, Flame, Zap, Search, ArrowRight, Utensils } from "lucide-react";

const categories = ["All", "Shawarma", "Burgers", "Sides", "Beverages"];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMenu = menuData.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-[#0A0A0A] pt-32 pb-40 min-h-screen">
      <NutritionModal item={selectedItem} onClose={() => setSelectedItem(null)} />

      {/* HEADER SECTION */}
      <section className="px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-8xl md:text-[10vw] font-bold leading-[0.8] mb-12 tracking-tighter uppercase">
            The <span className="text-fargozi-red italic">Catalog.</span>
          </motion.h1>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-12">
            <div className="flex flex-wrap justify-center gap-8">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActiveCategory(cat)} className={`relative text-[10px] uppercase tracking-[0.4em] font-bold transition-all ${activeCategory === cat ? "text-fargozi-red" : "text-fargozi-white/40 hover:text-white"}`}>
                  {cat}
                  {activeCategory === cat && <motion.div layoutId="nav-line" className="absolute -bottom-12 left-0 w-full h-1 bg-fargozi-red" />}
                </button>
              ))}
            </div>
            <div className="w-full md:w-72 flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/10 rounded-full">
              <Search size={14} className="text-white/20" />
              <input type="text" placeholder="Analyze Flavors..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="bg-transparent outline-none text-[10px] font-bold uppercase tracking-widest w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* GRID SECTION */}
      <section className="px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item) => (
              <motion.div layout key={item.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="group">
                <Link href={`/order?id=${item.id}`} className="block">
                  <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 border border-white/5 bg-white/5 shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=1000" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                    <div className="absolute top-8 right-8 bg-fargozi-red text-white text-[10px] font-bold uppercase px-5 py-2 rounded-full shadow-2xl">₹{item.price.toFixed(0)}</div>
                    <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-fargozi-black via-transparent to-transparent">
                       <p className="text-fargozi-gold text-[10px] font-bold uppercase tracking-widest mb-3">{item.category}</p>
                       <h3 className="text-3xl font-display font-bold group-hover:text-fargozi-red transition-colors leading-tight">{item.name}</h3>
                    </div>
                  </div>
                </Link>

                <div className="px-6 space-y-8">
                   <p className="text-fargozi-white/40 text-xs italic opacity-60 leading-relaxed">"{item.description}"</p>
                   
                   {/* FLAVOR RADAR (NEW FEATURE) */}
                   <div className="pt-6 border-t border-white/5 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Spice Intensity</span>
                        <div className="flex gap-1">
                          {[...Array(3)].map((_, i) => <div key={i} className={`w-3 h-1 rounded-full ${i < (item.isSpicy ? 3 : 1) ? 'bg-fargozi-red' : 'bg-white/10'}`} />)}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Texture profile</span>
                        <span className="text-[9px] font-bold text-fargozi-gold uppercase italic">{item.category === 'Shawarma' ? 'Succulent' : 'Gourmet Crispy'}</span>
                      </div>
                   </div>

                   <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedItem(item); }} className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-widest text-white/20 hover:text-fargozi-gold transition-colors">
                      <Info size={12} /> Nutrition Facts
                   </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}