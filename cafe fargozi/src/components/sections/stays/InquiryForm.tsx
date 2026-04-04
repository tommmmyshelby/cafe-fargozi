// src/components/sections/stays/InquiryForm.tsx
"use client";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";

export default function InquiryForm() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-md"
    >
      <h3 className="font-display text-3xl font-bold mb-8 text-fargozi-gold">Check Availability</h3>
      
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-widest text-fargozi-muted font-bold">Full Name</label>
          <input type="text" placeholder="John Doe" className="bg-white/5 border border-white/10 rounded-xl p-4 focus:border-fargozi-red outline-none transition-all" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-widest text-fargozi-muted font-bold">Phone Number</label>
          <input type="tel" placeholder="+91 00000 00000" className="bg-white/5 border border-white/10 rounded-xl p-4 focus:border-fargozi-red outline-none transition-all" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-widest text-fargozi-muted font-bold">I am a...</label>
          <select className="bg-fargozi-black border border-white/10 rounded-xl p-4 focus:border-fargozi-red outline-none appearance-none">
            <option>Student (Long-term)</option>
            <option>Traveler (Short-term)</option>
            <option>Professional</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-widest text-fargozi-muted font-bold">Expected Move-in</label>
          <input type="date" className="bg-white/5 border border-white/10 rounded-xl p-4 focus:border-fargozi-red outline-none" />
        </div>

        <button className="md:col-span-2 mt-4 bg-fargozi-red hover:bg-red-700 text-white font-bold py-5 rounded-2xl transition-all uppercase tracking-[0.2em]">
          Send Inquiry via WhatsApp
        </button>
      </form>
    </motion.div>
  );
}