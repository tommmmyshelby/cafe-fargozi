"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { 
  Instagram, Twitter, Youtube, Facebook, 
  ArrowUpRight, ShieldCheck, Globe, Zap, 
  Navigation, Mail, Phone, Landmark
} from "lucide-react";

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] }
};

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-40 pb-10 px-8 relative overflow-hidden">
      {/* Decorative Top Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-fargozi-red to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          
          {/* 1. BRAND SIGNATURE (PDF Page 2 & 10 Insights) */}
          <motion.div {...reveal} className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-4 mb-8 group">
              <div className="w-12 h-12 bg-fargozi-red rounded-full flex items-center justify-center font-display font-bold text-xl transition-transform group-hover:rotate-[360deg] duration-700">F</div>
              <span className="font-display text-2xl font-bold tracking-tighter uppercase">Fargozi+</span>
            </Link>
            <p className="text-fargozi-white/40 text-xs leading-relaxed mb-8 italic uppercase tracking-widest">
              "Transitioning from a localized outlet to a digital-first lifestyle ecosystem. Redefining the Kanjirappally service sector since 2020."
            </p>
            <div className="flex gap-5">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <Icon key={i} size={16} className="text-white/20 hover:text-fargozi-red transition-colors cursor-pointer" />
              ))}
            </div>
          </motion.div>

          {/* 2. THE PORTALS (Correct Redirections) */}
          <motion.div {...reveal} transition={{ delay: 0.1 }} className="space-y-8">
            <h4 className="text-fargozi-gold text-[10px] font-bold uppercase tracking-[0.4em]">The Portals</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/menu" className="text-fargozi-white/40 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-all flex items-center gap-2 group">
                  Menu Architecture <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/stays" className="text-fargozi-white/40 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-all flex items-center gap-2 group">
                  Living Solutions <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/pedigree" className="text-fargozi-white/40 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-all flex items-center gap-2 group">
                  Investor Relations <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-fargozi-white/40 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-all flex items-center gap-2 group">
                  Strategic Hub <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* 3. STRATEGIC CONNECTIVITY (PDF Page 1 & 7) */}
          <motion.div {...reveal} transition={{ delay: 0.2 }} className="space-y-8">
            <h4 className="text-fargozi-gold text-[10px] font-bold uppercase tracking-[0.4em]">Connectivity</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Globe size={14} className="text-fargozi-red mt-1" />
                <p className="text-fargozi-white/60 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                  NH183 Corridor Gateway <br />
                  Kanjirappally, Kottayam
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Zap size={14} className="text-fargozi-gold mt-1" />
                <p className="text-fargozi-white/60 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                  Digital Infrastructure: <br />
                  Direct Pre-order Channel
                </p>
              </div>
            </div>
          </motion.div>

          {/* 4. INSTITUTIONAL DATA (PDF Page 2) */}
          <motion.div {...reveal} transition={{ delay: 0.3 }} className="space-y-8 text-right lg:text-left">
            <h4 className="text-fargozi-gold text-[10px] font-bold uppercase tracking-[0.4em]">Administration</h4>
            <div className="space-y-4">
               <div className="flex items-center gap-3 lg:justify-start justify-end">
                  <Landmark size={14} className="text-white/20" />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-fargozi-white/40">Registered Office</p>
               </div>
               <p className="text-[10px] font-medium text-white/20 leading-loose italic max-w-[200px] ml-auto lg:ml-0">
                  Co Thomas Kunnappally, 408, Kunnappalli-9, T.B. Road, Kanjirappally.
               </p>
            </div>
            <div className="pt-4 flex items-center gap-3 lg:justify-start justify-end">
              <ShieldCheck size={14} className="text-green-500/50" />
              <p className="text-[8px] font-bold uppercase tracking-widest text-fargozi-white/20">Verified Private Ltd Entity</p>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM LEGAL BAR */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-fargozi-white/20 mb-2">
              © {new Date().getFullYear()} FARGOZI INDIA PRIVATE LIMITED. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[8px] font-mono text-fargozi-white/10 uppercase tracking-tighter">
              Corporate Identification: {siteConfig.cin} • Registered in Ernakulam
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <Link href="/privacy" className="text-[9px] font-bold uppercase tracking-widest text-fargozi-white/20 hover:text-fargozi-red transition-colors">
              Privacy Protocol
            </Link>
            <Link href="/terms" className="text-[9px] font-bold uppercase tracking-widest text-fargozi-white/20 hover:text-fargozi-red transition-colors">
              Operational Terms
            </Link>
            <Link href="/pedigree" className="text-[9px] font-bold uppercase tracking-widest text-fargozi-white/20 hover:text-fargozi-red transition-colors">
              Institutional Pedigree
            </Link>
          </div>
        </div>
      </div>

      {/* Background Cinematic Text */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15vw] font-display font-bold text-white/[0.015] select-none pointer-events-none uppercase tracking-tighter">
        Fargozi
      </div>
    </footer>
  );
}