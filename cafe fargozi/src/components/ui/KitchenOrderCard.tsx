"use client";
import { motion } from "framer-motion";
import { Clock, User, CheckCircle2, Flame } from "lucide-react";

interface OrderProps {
  id: string;
  customer: string;
  item: string;
  qty: number;
  time: string;
  status: "new" | "preparing";
}

export default function KitchenOrderCard({ order }: { order: OrderProps }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-8 rounded-[2.5rem] border-2 transition-all ${
        order.status === "new" 
        ? "bg-[#111] border-fargozi-red shadow-[0_0_40px_rgba(196,30,36,0.15)] animate-pulse" 
        : "bg-white/5 border-white/10"
      }`}
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <User size={14} className="text-fargozi-gold" />
            <p className="text-xs font-bold uppercase tracking-widest text-white/40">{order.customer}</p>
          </div>
          <h3 className="text-4xl font-display font-bold text-white uppercase tracking-tight">{order.item}</h3>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-bold uppercase text-fargozi-gold mb-1">Pickup Time</p>
          <div className="flex items-center gap-2 text-2xl font-display font-bold text-white">
            <Clock size={20} className="text-fargozi-red" /> {order.time}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-white/10">
        <div className="flex items-center gap-4">
          <p className="text-5xl font-display font-bold text-fargozi-red">x{order.qty}</p>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Quantity</span>
        </div>
        
        <button className={`px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
          order.status === "new" 
          ? "bg-fargozi-red text-white hover:bg-white hover:text-black" 
          : "bg-green-600 text-white hover:bg-white hover:text-black"
        }`}>
          {order.status === "new" ? "Start Preparing" : "Mark as Ready"}
        </button>
      </div>
    </motion.div>
  );
}