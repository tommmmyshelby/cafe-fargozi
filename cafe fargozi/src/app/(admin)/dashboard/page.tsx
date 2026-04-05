"use client";
import { motion } from "framer-motion";
import { TrendingUp, Users, ShoppingBag, Clock, Home } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <p className="text-fargozi-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-2">Operation Center</p>
          <h1 className="font-display text-5xl font-bold italic">Dashboard Overview.</h1>
        </div>
        <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">System Online</span>
        </div>
      </div>

      {/* TOP STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: "Today's Pre-orders", value: "24", icon: ShoppingBag, color: "text-fargozi-red" },
          { label: "Accommodation Leads", value: "12", icon: Home, color: "text-fargozi-gold" },
          { label: "Wait Time", value: "15m", icon: Clock, color: "text-white" },
          { label: "Daily Conversion", value: "84%", icon: TrendingUp, color: "text-green-500" },
        ].map((stat, i) => (
          <div key={i} className="p-8 bg-[#0F0F0F] border border-white/5 rounded-3xl hover:border-fargozi-red/20 transition-all">
            <stat.icon className={`${stat.color} mb-6`} size={24} />
            <p className="text-white/40 text-[8px] font-bold uppercase tracking-[0.2em] mb-2">{stat.label}</p>
            <p className="text-4xl font-display font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* RECENT ACTIVITY MOCKUP */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="p-10 bg-[#0F0F0F] border border-white/5 rounded-[3rem]">
          <h3 className="text-xl font-display font-bold mb-8 uppercase tracking-widest text-fargozi-gold italic">Critical Logistics</h3>
          <div className="space-y-6 opacity-30 select-none">
             {[...Array(4)].map((_, i) => (
               <div key={i} className="w-full h-12 bg-white/5 rounded-xl border border-dashed border-white/10" />
             ))}
             <p className="text-center text-[10px] font-bold uppercase tracking-widest text-white/20 pt-4">Analytics Engine connecting...</p>
          </div>
        </div>
        
        <div className="p-10 bg-fargozi-red/5 border border-fargozi-red/20 rounded-[3rem]">
          <h3 className="text-xl font-display font-bold mb-8 uppercase tracking-widest text-fargozi-red italic">LPG Infrastructure Monitor</h3>
          <div className="p-8 bg-black/40 rounded-2xl border border-white/10">
             <p className="text-xs text-white/60 leading-relaxed mb-6 italic">
                Current status reflected on User Homepage. Toggle to 'Closed' to alert Kanjirappally customers of technical maintenance.
             </p>
             <button className="w-full py-4 bg-fargozi-red text-white text-[10px] font-bold uppercase tracking-[0.4em] rounded-xl hover:bg-white hover:text-black transition-all">
                Alert Site: System Closed
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}