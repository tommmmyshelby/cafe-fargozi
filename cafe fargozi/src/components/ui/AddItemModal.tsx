"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Flame, Zap, Save, DollarSign, FileText } from "lucide-react";
import { useState } from "react";

export default function AddItemModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [spiceLevel, setSpiceLevel] = useState(1);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          {/* BACKDROP */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-fargozi-black/90 backdrop-blur-xl"
          />

          {/* MODAL CONTENT */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-[#111] border border-white/10 rounded-[3rem] p-10 shadow-2xl overflow-hidden"
          >
            {/* Brand Glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-fargozi-red/10 rounded-full blur-[80px]" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <p className="text-fargozi-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-2">Inventory Management</p>
                  <h3 className="text-3xl font-display font-bold italic tracking-tight">Add New Architecture.</h3>
                </div>
                <button onClick={onClose} className="p-3 hover:bg-white/5 rounded-full text-white/40 hover:text-white transition-all">
                  <X size={20} />
                </button>
              </div>

              <form className="space-y-8">
                {/* BASIC INFO SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">Item name</label>
                    <input type="text" placeholder="e.g. Istanbul Beef Roll" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-fargozi-red transition-all text-xs uppercase" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 flex items-center gap-2"><DollarSign size={10}/> Price (INR)</label>
                    <input type="number" placeholder="000.00" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-fargozi-red transition-all text-xs font-mono text-fargozi-gold" />
                  </div>
                </div>

                {/* DESCRIPTION SECTION */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 flex items-center gap-2"><FileText size={10}/> Technical Description</label>
                  <textarea rows={3} placeholder="Describe the flavor profiles and ingredients..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-fargozi-red transition-all text-xs italic resize-none"></textarea>
                </div>

                {/* FLAVOR RADAR CONFIGURATION */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-black/40 rounded-[2rem] border border-white/5">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <Flame size={14} className="text-fargozi-red" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Spice Level</span>
                      </div>
                      <span className="text-xs text-fargozi-red font-bold uppercase">{spiceLevel === 3 ? "Fiery" : spiceLevel === 2 ? "Medium" : "Mild"}</span>
                    </div>
                    <input 
                      type="range" min="1" max="3" value={spiceLevel} 
                      onChange={(e) => setSpiceLevel(parseInt(e.target.value))}
                      className="accent-fargozi-red w-full h-1" 
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Zap size={14} className="text-fargozi-gold" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Texture Profile</span>
                    </div>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none text-[10px] font-bold uppercase tracking-widest text-fargozi-gold transition-all cursor-pointer">
                      <option className="bg-[#111]">Succulent (Shawarma)</option>
                      <option className="bg-[#111]">Gourmet Crispy (Burgers/Sides)</option>
                      <option className="bg-[#111]">Velvety (Shakes)</option>
                    </select>
                  </div>
                </div>

                {/* NUTRITION PLACEHOLDER */}
                <div className="grid grid-cols-4 gap-4">
                  {['Calories', 'Protein', 'Carbs', 'Fats'].map((stat) => (
                    <div key={stat} className="space-y-2">
                      <label className="text-[7px] uppercase font-bold tracking-widest text-white/20 text-center block">{stat}</label>
                      <input type="text" placeholder="--" className="w-full bg-white/5 border border-white/10 rounded-lg px-2 py-2 text-center text-[10px] outline-none" />
                    </div>
                  ))}
                </div>

                {/* ACTION BUTTON */}
                <button type="button" className="w-full py-5 bg-fargozi-red text-white text-[10px] font-bold uppercase tracking-[0.4em] rounded-xl hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4 shadow-xl shadow-red-900/20 mt-4">
                  <Save size={14} /> Draft New Blueprint
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}