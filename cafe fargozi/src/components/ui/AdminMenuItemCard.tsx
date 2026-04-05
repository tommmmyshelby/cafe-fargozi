"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MenuItem } from "@/data/menu";
import { Edit3, EyeOff, Save, Trash2, Zap, Flame } from "lucide-react";

export default function AdminMenuItemCard({ item }: { item: MenuItem }) {
  const [isSoldOut, setIsSoldOut] = useState(false);

  return (
    <motion.div 
      layout
      className={`p-6 rounded-[2.5rem] border transition-all ${
        isSoldOut ? "bg-black border-white/5 opacity-50" : "bg-[#0F0F0F] border-white/10 shadow-xl"
      }`}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[8px] font-bold uppercase tracking-widest text-fargozi-gold bg-fargozi-gold/10 px-3 py-1 rounded-full">
              {item.category}
            </span>
            {isSoldOut && (
              <span className="text-[8px] font-bold uppercase tracking-widest text-fargozi-red bg-fargozi-red/10 px-3 py-1 rounded-full">
                Sold Out
              </span>
            )}
          </div>
          <h3 className="text-2xl font-display font-bold text-white uppercase">{item.name}</h3>
        </div>
        <button 
          onClick={() => setIsSoldOut(!isSoldOut)}
          className={`p-3 rounded-xl transition-all ${isSoldOut ? "bg-fargozi-red text-white" : "bg-white/5 text-white/40 hover:text-white"}`}
        >
          <EyeOff size={18} />
        </button>
      </div>

      {/* PRICE & DESC EDITORS (MOCKUP) */}
      <div className="space-y-4 mb-8">
        <div className="flex flex-col gap-1">
          <label className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Price (INR)</label>
          <input 
            type="text" 
            defaultValue={item.price.toFixed(2)} 
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-fargozi-gold font-display font-bold outline-none focus:border-fargozi-gold"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Description</label>
          <textarea 
            defaultValue={item.description}
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs text-white/60 outline-none focus:border-fargozi-red h-20 resize-none"
          />
        </div>
      </div>

      {/* FLAVOR RADAR TUNER */}
      <div className="pt-6 border-t border-white/5 space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Flame size={12} className="text-fargozi-red" />
            <span className="text-[8px] font-bold uppercase text-white/40 tracking-widest">Spice Level</span>
          </div>
          <input type="range" min="1" max="3" defaultValue={item.isSpicy ? "3" : "1"} className="accent-fargozi-red w-24 h-1" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Zap size={12} className="text-fargozi-gold" />
            <span className="text-[8px] font-bold uppercase text-white/40 tracking-widest">Texture</span>
          </div>
          <select className="bg-transparent text-[9px] font-bold text-fargozi-gold uppercase outline-none">
            <option>Succulent</option>
            <option>Gourmet Crispy</option>
          </select>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        <button className="flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10">
          <Trash2 size={14} className="text-fargozi-red" /> Delete
        </button>
        <button className="flex items-center justify-center gap-2 py-3 bg-fargozi-red text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-red-700">
          <Save size={14} /> Update
        </button>
      </div>
    </motion.div>
  );
}