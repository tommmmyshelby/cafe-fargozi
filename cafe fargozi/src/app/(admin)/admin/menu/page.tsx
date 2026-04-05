"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuData } from "@/data/menu";
import AdminMenuItemCard from "@/components/ui/AdminMenuItemCard";
import { Plus, Search, Filter } from "lucide-react";
import AddItemModal from "@/components/ui/AddItemModal";

const categories = ["Shawarma", "Burgers", "Sides", "Beverages"];

export default function MenuCMS() {
  const [activeCategory, setActiveCategory] = useState("Shawarma");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto">
      <AddItemModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
        <div>
          <p className="text-fargozi-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-2">Management</p>
          <h1 className="font-display text-5xl font-bold italic tracking-tight">Culinary Architecture.</h1>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)} // 3. Open modal on click
          className="flex items-center gap-4 px-8 py-4 bg-fargozi-red text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-red-900/20"
        >
          <Plus size={18} /> Add New Blueprint Item
        </button>
      </div>

      {/* TOOLS BAR */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12 bg-[#0A0A0A] p-6 rounded-[2.5rem] border border-white/5">
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all ${
                activeCategory === cat ? "text-fargozi-red" : "text-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 px-6 py-3 bg-white/5 rounded-2xl border border-white/10 w-full lg:w-96">
          <Search size={16} className="text-white/20" />
          <input 
            type="text" 
            placeholder="Search Architecture..." 
            className="bg-transparent outline-none text-[10px] font-bold uppercase tracking-widest w-full text-white" 
          />
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {menuData
            .filter((i) => i.category === activeCategory)
            .map((item) => (
              <AdminMenuItemCard key={item.id} item={item} />
            ))}
        </AnimatePresence>
      </div>

      {/* WATERMARK */}
      <div className="fixed bottom-10 right-10 opacity-5 select-none pointer-events-none">
        <h2 className="text-[10vw] font-display font-bold uppercase tracking-tighter">CMS</h2>
      </div>
    </div>
  );
}