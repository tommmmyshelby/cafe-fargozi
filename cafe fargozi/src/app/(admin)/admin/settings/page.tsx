"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, AlertTriangle, Hammer, Clock, 
  ShieldCheck, Save, RefreshCcw, BellRing,
  Globe, Server, Database, Power
} from "lucide-react";

export default function SystemSettings() {
  const [isStoreOpen, setIsStoreOpen] = useState(true);
  const [activeIssue, setActiveIssue] = useState<string | null>(null);

  const maintenancePresets = [
    { id: "lpg", label: "LPG Infrastructure Issue", icon: AlertTriangle },
    { id: "tech", label: "Technical Maintenance", icon: Hammer },
    { id: "break", label: "Staff Shift Transition", icon: Clock },
  ];

  return (
    <div className="max-w-7xl mx-auto pb-20">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
        <div>
          <p className="text-fargozi-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-2">Control Center</p>
          <h1 className="font-display text-5xl font-bold italic tracking-tight">System Architecture.</h1>
        </div>
        
        <div className="flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl">
          <RefreshCcw size={14} className="text-fargozi-muted animate-spin" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Syncing with POS Cloud</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT COLUMN: THE MASTER SWITCH (User-facing Status) */}
        <div className="lg:col-span-2 space-y-10">
          <motion.div 
            className={`p-12 rounded-[4rem] border-2 transition-all duration-700 ${
              isStoreOpen ? "bg-green-500/5 border-green-500/20" : "bg-fargozi-red/5 border-fargozi-red/20"
            }`}
          >
            <div className="flex justify-between items-center mb-16">
              <div>
                <h2 className="text-3xl font-display font-bold uppercase mb-2">Public Outlet Status</h2>
                <p className="text-sm text-white/40 italic">This affects the "Live Status" badge on the homepage.</p>
              </div>
              <div className={`w-3 h-3 rounded-full ${isStoreOpen ? "bg-green-500 animate-pulse" : "bg-fargozi-red shadow-[0_0_15px_rgba(196,30,36,0.5)]"}`} />
            </div>

            <div className="flex items-center gap-10">
              <button 
                onClick={() => setIsStoreOpen(!isStoreOpen)}
                className={`relative w-40 h-20 rounded-full transition-all duration-500 p-2 ${isStoreOpen ? 'bg-green-600' : 'bg-fargozi-red'}`}
              >
                <motion.div 
                  animate={{ x: isStoreOpen ? 80 : 0 }}
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl"
                >
                  <Power size={24} className={isStoreOpen ? 'text-green-600' : 'text-fargozi-red'} />
                </motion.div>
              </button>
              <div>
                <p className="text-4xl font-display font-bold uppercase tracking-tighter">
                  {isStoreOpen ? "Operational" : "Temporarily Closed"}
                </p>
                <p className="text-[10px] font-bold text-fargozi-gold uppercase tracking-[0.3em] mt-2">
                  Visibility: NH183 Corridor Public Access
                </p>
              </div>
            </div>
          </motion.div>

          {/* MAINTENANCE PRESETS (Based on PDF Page 7) */}
          <div className="p-12 bg-[#0A0A0A] border border-white/5 rounded-[4rem]">
            <h3 className="text-xl font-display font-bold mb-8 italic text-fargozi-gold">Quick Alert Overrides</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {maintenancePresets.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => setActiveIssue(preset.id)}
                  className={`p-8 rounded-[2.5rem] border flex flex-col items-center text-center transition-all group ${
                    activeIssue === preset.id ? "bg-fargozi-red border-fargozi-red" : "bg-white/5 border-white/10 hover:border-fargozi-red/40"
                  }`}
                >
                  <preset.icon size={24} className={`mb-4 ${activeIssue === preset.id ? "text-white" : "text-fargozi-red"}`} />
                  <p className="text-[9px] font-bold uppercase tracking-widest">{preset.label}</p>
                </button>
              ))}
            </div>
          </div>

          {/* CUSTOM SITE BANNER MESSAGE */}
          <div className="p-12 bg-white/5 border border-white/5 rounded-[4rem]">
            <div className="flex items-center gap-4 mb-8">
              <BellRing className="text-fargozi-gold" size={20} />
              <h3 className="text-xl font-display font-bold italic tracking-tight">Live Notification Text</h3>
            </div>
            <textarea 
              placeholder="e.g. Current status: Operational • Normal Wait Time (12-15 Mins)"
              className="w-full bg-black border border-white/10 rounded-[2rem] p-8 text-sm text-fargozi-white/60 outline-none focus:border-fargozi-red h-32 transition-all resize-none"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: INFRASTRUCTURE HEALTH */}
        <div className="space-y-10">
          <div className="p-10 bg-[#0A0A0A] border border-white/5 rounded-[4rem] space-y-10">
            <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-fargozi-gold text-center">Global Systems</h3>
            
            {[
              { label: "Digital Architecture", icon: Globe, status: "Active" },
              { label: "Fargozi Cloud POS", icon: Server, status: "Operational" },
              { label: "Living CRM Engine", icon: Database, status: "Connected" },
              { label: "Safety Protocols", icon: ShieldCheck, status: "Verified" },
            ].map((sys, i) => (
              <div key={i} className="flex items-center justify-between p-6 bg-white/5 rounded-3xl border border-white/5">
                <div className="flex items-center gap-4 text-white/60">
                  <sys.icon size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{sys.label}</span>
                </div>
                <span className="text-[9px] font-bold text-green-500 uppercase tracking-tighter">{sys.status}</span>
              </div>
            ))}
          </div>

          {/* SAVE BUTTON */}
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-8 bg-fargozi-red text-white rounded-[3rem] font-display font-bold text-2xl italic tracking-tighter flex items-center justify-center gap-4 shadow-2xl shadow-red-900/20"
          >
            <Save size={24} /> Deploy Configuration
          </motion.button>
        </div>
      </div>

      {/* SYSTEM WATERMARK */}
      <div className="fixed bottom-10 right-10 opacity-5 select-none pointer-events-none text-right">
        <h2 className="text-[6vw] font-display font-bold uppercase tracking-tighter leading-none">Institutional <br /> Integrity</h2>
      </div>
    </div>
  );
}