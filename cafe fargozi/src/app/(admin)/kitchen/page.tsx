"use client";
import { motion } from "framer-motion";
import KitchenOrderCard from "@/components/ui/KitchenOrderCard";
import { Flame, Bell, History } from "lucide-react";

// MOCK DATA BASED ON PDF
const liveOrders = [
  { id: "101", customer: "Rahul K.", item: "Mexican Cheese Shawarma", qty: 2, time: "12:45 PM", status: "new" as const },
  { id: "102", customer: "Sneha T.", item: "Fargozi Special Roll", qty: 4, time: "01:15 PM", status: "preparing" as const },
  { id: "103", customer: "Abhishek", item: "Istanbul Cheese Burger", qty: 1, time: "01:30 PM", status: "new" as const },
];

export default function KitchenPage() {
  return (
    <div className="max-w-[1600px] mx-auto">
      {/* KITCHEN HEADER */}
      <div className="flex justify-between items-center mb-16 bg-[#0A0A0A] p-8 rounded-[3rem] border border-white/5">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-fargozi-red rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(196,30,36,0.3)]">
            <Flame className="text-white animate-bounce" size={32} />
          </div>
          <div>
            <h1 className="text-4xl font-display font-bold tracking-tighter uppercase">Kitchen Command</h1>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-fargozi-gold">Live Pre-order Stream • NH183 Station</p>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10">
            <History size={16} /> Order History
          </button>
          <div className="flex items-center gap-4 px-8 py-4 bg-fargozi-red/10 border border-fargozi-red/20 rounded-2xl">
            <Bell className="text-fargozi-red animate-swing" size={16} />
            <span className="text-xl font-display font-bold text-white">{liveOrders.length} Active</span>
          </div>
        </div>
      </div>

      {/* ORDERS GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* NEW ORDERS SECTION */}
        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-4 px-4">
            <div className="w-2 h-2 rounded-full bg-fargozi-red animate-pulse" />
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-white/40">Incoming Queues</h2>
          </div>
          {liveOrders.filter(o => o.status === "new").map(order => (
            <KitchenOrderCard key={order.id} order={order} />
          ))}
        </div>

        {/* IN-PROGRESS SECTION */}
        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-4 px-4">
            <div className="w-2 h-2 rounded-full bg-fargozi-gold animate-pulse" />
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-white/40">In Preparation</h2>
          </div>
          {liveOrders.filter(o => o.status === "preparing").map(order => (
            <KitchenOrderCard key={order.id} order={order} />
          ))}
        </div>
      </div>

      {/* SYSTEM WATERMARK */}
      <div className="fixed bottom-10 right-10 opacity-5 select-none pointer-events-none">
        <h2 className="text-[8vw] font-display font-bold uppercase tracking-tighter">Kitchen</h2>
      </div>
    </div>
  );
}