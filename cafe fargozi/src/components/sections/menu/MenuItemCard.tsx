// src/components/sections/menu/MenuItemCard.tsx
"use client";
import { motion } from "framer-motion";
import { MenuItem } from "@/data/menu";

export default function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative bg-white/5 border border-white/10 p-6 rounded-2xl overflow-hidden backdrop-blur-sm"
    >
      {/* GLOW EFFECT ON HOVER */}
      <div className="absolute inset-0 bg-fargozi-red/5 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10 flex justify-between items-start mb-4">
        <div>
          {item.isBestseller && (
            <span className="text-[10px] bg-fargozi-gold text-fargozi-black px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter mb-2 inline-block">
              Bestseller
            </span>
          )}
          <h3 className="font-display text-xl font-bold text-fargozi-white group-hover:text-fargozi-gold transition-colors leading-tight">
            {item.name}
          </h3>
        </div>
        <p className="font-bold text-fargozi-red text-lg">₹{item.price.toFixed(0)}</p>
      </div>

      <p className="text-sm text-fargozi-muted leading-relaxed mb-6">
        {item.description}
      </p>

      <div className="relative z-10 flex items-center justify-between">
        {item.rating && (
          <div className="flex items-center gap-1 text-fargozi-gold font-bold text-xs">
            <span>⭐ {item.rating}</span>
          </div>
        )}
        {item.isSpicy && <span className="text-xs text-fargozi-red font-bold uppercase tracking-widest italic">🔥 Spicy</span>}
      </div>
    </motion.div>
  );
}