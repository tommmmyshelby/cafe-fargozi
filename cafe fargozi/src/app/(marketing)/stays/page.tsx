"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { stayAmenities } from "@/data/stays";
import AmenityModal from "@/components/ui/AmenityModal";
import {
  Shield, Wifi, BookOpen, Coffee, Users,
  CheckCircle2, ArrowRight, Lock, Zap, Home, MessageSquare // ✅ Fix 1: Added MessageSquare
} from "lucide-react";

const fader = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1, ease: [0.19, 1, 0.22, 1] }
};

export default function StaysPage() {
  const [selectedAmenity, setSelectedAmenity] = useState<any | null>(null);

  return (
    <main className="bg-fargozi-black pt-32 pb-40">
      <AmenityModal amenity={selectedAmenity} onClose={() => setSelectedAmenity(null)} />

      {/* HERO SECTION */}
      <section className="px-8 mb-40">
        <div className="max-w-7xl mx-auto">
          <motion.p {...fader} className="text-fargozi-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-6">
            The Fargozi Living Experience
          </motion.p>
          <motion.h1 {...fader} transition={{ delay: 0.2 }} className="font-display text-[10vw] md:text-[8vw] font-bold leading-[0.85] tracking-tighter mb-12">
            Home. <br /> <span className="text-fargozi-red italic font-light">Away from Home.</span>
          </motion.h1>
          <motion.p {...fader} transition={{ delay: 0.4 }} className="text-fargozi-white/60 text-xl max-w-2xl leading-relaxed italic border-l-2 border-fargozi-red pl-10">
            "Fargozi positions itself as a provider of reliable and affordable housing,
            specifically addressing the challenges faced by students and travelers in Kanjirappally."
          </motion.p>
        </div>
      </section>

      {/* DUAL SEGMENT CARDS */}
      <section className="px-8 mb-40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div {...fader} className="group relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 bg-white/5">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000" className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-fargozi-black via-fargozi-black/20 to-transparent" />
            <div className="absolute bottom-12 left-12 right-12">
              <h3 className="text-4xl font-display font-bold mb-4">Student-Centric <br /> Housing</h3>
              <p className="text-fargozi-white/60 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity">
                Located directly opposite AKJM School. Designed to remove the logistical burdens
                of household management.
              </p>
              <div className="flex gap-2">
                {["Study Desks", "Proximity", "Secure Storage"].map(tag => (
                  <span key={tag} className="text-[8px] uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full font-bold">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div {...fader} transition={{ delay: 0.2 }} className="group relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 bg-white/5">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000" className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-fargozi-black via-fargozi-black/20 to-transparent" />
            <div className="absolute bottom-12 left-12 right-12">
              <h3 className="text-4xl font-display font-bold mb-4 text-fargozi-gold">Traveler & <br /> Business Stays</h3>
              <p className="text-fargozi-white/60 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity">
                A "Better Living Experience" for backpackers and professionals on the NH183 corridor.
              </p>
              <div className="flex gap-2">
                {["Furnished", "NH183 Access", "Short-term"].map(tag => (
                  <span key={tag} className="text-[8px] uppercase tracking-widest border border-fargozi-gold/20 px-3 py-1 rounded-full font-bold text-fargozi-gold">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AMENITIES GRID */}
      <section className="px-8 mb-40 py-32 bg-[#0D0D0D] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fader} className="mb-24">
            <h2 className="font-display text-5xl md:text-7xl font-bold italic mb-4">The Standard.</h2>
            <p className="text-fargozi-muted uppercase tracking-[0.4em] text-xs font-bold">Uncompromising quality for Kanjirappally's residents</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stayAmenities.map((item, i) => (
              <motion.div
                key={i} {...fader} transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedAmenity(item)}
                className="p-12 border border-white/5 bg-white/5 rounded-[2.5rem] hover:border-fargozi-red/30 transition-all group cursor-pointer"
              >
                <div className="text-fargozi-red text-3xl mb-6 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
                <h4 className="text-lg font-bold uppercase tracking-widest mb-4">{item.name}</h4>
                <p className="text-xs text-fargozi-muted leading-loose mb-6">Analyze specialized utility details from our blueprint.</p>
                <div className="flex items-center gap-2 text-[8px] text-fargozi-gold font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  View Full Specs <ArrowRight size={10} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SAFETY & SECURITY */}
      <section className="px-8 mb-40">
        <motion.div {...fader} className="max-w-5xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1 relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000" className="w-full h-full object-cover grayscale" />
            <div className="absolute inset-0 bg-fargozi-red/20" />
          </div>
          <div className="flex-1">
            <Shield className="text-fargozi-red w-12 h-12 mb-8" />
            <h3 className="font-display text-4xl font-bold mb-6 italic">Peace of Mind for Parents.</h3>
            <p className="text-fargozi-muted leading-relaxed mb-8">
              Unlike traditional Paying Guest (PG) setups, Fargozi prioritizes safety through
              surveillance systems and on-site staff support.
            </p>
            <div className="space-y-4">
              {["24/7 CCTV Monitoring", "Controlled Access", "Supportive Community"].map(item => (
                <div key={item} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                  <CheckCircle2 className="text-fargozi-gold" size={16} /> {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ✅ Fix 2: Restored full inquiry section with opening tag, wrapper, and left column */}
      <section className="px-8 mb-40">
        <motion.div {...fader} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-[3rem] border border-white/5">
          
          {/* LEFT: INFO */}
          <div className="p-12 md:p-20 bg-white/5 flex flex-col justify-center">
            <p className="text-fargozi-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-6">Book a Stay</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold italic mb-6">
              Start Your <br /> Fargozi Journey.
            </h2>
            <p className="text-fargozi-muted text-sm leading-relaxed">
              Fill out the form and our team will get back to you via WhatsApp within 24 hours to confirm availability.
            </p>
          </div>

          {/* RIGHT: FORM */}
          <div className="p-12 md:p-20 bg-[#0F0F0F]">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">Resident Type</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-fargozi-red transition-all appearance-none text-xs uppercase font-bold tracking-widest">
                  <option className="bg-[#0A0A0A]">Student (Long Term)</option>
                  <option className="bg-[#0A0A0A]">Traveler (Short Term)</option>
                  <option className="bg-[#0A0A0A]">Business Professional</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">Full Name</label>
                <input type="text" placeholder="Your name" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-fargozi-red transition-all text-xs" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">Phone</label>
                  <input type="tel" placeholder="+91" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-fargozi-red transition-all text-xs" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">Expected Move-in</label>
                  <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-fargozi-red transition-all [color-scheme:dark] text-xs" />
                </div>
              </div>
              <button className="w-full py-5 bg-fargozi-red text-white text-[10px] font-bold uppercase tracking-[0.4em] rounded-xl hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4">
                Send Inquiry via WhatsApp <MessageSquare size={14} />
              </button>
            </form>
          </div>

        </motion.div>
      </section>

    </main>
  );
}