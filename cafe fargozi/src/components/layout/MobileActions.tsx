"use client";
import { ShoppingBag, MapPin, Menu as MenuIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MobileActions() {
  return (
    <motion.div 
      initial={{ y: 100 }} animate={{ y: 0 }}
      className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-[90] w-[90%] max-w-sm h-16 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full flex items-center justify-between px-2 shadow-2xl"
    >
      <Link href="/menu" className="flex-1 flex flex-col items-center gap-1 text-white/40 hover:text-fargozi-red transition-colors">
        <MenuIcon size={18} />
        <span className="text-[8px] font-bold uppercase tracking-widest">Menu</span>
      </Link>
      
      <Link href="/menu" className="flex-[1.5] h-12 bg-fargozi-red rounded-full flex items-center justify-center gap-3 text-white shadow-xl shadow-red-900/20">
        <ShoppingBag size={18} />
        <span className="text-[10px] font-bold uppercase tracking-widest">Pre-Order</span>
      </Link>
      
      <Link href="/contact" className="flex-1 flex flex-col items-center gap-1 text-white/40 hover:text-fargozi-gold transition-colors">
        <MapPin size={18} />
        <span className="text-[8px] font-bold uppercase tracking-widest">Maps</span>
      </Link>
    </motion.div>
  );
}