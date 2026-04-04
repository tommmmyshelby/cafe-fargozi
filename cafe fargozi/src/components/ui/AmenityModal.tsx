"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { Amenity } from "@/data/stays";

export default function AmenityModal({ amenity, onClose }: { amenity: Amenity | null, onClose: () => void }) {
  if (!amenity) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose} className="absolute inset-0 bg-fargozi-black/90 backdrop-blur-2xl"
        />

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-[#111] border border-white/10 rounded-[4rem] overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-2xl"
        >
          {/* IMAGE SIDE */}
          <div className="relative h-64 md:h-full">
            <img src={amenity.image} className="w-full h-full object-cover grayscale-[30%]" alt={amenity.name} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-transparent to-transparent hidden md:block" />
          </div>

          {/* CONTENT SIDE */}
          <div className="p-12 md:p-16 flex flex-col justify-center">
            <button onClick={onClose} className="absolute top-8 right-8 p-3 hover:bg-white/5 rounded-full text-white/40 hover:text-white transition-all">
              <X size={20} />
            </button>
            
            <p className="text-fargozi-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-4">Integrated Utility</p>
            <h3 className="text-4xl font-display font-bold italic mb-8">{amenity.name}</h3>
            
            <p className="text-fargozi-white/60 text-lg leading-relaxed mb-10 italic">
              "{amenity.description}"
            </p>

            <div className="pt-8 border-t border-white/5 space-y-4">
               <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-fargozi-red">
                  <CheckCircle2 size={16} /> Operational 24/7
               </div>
               <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/40">
                  <CheckCircle2 size={16} /> Included in Life Package
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}