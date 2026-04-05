"use client";
import { motion } from "framer-motion";
import { 
  User, Calendar, Phone, MessageSquare, 
  GraduationCap, Compass, CheckCircle2, Clock 
} from "lucide-react";

interface InquiryProps {
  id: string;
  name: string;
  type: "Student" | "Traveler";
  date: string;
  phone: string;
  status: "new" | "contacted" | "booked";
}

export default function StayInquiryCard({ lead }: { lead: InquiryProps }) {
  return (
    <motion.div 
      layout
      className={`p-8 rounded-[3rem] border transition-all ${
        lead.status === "new" 
        ? "bg-[#111] border-fargozi-gold shadow-[0_0_40px_rgba(235,168,58,0.1)]" 
        : "bg-white/5 border-white/10 opacity-80"
      }`}
    >
      <div className="flex justify-between items-start mb-8">
        <div className="flex items-center gap-5">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${lead.type === 'Student' ? 'bg-fargozi-red/10 text-fargozi-red' : 'bg-fargozi-gold/10 text-fargozi-gold'}`}>
            {lead.type === "Student" ? <GraduationCap size={24} /> : <Compass size={24} />}
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">{lead.type} Lead</p>
            <h3 className="text-2xl font-display font-bold text-white uppercase">{lead.name}</h3>
          </div>
        </div>
        
        <div className={`px-4 py-1.5 rounded-full text-[8px] font-bold uppercase tracking-widest border ${
          lead.status === "new" ? "border-fargozi-red text-fargozi-red animate-pulse" : "border-green-500 text-green-500"
        }`}>
          {lead.status}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-10">
        <div className="space-y-1">
          <p className="text-[8px] font-bold uppercase text-fargozi-gold tracking-widest">Expected Move-in</p>
          <div className="flex items-center gap-2 text-white/80">
            <Calendar size={14} className="text-fargozi-red" />
            <span className="text-sm font-medium">{lead.date}</span>
          </div>
        </div>
        <div className="space-y-1 text-right">
          <p className="text-[8px] font-bold uppercase text-fargozi-gold tracking-widest">Identification</p>
          <p className="text-xs font-mono text-white/40">ID: FR-LX-{lead.id}</p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-8 border-t border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40">
            <Phone size={14} />
          </div>
          <p className="text-xs font-bold text-white/60">{lead.phone}</p>
        </div>

        <div className="flex gap-3">
          <button className="p-4 bg-white/5 border border-white/10 rounded-2xl text-white/40 hover:text-white transition-all">
            <CheckCircle2 size={18} />
          </button>
          <a 
            href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}`} 
            className="flex items-center gap-3 px-6 py-4 bg-fargozi-red text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-red-900/20"
          >
            <MessageSquare size={16} /> Contact patron
          </a>
        </div>
      </div>
    </motion.div>
  );
}