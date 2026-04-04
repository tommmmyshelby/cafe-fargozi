"use client";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { ShieldCheck, Landmark, Briefcase, TrendingUp, Fingerprint } from "lucide-react";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] }
};

export default function PedigreePage() {
  return (
    <main className="bg-[#0A0A0A] pt-40 pb-20 px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div {...reveal} className="mb-20">
          <p className="text-fargozi-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-6">Corporate Intelligence</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold italic mb-8">Institutional <span className="text-fargozi-red not-italic">Pedigree.</span></h1>
          <p className="text-fargozi-white/60 text-xl leading-relaxed italic border-l-2 border-fargozi-red pl-10">
            "Establishing the professional pedigree of the founders and providing the brand with institutional stability."
          </p>
        </motion.div>

        <section className="space-y-20">
          <motion.div {...reveal} className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 border border-white/5 bg-white/5 rounded-[3rem]">
              <Fingerprint className="text-fargozi-red mb-6" />
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Registration Data</h3>
              <ul className="space-y-4 text-sm text-fargozi-muted font-mono">
                <li>Entity: Fargozi India Private Limited</li>
                <li>CIN: {siteConfig.cin}</li>
                <li>RoC: Ernakulam</li>
                <li>Class: Company Limited by Shares</li>
              </ul>
            </div>
            <div className="p-10 border border-white/5 bg-white/5 rounded-[3rem]">
              <Landmark className="text-fargozi-gold mb-6" />
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Capital Structure</h3>
              <ul className="space-y-4 text-sm text-fargozi-muted font-mono">
                <li>Authorized Capital: INR 1,00,000</li>
                <li>Paid-up Capital: INR 1,00,000</li>
                <li>Status: Active</li>
              </ul>
            </div>
          </motion.div>

          <motion.div {...reveal} className="p-12 border border-white/5 bg-[#0D0D0D] rounded-[4rem]">
            <TrendingUp className="text-fargozi-red mb-8" />
            <h2 className="text-3xl font-display font-bold mb-6 italic">Strategic Evolution</h2>
            <p className="text-fargozi-white/60 leading-relaxed mb-8">
              "The future outlook involves the further solidification of the 'Living Experience' brand. 
              The transition from a 'cozy outlet' to a 'digital-first lifestyle brand' is the logical 
              next step in the company's evolution, expanding beyond Kanjirappally into the Kerala high ranges."
            </p>
          </motion.div>
        </section>
      </div>
    </main>
  );
}