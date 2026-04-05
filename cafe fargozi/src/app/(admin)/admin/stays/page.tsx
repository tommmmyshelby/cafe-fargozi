"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StayInquiryCard from "@/components/ui/StayInquiryCard";
import { Users, GraduationCap, Compass, Briefcase, Search, Filter } from "lucide-react";

// MOCK DATA BASED ON PDF RESIDENT TYPES
const stayLeads = [
  { id: "771", name: "Rahul Krishnan", type: "Student" as const, date: "June 15, 2026", phone: "+91 98450 12345", status: "new" as const },
  { id: "772", name: "Capt. Aditya", type: "Traveler" as const, date: "April 20, 2026", phone: "+91 99887 76655", status: "contacted" as const },
  { id: "773", name: "Sreya Mariyam", type: "Student" as const, date: "June 12, 2026", phone: "+91 91234 56789", status: "new" as const },
];

export default function StaysCRM() {
  const [filter, setFilter] = useState<"All" | "Student" | "Traveler">("All");

  const filteredLeads = filter === "All" 
    ? stayLeads 
    : stayLeads.filter(l => l.type === filter);

  return (
    <div className="max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
        <div>
          <p className="text-fargozi-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-2">Lifestyle CRM</p>
          <h1 className="font-display text-5xl font-bold italic tracking-tight">Accommodation Leads.</h1>
        </div>
        
        <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-[2.5rem]">
           <div className="text-center px-4">
              <p className="text-[8px] font-bold text-fargozi-muted uppercase tracking-widest mb-1">Total Leads</p>
              <p className="text-2xl font-display font-bold text-white">{stayLeads.length}</p>
           </div>
           <div className="w-px h-8 bg-white/10" />
           <div className="text-center px-4">
              <p className="text-[8px] font-bold text-fargozi-muted uppercase tracking-widest mb-1">Conversion</p>
              <p className="text-2xl font-display font-bold text-fargozi-red">42%</p>
           </div>
        </div>
      </div>

      {/* FILTER HUB */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <button 
          onClick={() => setFilter("All")}
          className={`p-6 rounded-[2rem] border transition-all flex items-center justify-between group ${filter === 'All' ? 'bg-white/10 border-white/20' : 'bg-transparent border-white/5'}`}
        >
          <div className="flex items-center gap-4">
            <Users className={filter === 'All' ? 'text-white' : 'text-white/20'} size={20} />
            <span className="text-[10px] font-bold uppercase tracking-widest">All Patrons</span>
          </div>
          <span className="text-xl font-display font-bold opacity-40">{stayLeads.length}</span>
        </button>

        <button 
          onClick={() => setFilter("Student")}
          className={`p-6 rounded-[2rem] border transition-all flex items-center justify-between group ${filter === 'Student' ? 'bg-fargozi-red/10 border-fargozi-red/20' : 'bg-transparent border-white/5'}`}
        >
          <div className="flex items-center gap-4">
            <GraduationCap className={filter === 'Student' ? 'text-fargozi-red' : 'text-white/20'} size={20} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Academic leads</span>
          </div>
          <span className="text-xl font-display font-bold text-fargozi-red">2</span>
        </button>

        <button 
          onClick={() => setFilter("Traveler")}
          className={`p-6 rounded-[2rem] border transition-all flex items-center justify-between group ${filter === 'Traveler' ? 'bg-fargozi-gold/10 border-fargozi-gold/20' : 'bg-transparent border-white/5'}`}
        >
          <div className="flex items-center gap-4">
            <Compass className={filter === 'Traveler' ? 'text-fargozi-gold' : 'text-white/20'} size={20} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Traveler Stays</span>
          </div>
          <span className="text-xl font-display font-bold text-fargozi-gold">1</span>
        </button>
      </div>

      {/* LEAD GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredLeads.map((lead) => (
            <StayInquiryCard key={lead.id} lead={lead} />
          ))}
        </AnimatePresence>
      </div>

      {/* WATERMARK */}
      <div className="fixed bottom-10 right-10 opacity-5 select-none pointer-events-none text-right">
        <h2 className="text-[8vw] font-display font-bold uppercase tracking-tighter leading-none">Living <br /> Solutions</h2>
      </div>
    </div>
  );
}