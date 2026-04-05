"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isAtTop, setIsAtTop] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) { setIsAtTop(false); } 
      else { setIsAtTop(true); }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Menu", href: "/menu" },
    { name: "Stays", href: "/stays" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <AnimatePresence>
      {isAtTop && (
        <motion.div 
          initial={{ y: -120 }} animate={{ y: 0 }} exit={{ y: -120 }}
          className="fixed top-0 w-full z-50 pointer-events-auto"
        >
          {/* LIVE ALERT SYSTEM (Solves LPG/Maintenance Issue) */}
          <div className="w-full bg-fargozi-red py-2 px-6 flex justify-center items-center gap-4 overflow-hidden relative group">
            <motion.div 
              animate={{ x: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full" 
            />
            <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-white">
              System Status: <span className="opacity-80 italic">Operational • Normal Wait Time (12-15 Mins)</span>
            </p>
          </div>

          <nav className="h-24 flex items-center justify-between px-8 md:px-16 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent -z-10" />
            
            {/* LOGO */}
            <Link href="/" className="group flex items-center gap-3">
              <img 
    src="/logo.png" 
    alt="Fargozi Logo" 
    className="h-10 object-contain"
  />
              <span className="font-display text-2xl font-bold tracking-tighter uppercase">Fargozi</span>
            </Link>

            {/* LINKS */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className={`text-[10px] uppercase tracking-[0.4em] font-bold transition-all hover:text-fargozi-red ${pathname === link.href ? "text-fargozi-red" : "text-white/40"}`}>
                  {link.name}
                </Link>
              ))}
            </div>

            <Link href="/menu" className="hidden md:block text-[10px] font-bold uppercase tracking-[0.3em] bg-fargozi-red text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all">
              Pre-Order Now
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}