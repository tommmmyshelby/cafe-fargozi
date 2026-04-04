"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Activity, Zap, Shield, Flame } from "lucide-react";
import { MenuItem } from "@/data/menu";

export default function NutritionModal({ item, onClose }: { item: MenuItem | null, onClose: () => void }) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
        {/* BACKDROP */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-fargozi-black/80 backdrop-blur-xl"
        />

        {/* MODAL CONTENT */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-[#141414] border border-white/10 rounded-[3rem] p-10 shadow-2xl overflow-hidden"
        >
          {/* Decorative Red Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-fargozi-red/20 rounded-full blur-[80px]" />

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-fargozi-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-2">Nutritional Architecture</p>
                <h3 className="text-3xl font-display font-bold">{item.name}</h3>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors text-fargozi-muted hover:text-white">
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <NutritionStat icon={<Activity size={16}/>} label="Calories" value={item.nutrition.calories.toString()} unit="kcal" color="text-white" />
              <NutritionStat icon={<Zap size={16}/>} label="Protein" value={item.nutrition.protein.replace('g','')} unit="grams" color="text-fargozi-red" />
              <NutritionStat icon={<Shield size={16}/>} label="Carbs" value={item.nutrition.carbs.replace('g','')} unit="grams" color="text-fargozi-gold" />
              <NutritionStat icon={<Flame size={16}/>} label="Fats" value={item.nutrition.fats.replace('g','')} unit="grams" color="text-fargozi-muted" />
            </div>

            <p className="text-[10px] text-fargozi-muted uppercase tracking-widest leading-loose text-center">
              * Values are approximate based on standard preparation methods <br />
              utilizing fresh ingredients in our Kanjirappally facility.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function NutritionStat({ icon, label, value, unit, color }: any) {
  return (
    <div className="p-6 border border-white/5 bg-white/5 rounded-3xl">
      <div className={`${color} mb-3 opacity-60`}>{icon}</div>
      <p className="text-[8px] uppercase tracking-widest text-fargozi-muted font-bold mb-1">{label}</p>
      <div className="flex items-baseline gap-1">
        <span className={`text-2xl font-display font-bold ${color}`}>{value}</span>
        <span className="text-[10px] text-fargozi-muted font-bold">{unit}</span>
      </div>
    </div>
  );
}