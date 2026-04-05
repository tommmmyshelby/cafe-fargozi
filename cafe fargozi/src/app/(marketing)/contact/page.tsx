"use client";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { 
  Phone, MapPin, Clock, MessageSquare, Mail, 
  Instagram, Twitter, Youtube, Facebook, ArrowRight,
  Globe, Landmark, Navigation
} from "lucide-react";

// ANIMATION CONSTANTS
const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1, ease: [0.19, 1, 0.22, 1] }
};

export default function ContactPage() {
  // Redirect function for Google Maps
  const redirectToMap = () => {
    window.open("https://www.google.com/maps/search/?api=1&query=Cafe+Fargozi+Kanjirappally+AKJM+School", "_blank");
  };

  return (
    <main className="bg-[#0A0A0A] pt-32 pb-20 min-h-screen overflow-hidden">
      
      {/* 1. HERO HEADER */}
      <section className="px-8 mb-20 text-center">
        <motion.h1 
          {...reveal}
          className="font-display text-5xl md:text-8xl font-bold leading-tight mb-6"
        >
          ENGAGE WITH <br /> <span className="text-fargozi-red italic font-light">CAFE FARGOZI+</span>
        </motion.h1>
        <motion.p 
          {...reveal} 
          transition={{ delay: 0.2 }}
          className="text-fargozi-white/40 text-xs md:text-sm uppercase tracking-[0.5em] max-w-2xl mx-auto"
        >
          We're always happy to hear from our customers, patrons, and film enthusiasts.
        </motion.p>
      </section>

      {/* 2. THE MAIN INTERACTIVE CARD */}
      <section className="px-6 mb-32">
        <motion.div 
          {...reveal}
          className="max-w-6xl mx-auto bg-[#111] border border-white/5 rounded-[3rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl"
        >
          {/* LEFT COLUMN: LET'S TALK */}
          <div className="p-12 md:p-20 bg-gradient-to-br from-[#161616] to-transparent flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-display font-bold mb-4 tracking-tight uppercase">Let's Talk</h2>
              <p className="text-fargozi-gold text-sm font-bold uppercase tracking-widest mb-12 flex items-center gap-2">
                Ask us anything or just say hi 👋
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-fargozi-red transition-colors">
                    <Phone size={18} className="text-fargozi-white" />
                  </div>
                  <p className="text-lg font-medium group-hover:text-fargozi-red transition-colors">{siteConfig.contact.restaurant}</p>
                </div>
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-fargozi-red transition-colors">
                    <Mail size={18} className="text-fargozi-white" />
                  </div>
                  <p className="text-lg font-medium group-hover:text-fargozi-red transition-colors">team@fargozi.co</p>
                </div>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="pt-12 border-t border-white/5 flex gap-6">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-fargozi-white/40 hover:text-fargozi-red hover:border-fargozi-red transition-all cursor-pointer">
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: THE FUNCTIONAL FORM */}
          <div className="p-12 md:p-20 bg-[#0F0F0F]">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-fargozi-white/60">Full Name</label>
                  <input type="text" placeholder="Your name" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-fargozi-red outline-none transition-all placeholder:text-white/10" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-fargozi-white/60">Email</label>
                  <input type="email" placeholder="you@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-fargozi-red outline-none transition-all placeholder:text-white/10" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-fargozi-white/60">Phone number</label>
                <div className="flex gap-4">
                  <div className="px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-xs font-bold uppercase">IN 🇮🇳</div>
                  <input type="tel" placeholder="+91 000-0000" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-fargozi-red outline-none transition-all placeholder:text-white/10" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-fargozi-white/60">Message</label>
                <textarea rows={4} placeholder="Write your message here" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-fargozi-red outline-none transition-all placeholder:text-white/10 resize-none"></textarea>
              </div>
              <button className="w-full py-5 bg-fargozi-red hover:bg-red-700 text-white text-[10px] font-bold uppercase tracking-[0.4em] rounded-xl transition-all shadow-xl shadow-red-900/20">
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* 3. DUAL-TRACK LOGISTICS */}
      <section className="px-8 mb-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 text-center md:text-left">
          
          <motion.div {...reveal} className="flex-1 space-y-6">
            <h3 className="text-xl font-display font-bold uppercase tracking-widest text-fargozi-white">Opening Hours</h3>
            <div className="w-16 h-[1px] bg-white/10 mx-auto md:mx-0" />
            <div className="space-y-2">
              <p className="text-fargozi-muted uppercase text-xs tracking-widest">Restaurant Service</p>
              <p className="text-2xl font-display font-bold">{siteConfig.hours.restaurant}</p>
            </div>
            <div className="space-y-2">
              <p className="text-fargozi-muted uppercase text-xs tracking-widest">Administrative Hub</p>
              <p className="text-2xl font-display font-bold">{siteConfig.hours.corporate}</p>
            </div>
          </motion.div>

          <div className="hidden md:block w-px h-32 bg-white/5 self-center" />

          <motion.div {...reveal} transition={{ delay: 0.2 }} className="flex-1 space-y-6">
            <h3 className="text-xl font-display font-bold uppercase tracking-widest text-fargozi-white">Address</h3>
            <div className="w-16 h-[1px] bg-white/10 mx-auto md:mx-0" />
            <div className="space-y-4">
              <p className="text-fargozi-muted leading-relaxed max-w-xs mx-auto md:mx-0">
                {siteConfig.address}
              </p>
              <p className="text-lg font-display font-bold italic text-fargozi-red flex items-center justify-center md:justify-start gap-2 cursor-pointer hover:underline" onClick={redirectToMap}>
                <Navigation size={18} /> Opposite AKJM School
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. GOOGLE MAPS BOX (New Interactive Section) */}
      <section className="px-6 mb-40">
        <motion.div 
          {...reveal}
          className="max-w-6xl mx-auto h-[450px] rounded-[3rem] overflow-hidden border border-white/5 relative group shadow-2xl"
        >
          <iframe 
            src="https://www.google.com/maps?q=AKJM%20Higher%20Secondary%20School%20Kanjirappally&output=embed"
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.7) contrast(1.2)' }} 
            allowFullScreen 
            loading="lazy"
          />
          {/* Visual Framing Overlay */}
          <div className="absolute inset-0 pointer-events-none border-[15px] border-[#0A0A0A] rounded-[3rem]"></div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
            <button 
              onClick={redirectToMap}
              className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-fargozi-red hover:border-fargozi-red transition-all"
            >
              Expand Map View
            </button>
          </div>
        </motion.div>
      </section>

      {/* 5. STRATEGIC BRANCHING */}
      <section className="px-8 py-40 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-fargozi-red/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-20 relative z-10">
          <motion.div {...reveal} className="flex-1">
            <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter uppercase mb-6">
              THE <span className="text-fargozi-gold italic">GATEWAY.</span>
            </h2>
            <p className="text-fargozi-white/60 text-xl leading-relaxed italic max-w-xl">
               "Situated on the NH183 corridor—connecting the coastal heart of Kerala to the high-range tourism hubs."
            </p>
          </motion.div>
          
          <motion.div {...reveal} transition={{ delay: 0.2 }} className="flex-1 text-right lg:text-left space-y-8">
            <p className="text-fargozi-muted text-sm leading-relaxed max-w-sm ml-auto lg:ml-0">
               We have our branches spread all over the world, so you can flexibly choose which cinema is closest to you.
            </p>
            <button 
              onClick={redirectToMap}
              className="px-10 py-5 bg-fargozi-red text-white text-[10px] font-bold uppercase tracking-[0.4em] rounded-full hover:bg-white hover:text-black transition-all"
            >
               View Regional Roadmap
            </button>
          </motion.div>
        </div>
      </section>

    </main>
  );
}