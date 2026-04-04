"use client";
import { motion } from "framer-motion";
import { Shield, Eye, Lock, Database } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="bg-[#0A0A0A] pt-40 pb-20 px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.h1 className="font-display text-6xl font-bold mb-16 italic">Privacy <span className="text-fargozi-red not-italic">Protocol.</span></motion.h1>
        
        <div className="space-y-12">
          <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10">
            <Eye className="text-fargozi-red mb-6" />
            <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Safety Surveillance</h3>
            <p className="text-fargozi-muted leading-relaxed italic">
              "The brand prioritizes security through 24/7 surveillance systems and on-site staff support." 
              All video data is handled with institutional integrity to ensure a trusted environment 
              for students and residents.
            </p>
          </div>

          <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10">
            <Database className="text-fargozi-gold mb-6" />
            <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Resident Data</h3>
            <p className="text-fargozi-muted leading-relaxed">
              Information collected via the "Living Solutions" inquiry portal (Move-in date, Resident type) 
              is used solely for lead management and room allocation by Fargozi India Pvt Ltd.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}