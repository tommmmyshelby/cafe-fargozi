"use client";
import { motion } from "framer-motion";

export default function ShawarmaLoader() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-[#0A0A0A] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* AMBIENT RED ATMOSPHERE */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-fargozi-red/5 blur-[150px] rounded-full" />

      <div className="relative flex flex-col items-center">
        
        {/* THE VIDEO GRILL FRAME */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-72 h-[450px] rounded-[6rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(196,30,36,0.2)]"
        >
          {/* THE VIDEO */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover contrast-[1.1] brightness-[0.8] grayscale-[20%]"
          >
            <source src="/videos/loader-meat.mp4" type="video/mp4" />
          </video>

          {/* COLOR GRADE OVERLAY (Tints the video to match brand Red/Gold) */}
          <div className="absolute inset-0 bg-gradient-to-t from-fargozi-black via-fargozi-red/10 to-transparent mix-blend-color" />
          
          {/* VIGNETTE (Focuses attention on the center of the meat) */}
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
        </motion.div>

        {/* GLOWING HEAT BAR (Visual Detail) */}
        <div className="absolute -right-6 top-1/4 h-64 w-1.5 bg-fargozi-red blur-sm rounded-full opacity-30 animate-pulse" />

        {/* LOADING TEXT NARRATIVE */}
        <div className="mt-16 text-center">
          <motion.h2 
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="font-display text-2xl font-bold tracking-[0.4em] text-fargozi-white italic"
          >
            CAFE FARGOZI
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-[1px] bg-fargozi-gold/40 mt-4 mx-auto"
          />
          
          <p className="text-fargozi-gold text-[8px] font-bold uppercase tracking-[0.6em] mt-6 opacity-60">
            Searing a Global Narrative
          </p>
        </div>

      </div>

      {/* FULLSCREEN VIGNETTE */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,1)]" />
    </motion.div>
  );
}